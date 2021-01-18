<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <h1>Heavyweight</h1>
                <v-row dense>
                    <v-col v-for="hf in heavy_fighters" :key="hf._id">
                        <FighterCard :fighter="hf"></FighterCard>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <h1>Light Heavyweight</h1>
                <v-row dense>
                    <v-col v-for="lhf in lightheavy_fighters" :key="lhf._id">
                        <FighterCard :fighter="lhf"></FighterCard>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <h1>Middleweight</h1>
                <v-row dense>
                    <v-col v-for="mf in middle_fighters" :key="mf._id">
                        <FighterCard :fighter="mf"></FighterCard>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <h1>Welterweight</h1>
                <v-row dense>
                    <v-col v-for="wf in welter_fighters" :key="wf._id">
                        <FighterCard :fighter="wf"></FighterCard>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <h1>Lightweight</h1>
                <v-row dense>
                    <v-col v-for="lf in light_fighters" :key="lf._id">
                        <FighterCard :fighter="lf"></FighterCard>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <h1>Featherweight</h1>
                <v-row dense>
                    <v-col v-for="fwf in feather_fighters" :key="fwf._id">
                        <FighterCard :fighter="fwf"></FighterCard>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <h1>Bantamweight</h1>
                <v-row dense>
                    <v-col v-for="bf in bantam_fighters" :key="bf._id">
                        <FighterCard :fighter="bf"></FighterCard>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <h1>Flyweight</h1>
                <v-row dense>
                    <v-col v-for="ff in fly_fighters" :key="ff._id">
                        <FighterCard :fighter="ff"></FighterCard>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { api } from '@/helpers/fighters'
import FighterCard from '@/components/Shared/FighterCard'

export default {
    name: 'Fighters',
    components: {
        FighterCard
    },
    data: () => ({
        heavy_fighters: [],
        lightheavy_fighters: [],
        middle_fighters: [],
        welter_fighters: [],
        light_fighters: [],
        feather_fighters: [],
        bantam_fighters: [],
        fly_fighters: []
    }),
    async mounted () {
        this.heavy_fighters = await api.get_top_10('heavyweight')
        this.lightheavy_fighters = await api.get_top_10('lightheavyweight')
        this.middle_fighters = await api.get_top_10('middleweight')
        this.welter_fighters = await api.get_top_10('welterweight')
        this.light_fighters = await api.get_top_10('lightweight')
        this.feather_fighters = await api.get_top_10('featherweight')
        this.bantam_fighters = await api.get_top_10('bantamweight')
        this.fly_fighters = await api.get_top_10('flyweight')
    }
}
</script>