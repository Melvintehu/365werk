<template>
  <header class="page-header">
    <div class="page-header__title-wrapper">
      <img src="~/assets/img/blobs/svg/blob-page-title.svg">
      <h1 class="page-header__title">
        <slot />
      </h1>
    </div>
    <h2 class="page-header__sub-title">
      <slot name="subTitle" />
    </h2>
  </header>
</template>
<script>
export default {}
</script>
