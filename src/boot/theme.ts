import { boot } from 'quasar/wrappers'
import { Cookies } from 'quasar'
import { Dark } from 'quasar'
import { watch } from 'vue'

export default boot(() => {
  const cookie_name = process.env.COOKIE_THEME_NAME || ''
  const value = Cookies.get(cookie_name)

  const v = value == 'true'
  Dark.set(v)
  setTheme(v)

  watch(
    () => Dark.isActive,
    (val) => {
      Dark.set(val)
      Cookies.set(cookie_name, '' + val)
      window.alert('themeeeee')
      setTheme(val)
    },
  )
})

const setTheme = (val: boolean) => {
  const metaThemeColor = document.querySelector('meta[name=theme-color]')
  if (metaThemeColor) {
    const pColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()

    const color = val ? '#040b25' : pColor
    metaThemeColor.setAttribute('content', color)
  }
}

export const getThemeDark = () => {
  const cookie_name = process.env.COOKIE_THEME_NAME || ''
  const value = Cookies.get(cookie_name)
  const v = value == 'true'
  return v
}
