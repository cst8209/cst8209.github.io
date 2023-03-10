import{_ as p,M as e,p as i,q as l,N as s,R as n,t as a,a1 as o}from"./framework-96b046e1.js";const u={},d=n("h1",{id:"array-concatenation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#array-concatenation","aria-hidden":"true"},"#"),a(" Array Concatenation")],-1),k=n("p",null,"Array concatenation, like string concatenation, is the combining of two arrays together. There are two convenient techniques for doing just that.",-1),h=n("h2",{id:"the-concat-method",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#the-concat-method","aria-hidden":"true"},"#"),a(" The concat() Method")],-1),m={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"concat()",-1),v=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> primary <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> secondary <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;purple&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">]</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>primary<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>secondary<span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token comment">// [&#39;red&#39;, &#39;blue&#39;, &#39;yellow&#39;, &#39;purple&#39;, &#39;green&#39;, &#39;orange&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_=n("h2",{id:"the-spread-syntax",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#the-spread-syntax","aria-hidden":"true"},"#"),a(" The Spread Syntax")],-1),b={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",target:"_blank",rel:"noopener noreferrer"},y=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> primary <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> secondary <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;purple&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">]</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>primary<span class="token punctuation">,</span> <span class="token operator">...</span>secondary<span class="token punctuation">]</span><span class="token punctuation">)</span> 
<span class="token comment">// [&#39;red&#39;, &#39;blue&#39;, &#39;yellow&#39;, &#39;purple&#39;, &#39;green&#39;, &#39;orange&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function f(x,w){const c=e("Scrimba"),t=e("ExternalLinkIcon"),r=e("Youtube");return i(),l("div",null,[d,s(c,{id:"/c/c393ndcB"}),k,h,n("p",null,[a("The "),n("a",m,[g,s(t)]),a(" method is used to merge two or more arrays. It does not change existing arrays but instead returns a new array.")]),v,s(r,{id:"LuZunhQkkf0",citation:"griffith"}),_,n("p",null,[a("The "),n("a",b,[a("spread syntax"),s(t)]),a(" is one of the more confusing and yet incredibly useful features recently introduced to JavaScript. It is a shortcut that will write out or spread all the elements of an array. This can be useful for combining arrays together.")]),y])}const j=p(u,[["render",f],["__file","array-concatenation.html.vue"]]);export{j as default};
