import{_ as t,p as a,q as i,Q as n,R as e,t as s,a1 as r}from"./framework-96b046e1.js";const o={},d=e("h1",{id:"initialize-a-repository",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#initialize-a-repository","aria-hidden":"true"},"#"),s(" Initialize a Repository")],-1),c=r(`<h2 id="bash-commands" tabindex="-1"><a class="header-anchor" href="#bash-commands" aria-hidden="true">#</a> Bash Commands</h2><p>Bash is a command line interface (CLI) used on UNIX style systems (Mac and Linux).</p><p>If you&#39;re using a Mac, these commands can be used in the standard Terminal. The standard Windows Command Prompt uses different commands.</p><p>Fortunately for Windows users, installing Git also installs Git Bash, a UNIX style CLI. This means we can use Bash commands on Windows!</p><p>The following list offers a concise overview of the essential Bash navigation commands.</p><table><thead><tr><th>Command</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td>pwd</td><td style="text-align:center;">Current directory filepath</td></tr><tr><td>ls</td><td style="text-align:center;">List all files in current directory</td></tr><tr><td>cd</td><td style="text-align:center;">Change directory (ex. <code>cd DirectoryName</code>)</td></tr><tr><td>cd ..</td><td style="text-align:center;">Change to parent directory</td></tr></tbody></table><h2 id="initializing-a-repository" tabindex="-1"><a class="header-anchor" href="#initializing-a-repository" aria-hidden="true">#</a> Initializing a repository</h2><p>When we are ready to start our project, we move to the project folder using the command line. Then type <code>git init</code> to initialize an empty Git repository on your computer.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Move to project folder</span>
<span class="token builtin class-name">cd</span> my_project

<span class="token comment"># Initialize repository</span>
<span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="checking-the-status-of-the-repository" tabindex="-1"><a class="header-anchor" href="#checking-the-status-of-the-repository" aria-hidden="true">#</a> Checking the status of the repository</h2><p>To get a list of the repository&#39;s current status, which will include untracked, modified, and staged files, we would use the <code>git status</code> command from within the project folder.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Check the status of the repository</span>
<span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function l(h,m){return a(),i("div",null,[d,n(` ::: watch
[Watch "Initialize a repository" on LinkedIn Learning](https://www.linkedin.com/learning/git-essential-training-the-basics/initialize-a-repository)
::: `),c])}const u=t(o,[["render",l],["__file","initialize.html.vue"]]);export{u as default};