var be=Object.defineProperty;var ye=(d,t,e)=>t in d?be(d,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[t]=e;var c=(d,t,e)=>(ye(d,typeof t!="symbol"?t+"":t,e),e),$t=(d,t,e)=>{if(!t.has(d))throw TypeError("Cannot "+e)};var n=(d,t,e)=>($t(d,t,"read from private field"),e?e.call(d):t.get(d)),a=(d,t,e)=>{if(t.has(d))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(d):t.set(d,e)},f=(d,t,e,i)=>($t(d,t,"write to private field"),i?i.call(d,e):t.set(d,e),e);var u=(d,t,e)=>($t(d,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();var R,lt;const rt=class rt{constructor(){a(this,lt,Array())}getRouters(){return n(this,lt)}map(t,e,i){if(typeof t=="string"&&(t=Array(t)),!Array.isArray(t))throw new Error("Argumnent 1 (verb) needs to be string or array.");if(typeof e!="string")throw new Error("Argumnent 2 (pattern) needs to be a string.");n(this,lt).push({verb:rt.validateVerb(t),pattern:e,controller:i})}get(t,e){this.map("GET",t,e)}post(t,e){this.map("POST",t,e)}static getValidVerbs(){return n(this,R)}static isValidVerb(t){return n(this,R).includes(t)}static validateVerb(t){const e=this;for(let i=0;i<t.length;i++)if(t[i]=t[i].toUpperCase(),!rt.isValidVerb(t[i]))throw new Error('The verb (http method) "'+t[i]+'" is not allowed. Supported verbs: '+n(e,R).join(", "));return t}};R=new WeakMap,lt=new WeakMap,a(rt,R,["GET","POST"]);let xt=rt;var W,H,Z,Et;const At=class At{constructor(){a(this,Z);a(this,W,{})}static open(t,...e){return n(this,H)||f(this,H,new At),typeof t=="string"?n(this,H)[t](...e):n(this,H)}has(t){return u(this,Z,Et).call(this,t)!==!1}isContainer(t){return this.has(t)&&!this.isFactory(t)}isFactory(t){return typeof u(this,Z,Et).call(this,t)=="function"}get(t,...e){let i;if(i=u(this,Z,Et).call(this,t))return this.isFactory(t)?i.apply(this,e):i;throw new Error("Tring to get a container ("+t+") that does not exists")}set(t,e,i){typeof i!="boolean"&&(i=!1);let s;if(!i&&this.has(t))throw s=this.isFactory(t)?"factory":"container",new Error("The "+s+" ("+t+") already defined. Set argument 3 to true to overwrite, with caution; it may remove key functionalities.");return n(this,W)[t]=e,this}setFactory(t,e,i){if(typeof i!="boolean"&&(i=!1),!i&&this.has(t))throw this.isFactory(t)?new Error("The factory ("+t+") has already been defined. If you want to overwrite the factory then set overwrite argument to true."):new Error("("+t+") Has already been defined, but has been defined as a container and not factory. If you want to overwrite the container as factory then set overwrite argument to true.");return n(this,W)[t]=e,this}};W=new WeakMap,H=new WeakMap,Z=new WeakSet,Et=function(t){return n(this,W)[t]??!1},a(At,H,void 0);let Ct=At;var Q;const K=class K{constructor(t){c(this,"compType","");a(this,Q,void 0);c(this,"type","");c(this,"label","");c(this,"description","");c(this,"name","");c(this,"attr",{});c(this,"config",{});c(this,"fields",{});c(this,"items",{});c(this,"value","");c(this,"hasFields",!1);c(this,"data",{});if(typeof t!="string"&&typeof t!="number")throw new Error("Argumnent 1: The type/key component name should be a string value and not ("+typeof t+").");return this.type=t,this}static form(t,e){let i=new K(t);return i.compType="form",i.setType("text"),i.setName(t),i.merge(e)}static view(t,e){if(typeof e!="object")throw new Error("Argumnent 2 (view object data): In StratoxItem.view is required and should be an object");let i=new K(t);return i.compType="view",i.setData(e),i.setName(t),i}static fromData(t,e){return new K(t).merge(e)}setContainer(t){if(!(t instanceof Ct))throw new Error("Must be an intsance of StratoxContainer");f(this,Q,t)}getType(){return this.type}getName(){return this.name}getCompType(){return this.compType}setLabel(t){if(typeof t!="string"&&typeof t!="number")throw new Error("Argumnent 1: Is not a string or number");return this.label=t,this}setDescription(t){if(typeof t!="string"&&typeof t!="number")throw new Error("Argumnent 1: Is not a string or number");return this.description=t,this}setType(t){if(typeof t!="string"&&typeof t!="number")throw new Error("Argumnent 1: Is not a string or number");return this.type=t,this}setName(t){if(typeof t!="string"&&typeof t!="number")throw new Error("Argumnent 1: Is not a string or number");return this.name=t,this}setAttr(t){if(typeof t!="object")throw new Error("Argumnent 1: Is not a object");return this.attr=t,this}setConfig(t){if(typeof t!="object")throw new Error("Argumnent 1: Is not a object");return this.config=t,this}setFields(t){if(this.hasFields=!0,typeof t!="object")throw new Error("Argumnent 1: Is not a object");let e={};for(const[i,s]of Object.entries(t))s instanceof K?e[s.getName()]=s.get():e[i]=s;return this.fields=e,this}setItems(t){if(typeof t!="object")throw new Error("Argumnent 1: Is not a object");return this.items=t,this}setValue(t){if(typeof t!="string"&&typeof t!="number")throw new Error("Argumnent 1 is not a string or number");return this.value=t,this}setData(t){if(typeof t!="object")throw new Error("Argumnent 1: Is not a object");return this.data=t,this}set(t){return this.compType==="form"?typeof t=="function"?t(this):Object.assign(this,t):typeof t=="function"?t(this.data):Object.assign(this.data,t),this}getObj(){return{type:this.type,label:this.label,description:this.description,name:this.name,attr:this.attr,config:this.config,fields:this.fields,items:this.items,data:this.data,hasFields:this.hasFields,value:this.value}}merge(t){return Object.assign(this,t),this}get(){let t=this.getObj();return Object.assign(t,this.data),t}update(){n(this,Q)&&n(this,Q).get("view").update()}};Q=new WeakMap;let G=K;var X,A,ht,ct,zt,St,ne,It,re,ft,Jt,Vt,oe,Pt,ae;const ot=class ot{constructor(t,e,i,s){a(this,ct);a(this,St);a(this,It);a(this,ft);a(this,Vt);a(this,Pt);c(this,"json");c(this,"value","");c(this,"label","");c(this,"description","");c(this,"values",null);c(this,"name","");c(this,"nameJoin","");c(this,"nameSplit",Array());c(this,"index",0);c(this,"key");c(this,"fields",{});c(this,"attr",{});c(this,"hasFields",!0);c(this,"config",{});c(this,"configList",{});c(this,"settings",{});c(this,"containerInst");a(this,X,{});a(this,A,void 0);a(this,ht,!1);this.json=t,this.key=e,this.settings=i,this.containerInst=s}static setComponent(t,e){if(typeof e!="function")throw new Error("The argument 2 in @prepareView has to be a callable");this._factory[t]=e}getComponent(t){return ot._factory[t]?ot._factory[t]:!1}hasComponent(t){return typeof this[t]=="function"||this.getComponent(t)}getAttr(t){typeof t!="object"&&(t={});let e="",i=Object.assign(t,this.attr);for(const[s,r]of Object.entries(i))e+=" "+s+'="'+r+'"';return e}withField(t,e){let i=new this.constructor;const s=G.form(t,e);return Object.assign(i,s.get()),i}setValues(t){return f(this,X,t),this}isIterable(t){return t==null?!1:typeof t[Symbol.iterator]=="function"}isChecked(t){return this.containerInst.get("view").isArray(this.value)?this.value.includes(t):this.value==t}getFieldID(){return"wa-fi-"+this.key+"-"+this.index}hasGroupEvents(){return n(this,ht)}hasExtendedField(){return typeof this.data.fields=="object"&&this.hasFields===!1}groupFactory(t,e){var b;f(this,ht,!0);let i="",s={},r=this,o=0,l=r.nameJoin,h=Object.assign({},r.fields),g=this.getValueLength(1),p=this.config;if(this.containerInst.get("view").isArray(this.value)||(this.value=Array("")),typeof this.value=="object")for(const[w,jt]of Object.entries(this.value)){let j="",L=r.index,T=p.nestedNames!==void 0&&p.nestedNames===!0;if(p.controls!==void 0&&p.controls===!0&&(j+='<div class="group relative card-3 mb-15 rounded border" data-length="'+g+'">',j+='<a class="wa-field-group-delete-btn form-group-icon inline-block pad right-0 top-0 absolute z-10" data-name="'+l+'" data-key="'+r.key+'" data-index="'+L+'" data-position="'+w+'" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" height="12" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"><path d="M2 30 L30 2 M30 30 L2 2" /></svg></a>',j+='<a class="wa-field-group-btn form-group-icon before inline-block pad top-0 middle-x absolute z-10" data-name="'+l+'" data-key="'+r.key+'" data-index="'+L+'" data-position="'+w+'" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" height="12" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"><path d="M16 2 L16 30 M2 16 L30 16" /></svg></a>'),typeof h=="object")for(const[N,J]of Object.entries(h)){let F=T?l+","+o+","+N:N;s[F]=J,j+=u(b=r,ct,zt).call(b,s,!1),s={}}o++,p.controls!==void 0&&p.controls===!0&&(j+='<a class="wa-field-group-btn form-group-icon after inline-block pad bottom-0 middle-x absolute z-10" data-name="'+l+'" data-key="'+r.key+'" data-index="'+L+'" data-position="'+w+'" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" height="12" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"><path d="M16 2 L16 30 M2 16 L30 16" /></a>',j+="</div>"),i+=t(j,jt)}return i}get(){return u(this,ct,zt).call(this,this.json)}getValidateItem(t){return this.data&&this.data.validate&&this.data.validate[t]?this.data.validate[t]:!1}getValidation(t,e){let i;return(i=this.getValidateItem(t))&&i[e]!==void 0?i[e]:!1}getValueLength(t){let e=0;return this.value&&this.containerInst.get("view").isArray(this.value)&&(e=this.value.length),typeof t=="number"&&e<=t&&(e=t),e}isPromise(t){return!!(t&&typeof t.then=="function")}};X=new WeakMap,A=new WeakMap,ht=new WeakMap,ct=new WeakSet,zt=function(t,e){let i="";if(t)for(const[s,r]of Object.entries(t)){this.data=r,this.name=typeof this.data.name=="string"?this.data.name:s;const o=u(this,St,ne).call(this,e);if(this.isPromise(o))return o;i+=o}return i},St=new WeakSet,ne=function(t){this.value=typeof this.data.value=="string"?this.data.value:"",this.label=typeof this.data.label=="string"?this.data.label:"",this.description=typeof this.data.description=="string"?this.data.description:"",this.attr=typeof this.data.attr=="object"?this.data.attr:{},this.fields=typeof this.data.fields=="object"?this.data.fields:{},this.config=typeof this.data.config=="object"?this.data.config:{},this.hasFields=typeof this.data.hasFields=="boolean"?this.data.hasFields:!1,Object.assign(this.configList,this.config),u(this,Pt,ae).call(this),this.attr["data-name"]=this.nameJoin,u(this,Vt,oe).call(this);let e,i;if(typeof this[this.data.type]=="function"||(i=this.getComponent(this.data.type))){const s=u(this,ft,Jt).call(this);return typeof i=="function"?e=i.apply(this.containerInst.get("view"),[this.data.data??{},this.containerInst,s,this]):e=u(this,It,re).call(this,this.data.type),this.index++,e||""}else this.containerInst.get("view").observer().stop(),console.error('The component/view named "'+this.data.type+'" does not exist.')},It=new WeakSet,re=function(t){const e=u(this,ft,Jt).call(this);return this[t](e)},ft=new WeakSet,Jt=function(){return n(this,A)||(f(this,A,this.containerInst.get("view")._getConfig("handlers").helper),typeof n(this,A)=="function"&&f(this,A,n(this,A).call(this,this))),n(this,A)},Vt=new WeakSet,oe=function(){this.values&&f(this,X,this.values);let t=n(this,X),e,i=this.nameSplit,s=i.length-1,r=i[s];t||(t={});for(let o=0;o<s;o++)e=i[o],t[e]!==void 0&&(t=t[e]);return t[r]!==void 0?this.value=t[r]:Object.entries(this.fields).length>0?t[r]=[{}]:(typeof t[r]!="object"&&(t={}),t[r]="",this.value||(this.value="")),t},Pt=new WeakSet,ae=function(){this.nameJoin=this.name;let t=this.name.split(","),e="";if(this.nameSplit=this.name.split(","),t.length>1){e=t.shift();for(let i=0;i<t.length;i++)e+="["+t[i]+"]";this.name=e}},c(ot,"_factory",{});let Tt=ot;class we extends Tt{container(t){let e="",i="";return(this.getValidation("length",0)>0||this.getValidation("hasLength",1)>0)&&(e="*"),i='<div id="'+this.getFieldID()+'" class="mb field-'+this.nameJoin+'" data-index="'+this.index+'">',this.label&&(i+="<label>"+this.label+e+'<div class="message hide"></div></label>'),this.description&&(i+='<div class="description legend">'+this.description+"</div>"),i+=t(),i+="</div>",i}input(t){typeof t!="object"&&(t={});let e="",i=Object.assign({type:"text",name:this.name,value:this.value,"data-index":this.index},t),s=typeof this.attr.type=="string"?this.attr.type:null,r=this.getAttr(i);return s==="password"&&(e+='<div class="relative">',e+='<a class="abs right block middle over-1 pad wa-show-password-btn" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="17" cy="15" r="1"/><circle cx="16" cy="16" r="6"/><path d="M2 16S7 6 16 6s14 10 14 10-5 10-14 10S2 16 2 16Z"/></svg></a>'),e+="<input"+r+">",s==="password"&&(e+="</div>"),e}text(t){let e=this;return this.container(function(){return e.input()})}password(){let t=this;return this.container(function(){return t.input({type:"password"})})}date(){let t=this;return this.container(function(){return t.input({type:"date"})})}datetime(){let t=this;return this.container(function(){return t.input({type:"datetime-local"})})}hidden(){return this.input({type:"hidden"})}textarea(){let t=this,e=this.getAttr({name:this.name,"data-index":this.index});return this.container(function(){return"<textarea"+e+">"+t.value+"</textarea>"})}select(){let t=this,e=this.attr&&this.attr.multiple?this.name+"[]":this.name,i=this.getAttr({name:e,"data-index":this.index});return this.container(function(){let s="<select"+i+' autocomplete="off">';if(typeof t.data.items=="object")for(const[r,o]of Object.entries(t.data.items)){let l=t.isChecked(r)?' selected="selected"':"";s+='<option value="'+r+'"'+l+">"+o+"</option>"}else console.warn("Object items parameter is missing.");return s+="</select>",s})}radio(){let t=this,e=this.getAttr({type:"radio",name:this.name,"data-index":this.index});return this.container(function(){let i="";if(typeof t.data.items=="object")for(const[s,r]of Object.entries(t.data.items)){let o=t.isChecked(s)?' checked="checked"':"";i+='<label class="radio items small"><input'+e+' value="'+s+'"'+o+'><span class="title">'+r+"</span></label>"}else console.warn("Object items parameter is missing.");return i})}checkbox(){let t=this,e=Object.keys(t.data.items).length,i=this.getAttr({type:"checkbox",name:e>1?this.name+"[]":this.name,"data-index":this.index});return this.container(function(){let s="";if(typeof t.data.items=="object")for(const[r,o]of Object.entries(t.data.items)){let l=t.isChecked(r)?' checked="checked"':"";s+='<label class="checkbox items small"><input'+i+' value="'+r+'"'+l+'><span class="title">'+o+"</span></label>"}else console.warn("Object items parameter is missing.");return s})}submit(t){let e=Object.assign({type:"submit",name:this.name,value:this.value},t);return"<input"+this.getAttr(e)+">"}group(){let t="";return t+='<div class="mb-20 wa-advanced-grouped-field">',this.groupFactory(function(e,i){t+=e},!0),t+="</div>",t}}class ve extends we{text(){let t=this;return this.container(function(){return t.input()})}}function je(d,t,e,i){return`
    <header id="header" class="border-bottom">
        <figure id="logo" class="headline-6 m-0">
            Startox
        </figure>
    	<nav>
            <ul>
                <li><a href="#">Start</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact/12">Contact</a></li>
            </ul>
        </nav>
    </section>
    `}const Ee="modulepreload",Oe=function(d){return"/"+d},se={},le=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){const r=document.getElementsByTagName("link");s=Promise.all(e.map(o=>{if(o=Oe(o),o in se)return;se[o]=!0;const l=o.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(!!i)for(let b=r.length-1;b>=0;b--){const w=r[b];if(w.href===o&&(!l||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${h}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":Ee,l||(p.as="script",p.crossOrigin=""),p.href=o,document.head.appendChild(p),l)return new Promise((b,w)=>{p.addEventListener("load",b),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>t()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};var D,k,B;const at=class at{constructor(t){a(this,D,{});a(this,k,{});a(this,B,[]);c(this,"_notified");typeof t=="object"&&f(this,D,t)}set(t){let e,i=this;typeof t=="function"?(e=t(n(i,k)),Object.assign(n(i,k),e)):Object.assign(n(i,k),t)}factory(t){return n(this,B).push(t),this}listener(){let t=this;return f(this,k,new Proxy(n(this,D),{set:function(e,i,s){return e[i]=s,t.notify(),!0}})),this}notify(){let t=this;if(typeof n(this,B)=="object")for(const[e,i]of Object.entries(n(this,B)))i(n(t,D));typeof at._notified=="function"&&at._notified(n(t,D))}static notified(t){at._notified=t}stop(){f(this,D,{}),f(this,k,{}),f(this,B,[])}};D=new WeakMap,k=new WeakMap,B=new WeakMap;let Ft=at;var Yt,C,y,v,Lt,S,E,I,V,O,P,Y,_,U,tt,Dt,he,kt,ce,Nt,fe,qt,ue,ut,Kt;const m=class m{constructor(t){a(this,kt);a(this,Nt);a(this,qt);a(this,ut);a(this,Yt,void 0);a(this,C,void 0);a(this,y,{});a(this,v,void 0);a(this,Lt,{});a(this,S,[]);a(this,E,void 0);a(this,I,{});a(this,V,{});a(this,O,void 0);a(this,P,void 0);a(this,Y,void 0);a(this,_,void 0);a(this,U,!1);typeof t=="string"&&f(this,E,this.setSelector(t)),f(this,I,{}),f(this,P,new Ct),n(this,P).set("view",this)}static setConfigs(t){Object.assign(n(this,tt),t)}static getConfigs(t){return typeof t=="string"?n(m,tt)[t]:n(m,tt)}static getFormHandler(){const t=m.getConfigs("handlers").fields;if(t==null)return Tt;if(typeof(t==null?void 0:t.setComponent)!="function")throw new Error("The form handler needs to be extending to the class StratoxBuilder!");return t}static setComponent(t,e){if(typeof e!="function")throw new Error("The argument 2 in @setComponent has to be a callable");m.getFormHandler().setComponent(t,e,this)}withComponent(t,e){m.setComponent(t,e)}static prepareView(t,e){m.setComponent(t,e)}static create(t,e,i){const s=u(this,Dt,he).call(this,t),r=new m(s.elem);let o={container:!1,before:!1,complete:!1};if(r.view(s.name,e).setContainer(n(r,P)),typeof i=="function")o.complete=i;else{if(Object.assign(o,i),typeof o.container=="object")for(const[h,g]of Object.entries(o.container))r.container().set(h,g);typeof o.before=="function"&&o.before(r,e)}return r.execute(o.complete),r}open(t){return new m(t)}withView(t,e,i){if(typeof t=="function"||typeof t=="object"){const s=u(this,ut,Kt).call(this,t);m.setComponent(s.name,s.func),t=s.name}return m.create(t,e,i)}partial(t,e,i){return this.withView(t,e,i).getResponse()}static withObserver(){return Ft}_getConfig(t){return m.getConfigs(t)}setElement(t){f(this,E,this.setSelector(t))}container(){return n(this,P)}group(t,e){return m.setComponent(t,function(i,s,r,o){let l=e.apply(this.open(),[i,s,r,o]);if(l instanceof m&&(l=l.execute()),typeof l!="string")throw new Error("The Stratox @group method needs to return a string or and instance of Stratox.");return l}),this.view(t)}view(t,e){if(typeof t=="function"||typeof t=="object"){const s=u(this,ut,Kt).call(this,t);m.setComponent(s.name,s.func),t=s.name}let i=n(this,y)[t]&&n(this,y)[t].data?n(this,y)[t].data:{};return Object.assign(i,e),n(this,V)[t]=u(this,kt,ce).call(this,t,i),n(this,V)[t]}form(t,e){let i=n(this,y)[t]?n(this,y)[t]:{};return Object.assign(i,e),n(this,V)[t]=G.form(t,e),n(this,V)[t]}read(){return n(this,y)}update(t,e){return t===void 0?(n(this,v).notify(),this):(t instanceof G?n(this,y)[t.getName()]=t:typeof e=="function"?e(n(this,y)[t]):n(this,y)[t]=e,n(this,v).set(n(this,y)),this)}hasView(){return typeof n(this,O)=="string"}getResponse(){return n(this,O)??""}eventOnload(t){setTimeout(t,1)}setValues(t){if(typeof t!="object")throw new Error("The argument 1 has to be an object");f(this,I,t)}add(t,e){return t instanceof G?n(this,y)[t.getName()]=t:n(this,y)[t]=e,this}getElement(){return n(this,E)}getViewCount(){return m.viewCount}async build(t){let e=this,i="";const s=m.getFormHandler();f(this,C,new s(n(this,y),"view",m.getConfigs(),n(this,P))),n(this,C).setValues(n(this,I)),i=m.getConfigs("directory"),i.endsWith("/")||(i+="/");for(const[r,o]of Object.entries(n(this,y)))if(!n(e,C).hasComponent(o.type))if(o.compType!=="form"){const l=r.split("#"),h=l[0],g=n(e,C).hasComponent(h);if(n(e,S).push(!1),g)s.setComponent(r,g);else{const p=await le(()=>{var b;return import(i+h+".js"+u(b=e,qt,ue).call(b))},__vite__mapDeps([]));for(const[b,w]of Object.entries(p))s.setComponent(r,w)}n(e,S)[n(e,S).length-1]=!0,n(e,Lt)[h]=!0}else console.warn(`To use the field item ${o.type} you need to specify a formHandler in config!`);n(e,S)[n(e,S).length-1]?typeof t=="function"&&t(n(e,C)):n(e,S).length===0&&n(e,C)&&typeof t=="function"&&t(n(e,C))}execute(t){let e=this;if(typeof n(this,v)=="object")return n(this,v).notify(),this.getResponse();if(Object.keys(n(this,V)).length>0)for(const[i,s]of Object.entries(n(this,V)))e.add(s);return f(this,v,new Ft(n(this,y))),e.build(function(i){n(e,v).factory(function(s,r){m.viewCount++,f(e,O,i.get()),Promise.resolve(n(e,O)).then(function(o){f(e,O,o),n(e,E)&&typeof n(e,O)=="string"&&n(e,O)&&e.insertHtml()})}),n(e,v).listener().notify(),f(e,U,!1),i.hasGroupEvents()&&n(e,E)&&(e.bindEvent(n(e,E),"input",function(s){let r=this.dataset.name,o=this.getAttribute("type"),l=this.value??"";(o==="checkbox"||o==="radio")&&(l=this.checked?l:0),e.editFieldValue(r,l)}),e.bindEvent(n(e,E),"click",".wa-field-group-btn",function(s){s.preventDefault();const r=this.dataset.name,o=parseInt(this.dataset.position);e.addGroupField(r,o,this.classList.contains("after"))}),e.bindEvent(n(e,E),"click",".wa-field-group-delete-btn",function(s){s.preventDefault();const r=this.dataset.name,o=parseInt(this.dataset.position);e.deleteGroupField(r,o,this.classList.contains("after"))})),typeof t=="function"&&t.apply(e,[n(e,v)])}),this.getResponse()}modifyValue(t,e,i){let s=t;for(let o=0;o<e.length-1;o++){const l=e[o];(s[l]===void 0||typeof s[l]!="object")&&(s[l]={}),s=s[l]}const r=e[e.length-1];i(s,r)}observer(){return n(this,v)}addGroupField(t,e,i){let s=this,r=t.split(","),o=n(this,I);return i&&(e+=1),this.modifyValue(o,r,function(l,h){s.isArray(l[h])||(l[h]=Object.values(l[h])),l[h].splice(e,0,{})}),n(this,v).notify(),o}deleteGroupField(t,e){let i=t.split(","),s=n(this,I);return this.modifyValue(s,i,function(r,o){r[o].length>1&&r[o].splice(e,1)}),n(this,v).notify(),s}editFieldValue(t,e){let i=Array(),s=n(this,I);return typeof t=="string"&&(i=t.split(",")),this.modifyValue(s,i,function(r,o){r[o]=e}),s}insertHtml(){let t=this;m.getConfigs("popegation")===!1||!n(t,U)?(f(t,U,!0),t.html(n(t,O))):(n(t,Y)!==void 0&&clearTimeout(n(t,Y)),f(t,Y,setTimeout(function(){f(t,U,!1),t.html(n(t,O))},0)))}renderMustache(t,e){return t.replace(/{{(.*?)}}/g,function(i,s){return e[s.trim()]||""})}setSelector(t){return typeof t=="object"?[t]:t.indexOf("#")===0?[document.getElementById(t.substring(1))]:document.querySelectorAll(t)}html(t){n(this,E).forEach(function(e){e.innerHTML=t})}bindEvent(...t){let e,i,[s,r,...o]=t;typeof s=="string"&&(s=this.setSelector(s)),i=e=o[0],typeof e!="function"&&(e=o[1]),s.forEach(function(l){if(l){const h=function(g){let p=g.target;typeof i=="string"&&(p=g.target.closest(i)),p&&e.apply(p,[g,p])};l.addEventListener(r,h),l.off=function(){l.removeEventListener(r,h)}}})}isArray(t){return typeof t!="object"?!1:Array.isArray(t)}};Yt=new WeakMap,C=new WeakMap,y=new WeakMap,v=new WeakMap,Lt=new WeakMap,S=new WeakMap,E=new WeakMap,I=new WeakMap,V=new WeakMap,O=new WeakMap,P=new WeakMap,Y=new WeakMap,_=new WeakMap,U=new WeakMap,tt=new WeakMap,Dt=new WeakSet,he=function(t){let e,i=null,s;if(typeof t=="object"){if(s=Object.keys(t),typeof s[0]!="string")throw new Error('Unrecognizable identifier type. Should be string (view name) or { viewName: "#element" }');e=s[0],i=t[e]??null}else if(typeof t=="string")e=t;else throw new Error('Unrecognizable identifier type. Should be string (view name) or { viewName: "#element" }');return{name:e,elem:i}},kt=new WeakSet,ce=function(t,e){let i=G.view(t,e);return i.setContainer(n(this,P)),i},Nt=new WeakSet,fe=function(){return n(this,_)||f(this,_,new Date().getTime()),n(this,_)},qt=new WeakSet,ue=function(){return m.getConfigs("cache")===!1?"?v="+u(this,Nt,fe).call(this):""},ut=new WeakSet,Kt=function(t){if(typeof t=="object"){const e=Object.keys(t),i=t[e[0]];return{name:i.name+"#"+e[0],func:i}}return{name:t.name,func:t}},a(m,Dt),c(m,"viewCount",0),a(m,tt,{directory:"",handlers:{fields:null,helper:function(t){}},cache:!1,popegation:!0});let nt=m;var dt,et,$,z,_t,pt,Mt,de,Gt,pe,it,Ot,mt,Rt,gt,Wt,Ht,me,Bt,ge,bt,Zt,yt,Qt;class xe{constructor(t={}){a(this,Mt);a(this,Gt);a(this,it);a(this,mt);a(this,gt);a(this,Ht);a(this,Bt);a(this,bt);a(this,yt);a(this,dt,["GET","POST"]);a(this,et,"dispatched");a(this,$,void 0);a(this,z,{});a(this,_t,void 0);a(this,pt,{});f(this,pt,Object.assign(t,{enablePostRequest:!0})),this.unbind=u(this,gt,Wt).call(this,"popstate",u(this,it,Ot).bind(this)),f(this,$,u(this,mt,Rt).call(this))}navTo(t,e={}){return this.pushState(t,{method:"GET",request:{get:e,post:{}}}),e}postTo(t,e={}){let i=e;return e instanceof FormData||(i=this.objToFormData(e)),this.pushState(t,{method:"POST",request:{get:{},post:i}}),i}pushState(t,e={}){if(e=u(this,yt,Qt).call(this,e),e.method=e.method.toUpperCase(),!n(this,dt).includes(e.method))throw new Error('The verb (http method) "'+e.method+'" is not allowed. Supported verbs: '+n(this,dt).join(", "));history.pushState(e,"",t),u(this,it,Ot).call(this)}refreshState(){u(this,it,Ot).call(this)}objToFormData(t){const e=new FormData;for(const[i,s]of Object.entries(t))e.append(i,s);return e}dispatcher(t,e){const i=this;u(this,Mt,de).call(this),i.state(function(s){var h,g,p,b,w;const r=Object.assign((s==null?void 0:s.query)??{},((h=s==null?void 0:s.state)==null?void 0:h.request.get)??{});f(i,z,u(b=i,yt,Qt).call(b,Object.assign((s==null?void 0:s.state)??{},{request:{get:r,post:((p=(g=s==null?void 0:s.state)==null?void 0:g.request)==null?void 0:p.post)??{}}})));const o=i.validateDispatch(t,n(i,z).method,s.hash),l=u(w=i,bt,Zt).call(w,o);e.apply(i,[l,l.status])}),this.dispatch()}validateDispatch(t,e,i){var h,g,p,b,w,jt;if(!(t instanceof xt))throw new Error("The first function argumnets is expected to be an instance of Startox Router class.");const s=this,r=t.getRouters(),o=i.split("/");let l=404;for(let j=0;j<r.length;j++){let L,T,N=Array(),J={};const F=u(h=s,Ht,me).call(h,r[j].pattern).split("/");if(r[j].verb.includes(e))for(let x=0;x<o.length;x++){const Ut=F[x]??(F==null?void 0:F[F.length-1]);if(Ut!==void 0){const q=u(g=s,Gt,pe).call(g,Ut);if(L=o[x]===Ut,q[0]?(T=o[x].match(q[0]),T=T&&T[0]&&o.length>=F.length,T&&(q[1]&&(J[q[1]]?J[q[1]].push(o[x]):J[q[1]]=[o[x]]),N.push(o[x])),q[2]!==".+"&&delete F[x]):L&&N.push(o[x]),!L&&!T)break}}if(L||T)return u(this,bt,Zt).call(this,{verb:e,status:o.length===N.length?200:404,controller:r[j].controller,path:N,vars:J,request:{get:(b=(p=n(this,z))==null?void 0:p.request)==null?void 0:b.get,post:(jt=(w=n(this,z))==null?void 0:w.request)==null?void 0:jt.post}})}return{status:l}}dispatch(){return this.eventEmitter(n(this,et),{...n(this,$)})}unbind(){this.unbind()}parseStr(t){return[...new URLSearchParams(t).entries()].reduce((e,[i,s])=>Object.assign(e,{[i]:s}),{})}eventEmitter(t,...e){const i={args:e},s=new CustomEvent(t,{detail:i});window.dispatchEvent(s)}state(t){return u(this,gt,Wt).call(this,n(this,et),i=>{t({...i})})}}dt=new WeakMap,et=new WeakMap,$=new WeakMap,z=new WeakMap,_t=new WeakMap,pt=new WeakMap,Mt=new WeakSet,de=function(){const t=this;n(this,pt).enablePostRequest&&document.addEventListener("submit",function(e){e.preventDefault();const i=e.target,s=new FormData(i);t.postTo(i.action,s)})},Gt=new WeakSet,pe=function(t){const e=t.match(/{(.*?)}/g);if(e){const s=e.map(o=>o.slice(1,-1))[0].split(":");return[new RegExp("^"+u(this,Bt,ge).call(this,s[s.length-1])+"$"),s.length>1?s[0]:"",s[s.length-1]]}return[]},it=new WeakSet,Ot=function(t){f(this,$,u(this,mt,Rt).call(this,t)),this.eventEmitter(n(this,et),{...n(this,$)})},mt=new WeakSet,Rt=function(t){return{state:(t==null?void 0:t.state)??history.state,href:location.href,path:location.pathname,query:this.parseStr(location.search),hash:location.hash.substring(1)}},gt=new WeakSet,Wt=function(t,e){const i=s=>{var r;return e(...((r=s==null?void 0:s.detail)==null?void 0:r.args)??[])};return window.addEventListener(t,i),()=>window.removeEventListener(t,i)},Ht=new WeakSet,me=function(t){return t.replace(/{[^}]+}/g,(e,i)=>e.replace(/\//g,"[#SC#]"))},Bt=new WeakSet,ge=function(t){return t.replace(/\[#SC#\]/g,"/")},bt=new WeakSet,Zt=function(t){return Object.assign({verb:"GET",status:404,controller:null,path:Array(),vars:{},request:{get:{},post:{}}},t)},yt=new WeakSet,Qt=function(t){return t=Object.assign({method:"GET",request:{get:{},post:{}}},t)};var te,ee,ie,st,wt;const M=class M{constructor(t){a(this,te,void 0);a(this,ee,void 0);a(this,ie,void 0);a(this,st,{});a(this,wt,void 0);nt.setConfigs(t),f(this,st,t)}async main(t,e,i,s){const r=this,o=M.getClass(t.meta);return Promise.resolve(o).then(function(l){let h;switch(t.meta.status){case 404:h=t.meta.status+" Page not found";break;case 405:h=t.meta.status+" Method not allowed";break;default:let g;const p=r.open();if(typeof t.meta.controller=="function"?g=t.meta.controller:g=new l[t.meta.controller[0]]()[t.meta.controller[1]],h=M.createResponse(g.apply(p,[t.meta,t.router])),h===void 0&&(h=""),typeof h!="string")throw new Error("The controller response needs to be string or an instance of Stratox");break}if(typeof t.callable=="function"){let g=t.callable.apply(r,[h,t.meta]);if(typeof h=="string")return M.createResponse(g)}return h})}setElement(t){f(this,wt,t)}setup(t){const e=new M(n(this,st));return e.setElement(t),e}mount(t,e){const i=n(this,wt),s=typeof i=="string"?i:"main",r=new nt(i,n(this,st));nt.setComponent(s,this.main);const o=new xe;return o.dispatcher(t,function(l,h){r.view(s,{meta:l,router:this,callable:e}),r.execute()}),o}static async loadModule(t){try{return await le(()=>import(t),__vite__mapDeps([]))}catch(e){console.error("Module failed to load",e)}}static getClass(t,e){if(t.controller!==null){let i=t.controller[0].split("/"),s=i.pop(),r=i.join("/");return r.length>0&&(r=r+"/"),M.loadModule("./Controllers/"+r+s+".js")}return!1}static createResponse(t){return typeof t=="object"&&typeof t.execute=="function"&&(t=t.execute()),t}};te=new WeakMap,ee=new WeakMap,ie=new WeakMap,st=new WeakMap,wt=new WeakMap;let Xt=M;const Ce=new Xt({directory:"../src/Pages/",handlers:{fields:ve,helper:function(){return{}}}}),vt=new xt;vt.get("",["Pages","start"]);vt.get("{page:about}",["Pages","about"]);vt.get("{page:contact}/{id:[0-9]+}",["Pages","contact"]);vt.post("{page:contact}/{id:[0-9]+}",["Pages","contactPost"]);Ce.setup("#app").mount(vt,function(d){return`
    ${this.partial(je)}
    <main id="main">
        ${d}
    </main>
    `});
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
