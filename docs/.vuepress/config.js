module.exports = {
    title: '开发文档',
    description: 'Welcome to my docs',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        nav: [
            // { text: '主页', link: '/' },
            {
                text: '前端文档', items: [
                    { text: 'docs', link: '/docs/' },
                ]
            },
        ],
        sidebar: {
            '/docs/': [
                {
                    title: "开发文档",
                    collapsable: true,
                    children: [
                            '',
                    ]
                },
            ],
        },
        sidebarDepth: 1,  // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
    }
}