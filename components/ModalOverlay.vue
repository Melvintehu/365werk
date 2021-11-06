<template>
  <transition name="slide-fade-down">
    <div v-if="opened" class="modal__backdrop">
      <div class="modal">
        <div class="modal__title">
          {{ title }}
        </div>
        <div class="modal__content">
          <p>
            {{ description }}
          </p>
        </div>
        <div class="modal__actions">
          <button class="modal__cancel" @click="cancel">
            {{ translate('cancel') }}
          </button>
          <button class="modal__proceed" @click="proceed">
            {{ translate('proceed') }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      opened: false,
      title: '',
      description: ''
    }
  },
  mounted () {
    this.$nuxt.$on('modal:confirm', this.open)
  },
  destroyed () {
  },
  methods: {
    open (content) {
      this.title = content.title
      this.description = content.description
      this.opened = true
    },
    cancel () {
      this.opened = false
    },
    proceed () {
      this.opened = false
      this.$nuxt.$emit('modal:confirmed')
    }
  }
}
</script>
