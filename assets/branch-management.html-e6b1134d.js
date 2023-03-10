import{_ as c,M as l,p as d,q as h,R as e,t as n,N as a,V as t,a1 as o}from"./framework-96b046e1.js";const u={},m=e("h1",{id:"branch-management",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#branch-management","aria-hidden":"true"},"#"),n(" Branch Management")],-1),b=e("code",null,"git branch",-1),g={href:"https://git-scm.com/book/en/v2/Git-Branching-Branch-Management",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"listing-branches",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#listing-branches","aria-hidden":"true"},"#"),n(" Listing Branches")],-1),_={href:"https://git-scm.com/docs/git-branch",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"git branch",-1),f=e("code",null,"*",-1),x=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),n(` branch
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),k=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`  dev
  hot-fix
* main
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w={href:"https://git-scm.com/docs/git-branch#Documentation/git-branch.txt--v",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"-v",-1),B=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),n(" branch "),e("span",{class:"token parameter variable"},"-v"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),C=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[n(`  dev       782fd34 Adds a new feature
  hot-fix   93b412c Fixes javascript issue
* main      7a98805 Merge branch `),e("span",{class:"token string"},"'hot-fix'"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),T={href:"https://git-scm.com/docs/git-branch#Documentation/git-branch.txt---mergedltcommitgt",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"--merged",-1),M={href:"https://git-scm.com/docs/git-branch#Documentation/git-branch.txt---no-mergedltcommitgt",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"--no-merged",-1),I=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),n(" branch "),e("span",{class:"token parameter variable"},"--merged"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),N=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`  hot-fix
* main
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),R=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),n(` branch --no-merged
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),V=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`  dev
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),E=e("h2",{id:"deleting-branches",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deleting-branches","aria-hidden":"true"},"#"),n(" Deleting Branches")],-1),L={href:"https://git-scm.com/docs/git-branch#Documentation/git-branch.txt---delete",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"-d",-1),A=e("code",null,"git branch",-1),O=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> new-branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>The command above will fail when deleting the currently checked out branch. If the branch has not been fully merged, Git will require the force delete option (<code>-D</code>) to delete the branch.</p></div><h2 id="renaming-branches" tabindex="-1"><a class="header-anchor" href="#renaming-branches" aria-hidden="true">#</a> Renaming Branches</h2>`,3),W={href:"https://git-scm.com/docs/git-branch#Documentation/git-branch.txt---move",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"--move",-1),F=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># renames master branch to main locally</span>
<span class="token function">git</span> branch <span class="token parameter variable">--move</span> master main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The renamed branch must be pushed to the remote repository to change the branch name remotely.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push --set-upstream origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>However, this will cause both the <code>master</code> and the <code>main</code> branches to appear on the remote repository. To entirely remove the <code>master</code> branch from the remote repository, the following command should be used.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function H(S,z){const r=l("ExternalLinkIcon"),s=l("CodeGroupItem"),i=l("CodeGroup");return d(),h("div",null,[m,e("p",null,[n("The "),b,n(" command has other functions beyond creating and deleting branches. It can also be used for "),e("a",g,[n("Branch Management"),a(r)]),n(".")]),p,e("p",null,[n("When the "),e("a",_,[v,a(r)]),n(" command is run without any arguments, it will list all branches of the current repository. The "),f,n(" character indicates the branch that is currently checked out.")]),a(i,null,{default:t(()=>[a(s,{title:"Command"},{default:t(()=>[x]),_:1}),a(s,{title:"Result"},{default:t(()=>[k]),_:1})]),_:1}),e("p",null,[n("Adding the "),e("a",w,[y,a(r)]),n(" option will include the last commit on each branch.")]),a(i,null,{default:t(()=>[a(s,{title:"Command"},{default:t(()=>[B]),_:1}),a(s,{title:"Result"},{default:t(()=>[C]),_:1})]),_:1}),e("p",null,[n("Merging is a vital part of working with branches, and therefore it is helpful to know which branches have been merged. The "),e("a",T,[D,a(r)]),n(" option will list branches that have already been merged. While the "),e("a",M,[G,a(r)]),n(" option lists those branches that have yet to be merged.")]),a(i,null,{default:t(()=>[a(s,{title:"Command"},{default:t(()=>[I]),_:1}),a(s,{title:"Result"},{default:t(()=>[N]),_:1})]),_:1}),a(i,null,{default:t(()=>[a(s,{title:"Command"},{default:t(()=>[R]),_:1}),a(s,{title:"Result"},{default:t(()=>[V]),_:1})]),_:1}),E,e("p",null,[n("Once a branch has been merged and is no longer needed, the branch can be deleted. To delete a branch, the "),e("a",L,[q,a(r)]),n(" option is applied to the "),A,n(" command followed by the name of the branch to be deleted.")]),O,e("p",null,[n("The "),e("a",W,[j,a(r)]),n(" option can be used to rename an existing branch.")]),F])}const K=c(u,[["render",H],["__file","branch-management.html.vue"]]);export{K as default};