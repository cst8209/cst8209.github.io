import{_ as n,M as r,p as i,q as l,R as e,t as o,N as a,a1 as t}from"./framework-96b046e1.js";const c={},d=t('<h1 id="javascript-console" tabindex="-1"><a class="header-anchor" href="#javascript-console" aria-hidden="true">#</a> JavaScript Console</h1><p>The JavaScript Console is a powerful and necessary tool for anyone who is working with JavaScript. It is a debugging tool that is built into most modern browsers and has two primary functions:</p><ol><li>Logs information related to the current page including: networking requests, security errors and warnings, and informational messages and errors explicitly logged from the JavaScript code run by the current page.</li><li>Allows for the execution of JavaScript related or unrelated with the current page.</li></ol><h2 id="accessing-the-console" tabindex="-1"><a class="header-anchor" href="#accessing-the-console" aria-hidden="true">#</a> Accessing the Console</h2><p>While most modern browsers have a console, how you access the console is different for each browser and operating system.</p><p>The following is a list of instructions on how to get access the JavaScript Console for the major modern browsers.</p><h3 id="google-chrome" tabindex="-1"><a class="header-anchor" href="#google-chrome" aria-hidden="true">#</a> Google Chrome</h3>',7),p={href:"https://developers.google.com/web/tools/chrome-devtools/",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,[o("To open Chrome DevTools, either right-click on any page element and select "),e("code",null,"Inspect"),o(" or open the Chrome settings menu in the top-right corner of your browser window and select "),e("code",null,"More Tools > Developer Tools"),o(".")],-1),u=e("h3",{id:"mozilla-firefox",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mozilla-firefox","aria-hidden":"true"},"#"),o(" Mozilla Firefox")],-1),m={href:"https://developer.mozilla.org/en-US/docs/Tools",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[o("To open Firefox Developer Tools, either right-click on any page element and select "),e("code",null,"Inspect Element"),o(" or open the Firefox settings menu in the top-right corner of your browser window and select "),e("code",null,"Developer"),o(".")],-1),g=e("h3",{id:"microsoft-edge-chromium",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#microsoft-edge-chromium","aria-hidden":"true"},"#"),o(" Microsoft Edge (Chromium)")],-1),b=e("p",null,"The new Microsoft Edge browser is now adopted the Chromium open source project, which is the same web platform using by other browsers such as Chrome and Opera. It also means that Microsoft Edge is available for other platforms include macOS, iOS, and Android.",-1),v=e("code",null,"F12",-1),k=e("code",null,"Ctrl",-1),w=e("code",null,"Shift",-1),y=e("code",null,"I",-1),_={href:"https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium",target:"_blank",rel:"noopener noreferrer"},T=e("h3",{id:"safari",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#safari","aria-hidden":"true"},"#"),o(" Safari")],-1),x={href:"https://developer.apple.com/safari/tools/",target:"_blank",rel:"noopener noreferrer"},S=t(`<p>To access Safari&#39;s Web Development Tools, the Develop menu must first be enabled. This can be done through Safari&#39;s Advanced preferences. Once enabled, you can right-click on any page element and select <code>Inspect Element</code> to open Web Development Tools.</p><h2 id="the-console-object" tabindex="-1"><a class="header-anchor" href="#the-console-object" aria-hidden="true">#</a> The Console Object</h2><p>The <code>console</code> object allows access to the browser&#39;s console. It can log messages, issue warnings and errors, and output the values of strings, arrays, and objects.</p><h3 id="log-method" tabindex="-1"><a class="header-anchor" href="#log-method" aria-hidden="true">#</a> log() Method</h3><p>The most basic way to log to the console is to use <code>console.log()</code> in the JavaScript code. This will create a basic message in the console.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, Students!&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>console.log()</code> method can be a very simple way to debug your code by checking the value of variables, the results of expressions, or to check if the message appears at all.</p><p>Assume the following variable has been created:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> students <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Ted&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Ed&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Ned&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Red&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">section</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Different messages could be logged using the following methods:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>students<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> students<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="other-methods" tabindex="-1"><a class="header-anchor" href="#other-methods" aria-hidden="true">#</a> Other Methods</h3><p>While the <code>log()</code> method is by far the most common, there are many other methods that can be used to display data in the console in many different ways.</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>warn()</code></td><td>This method will issue a warning, which will be displayed in the console in a different color (usually in a shade of yellow or orange)</td></tr><tr><td><code>error()</code></td><td>This method will issue an error to the console (usually in a shade of red).</td></tr><tr><td><code>assert()</code></td><td>This method takes two arguments, will display the second argument, if the first is false.</td></tr><tr><td><code>table()</code></td><td>This method will display an array or object as a table.</td></tr><tr><td><code>group()</code></td><td>This method is used to start a group of logs, which will be displayed together.</td></tr><tr><td><code>groupEnd()</code></td><td>This method is used to end a group.</td></tr><tr><td><code>time()</code></td><td>This method is used to start a timer.</td></tr><tr><td><code>timeEnd()</code></td><td>This method is used to stop the timer and display the time in milliseconds.</td></tr></tbody></table><h2 id="execute-javascript" tabindex="-1"><a class="header-anchor" href="#execute-javascript" aria-hidden="true">#</a> Execute JavaScript</h2><p>The JavaScript Console also allows for the execution of JavaScript code. This can be very useful for testing the functionality of a page or application. It can also serve as a JavaScript playground as any valid JavaScript will run and execute in the Console including declaring variables, defining functions, and arithmetic expressions.</p><p>To execute these commands, just type or paste the code into the console followed by the &quot;Enter&quot; key.</p><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See Also</h2>`,18),j={href:"https://www.youtube.com/watch?v=-rxYde_ESxA",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.freecodecamp.org/news/how-to-use-the-javascript-console-going-beyond-console-log-5128af9d573b/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://www.freecodecamp.org/news/how-to-get-the-most-out-of-the-javascript-console-b57ca9db3e6d/",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"references",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#references","aria-hidden":"true"},"#"),o(" References")],-1),J={href:"https://classroom.udacity.com/courses/ud803",target:"_blank",rel:"noopener noreferrer"};function I(M,F){const s=r("ExternalLinkIcon");return i(),l("div",null,[d,e("p",null,[o("The Chrome DevTools are a set of web authoring and debugging tools built into Google Chrome. Use the DevTools to iterate, debug and profile your site. "),e("a",p,[o("Learn more about Chrome DevTools"),a(s)]),o(".")]),h,u,e("p",null,[o("Firefox Developer Tools allow you to examine, edit, and debug HTML, CSS, and JavaScript on the desktop and on mobile. Also, you can download a version of Firefox called Firefox Developer Edition that is tailored for developers, featuring the latest Firefox features and experimental developer tools. "),e("a",m,[o("Learn more about Firefox Developer Tools"),a(s)]),o(".")]),f,g,b,e("p",null,[o("The Microsoft Edge DevTools will look and feel very much like the Chrome DevTools. To open developer tools in Microsoft Edge simply press "),v,o(" or "),k,o("+"),w,o("+"),y,o(". "),e("a",_,[o("Learn more about Microsoft Edge DevTools"),a(s)])]),T,e("p",null,[o("Safari includes Web Inspector, a powerful tool that makes it easy to modify, debug, and optimize a website for peak performance and compatibility on both platforms. "),e("a",x,[o("Learn more about Safari Web Inspector"),a(s)]),o(".")]),S,e("ul",null,[e("li",null,[e("a",j,[o("Debugging JavaScript Tips, Tricks, and Best Practices"),a(s)])]),e("li",null,[e("a",C,[o("How to use the JavaScript Console"),a(s)])]),e("li",null,[e("a",D,[o("How to get the most out of the JavaScript console"),a(s)])])]),E,e("ul",null,[e("li",null,[e("a",J,[o("Intro to JavaScript"),a(s)])])])])}const L=n(c,[["render",I],["__file","console.html.vue"]]);export{L as default};
