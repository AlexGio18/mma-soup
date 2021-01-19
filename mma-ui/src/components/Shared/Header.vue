<template>
    <div>
    <v-app-bar
        app
        color="blue-grey darken-4"
        dark
        dense
        absolute
        flat
        width="100%"
        style="z-index: 10"
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
                    hide-details
                    hide-selected
                    append-icon="mdi-magnify"
                    label="Search..."
                    class="input-radius"
                >
                </v-autocomplete>
                <v-divider></v-divider>
                <v-expand-transition>
                    <v-list v-if="fighters.length > 0">
                        <v-list-item
                            v-for="(f, i) in fighters"
                            :key="i"
                            :href="'/fighters/'+ f._id"
                        >
                        <v-list-item-avatar>
                            <v-img :src="f.image_link"></v-img>
                        </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title> {{ f.name }} </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-expand-transition>
            </v-card>
        </v-flex>
    </v-app-bar>

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
          <router-link class="link px-12" to="/add/fighter">Add Fighter</router-link>
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
            if (val === null) { 
                this.fighters = []
                return 
            }

            if (val.length > 2) {
                this.isLoading = true
                api.searchfighter(val).then( res => {
                    if (Array.isArray(res)) {
                        this.fighters = res
                    } else {
                        this.fighters = []
                    }
                })
                .finally(() => (this.isLoading = false))
            }
        }
     }
}
</script>

<style lang="scss" scoped>
    .v-text-field__details {
        display: none;
    }

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
