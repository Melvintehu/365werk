export const state = () => ({})

export const mutations = {}

export const actions = {
  login (state, payload) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('user', JSON.stringify({
        email: 'melvin.tehu@gmail.com',
        first_name: 'Melvin',
        last_name: 'Tehubijuluw'
      }))
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
  }
}
