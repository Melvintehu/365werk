export default {
  methods: {
    translate (key, attribute = null) {
      const translation = this.$store.getters['localization/getTranslation'](key)
      if (attribute === null) {
        return translation
      }
      return translation.replace(':attribute', attribute)
    }
  }
}
