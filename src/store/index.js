import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sites: [],
        tags: [],
        selectedSites: JSON.parse(localStorage.getItem("selectedSites")) ?? [1, 4, 5],
        selectedTags: JSON.parse(localStorage.getItem("selectedTags")) ?? [1, 2],
    },
    mutations: {
        setSites(state, sites) {
            state.sites = sites
        },
        setTags(state, tags) {
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

        setSelectedTags(state, tags) {
            state.selectedTags = tags
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
            axios.get("https://sonkin.no/nyheter/api/v1/sites").then(
                (response) => {
                    commit('setSites', response.data)
                },
                (err) => {
                    console.log(err);
                })
        },
        fetchTags({commit}) {
            axios.get("https://sonkin.no/nyheter/api/v1/categories").then(
                (response) => {
                    commit('setTags', response.data)
                },
                (err) => {
                    console.log(err);
                })
        }
    }
})
