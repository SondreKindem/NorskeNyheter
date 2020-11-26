import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sites: [],
        tags: [],
        selectedSites: [],
        selectedTags: [],
    },
    mutations: {
        setSites(state, sites){
            state.sites = sites
        },
        setTags(state, tags){
            state.tags = tags
        },

        setSelectedSites(state, sites) {
            state.selectedSites = sites
        },
        addSelectedSite(state, id) {
            state.selectedSites.push(id)
        },
        removeSelectedSite(state, id) {
            state.selectedSites.splice(state.selectedSites.indexOf(id), 1);
        },

        setSelectedTags(state, sites) {
            state.selectedTags = sites
        },
        addSelectedTags(state, id) {
            state.selectedTags.push(id)
        },
        removeSelectedTags(state, id) {
            state.selectedTags.splice(state.selectedTags.indexOf(id), 1);
        }
    },
    actions: {
        saveState({state}) {
            window.localStorage.setItem("selectedSites", JSON.stringify(state.selectedSites))
            window.localStorage.setItem("selectedTags", JSON.stringify(state.selectedTags))
        },
        fetchSites({commit}) {
            fetch("https://sonkin.no/nyheter/api/v1/sites")
                .then((response) => response.json())
                .then((jsonData) => {
                        commit('setSites', jsonData)
                    },
                    (err) => {
                        console.log(err);
                    })
        },
        fetchTags({commit}) {
            fetch("https://sonkin.no/nyheter/api/v1/categories")
                .then((response) => response.json())
                .then((jsonData) => {
                        commit('setTags', jsonData)
                    },
                    (err) => {
                        console.log(err);
                    })
        }
    }
})
