import{_ as o,M as p,p as c,q as i,R as n,t as s,N as t,a1 as a}from"./framework-96b046e1.js";const l={},r=a('<h1 id="javascript-array-methods" tabindex="-1"><a class="header-anchor" href="#javascript-array-methods" aria-hidden="true">#</a> JavaScript Array Methods</h1><p>Because arrays are such a vital part of most programs, JavaScript provide many different methods and expressions for working with them. These methods and expressions can be used to manipulate arrays or search within arrays, or create whole new arrays from existing arrays.</p><p>The following methods are used sort of like utility methods, nonetheless they are very useful.</p><h2 id="the-isarray-method" tabindex="-1"><a class="header-anchor" href="#the-isarray-method" aria-hidden="true">#</a> The isArray() Method</h2><p>Sometimes it is necessary to know if a variable is contains an array. Unfortunately, we cannot rely on the value datatype. This is because, in JavaScript, arrays are of the object datatype. So, if we were to use <code>typeof</code> on a array, it will return <code>object</code>. Fortunately, there is a method for testing if a value is an array, the <code>isArray()</code> method.</p>',5),u={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"isArray()",-1),k=n("code",null,"Array",-1),h=n("code",null,"boolean",-1),m=n("code",null,"true",-1),v=n("code",null,"Array",-1),f=n("code",null,"false",-1),y=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Creates an array of colors</span>
<span class="token keyword">const</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// Create an object of colors </span>
<span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;black&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span> <span class="token punctuation">}</span>

<span class="token comment">// Checking the datatype of the variables</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> colors<span class="token punctuation">)</span> <span class="token comment">// object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> theme<span class="token punctuation">)</span>  <span class="token comment">// object</span>

<span class="token comment">// Checking the variables contain Arrays</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>colors<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>theme<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-join-method" tabindex="-1"><a class="header-anchor" href="#the-join-method" aria-hidden="true">#</a> The join() Method</h2>`,2),b={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"join()",-1),_=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Creates a groceries list</span>
<span class="token keyword">const</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Apples&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bananas&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Cherries&#39;</span><span class="token punctuation">]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruits<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Apples,Bananas,Cherries</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruits<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// ApplesBananasCherries</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruits<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; | &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Apples | Bananas | Cherries</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function w(j,A){const e=p("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[s("The "),n("a",u,[d,t(e)]),s(" method determines whether the passed value is an "),k,s(". The method will return a "),h,s(", "),m,s(" if the value is an "),v,s(" or "),f,s(", if it is not.")]),y,n("p",null,[s("The "),n("a",b,[g,t(e)]),s(" method creates a string by concatenating all the elements of an array. This method will become very useful when adding create new HTML with JavaScript and adding it to the page.")]),_])}const S=o(l,[["render",w],["__file","index.html.vue"]]);export{S as default};