import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/live/",
  ignoreDeadLinks: true,
  title: "芦笋直播助手",
  description: "低门槛打造高水平直播间，留住观众",
  lang: "zh-Hans",
  head: [
    ["link", { rel: "icon", href: "/live/logo.svg" }],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?592ba55993f3df6afcc69f8088276562";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
  ],
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "芦笋录屏", link: "https://lusun.com/" },
      { text: "芦笋提词器", link: "https://tcq.lusun.com" },
      { text: "关于我们", link: "https://lusun.com/about" },
    ],
    sidebar: [
      {
        text: "基础教程",
        collapsed: false,
        items: [
          { text: "🚀 如何 3 步开始直播", link: "/basic/how-to-start" },
          { text: "🔐 如何获取推流码", link: "/basic/streaming-code" },
        ],
      },
      // {
      //   text: "进阶教程",
      //   collapsed: false,
      //   items: [
      //     {
      //       text: "用芦笋制作“基础教育精品课”",
      //       link: "/advanced/jingpinke",
      //     },
      //     { text: "两种人像抠图方式", link: "/advanced/koutu" },
      //     { text: "添加视频封面", link: "/advanced/cover" },
      //     { text: "虚拟头像使用教程", link: "/advanced/avatar" },
      //     { text: "自定义水印", link: "/advanced/watermark" },
      //     { text: "美颜等更多设置", link: "/advanced/moresetting" },
      //     { text: "如何赚取收益", link: "/advanced/earnings" },
      //     { text: "上传本地视频到芦笋空间", link: "/advanced/upload" },
      //     { text: "文件夹功能&批量操作", link: "/advanced/folder" },
      //     { text: "添加视频封面", link: "/advanced/addcover" },
      //     { text: "芦笋群组", link: "/advanced/group" },
      //     { text: "字幕教程", link: "/advanced/word" },
      //     { text: "画笔功能", link: "/advanced/draw" },
      //     { text: "视频剪辑", link: "/advanced/video" },
      //     { text: "高级报表", link: "/advanced/form" },
      //     { text: "视频分享", link: "/advanced/share" },
      //     { text: "视频观看", link: "/advanced/see" },
      //     { text: "在线录制", link: "/advanced/online" },
      //   ],
      // },
      // {
      //   text: "常见问题",
      //   collapsed: false,
      //   items: [
      //     {
      //       text: "声音问题",
      //       collapsed: false,
      //       items: [
      //         { text: "Mac电脑录制系统声音", link: "/faq/voice/mac" },
      //         { text: "录制的视频没有声音", link: "/faq/voice/novoice" },
      //       ],
      //     },
      //     {
      //       text: "摄像头问题",
      //       collapsed: false,
      //       items: [
      //         { text: "摄像头打不开", link: "/faq/camera/cannot-open" },
      //         {
      //           text: "虚拟背景/智能抠像无法打开",
      //           link: "/faq/camera/virtual",
      //         },
      //       ],
      //     },
      //     { text: "视频保存相关", link: "/faq/save" },
      //     { text: "如何隐藏录制工具栏", link: "/faq/hidebar" },
      //     { text: "录制的视频模糊", link: "/faq/blur" },
      //   ],
      // },
      { text: "联系我们", link: "/contact" },
    ],
    search: {
      provider: "local",
      options: {
        detailedView: true,
        placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      level: [2, 4],
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "切换主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});
