<!--suppress CssInvalidFunction -->
<template>
  <div id="app" :class="{dark: darkMode}">
    <link rel="stylesheet" href="">
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

  computed: {
    darkMode() {
      return this.$store.state.darkMode
    }
  },

  mounted() {
    this.$store.dispatch('fetchSites');
    this.$store.dispatch('fetchTags');
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

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

:root {
  --darkmode-text: #e3e3e3;
  --darkmode-background: #212529;
  --darkmode-hover: #272e32;
}

// Other app css
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 60px;
}

.title > a:hover {
  color: $primary
}

.title > a {
  color: #212529
}

// DARK-MODE STUFF

.dark .title > a {
  color: var(--darkmode-text)
}

.dark .title > a:hover {
  color: $primary
}

.dark {
  color: lightgray;
  background: var(--darkmode-background);
}

.dark svg {
  fill: var(--darkmode-text) !important;
}

.dark header {
  border-color: var(--darkmode-text) !important;
}

.dark nav {
  background-color: var(--darkmode-background);
  color: var(--darkmode-text)
}

.dark .navbar-item {
  color: var(--darkmode-text)
}

.dark .navbar-item:hover {
  background-color: var(--darkmode-hover);
}

.dark .b-sidebar .sidebar-content {
  background-color: var(--darkmode-background)!important;
}

.dark .menu-item > a {
  color: var(--darkmode-text);
}

.dark .menu-item > a:hover:not(.is-active) {
  background: var(--darkmode-hover);
}

</style>
