<template>
  <div>
    <system-notification />
    <Nuxt />
  </div>
</template>
<script>
import Vue from 'vue'
import SystemNotification from '../components/SystemNotification'
import getTranslation from '~/mixins/localization/getTranslation'
import systemNotification from '~/mixins/systemNotification/systemNotification'

Vue.mixin(getTranslation)
Vue.mixin(systemNotification)

export default {
  components: { SystemNotification }
}
</script>
