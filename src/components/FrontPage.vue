<template>
  <div>
    <h3 v-if="$store.state.selectedSites.length <= 0" id="no-sites-warn" class="is-size-3">No sites selected</h3>
    <bricks
        ref="bricks"
        :data="data"
        :sizes="sizes"
        :offset="300"
        @reach="fetchData(false)"
    >
      <template slot-scope="scope">
        <div class="card article">
          <div class="card-content">
            <h4 class="title" :style="scope.item.style">{{ scope.item.title }}</h4>
            <img v-if="scope.item.image" @load="imgLoaded" class="card-image" :src="scope.item.image"
                 :alt="scope.item.title">
            <p class="is-6 subtitle ">{{ scope.item.date }}</p>
            <p>{{ scope.item.site }}</p>
            <p>{{ scope.item.category }}</p>
            <p class="content" v-html="scope.item.text"></p>
          </div>
        </div>
      </template>
    </bricks>
  </div>
</template>

<script>
import Bricks from 'vue-bricks'

export default {
  name: "FrontPage",
  components: {
    Bricks
  },
  data() {
    return {
      page: 1,
      loading: true,
      data: [],
      sizes: [
        {columns: 1, gutter: 10},
        {mq: '414px', columns: 1, gutter: 10},
        {mq: '860px', columns: 2, gutter: 30},
        {mq: '1260px', columns: 3, gutter: 15},
        {mq: '1320px', columns: 3, gutter: 30},
        {mq: '1680px', columns: 4, gutter: 15},
        {mq: '1730px', columns: 4, gutter: 30},
        {mq: '2200px', columns: 5, gutter: 30}
      ]
    }
  },
  methods: {
    async refresh() {
      document.documentElement.scrollTop = 0
      await this.fetchData(true)
      this.$nextTick(() => this.$refs.bricks.pack())
    },

    fetchData(isReset) {
      return new Promise(resolve => {
        this.loading = true

        if (isReset) {
          this.page = 1;
          window.scrollTo(0, 0);
        } else {
          this.page++;
        }

        fetch(`https://sonkin.no/nyheter/api/v1/articles?limit=15&sites=${this.selectedSites.join()}&page=${this.page}&categories=${this.selectedTags.join()}`)
            .then((response) => response.json())
            .then((jsonData) => {
                  const data = jsonData.data;
                  console.log(data);
                  if (isReset) {
                    this.data = data
                  } else {
                    this.data.push(...data)
                  }
                  resolve(data)
                  this.done()
                },
                (err) => {
                  console.log(err)
                  this.done()
                })
      })
    },

    done() {
      this.loading = false
      // this.$refs.bricks.pack()
    },

    imgLoaded() {
      // TODO: this might be very taxing when there are more articles
      this.$nextTick(() => this.$refs.bricks.resize().pack())
    }
  },

  computed: {
    selectedSites() {
      return this.$store.state.selectedSites
    },
    selectedTags() {
      return this.$store.state.selectedTags
    },
    selectedSitesAndTags() {
      // Hack for watching both tags and selectedSites TODO: do by sending event from parent, or by using vue3 to watch multiple
      return [this.$store.state.selectedTags, this.$store.state.selectedSites]
    }
  },

  watch: {
    selectedSitesAndTags: {
      handler: function () {
        // If the selected sites change, get new articles
        this.fetchData(true)
      },
      deep: true,
      immediate: true
    },
  },

  created() {
    this.fetchData(true)
  }
}
</script>

<style scoped>
.article {
  width: 400px;
}

#no-sites-warn {
  text-align: center;
}

@media only screen and (max-width: 414px) {
  .article {
    width: 300px;
  }
}


</style>