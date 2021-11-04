<template>
  <div class="language-switch" @click="expanded = !expanded">
    <img class="language-switch__flag" :src="require(`~/assets/img/country-flags/svg/${currentLanguage}.svg`)" alt="">
    <figure class="language-switch__icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
    </figure>
    <transition name="slide-fade-down">
      <div v-if="expanded" class="language-switch__dropdown">
        <div class="language-switch__country" @click="switchLanguage('nl')">
          <figure class="language-switch__country-flag">
            <img src="~/assets/img/country-flags/svg/nl.svg" alt="">
          </figure>
          <p class="language-switch__country-label">
            {{ translate('dutch') }}
          </p>
        </div>
        <div class="language-switch__country" @click="switchLanguage('gb')">
          <figure class="language-switch__country-flag">
            <img src="~/assets/img/country-flags/svg/gb.svg" alt="">
          </figure>
          <p class="language-switch__country-label">
            {{ translate('english') }}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      expanded: false
    }
  },
  computed: {
    ...mapGetters({
      currentLanguage: 'localization/getCurrentLanguage'
    })
  },
  methods: {
    switchLanguage (language) {
      this.$store.commit('localization/setLanguage', language)
    }
  }
}
</script>
