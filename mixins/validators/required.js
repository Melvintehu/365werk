export default {
  methods: {
    required (value) {
      return value === undefined || value === null || value === ''
    }
  }
}
