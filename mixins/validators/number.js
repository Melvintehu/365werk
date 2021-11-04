export default {
  methods: {
    number (value) {
      if (value === null || value === undefined || value === '') {
        return false
      }
      const re = /^[0-9]+$/i
      return !re.test(String(value).toLowerCase())
    }
  }
}
