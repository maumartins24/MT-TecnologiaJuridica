import { ref, onMounted } from 'vue'

const THEME_KEY = 'mt_theme'
const theme = ref('dark') // default

export function useTheme() {
  function applyTheme(value) {
    theme.value = value
    document.body.classList.remove('theme-dark', 'theme-light')
    document.body.classList.add(value === 'light' ? 'theme-light' : 'theme-dark')
    localStorage.setItem(THEME_KEY, value)
  }

  function toggleTheme() {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    const saved = localStorage.getItem(THEME_KEY)
    applyTheme(saved || theme.value)
  })

  return { theme, toggleTheme, applyTheme }
}
