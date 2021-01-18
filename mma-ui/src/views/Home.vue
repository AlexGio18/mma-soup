<template>
  <div class="home">
    <fighters></fighters>
  </div>
</template>

<script>
// @ is an alias to /src
import Fighters from '@/components/Fighters.vue'

export default {
  name: 'Home',
  components: {
    'fighters': Fighters
  }
}
</script>
