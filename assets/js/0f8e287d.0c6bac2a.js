/*! For license information please see 0f8e287d.0c6bac2a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[215598],{16893:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=t(824246),o=t(511151);const s={id:"plugin-scaffolder-backend.taskstore.serializeworkspace",title:"TaskStore.serializeWorkspace()",description:"API reference for TaskStore.serializeWorkspace()"},a=void 0,c={id:"reference/plugin-scaffolder-backend.taskstore.serializeworkspace",title:"TaskStore.serializeWorkspace()",description:"API reference for TaskStore.serializeWorkspace()",source:"@site/../docs/reference/plugin-scaffolder-backend.taskstore.serializeworkspace.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.taskstore.serializeworkspace",permalink:"/docs/reference/plugin-scaffolder-backend.taskstore.serializeworkspace",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.taskstore.serializeworkspace.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.taskstore.serializeworkspace",title:"TaskStore.serializeWorkspace()",description:"API reference for TaskStore.serializeWorkspace()"}},u={},i=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore",children:(0,n.jsx)(r.code,{children:"TaskStore"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.serializeworkspace",children:(0,n.jsx)(r.code,{children:"serializeWorkspace"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"serializeWorkspace?({ path, taskId, }: {\n        path: string;\n        taskId: string;\n    }): Promise<void>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"{ path, taskId, }"}),(0,n.jsx)(r.td,{children:"{ path: string; taskId: string; }"}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,s={},i=null,l=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,n)&&!u.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:l,props:s,_owner:c.current}}r.Fragment=s,r.jsx=i,r.jsxs=i},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,k={};function m(e,r,t){this.props=e,this.context=r,this.refs=k,this.updater=t||y}function b(){}function _(e,r,t){this.props=e,this.context=r,this.refs=k,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var v=_.prototype=new b;v.constructor=_,h(v,m.prototype),v.isPureReactComponent=!0;var g=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,n){var o,s={},a=null,c=null;if(null!=r)for(o in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,o)&&!S.hasOwnProperty(o)&&(s[o]=r[o]);var u=arguments.length-2;if(1===u)s.children=n;else if(1<u){for(var i=Array(u),l=0;l<u;l++)i[l]=arguments[l+2];s.children=i}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===s[o]&&(s[o]=u[o]);return{$$typeof:t,type:e,key:a,ref:c,props:s,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function P(e,r,o,s,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case t:case n:u=!0}}if(u)return a=a(u=e),e=""===s?"."+C(u,0):s,g(a)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),P(a,r,o,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(R,"$&/")+"/")+e)),r.push(a)),1;if(u=0,s=""===s?".":s+":",g(e))for(var i=0;i<e.length;i++){var l=s+C(c=e[i],i);u+=P(c,r,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(c=e.next()).done;)u+=P(c=c.value,r,o,l=s+C(c,i++),a);else if("object"===c)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return u}function $(e,r,t){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},z={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:x};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=m,r.Fragment=o,r.Profiler=a,r.PureComponent=_,r.StrictMode=s,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),s=e.key,a=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,c=x.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(i in r)j.call(r,i)&&!S.hasOwnProperty(i)&&(o[i]=void 0===r[i]&&void 0!==u?u[i]:r[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){u=Array(i);for(var l=0;l<i;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:t,type:e.type,key:s,ref:a,props:o,_owner:c}},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=T.transition;T.transition={};try{e()}finally{T.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return I.current.useCallback(e,r)},r.useContext=function(e){return I.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return I.current.useDeferredValue(e)},r.useEffect=function(e,r){return I.current.useEffect(e,r)},r.useId=function(){return I.current.useId()},r.useImperativeHandle=function(e,r,t){return I.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return I.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return I.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return I.current.useMemo(e,r)},r.useReducer=function(e,r,t){return I.current.useReducer(e,r,t)},r.useRef=function(e){return I.current.useRef(e)},r.useState=function(e){return I.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return I.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return I.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>a});var n=t(667294);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);