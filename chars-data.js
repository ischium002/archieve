/* ============================================================
   chars-data.js — 角色 / CP线 / 星图 / 关系网 数据文件
   被 index.html 引用（<script src="chars-data.js">，在内联脚本前加载）。
   改角色内容、CP线、networking 连线都改这里。
   ============================================================ */

/* ─────────────────────────────────────
   CHARACTER DATA
───────────────────────────────────── */
const CHARS = [
/* 0: PHORION */
{
  id:'phorion', index:'01 / 05', name:'Phorion', nameAlt:'Phosphorus',
  accent:'var(--ph)', accentHex:'#2d5a3d',
  image:'https://res.cloudinary.com/dp5ayfo4z/image/upload/f_auto,q_auto/Phorion_ch2dmx', // 填入路径 e.g. images/phorion.jpg
  impression:'他总是笑眯眯的。',
  stats:[
    {l:'职业', v:'区域事务协调办公室主任'},
    {l:'前身份', v:'管后勤的（自称）'},
    {l:'种族', v:'人类（？）'},
    {l:'外貌', v:'银瞳、黑色短发，青年人类男性，185cm'},
    {l:'兴趣', v:'运动，看电影拉片'},
    {l:'社交账号', v:'新〇微博 / 没头脑和不高兴'},
  ],
  profile:[
    {
      num:'01', title:'性格\nCharacter',
      body:`<div class="mbti-type">ENFJ <span class="mbti-sub" style="font-size:0.30em;">3w2</span></div>
	  <p>他人缘很好。跟他合不来的人，要么不知不觉被推到了边缘，要么慢慢被他带着走。与阴谋诡计无关，人群会在他的周围自然地重新排列。</p>
      <p>人们和Phorion在一起的时候，总觉得和他很聊得来，似乎所有话题和情感都能被他接住。</p>
      <p>Phorion对自己的能力认识得很清楚，也知道它的边界。凭这份本事，换一个轻松体面、名利双收的人生并不难。在人群中左右逢源是他不需要努力的天赋，而怎么让天赋帮助他得到想要的东西，是另一门功课。</p>
	  <p>在那些远称不上和平的年月，他有非做成不可的事，为此做下的每个决定都有代价。有些自己能够承担，有些落在别人身上。大多数转瞬即逝，个别会在午夜造访。他从不关门，也不会给自己的行为找一个漂亮的借口。<span class="spoiler">比如什么FOR THE GREATER GOOD</span><br>他接受这条道路带来的一切，然后继续。</p>
      <p>哪里都有他说得上话的人，哪怕是个边缘的办事员，他也能准确叫出对方的名字。没人见过他剑拔弩张的样子，往往只是喝杯茶的功夫，局面就悄无声息地换了他的底色。等旁人回过神来，他早把翻篇的文件归进了档案柜。</p>
	  <p><em>你的皮囊底下到底有几分真心？</em></p>`
    },
    
    {
      num:'02', title:'权力逻辑\nPower',
      body:`<p>主战派。相信长久的和平需要建立在威慑之上，并且很擅长利用手中的资源把事情推向他想要的方向。</p>
      <p>战后急流勇退，仍然维护着自己的关系网。该做的事已经做完了，恢复秩序需要新面孔的同时，他找到了更想要的生活。无论如何，总是留有后手。</p>
      <p>他对权力的理解从来不是头衔和台面，退到幕后不等于失去影响力。</p>`
    },
    {
      num:'03', title:'着装\nOutfit',
      outfits:[
        {label:'正式 / Formal', text:'三件套是上班着装。全定制只有一两套重要的场合穿着，普通的时候就基本是半定制轮着穿。<p>左胸口别着勋章，马甲上挂着银色装饰链，口袋里另一端连着的不是常见的怀表，而是一枚造型独特的银色十字挂件。<em>那些见过某研究所图书管理员的人，如果记性好的话...</em></p>', img:''},
        {label:'日常 / Casual', text:'针织、牛仔，偶尔一件机车皮衣。爱穿看不出牌子但版型和质感都很好的东西，Brunello Cucinelli、Loro Piana之类的成衣混搭，没有标签或者Logo。<br>最近买衣服配饰开始买不同色的双份。', img:''},
      ]
    },
    {
      num:'04', title:'歌单\nPlaylist',
      playlist:[
        {n:'01', title:'Sunsetz', artist:'Cigarettes After Sex', note:''},
        {n:'02', title:'All Too Well (10 Minutes’ Version)', artist:'Taylor Swift', note:''},
        {n:'03', title:'Work Song', artist:'Hozier', note:''},
      ]
    },
	{
	      num:'05', title:'象征元素\nSymbols',
	      body:`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--rule);margin-top:1.5rem;">
	        <div style="padding:1.5rem 1rem;border-right:1px solid var(--rule);text-align:center;">
	          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">♘</div>
	          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">骑士</div>
			  <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">KNIGHT</div>
	        </div>
	        <div style="padding:1.5rem 1rem;border-right:1px solid var(--rule);text-align:center;">
	          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">⌘ </div>
	          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">掌控</div>
			  <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">command</div>
	        </div>
	        <div style="padding:1.5rem 1rem;text-align:center;">
	          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">✴︎</div>
	          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">光</div>
			  <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">lux</div>
	        </div>
	      </div>
	      <div style="margin-top:1.5rem;display:flex;align-items:center;gap:1rem;border-top:1px solid var(--rule);padding-top:1.2rem;">
	        <div style="width:2.5rem;height:3px;background:#2d5a3d;"></div>
	        <span style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">墨绿 · #2d5a3d</span>
	      </div>`
	    },
  ],

  cpTarget: 1, // Hesperon
},

/* 1: HESPERON */
{
  id:'hesperon', index:'02 / 05', name:'Hesperon', nameAlt:'Hesperus',
  accent:'var(--hs)', accentHex:'#1e3a5c',
  image:'https://res.cloudinary.com/dp5ayfo4z/image/upload/f_auto,q_auto/Hesperon_o75evp',
  impression:'普通的、图书管理员。',
  stats:[
    {l:'职业', v:'研究所图书管理员、PI'},
    {l:'前身份', v:'军方基金支持实验室核心研究员'},
    {l:'种族', v:'恶魔'},
    {l:'外貌', v:'黑眼黑角、银灰长发、白肌尖耳、有雀斑，183cm+角=188cm'},
    {l:'兴趣', v:'听音乐，偶尔会唱歌，范围广到从圣歌到当期榜单'},
    {l:'社交账号', v:'新〇微博 / 『』'},
  ],
  profile:[
    {
      num:'01', title:'性格\nCharacter',
      body:`<div class="mbti-type">INTJ <span class="mbti-sub" style="font-size:0.30em;">· 后天习得Fe · 5w4</span></div>
	  <p>他生来就比周围人聪明太多。很小的时候他就意识到了这一点，但他不想当那只鹤，他选择把自己放慢，慢到周围的人能跟上他。</p>
      <p>这件事他做了太久，温和，平静，得体，久到他自己也分不清，这些究竟是真的感受，还是训练出来的本能。</p>
      <p>小时候找不到同龄的对手，他只能在观察中自学。他发现温柔的表达方式能让交流变得更顺畅，于是他就学会了温柔。</p>`
    },
    
    {
      num:'02', title:'研究方向\nResearch',
      body:`<p>魔法应用与材料力学方向博士</p>
	  <p>研究方向：《魔法-力学耦合场中复合材料动态断裂机制与临界破坏阈值的多尺度研究》，人话：研究如何用魔法以最高效率摧毁各种材料。后续成果已验证并投入实战，机密。</p>
      <p>战后因为保密因素被安置为图书管理员，自带研究基金，配有不受管辖的独立实验室，几乎没有KPI。目前在探索魔法材料与声波方向的结合，研究动机大半出于好奇心。</p>
      <p>魔力适应性卓越，玻璃大炮（相对来说）。如果不专职研究，可能会从教。</p>`
    },
    {
      num:'03', title:'着装\nOutfit',
      outfits:[
        {label:'制服 / Uniform', text:'研究所图书馆沿袭神学院传统，管理职能制服为牧师服形制，胸前挂有金银两个十字。本人研究过神学教义体系，只为满足好奇心。<br>如果让多种族杂居时代前的老古董看到一个长着角的人型生物穿着牧师服——你们这牧师合法吗？', img:''},
        {label:'日常 / Casual', text:'无数件长得差不多的深色高领打底，只有他自己知道其中的松紧、版型、材质区别...会穿衬衫套圆领毛衣，配色低饱和，干净简单。穿戴整齐也是尊重他人，心情好的话会有搭配上的小巧思。<br>最近衣柜似乎满了很多。', img:''},
		{label:'外出 / Outing', text:'外出用法师袍', img:''},
      ]
    },
    {
      num:'04', title:'歌单\nPlaylist',
      playlist:[
        {n:'01', title:'Death with Dignity', artist:'Sufjan Stevens', note:''},
        {n:'02', title:'Teardrop', artist:'Massive Attack', note:''},
        {n:'03', title:'Living Room Songs', artist:'Ólafur Arnalds', note:''},
      ]
    },
    {
      num:'05', title:'象征元素\nSymbols',
      body:`<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;border:1px solid var(--rule);margin-top:1.5rem;">
        <div style="padding:1.5rem 1rem;border-right:1px solid var(--rule);text-align:center;">
          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">📚︎</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">知识</div>
		  <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">Gnosis</div>
        </div>
        <div style="padding:1.5rem 1rem;border-right:1px solid var(--rule);text-align:center;">
          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">∇</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">阈值</div>
		  <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">Limen</div>
        </div>
        <div style="padding:1.5rem 1rem;border-right:1px solid var(--rule);text-align:center;">
          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">🕆</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">十字</div>
		  <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">Crux</div>
        </div>
        <div style="padding:1.5rem 1rem;text-align:center;">
          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">✨︎</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">星星</div>
		  <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">Stella</div>
        </div>
      </div>
      <div style="margin-top:1.5rem;display:flex;align-items:center;gap:1rem;border-top:1px solid var(--rule);padding-top:1.2rem;">
        <div style="width:2.5rem;height:3px;background:#5a8ab4;"></div>
        <span style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">浅蓝 · #5a8ab4</span>
      </div>`
    },
  ],
    cpTarget: 0, // Phorion
},

/* 2: PIEUVRE */
{
  id:'pieuvre', index:'03 / 05', name:'Pieuvre', nameAlt:'Tahatiruë Vëlith Cthelanni',
  accent:'var(--pv)', accentHex:'#7a3b28',
  image:'',
  impression:'没人知道她当时在哪里。',
  stats:[
    {l:'职业', v:'自由职业者'},
    {l:'种族', v:'深空章鱼'},
    {l:'外貌', v:'蓝黄渐变长卷发，蓝瞳，人类女性形态'},
    {l:'兴趣', v:'捡垃圾，喝酒，上网看每日热点，新晋爱好是和Dul玩'},
    {l:'随身物', v:'一枚银币，随时可摸到'},
    {l:'社交账号', v:'新〇微博 /qwiodj7*z286 '},
  ],
  profile:[
    {
      num:'01', title:'性格\nCharacter',
      body:`<div class="mbti-type">ISTP</div>
      <p>懒散的普通深空章鱼。怕麻烦，特指枯燥没有收获的重复劳动，和有很多蠢货参与的人际关系。但在擅长且熟悉的领域，她会变成支配者。</p>
      <p>拟态很强，信息网络极广，时政内幕即时情报什么都知道，而且了解得莫名清楚。深信做人就要好好当人，尖耳朵犄角翅膀都是邪教。However，在情绪波动较大或用力过猛时整个人会变色。</p>
      <p>本名Tahatiruë Vëlith Cthelanni，在深空章鱼语中意为"追星尘的人·深渊的回声"，属于Cthelanni（深渊血脉）族群。名字太长太暴露，她懒得用，选择了Pieuvre当日常名。</p>
      <p>有很强的恶趣味。</p>`
    },
    {
      num:'02', title:'银币\nThe Coin',
      body:`<p>银币的能力不是预知未来，而是判断"这件事是不是锚定点"。抛硬币能问的问题只有一类：<em>这件事能被改变吗？</em><br>正面：可以干预，结果未定。反面：锚定点，无论怎么做都会发生。</p>
      <p>与其说是未来视，不如说她只是知道哪些事不值得挣扎。</p>
      <p>只能判断"能不能改"，不能知道"结果是什么"。具体怎么做、做了之后会怎样，她一无所知。所以她需要维持极广的情报网络，她需要知道究竟发生了什么。</p>
      <p><em>"章鱼没有未来视，只是有一些小把戏。"</em></p>`
    },
    {
      num:'03', title:'舰\nThe Ship',
      body:`<p>Pieuvre的星舰。经过一次昂贵的系统仪式升级之后，舰从普通人工智能变成了真正的生物意识，会撒谎、会调皮、会操心、会碎碎念。仓管、会计以及出纳，每天都在担心Pieuvre的债务问题，如果破产自己也要跟着喝西北风了。<span class="spoiler">升级的钱是找Médici借的，而舰本身不知道自己就是那笔债的产物。</span></p>
      <p>无性别，性格活泼，碎碎念型。Piv不会觉得不耐烦，只会等舰说完敷衍一下。</p>
      <p>舰内有一个仓库，堆着Pieuvre捡来的各种东西，分区管理：可以卖的、先放着的、不能丢的。深处是有巨大舷窗和投影仪的观景台，放着磨损的沙发，小酒柜和小零食柜。</p>
      <p><em>后来观景台加了新的沙发、新的脚蹬、新的落地灯和新的饮料。</em></p>`
    },
    {
      num:'04', title:'着装\nOutfit',
      outfits:[
        {label:'舰上 / Onboard', text:'紧身背心+运动宽松长裤，或者工装。怎么舒服怎么来。', img:''},
        {label:'出行 / Outing', text:'机车风皮衣，或工装裤+随手套件外套，蓝色系居多。', img:''},
        {label:'正式 / Formal', text:'礼服。有很多条裙子都是别人送的。', img:''},
      ]
    },
    {
      num:'05', title:'象征元素\nSymbols',
      body:`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--rule);margin-top:1.5rem;">
        <div style="padding:1.5rem 1rem;border-right:1px solid var(--rule);text-align:center;">
          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">🐙︎</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">章鱼</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">Pieuvre</div>
        </div>
        <div style="padding:1.5rem 1rem;border-right:1px solid var(--rule);text-align:center;">
          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">●</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">银币</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">Obolus</div>
        </div>
        <div style="padding:1.5rem 1rem;text-align:center;">
          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">❧</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">桂冠</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">Laurea</div>
        </div>
      </div>
      <p style="margin-top:1rem;font-size:0.8em;color:var(--ink3);">银币可以变形成桂冠别在头上做装饰。</p>
      <div style="margin-top:1.5rem;display:flex;align-items:center;gap:1rem;border-top:1px solid var(--rule);padding-top:1.2rem;">
        <div style="width:2.5rem;height:3px;background:#3f6ba8;"></div>
        <div style="width:2.5rem;height:3px;background:#6b4fa0;"></div>
        <span style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">蓝 · 紫</span>
      </div>`
    },
  ],
  
  cpTarget: 3, // Dul
},

/* 3: DUL */
{
  id:'dul', index:'04 / 05', name:'Dullahann', nameAlt:'***',
  accent:'var(--dl)', accentHex:'#4a3060',
  image:'',
  impression:'真正想赢的人是没有笑容的（嗯）。',
  stats:[
    {l:'职业', v:'随Piv绝赞星际漂流中'},
    {l:'前身份', v:'联邦军特种部队小队长'},
    {l:'种族', v:'HEAD-LESS'},
    {l:'姓名', v:'不详'},
    {l:'外貌', v:'头部为不灭火焰，身材很好的强壮男子'},
    {l:'兴趣', v:'和小动物玩，看电影，健身，做饭'},
  ],
  profile:[
    {
      num:'01', title:'性格\nCharacter',
      body:`<div class="mbti-type">ISFJ</div>
      <p>沉稳、专注、有责任感。能忍受重复的枯燥劳动，只要认定有意义，便会坚持到底。</p>
      <p>火焰是他的情绪出口，他自己无法完全控制，经常在意识到之前就出卖了心情。</p>
      <p>被背刺之后有些心灰意冷，做那笔交易的时候没想活下来。看到Piv的瞬间一见钟情，觉得说不定活下来还挺好。先逃避一段时间现实，缓好了会重新振作——毕竟是守护者^^</p>
      <p>对Pieuvre的感情从第一眼就开始了，但他选择先保留这份感情，晚点再说。</p>`
    },
    {
      num:'02', title:'火焰\nThe Flame',
      body:`<p>旺盛程度反映心情，颜色反映情绪类型。吃喝均以燃烧方式处理。</p>
      <div style="border:1px solid var(--rule);margin-top:1.2rem;font-family:var(--mono);font-size:0.72rem;">
        <div style="display:flex;justify-content:space-between;padding:0.6rem 1rem;border-bottom:1px solid var(--rule);"><span>日常平静</span><span>蓝红色（默认色）</span></div>
        <div style="display:flex;justify-content:space-between;padding:0.6rem 1rem;border-bottom:1px solid var(--rule);"><span>愉快开心</span><span>橘红 / 暖红</span></div>
        <div style="display:flex;justify-content:space-between;padding:0.6rem 1rem;border-bottom:1px solid var(--rule);"><span>爱</span><span>粉红色</span></div>
        <div style="display:flex;justify-content:space-between;padding:0.6rem 1rem;border-bottom:1px solid var(--rule);"><span>低落悲伤</span><span>蓝色</span></div>
        <div style="display:flex;justify-content:space-between;padding:0.6rem 1rem;"><span>愤怒</span><span>黑色</span></div>
      </div>
      <p style="margin-top:0.8rem;"><span class="spoiler">还有一种颜色不在表里，本人第一次发现的时候也吓了一跳。</span></p>
      <p>失去头部后无法发声，一开始只能打字交流。尝试过反向心灵感应，没控制好频率直接把灯振熄了。后来试着用火焰燃烧空气发出振动来发声<em>这个方法的思路，来自Piv的某位热心网友。</em></p>`
    },
    {
      num:'03', title:'背景\nBackground',
      body:`<p>由单亲父亲抚养，在纯科技区域长大。父亲是经典款话少爱得深沉的老爹。他不知道母亲是法师，但仍然继承了母系家族的禁忌咒语血脉。</p>
      <p>原联邦军特种外勤小队队长，深受队员爱戴。一次行动中因高层背叛，小队身陷囹圄即将被灭口。为保护队员，无知觉中继承的禁忌咒语浮上心头。与恶魔交易：许下愿望，得到了带队友度过危机的力量和不灭的火焰。至于代价，当时就没想到能活下来，现在已经是万幸。</p>
      <p>事后那位高层将罪责尽数甩给失踪的他。通缉令用的是他的大头照，但头已经没了，生物信息也在转化时被一把火改变了，通缉令形同虚设。队友们因为知道得不够多未被灭口，被威逼利诱、发配到各个边远地区。但他们仍然活着。</p>
      <p>交易后漂流半年，被Pieuvre捡到。复仇目标明确：让背叛他和战友的人付出代价。</p>
      <p><em>完全体：使用能力时的公式服是中世纪黑甲+毛毛大氅的无头骑士形态，盔甲和披风以魔法少女变身的方式召唤出来。</em></p>`
    },
    {
      num:'04', title:'着装\nOutfit',
      outfits:[
        {label:'日常 / Casual', text:'深色运动常服、帽衫、工装裤，非常休闲。', img:''},
        {label:'任务 / Mission', text:'全黑机能风。', img:''},
        {label:'完全体 / Full Form', text:'中世纪黑甲+毛毛大氅，无头骑士公式服。', img:''},
      ]
    },
    {
      num:'05', title:'象征元素\nSymbols',
      body:`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--rule);margin-top:1.5rem;">
        <div style="padding:1.5rem 1rem;border-right:1px solid var(--rule);text-align:center;">
          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">🔥︎</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">火焰</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">Flamma</div>
        </div>
        <div style="padding:1.5rem 1rem;border-right:1px solid var(--rule);text-align:center;">
          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">◌</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">头</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">Head-less</div>
        </div>
        <div style="padding:1.5rem 1rem;text-align:center;">
          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">†</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">剑</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">Gladius</div>
        </div>
      </div>
      <div style="margin-top:1.5rem;display:flex;align-items:center;gap:1rem;border-top:1px solid var(--rule);padding-top:1.2rem;">
        <div style="width:2.5rem;height:3px;background:#3a5fc0;"></div>
        <div style="width:2.5rem;height:3px;background:#c23b2e;"></div>
        <span style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">蓝红 · 默认火色</span>
      </div>`
    },
  ],
  
  cpTarget: 2, // Pieuvre
},

/* 4: MÉDICI */
{
  id:'medici', index:'05 / 05', name:'Médici', nameAlt:'Do ut des',
  accent:'var(--md)', accentHex:'#8a6c2a',
  image:'',
  impression:'✭金牌调解员✭',
  stats:[
    {l:'职业', v:'区域事务协调办公室科员'},
    {l:'前身份', v:'硕士研究生（退学）'},
    {l:'种族', v:'恶魔'},
    {l:'外貌', v:'粉发尖耳，右眼粉左眼红，头顶黑色荆棘光环，性别看心情'},
    {l:'兴趣', v:'玩乐，各种漂亮和新奇的东西'},
    {l:'社交账号', v:'新〇微博 / 日常博主，成名作是怒喷老板卖身契50条'},
  ],
  profile:[
    {
      num:'01', title:'性格\nCharacter',
      body:`<div class="mbti-type">ESFP</div>
      <p>活在当下，随心所欲。之前可能还有所收敛，在经过一些事情后彻底放飞自我。上一秒和下一秒截然不同，情绪和行为之间没有任何过滤器。</p>
      <p>直觉型，有小动物一般的潜意识和反应，会被上层食物链压迫。</p>
      <p>平时不主动找茬，但如果有人惹她，就会被从头羞辱到脚。擅长创新开发各种闻所未闻的比喻和羞辱方法。</p>
      <p><em>"谁跟你俩呢？！"</em></p>`
    },
    {
      num:'02', title:'来历\nOrigin',
      body:`<p>战争快结束的时期认识Phorion。当时她还是研究所硕士在读，遭遇同门抢夺成果，一气之下大打出手，并发匿名帖举报。措辞犀利，引发广泛关注，网友顺藤摸瓜，发现天龙人同门劣迹斑斑。其背后的"关系"，也锒铛入狱，其中有没有人推波助澜就不是Médici在乎的了。</p>
      <p>老东西倒台后，没有导师敢接手这个烫手山芋。Médici干脆书也不读了，收拾行李准备投奔亲戚，刚走出大门就被Phorion派人接走。光看编制没看细则就把卖身契签了，事后发现是真的卖身契，换了个号连发50条痛骂Phorion，小号一夜爆火。</p>
      <p>Phorion收编他有两层原因：其一是能力不俗；其二是政治保护，百足之虫死而不僵，她在外面会有危险。<span class="spoiler">还有一点私心：这小子简直像浮萍一样难以预测，就近安置一下。</span></p>`
    },
    {
      num:'03', title:'契约\nThe Pact',
      body:`<p>恶魔的契约会传承。当代恶魔们没少因此大骂祖先签的什么狗屁契约——虽然说恶魔都是狡猾的，但谁家没几个傻子呢？即使如此，他们仍然没有养成签约前完整阅读权利与义务的习惯。</p>
      <p>由于家传契约，与⬛︎⬛︎⬛︎一脉的交易正好轮到他执行。等价交换，Médici替对方实现愿望，收头抵账。对方许愿的时候人都快死了，愿望的措辞水平有限可以理解。没想到看起来普普通通的那颗脑袋瓜子还挺值钱，愿望兑完居然还能倒找零。</p>
      <p><span class="spoiler">本人其实是一个才从少年期发育到青年期没多久的长生恶魔。</span></p>`
    },
    {
      num:'04', title:'着装\nOutfit',
      outfits:[
        {label:'时髦 / Fashion', text:'会从杂志扒穿搭，本篇中最时髦的一位。今天Supreme明天Acne Studios，没有固定风格但永远有辨识度，她本身的能力让时髦变得特别容易。', img:''},
        {label:'头冠 / Crown', text:'全家最爱戴冠的人（魔？），因为看起来特别百搭时髦。', img:''},
      ]
    },
    {
      num:'05', title:'象征元素\nSymbols',
      body:`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--rule);margin-top:1.5rem;">
        <div style="padding:1.5rem 1rem;border-right:1px solid var(--rule);text-align:center;">
          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">☼</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">荆棘冠</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">Corona</div>
        </div>
        <div style="padding:1.5rem 1rem;border-right:1px solid var(--rule);text-align:center;">
          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">⚖︎</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">等价交换</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">Do ut des</div>
        </div>
        <div style="padding:1.5rem 1rem;text-align:center;">
          <div style="font-size:2rem;margin-bottom:0.8rem;opacity:0.7;">✧</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">新奇</div>
          <div style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">Novitas</div>
        </div>
      </div>
      <div style="margin-top:1.5rem;display:flex;align-items:center;gap:1rem;border-top:1px solid var(--rule);padding-top:1.2rem;">
        <div style="width:2.5rem;height:3px;background:#e07ba8;"></div>
        <span style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.18em;color:var(--ink3);text-transform:uppercase;">粉 · #e07ba8</span>
      </div>`
    },
  ],
  
  cpTarget: null,
},
];

