<template>
  <div>
    <system-notification />
    <nav-auth />
    <Nuxt />
  </div>
</template>
<script>
import Vue from 'vue'
import TheNavAuth from '~/components/TheNavAuth'
import systemNotification from '~/mixins/systemNotification/systemNotification'
import getTranslation from '~/mixins/localization/getTranslation'
import SystemNotification from '~/components/SystemNotification'

Vue.mixin(getTranslation)
Vue.mixin(systemNotification)

export default {
  components: { SystemNotification, NavAuth: TheNavAuth }
}
</script>
