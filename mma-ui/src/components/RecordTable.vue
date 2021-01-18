<template>
    <div>
        <h2>{{ record_type }} Record</h2>
        <v-simple-table dense v-if="record.length > 0">
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
                <tbody>
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
export default {
    name:  'RecordTable',
    props: {
        record: Array,
        record_type: String
    }
}
</script>