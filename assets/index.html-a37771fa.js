import{_ as i,M as a,p as r,q as p,N as e,R as s,t as n,a1 as l}from"./framework-96b046e1.js";const u={},d=s("h1",{id:"javascript-arrays",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#javascript-arrays","aria-hidden":"true"},"#"),n(" JavaScript Arrays")],-1),k={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="creating-an-array" tabindex="-1"><a class="header-anchor" href="#creating-an-array" aria-hidden="true">#</a> Creating an Array</h2><p>In JavaScript, an array is created with a set of square brackets (<code>[]</code>). When nothing is between the square brackets, this will create an empty array.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Creates an empty array</span>
<span class="token keyword">const</span> empty <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Items can be added to the array by inserting a comma-separated list between the square brackets.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Creates an array of colors</span>
<span class="token keyword">const</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// Creates an array of numbers</span>
<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">]</span>

<span class="token comment">// Creates a groceries list</span>
<span class="token keyword">const</span> groceries <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Apples&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Milk&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Ice Cream&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bread&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="retrieving-array-items" tabindex="-1"><a class="header-anchor" href="#retrieving-array-items" aria-hidden="true">#</a> Retrieving Array Items</h2><p>Each item in an array is assigned a numbered index. This index will be used to retrieve each item from the array.</p><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>In JavaScript, like many other programming languages, arrays start with index <code>0</code>, not <code>1</code>.</p></div><p>To retrieve an item from an array, the variable name is followed by a set of square brackets (<code>[]</code>). Inside the square brackets is the numbered index of the desired items. This is known as <strong>Bracket Notation</strong>.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Creates an array of colors</span>
<span class="token keyword">const</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// Logging the FIRST color in the colors array</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colors<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// blue</span>

<span class="token comment">// Logging the THIRD color in the colors array. </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colors<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// yellow</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If a requested index is not in the array, the value <code>undefined</code> will be returned.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Creates a groceries list</span>
<span class="token keyword">const</span> groceries <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Apples&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Milk&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Ice Cream&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bread&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// Logging an item that is not defined </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>groceries<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="updating-array-items" tabindex="-1"><a class="header-anchor" href="#updating-array-items" aria-hidden="true">#</a> Updating Array Items</h2><p>Just as variables can be assigned values, so can the items of an array. Items can be added or replaced using the <strong>Bracket Notation</strong> and the equal sign (<code>=</code>).</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Creates a groceries list</span>
<span class="token keyword">const</span> groceries <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Apples&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Milk&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Ice Cream&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bread&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// Replaces the FIRST item in the groceries array</span>
groceries<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Bananas&#39;</span> <span class="token comment">// groceries = [&#39;Bananas&#39;, &#39;Milk&#39;, &#39;Ice Cream&#39;, &#39;Bread&#39;]</span>

<span class="token comment">// Replaces the THIRD item in the groceries array </span>
groceries<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Yogurt&#39;</span> <span class="token comment">// groceries = [&#39;Bananas&#39;, &#39;Milk&#39;, &#39;Yogurt&#39;, &#39;Bread&#39;]</span>

<span class="token comment">// Adds an item to the groceries array</span>
groceries<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Carrots&#39;</span> <span class="token comment">// groceries = [&#39;Bananas&#39;, &#39;Milk&#39;, &#39;Yogurt&#39;, &#39;Bread&#39;, &#39;Carrots&#39;]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>While possible, it is discouraged to use Bracket Notation for adding new items to an array. It better to use Array methods like <code>push()</code> or <code>unshift()</code>.</p></div>`,16);function v(g,b){const t=a("Scrimba"),o=a("ExternalLinkIcon"),c=a("Youtube");return r(),p("div",null,[d,e(t,{id:"/c/cgqKBNhG"}),s("p",null,[n("In most programming languages, it is possible to store a list of values into a single container. In JavaScript, this container is known as an array. An "),s("a",k,[n("array"),e(o)]),n(" is a comma-separated list of values, enclosed by a set of square brackets.")]),m,e(c,{id:"arIhhRd1RPc",citation:"griffith"})])}const y=i(u,[["render",v],["__file","index.html.vue"]]);export{y as default};
