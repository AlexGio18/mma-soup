<template>
    <v-expansion-panels accordion flat>
        <v-expansion-panel>
            <v-expansion-panel-header>UPDATE FIGHTER</v-expansion-panel-header>
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
                            </v-col>
                        </v-row>
                    </form>
                </v-container>
            </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-header>UPLOAD FIGHTER JSON</v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-container>
                    <v-row no-gutters>
                        <v-col cols="12">
                            <v-file-input
                                v-model="files"
                                label="File input"
                                multiple
                                prepend-icon="mdi-paperclip"
                            >
                                <template v-slot:selection="{ text }">
                                    <v-chip
                                        small
                                        label
                                        color="primary"
                                    >
                                        {{ text }}
                                    </v-chip>
                                </template>
                            </v-file-input>
                        </v-col>
                        <v-col cols="12">
                            <v-btn
                                class="mr-4"
                                @click="submitJson"
                                >
                                SUBMIT
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { api } from '@/helpers/fighters'
import UploadFilesService from '@/services/uploadFilesService'
// import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
    props: {
        fighter: Object,
    },
    mixins: [validationMixin],
    data: () => ({
        currentFile: undefined,
        files: [],
        readers: [],
        progres: 0,
        fighter_json: {},
        fighterForm: {
            name: { label: 'Name', value: '' },
            nickname: { label: 'Nickname', value: '' },
            association: { label: 'Association', value: '' },
            address: { label: 'City, State', value: '' },
            country: { label: 'Nationality', value: '' },
            organization: { label: 'Organization', value: '' },
            image_link: { label: 'Image', value: '' },
            style: { label: 'Style', value: '' },
            weight_class: {label: 'Division', value: '' },
            height_inch: { label: 'Height (Inches)', value: 0 },
            height_cm: { label: 'Height (cm)', value: 0 },
            weight_lbs: { label: 'Weight (lbs)', value: 0 },
            weight_kgs: { label: 'Weight (kgs)', value: 0 },
            reach_inch: { label: 'Reach (Inches)', value: 0 },
            wins: { label: 'Wins', value: 0 },
            losses: { label: 'Losses', value: 0 },
            draws: { label: 'Draws', value: 0 },
            win_decs: { label: 'Wins (decision)', value: 0 },
            win_ko: { label: 'Wins (KO/TKO', value: 0 },
            win_subs: { label: 'Wins (submission)', value: 0 },
            win_others: { label: 'Wins (Other)', value: 0 },
            loss_decs: { label: 'Losses (Decision)', value: 0 },
            loss_ko: { label: 'Losses (KO/TKO)', value: 0 },
            loss_subs: { label: 'Losses (submission)', value: 0 },
            loss_others: { label: 'Losses (other)', value: 0 }
        }
    }),
    methods: {
        async submit () {
            const new_fighter = await api.updatefighter(this.fighter._id, this.fighterForm)
            console.log(new_fighter)
        },
        selectFile (file) {
            this.progress = 0;
            this.currentFile = file;
        },
        uploadJsonFile () {
            if (!this.currentFile) {
                return;
            }

            UploadFilesService.upload(this.currentFile, (event) => {
                this.progress = Math.round((100 * event.loaded) / event.total);
            })
            .then((response) => {
                console.log(response)
            })
        },
        submitJson () {
            console.log(this.files)
            this.files.forEach((file, f) => {
                this.readers[f] = new FileReader()
                console.log(this.readers[f])
                this.readers[f].onload = (e) => {
                    console.log(e.target.result)   
                    //const fileText = reader.readAsText(file) 
                    //  console.log(fileText)
                }
           })
        },
        clear () {
            // this.$v.$reset()
            // this.name = ''
            // this.email = ''
            // this.select = null
            // this.checkbox = false
        },
        loadForm () {
            this.fighterForm = {
                name: { label: 'Name', value: this.fighter.name, cols: '6' },
                nickname: { label: 'Nickname', value: this.fighter.nickname, cols: '6' },
                association: { label: 'Association', value: this.fighter.association, cols: '6' },
                address: { label: 'City, State', value: this.fighter.address, cols: '6' },
                country: { label: 'Nationality', value: this.fighter.country, cols: '6' },
                organization: { label: 'Organization', value: this.fighter.organization, cols: '6' },
                image_link: { label: 'Image', value: this.fighter.image_link, cols: '6' },
                style: { label: 'Style', value: this.fighter.style, cols: '6' },
                weight_class: {label: 'Division', value: this.fighter.weight_class, cols: '6' },
                height_inch: { label: 'Height (Inches)', value: this.fighter.height_inch, cols: '2' },
                height_cm: { label: 'Height (cm)', value: this.fighter.height_cm, cols: '2' },
                weight_lbs: { label: 'Weight (lbs)', value: this.fighter.weight_lbs, cols: '2' },
                weight_kgs: { label: 'Weight (kgs)', value: this.fighter.weight_kgs, cols: '2' },
                reach_inch: { label: 'Reach (Inches)', value: this.fighter.reach_inch, cols: '2' },
                wins: { label: 'Wins', value: this.fighter.wins, cols: '2' },
                losses: { label: 'Losses', value: this.fighter.losses, cols: '2' },
                draws: { label: 'Draws', value: this.fighter.draws, cols: '2' },
                win_decs: { label: 'Wins (decision)', value: this.fighter.win_decs, cols: '2' },
                win_ko: { label: 'Wins (KO/TKO', value: this.fighter.win_ko, cols: '2' },
                win_subs: { label: 'Wins (submission)', value: this.fighter.win_subs, cols: '2' },
                win_others: { label: 'Wins (Other)', value: this.fighter.win_others, cols: '2' },
                loss_decs: { label: 'Losses (Decision)', value: this.fighter.loss_decs, cols: '2' },
                loss_ko: { label: 'Losses (KO/TKO)', value: this.fighter.loss_ko, cols: '2' },
                loss_subs: { label: 'Losses (submission)', value: this.fighter.loss_subs, cols: '2' },
                loss_others: { label: 'Losses (other)', value: this.fighter.loss_others, cols: '2' },
                ranking: { label: 'Ranking', value: this.fighter.ranking, cols: '2' }
            }
        }
    },
    mounted () {
        this.loadForm()
    }
}
</script>