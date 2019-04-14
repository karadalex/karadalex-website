<template>
  <div class="browser resize-drag">
    <iframe :src="'/#/'+app"></iframe>
  </div>
</template>

<script>
import interact from 'interactjs'

export default {
  name: 'Browser',

  props: {
    app: String,
  },

  mounted: function() {
    interact('.resize-drag')
      .draggable({
        onmove: function (event) {
          var target = event.target,
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

          // translate the element
          target.style.webkitTransform =
          target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

          // update the posiion attributes
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        },
        modifiers: [
          interact.modifiers.restrict({
            restriction: 'parent',
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
          })
        ]
      })
      .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: true },

        modifiers: [
          // keep the edges inside the parent
          interact.modifiers.restrictEdges({
            outer: 'parent',
            endOnly: true,
          }),

          // minimum size
          interact.modifiers.restrictSize({
            min: { width: 100, height: 50 },
          }),
        ],

        inertia: true
      })
      .on('resizemove', function (event) {
        var target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0),
            y = (parseFloat(target.getAttribute('data-y')) || 0);

        // update the element's style
        target.style.width  = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.webkitTransform = target.style.transform =
            'translate(' + x + 'px,' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
        // target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);
      });
  }
};
</script>


<style lang="scss" scoped>
.resize-drag {
  box-sizing: border-box;
}

.browser {
  background-color: #ffffff;
  width: 400px;
  height: 320px;
  position: absolute;
  // Initial position of browser window
  top: 10vh;
  left: 20vw;

  iframe {
    border: none;
    width: 90%;
    height: 90%;
  }
}
</style>
