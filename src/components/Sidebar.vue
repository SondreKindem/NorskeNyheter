<template>
  <section>
    <b-sidebar
        :fullheight="true"
        :overlay="true"
        :fullwidth="windowWidth < 400"
        @close="close"
        v-model="isOpen"
    >
      <div class="p-4" :class="{dark: storeDarkMode}">
        <h1 id="sidebar-title" style="fill: lightgray">
          <svg style="height: 1em" viewBox="0 0 92.59 26.47">
            <g aria-label="Norske Nyheter"
               transform="translate(-88.7 -157.11) scale(2.9595)">
              <path
                  d="M31.03 58.25l.05-.15a.33.33 0 01-.14-.23.4.4 0 01.05-.17c.03-.05.07-.1.12-.13a.35.35 0 01.17-.05h.3v1.73c-.2 0-.37.02-.55.07-.29.09-.55.25-.74.48-.2.24-.33.56-.32.89A1.35 1.35 0 0031.55 62l.05-.2a.65.65 0 01-.37-.07.58.58 0 01-.28-.25.77.77 0 01-.06-.22c0-.09.01-.16.04-.23a.41.41 0 01.15-.18.43.43 0 01.21-.1.77.77 0 01.47.05c.21.09.4.23.55.38l1.36-1.5-.14-.16-.36.4a2.31 2.31 0 00-1.26-.65l-.04-.01v-4.21l.09.13.36.63 3.18 5.37h.4v-6.22c.17 0 .33-.04.48-.1.2-.07.38-.18.53-.33.17-.17.29-.4.33-.64.04-.24 0-.5-.12-.72h-.14a.58.58 0 01-.15.34.58.58 0 01-.3.2.74.74 0 01-.41 0c-.13-.05-.26-.11-.36-.19-.1-.07-.17-.16-.24-.24l-.22-.01L34 54.8l.14.16.4-.45a1.86 1.86 0 001.1.47c.02.58.02 1.17.02 1.75a46.8 46.8 0 01-.05 1.73l-2.55-4.25c-.14-.2-.26-.42-.41-.6-.15-.18-.34-.31-.55-.37a1.26 1.26 0 00-.84.03c-.26.1-.49.3-.64.54-.2.3-.26.7-.18 1.06l.2.04c0-.07.03-.13.05-.2.03-.08.07-.15.13-.22s.12-.11.2-.13c.1-.02.2-.01.28.04.09.04.16.1.23.18 0 .02.03.04.05.06v1.43c-.13 0-.27.02-.38.05a1.2 1.2 0 00-.91 1.24c.02.2.1.4.23.56.14.16.32.28.5.33zM38.88 59.58v-3.04l1.22.8v3.05zm-1.73.9l.45-.35 1.48 1.07 2.34-1.42v-2.9l-1.52-1.16-2.39 1.37v2.73l-.53.43zM45.27 59.87l-.57.4-.42-.34v-3.12c.16.15.33.27.52.34.12.05.26.1.39.1.14 0 .27-.02.4-.08.16-.07.29-.2.38-.34a2.38 2.38 0 00.3-1.07h-.3a.55.55 0 01-.22.2.63.63 0 01-.29.07.55.55 0 01-.45-.27h-.1l-.75.85-.77-.83-1.42.96.15.2.4-.25.36.45v2.8l-.67.45.16.2.35-.25 1.17.9 1.58-1.14zM50.45 55.8h-.3a.52.52 0 01-.19.33.6.6 0 01-.33.11.94.94 0 01-.35-.07 1.03 1.03 0 01-.43-.4l-2.2 1.27v1.49l.81.63-.26.26c-.29.28-.56.59-.69.97-.07.26-.07.55.03.8.1.26.32.46.57.56l.11-.28a.31.31 0 01-.14-.15.35.35 0 01.01-.23.33.33 0 01.14-.18c.1-.07.2-.1.32-.1.1 0 .21.02.32.07.2.07.38.23.48.42l2.09-1.27v-1.6l-.91-.67.33-.32a3.2 3.2 0 00.6-1.64zm-1.96 2.85l.58.48v1.38a1.36 1.36 0 00-1.33-.82c-.23.02-.46.1-.64.24a8.54 8.54 0 011-.95zm-.03-.36l-.44-.45v-1.38a1.25 1.25 0 001.69.67l-.1.13c-.1.13-.24.25-.37.36zM53.14 59.93V53.1h-.2L51.2 54.3v.15l.24.1c.08.04.14.1.2.16l.05.14c.02.06.02.11.02.16v4.82l-.71.45.15.21.4-.25 1.12.96 1.31-.92-.14-.2-.31.26zm3.7.06l-.45.3-2.09-3.1.1-.2c.15.14.33.25.54.3a1.13 1.13 0 001.33-.53c.1-.15.17-.32.22-.49.04-.15.08-.3.1-.44h-.2a.79.79 0 01-1.08.3.88.88 0 01-.3-.3h-.1l-1.57 2.43 2.08 3.04 1.62-1.06z"/>
              <path
                  d="M57.03 60.52l.47-.38 1.57 1.16 2.18-1.77-.15-.25-1.17.9-1.27-.86v-.45l2.29-1.42v-.06l-1.07-1.61-2.53 1.3v2.8l-.5.4zm1.63-1.9V56.7l.2-.12.92 1.32z"/>
            </g>
          </svg>
          <svg style="height: 1em" viewBox="0 0 103.42 29.75">
            <g aria-label="Norske Nyheter"
               transform="translate(-190.73 -157.11) scale(2.9595)">
              <path
                  d="M65.5 58.25l.06-.15a.33.33 0 01-.14-.23.4.4 0 01.05-.17c.03-.05.07-.1.12-.13a.35.35 0 01.17-.05h.3v1.73c-.2 0-.37.02-.55.07-.29.09-.55.25-.74.48-.2.24-.33.56-.32.89A1.35 1.35 0 0066.03 62l.05-.2a.65.65 0 01-.37-.07.58.58 0 01-.28-.25.77.77 0 01-.06-.22c0-.09.01-.16.04-.23a.41.41 0 01.15-.18.43.43 0 01.21-.1.77.77 0 01.47.05c.21.09.4.23.55.38l1.36-1.5-.14-.16-.36.4a2.31 2.31 0 00-1.26-.65l-.04-.01v-4.21l.09.13.36.63 3.18 5.37h.4v-6.22c.17 0 .33-.04.48-.1.2-.07.38-.18.53-.33.17-.17.29-.4.33-.64.04-.24 0-.5-.12-.72h-.14a.58.58 0 01-.15.34.58.58 0 01-.3.2.74.74 0 01-.41 0c-.13-.05-.26-.11-.36-.19-.1-.07-.17-.16-.24-.24l-.22-.01-1.3 1.52.14.16.4-.45a1.86 1.86 0 001.1.47c.02.58.02 1.17.02 1.75a46.8 46.8 0 01-.05 1.73l-2.55-4.25c-.14-.2-.26-.42-.41-.6s-.34-.31-.55-.37a1.26 1.26 0 00-.84.03c-.26.1-.49.3-.64.54-.2.3-.26.7-.18 1.06l.2.04c0-.07.03-.13.05-.2a.87.87 0 01.13-.22.43.43 0 01.2-.13c.1-.02.2-.01.28.04.09.04.16.1.23.18 0 .02.03.04.05.06v1.43c-.13 0-.27.02-.38.05a1.2 1.2 0 00-.91 1.24c.02.2.1.4.23.56.14.16.32.28.5.33zM76.22 56.94v2.8c0 .13 0 .27.02.4s.06.28.13.4c.04.1.1.19.12.28.03.1.03.21 0 .32a.5.5 0 01-.17.28c-.07.07-.17.12-.26.18-.1.04-.18.1-.27.15l-1.95 1.4a1.32 1.32 0 00-1.89-.33l-.15-.1a1.84 1.84 0 011.62-1.17c.51 0 1.02.2 1.37.56a.4.4 0 00.21-.08.4.4 0 00.14-.18.54.54 0 00.04-.23c-.01-.08-.02-.16-.05-.24l-.2-.43c-.05-.13-.09-.26-.1-.41v-.02l-1 .68-1.52-1.06v-2.97l-.39-.46-.42.26-.16-.2 1.43-.97.8.97v2.7l1.24.78v-.14l-.01-2.94-.57-.68 1.02-.7zM79.2 59.93v-2.61l.57-.55.64.53v2.53a4 4 0 01-.15 1.28 1.7 1.7 0 01-.4.68c-.17.15-.4.27-.62.32v.26a2.24 2.24 0 002.19-.98c.14-.24.24-.51.3-.8.04-.29.04-.57.04-.86v-2.76l.46-.37-.18-.23-.42.34-1.13-.94-1.3 1.24V53.1H79l-1.73 1.21v.15l.24.1a.41.41 0 01.24.3c.02.06.02.11.02.16v4.82l-.72.45.2.25.4-.26 1.09.93 1.3-.92-.18-.23-.33.22zM82.65 60.52l.47-.38 1.58 1.16 2.18-1.77-.16-.25-1.17.9-1.27-.86v-.45l2.29-1.42v-.06l-1.07-1.61-2.53 1.3v2.8l-.5.4zm1.63-1.9V56.7l.2-.12.92 1.32zM89.34 59.93v-3.28h.76l.5-.58h-1.26v-1.22h-.2l-1.73 1.74v.15c.09 0 .17 0 .25.05.07.03.15.09.19.15l.06.15.01.16v2.58l-.7.45.15.21.4-.25 1.12.96 1.46-.76-.15-.2-.36.2zM90.65 60.52l.47-.38 1.58 1.16 2.18-1.77-.16-.25-1.17.9-1.27-.86v-.45l2.29-1.42v-.06l-1.07-1.61-2.53 1.3v2.8l-.5.4zm1.63-1.9V56.7l.2-.12.93 1.32zM98.39 59.87l-.57.4-.42-.34v-3.12c.15.15.32.27.51.34.13.05.27.1.4.1s.27-.02.4-.08c.16-.07.28-.2.38-.34a2.38 2.38 0 00.3-1.07h-.31a.55.55 0 01-.21.2.63.63 0 01-.29.07.55.55 0 01-.45-.27h-.11l-.74.85-.77-.83-1.42.96.15.2.4-.25.36.45v2.8l-.67.45.16.2.35-.25 1.16.9 1.6-1.14z"/>
            </g>
          </svg>
        </h1>
        <b-menu class="mb-5">
          <b-menu-list label="Innstillinger">
            <b-menu-item icon="information-outline" label="Om NN" class="menu-item"></b-menu-item>

            <b-menu-item icon="compare" class="menu-item">
              <template slot="label" slot-scope="props">
                Utseende
                <b-icon v-show="props.expanded" class="is-pulled-right" icon="menu-down"></b-icon>
                <b-icon v-show="!props.expanded" class="is-pulled-right" icon="menu-up"></b-icon>
              </template>

              <b-menu-item icon="text-box" expanded class="menu-item">
                <template slot="label" slot-scope="props">
                  Artikler
                  <b-icon v-show="props.expanded" class="is-pulled-right" icon="menu-down"></b-icon>
                  <b-icon v-show="!props.expanded" class="is-pulled-right" icon="menu-up"></b-icon>
                </template>
                <div class="is-flex is-flex-direction-column">
                  <b-switch :rounded="false" v-model="isOutlined" class="mb-2">Outlined</b-switch>
                  <b-switch :rounded="false" v-model="isSquare">Square</b-switch>
                </div>
              </b-menu-item>

              <b-switch :rounded="false" v-model="darkMode" class="mt-2 mb-2">Nattmodus</b-switch>

            </b-menu-item>
          </b-menu-list>

          <b-menu-list label="Kategorier">
            <p class="has-text-grey has-text-weight-light light mb-4 is-size-6">
              Det er ikke alle sider som har gode systemer for kategorier, så nøyaktigheten kan variere.
            </p>
            <TagSelector :tags="tags" v-model="selectedTags"></TagSelector>
          </b-menu-list>

          <b-menu-list label="Aviser">
            <div class="field" :key="site.name" v-for="site of sites">
              <b-checkbox size="is-large" v-model="selectedSites" :native-value="site.id">{{ site.name }}</b-checkbox>
            </div>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </section>
