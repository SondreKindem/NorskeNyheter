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
        isOutlined: JSON.parse(localStorage.getItem("isOutlined")) ?? false,
        isSquare: JSON.parse(localStorage.getItem("isSquare")) ?? false,
        darkMode: JSON.parse(localStorage.getItem("darkMode")) ?? false,
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
        },

        setOutlined(state, isOutlined) {
            state.isOutlined = isOutlined
        },
        setSquare(state, isSquare) {
            state.isSquare = isSquare
        },
        setDarkMode(state, darkMode) {
            state.darkMode = darkMode
        }
    },
    actions: {
        saveState({state}) {
            localStorage.setItem("selectedSites", JSON.stringify(state.selectedSites))
            localStorage.setItem("selectedTags", JSON.stringify(state.selectedTags))
            localStorage.setItem("isOutlined", JSON.stringify(state.isOutlined))
            localStorage.setItem("isSquare", JSON.stringify(state.isSquare))
            localStorage.setItem("darkMode", JSON.stringify(state.darkMode))
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
