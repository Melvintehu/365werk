<template>
  <div>
    <div class="side-nav">
      <div class="side-nav__logo"></div>
      <div class="side-nav__item">
        <span class="side-nav__item-icon"></span>
        <NuxtLink class="side-nav__item-link" to="/account">Account</NuxtLink>
      </div>
      <div class="side-nav__item">
        <span class="side-nav__item-icon"></span>
        <NuxtLink class="side-nav__item-link" to="/account">Reset password</NuxtLink>
      </div>
      <div class="side-nav__item">
        <span class="side-nav__item-icon"></span>
        <NuxtLink class="side-nav__item-link" to="/account">Log out</NuxtLink>
      </div>
    </div>

    <div class="page">
      <div class="page-top-bar">
        <div class="page-top-bar__left">
          <h2 class="page-top-bar__title">Account</h2>
          <h2 class="page-top-bar__description">We stored your account details here.</h2>
        </div>
        <div class="page-top-bar__right">
          <div class="account-progress"></div>
        </div>
      </div>
      <div class="page-inner">
        <div class="page-inner__nav">
          <div class="page-inner__nav-item">
            <NuxtLink class="page-inner__nav-item-link" to="/account">
              Personal details
            </NuxtLink>
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
