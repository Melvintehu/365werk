export const state = () => ({
  user: null
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

export const actions = {
  login ({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      fetch('https://login-opdracht.365werk.workers.dev/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password
        })
      }).then((response) => {
        response.json().then((data) => {
          const user = { email: data.email, name: data.name, phone: data.phone }
          localStorage.setItem('user', JSON.stringify(user))
          commit('setUser', user)

          resolve()
        }).catch((e) => {
          reject(e)
        })
      })
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
