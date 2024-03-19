/*
 * @Author: dushuai
 * @Date: 2024-03-19 10:22:18
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-19 10:30:04
 * @description: 侧边栏
 */
import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/blog/': [
    {
      text: 'Introduction',
      items: [
        {
          text: '什么是 keep-design?',
          link: '/guide/001_keepdesign'
        },
        {
          text: '快速开始',
          link: '/guide/002_getting-started'
        },
      ]
    }
  ],
}
