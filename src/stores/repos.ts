import {ref} from 'vue';
import {defineStore} from 'pinia';

export const useReposStore = defineStore('repos',()=>{
    const reposArrayStore = ref<[]>();
    const pushReposStoreFn = ()=>{
        const repos =
            {
                "type": "application/web",
                "author": "zhenghaoyang24",
                "reposName": "you-todo",
            }
    }
    const getReposStoreFn = ()=>{}

    return {reposArrayStore}

},{persist:true})
