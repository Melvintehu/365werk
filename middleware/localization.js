export default function ({ store, redirect }) {
  const currentLanguage = localStorage.getItem('language')

  if (currentLanguage === null || currentLanguage === undefined) {
    store.commit('localization/setLanguage', 'nl')
  } else {
    store.commit('localization/setLanguage', currentLanguage)
  }
}
