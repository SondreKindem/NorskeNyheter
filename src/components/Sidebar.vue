<template>
  <section>
    <b-sidebar
        type="is-light"
        :fullheight="true"
        :overlay="true"
        :fullwidth="windowWidth < 400"
        @close="close"
        v-model="isOpen"
    >
      <div class="p-4">
        <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
        />
        <b-menu class="mb-5">
          <b-menu-list label="Innstillinger">
            <b-menu-item icon="information-outline" label="Om NN"></b-menu-item>
            <b-menu-item icon="compare">
              <template slot="label" slot-scope="props">
                Utseende
                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
              </template>

              <b-menu-item icon="account" expanded>
                <template slot="label" slot-scope="props">
                  Artikler
                  <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                </template>
                <div class="is-flex is-flex-direction-column">
                  <b-switch v-model="isOutlined" class="mb-2">Outlined</b-switch>
                  <b-switch v-model="isSquare">Square</b-switch>
                </div>
              </b-menu-item>

              <b-menu-item icon="cellphone-link">
                <template slot="label">
                  Devices
                  <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                    <b-icon icon="dots-vertical" slot="trigger"></b-icon>
                    <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                    <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                    <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
                  </b-dropdown>
                </template>
              </b-menu-item>
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
  components: {TagSelector},
  props: ['value'],
  data() {
    return {
      isOpen: this.value,
      selectedSites: this.$store.state.selectedSites,
      selectedTags: this.$store.state.selectedTags,
      isOutlined: this.$store.state.isOutlined,
      isSquare: this.$store.state.isSquare,
      windowWidth: null
    }
  },

  methods: {
    close() {
      // Only update if there was a change
      if (!isEqual(this.selectedTags, this.storeSelectedTags) || !isEqual(this.selectedSites, this.storeSelectedSites) || this.isOutlined !== this.$store.state.isOutlined || this.isSquare !== this.$store.state.isSquare) {
        // Send selected sites to store
        this.$store.commit('setSelectedSites', this.selectedSites)
        this.$store.commit('setSelectedTags', this.selectedTags)

        this.$store.commit('setOutlined', this.isOutlined)
        this.$store.commit('setSquare', this.isSquare)
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
</style>