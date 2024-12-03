import {ref} from 'vue';
import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', () => {
        const dataTheme = ref('dark')
        const storeChangeTheme = (theme: String) => {
            if (theme === 'dark') {
                dataTheme.value = 'dark'
                window.document.documentElement.setAttribute('theme', 'dark')
            } else {
                window.document.documentElement.setAttribute('theme', 'light')
                dataTheme.value = 'light'
            }
        }
        return {storeChangeTheme, dataTheme}
    }, {
        persist: true
    }
)
