<template>
  <transition name="slide-fade-down">
    <div v-if="notification !== null" class="system-notification" @click="instantDismiss" @mouseenter="cancelDismiss" @mouseleave="dismiss()">
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
