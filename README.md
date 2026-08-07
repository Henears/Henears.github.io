# 游戏乐园 · 离线小游戏门户 (imaddablog)

类似 4399 的小游戏门户，基于 Hexo(Butterfly) 博客整站打包，
Flash 游戏由内置 **Ruffle 引擎** 离线运行，全部资源本地化，
**无需联网、无需安装**，插上 U 盘即可在无网电脑上玩。

## 目录结构

```
imaddablog/
├── start_game.bat     ★ 一键游玩: 内置免安装服务器 + 自动开浏览器(Flash 也能玩)
├── start_offline.bat     file:// 直接打开门户(仅 HTML5 稳定, Flash 受限)
├── stop_server.bat       手动停止本地服务器
├── server/
│   └── caddy.exe         免安装静态服务器(Windows 单文件)
└── web/                  ★ 网站根目录 = 整站源(可整体发布到 GitHub Pages)
    ├── index.html        博客首页(含"游戏"导航入口)
    ├── css/ js/ img/     博客主题资源(本地化, 不依赖 CDN)
    ├── ...               about/ archives/ tags/ ... 博客页面
    └── game/             ★ 游戏门户 + 引擎
        ├── index.html    门户主页(搜索 / 分类 / 主题)
        ├── player.html   游戏播放器(HTML5 iframe + Flash/Ruffle)
        ├── js/
        │   ├── games.js  ★ 游戏清单与门户配置 —— 加游戏只改这里
        │   └── app.js    门户逻辑
        ├── css/
        ├── engine/ruffle/   Flash 引擎(离线)
        └── games/
            ├── html5/      HTML5 游戏, 每个一个文件夹
            └── flash/      .swf 游戏文件
```

## 三种使用方式

| 方式 | 命令 | 适合 |
| --- | --- | --- |
| U盘离线完整版 | 双击 `start_game.bat` | 学校无网电脑, Flash 也能玩 |
| 无服务器直开 | 双击 `start_offline.bat` | 只想快速玩 HTML5 |
| 联网在线站 | 把 `web/` 内容发布到 GitHub Pages | 网上直接游玩 |

内置服务器地址: `http://127.0.0.1:9090/`(端口 9090, 已避开常见占用)。

在线发布时域名根目录即 `web/`，游戏入口为 `/game/`。

## 怎么添加游戏

只改 `web/game/js/games.js` 一个文件：

```js
// HTML5: 文件夹放入 games/html5/<id>/ , 配置:
{ id: 'snake', name: '贪吃蛇', desc: '…', cat: '休闲',
  tags: ['经典'], type: 'html5', path: 'games/html5/snake/index.html' }

// Flash: 把 .swf 文件放入 games/flash/ 并去掉扩展名(如 metal-slug), 配置:
{ id: 'metal-slug', name: '合金弹头', desc: '…', cat: '射击',
  tags: ['经典','街机'], type: 'swf', path: 'games/flash/metal-slug' }
```

> ⚠️ Flash 文件名**不要带 `.swf` 后缀**：部分浏览器里装有劫持 `.swf` 链接的 Flash/模拟器扩展，会导致点开游戏被重定向到外部网站。Ruffle 靠文件内容识别 SWF，无后缀也能正常解析。

分类(CATS)与主题(THEMES)也在 `games.js` 里维护。

## 说明

- 博客页面在 `file://` 模式下依赖绝对路径，因此整站离线请用 `start_game.bat`(内置服务器)。
- 统计/外链脚本(busuanzi 等)离线时会静默失败，不影响使用。
- Flash 引擎为 Ruffle 自托管版，SWF 文件随包携带，无需网络。
