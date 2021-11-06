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
          <input-default name="email" :placeholder="translate('placeholder_email')">
            <template slot="label">
              {{ translate('email_address') }}
            </template>
          </input-default>
        </input-validator>
        <input-validator
          :rules="[
              { type: 'required', message: translate('required', translate('phone_number')) },
              { type: 'phoneNumber', message: translate('invalid', `${translate('phone_number')} (+31612345678)`) }
            ]"
          :message="translate('validation_errors', translate('phone_number'))"
        >
          <input-default name="phone" :placeholder="translate('placeholder_phone_number')">
            <template slot="label">
              {{ translate('phone_number') }}
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
          <input-default target="_blank" to="https://www.lastpass.com/nl/features/password-generator" name="password" type="password" :placeholder="translate('enter_password')">
            <template slot="label">
              {{ translate('password') }}
            </template>
            <template slot="help">
              {{ translate('generate_password') }}
            </template>
          </input-default>
        </input-validator>
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
import InputValidator from '../components/form/InputValidator'

export default {
  components: {
    InputValidator,
    InputDefault,
    PageHeader,
    AuthBox
  },
  layout: 'auth'
}
</script>