/* ─────────────────────────────────────
   CP DATA (Phorion × Hesperon)
───────────────────────────────────── */
const CP_DATA = {
  '0-1': {
    title:'Phorion × Hesperon',
    subtitle:'晨星与昏星',
    quote:'所见之人',
    desc:`Hesperus = 昏星（傍晚，西方），Phosphorus = 晨星（黎明，东方）。古希腊人曾以为这是两颗不同的星，直到它们被发现是同一颗金星。<br><em>推荐BGM“Mastermind”——Taylor Swift</em>`,
    player:{title:'Mastermind', artist:'Taylor Swift', src:'https://ischium002.github.io/archieve/mastermind.mp3'},
    pov:[
      {
        name:'Phorion 的视角',
        text:'阅人无数的好处是，一眼就能认出装得真正好的那种人。处心积虑设计了第一次见面，打算的是合作，他需要一个技术侧的盟友。一切都在掌握之中——本来应该是这样——直到他发现自己开始期待那些计划之外的部分。'
      },
      {
        name:'Hesperon 的视角',
        text:'听人谈起过Phorion，所有人提到他的语气都带着好感，几乎毫无例外。他只觉得那是个跟自己没有任何交集的名字，他没兴趣分辨到底是真的好还是装的好。见面之后，模糊的道听途说坍塌成一个具象，像一个黑洞凭空出现在他的认知世界里，注意力被不可抗拒地吸走。'
      }
    ],
    timeline:[
      {
        era:'热冲突\n前期',
        event:'相识',
        text:`<p>Phorion替Hesperon扫清了那些人事上的障碍，并阐明自己的来意，他需要技术侧的人来帮他做判断。Hesperon最怕欠人情，但等价交易他接受。</p>`
      },
      {
        era:'热冲突\n中期',
        event:'进一步发展',
        text:`<p>在第一次顺利合作之后，两个人无声无息地达成了某种默契。Hesperon的研究结论总是最先递到Phorion手上，而Phorion替他挡掉了所有他懒得应付的人和事。一切都很自然。</p>
        <p>直到Hesperon最先察觉到不对劲。他发现自己在计算一些没有人要求他计算的东西。Phorion的行程风险，Phorion决策中可能被忽略的变量···这都不是技术支持需要他做的事。</p>
        <p>Phorion不是没有意识到。他只是选择不去拆这个盒子，有些东西一旦打开就没有体面收场的余地，而他还有太多事要做。</p>
		<p>他们保持着正常的交流，偶尔的一点越界也被其中一个人主动掐灭。</p>`
      },
      {
        era:'导火索',
        event:'Hesperon受伤入院 · 确认关系',
        text:`<p>在一次外勤中，Hesperon跟随的小队被前线余震波及，全体人员失联。Phorion在营救过程中的反应超出了一个合作者的合理范围，节点上的所有人都看到了，他自己也知道。这些暂时不是他有余裕去在乎的事。在危险期的那个夜晚，Phorion一个人把所有的事情想了一遍。想他们的合作，想如果这次没有救回来的后续，想H和他说的话，想H的脸。他很清楚自己已经没有退路了。</p>
        <p>在Hesperon醒来之后，睁眼看到的是Phorion半阖的双眼。<br>他看了他很久。</p>
        <div class="dialogue-block">
          <div class="dialogue-line">
            <strong>Hesperon</strong>
            「......你在这儿坐了多久？」
          </div>
          <div class="dialogue-line highlight">
            <strong>Phorion</strong>
            「不重要。」
          </div>
		  <div class="dialogue-line">
		    <strong>Hesperon</strong>
		    「你看起来比我还难看。」
		  </div>
		  <div class="dialogue-line highlight">
		    <strong>Phorion</strong>
		    「嗯，但我没有躺在病床上。」
		  </div>
        </div>
		<p>安静了一会儿，Hesperon把目光移到床单上，又移回来。</p>
		<div class="dialogue-block">
		  <div class="dialogue-line">
		    <strong>Hesperon</strong>
		    「有件事我之前一直都想不明白，干脆就没有再想了。」
		  </div>
		  </div>
		  <p>Phorion没有问他想的是什么。</p>
		  <div class="dialogue-block">
		  <div class="dialogue-line highlight">
		    <strong>Phorion</strong>
		    「反正我想明白了。」
		  </div>
		  </div>
        <p>Hesperon握住了Phorion放在床旁边的手。</p><p>他们之间有过很多种沉默，在这一次的沉默里，什么都不用再确认了。</p>`
      },
      {
        era:'后来',
        event:'战后日常',
        text:`<p>两个人各自挂着一个不起眼的闲职，各自以不被注意的方式继续做着该做的事。Hesperon守着他的图书馆和实验室，Phorion有一间自己的办公室，迟到早退也没人能管他。</p>
		<p>他们白日生活的交集不多，但总是在该出现的时候出现。有时候Phorion会绕路去接他，有时候Hesperon抬头发现时间到了，也不再像以前一样加班，把孩子们赶下班，自己也收拾收拾回家了。</p>
        <p>偶尔Hesperon在书房里哼歌，Phorion就站在门口杵着。你说录音？反正在常用的终端里没有。<br>Phorion喜欢音乐剧，会花心思挑选觉得还行的带Hesperon去。Hesperon从来不会说“怎么一到关键时刻就唱歌”，无论体验怎样都会认真评价各篇目的和声结构，然后才开始聊自己对剧情的看法。</p>`
      },
      {
        era:'一些心路历程',
        event:'Phorion的圈地逻辑',
        text:`<p>他像一条龙，安静地盘踞在自己的珍宝周围。</p>
        <p>起初是本能。不让任何人靠得太近，不让任何目光在Hesperon身上停留太久。他给自己找了个保护战略资产的理由，勉强说得过去。<br>中期开始在Hesperon不知情的地方，替他拔掉一些长在暗处的刺。危机之后，他不再费心给自己找理由了。他很清楚自己在做什么，并且毫无愧疚。</p>
        <p>战后圈地密度比战时更高，但对于习惯独自扛过所有阻力的一只Hesperon来说...Phorion的圈地只是爱心小篱笆。
		<span class="spoiler">肉麻两公婆。</span></p>
        <div class="dialogue-block">
          <div class="dialogue-line">
            <strong>Hesperon</strong>
            「你现在盯我比以前更紧了。」
          </div>
          <div class="dialogue-line highlight">
            <strong>Phorion</strong>
            「所以你要再靠近一点，方便我盯（笑）」
          </div>
        </div>
        <p>此处省略。<br>总之第二天他俩心情很好^^</p>`
      },
    ],
    vignettes:[
      {label:'书房', text:'他们后来有了一张足够大的桌子。Hesperon那半边永远堆着文献和草稿纸，Phorion那半边干净得像没人用过。但商务风的签字笔经常出现在那堆草稿山里，星星图案的咖啡杯也总是不知不觉挪到空的那边。'},
      {label:'看电影', text:'周末傍晚洗完澡窝进沙发，准备好零食和舒服的毯子，开始指〇王马拉松。从护戒使者团出发看到王者归来。Hesperon中途开始分析精灵语和古代魔文的构造异同，Phorion只是把焦糖海盐爆米花塞进他的嘴里。第二部的时候Phorion已经靠在Hesperon肩上睡着了。Hesperon没关投影，替他把毯子往上拉了拉。'},
      {label:'衣品', text:'Hesperon推门进实验室，跟学生们打了个招呼就径直走向自己的位置。他走后身后安静了两秒，然后有人小声说，老师最近是不是换风格了；另一个人说，何止换风格，那件外套的剪裁一看就不便宜；第三个人说，而且配色不像他自己会搭的。没有人敢问，但所有人都在偷偷猜同一件事。Hesperon对此一无所知，Phorion对此心知肚明。'},
    ],
  },

  '2-3': {
    title:'Pieuvre × Dul',
    subtitle:'深渊的回声与不灭的火',
    quote:'早上好，男朋友。',
    desc:`一个为了记录数据把人救下来的任性妄为的家伙，一只状态一塌糊涂决定先活下去再说的沙袋。<br>`,
    pov:[
      {
        name:'Pieuvre 的视角',
        text:'开盲盒开到一个转化未完全的head-less，好奇心爆炸，为了记录数据把人救了。数据抵不完账单，那就先留着，有用。后来她发现火焰会对她的行为有一些反应，但是正主的表现一切正常。'
      },
      {
        name:'Dul 的视角',
        text:'做交易的时候没想活下来。醒来第一眼是凑近来扫描的章鱼大脸，觉得说不定活下来还挺好。他决定先按捺这份感情，等自己站稳了再说。'
      }
    ],
    timeline:[
      {
        era:'相遇',
        event:'垃圾场盲盒',
        text:`<p>Médici给了Pieuvre一个垃圾场坐标，说值钱东西多，让她去捞捞看。Pieuvre开到了一个漂流救生舱，里面是一个head-less，转化未完全，目测漂流了半年。</p>
        <p>扫描检测，好奇心爆炸，为了记录数据把人救了，维持生命体征。Dul醒来对这个名字都不知道的人一见钟情。</p>`
      },
      {
        era:'收留',
        event:'账单与命名',
        text:`<p>Piv按照救援公约知会Dul，接着列出了账单。数据抵了一部分但还不够，暂时收留Dul在舰上打工还债。</p>
        <p>关于名字：新生的head-less自称记不得了。Piv看了看新鲜的交易痕迹、涂掉标志的逃生舱、最新下达的通缉令：</p>
        <div class="dialogue-block">
          <div class="dialogue-line">
            <strong>Pieuvre</strong>
            「你知道你很好找吗？」
          </div>
        </div>
        <p>Dul手放到身后扣床单，紧张但假装镇定。火焰变色了，本人没发现。Piv当作什么都没看见。</p>
        <div class="dialogue-block">
          <div class="dialogue-line">
            <strong>Pieuvre</strong>
            「Whatever，你可以叫我Pier。」
          </div>
        </div>
        <p><em>Dul之后一直叫她Piv。Dullahann这个名字，是Piv后来在星际网络搜到地球传说Dullahan，随手多打了个n登记的。</em></p>`
      },
      {
        era:'同居初期',
        event:'打字与学说话',
        text:`<p>失去头部无法发声，一开始只能打字。Piv直接递来一个自动识别语言的平板。打字时期的Pieuvre是极简回复+高信息密度，Dul把主动权整个交出去：你问，我答。说不出口的就装傻。</p>
        <p>某天Pieuvre随口说了一句日常碎碎念，不是问题。Dul不知道该回什么，话被舰接住了，两人开始插科打诨。Dul看着这一幕，火焰跳了跳。</p>
        <p>后来学说话：反向心灵感应没控制好频率，直接共振把灯振熄了。Piv在网上海底捞前人经验，某位网友刚好刷到，结合自己的研究给了一些启示。最后Dul用火焰燃烧空气发出振动来发声，终于成功了。</p>`
      },
      {
        era:'插曲',
        event:'在仓库迷路',
        text:`<p>Dul刚从修复舱出来没多久，舰有点大，他还在舰的陪同下认路。Pieuvre守在舰桥走不开，两人靠通讯器交流；舰要做大运算收回全部core，夸下海口只用一半就能算完，结果算力告急，Dul宽容地表示理解，于是抽身集中算力，没和Pieuvre说Dul一个人在逛。</p>
        <p>Dul第一次脱离以前那种高压环境，新奇地看待周围所有东西，一路逛到了仓库，看到了观景台，在酒柜里看到了喜欢的酒。他觉得自己发现了Pieuvre新的一面，有些莫名的悸动。探索过程中，一不小心按到了屏蔽开关，通讯器失联，仓库门也锁了。既来之则安之，他翻了翻库里的东西，困了，缩在舷窗下面睡着了。</p>
        <p>Piv忙完发现人不见了，发信息石沉大海连送达回执都没有，让舰做全船扫描才找到。急急忙忙赶下去生怕好不容易救回来的又出事，打开门一看，人缩在角落里睡着了。</p>
        <p>Pieuvre看着Dul缩成一团，心情难以言喻。Dul警惕性还是很高的，门一开就醒了，说话还不太熟练，打手势"不好意思让你担心了"。Pieuvre把舰说了一顿，转头把屏蔽模式放得更难触发。</p>`
      },
      {
        era:'转折',
        event:'火',
        text:`<p>Pieuvre让舰查看私人收藏品，Dul以为是在喊他——"我吗？"火焰跳动。</p>
        <p>Pieuvre抬头，扫了一下火焰，往前翻数据记录。发现这不是第一次了。</p>
        <p><em>火焰在对她做反应，这是Pieuvre第一次真正意识到这件事。从这个瞬间开始，她观察Dul的性质悄悄变了。</em></p>`
      },
      {
        era:'暧昧',
        event:'没有揭晓时刻',
        text:`<p>过了一段时间，Piv从数据上早就知道火焰在对她做反应，Dul也知道自己的火焰藏不住。两个人都清楚对方知道，但谁都没挑破。</p>
        <p>Dul在方方面面都表现得很好。不黏人、不制造社交垃圾、安安静静做事、不问多余的话，但生活细节里到处是他的痕迹。Pieuvre感觉到了温水，但她不是青蛙，她享受着这一切，同时也在观察。某天意识到，好像自己不想让这个人走了。</p>
        <p>没有一个"揭晓"时刻。某个很普通的瞬间，Pieuvre贴得比朋友更近。Dul的火焰没跳，反而彻底安静下来。</p>
        <p>两个人都没说话。但从那之后，行为模式就变了。</p>`
      },
      {
        era:'确认',
        event:'早上好，男朋友',
        text:`<p>第二天早上，Piv先开口：</p>
        <div class="dialogue-block">
          <div class="dialogue-line">
            <strong>Pieuvre</strong>
            「早上好，男朋友，早餐想吃点什么？」
          </div>
        </div>
        <p>直接给了定义，顺手把关系的名字放了进去。Dul的火焰从壁炉状态直接跳起来。</p>
	<div class="dialogue-block">
	<div class="dialogue-line">
            <strong>Dullahann</strong>
            「...什么都行」
          </div>
	</div>
        <p>后来某天平平淡淡干活时，Piv觉得自己有义务提前说明一些技术性问题。Dul表示会认真考虑后答复。<span class="spoiler">答复用时：当晚。</span></p>`
      },
      {
        era:'进行时',
        event:'复仇线（框架）',
        text:`<p>Dul的复仇对象，是当年背叛他的高层。而那个人在Phorion的蓝图规划中应该在星海里当雕塑。</p>
        <p>Pieuvre带着Dul千里追凶，半路撞见被派出来办事的Médici。Médici一看他们在追的名字：正那位未来的雕塑。这一撞还顺带曝光了另一件事：Pieuvre和Hesperon是互关已久的网友。那时的发声求助帖，她假装自己在写小说，Hesperon以做学术的态度替这位"虚构角色"考据了一套发声方案，还附了参考资料。两个人都不知道对面在现实里是谁。</p>
        <p>Dul的私仇落到Phorion手里，就是现成的政敌把柄。不过真正压秤的还是队友们。当年把人发配出去要他们自生自灭，结果天高皇帝远，谁也管不着他们私底下在攒什么，这些年的资料一份没少。清算的对象不止那个人，还有他身后的整个派系。</p>`
      },
    ],
    vignettes:[
      {label:'不能丢的', text:'仓库的东西分三类：可以卖的、先放着的、不能丢的。Dul是被当垃圾捡回来的，舰的清单上自然也有他一条，最早归在"先放着的"。某天例行盘点，舰发现这条记录被挪进了"不能丢的"。修改时间是深夜，全舰有权限改的只有一个人。舰什么都没问。'},
      {label:'做饭', text:'一次捡垃圾开到一批食材，Piv说扔了可惜随手做了一顿，Dul尝了觉得"原来燃烧不同的东西味道差这么多"。后来两人一起学习食材处理技术，起点差得不多，但Dul会偷偷加练，失败品自己吃掉毁尸灭迹，差距就这么拉开了。等Piv意识到的时候，第一反应是真好吃，第二反应是这人学好快。分工从此定型：Dul掌勺，Piv管买菜、点菜和吃，舰洗碗。买菜是她的主场，砍价拣货，顺带听听最近都有些什么事。'},  ],
  },
};

