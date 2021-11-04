<template>
  <div>
    <nav-auth />
    <Nuxt />
  </div>
</template>
<script>
import TheNavAuth from '../components/TheNavAuth'
export default {
  components: { NavAuth: TheNavAuth }
}
</script>
