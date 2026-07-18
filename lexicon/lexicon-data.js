/* ═══════════════════════════════════════════
   设定词条馆 · 数据
   改词条只动这个文件，渲染在 index.html。
   spec：../specs/lexicon-card-catalog.md

   schema：
   - id    锚点路由（lexicon/#<id>），起了就别改
   - term  词条名（卡片顶边显示）
   - sub   可选，小字别名 / 补充
   - cat   分类 key，对应 LEX_CATS
   - def   正经定义（HTML）
   - note  编者注（灰斜体，馆员手写补记），可空
   - see   参见：其他词条 id 数组
   - draft true = 占位词条，不渲染（等文案）

   编号 LEX-xxx 按数组下标自动生成（含 draft 占位），
   填完文案把 draft 去掉即上架，编号不动。
   缺号 = 待归档，页脚有一句解释。
═══════════════════════════════════════════ */

const LEX_CATS = [
  { key: 'era',   label: '纪年' },
  { key: 'realm', label: '疆域' },
  { key: 'study', label: '学科' },
  { key: 'folk',  label: '族群' },
  { key: 'pact',  label: '契约' },
];

const LEX_ENTRIES = [

  /* ── 占位：待坐骨给文案 ───────────────── */
  {
    id: 'hot-conflict', term: '热冲突', cat: 'era',
    def: '', note: '', see: [], draft: true,
  },
  {
    id: 'three-zones', term: '三区', sub: '纯科技区 · 交界融合区 · 纯魔法区', cat: 'realm',
    def: '', note: '', see: [], draft: true,
  },
  {
    id: 'magi-science', term: '魔科学', cat: 'study',
    def: '', note: '', see: [], draft: true,
  },
  {
    id: 'warp-jump', term: '曲速与跃迁', cat: 'study',
    def: '', note: '', see: [], draft: true,
  },
  {
    id: 'forbidden-spell', term: '禁忌咒语', cat: 'study',
    /* ⚠️ 涉及 Dul，是否上架、露多少由坐骨定 */
    def: '', note: '', see: ['head-less'], draft: true,
  },

  /* ── 已上架：文案自 Universe 页 world card 原文迁入 ── */
  {
    id: 'demonkind', term: '恶魔族群', cat: 'folk',
    def: '魔口基数较小，寿命较长，散居在科技区域和魔法区域，在两区域生活的种族没有生殖隔离，但习性差异较大，会定期交流。',
    note: '',
    see: ['pact-inheritance'],
  },
  {
    id: 'head-less', term: 'HEAD-LESS', cat: 'folk',
    def: `广义上指所有无头生物。无亲属关系，散居各处，非自然生物，只能通过超凡手段或机缘巧合诞生。<br>形成过程较为稀少且不可复制，原理尚未查明，缺少研究数据。几乎每个种族都流传着'没有头但仍然存活'的传说——无头鸟、无头鱼、无头蛇，或者无头骑士。`,
    note: '本篇中通常代指Dul使用禁忌咒语的交易结果。',
    see: ['forbidden-spell'],
  },
  {
    id: 'angelkind', term: '天使族群', cat: 'folk',
    def: '头顶有光环的家伙们，究极无敌的理想主义者大本营。',
    note: '— 暂时没有出场角色 —',
    see: [],
  },
  {
    id: 'pact-inheritance', term: '契约传承', cat: 'pact',
    def: '恶魔族内沾亲带故，签订过的契约会随血缘继承，一契传十代，人走契还在。',
    note: '大骂祖先答应的什么狗屁差事是恶魔的传统。虽然说恶魔们都是狡猾的，可是谁家没几个傻子呢？<br>即使如此，当代恶魔们仍然没有养成签订契约前完整阅读权利与义务的习惯。虽然<strong>一般情况</strong>没人能比恶魔更会玩文字游戏，前提是人。',
    see: ['demonkind'],
  },

];
