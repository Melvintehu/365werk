<template>
  <Nuxt />
</template>
<script>
import Vue from 'vue'
import getTranslation from '~/mixins/localization/getTranslation'

Vue.mixin(getTranslation)

export default {}
</script>
