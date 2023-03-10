import{_ as c,M as a,p as l,q as i,N as e,R as s,t as n,a1 as p}from"./framework-96b046e1.js";const r={},d=s("h1",{id:"switch",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#switch","aria-hidden":"true"},"#"),n(" switch")],-1),u=s("h2",{id:"the-switch-statement",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#the-switch-statement","aria-hidden":"true"},"#"),n(" The switch statement")],-1),k={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"switch",-1),m=s("code",null,"if...else",-1),b=s("code",null,"switch",-1),h=s("code",null,"case",-1),w=s("code",null,"case",-1),g=s("code",null,"===",-1),f=p(`<p>A <code>break</code> statement is used tell the program to jump out of switch statement and ignore the remaining cases. If a <code>break</code> statement is not used, then fall through will occur.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">/* Let&#39;s do the same thing we were doing in the if...else examples using a switch statement.
With this new statement, we can include all the conditions in the same block of code.
*/</span>

<span class="token keyword">let</span> productTotal <span class="token operator">=</span> <span class="token number">30</span>
<span class="token keyword">const</span> shippingFee <span class="token operator">=</span> <span class="token number">15</span>
<span class="token keyword">let</span> cartTotal
<span class="token keyword">let</span> discount <span class="token operator">=</span> <span class="token number">0.05</span> <span class="token operator">*</span> productTotal

<span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> productTotal <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token operator">:</span>
    <span class="token comment">// this block of code will execute</span>
    cartTotal <span class="token operator">=</span> productTotal <span class="token operator">+</span> shippingFee
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Cart Total is &#39;</span> <span class="token operator">+</span> cartTotal<span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> productTotal <span class="token operator">&gt;=</span> <span class="token number">50</span><span class="token operator">:</span>
    <span class="token comment">// this block of code will NOT execute</span>
    cartTotal <span class="token operator">=</span> productTotal
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Cart Total is &#39;</span> <span class="token operator">+</span> cartTotal<span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> productTotal <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token operator">:</span>
    <span class="token comment">// this block of code will NOT execute</span>
    cartTotal <span class="token operator">=</span> productTotal <span class="token operator">-</span> discount
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Cart Total is &#39;</span> <span class="token operator">+</span> cartTotal<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>The <code>expression</code> for this<code>switch</code> statement is set to <code>true</code> because we are checking if each of these cases are <code>true</code> or <code>false</code>. See below for a generic <code>switch</code> statement syntax.</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> answer <span class="token operator">=</span> <span class="token string">&#39;A&#39;</span>

<span class="token keyword">switch</span><span class="token punctuation">(</span>answer<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">&#39;A&#39;</span><span class="token operator">:</span>
    <span class="token comment">// This block of code WILL execute</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;A is the correct answer.&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token string">&#39;B&#39;</span><span class="token operator">:</span> 
    <span class="token comment">// This block of code will NOT execute</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;B is the wrong answer.&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token string">&#39;C&#39;</span><span class="token operator">:</span> 
    <span class="token comment">// This block of code will NOT execute</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;C is the wrong answer.&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-break-statement" tabindex="-1"><a class="header-anchor" href="#the-break-statement" aria-hidden="true">#</a> The break statement</h2><p>In most cases, it is necessary to include a <code>break</code> at the end of a <code>case</code>. If a <code>break</code> statement is not used than fall through will occur and all remaining cases will executed. This is because once a <code>switch</code> encounters a matching <code>case</code> all remaining cases are also considered matches.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Note that productTotal is $30</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> productTotal <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token operator">:</span>
    <span class="token comment">// this block of code will execute</span>
    cartTotal <span class="token operator">=</span> productTotal <span class="token operator">+</span> shippingFee
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Cart Total is &#39;</span> <span class="token operator">+</span> cartTotal<span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> productTotal <span class="token operator">&gt;=</span> <span class="token number">50</span><span class="token operator">:</span>
    <span class="token comment">// this block of code will ALSO execute</span>
    cartTotal <span class="token operator">=</span> productTotal
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Cart Total is &#39;</span> <span class="token operator">+</span> cartTotal<span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> productTotal <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token operator">:</span>
    <span class="token comment">// this block of code will ALSO execute</span>
    cartTotal <span class="token operator">=</span> productTotal <span class="token operator">-</span> discount
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Cart Total is &#39;</span> <span class="token operator">+</span> cartTotal<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>There is no need to add a <code>break</code> at the end of the last case because the <code>switch</code> statement will stop executing anyway</p></div><p>When used properly, fall through can be used to make the code more efficient, by stacking cases together.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* Our e-commerce example does not work in this case, so below is a generic example: */</span>

<span class="token keyword">const</span> answer <span class="token operator">=</span> <span class="token string">&#39;C&#39;</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>answer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">&#39;A&#39;</span><span class="token operator">:</span>
  <span class="token keyword">case</span> <span class="token string">&#39;B&#39;</span><span class="token operator">:</span>
    <span class="token comment">// this block of code will execute</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;This is the wrong answer&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token string">&#39;C&#39;</span><span class="token operator">:</span>
    <span class="token comment">// this block of code will NOT execute</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;This is the correct answer&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-default-clause" tabindex="-1"><a class="header-anchor" href="#the-default-clause" aria-hidden="true">#</a> The default clause</h2><p>The <code>default</code> clause, similar to the <code>else</code> statement, is use to provide a default statement if no matching <code>case</code> is found.</p><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>It is best practice to set the <code>default</code> clause as the last clause in a switch statement.</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Note that productTotal is $30</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token keyword">case</span> productTotal <span class="token operator">&gt;=</span> <span class="token number">50</span><span class="token operator">:</span>
    <span class="token comment">// this block of code will NOT execute</span>
    cartTotal <span class="token operator">=</span> productTotal
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Cart Total is &#39;</span> <span class="token operator">+</span> cartTotal<span class="token punctuation">)</span>
    <span class="token keyword">break</span>

  <span class="token keyword">case</span> productTotal <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token operator">:</span>
    <span class="token comment">// this block of code will NOT execute</span>
    cartTotal <span class="token operator">=</span> productTotal <span class="token operator">-</span> discount
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Cart Total is &#39;</span> <span class="token operator">+</span> cartTotal<span class="token punctuation">)</span>
    <span class="token keyword">break</span>

  <span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token comment">// this block of code will execute</span>
    cartTotal <span class="token operator">=</span> productTotal <span class="token operator">+</span> shippingFee
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Cart Total is &#39;</span> <span class="token operator">+</span> cartTotal<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function T(y,x){const t=a("Youtube"),o=a("ExternalLinkIcon");return l(),i("div",null,[d,e(t,{id:"I5YlFbIFKGE",citation:"griffith"}),u,s("p",null,[n("The "),s("a",k,[v,n(" statement"),e(o)]),n(" is similar to the "),m,n(" statement, but instead of evaluating a condition, the "),b,n(" statement contains different cases. Each "),h,n(" is evaluated to see if it matches the provided expression. A "),w,n(" will only match the expression if the case has the exact same values using the strict comparison ("),g,n(") operator. If a case does match the expression, the associated block of code will be executed.")]),f])}const N=c(r,[["render",T],["__file","switch.html.vue"]]);export{N as default};
