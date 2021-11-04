export default function ({ store, redirect }) {
  const currentLanguage = localStorage.getItem('language')

  if (currentLanguage === null) {
    store.commit('localization/setLanguage', 'nl')
  }
}
