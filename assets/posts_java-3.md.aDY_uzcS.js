import{_ as r,m as d,c as i,q as o,z as s,S as p,y as c,b as n,h as a,a as l,i as t}from"./chunks/framework.BmiwJf14.js";const T=JSON.parse('{"title":"Java 学习入门 3","description":"","frontmatter":{"title":"Java 学习入门 3","date":"2024-09-12T14:00:00.000Z","tags":["Java","code"],"cover":"../cover-java.png"},"headers":[],"relativePath":"posts/java-3.md","filePath":"posts/java-3.md"}'),E={name:"posts/java-3.md"},A=c('<h1 id="java-语法基础" tabindex="-1">Java 语法基础 <a class="header-anchor" href="#java-语法基础" aria-label="Permalink to &quot;Java 语法基础&quot;">​</a></h1><hr><nav class="table-of-contents"><ul><li><a href="#运算符">运算符</a><ul><li><a href="#算术运算符">算术运算符</a></li><li><a href="#关系运算符">关系运算符</a></li><li><a href="#逻辑运算符">逻辑运算符</a></li><li><a href="#位运算符">位运算符</a></li><li><a href="#赋值运算符">赋值运算符</a></li><li><a href="#条件-三元-运算符">条件（三元）运算符</a></li></ul></li></ul></nav><h2 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-label="Permalink to &quot;运算符&quot;">​</a></h2>',4),B=c(`<h3 id="算术运算符" tabindex="-1">算术运算符 <a class="header-anchor" href="#算术运算符" aria-label="Permalink to &quot;算术运算符&quot;">​</a></h3><table tabindex="0"><thead><tr><th>运算符</th><th>含义</th><th>用法</th></tr></thead><tbody><tr><td><code>+</code></td><td>算数加</td><td><code>a + b</code></td></tr><tr><td><code>-</code></td><td>算数减</td><td><code>a - b</code></td></tr><tr><td><code>*</code></td><td>算数乘</td><td><code>a * b</code></td></tr><tr><td><code>/</code></td><td>算数除</td><td><code>a / b</code></td></tr><tr><td><code>%</code></td><td>取余</td><td><code>a % b</code></td></tr><tr><td><code>++</code></td><td>自增</td><td><code>a++</code>或<code>++a</code></td></tr><tr><td><code>--</code></td><td>自减</td><td><code>a--</code>或<code>--a</code></td></tr></tbody></table><p>五个算数运算符除了 <strong>取余</strong> 运算，别的都很熟悉，重点记录除法和取余的特殊点。而自增和自减运算符，是一元运算符，只能作用于一个变量。</p><h4 id="除法" tabindex="-1">除法 <a class="header-anchor" href="#除法" aria-label="Permalink to &quot;除法&quot;">​</a></h4><p>Java 中，两个整数相除，结果只保留整数部分，小数部分会被舍弃。</p><p>而浮点数相除，结果也是浮点数。</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">double</span><span style="color:#24292E;"> c </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 3.0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(a </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> b); </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#24292E;">System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(c </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> b); </span><span style="color:#6A737D;">// 1.5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#005CC5;"> 1</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#005CC5;">0.5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>而 除零的行为，在 Java 中并不固定，取决于数的类型。</p><ul><li>整数除零，会抛出<code>ArithmeticException</code>。</li><li>浮点数除零，会返回<code>Infinity</code>或<code>NaN</code>。</li></ul><h4 id="取余" tabindex="-1">取余 <a class="header-anchor" href="#取余" aria-label="Permalink to &quot;取余&quot;">​</a></h4><p>取余运算符，是用来求两个数相除的余数。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>在 Java 中，取余结果的符号取决于<strong>被除数</strong>符号，而不是除数（例如 Python 是取决于除数）。</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">( </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">3</span><span style="color:#D73A49;"> %</span><span style="color:#005CC5;"> 2</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// -1</span></span>
<span class="line"><span style="color:#24292E;">System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">( </span><span style="color:#005CC5;">3</span><span style="color:#D73A49;"> %</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#24292E;">System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">( </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">3</span><span style="color:#D73A49;"> %</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// -1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;">3</span><span style="color:#D73A49;"> %</span><span style="color:#005CC5;"> 2</span></span>
<span class="line"><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#005CC5;"> 3</span><span style="color:#D73A49;"> %</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;">3</span><span style="color:#D73A49;"> %</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><hr><h3 id="关系运算符" tabindex="-1">关系运算符 <a class="header-anchor" href="#关系运算符" aria-label="Permalink to &quot;关系运算符&quot;">​</a></h3><p>用于比较两个操作数，结果返回的是 <code>boolean</code> 类型 <code>true</code> or <code>false</code>。</p>`,16),y=n("hr",null,null,-1),b=n("h3",{id:"逻辑运算符",tabindex:"-1"},[a("逻辑运算符 "),n("a",{class:"header-anchor",href:"#逻辑运算符","aria-label":'Permalink to "逻辑运算符"'},"​")],-1),u=n("p",null,[a("逻辑运算符用于连接两个或多个条件，返回 "),n("code",null,"boolean"),a(" 类型 "),n("code",null,"true"),a(" or "),n("code",null,"false"),a("。一般来说，前四个较为常用。")],-1),h=c(`<h4 id="异或运算" tabindex="-1">异或运算 <a class="header-anchor" href="#异或运算" aria-label="Permalink to &quot;异或运算&quot;">​</a></h4><p>异或运算符 <code>^</code>，两个操作数相同则返回 <code>false</code>，不同则返回 <code>true</code>。</p><h4 id="和" tabindex="-1">&amp;&amp; 和 &amp; <a class="header-anchor" href="#和" aria-label="Permalink to &quot;&amp;&amp; 和 &amp;&quot;">​</a></h4><p><code>&amp;&amp;</code> 是逻辑或运算符，当第一个操作数为 <code>false</code> 时，不会再判断第二个操作数，直接返回 <code>false</code>。</p><p><code>&amp;</code> 作为逻辑与运算符时，无论第一个操作数的值是什么，都会判断第二个操作数。</p><p>例如：</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;"> 0</span><span style="color:#D73A49;"> &amp;&amp;</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">++</span><span style="color:#D73A49;"> &gt;</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// false，并且 i 的值还是 0，因为 i++ 没有执行</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>同样的代码，使用 <code>&amp;</code> 运算符，i 的值会变成 1。</p><h4 id="和-1" tabindex="-1">|| 和 | <a class="header-anchor" href="#和-1" aria-label="Permalink to &quot;|| 和 |&quot;">​</a></h4><p><code>||</code> 和 <code>|</code> 的区别和 <code>&amp;&amp;</code> 和 <code>&amp;</code> 类似。</p><hr><h3 id="位运算符" tabindex="-1">位运算符 <a class="header-anchor" href="#位运算符" aria-label="Permalink to &quot;位运算符&quot;">​</a></h3><p>位运算符是直接对二进制数进行操作的运算符。</p>`,13),D=c(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>常见的算数时位操作：</p><ol><li><code>&lt;&lt;</code> 左移</li></ol><ul><li>将二进制位左移 <code>n</code> 位数，右侧补 0。</li><li>快速乘 2 的幂。</li><li><code>a &lt;&lt; n</code> 相当于 $a \\times 2^n$</li></ul><ol start="2"><li><code>&gt;&gt;</code> 右移</li></ol><ul><li>将二进制位右移 <code>n</code> 位数，左侧补 0。</li><li>快速除以 2 的幂。</li><li><code>a &lt;&lt; n</code> 相当于 $a \\div 2^n$</li></ul></div><hr><h3 id="赋值运算符" tabindex="-1">赋值运算符 <a class="header-anchor" href="#赋值运算符" aria-label="Permalink to &quot;赋值运算符&quot;">​</a></h3><p>赋值运算符用于给变量赋值。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">short</span><span style="color:#24292E;"> s </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s </span><span style="color:#D73A49;">+</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 编译错误</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>进行这样的赋值时要注意，右侧的表达式会自动提升为 <code>int</code> 类型，所以需要强制类型转换。</p></div><hr><h3 id="条件-三元-运算符" tabindex="-1">条件（三元）运算符 <a class="header-anchor" href="#条件-三元-运算符" aria-label="Permalink to &quot;条件（三元）运算符&quot;">​</a></h3><p>条件运算符是 Java 中唯一的三元运算符，可以在单行内完成 <code>if-else</code> 的功能。</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> b; </span><span style="color:#6A737D;">// 当 a &gt; b 为 true 时，返回 a，否则返回 b</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> c </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> c; </span><span style="color:#6A737D;">// 当 a &gt; b 为 true 时，返回 a，否则判断 b &gt; c，返回 b 或 c</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,10);function C(m,g,v,_,f,F){const e=d("Mermaid");return l(),i("div",null,[A,(l(),o(p,null,{default:s(()=>[t(e,{id:"mermaid-10",class:"mermaid",graph:"graph%20TD%0A%20%20A%5BJava%20%E8%BF%90%E7%AE%97%E7%AC%A6%5D%0A%20%20A%20--%3E%20B%5B%E7%AE%97%E6%9C%AF%E8%BF%90%E7%AE%97%E7%AC%A6%5D%0A%20%20A%20--%3E%20C%5B%E5%85%B3%E7%B3%BB%E8%BF%90%E7%AE%97%E7%AC%A6%5D%0A%20%20A%20--%3E%20D%5B%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6%5D%0A%20%20A%20--%3E%20E%5B%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6%5D%0A%20%20A%20--%3E%20F%5B%E8%B5%8B%E5%80%BC%E8%BF%90%E7%AE%97%E7%AC%A6%5D%0A%20%20A%20--%3E%20G%5B%E6%9D%A1%E4%BB%B6%EF%BC%88%E4%B8%89%E5%85%83%EF%BC%89%E8%BF%90%E7%AE%97%E7%AC%A6%5D%0A"})]),fallback:s(()=>[a(" Loading... ")]),_:1})),B,(l(),o(p,null,{default:s(()=>[t(e,{id:"mermaid-157",class:"mermaid",graph:"graph%20TD%0A%20%20A%5B%E5%85%B3%E7%B3%BB%E8%BF%90%E7%AE%97%E7%AC%A6%5D%0A%20%20A%20--%3E%20B%5B%3D%3D%5D%0A%20%20A%20--%3E%20C%5B!%3D%5D%0A%20%20A%20--%3E%20D%5B%3E%5D%0A%20%20A%20--%3E%20E%5B%3C%5D%0A%20%20A%20--%3E%20F%5B%3E%3D%5D%0A%20%20A%20--%3E%20G%5B%3C%3D%5D%0A"})]),fallback:s(()=>[a(" Loading... ")]),_:1})),y,b,u,(l(),o(p,null,{default:s(()=>[t(e,{id:"mermaid-165",class:"mermaid",graph:"graph%20TD%0A%20%20A%5B%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6%5D%0A%20%20A%20--%3E%20B%5B%26%26%5D%20--%3E%20B1%5B%E9%80%BB%E8%BE%91%E4%B8%8E%5D%0A%20%20A%20--%3E%20C%5B%23124%3B%23124%3B%5D%20--%3E%20C1%5B%E9%80%BB%E8%BE%91%E6%88%96%5D%0A%20%20A%20--%3E%20D%5B!%5D%20--%3E%20D1%5B%E9%80%BB%E8%BE%91%E9%9D%9E%5D%0A%20%20A%20--%3E%20E%5B%5E%5D%20--%3E%20E1%5B%E9%80%BB%E8%BE%91%E5%BC%82%E6%88%96%5D%0A%20%20A%20--%3E%20F%5B%26%5D%20--%3E%20F1%5B%E9%80%BB%E8%BE%91%E4%B8%8E%2F%E6%8C%89%E4%BD%8D%E4%B8%8E%5D%0A%20%20A%20--%3E%20G%5B%23124%3B%5D%20--%3E%20G1%5B%E9%80%BB%E8%BE%91%E6%88%96%2F%E6%8C%89%E4%BD%8D%E6%88%96%5D%0A"})]),fallback:s(()=>[a(" Loading... ")]),_:1})),h,(l(),o(p,null,{default:s(()=>[t(e,{id:"mermaid-201",class:"mermaid",graph:"graph%20LR%0A%20%20%20%20A%5B%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6%5D%0A%20%20%20%20A%20--%3E%20B%5B%26%5D%20--%3E%20B1%5B%E5%A6%82%E6%9E%9C%E5%AF%B9%E5%BA%94%E7%9A%84%E4%B8%A4%E4%B8%AA%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%BD%8D%E9%83%BD%E4%B8%BA%201%EF%BC%8C%E5%88%99%E7%BB%93%E6%9E%9C%E4%B8%BA%201%EF%BC%8C%E5%90%A6%E5%88%99%E4%B8%BA%200%5D%0A%20%20%20%20A%20--%3E%20C%5B%23124%3B%5D%20--%3E%20C1%5B%E5%A6%82%E6%9E%9C%E5%AF%B9%E5%BA%94%E7%9A%84%E4%B8%A4%E4%B8%AA%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%BD%8D%E6%9C%89%E4%B8%80%E4%B8%AA%E4%B8%BA%201%EF%BC%8C%E5%88%99%E7%BB%93%E6%9E%9C%E4%B8%BA%201%EF%BC%8C%E5%90%A6%E5%88%99%E4%B8%BA%200%5D%0A%20%20%20%20A%20--%3E%20D%5B%5E%5D%20--%3E%20D1%5B%E5%A6%82%E6%9E%9C%E5%AF%B9%E5%BA%94%E7%9A%84%E4%B8%A4%E4%B8%AA%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%BD%8D%E7%9B%B8%E5%90%8C%EF%BC%8C%E5%88%99%E7%BB%93%E6%9E%9C%E4%B8%BA%200%EF%BC%8C%E5%90%A6%E5%88%99%E4%B8%BA%201%5D%0A%20%20%20%20A%20--%3E%20E%5B~%5D%20--%3E%20E1%5B%E6%8C%89%E4%BD%8D%E5%8F%96%E5%8F%8D%5D%0A%20%20%20%20A%20--%3E%20F%5B%3C%3C%5D%20--%3E%20F1%5B%E5%B7%A6%E7%A7%BB%E8%BF%90%E7%AE%97%E7%AC%A6%5D%0A%20%20%20%20A%20--%3E%20G%5B%3E%3E%5D%20--%3E%20G1%5B%E5%8F%B3%E7%A7%BB%E8%BF%90%E7%AE%97%E7%AC%A6%5D%0A%20%20%20%20A%20--%3E%20H%5B%3E%3E%3E%5D%20--%3E%20H1%5B%E6%8C%89%E4%BD%8D%E5%8F%B3%E7%A7%BB%E8%A1%A5%E9%9B%B6%5D%0A"})]),fallback:s(()=>[a(" Loading... ")]),_:1})),D])}const x=r(E,[["render",C]]);export{T as __pageData,x as default};