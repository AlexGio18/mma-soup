<template>
    <div>
    <v-toolbar
      dense
      color="blue-grey darken-4"
      dark
    >
        <v-toolbar-title>MMA Soup</v-toolbar-title>


        <v-spacer></v-spacer>
    </v-toolbar>

    <v-app-bar
        app
        ref="navBar"
        dense
        fixed
        height="30"
        :style="{ top: distance+'px'}"
    >
        <div class="d-flex align-center px-12">
          <router-link class="link" to="/">Home</router-link>
        </div>
        <div class="d-flex align-center px-12">
          <router-link class="link" to="/about">About</router-link>
        </div>
    </v-app-bar>
    </div>
</template>

<script>
export default {
    data: () => ({
        distance: 48
    }),
    created () {
        window.addEventListener('scroll', this.handleScroll);
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
                this.distance = this.distance - window.scrollY
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
    }
</style>
