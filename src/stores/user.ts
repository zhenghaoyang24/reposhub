import {ref} from 'vue';
import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', () => {
    // 类别
    const storeCategory = ref<String>('collect')
    const storeChangeCategory = (value:String)=>{
        storeCategory.value = value;
        storeChangeCategoryChildren('all')
    }
    // 子类别
    const storeCategoryChildren = ref<String>('all')
    const storeChangeCategoryChildren = (value:String)=>{
        storeCategoryChildren.value = value
    }
    // 主题
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
    const storeGetTheme = () => {
        if (dataTheme.value === 'dark') {
            window.document.documentElement.setAttribute('theme', 'dark')
        } else {
            window.document.documentElement.setAttribute('theme', 'light')
        }
    }

    return {storeCategoryChildren,storeChangeTheme, dataTheme, storeGetTheme,storeChangeCategory,storeCategory,storeChangeCategoryChildren}
    }, {
    persist: {
        pick: ['dataTheme']
    }
    }
)
