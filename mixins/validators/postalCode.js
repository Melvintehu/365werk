export default {
  methods: {
    postalCode (value) {
      if (value === null || value === undefined || value === '') {
        return false
      }
      const re = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i
      return !re.test(String(value).toLowerCase())
    }
  }
}
