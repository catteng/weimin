import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    AOS.init({
      duration: 1000,
      once: true,
    })

    nuxtApp.hook('page:finish', () => {
      AOS.refresh()
    })
  }
})
