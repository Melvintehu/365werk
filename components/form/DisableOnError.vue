<template>
  <div class="disable-on-errors__element-wrapper">
    <div>
      <slot />
    </div>
    <div v-if="errors.length > 0" class="disable-on-errors__overlay" @click="informUser" />
  </div>
</template>
<script>
export default {
  props: {
    syncWith: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      errors: []
    }
  },
  mounted () {
    this.$nuxt.$on(`disable-on-errors:${this.syncWith}:register`, this.registerError)
    this.$nuxt.$on(`disable-on-errors:${this.syncWith}:remove`, this.removeError)
  },
  destroyed () {
    this.$nuxt.$off(`disable-on-errors:${this.syncWith}:register`, this.registerError)
    this.$nuxt.$off(`disable-on-errors:${this.syncWith}:remove`, this.removeError)
  },
  methods: {
    registerError (fieldName) {
      this.errors.push(fieldName)
    },
    removeError (fieldName) {
      this.errors = this.errors.filter((listedFieldName) => {
        return listedFieldName !== fieldName
      })
    },
    informUser () {
      this.notify('Whoops!', 'Check the information you\'ve entered. Something might be wrong.')
    }
  }
}
</script>
<style lang="scss">
.disable-on-errors__element-wrapper {
  background: yellow;
  height: 100%;
  width: 100%;
  position: relative;
}

.disable-on-errors__overlay {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.2);
  width: 100%;
  height: 100%;
  z-index: 50;
}
</style>
