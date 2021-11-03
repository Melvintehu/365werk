<template>
  <!-- Logo and navigation -->
  <div class="nav">
    <NuxtLink class="nav--link-default" to="/login">
      365werk
    </NuxtLink>

    <NuxtLink class="nav--link-default" to="/register">
      Register
    </NuxtLink>

    <div class="nav--link-group">
      <NuxtLink class="nav--link-bordered" to="/login">
        Log in to your account
      </NuxtLink>
      <img class="nav--link-group-blob" src="~/assets/img/blobs/svg/blob-log-in-to-account.svg">
    </div>
  </div>
</template>

<script>
export default {}
</script>
