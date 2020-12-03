<template>
  <b-taglist>
    <b-tag
        v-for="tag of tags"
        :key="tag.id"
        @click.native="toggleTag(tag.id)"
        :type="selTags.includes(tag.id) ? 'is-primary' : 'is-primary is-light'"
        class="toggle-tag is-rounded is-small"
    >
      {{ tag.name }}
    </b-tag>
  </b-taglist>
</template>

<script>
export default {
  name: "TagSelector",

  props: {
    tags: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
    }
  },

  methods: {
    toggleTag(id) {
      if (this.selTags.includes(id)) {
        this.$store.commit('removeSelectedTags', id)
      } else {
        this.$store.commit('addSelectedTags', id)
      }
    }
  },

  computed: {
    selTags() {
      return this.$store.state.selectedTags ?? []
    }
  },
}
</script>

<style scoped>
.toggle-tag:hover {
  cursor: pointer;
  background-color: lightgray !important;
}
</style>