<template>
  <svg viewBox="0 0 24 24">
    <path :d="renderIcon"></path>
  </svg>
</template>

<script>
import {mdiInformationOutline} from '@mdi/js';
import {mdiCompare} from '@mdi/js';
import {mdiMenu} from '@mdi/js';
import {mdiMenuUp} from '@mdi/js';
import {mdiMenuDown} from '@mdi/js';
import {mdiTextBox} from '@mdi/js';

export default {
  name: "CustomIcon",
  props: ['icon'],
  data() {
    return {
      mdiInformationOutline
    }
  },
  computed: {
    renderIcon() {
      switch (this.icon[1]) {
        case "information-outline":
          return mdiInformationOutline;
        case "compare":
          return mdiCompare;
        case "menu":
          return mdiMenu;
        case "menu-up":
          return mdiMenuUp;
        case "menu-down":
          return mdiMenuDown;
        case "text-box":
          return mdiTextBox;
        default:
          return mdiInformationOutline;
      }
    }
  }
}
</script>

<style>

</style>