<template>
  <div class="page-wrapper">
    <div class="side-nav">
      <div class="side-nav__logo">
        <img src="~/assets/img/logos/svg/365werk.svg">
      </div>
      <div class="side-nav__item side-nav__item--hover">
        <span class="side-nav__item-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" /></svg>
        </span>
        <NuxtLink class="side-nav__item-link" to="/account">
          Account
        </NuxtLink>
      </div>
      <div class="side-nav__item side-nav__item--hover">
        <span class="side-nav__item-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
        </span>
        <NuxtLink class="side-nav__item-link" to="/account">
          Reset password
        </NuxtLink>
      </div>
      <div class="side-nav__item side-nav__item--hover">
        <span class="side-nav__item-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" /></svg>
        </span>
        <NuxtLink class="side-nav__item-link" to="/account">
          Log out
        </NuxtLink>
      </div>
    </div>

    <div class="page">
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
              Account
            </h2>
            <p class="page-top-bar__description">
              We stored your account details here.
            </p>
          </div>
        </div>
        <div class="page-top-bar__right">
          <div class="account-progress" />
        </div>
      </div>
      <div class="page-inner">
        <div class="page-inner__nav">
          <div class="page-inner__nav-item page-inner__nav-item--active">
            <NuxtLink class="page-inner__nav-item-link" to="/account">
              Personal details
            </NuxtLink>
            <span class="page-inner__nav-item-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              ><rect fill="none" height="24" width="24" /><path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" /></svg>
            </span>
          </div>
          <div class="page-inner__nav-item">
            <NuxtLink class="page-inner__nav-item-link" to="/account">
              Preferences
            </NuxtLink>
          </div>
          <div class="page-inner__nav-item">
            <NuxtLink class="page-inner__nav-item-link" to="/account">
              Work experience
            </NuxtLink>
          </div>
          <div class="page-inner__nav-item">
            <NuxtLink class="page-inner__nav-item-link" to="/account">
              Educations
            </NuxtLink>
          </div>
        </div>
        <div class="page-inner__content">
          <h1>Personal details</h1>
          <div class="content__section">
            <h2>Account details</h2>

            <div class="content__form">
              <div class="content__form-group">
                <input-default name="email" placeholder="Enter your email address">
                  <template slot="label">
                    Email address
                  </template>
                </input-default>
                <input-default name="email" placeholder="Enter your email address">
                  <template slot="label">
                    Phone number
                  </template>
                </input-default>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputDefault from '../components/form/InputDefault'
export default {
  components: { InputDefault },
  layout: 'account'
}
</script>
