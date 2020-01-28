(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{30:function(e,t,a){e.exports=a(44)},35:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},37:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(23),c=a.n(o),l=(a(35),a(36),a(37),a(38),a(14)),i=a(12),s=a(7),m=a(8),u=a(10),p=a(9),d=a(11),h=a(46),E=a(16),f=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handlePortfolioClick",value:function(){this.props.history.push("/portfolio")}},{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home-intro"},r.a.createElement("h2",null,"Junior Webdeveloper based in Oslo, Norway. Educated and hired by Academic Work, Norway.")),r.a.createElement("div",{className:"home-portfolio"},r.a.createElement("img",{className:"profilePic",src:"./media/aske.jpg"}),r.a.createElement("p",{className:"summary"},"JavaScript specialised junior developer, with skills in ReactJS, Node.js and PostgreSQL."),r.a.createElement("div",null,r.a.createElement("h4",null,"See what i have done so far"),r.a.createElement("p",{className:"shortProject"},"Mostpart of my projects are programmed in ReactJS, but involves different kind of techniques.")),r.a.createElement(h.a,{onClick:this.handlePortfolioClick.bind(this),className:"btn-flat",variant:"flat"},"Portfolio ",r.a.createElement(E.b,null))))}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).componentDidMount=function(){fetch("./projects.json").then((function(e){return e.json()})).then((function(e){a.setState({projects:e.projects})}))},a.handleClick=function(e){a.props.history.push("details/".concat(e))},a.state={projects:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.projects.map((function(t){return r.a.createElement("li",{key:t.id,onClick:e.handleClick.bind(e,t.id)},r.a.createElement("img",{src:t.image,alt:t.id}))}));return r.a.createElement("div",{className:"portfolio"},r.a.createElement("h1",null,"Portfolio"),r.a.createElement("p",null,"Here is some of my projects I've done in my time as a developer."),r.a.createElement("ul",null,t))}}]),t}(r.a.Component),g=a(13),j=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,{className:"test"},r.a.createElement("div",{className:"about"},r.a.createElement("h2",null,"About me"),r.a.createElement("div",null,r.a.createElement("img",{src:"./media/aske-banner.jpg"}),r.a.createElement("h3",null,"Aske Djupnes Ammentorp"),r.a.createElement("p",null,"I'm a JavaScript junior developer, educated at ",r.a.createElement("a",{href:"http://www.academy.no",target:"blank"},"Academy Norway"),". I went through 12 weeks of JavaScript bootcamp, which ended up in a graduation project. During the education I learned skills based on JavaScript; ex. NodeJS, ReactJS, PostgreSQL Database and more. I chose the JavaScript course, because I wanted to develop my skills in programming, and Academy helped to kickstart my career in programming. Before i began my journey into the IT-world, I was a gymnastics coach at Oslo turnforening. With a bachelor degree in Sport and Health, I have a big insight in the world of sports. "),r.a.createElement("div",{classname:"skills"},r.a.createElement("i",{class:"devicon-javascript-plain"}),r.a.createElement("i",{class:"devicon-css3-plain-wordmark"}),r.a.createElement("i",{class:"devicon-html5-plain-wordmark"}),r.a.createElement("i",{class:"devicon-sass-original"}),r.a.createElement(g.c,null),r.a.createElement("i",{class:"devicon-heroku-original-wordmark"}),r.a.createElement(g.d,null),r.a.createElement(g.e,null),r.a.createElement(g.f,null),r.a.createElement(g.b,null),r.a.createElement("i",{class:"devicon-github-plain"})))))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).componentDidMount=function(){var e=a.props.match.params.id;fetch("./projects.json").then((function(e){return e.json()})).then((function(t){var n=t.projects.find((function(t){return t.id===parseInt(e)}));a.setState({project:n})}))},a.handleGoBackClick=function(){a.props.history.go(-1)},a.state={project:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){this.props.history;var e=this.state.project,t=(e.id,e.name),a=(e.projectForm,e.year),n=e.description,o=e.techniques,c=void 0===o?[]:o,l=e.image,i=e.fullProject,s=c.join(", ");return console.log(s),r.a.createElement("div",{className:"details"},r.a.createElement(E.a,{className:"back",onClick:this.handleGoBackClick.bind(this)}),r.a.createElement("img",{src:l,alt:t}),r.a.createElement("h1",{className:"detailsName"},t),r.a.createElement("p",{className:"detailsDescription"},n),r.a.createElement("p",{className:"detailsYear"},"Produced: ",a),r.a.createElement("p",{className:"detailsTechniques"},r.a.createElement("strong",null,"Techniques used:")," ",s),r.a.createElement("a",{href:i,target:"blank"},r.a.createElement("button",{className:"btn-flat"},"See full project")))}}]),t}(r.a.Component),k=a(28);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{id:"logo",src:"./media/Logo.png",alt:"Logo"})),r.a.createElement("ul",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("li",null,"Home")),r.a.createElement(l.b,{to:"/portfolio"},r.a.createElement("li",null,"Portfolio")),r.a.createElement(l.b,{to:"/about"},r.a.createElement("li",null,"About")))),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:f}),r.a.createElement(i.a,{path:"/portfolio",component:b}),r.a.createElement(i.a,{path:"/about",component:j}),r.a.createElement(i.a,{path:"/details/:id",component:v})),r.a.createElement("footer",null,r.a.createElement("p",null,"Find me at: "),r.a.createElement("a",{href:"https://github.com/djuppi",target:"blank"},r.a.createElement("img",{className:"logo",src:"./media/github.png"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/aske-djupnes-ammentorp-03434984/",target:"blank"},r.a.createElement("img",{className:"logo",src:"./media/LinkedIn.png"})),r.a.createElement("p",{className:"copyright"},"Copyright\xa9 ",Object(k.a)(new Date(Date.now()),"yyyy")," Aske Djupnes Ammentorp ",r.a.createElement(g.a,null)," IT Consultant at Academic Work, Norway."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.7014f372.chunk.js.map