export default {
  methods: {
    maxLength (value, rule) {
      return value.length > rule
    }
  }
}
