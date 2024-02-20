
// 自定义国际化配置
import { createI18n } from 'vue-i18n';
import stores from '@/store';

// 本地语言包
import enLocale from './en';
import zhCnLocale from './zh-cn';
import koKRLocale from "./kr";
const messages = {
    'zh-cn': {
        ...zhCnLocale,
    },
    en: {
        ...enLocale,
    },
    'ko-KR': {
        ...koKRLocale
    }
};



const i18n = createI18n({
    legacy: false,
    silentFallbackWarn: true,
    fallbackWarn: false,
    locale: stores.state.user.lang,
    messages: messages,
});

export default i18n;