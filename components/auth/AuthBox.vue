<template>
  <div class="auth-box">
    <div class="auth-box__header">
      <h3 class="auth-box__title">
        <slot name="label" />
      </h3>
      <NuxtLink class="auth-box__link" :to="linksTo">
        <span class="auth-box__link-label">
          <slot name="linkLabel" />
        </span>
        <span class="auth-box__link-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          ><rect fill="none" height="24" width="24" /><path
            d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"
          /></svg>
        </span>
      </NuxtLink>
    </div>
    <slot />
    <div class="auth-box__button">
      <slot name="button" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    linksTo: {
      type: String,
      required: true
    }
  }
}
</script>
