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
            min-width="400"
            max-width="600"
        >
            <v-row no-gutters>
                <v-col class="pa-0" cols="5">
                    <v-card tile flat height="200" style="overflow-y: hidden">
                        <v-img
                            :src="fighter.image_link"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        >
                        </v-img>
                    </v-card>
                </v-col>
                <v-col class="pa-0" cols="7">
                    <v-card-title class="px-3 py-2">
                        {{ fighter.name }}
                        <v-spacer></v-spacer>
                        <v-img
                            :lazy-src="flag"
                            :src="flag"
                            max-width="25"    
                        ></v-img>
                    </v-card-title>
                    <v-card-subtitle v-if="fighter.nickname !== ''" class="py-0">"{{ fighter.nickname }}"</v-card-subtitle>
                    <v-card-text class="px-3 pt-0 py-2" style="line-height: 1.5;">
                        <v-row no-gutters>
                            <v-col class="pa-0 grey--text" cols="3">
                                HT/WT
                            </v-col>
                            <v-col class="pa-0" cols="9">
                                {{ height_ft }} / {{ fighter.weight_lbs }} lbs
                                <br>
                                {{ fighter.height_cm.toFixed(2) }} cms / {{ fighter.weight_kgs.toFixed(2) }} kgs
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
                        <v-row v-if="fighter.style" no-gutters>
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
                </v-col>
                <v-col cols="12" class="pa-0">
                    <v-simple-table dark dense style="border-radius: 0px;">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-center">
                                        W-L-D
                                    </th>
                                    <th class="text-center">
                                        KO/TKO
                                    </th>
                                    <th class="text-center">
                                        SUB
                                    </th>
                                    <th class="text-center">
                                        DEC
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">{{ fighter.wins }}-{{ fighter.losses }}-{{ fighter.draws }}</td>
                                    <td class="text-center">{{ fighter.win_ko }}-{{ fighter.loss_ko }}</td>
                                    <td class="text-center">{{ fighter.win_subs }}-{{ fighter.loss_subs }}</td>
                                    <td class="text-center">{{ fighter.win_decs }}-{{ fighter.loss_decs }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-col>
            </v-row>
        </v-card>
    </v-lazy>
</template>

<script>
import { flag_api } from '@/helpers/flags'

export default {
    name: 'FighterCard',
    props: {
        fighter: Object
    },
    data: () => ({
        isActive: false
    }),
    computed: {
        flag () {
            return flag_api.getFlags(this.fighter.country)
             
        },
        height_ft () {
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

    .fighter-image-title {
        padding-bottom: 50%;
        font-size: 0.9em !important;
        background-color: rgba(0, 0, 0, 0.2);
    }

    .text-close {
        margin: -1px 0px;
    }
</style>