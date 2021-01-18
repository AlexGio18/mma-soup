<template>
    <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        transition="fade-transition">
        <v-card
            :to="'/fighters/'+ fighter._id" 
            tile
            class="fighter-card ma-2"
            min-width="375"
            height="200"
        >
            <v-row no-gutters>
                <v-col class="pa-0" cols="5">
                    <v-card tile flat height="200" style="overflow-y: hidden">
                        <v-img
                            :src="fighter.image_link"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        >
                            <v-card-title class="fighter-image-title pt-0">{{ fighter.country }}</v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col class="pa-0" cols="7">
                    <v-card-title class="px-3 py-2" v-text="fighter.name"></v-card-title>
                    <v-card-text class="px-3 pt-0 py-2">
                        <v-row no-gutters>
                            <v-col class="pa-0 grey--text" cols="3">
                                HT/WT
                            </v-col>
                            <v-col class="pa-0" cols="9">
                                {{ height_ft }} / {{ fighter.weight_lbs }} lbs
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col class="pa-0 grey--text" cols="3">
                                BORN
                            </v-col>
                            <v-col class="pa-0" cols="9">
                                {{ fighter.born }} ({{ age }})
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col class="pa-0 grey--text" cols="3">
                                TEAM
                            </v-col>
                            <v-col class="pa-0" cols="9">
                                {{ fighter.association }}
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col class="pa-0 grey--text" cols="3">
                                STYLE
                            </v-col>
                            <v-col class="pa-0" cols="9">
                                {{ fighter.style }}
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col class="pa-0 grey--text" cols="3">
                                REACH
                            </v-col>
                            <v-col class="pa-0" cols="9">
                                {{ fighter.reach_inch }}"
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>

                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </v-lazy>
</template>

<script>
export default {
    name: 'FighterCard',
    props: {
        fighter: Object
    },
    data: () => ({
        isActive: false
    }),
    computed: {
        height_ft () {
            console.log(this.fighter)
            return Math.floor(this.fighter.height_inch / 12) + "' " + this.fighter.height_inch % 12 + '"'
        },
        age () {
            const born = new Date(Date.parse(this.fighter.born))
            const current_time = new Date(Date.now())

            const age = new Date(current_time - born)
            return age.getYear() - 70
        }
    }
}
</script>

<style lang="scss" scoped>
    .fighter-card .v-card__title {
        font-size: 1.1em;
    }

    .fighter-card .v-card__text {
        font-size: 0.8em;
    }

    .fighter-image-title {
        padding-bottom: 50%;
        font-size: 0.9em !important;
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>