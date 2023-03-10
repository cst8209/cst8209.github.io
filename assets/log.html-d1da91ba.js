import{_ as n,p as s,q as a,Q as t,R as e,t as i,a1 as o}from"./framework-96b046e1.js";const c={},l=e("h1",{id:"view-commit-log",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#view-commit-log","aria-hidden":"true"},"#"),i(" View Commit Log")],-1),r=o(`<p>Git keeps track of the history of each commit made to the repository. This history is known as the commit log.</p><p>To view the commit log, use <code>git log</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Many options can be applied to the commit log. A few are shown below.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Limit to 5 most recent commits</span>
<span class="token function">git</span> log <span class="token parameter variable">-n</span> <span class="token number">5</span>

<span class="token comment"># Limit to commits since January 1, 2019</span>
<span class="token function">git</span> log <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token number">2019</span>-01-01

<span class="token comment"># Limit to commits by author</span>
<span class="token function">git</span> log <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;Michael&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function m(d,p){return s(),a("div",null,[l,t(` 
::: watch
[Watch "View the commit log" on LinkedIn Learning](https://www.linkedin.com/learning/git-essential-training-the-basics/view-the-commit-log)
::: `),r])}const u=n(c,[["render",m],["__file","log.html.vue"]]);export{u as default};
