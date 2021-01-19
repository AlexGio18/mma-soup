<template>
    <v-expansion-panels accordion flat>
        <v-expansion-panel>
            <v-expansion-panel-header>ADD FIGHTER</v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-container>
                    <form>
                        <v-row no-gutters>
                            <v-col :cols="info.cols" class="px-6" v-for="info in fighterForm" :key="info.label">
                                <v-text-field
                                    v-model="info.value"
                                    :label="info.label"
                                    dense
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-btn
                                    class="mr-4"
                                    @click="submit"
                                    >
                                    submit
                                    </v-btn>
                                    <v-btn @click="clear">
                                    clear
                                </v-btn>
                            </v-col>
                        </v-row>
                    </form>
                </v-container>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { api } from '@/helpers/fighters'
// import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    data: () => ({
        fighterForm: {
            name: { label: 'Name', value: '', cols: '6' },
            nickname: { label: 'Nickname', value: '', cols: '6' },
            association: { label: 'Association', value: '', cols: '6' },
            address: { label: 'City, State', value: '', cols: '6' },
            country: { label: 'Nationality', value: '', cols: '6' },
            organization: { label: 'Organization', value: '', cols: '6' },
            image_link: { label: 'Image', value: '', cols: '6' },
            style: { label: 'Style', value: '', cols: '6' },
            weight_class: {label: 'Division', value: '', cols: '6' },
            height_inch: { label: 'Height (Inches)', value: '', cols: '2' },
            height_cm: { label: 'Height (cm)', value: '', cols: '2' },
            weight_lbs: { label: 'Weight (lbs)', value: '', cols: '2' },
            weight_kgs: { label: 'Weight (kgs)', value: '', cols: '2' },
            reach_inch: { label: 'Reach (Inches)', value: '', cols: '2' },
            wins: { label: 'Wins', value: '', cols: '2' },
            losses: { label: 'Losses', value: '', cols: '2' },
            draws: { label: 'Draws', value: '', cols: '2' },
            win_decs: { label: 'Wins (decision)', value: '', cols: '2' },
            win_ko: { label: 'Wins (KO/TKO', value: '', cols: '2' },
            win_subs: { label: 'Wins (submission)', value: '', cols: '2' },
            win_others: { label: 'Wins (Other)', value: '', cols: '2' },
            loss_decs: { label: 'Losses (Decision)', value: '', cols: '2' },
            loss_ko: { label: 'Losses (KO/TKO)', value: '', cols: '2' },
            loss_subs: { label: 'Losses (submission)', value: '', cols: '2' },
            loss_others: { label: 'Losses (other)', value: '', cols: '2' },
            ranking: { label: 'Ranking', value: '', cols: '2' }
        }
    }),
    methods: {
        async submit () {
           const new_fighter = await api.createfighter(this.fighterForm)
           console.log(new_fighter)
        },
        clear () {
            // this.$v.$reset()
            // this.name = ''
            // this.email = ''
            // this.select = null
            // this.checkbox = false
        }
    }
}
</script>
