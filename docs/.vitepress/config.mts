/*
 * @Author: dushuai
 * @Date: 2024-03-18 09:33:02
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-19 10:42:20
 * @description: config
 */
import { defineConfig } from 'vitepress'
import { nav, sidebar } from './layout/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dshuais' blog",
  description: "dshuais' blog",

  /**
   * 简洁的url 去除.html
   */
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
