export default {
  methods: {
    confirm (title, description) {
      this.$nuxt.$emit('modal:confirm', { title, description })
      return new Promise((resolve, reject) => {
        this.$nuxt.$on('modal:confirmed', () => {
          resolve()
        })
      })
    }
  }
}
