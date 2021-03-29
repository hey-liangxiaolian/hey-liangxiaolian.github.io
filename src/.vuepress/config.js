module.exports = {
    title: 'hey Lilian',
    dest: './docs',
    themeConfig: {
        logo: '/logo.png',
        //导航栏
        nav: [
            { text: 'Home', link: '/' },
            {
                text: '前端',
                items: [
                    {
                        text: 'js',
                        link: '/js/1.md',
                    },
                    {
                        text: 'css',
                        link: '/css/1.md',
                    },
                    {
                        text: 'vue',
                        link: '/vue/1.md',
                    },
                    {
                        text: 'uni-app',
                        link: '/uni-app/1.md',
                    },
                    {
                        text: 'interview',
                        link: '/interview/1.md',
                    },
                    {
                        text: '兼容性',
                        link: '/compatibility/1.md',
                    },
                ],
            },
            {
                text: '工具',
                items: [
                    {
                        text: 'vscode',
                        link: '/vscode/1.md',
                    },
                    {
                        text: 'git',
                        link: '/git/1.md',
                    },
                ],
            },
            {
                text: '扫呗',
                items: [
                    {
                        text: '技术对接常见问题',
                        link: '/saobei/1.md',
                    },
                    {
                        text: '规范',
                        items: [
                            {
                                text: '代码提交规范',
                                link: '/saobei/2.md',
                            },
                        ],
                    },
                ],
            },
        ],
        // 侧边栏
        sidebar: 'auto',
        // sidebar: false,
        // sidebar: {
        //     "/saobei/": ["1.html", "2.html"],
        // },
        // [
        // {
        //     title: "首页", // 必要的
        //     path: "/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // },
        // {
        //     title: "前端",
        //     children: [
        //         {
        //             title: "JS",
        //             path: "/js/1.html",
        //         },
        //         {
        //             title: "uni-app",
        //             path: "/uni-app/1.html",
        //         },
        //     ],
        // },
        // ]
        sidebar: {
            '/js/': [
                ['1.md', '数组常用方法'],
                ['2.md', 'ES6新特性'],
            ],
            '/interview/': [
                ['1.md', '技能顺序'],
                ['2.md', 'js'],
                ['3.md', 'html'],
                ['4.md', 'css'],
                ['5.md', 'vue'],
                ['6.md', 'react'],
                ['7.md', 'ts'],
            ],
            '/saobei/': [
                ['1.md', '技术对接常见问题'],
                ['2.md', '规范'],
            ],
            '/git/': [
                ['1.md', 'git常用指令'],
                ['2.md', 'git相关问题'],
            ],
            '/compatibility/': [
                ['1.md', '兼容性'],
                ['2.md', 'css兼容'],
                ['3.md', 'js兼容'],
            ],
            '/vue/': [
                ['1.md', '基本'],
                ['2.md', '生命周期'],
                ['3.md', '组件通信'],
                ['4.md', 'Vuex'],
                ['5.md', '其他1'],
                ['6.md', '其他2'],
            ],
        },

        // 最后更新时间
        lastUpdated: 'Last Updated', // string | boolean
        // 页面滚动效果
        smoothScroll: true,
    },
}
