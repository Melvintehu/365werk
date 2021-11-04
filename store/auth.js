export const state = () => ({
  user: null
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

export const actions = {
  login ({ commit }) {
    return new Promise((resolve, reject) => {
      const user = { email_address: 'melvin.tehu@gmail.com' }
      localStorage.setItem('user', JSON.stringify(user))
      commit('setUser', user)
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      localStorage.removeItem('user')
      commit('setUser', null)
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  },
  updateUser ({ commit }, userData) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('user', JSON.stringify(userData))
      commit('setUser', userData)
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }
}

export const getters = {
  isAuthenticated: (state) => {
    const user = localStorage.getItem('user')
    return user !== null
  },
  getUser: (state) => {
    return state.user
  }
}
