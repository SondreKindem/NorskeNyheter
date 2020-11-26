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
            <TagSelector :tags="tags"></TagSelector>
          </b-menu-list>

          <b-menu-list label="Sites">
            <b-menu-list>
              <div class="field" :key="site.name" v-for="site of sites">
                <b-checkbox size="is-large" v-model="selectedSites" :native-value="site.id">{{ site.name }}</b-checkbox>
              </div>
              <b-button type="is-primary" class="is-fullwidth">Save</b-button>
            </b-menu-list>
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
      selectedSites: [],
      windowWidth: null
    }
  },
  methods: {
    close() {
      this.$store.dispatch('saveState')
      this.$emit("input", false)
    },
  },
  computed: {
    sites(){
      return this.$store.state.sites
    },
    tags(){
      return this.$store.state.tags
    }
  },
  watch: {
    value: function (newVal) {
      this.isOpen = newVal;
    }
  },
  mounted() {
    // TODO: is eventlistener on resize viable?
    this.windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    })
  }
}
</script>

<style scoped>

</style>