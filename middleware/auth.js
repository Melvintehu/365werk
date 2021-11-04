export default function ({ store, redirect }) {
  const isAuthenticated = store.getters['auth/isAuthenticated']
  if (!isAuthenticated) {
    redirect('/login')
  }
  store.commit('auth/setUser', JSON.parse(localStorage.getItem('user')))
}
