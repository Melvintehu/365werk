export default {
  methods: {
    minLength (value, rule) {
      return value.length < rule
    }
  }
}