/* ─────────────────────────────────────
   CONSTELLATION DATA（hero 文字区背景星图数据）
   stars: x/y 坐标, r 半径, o 透明度, tw 闪烁, ring 空心圈
   links: 星与星的连线（下标对）
───────────────────────────────────── */
const CONSTELLATIONS = {
  /* Phorion — 晨星：上升的链，最亮一颗在右上 */
  phorion: {
    stars: [
      {x:48,  y:268, r:2,   o:0.20},
      {x:118, y:232, r:2.5, o:0.24},
      {x:176, y:178, r:2,   o:0.20},
      {x:243, y:132, r:2.5, o:0.26},
      {x:318, y:72,  r:4,   o:0.38, tw:true},
      {x:356, y:150, r:1.5, o:0.15, tw:true},
      {x:282, y:214, r:1.5, o:0.14},
      {x:86,  y:120, r:1.5, o:0.13, tw:true},
    ],
    links: [[0,1],[1,2],[2,3],[3,4]],
  },
  /* Hesperon — 昏星：下沉的链，最亮一颗在右下近地平线 */
  hesperon: {
    stars: [
      {x:70,  y:64,  r:2,   o:0.20},
      {x:140, y:102, r:2.5, o:0.24},
      {x:204, y:148, r:2,   o:0.20},
      {x:266, y:198, r:2.5, o:0.26},
      {x:330, y:252, r:4,   o:0.38, tw:true},
      {x:352, y:96,  r:1.5, o:0.15, tw:true},
      {x:120, y:208, r:1.5, o:0.13},
      {x:250, y:60,  r:1.5, o:0.14, tw:true},
    ],
    links: [[0,1],[1,2],[2,3],[3,4]],
  },
  /* Pieuvre — 放射状的腕足 */
  pieuvre: {
    stars: [
      {x:270, y:150, r:3.5, o:0.32, tw:true},
      {x:200, y:80,  r:2,   o:0.20},
      {x:330, y:70,  r:2,   o:0.20},
      {x:360, y:180, r:2,   o:0.20},
      {x:310, y:250, r:2,   o:0.20},
      {x:210, y:230, r:2,   o:0.20},
      {x:160, y:160, r:1.5, o:0.16},
      {x:80,  y:90,  r:1.5, o:0.13, tw:true},
    ],
    links: [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6]],
  },
  /* Dul — 断开的链，缺席的那颗只剩一个空心圈 */
  dul: {
    stars: [
      {x:90,  y:240, r:2,   o:0.20},
      {x:160, y:210, r:2.5, o:0.24},
      {x:230, y:180, r:2,   o:0.20},
      {x:320, y:120, r:2.5, o:0.26},
      {x:360, y:60,  r:2,   o:0.20},
      {x:275, y:150, r:5,   o:0.22, ring:true},
      {x:60,  y:80,  r:1.5, o:0.14, tw:true},
    ],
    links: [[0,1],[1,2],[3,4]],
  },
  /* Médici — 天平式的折线 */
  medici: {
    stars: [
      {x:70,  y:180, r:2,   o:0.20},
      {x:130, y:100, r:2.5, o:0.24},
      {x:195, y:170, r:2,   o:0.22},
      {x:260, y:95,  r:2.5, o:0.24},
      {x:325, y:175, r:3,   o:0.30, tw:true},
      {x:350, y:70,  r:1.5, o:0.15, tw:true},
      {x:100, y:255, r:1.5, o:0.13},
    ],
    links: [[0,1],[1,2],[2,3],[3,4]],
  },
};

