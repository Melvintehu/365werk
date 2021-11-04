<template>
  <div class="auth-page">
    <div class="container">
      <page-header>
        {{ getTranslation('login_page_title') }}
        <template slot="subTitle">
          {{ getTranslation('login_page_sub_title') }}
        </template>
      </page-header>

      <auth-box links-to="/register">
        <template slot="label">
          {{ getTranslation('login') }}
        </template>
        <template slot="linkLabel">
          {{ getTranslation('no_account') }}
        </template>

        <input-default name="email" :placeholder="getTranslation('enter_email')">
          <template slot="label">
            {{ getTranslation('email_address') }}
          </template>
        </input-default>

        <input-default to="/forgot-password" name="password" type="password" :placeholder="getTranslation('enter_password')">
          <template slot="label">
            {{ getTranslation('password') }}
          </template>
          <template slot="help">
            {{ getTranslation('forgot_password') }}
          </template>
        </input-default>

        <button slot="button" class="button__main button__main--hover" @click="login()">
          {{ getTranslation('login_button') }}
        </button>
      </auth-box>
    </div>
  </div>
</template>

<script>
import AuthBox from '../components/auth/AuthBox'
import PageHeader from '../components/auth/PageHeader'
import InputDefault from '../components/form/InputDefault'

export default {
  components: {
    InputDefault,
    PageHeader,
    AuthBox
  },
  layout: 'auth',
  methods: {
    login () {
      this.$store.dispatch('auth/login').then(() => {
        this.$router.push('account')
      })
    }
  }
}
</script>
