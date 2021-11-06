<template>
  <div class="page-inner__nav-item">
    <NuxtLink class="page-inner__nav-item-link" :to="to">
      <slot />
    </NuxtLink>
    <span class="page-inner__nav-item-icon">
      <slot name="icon" />
    </span>
  </div>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>
