<template>
  <div class="page-wrapper">
    <side-nav />

    <div class="page">
      <!--Page top bar-->
      <top-bar />
      <div class="page-inner">
        <!--Page nav-->
        <div class="page-inner__nav">
          <account-page-nav-item to="/account">
            Personal details
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            ><rect fill="none" height="24" width="24" /><path
              d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"
            /></svg>
          </account-page-nav-item>
          <account-page-nav-item to="#">
            Preferences
          </account-page-nav-item>
          <account-page-nav-item to="#">
            Work experience
          </account-page-nav-item>
          <account-page-nav-item to="#">
            Educations
          </account-page-nav-item>
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
                <input-validator
                  :rules="[
                    { type: 'phoneNumber', message: 'Your phone number is invalid. (+31612345678)' }
                  ]"
                  message="Your phone number contains errors"
                >
                  <input-default name="phone" placeholder="Enter your phone number">
                    <template slot="label">
                      Phone number
                    </template>
                  </input-default>
                </input-validator>
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
                  <input-validator
                    :rules="[
                    { type: 'postalCode', message: 'Your postal code is invalid. (1234 AB)' }
                  ]"
                    message="Your postal code contains errors"
                  >
                    <input-default name="postal_code" placeholder="1234 AB">
                      <template slot="label">
                        Postal code
                      </template>
                    </input-default>
                  </input-validator>
                </div>
                <div class="content__form-address-house-details">
                  <input-validator
                    :rules="[
                    { type: 'required', message: 'Your house number is required. (12)' },
                    { type: 'number', message: 'Your house number should only contain numbers. (12)' },
                  ]"
                    message="Your house number contains errors"
                  >
                    <input-default name="house_number" placeholder="123">
                      <template slot="label">
                        House number
                      </template>
                    </input-default>
                  </input-validator>
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
import TheSideNav from '../components/account/TheSideNav'
import TopBar from '../components/account/TopBar'
import PageContent from '../components/account/PageContent'
import InputValidator from '../components/form/InputValidator'
import AccountPageNavItem from '../components/account/AccountPageNavItem'

export default {
  components: {
    AccountPageNavItem,
    InputValidator,
    PageContent,
    TopBar,
    SideNav: TheSideNav,
    InputDefault
  },
  layout: 'account',
  middleware: 'auth'
}
</script>
