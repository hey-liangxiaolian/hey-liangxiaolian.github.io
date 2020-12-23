module.exports = {
    title: "hey Lilian",
    dest: "./docs",
    themeConfig: {
        logo: "/logo.png",
        //导航栏
        nav: [
            { text: "Home", link: "/" },
            {
                text: "前端",
                items: [
                    {
                        text: "js",
                        link: "/js/1.md",
                    },
                    {
                        text: "css",
                        link: "/css/1.md",
                    },
                    {
                        text: "vue",
                        link: "/vue/1.md",
                    },
                    {
                        text: "uni-app",
                        link: "/uni-app/1.md",
                    },
                ],
            },
            {
                text: "工具",
                items: [
                    {
                        text: "vscode",
                        link: "/vscode/1.md",
                    },
                    {
                        text: "git",
                        link: "/git/1.md",
                    },
                ],
            },
            {
                text: "扫呗",
                items: [
                    {
                        text: "技术对接常见问题",
                        link: "/saobei/1.md",
                    },
                    {
                        text: "规范",
                        items: [
                            {
                                text: "代码提交规范",
                                link: "/saobei/2.md",
                            },
                        ],
                    },
                ],
            },
        ],
        // 侧边栏
        sidebar: "auto",
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
            "/js/": [
                ["1.md", "数组常用方法"],
                ["2.md", "判断"],
            ],
            "/saobei/": [
                ["1.md", "技术对接常见问题"],
                ["2.md", "规范"],
            ],
            "/git/": [
                ["1.md", "git常用指令"],
                ["2.md", "git相关问题"],
            ],
        },

        // 最后更新时间
        lastUpdated: "Last Updated", // string | boolean
        // 页面滚动效果
        smoothScroll: true,
    },
}
