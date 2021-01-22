<template>
    <div>
        <v-simple-table dense>
            <template v-slot:top>
                <v-toolbar
                    flat
                >
                    <v-toolbar-title>{{ record_type }} Record</v-toolbar-title>
                    <v-divider
                        class="mx-4"
                        inset
                        vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog
                        v-model="dialog"
                        max-width="1000px"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="primary"
                                dark
                                class="mb-2"
                                v-bind="attrs"
                                v-on="on"
                            >
                                ADD
                            </v-btn>
                        </template>
                            <v-card>
                                <v-card-title>
                                <span class="headline">Add to {{ record_type }} record</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                            >
                                                <v-text-field
                                                v-model="recordAdd.event_date"
                                                label="Event Date"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                            >
                                                <v-text-field
                                                v-model="recordAdd.opponent"
                                                label="Opponent"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                            >
                                                <v-text-field
                                                v-model="recordAdd.event"
                                                label="Event"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                sm="4"
                                                md="2"
                                            >
                                                <v-text-field
                                                v-model="recordAdd.result"
                                                label="Result"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                            >
                                                <v-text-field
                                                v-model="recordAdd.method"
                                                label="Method"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                            >
                                                <v-text-field
                                                v-model="recordAdd.referee"
                                                label="Referee"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="2"
                                            >
                                                <v-text-field
                                                v-model="recordAdd.round"
                                                label="Round"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="2"
                                            >
                                                <v-text-field
                                                v-model="recordAdd.time"
                                                label="Time"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                md="6"
                                            >
                                                <v-text-field
                                                v-model="recordAdd.opponent_link"
                                                label="Opponent Link"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                md="6"
                                            >
                                                <v-text-field
                                                v-model="recordAdd.event_link"
                                                label="Event Link"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                <v-spacer></v-spacer>
                                    <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="close"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="save"
                                    >
                                        Save
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">
                            Date
                        </th>
                        <th class="text-left">
                            Opponent
                        </th>
                        <th class="text-left">
                            Event
                        </th>
                        <th class="text-left">
                            Result
                        </th>
                        <th class="text-left">
                            Method/Referee
                        </th>
                        <th class="text-left">
                            Round
                        </th>
                        <th class="text-left">
                            Time
                        </th>
                    </tr>
                </thead>
                <tbody v-if="fighterRecord.length > 0">
                    <tr
                        v-for="(item, index) in record"
                        :key="index"
                    >
                        <td>{{ item.event_date }}</td>
                        <td>{{ item.opponent }}</td>
                        <td>{{ item.event }}</td>
                        <td>{{ item.result }}</td>
                        <td>
                            {{ item.method }} <br />
                            {{ item.referee }}
                        </td>
                        <td>{{ item.round }}</td>
                        <td>{{ item.time }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>
<script>
import { api } from '@/helpers/fighters'

export default {
    name:  'RecordTable',
    props: {
        record: Array,
        record_type: String
    },
    data: () => ({
        fighterRecord: [],
        dialog: false,
        recordAdd: {
            event_date: '',
            opponent: '',
            opponent_link: '',
            event: '',
            event_link: '',
            result: '',
            method: '',
            referee: '',
            round: '',
            time: ''
        }
    }),
    methods: {
        close () {
            this.dialog = false
        },
        async save () {
            console.log(this.recordAdd)
            const fighter = await api.updateFighterRecord(this.$route.params.fighterId, this.record_type, this.recordAdd)
            console.log(fighter)
        }
    },
    mounted() {
        this.fighterRecord = this.record
        console.log(this.fighterRecord)
        for (var i = 0; i < this.fighterRecord.length; i++) {
            const rec = this.fighterRecord[i]
            const recDate = new Date(rec.event_date)
            let j = i - 1
            let recToComp = this.fighterRecord[j]
            while (j >= 0 && ((new Date(recToComp.event_date)) < recDate)) {
                this.fighterRecord[j + 1] = recToComp
                j = j - 1
                recToComp = this.fighterRecord[j]
            }
            this.fighterRecord[j + 1] = rec
        }

        console.log(this.fighterRecord)
    },
}
</script>