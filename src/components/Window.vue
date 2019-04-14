<template>
  <div class="os-window-container">
    <div class="os-window resize-drag">
      <WindowTopbar :windowName="appName"/>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import interact from 'interactjs'
import WindowTopbar from '@/components/WindowTopbar.vue'

export default {
  name: 'Window',

  components: {
    WindowTopbar
  },

  props: {
    appName: String,
  },

  mounted: function() {
    interact('.resize-drag')
      .draggable({
        inertia: false,
        edges: { left: false, right: false, bottom: false, top: true },
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
        autoScroll: false,
        modifiers: [
          interact.modifiers.restrict({
            restriction: '.operating-system-view',
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
          })
        ]
      })
      .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: false },

        modifiers: [
          // keep the edges inside the parent
          interact.modifiers.restrictEdges({
            outer: '.operating-system-view',
            // endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
          }),

          // minimum size
          interact.modifiers.restrictSize({
            min: { width: 400, height: 320 },
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
.os-window-container {
  width: 100%;
  height: 100%;
}

.resize-drag {
  box-sizing: border-box;
  touch-action: none;
}

.os-window {
  background-color: #ffffff;
  width: 400px;
  height: 320px;
  position: absolute;
  border-radius: 5px;
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
