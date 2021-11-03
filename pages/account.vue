<template>
  <div class="page-wrapper">
    <side-nav />

    <div class="page">
      <!--Page top bar-->
      <top-bar />
      <div class="page-inner">
        <!--Page nav-->
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
              ><rect fill="none" height="24" width="24" /><path
                d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"
              /></svg>
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
        <!-- Page content-->
        <page-content>
          <template slot="title">
            Personal details
          </template>
          <div class="page-inner__content-section">
            <h2 class="page-inner__content-section-title">
              Contact information
            </h2>
            <div class="content__form">
              <div class="content__form-group">
                <input-validator
                  :rules="[
                    { type: 'email', message: 'Your email is invalid.' },
                    { type: 'required', message: 'Your email address is required.' },
                    { type: 'minLength', rule: 2, message: 'a minimal of 2 character is mandatory.' },
                    { type: 'maxLength', rule: 255, message: 'cannot contain more than 255 characters.' }
                  ]"
                  message="Your email contains errors"
                >
                  <input-default name="email" placeholder="Enter your email address">
                    <template slot="label">
                      Email address
                    </template>
                  </input-default>
                </input-validator>
                <input-default name="email" placeholder="Enter your email address">
                  <template slot="label">
                    Phone number
                  </template>
                </input-default>
              </div>
            </div>
          </div>
          <div class="page-inner__content-section">
            <h2 class="page-inner__content-section-title">
              Address
            </h2>
            <div class="content__form">
              <div class="content__form-address">
                <div class="content__form-group">
                  <input-default name="email" placeholder="1234AB">
                    <template slot="label">
                      Postal code
                    </template>
                  </input-default>
                </div>
                <div class="content__form-address-house-details">
                  <input-default name="email" placeholder="123">
                    <template slot="label">
                      House number
                    </template>
                  </input-default>
                  <input-default name="email" placeholder="A">
                    <template slot="label">
                      Add on
                    </template>
                  </input-default>
                </div>
              </div>
              <div class="content__form-group">
                <input-default name="email" placeholder="Enter your street">
                  <template slot="label">
                    Street
                  </template>
                </input-default>
                <input-default name="email" placeholder="Enter your city">
                  <template slot="label">
                    City
                  </template>
                </input-default>
              </div>
            </div>
          </div>
          <div class="page-inner__content-section">
            <h2 class="page-inner__content-section-title">
              Personal details
            </h2>
            <div class="content__form">
              <div class="content__form-group">
                <input-default name="email" placeholder="Enter your email address">
                  <template slot="label">
                    First name
                  </template>
                </input-default>
                <input-default name="email" placeholder="Enter your email address">
                  <template slot="label">
                    surname
                  </template>
                </input-default>
              </div>
            </div>
          </div>
        </page-content>
      </div>
    </div>
  </div>
</template>
<script>
import InputDefault from '../components/form/InputDefault'
import SideNav from '../components/account/SideNav'
import TopBar from '../components/account/TopBar'
import PageContent from '../components/account/PageContent'
import InputValidator from '../components/form/InputValidator'

export default {
  components: {
    InputValidator,
    PageContent,
    TopBar,
    SideNav,
    InputDefault
  },
  layout: 'account',
  middleware: 'auth'
}
</script>
