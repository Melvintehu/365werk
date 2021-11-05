<template>
  <div class="input">
    <div class="input__label-wrapper">
      <label class="input__label">
        <slot name="label" />
      </label>
      <a :target="target" :href="to" class="input__help">
        <slot name="help" />
      </a>
    </div>
    <input
      :value="value"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      class="input__default"
      @input="updateValue"
    >
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },

    type: {
      type: String,
      default: 'text'
    },

    placeholder: {
      type: String,
      default: 'Type here'
    },

    to: {
      type: String,
      default: '#'
    },
    target: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
