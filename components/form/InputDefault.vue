<template>
  <div class="input">
    <div class="input__label-wrapper">
      <label class="input__label">
        <slot name="label" />
      </label>
      <a :href="to" class="input__help">
        <slot name="help" />
      </a>
    </div>
    <input :name="name" :type="type" :placeholder="placeholder" class="input__default">
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
    }
  }
}
</script>
