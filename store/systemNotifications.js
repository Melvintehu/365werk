export const state = () => ({
  notification: null
})

export const mutations = {
  addNotification (state, notification) {
    state.notification = notification
  }
}

export const actions = {}

export const getters = {
  getNotification: (state) => {
    return state.notification
  }
}
