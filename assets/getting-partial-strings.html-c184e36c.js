import{_ as o,M as c,p,q as i,R as n,t as s,N as e,a1 as t}from"./framework-96b046e1.js";const l={},r=n("h1",{id:"getting-partial-strings",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getting-partial-strings","aria-hidden":"true"},"#"),s(" Getting Partial Strings")],-1),u=n("p",null,"JavaScript make it possible, through the use of methods, to retrieve part of an existing string.",-1),d=n("h2",{id:"substring",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#substring","aria-hidden":"true"},"#"),s(" substring()")],-1),k={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"substring()",-1),g={class:"custom-container danger"},v=n("p",{class:"custom-container-title"},"NOTE",-1),b=n("strong",null,"NOT",-1),h=n("code",null,"substring()",-1),f={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"substr()",-1),x=n("code",null,"substr()",-1),S=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token string">&#39;Hello, World!&#39;</span>

<span class="token comment">// includes the first index but excludes the second</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Hello&#39;</span>

<span class="token comment">// if only one index, goes to the end of the string</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;World!&#39;</span>

<span class="token comment">// swaps the indexes, if the first is larger</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;World&#39;</span>

<span class="token comment">// negative indexes are treated as 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Hello, World!&#39;</span>

<span class="token comment">// negative indexes are treated as 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="slice" tabindex="-1"><a class="header-anchor" href="#slice" aria-hidden="true">#</a> slice()</h2>`,2),w={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice",target:"_blank",rel:"noopener noreferrer"},W=n("code",null,"slice",-1),j=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token string">&#39;Hello, World!&#39;</span>

<span class="token comment">// includes the first index but excludes the second</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Hello&#39;</span>

<span class="token comment">// if only one index, goes to the end of the string</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;World!&#39;</span>

<span class="token comment">// returns an empty string, if the first is larger</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;&#39;</span>

<span class="token comment">// negative indexes start from the end and work backwards</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;World!&#39;</span>

<span class="token comment">// negative indexes start from the end and work backwards</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;World&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,2),y={href:"https://www.youtube.com/watch?v=176JPkG227g",target:"_blank",rel:"noopener noreferrer"};function N(G,H){const a=c("ExternalLinkIcon");return p(),i("div",null,[r,u,d,n("p",null,[s("The "),n("a",k,[m,e(a)]),s(" method returns part of a string between the provided start index and the provided end index or the end of the string.")]),n("div",g,[v,n("p",null,[s("Do "),b,s(" confused the "),h,s(" method with the "),n("a",f,[_,e(a)]),s(" method. While "),x,s(" is a valid method, it is considers to be a legacy function and should not be used.")])]),S,n("p",null,[s("The "),n("a",w,[W,e(a)]),s(" method returns part of a string between the provided start index and the provided end index or the end of the string.")]),j,n("ul",null,[n("li",null,[n("a",y,[s("substring and substr String methods"),e(a)])])])])}const O=o(l,[["render",N],["__file","getting-partial-strings.html.vue"]]);export{O as default};