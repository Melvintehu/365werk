export default {
  methods: {
    letter (value) {
      if (value === null || value === undefined || value === '') {
        return false
      }
      const re = /^[A-Za-z]+$/i
      return !re.test(String(value).toLowerCase())
    }
  }
}