/* ─────────────────────────────────────
   NETWORKING DATA
   每条连线：显示/隐藏用 show:true/false 控制
   上下文字：fromText（from角色视角）toText（to角色视角）
───────────────────────────────────── */
const NET_LINKS = [
  // Phorion(0) ↔ Hesperon(1)
  {
    from:0, to:1, show:true,
    label:'伴侣',
    fromText:'令人安心的',
    toText:'完全能懂我',
  },
  // Phorion(0) ↔ Pieuvre(2)
  {
    from:0, to:2, show:true,
    label:'某种同类',
    fromText:'能放心的聪明人',
    toText:'有来头的大人物',
  },
  // Phorion(0) ↔ Dul(3)
  {
    from:0, to:3, show:true,
    label:'对象的网友的对象',
    fromText:'会好用的刀',
    toText:'靠得住的人',
  },
  // Phorion(0) ↔ Médici(4)
  {
    from:0, to:4, show:true,
    label:'上下级',
    fromText:'我真得控制控制你了',
    toText:'死老板死老板死老板',
  },
  // Hesperon(1) ↔ Pieuvre(2)
  {
    from:1, to:2, show:true,
    label:'网友',
    fromText:'有趣的观察者',
    toText:'如预期的聪明',
  },
  // Hesperon(1) ↔ Dul(3)
  {
    from:1, to:3, show:true,
    label:'网友（间接版）',
    fromText:'数据和真人一致',
    toText:'出人意料的温和科学家',
  },
  // Hesperon(1) ↔ Médici(4)
  {
    from:1, to:4, show:true,
    label:'血亲（低浓度版）',
    fromText:'远房亲戚',
    toText:'恐怖故事之老板娘是我长辈',
  },
  // Pieuvre(2) ↔ Dul(3)
  {
    from:2, to:3, show:true,
    label:'恋人',
    fromText:'前研究对象兼现男友',
    toText:'最初留下的理由',
  },
  // Pieuvre(2) ↔ Médici(4)
  {
    from:2, to:4, show:true,
    label:'债务关系',
    fromText:'冤亲债主',
    toText:'虽然我们不说是好闺闺但我们就是好闺闺',
  },
  // Dul(3) ↔ Médici(4)
  {
    from:3, to:4, show:true,
    label:'家族遗产',
    fromText:'？？？',
    toText:'老辈子们留下来的还好不是赔本买卖',
  },
];

/* 节点位置：x/y 是 viewBox(1000×680) 里的坐标，改数字就能移动 */
const NET_POSITIONS = [
  { charIdx:0, x:295, y:70 },  // Phorion
  { charIdx:1, x:670, y:75 },  // Hesperon
  { charIdx:2, x:870, y:380 },  // Pieuvre
  { charIdx:3, x:420, y:500 },  // Dul
  { charIdx:4, x:60, y:300 },  // Médici
];
