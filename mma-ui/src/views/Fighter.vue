<template>
    <v-container fluid>
        <div v-if="fighter != null">
            <fighter-profile :fighter="fighter"></fighter-profile>
            <fighter-form :fighter="fighter"></fighter-form>
            <record-table
                v-if="fighter.professional_record.length > 0"  
                record_type="Professional" 
                :record="fighter.professional_record"
            ></record-table>

            <record-table 
                v-if="fighter.amateur_record.length > 0" 
                record_type="Amateur"
                :record="fighter.amateur_record"
            ></record-table>
        </div>
    </v-container>
</template>

<script>
import { api } from '@/helpers/fighters'
import RecordTable from '@/components/RecordTable'
import FighterForm from '@/components/FighterForm'
import FighterProfile from '@/components/FighterProfile'

export default {
    components: {
        'record-table': RecordTable,
        'fighter-form': FighterForm,
        'fighter-profile': FighterProfile
    },
    data: () => ({
        fighter: null
    }),
    async mounted () {
        this.fighter = await api.getfighter(this.$route.params.fighterId)
    }
}
</script>