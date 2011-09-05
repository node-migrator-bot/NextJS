Ext.data.JsonP.tutorial_globalextent({
    "guide": [

        '<h1>グローバルアクションとエクテントアクション</h1>',
        '<p>',
        'アクションの動作は確認できました。',
        'Next JSには<em>グローバルアクションファイル</em>と<em>エクテントアクション</em>という、先ほどとは違うアクションが用意されています。',
        '区別するために、先ほどのアクションを<em>標準アクション</em>と呼びます。',
        '</p>',

        '<h2>グローバルアクションとは？</h2>',
        '<p>',
        '標準アクションは、アクセスするファイル名がアクション名となり、対応するディレクトリの<em>[アクション名].js</em>',
        'を実行しました。',
        'グローバルアクションは、アクション名に関係なく実行されるアクションです。',
        'サイト全体、どこをアクセスしても必ず実行されるアクションで、サイト全体を覆うアクションです。',
        '</p>',

        '<h3>グローバルアクションの利用場面</h3>',
        '<p>',
        'グローバルアクションは、すべてのアクセスに対して動作します。',
        'そのため、全体の設定や独自のロギング処理などを行うことができます。',
        '(ロギング処理は標準の機能でアクセスログとエラーログが実装されています)',
        '標準アクション同様、アクションチェーンが利用できます。',
        '</p>',

        '<h3>グローバルアクション配置</h3>',
        '<p>',
        'グローバルアクションは、標準アクションと同じく<em>actions</em>ディレクトリに配置します。',
        '標準アクションと違い、actionsディレクトリ直下に１つだけ配置します。',
        'ファイル名は<em>global.action.js</em>と固定です。',
        'グローバルアクション内の処理と標準アクション内の処理に差はありません。',
        'アクションチェーンも、すべて標準アクションと同一です。',
        'グローバルアクションは、標準アクションよりも先に実行されます。',
        '次のように、this.res.resultでの結果も共有することができます。',
        '</p>',

        '<br />',
        '<h4>actions/global.action.js</h4>',
        '<pre>',
        'module.exports = [{' + "\n",
        '    execute: <span style="color:#000099;">function</span>() {' + "\n",
        '        <span style="color:#000099;">this</span>.<span style="color:#000099;">set</span>(<span style="color:#009900;">\'global\'</span>, <span style="color:#009900;">\'executed\'</span>);' + "\n",
        '        <span style="color:#000099;">this</span>.end();' + "\n",
        '    }' + "\n",
        '}];',
        '</pre>',

        '<h4>actions/index.js</h4>',
        '<pre>',
        'module.exports = [{' + "\n",
        '    execute: <span style="color:#000099;">function</span>() {' + "\n",
        '        <span style="color:#000099;">this</span>.<span style="color:#000099;">set</span>(<span style="color:#009900;">\'foo\'</span>, <span style="color:#009900;">\'global action &quot;global&quot; is \'</span> + <span style="color:#000099;">this</span>.res.result[<span style="color:#009900;">\'global\'</span>]);' + "\n",
        '        <span style="color:#000099;">this</span>.end();' + "\n",
        '    }' + "\n",
        '}];',
        '</pre>',


        '<h2>エクテントアクションとは？</h2>',
        '<p>',
        'エクテントアクション(Extent Action)とは、特定の範囲で動作するアクションです。',
        'Next JS内では、グローバルアクション、標準アクション、そして、このエクテントアクションが存在します。',
        '日本語で言い換えるなら「<em>範囲アクション</em>」になります。',
        '</p>',

        '<h3>エクテントアクションの利用場面</h3>',
        '<p>',
        'エクテントアクションは、一定の範囲に対して必ず動作するアクションで、実行順としては、',
        'グローバルアクションの次に実行されます。（標準アクションの前）',
        'このアクションは、アクセスしたディレクトリより上に上に、ルートディレクトリ(actions)までさかのぼり、',
        '<em>extent.action.js</em>が存在した場合、そのエクテントアクションを実行します。',
        'この仕組みは、主にログインなど一定の範囲のアクセス権限制御などに利用します。',
        'もちろんアイデア次第で、他の使い方をしてもかまいません。',
        'エクテントアクションの特徴は、アクセスしたディレクトリ階層からルートディレクトリまでの間で最も深いところにある',
        'エクテントアクションが実行される仕組みです。',
        '</p>',
        '<p>',
        'ログインの場合、actions直下に１つログインしているかどうか？のセッションを確認するための',
        'エクテントアクションを配置します。',
        '次に、loginというディレクトリを作り、その中にエクテントアクションを設置します。',
        'loginディレクトリ以下にアクセスする場合は、',
        '<em>actions/login/extent.action.js</em>を読み込まず、<em>actions/extent.action.js</em>を読み込みます。',
        '</p>',
        '<p>',
        'つまり、こういうことです。',
        '</p>',
        '<ul>',
        '<li>loginディレクトリ以外は、どこをアクセスしても<em>actions/extent.action.js</em>が実行される</li>',
        '<li><em>actions/login/extent.action.js</em>は、特に処理をしないアクション(this.endだけを呼び出すなど)を設定する。</li>',
        '<li><em>actions/extent.action.js</em>の処理は、ログインしていなければ、loginディレクトリにリダイレクトする</li>',
        '</ul>',
        '<p>',
        'こうすることで、ログインしていない場合は、login下にリダイレクトされ、ログイン処理後、元々アクセスしていたURL、',
        'または、トップページへリダイレクトしてあげると、今度はログインしているため、<em>actions/extent.action.js</em>の処理でloginディレクトリに',
        'リダイレクトされることはなくなります。',
        '</p>',


        '<address>Copyright &copy; 2006 - 2011 <a href="http://www.xenophy.com/">Xenophy.CO.,LTD</a> All rights Reserved.</address>',

        ].join("")
    });
