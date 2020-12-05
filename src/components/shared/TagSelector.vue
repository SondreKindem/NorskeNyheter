<template>
  <b-taglist>
    <b-tag
        v-for="tag of tags"
        :key="tag.id"
        @click.native="toggleTag(tag.id)"
        :type="selectedTags.includes(tag.id) ? 'is-primary' : 'is-primary is-light'"
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
    },
    value: {}
  },

  data() {
    return {
      selectedTags: this.value
    }
  },

  methods: {
    toggleTag(id) {
      if (this.selectedTags.includes(id)) {
        this.selectedTags.splice(this.selectedTags.indexOf(id), 1);
      } else {
        this.selectedTags.push(id)
      }
      this.$emit("input", this.selectedTags)
    }
  },

  watch: {
    value(newVal) {
      this.selectedTags = newVal
    }
  }
}
</script>

<style scoped>
.toggle-tag:hover {
  cursor: pointer;
  background-color: lightgray !important;
  color: black;
}
</style>