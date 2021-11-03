<template>
  <div class="page-wrapper">
    <side-nav />

    <div class="page">
      <!--Page top bar-->
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
          <progress-bar />
        </div>
      </div>
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
        <!-- Page content-->
        <div class="page-inner__content">
          <div class="page-inner__content-wrapper">
            <h1 class="page-inner__content-title">
              Personal details
            </h1>
            <div class="page-inner__content-section">
              <h2 class="page-inner__content-section-title">
                Contact information
              </h2>

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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputDefault from '../components/form/InputDefault'
import SideNav from '../components/account/SideNav'
import ProgressBar from '../components/account/ProgressBar'
export default {
  components: { ProgressBar, SideNav, InputDefault },
  layout: 'account'
}
</script>
