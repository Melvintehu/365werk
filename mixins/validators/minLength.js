export default {
  methods: {
    minLength (value, rule) {
      if (value === null || value === undefined || value === '') {
        return false
      }
      return value.length < rule
    }
  }
}
