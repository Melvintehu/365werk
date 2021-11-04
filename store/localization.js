import nl from '~/localitzation/nl'
import gb from '~/localitzation/gb'

export const state = () => ({
  language: 'nl',
  languages: {
    gb,
    nl
  }
})

export const mutations = {
  setLanguage (state, language) {
    state.language = language
    localStorage.setItem('language', state.language)
  }
}

export const actions = {

}

export const getters = {
  getCurrentLanguage: (state) => {
    return state.language
  },
  getTranslation: (state, commit) => (key) => {
    return state.languages[state.language][key]
  }
}
