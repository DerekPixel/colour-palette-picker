(this["webpackJsonpcolour-picker"]=this["webpackJsonpcolour-picker"]||[]).push([[0],{10:function(t,o,e){},12:function(t,o,e){"use strict";e.r(o);var c=e(1),r=e.n(c),n=e(3),l=e.n(n),a=(e(9),e(4)),s=(e(10),e(0)),i=function(t){var o=t.className,e=t.colour,r=t.defaultText,n=Object(c.useRef)(null);function l(t,o){t.current.textContent=o}return Object(s.jsxs)("p",{className:o,onMouseOut:function(){l(n,r)},onClick:function(){!function(t){navigator.clipboard.writeText(t)}(e),l(n,"COPIED: ".concat(e))},children:[Object(s.jsx)("span",{className:"tooltiptext",ref:n,children:r}),e.toUpperCase()]})};function u(){var t,o,e,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:String;return t=o=e="00",4===c.length&&(t="0x"+c[1]+c[1],o="0x"+c[2]+c[2],e="0x"+c[3]+c[3]),7===c.length&&(t="0x"+c[1]+c[2],o="0x"+c[3]+c[4],e="0x"+c[5]+c[6]),"".concat(parseInt(t,16)," ").concat(parseInt(o,16)," ").concat(parseInt(e,16))}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:String,o=t.split(" "),e=parseInt(o[0],10),c=parseInt(o[1],10),r=parseInt(o[2],10);return e=e.toString(16),c=c.toString(16),r=r.toString(16),1===e.length&&(e="0"+e),1===c.length&&(c="0"+c),1===r.length&&(r="0"+r),"#".concat(e).concat(c).concat(r)}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:String,o=t.split(" "),e=o[0],c=o[1],r=o[2];e/=255,c/=255,r/=255;var n=Math.min(e,c,r),l=Math.max(e,c,r),a=l-n,s=0,i=0,u=0;return s=0===a?0:l===e?(c-r)/a%6:l===c?(r-e)/a+2:(e-c)/a+4,(s=Math.round(60*s))<0&&(s+=360),u=(l+n)/2,i=+(100*(i=0===a?0:a/(1-Math.abs(2*u-1)))).toFixed(1),u=+(100*u).toFixed(1),"".concat(s," ").concat(i," ").concat(u)}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:String,o=t.split(" "),e=parseInt(o[0],10),c=parseInt(o[1],10),r=parseInt(o[2],10);c/=100,r/=100;var n=(1-Math.abs(2*r-1))*c,l=n*(1-Math.abs(e/60%2-1)),a=r-n/2,s=0,i=0,u=0;return 0<=e&&e<60?(s=n,i=l,u=0):60<=e&&e<120?(s=l,i=n,u=0):120<=e&&e<180?(s=0,i=n,u=l):180<=e&&e<240?(s=0,i=l,u=n):240<=e&&e<300?(s=l,i=0,u=n):300<=e&&e<360&&(s=n,i=0,u=l),s=Math.round(255*(s+a)),i=Math.round(255*(i+a)),u=Math.round(255*(u+a)),"".concat(s," ").concat(i," ").concat(u)}function j(t){return p(u(t)).split(" ")[2]}function b(t){var o=p(u(t)).split(" "),e=parseInt(o[0],10),c=parseInt(o[1],10),r=parseInt(o[2],10);return r>=95?r=100:r+=5,h(d("".concat(e," ").concat(c," ").concat(r)))}function f(t){var o=p(u(t)).split(" "),e=parseInt(o[0],10),c=parseInt(o[1],10),r=parseInt(o[2],10);return r<=5?r=0:r-=5,h(d("".concat(e," ").concat(c," ").concat(r)))}function x(t,o,e,c){var r=e.slice();if(!(r.length>=7)){var n;o<0||o>r.length-1?1===r.length?o<0?n=f(r[t].colour):o>0&&(n=b(r[t].colour)):0===t?n=f(r[t].colour):t===r.length-1&&(n=b(r[t].colour)):n=h(function(t,o){var e=u(t).split(" "),c=u(o).split(" "),r=Math.round((parseInt(e[0],10)+parseInt(c[0],10))/2),n=Math.round((parseInt(e[1],10)+parseInt(c[1],10))/2),l=Math.round((parseInt(e[2],10)+parseInt(c[2],10))/2);return"".concat(r," ").concat(n," ").concat(l)}(r[t].colour,r[o].colour));var l={colour:n,pos:0,showShades:!1};t>o?r.splice(t,0,l):r.splice(o,0,l);for(var a=0;a<r.length;a++)r[a].pos=a;c(r)}}function v(t,o){if("#ffffff"!==t.toLowerCase()){var e=b(t);o.unshift(e),v(e,o)}}function m(t,o){if("#000000"!==t.toLowerCase()){var e=f(t);o.push(e),m(e,o)}}var O=function(t){var o=t.colours,e=t.setColourArray,c=t.colourObj;return Object(s.jsxs)("div",{className:"colour-column-inner",children:[Object(s.jsxs)("div",{className:"colour-column-inner-btns",children:[Object(s.jsxs)("button",{className:"\r colour-column-item\r clickable\r tooltip\r btn-delete\r ",onClick:function(){return function(t,o,e){var c=o.slice();if(1!==c.length){c.splice(t,1);for(var r=0;r<c.length;r++)c[r].pos=r;e(c)}}(c.pos,o,e)},style:{color:j(c.colour)>50?"black":"white"},children:["X",Object(s.jsx)("span",{className:"tooltiptext",children:"Remove Colour"})]}),Object(s.jsxs)("button",{className:"\r colour-column-item\r clickable\r tooltip\r btn-shades\r ",onClick:function(){return function(t,o,e){var c=t.slice();c[o.pos].showShades=!0,e(c)}(o,c,e)},style:{color:j(c.colour)>50?"black":"white"},children:[Object(s.jsx)("p",{className:"iconify","data-icon":"heroicons-outline:view-list","data-inline":"false"}),Object(s.jsx)("span",{className:"tooltiptext",children:"Colour Shades"})]}),Object(s.jsxs)("div",{className:"\r colour-column-item\r clickable\r tooltip\r colour-column-item-input\r ",children:[Object(s.jsx)("input",{type:"color",value:c.colour,onChange:function(t){!function(t,o,e,c){var r=e.slice();r[o].colour=t.target.value,c(r)}(t,c.pos,o,e)}}),Object(s.jsx)("span",{className:"tooltiptext",children:"Change Colour"})]})]}),Object(s.jsxs)("div",{className:"colour-column-inner-text",children:[Object(s.jsx)(i,{className:"\r colour-column-item\r clickable\r tooltip\r hex-text\r ",colour:c.colour,defaultText:"COPY HEX"}),Object(s.jsx)(i,{className:"\r colour-column-item\r clickable\r tooltip\r rgb-text\r ",colour:u(c.colour),defaultText:"COPY RGB"})]})]})},g=function(t){var o=t.colours,e=t.colourObj,c=t.setColourArray,r=[e.colour];v(e.colour,r),m(e.colour,r);var n=r.map((function(t){return Object(s.jsx)("div",{className:"shade",onClick:function(){return function(t,o,e,c){var r=t.slice();r[o.pos].showShades=!1,r[o.pos].colour=c,e(r)}(o,e,c,t)},style:{backgroundColor:t,color:j(t)>50?"black":"white"},children:Object(s.jsx)("p",{className:t===e.colour?"main-shade-text":"shade-text",children:t.toUpperCase()})},t)}));return Object(s.jsx)("div",{className:"shades",children:n})},C=function(t){var o=t.colour,e=t.setColour,c=o.map((function(t,c){return Object(s.jsxs)("div",{className:"colour-column",style:{backgroundColor:"".concat(t.colour),color:j(t.colour)>50?"black":"white"},children:[t.showShades?"":Object(s.jsx)("div",{className:"btn-new-colour",onClick:function(){return x(t.pos,t.pos-1,o,e)},children:"+"}),t.showShades?Object(s.jsx)(g,{colours:o,colourObj:t,setColourArray:e}):Object(s.jsx)(O,{colours:o,colourObj:t,setColourArray:e}),t.showShades?"":Object(s.jsx)("div",{className:"btn-new-colour",onClick:function(){return x(t.pos,t.pos+1,o,e)},children:"+"})]},t.pos)}));return Object(s.jsx)("div",{className:"colours",children:c})};var N=function(){var t=Object(c.useState)((function(){return[n(0)]})),o=Object(a.a)(t,2),e=o[0],r=o[1];function n(t){return{colour:l(),pos:t,showShades:!1}}function l(){for(var t="#",o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],e=0;e<6;e++)t+=o[Math.floor(Math.random()*o.length)];return t}return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("h1",{children:"Colour Palette Picker"}),Object(s.jsxs)("div",{className:"creds-div",children:[Object(s.jsx)("p",{className:"cred",children:"Made by Derek Price"}),Object(s.jsx)("a",{style:{color:e[0].colour},className:"cred",href:"https://github.com/DerekPixel/colour-palette-picker",children:"GitHub"})]})]}),Object(s.jsx)(C,{colour:e,setColour:function(t){r(t)}})]})},k=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,13)).then((function(o){var e=o.getCLS,c=o.getFID,r=o.getFCP,n=o.getLCP,l=o.getTTFB;e(t),c(t),r(t),n(t),l(t)}))};l.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),k()},9:function(t,o,e){}},[[12,1,2]]]);
//# sourceMappingURL=main.2d9ed69c.chunk.js.map