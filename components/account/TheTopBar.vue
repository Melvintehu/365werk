<template>
  <div class="page-top-bar">
    <div class="page-top-bar__left">
          <span class="page-top-bar__go-back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            ><rect fill="none" height="24" width="24" /><path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z" /></svg>
          </span>
      <div>
        <h2 class="page-top-bar__title">
          {{ translate('account') }}
        </h2>
        <p class="page-top-bar__description">
          {{ translate('account_sub_title') }}
        </p>
      </div>
    </div>
    <div class="page-top-bar__right">
      <progress-bar />
    </div>
  </div>
</template>
<script>
import ProgressBar from './ProgressBar'
export default {
  components: { ProgressBar }
}
</script>
