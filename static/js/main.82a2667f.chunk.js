(this["webpackJsonpcolour-picker"]=this["webpackJsonpcolour-picker"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(5),a=n.n(c),s=(n(10),n(2)),l=(n(11),n(3));function i(){var e,t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:String;return e=t=n="00",4===r.length&&(e="0x"+r[1]+r[1],t="0x"+r[2]+r[2],n="0x"+r[3]+r[3]),7===r.length&&(e="0x"+r[1]+r[2],t="0x"+r[3]+r[4],n="0x"+r[5]+r[6]),"".concat(parseInt(e,16)," ").concat(parseInt(t,16)," ").concat(parseInt(n,16))}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:String,t=e.split(" "),n=parseInt(t[0],10),r=parseInt(t[1],10),o=parseInt(t[2],10);return n=n.toString(16),r=r.toString(16),o=o.toString(16),1===n.length&&(n="0"+n),1===r.length&&(r="0"+r),1===o.length&&(o="0"+o),"#".concat(n).concat(r).concat(o)}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:String,t=e.split(" "),n=t[0],r=t[1],o=t[2];n/=255,r/=255,o/=255;var c=Math.min(n,r,o),a=Math.max(n,r,o),s=a-c,l=0,i=0,u=0;return l=0===s?0:a===n?(r-o)/s%6:a===r?(o-n)/s+2:(n-r)/s+4,(l=Math.round(60*l))<0&&(l+=360),u=(a+c)/2,i=+(100*(i=0===s?0:s/(1-Math.abs(2*u-1)))).toFixed(1),u=+(100*u).toFixed(1),"".concat(l," ").concat(i," ").concat(u)}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:String,t=e.split(" "),n=parseInt(t[0],10),r=parseInt(t[1],10),o=parseInt(t[2],10);r/=100,o/=100;var c=(1-Math.abs(2*o-1))*r,a=c*(1-Math.abs(n/60%2-1)),s=o-c/2,l=0,i=0,u=0;return 0<=n&&n<60?(l=c,i=a,u=0):60<=n&&n<120?(l=a,i=c,u=0):120<=n&&n<180?(l=0,i=c,u=a):180<=n&&n<240?(l=0,i=a,u=c):240<=n&&n<300?(l=a,i=0,u=c):300<=n&&n<360&&(l=c,i=0,u=a),l=Math.round(255*(l+s)),i=Math.round(255*(i+s)),u=Math.round(255*(u+s)),"".concat(l," ").concat(i," ").concat(u)}function h(e){var t=d(i(e)).split(" "),n=parseInt(t[0],10),r=parseInt(t[1],10),o=parseInt(t[2],10);return o>=95?o=100:o+=5,u(j("".concat(n," ").concat(r," ").concat(o)))}function f(e){var t=d(i(e)).split(" "),n=parseInt(t[0],10),r=parseInt(t[1],10),o=parseInt(t[2],10);return o<=5?o=0:o-=5,u(j("".concat(n," ").concat(r," ").concat(o)))}function p(e,t,n,r){var o=n.slice();if(!(o.length>=7)){var c;t<0||t>o.length-1?1===o.length?t<0?c=f(o[e].colour):t>0&&(c=h(o[e].colour)):0===e?c=f(o[e].colour):e===o.length-1&&(c=h(o[e].colour)):c=u(function(e,t){var n=i(e).split(" "),r=i(t).split(" "),o=Math.round((parseInt(n[0],10)+parseInt(r[0],10))/2),c=Math.round((parseInt(n[1],10)+parseInt(r[1],10))/2),a=Math.round((parseInt(n[2],10)+parseInt(r[2],10))/2);return"".concat(o," ").concat(c," ").concat(a)}(o[e].colour,o[t].colour));var a={colour:c,pos:0,showShades:!1};e>t?o.splice(e,0,a):o.splice(t,0,a);for(var s=0;s<o.length;s++)o[s].pos=s;r(o)}}function b(e,t){if("#ffffff"!==e.toLowerCase()){var n=h(e);t.unshift(n),b(n,t)}}function v(e,t){if("#000000"!==e.toLowerCase()){var n=f(e);t.push(n),v(n,t)}}function O(e){return function(e){return d(i(e)).split(" ")[2]}(e)>40?"black":"white"}var x=n(0),m=function(e){var t=e.colours,n=e.setColourArray,r=e.colourObj;return Object(x.jsx)("div",{className:"colour-column-inner",children:Object(x.jsxs)("div",{className:"colour-column-inner-btns",children:[Object(x.jsxs)("button",{className:"\r colour-column-item\r clickable\r tooltip\r btn-delete\r ",onClick:function(){return function(e,t,n){for(var r=t.slice(),o=[],c=0;c<r.length;c++){var a=Object(l.a)({},r[c]);o.push(a)}if(1!==o.length){o.splice(e,1);for(var s=0;s<o.length;s++)o[s].pos=s;n(o)}}(r.pos,t,n)},style:{color:O(r.colour)},children:["X",Object(x.jsx)("span",{className:"tooltiptext",children:"Remove Colour"})]}),Object(x.jsxs)("button",{className:"\r colour-column-item\r clickable\r tooltip\r btn-shades\r ",onClick:function(){return function(e,t,n){for(var r=e.slice(),o=[],c=0;c<r.length;c++){var a=Object(l.a)({},r[c]);o.push(a)}o[t.pos].showShades=!0,n(o)}(t,r,n)},style:{color:O(r.colour)},children:[Object(x.jsx)("p",{className:"iconify","data-icon":"heroicons-outline:view-list","data-inline":"false"}),Object(x.jsx)("span",{className:"tooltiptext",children:"Colour Shades"})]}),Object(x.jsxs)("div",{className:"\r colour-column-item\r clickable\r tooltip\r colour-column-item-input\r ",children:[Object(x.jsx)("input",{type:"color",value:r.colour,onInput:function(e){return function(e,t,n,r){for(var o=n.slice(),c=[],a=0;a<o.length;a++){var s=Object(l.a)({},o[a]);c.push(s)}c[t].colour=e.target.value,r(c)}(e,r.pos,t,n)}}),Object(x.jsx)("span",{className:"tooltiptext",children:"Change Colour"})]})]})})},g=function(e){var t=e.colours,n=e.colourObj,r=e.setColourArray,o=[n.colour];b(n.colour,o),v(n.colour,o);var c=o.map((function(e){return Object(x.jsx)("div",{className:"shade",onClick:function(){return function(e,t,n,r){for(var o=e.slice(),c=[],a=0;a<o.length;a++){var s=Object(l.a)({},o[a]);c.push(s)}c[t.pos].showShades=!1,c[t.pos].colour=r,n(c)}(t,n,r,e)},style:{backgroundColor:e,color:O(e)},children:Object(x.jsx)("p",{className:e===n.colour?"main-shade-text":"shade-text",children:e.toUpperCase()})},e)}));return Object(x.jsx)("div",{className:"shades",children:c})},w=function(e){var t=e.className,n=e.colour,o=e.defaultText,c=Object(r.useRef)(null);function a(e,t){e.current.textContent=t}return Object(x.jsxs)("p",{className:t,onMouseOut:function(){a(c,o)},onClick:function(){!function(e){navigator.clipboard.writeText(e)}(n),a(c,"COPIED: ".concat(n))},children:[Object(x.jsx)("span",{className:"tooltiptext",ref:c,children:o}),n.toUpperCase()]})},N=function(e){var t=e.colour,n=e.setColour,o=Object(r.useState)((function(){return function(){for(var e=[],t=0;t<7;t++)"Firefox"===j()?e.push(!0):e.push(!1);return e}()})),c=Object(s.a)(o,2),a=c[0],l=c[1],u=t.map((function(e,r){return Object(x.jsxs)("div",{className:"colour-column",style:{backgroundColor:"".concat(e.colour),color:O(e.colour)},onMouseOver:function(){return d(e.pos,!0)},onMouseLeave:function(){return d(e.pos,!1)},children:[a[e.pos]&&Object(x.jsxs)(x.Fragment,{children:[!e.showShades&&Object(x.jsx)("div",{className:"btn-new-colour",onClick:function(){return p(e.pos,e.pos-1,t,n)},children:"+"}),e.showShades?Object(x.jsx)(g,{colours:t,colourObj:e,setColourArray:n}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(m,{colours:t,colourObj:e,setColourArray:n})}),!e.showShades&&Object(x.jsx)("div",{className:"btn-new-colour",onClick:function(){return p(e.pos,e.pos+1,t,n)},children:"+"})]}),!e.showShades&&Object(x.jsxs)("div",{className:"colour-column-text",children:[Object(x.jsx)(w,{className:"\r colour-column-item\r clickable\r tooltip\r hex-text\r ",colour:e.colour,defaultText:"COPY HEX"}),Object(x.jsx)(w,{className:"\r colour-column-item\r clickable\r tooltip\r rgb-text\r ",colour:i(e.colour),defaultText:"COPY RGB"})]})]},e.pos)}));function d(e,t){if("Firefox"!==j()){var n=a.slice();n[e]=t,l(n)}}function j(){return-1!==navigator.userAgent.indexOf("Chrome")?"Chrome":-1!==navigator.userAgent.indexOf("Opera")?"Opera":-1!==navigator.userAgent.indexOf("MSIE")?"IE":-1!==navigator.userAgent.indexOf("Firefox")?"Firefox":"unknown"}return Object(x.jsx)("div",{className:"colours",children:u})},C=function(e){var t=e.colours,n=void 0===t?Array:t,o=e.palettes,c=void 0===o?Array:o,a=e.setPaletteArray,i=Object(r.useState)(!1),u=Object(s.a)(i,2),d=u[0],j=u[1],h=Object(r.useState)(""),f=Object(s.a)(h,2),p=f[0],b=f[1],v=Object(r.useRef)(null);function O(e){v.current&&!v.current.contains(e.target)?j(!0):j(!1)}return Object(r.useEffect)((function(){return document.addEventListener("click",O),function(){document.removeEventListener("click",O)}}),[]),Object(x.jsxs)("div",{className:"new-palette",children:[Object(x.jsx)("button",{onClick:function(){j(!0)},children:"Save"}),d&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"overlay",ref:v}),Object(x.jsxs)("div",{className:"new-palette-inputs",children:[Object(x.jsx)("h2",{className:"new-palette-title",children:"Save Palette"}),Object(x.jsx)("input",{autoFocus:!0,onChange:function(e){b(e.target.value)},placeholder:"Palette Name",type:"text",value:p}),Object(x.jsxs)("div",{className:"new-palette-input-btn",children:[Object(x.jsx)("button",{onClick:function(){!function(){if(""!==p){for(var e=c.slice(),t=n.slice(),r=[],o=0;o<t.length;o++){var s=Object(l.a)({},t[o]);r.push(s)}var i={name:p,colour:r};e.push(i),j(!1),b(""),a(e)}}()},children:"Save"}),Object(x.jsx)("button",{onClick:function(){j(!1)},children:"Cancel"})]})]})]})]})},S=function(e){var t=e.dropDownMenuArray,n=void 0===t?Array:t,o=e.title,c=void 0===o?String:o,a=e.setDropdownArray,l=e.setColourArray,i=e.setPaletteArray,u=Object(r.useState)(!1),d=Object(s.a)(u,2),j=d[0],h=d[1],f=Object(r.useState)(c),p=Object(s.a)(f,2),b=p[0],v=p[1],O=Object(r.useRef)(null);Object(r.useEffect)((function(){return document.addEventListener("click",g),function(){document.removeEventListener("click",g)}}),[]);var m=n.map((function(e,t,n){return Object(x.jsxs)("div",{className:"dropdown-item-container",children:[Object(x.jsx)("div",{className:e.selected?"dropdown-item selected":"dropdown-item",onClick:function(t){!function(e,t){for(var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:Array).slice(),r=0;r<n.length;r++)!0===n[r].selected&&(n[r].selected=!1);n[t].selected=!0;var o=n[t].originalObj.colour;l(o),a(n),h(!1),v(e.target.textContent)}(t,e.index,n)},children:e.title}),Object(x.jsx)("button",{className:"dropdown-item-delete-btn",onClick:function(){!function(e,t){var n=t.slice(),r=[];n.splice(e,1);for(var o=0;o<n.length;o++)r.push(n[o].originalObj);i(r)}(e.index,n)},children:"X"})]},e.index)}));function g(e){O.current&&!O.current.contains(e.target)&&h(!1)}return Object(x.jsxs)("div",{className:"dropdown",ref:O,children:[Object(x.jsx)("div",{className:"dropdown-header",onClick:function(){h(!j)},children:b}),j&&Object(x.jsx)("div",{className:"dropdown-list",children:m})]})};var k=function(){var e=Object(r.useState)((function(){return[f(0)]})),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(function(){if(null!==window.localStorage.getItem("user-colour-palettes"))return JSON.parse(window.localStorage.getItem("user-colour-palettes"));window.localStorage.setItem("user-colour-palettes",function(){var e=[];return JSON.stringify(e)}());return JSON.parse(window.localStorage.getItem("user-colour-palettes"))}()),a=Object(s.a)(c,2),l=a[0],i=a[1],u=Object(r.useState)(b(l)),d=Object(s.a)(u,2),j=d[0],h=d[1];function f(e){return{colour:p(),pos:e,showShades:!1}}function p(){for(var e="#",t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],n=0;n<6;n++)e+=t[Math.floor(Math.random()*t.length)];return e}function b(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Array,t=e.slice(),n=[],r=0;r<t.length;r++){var o={title:t[r].name,index:r,selected:!1,originalObj:t[r]};n.push(o)}return n}return Object(r.useEffect)((function(){return function(){var e=l.slice();window.localStorage.setItem("user-colour-palettes",JSON.stringify(e))}(),h(b(l)),function(){}}),[l]),Object(x.jsxs)("div",{className:"app",children:[Object(x.jsxs)("header",{children:[Object(x.jsx)("h1",{children:"Colour Palette Picker"}),Object(x.jsxs)("div",{className:"header-rows",children:[Object(x.jsx)("div",{className:"header-top-row",children:Object(x.jsxs)("div",{className:"creds-div",children:[Object(x.jsx)("p",{className:"cred",children:"Made by Derek Price"}),Object(x.jsx)("a",{className:"cred github-link",href:"https://github.com/DerekPixel/colour-palette-picker",children:"GitHub"})]})}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"header-bottom-row",children:[Object(x.jsx)("div",{className:"header-bottom-row-item",children:Object(x.jsx)(C,{colours:n,palettes:l,setPaletteArray:function(e){i(e)}})}),Object(x.jsx)("div",{className:"header-bottom-row-item",children:Object(x.jsx)(S,{dropDownMenuArray:j,title:"Saved Palettes",setDropdownArray:function(e){h(e)},setColourArray:function(e){o(e)},setPaletteArray:function(e){i(e)}})})]})]})]}),Object(x.jsx)(N,{colour:n,setColour:function(e){o(e)}})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),c(e),a(e)}))};a.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root")),I()}},[[13,1,2]]]);
//# sourceMappingURL=main.82a2667f.chunk.js.map