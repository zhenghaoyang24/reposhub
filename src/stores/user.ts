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
    const storeGetTheme = ()=>{
        if (dataTheme.value === 'dark') {
            window.document.documentElement.setAttribute('theme', 'dark')
        }else{
            window.document.documentElement.setAttribute('theme', 'light')
        }
    }

        return {storeChangeTheme, dataTheme,storeGetTheme}
    }, {
        persist: {
            pick:['dataTheme']
        }
    }
)
