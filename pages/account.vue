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
            {{ translate('personal_details') }}
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
          <account-page-nav-item to="#preferences">
            {{ translate('preferences') }}
          </account-page-nav-item>
          <account-page-nav-item to="#work-experience">
            {{ translate('work_experience') }}
          </account-page-nav-item>
          <account-page-nav-item to="#educations">
            {{ translate('educations') }}
          </account-page-nav-item>
        </div>
        <!-- Page content-->
        <page-content>
          <template slot="title">
            {{ translate('personal_details') }}
          </template>
          <div class="page-inner__content-section">
            <h2 class="page-inner__content-section-title">
              {{ translate('contact_information') }}
            </h2>
            <div class="content__form">
              <div class="content__form-group">
                <input-validator
                  :rules="[
                    { type: 'required', message: translate('required', translate('email_address')) },
                    { type: 'email', message: translate('invalid', translate('email_address')) },
                    { type: 'minLength', rule: 2, message: translate('min_length', 2) },
                    { type: 'maxLength', rule: 255, message: translate('max_length', 255) }
                  ]"
                  :message="translate('validation_errors', translate('email_address'))"
                >
                  <input-default v-model="user.email" name="email" :placeholder="translate('placeholder_email')">
                    <template slot="label">
                      {{ translate('email_address') }}
                    </template>
                  </input-default>
                </input-validator>
                <input-validator
                  :rules="[
                    { type: 'required', message: translate('required', translate('phone_number')) },
                    { type: 'phoneNumber', message: translate('invalid', `${translate('phone_number')} (+31612345678)`) }
                  ]"
                  :message="translate('validation_errors', translate('phone_number'))"
                >
                  <input-default v-model="user.phone" name="phone" :placeholder="translate('placeholder_phone_number')">
                    <template slot="label">
                      {{ translate('phone_number') }}
                    </template>
                  </input-default>
                </input-validator>
              </div>
            </div>
          </div>
          <div class="page-inner__content-section">
            <h2 class="page-inner__content-section-title">
              {{ translate('address') }}
            </h2>
            <div class="content__form">
              <div class="content__form-address">
                <div class="content__form-group">
                  <input-validator
                    :rules="[
                      { type: 'required', message: 'Postal code is required.' },
                      { type: 'postalCode', message: 'Postal code is invalid. (1234 AB)' }
                    ]"
                    :message="translate('validation_errors', translate('postal_code'))"
                  >
                    <input-default v-model="user.postal_code" name="postal_code" placeholder="1234 AB">
                      <template slot="label">
                        {{ translate('postal_code') }}
                      </template>
                    </input-default>
                  </input-validator>
                </div>
                <div class="content__form-address-house-details">
                  <input-validator
                    :rules="[
                      { type: 'required', message: 'House number is required.' },
                      { type: 'number', message: 'House number should only contain numbers. (12)' },
                    ]"
                    :message="translate('validation_errors', translate('house_number'))"
                  >
                    <input-default v-model="user.house_number" name="house_number" placeholder="123">
                      <template slot="label">
                        {{ translate('house_number') }}
                      </template>
                    </input-default>
                  </input-validator>
                  <input-validator
                    :rules="[
                      { type: 'letter', message: 'House number add on should only contain letters. (A)' },
                    ]"
                    :message="translate('validation_errors', translate('house_number_add_on'))"
                  >
                    <input-default v-model="user.add_on" name="add_on" placeholder="A">
                      <template slot="label">
                        {{ translate('add_on') }}
                      </template>
                    </input-default>
                  </input-validator>
                </div>
              </div>
              <div class="content__form-group">
                <input-validator
                  :rules="[
                    { type: 'required', message: 'Street is required.' },
                    { type: 'minLength', rule: 1, message: 'Street has a minimum of 1 characters.' },
                    { type: 'maxLength', rule: 55, message: 'Street has a maximum of 55 characters.' }
                  ]"
                  :message="translate('validation_errors', translate('street'))"
                >
                  <input-default v-model="user.street" name="street" :placeholder="translate('placeholder_street')">
                    <template slot="label">
                      {{ translate('street') }}
                    </template>
                  </input-default>
                </input-validator>
                <input-validator
                  :rules="[
                    { type: 'required', message: 'City is required.' },
                    { type: 'minLength', rule: 2, message: 'City has a minimum of 2 characters.' },
                    { type: 'maxLength', rule: 25, message: 'City has a maximum of 25 characters.' }
                  ]"
                  :message="translate('validation_errors', translate('city'))"
                >
                  <input-default v-model="user.city" name="city" :placeholder="translate('placeholder_city')">
                    <template slot="label">
                      {{ translate('city') }}
                    </template>
                  </input-default>
                </input-validator>
              </div>
            </div>
          </div>
          <div class="page-inner__content-section">
            <h2 class="page-inner__content-section-title">
              {{ translate('personal_details') }}
            </h2>
            <div class="content__form">
              <div class="content__form-group">
                <input-validator
                  :rules="[
                    { type: 'required', message: 'Your name is required.' },
                    { type: 'minLength', rule: 1, message: 'Name has a minimum of 1 characters.' },
                    { type: 'maxLength', rule: 255, message: 'Name has a maximum of 255 characters.' }
                  ]"
                  :message="translate('validation_errors', translate('name'))"
                >
                  <input-default v-model="user.name" name="name" :placeholder="translate('placeholder_name')">
                    <template slot="label">
                      {{ translate('name') }}
                    </template>
                  </input-default>
                </input-validator>
                <input-validator
                  :rules="[
                    { type: 'required', message: 'Your surname is required.' },
                    { type: 'minLength', rule: 1, message: 'Surname has a minimum of 1 characters.' },
                    { type: 'maxLength', rule: 255, message: 'Surname has a maximum of 255 characters.' }
                  ]"
                  :message="translate('validation_errors', translate('surname'))"
                >
                  <input-default v-model="user.surname" name="surname" :placeholder="translate('placeholder_surname')">
                    <template slot="label">
                      {{ translate('surname') }}
                    </template>
                  </input-default>
                </input-validator>
              </div>
            </div>
            <!-- actions bar-->
            <div class="actions-bar">
              <div class="content__form-button-wrapper">
                <button class="button__form" @click="save">
                  Save
                </button>
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
  middleware: 'auth',
  computed: {
    user () {
      return { ...this.$store.state.auth.user }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('auth/updateUser', this.user).then(() => {
        this.notify('Yes! Success!', 'You have successfully updated your profile!')
        window.scrollTo(0, 0)
      })
    }
  }
}
</script>
