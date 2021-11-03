<template>
  <div class="auth-page">
    <div class="container">
      <!-- Page title, subtitle -->
      <page-header>
        Let's create an account
        <template slot="subTitle">
          You're just a few keystrokes away from finding your dream job.
        </template>
      </page-header>

      <auth-box links-to="/login">
        <template slot="label">
          Login
        </template>
        <template slot="linkLabel">
          Already an account? Login
        </template>

        <input-default name="email" placeholder="Enter your email address">
          <template slot="label">
            Email address
          </template>
        </input-default>

        <input-default name="phone" placeholder="Enter your phone number">
          <template slot="label">
            Phone number
          </template>
        </input-default>

        <input-default to="/forgot-password" name="password" type="password" placeholder="Enter your password">
          <template slot="label">
            Password
          </template>
          <template slot="help">
            Let us generate a password
          </template>
        </input-default>

        <!--Login button-->
        <button slot="button" class="button__main button__main--hover">
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
  }
}
</script>
