<template>
  <transition name="slide-fade-down">
    <div v-if="notification !== null" class="system-notification" @click="instantDismiss" @mouseenter="cancelDismiss" @mouseleave="dismiss()">
      <figure class="system-notification__icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
      </figure>
      <p class="system-notification__title" >
        {{ notification.title }}
      </p>
      <p class="system-notification__description" >
        {{ notification.description }}
      </p>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      dismissTimeout: null
    }
  },
  computed: {
    ...mapGetters({
      notification: 'systemNotifications/getNotification'
    })
  },
  watch: {
    notification () {
      if (this.notification !== null) {
        this.dismiss()
      }
    }
  },
  methods: {
    dismiss () {
      this.dismissTimeout = setTimeout(() => {
        this.$store.commit('systemNotifications/addNotification', null)
      }, 3000)
    },
    cancelDismiss () {
      clearTimeout(this.dismissTimeout)
    },
    instantDismiss () {
      this.$store.commit('systemNotifications/addNotification', null)
    }
  }
}
</script>
