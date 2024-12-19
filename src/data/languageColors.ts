// 定义接口来明确对象结构和属性类型
interface LanguageMap {
    TypeScript: string;
    JavaScript: string;
    Vue: string;
    Python: string;
    HTML: string;
    CSS: string;
    'C++': string;
    C: string;
    Java: string;
    Dart: string;
}

const languageMap: {'key':string,'v':string} = {
    'TypeScript': "#3178C6",
    "JavaScript": "#F1E05A",
    "Vue": "#41B883",
    "Python": "#3572A5",
    "HTML": "#E34C26",
    "CSS": "#663399",
    "C++": "#F34B7D",
    "C": "#555555",
    "Java": "#b07219",
    "Dart": "#00B4AB"
};

function getValueByLanguage(language: string) {
    return languageMap[language]; // 此时不会报错，因为languageMap类型已明确
}

const targetLanguage = "Vue";
const result = getValueByLanguage(targetLanguage);
console.log(result);
