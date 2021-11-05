<template>
  <div class="input-validator" :class="{ 'on-top': focused }" @focusin="toggleFocus" @focusout="toggleFocus">
    <transition name="slide-fade-down">
      <div v-if="containsErrors && focused" class="input-validator__message">
        <ul>
          <li>{{ message }}</li>
          <li v-for="error in errorMessages" :key="error">
            {{ error }}
          </li>
        </ul>
      </div>
    </transition>
    <div ref="input" class="input-validator__input-wrapper">
      <slot/>
    </div>

  </div>
</template>
<style lang="scss">
.on-top {
  z-index: 50;
}
.input-validator {
  position: relative;

  &__input-wrapper {
    position: relative;
  }

  &__message {
    display: block;
    background: #ED6B00;
    color: white;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    font-size: 12px;
    min-height: 48px;
    width: 100%;
    padding: 16px;
    position: absolute;
    top: 56px;
    left: 0;

    ul {
      padding: 8px 16px 0 0;
      margin: 0;
      text-decoration: none;
      list-style-type: none;
    }

    li {
      padding: 4px 0;
    }

    li:first-child {
      font-weight: 700;
    }
  }
}
.slide-fade-down-enter-active {
  transition: all .3s ease;
}
.slide-fade-down-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-down-enter, .slide-fade-down-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
<script>
import email from '~/mixins/validators/email'
import required from '~/mixins/validators/required'
import minLength from '~/mixins/validators/minLength'
import maxLength from '~/mixins/validators/maxLength'
import phoneNumber from '~/mixins/validators/phoneNumber'
import postalCode from '~/mixins/validators/postalCode'
import number from '~/mixins/validators/number'
import letter from '~/mixins/validators/letter'

export default {
  mixins: [
    email,
    letter,
    number,
    minLength,
    maxLength,
    phoneNumber,
    postalCode,
    required
  ],
  props: {
    message: {
      type: String,
      required: true
    },

    rules: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      containsErrors: false,
      listeners: [
        'keyup'
      ],
      input: null,
      validators: {
        minLength: this.minLength,
        maxLength: this.maxLength,
        required: this.required,
        email: this.email,
        phoneNumber: this.phoneNumber,
        postalCode: this.postalCode,
        number: this.number,
        letter: this.letter
      },
      errorMessages: [],
      focused: false
    }
  },
  mounted () {
    this.trackInput()
  },
  methods: {
    trackInput () {
      const inputWrapper = this.$refs.input
      this.input = inputWrapper.querySelector('input')

      this.listeners.forEach((listener) => {
        this.input.addEventListener(listener, this.validateInput)
      })
    },

    validateInput () {
      this.errorMessages = []

      this.rules.forEach((validator) => {
        if (this.validators[validator.type](this.input.value, validator.rule)) {
          this.errorMessages.push(validator.message)
        }
      })

      this.containsErrors = this.errorMessages.length > 0
    },

    toggleFocus () {
      this.focused = !this.focused
    }
  }
}
</script>
