// ============================================================
// 游戏清单配置 —— 添加游戏只改这个文件
// ------------------------------------------------------------
// HTML5 游戏: 把游戏文件夹放进 games/html5/<id>/ 即可
//   { id, name, desc, cat, tags:[], type:'html5', path:'games/html5/<id>/index.html' }
// Flash 游戏: 把 .swf 文件放进 games/flash/ 即可(用内置 Ruffle 引擎离线运行)
//   注意: 文件名请去掉 .swf 扩展名, 避免被浏览器里的 Flash 插件劫持
//   { id, name, desc, cat, tags:[], type:'swf', ratio:'宽:高', path:'games/flash/<文件名>' }
// ============================================================

const GAMES = [
  {
    id: 'snake',
    name: '贪吃蛇',
    desc: '方向键控制，空格暂停/继续',
    cat: '休闲',
    tags: ['经典', '单机'],
    type: 'swf',
    ratio: '5:4',
    path: 'games/flash/snake-classic'
  },
  {
    id: 'tetris',
    name: '俄罗斯方块',
    desc: '←→移动，↑旋转，↓加速，空格落底',
    cat: '益智',
    tags: ['经典', '单机'],
    type: 'html5',
    path: 'games/html5/tetris/index.html'
  },
  {
    id: 'breakout',
    name: '打砖块',
    desc: '鼠标/←→移动挡板，空格/点击发球',
    cat: '街机',
    tags: ['经典', '单机'],
    type: 'html5',
    path: 'games/html5/breakout/index.html'
  },
  {
    id: '2048',
    name: '2048',
    desc: '方向键/WASD/滑动操作',
    cat: '益智',
    tags: ['数字', '单机'],
    type: 'html5',
    path: 'games/html5/2048/index.html'
  },
  {
    id: 'sfh1',
    name: '战火英雄1',
    desc: 'WASD移动，鼠标瞄准射击，R装弹，Q换武器，E技能',
    cat: '射击',
    tags: ['经典', '街机', '战火英雄'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/strike-force-heroes-1'
  },
  {
    id: 'sfh2',
    name: '战火英雄2',
    desc: 'AD移动，W/空格跳跃，S下蹲，R装弹，Q换武器，E技能，鼠标瞄准射击',
    cat: '射击',
    tags: ['经典', '街机', '战火英雄'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/strike-force-heroes-2'
  },
  {
    id: 'sfh3',
    name: '战火英雄3',
    desc: 'AD移动，W跳跃，S下蹲，R装弹，E技能，Q换武器，鼠标瞄准射击',
    cat: '射击',
    tags: ['经典', '街机', '战火英雄'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/strike-force-heroes-3'
  },
  {
    id: 'fengkuang-xiaoren',
    name: '疯狂小人战斗',
    desc: '1P:WASD移动，J攻击，K投掷，Shift防御；2P:方向键移动，0/1/2攻击',
    cat: '格斗',
    tags: ['格斗', '多人', '经典'],
    type: 'swf',
    ratio: '3:2',
    path: 'games/flash/fengkuang-xiaoren'
  },
  {
    id: 'street-fighter-2',
    name: '街头霸王Ⅱ',
    desc: '方向键移动，J拳，K脚，L跳，U/I/O必杀技',
    cat: '格斗',
    tags: ['格斗', '街霸', '经典'],
    type: 'swf',
    ratio: '5:3',
    path: 'games/flash/street-fighter-2'
  },
  {
    id: 'naruto-vs-bleach',
    name: '死神VS火影3.3',
    desc: 'W跳，A/D移动，S防御，J攻击，U远攻，I技能，O必杀，L援助',
    cat: '格斗',
    tags: ['格斗', '动漫', '对战'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/naruto-vs-bleach'
  },
  {
    id: 'fireboy-watergirl',
    name: '森林冰火人',
    desc: '1P方向键移动，2P WASD移动；各自吃到对应宝石，避开对方液体',
    cat: '冒险',
    tags: ['双人', '合作', '经典'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/fireboy-watergirl'
  },
  {
    id: 'pvz',
    name: '植物大战僵尸',
    desc: '鼠标收集阳光、种植植物、铲除僵尸',
    cat: '益智',
    tags: ['塔防', '经典'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/pvz'
  },
  {
    id: 'stickman-badminton',
    name: '火柴人羽毛球',
    desc: '1P WASD移动，空格击球；2P方向键移动，回车击球',
    cat: '体育',
    tags: ['双人', '体育', '休闲'],
    type: 'swf',
    ratio: '11:8',
    path: 'games/flash/stickman-badminton'
  },
  {
    id: 'boxhead-zw',
    name: '僵尸危机5',
    desc: 'WASD移动，鼠标瞄准射击，1-4切枪，R装弹',
    cat: '射击',
    tags: ['僵尸', '生存', '经典'],
    type: 'swf',
    ratio: '700:490',
    path: 'games/flash/boxhead-zombie-wars'
  },
  {
    id: 'boxhead-2play',
    name: '僵尸危机·双人版',
    desc: '1P WASD+鼠标，2P方向键+鼠标',
    cat: '射击',
    tags: ['僵尸', '双人', '生存'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/boxhead-2play'
  },
  {
    id: 'boxhead-halloween',
    name: '僵尸危机·万圣节',
    desc: 'WASD移动，鼠标瞄准射击',
    cat: '射击',
    tags: ['僵尸', '万圣节', '生存'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/boxhead-halloween'
  },
  {
    id: 'kof-wing191',
    name: '拳皇 Wing 1.91',
    desc: 'W跳，A/D移动，S防御，J轻拳，K轻脚，L重击，U/I/O必杀技',
    cat: '格斗',
    tags: ['格斗', '拳皇', 'KOF'],
    type: 'swf',
    ratio: '3:2',
    path: 'games/flash/kof-wing-191'
  }
]

// 主题入口 —— 每个主题按分类/标签筛选游戏
// { id, name, icon, desc, cats:[], tags:[] }
const THEMES = [
  { id: 'classic', name: '经典怀旧', icon: '📺', desc: '8090 的童年回忆', cats: [], tags: ['经典'] },
  { id: 'arcade', name: '街机射击', icon: '🔫', desc: '战火英雄、打砖块', cats: ['街机', '射击'], tags: [] },
  { id: 'puzzle', name: '益智烧脑', icon: '🧩', desc: '数字与策略', cats: ['益智'], tags: ['数字'] },
  { id: 'relax', name: '休闲一刻', icon: '🍃', desc: '轻松解压小品', cats: ['休闲'], tags: ['单机'] }
]

// 分类展示顺序
const CATS = ['全部', '格斗', '街机', '射击', '益智', '休闲', '冒险', '体育']

// 门户信息
const PORTAL = {
  name: '游戏乐园',
  subtitle: '离线畅玩 · 免下载 · 免安装',
  banner: null
}