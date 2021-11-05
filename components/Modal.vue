<template>
  <transition name="slide-fade-down">
    <div v-if="opened" class="modal__backdrop">
      <div class="modal">
        <div class="modal__title">Are you sure</div>
        <div class="modal__content">
          <p>Are you sure you wanna log out? Your demo data will be lost.</p>
        </div>
        <div class="modal__actions">
          <button @click="cancel" class="modal__cancel">
            Cancel
          </button>
          <button @click="proceed" class="modal__proceed">
            Proceed
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
      opened: true
    }
  },
  methods: {
    cancel () {
      this.opened = false
    },
    proceed () {
      this.$emit('proceed')
    }
  }
}
</script>
