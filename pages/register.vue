<template>
  <div class="auth-page">
    <div class="container">
      <!-- Page title, subtitle -->
      <page-header>
        {{ translate('register_page_title') }}
        <template slot="subTitle">
          {{ translate('register_page_sub_title') }}
        </template>
      </page-header>

      <auth-box links-to="/login">
        <template slot="label">
          {{ translate('register') }}
        </template>
        <template slot="linkLabel">
          {{ translate('already_an_account') }}
        </template>

        <input-default name="email" :placeholder="translate('placeholder_email')">
          <template slot="label">
            {{ translate('email_address') }}
          </template>
        </input-default>

        <input-default name="phone" :placeholder="translate('placeholder_phone_number')">
          <template slot="label">
            {{ translate('phone_number') }}
          </template>
        </input-default>

        <input-default target="_blank" to="https://www.lastpass.com/nl/features/password-generator" name="password" type="password" :placeholder="translate('enter_password')">
          <template slot="label">
            {{ translate('password') }}
          </template>
          <template slot="help">
            {{ translate('generate_password') }}
          </template>
        </input-default>

        <!--Login button-->
        <button slot="button" class="button__main button__main--hover">
          {{ translate('register_button') }}
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
  layout: 'auth'
}
</script>
