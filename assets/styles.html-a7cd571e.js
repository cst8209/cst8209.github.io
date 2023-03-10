import{_ as p,M as t,p as c,q as i,R as s,t as n,N as a,V as l,a1 as r}from"./framework-96b046e1.js";const u={},d=s("h1",{id:"javascript-style-guide",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#javascript-style-guide","aria-hidden":"true"},"#"),n(" JavaScript Style Guide")],-1),k={href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"},v={href:"https://google.github.io/styleguide/jsguide.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/rwaldron/idiomatic.js/",target:"_blank",rel:"noopener noreferrer"},g=s("p",null,"But for this course, we will be using the JavaScript Standard Style.",-1),b=s("h2",{id:"javascript-standard-style",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#javascript-standard-style","aria-hidden":"true"},"#"),n(" JavaScript Standard Style")],-1),h={href:"https://standardjs.com/",target:"_blank",rel:"noopener noreferrer"},f=s("code",null,"npm",-1),y=s("h2",{id:"standard-style-rules",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#standard-style-rules","aria-hidden":"true"},"#"),n(" Standard Style Rules")],-1),w={href:"https://standardjs.com/rules.html",target:"_blank",rel:"noopener noreferrer"},j=r(`<p><strong>Do not use semicolons at the end of the statements</strong></p><p>This is a controversial style choice, and does have exceptions, most of which will not apply to beginner programmers.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">)</span>   <span class="token comment">// ✓ ok</span>
window<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// ✗ avoid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Semicolons should be used in <code>for</code> statements</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span> <span class="token comment">//  semicolons required</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Use 2 spaces for indentation</strong></p><p>VSCode is configured to use 2 spaces when using the tab key.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;True!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Use single quotes for strings</strong></p><p>Exceptions include when needing to escape single quotes OR when using template literals for string interpolation.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello there&#39;</span><span class="token punctuation">)</span>     <span class="token comment">// ✓ ok</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello there&quot;</span><span class="token punctuation">)</span>     <span class="token comment">// ✗ avoid</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello there</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>     <span class="token comment">// ✗ avoid</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello, O&#39;Brien&quot;</span><span class="token punctuation">)</span>  <span class="token comment">// ✓ ok</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>   <span class="token comment">// ✓ ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>No unused variables</strong></p><p>Variables that are declared but never called are considered unused.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hello</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span> <span class="token comment">// unused variable - ✗ avoid</span>
  <span class="token keyword">return</span> <span class="token string">&#39;Hello&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Add a space following keywords</strong></p><p>Keywords include, but not limited to <code>if</code>, <code>for</code>, <code>while</code>, and <code>switch</code>.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>   <span class="token comment">// ✓ ok</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>    <span class="token comment">// ✗ avoid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Add a space before a function declaration&#39;s parentheses.</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">name</span> <span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>   <span class="token comment">// ✓ ok</span>
<span class="token keyword">function</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>    <span class="token comment">// ✗ avoid</span>
 
<span class="token function">run</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>      <span class="token comment">// ✓ ok</span>
<span class="token function">run</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>       <span class="token comment">// ✗ avoid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Always use === instead of ==</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>   <span class="token comment">// ✓ ok</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">==</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>    <span class="token comment">// ✗ avoid</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!==</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>   <span class="token comment">// ✓ ok</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!=</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>    <span class="token comment">// ✗ avoid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Commas should have a space after them.</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>                 <span class="token comment">// ✓ ok</span>
<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>                    <span class="token comment">// ✗ avoid</span>

<span class="token keyword">function</span> <span class="token function">greet</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>  <span class="token comment">// ✓ ok</span>
<span class="token keyword">function</span> <span class="token function">greet</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>   <span class="token comment">// ✗ avoid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Keep else statements on the same line as their curly braces.</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ✓ ok</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>


<span class="token comment">// ✗ avoid</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Always curly braces with if statements</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ✓ ok</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>quiet <span class="token operator">!==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;done&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// ✗ avoid</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>quiet <span class="token operator">!==</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;done&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Multiple blank lines are not allowed.</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ✓ ok</span>
<span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ✗ avoid</span>
<span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
 
 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Each variable declaration should in its own statement.</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ✓ ok</span>
<span class="token keyword">const</span> silent <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">const</span> verbose <span class="token operator">=</span> <span class="token boolean">true</span>
 
<span class="token comment">// ✗ avoid</span>
<span class="token keyword">const</span> silent <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> verbose <span class="token operator">=</span> <span class="token boolean">true</span>
 
<span class="token comment">// ✗ avoid</span>
<span class="token keyword">const</span> silent <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    verbose <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Use camelcase when naming variables and functions.</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">my_function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>    <span class="token comment">// ✗ avoid</span>
<span class="token keyword">function</span> <span class="token function">myFunction</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>     <span class="token comment">// ✓ ok</span>

<span class="token keyword">var</span> my_var <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>           <span class="token comment">// ✗ avoid</span>
<span class="token keyword">var</span> myVar <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>            <span class="token comment">// ✓ ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Trailing commas not allowed.</strong></p><p>A trailing comma refers to the comma after the last item in an array or object.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Dick&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Harry&#39;</span><span class="token punctuation">,</span> <span class="token comment">// ✗ avoid</span>
<span class="token punctuation">]</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// ✗ avoid</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Commas must be placed at the end of the current line.</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span>
  <span class="token punctuation">,</span><span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>   <span class="token comment">// ✗ avoid</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>   <span class="token comment">// ✓ ok</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Files must end with a newline.</strong></p><p>The last line of code in a file must be following by a return.</p><p><strong>No space between function identifiers and their invocations.</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// ✓ ok</span>
console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// ✗ avoid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Add space between colon and value in key value pairs.</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;key&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span>    <span class="token comment">// ✗ avoid</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;key&#39;</span> <span class="token operator">:</span><span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span>     <span class="token comment">// ✗ avoid</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;key&#39;</span><span class="token operator">:</span><span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span>      <span class="token comment">// ✗ avoid</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;key&#39;</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span>     <span class="token comment">// ✓ ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45);function _(x,S){const e=t("ExternalLinkIcon"),o=t("RouterLink");return c(),i("div",null,[d,s("p",null,[n("A programming style guide is a set of guidelines for making your code more readable and less error-prone. There are many different popular style guides for JavaScript: including "),s("a",k,[n("Airbnb"),a(e)]),n(", "),s("a",v,[n("Google"),a(e)]),n(", and "),s("a",m,[n("Idiomatic"),a(e)]),n(".")]),g,b,s("p",null,[n("The "),s("a",h,[n("JavaScript Standard Style"),a(e)]),n(" was designed to be a simple, no configuration guide, linter, and formatter. The objective of the Standard Style is to provide a simple set of rules that are easy to follow, and provide automatic formatting.")]),s("p",null,[n("JavaScript Standard Style can be installed using "),f,n(" and an extension is available for Visual Studio Code. Review the instructions for "),a(o,{to:"/modules/tools/vscode/#configuring-visual-studio-code"},{default:l(()=>[n("Configuring Visual Studio Code")]),_:1}),n(" to learn more.")]),y,s("p",null,[n("The following is a summary of the rules of the JavaScript Standard Style. Review the "),s("a",w,[n("JavaScript Standard Style Rules"),a(e)]),n(" for a more extensive list of rules.")]),j])}const q=p(u,[["render",_],["__file","styles.html.vue"]]);export{q as default};
