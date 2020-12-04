import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'zh-CN', // 语言标识，通过切换locale的值来实现语言切换
  fallbackLocale: 'zh-CN', // 备用
  messages: {
    'zh-CN': require('./locales/zh.json')
  }
})
