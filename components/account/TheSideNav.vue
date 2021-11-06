<template>
  <div v-click-outside="close">
    <transition name="slide-fade">
      <div v-show="expanded" class="side-nav">
        <!-- Logo -->
        <div class="side-nav__logo">
          <img src="~/assets/img/logos/svg/365werk.svg">
        </div>
        <div class="side-nav__language-switch-wrapper">
          <the-language-switch/>
        </div>
        <!-- Links -->
        <NuxtLink class="side-nav__item side-nav__item--hover" to="/account">
          <span class="side-nav__item-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" /></svg>
          </span>
          <span class="side-nav__item-label">
            {{ translate('account') }}
          </span>
        </NuxtLink>
        <div class="side-nav__item side-nav__item--hover" @click="logout">
          <span class="side-nav__item-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" /></svg>
          </span>
          <span class="side-nav__item-label">
            {{ translate('log_out') }}
          </span>
        </div>
      </div>
    </transition>
    <!-- Floating action button -->
    <div class="side-nav__floating-action-toggle" @click="expanded = !expanded">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
    </div>
  </div>
</template>
<script>
import TheLanguageSwitch from '../TheLanguageSwitch'
export default {
  components: { TheLanguageSwitch },
  data () {
    return {
      expanded: false
    }
  },
  methods: {
    logout () {
      this.confirm(this.translate('log_out_confirm_title'), this.translate('log_out_confirm_description')).then(() => {
        this.$store.dispatch('auth/logout').then(() => {
          this.$router.push('/login')
        })
      })
    },
    close () {
      this.expanded = false
    }
  }
}
</script>
