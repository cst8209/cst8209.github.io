import{_ as a,p as e,q as n,a1 as s,R as t}from"./framework-96b046e1.js";const i={},o=s(`<h1 id="manipulating-classes" tabindex="-1"><a class="header-anchor" href="#manipulating-classes" aria-hidden="true">#</a> Manipulating Classes</h1><p>On of the most common changes made to an HTML Element by JavaScript is adding, removing and toggling classes. Because this is so common, JavaScript has a special class object and a set of methods specifically for HTML Element class manipulations. Using the <code>classList</code> object of an HTML Element, we can <code>add()</code>, <code>remove()</code> and <code>toggle()</code> classes.</p><h2 id="adding-classes" tabindex="-1"><a class="header-anchor" href="#adding-classes" aria-hidden="true">#</a> Adding Classes</h2><p>To add a class to an HTML Element, we can use the <code>classList.add()</code> function. It is possible to add more than one class at a time by separating them by a comma.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$link<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;btn-primary&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),c=t("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"HTML Element - Adding Classes",src:"//codepen.io/IMD/embed/xBKWaG/?height=265&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/xBKWaG/'>HTML Element - Adding Classes</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),l=s(`<h2 id="removing-classes" tabindex="-1"><a class="header-anchor" href="#removing-classes" aria-hidden="true">#</a> Removing Classes</h2><p>To remove a class from an HTML Element, we can use the <code>classList.remove()</code> function. It is possible to remove more than one class at a time by separating them by a comma.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$link<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;btn-primary&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="toggling-classes" tabindex="-1"><a class="header-anchor" href="#toggling-classes" aria-hidden="true">#</a> Toggling Classes</h2><p>To remove a class form an HTML Element if it is present or to add a class if it is not, we can use the <code>classList.toggle()</code> function. It is <strong>NOT</strong> possible to toggle more than one class with a single function call.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$link<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),d=[o,c,l];function p(r,u){return e(),n("div",null,d)}const g=a(i,[["render",p],["__file","manipulating-classes.html.vue"]]);export{g as default};