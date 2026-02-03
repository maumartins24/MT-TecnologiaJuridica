import { ref, onMounted } from 'vue'

const THEME_KEY = 'mt_theme'
const theme = ref('theme-dark')

export function useTheme() {
  function applyTheme(next) {
    const value = (next === 'theme-light') ? 'theme-light' : 'theme-dark'
    theme.value = value

    document.body.classList.remove('theme-dark', 'theme-light')
    document.body.classList.add(value)

    localStorage.setItem(THEME_KEY, value)
  }

  function toggleTheme() {
    applyTheme(theme.value === 'theme-dark' ? 'theme-light' : 'theme-dark')
  }

  onMounted(() => {
    const saved = localStorage.getItem(THEME_KEY)
    applyTheme(saved || 'theme-dark')
  })

  return { theme, toggleTheme, applyTheme }
}
