<template>
    <div>
    <v-toolbar
      color="blue-grey darken-4"
      dark
      dense
    >
        <v-toolbar-title>MMA Soup</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-flex class="mt-2 relative" fill-height>
            <v-card>
            <v-autocomplete
                ref="searchInput"
                v-model="searchModel"
                :items="fighters"
                :search-input.sync="search"
                :loading="isLoading"
                dense
                flat
                solo
                hide-no-data
                append-icon="mdi-magnify"
                label="Search..."
                class="input-radius"
            >
            </v-autocomplete>
            </v-card>
        </v-flex>
    </v-toolbar>

    <v-app-bar
        app
        ref="navBar"
        dense
        fixed
        height="30"
        :style="{ top: distance+'px'}"
    >
        <div class="d-flex align-center">
          <router-link class="link px-12" to="/">Home</router-link>
        </div>
        <div class="d-flex align-center">
          <router-link class="link px-12" to="/about">About</router-link>
        </div>
    </v-app-bar>
    </div>
</template>

<script>
import { api } from '@/helpers/fighters'

export default {
    data: () => ({
        distance: 48,
        searchModel: null,
        isLoading: false,
        search: '',
        fighters: []
    }),
    created () {
        window.addEventListener('scroll', this.handleScroll);
        this.distance = 48 - window.scrollY
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            if (window.scrollY > 48) {
                this.distance = 0
            } else if (window.scrollY === 0) {
                this.distance = 48
            } else {
                this.distance = 48 - window.scrollY
            }
        }
     },
     watch: {
         search (val) {
            console.log(val)
            if (val !== null && val.length > 2) {
                this.isLoading = true
                api.searchfighter(val).then( res => {
                    this.isLoading = false
                    console.log(res)
                })
            }
            
         }
     }
}
</script>

<style lang="scss" scoped>
    .link {
        text-decoration: none;
        font-weight: bold;
        font-size: 0.9em;
        color: #777;
        border-radius: 4px;
    }

    .link:hover {
        background-color: rgb(225, 225, 225);
    }

    .input-radius {
        border-radius: 25px;
    }
</style>
