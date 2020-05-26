<template>
  <div id="app" class='app'>
    <app-navigation :items="navigationItems" />
    <app-header />
    <main id="main">
      <!-- <section-about />
      <section-features />
      <section-tours />
      <section-stories />
      <section-book /> -->
      <popup />
    </main>
  </div>
</template>
<script>
import AppNavigation from './views/AppNavigation'
import AppHeader from './views/AppHeader'
import AppFooter from './views/AppFooter'
import SectionAbout from './views/SectionAbout'
import SectionFeatures from './views/SectionFeatures'
import SectionTours from './views/SectionTours'
import SectionStories from './views/SectionStories'
import SectionBook from './views/SectionBook'
import Popup from './components/PopUp'


export default {
  components: {
    AppNavigation,
    AppHeader,
    AppFooter,
    SectionAbout, SectionFeatures, SectionTours, SectionStories, SectionBook,
    Popup
  },
  data: () => ({
    navigationItems: [
        {to: "#", label: "About Natous"},
        {to: "#", label: "Your Benefits"},
        {to: "#", label: "Popular Tours"},
        {to: "#", label: "Stories"},
        {to: "#", label: "Book Now"},
      ]
  })
  
}
</script>
