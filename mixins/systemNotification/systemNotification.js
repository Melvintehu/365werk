export default {
  methods: {
    notify (title, description) {
      this.$store.commit('systemNotifications/addNotification', {
        title,
        description
      })
    }
  }
}
