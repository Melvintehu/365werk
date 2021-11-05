<template>
  <div>
    <system-notification />
    <Nuxt />
    <modal-overlay />
  </div>
</template>
<script>
import Vue from 'vue'
import SystemNotification from '~/components/SystemNotification'
import modalOverlay from '~/components/ModalOverlay'
import modal from '~/mixins/modalOverlay/modal'
import getTranslation from '~/mixins/localization/getTranslation'
import systemNotification from '~/mixins/systemNotification/systemNotification'

Vue.mixin(getTranslation)
Vue.mixin(systemNotification)
Vue.mixin(modal)

export default {
  components: { SystemNotification, modalOverlay }
}
</script>
