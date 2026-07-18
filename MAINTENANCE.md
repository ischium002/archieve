# 维护手册 —— OC Archive 主站

给未来的你（或者未来的 Claude / agent）看的：改内容、加角色、动样式，照这份走，不用重新逆向整个站。

> 配套文档：`ROADMAP.md`（发展规划，做新功能前先看有没有对应条目）。
> 姊妹仓库：`../ph-timeline/`（时间线 + 故事阅读页，有自己的 MAINTENANCE.md，别拿本手册套那边）。
> 最后更新：2026-07-11

---

## 0. 一分钟概览

- **这是什么**：坐骨的 OC 档案站主站，纯静态、无构建步骤、无依赖（hub 除外，见第 5 节）。双击 `index.html` 就能在浏览器里看效果。
- **线上地址**：GitHub Pages，仓库 `github.com/ischium002/archieve`（注意仓库名拼写就是 archieve，别"好心"改对）。
- **三个页面**（都在 `index.html` 里，hash 路由切换）：
  | 页面 | 路由 | 内容 |
  |---|---|---|
  | Universe | `#world` | 世界观卡片 + 角色速览条 |
  | Characters | `#chars/<角色id>` | 五人档案（个人档案 tab + CP 线 tab） |
  | Networking | `#networking` | 关系网图 + 点击抽屉 |
- **数据与渲染分离**：内容设定几乎全在 `chars-data.js`，`index.html` 只管渲染。改文案先去 chars-data.js 找，找不到再翻 index.html（世界观页的卡片是例外，直接写在 HTML 里）。

## 文件地图

```
index.html                    主站全部（CSS + 三页 HTML + 渲染逻辑），~2300 行
chars-data.js                 内容数据：CHARS / CP_DATA / CONSTELLATIONS / NET_LINKS / NET_POSITIONS
_header.js                    ↑ 这份数据的 schema 注释稿（纯注释、没被任何页面引用、未入 git，只在本机有）
lexicon/                      设定词条馆（卡片盒），独立静态页
  index.html                  页面 + 渲染逻辑
  lexicon-data.js             词条数据（LEX_CATS / LEX_ENTRIES）← 改词条只动这个
hub/                          时间线入口页（双宇宙波浪线），独立小 React 页
  hub.src.jsx                 源码（JSX）
  index.html                  部署页，内联的是 Babel 编译产物 ← 改 hub 看第 5 节
  react*.min.js               本地 React，别升级
index.html.backup-pre-portrait  历史回滚备份（*.backup* 已 gitignore）
```

---

## 1. 最常见的操作

### 改角色档案内容

全在 `chars-data.js` 的 `CHARS` 数组。每个角色一个对象：基本信息（`name` / `nameAlt` / `impression` / `image` / `stats` / `accent` 色）+ `profile` 区块数组。要点：

- profile 区块按字段自动选排版：`body`（自由 HTML）/ `outfits`（label / text / img）/ `playlist`（n / title / artist / note）/ `symbols` / `mbti`（备用格式）。
- `relations` 字段**暂不渲染**，内容保留备用——别删，也别自作主张把它渲染出来（关系内容走 Networking 页）。
- 正文里可以用 `<span class="spoiler">...</span>` 做剧透遮罩（hover 或点击显形，触屏靠点击）。

### 改 CP 线

`chars-data.js` 的 `CP_DATA`，key 是 `'小index-大index'`（如 `'0-1'` = Phorion×Hesperon）。结构：`pov`（双视角）/ `timeline`（大事记，era 里的 `\n` 会换行）/ `vignettes`(日常碎片) / `player`（BGM，音频文件放在本仓库里由 Pages 直出）。对白用现成的 `.dialogue-block` / `.dialogue-line`（加 `highlight` 类是强调色那侧）。

### 改关系网

- 连线：`NET_LINKS`，每条 `show` 控制显隐，`label` 是线上标签，`fromText` / `toText` 是抽屉里的双视角短评。
- 节点位置：`NET_POSITIONS`，坐标基于 viewBox 1000×680，改数字移动。

### 改角色星图

`CONSTELLATIONS`，key 是角色 id。每颗星 `x/y/r/o`，可选 `tw`（闪烁）、`ring`（空心圈，目前只有 Dul 那颗缺席的星在用，有含义，别顺手删）。`links` 是星与星连线的下标对。

### 改世界观页（Universe）

这页没有数据文件，直接改 `index.html` 里 `<div class="page active" id="page-world">` 下的 `world-card`。加一张卡就是复制一个 `world-card` 块。
注意：族群 / 契约类词条卡已迁入 `lexicon/`（2026-07-18），别在这页复活它们——设定词条一律进词条馆，Universe 页只放综述卡。

### 改设定词条馆（Lexicon）

