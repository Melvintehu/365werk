<template>
  <div class="account-progress">
    <div class="account-progress__labels-wrapper">
      <p class="account-progress__label-left">
        {{ translate('account_progress') }}
      </p>
      <p class="account-progress__label-right">
        {{ translate('account_progress_sub_title') }}
      </p>
    </div>
    <progress class="account-progress__progress-bar" :value="percentage" max="100" />
    <p class="account-progress__percentage">
      {{ percentage }}%
    </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      percentage: 'auth/getAccountProgress'
    })
  }
}
</script>
