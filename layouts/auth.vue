<template>
  <div>
    <nav-auth />
    <Nuxt />
  </div>
</template>
<script>
import Vue from 'vue'
import TheNavAuth from '../components/TheNavAuth'
import getTranslation from '~/mixins/localization/getTranslation'

Vue.mixin(getTranslation)

export default {
  components: { NavAuth: TheNavAuth }
}
</script>
