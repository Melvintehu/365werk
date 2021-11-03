<template>
  <div class="auth-page">
    <div class="container">
      <page-header>
        Welcome back!
        <template slot="subTitle">
          Good to see you back! Quick, login to see what new jobs we have to offer.
        </template>
      </page-header>

      <auth-box links-to="/register">
        <template slot="label">
          Login
        </template>
        <template slot="linkLabel">
          Not an account yet? Register
        </template>

        <input-default name="email" placeholder="Enter your email address">
          <template slot="label">
            Email address
          </template>
        </input-default>

        <input-default to="/forgot-password" name="password" type="password" placeholder="Enter your password">
          <template slot="label">
            Password
          </template>
          <template slot="help">
            Forgot password?
          </template>
        </input-default>

        <button @click="login()" slot="button" class="button__main button__main--hover">
          Yes, log me in
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
