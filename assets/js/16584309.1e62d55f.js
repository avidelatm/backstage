/*! For license information please see 16584309.1e62d55f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[999621],{917373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(824246),o=n(511151);const a={id:"plugin-scaffolder-backend.createfetchtemplateaction",title:"createFetchTemplateAction()",description:"API reference for createFetchTemplateAction()"},c=void 0,i={id:"reference/plugin-scaffolder-backend.createfetchtemplateaction",title:"createFetchTemplateAction()",description:"API reference for createFetchTemplateAction()",source:"@site/../docs/reference/plugin-scaffolder-backend.createfetchtemplateaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.createfetchtemplateaction",permalink:"/docs/reference/plugin-scaffolder-backend.createfetchtemplateaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.createfetchtemplateaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.createfetchtemplateaction",title:"createFetchTemplateAction()",description:"API reference for createFetchTemplateAction()"}},s={},l=[{value:"Parameters",id:"parameters",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend.createfetchtemplateaction",children:(0,r.jsx)(t.code,{children:"createFetchTemplateAction"})})]}),"\n",(0,r.jsx)(t.p,{children:"Downloads a skeleton, templates variables into file and directory names and content. Then places the result in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'function createFetchTemplateAction(options: {\n    reader: UrlReader;\n    integrations: ScmIntegrations;\n    additionalTemplateFilters?: Record<string, TemplateFilter>;\n    additionalTemplateGlobals?: Record<string, TemplateGlobal>;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    url: string;\n    targetPath?: string | undefined;\n    values: any;\n    templateFileExtension?: string | boolean | undefined;\n    copyWithoutRender?: string[] | undefined;\n    copyWithoutTemplating?: string[] | undefined;\n    cookiecutterCompat?: boolean | undefined;\n    replace?: boolean | undefined;\n    trimBlocks?: boolean | undefined;\n    lstripBlocks?: boolean | undefined;\n    token?: string | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsxs)(t.td,{children:["{ reader: ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-common.urlreader",children:"UrlReader"}),"; integrations: ",(0,r.jsx)(t.a,{href:"/docs/reference/integration.scmintegrations",children:"ScmIntegrations"}),"; additionalTemplateFilters?: Record<string, ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node.templatefilter",children:"TemplateFilter"}),">; additionalTemplateGlobals?: Record<string, ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node.templateglobal",children:"TemplateGlobal"}),">; }"]}),(0,r.jsx)(t.td,{})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ url: string; targetPath?: string | undefined; values: any; templateFileExtension?: string | boolean | undefined; copyWithoutRender?: string[] | undefined; copyWithoutTemplating?: string[] | undefined; cookiecutterCompat?: boolean | undefined; replace?: boolean | undefined; trimBlocks?: boolean | undefined; lstripBlocks?: boolean | undefined; token?: string | undefined; }, import("@backstage/types").',(0,r.jsx)(t.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:i.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function g(){}function _(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var k=_.prototype=new g;k.constructor=_,m(k,b.prototype),k.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,r){var o,a={},c=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)j.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:n,type:e,key:c,ref:i,props:a,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,a,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return c=c(s=e),e=""===a?"."+w(s,0):a,v(c)?(o="",null!=e&&(o=e.replace(T,"$&/")+"/"),C(c,t,o,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(T,"$&/")+"/")+e)),t.push(c)),1;if(s=0,a=""===a?".":a+":",v(e))for(var l=0;l<e.length;l++){var u=a+w(i=e[l],l);s+=C(i,t,o,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)s+=C(i=i.value,t,o,u=a+w(i,l++),c);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function P(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},F={transition:null},A={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:F,ReactCurrentOwner:x};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=c,t.PureComponent=_,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)j.call(t,l)&&!S.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:n,type:e.type,key:a,ref:c,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=R,t.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=F.transition;F.transition={};try{e()}finally{F.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var r=n(667294);const o={},a=r.createContext(o);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);