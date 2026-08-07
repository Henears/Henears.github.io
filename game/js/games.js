// ============================================================
// 游戏清单配置 —— 添加游戏只改这个文件
// ------------------------------------------------------------
// HTML5 游戏: 把游戏文件夹放进 games/html5/<id>/ 即可
//   { id, name, desc, cat, tags:[], type:'html5', path:'games/html5/<id>/index.html' }
// Flash 游戏: 把 .swf 文件放进 games/flash/ 即可(用内置 Ruffle 引擎离线运行)
//   注意: 文件名请去掉 .swf 扩展名(如 strike-force-heroes-1), 避免被浏览器里的 Flash 插件劫持
//   { id, name, desc, cat, tags:[], type:'swf', path:'games/flash/<文件名>' }
// ============================================================

const GAMES = [
  {
    id: 'snake',
    name: '贪吃蛇',
    desc: '经典贪吃蛇，键盘方向键控制，吃到食物变长',
    cat: '休闲',
    tags: ['经典', '单机'],
    type: 'swf',
    ratio: '5:4',
    path: 'games/flash/snake-classic'
  },
  {
    id: 'tetris',
    name: '俄罗斯方块',
    desc: '经典俄罗斯方块，消行得分，长按↓加速下落',
    cat: '益智',
    tags: ['经典', '单机'],
    type: 'html5',
    path: 'games/html5/tetris/index.html'
  },
  {
    id: 'breakout',
    name: '打砖块',
    desc: '经典打砖块，用挡板接球击碎所有砖块',
    cat: '街机',
    tags: ['经典', '单机'],
    type: 'html5',
    path: 'games/html5/breakout/index.html'
  },
  {
    id: '2048',
    name: '2048',
    desc: '合并数字方块，凑出 2048！方向键或滑动操作',
    cat: '益智',
    tags: ['数字', '单机'],
    type: 'html5',
    path: 'games/html5/2048/index.html'
  },
  {
    id: 'sfh1',
    name: '战火英雄1',
    desc: '经典枪战闯关，中文版。鼠标瞄准射击，WASD 移动，R 装弹，Q 切换武器，E 技能',
    cat: '射击',
    tags: ['经典', '街机', '战火英雄'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/strike-force-heroes-1'
  },
  {
    id: 'sfh2',
    name: '战火英雄2',
    desc: '中文版。鼠标瞄准射击，AD 移动，W/空格 跳跃，S 下蹲，R 装弹，Q 切换武器，E 技能',
    cat: '射击',
    tags: ['经典', '街机', '战火英雄'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/strike-force-heroes-2'
  },
  {
    id: 'sfh3',
    name: '战火英雄3',
    desc: '完全汉化版。鼠标瞄准射击，AD 移动，W 跳跃，S 下蹲，R 装弹，E 技能，Q 切换武器',
    cat: '射击',
    tags: ['经典', '街机', '战火英雄'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/strike-force-heroes-3'
  },
  {
    id: 'fengkuang-xiaoren',
    name: '疯狂小人战斗',
    desc: '经典多人格斗。WASD 移动，J 攻击，K 投掷，Shift 防御；2P 用方向键/0/1/2',
    cat: '格斗',
    tags: ['格斗', '多人', '经典'],
    type: 'swf',
    ratio: '3:2',
    path: 'games/flash/fengkuang-xiaoren'
  },
  {
    id: 'street-fighter-2',
    name: '街头霸王II',
    desc: '经典街霸格斗。方向键移动，J 拳，K 脚，L 跳，U/I/O 必杀技',
    cat: '格斗',
    tags: ['格斗', '街霸', '经典'],
    type: 'swf',
    ratio: '5:3',
    path: 'games/flash/street-fighter-2'
  },
  {
    id: 'naruto-vs-bleach',
    name: '死神VS火影3.3',
    desc: '忍者与死神大乱斗。W 跳，A/D 移动，S 防御，J 攻击，U 远攻，I 技能，O 必杀，L 援助',
    cat: '格斗',
    tags: ['格斗', '动漫', '对战'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/naruto-vs-bleach'
  },
  {
    id: 'fireboy-watergirl',
    name: '森林冰火人',
    desc: '经典双人合作闯关。1P 方向键移动，2P WASD 移动，各自吃到对应宝石并避开对方的液体',
    cat: '冒险',
    tags: ['双人', '合作', '经典'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/fireboy-watergirl'
  },
  {
    id: 'pvz',
    name: '植物大战僵尸',
    desc: '完整中文版。鼠标收集阳光、种植植物，抵御一波波僵尸入侵，50 个冒险关卡',
    cat: '益智',
    tags: ['塔防', '经典'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/pvz'
  },
  {
    id: 'stickman-badminton',
    name: '火柴人羽毛球',
    desc: '双人羽毛球对战。1P WASD 移动空格击球，2P 方向键回车击球',
    cat: '体育',
    tags: ['双人', '体育', '休闲'],
    type: 'swf',
    ratio: '11:8',
    path: 'games/flash/stickman-badminton'
  },
  {
    id: 'boxhead-zw',
    name: '冲出僵尸的包围',
    desc: 'Boxhead: The Zombie Wars 经典打僵尸。WASD 移动，鼠标瞄准射击，1-4 切枪，R 装弹',
    cat: '射击',
    tags: ['僵尸', '生存', '经典'],
    type: 'swf',
    ratio: '700:490',
    path: 'games/flash/boxhead-zombie-wars'
  },
  {
    id: 'boxhead-2play',
    name: '冲出僵尸的包围2Play',
    desc: 'Boxhead 双人合作版。1P WASD+鼠标，2P 方向键+鼠标，一起守住房间',
    cat: '射击',
    tags: ['僵尸', '双人', '生存'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/boxhead-2play'
  },
  {
    id: 'boxhead-halloween',
    name: '冲出僵尸的包围·万圣节',
    desc: 'Boxhead 万圣节特辑。WASD 移动，鼠标瞄准射击，消灭幽灵僵尸',
    cat: '射击',
    tags: ['僵尸', '万圣节', '生存'],
    type: 'swf',
    ratio: '4:3',
    path: 'games/flash/boxhead-halloween'
  },
  {
    id: 'kof-wing191',
    name: '拳皇Wing1.91',
    desc: '拳皇 Wing 最新版，KOF 同人格斗巅峰。W 跳 A/D 移动 S 防御，J 轻拳 K 轻脚 L 重击，U/I/O 技能',
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
  name: '!博客!',
  subtitle: '离线畅玩 · 免下载 · 免安装',
  banner: null
}
