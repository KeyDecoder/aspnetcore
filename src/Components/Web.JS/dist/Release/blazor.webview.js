(()=>{"use strict";var e,t,n;!function(e){window.DotNet=e;const t=[],n=new Map;class r{constructor(e){this._jsObject=e,this._cachedFunctions=new Map}findFunction(e){const t=this._cachedFunctions.get(e);if(t)return t;let n,r=this._jsObject;if(e.split(".").forEach((t=>{if(!(t in r))throw new Error(`Could not find '${e}' ('${t}' was undefined).`);n=r,r=r[t]})),r instanceof Function)return r=r.bind(n),this._cachedFunctions.set(e,r),r;throw new Error(`The value '${e}' is not a function.`)}getWrappedObject(){return this._jsObject}}const o="__jsObjectId",a={},i={0:new r(window)};i[0]._cachedFunctions.set("import",(e=>("string"==typeof e&&e.startsWith("./")&&(e=document.baseURI+e.substr(2)),import(e))));let s,l=1,c=1,u=null;function d(e){t.push(e)}function f(e){if(e&&"object"==typeof e){i[c]=new r(e);const t={[o]:c};return c++,t}throw new Error(`Cannot create a JSObjectReference from the value '${e}'.`)}function h(e){return e?JSON.parse(e,((e,n)=>t.reduce(((t,n)=>n(e,t)),n))):null}function p(e,t,n,r){const o=v();if(o.invokeDotNetFromJS){const a=C(r),i=o.invokeDotNetFromJS(e,t,n,a);return i?h(i):null}throw new Error("The current dispatcher does not support synchronous calls from JS to .NET. Use invokeMethodAsync instead.")}function m(e,t,n,r){if(e&&n)throw new Error(`For instance method calls, assemblyName should be null. Received '${e}'.`);const o=l++,i=new Promise(((e,t)=>{a[o]={resolve:e,reject:t}}));try{const a=C(r);v().beginInvokeDotNetFromJS(o,e,t,n,a)}catch(e){g(o,!1,e)}return i}function v(){if(null!==u)return u;throw new Error("No .NET call dispatcher has been set.")}function g(e,t,n){if(!a.hasOwnProperty(e))throw new Error(`There is no pending async call with ID ${e}.`);const r=a[e];delete a[e],t?r.resolve(n):r.reject(n)}function b(e){return e instanceof Error?`${e.message}\n${e.stack}`:e?e.toString():"null"}function y(e,t){let n=i[t];if(n)return n.findFunction(e);throw new Error(`JS object instance with ID ${t} does not exist (has it been disposed?).`)}function E(e){delete i[e]}e.attachDispatcher=function(e){u=e},e.attachReviver=d,e.invokeMethod=function(e,t,...n){return p(e,t,null,n)},e.invokeMethodAsync=function(e,t,...n){return m(e,t,null,n)},e.createJSObjectReference=f,e.disposeJSObjectReference=function(e){const t=e&&e.__jsObjectId;"number"==typeof t&&E(t)},function(e){e[e.Default=0]="Default",e[e.JSObjectReference=1]="JSObjectReference"}(s=e.JSCallResultType||(e.JSCallResultType={})),e.jsCallDispatcher={findJSFunction:y,disposeJSObjectReferenceById:E,invokeJSFromDotNet:(e,t,n,r)=>{const o=S(y(e,r).apply(null,h(t)),n);return null==o?null:C(o)},beginInvokeJSFromDotNet:(e,t,n,r,o)=>{const a=new Promise((e=>{e(y(t,o).apply(null,h(n)))}));e&&a.then((t=>v().endInvokeJSFromDotNet(e,!0,C([e,!0,S(t,r)]))),(t=>v().endInvokeJSFromDotNet(e,!1,JSON.stringify([e,!1,b(t)]))))},endInvokeDotNetFromJS:(e,t,n)=>{const r=t?h(n):new Error(n);g(parseInt(e),t,r)},receiveByteArray:(e,t)=>{n.set(e,t)}};class w{constructor(e){this._id=e}invokeMethod(e,...t){return p(null,e,this._id,t)}invokeMethodAsync(e,...t){return m(null,e,this._id,t)}dispose(){m(null,"__Dispose",this._id,null).catch((e=>console.error(e)))}serializeAsArg(){return{__dotNetObject:this._id}}}const I="__byte[]";function S(e,t){switch(t){case s.Default:return e;case s.JSObjectReference:return f(e);default:throw new Error(`Invalid JS call result type '${t}'.`)}}d((function(e,t){if(t&&"object"==typeof t){if(t.hasOwnProperty("__dotNetObject"))return new w(t.__dotNetObject);if(t.hasOwnProperty(o)){const e=t.__jsObjectId,n=i[e];if(n)return n.getWrappedObject();throw new Error(`JS object instance with Id '${e}' does not exist. It may have been disposed.`)}if(t.hasOwnProperty(I)){const e=t["__byte[]"],r=n.get(e);if(void 0===r)throw new Error(`Byte array index '${e}' does not exist.`);return r}}return t}));let D=0;function C(e){return D=0,JSON.stringify(e,A)}function A(e,t){if(t instanceof w)return t.serializeAsArg();if(t instanceof Uint8Array){u.sendByteArray(D,t);const e={[I]:D};return D++,e}return t}}(e||(e={})),function(e){e[e.prependFrame=1]="prependFrame",e[e.removeFrame=2]="removeFrame",e[e.setAttribute=3]="setAttribute",e[e.removeAttribute=4]="removeAttribute",e[e.updateText=5]="updateText",e[e.stepIn=6]="stepIn",e[e.stepOut=7]="stepOut",e[e.updateMarkup=8]="updateMarkup",e[e.permutationListEntry=9]="permutationListEntry",e[e.permutationListEnd=10]="permutationListEnd"}(t||(t={})),function(e){e[e.element=1]="element",e[e.text=2]="text",e[e.attribute=3]="attribute",e[e.component=4]="component",e[e.region=5]="region",e[e.elementReferenceCapture=6]="elementReferenceCapture",e[e.markup=8]="markup"}(n||(n={}));class r{constructor(e,t){this.componentId=e,this.fieldValue=t}static fromEvent(e,t){const n=t.target;if(n instanceof Element){const t=function(e){return e instanceof HTMLInputElement?e.type&&"checkbox"===e.type.toLowerCase()?{value:e.checked}:{value:e.value}:e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement?{value:e.value}:null}(n);if(t)return new r(e,t.value)}return null}}let o;function a(e,t){if(!o)throw new Error("eventDispatcher not initialized. Call 'setEventDispatcher' to configure it.");o(e,t)}const i=new Map,s=new Map,l={createEventArgs:()=>({})},c=[];function u(e){return i.get(e)}function d(e){const t=i.get(e);return(null==t?void 0:t.browserEventName)||e}function f(e,t){e.forEach((e=>i.set(e,t)))}function h(e){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t.push({identifier:r.identifier,clientX:r.clientX,clientY:r.clientY,screenX:r.screenX,screenY:r.screenY,pageX:r.pageX,pageY:r.pageY})}return t}function p(e){return{detail:e.detail,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY,offsetX:e.offsetX,offsetY:e.offsetY,button:e.button,buttons:e.buttons,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey}}f(["input","change"],{createEventArgs:function(e){const t=e.target;if(function(e){return-1!==m.indexOf(e.getAttribute("type"))}(t))return{value:function(e){const t=e.value,n=e.type;switch(n){case"date":case"datetime-local":case"month":return t;case"time":return 5===t.length?t+":00":t;case"week":return t}throw new Error(`Invalid element type '${n}'.`)}(t)};if(function(e){return e instanceof HTMLSelectElement&&"select-multiple"===e.type}(t)){const e=t;return{value:Array.from(e.options).filter((e=>e.selected)).map((e=>e.value))}}return{value:function(e){return!!e&&"INPUT"===e.tagName&&"checkbox"===e.getAttribute("type")}(t)?!!t.checked:t.value}}}),f(["copy","cut","paste"],l),f(["drag","dragend","dragenter","dragleave","dragover","dragstart","drop"],{createEventArgs:e=>{return{...p(t=e),dataTransfer:t.dataTransfer?{dropEffect:t.dataTransfer.dropEffect,effectAllowed:t.dataTransfer.effectAllowed,files:Array.from(t.dataTransfer.files).map((e=>e.name)),items:Array.from(t.dataTransfer.items).map((e=>({kind:e.kind,type:e.type}))),types:t.dataTransfer.types}:null};var t}}),f(["focus","blur","focusin","focusout"],l),f(["keydown","keyup","keypress"],{createEventArgs:e=>{return{key:(t=e).key,code:t.code,location:t.location,repeat:t.repeat,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey};var t}}),f(["contextmenu","click","mouseover","mouseout","mousemove","mousedown","mouseup","dblclick"],{createEventArgs:e=>p(e)}),f(["error"],{createEventArgs:e=>{return{message:(t=e).message,filename:t.filename,lineno:t.lineno,colno:t.colno};var t}}),f(["loadstart","timeout","abort","load","loadend","progress"],{createEventArgs:e=>{return{lengthComputable:(t=e).lengthComputable,loaded:t.loaded,total:t.total};var t}}),f(["touchcancel","touchend","touchmove","touchenter","touchleave","touchstart"],{createEventArgs:e=>{return{detail:(t=e).detail,touches:h(t.touches),targetTouches:h(t.targetTouches),changedTouches:h(t.changedTouches),ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey,type:t.type};var t}}),f(["gotpointercapture","lostpointercapture","pointercancel","pointerdown","pointerenter","pointerleave","pointermove","pointerout","pointerover","pointerup"],{createEventArgs:e=>{return{...p(t=e),pointerId:t.pointerId,width:t.width,height:t.height,pressure:t.pressure,tiltX:t.tiltX,tiltY:t.tiltY,pointerType:t.pointerType,isPrimary:t.isPrimary};var t}}),f(["wheel","mousewheel"],{createEventArgs:e=>{return{...p(t=e),deltaX:t.deltaX,deltaY:t.deltaY,deltaZ:t.deltaZ,deltaMode:t.deltaMode};var t}}),f(["toggle"],l);const m=["date","datetime-local","month","time","week"],v=I(["abort","blur","change","error","focus","load","loadend","loadstart","mouseenter","mouseleave","progress","reset","scroll","submit","unload","toggle","DOMNodeInsertedIntoDocument","DOMNodeRemovedFromDocument"]),g={submit:!0},b=I(["click","dblclick","mousedown","mousemove","mouseup"]);class y{constructor(e){this.browserRendererId=e,this.afterClickCallbacks=[];const t=++y.nextEventDelegatorId;this.eventsCollectionKey=`_blazorEvents_${t}`,this.eventInfoStore=new E(this.onGlobalEvent.bind(this))}setListener(e,t,n,r){const o=this.getEventHandlerInfosForElement(e,!0),a=o.getHandler(t);if(a)this.eventInfoStore.update(a.eventHandlerId,n);else{const a={element:e,eventName:t,eventHandlerId:n,renderingComponentId:r};this.eventInfoStore.add(a),o.setHandler(t,a)}}getHandler(e){return this.eventInfoStore.get(e)}removeListener(e){const t=this.eventInfoStore.remove(e);if(t){const e=t.element,n=this.getEventHandlerInfosForElement(e,!1);n&&n.removeHandler(t.eventName)}}notifyAfterClick(e){this.afterClickCallbacks.push(e),this.eventInfoStore.addGlobalListener("click")}setStopPropagation(e,t,n){this.getEventHandlerInfosForElement(e,!0).stopPropagation(t,n)}setPreventDefault(e,t,n){this.getEventHandlerInfosForElement(e,!0).preventDefault(t,n)}onGlobalEvent(e){if(!(e.target instanceof Element))return;this.dispatchGlobalEventToAllElements(e.type,e);const t=(n=e.type,s.get(n));var n;t&&t.forEach((t=>this.dispatchGlobalEventToAllElements(t,e))),"click"===e.type&&this.afterClickCallbacks.forEach((t=>t(e)))}dispatchGlobalEventToAllElements(e,t){let n=t.target,o=null,i=!1;const s=v.hasOwnProperty(e);let l=!1;for(;n;){const f=this.getEventHandlerInfosForElement(n,!1);if(f){const s=f.getHandler(e);if(s&&(c=n,d=t.type,!((c instanceof HTMLButtonElement||c instanceof HTMLInputElement||c instanceof HTMLTextAreaElement||c instanceof HTMLSelectElement)&&b.hasOwnProperty(d)&&c.disabled))){if(!i){const n=u(e);o=(null==n?void 0:n.createEventArgs)?n.createEventArgs(t):{},i=!0}g.hasOwnProperty(t.type)&&t.preventDefault(),a({browserRendererId:this.browserRendererId,eventHandlerId:s.eventHandlerId,eventName:e,eventFieldInfo:r.fromEvent(s.renderingComponentId,t)},o)}f.stopPropagation(e)&&(l=!0),f.preventDefault(e)&&t.preventDefault()}n=s||l?null:n.parentElement}var c,d}getEventHandlerInfosForElement(e,t){return e.hasOwnProperty(this.eventsCollectionKey)?e[this.eventsCollectionKey]:t?e[this.eventsCollectionKey]=new w:null}}y.nextEventDelegatorId=0;class E{constructor(e){this.globalListener=e,this.infosByEventHandlerId={},this.countByEventName={},c.push(this.handleEventNameAliasAdded.bind(this))}add(e){if(this.infosByEventHandlerId[e.eventHandlerId])throw new Error(`Event ${e.eventHandlerId} is already tracked`);this.infosByEventHandlerId[e.eventHandlerId]=e,this.addGlobalListener(e.eventName)}get(e){return this.infosByEventHandlerId[e]}addGlobalListener(e){if(e=d(e),this.countByEventName.hasOwnProperty(e))this.countByEventName[e]++;else{this.countByEventName[e]=1;const t=v.hasOwnProperty(e);document.addEventListener(e,this.globalListener,t)}}update(e,t){if(this.infosByEventHandlerId.hasOwnProperty(t))throw new Error(`Event ${t} is already tracked`);const n=this.infosByEventHandlerId[e];delete this.infosByEventHandlerId[e],n.eventHandlerId=t,this.infosByEventHandlerId[t]=n}remove(e){const t=this.infosByEventHandlerId[e];if(t){delete this.infosByEventHandlerId[e];const n=d(t.eventName);0==--this.countByEventName[n]&&(delete this.countByEventName[n],document.removeEventListener(n,this.globalListener))}return t}handleEventNameAliasAdded(e,t){if(this.countByEventName.hasOwnProperty(e)){const n=this.countByEventName[e];delete this.countByEventName[e],document.removeEventListener(e,this.globalListener),this.addGlobalListener(t),this.countByEventName[t]+=n-1}}}class w{constructor(){this.handlers={},this.preventDefaultFlags=null,this.stopPropagationFlags=null}getHandler(e){return this.handlers.hasOwnProperty(e)?this.handlers[e]:null}setHandler(e,t){this.handlers[e]=t}removeHandler(e){delete this.handlers[e]}preventDefault(e,t){return void 0!==t&&(this.preventDefaultFlags=this.preventDefaultFlags||{},this.preventDefaultFlags[e]=t),!!this.preventDefaultFlags&&this.preventDefaultFlags[e]}stopPropagation(e,t){return void 0!==t&&(this.stopPropagationFlags=this.stopPropagationFlags||{},this.stopPropagationFlags[e]=t),!!this.stopPropagationFlags&&this.stopPropagationFlags[e]}}function I(e){const t={};return e.forEach((e=>{t[e]=!0})),t}const S=H("_blazorLogicalChildren"),D=H("_blazorLogicalParent"),C=H("_blazorLogicalEnd");function A(e,t){if(e.childNodes.length>0&&!t)throw new Error("New logical elements must start empty, or allowExistingContents must be true");return S in e||(e[S]=[]),e}function T(e,t){const n=document.createComment("!");return N(n,e,t),n}function N(e,t,n){const r=e;if(e instanceof Comment&&_(r)&&_(r).length>0)throw new Error("Not implemented: inserting non-empty logical container");if(F(r))throw new Error("Not implemented: moving existing logical children");const o=_(t);if(n<o.length){const t=o[n];t.parentNode.insertBefore(e,t),o.splice(n,0,r)}else L(e,t),o.push(r);r[D]=t,S in r||(r[S]=[])}function k(e,t){const n=_(e).splice(t,1)[0];if(n instanceof Comment){const e=_(n);if(e)for(;e.length>0;)k(n,0)}const r=n;r.parentNode.removeChild(r)}function F(e){return e[D]||null}function R(e,t){return _(e)[t]}function O(e){var t=P(e);return"http://www.w3.org/2000/svg"===t.namespaceURI&&"foreignObject"!==t.tagName}function _(e){return e[S]}function x(e,t){const n=_(e);t.forEach((e=>{e.moveRangeStart=n[e.fromSiblingIndex],e.moveRangeEnd=M(e.moveRangeStart)})),t.forEach((t=>{const r=t.moveToBeforeMarker=document.createComment("marker"),o=n[t.toSiblingIndex+1];o?o.parentNode.insertBefore(r,o):L(r,e)})),t.forEach((e=>{const t=e.moveToBeforeMarker,n=t.parentNode,r=e.moveRangeStart,o=e.moveRangeEnd;let a=r;for(;a;){const e=a.nextSibling;if(n.insertBefore(a,t),a===o)break;a=e}n.removeChild(t)})),t.forEach((e=>{n[e.toSiblingIndex]=e.moveRangeStart}))}function P(e){if(e instanceof Element)return e;if(e instanceof Comment)return e.parentNode;throw new Error("Not a valid logical element")}function B(e){const t=_(F(e));return t[Array.prototype.indexOf.call(t,e)+1]||null}function L(e,t){if(t instanceof Element)t.appendChild(e);else{if(!(t instanceof Comment))throw new Error(`Cannot append node because the parent is not a valid logical element. Parent: ${t}`);{const n=B(t);n?n.parentNode.insertBefore(e,n):L(e,F(t))}}}function M(e){if(e instanceof Element)return e;const t=B(e);if(t)return t.previousSibling;{const t=F(e);return t instanceof Element?t.lastChild:M(t)}}function H(e){return"function"==typeof Symbol?Symbol():e}function U(e){return`_bl_${e}`}e.attachReviver(((e,t)=>t&&"object"==typeof t&&t.hasOwnProperty("__internalId")&&"string"==typeof t.__internalId?function(e){const t=`[${U(e)}]`;return document.querySelector(t)}(t.__internalId):t));const j="_blazorDeferredValue",z=document.createElement("template"),J=document.createElementNS("http://www.w3.org/2000/svg","g"),$={},K="__internal_",V="preventDefault_",X="stopPropagation_";class Y{constructor(e){this.childComponentLocations={},this.eventDelegator=new y(e),this.eventDelegator.notifyAfterClick((e=>{if(!te)return;if(0!==e.button||function(e){return e.ctrlKey||e.shiftKey||e.altKey||e.metaKey}(e))return;if(e.defaultPrevented)return;const t=function(e){const t=!window._blazorDisableComposedPath&&e.composedPath&&e.composedPath();if(t){for(let e=0;e<t.length;e++){const n=t[e];if(n instanceof Element&&"A"===n.tagName)return n}return null}return ue(e.target,"A")}(e);if(t&&function(e){const t=e.getAttribute("target");return(!t||"_self"===t)&&e.hasAttribute("href")&&!e.hasAttribute("download")}(t)){const n=ce(t.getAttribute("href"));de(n)&&(e.preventDefault(),ie(n,!0))}}))}attachRootComponentToLogicalElement(e,t){this.attachComponentToElement(e,t),$[e]=t}updateComponent(e,t,n,r){var o;const a=this.childComponentLocations[t];if(!a)throw new Error(`No element is currently associated with component ${t}`);const i=$[t];if(i){const e=function(e){return e[C]||null}(i);delete $[t],e?function(e,t){const n=F(e);if(!n)throw new Error("Can't clear between nodes. The start node does not have a logical parent.");const r=_(n),o=r.indexOf(e)+1,a=r.indexOf(t);for(let e=o;e<=a;e++)k(n,o);e.textContent="!"}(i,e):function(e){let t;for(;t=e.firstChild;)e.removeChild(t)}(i)}const s=null===(o=P(a))||void 0===o?void 0:o.ownerDocument,l=s&&s.activeElement;this.applyEdits(e,t,a,0,n,r),l instanceof HTMLElement&&s&&s.activeElement!==l&&l.focus()}disposeComponent(e){delete this.childComponentLocations[e]}disposeEventHandler(e){this.eventDelegator.removeListener(e)}attachComponentToElement(e,t){this.childComponentLocations[e]=t}applyEdits(e,n,r,o,a,i){let s,l=0,c=o;const u=e.arrayBuilderSegmentReader,d=e.editReader,f=e.frameReader,h=u.values(a),p=u.offset(a),m=p+u.count(a);for(let a=p;a<m;a++){const u=e.diffReader.editsEntry(h,a),p=d.editType(u);switch(p){case t.prependFrame:{const t=d.newTreeIndex(u),o=e.referenceFramesEntry(i,t),a=d.siblingIndex(u);this.insertFrame(e,n,r,c+a,i,o,t);break}case t.removeFrame:k(r,c+d.siblingIndex(u));break;case t.setAttribute:{const t=d.newTreeIndex(u),o=e.referenceFramesEntry(i,t),a=R(r,c+d.siblingIndex(u));if(!(a instanceof Element))throw new Error("Cannot set attribute on non-element child");this.applyAttribute(e,n,a,o);break}case t.removeAttribute:{const t=R(r,c+d.siblingIndex(u));if(!(t instanceof HTMLElement))throw new Error("Cannot remove attribute from non-element child");{const n=d.removedAttributeName(u);this.tryApplySpecialProperty(e,t,n,null)||t.removeAttribute(n)}break}case t.updateText:{const t=d.newTreeIndex(u),n=e.referenceFramesEntry(i,t),o=R(r,c+d.siblingIndex(u));if(!(o instanceof Text))throw new Error("Cannot set text content on non-text child");o.textContent=f.textContent(n);break}case t.updateMarkup:{const t=d.newTreeIndex(u),n=e.referenceFramesEntry(i,t),o=d.siblingIndex(u);k(r,c+o),this.insertMarkup(e,r,c+o,n);break}case t.stepIn:r=R(r,c+d.siblingIndex(u)),l++,c=0;break;case t.stepOut:r=F(r),l--,c=0===l?o:0;break;case t.permutationListEntry:s=s||[],s.push({fromSiblingIndex:c+d.siblingIndex(u),toSiblingIndex:c+d.moveToSiblingIndex(u)});break;case t.permutationListEnd:x(r,s),s=void 0;break;default:throw new Error(`Unknown edit type: ${p}`)}}}insertFrame(e,t,r,o,a,i,s){const l=e.frameReader,c=l.frameType(i);switch(c){case n.element:return this.insertElement(e,t,r,o,a,i,s),1;case n.text:return this.insertText(e,r,o,i),1;case n.attribute:throw new Error("Attribute frames should only be present as leading children of element frames.");case n.component:return this.insertComponent(e,r,o,i),1;case n.region:return this.insertFrameRange(e,t,r,o,a,s+1,s+l.subtreeLength(i));case n.elementReferenceCapture:if(r instanceof Element)return u=r,d=l.elementReferenceCaptureId(i),u.setAttribute(U(d),""),0;throw new Error("Reference capture frames can only be children of element frames.");case n.markup:return this.insertMarkup(e,r,o,i),1;default:throw new Error(`Unknown frame type: ${c}`)}var u,d}insertElement(e,t,r,o,a,i,s){const l=e.frameReader,c=l.elementName(i),u="svg"===c||O(r)?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c),d=A(u);let f=!1;const h=s+l.subtreeLength(i);for(let i=s+1;i<h;i++){const s=e.referenceFramesEntry(a,i);if(l.frameType(s)!==n.attribute){N(u,r,o),f=!0,this.insertFrameRange(e,t,d,0,a,i,h);break}this.applyAttribute(e,t,u,s)}f||N(u,r,o),u instanceof HTMLOptionElement?this.trySetSelectValueFromOptionElement(u):j in u&&(u instanceof HTMLSelectElement?"select-multiple"===u.type?Z(u,u._blazorDeferredValue||[]):q(u,u._blazorDeferredValue):u.value=u._blazorDeferredValue)}trySetSelectValueFromOptionElement(e){const t=this.findClosestAncestorSelectElement(e);return!(!t||!(j in t))&&("multiple-select"===t.type?this.trySetMultipleSelectValueFromOptionElement(t,e):this.trySetSingleSelectValueFromOptionElement(t,e))}trySetMultipleSelectValueFromOptionElement(e,t){return t.selected=-1!==e._blazorDeferredValue.indexOf(t.value),!0}trySetSingleSelectValueFromOptionElement(e,t){return e._blazorDeferredValue===t.value&&(q(e,t.value),delete e._blazorDeferredValue,!0)}insertComponent(e,t,n,r){const o=T(t,n),a=e.frameReader.componentId(r);this.attachComponentToElement(a,o)}insertText(e,t,n,r){const o=e.frameReader.textContent(r);N(document.createTextNode(o),t,n)}insertMarkup(e,t,n,r){const o=T(t,n),a=(i=e.frameReader.markupContent(r),O(t)?(J.innerHTML=i||" ",J):(z.innerHTML=i||" ",z.content));var i;let s=0;for(;a.firstChild;)N(a.firstChild,o,s++)}applyAttribute(e,t,n,r){const o=e.frameReader,a=o.attributeName(r),i=o.attributeEventHandlerId(r);if(i){const e=W(a);this.eventDelegator.setListener(n,e,i,t)}else this.tryApplySpecialProperty(e,n,a,r)||n.setAttribute(a,o.attributeValue(r))}tryApplySpecialProperty(e,t,n,r){switch(n){case"value":return this.tryApplyValueProperty(e,t,r);case"checked":return this.tryApplyCheckedProperty(e,t,r);default:return!!n.startsWith(K)&&(this.applyInternalAttribute(e,t,n.substring(K.length),r),!0)}}applyInternalAttribute(e,t,n,r){const o=r?e.frameReader.attributeValue(r):null;if(n.startsWith(X)){const e=W(n.substring(X.length));this.eventDelegator.setStopPropagation(t,e,null!==o)}else{if(!n.startsWith(V))throw new Error(`Unsupported internal attribute '${n}'`);{const e=W(n.substring(V.length));this.eventDelegator.setPreventDefault(t,e,null!==o)}}}tryApplyValueProperty(e,t,n){const r=e.frameReader;if("INPUT"===t.tagName&&"time"===t.getAttribute("type")&&!t.getAttribute("step")){const e=n?r.attributeValue(n):null;if(e)return t.value=e.substring(0,5),!0}switch(t.tagName){case"INPUT":case"SELECT":case"TEXTAREA":{const e=n?r.attributeValue(n):null;if(t instanceof HTMLSelectElement)if("select-multiple"===t.type){const n=e?JSON.parse(e):[];t._blazorDeferredValue=n,Z(t,n)}else t._blazorDeferredValue=e,q(t,e);else t._blazorDeferredValue=e,t.value=e;return!0}case"OPTION":{const e=n?r.attributeValue(n):null;return e||""===e?t.setAttribute("value",e):t.removeAttribute("value"),this.trySetSelectValueFromOptionElement(t),!0}default:return!1}}tryApplyCheckedProperty(e,t,n){if("INPUT"===t.tagName){const r=n?e.frameReader.attributeValue(n):null;return t.checked=null!==r,!0}return!1}findClosestAncestorSelectElement(e){for(;e;){if(e instanceof HTMLSelectElement)return e;e=e.parentElement}return null}insertFrameRange(e,t,n,r,o,a,i){const s=r;for(let s=a;s<i;s++){const a=e.referenceFramesEntry(o,s);r+=this.insertFrame(e,t,n,r,o,a,s),s+=G(e,a)}return r-s}}function G(e,t){const r=e.frameReader;switch(r.frameType(t)){case n.component:case n.element:case n.region:return r.subtreeLength(t)-1;default:return 0}}function W(e){if(e.startsWith("on"))return e.substring(2);throw new Error(`Attribute should be an event name, but doesn't start with 'on'. Value: '${e}'`)}function q(e,t){e.value=t||""}function Z(e,t){for(let n=0;n<e.options.length;n++)e.options[n].selected=-1!==t.indexOf(e.options[n].value)}const Q={};let ee=!1,te=!1,ne=!1,re=null;const oe={listenForNavigationEvents:function(e){re=e,ne||(ne=!0,window.addEventListener("popstate",(()=>se(!1))))},enableNavigationInterception:function(){te=!0},navigateTo:ae,getBaseURI:()=>document.baseURI,getLocationHref:()=>location.href};function ae(e,t,n=!1){const r=ce(e);if(!t&&de(r))ie(r,!1,n);else if(t&&location.href===e){const t=e+"?";history.replaceState(null,"",t),location.replace(e)}else n?history.replaceState(null,"",r):location.href=e}function ie(e,t,n=!1){ee=!0,n?history.replaceState(null,"",e):history.pushState(null,"",e),se(t)}async function se(e){re&&await re(location.href,e)}let le;function ce(e){return le=le||document.createElement("a"),le.href=e,le.href}function ue(e,t){return e?e.tagName===t?e:ue(e.parentElement,t):null}function de(e){const t=(n=document.baseURI).substr(0,n.lastIndexOf("/")+1);var n;return e.startsWith(t)}const fe={init:function(e,t,n,r=50){const o=pe(t);(o||document.documentElement).style.overflowAnchor="none";const a=new IntersectionObserver((function(r){r.forEach((r=>{var o;if(!r.isIntersecting)return;const a=t.getBoundingClientRect(),i=n.getBoundingClientRect().top-a.bottom,s=null===(o=r.rootBounds)||void 0===o?void 0:o.height;r.target===t?e.invokeMethodAsync("OnSpacerBeforeVisible",r.intersectionRect.top-r.boundingClientRect.top,i,s):r.target===n&&n.offsetHeight>0&&e.invokeMethodAsync("OnSpacerAfterVisible",r.boundingClientRect.bottom-r.intersectionRect.bottom,i,s)}))}),{root:o,rootMargin:`${r}px`});a.observe(t),a.observe(n);const i=l(t),s=l(n);function l(e){const t=new MutationObserver((()=>{a.unobserve(e),a.observe(e)}));return t.observe(e,{attributes:!0}),t}he[e._id]={intersectionObserver:a,mutationObserverBefore:i,mutationObserverAfter:s}},dispose:function(e){const t=he[e._id];t&&(t.intersectionObserver.disconnect(),t.mutationObserverBefore.disconnect(),t.mutationObserverAfter.disconnect(),e.dispose(),delete he[e._id])}},he={};function pe(e){return e?"visible"!==getComputedStyle(e).overflowY?e:pe(e.parentElement):null}const me={navigateTo:ae,registerCustomEventType:function(e,t){if(!t)throw new Error("The options parameter is required.");if(i.has(e))throw new Error(`The event '${e}' is already registered.`);if(t.browserEventName){const n=s.get(t.browserEventName);n?n.push(e):s.set(t.browserEventName,[e]),c.forEach((n=>n(e,t.browserEventName)))}i.set(e,t)},_internal:{navigationManager:oe,domWrapper:{focus:function(e,t){if(!(e instanceof HTMLElement))throw new Error("Unable to focus an invalid element.");e.focus({preventScroll:t})},focusBySelector:function(e){const t=document.querySelector(e);t&&(t.hasAttribute("tabindex")||(t.tabIndex=-1),t.focus())}},Virtualize:fe}};window.Blazor=me;let ve=!1;const ge="function"==typeof TextDecoder?new TextDecoder("utf-8"):null,be=ge?ge.decode.bind(ge):function(e){let t=0;const n=e.length,r=[],o=[];for(;t<n;){const n=e[t++];if(0===n)break;if(0==(128&n))r.push(n);else if(192==(224&n)){const o=63&e[t++];r.push((31&n)<<6|o)}else if(224==(240&n)){const o=63&e[t++],a=63&e[t++];r.push((31&n)<<12|o<<6|a)}else if(240==(248&n)){let o=(7&n)<<18|(63&e[t++])<<12|(63&e[t++])<<6|63&e[t++];o>65535&&(o-=65536,r.push(o>>>10&1023|55296),o=56320|1023&o),r.push(o)}r.length>1024&&(o.push(String.fromCharCode.apply(null,r)),r.length=0)}return o.push(String.fromCharCode.apply(null,r)),o.join("")},ye=Math.pow(2,32),Ee=Math.pow(2,21)-1;function we(e,t){return e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24}function Ie(e,t){return e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24>>>0)}function Se(e,t){const n=Ie(e,t+4);if(n>Ee)throw new Error(`Cannot read uint64 with high order part ${n}, because the result would exceed Number.MAX_SAFE_INTEGER.`);return n*ye+Ie(e,t)}class De{constructor(e){this.batchData=e;const t=new Ne(e);this.arrayRangeReader=new ke(e),this.arrayBuilderSegmentReader=new Fe(e),this.diffReader=new Ce(e),this.editReader=new Ae(e,t),this.frameReader=new Te(e,t)}updatedComponents(){return we(this.batchData,this.batchData.length-20)}referenceFrames(){return we(this.batchData,this.batchData.length-16)}disposedComponentIds(){return we(this.batchData,this.batchData.length-12)}disposedEventHandlerIds(){return we(this.batchData,this.batchData.length-8)}updatedComponentsEntry(e,t){const n=e+4*t;return we(this.batchData,n)}referenceFramesEntry(e,t){return e+20*t}disposedComponentIdsEntry(e,t){const n=e+4*t;return we(this.batchData,n)}disposedEventHandlerIdsEntry(e,t){const n=e+8*t;return Se(this.batchData,n)}}class Ce{constructor(e){this.batchDataUint8=e}componentId(e){return we(this.batchDataUint8,e)}edits(e){return e+4}editsEntry(e,t){return e+16*t}}class Ae{constructor(e,t){this.batchDataUint8=e,this.stringReader=t}editType(e){return we(this.batchDataUint8,e)}siblingIndex(e){return we(this.batchDataUint8,e+4)}newTreeIndex(e){return we(this.batchDataUint8,e+8)}moveToSiblingIndex(e){return we(this.batchDataUint8,e+8)}removedAttributeName(e){const t=we(this.batchDataUint8,e+12);return this.stringReader.readString(t)}}class Te{constructor(e,t){this.batchDataUint8=e,this.stringReader=t}frameType(e){return we(this.batchDataUint8,e)}subtreeLength(e){return we(this.batchDataUint8,e+4)}elementReferenceCaptureId(e){const t=we(this.batchDataUint8,e+4);return this.stringReader.readString(t)}componentId(e){return we(this.batchDataUint8,e+8)}elementName(e){const t=we(this.batchDataUint8,e+8);return this.stringReader.readString(t)}textContent(e){const t=we(this.batchDataUint8,e+4);return this.stringReader.readString(t)}markupContent(e){const t=we(this.batchDataUint8,e+4);return this.stringReader.readString(t)}attributeName(e){const t=we(this.batchDataUint8,e+4);return this.stringReader.readString(t)}attributeValue(e){const t=we(this.batchDataUint8,e+8);return this.stringReader.readString(t)}attributeEventHandlerId(e){return Se(this.batchDataUint8,e+12)}}class Ne{constructor(e){this.batchDataUint8=e,this.stringTableStartIndex=we(e,e.length-4)}readString(e){if(-1===e)return null;{const n=we(this.batchDataUint8,this.stringTableStartIndex+4*e),r=function(e,t){let n=0,r=0;for(let o=0;o<4;o++){const a=e[t+o];if(n|=(127&a)<<r,a<128)break;r+=7}return n}(this.batchDataUint8,n),o=n+((t=r)<128?1:t<16384?2:t<2097152?3:4),a=new Uint8Array(this.batchDataUint8.buffer,this.batchDataUint8.byteOffset+o,r);return be(a)}var t}}class ke{constructor(e){this.batchDataUint8=e}count(e){return we(this.batchDataUint8,e)}values(e){return e+4}}class Fe{constructor(e){this.batchDataUint8=e}offset(e){return 0}count(e){return we(this.batchDataUint8,e)}values(e){return e+4}}const Re="__bwv:";let Oe=!1;function _e(e,t){Me("OnRenderCompleted",e,t)}function xe(e,t,n,r,o){Me("BeginInvokeDotNet",e?e.toString():null,t,n,r||0,o)}function Pe(e,t,n){Me("EndInvokeJS",e,t,n)}function Be(e,t){Me("ReceiveByteArrayFromJS",e,btoa(String.fromCharCode.apply(null,t)))}function Le(e,t){return Me("OnLocationChanged",e,t),Promise.resolve()}function Me(e,...t){const n=function(e,t){return Oe?null:`__bwv:${JSON.stringify([e,...t])}`}(e,t);n&&window.external.sendMessage(n)}function He(t,n){const r=Ue(n);e.jsCallDispatcher.receiveByteArray(t,r)}function Ue(e){const t=atob(e),n=t.length,r=new Uint8Array(n);for(let e=0;e<n;e++)r[e]=t.charCodeAt(e);return r}const je={init:function(e,t){t._blazorInputFileNextFileId=0,t.addEventListener("click",(function(){t.value=""})),t.addEventListener("change",(function(){t._blazorFilesById={};const n=Array.prototype.map.call(t.files,(function(e){const n={id:++t._blazorInputFileNextFileId,lastModified:new Date(e.lastModified).toISOString(),name:e.name,size:e.size,contentType:e.type,readPromise:void 0,arrayBuffer:void 0};return t._blazorFilesById[n.id]=n,Object.defineProperty(n,"blob",{value:e}),n}));e.invokeMethodAsync("NotifyChange",n)}))},toImageFile:async function(e,t,n,r,o){const a=ze(e,t),i=await new Promise((function(e){const t=new Image;t.onload=function(){e(t)},t.src=URL.createObjectURL(a.blob)})),s=await new Promise((function(e){var t;const a=Math.min(1,r/i.width),s=Math.min(1,o/i.height),l=Math.min(a,s),c=document.createElement("canvas");c.width=Math.round(i.width*l),c.height=Math.round(i.height*l),null===(t=c.getContext("2d"))||void 0===t||t.drawImage(i,0,0,c.width,c.height),c.toBlob(e,n)})),l={id:++e._blazorInputFileNextFileId,lastModified:a.lastModified,name:a.name,size:(null==s?void 0:s.size)||0,contentType:n,readPromise:void 0,arrayBuffer:void 0};return e._blazorFilesById[l.id]=l,Object.defineProperty(l,"blob",{value:s}),l},ensureArrayBufferReadyForSharedMemoryInterop:async function(e,t){const n=await Je(e,t);ze(e,t).arrayBuffer=n},readFileData:async function(e,t,n,r){const o=await Je(e,t);return new Uint8Array(o,n,r)}};function ze(e,t){const n=e._blazorFilesById[t];if(!n)throw new Error(`There is no file with ID ${t}. The file list may have changed.`);return n}function Je(e,t){const n=ze(e,t);return n.readPromise||(n.readPromise=new Promise((function(e,t){const r=new FileReader;r.onload=function(){e(r.result)},r.onerror=function(e){t(e)},r.readAsArrayBuffer(n.blob)}))),n.readPromise}let $e=!1;async function Ke(){if($e)throw new Error("Blazor has already started.");$e=!0,function(){const t={AttachToDocument:(e,t)=>{!function(e,t,n){const r=document.querySelector(e);if(!r)throw new Error(`Could not find any element matching selector '${e}'.`);!function(e,t,n){let r=Q[0];r||(r=Q[0]=new Y(0)),r.attachRootComponentToLogicalElement(n,t)}(0,A(r,!0),t)}(t,e)},RenderBatch:(e,t)=>{try{const n=Ue(t);(function(e,t){const n=Q[0];if(!n)throw new Error("There is no browser renderer with ID 0.");const r=t.arrayRangeReader,o=t.updatedComponents(),a=r.values(o),i=r.count(o),s=t.referenceFrames(),l=r.values(s),c=t.diffReader;for(let e=0;e<i;e++){const r=t.updatedComponentsEntry(a,e),o=c.componentId(r),i=c.edits(r);n.updateComponent(t,o,i,l)}const u=t.disposedComponentIds(),d=r.values(u),f=r.count(u);for(let e=0;e<f;e++){const r=t.disposedComponentIdsEntry(d,e);n.disposeComponent(r)}const h=t.disposedEventHandlerIds(),p=r.values(h),m=r.count(h);for(let e=0;e<m;e++){const r=t.disposedEventHandlerIdsEntry(p,e);n.disposeEventHandler(r)}ee&&(ee=!1,window.scrollTo&&window.scrollTo(0,0))})(0,new De(n)),_e(e,null)}catch(t){_e(e,t.toString())}},NotifyUnhandledException:(e,t)=>{Oe=!0,console.error(`${e}\n${t}`),async function(){let e=document.querySelector("#blazor-error-ui");e&&(e.style.display="block"),ve||(ve=!0,document.querySelectorAll("#blazor-error-ui .reload").forEach((e=>{e.onclick=function(e){location.reload(),e.preventDefault()}})),document.querySelectorAll("#blazor-error-ui .dismiss").forEach((e=>{e.onclick=function(e){const t=document.querySelector("#blazor-error-ui");t&&(t.style.display="none"),e.preventDefault()}})))}()},BeginInvokeJS:e.jsCallDispatcher.beginInvokeJSFromDotNet,EndInvokeDotNet:e.jsCallDispatcher.endInvokeDotNetFromJS,SendByteArrayToJS:He,Navigate:oe.navigateTo};window.external.receiveMessage((e=>{const n=function(e){if(Oe||!e||!e.startsWith(Re))return null;const t=e.substring(Re.length),[n,...r]=JSON.parse(t);return{messageType:n,args:r}}(e);if(n){if(!t.hasOwnProperty(n.messageType))throw new Error(`Unsupported IPC message type '${n.messageType}'`);t[n.messageType].apply(null,n.args)}}))}(),e.attachDispatcher({beginInvokeDotNetFromJS:xe,endInvokeJSFromDotNet:Pe,sendByteArray:Be}),me._internal.InputFile=je,oe.enableNavigationInterception(),oe.listenForNavigationEvents(Le),Me("AttachPage",oe.getBaseURI(),oe.getLocationHref())}o=function(e,t){Me("DispatchBrowserEvent",e,t)},me.start=Ke,document&&document.currentScript&&"false"!==document.currentScript.getAttribute("autostart")&&Ke()})();