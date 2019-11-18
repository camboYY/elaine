export default ({ app, route, redirect }) => {
  if (route.path === '/') {
    let locale = app.i18n.locale

    const localeCookie = app.$cookie.get('lang')
    locale = localeCookie || 'en'

    if (locale && locale !== app.i18n.locale) {
      redirect('/' + locale, route.query)
      return
    }
  }

  app.router.afterEach((to, from, next) => {
    let locale = app.i18n.locale
    app.$cookie.set('lang', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  })
}
