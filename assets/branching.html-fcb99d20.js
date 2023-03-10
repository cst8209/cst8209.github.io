import{_ as c,M as r,p as o,q as h,N as a,R as e,t as n,Q as d,a1 as s}from"./framework-96b046e1.js";const l={},b=e("h1",{id:"git-branching",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-branching","aria-hidden":"true"},"#"),n(" Git Branching")],-1),m={href:"https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"creating-a-branch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#creating-a-branch","aria-hidden":"true"},"#"),n(" Creating a Branch")],-1),u={href:"https://git-scm.com/docs/git-branch",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"git branch",-1),_=e("code",null,"git branch",-1),v={href:"https://git-scm.com/docs/git-branch#_options",target:"_blank",rel:"noopener noreferrer"},f=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch new-branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="switching-branches" tabindex="-1"><a class="header-anchor" href="#switching-branches" aria-hidden="true">#</a> Switching Branches</h2>`,2),k=e("code",null,"main",-1),w=e("code",null,"master",-1),x=e("a",{href:""},"How to set the name of the default branch",-1),y={href:"https://git-scm.com/docs/git-checkout",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"git checkout",-1),T=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout new-branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="listing-branches" tabindex="-1"><a class="header-anchor" href="#listing-branches" aria-hidden="true">#</a> Listing Branches</h2>`,2),N={href:"https://git-scm.com/docs/git-branch",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"git branch",-1),G=e("code",null,"*",-1),I=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),V={href:"https://git-scm.com/docs/git-branch#Documentation/git-branch.txt--v",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"-v",-1),L=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="merging-branches" tabindex="-1"><a class="header-anchor" href="#merging-branches" aria-hidden="true">#</a> Merging Branches</h2>`,2),W={href:"https://git-scm.com/docs/git-branch#Documentation/git-branch.txt---mergedltcommitgt",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"--merged",-1),H={href:"https://git-scm.com/docs/git-branch#Documentation/git-branch.txt---no-mergedltcommitgt",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"--no-merged",-1),S=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">--merged</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="deleting-branches" tabindex="-1"><a class="header-anchor" href="#deleting-branches" aria-hidden="true">#</a> Deleting Branches</h2>`,2),q={href:"https://git-scm.com/docs/git-branch#Documentation/git-branch.txt---delete",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"-d",-1),O=e("code",null,"git branch",-1),Q=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> new-branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>The command above will fail when deleting the currently checked out branch. If the branch has not been fully merged, Git will require the force delete option (<code>-D</code>) to delete the branch.</p></div><h2 id="renaming-branches" tabindex="-1"><a class="header-anchor" href="#renaming-branches" aria-hidden="true">#</a> Renaming Branches</h2>`,3),R={href:"https://git-scm.com/docs/git-branch#Documentation/git-branch.txt---move",target:"_blank",rel:"noopener noreferrer"},Y=e("code",null,"--move",-1),z=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># renames master branch to main locally</span>
<span class="token function">git</span> branch <span class="token parameter variable">--move</span> master main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The renamed branch must be pushed to the remote repository to change the branch name remotely.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push --set-upstream origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>However, this will cause both the <code>master</code> and the <code>main</code> branches to appear on the remote repository. To entirely remove the <code>master</code> branch from the remote repository, the following command should be used.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function J(j,F){const i=r("Youtube"),t=r("ExternalLinkIcon");return o(),h("div",null,[b,a(i,{id:"H5GJfcp3p4Q",citation:"github"}),e("p",null,[n("A "),e("a",m,[n("branch"),a(t)]),n(" is a divergence from the main line of development. In other words, if a Git repository is a straight line, a branch is a second line that splits and runs parallel from the first.")]),d(" image of a branch diagram here "),g,e("p",null,[n("In Git, a branch can be created using the "),e("a",u,[p,a(t)]),n(" command. While the "),_,n(" command accepts many "),e("a",v,[n("options"),a(t)]),n(", to create a new branch, follow the command with the desired name of the new branch.")]),f,e("p",null,[n("When the Git repository is first initialized, a default branch is created. This branch is usually called "),k,n(" or "),w,n(" (Learn "),x,n("). But once a second or multiple branches are created, it may become necessary to switch to an alternate branch. Switching can be accomplished by using the "),e("a",y,[B,a(t)]),n(" command.")]),T,e("p",null,[n("When the "),e("a",N,[D,a(t)]),n(" command is run without any arguments, it will list all branches of the current repository. The "),G,n(" character indicates the branch that is currently checked out.")]),I,e("p",null,[n("Adding the "),e("a",V,[E,a(t)]),n(" option will include the last commit on each branch.")]),L,e("p",null,[n("Merging is a vital part of working with branches, and therefore it is helpful to know which branches have been merged. The "),e("a",W,[C,a(t)]),n(" option will list branches that have already been merged. While the "),e("a",H,[M,a(t)]),n(" option lists those branches that have yet to be merged.")]),S,e("p",null,[n("Once a branch has been merged and is no longer needed, the branch can be deleted. To delete a branch, the "),e("a",q,[A,a(t)]),n(" option is applied to the "),O,n(" command followed by the name of the branch to be deleted.")]),Q,e("p",null,[n("The "),e("a",R,[Y,a(t)]),n(" option can be used to rename an existing branch.")]),z])}const P=c(l,[["render",J],["__file","branching.html.vue"]]);export{P as default};
