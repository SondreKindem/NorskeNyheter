<!--suppress CssInvalidFunction -->
<template>
  <div id="app">
    <Sidebar v-model="sidebarOpen"/>

    <FrontPage/>

    <b-navbar fixed-bottom>
      <template slot="brand">
        <b-navbar-item @click="openSidebar">
          <b-icon icon="menu"></b-icon>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">
          Home
        </b-navbar-item>
        <b-navbar-item href="#">
          Documentation
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
import FrontPage from "@/components/FrontPage";
import Sidebar from "@/components/Sidebar";

export default {
  name: 'App',
  components: {
    FrontPage,
    Sidebar
  },
  data() {
    return {
      sidebarOpen: false
    }
  },
  methods: {
    openSidebar() {
      console.log("open")
      this.sidebarOpen = true;
    },
  },
  mounted() {
    this.$store.dispatch('fetchSites');
    this.$store.dispatch('fetchTags');

    this.$store.commit('setSelectedTags', [1, 2, 3, 4])
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-light: findLightColor($primary);
$primary-dark: findDarkColor($primary);
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Lists and maps
$custom-colors: null !default;
$custom-shades: null !default;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: mergeColorMaps(
        (
            "white": (
                $white,
                $black,
            ),
            "black": (
                $black,
                $white,
            ),
            "light": (
                $light,
                $light-invert,
            ),
            "dark": (
                $dark,
                $dark-invert,
            ),
            "primary": (
                $primary,
                $primary-invert,
                $primary-light,
                $primary-dark,
            ),
            "link": (
                $link,
                $link-invert,
                $link-light,
                $link-dark,
            ),
            "info": (
                $info,
                $info-invert,
                $info-light,
                $info-dark,
            ),
            "success": (
                $success,
                $success-invert,
                $success-light,
                $success-dark,
            ),
            "warning": (
                $warning,
                $warning-invert,
                $warning-light,
                $warning-dark,
            ),
            "danger": (
                $danger,
                $danger-invert,
                $danger-light,
                $danger-dark,
            ),
        ),
        $custom-colors
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Component customization
$sidebar-width: 350px;

// Other app css
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
