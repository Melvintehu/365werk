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
    <div class="account-progress__progress-bar">
      <div class="account-progress__progress-bar-fill"></div>
    </div>
    <p class="account-progress__percentage">
      30%
    </p>
  </div>
</template>
<script>
export default {}
</script>