</template>

<script>
import TagSelector from "@/components/shared/TagSelector";
import {isEqual} from "lodash-es";

export default {
  name: "Sidebar",
  // eslint-disable-next-line vue/no-unused-components
  components: {TagSelector},
  props: ['value'],
  data() {
    return {
      isOpen: this.value,
      selectedSites: this.$store.state.selectedSites,
      selectedTags: this.$store.state.selectedTags,
      isOutlined: this.$store.state.isOutlined,
      isSquare: this.$store.state.isSquare,
      darkMode: this.$store.state.darkMode,
      windowWidth: null,
    }
  },

  methods: {
    close() {
      // Only update if there was a change
      if (!isEqual(this.selectedTags, this.storeSelectedTags) || !isEqual(this.selectedSites, this.storeSelectedSites) || this.isOutlined !== this.$store.state.isOutlined || this.isSquare !== this.$store.state.isSquare || this.darkMode !== this.$store.state.darkMode) {
        // Send selected sites to store
        this.$store.commit('setSelectedSites', this.selectedSites)
        this.$store.commit('setSelectedTags', this.selectedTags)

        this.$store.commit('setOutlined', this.isOutlined)
        this.$store.commit('setSquare', this.isSquare)
        this.$store.commit('setDarkMode', this.darkMode)
        // Make sure store state is saved
        this.$store.dispatch('saveState')
      }

      // Notify parent sidebar closed
      this.$emit("input", false)
    }
  },

  computed: {
    sites() {
      return this.$store.state.sites
    },
    tags() {
      return this.$store.state.tags
    },
    storeSelectedSites() {
      return this.$store.state.selectedSites
    },
    storeSelectedTags() {
      return this.$store.state.selectedTags
    },
    storeIsOutlined() {
      return this.$store.state.isOutlined
    },
    storeDarkMode() {
      return this.$store.state.darkMode
    }
  },

  watch: {
    value: function (newVal) {
      this.isOpen = newVal;
    },
    storeSelectedSites(newVal) {
      this.selectedSites = newVal
    },
    storeSelectedTags(newVal) {
      this.selectedTags = [...newVal]
    }
  },

  mounted() {
    // TODO: is eventlistener on resize viable?
    // Change windowWidth on resize, so we can set the sidebar to be fullwidth on small screens
    this.windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    })
  }
}
</script>

<style scoped>
.menu-label {
  font-size: 1em;
  margin: .8em 0;
}

#sidebar-title {
  font-size: 5em;
}

#sidebar-title > svg {
  fill: #212529;
  color: #212529;
}

.dark #sidebar-title > svg {
  fill: var(--darkmode-text);
  color: var(--darkmode-text);
}

.dark .b-checkbox:hover {
  color: white;
}

</style>