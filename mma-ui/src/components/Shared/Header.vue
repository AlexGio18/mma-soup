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
            <v-text-field
                ref="searchInput"
                v-model="search"
                dense
                flat
                solo
                append-icon="mdi-magnify"
                label="Search..."
                class="input-radius"
            >
            </v-text-field>
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
export default {
    data: () => ({
        distance: 48,
        search: ''
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
</style>
