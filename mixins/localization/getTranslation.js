export default {
  methods: {
    getTranslation (key) {
      return this.$store.getters['localization/getTranslation'](key)
    }
  }
}
