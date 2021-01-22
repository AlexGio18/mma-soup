<template>
    
        <v-row no-gutters>
            <v-col cols="12" class="pa-0">
                <v-card flat>
                    <v-card-title>{{ fighter.name }}</v-card-title>
                    <v-img :src="fighter.image_link" max-width="200"></v-img>    
                </v-card>
            </v-col>
        </v-row>
    
</template>

<script>
export default {
    props: {
        fighter: Object
    }
}
</script>