只动 `lexicon/lexicon-data.js`（schema 注释在文件头，spec 在 `specs/lexicon-card-catalog.md`）。要点：
- 加词条 = `LEX_ENTRIES` 加对象；`id` 是锚点路由（`lexicon/#<id>`），起了就别改。
- 编号按数组下标自动生成（含 `draft: true` 占位），所以**别删数组中间的条目**，删 = 后面全体改号；不要的词条标 `draft: true` 雪藏。
- 词条上架 = 把 `draft: true` 去掉。全站别处引用术语，就链 `lexicon/#<id>`。

### 新增一个角色（完整 checklist）

1. `chars-data.js`：`CHARS` 数组加对象（`id` 会成为路由，起了就别改）。
2. `index.html` 顶部 `:root`：加角色主色 token（`--xx` 和 `--xx-tint`），照现有五个的格式。
3. `index.html` Universe 页：`char-strip` 里加一张 `strip-card`（onclick 序号 = 数组下标）。
4. `index.html` Characters 页：`char-selector` 里加一个 `char-selector-btn`。
5. `chars-data.js`：`CONSTELLATIONS` 加星图、`NET_POSITIONS` 加节点坐标、`NET_LINKS` 加连线。
6. 有 CP 线的话加 `CP_DATA` 条目，并设对应角色的 `cpTarget`。

路由、hero 渲染、tab 都是按数据自动的，不用另外接线。

---

## 2. 路由机制（改页面切换逻辑前必读）

hash 路由：`#world` / `#networking` / `#chars/<id>`。`showPage()` / `openChar()` **只负责写 hash**，真正的 DOM 切换统一走 `applyRoute()`（这样刷新、前进后退、直接贴链接都能复原）。要加新页面就照这个模式：先写 hash，让 applyRoute 做事，别在 onclick 里直接改 DOM。

---

## 3. 部署

```bash
git add -A && git commit -m "..."   # 提交随时可以
git push                            # ⚠️ push 前必须先问坐骨，不要自己发起
```

Pages 直接吃仓库根目录，push 即上线，无构建。改动上线前先本地双击 `index.html` 过一遍（三个页面 + 手机宽度）。

---

## 4. 约定与红线

**内容红线（比代码红线更重要）：**

- ❌ **私密设定不上页**。最多一句暗示，或者进 `.spoiler`。拿不准某段设定算不算私密，问坐骨，别猜。
- ❌ **Médici 的设定有两个来源版本**，遇到冲突别自己挑一个用，问坐骨。
- ✍️ **文案只拟稿**：Claude 写的文案是草稿，坐骨会自己改。别追求"定稿感"，把意思写对就行。
- ✍️ 文风：冷幽默要一本正经地埋，忌 em dash、忌公文腔。PD 宇宙段落的主语是 Piv / Dul。

**技术约定：**

- 📱 **所有改动默认适配移动端**。断点用项目已有的 1024 / 600，别发明新断点。触屏没有 hover，交互要有点击兜底（spoiler 就是这么做的）。
- 🖼️ 图片有防右键/防拖拽拦截（`index.html` 底部 INIT 区上方）。新加带图组件时，把它的类名补进那个 `contextmenu` 的 selector 列表。
- 🎨 颜色一律用 `:root` 的 token，别写裸 hex（chars-data.js 里 `accentHex` 是历史例外）。
- 💾 大改 `index.html` 前留一份 `*.backup-<说明>`，gitignore 已放行这个模式。

---

## 5. hub（时间线入口页）怎么改

`hub/index.html` 里内联的 JS 是 **Babel 编译产物**，不要直接改它。流程：

1. 改 `hub/hub.src.jsx`（源码，JSX 语法）。
2. 编译：`npx @babel/cli --presets @babel/preset-react` 处理 src 文件，或者贴到 babeljs.io/repl（preset 选 react）。
3. 把编译结果替换 `hub/index.html` 里 `<script>`（约 24 行起）到 `</script>` 之间的内容。

hub 里 PH 线跳转到 `ischium002.github.io/ph-timeline/`（另一个仓库），PD 线和 Médici 线目前是"敬请期待"toast。React 用的是本地 min 文件，无 CDN 依赖。

---

## 6. 已知的坑

- `_header.js` 文件名像代码，实际是给 chars-data.js 写的 schema 注释稿，故意没入 git。clone 下来没有这个文件是正常的，schema 要点本手册第 1 节已覆盖。
- `index.html` 单文件 2300+ 行是有意为之（无构建、可双击预览），别提议拆构建工具，坐骨不需要。
- 世界观页的 `char-strip` 卡片和 Characters 页的 selector 按钮是手写 HTML，跟 `CHARS` 数组没有自动同步——加角色时两处都要手动加（见第 1 节 checklist）。
- 故事阅读页的 STORIES 双数据源问题在 `../ph-timeline/` 仓库，不在这里，见那边的 MAINTENANCE.md。
