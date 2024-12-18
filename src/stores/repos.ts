import {ref} from 'vue';
import {defineStore} from 'pinia';
interface RepoInfo {
    author: string;
    reposName: string;
    description: string;
    stargazers_count: number;
    language: string;
}
export const useReposStore = defineStore('repos', () => {
    const reposArrayStore = ref<RepoInfo[]>([]);
    const pushReposStoreFn = (author: string, reposName: string, description: string, stargazers_count: number, language: string) => {
        const repos: {
            author: string, reposName: string, description: string, stargazers_count: number, language: string
        } =
            {
                author: "zhenghaoyang24",
                reposName: "reposhub",
                description: "reposhub",
                stargazers_count: 0,
                language: "Vue",
            }
        repos.author = author
        repos.reposName = reposName
        repos.description = description
        repos.stargazers_count = stargazers_count
        repos.language = language
        return reposArrayStore.value.push(repos)
    }
    const getReposStoreFn = () => {
    }

    return {reposArrayStore,pushReposStoreFn}

}, {persist: true})
