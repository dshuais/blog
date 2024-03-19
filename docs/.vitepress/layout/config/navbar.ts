/*
 * @Author: dushuai
 * @Date: 2024-03-19 10:24:07
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-19 10:28:12
 * @description: 导航栏
 */
import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/' },
  { text: 'Blog', link: '/blog', activeMatch: '/blog/' },
  {
    text: 'Columns', items: [
      { text: 'Column1', link: '/columns/column1' }
    ]
  },
  {
    text: "About",
    items: [
      { text: "Github", link: "https://github.com/dshuais" },
      { text: "掘金", link: "https://juejin.cn/user/3158230569584056/columns" },
      { text: "CSDN", link: "https://blog.csdn.net/m0_59206508" },
    ],
  }
]