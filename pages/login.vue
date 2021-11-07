<template>
  <div>
    <div class="auth-page">
      <div class="container">
        <page-header>
          {{ translate('login_page_title') }}
          <template slot="subTitle">
            {{ translate('login_page_sub_title') }}
          </template>
        </page-header>

        <auth-box links-to="/register">
          <template slot="label">
            {{ translate('login') }}
          </template>
          <template slot="linkLabel">
            {{ translate('no_account') }}
          </template>
          <input-validator
            sync-with="login"
            :rules="[
            { type: 'required', message: translate('required', translate('email_address')) },
            { type: 'email', message: translate('invalid', translate('email_address')) },
            { type: 'minLength', rule: 2, message: translate('min_length', 2) },
            { type: 'maxLength', rule: 255, message: translate('max_length', 255) }
          ]"
            :message="translate('validation_errors', translate('email_address'))"
          >
            <input-default v-model="email" name="email" :placeholder="translate('enter_email')">
              <template slot="label">
                {{ translate('email_address') }}
              </template>
            </input-default>
          </input-validator>
          <input-validator
            sync-with="login"
            :rules="[
            { type: 'required', message: translate('required', translate('password')) },
            { type: 'minLength', rule: 12, message: translate('min_length', 12) },
          ]"
            :message="translate('validation_errors', translate('password'))"
          >
            <input-default v-model="password" to="#forgot-password" name="password" type="password" :placeholder="translate('enter_password')">
              <template slot="label">
                {{ translate('password') }}
              </template>
              <template slot="help">
                {{ translate('forgot_password') }}
              </template>
            </input-default>
          </input-validator>
          <disable-on-error slot="button" sync-with="login">
            <button  class="button__main button__main--hover" @click="login()">
              {{ translate('login_button') }}
            </button>
          </disable-on-error>
        </auth-box>
      </div>
    </div>
    <div class="page-waves">
      <figure class="page-waves__wrapper">
        <img src="~/assets/img/waves/svg/waves.svg">
      </figure>
    </div>
  </div>
</template>

<script>
import AuthBox from '../components/auth/AuthBox'
import PageHeader from '../components/auth/PageHeader'
import InputDefault from '../components/form/InputDefault'
import InputValidator from '../components/form/InputValidator'
import DisableOnError from '../components/form/DisableOnError'

export default {
  components: {
    DisableOnError,
    InputValidator,
    InputDefault,
    PageHeader,
    AuthBox
  },
  layout: 'auth',
  data () {
    return {
      email: 'opdracht@365werk.nl',
      password: 'opdrachtpass'
    }
  },
  methods: {
    login () {
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push('/account')
      }).catch((e) => {
        this.notify('Whoops something went wrong', 'Looks like you\'ve provided the wrong credentials.')
      })
    }
  }
}
</script>
