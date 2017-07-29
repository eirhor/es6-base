!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Base",[],t):"object"==typeof exports?exports.Base=t():e.Base=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=r(o),u=function(){function e(){var t=this;return s(this,e),this.dataStore=new a.default,"interactive"===document.readyState||"complete"===document.readyState?this.init():void document.addEventListener("DOMContentLoaded",function(){t.init()},!1)}return i(e,[{key:"init",value:function(){return!1}}]),e}();t.default=u,e.exports=t.default},function(e,t,n){var r=n(2),s=r.library["bundle-node"]?r.library["dist-node"]:r.library.entry;e.exports=n(3)("./"+s)},function(e,t){e.exports={_from:"eirhor-data-store",_id:"eirhor-data-store@1.0.0",_inBundle:!1,_integrity:"sha512-MT+inSnXTv6zQXFNKeYZUHTGpLODn75U4agyBC1638RGmUxdopEwgmNfpTfg8aJUF+7JKh8Rfb6Yf4rEjNnB/g==",_location:"/eirhor-data-store",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"eirhor-data-store",name:"eirhor-data-store",escapedName:"eirhor-data-store",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/eirhor-data-store/-/eirhor-data-store-1.0.0.tgz",_shasum:"6cd7845466c6c4aded25163b055dc782a5d3c6cb",_spec:"eirhor-data-store",_where:"C:\\Projects\\github\\es6-base",author:{name:"Eirik horvath",url:"https://eirhor.github.io"},bugs:{url:"https://github.com/eirhor/data-store/issues"},bundleDependencies:!1,dependencies:{"nested-object-assign":"^1.0.0"},deprecated:!1,description:"class for sharing data between multiple classes and functions",devDependencies:{babel:"^6.3.26","babel-core":"^6.4.0","babel-eslint":"^5.0.0-beta6","babel-loader":"^6.2.1","babel-plugin-add-module-exports":"^0.1.2","babel-preset-es2015":"^6.3.13",chai:"^3.4.1","clean-webpack-plugin":"^0.1.8",del:"^2.2.0",eslint:"^1.10.3","eslint-config-airbnb":"^4.0.0","eslint-loader":"^1.2.0","eslint-plugin-react":"^3.16.1","eslint-plugin-standard":"^1.3.1",gulp:"^3.9.0","gulp-babel":"^6.1.1","gulp-env":"^0.2.0","gulp-eslint":"^1.1.1","gulp-load-plugins":"^1.2.0","gulp-util":"^3.0.6","json-loader":"^0.5.7",mocha:"^2.3.4","object-assign":"^4.0.1",webpack:"^1.12.11","webpack-node-externals":"^0.4.1"},files:["LICENSE","README.md","index.js","lib","dist"],homepage:"https://github.com/eirhor/data-store",keywords:["es6","npm","starter","library","boilerplate","babel","umd","webpack","universal"],library:{name:"DataStore",entry:"data-store.js","dist-node":"data-store-node.js","dist-web":"data-store-web.js","bundle-node":!0},license:"MIT",main:"./index.js",name:"eirhor-data-store",repository:{type:"git",url:"git+https://github.com/eirhor/data-store.git"},scripts:{build:"gulp build","build-all":"gulp","build-dev":"gulp build-dev","build-web":"gulp build-web","build-web-dev":"gulp build-web-dev",postversion:"git push && git push --tags",prepublish:"npm run build-all",preversion:"npm run build-all && npm run unit",test:"npm run unit-watch",unit:"mocha --compilers js:babel-core/register --colors ./test/*.spec.js","unit-watch":"mocha --compilers js:babel-core/register --colors -w ./test/*.spec.js",version:"git add ."},version:"1.0.0"}},function(e,t,n){function r(e){return n(s(e))}function s(e){return i[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var i={"./data-store-node":4,"./data-store-node.js":4};r.keys=function(){return Object.keys(i)},r.resolve=s,e.exports=r,r.id=3},function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=r(o),u={},l=function(){function e(t){s(this,e),t&&this.add(t)}return i(e,[{key:"add",value:function(e){u=(0,a.default)({},u,e)}},{key:"get",value:function(){return u}}]),e}();t.default=l,e.exports=t.default},function(e,t){e.exports=n(5)}])},function(e,t,n){var r=n(6),s=r.library["bundle-node"]?r.library["dist-node"]:r.library.entry;e.exports=n(7)("./"+s)},function(e,t){e.exports={_from:"nested-object-assign@^1.0.0",_id:"nested-object-assign@1.0.0",_inBundle:!1,_integrity:"sha1-nzQm8bKzCm8i4q4ou+Tp6Q9f71o=",_location:"/nested-object-assign",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"nested-object-assign@^1.0.0",name:"nested-object-assign",escapedName:"nested-object-assign",rawSpec:"^1.0.0",saveSpec:null,fetchSpec:"^1.0.0"},_requiredBy:["/eirhor-data-store"],_resolved:"https://registry.npmjs.org/nested-object-assign/-/nested-object-assign-1.0.0.tgz",_shasum:"9f3426f1b2b30a6f22e2ae28bbe4e9e90f5fef5a",_spec:"nested-object-assign@^1.0.0",_where:"C:\\Projects\\github\\es6-base\\node_modules\\eirhor-data-store",author:{name:"Geta AS / Eirik Horvath",url:"https://github.com/Geta"},bugs:{url:"https://github.com/Geta/NestedObjectAssign/issues"},bundleDependencies:!1,deprecated:!1,description:"Package to support nested merging of objects & properties, using Object.Assign",devDependencies:{babel:"^6.3.26","babel-core":"^6.4.0","babel-eslint":"^5.0.0-beta6","babel-loader":"^6.2.1","babel-plugin-add-module-exports":"^0.1.2","babel-preset-es2015":"^6.3.13",chai:"^3.4.1","clean-webpack-plugin":"^0.1.8",del:"^2.2.0",eslint:"^1.10.3","eslint-config-airbnb":"^4.0.0","eslint-loader":"^1.2.0","eslint-plugin-react":"^3.16.1","eslint-plugin-standard":"^1.3.1",gulp:"^3.9.0","gulp-babel":"^6.1.1","gulp-env":"^0.2.0","gulp-eslint":"^1.1.1","gulp-load-plugins":"^1.2.0","gulp-util":"^3.0.6",mocha:"^2.3.4","object-assign":"^4.0.1",webpack:"^1.12.11","webpack-node-externals":"^0.4.1"},files:["README.md","index.js","lib","dist"],homepage:"https://github.com/Geta/NestedObjectAssign",keywords:["es6","npm","nested","object","assign"],library:{name:"nestedObjectAssign",entry:"nestedObjectAssign.js","dist-node":"nestedObjectAssign.js","dist-web":"nestedObjectAssign.web.js","bundle-node":!0},license:"MIT",main:"./index.js",name:"nested-object-assign",repository:{type:"git",url:"git+https://github.com/Geta/NestedObjectAssign.git"},scripts:{build:"gulp build","build-all":"gulp","build-dev":"gulp build-dev","build-web":"gulp build-web","build-web-dev":"gulp build-web-dev",postversion:"git push && git push --tags",prepublish:"npm run build-all",preversion:"npm run build-all && npm run unit",test:"npm run unit-watch",unit:"mocha --compilers js:babel-core/register --colors ./test/*.spec.js","unit-watch":"mocha --compilers js:babel-core/register --colors -w ./test/*.spec.js",version:"git add ."},version:"1.0.0"}},function(e,t,n){function r(e){return n(s(e))}function s(e){return i[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var i={"./nestedObjectAssign":8,"./nestedObjectAssign.js":8};r.keys=function(){return Object.keys(i)},r.resolve=s,e.exports=r,r.id=7},function(e,t){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if(!n.length)return e;var a=n.shift();if((0,i.isObject)(e)&&(0,i.isObject)(a))for(var u in a)(0,i.isObject)(a[u])?(e[u]||Object.assign(e,r({},u,{})),s(e[u],a[u])):Object.assign(e,r({},u,a[u]));return s.apply(void 0,[e].concat(n))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var i=n(1);e.exports=t.default},function(e,t){"use strict";function n(e){return e&&"object"===("undefined"==typeof e?"undefined":r(e))&&!Array.isArray(e)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.isObject=n}])}])});