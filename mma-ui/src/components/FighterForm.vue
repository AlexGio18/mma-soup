<template>
    <v-container>
        <form>
            <v-row no-gutters>
                <v-col cols="6">
                    <v-text-field
                        v-model="fighter.name"
                        label="Name"
                        dense
                    ></v-text-field>
                </v-col>
                <v-col cols="6">

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
</template>

<script>
import { validationMixin } from 'vuelidate'
// import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
    props: {
        fighter: Object
    },
    mixins: [validationMixin],
    data: () => ({
        name: '',
        email: '',
        select: null
    }),
    methods: {
        submit () {
            // this.$v.$touch
            // console.log(this.$v)
            console.log(this.fighter)
        },
        clear () {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.select = null
            this.checkbox = false
        },
    },
    mounted () {
        console.log(this.fighter)
    }
}
</script>