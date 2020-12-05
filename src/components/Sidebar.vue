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
      <div class="p-1">
        <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
        />
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item icon="information-outline" label="About"></b-menu-item>
            <b-menu-item icon="compare">
              <template slot="label" slot-scope="props">
                Theme
                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
              </template>
              <b-menu-item icon="account" label="Users"></b-menu-item>
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
              <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
            </b-menu-item>
          </b-menu-list>

          <b-menu-list label="Categories">
            <TagSelector :tags="tags" v-model="selectedTags"></TagSelector>
          </b-menu-list>

          <b-menu-list label="Sites">
            <div class="field" :key="site.name" v-for="site of sites">
              <b-checkbox size="is-large" v-model="selectedSites" :native-value="site.id">{{ site.name }}</b-checkbox>
            </div>
            <b-button type="is-primary" class="is-fullwidth">Save</b-button>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </section>
</template>

<script>
import TagSelector from "@/components/shared/TagSelector";

export default {
  name: "Sidebar",
  components: {TagSelector},
  props: ['value'],
  data() {
    return {
      isOpen: this.value,
      selectedSites: this.storeSelectedSites,
      selectedTags: this.storeSelectedTags,
      windowWidth: null
    }
  },

  methods: {
    close() {
      // Send selected sites to store
      this.$store.commit('setSelectedSites', this.selectedSites)
      this.$store.commit('setSelectedTags', this.selectedTags)
      // Make sure store state is saved
      this.$store.dispatch('saveState')
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

</style>