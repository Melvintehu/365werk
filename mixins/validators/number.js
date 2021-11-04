export default {
  methods: {
    number (value) {
      const re = /^[0-9]+$/i
      return !re.test(String(value).toLowerCase())
    }
  }
}
