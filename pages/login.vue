<template>
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

        <input-default v-model="email" name="email" :placeholder="translate('enter_email')">
          <template slot="label">
            {{ translate('email_address') }}
          </template>
        </input-default>

        <input-default v-model="password" to="/forgot-password" name="password" type="password" :placeholder="translate('enter_password')">
          <template slot="label">
            {{ translate('password') }}
          </template>
          <template slot="help">
            {{ translate('forgot_password') }}
          </template>
        </input-default>

        <button slot="button" class="button__main button__main--hover" @click="login()">
          {{ translate('login_button') }}
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
