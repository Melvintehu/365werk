<template>
  <div class="page-wrapper">
    <the-side-nav />
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
        </div>
        <!-- Page content-->
        <the-personal-details-form />
      </div>
    </div>
  </div>
</template>
<script>
import TheSideNav from '../components/account/TheSideNav'
import TopBar from '../components/account/TopBar'
import AccountPageNavItem from '../components/account/AccountPageNavItem'
import ThePersonalDetailsForm from '../components/account/ThePersonalDetailsForm'

export default {
  components: {
    ThePersonalDetailsForm,
    AccountPageNavItem,
    TopBar,
    TheSideNav
  },
  layout: 'account',
  middleware: 'auth'
}
</script>
