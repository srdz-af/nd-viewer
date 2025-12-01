var Up=Object.defineProperty;var Np=(n,t,e)=>t in n?Up(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var pe=(n,t,e)=>Np(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _l="160",nr={ROTATE:0,DOLLY:1,PAN:2},ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fp=0,hc=1,Op=2,Lh=1,Bp=2,Jn=3,Ai=0,tn=1,On=2,Ei=0,Ar=1,dc=2,pc=3,fc=4,kp=5,Bi=100,Vp=101,zp=102,mc=103,gc=104,Hp=200,Gp=201,Wp=202,Xp=203,Xa=204,ja=205,jp=206,qp=207,Yp=208,$p=209,Kp=210,Zp=211,Jp=212,Qp=213,tf=214,ef=0,nf=1,rf=2,wo=3,sf=4,of=5,af=6,lf=7,Dh=0,cf=1,uf=2,Mi=0,hf=1,df=2,pf=3,Ih=4,ff=5,mf=6,Uh=300,Ir=301,Ur=302,qa=303,Ya=304,Oo=306,$a=1e3,Ln=1001,Ka=1002,Je=1003,_c=1004,Qo=1005,wn=1006,gf=1007,ds=1008,Si=1009,_f=1010,vf=1011,vl=1012,Nh=1013,vi=1014,xi=1015,ps=1016,Fh=1017,Oh=1018,Hi=1020,xf=1021,Dn=1023,bf=1024,wf=1025,Gi=1026,Nr=1027,yf=1028,Bh=1029,Ef=1030,kh=1031,Vh=1033,ta=33776,ea=33777,na=33778,ia=33779,vc=35840,xc=35841,bc=35842,wc=35843,zh=36196,yc=37492,Ec=37496,Mc=37808,Sc=37809,Tc=37810,Cc=37811,Ac=37812,Pc=37813,Rc=37814,Lc=37815,Dc=37816,Ic=37817,Uc=37818,Nc=37819,Fc=37820,Oc=37821,ra=36492,Bc=36494,kc=36495,Mf=36283,Vc=36284,zc=36285,Hc=36286,Hh=3e3,Wi=3001,Sf=3200,Tf=3201,Gh=0,Cf=1,Mn="",ze="srgb",si="srgb-linear",xl="display-p3",Bo="display-p3-linear",yo="linear",fe="srgb",Eo="rec709",Mo="p3",rr=7680,Gc=519,Af=512,Pf=513,Rf=514,Wh=515,Lf=516,Df=517,If=518,Uf=519,Wc=35044,Xc="300 es",Za=1035,ti=2e3,So=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],go=Math.PI/180,Ja=180/Math.PI;function ys(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]).toLowerCase()}function $e(n,t,e){return Math.max(t,Math.min(e,n))}function Nf(n,t){return(n%t+t)%t}function sa(n,t,e){return(1-e)*n+e*t}function jc(n){return(n&n-1)===0&&n!==0}function Qa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Kr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ff={DEG2RAD:go};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,r,s,a,o,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],g=i[8],_=r[0],f=r[3],p=r[6],E=r[1],x=r[4],T=r[7],L=r[2],R=r[5],A=r[8];return s[0]=a*_+o*E+l*L,s[3]=a*f+o*x+l*R,s[6]=a*p+o*T+l*A,s[1]=c*_+u*E+h*L,s[4]=c*f+u*x+h*R,s[7]=c*p+u*T+h*A,s[2]=d*_+m*E+g*L,s[5]=d*f+m*x+g*R,s[8]=d*p+m*T+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,g=e*h+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*c-u*i)*_,t[2]=(o*i-r*a)*_,t[3]=d*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(oa.makeScale(t,e)),this}rotate(t){return this.premultiply(oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new Kt;function Xh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Of(){const n=To("canvas");return n.style.display="block",n}const qc={};function us(n){n in qc||(qc[n]=!0,console.warn(n))}const Yc=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$c=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ks={[si]:{transfer:yo,primaries:Eo,toReference:n=>n,fromReference:n=>n},[ze]:{transfer:fe,primaries:Eo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Bo]:{transfer:yo,primaries:Mo,toReference:n=>n.applyMatrix3($c),fromReference:n=>n.applyMatrix3(Yc)},[xl]:{transfer:fe,primaries:Mo,toReference:n=>n.convertSRGBToLinear().applyMatrix3($c),fromReference:n=>n.applyMatrix3(Yc).convertLinearToSRGB()}},Bf=new Set([si,Bo]),ce={enabled:!0,_workingColorSpace:si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Bf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=ks[t].toReference,r=ks[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return ks[n].primaries},getTransfer:function(n){return n===Mn?yo:ks[n].transfer}};function Pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function aa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let sr;class jh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{sr===void 0&&(sr=To("canvas")),sr.width=t.width,sr.height=t.height;const i=sr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=sr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=To("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pr(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pr(e[i]/255)*255):e[i]=Pr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kf=0;class qh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=ys(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(la(r[a].image)):s.push(la(r[a]))}else s=la(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function la(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vf=0;class hn extends Ji{constructor(t=hn.DEFAULT_IMAGE,e=hn.DEFAULT_MAPPING,i=Ln,r=Ln,s=wn,a=ds,o=Dn,l=Si,c=hn.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=ys(),this.name="",this.source=new qh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Wi?ze:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $a:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $a:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?Wi:Hh}set encoding(t){us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Wi?ze:Mn}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Uh;hn.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,i=0,r=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,T=(m+1)/2,L=(p+1)/2,R=(u+d)/4,A=(h+_)/4,K=(g+f)/4;return x>T&&x>L?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=A/i):T>L?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=R/r,s=K/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=A/s,r=K/s),this.set(i,r,s,e),this}let E=Math.sqrt((f-g)*(f-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(f-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zf extends Ji{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(us("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Wi?ze:Mn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends zf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Yh extends hn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Je,this.minFilter=Je,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hf extends hn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Je,this.minFilter=Je,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dn{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==m||u!==g){let f=1-o;const p=l*d+c*m+u*g+h*_,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),R=Math.atan2(L,p*E);f=Math.sin(f*R)/L,o=Math.sin(o*R)/L}const T=o*E;if(l=l*f+d*T,c=c*f+m*T,u=u*f+g*T,h=h*f+_*T,f===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*m-c*d,t[e+1]=l*g+u*d+c*h-o*m,t[e+2]=c*g+u*m+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),h=2*(s*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new C,Kc=new dn;class Qi{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(s,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vs.copy(i.boundingBox)),Vs.applyMatrix4(t.matrixWorld),this.union(Vs)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),zs.subVectors(this.max,Zr),or.subVectors(t.a,Zr),ar.subVectors(t.b,Zr),lr.subVectors(t.c,Zr),ui.subVectors(ar,or),hi.subVectors(lr,ar),Di.subVectors(or,lr);let e=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Di.z,Di.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Di.z,0,-Di.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Di.y,Di.x,0];return!ua(e,or,ar,lr,zs)||(e=[1,0,0,0,1,0,0,0,1],!ua(e,or,ar,lr,zs))?!1:(Hs.crossVectors(ui,hi),e=[Hs.x,Hs.y,Hs.z],ua(e,or,ar,lr,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const jn=[new C,new C,new C,new C,new C,new C,new C,new C],Tn=new C,Vs=new Qi,or=new C,ar=new C,lr=new C,ui=new C,hi=new C,Di=new C,Zr=new C,zs=new C,Hs=new C,Ii=new C;function ua(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ii.fromArray(n,s);const o=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Gf=new Qi,Jr=new C,ha=new C;class Vr{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Gf.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jr.subVectors(t,this.center);const e=Jr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Jr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jr.copy(t.center).add(ha)),this.expandByPoint(Jr.copy(t.center).sub(ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new C,da=new C,Gs=new C,di=new C,pa=new C,Ws=new C,fa=new C;class ko{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){da.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),di.copy(this.origin).sub(da);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Gs),o=di.dot(this.direction),l=-di.dot(Gs),c=di.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(da).addScaledVector(Gs,d),m}intersectSphere(t,e){qn.subVectors(t.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,i,r,s){pa.subVectors(e,t),Ws.subVectors(i,t),fa.crossVectors(pa,Ws);let a=this.direction.dot(fa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,t);const l=o*this.direction.dot(Ws.crossVectors(di,Ws));if(l<0)return null;const c=o*this.direction.dot(pa.cross(di));if(c<0||l+c>a)return null;const u=-o*di.dot(fa);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,r,s,a,o,l,c,u,h,d,m,g,_,f){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,h,d,m,g,_,f)}set(t,e,i,r,s,a,o,l,c,u,h,d,m,g,_,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/cr.setFromMatrixColumn(t,0).length(),s=1/cr.setFromMatrixColumn(t,1).length(),a=1/cr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=a*u,m=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,g=c*u,_=c*h;e[0]=d+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,g=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wf,t,Xf)}lookAt(t,e,i){const r=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),pi.crossVectors(i,ln),pi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),pi.crossVectors(i,ln)),pi.normalize(),Xs.crossVectors(ln,pi),r[0]=pi.x,r[4]=Xs.x,r[8]=ln.x,r[1]=pi.y,r[5]=Xs.y,r[9]=ln.y,r[2]=pi.z,r[6]=Xs.z,r[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],g=i[2],_=i[6],f=i[10],p=i[14],E=i[3],x=i[7],T=i[11],L=i[15],R=r[0],A=r[4],K=r[8],w=r[12],S=r[1],G=r[5],X=r[9],ot=r[13],D=r[2],k=r[6],H=r[10],Y=r[14],j=r[3],q=r[7],$=r[11],st=r[15];return s[0]=a*R+o*S+l*D+c*j,s[4]=a*A+o*G+l*k+c*q,s[8]=a*K+o*X+l*H+c*$,s[12]=a*w+o*ot+l*Y+c*st,s[1]=u*R+h*S+d*D+m*j,s[5]=u*A+h*G+d*k+m*q,s[9]=u*K+h*X+d*H+m*$,s[13]=u*w+h*ot+d*Y+m*st,s[2]=g*R+_*S+f*D+p*j,s[6]=g*A+_*G+f*k+p*q,s[10]=g*K+_*X+f*H+p*$,s[14]=g*w+_*ot+f*Y+p*st,s[3]=E*R+x*S+T*D+L*j,s[7]=E*A+x*G+T*k+L*q,s[11]=E*K+x*X+T*H+L*$,s[15]=E*w+x*ot+T*Y+L*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*m-i*l*m)+_*(+e*l*m-e*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+f*(+e*c*h-e*o*m-s*a*h+i*a*m+s*o*u-i*c*u)+p*(-r*o*u-e*l*h+e*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],E=h*f*c-_*d*c+_*l*m-o*f*m-h*l*p+o*d*p,x=g*d*c-u*f*c-g*l*m+a*f*m+u*l*p-a*d*p,T=u*_*c-g*h*c+g*o*m-a*_*m-u*o*p+a*h*p,L=g*h*l-u*_*l-g*o*d+a*_*d+u*o*f-a*h*f,R=e*E+i*x+r*T+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=E*A,t[1]=(_*d*s-h*f*s-_*r*m+i*f*m+h*r*p-i*d*p)*A,t[2]=(o*f*s-_*l*s+_*r*c-i*f*c-o*r*p+i*l*p)*A,t[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*m-i*l*m)*A,t[4]=x*A,t[5]=(u*f*s-g*d*s+g*r*m-e*f*m-u*r*p+e*d*p)*A,t[6]=(g*l*s-a*f*s-g*r*c+e*f*c+a*r*p-e*l*p)*A,t[7]=(a*d*s-u*l*s+u*r*c-e*d*c-a*r*m+e*l*m)*A,t[8]=T*A,t[9]=(g*h*s-u*_*s-g*i*m+e*_*m+u*i*p-e*h*p)*A,t[10]=(a*_*s-g*o*s+g*i*c-e*_*c-a*i*p+e*o*p)*A,t[11]=(u*o*s-a*h*s-u*i*c+e*h*c+a*i*m-e*o*m)*A,t[12]=L*A,t[13]=(u*_*r-g*h*r+g*i*d-e*_*d-u*i*f+e*h*f)*A,t[14]=(g*o*r-a*_*r-g*i*l+e*_*l+a*i*f-e*o*f)*A,t[15]=(a*h*r-u*o*r+u*i*l-e*h*l-a*i*d+e*o*d)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,g=s*h,_=a*u,f=a*h,p=o*h,E=l*c,x=l*u,T=l*h,L=i.x,R=i.y,A=i.z;return r[0]=(1-(_+p))*L,r[1]=(m+T)*L,r[2]=(g-x)*L,r[3]=0,r[4]=(m-T)*R,r[5]=(1-(d+p))*R,r[6]=(f+E)*R,r[7]=0,r[8]=(g+x)*A,r[9]=(f-E)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=cr.set(r[0],r[1],r[2]).length();const a=cr.set(r[4],r[5],r[6]).length(),o=cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Cn.copy(this);const c=1/s,u=1/a,h=1/o;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,e.setFromRotationMatrix(Cn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=ti){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let m,g;if(o===ti)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===So)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=ti){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(a-s),d=(e+t)*c,m=(i+r)*u;let g,_;if(o===ti)g=(a+s)*h,_=-2*h;else if(o===So)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const cr=new C,Cn=new le,Wf=new C(0,0,0),Xf=new C(1,1,1),pi=new C,Xs=new C,ln=new C,Zc=new le,Jc=new dn;class pn{constructor(t=0,e=0,i=0,r=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class bl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jf=0;const Qc=new C,ur=new dn,Yn=new le,js=new C,Qr=new C,qf=new C,Yf=new dn,tu=new C(1,0,0),eu=new C(0,1,0),nu=new C(0,0,1),$f={type:"added"},Kf={type:"removed"};class Fe extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new C,e=new pn,i=new dn,r=new C(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new Kt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(tu,t)}rotateY(t){return this.rotateOnAxis(eu,t)}rotateZ(t){return this.rotateOnAxis(nu,t)}translateOnAxis(t,e){return Qc.copy(t).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tu,t)}translateY(t){return this.translateOnAxis(eu,t)}translateZ(t){return this.translateOnAxis(nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?js.copy(t):js.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Qr,js,this.up):Yn.lookAt(js,Qr,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(Yn),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent($f)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,t,qf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,Yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Fe.DEFAULT_UP=new C(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new C,$n=new C,ma=new C,Kn=new C,hr=new C,dr=new C,iu=new C,ga=new C,_a=new C,va=new C;let qs=!1;class yn{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),An.subVectors(t,e),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){An.subVectors(r,e),$n.subVectors(i,e),ma.subVectors(t,e);const a=An.dot(An),o=An.dot($n),l=An.dot(ma),c=$n.dot($n),u=$n.dot(ma),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(t,e,i,r,s,a,o,l){return qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qs=!0),this.getInterpolation(t,e,i,r,s,a,o,l)}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(a,Kn.y),l.addScaledVector(o,Kn.z),l)}static isFrontFacing(t,e,i,r){return An.subVectors(i,e),$n.subVectors(t,e),An.cross($n).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),An.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qs=!0),yn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return yn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;hr.subVectors(r,i),dr.subVectors(s,i),ga.subVectors(t,i);const l=hr.dot(ga),c=dr.dot(ga);if(l<=0&&c<=0)return e.copy(i);_a.subVectors(t,r);const u=hr.dot(_a),h=dr.dot(_a);if(u>=0&&h<=u)return e.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(hr,a);va.subVectors(t,s);const m=hr.dot(va),g=dr.dot(va);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(dr,o);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return iu.subVectors(s,r),o=(h-u)/(h-u+(m-g)),e.copy(r).addScaledVector(iu,o);const p=1/(f+_+d);return a=_*p,o=d*p,e.copy(i).addScaledVector(hr,a).addScaledVector(dr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function xa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=ce.workingColorSpace){if(t=Nf(t,1),e=$e(e,0,1),i=$e(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=xa(a,s,t+1/3),this.g=xa(a,s,t),this.b=xa(a,s,t-1/3)}return ce.toWorkingColorSpace(this,r),this}setStyle(t,e=ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const i=$h[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}copyLinearToSRGB(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return ce.fromWorkingColorSpace(Ye.copy(this),t),Math.round($e(Ye.r*255,0,255))*65536+Math.round($e(Ye.g*255,0,255))*256+Math.round($e(Ye.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Ye.copy(this),e);const i=Ye.r,r=Ye.g,s=Ye.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=ze){ce.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,i=Ye.g,r=Ye.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Ys);const i=sa(fi.h,Ys.h,e),r=sa(fi.s,Ys.s,e),s=sa(fi.l,Ys.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new qt;qt.NAMES=$h;let Zf=0;class zr extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=Ar,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=ja,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xa&&(i.blendSrc=this.blendSrc),this.blendDst!==ja&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Hr extends zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new C,$s=new Ut;class fn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Kr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=rn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kr(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kr(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kr(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wc&&(t.usage=this.usage),t}}class Kh extends fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Zh extends fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ke extends fn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Jf=0;const xn=new le,ba=new Fe,pr=new C,cn=new Qi,ts=new Qi,Ve=new C;class Xe extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xh(t)?Zh:Kh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Kt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,i){return xn.makeTranslation(t,e,i),this.applyMatrix4(xn),this}scale(t,e,i){return xn.makeScale(t,e,i),this.applyMatrix4(xn),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ke(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(cn.min,ts.min),cn.expandByPoint(Ve),Ve.addVectors(cn.max,ts.max),cn.expandByPoint(Ve)):(cn.expandByPoint(ts.min),cn.expandByPoint(ts.max))}cn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Ve.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ve));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ve.fromBufferAttribute(o,c),l&&(pr.fromBufferAttribute(t,c),Ve.add(pr)),r=Math.max(r,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let S=0;S<o;S++)c[S]=new C,u[S]=new C;const h=new C,d=new C,m=new C,g=new Ut,_=new Ut,f=new Ut,p=new C,E=new C;function x(S,G,X){h.fromArray(r,S*3),d.fromArray(r,G*3),m.fromArray(r,X*3),g.fromArray(a,S*2),_.fromArray(a,G*2),f.fromArray(a,X*2),d.sub(h),m.sub(h),_.sub(g),f.sub(g);const ot=1/(_.x*f.y-f.x*_.y);isFinite(ot)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(ot),E.copy(m).multiplyScalar(_.x).addScaledVector(d,-f.x).multiplyScalar(ot),c[S].add(p),c[G].add(p),c[X].add(p),u[S].add(E),u[G].add(E),u[X].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let S=0,G=T.length;S<G;++S){const X=T[S],ot=X.start,D=X.count;for(let k=ot,H=ot+D;k<H;k+=3)x(i[k+0],i[k+1],i[k+2])}const L=new C,R=new C,A=new C,K=new C;function w(S){A.fromArray(s,S*3),K.copy(A);const G=c[S];L.copy(G),L.sub(A.multiplyScalar(A.dot(G))).normalize(),R.crossVectors(K,G);const ot=R.dot(u[S])<0?-1:1;l[S*4]=L.x,l[S*4+1]=L.y,l[S*4+2]=L.z,l[S*4+3]=ot}for(let S=0,G=T.length;S<G;++S){const X=T[S],ot=X.start,D=X.count;for(let k=ot,H=ot+D;k<H;k+=3)w(i[k+0]),w(i[k+1]),w(i[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,f),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,f),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[m++]}return new fn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ru=new le,Ui=new ko,Ks=new Vr,su=new C,fr=new C,mr=new C,gr=new C,wa=new C,Zs=new C,Js=new Ut,Qs=new Ut,to=new Ut,ou=new C,au=new C,lu=new C,eo=new C,no=new C;class me extends Fe{constructor(t=new Xe,e=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Zs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(wa.fromBufferAttribute(h,t),a?Zs.addScaledVector(wa,u):Zs.addScaledVector(wa.sub(e),u))}e.add(Zs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(s),Ui.copy(t.ray).recast(t.near),!(Ks.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Ks,su)===null||Ui.origin.distanceToSquared(su)>(t.far-t.near)**2))&&(ru.copy(s).invert(),Ui.copy(t.ray).applyMatrix4(ru),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=a[f.materialIndex],E=Math.max(f.start,m.start),x=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let T=E,L=x;T<L;T+=3){const R=o.getX(T),A=o.getX(T+1),K=o.getX(T+2);r=io(this,p,t,i,c,u,h,R,A,K),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const E=o.getX(f),x=o.getX(f+1),T=o.getX(f+2);r=io(this,a,t,i,c,u,h,E,x,T),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=a[f.materialIndex],E=Math.max(f.start,m.start),x=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let T=E,L=x;T<L;T+=3){const R=T,A=T+1,K=T+2;r=io(this,p,t,i,c,u,h,R,A,K),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const E=f,x=f+1,T=f+2;r=io(this,a,t,i,c,u,h,E,x,T),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function Qf(n,t,e,i,r,s,a,o){let l;if(t.side===tn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Ai,o),l===null)return null;no.copy(o),no.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(no);return c<e.near||c>e.far?null:{distance:c,point:no.clone(),object:n}}function io(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,fr),n.getVertexPosition(l,mr),n.getVertexPosition(c,gr);const u=Qf(n,t,e,i,fr,mr,gr,eo);if(u){r&&(Js.fromBufferAttribute(r,o),Qs.fromBufferAttribute(r,l),to.fromBufferAttribute(r,c),u.uv=yn.getInterpolation(eo,fr,mr,gr,Js,Qs,to,new Ut)),s&&(Js.fromBufferAttribute(s,o),Qs.fromBufferAttribute(s,l),to.fromBufferAttribute(s,c),u.uv1=yn.getInterpolation(eo,fr,mr,gr,Js,Qs,to,new Ut),u.uv2=u.uv1),a&&(ou.fromBufferAttribute(a,o),au.fromBufferAttribute(a,l),lu.fromBufferAttribute(a,c),u.normal=yn.getInterpolation(eo,fr,mr,gr,ou,au,lu,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new C,materialIndex:0};yn.getNormal(fr,mr,gr,h.normal),u.face=h}return u}class Gr extends Xe{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(h,2));function g(_,f,p,E,x,T,L,R,A,K,w){const S=T/A,G=L/K,X=T/2,ot=L/2,D=R/2,k=A+1,H=K+1;let Y=0,j=0;const q=new C;for(let $=0;$<H;$++){const st=$*G-ot;for(let at=0;at<k;at++){const z=at*S-X;q[_]=z*E,q[f]=st*x,q[p]=D,c.push(q.x,q.y,q.z),q[_]=0,q[f]=0,q[p]=R>0?1:-1,u.push(q.x,q.y,q.z),h.push(at/A),h.push(1-$/K),Y+=1}}for(let $=0;$<K;$++)for(let st=0;st<A;st++){const at=d+st+k*$,z=d+st+k*($+1),Z=d+(st+1)+k*($+1),ht=d+(st+1)+k*$;l.push(at,z,ht),l.push(z,Z,ht),j+=6}o.addGroup(m,j,w),m+=j,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ze(n){const t={};for(let e=0;e<n.length;e++){const i=Fr(n[e]);for(const r in i)t[r]=i[r]}return t}function tm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Jh(n){return n.getRenderTarget()===null?n.outputColorSpace:ce.workingColorSpace}const em={clone:Fr,merge:Ze};var nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nm,this.fragmentShader=im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=tm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Qh extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class un extends Qh{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(go*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _r=-90,vr=1;class rm extends Fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(_r,vr,t,e);r.layers=this.layers,this.add(r);const s=new un(_r,vr,t,e);s.layers=this.layers,this.add(s);const a=new un(_r,vr,t,e);a.layers=this.layers,this.add(a);const o=new un(_r,vr,t,e);o.layers=this.layers,this.add(o);const l=new un(_r,vr,t,e);l.layers=this.layers,this.add(l);const c=new un(_r,vr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===So)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class td extends hn{constructor(t,e,i,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ir,super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sm extends ji{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(us("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Wi?ze:Mn),this.texture=new td(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gr(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ei});s.uniforms.tEquirect.value=e;const a=new me(r,s),o=e.minFilter;return e.minFilter===ds&&(e.minFilter=wn),new rm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const ya=new C,om=new C,am=new Kt;class En{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ya.subVectors(i,e).cross(om.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ya),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||am.getNormalMatrix(t),r=this.coplanarPoint(ya).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Vr,ro=new C;class wl{constructor(t=new En,e=new En,i=new En,r=new En,s=new En,a=new En){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ti){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],g=r[9],_=r[10],f=r[11],p=r[12],E=r[13],x=r[14],T=r[15];if(i[0].setComponents(l-s,d-c,f-m,T-p).normalize(),i[1].setComponents(l+s,d+c,f+m,T+p).normalize(),i[2].setComponents(l+a,d+u,f+g,T+E).normalize(),i[3].setComponents(l-a,d-u,f-g,T-E).normalize(),i[4].setComponents(l-o,d-h,f-_,T-x).normalize(),e===ti)i[5].setComponents(l+o,d+h,f+_,T+x).normalize();else if(e===So)i[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ro.x=r.normal.x>0?t.max.x:t.min.x,ro.y=r.normal.y>0?t.max.y:t.min.y,ro.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ro)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ed(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function lm(n,t){const e=t.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,m=h.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,h){const d=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(h,c),m.count===-1&&g.length===0&&n.bufferSubData(h,0,d),g.length!==0){for(let _=0,f=g.length;_<f;_++){const p=g[_];e?n.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class yl extends Xe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=t/o,d=e/l,m=[],g=[],_=[],f=[];for(let p=0;p<u;p++){const E=p*d-a;for(let x=0;x<c;x++){const T=x*h-s;g.push(T,-E,0),_.push(0,0,1),f.push(x/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const x=E+c*p,T=E+c*(p+1),L=E+1+c*(p+1),R=E+1+c*p;m.push(x,T,R),m.push(T,L,R)}this.setIndex(m),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.width,t.height,t.widthSegments,t.heightSegments)}}var cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ym=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Em=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Im=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Um=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ng=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ag=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,n_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,i_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,a_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,m_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,g_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,__=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,P_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,V_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:cm,alphahash_pars_fragment:um,alphamap_fragment:hm,alphamap_pars_fragment:dm,alphatest_fragment:pm,alphatest_pars_fragment:fm,aomap_fragment:mm,aomap_pars_fragment:gm,batching_pars_vertex:_m,batching_vertex:vm,begin_vertex:xm,beginnormal_vertex:bm,bsdfs:wm,iridescence_fragment:ym,bumpmap_pars_fragment:Em,clipping_planes_fragment:Mm,clipping_planes_pars_fragment:Sm,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Cm,color_fragment:Am,color_pars_fragment:Pm,color_pars_vertex:Rm,color_vertex:Lm,common:Dm,cube_uv_reflection_fragment:Im,defaultnormal_vertex:Um,displacementmap_pars_vertex:Nm,displacementmap_vertex:Fm,emissivemap_fragment:Om,emissivemap_pars_fragment:Bm,colorspace_fragment:km,colorspace_pars_fragment:Vm,envmap_fragment:zm,envmap_common_pars_fragment:Hm,envmap_pars_fragment:Gm,envmap_pars_vertex:Wm,envmap_physical_pars_fragment:ng,envmap_vertex:Xm,fog_vertex:jm,fog_pars_vertex:qm,fog_fragment:Ym,fog_pars_fragment:$m,gradientmap_pars_fragment:Km,lightmap_fragment:Zm,lightmap_pars_fragment:Jm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:tg,lights_pars_begin:eg,lights_toon_fragment:ig,lights_toon_pars_fragment:rg,lights_phong_fragment:sg,lights_phong_pars_fragment:og,lights_physical_fragment:ag,lights_physical_pars_fragment:lg,lights_fragment_begin:cg,lights_fragment_maps:ug,lights_fragment_end:hg,logdepthbuf_fragment:dg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:mg,map_fragment:gg,map_pars_fragment:_g,map_particle_fragment:vg,map_particle_pars_fragment:xg,metalnessmap_fragment:bg,metalnessmap_pars_fragment:wg,morphcolor_vertex:yg,morphnormal_vertex:Eg,morphtarget_pars_vertex:Mg,morphtarget_vertex:Sg,normal_fragment_begin:Tg,normal_fragment_maps:Cg,normal_pars_fragment:Ag,normal_pars_vertex:Pg,normal_vertex:Rg,normalmap_pars_fragment:Lg,clearcoat_normal_fragment_begin:Dg,clearcoat_normal_fragment_maps:Ig,clearcoat_pars_fragment:Ug,iridescence_pars_fragment:Ng,opaque_fragment:Fg,packing:Og,premultiplied_alpha_fragment:Bg,project_vertex:kg,dithering_fragment:Vg,dithering_pars_fragment:zg,roughnessmap_fragment:Hg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:jg,shadowmask_pars_fragment:qg,skinbase_vertex:Yg,skinning_pars_vertex:$g,skinning_vertex:Kg,skinnormal_vertex:Zg,specularmap_fragment:Jg,specularmap_pars_fragment:Qg,tonemapping_fragment:t_,tonemapping_pars_fragment:e_,transmission_fragment:n_,transmission_pars_fragment:i_,uv_pars_fragment:r_,uv_pars_vertex:s_,uv_vertex:o_,worldpos_vertex:a_,background_vert:l_,background_frag:c_,backgroundCube_vert:u_,backgroundCube_frag:h_,cube_vert:d_,cube_frag:p_,depth_vert:f_,depth_frag:m_,distanceRGBA_vert:g_,distanceRGBA_frag:__,equirect_vert:v_,equirect_frag:x_,linedashed_vert:b_,linedashed_frag:w_,meshbasic_vert:y_,meshbasic_frag:E_,meshlambert_vert:M_,meshlambert_frag:S_,meshmatcap_vert:T_,meshmatcap_frag:C_,meshnormal_vert:A_,meshnormal_frag:P_,meshphong_vert:R_,meshphong_frag:L_,meshphysical_vert:D_,meshphysical_frag:I_,meshtoon_vert:U_,meshtoon_frag:N_,points_vert:F_,points_frag:O_,shadow_vert:B_,shadow_frag:k_,sprite_vert:V_,sprite_frag:z_},lt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Nn={basic:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ze([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ze([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ze([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ze([lt.points,lt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ze([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ze([lt.common,lt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ze([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ze([lt.sprite,lt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ze([lt.common,lt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ze([lt.lights,lt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Nn.physical={uniforms:Ze([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const so={r:0,b:0,g:0};function H_(n,t,e,i,r,s,a){const o=new qt(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function g(f,p){let E=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),E=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Oo)?(u===void 0&&(u=new me(new Gr(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Fr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=ce.getTransfer(x.colorSpace)!==fe,(h!==x||d!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,m=n.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new me(new yl(2,2),new qi({name:"BackgroundMaterial",uniforms:Fr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ce.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,m=n.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,p){f.getRGB(so,Jh(n)),i.buffers.color.setClear(so.r,so.g,so.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(o,l)},render:g}}function G_(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=f(null);let c=l,u=!1;function h(D,k,H,Y,j){let q=!1;if(a){const $=_(Y,H,k);c!==$&&(c=$,m(c.object)),q=p(D,Y,H,j),q&&E(D,Y,H,j)}else{const $=k.wireframe===!0;(c.geometry!==Y.id||c.program!==H.id||c.wireframe!==$)&&(c.geometry=Y.id,c.program=H.id,c.wireframe=$,q=!0)}j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,K(D,k,H,Y),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,k,H){const Y=H.wireframe===!0;let j=o[D.id];j===void 0&&(j={},o[D.id]=j);let q=j[k.id];q===void 0&&(q={},j[k.id]=q);let $=q[Y];return $===void 0&&($=f(d()),q[Y]=$),$}function f(D){const k=[],H=[],Y=[];for(let j=0;j<r;j++)k[j]=0,H[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:Y,object:D,attributes:{},index:null}}function p(D,k,H,Y){const j=c.attributes,q=k.attributes;let $=0;const st=H.getAttributes();for(const at in st)if(st[at].location>=0){const Z=j[at];let ht=q[at];if(ht===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor)),Z===void 0||Z.attribute!==ht||ht&&Z.data!==ht.data)return!0;$++}return c.attributesNum!==$||c.index!==Y}function E(D,k,H,Y){const j={},q=k.attributes;let $=0;const st=H.getAttributes();for(const at in st)if(st[at].location>=0){let Z=q[at];Z===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const ht={};ht.attribute=Z,Z&&Z.data&&(ht.data=Z.data),j[at]=ht,$++}c.attributes=j,c.attributesNum=$,c.index=Y}function x(){const D=c.newAttributes;for(let k=0,H=D.length;k<H;k++)D[k]=0}function T(D){L(D,0)}function L(D,k){const H=c.newAttributes,Y=c.enabledAttributes,j=c.attributeDivisors;H[D]=1,Y[D]===0&&(n.enableVertexAttribArray(D),Y[D]=1),j[D]!==k&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,k),j[D]=k)}function R(){const D=c.newAttributes,k=c.enabledAttributes;for(let H=0,Y=k.length;H<Y;H++)k[H]!==D[H]&&(n.disableVertexAttribArray(H),k[H]=0)}function A(D,k,H,Y,j,q,$){$===!0?n.vertexAttribIPointer(D,k,H,j,q):n.vertexAttribPointer(D,k,H,Y,j,q)}function K(D,k,H,Y){if(i.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const j=Y.attributes,q=H.getAttributes(),$=k.defaultAttributeValues;for(const st in q){const at=q[st];if(at.location>=0){let z=j[st];if(z===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(z=D.instanceColor)),z!==void 0){const Z=z.normalized,ht=z.itemSize,wt=e.get(z);if(wt===void 0)continue;const xt=wt.buffer,Nt=wt.type,Ft=wt.bytesPerElement,Ct=i.isWebGL2===!0&&(Nt===n.INT||Nt===n.UNSIGNED_INT||z.gpuType===Nh);if(z.isInterleavedBufferAttribute){const Jt=z.data,F=Jt.stride,Ge=z.offset;if(Jt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<at.locationSize;Mt++)L(at.location+Mt,Jt.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Jt.meshPerAttribute*Jt.count)}else for(let Mt=0;Mt<at.locationSize;Mt++)T(at.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let Mt=0;Mt<at.locationSize;Mt++)A(at.location+Mt,ht/at.locationSize,Nt,Z,F*Ft,(Ge+ht/at.locationSize*Mt)*Ft,Ct)}else{if(z.isInstancedBufferAttribute){for(let Jt=0;Jt<at.locationSize;Jt++)L(at.location+Jt,z.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Jt=0;Jt<at.locationSize;Jt++)T(at.location+Jt);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let Jt=0;Jt<at.locationSize;Jt++)A(at.location+Jt,ht/at.locationSize,Nt,Z,ht*Ft,ht/at.locationSize*Jt*Ft,Ct)}}else if($!==void 0){const Z=$[st];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(at.location,Z);break;case 3:n.vertexAttrib3fv(at.location,Z);break;case 4:n.vertexAttrib4fv(at.location,Z);break;default:n.vertexAttrib1fv(at.location,Z)}}}}R()}function w(){X();for(const D in o){const k=o[D];for(const H in k){const Y=k[H];for(const j in Y)g(Y[j].object),delete Y[j];delete k[H]}delete o[D]}}function S(D){if(o[D.id]===void 0)return;const k=o[D.id];for(const H in k){const Y=k[H];for(const j in Y)g(Y[j].object),delete Y[j];delete k[H]}delete o[D.id]}function G(D){for(const k in o){const H=o[k];if(H[D.id]===void 0)continue;const Y=H[D.id];for(const j in Y)g(Y[j].object),delete Y[j];delete H[D.id]}}function X(){ot(),u=!0,c!==l&&(c=l,m(c.object))}function ot(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:ot,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:T,disableUnusedAttributes:R}}function W_(n,t,e,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,h){n.drawArrays(s,u,h),e.update(h,s,1)}function l(u,h,d){if(d===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,h,d),e.update(h,s,d)}function c(u,h,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];e.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function X_(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,T=a||t.has("OES_texture_float"),L=x&&T,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:L,maxSamples:R}}function j_(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new En,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!f)s?u(null):c();else{const E=s?0:i,x=E*4;let T=p.clippingState||null;l.value=T,T=u(g,d,x,m);for(let L=0;L!==x;++L)T[L]=e[L];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const p=m+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,T=m;x!==_;++x,T+=4)a.copy(h[x]).applyMatrix4(E,o),a.normal.toArray(f,T),f[T+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function q_(n){let t=new WeakMap;function e(a,o){return o===qa?a.mapping=Ir:o===Ya&&(a.mapping=Ur),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===qa||o===Ya)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new sm(l.height/2);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class nd extends Qh{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Sr=4,cu=[.125,.215,.35,.446,.526,.582],ki=20,Ea=new nd,uu=new qt;let Ma=null,Sa=0,Ta=0;const Oi=(1+Math.sqrt(5))/2,xr=1/Oi,hu=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Oi,xr),new C(0,Oi,-xr),new C(xr,0,Oi),new C(-xr,0,Oi),new C(Oi,xr,0),new C(-Oi,xr,0)];class tl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ma,Sa,Ta),t.scissorTest=!1,oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ir||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ps,format:Dn,colorSpace:si,depthBuffer:!1},r=du(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y_(s)),this._blurMaterial=$_(s,t,e)}return r}_compileMaterial(t){const e=new me(this._lodPlanes[0],t);this._renderer.compile(e,Ea)}_sceneToCubeUV(t,e,i,r){const o=new un(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(uu),u.toneMapping=Mi,u.autoClear=!1;const m=new Hr({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new me(new Gr,m);let _=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(uu),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;oo(r,E*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Ir||t.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new me(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;oo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ea)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hu[(r-1)%hu.length];this._blur(t,r-1,r,s,a)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new me(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ki-1),_=s/g,f=isFinite(s)?1+Math.floor(u*_):ki;f>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ki}`);const p=[];let E=0;for(let A=0;A<ki;++A){const K=A/_,w=Math.exp(-K*K/2);p.push(w),A===0?E+=w:A<f&&(E+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const T=this._sizeLods[r],L=3*T*(r>x-Sr?r-x+Sr:0),R=4*(this._cubeSize-T);oo(e,L,R,3*T,2*T),l.setRenderTarget(e),l.render(h,Ea)}}function Y_(n){const t=[],e=[],i=[];let r=n;const s=n-Sr+1+cu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Sr?l=cu[a-n+Sr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,f=2,p=1,E=new Float32Array(_*g*m),x=new Float32Array(f*g*m),T=new Float32Array(p*g*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,K=R>2?0:-1,w=[A,K,0,A+2/3,K,0,A+2/3,K+1,0,A,K,0,A+2/3,K+1,0,A,K+1,0];E.set(w,_*g*R),x.set(d,f*g*R);const S=[R,R,R,R,R,R];T.set(S,p*g*R)}const L=new Xe;L.setAttribute("position",new fn(E,_)),L.setAttribute("uv",new fn(x,f)),L.setAttribute("faceIndex",new fn(T,p)),t.push(L),r>Sr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function du(n,t,e){const i=new ji(n,t,e);return i.texture.mapping=Oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oo(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function $_(n,t,e){const i=new Float32Array(ki),r=new C(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function pu(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function fu(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function K_(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===qa||l===Ya,u=l===Ir||l===Ur;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new tl(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){e===null&&(e=new tl(n));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Z_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function J_(n,t,e,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],n.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let x=0,T=E.length;x<T;x+=3){const L=E[x+0],R=E[x+1],A=E[x+2];d.push(L,R,R,A,A,L)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,T=E.length/3-1;x<T;x+=3){const L=x+0,R=x+1,A=x+2;d.push(L,R,R,A,A,L)}}else return;const f=new(Xh(d)?Zh:Kh)(d,1);f.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,f)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Q_(n,t,e,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,g){n.drawElements(s,g,o,m*l),e.update(g,s,1)}function h(m,g,_){if(_===0)return;let f,p;if(r)f=n,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,g,o,m*l,_),e.update(g,s,_)}function d(m,g,_){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(s,g,0,o,m,0,_);let p=0;for(let E=0;E<_;E++)p+=g[E];e.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function tv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function ev(n,t){return n[0]-t[0]}function nv(n,t){return Math.abs(t[1])-Math.abs(n[1])}function iv(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,a=new _e,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let f=s.get(u);if(f===void 0||f.count!==_){let k=function(){ot.dispose(),s.delete(u),u.removeEventListener("dispose",k)};var m=k;f!==void 0&&f.texture.dispose();const x=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],K=u.morphAttributes.color||[];let w=0;x===!0&&(w=1),T===!0&&(w=2),L===!0&&(w=3);let S=u.attributes.position.count*w,G=1;S>t.maxTextureSize&&(G=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const X=new Float32Array(S*G*4*_),ot=new Yh(X,S,G,_);ot.type=xi,ot.needsUpdate=!0;const D=w*4;for(let H=0;H<_;H++){const Y=R[H],j=A[H],q=K[H],$=S*G*4*H;for(let st=0;st<Y.count;st++){const at=st*D;x===!0&&(a.fromBufferAttribute(Y,st),X[$+at+0]=a.x,X[$+at+1]=a.y,X[$+at+2]=a.z,X[$+at+3]=0),T===!0&&(a.fromBufferAttribute(j,st),X[$+at+4]=a.x,X[$+at+5]=a.y,X[$+at+6]=a.z,X[$+at+7]=0),L===!0&&(a.fromBufferAttribute(q,st),X[$+at+8]=a.x,X[$+at+9]=a.y,X[$+at+10]=a.z,X[$+at+11]=q.itemSize===4?a.w:1)}}f={count:_,texture:ot,size:new Ut(S,G)},s.set(u,f),u.addEventListener("dispose",k)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];const E=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}else{const g=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let T=0;T<g;T++)_[T]=[T,0];i[u.id]=_}for(let T=0;T<g;T++){const L=_[T];L[0]=T,L[1]=d[T]}_.sort(nv);for(let T=0;T<8;T++)T<g&&_[T][1]?(o[T][0]=_[T][0],o[T][1]=_[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(ev);const f=u.morphAttributes.position,p=u.morphAttributes.normal;let E=0;for(let T=0;T<8;T++){const L=o[T],R=L[0],A=L[1];R!==Number.MAX_SAFE_INTEGER&&A?(f&&u.getAttribute("morphTarget"+T)!==f[R]&&u.setAttribute("morphTarget"+T,f[R]),p&&u.getAttribute("morphNormal"+T)!==p[R]&&u.setAttribute("morphNormal"+T,p[R]),r[T]=A,E+=A):(f&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),p&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const x=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function rv(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class id extends hn{constructor(t,e,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Gi,u!==Gi&&u!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Gi&&(i=vi),i===void 0&&u===Nr&&(i=Hi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const rd=new hn,sd=new id(1,1);sd.compareFunction=Wh;const od=new Yh,ad=new Hf,ld=new td,mu=[],gu=[],_u=new Float32Array(16),vu=new Float32Array(9),xu=new Float32Array(4);function Wr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=mu[r];if(s===void 0&&(s=new Float32Array(r),mu[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Vo(n,t){let e=gu[t];e===void 0&&(e=new Int32Array(t),gu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function sv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ov(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function av(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function lv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function cv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;xu.set(i),n.uniformMatrix2fv(this.addr,!1,xu),Be(e,i)}}function uv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;vu.set(i),n.uniformMatrix3fv(this.addr,!1,vu),Be(e,i)}}function hv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;_u.set(i),n.uniformMatrix4fv(this.addr,!1,_u),Be(e,i)}}function dv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function pv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function fv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function mv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function gv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _v(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function vv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function xv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function bv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?sd:rd;e.setTexture2D(t||s,r)}function wv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||ad,r)}function yv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||ld,r)}function Ev(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||od,r)}function Mv(n){switch(n){case 5126:return sv;case 35664:return ov;case 35665:return av;case 35666:return lv;case 35674:return cv;case 35675:return uv;case 35676:return hv;case 5124:case 35670:return dv;case 35667:case 35671:return pv;case 35668:case 35672:return fv;case 35669:case 35673:return mv;case 5125:return gv;case 36294:return _v;case 36295:return vv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Ev}}function Sv(n,t){n.uniform1fv(this.addr,t)}function Tv(n,t){const e=Wr(t,this.size,2);n.uniform2fv(this.addr,e)}function Cv(n,t){const e=Wr(t,this.size,3);n.uniform3fv(this.addr,e)}function Av(n,t){const e=Wr(t,this.size,4);n.uniform4fv(this.addr,e)}function Pv(n,t){const e=Wr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Rv(n,t){const e=Wr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Lv(n,t){const e=Wr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Dv(n,t){n.uniform1iv(this.addr,t)}function Iv(n,t){n.uniform2iv(this.addr,t)}function Uv(n,t){n.uniform3iv(this.addr,t)}function Nv(n,t){n.uniform4iv(this.addr,t)}function Fv(n,t){n.uniform1uiv(this.addr,t)}function Ov(n,t){n.uniform2uiv(this.addr,t)}function Bv(n,t){n.uniform3uiv(this.addr,t)}function kv(n,t){n.uniform4uiv(this.addr,t)}function Vv(n,t,e){const i=this.cache,r=t.length,s=Vo(e,r);Oe(i,s)||(n.uniform1iv(this.addr,s),Be(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||rd,s[a])}function zv(n,t,e){const i=this.cache,r=t.length,s=Vo(e,r);Oe(i,s)||(n.uniform1iv(this.addr,s),Be(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||ad,s[a])}function Hv(n,t,e){const i=this.cache,r=t.length,s=Vo(e,r);Oe(i,s)||(n.uniform1iv(this.addr,s),Be(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||ld,s[a])}function Gv(n,t,e){const i=this.cache,r=t.length,s=Vo(e,r);Oe(i,s)||(n.uniform1iv(this.addr,s),Be(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||od,s[a])}function Wv(n){switch(n){case 5126:return Sv;case 35664:return Tv;case 35665:return Cv;case 35666:return Av;case 35674:return Pv;case 35675:return Rv;case 35676:return Lv;case 5124:case 35670:return Dv;case 35667:case 35671:return Iv;case 35668:case 35672:return Uv;case 35669:case 35673:return Nv;case 5125:return Fv;case 36294:return Ov;case 36295:return Bv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Gv}}class Xv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Mv(e.type)}}class jv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wv(e.type)}}class qv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function bu(n,t){n.seq.push(t),n.map[t.id]=t}function Yv(n,t,e){const i=n.name,r=i.length;for(Ca.lastIndex=0;;){const s=Ca.exec(i),a=Ca.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){bu(e,c===void 0?new Xv(o,n,t):new jv(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new qv(o),bu(e,h)),e=h}}}class _o{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Yv(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function wu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const $v=37297;let Kv=0;function Zv(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Jv(n){const t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(n);let i;switch(t===e?i="":t===Mo&&e===Eo?i="LinearDisplayP3ToLinearSRGB":t===Eo&&e===Mo&&(i="LinearSRGBToLinearDisplayP3"),n){case si:case Bo:return[i,"LinearTransferOETF"];case ze:case xl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function yu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Zv(n.getShaderSource(t),a)}else return r}function Qv(n,t){const e=Jv(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function t0(n,t){let e;switch(t){case hf:e="Linear";break;case df:e="Reinhard";break;case pf:e="OptimizedCineon";break;case Ih:e="ACESFilmic";break;case mf:e="AgX";break;case ff:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function e0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Tr).join(`
`)}function n0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Tr).join(`
`)}function i0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function r0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Tr(n){return n!==""}function Eu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(n){return n.replace(s0,a0)}const o0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function a0(n,t){let e=Wt[t];if(e===void 0){const i=o0.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}const l0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(n){return n.replace(l0,c0)}function c0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tu(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function u0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Jn&&(t="SHADOWMAP_TYPE_VSM"),t}function h0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ir:case Ur:t="ENVMAP_TYPE_CUBE";break;case Oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function d0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ur:t="ENVMAP_MODE_REFRACTION";break}return t}function p0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Dh:t="ENVMAP_BLENDING_MULTIPLY";break;case cf:t="ENVMAP_BLENDING_MIX";break;case uf:t="ENVMAP_BLENDING_ADD";break}return t}function f0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function m0(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=u0(e),c=h0(e),u=d0(e),h=p0(e),d=f0(e),m=e.isWebGL2?"":e0(e),g=n0(e),_=i0(s),f=r.createProgram();let p,E,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Tr).join(`
`),p.length>0&&(p+=`
`),E=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Tr).join(`
`),E.length>0&&(E+=`
`)):(p=[Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),E=[m,Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Mi?t0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Qv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Tr).join(`
`)),a=el(a),a=Eu(a,e),a=Mu(a,e),o=el(o),o=Eu(o,e),o=Mu(o,e),a=Su(a),o=Su(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const T=x+p+a,L=x+E+o,R=wu(r,r.VERTEX_SHADER,T),A=wu(r,r.FRAGMENT_SHADER,L);r.attachShader(f,R),r.attachShader(f,A),e.index0AttributeName!==void 0?r.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function K(X){if(n.debug.checkShaderErrors){const ot=r.getProgramInfoLog(f).trim(),D=r.getShaderInfoLog(R).trim(),k=r.getShaderInfoLog(A).trim();let H=!0,Y=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,f,R,A);else{const j=yu(r,R,"vertex"),q=yu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Program Info Log: `+ot+`
`+j+`
`+q)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(D===""||k==="")&&(Y=!1);Y&&(X.diagnostics={runnable:H,programLog:ot,vertexShader:{log:D,prefix:p},fragmentShader:{log:k,prefix:E}})}r.deleteShader(R),r.deleteShader(A),w=new _o(r,f),S=r0(r,f)}let w;this.getUniforms=function(){return w===void 0&&K(this),w};let S;this.getAttributes=function(){return S===void 0&&K(this),S};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(f,$v)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kv++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=R,this.fragmentShader=A,this}let g0=0;class _0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new v0(t),e.set(t,i)),i}}class v0{constructor(t){this.id=g0++,this.code=t,this.usedTimes=0}}function x0(n,t,e,i,r,s,a){const o=new bl,l=new _0,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return w===0?"uv":`uv${w}`}function f(w,S,G,X,ot){const D=X.fog,k=ot.geometry,H=w.isMeshStandardMaterial?X.environment:null,Y=(w.isMeshStandardMaterial?e:t).get(w.envMap||H),j=Y&&Y.mapping===Oo?Y.image.height:null,q=g[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const $=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,st=$!==void 0?$.length:0;let at=0;k.morphAttributes.position!==void 0&&(at=1),k.morphAttributes.normal!==void 0&&(at=2),k.morphAttributes.color!==void 0&&(at=3);let z,Z,ht,wt;if(q){const Te=Nn[q];z=Te.vertexShader,Z=Te.fragmentShader}else z=w.vertexShader,Z=w.fragmentShader,l.update(w),ht=l.getVertexShaderID(w),wt=l.getFragmentShaderID(w);const xt=n.getRenderTarget(),Nt=ot.isInstancedMesh===!0,Ft=ot.isBatchedMesh===!0,Ct=!!w.map,Jt=!!w.matcap,F=!!Y,Ge=!!w.aoMap,Mt=!!w.lightMap,Lt=!!w.bumpMap,_t=!!w.normalMap,de=!!w.displacementMap,zt=!!w.emissiveMap,y=!!w.metalnessMap,v=!!w.roughnessMap,N=w.anisotropy>0,et=w.clearcoat>0,Q=w.iridescence>0,nt=w.sheen>0,vt=w.transmission>0,ut=N&&!!w.anisotropyMap,gt=et&&!!w.clearcoatMap,Tt=et&&!!w.clearcoatNormalMap,Ht=et&&!!w.clearcoatRoughnessMap,J=Q&&!!w.iridescenceMap,se=Q&&!!w.iridescenceThicknessMap,Xt=nt&&!!w.sheenColorMap,Dt=nt&&!!w.sheenRoughnessMap,Et=!!w.specularMap,dt=!!w.specularColorMap,M=!!w.specularIntensityMap,it=vt&&!!w.transmissionMap,bt=vt&&!!w.thicknessMap,mt=!!w.gradientMap,tt=!!w.alphaMap,P=w.alphaTest>0,rt=!!w.alphaHash,ct=!!w.extensions,Pt=!!k.attributes.uv1,St=!!k.attributes.uv2,Qt=!!k.attributes.uv3;let te=Mi;return w.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(te=n.toneMapping),{isWebGL2:u,shaderID:q,shaderType:w.type,shaderName:w.name,vertexShader:z,fragmentShader:Z,defines:w.defines,customVertexShaderID:ht,customFragmentShaderID:wt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ft,instancing:Nt,instancingColor:Nt&&ot.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xt===null?n.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:si,map:Ct,matcap:Jt,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:j,aoMap:Ge,lightMap:Mt,bumpMap:Lt,normalMap:_t,displacementMap:d&&de,emissiveMap:zt,normalMapObjectSpace:_t&&w.normalMapType===Cf,normalMapTangentSpace:_t&&w.normalMapType===Gh,metalnessMap:y,roughnessMap:v,anisotropy:N,anisotropyMap:ut,clearcoat:et,clearcoatMap:gt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ht,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:se,sheen:nt,sheenColorMap:Xt,sheenRoughnessMap:Dt,specularMap:Et,specularColorMap:dt,specularIntensityMap:M,transmission:vt,transmissionMap:it,thicknessMap:bt,gradientMap:mt,opaque:w.transparent===!1&&w.blending===Ar,alphaMap:tt,alphaTest:P,alphaHash:rt,combine:w.combine,mapUv:Ct&&_(w.map.channel),aoMapUv:Ge&&_(w.aoMap.channel),lightMapUv:Mt&&_(w.lightMap.channel),bumpMapUv:Lt&&_(w.bumpMap.channel),normalMapUv:_t&&_(w.normalMap.channel),displacementMapUv:de&&_(w.displacementMap.channel),emissiveMapUv:zt&&_(w.emissiveMap.channel),metalnessMapUv:y&&_(w.metalnessMap.channel),roughnessMapUv:v&&_(w.roughnessMap.channel),anisotropyMapUv:ut&&_(w.anisotropyMap.channel),clearcoatMapUv:gt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(w.sheenRoughnessMap.channel),specularMapUv:Et&&_(w.specularMap.channel),specularColorMapUv:dt&&_(w.specularColorMap.channel),specularIntensityMapUv:M&&_(w.specularIntensityMap.channel),transmissionMapUv:it&&_(w.transmissionMap.channel),thicknessMapUv:bt&&_(w.thicknessMap.channel),alphaMapUv:tt&&_(w.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(_t||N),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:St,vertexUv3s:Qt,pointsUvs:ot.isPoints===!0&&!!k.attributes.uv&&(Ct||tt),fog:!!D,useFog:w.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ot.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:at,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ct&&w.map.isVideoTexture===!0&&ce.getTransfer(w.map.colorSpace)===fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===On,flipSided:w.side===tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:ct&&w.extensions.derivatives===!0,extensionFragDepth:ct&&w.extensions.fragDepth===!0,extensionDrawBuffers:ct&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)S.push(G),S.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(E(S,w),x(S,w),S.push(n.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function E(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function x(w,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function T(w){const S=g[w.type];let G;if(S){const X=Nn[S];G=em.clone(X.uniforms)}else G=w.uniforms;return G}function L(w,S){let G;for(let X=0,ot=c.length;X<ot;X++){const D=c[X];if(D.cacheKey===S){G=D,++G.usedTimes;break}}return G===void 0&&(G=new m0(n,S,w,s),c.push(G)),G}function R(w){if(--w.usedTimes===0){const S=c.indexOf(w);c[S]=c[c.length-1],c.pop(),w.destroy()}}function A(w){l.remove(w)}function K(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:T,acquireProgram:L,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:K}}function b0(){let n=new WeakMap;function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function e(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function w0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Cu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Au(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(h,d,m,g,_,f){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:f},n[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=f),t++,p}function o(h,d,m,g,_,f){const p=a(h,d,m,g,_,f);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):e.push(p)}function l(h,d,m,g,_,f){const p=a(h,d,m,g,_,f);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||w0),i.length>1&&i.sort(d||Cu),r.length>1&&r.sort(d||Cu)}function u(){for(let h=t,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function y0(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Au,n.set(i,[a])):r>=s.length?(a=new Au,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function E0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new qt};break;case"SpotLight":e={position:new C,direction:new C,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function M0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let S0=0;function T0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function C0(n,t){const e=new E0,i=M0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new C);const s=new C,a=new le,o=new le;function l(u,h){let d=0,m=0,g=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let _=0,f=0,p=0,E=0,x=0,T=0,L=0,R=0,A=0,K=0,w=0;u.sort(T0);const S=h===!0?Math.PI:1;for(let X=0,ot=u.length;X<ot;X++){const D=u[X],k=D.color,H=D.intensity,Y=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=k.r*H*S,m+=k.g*H*S,g+=k.b*H*S;else if(D.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(D.sh.coefficients[q],H);w++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const $=D.shadow,st=i.get(D);st.shadowBias=$.bias,st.shadowNormalBias=$.normalBias,st.shadowRadius=$.radius,st.shadowMapSize=$.mapSize,r.directionalShadow[_]=st,r.directionalShadowMap[_]=j,r.directionalShadowMatrix[_]=D.shadow.matrix,T++}r.directional[_]=q,_++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(k).multiplyScalar(H*S),q.distance=Y,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,r.spot[p]=q;const $=D.shadow;if(D.map&&(r.spotLightMap[A]=D.map,A++,$.updateMatrices(D),D.castShadow&&K++),r.spotLightMatrix[p]=$.matrix,D.castShadow){const st=i.get(D);st.shadowBias=$.bias,st.shadowNormalBias=$.normalBias,st.shadowRadius=$.radius,st.shadowMapSize=$.mapSize,r.spotShadow[p]=st,r.spotShadowMap[p]=j,R++}p++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(k).multiplyScalar(H),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),r.rectArea[E]=q,E++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*S),q.distance=D.distance,q.decay=D.decay,D.castShadow){const $=D.shadow,st=i.get(D);st.shadowBias=$.bias,st.shadowNormalBias=$.normalBias,st.shadowRadius=$.radius,st.shadowMapSize=$.mapSize,st.shadowCameraNear=$.camera.near,st.shadowCameraFar=$.camera.far,r.pointShadow[f]=st,r.pointShadowMap[f]=j,r.pointShadowMatrix[f]=D.shadow.matrix,L++}r.point[f]=q,f++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(H*S),q.groundColor.copy(D.groundColor).multiplyScalar(H*S),r.hemi[x]=q,x++}}E>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_FLOAT_1,r.rectAreaLTC2=lt.LTC_FLOAT_2):(r.rectAreaLTC1=lt.LTC_HALF_1,r.rectAreaLTC2=lt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_FLOAT_1,r.rectAreaLTC2=lt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_HALF_1,r.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const G=r.hash;(G.directionalLength!==_||G.pointLength!==f||G.spotLength!==p||G.rectAreaLength!==E||G.hemiLength!==x||G.numDirectionalShadows!==T||G.numPointShadows!==L||G.numSpotShadows!==R||G.numSpotMaps!==A||G.numLightProbes!==w)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=E,r.point.length=f,r.hemi.length=x,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+A-K,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=K,r.numLightProbes=w,G.directionalLength=_,G.pointLength=f,G.spotLength=p,G.rectAreaLength=E,G.hemiLength=x,G.numDirectionalShadows=T,G.numPointShadows=L,G.numSpotShadows=R,G.numSpotMaps=A,G.numLightProbes=w,r.version=S0++)}function c(u,h){let d=0,m=0,g=0,_=0,f=0;const p=h.matrixWorldInverse;for(let E=0,x=u.length;E<x;E++){const T=u[E];if(T.isDirectionalLight){const L=r.directional[d];L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(p),d++}else if(T.isSpotLight){const L=r.spot[g];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(p),g++}else if(T.isRectAreaLight){const L=r.rectArea[_];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(p),m++}else if(T.isHemisphereLight){const L=r.hemi[f];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:r}}function Pu(n,t){const e=new C0(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function A0(n,t){let e=new WeakMap;function i(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Pu(n,t),e.set(s,[l])):a>=o.length?(l=new Pu(n,t),o.push(l)):l=o[a],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class P0 extends zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class R0 extends zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function I0(n,t,e){let i=new wl;const r=new Ut,s=new Ut,a=new _e,o=new P0({depthPacking:Tf}),l=new R0,c={},u=e.maxTextureSize,h={[Ai]:tn,[tn]:Ai,[On]:On},d=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:L0,fragmentShader:D0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Xe;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new me(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let p=this.type;this.render=function(R,A,K){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const w=n.getRenderTarget(),S=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Ei),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const ot=p!==Jn&&this.type===Jn,D=p===Jn&&this.type!==Jn;for(let k=0,H=R.length;k<H;k++){const Y=R[k],j=Y.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const q=j.getFrameExtents();if(r.multiply(q),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,j.mapSize.y=s.y)),j.map===null||ot===!0||D===!0){const st=this.type!==Jn?{minFilter:Je,magFilter:Je}:{};j.map!==null&&j.map.dispose(),j.map=new ji(r.x,r.y,st),j.map.texture.name=Y.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const $=j.getViewportCount();for(let st=0;st<$;st++){const at=j.getViewport(st);a.set(s.x*at.x,s.y*at.y,s.x*at.z,s.y*at.w),X.viewport(a),j.updateMatrices(Y,st),i=j.getFrustum(),T(A,K,j.camera,Y,this.type)}j.isPointLightShadow!==!0&&this.type===Jn&&E(j,K),j.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(w,S,G)};function E(R,A){const K=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ji(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,K,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,K,m,_,null)}function x(R,A,K,w){let S=null;const G=K.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(G!==void 0)S=G;else if(S=K.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const X=S.uuid,ot=A.uuid;let D=c[X];D===void 0&&(D={},c[X]=D);let k=D[ot];k===void 0&&(k=S.clone(),D[ot]=k,A.addEventListener("dispose",L)),S=k}if(S.visible=A.visible,S.wireframe=A.wireframe,w===Jn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,K.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=n.properties.get(S);X.light=K}return S}function T(R,A,K,w,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Jn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld);const ot=t.update(R),D=R.material;if(Array.isArray(D)){const k=ot.groups;for(let H=0,Y=k.length;H<Y;H++){const j=k[H],q=D[j.materialIndex];if(q&&q.visible){const $=x(R,q,w,S);R.onBeforeShadow(n,R,A,K,ot,$,j),n.renderBufferDirect(K,null,ot,$,R,j),R.onAfterShadow(n,R,A,K,ot,$,j)}}}else if(D.visible){const k=x(R,D,w,S);R.onBeforeShadow(n,R,A,K,ot,k,null),n.renderBufferDirect(K,null,ot,k,R,null),R.onAfterShadow(n,R,A,K,ot,k,null)}}const X=R.children;for(let ot=0,D=X.length;ot<D;ot++)T(X[ot],A,K,w,S)}function L(R){R.target.removeEventListener("dispose",L);for(const K in c){const w=c[K],S=R.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function U0(n,t,e){const i=e.isWebGL2;function r(){let P=!1;const rt=new _e;let ct=null;const Pt=new _e(0,0,0,0);return{setMask:function(St){ct!==St&&!P&&(n.colorMask(St,St,St,St),ct=St)},setLocked:function(St){P=St},setClear:function(St,Qt,te,ye,Te){Te===!0&&(St*=ye,Qt*=ye,te*=ye),rt.set(St,Qt,te,ye),Pt.equals(rt)===!1&&(n.clearColor(St,Qt,te,ye),Pt.copy(rt))},reset:function(){P=!1,ct=null,Pt.set(-1,0,0,0)}}}function s(){let P=!1,rt=null,ct=null,Pt=null;return{setTest:function(St){St?Ft(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(St){rt!==St&&!P&&(n.depthMask(St),rt=St)},setFunc:function(St){if(ct!==St){switch(St){case ef:n.depthFunc(n.NEVER);break;case nf:n.depthFunc(n.ALWAYS);break;case rf:n.depthFunc(n.LESS);break;case wo:n.depthFunc(n.LEQUAL);break;case sf:n.depthFunc(n.EQUAL);break;case of:n.depthFunc(n.GEQUAL);break;case af:n.depthFunc(n.GREATER);break;case lf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=St}},setLocked:function(St){P=St},setClear:function(St){Pt!==St&&(n.clearDepth(St),Pt=St)},reset:function(){P=!1,rt=null,ct=null,Pt=null}}}function a(){let P=!1,rt=null,ct=null,Pt=null,St=null,Qt=null,te=null,ye=null,Te=null;return{setTest:function(ie){P||(ie?Ft(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(ie){rt!==ie&&!P&&(n.stencilMask(ie),rt=ie)},setFunc:function(ie,Pe,Un){(ct!==ie||Pt!==Pe||St!==Un)&&(n.stencilFunc(ie,Pe,Un),ct=ie,Pt=Pe,St=Un)},setOp:function(ie,Pe,Un){(Qt!==ie||te!==Pe||ye!==Un)&&(n.stencilOp(ie,Pe,Un),Qt=ie,te=Pe,ye=Un)},setLocked:function(ie){P=ie},setClear:function(ie){Te!==ie&&(n.clearStencil(ie),Te=ie)},reset:function(){P=!1,rt=null,ct=null,Pt=null,St=null,Qt=null,te=null,ye=null,Te=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,_=[],f=null,p=!1,E=null,x=null,T=null,L=null,R=null,A=null,K=null,w=new qt(0,0,0),S=0,G=!1,X=null,ot=null,D=null,k=null,H=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,q=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec($)[1]),j=q>=1):$.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=q>=2);let st=null,at={};const z=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),ht=new _e().fromArray(z),wt=new _e().fromArray(Z);function xt(P,rt,ct,Pt){const St=new Uint8Array(4),Qt=n.createTexture();n.bindTexture(P,Qt),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<ct;te++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(rt,0,n.RGBA,1,1,Pt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(rt+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return Qt}const Nt={};Nt[n.TEXTURE_2D]=xt(n.TEXTURE_2D,n.TEXTURE_2D,1),Nt[n.TEXTURE_CUBE_MAP]=xt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Nt[n.TEXTURE_2D_ARRAY]=xt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Nt[n.TEXTURE_3D]=xt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ft(n.DEPTH_TEST),l.setFunc(wo),zt(!1),y(hc),Ft(n.CULL_FACE),_t(Ei);function Ft(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function Ct(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function Jt(P,rt){return m[P]!==rt?(n.bindFramebuffer(P,rt),m[P]=rt,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=rt),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=rt)),!0):!1}function F(P,rt){let ct=_,Pt=!1;if(P)if(ct=g.get(rt),ct===void 0&&(ct=[],g.set(rt,ct)),P.isWebGLMultipleRenderTargets){const St=P.texture;if(ct.length!==St.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let Qt=0,te=St.length;Qt<te;Qt++)ct[Qt]=n.COLOR_ATTACHMENT0+Qt;ct.length=St.length,Pt=!0}}else ct[0]!==n.COLOR_ATTACHMENT0&&(ct[0]=n.COLOR_ATTACHMENT0,Pt=!0);else ct[0]!==n.BACK&&(ct[0]=n.BACK,Pt=!0);Pt&&(e.isWebGL2?n.drawBuffers(ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct))}function Ge(P){return f!==P?(n.useProgram(P),f=P,!0):!1}const Mt={[Bi]:n.FUNC_ADD,[Vp]:n.FUNC_SUBTRACT,[zp]:n.FUNC_REVERSE_SUBTRACT};if(i)Mt[mc]=n.MIN,Mt[gc]=n.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(Mt[mc]=P.MIN_EXT,Mt[gc]=P.MAX_EXT)}const Lt={[Hp]:n.ZERO,[Gp]:n.ONE,[Wp]:n.SRC_COLOR,[Xa]:n.SRC_ALPHA,[Kp]:n.SRC_ALPHA_SATURATE,[Yp]:n.DST_COLOR,[jp]:n.DST_ALPHA,[Xp]:n.ONE_MINUS_SRC_COLOR,[ja]:n.ONE_MINUS_SRC_ALPHA,[$p]:n.ONE_MINUS_DST_COLOR,[qp]:n.ONE_MINUS_DST_ALPHA,[Zp]:n.CONSTANT_COLOR,[Jp]:n.ONE_MINUS_CONSTANT_COLOR,[Qp]:n.CONSTANT_ALPHA,[tf]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(P,rt,ct,Pt,St,Qt,te,ye,Te,ie){if(P===Ei){p===!0&&(Ct(n.BLEND),p=!1);return}if(p===!1&&(Ft(n.BLEND),p=!0),P!==kp){if(P!==E||ie!==G){if((x!==Bi||R!==Bi)&&(n.blendEquation(n.FUNC_ADD),x=Bi,R=Bi),ie)switch(P){case Ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFunc(n.ONE,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,L=null,A=null,K=null,w.set(0,0,0),S=0,E=P,G=ie}return}St=St||rt,Qt=Qt||ct,te=te||Pt,(rt!==x||St!==R)&&(n.blendEquationSeparate(Mt[rt],Mt[St]),x=rt,R=St),(ct!==T||Pt!==L||Qt!==A||te!==K)&&(n.blendFuncSeparate(Lt[ct],Lt[Pt],Lt[Qt],Lt[te]),T=ct,L=Pt,A=Qt,K=te),(ye.equals(w)===!1||Te!==S)&&(n.blendColor(ye.r,ye.g,ye.b,Te),w.copy(ye),S=Te),E=P,G=!1}function de(P,rt){P.side===On?Ct(n.CULL_FACE):Ft(n.CULL_FACE);let ct=P.side===tn;rt&&(ct=!ct),zt(ct),P.blending===Ar&&P.transparent===!1?_t(Ei):_t(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const Pt=P.stencilWrite;c.setTest(Pt),Pt&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),N(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ft(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function zt(P){X!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),X=P)}function y(P){P!==Fp?(Ft(n.CULL_FACE),P!==ot&&(P===hc?n.cullFace(n.BACK):P===Op?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),ot=P}function v(P){P!==D&&(j&&n.lineWidth(P),D=P)}function N(P,rt,ct){P?(Ft(n.POLYGON_OFFSET_FILL),(k!==rt||H!==ct)&&(n.polygonOffset(rt,ct),k=rt,H=ct)):Ct(n.POLYGON_OFFSET_FILL)}function et(P){P?Ft(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function Q(P){P===void 0&&(P=n.TEXTURE0+Y-1),st!==P&&(n.activeTexture(P),st=P)}function nt(P,rt,ct){ct===void 0&&(st===null?ct=n.TEXTURE0+Y-1:ct=st);let Pt=at[ct];Pt===void 0&&(Pt={type:void 0,texture:void 0},at[ct]=Pt),(Pt.type!==P||Pt.texture!==rt)&&(st!==ct&&(n.activeTexture(ct),st=ct),n.bindTexture(P,rt||Nt[P]),Pt.type=P,Pt.texture=rt)}function vt(){const P=at[st];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ut(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ht(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xt(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Dt(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function M(P){ht.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ht.copy(P))}function it(P){wt.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),wt.copy(P))}function bt(P,rt){let ct=h.get(rt);ct===void 0&&(ct=new WeakMap,h.set(rt,ct));let Pt=ct.get(P);Pt===void 0&&(Pt=n.getUniformBlockIndex(rt,P.name),ct.set(P,Pt))}function mt(P,rt){const Pt=h.get(rt).get(P);u.get(rt)!==Pt&&(n.uniformBlockBinding(rt,Pt,P.__bindingPointIndex),u.set(rt,Pt))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},st=null,at={},m={},g=new WeakMap,_=[],f=null,p=!1,E=null,x=null,T=null,L=null,R=null,A=null,K=null,w=new qt(0,0,0),S=0,G=!1,X=null,ot=null,D=null,k=null,H=null,ht.set(0,0,n.canvas.width,n.canvas.height),wt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ft,disable:Ct,bindFramebuffer:Jt,drawBuffers:F,useProgram:Ge,setBlending:_t,setMaterial:de,setFlipSided:zt,setCullFace:y,setLineWidth:v,setPolygonOffset:N,setScissorTest:et,activeTexture:Q,bindTexture:nt,unbindTexture:vt,compressedTexImage2D:ut,compressedTexImage3D:gt,texImage2D:Et,texImage3D:dt,updateUBOMapping:bt,uniformBlockBinding:mt,texStorage2D:Xt,texStorage3D:Dt,texSubImage2D:Tt,texSubImage3D:Ht,compressedTexSubImage2D:J,compressedTexSubImage3D:se,scissor:M,viewport:it,reset:tt}}function N0(n,t,e,i,r,s,a){const o=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,v){return m?new OffscreenCanvas(y,v):To("canvas")}function _(y,v,N,et){let Q=1;if((y.width>et||y.height>et)&&(Q=et/Math.max(y.width,y.height)),Q<1||v===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const nt=v?Qa:Math.floor,vt=nt(Q*y.width),ut=nt(Q*y.height);h===void 0&&(h=g(vt,ut));const gt=N?g(vt,ut):h;return gt.width=vt,gt.height=ut,gt.getContext("2d").drawImage(y,0,0,vt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+vt+"x"+ut+")."),gt}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function f(y){return jc(y.width)&&jc(y.height)}function p(y){return o?!1:y.wrapS!==Ln||y.wrapT!==Ln||y.minFilter!==Je&&y.minFilter!==wn}function E(y,v){return y.generateMipmaps&&v&&y.minFilter!==Je&&y.minFilter!==wn}function x(y){n.generateMipmap(y)}function T(y,v,N,et,Q=!1){if(o===!1)return v;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let nt=v;if(v===n.RED&&(N===n.FLOAT&&(nt=n.R32F),N===n.HALF_FLOAT&&(nt=n.R16F),N===n.UNSIGNED_BYTE&&(nt=n.R8)),v===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(nt=n.R8UI),N===n.UNSIGNED_SHORT&&(nt=n.R16UI),N===n.UNSIGNED_INT&&(nt=n.R32UI),N===n.BYTE&&(nt=n.R8I),N===n.SHORT&&(nt=n.R16I),N===n.INT&&(nt=n.R32I)),v===n.RG&&(N===n.FLOAT&&(nt=n.RG32F),N===n.HALF_FLOAT&&(nt=n.RG16F),N===n.UNSIGNED_BYTE&&(nt=n.RG8)),v===n.RGBA){const vt=Q?yo:ce.getTransfer(et);N===n.FLOAT&&(nt=n.RGBA32F),N===n.HALF_FLOAT&&(nt=n.RGBA16F),N===n.UNSIGNED_BYTE&&(nt=vt===fe?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function L(y,v,N){return E(y,N)===!0||y.isFramebufferTexture&&y.minFilter!==Je&&y.minFilter!==wn?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function R(y){return y===Je||y===_c||y===Qo?n.NEAREST:n.LINEAR}function A(y){const v=y.target;v.removeEventListener("dispose",A),w(v),v.isVideoTexture&&u.delete(v)}function K(y){const v=y.target;v.removeEventListener("dispose",K),G(v)}function w(y){const v=i.get(y);if(v.__webglInit===void 0)return;const N=y.source,et=d.get(N);if(et){const Q=et[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(y),Object.keys(et).length===0&&d.delete(N)}i.remove(y)}function S(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const N=y.source,et=d.get(N);delete et[v.__cacheKey],a.memory.textures--}function G(y){const v=y.texture,N=i.get(y),et=i.get(v);if(et.__webglTexture!==void 0&&(n.deleteTexture(et.__webglTexture),a.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(N.__webglFramebuffer[Q]))for(let nt=0;nt<N.__webglFramebuffer[Q].length;nt++)n.deleteFramebuffer(N.__webglFramebuffer[Q][nt]);else n.deleteFramebuffer(N.__webglFramebuffer[Q]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[Q])}else{if(Array.isArray(N.__webglFramebuffer))for(let Q=0;Q<N.__webglFramebuffer.length;Q++)n.deleteFramebuffer(N.__webglFramebuffer[Q]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Q=0;Q<N.__webglColorRenderbuffer.length;Q++)N.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[Q]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Q=0,nt=v.length;Q<nt;Q++){const vt=i.get(v[Q]);vt.__webglTexture&&(n.deleteTexture(vt.__webglTexture),a.memory.textures--),i.remove(v[Q])}i.remove(v),i.remove(y)}let X=0;function ot(){X=0}function D(){const y=X;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),X+=1,y}function k(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function H(y,v){const N=i.get(y);if(y.isVideoTexture&&de(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const et=y.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(N,y,v);return}}e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+v)}function Y(y,v){const N=i.get(y);if(y.version>0&&N.__version!==y.version){ht(N,y,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+v)}function j(y,v){const N=i.get(y);if(y.version>0&&N.__version!==y.version){ht(N,y,v);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+v)}function q(y,v){const N=i.get(y);if(y.version>0&&N.__version!==y.version){wt(N,y,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+v)}const $={[$a]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[Ka]:n.MIRRORED_REPEAT},st={[Je]:n.NEAREST,[_c]:n.NEAREST_MIPMAP_NEAREST,[Qo]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[gf]:n.LINEAR_MIPMAP_NEAREST,[ds]:n.LINEAR_MIPMAP_LINEAR},at={[Af]:n.NEVER,[Uf]:n.ALWAYS,[Pf]:n.LESS,[Wh]:n.LEQUAL,[Rf]:n.EQUAL,[If]:n.GEQUAL,[Lf]:n.GREATER,[Df]:n.NOTEQUAL};function z(y,v,N){if(N?(n.texParameteri(y,n.TEXTURE_WRAP_S,$[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,$[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,$[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,st[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,st[v.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Ln||v.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,R(v.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,R(v.minFilter)),v.minFilter!==Je&&v.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,at[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Je||v.minFilter!==Qo&&v.minFilter!==ds||v.type===xi&&t.has("OES_texture_float_linear")===!1||o===!1&&v.type===ps&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(y,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Z(y,v){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",A));const et=v.source;let Q=d.get(et);Q===void 0&&(Q={},d.set(et,Q));const nt=k(v);if(nt!==y.__cacheKey){Q[nt]===void 0&&(Q[nt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Q[nt].usedTimes++;const vt=Q[y.__cacheKey];vt!==void 0&&(Q[y.__cacheKey].usedTimes--,vt.usedTimes===0&&S(v)),y.__cacheKey=nt,y.__webglTexture=Q[nt].texture}return N}function ht(y,v,N){let et=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=n.TEXTURE_3D);const Q=Z(y,v),nt=v.source;e.bindTexture(et,y.__webglTexture,n.TEXTURE0+N);const vt=i.get(nt);if(nt.version!==vt.__version||Q===!0){e.activeTexture(n.TEXTURE0+N);const ut=ce.getPrimaries(ce.workingColorSpace),gt=v.colorSpace===Mn?null:ce.getPrimaries(v.colorSpace),Tt=v.colorSpace===Mn||ut===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Ht=p(v)&&f(v.image)===!1;let J=_(v.image,Ht,!1,r.maxTextureSize);J=zt(v,J);const se=f(J)||o,Xt=s.convert(v.format,v.colorSpace);let Dt=s.convert(v.type),Et=T(v.internalFormat,Xt,Dt,v.colorSpace,v.isVideoTexture);z(et,v,se);let dt;const M=v.mipmaps,it=o&&v.isVideoTexture!==!0&&Et!==zh,bt=vt.__version===void 0||Q===!0,mt=L(v,J,se);if(v.isDepthTexture)Et=n.DEPTH_COMPONENT,o?v.type===xi?Et=n.DEPTH_COMPONENT32F:v.type===vi?Et=n.DEPTH_COMPONENT24:v.type===Hi?Et=n.DEPTH24_STENCIL8:Et=n.DEPTH_COMPONENT16:v.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Gi&&Et===n.DEPTH_COMPONENT&&v.type!==vl&&v.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=vi,Dt=s.convert(v.type)),v.format===Nr&&Et===n.DEPTH_COMPONENT&&(Et=n.DEPTH_STENCIL,v.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Hi,Dt=s.convert(v.type))),bt&&(it?e.texStorage2D(n.TEXTURE_2D,1,Et,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,Et,J.width,J.height,0,Xt,Dt,null));else if(v.isDataTexture)if(M.length>0&&se){it&&bt&&e.texStorage2D(n.TEXTURE_2D,mt,Et,M[0].width,M[0].height);for(let tt=0,P=M.length;tt<P;tt++)dt=M[tt],it?e.texSubImage2D(n.TEXTURE_2D,tt,0,0,dt.width,dt.height,Xt,Dt,dt.data):e.texImage2D(n.TEXTURE_2D,tt,Et,dt.width,dt.height,0,Xt,Dt,dt.data);v.generateMipmaps=!1}else it?(bt&&e.texStorage2D(n.TEXTURE_2D,mt,Et,J.width,J.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Xt,Dt,J.data)):e.texImage2D(n.TEXTURE_2D,0,Et,J.width,J.height,0,Xt,Dt,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){it&&bt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,Et,M[0].width,M[0].height,J.depth);for(let tt=0,P=M.length;tt<P;tt++)dt=M[tt],v.format!==Dn?Xt!==null?it?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,J.depth,Xt,dt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,Et,dt.width,dt.height,J.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,J.depth,Xt,Dt,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,Et,dt.width,dt.height,J.depth,0,Xt,Dt,dt.data)}else{it&&bt&&e.texStorage2D(n.TEXTURE_2D,mt,Et,M[0].width,M[0].height);for(let tt=0,P=M.length;tt<P;tt++)dt=M[tt],v.format!==Dn?Xt!==null?it?e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,dt.width,dt.height,Xt,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,Et,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?e.texSubImage2D(n.TEXTURE_2D,tt,0,0,dt.width,dt.height,Xt,Dt,dt.data):e.texImage2D(n.TEXTURE_2D,tt,Et,dt.width,dt.height,0,Xt,Dt,dt.data)}else if(v.isDataArrayTexture)it?(bt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,Et,J.width,J.height,J.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Xt,Dt,J.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,J.width,J.height,J.depth,0,Xt,Dt,J.data);else if(v.isData3DTexture)it?(bt&&e.texStorage3D(n.TEXTURE_3D,mt,Et,J.width,J.height,J.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Xt,Dt,J.data)):e.texImage3D(n.TEXTURE_3D,0,Et,J.width,J.height,J.depth,0,Xt,Dt,J.data);else if(v.isFramebufferTexture){if(bt)if(it)e.texStorage2D(n.TEXTURE_2D,mt,Et,J.width,J.height);else{let tt=J.width,P=J.height;for(let rt=0;rt<mt;rt++)e.texImage2D(n.TEXTURE_2D,rt,Et,tt,P,0,Xt,Dt,null),tt>>=1,P>>=1}}else if(M.length>0&&se){it&&bt&&e.texStorage2D(n.TEXTURE_2D,mt,Et,M[0].width,M[0].height);for(let tt=0,P=M.length;tt<P;tt++)dt=M[tt],it?e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Xt,Dt,dt):e.texImage2D(n.TEXTURE_2D,tt,Et,Xt,Dt,dt);v.generateMipmaps=!1}else it?(bt&&e.texStorage2D(n.TEXTURE_2D,mt,Et,J.width,J.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Xt,Dt,J)):e.texImage2D(n.TEXTURE_2D,0,Et,Xt,Dt,J);E(v,se)&&x(et),vt.__version=nt.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function wt(y,v,N){if(v.image.length!==6)return;const et=Z(y,v),Q=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+N);const nt=i.get(Q);if(Q.version!==nt.__version||et===!0){e.activeTexture(n.TEXTURE0+N);const vt=ce.getPrimaries(ce.workingColorSpace),ut=v.colorSpace===Mn?null:ce.getPrimaries(v.colorSpace),gt=v.colorSpace===Mn||vt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,Ht=v.image[0]&&v.image[0].isDataTexture,J=[];for(let tt=0;tt<6;tt++)!Tt&&!Ht?J[tt]=_(v.image[tt],!1,!0,r.maxCubemapSize):J[tt]=Ht?v.image[tt].image:v.image[tt],J[tt]=zt(v,J[tt]);const se=J[0],Xt=f(se)||o,Dt=s.convert(v.format,v.colorSpace),Et=s.convert(v.type),dt=T(v.internalFormat,Dt,Et,v.colorSpace),M=o&&v.isVideoTexture!==!0,it=nt.__version===void 0||et===!0;let bt=L(v,se,Xt);z(n.TEXTURE_CUBE_MAP,v,Xt);let mt;if(Tt){M&&it&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,dt,se.width,se.height);for(let tt=0;tt<6;tt++){mt=J[tt].mipmaps;for(let P=0;P<mt.length;P++){const rt=mt[P];v.format!==Dn?Dt!==null?M?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,P,0,0,rt.width,rt.height,Dt,rt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,P,dt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):M?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,P,0,0,rt.width,rt.height,Dt,Et,rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,P,dt,rt.width,rt.height,0,Dt,Et,rt.data)}}}else{mt=v.mipmaps,M&&it&&(mt.length>0&&bt++,e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,dt,J[0].width,J[0].height));for(let tt=0;tt<6;tt++)if(Ht){M?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,J[tt].width,J[tt].height,Dt,Et,J[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,dt,J[tt].width,J[tt].height,0,Dt,Et,J[tt].data);for(let P=0;P<mt.length;P++){const ct=mt[P].image[tt].image;M?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,P+1,0,0,ct.width,ct.height,Dt,Et,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,P+1,dt,ct.width,ct.height,0,Dt,Et,ct.data)}}else{M?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,Et,J[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,dt,Dt,Et,J[tt]);for(let P=0;P<mt.length;P++){const rt=mt[P];M?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,P+1,0,0,Dt,Et,rt.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,P+1,dt,Dt,Et,rt.image[tt])}}}E(v,Xt)&&x(n.TEXTURE_CUBE_MAP),nt.__version=Q.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function xt(y,v,N,et,Q,nt){const vt=s.convert(N.format,N.colorSpace),ut=s.convert(N.type),gt=T(N.internalFormat,vt,ut,N.colorSpace);if(!i.get(v).__hasExternalTextures){const Ht=Math.max(1,v.width>>nt),J=Math.max(1,v.height>>nt);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,nt,gt,Ht,J,v.depth,0,vt,ut,null):e.texImage2D(Q,nt,gt,Ht,J,0,vt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),_t(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,Q,i.get(N).__webglTexture,0,Lt(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,Q,i.get(N).__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(y,v,N){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let et=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(N||_t(v)){const Q=v.depthTexture;Q&&Q.isDepthTexture&&(Q.type===xi?et=n.DEPTH_COMPONENT32F:Q.type===vi&&(et=n.DEPTH_COMPONENT24));const nt=Lt(v);_t(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,et,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,et,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,et,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){const et=Lt(v);N&&_t(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,v.width,v.height):_t(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const et=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Q=0;Q<et.length;Q++){const nt=et[Q],vt=s.convert(nt.format,nt.colorSpace),ut=s.convert(nt.type),gt=T(nt.internalFormat,vt,ut,nt.colorSpace),Tt=Lt(v);N&&_t(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,gt,v.width,v.height):_t(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,gt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,gt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);const et=i.get(v.depthTexture).__webglTexture,Q=Lt(v);if(v.depthTexture.format===Gi)_t(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(v.depthTexture.format===Nr)_t(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ct(y){const v=i.get(y),N=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ft(v.__webglFramebuffer,y)}else if(N){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]=n.createRenderbuffer(),Nt(v.__webglDepthbuffer[et],y,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Nt(v.__webglDepthbuffer,y,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Jt(y,v,N){const et=i.get(y);v!==void 0&&xt(et.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Ct(y)}function F(y){const v=y.texture,N=i.get(y),et=i.get(v);y.addEventListener("dispose",K),y.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=v.version,a.memory.textures++);const Q=y.isWebGLCubeRenderTarget===!0,nt=y.isWebGLMultipleRenderTargets===!0,vt=f(y)||o;if(Q){N.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(o&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ut]=[];for(let gt=0;gt<v.mipmaps.length;gt++)N.__webglFramebuffer[ut][gt]=n.createFramebuffer()}else N.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)N.__webglFramebuffer[ut]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(nt)if(r.drawBuffers){const ut=y.texture;for(let gt=0,Tt=ut.length;gt<Tt;gt++){const Ht=i.get(ut[gt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&y.samples>0&&_t(y)===!1){const ut=nt?v:[v];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let gt=0;gt<ut.length;gt++){const Tt=ut[gt];N.__webglColorRenderbuffer[gt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[gt]);const Ht=s.convert(Tt.format,Tt.colorSpace),J=s.convert(Tt.type),se=T(Tt.internalFormat,Ht,J,Tt.colorSpace,y.isXRRenderTarget===!0),Xt=Lt(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,se,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,N.__webglColorRenderbuffer[gt])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt(N.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),z(n.TEXTURE_CUBE_MAP,v,vt);for(let ut=0;ut<6;ut++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)xt(N.__webglFramebuffer[ut][gt],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else xt(N.__webglFramebuffer[ut],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);E(v,vt)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const ut=y.texture;for(let gt=0,Tt=ut.length;gt<Tt;gt++){const Ht=ut[gt],J=i.get(Ht);e.bindTexture(n.TEXTURE_2D,J.__webglTexture),z(n.TEXTURE_2D,Ht,vt),xt(N.__webglFramebuffer,y,Ht,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,0),E(Ht,vt)&&x(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(o?ut=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,et.__webglTexture),z(ut,v,vt),o&&v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)xt(N.__webglFramebuffer[gt],y,v,n.COLOR_ATTACHMENT0,ut,gt);else xt(N.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,ut,0);E(v,vt)&&x(ut),e.unbindTexture()}y.depthBuffer&&Ct(y)}function Ge(y){const v=f(y)||o,N=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let et=0,Q=N.length;et<Q;et++){const nt=N[et];if(E(nt,v)){const vt=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ut=i.get(nt).__webglTexture;e.bindTexture(vt,ut),x(vt),e.unbindTexture()}}}function Mt(y){if(o&&y.samples>0&&_t(y)===!1){const v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],N=y.width,et=y.height;let Q=n.COLOR_BUFFER_BIT;const nt=[],vt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(y),gt=y.isWebGLMultipleRenderTargets===!0;if(gt)for(let Tt=0;Tt<v.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Tt=0;Tt<v.length;Tt++){nt.push(n.COLOR_ATTACHMENT0+Tt),y.depthBuffer&&nt.push(vt);const Ht=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Ht===!1&&(y.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),gt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[Tt]),Ht===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[vt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[vt])),gt){const J=i.get(v[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,N,et,0,0,N,et,Q,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),gt)for(let Tt=0;Tt<v.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,ut.__webglColorRenderbuffer[Tt]);const Ht=i.get(v[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,Ht,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function Lt(y){return Math.min(r.maxSamples,y.samples)}function _t(y){const v=i.get(y);return o&&y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function de(y){const v=a.render.frame;u.get(y)!==v&&(u.set(y,v),y.update())}function zt(y,v){const N=y.colorSpace,et=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Za||N!==si&&N!==Mn&&(ce.getTransfer(N)===fe?o===!1?t.has("EXT_sRGB")===!0&&et===Dn?(y.format=Za,y.minFilter=wn,y.generateMipmaps=!1):v=jh.sRGBToLinear(v):(et!==Dn||Q!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=D,this.resetTextureUnits=ot,this.setTexture2D=H,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Jt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=_t}function F0(n,t,e){const i=e.isWebGL2;function r(s,a=Mn){let o;const l=ce.getTransfer(a);if(s===Si)return n.UNSIGNED_BYTE;if(s===Fh)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Oh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===_f)return n.BYTE;if(s===vf)return n.SHORT;if(s===vl)return n.UNSIGNED_SHORT;if(s===Nh)return n.INT;if(s===vi)return n.UNSIGNED_INT;if(s===xi)return n.FLOAT;if(s===ps)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===xf)return n.ALPHA;if(s===Dn)return n.RGBA;if(s===bf)return n.LUMINANCE;if(s===wf)return n.LUMINANCE_ALPHA;if(s===Gi)return n.DEPTH_COMPONENT;if(s===Nr)return n.DEPTH_STENCIL;if(s===Za)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===yf)return n.RED;if(s===Bh)return n.RED_INTEGER;if(s===Ef)return n.RG;if(s===kh)return n.RG_INTEGER;if(s===Vh)return n.RGBA_INTEGER;if(s===ta||s===ea||s===na||s===ia)if(l===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ta)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ta)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ea)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===na)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ia)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vc||s===xc||s===bc||s===wc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===vc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===yc||s===Ec)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===yc)return l===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ec)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Mc||s===Sc||s===Tc||s===Cc||s===Ac||s===Pc||s===Rc||s===Lc||s===Dc||s===Ic||s===Uc||s===Nc||s===Fc||s===Oc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Mc)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sc)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Tc)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cc)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ac)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pc)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rc)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lc)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dc)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ic)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Uc)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nc)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fc)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Oc)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ra||s===Bc||s===kc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===ra)return l===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Mf||s===Vc||s===zc||s===Hc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===ra)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Vc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hi?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class O0 extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Cr extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B0={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,i),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(B0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Cr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class k0 extends Ji{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null;const _=e.getContextAttributes();let f=null,p=null;const E=[],x=[],T=new Ut;let L=null;const R=new un;R.layers.enable(1),R.viewport=new _e;const A=new un;A.layers.enable(2),A.viewport=new _e;const K=[R,A],w=new O0;w.layers.enable(1),w.layers.enable(2);let S=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Z=E[z];return Z===void 0&&(Z=new Aa,E[z]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(z){let Z=E[z];return Z===void 0&&(Z=new Aa,E[z]=Z),Z.getGripSpace()},this.getHand=function(z){let Z=E[z];return Z===void 0&&(Z=new Aa,E[z]=Z),Z.getHandSpace()};function X(z){const Z=x.indexOf(z.inputSource);if(Z===-1)return;const ht=E[Z];ht!==void 0&&(ht.update(z.inputSource,z.frame,c||a),ht.dispatchEvent({type:z.type,data:z.inputSource}))}function ot(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ot),r.removeEventListener("inputsourceschange",D);for(let z=0;z<E.length;z++){const Z=x[z];Z!==null&&(x[z]=null,E[z].disconnect(Z))}S=null,G=null,t.setRenderTarget(f),m=null,d=null,h=null,r=null,p=null,at.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ot),r.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(T),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,Z),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new ji(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ht=null,wt=null;_.depth&&(wt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=_.stencil?Nr:Gi,ht=_.stencil?Hi:vi);const xt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(xt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new ji(d.textureWidth,d.textureHeight,{format:Dn,type:Si,depthTexture:new id(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Nt=t.properties.get(p);Nt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),at.setContext(r),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(z){for(let Z=0;Z<z.removed.length;Z++){const ht=z.removed[Z],wt=x.indexOf(ht);wt>=0&&(x[wt]=null,E[wt].disconnect(ht))}for(let Z=0;Z<z.added.length;Z++){const ht=z.added[Z];let wt=x.indexOf(ht);if(wt===-1){for(let Nt=0;Nt<E.length;Nt++)if(Nt>=x.length){x.push(ht),wt=Nt;break}else if(x[Nt]===null){x[Nt]=ht,wt=Nt;break}if(wt===-1)break}const xt=E[wt];xt&&xt.connect(ht)}}const k=new C,H=new C;function Y(z,Z,ht){k.setFromMatrixPosition(Z.matrixWorld),H.setFromMatrixPosition(ht.matrixWorld);const wt=k.distanceTo(H),xt=Z.projectionMatrix.elements,Nt=ht.projectionMatrix.elements,Ft=xt[14]/(xt[10]-1),Ct=xt[14]/(xt[10]+1),Jt=(xt[9]+1)/xt[5],F=(xt[9]-1)/xt[5],Ge=(xt[8]-1)/xt[0],Mt=(Nt[8]+1)/Nt[0],Lt=Ft*Ge,_t=Ft*Mt,de=wt/(-Ge+Mt),zt=de*-Ge;Z.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(zt),z.translateZ(de),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const y=Ft+de,v=Ct+de,N=Lt-zt,et=_t+(wt-zt),Q=Jt*Ct/v*y,nt=F*Ct/v*y;z.projectionMatrix.makePerspective(N,et,Q,nt,y,v),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function j(z,Z){Z===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Z.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;w.near=A.near=R.near=z.near,w.far=A.far=R.far=z.far,(S!==w.near||G!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),S=w.near,G=w.far);const Z=z.parent,ht=w.cameras;j(w,Z);for(let wt=0;wt<ht.length;wt++)j(ht[wt],Z);ht.length===2?Y(w,R,A):w.projectionMatrix.copy(R.projectionMatrix),q(z,w,Z)};function q(z,Z,ht){ht===null?z.matrix.copy(Z.matrixWorld):(z.matrix.copy(ht.matrixWorld),z.matrix.invert(),z.matrix.multiply(Z.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Z.projectionMatrix),z.projectionMatrixInverse.copy(Z.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ja*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let $=null;function st(z,Z){if(u=Z.getViewerPose(c||a),g=Z,u!==null){const ht=u.views;m!==null&&(t.setRenderTargetFramebuffer(p,m.framebuffer),t.setRenderTarget(p));let wt=!1;ht.length!==w.cameras.length&&(w.cameras.length=0,wt=!0);for(let xt=0;xt<ht.length;xt++){const Nt=ht[xt];let Ft=null;if(m!==null)Ft=m.getViewport(Nt);else{const Jt=h.getViewSubImage(d,Nt);Ft=Jt.viewport,xt===0&&(t.setRenderTargetTextures(p,Jt.colorTexture,d.ignoreDepthValues?void 0:Jt.depthStencilTexture),t.setRenderTarget(p))}let Ct=K[xt];Ct===void 0&&(Ct=new un,Ct.layers.enable(xt),Ct.viewport=new _e,K[xt]=Ct),Ct.matrix.fromArray(Nt.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Nt.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),xt===0&&(w.matrix.copy(Ct.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),wt===!0&&w.cameras.push(Ct)}}for(let ht=0;ht<E.length;ht++){const wt=x[ht],xt=E[ht];wt!==null&&xt!==void 0&&xt.update(wt,Z,c||a)}$&&$(z,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const at=new ed;at.setAnimationLoop(st),this.setAnimationLoop=function(z){$=z},this.dispose=function(){}}}function V0(n,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,Jh(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,E,x,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),h(f,p)):p.isMeshPhongMaterial?(s(f,p),u(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,T)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,E,x):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===tn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===tn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const E=t.get(p).envMap;if(E&&(f.envMap.value=E,f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,E,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*E,f.scale.value=x*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,E){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const E=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function z0(n,t,e,i){let r={},s={},a=[];const o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){const T=x.program;i.uniformBlockBinding(E,T)}function c(E,x){let T=r[E.id];T===void 0&&(g(E),T=u(E),r[E.id]=T,E.addEventListener("dispose",f));const L=x.program;i.updateUBOMapping(E,L);const R=t.render.frame;s[E.id]!==R&&(d(E),s[E.id]=R)}function u(E){const x=h();E.__bindingPointIndex=x;const T=n.createBuffer(),L=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,T),T}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const x=r[E.id],T=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let R=0,A=T.length;R<A;R++){const K=Array.isArray(T[R])?T[R]:[T[R]];for(let w=0,S=K.length;w<S;w++){const G=K[w];if(m(G,R,w,L)===!0){const X=G.__offset,ot=Array.isArray(G.value)?G.value:[G.value];let D=0;for(let k=0;k<ot.length;k++){const H=ot[k],Y=_(H);typeof H=="number"||typeof H=="boolean"?(G.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,X+D,G.__data)):H.isMatrix3?(G.__data[0]=H.elements[0],G.__data[1]=H.elements[1],G.__data[2]=H.elements[2],G.__data[3]=0,G.__data[4]=H.elements[3],G.__data[5]=H.elements[4],G.__data[6]=H.elements[5],G.__data[7]=0,G.__data[8]=H.elements[6],G.__data[9]=H.elements[7],G.__data[10]=H.elements[8],G.__data[11]=0):(H.toArray(G.__data,D),D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,G.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,x,T,L){const R=E.value,A=x+"_"+T;if(L[A]===void 0)return typeof R=="number"||typeof R=="boolean"?L[A]=R:L[A]=R.clone(),!0;{const K=L[A];if(typeof R=="number"||typeof R=="boolean"){if(K!==R)return L[A]=R,!0}else if(K.equals(R)===!1)return K.copy(R),!0}return!1}function g(E){const x=E.uniforms;let T=0;const L=16;for(let A=0,K=x.length;A<K;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,G=w.length;S<G;S++){const X=w[S],ot=Array.isArray(X.value)?X.value:[X.value];for(let D=0,k=ot.length;D<k;D++){const H=ot[D],Y=_(H),j=T%L;j!==0&&L-j<Y.boundary&&(T+=L-j),X.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=Y.storage}}}const R=T%L;return R>0&&(T+=L-R),E.__size=T,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function f(E){const x=E.target;x.removeEventListener("dispose",f);const T=a.indexOf(x.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class cd{constructor(t={}){const{canvas:e=Of(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const p=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this._useLegacyLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1;const x=this;let T=!1,L=0,R=0,A=null,K=-1,w=null;const S=new _e,G=new _e;let X=null;const ot=new qt(0);let D=0,k=e.width,H=e.height,Y=1,j=null,q=null;const $=new _e(0,0,k,H),st=new _e(0,0,k,H);let at=!1;const z=new wl;let Z=!1,ht=!1,wt=null;const xt=new le,Nt=new Ut,Ft=new C,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Jt(){return A===null?Y:1}let F=i;function Ge(b,U){for(let B=0;B<b.length;B++){const V=b[B],O=e.getContext(V,U);if(O!==null)return O}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_l}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",rt,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),F=Ge(U,b),F===null)throw Ge(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Mt,Lt,_t,de,zt,y,v,N,et,Q,nt,vt,ut,gt,Tt,Ht,J,se,Xt,Dt,Et,dt,M,it;function bt(){Mt=new Z_(F),Lt=new X_(F,Mt,t),Mt.init(Lt),dt=new F0(F,Mt,Lt),_t=new U0(F,Mt,Lt),de=new tv(F),zt=new b0,y=new N0(F,Mt,_t,zt,Lt,dt,de),v=new q_(x),N=new K_(x),et=new lm(F,Lt),M=new G_(F,Mt,et,Lt),Q=new J_(F,et,de,M),nt=new rv(F,Q,et,de),Xt=new iv(F,Lt,y),Ht=new j_(zt),vt=new x0(x,v,N,Mt,Lt,M,Ht),ut=new V0(x,zt),gt=new y0,Tt=new A0(Mt,Lt),se=new H_(x,v,N,_t,nt,d,l),J=new I0(x,nt,Lt),it=new z0(F,de,Lt,_t),Dt=new W_(F,Mt,de,Lt),Et=new Q_(F,Mt,de,Lt),de.programs=vt.programs,x.capabilities=Lt,x.extensions=Mt,x.properties=zt,x.renderLists=gt,x.shadowMap=J,x.state=_t,x.info=de}bt();const mt=new k0(x,F);this.xr=mt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=Mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(k,H,!1))},this.getSize=function(b){return b.set(k,H)},this.setSize=function(b,U,B=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,H=U,e.width=Math.floor(b*Y),e.height=Math.floor(U*Y),B===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(k*Y,H*Y).floor()},this.setDrawingBufferSize=function(b,U,B){k=b,H=U,Y=B,e.width=Math.floor(b*B),e.height=Math.floor(U*B),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,U,B,V){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,U,B,V),_t.viewport(S.copy($).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(st)},this.setScissor=function(b,U,B,V){b.isVector4?st.set(b.x,b.y,b.z,b.w):st.set(b,U,B,V),_t.scissor(G.copy(st).multiplyScalar(Y).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(b){_t.setScissorTest(at=b)},this.setOpaqueSort=function(b){j=b},this.setTransparentSort=function(b){q=b},this.getClearColor=function(b){return b.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(b=!0,U=!0,B=!0){let V=0;if(b){let O=!1;if(A!==null){const pt=A.texture.format;O=pt===Vh||pt===kh||pt===Bh}if(O){const pt=A.texture.type,yt=pt===Si||pt===vi||pt===vl||pt===Hi||pt===Fh||pt===Oh,Rt=se.getClearColor(),It=se.getClearAlpha(),jt=Rt.r,Bt=Rt.g,Gt=Rt.b;yt?(m[0]=jt,m[1]=Bt,m[2]=Gt,m[3]=It,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=jt,g[1]=Bt,g[2]=Gt,g[3]=It,F.clearBufferiv(F.COLOR,0,g))}else V|=F.COLOR_BUFFER_BIT}U&&(V|=F.DEPTH_BUFFER_BIT),B&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),gt.dispose(),Tt.dispose(),zt.dispose(),v.dispose(),N.dispose(),nt.dispose(),M.dispose(),it.dispose(),vt.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Te),mt.removeEventListener("sessionend",ie),wt&&(wt.dispose(),wt=null),Pe.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=de.autoReset,U=J.enabled,B=J.autoUpdate,V=J.needsUpdate,O=J.type;bt(),de.autoReset=b,J.enabled=U,J.autoUpdate=B,J.needsUpdate=V,J.type=O}function rt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ct(b){const U=b.target;U.removeEventListener("dispose",ct),Pt(U)}function Pt(b){St(b),zt.remove(b)}function St(b){const U=zt.get(b).programs;U!==void 0&&(U.forEach(function(B){vt.releaseProgram(B)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,B,V,O,pt){U===null&&(U=Ct);const yt=O.isMesh&&O.matrixWorld.determinant()<0,Rt=Rp(b,U,B,V,O);_t.setMaterial(V,yt);let It=B.index,jt=1;if(V.wireframe===!0){if(It=Q.getWireframeAttribute(B),It===void 0)return;jt=2}const Bt=B.drawRange,Gt=B.attributes.position;let Ce=Bt.start*jt,an=(Bt.start+Bt.count)*jt;pt!==null&&(Ce=Math.max(Ce,pt.start*jt),an=Math.min(an,(pt.start+pt.count)*jt)),It!==null?(Ce=Math.max(Ce,0),an=Math.min(an,It.count)):Gt!=null&&(Ce=Math.max(Ce,0),an=Math.min(an,Gt.count));const ke=an-Ce;if(ke<0||ke===1/0)return;M.setup(O,V,Rt,B,It);let Xn,xe=Dt;if(It!==null&&(Xn=et.get(It),xe=Et,xe.setIndex(Xn)),O.isMesh)V.wireframe===!0?(_t.setLineWidth(V.wireframeLinewidth*Jt()),xe.setMode(F.LINES)):xe.setMode(F.TRIANGLES);else if(O.isLine){let $t=V.linewidth;$t===void 0&&($t=1),_t.setLineWidth($t*Jt()),O.isLineSegments?xe.setMode(F.LINES):O.isLineLoop?xe.setMode(F.LINE_LOOP):xe.setMode(F.LINE_STRIP)}else O.isPoints?xe.setMode(F.POINTS):O.isSprite&&xe.setMode(F.TRIANGLES);if(O.isBatchedMesh)xe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)xe.renderInstances(Ce,ke,O.count);else if(B.isInstancedBufferGeometry){const $t=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,$o=Math.min(B.instanceCount,$t);xe.renderInstances(Ce,ke,$o)}else xe.render(Ce,ke)};function Qt(b,U,B){b.transparent===!0&&b.side===On&&b.forceSinglePass===!1?(b.side=tn,b.needsUpdate=!0,Bs(b,U,B),b.side=Ai,b.needsUpdate=!0,Bs(b,U,B),b.side=On):Bs(b,U,B)}this.compile=function(b,U,B=null){B===null&&(B=b),f=Tt.get(B),f.init(),E.push(f),B.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),b!==B&&b.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(x._useLegacyLights);const V=new Set;return b.traverse(function(O){const pt=O.material;if(pt)if(Array.isArray(pt))for(let yt=0;yt<pt.length;yt++){const Rt=pt[yt];Qt(Rt,B,O),V.add(Rt)}else Qt(pt,B,O),V.add(pt)}),E.pop(),f=null,V},this.compileAsync=function(b,U,B=null){const V=this.compile(b,U,B);return new Promise(O=>{function pt(){if(V.forEach(function(yt){zt.get(yt).currentProgram.isReady()&&V.delete(yt)}),V.size===0){O(b);return}setTimeout(pt,10)}Mt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let te=null;function ye(b){te&&te(b)}function Te(){Pe.stop()}function ie(){Pe.start()}const Pe=new ed;Pe.setAnimationLoop(ye),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(b){te=b,mt.setAnimationLoop(b),b===null?Pe.stop():Pe.start()},mt.addEventListener("sessionstart",Te),mt.addEventListener("sessionend",ie),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(U),U=mt.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,A),f=Tt.get(b,E.length),f.init(),E.push(f),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),z.setFromProjectionMatrix(xt),ht=this.localClippingEnabled,Z=Ht.init(this.clippingPlanes,ht),_=gt.get(b,p.length),_.init(),p.push(_),Un(b,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(j,q),this.info.render.frame++,Z===!0&&Ht.beginShadows();const B=f.state.shadowsArray;if(J.render(B,b,U),Z===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(_,b),f.setupLights(x._useLegacyLights),U.isArrayCamera){const V=U.cameras;for(let O=0,pt=V.length;O<pt;O++){const yt=V[O];sc(_,b,yt,yt.viewport)}}else sc(_,b,U);A!==null&&(y.updateMultisampleRenderTarget(A),y.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(x,b,U),M.resetDefaultState(),K=-1,w=null,E.pop(),E.length>0?f=E[E.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Un(b,U,B,V){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||z.intersectsSprite(b)){V&&Ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xt);const yt=nt.update(b),Rt=b.material;Rt.visible&&_.push(b,yt,Rt,B,Ft.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||z.intersectsObject(b))){const yt=nt.update(b),Rt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ft.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ft.copy(yt.boundingSphere.center)),Ft.applyMatrix4(b.matrixWorld).applyMatrix4(xt)),Array.isArray(Rt)){const It=yt.groups;for(let jt=0,Bt=It.length;jt<Bt;jt++){const Gt=It[jt],Ce=Rt[Gt.materialIndex];Ce&&Ce.visible&&_.push(b,yt,Ce,B,Ft.z,Gt)}}else Rt.visible&&_.push(b,yt,Rt,B,Ft.z,null)}}const pt=b.children;for(let yt=0,Rt=pt.length;yt<Rt;yt++)Un(pt[yt],U,B,V)}function sc(b,U,B,V){const O=b.opaque,pt=b.transmissive,yt=b.transparent;f.setupLightsView(B),Z===!0&&Ht.setGlobalState(x.clippingPlanes,B),pt.length>0&&Pp(O,pt,U,B),V&&_t.viewport(S.copy(V)),O.length>0&&Os(O,U,B),pt.length>0&&Os(pt,U,B),yt.length>0&&Os(yt,U,B),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Pp(b,U,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const pt=Lt.isWebGL2;wt===null&&(wt=new ji(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?ps:Si,minFilter:ds,samples:pt?4:0})),x.getDrawingBufferSize(Nt),pt?wt.setSize(Nt.x,Nt.y):wt.setSize(Qa(Nt.x),Qa(Nt.y));const yt=x.getRenderTarget();x.setRenderTarget(wt),x.getClearColor(ot),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const Rt=x.toneMapping;x.toneMapping=Mi,Os(b,B,V),y.updateMultisampleRenderTarget(wt),y.updateRenderTargetMipmap(wt);let It=!1;for(let jt=0,Bt=U.length;jt<Bt;jt++){const Gt=U[jt],Ce=Gt.object,an=Gt.geometry,ke=Gt.material,Xn=Gt.group;if(ke.side===On&&Ce.layers.test(V.layers)){const xe=ke.side;ke.side=tn,ke.needsUpdate=!0,oc(Ce,B,V,an,ke,Xn),ke.side=xe,ke.needsUpdate=!0,It=!0}}It===!0&&(y.updateMultisampleRenderTarget(wt),y.updateRenderTargetMipmap(wt)),x.setRenderTarget(yt),x.setClearColor(ot,D),x.toneMapping=Rt}function Os(b,U,B){const V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,pt=b.length;O<pt;O++){const yt=b[O],Rt=yt.object,It=yt.geometry,jt=V===null?yt.material:V,Bt=yt.group;Rt.layers.test(B.layers)&&oc(Rt,U,B,It,jt,Bt)}}function oc(b,U,B,V,O,pt){b.onBeforeRender(x,U,B,V,O,pt),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(x,U,B,V,b,pt),O.transparent===!0&&O.side===On&&O.forceSinglePass===!1?(O.side=tn,O.needsUpdate=!0,x.renderBufferDirect(B,U,V,O,b,pt),O.side=Ai,O.needsUpdate=!0,x.renderBufferDirect(B,U,V,O,b,pt),O.side=On):x.renderBufferDirect(B,U,V,O,b,pt),b.onAfterRender(x,U,B,V,O,pt)}function Bs(b,U,B){U.isScene!==!0&&(U=Ct);const V=zt.get(b),O=f.state.lights,pt=f.state.shadowsArray,yt=O.state.version,Rt=vt.getParameters(b,O.state,pt,U,B),It=vt.getProgramCacheKey(Rt);let jt=V.programs;V.environment=b.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(b.isMeshStandardMaterial?N:v).get(b.envMap||V.environment),jt===void 0&&(b.addEventListener("dispose",ct),jt=new Map,V.programs=jt);let Bt=jt.get(It);if(Bt!==void 0){if(V.currentProgram===Bt&&V.lightsStateVersion===yt)return lc(b,Rt),Bt}else Rt.uniforms=vt.getUniforms(b),b.onBuild(B,Rt,x),b.onBeforeCompile(Rt,x),Bt=vt.acquireProgram(Rt,It),jt.set(It,Bt),V.uniforms=Rt.uniforms;const Gt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Gt.clippingPlanes=Ht.uniform),lc(b,Rt),V.needsLights=Dp(b),V.lightsStateVersion=yt,V.needsLights&&(Gt.ambientLightColor.value=O.state.ambient,Gt.lightProbe.value=O.state.probe,Gt.directionalLights.value=O.state.directional,Gt.directionalLightShadows.value=O.state.directionalShadow,Gt.spotLights.value=O.state.spot,Gt.spotLightShadows.value=O.state.spotShadow,Gt.rectAreaLights.value=O.state.rectArea,Gt.ltc_1.value=O.state.rectAreaLTC1,Gt.ltc_2.value=O.state.rectAreaLTC2,Gt.pointLights.value=O.state.point,Gt.pointLightShadows.value=O.state.pointShadow,Gt.hemisphereLights.value=O.state.hemi,Gt.directionalShadowMap.value=O.state.directionalShadowMap,Gt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Gt.spotShadowMap.value=O.state.spotShadowMap,Gt.spotLightMatrix.value=O.state.spotLightMatrix,Gt.spotLightMap.value=O.state.spotLightMap,Gt.pointShadowMap.value=O.state.pointShadowMap,Gt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Bt,V.uniformsList=null,Bt}function ac(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=_o.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function lc(b,U){const B=zt.get(b);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Rp(b,U,B,V,O){U.isScene!==!0&&(U=Ct),y.resetTextureUnits();const pt=U.fog,yt=V.isMeshStandardMaterial?U.environment:null,Rt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:si,It=(V.isMeshStandardMaterial?N:v).get(V.envMap||yt),jt=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Bt=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Gt=!!B.morphAttributes.position,Ce=!!B.morphAttributes.normal,an=!!B.morphAttributes.color;let ke=Mi;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ke=x.toneMapping);const Xn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,xe=Xn!==void 0?Xn.length:0,$t=zt.get(V),$o=f.state.lights;if(Z===!0&&(ht===!0||b!==w)){const vn=b===w&&V.id===K;Ht.setState(V,b,vn)}let Ee=!1;V.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==$o.state.version||$t.outputColorSpace!==Rt||O.isBatchedMesh&&$t.batching===!1||!O.isBatchedMesh&&$t.batching===!0||O.isInstancedMesh&&$t.instancing===!1||!O.isInstancedMesh&&$t.instancing===!0||O.isSkinnedMesh&&$t.skinning===!1||!O.isSkinnedMesh&&$t.skinning===!0||O.isInstancedMesh&&$t.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&$t.instancingColor===!1&&O.instanceColor!==null||$t.envMap!==It||V.fog===!0&&$t.fog!==pt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Ht.numPlanes||$t.numIntersection!==Ht.numIntersection)||$t.vertexAlphas!==jt||$t.vertexTangents!==Bt||$t.morphTargets!==Gt||$t.morphNormals!==Ce||$t.morphColors!==an||$t.toneMapping!==ke||Lt.isWebGL2===!0&&$t.morphTargetsCount!==xe)&&(Ee=!0):(Ee=!0,$t.__version=V.version);let Ri=$t.currentProgram;Ee===!0&&(Ri=Bs(V,U,O));let cc=!1,$r=!1,Ko=!1;const je=Ri.getUniforms(),Li=$t.uniforms;if(_t.useProgram(Ri.program)&&(cc=!0,$r=!0,Ko=!0),V.id!==K&&(K=V.id,$r=!0),cc||w!==b){je.setValue(F,"projectionMatrix",b.projectionMatrix),je.setValue(F,"viewMatrix",b.matrixWorldInverse);const vn=je.map.cameraPosition;vn!==void 0&&vn.setValue(F,Ft.setFromMatrixPosition(b.matrixWorld)),Lt.logarithmicDepthBuffer&&je.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&je.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,$r=!0,Ko=!0)}if(O.isSkinnedMesh){je.setOptional(F,O,"bindMatrix"),je.setOptional(F,O,"bindMatrixInverse");const vn=O.skeleton;vn&&(Lt.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),je.setValue(F,"boneTexture",vn.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(je.setOptional(F,O,"batchingTexture"),je.setValue(F,"batchingTexture",O._matricesTexture,y));const Zo=B.morphAttributes;if((Zo.position!==void 0||Zo.normal!==void 0||Zo.color!==void 0&&Lt.isWebGL2===!0)&&Xt.update(O,B,Ri),($r||$t.receiveShadow!==O.receiveShadow)&&($t.receiveShadow=O.receiveShadow,je.setValue(F,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Li.envMap.value=It,Li.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),$r&&(je.setValue(F,"toneMappingExposure",x.toneMappingExposure),$t.needsLights&&Lp(Li,Ko),pt&&V.fog===!0&&ut.refreshFogUniforms(Li,pt),ut.refreshMaterialUniforms(Li,V,Y,H,wt),_o.upload(F,ac($t),Li,y)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(_o.upload(F,ac($t),Li,y),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&je.setValue(F,"center",O.center),je.setValue(F,"modelViewMatrix",O.modelViewMatrix),je.setValue(F,"normalMatrix",O.normalMatrix),je.setValue(F,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const vn=V.uniformsGroups;for(let Jo=0,Ip=vn.length;Jo<Ip;Jo++)if(Lt.isWebGL2){const uc=vn[Jo];it.update(uc,Ri),it.bind(uc,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function Lp(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Dp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,B){zt.get(b.texture).__webglTexture=U,zt.get(b.depthTexture).__webglTexture=B;const V=zt.get(b);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,U){const B=zt.get(b);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,B=0){A=b,L=U,R=B;let V=!0,O=null,pt=!1,yt=!1;if(b){const It=zt.get(b);It.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(F.FRAMEBUFFER,null),V=!1):It.__webglFramebuffer===void 0?y.setupRenderTarget(b):It.__hasExternalTextures&&y.rebindTextures(b,zt.get(b.texture).__webglTexture,zt.get(b.depthTexture).__webglTexture);const jt=b.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(yt=!0);const Bt=zt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[U])?O=Bt[U][B]:O=Bt[U],pt=!0):Lt.isWebGL2&&b.samples>0&&y.useMultisampledRTT(b)===!1?O=zt.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?O=Bt[B]:O=Bt,S.copy(b.viewport),G.copy(b.scissor),X=b.scissorTest}else S.copy($).multiplyScalar(Y).floor(),G.copy(st).multiplyScalar(Y).floor(),X=at;if(_t.bindFramebuffer(F.FRAMEBUFFER,O)&&Lt.drawBuffers&&V&&_t.drawBuffers(b,O),_t.viewport(S),_t.scissor(G),_t.setScissorTest(X),pt){const It=zt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,It.__webglTexture,B)}else if(yt){const It=zt.get(b.texture),jt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.__webglTexture,B||0,jt)}K=-1},this.readRenderTargetPixels=function(b,U,B,V,O,pt,yt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=zt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){_t.bindFramebuffer(F.FRAMEBUFFER,Rt);try{const It=b.texture,jt=It.format,Bt=It.type;if(jt!==Dn&&dt.convert(jt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=Bt===ps&&(Mt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(Bt!==Si&&dt.convert(Bt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===xi&&(Lt.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-V&&B>=0&&B<=b.height-O&&F.readPixels(U,B,V,O,dt.convert(jt),dt.convert(Bt),pt)}finally{const It=A!==null?zt.get(A).__webglFramebuffer:null;_t.bindFramebuffer(F.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(b,U,B=0){const V=Math.pow(2,-B),O=Math.floor(U.image.width*V),pt=Math.floor(U.image.height*V);y.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,B,0,0,b.x,b.y,O,pt),_t.unbindTexture()},this.copyTextureToTexture=function(b,U,B,V=0){const O=U.image.width,pt=U.image.height,yt=dt.convert(B.format),Rt=dt.convert(B.type);y.setTexture2D(B,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,V,b.x,b.y,O,pt,yt,Rt,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,V,b.x,b.y,U.mipmaps[0].width,U.mipmaps[0].height,yt,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,V,b.x,b.y,yt,Rt,U.image),V===0&&B.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(b,U,B,V,O=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pt=b.max.x-b.min.x+1,yt=b.max.y-b.min.y+1,Rt=b.max.z-b.min.z+1,It=dt.convert(V.format),jt=dt.convert(V.type);let Bt;if(V.isData3DTexture)y.setTexture3D(V,0),Bt=F.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)y.setTexture2DArray(V,0),Bt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const Gt=F.getParameter(F.UNPACK_ROW_LENGTH),Ce=F.getParameter(F.UNPACK_IMAGE_HEIGHT),an=F.getParameter(F.UNPACK_SKIP_PIXELS),ke=F.getParameter(F.UNPACK_SKIP_ROWS),Xn=F.getParameter(F.UNPACK_SKIP_IMAGES),xe=B.isCompressedTexture?B.mipmaps[O]:B.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,xe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,b.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,b.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,b.min.z),B.isDataTexture||B.isData3DTexture?F.texSubImage3D(Bt,O,U.x,U.y,U.z,pt,yt,Rt,It,jt,xe.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Bt,O,U.x,U.y,U.z,pt,yt,Rt,It,xe.data)):F.texSubImage3D(Bt,O,U.x,U.y,U.z,pt,yt,Rt,It,jt,xe),F.pixelStorei(F.UNPACK_ROW_LENGTH,Gt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ce),F.pixelStorei(F.UNPACK_SKIP_PIXELS,an),F.pixelStorei(F.UNPACK_SKIP_ROWS,ke),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xn),O===0&&V.generateMipmaps&&F.generateMipmap(Bt),_t.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),_t.unbindTexture()},this.resetState=function(){L=0,R=0,A=null,_t.reset(),M.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xl?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===Bo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?Wi:Hh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Wi?ze:si}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class H0 extends cd{}H0.prototype.isWebGL1Renderer=!0;class ud extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Ru extends fn{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const br=new le,Lu=new le,ao=[],Du=new Qi,G0=new le,es=new me,ns=new Vr;class W0 extends me{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ru(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,G0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,br),Du.copy(t.boundingBox).applyMatrix4(br),this.boundingBox.union(Du)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,br),ns.copy(t.boundingSphere).applyMatrix4(br),this.boundingSphere.union(ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,r=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(i),t.ray.intersectsSphere(ns)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,br),Lu.multiplyMatrices(i,br),es.matrixWorld=Lu,es.raycast(t,ao);for(let a=0,o=ao.length;a<o;a++){const l=ao[a];l.instanceId=s,l.object=this,e.push(l)}ao.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ru(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends zr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Iu=new C,Uu=new C,Nu=new le,Pa=new ko,lo=new Vr;class fs extends Fe{constructor(t=new Xe,e=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Iu.fromBufferAttribute(e,r-1),Uu.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Iu.distanceTo(Uu);t.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(r),lo.radius+=s,t.ray.intersectsSphere(lo)===!1)return;Nu.copy(r).invert(),Pa.copy(t.ray).applyMatrix4(Nu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,u=new C,h=new C,d=new C,m=this.isLineSegments?2:1,g=i.index,f=i.attributes.position;if(g!==null){const p=Math.max(0,a.start),E=Math.min(g.count,a.start+a.count);for(let x=p,T=E-1;x<T;x+=m){const L=g.getX(x),R=g.getX(x+1);if(c.fromBufferAttribute(f,L),u.fromBufferAttribute(f,R),Pa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const K=t.ray.origin.distanceTo(d);K<t.near||K>t.far||e.push({distance:K,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),E=Math.min(f.count,a.start+a.count);for(let x=p,T=E-1;x<T;x+=m){if(c.fromBufferAttribute(f,x),u.fromBufferAttribute(f,x+1),Pa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(d);R<t.near||R>t.far||e.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Fu=new C,Ou=new C;class Ml extends fs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Fu.fromBufferAttribute(e,r),Ou.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Fu.distanceTo(Ou);t.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sl extends Xe{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new C,d=new C,m=[],g=[],_=[],f=[];for(let p=0;p<=i;p++){const E=[],x=p/i;let T=0;p===0&&a===0?T=.5/e:p===i&&l===Math.PI&&(T=-.5/e);for(let L=0;L<=e;L++){const R=L/e;h.x=-t*Math.cos(r+R*s)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(r+R*s)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),f.push(R+T,1-x),E.push(c++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<e;E++){const x=u[p][E+1],T=u[p][E],L=u[p+1][E],R=u[p+1][E+1];(p!==0||a>0)&&m.push(x,T,R),(p!==i-1||l<Math.PI)&&m.push(T,L,R)}this.setIndex(m),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nl extends zr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zo extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class X0 extends zo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ra=new le,Bu=new C,ku=new C;class hd{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bu),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Vu=new le,is=new C,La=new C;class j0 extends hd{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),is.setFromMatrixPosition(t.matrixWorld),i.position.copy(is),La.copy(i.position),La.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(La),i.updateMatrixWorld(),r.makeTranslation(-is.x,-is.y,-is.z),Vu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu)}}class q0 extends zo{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new j0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Y0 extends hd{constructor(){super(new nd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $0 extends zo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Y0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class K0 extends zo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Z0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=zu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function zu(){return(typeof performance>"u"?Date:performance).now()}class J0{constructor(t,e,i=0,r=1/0){this.ray=new ko(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return il(t,this,i,e),i.sort(Hu),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)il(t[r],this,i,e);return i.sort(Hu),i}}function Hu(n,t){return n.distance-t.distance}function il(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)il(r[s],t,e,!0)}}class Gu{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos($e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Wu=new C,co=new C;class Q0{constructor(t=new C,e=new C){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Wu.subVectors(t,this.start),co.subVectors(this.end,this.start);const i=co.dot(co);let s=co.dot(Wu)/i;return e&&(s=$e(s,0,1)),s}closestPointToPoint(t,e,i){const r=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class tx extends Ml{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Xe;r.setAttribute("position",new Ke(e,3)),r.setAttribute("color",new Ke(i,3));const s=new Yi({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,i){const r=new qt,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_l);const Xu={type:"change"},Da={type:"start"},ju={type:"end"},uo=new ko,qu=new En,ex=Math.cos(70*Ff.DEG2RAD);class nx extends Ji{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nr.ROTATE,MIDDLE:nr.DOLLY,RIGHT:nr.PAN},this.touches={ONE:ir.ROTATE,TWO:ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",Tt),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Tt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Xu),i.update(),s=r.NONE},this.update=function(){const M=new C,it=new dn().setFromUnitVectors(t.up,new C(0,1,0)),bt=it.clone().invert(),mt=new C,tt=new dn,P=new C,rt=2*Math.PI;return function(Pt=null){const St=i.object.position;M.copy(St).sub(i.target),M.applyQuaternion(it),o.setFromVector3(M),i.autoRotate&&s===r.NONE&&X(S(Pt)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Qt=i.minAzimuthAngle,te=i.maxAzimuthAngle;isFinite(Qt)&&isFinite(te)&&(Qt<-Math.PI?Qt+=rt:Qt>Math.PI&&(Qt-=rt),te<-Math.PI?te+=rt:te>Math.PI&&(te-=rt),Qt<=te?o.theta=Math.max(Qt,Math.min(te,o.theta)):o.theta=o.theta>(Qt+te)/2?Math.max(Qt,o.theta):Math.min(te,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?o.radius=$(o.radius):o.radius=$(o.radius*c),M.setFromSpherical(o),M.applyQuaternion(bt),St.copy(i.target).add(M),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ye=!1;if(i.zoomToCursor&&R){let Te=null;if(i.object.isPerspectiveCamera){const ie=M.length();Te=$(ie*c);const Pe=ie-Te;i.object.position.addScaledVector(T,Pe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const ie=new C(L.x,L.y,0);ie.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ye=!0;const Pe=new C(L.x,L.y,0);Pe.unproject(i.object),i.object.position.sub(Pe).add(ie),i.object.updateMatrixWorld(),Te=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Te!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Te).add(i.object.position):(uo.origin.copy(i.object.position),uo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(uo.direction))<ex?t.lookAt(i.target):(qu.setFromNormalAndCoplanarPoint(i.object.up,i.target),uo.intersectPlane(qu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ye=!0);return c=1,R=!1,ye||mt.distanceToSquared(i.object.position)>a||8*(1-tt.dot(i.object.quaternion))>a||P.distanceToSquared(i.target)>0?(i.dispatchEvent(Xu),mt.copy(i.object.position),tt.copy(i.object.quaternion),P.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",se),i.domElement.removeEventListener("pointerdown",y),i.domElement.removeEventListener("pointercancel",N),i.domElement.removeEventListener("wheel",nt),i.domElement.removeEventListener("pointermove",v),i.domElement.removeEventListener("pointerup",N),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Tt),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Gu,l=new Gu;let c=1;const u=new C,h=new Ut,d=new Ut,m=new Ut,g=new Ut,_=new Ut,f=new Ut,p=new Ut,E=new Ut,x=new Ut,T=new C,L=new Ut;let R=!1;const A=[],K={};let w=!1;function S(M){return M!==null?2*Math.PI/60*i.autoRotateSpeed*M:2*Math.PI/60/60*i.autoRotateSpeed}function G(M){const it=Math.abs(M*.01);return Math.pow(.95,i.zoomSpeed*it)}function X(M){l.theta-=M}function ot(M){l.phi-=M}const D=function(){const M=new C;return function(bt,mt){M.setFromMatrixColumn(mt,0),M.multiplyScalar(-bt),u.add(M)}}(),k=function(){const M=new C;return function(bt,mt){i.screenSpacePanning===!0?M.setFromMatrixColumn(mt,1):(M.setFromMatrixColumn(mt,0),M.crossVectors(i.object.up,M)),M.multiplyScalar(bt),u.add(M)}}(),H=function(){const M=new C;return function(bt,mt){const tt=i.domElement;if(i.object.isPerspectiveCamera){const P=i.object.position;M.copy(P).sub(i.target);let rt=M.length();rt*=Math.tan(i.object.fov/2*Math.PI/180),D(2*bt*rt/tt.clientHeight,i.object.matrix),k(2*mt*rt/tt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(D(bt*(i.object.right-i.object.left)/i.object.zoom/tt.clientWidth,i.object.matrix),k(mt*(i.object.top-i.object.bottom)/i.object.zoom/tt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Y(M){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(M){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(M,it){if(!i.zoomToCursor)return;R=!0;const bt=i.domElement.getBoundingClientRect(),mt=M-bt.left,tt=it-bt.top,P=bt.width,rt=bt.height;L.x=mt/P*2-1,L.y=-(tt/rt)*2+1,T.set(L.x,L.y,1).unproject(i.object).sub(i.object.position).normalize()}function $(M){return Math.max(i.minDistance,Math.min(i.maxDistance,M))}function st(M){h.set(M.clientX,M.clientY)}function at(M){q(M.clientX,M.clientX),p.set(M.clientX,M.clientY)}function z(M){g.set(M.clientX,M.clientY)}function Z(M){d.set(M.clientX,M.clientY),m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const it=i.domElement;X(2*Math.PI*m.x/it.clientHeight),ot(2*Math.PI*m.y/it.clientHeight),h.copy(d),i.update()}function ht(M){E.set(M.clientX,M.clientY),x.subVectors(E,p),x.y>0?Y(G(x.y)):x.y<0&&j(G(x.y)),p.copy(E),i.update()}function wt(M){_.set(M.clientX,M.clientY),f.subVectors(_,g).multiplyScalar(i.panSpeed),H(f.x,f.y),g.copy(_),i.update()}function xt(M){q(M.clientX,M.clientY),M.deltaY<0?j(G(M.deltaY)):M.deltaY>0&&Y(G(M.deltaY)),i.update()}function Nt(M){let it=!1;switch(M.code){case i.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?ot(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),it=!0;break;case i.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?ot(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),it=!0;break;case i.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?X(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),it=!0;break;case i.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?X(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),it=!0;break}it&&(M.preventDefault(),i.update())}function Ft(M){if(A.length===1)h.set(M.pageX,M.pageY);else{const it=dt(M),bt=.5*(M.pageX+it.x),mt=.5*(M.pageY+it.y);h.set(bt,mt)}}function Ct(M){if(A.length===1)g.set(M.pageX,M.pageY);else{const it=dt(M),bt=.5*(M.pageX+it.x),mt=.5*(M.pageY+it.y);g.set(bt,mt)}}function Jt(M){const it=dt(M),bt=M.pageX-it.x,mt=M.pageY-it.y,tt=Math.sqrt(bt*bt+mt*mt);p.set(0,tt)}function F(M){i.enableZoom&&Jt(M),i.enablePan&&Ct(M)}function Ge(M){i.enableZoom&&Jt(M),i.enableRotate&&Ft(M)}function Mt(M){if(A.length==1)d.set(M.pageX,M.pageY);else{const bt=dt(M),mt=.5*(M.pageX+bt.x),tt=.5*(M.pageY+bt.y);d.set(mt,tt)}m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const it=i.domElement;X(2*Math.PI*m.x/it.clientHeight),ot(2*Math.PI*m.y/it.clientHeight),h.copy(d)}function Lt(M){if(A.length===1)_.set(M.pageX,M.pageY);else{const it=dt(M),bt=.5*(M.pageX+it.x),mt=.5*(M.pageY+it.y);_.set(bt,mt)}f.subVectors(_,g).multiplyScalar(i.panSpeed),H(f.x,f.y),g.copy(_)}function _t(M){const it=dt(M),bt=M.pageX-it.x,mt=M.pageY-it.y,tt=Math.sqrt(bt*bt+mt*mt);E.set(0,tt),x.set(0,Math.pow(E.y/p.y,i.zoomSpeed)),Y(x.y),p.copy(E);const P=(M.pageX+it.x)*.5,rt=(M.pageY+it.y)*.5;q(P,rt)}function de(M){i.enableZoom&&_t(M),i.enablePan&&Lt(M)}function zt(M){i.enableZoom&&_t(M),i.enableRotate&&Mt(M)}function y(M){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(M.pointerId),i.domElement.addEventListener("pointermove",v),i.domElement.addEventListener("pointerup",N)),Xt(M),M.pointerType==="touch"?Ht(M):et(M))}function v(M){i.enabled!==!1&&(M.pointerType==="touch"?J(M):Q(M))}function N(M){Dt(M),A.length===0&&(i.domElement.releasePointerCapture(M.pointerId),i.domElement.removeEventListener("pointermove",v),i.domElement.removeEventListener("pointerup",N)),i.dispatchEvent(ju),s=r.NONE}function et(M){let it;switch(M.button){case 0:it=i.mouseButtons.LEFT;break;case 1:it=i.mouseButtons.MIDDLE;break;case 2:it=i.mouseButtons.RIGHT;break;default:it=-1}switch(it){case nr.DOLLY:if(i.enableZoom===!1)return;at(M),s=r.DOLLY;break;case nr.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enablePan===!1)return;z(M),s=r.PAN}else{if(i.enableRotate===!1)return;st(M),s=r.ROTATE}break;case nr.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enableRotate===!1)return;st(M),s=r.ROTATE}else{if(i.enablePan===!1)return;z(M),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Da)}function Q(M){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Z(M);break;case r.DOLLY:if(i.enableZoom===!1)return;ht(M);break;case r.PAN:if(i.enablePan===!1)return;wt(M);break}}function nt(M){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(M.preventDefault(),i.dispatchEvent(Da),xt(vt(M)),i.dispatchEvent(ju))}function vt(M){const it=M.deltaMode,bt={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(it){case 1:bt.deltaY*=16;break;case 2:bt.deltaY*=100;break}return M.ctrlKey&&!w&&(bt.deltaY*=10),bt}function ut(M){M.key==="Control"&&(w=!0,document.addEventListener("keyup",gt,{passive:!0,capture:!0}))}function gt(M){M.key==="Control"&&(w=!1,document.removeEventListener("keyup",gt,{passive:!0,capture:!0}))}function Tt(M){i.enabled===!1||i.enablePan===!1||Nt(M)}function Ht(M){switch(Et(M),A.length){case 1:switch(i.touches.ONE){case ir.ROTATE:if(i.enableRotate===!1)return;Ft(M),s=r.TOUCH_ROTATE;break;case ir.PAN:if(i.enablePan===!1)return;Ct(M),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ir.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;F(M),s=r.TOUCH_DOLLY_PAN;break;case ir.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ge(M),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Da)}function J(M){switch(Et(M),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Mt(M),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Lt(M),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;de(M),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;zt(M),i.update();break;default:s=r.NONE}}function se(M){i.enabled!==!1&&M.preventDefault()}function Xt(M){A.push(M.pointerId)}function Dt(M){delete K[M.pointerId];for(let it=0;it<A.length;it++)if(A[it]==M.pointerId){A.splice(it,1);return}}function Et(M){let it=K[M.pointerId];it===void 0&&(it=new Ut,K[M.pointerId]=it),it.set(M.pageX,M.pageY)}function dt(M){const it=M.pointerId===A[0]?A[1]:A[0];return K[it]}i.domElement.addEventListener("contextmenu",se),i.domElement.addEventListener("pointerdown",y),i.domElement.addEventListener("pointercancel",N),i.domElement.addEventListener("wheel",nt,{passive:!1}),document.addEventListener("keydown",ut,{passive:!0,capture:!0}),this.update()}}class ix extends ud{constructor(t=null){super();const e=new Gr;e.deleteAttribute("uv");const i=new nl({side:tn}),r=new nl;let s=5;t!==null&&t._useLegacyLights===!1&&(s=900);const a=new q0(16777215,s,28,2);a.position.set(.418,16.199,.3),this.add(a);const o=new me(e,i);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const l=new me(e,r);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new me(e,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const u=new me(e,r);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const h=new me(e,r);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const d=new me(e,r);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const m=new me(e,r);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);const g=new me(e,wr(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);const _=new me(e,wr(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);const f=new me(e,wr(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);const p=new me(e,wr(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const E=new me(e,wr(20));E.position.set(3.235,11.486,-12.541),E.scale.set(2.5,2,.1),this.add(E);const x=new me(e,wr(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function wr(n){const t=new Hr;return t.color.setScalar(n),t}/*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */function he(n){return n==null}function Tl(n){return n!==null&&typeof n=="object"}function rl(n){return n!==null&&typeof n=="object"}function rx(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function $i(n,t){return Array.from(new Set([...Object.keys(n),...Object.keys(t)])).reduce((i,r)=>{const s=n[r],a=t[r];return rl(s)&&rl(a)?Object.assign(Object.assign({},i),{[r]:$i(s,a)}):Object.assign(Object.assign({},i),{[r]:r in t?a:s})},{})}function Cl(n){return Tl(n)?"target"in n:!1}const sx={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:n=>`Not compatible with  plugin '${n.id}'`,propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class Me{static alreadyDisposed(){return new Me({type:"alreadydisposed"})}static notBindable(){return new Me({type:"notbindable"})}static notCompatible(t,e){return new Me({type:"notcompatible",context:{id:`${t}.${e}`}})}static propertyNotFound(t){return new Me({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new Me({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=sx[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}toString(){return this.message}}class Co{constructor(t,e){this.obj_=t,this.key=e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}read(){return this.obj_[this.key]}write(t){this.obj_[this.key]=t}writeProperty(t,e){const i=this.read();if(!Co.isBindable(i))throw Me.notBindable();if(!(t in i))throw Me.propertyNotFound(t);i[t]=e}}class Ie{constructor(){this.observers_={}}on(t,e,i){var r;let s=this.observers_[t];return s||(s=this.observers_[t]=[]),s.push({handler:e,key:(r=i==null?void 0:i.key)!==null&&r!==void 0?r:e}),this}off(t,e){const i=this.observers_[t];return i&&(this.observers_[t]=i.filter(r=>r.key!==e)),this}emit(t,e){const i=this.observers_[t];i&&i.forEach(r=>{r.handler(e)})}}class ox{constructor(t,e){var i;this.constraint_=e==null?void 0:e.constraint,this.equals_=(i=e==null?void 0:e.equals)!==null&&i!==void 0?i:(r,s)=>r===s,this.emitter=new Ie,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.constraint_?this.constraint_.constrain(t):t,s=this.rawValue_;this.equals_(s,r)&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=r,this.emitter.emit("change",{options:i,previousRawValue:s,rawValue:r,sender:this}))}}class ax{constructor(t){this.emitter=new Ie,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.value_;r===t&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:i,previousRawValue:r,rawValue:this.value_,sender:this}))}}class lx{constructor(t){this.emitter=new Ie,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function ve(n,t){const e=t==null?void 0:t.constraint,i=t==null?void 0:t.equals;return!e&&!i?new ax(n):new ox(n,t)}function cx(n){return[new lx(n),(t,e)=>{n.setRawValue(t,e)}]}class Yt{constructor(t){this.emitter=new Ie,this.valMap_=t;for(const e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((i,r)=>Object.assign(i,{[r]:ve(t[r])}),{})}static fromObject(t){const e=this.createCore(t);return new Yt(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}}class Es{constructor(t){this.values=Yt.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");return Math.min(Math.max(t,i),e)}}class ux{constructor(t){this.values=Yt.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");let r=t;return he(i)||(r=Math.max(r,i)),he(e)||(r=Math.min(r,e)),r}}class hx{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){const e=this.origin%this.step,i=Math.round((t-e)/this.step);return e+i*this.step}}class dx{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const px={"**":(n,t)=>Math.pow(n,t),"*":(n,t)=>n*t,"/":(n,t)=>n/t,"%":(n,t)=>n%t,"+":(n,t)=>n+t,"-":(n,t)=>n-t,"<<":(n,t)=>n<<t,">>":(n,t)=>n>>t,">>>":(n,t)=>n>>>t,"&":(n,t)=>n&t,"^":(n,t)=>n^t,"|":(n,t)=>n|t};class fx{constructor(t,e,i){this.left=e,this.operator=t,this.right=i}evaluate(){const t=px[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const mx={"+":n=>n,"-":n=>-n,"~":n=>~n};class gx{constructor(t,e){this.operator=t,this.expression=e}evaluate(){const t=mx[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Al(n){return(t,e)=>{for(let i=0;i<n.length;i++){const r=n[i](t,e);if(r!=="")return r}return""}}function ms(n,t){var e;const i=n.substr(t).match(/^\s+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function _x(n,t){const e=n.substr(t,1);return e.match(/^[1-9]$/)?e:""}function gs(n,t){var e;const i=n.substr(t).match(/^[0-9]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function vx(n,t){const e=gs(n,t);if(e!=="")return e;const i=n.substr(t,1);if(t+=1,i!=="-"&&i!=="+")return"";const r=gs(n,t);return r===""?"":i+r}function Pl(n,t){const e=n.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";const i=vx(n,t);return i===""?"":e+i}function dd(n,t){const e=n.substr(t,1);if(e==="0")return e;const i=_x(n,t);return t+=i.length,i===""?"":i+gs(n,t)}function xx(n,t){const e=dd(n,t);if(t+=e.length,e==="")return"";const i=n.substr(t,1);if(t+=i.length,i!==".")return"";const r=gs(n,t);return t+=r.length,e+i+r+Pl(n,t)}function bx(n,t){const e=n.substr(t,1);if(t+=e.length,e!==".")return"";const i=gs(n,t);return t+=i.length,i===""?"":e+i+Pl(n,t)}function wx(n,t){const e=dd(n,t);return t+=e.length,e===""?"":e+Pl(n,t)}const yx=Al([xx,bx,wx]);function Ex(n,t){var e;const i=n.substr(t).match(/^[01]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Mx(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";const i=Ex(n,t);return i===""?"":e+i}function Sx(n,t){var e;const i=n.substr(t).match(/^[0-7]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Tx(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";const i=Sx(n,t);return i===""?"":e+i}function Cx(n,t){var e;const i=n.substr(t).match(/^[0-9a-f]+/i);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Ax(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";const i=Cx(n,t);return i===""?"":e+i}const Px=Al([Mx,Tx,Ax]),Rx=Al([Px,yx]);function Lx(n,t){const e=Rx(n,t);return t+=e.length,e===""?null:{evaluable:new dx(e),cursor:t}}function Dx(n,t){const e=n.substr(t,1);if(t+=e.length,e!=="(")return null;const i=fd(n,t);if(!i)return null;t=i.cursor,t+=ms(n,t).length;const r=n.substr(t,1);return t+=r.length,r!==")"?null:{evaluable:i.evaluable,cursor:t}}function Ix(n,t){var e;return(e=Lx(n,t))!==null&&e!==void 0?e:Dx(n,t)}function pd(n,t){const e=Ix(n,t);if(e)return e;const i=n.substr(t,1);if(t+=i.length,i!=="+"&&i!=="-"&&i!=="~")return null;const r=pd(n,t);return r?(t=r.cursor,{cursor:t,evaluable:new gx(i,r.evaluable)}):null}function Ux(n,t,e){e+=ms(t,e).length;const i=n.filter(r=>t.startsWith(r,e))[0];return i?(e+=i.length,e+=ms(t,e).length,{cursor:e,operator:i}):null}function Nx(n,t){return(e,i)=>{const r=n(e,i);if(!r)return null;i=r.cursor;let s=r.evaluable;for(;;){const a=Ux(t,e,i);if(!a)break;i=a.cursor;const o=n(e,i);if(!o)return null;i=o.cursor,s=new fx(a.operator,s,o.evaluable)}return s?{cursor:i,evaluable:s}:null}}const Fx=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,t)=>Nx(n,t),pd);function fd(n,t){return t+=ms(n,t).length,Fx(n,t)}function Ox(n){const t=fd(n,0);return!t||t.cursor+ms(n,t.cursor).length!==n.length?null:t.evaluable}function oi(n){var t;const e=Ox(n);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function md(n){if(typeof n=="number")return n;if(typeof n=="string"){const t=oi(n);if(!he(t))return t}return 0}function Bx(n){return String(n)}function on(n){return t=>t.toFixed(Math.max(Math.min(n,20),0))}function oe(n,t,e,i,r){const s=(n-t)/(e-t);return i+s*(r-i)}function Yu(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Ne(n,t,e){return Math.min(Math.max(n,t),e)}function gd(n,t){return(n%t+t)%t}function kx(n,t){return he(n.step)?Math.max(Yu(t),2):Yu(n.step)}function _d(n){var t;return(t=n.step)!==null&&t!==void 0?t:1}function vd(n,t){var e;const i=Math.abs((e=n.step)!==null&&e!==void 0?e:t);return i===0?.1:Math.pow(10,Math.floor(Math.log10(i))-1)}function xd(n,t){return he(n.step)?null:new hx(n.step,t)}function bd(n){return!he(n.max)&&!he(n.min)?new Es({max:n.max,min:n.min}):!he(n.max)||!he(n.min)?new ux({max:n.max,min:n.min}):null}function wd(n,t){var e,i,r;return{formatter:(e=n.format)!==null&&e!==void 0?e:on(kx(n,t)),keyScale:(i=n.keyScale)!==null&&i!==void 0?i:_d(n),pointerScale:(r=n.pointerScale)!==null&&r!==void 0?r:vd(n,t)}}function yd(n){return{format:n.optional.function,keyScale:n.optional.number,max:n.optional.number,min:n.optional.number,pointerScale:n.optional.number,step:n.optional.number}}function Rl(n){return{constraint:n.constraint,textProps:Yt.fromObject(wd(n.params,n.initialValue))}}class tr{constructor(t){this.controller=t}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(t){this.controller.viewProps.set("disabled",t)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(t){this.controller.viewProps.set("hidden",t)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(t){return this.controller.importState(t)}exportState(){return this.controller.exportState()}}class Ho{constructor(t){this.target=t}}class Ms extends Ho{constructor(t,e,i){super(t),this.value=e,this.last=i??!0}}class Vx extends Ho{constructor(t,e){super(t),this.expanded=e}}class zx extends Ho{constructor(t,e){super(t),this.index=e}}class Hx extends Ho{constructor(t,e){super(t),this.native=e}}class _s extends tr{constructor(t){super(t),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new Ie,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(t){this.controller.tag=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.controller.value.fetch()}onValueChange_(t){const e=this.controller.value;this.emitter_.emit("change",new Ms(this,e.binding.target.read(),t.options.last))}}class Gx{constructor(t,e){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e,this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new Ie}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function Wx(n){if(!("binding"in n))return!1;const t=n.binding;return Cl(t)&&"read"in t&&"write"in t}function Xx(n,t){const i=Object.keys(t).reduce((r,s)=>{if(r===void 0)return;const a=t[s],o=a(n[s]);return o.succeeded?Object.assign(Object.assign({},r),{[s]:o.value}):void 0},{});return i}function jx(n,t){return n.reduce((e,i)=>{if(e===void 0)return;const r=t(i);if(!(!r.succeeded||r.value===void 0))return[...e,r.value]},[])}function qx(n){return n===null?!1:typeof n=="object"}function Zn(n){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};const i=n(e);return i!==void 0?{succeeded:!0,value:i}:{succeeded:!1,value:void 0}}}function $u(n){return{custom:t=>Zn(t)(n),boolean:Zn(t=>typeof t=="boolean"?t:void 0)(n),number:Zn(t=>typeof t=="number"?t:void 0)(n),string:Zn(t=>typeof t=="string"?t:void 0)(n),function:Zn(t=>typeof t=="function"?t:void 0)(n),constant:t=>Zn(e=>e===t?t:void 0)(n),raw:Zn(t=>t)(n),object:t=>Zn(e=>{if(qx(e))return Xx(e,t)})(n),array:t=>Zn(e=>{if(Array.isArray(e))return jx(e,t)})(n)}}const sl={optional:$u(!0),required:$u(!1)};function we(n,t){const e=t(sl),i=sl.required.object(e)(n);return i.succeeded?i.value:void 0}function gn(n,t,e,i){if(t&&!t(n))return!1;const r=we(n,e);return r?i(r):!1}function _n(n,t){var e;return $i((e=n==null?void 0:n())!==null&&e!==void 0?e:{},t)}function Xi(n){return"value"in n}function Ed(n){if(!Tl(n)||!("binding"in n))return!1;const t=n.binding;return Cl(t)}const Bn="http://www.w3.org/2000/svg";function Ao(n){n.offsetHeight}function Yx(n,t){const e=n.style.transition;n.style.transition="none",t(),n.style.transition=e}function Ll(n){return n.ontouchstart!==void 0}function $x(){return globalThis}function Kx(){return $x().document}function Zx(n){const t=n.ownerDocument.defaultView;return t&&"document"in t?n.getContext("2d",{willReadFrequently:!0}):null}const Jx={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function Go(n,t){const e=n.createElementNS(Bn,"svg");return e.innerHTML=Jx[t],e}function Md(n,t,e){n.insertBefore(t,n.children[e])}function Dl(n){n.parentElement&&n.parentElement.removeChild(n)}function Sd(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function Qx(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function Td(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}function ri(n,t){n.emitter.on("change",e=>{t(e.rawValue)}),t(n.rawValue)}function zn(n,t,e){ri(n.value(t),e)}const tb="tp";function ne(n){return(e,i)=>[tb,"-",n,"v",e?`_${e}`:"",i?`-${i}`:""].join("")}const rs=ne("lbl");function eb(n,t){const e=n.createDocumentFragment();return t.split(`
`).map(r=>n.createTextNode(r)).forEach((r,s)=>{s>0&&e.appendChild(n.createElement("br")),e.appendChild(r)}),e}class Cd{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(rs()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(rs("l")),zn(e.props,"label",s=>{he(s)?this.element.classList.add(rs(void 0,"nol")):(this.element.classList.remove(rs(void 0,"nol")),Qx(i),i.appendChild(eb(t,s)))}),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("div");r.classList.add(rs("v")),this.element.appendChild(r),this.valueElement=r}}class Ad{constructor(t,e){this.props=e.props,this.valueController=e.valueController,this.viewProps=e.valueController.viewProps,this.view=new Cd(t,{props:e.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(t){return gn(t,null,e=>({label:e.optional.string}),e=>(this.props.set("label",e.label),!0))}exportProps(){return _n(null,{label:this.props.get("label")})}}function nb(){return["veryfirst","first","last","verylast"]}const Ku=ne(""),Zu={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Wo{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{nb().forEach(i=>{e.classList.remove(Ku(void 0,Zu[i]))}),this.blade.get("positions").forEach(i=>{e.classList.add(Ku(void 0,Zu[i]))})}),this.viewProps.handleDispose(()=>{Dl(e)})}get parent(){return this.parent_}set parent(t){this.parent_=t,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(t){return gn(t,null,e=>({disabled:e.required.boolean,hidden:e.required.boolean}),e=>(this.viewProps.importState(e),!0))}exportState(){return _n(null,Object.assign({},this.viewProps.exportState()))}}class Ki extends Wo{constructor(t,e){if(e.value!==e.valueController.value)throw Me.shouldNeverHappen();const i=e.valueController.viewProps,r=new Ad(t,{blade:e.blade,props:e.props,valueController:e.valueController});super(Object.assign(Object.assign({},e),{view:new Cd(t,{props:e.props,viewProps:i}),viewProps:i})),this.labelController=r,this.value=e.value,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(t){return gn(t,e=>{var i,r,s;return super.importState(e)&&this.labelController.importProps(e)&&((s=(r=(i=this.valueController).importProps)===null||r===void 0?void 0:r.call(i,t))!==null&&s!==void 0?s:!0)},e=>({value:e.optional.raw}),e=>(e.value&&(this.value.rawValue=e.value),!0))}exportState(){var t,e,i;return _n(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(i=(e=(t=this.valueController).exportProps)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:{}))}}function Ju(n){const t=Object.assign({},n);return delete t.value,t}class Pd extends Ki{constructor(t,e){super(t,e),this.tag=e.tag}importState(t){return gn(t,e=>super.importState(Ju(t)),e=>({tag:e.optional.string}),e=>(this.tag=e.tag,!0))}exportState(){return _n(()=>Ju(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function ib(n){return Xi(n)&&Ed(n.value)}class rb extends Pd{importState(t){return gn(t,e=>super.importState(e),e=>({binding:e.required.object({value:e.required.raw})}),e=>(this.value.binding.inject(e.binding.value),this.value.fetch(),!0))}}function sb(n){return Xi(n)&&Wx(n.value)}function Rd(n,t){for(;n.length<t;)n.push(void 0)}function ob(n){const t=[];return Rd(t,n),t}function ab(n){const t=n.indexOf(void 0);return t<0?n:n.slice(0,t)}function lb(n,t){const e=[...ab(n),t];return e.length>n.length?e.splice(0,e.length-n.length):Rd(e,n.length),e}class cb{constructor(t){this.emitter=new Ie,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t.binding,this.value_=ve(ob(t.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=lb(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function ub(n){if(!("binding"in n))return!1;const t=n.binding;return Cl(t)&&"read"in t&&!("write"in t)}class hb extends Pd{exportState(){return _n(()=>super.exportState(),{binding:{readonly:!0}})}}function db(n){return Xi(n)&&ub(n.value)}class pb extends tr{get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get title(){var t;return(t=this.controller.buttonController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.buttonController.props.set("title",t)}on(t,e){const i=e.bind(this);return this.controller.buttonController.emitter.on(t,s=>{i(new Hx(this,s.nativeEvent))}),this}off(t,e){return this.controller.buttonController.emitter.off(t,e),this}}function fb(n,t,e){e?n.classList.add(t):n.classList.remove(t)}function Xr(n,t){return e=>{fb(n,t,e)}}function Il(n,t){ri(n,e=>{t.textContent=e??""})}const Ia=ne("btn");class mb{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ia()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("button");i.classList.add(Ia("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(Ia("t")),Il(e.props.value("title"),r),this.buttonElement.appendChild(r)}}class gb{constructor(t,e){this.emitter=new Ie,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new mb(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(t){return gn(t,null,e=>({title:e.optional.string}),e=>(this.props.set("title",e.title),!0))}exportProps(){return _n(null,{title:this.props.get("title")})}onClick_(t){this.emitter.emit("click",{nativeEvent:t,sender:this})}}class Qu extends Wo{constructor(t,e){const i=new gb(t,{props:e.buttonProps,viewProps:e.viewProps}),r=new Ad(t,{blade:e.blade,props:e.labelProps,valueController:i});super({blade:e.blade,view:r.view,viewProps:e.viewProps}),this.buttonController=i,this.labelController=r}importState(t){return gn(t,e=>super.importState(e)&&this.buttonController.importProps(e)&&this.labelController.importProps(e),()=>({}),()=>!0)}exportState(){return _n(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class Ld{constructor(t){const[e,i]=t.split("-"),r=e.split(".");this.major=parseInt(r[0],10),this.minor=parseInt(r[1],10),this.patch=parseInt(r[2],10),this.prerelease=i??null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}const jr=new Ld("2.0.5");function nn(n){return Object.assign({core:jr},n)}const _b=nn({id:"button",type:"blade",accept(n){const t=we(n,e=>({title:e.required.string,view:e.required.constant("button"),label:e.optional.string}));return t?{params:t}:null},controller(n){return new Qu(n.document,{blade:n.blade,buttonProps:Yt.fromObject({title:n.params.title}),labelProps:Yt.fromObject({label:n.params.label}),viewProps:n.viewProps})},api(n){return n.controller instanceof Qu?new pb(n.controller):null}});function vb(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function xb(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function bb(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}function wb(n){return Tl(n)?"refresh"in n&&typeof n.refresh=="function":!1}function yb(n,t){if(!Co.isBindable(n))throw Me.notBindable();return new Co(n,t)}class Eb{constructor(t,e){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=t,this.emitter_=new Ie,this.pool_=e,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(t=>this.pool_.createApi(t))}addBinding(t,e,i){const r=i??{},s=this.controller_.element.ownerDocument,a=this.pool_.createBinding(s,yb(t,e),r),o=this.pool_.createBindingApi(a);return this.add(o,r.index)}addFolder(t){return xb(this,t)}addButton(t){return vb(this,t)}addTab(t){return bb(this,t)}add(t,e){const i=t.controller;return this.controller_.rack.add(i,e),t}remove(t){this.controller_.rack.remove(t.controller)}addBlade(t){const e=this.controller_.element.ownerDocument,i=this.pool_.createBlade(e,t),r=this.pool_.createApi(i);return this.add(r,t.index)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.children.forEach(t=>{wb(t)&&t.refresh()})}onRackValueChange_(t){const e=t.bladeController,i=this.pool_.createApi(e),r=Ed(e.value)?e.value.binding:null;this.emitter_.emit("change",new Ms(i,r?r.target.read():e.value.rawValue,t.options.last))}}class Ul extends tr{constructor(t,e){super(t),this.rackApi_=new Eb(t.rackController,e)}refresh(){this.rackApi_.refresh()}}class Nl extends Wo{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}importState(t){return gn(t,e=>super.importState(e),e=>({children:e.required.array(e.required.raw)}),e=>this.rackController.rack.children.every((i,r)=>i.importState(e.children[r])))}exportState(){return _n(()=>super.exportState(),{children:this.rackController.rack.children.map(t=>t.exportState())})}}function ol(n){return"rackController"in n}class Mb{constructor(t){this.emitter=new Ie,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw Me.shouldNeverHappen();const i=e!==void 0?e:this.items_.length;this.items_.splice(i,0,t),this.cache_.add(t);const r=this.extract_(t);r&&(r.emitter.on("add",this.onSubListAdd_),r.emitter.on("remove",this.onSubListRemove_),r.allItems().forEach(s=>{this.cache_.add(s)})),this.emitter.emit("add",{index:i,item:t,root:this,target:this})}remove(t){const e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);const i=this.extract_(t);i&&(i.allItems().forEach(r=>{this.cache_.delete(r)}),i.emitter.off("add",this.onSubListAdd_),i.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}function Sb(n,t){for(let e=0;e<n.length;e++){const i=n[e];if(Xi(i)&&i.value===t)return i}return null}function Tb(n){return ol(n)?n.rackController.rack.bcSet_:null}class Cb{constructor(t){var e,i;this.emitter=new Ie,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(i=this.blade_)===null||i===void 0||i.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new Mb(Tb),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var i;(i=t.parent)===null||i===void 0||i.remove(t),t.parent=this,this.bcSet_.add(t,e)}remove(t){t.parent=null,this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(t)}onSetAdd_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,root:e,sender:this}),!e)return;const i=t.item;if(i.viewProps.emitter.on("change",this.onChildViewPropsChange_),i.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),i.viewProps.handleDispose(this.onChildDispose_),Xi(i))i.value.emitter.on("change",this.onChildValueChange_);else if(ol(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.on("layout",this.onRackLayout_),s.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,root:e,sender:this}),!e)return;const i=t.item;if(Xi(i))i.value.emitter.off("change",this.onChildValueChange_);else if(ol(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.off("layout",this.onRackLayout_),s.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const t=this.bcSet_.items.filter(r=>!r.viewProps.get("hidden")),e=t[0],i=t[t.length-1];this.bcSet_.items.forEach(r=>{const s=[];r===e&&(s.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&s.push("veryfirst")),r===i&&(s.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&s.push("verylast")),r.blade.set("positions",s)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildValueChange_(t){const e=Sb(this.find(Xi),t.sender);if(!e)throw Me.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:e,options:t.options,sender:this})}onRackLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(t){this.emitter.emit("valuechange",{bladeController:t.bladeController,options:t.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Fl{constructor(t){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=t.element,this.viewProps=t.viewProps;const e=new Cb({blade:t.root?void 0:t.blade,viewProps:t.viewProps});e.emitter.on("add",this.onRackAdd_),e.emitter.on("remove",this.onRackRemove_),this.rack=e,this.viewProps.handleDispose(()=>{for(let i=this.rack.children.length-1;i>=0;i--)this.rack.children[i].viewProps.set("disposed",!0)})}onRackAdd_(t){t.root&&Md(this.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.root&&Dl(t.bladeController.view.element)}}function qr(){return new Yt({positions:ve([],{equals:rx})})}class Ss extends Yt{constructor(t){super(t)}static create(t){const e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},i=Yt.createCore(e);return new Ss(i)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!he(t)?`${t}px`:"auto"}bindExpandedClass(t,e){const i=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};zn(this,"expanded",i),zn(this,"temporaryExpanded",i)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ab(n,t){let e=0;return Yx(t,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),Ao(t),e=t.clientHeight,n.set("temporaryExpanded",null),Ao(t)}),e}function th(n,t){t.style.height=n.styleHeight}function Ol(n,t){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),he(n.get("expandedHeight"))){const e=Ab(n,t);e>0&&n.set("expandedHeight",e)}n.set("shouldFixHeight",!0),Ao(t)}),n.emitter.on("change",()=>{th(n,t)}),th(n,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&n.cleanUpTransition()})}class Dd extends Ul{constructor(t,e){super(t,e),this.emitter_=new Ie,this.controller.foldable.value("expanded").emitter.on("change",i=>{this.emitter_.emit("fold",new Vx(this,i.sender.rawValue))}),this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(t){this.controller.foldable.set("expanded",t)}get title(){return this.controller.props.get("title")}set title(t){this.controller.props.set("title",t)}get children(){return this.rackApi_.children}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const Id=ne("cnt");class Pb{constructor(t,e){var i;this.className_=ne((i=e.viewName)!==null&&i!==void 0?i:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),Id()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),zn(this.foldable_,"completed",Xr(this.element,this.className_(void 0,"cpl")));const r=t.createElement("button");r.classList.add(this.className_("b")),zn(e.props,"title",c=>{he(c)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const s=t.createElement("div");s.classList.add(this.className_("i")),this.element.appendChild(s);const a=t.createElement("div");a.classList.add(this.className_("t")),Il(e.props.value("title"),a),this.buttonElement.appendChild(a),this.titleElement=a;const o=t.createElement("div");o.classList.add(this.className_("m")),this.buttonElement.appendChild(o);const l=t.createElement("div");l.classList.add(this.className_("c")),this.element.appendChild(l),this.containerElement=l}}class al extends Nl{constructor(t,e){var i;const r=Ss.create((i=e.expanded)!==null&&i!==void 0?i:!0),s=new Pb(t,{foldable:r,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new Fl({blade:e.blade,element:s.containerElement,root:e.root,viewProps:e.viewProps}),view:s})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=r,Ol(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(t){return gn(t,e=>super.importState(e),e=>({expanded:e.required.boolean,title:e.optional.string}),e=>(this.foldable.set("expanded",e.expanded),this.props.set("title",e.title),!0))}exportState(){return _n(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Rb=nn({id:"folder",type:"blade",accept(n){const t=we(n,e=>({title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean}));return t?{params:t}:null},controller(n){return new al(n.document,{blade:n.blade,expanded:n.params.expanded,props:Yt.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof al?new Dd(n.controller,n.pool):null}}),Lb=ne("");function eh(n,t){return Xr(n,Lb(void 0,t))}class ci extends Yt{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=cx(ve(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,i,r;const s=t??{};return new ci(Yt.createCore({disabled:(e=s.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(i=s.hidden)!==null&&i!==void 0?i:!1,parent:(r=s.parent)!==null&&r!==void 0?r:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){ri(this.globalDisabled_,eh(t,"disabled")),zn(this,"hidden",eh(t,"hidden"))}bindDisabled(t){ri(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){ri(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}importState(t){this.set("disabled",t.disabled),this.set("hidden",t.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;const i=t.previousRawValue;i==null||i.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const nh=ne("tbp");class Db{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(nh()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(nh("c")),this.element.appendChild(i),this.containerElement=i}}const ss=ne("tbi");class Ib{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ss()),e.viewProps.bindClassModifiers(this.element),zn(e.props,"selected",s=>{s?this.element.classList.add(ss(void 0,"sel")):this.element.classList.remove(ss(void 0,"sel"))});const i=t.createElement("button");i.classList.add(ss("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(ss("t")),Il(e.props.value("title"),r),this.buttonElement.appendChild(r),this.titleElement=r}}class Ub{constructor(t,e){this.emitter=new Ie,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new Ib(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ll extends Nl{constructor(t,e){const i=new Db(t,{viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new Fl({blade:e.blade,element:i.containerElement,viewProps:e.viewProps}),view:i})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Ub(t,{props:e.itemProps,viewProps:ci.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=e.props,zn(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}importState(t){return gn(t,e=>super.importState(e),e=>({selected:e.required.boolean,title:e.required.string}),e=>(this.ic_.props.set("selected",e.selected),this.ic_.props.set("title",e.title),!0))}exportState(){return _n(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class Nb extends Ul{constructor(t,e){super(t,e),this.emitter_=new Ie,this.onSelect_=this.onSelect_.bind(this),this.pool_=e,this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(t){const e=this.controller.view.element.ownerDocument,i=new ll(e,{blade:qr(),itemProps:Yt.fromObject({selected:!1,title:t.title}),props:Yt.fromObject({selected:!1}),viewProps:ci.create()}),r=this.pool_.createApi(i);return this.rackApi_.add(r,t.index)}removePage(t){this.rackApi_.remove(this.rackApi_.children[t])}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}onSelect_(t){this.emitter_.emit("select",new zx(this,t.rawValue))}}class Fb extends Ul{get title(){var t;return(t=this.controller.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.itemController.props.set("title",t)}get selected(){return this.controller.props.get("selected")}set selected(t){this.controller.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addBlade(t){return this.rackApi_.addBlade(t)}}const ih=-1;class Ob{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=ve(!0),this.selectedIndex=ve(ih),this.items_=[]}add(t,e){const i=e??this.items_.length;this.items_.splice(i,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=ih,this.empty.rawValue=!0;return}const t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,i)=>{e.rawValue=i===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,i)=>{e.rawValue=i===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const e=this.items_.findIndex(i=>i===t.sender);this.items_.forEach((i,r)=>{i.rawValue=r===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}}const os=ne("tab");class Bb{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(os(),Id()),e.viewProps.bindClassModifiers(this.element),ri(e.empty,Xr(this.element,os(void 0,"nop")));const i=t.createElement("div");i.classList.add(os("t")),this.element.appendChild(i),this.itemsElement=i;const r=t.createElement("div");r.classList.add(os("i")),this.element.appendChild(r);const s=t.createElement("div");s.classList.add(os("c")),this.element.appendChild(s),this.contentsElement=s}}class rh extends Nl{constructor(t,e){const i=new Ob,r=new Bb(t,{empty:i.empty,viewProps:e.viewProps});super({blade:e.blade,rackController:new Fl({blade:e.blade,element:r.contentsElement,viewProps:e.viewProps}),view:r}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=this.rackController.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.tab=i}add(t,e){this.rackController.rack.add(t,e)}remove(t){this.rackController.rack.remove(this.rackController.rack.children[t])}onRackAdd_(t){if(!t.root)return;const e=t.bladeController;Md(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.tab.add(e.props.value("selected"))}onRackRemove_(t){if(!t.root)return;const e=t.bladeController;Dl(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.tab.remove(e.props.value("selected"))}}const Ud=nn({id:"tab",type:"blade",accept(n){const t=we(n,e=>({pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")}));return!t||t.pages.length===0?null:{params:t}},controller(n){const t=new rh(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(e=>{const i=new ll(n.document,{blade:qr(),itemProps:Yt.fromObject({selected:!1,title:e.title}),props:Yt.fromObject({selected:!1}),viewProps:ci.create()});t.add(i)}),t},api(n){return n.controller instanceof rh?new Nb(n.controller,n.pool):n.controller instanceof ll?new Fb(n.controller,n.pool):null}});function kb(n,t){const e=n.accept(t.params);if(!e)return null;const i=we(t.params,r=>({disabled:r.optional.boolean,hidden:r.optional.boolean}));return n.controller({blade:qr(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden}),viewProps:ci.create({disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden})})}class Bl extends _s{get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}}class Vb{constructor(){this.disabled=!1,this.emitter=new Ie}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class zb{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new Ie,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Ts{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,i)=>i.constrain(e),t)}}function Po(n,t){if(n instanceof t)return n;if(n instanceof Ts){const e=n.constraints.reduce((i,r)=>i||(r instanceof t?r:null),null);if(e)return e}return null}class Cs{constructor(t){this.values=Yt.fromObject({options:t})}constrain(t){const e=this.values.get("options");return e.length===0||e.filter(r=>r.value===t).length>0?t:e[0].value}}function As(n){var t;const e=sl;if(Array.isArray(n))return(t=we({items:n},i=>({items:i.required.array(i.required.object({text:i.required.string,value:i.required.raw}))})))===null||t===void 0?void 0:t.items;if(typeof n=="object")return e.required.raw(n).value}function kl(n){if(Array.isArray(n))return n;const t=[];return Object.keys(n).forEach(e=>{t.push({text:e,value:n[e]})}),t}function Vl(n){return he(n)?null:new Cs(kl(n))}const Ua=ne("lst");class Hb{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(Ua()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("select");i.classList.add(Ua("s")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.selectElement=i;const r=t.createElement("div");r.classList.add(Ua("m")),r.appendChild(Go(t,"dropdown")),this.element.appendChild(r),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,zn(this.props_,"options",s=>{Sd(this.selectElement),s.forEach(a=>{const o=t.createElement("option");o.textContent=a.text,this.selectElement.appendChild(o)}),this.update_()})}update_(){const t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Pi{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Hb(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}importProps(t){return gn(t,null,e=>({options:e.required.custom(As)}),e=>(this.props.set("options",kl(e.options)),!0))}exportProps(){return _n(null,{options:this.props.get("options")})}}const sh=ne("pop");class Gb{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(sh()),e.viewProps.bindClassModifiers(this.element),ri(e.shows,Xr(this.element,sh(void 0,"v")))}}class Nd{constructor(t,e){this.shows=ve(!1),this.viewProps=e.viewProps,this.view=new Gb(t,{shows:this.shows,viewProps:this.viewProps})}}const oh=ne("txt");class Wb{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(oh()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);const i=t.createElement("input");i.classList.add(oh("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class vs{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Wb(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);he(r)||(this.value.rawValue=r),this.view.refresh()}}function Xb(n){return String(n)}function Fd(n){return n==="false"?!1:!!n}function ah(n){return Xb(n)}function jb(n){return t=>n.reduce((e,i)=>e!==null?e:i(t),null)}const qb=on(0);function Ro(n){return qb(n)+"%"}function Od(n){return String(n)}function cl(n){return n}function Yr({primary:n,secondary:t,forward:e,backward:i}){let r=!1;function s(a){r||(r=!0,a(),r=!1)}n.emitter.on("change",a=>{s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),a.options)})}),t.emitter.on("change",a=>{s(()=>{n.setRawValue(i(n.rawValue,t.rawValue),a.options)}),s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),a.options)})}),s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),{forceEmit:!1,last:!0})})}function sn(n,t){const e=n*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function xs(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function ai(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function Yb(n){return n==="ArrowUp"||n==="ArrowDown"}function Bd(n){return Yb(n)||n==="ArrowLeft"||n==="ArrowRight"}function Na(n,t){var e,i;const r=t.ownerDocument.defaultView,s=t.getBoundingClientRect();return{x:n.pageX-(((e=r&&r.scrollX)!==null&&e!==void 0?e:0)+s.left),y:n.pageY-(((i=r&&r.scrollY)!==null&&i!==void 0?i:0)+s.top)}}class er{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new Ie,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();const i=this.elem_.ownerDocument;i.addEventListener("mousemove",this.onDocumentMouseMove_),i.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(Na(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(Na(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(Na(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;const i=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,r=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(i?{x:i.clientX-r.left,y:i.clientY-r.top}:void 0),sender:this,shiftKey:t.shiftKey})}}const bn=ne("txt");class $b{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(bn(),bn(void 0,"num")),e.arrayPosition&&this.element.classList.add(bn(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(bn("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(bn()),this.inputElement.classList.add(bn("i"));const r=t.createElement("div");r.classList.add(bn("k")),this.element.appendChild(r),this.knobElement=r;const s=t.createElementNS(Bn,"svg");s.classList.add(bn("g")),this.knobElement.appendChild(s);const a=t.createElementNS(Bn,"path");a.classList.add(bn("gb")),s.appendChild(a),this.guideBodyElem_=a;const o=t.createElementNS(Bn,"path");o.classList.add(bn("gh")),s.appendChild(o),this.guideHeadElem_=o;const l=t.createElement("div");l.classList.add(ne("tt")()),this.knobElement.appendChild(l),this.tooltipElem_=l,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(bn(void 0,"drg"));return}this.element.classList.add(bn(void 0,"drg"));const e=t.rawValue/this.props_.get("pointerScale"),i=e+(e>0?-1:e<0?1:0),r=Ne(-i,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${i+r},0 L${i},4 L${i+r},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);const s=this.props_.get("formatter");this.tooltipElem_.textContent=s(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class Ps{constructor(t,e){var i;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=e.parser,this.props=e.props,this.sliderProps_=(i=e.sliderProps)!==null&&i!==void 0?i:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=ve(null),this.view=new $b(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const r=new er(this.view.knobElement);r.emitter.on("down",this.onPointerDown_),r.emitter.on("move",this.onPointerMove_),r.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,i;const r=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("min"),s=(i=this.sliderProps_)===null||i===void 0?void 0:i.get("max");let a=t;return r!==void 0&&(a=Math.max(a,r)),s!==void 0&&(a=Math.min(a,s)),a}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);he(r)||(this.value.rawValue=this.constrainValue_(r)),this.view.refresh()}onInputKeyDown_(t){const e=sn(this.props.get("keyScale"),xs(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){sn(this.props.get("keyScale"),xs(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("pointerScale"))}onPointerMove_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Fa=ne("sld");class Kb{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Fa()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Fa("t")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.trackElement=i;const r=t.createElement("div");r.classList.add(Fa("k")),this.trackElement.appendChild(r),this.knobElement=r,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){const t=Ne(oe(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class Zb{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new Kb(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new er(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue(oe(Ne(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("min"),this.props.get("max")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=sn(this.props.get("keyScale"),ai(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){sn(this.props.get("keyScale"),ai(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Oa=ne("sldtxt");class Jb{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Oa());const i=t.createElement("div");i.classList.add(Oa("s")),this.sliderView_=e.sliderView,i.appendChild(this.sliderView_.element),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Oa("t")),this.textView_=e.textView,r.appendChild(this.textView_.element),this.element.appendChild(r)}}class Lo{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new Zb(t,{props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new Ps(t,{parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new Jb(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(t){return gn(t,null,e=>({max:e.required.number,min:e.required.number}),e=>{const i=this.sliderC_.props;return i.set("max",e.max),i.set("min",e.min),!0})}exportProps(){const t=this.sliderC_.props;return _n(null,{max:t.get("max"),min:t.get("min")})}}function kd(n){return{sliderProps:new Yt({keyScale:n.keyScale,max:n.max,min:n.min}),textProps:new Yt({formatter:ve(n.formatter),keyScale:n.keyScale,pointerScale:ve(n.pointerScale)})}}const Qb={containerUnitSize:"cnt-usz"};function Vd(n){return`--${Qb[n]}`}function bs(n){return yd(n)}function bi(n){if(rl(n))return we(n,bs)}function ei(n,t){if(!n)return;const e=[],i=xd(n,t);i&&e.push(i);const r=bd(n);return r&&e.push(r),new Ts(e)}function tw(n){return n?n.major===jr.major:!1}function zd(n){if(n==="inline"||n==="popup")return n}function Rs(n,t){n.write(t)}const ho=ne("ckb");class ew{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(ho()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("label");i.classList.add(ho("l")),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("input");r.classList.add(ho("i")),r.type="checkbox",this.labelElement.appendChild(r),this.inputElement=r,e.viewProps.bindDisabled(this.inputElement);const s=t.createElement("div");s.classList.add(ho("w")),this.labelElement.appendChild(s);const a=Go(t,"check");s.appendChild(a),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class nw{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new ew(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(t){const e=t.currentTarget;this.value.rawValue=e.checked,t.preventDefault(),t.stopPropagation()}onLabelMouseDown_(t){t.preventDefault()}}function iw(n){const t=[],e=Vl(n.options);return e&&t.push(e),new Ts(t)}const rw=nn({id:"input-bool",type:"input",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=we(t,i=>({options:i.optional.custom(As),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Fd,constraint:n=>iw(n.params),writer:n=>Rs},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&Po(i,Cs);return r?new Pi(t,{props:new Yt({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new nw(t,{value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="boolean"?null:n.controller.valueController instanceof Pi?new Bl(n.controller):null}}),Fi=ne("col");class sw{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Fi()),e.foldable.bindExpandedClass(this.element,Fi(void 0,"expanded")),zn(e.foldable,"completed",Xr(this.element,Fi(void 0,"cpl")));const i=t.createElement("div");i.classList.add(Fi("h")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Fi("s")),i.appendChild(r),this.swatchElement=r;const s=t.createElement("div");if(s.classList.add(Fi("t")),i.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const a=t.createElement("div");a.classList.add(Fi("p")),this.element.appendChild(a),this.pickerElement=a}else this.pickerElement=null}}function ow(n,t,e){const i=Ne(n/255,0,1),r=Ne(t/255,0,1),s=Ne(e/255,0,1),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0,u=0;const h=(o+a)/2;return l!==0&&(u=l/(1-Math.abs(a+o-1)),i===a?c=(r-s)/l:r===a?c=2+(s-i)/l:c=4+(i-r)/l,c=c/6+(c<0?1:0)),[c*360,u*100,h*100]}function aw(n,t,e){const i=(n%360+360)%360,r=Ne(t/100,0,1),s=Ne(e/100,0,1),a=(1-Math.abs(2*s-1))*r,o=a*(1-Math.abs(i/60%2-1)),l=s-a/2;let c,u,h;return i>=0&&i<60?[c,u,h]=[a,o,0]:i>=60&&i<120?[c,u,h]=[o,a,0]:i>=120&&i<180?[c,u,h]=[0,a,o]:i>=180&&i<240?[c,u,h]=[0,o,a]:i>=240&&i<300?[c,u,h]=[o,0,a]:[c,u,h]=[a,0,o],[(c+l)*255,(u+l)*255,(h+l)*255]}function lw(n,t,e){const i=Ne(n/255,0,1),r=Ne(t/255,0,1),s=Ne(e/255,0,1),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c;l===0?c=0:a===i?c=60*(((r-s)/l%6+6)%6):a===r?c=60*((s-i)/l+2):c=60*((i-r)/l+4);const u=a===0?0:l/a,h=a;return[c,u*100,h*100]}function Hd(n,t,e){const i=gd(n,360),r=Ne(t/100,0,1),s=Ne(e/100,0,1),a=s*r,o=a*(1-Math.abs(i/60%2-1)),l=s-a;let c,u,h;return i>=0&&i<60?[c,u,h]=[a,o,0]:i>=60&&i<120?[c,u,h]=[o,a,0]:i>=120&&i<180?[c,u,h]=[0,a,o]:i>=180&&i<240?[c,u,h]=[0,o,a]:i>=240&&i<300?[c,u,h]=[o,0,a]:[c,u,h]=[a,0,o],[(c+l)*255,(u+l)*255,(h+l)*255]}function cw(n,t,e){const i=e+t*(100-Math.abs(2*e-100))/200;return[n,i!==0?t*(100-Math.abs(2*e-100))/i:0,e+t*(100-Math.abs(2*e-100))/(2*100)]}function uw(n,t,e){const i=100-Math.abs(e*(200-t)/100-100);return[n,i!==0?t*e/i:0,e*(200-t)/(2*100)]}function Hn(n){return[n[0],n[1],n[2]]}function Xo(n,t){return[n[0],n[1],n[2],t]}const hw={hsl:{hsl:(n,t,e)=>[n,t,e],hsv:cw,rgb:aw},hsv:{hsl:uw,hsv:(n,t,e)=>[n,t,e],rgb:Hd},rgb:{hsl:ow,hsv:lw,rgb:(n,t,e)=>[n,t,e]}};function Or(n,t){return[t==="float"?1:n==="rgb"?255:360,t==="float"?1:n==="rgb"?255:100,t==="float"?1:n==="rgb"?255:100]}function dw(n,t){return n===t?t:gd(n,t)}function Gd(n,t,e){var i;const r=Or(t,e);return[t==="rgb"?Ne(n[0],0,r[0]):dw(n[0],r[0]),Ne(n[1],0,r[1]),Ne(n[2],0,r[2]),Ne((i=n[3])!==null&&i!==void 0?i:1,0,1)]}function lh(n,t,e,i){const r=Or(t,e),s=Or(t,i);return n.map((a,o)=>a/r[o]*s[o])}function Wd(n,t,e){const i=lh(n,t.mode,t.type,"int"),r=hw[t.mode][e.mode](...i);return lh(r,e.mode,"int",e.type)}class re{static black(){return new re([0,0,0],"rgb")}constructor(t,e){this.type="int",this.mode=e,this.comps_=Gd(t,e,this.type)}getComponents(t){return Xo(Wd(Hn(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const mi=ne("colp");class pw{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(mi()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(mi("hsv"));const r=t.createElement("div");r.classList.add(mi("sv")),this.svPaletteView_=e.svPaletteView,r.appendChild(this.svPaletteView_.element),i.appendChild(r);const s=t.createElement("div");s.classList.add(mi("h")),this.hPaletteView_=e.hPaletteView,s.appendChild(this.hPaletteView_.element),i.appendChild(s),this.element.appendChild(i);const a=t.createElement("div");if(a.classList.add(mi("rgb")),this.textsView_=e.textsView,a.appendChild(this.textsView_.element),this.element.appendChild(a),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};const o=t.createElement("div");o.classList.add(mi("a"));const l=t.createElement("div");l.classList.add(mi("ap")),l.appendChild(this.alphaViews_.palette.element),o.appendChild(l);const c=t.createElement("div");c.classList.add(mi("at")),c.appendChild(this.alphaViews_.text.element),o.appendChild(c),this.element.appendChild(o)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function fw(n){return n==="int"?"int":n==="float"?"float":void 0}function zl(n){return we(n,t=>({color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(fw)}),expanded:t.optional.boolean,picker:t.optional.custom(zd),readonly:t.optional.constant(!1)}))}function Zi(n){return n?.1:1}function Xd(n){var t;return(t=n.color)===null||t===void 0?void 0:t.type}class Hl{constructor(t,e){this.type="float",this.mode=e,this.comps_=Gd(t,e,this.type)}getComponents(t){return Xo(Wd(Hn(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const mw={int:(n,t)=>new re(n,t),float:(n,t)=>new Hl(n,t)};function Gl(n,t,e){return mw[e](n,t)}function gw(n){return n.type==="float"}function _w(n){return n.type==="int"}function vw(n){const t=n.getComponents(),e=Or(n.mode,"int");return new re([Math.round(oe(t[0],0,1,0,e[0])),Math.round(oe(t[1],0,1,0,e[1])),Math.round(oe(t[2],0,1,0,e[2])),t[3]],n.mode)}function xw(n){const t=n.getComponents(),e=Or(n.mode,"int");return new Hl([oe(t[0],0,e[0],0,1),oe(t[1],0,e[1],0,1),oe(t[2],0,e[2],0,1),t[3]],n.mode)}function en(n,t){if(n.type===t)return n;if(_w(n)&&t==="float")return xw(n);if(gw(n)&&t==="int")return vw(n);throw Me.shouldNeverHappen()}function bw(n,t){return n.alpha===t.alpha&&n.mode===t.mode&&n.notation===t.notation&&n.type===t.type}function Sn(n,t){const e=n.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(n),t)}const ww={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function jd(n){const t=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(n);const e=parseFloat(t[1]),i=t[2];return ww[i](e)}function qd(n){const t=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Sn(t[1],255),Sn(t[2],255),Sn(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function yw(n){const t=qd(n);return t?new re(t,"rgb"):null}function Yd(n){const t=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Sn(t[1],255),Sn(t[2],255),Sn(t[3],255),Sn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Ew(n){const t=Yd(n);return t?new re(t,"rgb"):null}function $d(n){const t=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[jd(t[1]),Sn(t[2],100),Sn(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Mw(n){const t=$d(n);return t?new re(t,"hsl"):null}function Kd(n){const t=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[jd(t[1]),Sn(t[2],100),Sn(t[3],100),Sn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Sw(n){const t=Kd(n);return t?new re(t,"hsl"):null}function Zd(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const e=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function Tw(n){const t=Zd(n);return t?new re(t,"rgb"):null}function Jd(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),oe(parseInt(t[4]+t[4],16),0,255,0,1)];const e=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),oe(parseInt(e[4],16),0,255,0,1)]:null}function Cw(n){const t=Jd(n);return t?new re(t,"rgb"):null}function Qd(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Aw(n){return t=>{const e=Qd(t);return e?Gl(e,"rgb",n):null}}function tp(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Pw(n){return t=>{const e=tp(t);return e?Gl(e,"rgb",n):null}}const Rw=[{parser:Zd,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Jd,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:qd,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Yd,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:$d,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Kd,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Qd,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:tp,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Lw(n){return Rw.reduce((t,{parser:e,result:i})=>t||(e(n)?i:null),null)}function Dw(n,t="int"){const e=Lw(n);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}function Ls(n){const t=[Tw,Cw,yw,Ew,Mw,Sw];t.push(Aw("int"),Pw("int"));const e=jb(t);return i=>{const r=e(i);return r?en(r,n):null}}function Iw(n){const t=Ls("int");if(typeof n!="string")return re.black();const e=t(n);return e??re.black()}function ep(n){const t=Ne(Math.floor(n),0,255).toString(16);return t.length===1?`0${t}`:t}function Wl(n,t="#"){const e=Hn(n.getComponents("rgb")).map(ep).join("");return`${t}${e}`}function Xl(n,t="#"){const e=n.getComponents("rgb"),i=[e[0],e[1],e[2],e[3]*255].map(ep).join("");return`${t}${i}`}function np(n){const t=on(0),e=en(n,"int");return`rgb(${Hn(e.getComponents("rgb")).map(r=>t(r)).join(", ")})`}function vo(n){const t=on(2),e=on(0);return`rgba(${en(n,"int").getComponents("rgb").map((s,a)=>(a===3?t:e)(s)).join(", ")})`}function Uw(n){const t=[on(0),Ro,Ro],e=en(n,"int");return`hsl(${Hn(e.getComponents("hsl")).map((r,s)=>t[s](r)).join(", ")})`}function Nw(n){const t=[on(0),Ro,Ro,on(2)];return`hsla(${en(n,"int").getComponents("hsl").map((r,s)=>t[s](r)).join(", ")})`}function ip(n,t){const e=on(t==="float"?2:0),i=["r","g","b"],r=en(n,t);return`{${Hn(r.getComponents("rgb")).map((a,o)=>`${i[o]}: ${e(a)}`).join(", ")}}`}function Fw(n){return t=>ip(t,n)}function rp(n,t){const e=on(2),i=on(t==="float"?2:0),r=["r","g","b","a"];return`{${en(n,t).getComponents("rgb").map((o,l)=>{const c=l===3?e:i;return`${r[l]}: ${c(o)}`}).join(", ")}}`}function Ow(n){return t=>rp(t,n)}const Bw=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Wl},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Xl},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:np},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:vo},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Uw},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Nw},...["int","float"].reduce((n,t)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:Fw(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:Ow(t)}],[])];function sp(n){return Bw.reduce((t,e)=>t||(bw(e.format,n)?e.stringifier:null),null)}const as=ne("apl");class kw{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(as()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(as("b")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(as("c")),i.appendChild(r),this.colorElem_=r;const s=t.createElement("div");s.classList.add(as("m")),this.element.appendChild(s),this.markerElem_=s;const a=t.createElement("div");a.classList.add(as("p")),this.markerElem_.appendChild(a),this.previewElem_=a,this.update_()}update_(){const t=this.value.rawValue,e=t.getComponents("rgb"),i=new re([e[0],e[1],e[2],0],"rgb"),r=new re([e[0],e[1],e[2],255],"rgb"),s=["to right",vo(i),vo(r)];this.colorElem_.style.background=`linear-gradient(${s.join(",")})`,this.previewElem_.style.backgroundColor=vo(t);const a=oe(e[3],0,1,0,100);this.markerElem_.style.left=`${a}%`}onValueChange_(){this.update_()}}class Vw{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new kw(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new er(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=t.point.x/t.bounds.width,r=this.value.rawValue,[s,a,o]=r.getComponents("hsv");this.value.setRawValue(new re([s,a,o,i],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=sn(Zi(!0),ai(t));if(e===0)return;const i=this.value.rawValue,[r,s,a,o]=i.getComponents("hsv");this.value.setRawValue(new re([r,s,a,o+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){sn(Zi(!0),ai(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const yr=ne("coltxt");function zw(n){const t=n.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return t.appendChild(e.reduce((i,r)=>{const s=n.createElement("option");return s.textContent=r.text,s.value=r.value,i.appendChild(s),i},n.createDocumentFragment())),t}class Hw{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(yr()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(yr("m")),this.modeElem_=zw(t),this.modeElem_.classList.add(yr("ms")),i.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);const r=t.createElement("div");r.classList.add(yr("mm")),r.appendChild(Go(t,"dropdown")),i.appendChild(r),this.element.appendChild(i);const s=t.createElement("div");s.classList.add(yr("w")),this.element.appendChild(s),this.inputsElem_=s,this.inputViews_=e.inputViews,this.applyInputViews_(),ri(e.mode,a=>{this.modeElem_.value=a})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(t){this.inputViews_=t,this.applyInputViews_()}applyInputViews_(){Sd(this.inputsElem_);const t=this.element.ownerDocument;this.inputViews_.forEach(e=>{const i=t.createElement("div");i.classList.add(yr("c")),i.appendChild(e.element),this.inputsElem_.appendChild(i)})}}function Gw(n){return on(n==="float"?2:0)}function Ww(n,t,e){const i=Or(n,t)[e];return new Es({min:0,max:i})}function Xw(n,t,e){return new Ps(n,{arrayPosition:e===0?"fst":e===2?"lst":"mid",parser:t.parser,props:Yt.fromObject({formatter:Gw(t.colorType),keyScale:Zi(!1),pointerScale:t.colorType==="float"?.01:1}),value:ve(0,{constraint:Ww(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}function jw(n,t){const e={colorMode:t.colorMode,colorType:t.colorType,parser:oi,viewProps:t.viewProps};return[0,1,2].map(i=>{const r=Xw(n,e,i);return Yr({primary:t.value,secondary:r.value,forward(s){return en(s,t.colorType).getComponents(t.colorMode)[i]},backward(s,a){const o=t.colorMode,c=en(s,t.colorType).getComponents(o);c[i]=a;const u=Gl(Xo(Hn(c),c[3]),o,t.colorType);return en(u,"int")}}),r})}function qw(n,t){const e=new vs(n,{parser:Ls("int"),props:Yt.fromObject({formatter:Wl}),value:ve(re.black()),viewProps:t.viewProps});return Yr({primary:t.value,secondary:e.value,forward:i=>new re(Hn(i.getComponents()),i.mode),backward:(i,r)=>new re(Xo(Hn(r.getComponents(i.mode)),i.getComponents()[3]),i.mode)}),[e]}function Yw(n){return n!=="hex"}class $w{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=ve(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new Hw(t,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const e=this.colorMode.rawValue;return Yw(e)?jw(t,{colorMode:e,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):qw(t,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(t){const e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(i=>i.view)}}const Ba=ne("hpl");class Kw{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Ba()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(Ba("c")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Ba("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=np(new re([e,100,100],"hsv"));const i=oe(e,0,360,0,100);this.markerElem_.style.left=`${i}%`}onValueChange_(){this.update_()}}class Zw{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Kw(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new er(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=oe(Ne(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),r=this.value.rawValue,[,s,a,o]=r.getComponents("hsv");this.value.setRawValue(new re([i,s,a,o],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=sn(Zi(!1),ai(t));if(e===0)return;const i=this.value.rawValue,[r,s,a,o]=i.getComponents("hsv");this.value.setRawValue(new re([r+e,s,a,o],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){sn(Zi(!1),ai(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ka=ne("svp"),ch=64;class Jw{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(ka()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("canvas");i.height=ch,i.width=ch,i.classList.add(ka("c")),this.element.appendChild(i),this.canvasElement=i;const r=t.createElement("div");r.classList.add(ka("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=Zx(this.canvasElement);if(!t)return;const i=this.value.rawValue.getComponents("hsv"),r=this.canvasElement.width,s=this.canvasElement.height,a=t.getImageData(0,0,r,s),o=a.data;for(let u=0;u<s;u++)for(let h=0;h<r;h++){const d=oe(h,0,r,0,100),m=oe(u,0,s,100,0),g=Hd(i[0],d,m),_=(u*r+h)*4;o[_]=g[0],o[_+1]=g[1],o[_+2]=g[2],o[_+3]=255}t.putImageData(a,0,0);const l=oe(i[1],0,100,0,100);this.markerElem_.style.left=`${l}%`;const c=oe(i[2],0,100,100,0);this.markerElem_.style.top=`${c}%`}onValueChange_(){this.update_()}}class Qw{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Jw(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new er(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=oe(t.point.x,0,t.bounds.width,0,100),r=oe(t.point.y,0,t.bounds.height,100,0),[s,,,a]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new re([s,i,r,a],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){Bd(t.key)&&t.preventDefault();const[e,i,r,s]=this.value.rawValue.getComponents("hsv"),a=Zi(!1),o=sn(a,ai(t)),l=sn(a,xs(t));o===0&&l===0||this.value.setRawValue(new re([e,i+o,r+l,s],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const e=Zi(!1),i=sn(e,ai(t)),r=sn(e,xs(t));i===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ty{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new Zw(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Qw(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new Vw(t,{value:this.value,viewProps:this.viewProps}),text:new Ps(t,{parser:oi,props:Yt.fromObject({pointerScale:.01,keyScale:.1,formatter:on(2)}),value:ve(0,{constraint:new Es({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Yr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:i=>i.getComponents()[3],backward:(i,r)=>{const s=i.getComponents();return s[3]=r,new re(s,i.mode)}}),this.textsC_=new $w(t,{colorType:e.colorType,value:this.value,viewProps:this.viewProps}),this.view=new pw(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const Va=ne("colsw");class ey{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(Va()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Va("sw")),this.element.appendChild(i),this.swatchElem_=i;const r=t.createElement("button");r.classList.add(Va("b")),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=Xl(t)}onValueChange_(){this.update_()}}class ny{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new ey(t,{value:this.value,viewProps:this.viewProps})}}class jl{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=Ss.create(e.expanded),this.swatchC_=new ny(t,{value:this.value,viewProps:this.viewProps});const i=this.swatchC_.view.buttonElement;i.addEventListener("blur",this.onButtonBlur_),i.addEventListener("click",this.onButtonClick_),this.textC_=new vs(t,{parser:e.parser,props:Yt.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new sw(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new Nd(t,{viewProps:this.viewProps}):null;const r=new ty(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(s=>{s.addEventListener("blur",this.onPopupChildBlur_),s.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(r.view.element),Yr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:s=>s,backward:(s,a)=>a})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ol(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=Td(t);i&&e.contains(i)||i&&i===this.swatchC_.view.buttonElement&&!Ll(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function iy(n){return Hn(n.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function ry(n){return n.getComponents("rgb").reduce((t,e,i)=>{const r=Math.floor(i===3?e*255:e)&255;return t<<8|r},0)>>>0}function sy(n){return new re([n>>16&255,n>>8&255,n&255],"rgb")}function oy(n){return new re([n>>24&255,n>>16&255,n>>8&255,oe(n&255,0,255,0,1)],"rgb")}function ay(n){return typeof n!="number"?re.black():sy(n)}function ly(n){return typeof n!="number"?re.black():oy(n)}function xo(n,t){return typeof n!="object"||he(n)?!1:t in n&&typeof n[t]=="number"}function op(n){return xo(n,"r")&&xo(n,"g")&&xo(n,"b")}function ap(n){return op(n)&&xo(n,"a")}function lp(n){return op(n)}function ql(n,t){if(n.mode!==t.mode||n.type!==t.type)return!1;const e=n.getComponents(),i=t.getComponents();for(let r=0;r<e.length;r++)if(e[r]!==i[r])return!1;return!0}function uh(n){return"a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b]}function cy(n){const t=sp(n);return t?(e,i)=>{Rs(e,t(i))}:null}function uy(n){const t=n?ry:iy;return(e,i)=>{Rs(e,t(i))}}function hy(n,t,e){const r=en(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b),n.writeProperty("a",r.a)}function dy(n,t,e){const r=en(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b)}function py(n,t){return(e,i)=>{n?hy(e,i,t):dy(e,i,t)}}function fy(n){var t;return!!(!((t=n==null?void 0:n.color)===null||t===void 0)&&t.alpha)}function my(n){return n?t=>Xl(t,"0x"):t=>Wl(t,"0x")}function gy(n){return"color"in n||n.view==="color"}const _y=nn({id:"input-color-number",type:"input",accept:(n,t)=>{if(typeof n!="number"||!gy(t))return null;const e=zl(t);return e?{initialValue:n,params:Object.assign(Object.assign({},e),{supportsAlpha:fy(t)})}:null},binding:{reader:n=>n.params.supportsAlpha?ly:ay,equals:ql,writer:n=>uy(n.params.supportsAlpha)},controller:n=>{var t,e;return new jl(n.document,{colorType:"int",expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:my(n.params.supportsAlpha),parser:Ls("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.supportsAlpha,value:n.value,viewProps:n.viewProps})}});function vy(n,t){if(!lp(n))return en(re.black(),t);if(t==="int"){const e=uh(n);return new re(e,"rgb")}if(t==="float"){const e=uh(n);return new Hl(e,"rgb")}return en(re.black(),"int")}function xy(n){return ap(n)}function by(n){return t=>{const e=vy(t,n);return en(e,"int")}}function wy(n,t){return e=>n?rp(e,t):ip(e,t)}const yy=nn({id:"input-color-object",type:"input",accept:(n,t)=>{var e;if(!lp(n))return null;const i=zl(t);return i?{initialValue:n,params:Object.assign(Object.assign({},i),{colorType:(e=Xd(t))!==null&&e!==void 0?e:"int"})}:null},binding:{reader:n=>by(n.params.colorType),equals:ql,writer:n=>py(xy(n.initialValue),n.params.colorType)},controller:n=>{var t,e;const i=ap(n.initialValue);return new jl(n.document,{colorType:n.params.colorType,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:wy(i,n.params.colorType),parser:Ls("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i,value:n.value,viewProps:n.viewProps})}}),Ey=nn({id:"input-color-string",type:"input",accept:(n,t)=>{if(typeof n!="string"||t.view==="text")return null;const e=Dw(n,Xd(t));if(!e)return null;const i=sp(e);if(!i)return null;const r=zl(t);return r?{initialValue:n,params:Object.assign(Object.assign({},r),{format:e,stringifier:i})}:null},binding:{reader:()=>Iw,equals:ql,writer:n=>{const t=cy(n.params.format);if(!t)throw Me.notBindable();return t}},controller:n=>{var t,e;return new jl(n.document,{colorType:n.params.format.type,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:n.params.stringifier,parser:Ls("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.format.alpha,value:n.value,viewProps:n.viewProps})}});class Yl{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const e=this.asm_.toComponents(t).map((i,r)=>{var s,a;return(a=(s=this.components[r])===null||s===void 0?void 0:s.constrain(i))!==null&&a!==void 0?a:i});return this.asm_.fromComponents(e)}}const hh=ne("pndtxt");class My{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(hh()),this.textViews.forEach(i=>{const r=t.createElement("div");r.classList.add(hh("a")),r.appendChild(i.element),this.element.appendChild(r)})}}function Sy(n,t,e){return new Ps(n,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",parser:t.parser,props:t.axes[e].textProps,value:ve(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}class $l{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((i,r)=>Sy(t,e,r)),this.acs_.forEach((i,r)=>{Yr({primary:this.value,secondary:i.value,forward:s=>e.assembly.toComponents(s)[r],backward:(s,a)=>{const o=e.assembly.toComponents(s);return o[r]=a,e.assembly.fromComponents(o)}})}),this.view=new My(t,{textViews:this.acs_.map(i=>i.view)})}get textControllers(){return this.acs_}}class Ty extends _s{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}}function Cy(n,t){const e=[],i=xd(n,t);i&&e.push(i);const r=bd(n);r&&e.push(r);const s=Vl(n.options);return s&&e.push(s),new Ts(e)}const Ay=nn({id:"input-number",type:"input",accept:(n,t)=>{if(typeof n!="number")return null;const e=we(t,i=>Object.assign(Object.assign({},yd(i)),{options:i.optional.custom(As),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>md,constraint:n=>Cy(n.params,n.initialValue),writer:n=>Rs},controller:n=>{const t=n.value,e=n.constraint,i=e&&Po(e,Cs);if(i)return new Pi(n.document,{props:new Yt({options:i.values.value("options")}),value:t,viewProps:n.viewProps});const r=wd(n.params,t.rawValue),s=e&&Po(e,Es);return s?new Lo(n.document,Object.assign(Object.assign({},kd(Object.assign(Object.assign({},r),{keyScale:ve(r.keyScale),max:s.values.value("max"),min:s.values.value("min")}))),{parser:oi,value:t,viewProps:n.viewProps})):new Ps(n.document,{parser:oi,props:Yt.fromObject(r),value:t,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="number"?null:n.controller.valueController instanceof Lo?new Ty(n.controller):n.controller.valueController instanceof Pi?new Bl(n.controller):null}});class Ti{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(he(t))return!1;const e=t.x,i=t.y;return!(typeof e!="number"||typeof i!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}}const cp={toComponents:n=>n.getComponents(),fromComponents:n=>new Ti(...n)},Er=ne("p2d");class Py{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Er()),e.viewProps.bindClassModifiers(this.element),ri(e.expanded,Xr(this.element,Er(void 0,"expanded")));const i=t.createElement("div");i.classList.add(Er("h")),this.element.appendChild(i);const r=t.createElement("button");r.classList.add(Er("b")),r.appendChild(Go(t,"p2dpad")),e.viewProps.bindDisabled(r),i.appendChild(r),this.buttonElement=r;const s=t.createElement("div");if(s.classList.add(Er("t")),i.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const a=t.createElement("div");a.classList.add(Er("p")),this.element.appendChild(a),this.pickerElement=a}else this.pickerElement=null}}const gi=ne("p2dp");class Ry{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=t.createElement("div"),this.element.classList.add(gi()),e.layout==="popup"&&this.element.classList.add(gi(void 0,"p")),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(gi("p")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.padElement=i;const r=t.createElementNS(Bn,"svg");r.classList.add(gi("g")),this.padElement.appendChild(r),this.svgElem_=r;const s=t.createElementNS(Bn,"line");s.classList.add(gi("ax")),s.setAttributeNS(null,"x1","0"),s.setAttributeNS(null,"y1","50%"),s.setAttributeNS(null,"x2","100%"),s.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(s);const a=t.createElementNS(Bn,"line");a.classList.add(gi("ax")),a.setAttributeNS(null,"x1","50%"),a.setAttributeNS(null,"y1","0"),a.setAttributeNS(null,"x2","50%"),a.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(a);const o=t.createElementNS(Bn,"line");o.classList.add(gi("l")),o.setAttributeNS(null,"x1","50%"),o.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(o),this.lineElem_=o;const l=t.createElement("div");l.classList.add(gi("m")),this.padElement.appendChild(l),this.markerElem_=l,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,e]=this.value.rawValue.getComponents(),i=this.props_.get("max"),r=oe(t,-i,+i,0,100),s=oe(e,-i,+i,0,100),a=this.props_.get("invertsY")?100-s:s;this.lineElem_.setAttributeNS(null,"x2",`${r}%`),this.lineElem_.setAttributeNS(null,"y2",`${a}%`),this.markerElem_.style.left=`${r}%`,this.markerElem_.style.top=`${a}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function dh(n,t,e){return[sn(t[0],ai(n)),sn(t[1],xs(n))*(e?1:-1)]}class Ly{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Ry(t,{layout:e.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new er(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=this.props.get("max"),r=oe(t.point.x,0,t.bounds.width,-i,+i),s=oe(this.props.get("invertsY")?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-i,+i);this.value.setRawValue(new Ti(r,s),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){Bd(t.key)&&t.preventDefault();const[e,i]=dh(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(new Ti(this.value.rawValue.x+e,this.value.rawValue.y+i),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[e,i]=dh(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Dy{constructor(t,e){var i,r;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=Ss.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new Nd(t,{viewProps:this.viewProps}):null;const s=new Ly(t,{layout:e.pickerLayout,props:new Yt({invertsY:ve(e.invertsY),max:ve(e.max),xKeyScale:e.axes[0].textProps.value("keyScale"),yKeyScale:e.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(a=>{a.addEventListener("blur",this.onPopupChildBlur_),a.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.textC_=new $l(t,{assembly:cp,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new Py(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(i=this.view.buttonElement)===null||i===void 0||i.addEventListener("blur",this.onPadButtonBlur_),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Yr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:a=>a,backward:(a,o)=>o})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ol(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=Td(t);i&&e.contains(i)||i&&i===this.view.buttonElement&&!Ll(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}function Iy(n){return Ti.isObject(n)?new Ti(n.x,n.y):new Ti}function Uy(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y)}function Ny(n,t){return new Yl({assembly:cp,components:[ei(Object.assign(Object.assign({},n),n.x),t.x),ei(Object.assign(Object.assign({},n),n.y),t.y)]})}function ph(n,t){var e,i;if(!he(n.min)||!he(n.max))return Math.max(Math.abs((e=n.min)!==null&&e!==void 0?e:0),Math.abs((i=n.max)!==null&&i!==void 0?i:0));const r=_d(n);return Math.max(Math.abs(r)*10,Math.abs(t)*10)}function Fy(n,t){var e,i;const r=ph($i(n,(e=n.x)!==null&&e!==void 0?e:{}),t.x),s=ph($i(n,(i=n.y)!==null&&i!==void 0?i:{}),t.y);return Math.max(r,s)}function Oy(n){if(!("y"in n))return!1;const t=n.y;return t&&"inverted"in t?!!t.inverted:!1}const By=nn({id:"input-point2d",type:"input",accept:(n,t)=>{if(!Ti.isObject(n))return null;const e=we(t,i=>Object.assign(Object.assign({},bs(i)),{expanded:i.optional.boolean,picker:i.optional.custom(zd),readonly:i.optional.constant(!1),x:i.optional.custom(bi),y:i.optional.object(Object.assign(Object.assign({},bs(i)),{inverted:i.optional.boolean}))}));return e?{initialValue:n,params:e}:null},binding:{reader:()=>Iy,constraint:n=>Ny(n.params,n.initialValue),equals:Ti.equals,writer:()=>Uy},controller:n=>{var t,e;const i=n.document,r=n.value,s=n.constraint,a=[n.params.x,n.params.y];return new Dy(i,{axes:r.rawValue.getComponents().map((o,l)=>{var c;return Rl({constraint:s.components[l],initialValue:o,params:$i(n.params,(c=a[l])!==null&&c!==void 0?c:{})})}),expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,invertsY:Oy(n.params),max:Fy(n.params,r.rawValue),parser:oi,pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",value:r,viewProps:n.viewProps})}});class Rr{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(he(t))return!1;const e=t.x,i=t.y,r=t.z;return!(typeof e!="number"||typeof i!="number"||typeof r!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const up={toComponents:n=>n.getComponents(),fromComponents:n=>new Rr(...n)};function ky(n){return Rr.isObject(n)?new Rr(n.x,n.y,n.z):new Rr}function Vy(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z)}function zy(n,t){return new Yl({assembly:up,components:[ei(Object.assign(Object.assign({},n),n.x),t.x),ei(Object.assign(Object.assign({},n),n.y),t.y),ei(Object.assign(Object.assign({},n),n.z),t.z)]})}const Hy=nn({id:"input-point3d",type:"input",accept:(n,t)=>{if(!Rr.isObject(n))return null;const e=we(t,i=>Object.assign(Object.assign({},bs(i)),{readonly:i.optional.constant(!1),x:i.optional.custom(bi),y:i.optional.custom(bi),z:i.optional.custom(bi)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>ky,constraint:n=>zy(n.params,n.initialValue),equals:Rr.equals,writer:n=>Vy},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z];return new $l(n.document,{assembly:up,axes:t.rawValue.getComponents().map((r,s)=>{var a;return Rl({constraint:e.components[s],initialValue:r,params:$i(n.params,(a=i[s])!==null&&a!==void 0?a:{})})}),parser:oi,value:t,viewProps:n.viewProps})}});class Lr{constructor(t=0,e=0,i=0,r=0){this.x=t,this.y=e,this.z=i,this.w=r}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(he(t))return!1;const e=t.x,i=t.y,r=t.z,s=t.w;return!(typeof e!="number"||typeof i!="number"||typeof r!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const hp={toComponents:n=>n.getComponents(),fromComponents:n=>new Lr(...n)};function Gy(n){return Lr.isObject(n)?new Lr(n.x,n.y,n.z,n.w):new Lr}function Wy(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z),n.writeProperty("w",t.w)}function Xy(n,t){return new Yl({assembly:hp,components:[ei(Object.assign(Object.assign({},n),n.x),t.x),ei(Object.assign(Object.assign({},n),n.y),t.y),ei(Object.assign(Object.assign({},n),n.z),t.z),ei(Object.assign(Object.assign({},n),n.w),t.w)]})}const jy=nn({id:"input-point4d",type:"input",accept:(n,t)=>{if(!Lr.isObject(n))return null;const e=we(t,i=>Object.assign(Object.assign({},bs(i)),{readonly:i.optional.constant(!1),w:i.optional.custom(bi),x:i.optional.custom(bi),y:i.optional.custom(bi),z:i.optional.custom(bi)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Gy,constraint:n=>Xy(n.params,n.initialValue),equals:Lr.equals,writer:n=>Wy},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z,n.params.w];return new $l(n.document,{assembly:hp,axes:t.rawValue.getComponents().map((r,s)=>{var a;return Rl({constraint:e.components[s],initialValue:r,params:$i(n.params,(a=i[s])!==null&&a!==void 0?a:{})})}),parser:oi,value:t,viewProps:n.viewProps})}});function qy(n){const t=[],e=Vl(n.options);return e&&t.push(e),new Ts(t)}const Yy=nn({id:"input-string",type:"input",accept:(n,t)=>{if(typeof n!="string")return null;const e=we(t,i=>({readonly:i.optional.constant(!1),options:i.optional.custom(As)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Od,constraint:n=>qy(n.params),writer:n=>Rs},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&Po(i,Cs);return r?new Pi(t,{props:new Yt({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new vs(t,{parser:s=>s,props:Yt.fromObject({formatter:cl}),value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="string"?null:n.controller.valueController instanceof Pi?new Bl(n.controller):null}}),Ds={monitor:{defaultInterval:200,defaultRows:3}},fh=ne("mll");class $y{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(fh()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("textarea");i.classList.add(fh("i")),i.style.height=`calc(var(${Vd("containerUnitSize")}) * ${e.rows})`,i.readOnly=!0,e.viewProps.bindDisabled(i),this.element.appendChild(i),this.textareaElem_=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,i=[];this.value.rawValue.forEach(r=>{r!==void 0&&i.push(this.formatter_(r))}),t.textContent=i.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class Kl{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new $y(t,{formatter:e.formatter,rows:e.rows,value:this.value,viewProps:this.viewProps})}}const mh=ne("sgl");class Ky{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(mh()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(mh("i")),i.readOnly=!0,i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}}class Zl{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Ky(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}}const Zy=nn({id:"monitor-bool",type:"monitor",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=we(t,i=>({readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Fd},controller:n=>{var t;return n.value.rawValue.length===1?new Zl(n.document,{formatter:ah,value:n.value,viewProps:n.viewProps}):new Kl(n.document,{formatter:ah,rows:(t=n.params.rows)!==null&&t!==void 0?t:Ds.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}});class Jy extends _s{get max(){return this.controller.valueController.props.get("max")}set max(t){this.controller.valueController.props.set("max",t)}get min(){return this.controller.valueController.props.get("min")}set min(t){this.controller.valueController.props.set("min",t)}}const _i=ne("grl");class Qy{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(_i()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const i=t.createElementNS(Bn,"svg");i.classList.add(_i("g")),i.style.height=`calc(var(${Vd("containerUnitSize")}) * ${e.rows})`,this.element.appendChild(i),this.svgElem_=i;const r=t.createElementNS(Bn,"polyline");this.svgElem_.appendChild(r),this.lineElem_=r;const s=t.createElement("div");s.classList.add(_i("t"),ne("tt")()),this.element.appendChild(s),this.tooltipElem_=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:t,clientHeight:e}=this.element,i=this.value.rawValue.length-1,r=this.props_.get("min"),s=this.props_.get("max"),a=[];this.value.rawValue.forEach((h,d)=>{if(h===void 0)return;const m=oe(d,0,i,0,t),g=oe(h,r,s,e,0);a.push([m,g].join(","))}),this.lineElem_.setAttributeNS(null,"points",a.join(" "));const o=this.tooltipElem_,l=this.value.rawValue[this.cursor_.rawValue];if(l===void 0){o.classList.remove(_i("t","a"));return}const c=oe(this.cursor_.rawValue,0,i,0,t),u=oe(l,r,s,e,0);o.style.left=`${c}px`,o.style.top=`${u}px`,o.textContent=`${this.formatter_(l)}`,o.classList.contains(_i("t","a"))||(o.classList.add(_i("t","a"),_i("t","in")),Ao(o),o.classList.remove(_i("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class dp{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=ve(-1),this.view=new Qy(t,{cursor:this.cursor_,formatter:e.formatter,rows:e.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!Ll(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const i=new er(this.view.element);i.emitter.on("down",this.onGraphPointerDown_),i.emitter.on("move",this.onGraphPointerMove_),i.emitter.on("up",this.onGraphPointerUp_)}}importProps(t){return gn(t,null,e=>({max:e.required.number,min:e.required.number}),e=>(this.props.set("max",e.max),this.props.set("min",e.min),!0))}exportProps(){return _n(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const{clientWidth:e}=this.view.element;this.cursor_.rawValue=Math.floor(oe(t.offsetX,0,e,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(oe(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function ul(n){return he(n.format)?on(2):n.format}function tE(n){var t;return n.value.rawValue.length===1?new Zl(n.document,{formatter:ul(n.params),value:n.value,viewProps:n.viewProps}):new Kl(n.document,{formatter:ul(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:Ds.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}function eE(n){var t,e,i;return new dp(n.document,{formatter:ul(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:Ds.monitor.defaultRows,props:Yt.fromObject({max:(e=n.params.max)!==null&&e!==void 0?e:100,min:(i=n.params.min)!==null&&i!==void 0?i:0}),value:n.value,viewProps:n.viewProps})}function gh(n){return n.view==="graph"}const nE=nn({id:"monitor-number",type:"monitor",accept:(n,t)=>{if(typeof n!="number")return null;const e=we(t,i=>({format:i.optional.function,max:i.optional.number,min:i.optional.number,readonly:i.required.constant(!0),rows:i.optional.number,view:i.optional.string}));return e?{initialValue:n,params:e}:null},binding:{defaultBufferSize:n=>gh(n)?64:1,reader:n=>md},controller:n=>gh(n.params)?eE(n):tE(n),api:n=>n.controller.valueController instanceof dp?new Jy(n.controller):null}),iE=nn({id:"monitor-string",type:"monitor",accept:(n,t)=>{if(typeof n!="string")return null;const e=we(t,i=>({multiline:i.optional.boolean,readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Od},controller:n=>{var t;const e=n.value;return e.rawValue.length>1||n.params.multiline?new Kl(n.document,{formatter:cl,rows:(t=n.params.rows)!==null&&t!==void 0?t:Ds.monitor.defaultRows,value:e,viewProps:n.viewProps}):new Zl(n.document,{formatter:cl,value:e,viewProps:n.viewProps})}});class rE{constructor(){this.map_=new Map}get(t){var e;return(e=this.map_.get(t))!==null&&e!==void 0?e:null}has(t){return this.map_.has(t)}add(t,e){return this.map_.set(t,e),t.viewProps.handleDispose(()=>{this.map_.delete(t)}),e}}class sE{constructor(t){this.target=t.target,this.reader_=t.reader,this.writer_=t.writer}read(){return this.reader_(this.target.read())}write(t){this.writer_(this.target,t)}inject(t){this.write(this.reader_(t))}}function oE(n,t){var e;const i=n.accept(t.target.read(),t.params);if(he(i))return null;const r={target:t.target,initialValue:i.initialValue,params:i.params},s=we(t.params,h=>({disabled:h.optional.boolean,hidden:h.optional.boolean,label:h.optional.string,tag:h.optional.string})),a=n.binding.reader(r),o=n.binding.constraint?n.binding.constraint(r):void 0,l=new sE({reader:a,target:t.target,writer:n.binding.writer(r)}),c=new Gx(ve(a(i.initialValue),{constraint:o,equals:n.binding.equals}),l),u=n.controller({constraint:o,document:t.document,initialValue:i.initialValue,params:i.params,value:c,viewProps:ci.create({disabled:s==null?void 0:s.disabled,hidden:s==null?void 0:s.hidden})});return new rb(t.document,{blade:qr(),props:Yt.fromObject({label:"label"in t.params?(e=s==null?void 0:s.label)!==null&&e!==void 0?e:null:t.target.key}),tag:s==null?void 0:s.tag,value:c,valueController:u})}class aE{constructor(t){this.target=t.target,this.reader_=t.reader}read(){return this.reader_(this.target.read())}}function lE(n,t){return t===0?new Vb:new zb(n,t??Ds.monitor.defaultInterval)}function cE(n,t){var e,i,r;const s=n.accept(t.target.read(),t.params);if(he(s))return null;const a={target:t.target,initialValue:s.initialValue,params:s.params},o=we(t.params,d=>({bufferSize:d.optional.number,disabled:d.optional.boolean,hidden:d.optional.boolean,interval:d.optional.number,label:d.optional.string})),l=n.binding.reader(a),c=(i=(e=o==null?void 0:o.bufferSize)!==null&&e!==void 0?e:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(s.params))!==null&&i!==void 0?i:1,u=new cb({binding:new aE({reader:l,target:t.target}),bufferSize:c,ticker:lE(t.document,o==null?void 0:o.interval)}),h=n.controller({document:t.document,params:s.params,value:u,viewProps:ci.create({disabled:o==null?void 0:o.disabled,hidden:o==null?void 0:o.hidden})});return h.viewProps.bindDisabled(u.ticker),h.viewProps.handleDispose(()=>{u.ticker.dispose()}),new hb(t.document,{blade:qr(),props:Yt.fromObject({label:"label"in t.params?(r=o==null?void 0:o.label)!==null&&r!==void 0?r:null:t.target.key}),value:u,valueController:h})}class uE{constructor(t){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=t}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t,e){if(!tw(e.core))throw Me.notCompatible(t,e.id);e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput_(t,e,i){return this.pluginsMap_.inputs.reduce((r,s)=>r??oE(s,{document:t,target:e,params:i}),null)}createMonitor_(t,e,i){return this.pluginsMap_.monitors.reduce((r,s)=>r??cE(s,{document:t,params:i,target:e}),null)}createBinding(t,e,i){const r=e.read();if(he(r))throw new Me({context:{key:e.key},type:"nomatchingcontroller"});const s=this.createInput_(t,e,i);if(s)return s;const a=this.createMonitor_(t,e,i);if(a)return a;throw new Me({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){const i=this.pluginsMap_.blades.reduce((r,s)=>r??kb(s,{document:t,params:e}),null);if(!i)throw new Me({type:"nomatchingview",context:{params:e}});return i}createInputBindingApi_(t){const e=this.pluginsMap_.inputs.reduce((i,r)=>{var s,a;return i||((a=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&a!==void 0?a:null)},null);return this.apiCache_.add(t,e??new _s(t))}createMonitorBindingApi_(t){const e=this.pluginsMap_.monitors.reduce((i,r)=>{var s,a;return i||((a=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&a!==void 0?a:null)},null);return this.apiCache_.add(t,e??new _s(t))}createBindingApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(sb(t))return this.createInputBindingApi_(t);if(db(t))return this.createMonitorBindingApi_(t);throw Me.shouldNeverHappen()}createApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(ib(t))return this.createBindingApi(t);const e=this.pluginsMap_.blades.reduce((i,r)=>i??r.api({controller:t,pool:this}),null);if(!e)throw Me.shouldNeverHappen();return this.apiCache_.add(t,e)}}const hE=new rE;function dE(){const n=new uE(hE);return[By,Hy,jy,Yy,Ay,Ey,yy,_y,rw,Zy,iE,nE,_b,Rb,Ud].forEach(t=>{n.register("core",t)}),n}class pE extends tr{constructor(t){super(t),this.emitter_=new Ie,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new Ms(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class fE extends tr{}class mE extends tr{constructor(t){super(t),this.emitter_=new Ie,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new Ms(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class gE extends tr{constructor(t){super(t),this.emitter_=new Ie,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new Ms(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(t){this.controller.valueController.props.set("formatter",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const _E=function(){return{id:"list",type:"blade",core:jr,accept(n){const t=we(n,e=>({options:e.required.custom(As),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string}));return t?{params:t}:null},controller(n){const t=new Cs(kl(n.params.options)),e=ve(n.params.value,{constraint:t}),i=new Pi(n.document,{props:new Yt({options:t.values.value("options")}),value:e,viewProps:n.viewProps});return new Ki(n.document,{blade:n.blade,props:Yt.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof Ki)||!(n.controller.valueController instanceof Pi)?null:new pE(n.controller)}}}();class vE extends Dd{constructor(t,e){super(t,e)}get element(){return this.controller.view.element}}class xE extends al{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}}const _h=ne("spr");class bE{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(_h()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("hr");i.classList.add(_h("r")),this.element.appendChild(i)}}class vh extends Wo{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new bE(t,{viewProps:e.viewProps})}))}}const wE={id:"separator",type:"blade",core:jr,accept(n){const t=we(n,e=>({view:e.required.constant("separator")}));return t?{params:t}:null},controller(n){return new vh(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof vh?new fE(n.controller):null}},yE={id:"slider",type:"blade",core:jr,accept(n){const t=we(n,e=>({max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number}));return t?{params:t}:null},controller(n){var t,e;const i=(t=n.params.value)!==null&&t!==void 0?t:0,r=new Es({max:n.params.max,min:n.params.min}),s=ve(i,{constraint:r}),a=new Lo(n.document,Object.assign(Object.assign({},kd({formatter:(e=n.params.format)!==null&&e!==void 0?e:Bx,keyScale:ve(1),max:r.values.value("max"),min:r.values.value("min"),pointerScale:vd(n.params,i)})),{parser:oi,value:s,viewProps:n.viewProps}));return new Ki(n.document,{blade:n.blade,props:Yt.fromObject({label:n.params.label}),value:s,valueController:a})},api(n){return!(n.controller instanceof Ki)||!(n.controller.valueController instanceof Lo)?null:new mE(n.controller)}},EE=function(){return{id:"text",type:"blade",core:jr,accept(n){const t=we(n,e=>({parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string}));return t?{params:t}:null},controller(n){var t;const e=ve(n.params.value),i=new vs(n.document,{parser:n.params.parse,props:Yt.fromObject({formatter:(t=n.params.format)!==null&&t!==void 0?t:r=>String(r)}),value:e,viewProps:n.viewProps});return new Ki(n.document,{blade:n.blade,props:Yt.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof Ki)||!(n.controller.valueController instanceof vs)?null:new gE(n.controller)}}}();function ME(n){const t=n.createElement("div");return t.classList.add(ne("dfw")()),n.body&&n.body.appendChild(t),t}function SE(n,t,e){if(n.querySelector(`style[data-tp-style=${t}]`))return;const i=n.createElement("style");i.dataset.tpStyle=t,i.textContent=e,n.head.appendChild(i)}class TE extends vE{constructor(t){var e,i;const r=t??{},s=(e=r.document)!==null&&e!==void 0?e:Kx(),a=dE(),o=new xE(s,{expanded:r.expanded,blade:qr(),props:Yt.fromObject({title:r.title}),viewProps:ci.create()});super(o,a),this.pool_=a,this.containerElem_=(i=r.container)!==null&&i!==void 0?i:ME(s),this.containerElem_.appendChild(this.element),this.doc_=s,this.usesDefaultWrapper_=!r.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw Me.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw Me.alreadyDisposed();if(this.usesDefaultWrapper_){const e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){t.css&&SE(this.document,`plugin-${t.id}`,t.css),("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(i=>{this.pool_.register(t.id,i)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[_E,wE,yE,Ud,EE]})}}new Ld("4.0.5");class pp{constructor(t){pe(this,"N");pe(this,"R");this.N=t,this.R=new Float32Array(t*t);for(let e=0;e<t;e++)this.R[e*t+e]=1}reset(){this.R.fill(0);for(let t=0;t<this.N;t++)this.R[t*this.N+t]=1}get matrix(){return this.R}applyGivensLeft(t,e,i){if(t===e)return;const r=this.N,s=Math.cos(i),a=Math.sin(i);for(let o=0;o<r;o++){const l=this.R[t*r+o],c=this.R[e*r+o];this.R[t*r+o]=s*l-a*c,this.R[e*r+o]=a*l+s*c}}reorthonormalize(){const t=this.N,e=this.R;for(let i=0;i<t;i++){for(let a=0;a<i;a++){let o=0;for(let l=0;l<t;l++)o+=e[i*t+l]*e[a*t+l];for(let l=0;l<t;l++)e[i*t+l]-=o*e[a*t+l]}let r=0;for(let a=0;a<t;a++)r+=e[i*t+a]*e[i*t+a];r=Math.sqrt(r);const s=r>1e-8?1/r:1;for(let a=0;a<t;a++)e[i*t+a]*=s}}}function CE(n,t,e,i){const r=new Float32Array(t);for(let c=0;c<t;c++){let u=0;for(let h=0;h<e;h++)u+=n[c*e+h];r[c]=u/e}const s=new Float32Array(t*e);for(let c=0;c<t;c++){const u=r[c];for(let h=0;h<e;h++)s[c*e+h]=n[c*e+h]-u}const a=new Float32Array(t*t);for(let c=0;c<t;c++)for(let u=c;u<t;u++){let h=0;for(let m=0;m<e;m++)h+=s[c*e+m]*s[u*e+m];const d=h/e;a[c*t+u]=d,c!==u&&(a[u*t+c]=d)}const o=[];for(let c=0;c<i;c++){const{eigenvalue:u,eigenvector:h}=AE(a,t,1e3,1e-6);if(!isFinite(u))break;o.push(...h);for(let d=0;d<t;d++)for(let m=0;m<t;m++)a[d*t+m]-=u*h[d]*h[m]}const l=new Float32Array(i*t);for(let c=0;c<i;c++)for(let u=0;u<t;u++)l[c*t+u]=o[c*t+u];return{P:l,mean:r}}function AE(n,t,e,i){const r=new Float32Array(t);for(let a=0;a<t;a++)r[a]=Math.random()-.5;xh(r);let s=0;for(let a=0;a<e;a++){const o=new Float32Array(t);for(let u=0;u<t;u++){let h=0;for(let d=0;d<t;d++)h+=n[u*t+d]*r[d];o[u]=h}const l=PE(r,o);xh(o);let c=0;for(let u=0;u<t;u++){const h=o[u]-r[u];c+=h*h}if(r.set(o),Math.abs(l-s)<i&&c<i)return{eigenvalue:l,eigenvector:Array.from(r)};s=l}return{eigenvalue:s,eigenvector:Array.from(r)}}function PE(n,t){let e=0;for(let i=0;i<n.length;i++)e+=n[i]*t[i];return e}function xh(n){let t=0;for(let i=0;i<n.length;i++)t+=n[i]*n[i];const e=t>1e-12?1/Math.sqrt(t):1;for(let i=0;i<n.length;i++)n[i]*=e}const bo=0,RE=1,LE=new C,bh=new Q0,za=new En,wh=new C,po=new yn;class DE{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new yh,this.unassigned=new yh,this.vertices=[]}setFromPoints(t){if(t.length>=4){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.vertices.push(new IE(t[e]));this.compute()}return this}setFromObject(t){const e=[];return t.updateMatrixWorld(!0),t.traverse(function(i){const r=i.geometry;if(r!==void 0){const s=r.attributes.position;if(s!==void 0)for(let a=0,o=s.count;a<o;a++){const l=new C;l.fromBufferAttribute(s,a).applyMatrix4(i.matrixWorld),e.push(l)}}}),this.setFromPoints(e)}containsPoint(t){const e=this.faces;for(let i=0,r=e.length;i<r;i++)if(e[i].distanceToPoint(t)>this.tolerance)return!1;return!0}intersectRay(t,e){const i=this.faces;let r=-1/0,s=1/0;for(let a=0,o=i.length;a<o;a++){const l=i[a],c=l.distanceToPoint(t.origin),u=l.normal.dot(t.direction);if(c>0&&u>=0)return null;const h=u!==0?-c/u:0;if(!(h<=0)&&(u>0?s=Math.min(h,s):r=Math.max(h,r),r>s))return null}return r!==-1/0?t.at(r,e):t.at(s,e),e}intersectsRay(t){return this.intersectRay(t,LE)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(t,e){return t.face=e,e.outside===null?this.assigned.append(t):this.assigned.insertBefore(e.outside,t),e.outside=t,this}removeVertexFromFace(t,e){return t===e.outside&&(t.next!==null&&t.next.face===e?e.outside=t.next:e.outside=null),this.assigned.remove(t),this}removeAllVerticesFromFace(t){if(t.outside!==null){const e=t.outside;let i=t.outside;for(;i.next!==null&&i.next.face===t;)i=i.next;return this.assigned.removeSubList(e,i),e.prev=i.next=null,t.outside=null,e}}deleteFaceVertices(t,e){const i=this.removeAllVerticesFromFace(t);if(i!==void 0)if(e===void 0)this.unassigned.appendChain(i);else{let r=i;do{const s=r.next;e.distanceToPoint(r.point)>this.tolerance?this.addVertexToFace(r,e):this.unassigned.append(r),r=s}while(r!==null)}return this}resolveUnassignedPoints(t){if(this.unassigned.isEmpty()===!1){let e=this.unassigned.first();do{const i=e.next;let r=this.tolerance,s=null;for(let a=0;a<t.length;a++){const o=t[a];if(o.mark===bo){const l=o.distanceToPoint(e.point);if(l>r&&(r=l,s=o),r>1e3*this.tolerance)break}}s!==null&&this.addVertexToFace(e,s),e=i}while(e!==null)}return this}computeExtremes(){const t=new C,e=new C,i=[],r=[];for(let s=0;s<3;s++)i[s]=r[s]=this.vertices[0];t.copy(this.vertices[0].point),e.copy(this.vertices[0].point);for(let s=0,a=this.vertices.length;s<a;s++){const o=this.vertices[s],l=o.point;for(let c=0;c<3;c++)l.getComponent(c)<t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),i[c]=o);for(let c=0;c<3;c++)l.getComponent(c)>e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),r[c]=o)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(t.x),Math.abs(e.x))+Math.max(Math.abs(t.y),Math.abs(e.y))+Math.max(Math.abs(t.z),Math.abs(e.z))),{min:i,max:r}}computeInitialHull(){const t=this.vertices,e=this.computeExtremes(),i=e.min,r=e.max;let s=0,a=0;for(let d=0;d<3;d++){const m=r[d].point.getComponent(d)-i[d].point.getComponent(d);m>s&&(s=m,a=d)}const o=i[a],l=r[a];let c,u;s=0,bh.set(o.point,l.point);for(let d=0,m=this.vertices.length;d<m;d++){const g=t[d];if(g!==o&&g!==l){bh.closestPointToPoint(g.point,!0,wh);const _=wh.distanceToSquared(g.point);_>s&&(s=_,c=g)}}s=-1,za.setFromCoplanarPoints(o.point,l.point,c.point);for(let d=0,m=this.vertices.length;d<m;d++){const g=t[d];if(g!==o&&g!==l&&g!==c){const _=Math.abs(za.distanceToPoint(g.point));_>s&&(s=_,u=g)}}const h=[];if(za.distanceToPoint(u.point)<0){h.push(Pn.create(o,l,c),Pn.create(u,l,o),Pn.create(u,c,l),Pn.create(u,o,c));for(let d=0;d<3;d++){const m=(d+1)%3;h[d+1].getEdge(2).setTwin(h[0].getEdge(m)),h[d+1].getEdge(1).setTwin(h[m+1].getEdge(0))}}else{h.push(Pn.create(o,c,l),Pn.create(u,o,l),Pn.create(u,l,c),Pn.create(u,c,o));for(let d=0;d<3;d++){const m=(d+1)%3;h[d+1].getEdge(2).setTwin(h[0].getEdge((3-d)%3)),h[d+1].getEdge(0).setTwin(h[m+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(h[d]);for(let d=0,m=t.length;d<m;d++){const g=t[d];if(g!==o&&g!==l&&g!==c&&g!==u){s=this.tolerance;let _=null;for(let f=0;f<4;f++){const p=this.faces[f].distanceToPoint(g.point);p>s&&(s=p,_=this.faces[f])}_!==null&&this.addVertexToFace(g,_)}}return this}reindexFaces(){const t=[];for(let e=0;e<this.faces.length;e++){const i=this.faces[e];i.mark===bo&&t.push(i)}return this.faces=t,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let t,e=0;const i=this.assigned.first().face;let r=i.outside;do{const s=i.distanceToPoint(r.point);s>e&&(e=s,t=r),r=r.next}while(r!==null&&r.face===i);return t}}computeHorizon(t,e,i,r){this.deleteFaceVertices(i),i.mark=RE;let s;e===null?s=e=i.getEdge(0):s=e.next;do{const a=s.twin,o=a.face;o.mark===bo&&(o.distanceToPoint(t)>this.tolerance?this.computeHorizon(t,a,o,r):r.push(s)),s=s.next}while(s!==e);return this}addAdjoiningFace(t,e){const i=Pn.create(t,e.tail(),e.head());return this.faces.push(i),i.getEdge(-1).setTwin(e.twin),i.getEdge(0)}addNewFaces(t,e){this.newFaces=[];let i=null,r=null;for(let s=0;s<e.length;s++){const a=e[s],o=this.addAdjoiningFace(t,a);i===null?i=o:o.next.setTwin(r),this.newFaces.push(o.face),r=o}return i.next.setTwin(r),this}addVertexToHull(t){const e=[];return this.unassigned.clear(),this.removeVertexFromFace(t,t.face),this.computeHorizon(t.point,null,t.face,e),this.addNewFaces(t,e),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let t;for(this.computeInitialHull();(t=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(t);return this.reindexFaces(),this.cleanup(),this}}class Pn{constructor(){this.normal=new C,this.midpoint=new C,this.area=0,this.constant=0,this.outside=null,this.mark=bo,this.edge=null}static create(t,e,i){const r=new Pn,s=new Ha(t,r),a=new Ha(e,r),o=new Ha(i,r);return s.next=o.prev=a,a.next=s.prev=o,o.next=a.prev=s,r.edge=s,r.compute()}getEdge(t){let e=this.edge;for(;t>0;)e=e.next,t--;for(;t<0;)e=e.prev,t++;return e}compute(){const t=this.edge.tail(),e=this.edge.head(),i=this.edge.next.head();return po.set(t.point,e.point,i.point),po.getNormal(this.normal),po.getMidpoint(this.midpoint),this.area=po.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(t){return this.normal.dot(t)-this.constant}}class Ha{constructor(t,e){this.vertex=t,this.prev=null,this.next=null,this.twin=null,this.face=e}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const t=this.head(),e=this.tail();return e!==null?e.point.distanceTo(t.point):-1}lengthSquared(){const t=this.head(),e=this.tail();return e!==null?e.point.distanceToSquared(t.point):-1}setTwin(t){return this.twin=t,t.twin=this,this}}class IE{constructor(t){this.point=t,this.prev=null,this.next=null,this.face=null}}class yh{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(t,e){return e.prev=t.prev,e.next=t,e.prev===null?this.head=e:e.prev.next=e,t.prev=e,this}insertAfter(t,e){return e.prev=t,e.next=t.next,e.next===null?this.tail=e:e.next.prev=e,t.next=e,this}append(t){return this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t,this}appendChain(t){for(this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail;t.next!==null;)t=t.next;return this.tail=t,this}remove(t){return t.prev===null?this.head=t.next:t.prev.next=t.next,t.next===null?this.tail=t.prev:t.next.prev=t.prev,this}removeSubList(t,e){return t.prev===null?this.head=e.next:t.prev.next=e.next,e.next===null?this.tail=t.prev:e.next.prev=t.prev,this}isEmpty(){return this.head===null}}function UE(n){const t=1<<n,e=new Float32Array(n*t);for(let r=0;r<t;r++)for(let s=0;s<n;s++){const a=r>>s&1;e[s*t+r]=a?.5:-.5}const i=[];for(let r=0;r<t;r++)for(let s=0;s<n;s++){const a=r^1<<s;a>r&&i.push(r,a)}return{verts:e,edges:new Uint32Array(i),V:t}}function NE(n){const t=2*n,e=new Float32Array(n*t);for(let r=0;r<n;r++){const s=2*r,a=s+1;for(let o=0;o<n;o++){const l=o===r?.5:0;e[o*t+s]=l,e[o*t+a]=-l}}const i=[];for(let r=0;r<t;r++)for(let s=r+1;s<t;s++){const a=Math.floor(r/2),o=Math.floor(s/2);a!==o&&i.push(r,s)}return{verts:e,edges:new Uint32Array(i),V:t}}function FE(n){const t=n+1,e=new Float32Array(n*t);for(let o=0;o<n;o++){const l=o+1;e[o*t+l]=1}const i=new Float32Array(n);for(let o=0;o<n;o++){let l=0;for(let c=0;c<t;c++)l+=e[o*t+c];i[o]=l/t}for(let o=0;o<n;o++){const l=i[o];for(let c=0;c<t;c++)e[o*t+c]-=l}let r=0;for(let o=0;o<e.length;o++)r=Math.max(r,Math.abs(e[o]));const s=r>0?.5/r:1;for(let o=0;o<e.length;o++)e[o]*=s;const a=[];for(let o=0;o<t;o++)for(let l=o+1;l<t;l++)a.push(o,l);return{verts:e,edges:new Uint32Array(a),V:t}}function fp(n,t){switch(n){case"hypercube":return UE(t);case"cross":return NE(t);case"simplex":return FE(t);default:throw new Error(`Tipo de primitiva no soportado: ${n}`)}}class mp{constructor(t,e,i){pe(this,"N");pe(this,"P");pe(this,"R");pe(this,"tmp");this.N=t,this.R=e,this.P=i??Do(t)}resizeBuffers(t){(!this.tmp||this.tmp.length!==this.N*t)&&(this.tmp=new Float32Array(this.N*t))}setCanonicalP(){this.P=Do(this.N)}setCustomP(t){if(t.length!==3*this.N)throw new Error("P debe ser 3×N");this.P=t}project(t,e,i){this.resizeBuffers(e);const r=this.N,s=this.tmp,a=this.R,o=this.P;for(let l=0;l<e;l++)for(let c=0;c<r;c++){let u=0;for(let h=0;h<r;h++)u+=a[c*r+h]*t[h*e+l];s[c*e+l]=u}for(let l=0;l<e;l++)for(let c=0;c<3;c++){let u=0;for(let h=0;h<r;h++)u+=o[c*r+h]*s[h*e+l];i[c*e+l]=u}}}function Do(n){const t=new Float32Array(3*n);return t[0*n+0]=1,n>1&&(t[1*n+1]=1),n>2&&(t[2*n+2]=1),t}class Jl{constructor(t){pe(this,"scene");pe(this,"group");pe(this,"geometry");pe(this,"line");pe(this,"mesh");pe(this,"positions");pe(this,"M");pe(this,"allEdges");pe(this,"visibleEdges");pe(this,"lineMaterial");pe(this,"solidMaterial");pe(this,"mode","wireframe");pe(this,"hullNeedsUpdate",!1);pe(this,"points",[]);pe(this,"visibleVertexMask");pe(this,"offset",new C);pe(this,"transform",new le);pe(this,"tmp",new C);this.scene=t,this.group=new Cr,this.scene.add(this.group),this.lineMaterial=new Yi({color:15069183,transparent:!0,opacity:.95}),this.solidMaterial=new nl({color:16777215,metalness:1,roughness:.05,transparent:!1,opacity:1,envMapIntensity:1.8,side:On,depthWrite:!0,vertexColors:!1})}build(t,e){this.dispose(),this.M=t,this.allEdges=e,this.visibleEdges=e,this.geometry=new Xe,this.positions=new Float32Array(3*t);const i=new fn(this.positions,3);this.geometry.setAttribute("position",i),this.setIndexAttribute(this.visibleEdges),this.line=new Ml(this.geometry,this.lineMaterial),this.line.visible=this.mode==="wireframe",this.group.add(this.line),this.points=Array.from({length:t},(r,s)=>{const a=new C;return a.__vertexId=s,a}),this.mesh=new me(new Xe,this.solidMaterial),this.mesh.visible=this.mode==="solid",this.group.add(this.mesh),this.hullNeedsUpdate=!0,this.visibleVertexMask=void 0}setTransform(t,e,i){const r=new dn().setFromEuler(e);this.transform.compose(t,r,i)}writeInterleavedFrom(t){const e=this.M,i=this.positions,r=t.subarray(0,e),s=t.subarray(e,2*e),a=t.subarray(2*e,3*e),o=this.transform;let l=0;for(let c=0;c<e;c++)this.tmp.set(r[c],s[c],a[c]).applyMatrix4(o),i[l++]=this.tmp.x,i[l++]=this.tmp.y,i[l++]=this.tmp.z,this.points[c].copy(this.tmp);this.geometry.getAttribute("position").needsUpdate=!0,this.geometry.computeBoundingSphere(),this.geometry.computeBoundingBox(),this.mode!=="wireframe"&&(this.hullNeedsUpdate=!0,this.updateHullGeometry())}setMode(t){if(this.mode=t,this.line){this.line.visible=t==="wireframe"||t==="transparent";const e=this.line.material;e.depthTest=t!=="transparent",this.line.renderOrder=t==="transparent"?5:0}this.mesh&&(t==="transparent"?(this.solidMaterial.transparent=!0,this.solidMaterial.opacity=.5,this.solidMaterial.depthWrite=!1):(this.solidMaterial.transparent=!1,this.solidMaterial.opacity=1,this.solidMaterial.depthWrite=!0),this.solidMaterial.needsUpdate=!0,this.mesh.material=this.solidMaterial,this.mesh.visible=t!=="wireframe"&&this.mesh.geometry.attributes.position!==void 0),this.hullNeedsUpdate=t!=="wireframe",t!=="wireframe"&&this.updateHullGeometry()}filterEdgesByDimRange(t,e,i,r,s,a){if(r<0||r>=e){this.setIndexAttribute(this.allEdges),this.visibleEdges=this.allEdges,this.visibleVertexMask=void 0,this.mode!=="wireframe"&&(this.hullNeedsUpdate=!0,this.updateHullGeometry());return}const o=new Uint8Array(i),l=r*i;for(let h=0;h<i;h++){const d=t[l+h];o[h]=d>=s&&d<=a?1:0}const c=[],u=this.allEdges;for(let h=0;h<u.length;h+=2){const d=u[h],m=u[h+1];o[d]&&o[m]&&c.push(d,m)}this.visibleEdges=new Uint32Array(c.length?c:[0,0]),this.setIndexAttribute(this.visibleEdges),this.geometry.index.needsUpdate=!0,this.visibleVertexMask=o,this.mode!=="wireframe"&&(this.hullNeedsUpdate=!0,this.updateHullGeometry())}refreshSurface(){this.mode==="wireframe"||!this.mesh||(this.hullNeedsUpdate=!0,this.updateHullGeometry())}dispose(){this.line&&(this.group.remove(this.line),this.line.geometry.dispose()),this.mesh&&(this.group.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh=void 0),this.geometry=void 0}setIndexAttribute(t){this.geometry.setIndex(new fn(t,1))}updateHullGeometry(){if(!this.mesh||!this.hullNeedsUpdate||this.mode==="wireframe")return;const t=this.visibleVertexMask,e=t?this.points.reduce((s,a,o)=>(t[o]===1&&s.push(o),s),[]):this.points.map((s,a)=>a);if(!e.length||e.length<4){this.mesh.visible=!1,this.hullNeedsUpdate=!1;return}const i=e.map(s=>this.points[s]);if(!i.length||i.length<4){this.mesh.visible=!1,this.hullNeedsUpdate=!1;return}const r=this.buildColoredHull(i);r.computeVertexNormals(),r.computeBoundingSphere(),this.mesh.geometry.dispose(),this.mesh.geometry=r,this.mesh.visible=!0,this.hullNeedsUpdate=!1}buildColoredHull(t){const i=new DE().setFromPoints(t).faces,r=[],s=[];for(let o=0;o<i.length;o++){const l=i[o];let c=l.edge;do{const u=c.head().point;r.push(u.x,u.y,u.z),s.push(l.normal.x,l.normal.y,l.normal.z),c=c.next}while(c!==l.edge)}const a=new Xe;return a.setAttribute("position",new Ke(r,3)),a.setAttribute("normal",new Ke(s,3)),a}}const OE=document.getElementById("app"),BE=document.getElementById("panel-container"),Ci=document.getElementById("file-input"),Qn=document.getElementById("tooltip"),ee=document.getElementById("context-menu"),Eh=document.getElementById("view-toggle"),ae=new cd({antialias:!0});ae.setSize(window.innerWidth,window.innerHeight);OE.appendChild(ae.domElement);ae.toneMapping=Ih;ae.toneMappingExposure=1.1;ae.useLegacyLights=!1;ae.outputColorSpace=ze;ae.setPixelRatio(Math.min(window.devicePixelRatio,2));const Vt=new ud,Is=new qt(1053722),jo=new qt(1315860);Vt.background=Is.clone();ae.setClearColor(Vt.background);const gp=new tl(ae),_p=gp.fromScene(new ix,.04).texture;gp.dispose();Vt.environment=_p;ae.environment=_p;const Ae=new un(50,window.innerWidth/window.innerHeight,.01,100);Ae.position.set(2.6,1.8,2.6);const We=new nx(Ae,ae.domElement);We.enableDamping=!0;const wi=new J0,yi=new Ut,Mh=new En,Sh=new C,vp=new $0(16777215,1);vp.position.set(2,3,4);const kE=new K0(16777215,.3),VE=new X0(8956671,592658,.6);Vt.add(kE,VE,vp);const Ql=new tx(1e3);Ql.position.set(0,-.6,0);Vt.add(Ql);const Th=new Yi({color:3817807,opacity:.4,transparent:!0}),Io=new Cr;Io.position.y=-.6;const cs=30,hl=60,fo=cs*2/hl;for(let n=-hl;n<=hl;n++){const t=new Xe().setFromPoints([new C(-cs,0,n*fo),new C(cs,0,n*fo)]),e=new fs(t,Th);Io.add(e);const i=new Xe().setFromPoints([new C(n*fo,0,-cs),new C(n*fo,0,cs)]),r=new fs(i,Th);Io.add(r)}Vt.add(Io);new Hr({color:16765286});const xp=new Sl(.012,8,8),Fn=["#ff6b6b","#4caf50","#2196f3","#f0c674","#9b59b6","#1abc9c","#e67e22","#ecf0f1"];let ft=4,be=new Float32Array,dl=new Uint32Array,At=0,ws=new pp(ft),In=new mp(ft,ws.matrix,Do(ft)),ni=new Float32Array,tc="primitive";const ec=new Uint32Array([0,0]),ge=new C,Dr=new C,ls=new Float32Array(32),Ch=new C;let Mr=null,li=!0,Br;const Ga=document.getElementById("object-list"),Ah=document.getElementById("axis-legend"),mo=document.getElementById("axis-list"),ii=document.getElementById("status-bar");let Rn={x:window.innerWidth-180,y:window.innerHeight-80};const hs=[],pl=[],zE=20;let bp="Hipercubo",ue=-1,kn=-1,He=null,Se=null,Le=null,Vi=null,zi=null,Vn=!1;const Zt={pos:new C,rot:new C,scale:new C(1,1,1)},I={mode:"none",instIdx:-1,targetVertex:-1,startPos:new C,startRot:new C,startScale:1,startMouse:new Ut,vertexStart:new C,axis:new C,plane:new En,planeHitStart:new C,lastHit:new C,vertexDataStart:null,lockAxis:-1,objectDataStart:null,wPlane:!1,moveOffset:new C},De={active:!1,lastX:0,accum:0,prevZoom:We.enableZoom,prevPan:We.enablePan};let Ue=Array.from({length:ft},(n,t)=>t),Qe=0;function wp({x:n,y:t,z:e}){W.axesX=n,W.axesY=t,W.axesZ=e;const i=Ue.indexOf(n);i>=0&&(Qe=i),li=!0,I.lockAxis=-1,No(),Ns(),Fs(),mn()}function nc(){const n={N:ft,X:new Float32Array(be),M:At,axes:{x:W.axesX,y:W.axesY,z:W.axesZ},baseTransform:{pos:Zt.pos.clone(),rot:Zt.rot.clone(),scale:Zt.scale.clone()}};hs.push(n),hs.length>zE&&hs.shift(),pl.length=0}function Ph(n){const t=ec;ic(n.N,n.X,t,tc),At=n.M,W.axesX=n.axes.x,W.axesY=n.axes.y,W.axesZ=n.axes.z,Zt.pos.copy(n.baseTransform.pos),Zt.rot.copy(n.baseTransform.rot),Zt.scale.copy(n.baseTransform.scale),li=!0,mn(),Wn(),Gn.refresh()}function HE(n){const t=Math.max(1,ft);t<3||(Qe=((Qe+n)%t+t)%t,W.proyeccion!=="Canonico"&&(W.proyeccion="Canonico",li=!0,Gn.refresh()),wp({x:Ue[Qe%t],y:Ue[(Qe+1)%t],z:Ue[(Qe+2)%t]}))}const GE={active:!1,plane:new En,lastPoint:new C};function qo(){var e;const n=180/Math.PI,t=ue===-1?Zt:(e=kt[ue])==null?void 0:e.transform;t&&(t.pos.x,t.pos.y,t.pos.z,t.rot.x*n,t.rot.y*n,t.rot.z*n,t.scale.x,Gn.refresh())}function Us(){if(!Ga)return;const n=[];At>0&&n.push(`${bp} (N=${ft})`),n.push(...kt.map(t=>t.label)),Ga.innerHTML=`<h4>Objetos</h4><ul>${n.map((t,e)=>{const i=At>0?e-1:e-0;return`<li data-idx="${i}" class="${i===ue?"active":""}">${t}</li>`}).join("")}</ul>`,Ga.querySelectorAll("li").forEach(t=>{t.addEventListener("click",()=>{const e=Number(t.dataset.idx);Uo(e)})}),Ns()}function WE(){const n=Ql.geometry.getAttribute("color");if(!n)return;const t=new qt(Fn[W.axesX%Fn.length]),e=new qt(Fn[W.axesY%Fn.length]),i=new qt(Fn[W.axesZ%Fn.length]);n.setXYZ(0,t.r,t.g,t.b),n.setXYZ(1,t.r,t.g,t.b),n.setXYZ(2,e.r,e.g,e.b),n.setXYZ(3,e.r,e.g,e.b),n.setXYZ(4,i.r,i.g,i.b),n.setXYZ(5,i.r,i.g,i.b),n.needsUpdate=!0}function Ns(){if(WE(),!Ah)return;const n=Array.from({length:ft}).map((t,e)=>`<span class="badge" style="background:${Fn[e%Fn.length]};">d${e}</span>`).join("");Ah.innerHTML=`<h4 style="margin:0 0 6px 0; font-size:12px; color:#e6ecf5;">Ejes</h4><div>${n}</div>`}function Fs(){if(!mo)return;if(ft<1){mo.innerHTML="";return}const n=new Set([Ue[(Qe+0)%ft],Ue[(Qe+1)%ft],Ue[(Qe+2)%ft]]),t=Ue.map((e,i)=>{const r=Fn[e%Fn.length],s=n.has(e);return`<li draggable="true" data-idx="${i}" class="${s?"active":""}" style="border-left:4px solid ${r};">${`d${e}`}</li>`}).join("");mo.innerHTML=`<h4>Orden de ejes</h4><ul>${t}</ul>`,mo.querySelectorAll("li").forEach(e=>{e.addEventListener("dragstart",i=>{var r;(r=i.dataTransfer)==null||r.setData("text/plain",e.dataset.idx||"")}),e.addEventListener("dragover",i=>i.preventDefault()),e.addEventListener("drop",i=>{var l;i.preventDefault();const r=Number(((l=i.dataTransfer)==null?void 0:l.getData("text/plain"))??-1),s=Number(e.dataset.idx??-1);if(r<0||s<0||r===s)return;const a=Ue.splice(r,1)[0];Ue.splice(s,0,a);const o=Ue.indexOf(W.axesX);Qe=o>=0?o:0,wp({x:Ue[Qe%ft],y:Ue[(Qe+1)%ft],z:Ue[(Qe+2)%ft]}),Fs()})})}function Uo(n){ue=n,kn=-1,Vn=!1,Us(),He&&(Vt.remove(He),He=null);const t=e=>{const i=new Yi({color:16754253,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1}),r=new Ml(e,i);return r.renderOrder=10,r};if(n===-1)At>0&&(He=t(Ot.line.geometry));else{const e=kt[n];He=t(e.renderer.line.geometry)}He&&!W.editMode&&Vt.add(He),W.editMode?Vt.background=jo.clone():Vt.background=Is.clone(),ae.setClearColor(Vt.background),Se&&(Vt.remove(Se),Se=null),Le&&(Vt.remove(Le),Le=null),W.editMode&&n!==null&&Yo(n),qo()}function kr(){if(He){if(W.editMode){Vt.remove(He),He=null;return}Vt.children.includes(He)||Vt.add(He)}}function No(){Vi&&(Vt.remove(Vi),Vi.geometry.dispose(),Vi=null),zi&&(Vt.remove(zi),zi.geometry.dispose(),zi=null)}function fl(n,t){if(!t)return new C;let e=0,i=0,r=0;for(let s=0;s<t;s++){const a=s*3;e+=n[a],i+=n[a+1],r+=n[a+2]}return new C(e/t,i/t,r/t)}function Fo(){if(No(),I.mode==="none")return;const n=I.lockAxis!==-1,t=n?I.lockAxis:0,e=new C(t===0?1:0,t===1?1:0,t===2?1:0);if(!n&&!I.wPlane)return;let i=new C;if(I.targetVertex>=0){const a=I.instIdx===-1?null:kt[I.instIdx],o=a?a.renderer.positions:Ot.positions,l=I.targetVertex*3;i.set(o[l],o[l+1],o[l+2])}else if(I.instIdx===-1&&At>0)i=fl(Ot.positions,At);else if(I.instIdx>=0){const a=kt[I.instIdx];i=fl(a.renderer.positions,a.M)}const r=3,s=[i.clone().addScaledVector(e,-r),i.clone().addScaledVector(e,r)];if(n){const a=new Xe().setFromPoints(s),o=new Yi({color:16754253,linewidth:2,depthTest:!1,transparent:!0,opacity:.9});Vi=new fs(a,o),Vi.renderOrder=30,Vt.add(Vi)}if(I.wPlane){const a=new C(0,0,0);a.copy(e).cross(Ae.getWorldDirection(ge).normalize()).normalize(),a.lengthSq()===0&&a.copy(Ae.up).normalize();const o=2,l=[i.clone().addScaledVector(a,-o),i.clone().addScaledVector(a,o)],c=new Xe().setFromPoints(l),u=new Yi({color:12616956,linewidth:2,depthTest:!1,transparent:!0,opacity:.9});zi=new fs(c,u),zi.renderOrder=31,Vt.add(zi)}}function Yo(n){if(!W.editMode){Le&&(Vt.remove(Le),Le=null),Se&&(Vt.remove(Se),Se=null);return}const t=n===-1?Ot:kt[n].renderer,e=n===-1?At:kt[n].M;if(!t||e<=0)return;Le&&(Vt.remove(Le),Le=null);const i=new Hr({color:12568533});Le=new W0(xp,i,e);const r=new Fe,s=t.positions;for(let a=0;a<e;a++){const o=a*3;r.position.set(s[o],s[o+1],s[o+2]),r.updateMatrix(),Le.setMatrixAt(a,r.matrix)}Le.instanceMatrix.needsUpdate=!0,Le.renderOrder=5,Vt.add(Le),kn>=0&&ml(n,kn)}function ml(n,t){if(!Se){const s=new Hr({color:16754253,depthTest:!1});Se=new me(xp,s),Se.renderOrder=20}Se.scale.setScalar(1.35);const i=(n===-1?Ot:kt[n].renderer).positions,r=t*3;Se.position.set(i[r],i[r+1],i[r+2]),Vt.add(Se)}function yp(){if(ue===-1)return;nc(),kt[ue].renderer.dispose(),kt.splice(ue,1),ue=-1,He&&(Vt.remove(He),He=null),Vn=!1,mn(),Wn(),Us(),qo()}const kt=[],Ot=new Jl(Vt);At>0&&(Ot.build(At,dl),Ot.setMode("wireframe"));const Gn=new TE({container:BE}),W={N:ft,primitive:"hypercube",proyeccion:"Canonico",autoReortho:!1,perspMode:!1,sliceDim:-1,sliceMin:-.5,sliceMax:.5,renderMode:"wireframe",editMode:!1,autoSpin:!1,axesX:0,axesY:1,axesZ:2},XE=n=>({...n,_lastTheta:n._lastTheta??0}),jE=[{i:0,j:1,theta:0,auto:!1,speed:0},{i:2,j:3,theta:0,auto:!1,speed:0},{i:4,j:5,theta:0,auto:!1,speed:0}],Ep=jE.map(XE),qE=[];function YE(){Ep.forEach(n=>{n.i=Math.min(n.i,ft-1),n.j=Math.min(n.j,ft-1),n.theta=0,n._lastTheta=0})}function $E(){if(W.proyeccion==="Canonico"||At===0){const n=[W.axesX%ft,W.axesY%ft,W.axesZ%ft].map(e=>Math.max(0,Math.min(ft-1,e))),t=new Float32Array(3*ft);t[0*ft+n[0]]=1,t[1*ft+n[1]]=1,t[2*ft+n[2]]=1,In.setCustomP(t),Mr=null}else{if(!Mr||li){const{P:n}=CE(be,ft,At,3);Mr=n,li=!1}if(In.setCustomP(Mr),At>0){const n=e=>{let i=0,r=-1/0;for(let s=0;s<ft;s++){const a=Math.abs(Mr[e*ft+s]);a>r&&(r=a,i=s)}return i},t={x:n(0),y:n(1),z:n(2)};(t.x!==W.axesX||t.y!==W.axesY||t.z!==W.axesZ)&&(W.axesX=t.x,W.axesY=t.y,W.axesZ=t.z,Qe=Ue.indexOf(W.axesX),Ns(),Fs())}}}function Wn(){At>0&&Ot.geometry&&Ot.filterEdgesByDimRange(be,ft,At,W.sliceDim,W.sliceMin,W.sliceMax),kt.forEach(n=>{n.renderer.filterEdgesByDimRange(n.X,ft,n.M,W.sliceDim,W.sliceMin,W.sliceMax)}),kr(),W.editMode?Vt.background=jo.clone():Vt.background=Is.clone(),ae.setClearColor(Vt.background),W.editMode?Yo(ue):Le&&(Vt.remove(Le),Le=null)}function Wa(n,t){if(t===0)return Ch.set(0,0,0);let e=0,i=0,r=0;for(let l=0;l<t;l++)e+=n[l],i+=n[t+l],r+=n[2*t+l];const s=e/t,a=i/t,o=r/t;for(let l=0;l<t;l++)n[l]-=s,n[t+l]-=a,n[2*t+l]-=o;return Ch.set(s,a,o)}function mn(){if(W.perspMode&&ft>=4){const t=[W.axesX%ft,W.axesY%ft,W.axesZ%ft].map(r=>Math.max(0,Math.min(ft-1,r))),e=.6,i=(r,s,a,o,l)=>{if(s===0)return;const c=ft,u=ws.matrix;for(let m=0;m<s;m++){for(let f=0;f<c;f++){let p=0;for(let E=0;E<c;E++)p+=u[f*c+E]*r[E*s+m];ls[f]=p}const g=ls[c-1]??0,_=1/Math.max(.05,1-e*g);a[0*s+m]=ls[t[0]]*_,a[1*s+m]=ls[t[1]]*_,a[2*s+m]=ls[t[2]]*_}const h=Wa(a,s),d=ge.set(o.pos.x+h.x,o.pos.y+h.y,o.pos.z+h.z);l.setTransform(d,new pn(o.rot.x,o.rot.y,o.rot.z),o.scale),l.writeInterleavedFrom(a),l.refreshSurface()};At>0&&Ot.geometry&&i(be,At,ni,Zt,Ot),kt.forEach(r=>{i(r.X,r.M,r.Y,r.transform,r.renderer)})}else{if($E(),At>0&&Ot.geometry){In.project(be,At,ni);const t=Wa(ni,At),e=ge.set(Zt.pos.x+t.x,Zt.pos.y+t.y,Zt.pos.z+t.z);Ot.setTransform(e,new pn(Zt.rot.x,Zt.rot.y,Zt.rot.z),Zt.scale),Ot.writeInterleavedFrom(ni),Ot.refreshSurface()}kt.forEach(t=>{In.project(t.X,t.M,t.Y);const e=Wa(t.Y,t.M),i=ge.set(t.transform.pos.x+e.x,t.transform.pos.y+e.y,t.transform.pos.z+e.z);t.renderer.setTransform(i,new pn(t.transform.rot.x,t.transform.rot.y,t.transform.rot.z),t.transform.scale),t.renderer.writeInterleavedFrom(t.Y),t.renderer.refreshSurface()})}kr(),W.editMode&&Yo(ue),Fo()}function Mp(n){if(!ee)return;Vn=!0,ee.innerHTML="";const t=document.createElement("div");t.textContent="¿Eliminar?",t.style.padding="8px 12px",t.style.fontWeight="700",ee.appendChild(t);const e=document.createElement("button");e.textContent="Confirmar",e.onclick=()=>{ee.style.display="none",Vn=!1,yp()};const i=document.createElement("button");i.textContent="Cancelar",i.onclick=()=>{Vn=!1,ee.style.display="none"},ee.appendChild(e),ee.appendChild(i);const r=(n==null?void 0:n.clientX)??Rn.x,s=(n==null?void 0:n.clientY)??Rn.y;ee.style.left=`${r}px`,ee.style.top=`${s}px`,ee.style.display="block"}function KE(){kt.forEach(n=>n.renderer.dispose()),kt.length=0,ue=-1}function ic(n,t,e,i){var s;De.active=!1,We.enableZoom=!0,We.enablePan=!0,We.enableRotate=!0,We.enabled=!0,We.reset(),Ae.position.set(2.6,1.8,2.6);const r=W.renderMode;tc=i,ft=n,W.N=n,be=new Float32Array(t),dl=e.length?new Uint32Array(e):ec,At=t.length/n,ws=new pp(n),In=new mp(n,ws.matrix,Do(n)),ni=new Float32Array(3*At),Mr=null,li=!0,KE(),Zt.pos.set(0,0,0),Zt.rot.set(0,0,0),Zt.scale.set(1,1,1),Ue=Array.from({length:ft},(a,o)=>o),Qe=0,W.axesX=Ue[0]??0,W.axesY=Ue[1]??1,W.axesZ=Ue[2]??2,YE(),qE.forEach(({i:a,j:o},l)=>{const c=Ep[l];a.max=n-1,o.max=n-1,c.i=Math.min(c.i,n-1),c.j=Math.min(c.j,n-1),a.value=c.i,o.value=c.j,a.refresh(),o.refresh()}),At>0?(Ot.build(At,dl),Ot.setMode(W.renderMode),Br&&Br(r),mn(),Wn()):(s=Ot.dispose)==null||s.call(Ot),Gn.refresh(),bp=i==="custom"?"Custom":"Hipercubo",Us(),Uo(-1),Ns(),Fs()}function Rh(n){return n.split(/[, \t;]+/).filter(Boolean).map(Number)}function ZE(n){const t=n.split(/\r?\n/).map(o=>o.trim()).filter(Boolean);if(!t.length)throw new Error("Archivo CSV vacío");const e=Rh(t[0]),i=e.length;if(i<3||i>32)throw new Error("CSV debe tener entre 3 y 32 dimensiones por fila");const r=[e];for(let o=1;o<t.length;o++){const l=Rh(t[o]);if(l.length){if(l.length!==i)throw new Error(`Fila ${o+1} tiene ${l.length} columnas, se esperaban ${i}`);r.push(l)}}const s=r.length,a=new Float32Array(i*s);for(let o=0;o<s;o++)for(let l=0;l<i;l++){const c=r[o][l];if(!Number.isFinite(c))throw new Error(`Valor no numérico en fila ${o+1}, col ${l+1}`);a[l*s+o]=c}return{N:i,X:a}}function JE(n){const t=JSON.parse(n),e=Array.isArray(t)?t:t==null?void 0:t.points;if(!Array.isArray(e)||!e.length)throw new Error("JSON debe tener un array de puntos");const i=Array.isArray(e[0])?e[0].length:Object.keys(e[0]).length;if(i<3||i>32)throw new Error("JSON debe tener entre 3 y 32 dimensiones");const r=[];for(let o=0;o<e.length;o++){const l=e[o],c=Array.isArray(l)?l:Object.values(l);if(c.length!==i)throw new Error(`Punto ${o+1} no coincide en dimensionalidad`);r.push(c.map(Number))}const s=r.length,a=new Float32Array(i*s);for(let o=0;o<s;o++)for(let l=0;l<i;l++){const c=r[o][l];if(!Number.isFinite(c))throw new Error(`Valor no numérico en punto ${o+1}, dim ${l+1}`);a[l*s+o]=c}return{N:i,X:a}}function Sp(n,t,e="text/plain"){const i=new Blob([t],{type:e}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=n,s.click(),URL.revokeObjectURL(r)}async function QE(n){try{const t=await n.text(),i=n.name.toLowerCase().endsWith(".csv")?ZE(t):JE(t);if(nc(),i.N<3||i.N>8){alert("Solo se admiten datasets de entre 3 y 8 dimensiones para visualizar.");return}const r=ec;ic(i.N,i.X,r,"custom")}catch(t){console.error(t),alert(`Error al importar: ${t.message}`)}finally{Ci&&(Ci.value="")}}function tM(){const n=[];for(let t=0;t<At;t++){const e={};for(let i=0;i<ft;i++)e[`d${i}`]=be[i*At+t];n.push(e)}Sp("data.json",JSON.stringify({points:n},null,2),"application/json")}function eM(){const t=[Array.from({length:ft},(e,i)=>`d${i}`).join(",")];for(let e=0;e<At;e++){const i=[];for(let r=0;r<ft;r++)i.push(`${be[r*At+e]}`);t.push(i.join(","))}Sp("data.csv",t.join(`
`),"text/csv")}function nM(n,t,e){const i=[];for(let r=0;r<n;r++){const s=t[r*At+e];i.push(`d${r}: ${s.toFixed(3)}`)}return i}function Tp(n){const t=ae.domElement.getBoundingClientRect();return yi.set((n.clientX-t.left)/t.width*2-1,-((n.clientY-t.top)/t.height)*2+1),Mh.setFromNormalAndCoplanarPoint(Ae.getWorldDirection(ge).normalize(),We.target),wi.setFromCamera(yi,Ae),wi.ray.intersectPlane(Mh,Sh)?Sh.clone():We.target.clone()}function iM(n){if(!Qn)return;const t=ae.domElement.getBoundingClientRect(),e=n.clientX-t.left,i=n.clientY-t.top,r=t.width,s=t.height;let a=-1,o=Number.POSITIVE_INFINITY;const l=(u,h,d,m,g)=>{ge.set(u,h,d).project(Ae);const _=(ge.x*.5+.5)*r,f=(-ge.y*.5+.5)*s,p=_-e,E=f-i,x=p*p+E*E;x<o&&(o=x,a=m)};for(let u=0;u<At;u++){const h=u*3;l(Ot.positions[h],Ot.positions[h+1],Ot.positions[h+2],u)}kt.forEach(u=>{const h=u.renderer.positions;for(let d=0;d<u.M;d++){const m=d*3;l(h[m],h[m+1],h[m+2],d)}});const c=30*30;if(a>=0&&o<c){const u=nM(ft,be,a);Qn.innerHTML=`<div style="font-weight:600;margin-bottom:4px;">v${a}</div><div>${u.join("<br>")}</div>`,Qn.style.left=`${n.clientX}px`,Qn.style.top=`${n.clientY}px`,Qn.classList.add("visible")}else Qn.classList.remove("visible");if(ii&&I.mode==="none"){const u=(n.clientX-t.left)/t.width*2-1,h=-((n.clientY-t.top)/t.height)*2+1;ii.textContent=`Cursor NDC: (${u.toFixed(3)}, ${h.toFixed(3)})`}}mn();Wn();Ns();Fs();Vt.background=W.editMode?jo.clone():Is.clone();ae.setClearColor(Vt.background);Gn.addBinding(W,"editMode",{label:"Modo edición"});if(Eh){const n=Array.from(Eh.querySelectorAll("button")),t=()=>{n.forEach(e=>e.classList.toggle("active",e.dataset.mode===W.renderMode))};Br=e=>{W.renderMode=e,Ot.setMode(e),Ot.refreshSurface(),kt.forEach(i=>{i.renderer.setMode(e),i.renderer.refreshSurface()}),t()},n.forEach(e=>{e.addEventListener("click",()=>Br(e.dataset.mode))}),t()}Ci&&Ci.addEventListener("change",()=>{var t;const n=(t=Ci.files)==null?void 0:t[0];n&&QE(n)});const rc=Gn.addFolder({title:"Datos"});rc.addButton({title:"Importar (CSV/JSON)"}).on("click",()=>Ci==null?void 0:Ci.click());rc.addButton({title:"Exportar proyección CSV"}).on("click",()=>eM());rc.addButton({title:"Exportar proyección JSON"}).on("click",()=>tM());const rM=Gn.addFolder({title:"Dimensiones"});rM.addBinding(W,"N",{min:3,max:8,step:1,label:"N"}).on("change",n=>{if(tc==="custom"){W.N=ft;return}nc(),ft=n.value;const t=new Float32Array(0),e=new Uint32Array(0);ic(ft,t,e,"primitive")});const Cp=Gn.addFolder({title:"Proyección"});Cp.addBinding(W,"perspMode",{label:"Perspectiva"}).on("change",()=>{mn()});Cp.addBinding(W,"autoReortho",{label:"Re‑ortonormalizar"}).on("change",()=>{});const sM=new Z0;ae.domElement.addEventListener("pointermove",iM);ae.domElement.addEventListener("pointermove",n=>{if(Rn={x:n.clientX,y:n.clientY},I.mode==="none")return;n.preventDefault();const t=n.clientX-I.startMouse.x,e=n.clientY-I.startMouse.y;if(I.targetVertex>=0){const i=I.instIdx===-1?null:kt[I.instIdx],r=i?i.renderer.positions:Ot.positions,s=I.targetVertex*3,a=ae.domElement.getBoundingClientRect();yi.set((n.clientX-a.left)/a.width*2-1,-((n.clientY-a.top)/a.height)*2+1),wi.setFromCamera(yi,Ae),I.plane.setFromNormalAndCoplanarPoint(Ae.getWorldDirection(ge).normalize(),I.planeHitStart);const o=wi.ray.intersectPlane(I.plane,ge);if(!o)return;if(I.mode==="move"){const c=I.lockAxis;r[s]=c===1||c===2?I.vertexStart.x:o.x,r[s+1]=c===0||c===2?I.vertexStart.y:o.y,r[s+2]=c===0||c===1?I.vertexStart.z:o.z,I.lastHit.copy(o)}else if(I.mode==="scale"){const c=o.clone().sub(I.planeHitStart),u=I.vertexStart.clone().sub(I.planeHitStart),h=u.length(),d=c.length(),m=h>1e-6?d/h:1,g=u.multiplyScalar(m).add(I.planeHitStart);r[s]=g.x,r[s+1]=g.y,r[s+2]=g.z,I.lastHit.copy(g)}else if(I.mode==="rotate"){const c=I.vertexStart.clone().sub(I.planeHitStart),u=o.clone().sub(I.planeHitStart),h=Math.atan2(u.y,u.x)-Math.atan2(c.y,c.x),d=new dn().setFromAxisAngle(I.axis,h);c.applyQuaternion(d).add(I.planeHitStart),r[s]=c.x,r[s+1]=c.y,r[s+2]=c.z,I.lastHit.copy(c)}i&&i.renderer;const l=new C(r[s],r[s+1],r[s+2]);if(i){const c=new le().compose(i.transform.pos,new dn().setFromEuler(new pn(i.transform.rot.x,i.transform.rot.y,i.transform.rot.z)),i.transform.scale).invert();l.applyMatrix4(c);const u=[W.axesX,W.axesY,W.axesZ];for(let h=0;h<3;h++){const d=u[h]%ft;i.X[d*i.M+I.targetVertex]=l.getComponent(h)}In.project(i.X,i.M,i.Y),i.renderer.writeInterleavedFrom(i.Y),i.renderer.refreshSurface(),i.renderer.filterEdgesByDimRange(i.X,ft,i.M,W.sliceDim,W.sliceMin,W.sliceMax)}else{const c=new le().compose(Zt.pos,new dn().setFromEuler(new pn(Zt.rot.x,Zt.rot.y,Zt.rot.z)),Zt.scale).invert();l.applyMatrix4(c);const u=[W.axesX,W.axesY,W.axesZ];for(let h=0;h<3;h++){const d=u[h]%ft;be[d*At+I.targetVertex]=l.getComponent(h)}In.project(be,At,ni),Ot.writeInterleavedFrom(ni),Ot.refreshSurface(),Ot.filterEdgesByDimRange(be,ft,At,W.sliceDim,W.sliceMin,W.sliceMax)}Se&&Se.position.set(r[s],r[s+1],r[s+2]),ii&&(ii.textContent=`Vértice (${I.targetVertex}): (${r[s].toFixed(3)}, ${r[s+1].toFixed(3)}, ${r[s+2].toFixed(3)})`)}else{const i=I.instIdx===-1?Zt:kt[I.instIdx].transform;if(I.mode==="move"){const r=I.instIdx===-1?be:kt[I.instIdx].X,s=I.objectDataStart,a=I.instIdx===-1?At:kt[I.instIdx].M;if(s&&a>0){const o=ae.domElement.getBoundingClientRect();yi.set((n.clientX-o.left)/o.width*2-1,-((n.clientY-o.top)/o.height)*2+1),wi.setFromCamera(yi,Ae);const l=wi.ray.intersectPlane(I.plane,ge);if(!l)return;const c=l.clone().add(I.moveOffset).sub(I.planeHitStart);I.lockAxis===0?(c.y=0,c.z=0):I.lockAxis===1?(c.x=0,c.z=0):I.lockAxis===2&&(c.x=0,c.y=0);const u=[W.axesX,W.axesY,W.axesZ];for(let h=0;h<a;h++)for(let d=0;d<3;d++){const g=u[d]%ft*a+h;r[g]=s[g]+c.getComponent(d)}I.lastHit.copy(l),li=!0}}else if(I.mode==="rotate")if(I.wPlane&&I.objectDataStart){const r=I.instIdx===-1?be:kt[I.instIdx].X,s=I.objectDataStart,a=I.instIdx===-1?At:kt[I.instIdx].M;if(a>0){const l=[W.axesX,W.axesY,W.axesZ][Math.max(0,I.lockAxis)]%ft,c=ft-1,u=(t-e)*.01,h=Math.cos(u),d=Math.sin(u);for(let m=0;m<a;m++){const g=s[l*a+m],_=s[c*a+m];r[l*a+m]=g*h-_*d,r[c*a+m]=g*d+_*h}li=!0}}else{const r=t*.005,s=e*.005,a=I.startRot.x,o=I.startRot.y,l=I.startRot.z;I.lockAxis===0?i.rot.set(a+s,o,l):I.lockAxis===1?i.rot.set(a,o+r,l):I.lockAxis===2?i.rot.set(a,o,l+r):i.rot.set(a+s,o+r,l)}else if(I.mode==="scale"){const r=(t-e)*.005,s=Math.max(.1,Math.min(5,I.startScale+r));i.scale.set(s,s,s)}qo(),ii&&(ii.textContent=`Objeto: pos(${i.pos.x.toFixed(3)}, ${i.pos.y.toFixed(3)}, ${i.pos.z.toFixed(3)}) rot(${i.rot.x.toFixed(3)}, ${i.rot.y.toFixed(3)}, ${i.rot.z.toFixed(3)})`)}mn(),Wn(),kr(),Fo()});ae.domElement.addEventListener("pointerleave",()=>Qn==null?void 0:Qn.classList.remove("visible"));ae.domElement.addEventListener("contextmenu",n=>{if(!ee)return;n.preventDefault(),Rn={x:n.clientX,y:n.clientY},Vn=!1,ee.innerHTML="";const t=Tp(n);if(W.editMode){if(kn<0)return;[{label:"Mover vértice",mode:"move"}].forEach(s=>{const a=document.createElement("button");a.textContent=s.label,a.onclick=()=>{ee.style.display="none",gl(s.mode,n)},ee.appendChild(a)})}else ue===-1&&At>0||ue>=0?[{label:"Mover",mode:"move"},{label:"Rotar",mode:"rotate"},{label:"Escalar",mode:"scale"},{label:"Eliminar",onClick:()=>Mp(n)}].forEach(a=>{const o=document.createElement("button");o.textContent=a.label,o.onclick=()=>{if(ee.style.display="none",a.onClick){a.onClick();return}gl(a.mode,n)},ee.appendChild(o)}):[{label:"Hipercubo",kind:"hypercube"},{label:"Cross polytope",kind:"cross"},{label:"Simplex",kind:"simplex"}].forEach(a=>{const o=document.createElement("button");o.textContent=`Añadir ${a.label}`,o.onclick=()=>{ee.style.display="none";const l=fp(a.kind,ft),c=new Jl(Vt);c.build(l.V,l.edges),Dr.copy(t);const u=new Float32Array(3*l.V),h=`${a.label} #${kt.length+1}`,d={pos:Dr.clone(),rot:new C,scale:new C(1,1,1)};kt.push({renderer:c,Y:u,X:l.verts,E:l.edges,M:l.V,offset:Dr.clone(),label:h,kind:a.kind,transform:d}),In.project(l.verts,l.V,u),c.setTransform(d.pos,new pn(d.rot.x,d.rot.y,d.rot.z),d.scale),c.writeInterleavedFrom(u),c.filterEdgesByDimRange(l.verts,ft,l.V,W.sliceDim,W.sliceMin,W.sliceMax),c.setMode(W.renderMode),mn(),Wn(),Br&&Br(W.renderMode),Us()},ee.appendChild(o)});const e=Math.min(n.clientX,window.innerWidth-180),i=Math.min(n.clientY,window.innerHeight-150);ee.style.left=`${e}px`,ee.style.top=`${i}px`,ee.style.display=ee.innerHTML?"block":"none"});window.addEventListener("click",()=>{Vn||(ee&&(ee.style.display="none"),Vn=!1)});ae.domElement.addEventListener("wheel",n=>{if(!W.editMode)return;n.preventDefault();const t=n.deltaY>0?1:-1;let e=W.sliceDim+t;e=Math.max(-1,Math.min(ft-1,e)),W.sliceDim=e,Wn()});ae.domElement.addEventListener("mousedown",n=>{if(n.button===1){n.preventDefault(),n.stopPropagation(),De.active=!0,De.lastX=n.clientX,De.accum=0,De.prevZoom=We.enableZoom,De.prevPan=We.enablePan,We.enableZoom=!1,We.enablePan=!1;return}},{capture:!0});ae.domElement.addEventListener("pointerdown",n=>{if(De.active)return;if(Rn={x:n.clientX,y:n.clientY},W.editMode&&GE.active,I.mode!=="none"){if(n.button===0){if(I.startMouse.set(n.clientX,n.clientY),I.targetVertex>=0&&(I.planeHitStart.copy(I.vertexStart),I.plane.setFromNormalAndCoplanarPoint(Ae.getWorldDirection(ge).normalize(),I.planeHitStart)),I.targetVertex>=0){const u=I.instIdx,h=u===-1?null:kt[u],d=h?h.renderer.positions:Ot.positions,m=I.targetVertex*3,g=new C(d[m],d[m+1],d[m+2]);if(h){const _=new le().compose(h.transform.pos,new dn().setFromEuler(new pn(h.transform.rot.x,h.transform.rot.y,h.transform.rot.z)),h.transform.scale).invert();g.applyMatrix4(_);for(let f=0;f<Math.min(3,ft);f++)h.X[f*h.M+I.targetVertex]=g.getComponent(f)}else{const _=new le().compose(Zt.pos,new dn().setFromEuler(new pn(Zt.rot.x,Zt.rot.y,Zt.rot.z)),Zt.scale).invert();g.applyMatrix4(_);for(let f=0;f<Math.min(3,ft);f++)be[f*At+I.targetVertex]=g.getComponent(f)}}if(I.mode="none",I.vertexDataStart=null,I.lockAxis=-1,No(),mn(),Wn(),W.editMode&&kn>=0&&ml(ue,kn),kr(),ii)if(I.targetVertex>=0){const u=I.instIdx===-1?null:kt[I.instIdx],h=u?u.renderer.positions:Ot.positions,d=I.targetVertex*3;ii.textContent=`Vértice (${I.targetVertex}) commit: (${h[d].toFixed(3)}, ${h[d+1].toFixed(3)}, ${h[d+2].toFixed(3)})`}else{const u=I.instIdx===-1?Zt:kt[I.instIdx].transform;ii.textContent=`Objeto commit: pos(${u.pos.x.toFixed(3)}, ${u.pos.y.toFixed(3)}, ${u.pos.z.toFixed(3)})`}}else if(n.button===2){if(I.targetVertex>=0){const u=I.instIdx===-1?null:kt[I.instIdx],h=u?u.renderer.positions:Ot.positions,d=I.targetVertex*3;h[d]=I.vertexStart.x,h[d+1]=I.vertexStart.y,h[d+2]=I.vertexStart.z;const m=u?u.renderer:Ot;if(I.vertexDataStart){const g=u?u.X:be,_=u?u.M:At;for(let f=0;f<ft;f++)g[f*_+I.targetVertex]=I.vertexDataStart[f]}u?(In.project(u.X,u.M,u.Y),u.renderer.writeInterleavedFrom(u.Y),u.renderer.filterEdgesByDimRange(u.X,ft,u.M,W.sliceDim,W.sliceMin,W.sliceMax)):(In.project(be,At,ni),Ot.writeInterleavedFrom(ni),Ot.filterEdgesByDimRange(be,ft,At,W.sliceDim,W.sliceMin,W.sliceMax)),m.geometry.getAttribute("position").needsUpdate=!0,m.geometry.computeBoundingBox(),m.geometry.computeBoundingSphere(),Se&&Se.position.set(h[d],h[d+1],h[d+2])}else{const u=I.instIdx===-1?Zt:kt[I.instIdx].transform;I.objectDataStart&&((I.instIdx===-1?be:kt[I.instIdx].X).set(I.objectDataStart),li=!0),u.pos.copy(I.startPos),u.rot.copy(I.startRot),u.scale.set(I.startScale,I.startScale,I.startScale)}I.mode="none",I.vertexDataStart=null,I.lockAxis=-1,I.objectDataStart=null,No(),I.moveOffset.set(0,0,0),qo(),mn(),Wn(),kr()}n.preventDefault();return}if(n.button!==0)return;const t=ae.domElement.getBoundingClientRect(),e=n.clientX-t.left,i=n.clientY-t.top,r=t.width,s=t.height,a=(u,h)=>{let d=1/0,m=1/0,g=-1/0,_=-1/0;for(let f=0;f<h;f++){const p=f*3;ge.set(u[p],u[p+1],u[p+2]).project(Ae);const E=(ge.x*.5+.5)*r,x=(-ge.y*.5+.5)*s;E<d&&(d=E),E>g&&(g=E),x<m&&(m=x),x>_&&(_=x)}return{minX:d,maxX:g,minY:m,maxY:_}},o=[];if(At>0){const u=a(Ot.positions,At),h=e>=u.minX&&e<=u.maxX&&i>=u.minY&&i<=u.maxY,d=(u.maxX-u.minX)*(u.maxY-u.minY);o.push({instIdx:-1,contains:h,area:d,nearestDist2:Number.POSITIVE_INFINITY})}kt.forEach((u,h)=>{const d=a(u.renderer.positions,u.M),m=e>=d.minX&&e<=d.maxX&&i>=d.minY&&i<=d.maxY,g=(d.maxX-d.minX)*(d.maxY-d.minY);o.push({instIdx:h,contains:m,area:g,nearestDist2:Number.POSITIVE_INFINITY})});let l=-1;const c=o.filter(u=>u.contains&&isFinite(u.area));if(c.length)c.sort((u,h)=>u.area-h.area),l=c[0].instIdx;else{let u=Number.POSITIVE_INFINITY;const h=(m,g,_,f)=>{ge.set(m,g,_).project(Ae);const p=(ge.x*.5+.5)*r,E=(-ge.y*.5+.5)*s,x=p-e,T=E-i,L=x*x+T*T;L<u&&(u=L,l=f)};for(let m=0;m<At;m++){const g=m*3;h(Ot.positions[g],Ot.positions[g+1],Ot.positions[g+2],-1)}kt.forEach((m,g)=>{const _=m.renderer.positions;for(let f=0;f<m.M;f++){const p=f*3;h(_[p],_[p+1],_[p+2],g)}});const d=35*35;u>=d&&(l=-999)}if(l!==-999){if(Uo(l),W.editMode&&n.button===0){const h=(l===-1?Ot:kt[l].renderer).positions;let d=-1,m=Number.POSITIVE_INFINITY;const g=l===-1?At:kt[l].M;for(let _=0;_<g;_++){const f=_*3;ge.set(h[f],h[f+1],h[f+2]).project(Ae);const p=(ge.x*.5+.5)*r,E=(-ge.y*.5+.5)*s,x=p-e,T=E-i,L=x*x+T*T;L<m&&(m=L,d=_)}kn=d,ml(l,d)}}else Uo(-1),kn=-1,Se&&(Vt.remove(Se),Se=null),He&&(Vt.remove(He),He=null)});window.addEventListener("pointermove",n=>{if(!De.active)return;n.preventDefault();const t=n.clientX-De.lastX;De.lastX=n.clientX,De.accum+=t;const e=35;let i=0;for(;De.accum>e;)i++,De.accum-=e;for(;De.accum<-e;)i--,De.accum+=e;i!==0&&HE(i)});window.addEventListener("pointerup",n=>{n.button!==1||!De.active||(De.active=!1,De.accum=0,We.enableZoom=De.prevZoom,We.enablePan=De.prevPan)});window.addEventListener("keydown",n=>{if(I.mode==="none")return;const t=n.key.toLowerCase();if(t==="w"){I.mode==="rotate"&&(n.preventDefault(),I.wPlane=!I.wPlane,Fo());return}(t==="x"||t==="y"||t==="z")&&(I.lockAxis=t==="x"?0:t==="y"?1:2,Fo())});window.addEventListener("keydown",n=>{if(n.key==="Tab"&&(n.preventDefault(),W.editMode=!W.editMode,Vt.background=W.editMode?jo.clone():Is.clone(),ae.setClearColor(Vt.background),Gn.refresh(),kn=-1,Se&&(Vt.remove(Se),Se=null),W.editMode?Yo(ue):Le&&(Vt.remove(Le),Le=null),kr()),I.mode==="none"){if(n.key==="g"||n.key==="r"||n.key==="s"){n.preventDefault();const t={g:"move",r:"rotate",s:"scale"},e=new PointerEvent("pointerdown",{clientX:Rn.x,clientY:Rn.y});gl(t[n.key],e)}else if(n.key.toLowerCase()==="a"&&n.shiftKey){if(n.preventDefault(),!ee)return;ee.innerHTML="";const t=[{label:"Hipercubo",kind:"hypercube"},{label:"Cross polytope",kind:"cross"},{label:"Simplex",kind:"simplex"}],e=Tp(new PointerEvent("pointerdown",{clientX:Rn.x,clientY:Rn.y}));t.forEach(i=>{const r=document.createElement("button");r.textContent=`Añadir ${i.label}`,r.onclick=()=>{ee.style.display="none";const s=fp(i.kind,ft),a=new Jl(Vt);a.build(s.V,s.edges),Dr.copy(e);const o=new Float32Array(3*s.V),l=`${i.label} #${kt.length+1}`,c={pos:Dr.clone(),rot:new C,scale:new C(1,1,1)};kt.push({renderer:a,Y:o,X:s.verts,E:s.edges,M:s.V,offset:Dr.clone(),label:l,kind:i.kind,transform:c}),In.project(s.verts,s.V,o),a.setTransform(c.pos,new pn(c.rot.x,c.rot.y,c.rot.z),c.scale),a.writeInterleavedFrom(o),a.filterEdgesByDimRange(s.verts,ft,s.V,W.sliceDim,W.sliceMin,W.sliceMax),a.setMode(W.renderMode),mn(),Wn(),Us()},ee.appendChild(r)}),ee.style.left=`${Rn.x}px`,ee.style.top=`${Rn.y}px`,ee.style.display="block"}else if(n.key==="w")n.preventDefault(),W.perspMode=!W.perspMode,mn(),Gn.refresh();else if(n.key==="x"){if(n.preventDefault(),!(ue===-1&&At>0||ue>=0))return;Vn?(Vn=!1,ee&&(ee.style.display="none"),yp()):Mp()}else if((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="z"){n.preventDefault();const t=hs.pop();t&&(pl.push({N:ft,X:new Float32Array(be),M:At,axes:{x:W.axesX,y:W.axesY,z:W.axesZ},baseTransform:{pos:Zt.pos.clone(),rot:Zt.rot.clone(),scale:Zt.scale.clone()}}),Ph(t))}else if((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="y"){n.preventDefault();const t=pl.pop();t&&(hs.push({N:ft,X:new Float32Array(be),M:At,axes:{x:W.axesX,y:W.axesY,z:W.axesZ},baseTransform:{pos:Zt.pos.clone(),rot:Zt.rot.clone(),scale:Zt.scale.clone()}}),Ph(t))}}});function Ap(){Math.min(sM.getDelta(),.05),W.autoReortho&&ws.reorthonormalize(),mn(),We.update(),ae.render(Vt,Ae),requestAnimationFrame(Ap)}Ap();function gl(n,t){var e;if(I.mode=n,I.instIdx=ue,I.targetVertex=W.editMode?kn:-1,I.startMouse.set(t.clientX,t.clientY),I.targetVertex>=0){if(I.targetVertex<0){I.mode="none";return}const i=I.instIdx===-1?null:kt[I.instIdx],r=i?i.renderer.positions:Ot.positions,s=I.targetVertex*3;I.vertexStart.set(r[s],r[s+1],r[s+2]);const a=i?i.X:be;I.vertexDataStart=new Float32Array(ft);for(let o=0;o<ft;o++)I.vertexDataStart[o]=a[o*(i?i.M:At)+I.targetVertex];I.startScale=1,I.plane.setFromNormalAndCoplanarPoint(Ae.getWorldDirection(ge).normalize(),I.vertexStart),I.planeHitStart.copy(I.vertexStart),I.lastHit.copy(I.vertexStart),I.lockAxis=-1,I.wPlane=!1}else{const i=ue===-1?Zt:(e=kt[ue])==null?void 0:e.transform;if(!i)return;if(I.startPos.copy(i.pos),I.startRot.copy(i.rot),I.startScale=i.scale.x,I.lockAxis=-1,I.wPlane=!1,n==="move"||n==="rotate"){const r=ue===-1?be:kt[ue].X,s=ue===-1?At:kt[ue].M;if(I.objectDataStart=new Float32Array(r.length),I.objectDataStart.set(r),I.lastHit.set(0,0,0),n==="move"){const a=ue===-1?Ot.positions:kt[ue].renderer.positions,o=fl(a,s);I.planeHitStart.copy(o),I.plane.setFromNormalAndCoplanarPoint(Ae.getWorldDirection(ge).normalize(),o);const l=ae.domElement.getBoundingClientRect();yi.set((t.clientX-l.left)/l.width*2-1,-((t.clientY-l.top)/l.height)*2+1),wi.setFromCamera(yi,Ae);const c=wi.ray.intersectPlane(I.plane,ge);c?(I.lastHit.copy(c),I.moveOffset.copy(I.planeHitStart).sub(c)):(I.lastHit.copy(o),I.moveOffset.set(0,0,0))}}else I.objectDataStart=null}}window.addEventListener("resize",()=>{const n=window.innerWidth,t=window.innerHeight;Ae.aspect=n/t,Ae.updateProjectionMatrix(),ae.setSize(n,t)});
