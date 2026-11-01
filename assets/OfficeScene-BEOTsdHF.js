/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rr="170";const xn="",Pe="srgb",hi="srgb-linear",Rs="linear",ie="srgb";const Kr="300 es";class ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $r=1234567;const oi=Math.PI/180,Ui=180/Math.PI;function Je(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function Cr(i,t){return(i%t+t)%t}function Ja(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ja(i,t,e){return i!==t?(e-i)/(t-i):0}function Ci(i,t,e){return(1-e)*i+e*t}function Qa(i,t,e,n){return Ci(i,t,1-Math.exp(-e*n))}function tc(i,t=1){return t-Math.abs(Cr(i,t*2)-t)}function ec(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ic(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sc(i,t){return i+Math.random()*(t-i)}function rc(i){return i*(.5-Math.random())}function oc(i){i!==void 0&&($r=i);let t=$r+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ac(i){return i*oi}function cc(i){return i*Ui}function lc(i){return(i&i-1)===0&&i!==0}function hc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dc(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ms={DEG2RAD:oi,RAD2DEG:Ui,generateUUID:Je,clamp:me,euclideanModulo:Cr,mapLinear:Ja,inverseLerp:ja,lerp:Ci,damp:Qa,pingpong:tc,smoothstep:ec,smootherstep:nc,randInt:ic,randFloat:sc,randFloatSpread:rc,seededRandom:oc,degToRad:ac,radToDeg:cc,isPowerOfTwo:lc,ceilPowerOfTwo:hc,floorPowerOfTwo:uc,setQuaternionFromProperEuler:dc,normalize:te,denormalize:Ye};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,s,r,o,a,c,l){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],g=s[0],_=s[3],f=s[6],S=s[1],v=s[4],x=s[7],L=s[2],b=s[5],A=s[8];return r[0]=o*g+a*S+c*L,r[3]=o*_+a*v+c*b,r[6]=o*f+a*x+c*A,r[1]=l*g+h*S+u*L,r[4]=l*_+h*v+u*b,r[7]=l*f+h*x+u*A,r[2]=d*g+p*S+m*L,r[5]=d*_+p*v+m*b,r[8]=d*f+p*x+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=u*g,t[1]=(s*l-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=d*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=p*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ns.makeScale(t,e)),this}rotate(t){return this.premultiply(Ns.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ns.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new Ut;function _a(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fc(){const i=Es("canvas");return i.style.display="block",i}const Jr={};function Ai(i){i in Jr||(Jr[i]=!0,console.warn(i))}function pc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function mc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _c(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:hi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(i.r=cn(i.r),i.g=cn(i.g),i.b=cn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xn?Rs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const jr=[.64,.33,.3,.6,.15,.06],Qr=[.2126,.7152,.0722],to=[.3127,.329],eo=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),no=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[hi]:{primaries:jr,whitePoint:to,transfer:Rs,toXYZ:eo,fromXYZ:no,luminanceCoefficients:Qr,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:jr,whitePoint:to,transfer:ie,toXYZ:eo,fromXYZ:no,luminanceCoefficients:Qr,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});let Bn;class gc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bn===void 0&&(Bn=Es("canvas")),Bn.width=t.width,Bn.height=t.height;const n=Bn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Es("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=cn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(cn(e[n]/255)*255):e[n]=cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xc=0;class ga{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=Je(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fs(s[o].image)):r.push(Fs(s[o]))}else r=Fs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vc=0;class Le extends ui{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=1001,s=1001,r=1006,o=1008,a=1023,c=1009,l=Le.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=Je(),this.name="",this.source=new ga(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=300;Le.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,s=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],g=c[2],_=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+_)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,x=(p+1)/2,L=(f+1)/2,b=(h+d)/4,A=(u+g)/4,P=(m+_)/4;return v>x&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=A/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=P/r),this.set(n,s,r,e),this}let S=Math.sqrt((_-m)*(_-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(_-m)/S,this.y=(u-g)/S,this.z=(d-h)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mc extends ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ga(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Mc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xa extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sc extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],m=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=g;return}if(u!==g||c!==d||l!==p||h!==m){let _=1-a;const f=c*d+l*p+h*m+u*g,S=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const L=Math.sqrt(v),b=Math.atan2(L,f*S);_=Math.sin(_*b)/L,a=Math.sin(a*b)/L}const x=a*S;if(c=c*_+d*x,l=l*_+p*x,h=h*_+m*x,u=u*_+g*x,_===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*p-l*d,t[e+1]=c*m+h*d+l*u-a*p,t[e+2]=l*m+h*p+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(io.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(io.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Os.copy(this).projectOnVector(t),this.sub(Os)}reflect(t){return this.sub(Os.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Os=new R,io=new Bi;class zi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,He):He.fromBufferAttribute(r,o),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hi.copy(n.boundingBox)),Hi.applyMatrix4(t.matrixWorld),this.union(Hi)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mi),Wi.subVectors(this.max,mi),zn.subVectors(t.a,mi),Gn.subVectors(t.b,mi),kn.subVectors(t.c,mi),un.subVectors(Gn,zn),dn.subVectors(kn,Gn),Sn.subVectors(zn,kn);let e=[0,-un.z,un.y,0,-dn.z,dn.y,0,-Sn.z,Sn.y,un.z,0,-un.x,dn.z,0,-dn.x,Sn.z,0,-Sn.x,-un.y,un.x,0,-dn.y,dn.x,0,-Sn.y,Sn.x,0];return!Bs(e,zn,Gn,kn,Wi)||(e=[1,0,0,0,1,0,0,0,1],!Bs(e,zn,Gn,kn,Wi))?!1:(Xi.crossVectors(un,dn),e=[Xi.x,Xi.y,Xi.z],Bs(e,zn,Gn,kn,Wi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const nn=[new R,new R,new R,new R,new R,new R,new R,new R],He=new R,Hi=new zi,zn=new R,Gn=new R,kn=new R,un=new R,dn=new R,Sn=new R,mi=new R,Wi=new R,Xi=new R,yn=new R;function Bs(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){yn.fromArray(i,r);const a=s.x*Math.abs(yn.x)+s.y*Math.abs(yn.y)+s.z*Math.abs(yn.z),c=t.dot(yn),l=e.dot(yn),h=n.dot(yn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const yc=new zi,_i=new R,zs=new R;class Cs{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_i.subVectors(t,this.center);const e=_i.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_i,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_i.copy(t.center).add(zs)),this.expandByPoint(_i.copy(t.center).sub(zs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new R,Gs=new R,Yi=new R,fn=new R,ks=new R,qi=new R,Vs=new R;class Pr{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gs.copy(t).add(e).multiplyScalar(.5),Yi.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(Gs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Yi),a=fn.dot(this.direction),c=-fn.dot(Yi),l=fn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gs).addScaledVector(Yi,d),p}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),s=sn.dot(sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,s,r){ks.subVectors(e,t),qi.subVectors(n,t),Vs.crossVectors(ks,qi);let o=this.direction.dot(Vs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fn.subVectors(this.origin,t);const c=a*this.direction.dot(qi.crossVectors(fn,qi));if(c<0)return null;const l=a*this.direction.dot(ks.cross(fn));if(l<0||c+l>o)return null;const h=-a*fn.dot(Vs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,r,o,a,c,l,h,u,d,p,m,g,_){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,p,m,g,_)}set(t,e,n,s,r,o,a,c,l,h,u,d,p,m,g,_){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=g,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Vn.setFromMatrixColumn(t,0).length(),r=1/Vn.setFromMatrixColumn(t,1).length(),o=1/Vn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,m=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+m*l,e[5]=d-g*l,e[9]=-a*c,e[2]=g-d*l,e[6]=m+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,m=l*h,g=l*u;e[0]=d+g*a,e[4]=m*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-m,e[6]=g+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,m=l*h,g=l*u;e[0]=d-g*a,e[4]=-o*u,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,p=o*u,m=a*h,g=a*u;e[0]=c*h,e[4]=m*l-p,e[8]=d*l+g,e[1]=c*u,e[5]=g*l+d,e[9]=p*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,m=a*c,g=a*l;e[0]=c*h,e[4]=g-d*u,e[8]=m*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+m,e[10]=d-g*u}else if(t.order==="XZY"){const d=o*c,p=o*l,m=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+g,e[5]=o*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ec,t,wc)}lookAt(t,e,n){const s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),pn.crossVectors(n,Ue),pn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),pn.crossVectors(n,Ue)),pn.normalize(),Zi.crossVectors(Ue,pn),s[0]=pn.x,s[4]=Zi.x,s[8]=Ue.x,s[1]=pn.y,s[5]=Zi.y,s[9]=Ue.y,s[2]=pn.z,s[6]=Zi.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],g=n[6],_=n[10],f=n[14],S=n[3],v=n[7],x=n[11],L=n[15],b=s[0],A=s[4],P=s[8],E=s[12],M=s[1],C=s[5],U=s[9],z=s[13],k=s[2],G=s[6],Y=s[10],Q=s[14],q=s[3],st=s[7],ut=s[11],yt=s[15];return r[0]=o*b+a*M+c*k+l*q,r[4]=o*A+a*C+c*G+l*st,r[8]=o*P+a*U+c*Y+l*ut,r[12]=o*E+a*z+c*Q+l*yt,r[1]=h*b+u*M+d*k+p*q,r[5]=h*A+u*C+d*G+p*st,r[9]=h*P+u*U+d*Y+p*ut,r[13]=h*E+u*z+d*Q+p*yt,r[2]=m*b+g*M+_*k+f*q,r[6]=m*A+g*C+_*G+f*st,r[10]=m*P+g*U+_*Y+f*ut,r[14]=m*E+g*z+_*Q+f*yt,r[3]=S*b+v*M+x*k+L*q,r[7]=S*A+v*C+x*G+L*st,r[11]=S*P+v*U+x*Y+L*ut,r[15]=S*E+v*z+x*Q+L*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],g=t[7],_=t[11],f=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+g*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+_*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],g=t[13],_=t[14],f=t[15],S=u*_*l-g*d*l+g*c*p-a*_*p-u*c*f+a*d*f,v=m*d*l-h*_*l-m*c*p+o*_*p+h*c*f-o*d*f,x=h*g*l-m*u*l+m*a*p-o*g*p-h*a*f+o*u*f,L=m*u*c-h*g*c-m*a*d+o*g*d+h*a*_-o*u*_,b=e*S+n*v+s*x+r*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=S*A,t[1]=(g*d*r-u*_*r-g*s*p+n*_*p+u*s*f-n*d*f)*A,t[2]=(a*_*r-g*c*r+g*s*l-n*_*l-a*s*f+n*c*f)*A,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*A,t[4]=v*A,t[5]=(h*_*r-m*d*r+m*s*p-e*_*p-h*s*f+e*d*f)*A,t[6]=(m*c*r-o*_*r-m*s*l+e*_*l+o*s*f-e*c*f)*A,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*A,t[8]=x*A,t[9]=(m*u*r-h*g*r-m*n*p+e*g*p+h*n*f-e*u*f)*A,t[10]=(o*g*r-m*a*r+m*n*l-e*g*l-o*n*f+e*a*f)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*A,t[12]=L*A,t[13]=(h*g*s-m*u*s+m*n*d-e*g*d-h*n*_+e*u*_)*A,t[14]=(m*a*s-o*g*s-m*n*c+e*g*c+o*n*_-e*a*_)*A,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,m=r*u,g=o*h,_=o*u,f=a*u,S=c*l,v=c*h,x=c*u,L=n.x,b=n.y,A=n.z;return s[0]=(1-(g+f))*L,s[1]=(p+x)*L,s[2]=(m-v)*L,s[3]=0,s[4]=(p-x)*b,s[5]=(1-(d+f))*b,s[6]=(_+S)*b,s[7]=0,s[8]=(m+v)*A,s[9]=(_-S)*A,s[10]=(1-(d+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Vn.set(s[0],s[1],s[2]).length();const o=Vn.set(s[4],s[5],s[6]).length(),a=Vn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],We.copy(this);const l=1/r,h=1/o,u=1/a;return We.elements[0]*=l,We.elements[1]*=l,We.elements[2]*=l,We.elements[4]*=h,We.elements[5]*=h,We.elements[6]*=h,We.elements[8]*=u,We.elements[9]*=u,We.elements[10]*=u,e.setFromRotationMatrix(We),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=2e3){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,m;if(a===2e3)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===2001)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=2e3){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,p=(n+s)*h;let m,g;if(a===2e3)m=(o+r)*u,g=-2*u;else if(a===2001)m=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vn=new R,We=new re,Ec=new R(0,0,0),wc=new R(1,1,1),pn=new R,Zi=new R,Ue=new R,so=new re,ro=new Bi;class je{constructor(t=0,e=0,n=0,s=je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return so.makeRotationFromQuaternion(t),this.setFromRotationMatrix(so,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ro.setFromEuler(this),this.setFromQuaternion(ro,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}je.DEFAULT_ORDER="XYZ";class Lr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Tc=0;const oo=new R,Hn=new Bi,rn=new re,Ki=new R,gi=new R,bc=new R,Ac=new Bi,ao=new R(1,0,0),co=new R(0,1,0),lo=new R(0,0,1),ho={type:"added"},Rc={type:"removed"},Wn={type:"childadded",child:null},Hs={type:"childremoved",child:null};class Se extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=Je(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new R,e=new je,n=new Bi,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Ut}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hn.setFromAxisAngle(t,e),this.quaternion.multiply(Hn),this}rotateOnWorldAxis(t,e){return Hn.setFromAxisAngle(t,e),this.quaternion.premultiply(Hn),this}rotateX(t){return this.rotateOnAxis(ao,t)}rotateY(t){return this.rotateOnAxis(co,t)}rotateZ(t){return this.rotateOnAxis(lo,t)}translateOnAxis(t,e){return oo.copy(t).applyQuaternion(this.quaternion),this.position.add(oo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ao,t)}translateY(t){return this.translateOnAxis(co,t)}translateZ(t){return this.translateOnAxis(lo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ki.copy(t):Ki.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(gi,Ki,this.up):rn.lookAt(Ki,gi,this.up),this.quaternion.setFromRotationMatrix(rn),s&&(rn.extractRotation(s.matrixWorld),Hn.setFromRotationMatrix(rn),this.quaternion.premultiply(Hn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ho),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rc),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ho),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,t,bc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,Ac,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Se.DEFAULT_UP=new R(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new R,on=new R,Ws=new R,an=new R,Xn=new R,Yn=new R,uo=new R,Xs=new R,Ys=new R,qs=new R,Zs=new se,Ks=new se,$s=new se;class Oe{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xe.subVectors(t,e),s.cross(Xe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xe.subVectors(s,e),on.subVectors(n,e),Ws.subVectors(t,e);const o=Xe.dot(Xe),a=Xe.dot(on),c=Xe.dot(Ws),l=on.dot(on),h=on.dot(Ws),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,an)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,an.x),c.addScaledVector(o,an.y),c.addScaledVector(a,an.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Zs.setScalar(0),Ks.setScalar(0),$s.setScalar(0),Zs.fromBufferAttribute(t,e),Ks.fromBufferAttribute(t,n),$s.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zs,r.x),o.addScaledVector(Ks,r.y),o.addScaledVector($s,r.z),o}static isFrontFacing(t,e,n,s){return Xe.subVectors(n,e),on.subVectors(t,e),Xe.cross(on).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Xe.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Oe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Oe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Oe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Xn.subVectors(s,n),Yn.subVectors(r,n),Xs.subVectors(t,n);const c=Xn.dot(Xs),l=Yn.dot(Xs);if(c<=0&&l<=0)return e.copy(n);Ys.subVectors(t,s);const h=Xn.dot(Ys),u=Yn.dot(Ys);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Xn,o);qs.subVectors(t,r);const p=Xn.dot(qs),m=Yn.dot(qs);if(m>=0&&p<=m)return e.copy(r);const g=p*l-c*m;if(g<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Yn,a);const _=h*m-p*u;if(_<=0&&u-h>=0&&p-m>=0)return uo.subVectors(r,s),a=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(uo,a);const f=1/(_+g+d);return o=g*f,a=d*f,e.copy(n).addScaledVector(Xn,o).addScaledVector(Yn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const va={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},$i={h:0,s:0,l:0};function Js(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Cr(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Js(o,r,t+1/3),this.g=Js(o,r,t),this.b=Js(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=va[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cn(t.r),this.g=cn(t.g),this.b=cn(t.b),this}copyLinearToSRGB(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return qt.fromWorkingColorSpace(be.copy(this),t),Math.round(me(be.r*255,0,255))*65536+Math.round(me(be.g*255,0,255))*256+Math.round(me(be.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,s=be.g,r=be.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=Pe){qt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,s=be.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mn),this.setHSL(mn.h+t,mn.s+e,mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mn),t.getHSL($i);const n=Ci(mn.h,$i.h,e),s=Ci(mn.s,$i.s,e),r=Ci(mn.l,$i.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Yt;Yt.NAMES=va;let Cc=0;class Fn extends ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Je(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ne extends Fn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new R,Ji=new it;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ji.fromBufferAttribute(this,e),Ji.applyMatrix3(t),this.setXY(e,Ji.x,Ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ye(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ye(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ye(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ye(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ye(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class Ma extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sa extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Wt extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pc=0;const ze=new re,js=new Se,qn=new R,Ne=new zi,xi=new zi,ve=new R;class xe extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=Je(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_a(t)?Sa:Ma)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return js.lookAt(t),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];xi.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Ne.min,xi.min),Ne.expandByPoint(ve),ve.addVectors(Ne.max,xi.max),Ne.expandByPoint(ve)):(Ne.expandByPoint(xi.min),Ne.expandByPoint(xi.max))}Ne.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ve.fromBufferAttribute(a,l),c&&(qn.fromBufferAttribute(t,l),ve.add(qn)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new R,c[P]=new R;const l=new R,h=new R,u=new R,d=new it,p=new it,m=new it,g=new R,_=new R;function f(P,E,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(d),m.sub(d);const C=1/(p.x*m.y-m.x*p.y);isFinite(C)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(C),_.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(C),a[P].add(g),a[E].add(g),a[M].add(g),c[P].add(_),c[E].add(_),c[M].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,E=S.length;P<E;++P){const M=S[P],C=M.start,U=M.count;for(let z=C,k=C+U;z<k;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const v=new R,x=new R,L=new R,b=new R;function A(P){L.fromBufferAttribute(s,P),b.copy(L);const E=a[P];v.copy(E),v.sub(L.multiplyScalar(L.dot(E))).normalize(),x.crossVectors(b,E);const C=x.dot(c[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,C)}for(let P=0,E=S.length;P<E;++P){const M=S[P],C=M.start,U=M.count;for(let z=C,k=C+U;z<k;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){const m=t.getX(d+0),g=t.getX(d+1),_=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,m=0;for(let g=0,_=c.length;g<_;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let f=0;f<h;f++)d[m++]=l[p++]}return new qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fo=new re,En=new Pr,ji=new Cs,po=new R,Qi=new R,ts=new R,es=new R,Qs=new R,ns=new R,mo=new R,is=new R;class zt extends Se{constructor(t=new xe,e=new ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ns.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Qs.fromBufferAttribute(u,t),o?ns.addScaledVector(Qs,h):ns.addScaledVector(Qs.sub(e),h))}e.add(ns)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(r),En.copy(t.ray).recast(t.near),!(ji.containsPoint(En.origin)===!1&&(En.intersectSphere(ji,po)===null||En.origin.distanceToSquared(po)>(t.far-t.near)**2))&&(fo.copy(r).invert(),En.copy(t.ray).applyMatrix4(fo),!(n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,En)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const _=d[m],f=o[_.materialIndex],S=Math.max(_.start,p.start),v=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let x=S,L=v;x<L;x+=3){const b=a.getX(x),A=a.getX(x+1),P=a.getX(x+2);s=ss(this,f,t,n,l,h,u,b,A,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let _=m,f=g;_<f;_+=3){const S=a.getX(_),v=a.getX(_+1),x=a.getX(_+2);s=ss(this,o,t,n,l,h,u,S,v,x),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const _=d[m],f=o[_.materialIndex],S=Math.max(_.start,p.start),v=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let x=S,L=v;x<L;x+=3){const b=x,A=x+1,P=x+2;s=ss(this,f,t,n,l,h,u,b,A,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let _=m,f=g;_<f;_+=3){const S=_,v=_+1,x=_+2;s=ss(this,o,t,n,l,h,u,S,v,x),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function Lc(i,t,e,n,s,r,o,a){let c;if(t.side===1?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===0,a),c===null)return null;is.copy(a),is.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(is);return l<e.near||l>e.far?null:{distance:l,point:is.clone(),object:i}}function ss(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Qi),i.getVertexPosition(c,ts),i.getVertexPosition(l,es);const h=Lc(i,t,e,n,Qi,ts,es,mo);if(h){const u=new R;Oe.getBarycoord(mo,Qi,ts,es,u),s&&(h.uv=Oe.getInterpolatedAttribute(s,a,c,l,u,new it)),r&&(h.uv1=Oe.getInterpolatedAttribute(r,a,c,l,u,new it)),o&&(h.normal=Oe.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};Oe.getNormal(Qi,ts,es,d.normal),h.face=d,h.barycoord=u}return h}class B extends xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function m(g,_,f,S,v,x,L,b,A,P,E){const M=x/A,C=L/P,U=x/2,z=L/2,k=b/2,G=A+1,Y=P+1;let Q=0,q=0;const st=new R;for(let ut=0;ut<Y;ut++){const yt=ut*C-z;for(let Nt=0;Nt<G;Nt++){const xt=Nt*M-U;st[g]=xt*S,st[_]=yt*v,st[f]=k,l.push(st.x,st.y,st.z),st[g]=0,st[_]=0,st[f]=b>0?1:-1,h.push(st.x,st.y,st.z),u.push(Nt/A),u.push(1-ut/P),Q+=1}}for(let ut=0;ut<P;ut++)for(let yt=0;yt<A;yt++){const Nt=d+yt+G*ut,xt=d+yt+G*(ut+1),K=d+(yt+1)+G*(ut+1),tt=d+(yt+1)+G*ut;c.push(Nt,xt,tt),c.push(xt,K,tt),q+=6}a.addGroup(p,q,E),p+=q,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new B(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function li(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){const t={};for(let e=0;e<i.length;e++){const n=li(i[e]);for(const s in n)t[s]=n[s]}return t}function Dc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ya(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Ic={clone:li,merge:Ce};var Uc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Fn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uc,this.fragmentShader=Nc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=li(t.uniforms),this.uniformsGroups=Dc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ea extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _n=new R,_o=new it,go=new it;class Ge extends Ea{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ui*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ui*2*Math.atan(Math.tan(oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_n.x,_n.y).multiplyScalar(-t/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_n.x,_n.y).multiplyScalar(-t/_n.z)}getViewSize(t,e){return this.getViewBounds(t,_o,go),e.subVectors(go,_o)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(oi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zn=-90,Kn=1;class Fc extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ge(Zn,Kn,t,e);s.layers=this.layers,this.add(s);const r=new Ge(Zn,Kn,t,e);r.layers=this.layers,this.add(r);const o=new Ge(Zn,Kn,t,e);o.layers=this.layers,this.add(o);const a=new Ge(Zn,Kn,t,e);a.layers=this.layers,this.add(a);const c=new Ge(Zn,Kn,t,e);c.layers=this.layers,this.add(c);const l=new Ge(Zn,Kn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class wa extends Le{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Oc extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new wa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new B(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const o=new zt(s,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Fc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const tr=new R,Bc=new R,zc=new Ut;class Rn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=tr.subVectors(n,e).cross(Bc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(tr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zc.getNormalMatrix(t),s=this.coplanarPoint(tr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new Cs,rs=new R;class Dr{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],m=s[9],g=s[10],_=s[11],f=s[12],S=s[13],v=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,_-p,x-f).normalize(),n[1].setComponents(c+r,d+l,_+p,x+f).normalize(),n[2].setComponents(c+o,d+h,_+m,x+S).normalize(),n[3].setComponents(c-o,d-h,_-m,x-S).normalize(),n[4].setComponents(c-a,d-u,_-g,x-v).normalize(),e===2e3)n[5].setComponents(c+a,d+u,_+g,x+v).normalize();else if(e===2001)n[5].setComponents(a,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(t){return wn.center.set(0,0,0),wn.radius=.7071067811865476,wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(rs.x=s.normal.x>0?t.max.x:t.min.x,rs.y=s.normal.y>0?t.max.y:t.min.y,rs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ta(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gc(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){const m=u[d],g=u[p];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){const g=u[p];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Ee extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],m=[],g=[],_=[];for(let f=0;f<h;f++){const S=f*d-o;for(let v=0;v<l;v++){const x=v*u-r;m.push(x,-S,0),g.push(0,0,1),_.push(v/a),_.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){const v=S+l*f,x=S+l*(f+1),L=S+1+l*(f+1),b=S+1+l*f;p.push(v,x,b),p.push(x,L,b)}this.setIndex(p),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.widthSegments,t.heightSegments)}}var kc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vc=`#ifdef USE_ALPHAHASH
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
#endif`,Hc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qc=`#ifdef USE_AOMAP
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
#endif`,Zc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$c=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tl=`#ifdef USE_IRIDESCENCE
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
#endif`,el=`#ifdef USE_BUMPMAP
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
#endif`,nl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,il=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ol=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,al=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ll=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hl=`#define PI 3.141592653589793
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
} // validated`,ul=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dl=`vec3 transformedNormal = objectNormal;
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
#endif`,fl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ml=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_l=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gl="gl_FragColor = linearToOutputTexel( gl_FragColor );",xl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vl=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Ml=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sl=`#ifdef USE_ENVMAP
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
#endif`,yl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,El=`#ifdef USE_ENVMAP
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
#endif`,wl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Al=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rl=`#ifdef USE_GRADIENTMAP
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
}`,Cl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ll=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dl=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Il=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Ul=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ol=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bl=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,zl=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Gl=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,kl=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vl=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hl=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wl=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xl=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yl=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ql=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$l=`#if defined( USE_POINTS_UV )
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
#endif`,Jl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ql=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,th=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ih=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ch=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lh=`#ifdef USE_NORMALMAP
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
#endif`,hh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ph=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,_h=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Eh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Th=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ah=`#ifdef USE_SKINNING
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
#endif`,Rh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ch=`#ifdef USE_SKINNING
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
#endif`,Ph=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ih=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uh=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nh=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kh=`uniform sampler2D t2D;
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
}`,Vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yh=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,qh=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zh=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Kh=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jh=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qh=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tu=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,eu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,nu=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,iu=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,su=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,ru=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ou=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,au=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cu=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,lu=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,hu=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,uu=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,du=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,fu=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,pu=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,mu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,_u=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,gu=`uniform vec3 color;
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
}`,xu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,vu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Bt={alphahash_fragment:kc,alphahash_pars_fragment:Vc,alphamap_fragment:Hc,alphamap_pars_fragment:Wc,alphatest_fragment:Xc,alphatest_pars_fragment:Yc,aomap_fragment:qc,aomap_pars_fragment:Zc,batching_pars_vertex:Kc,batching_vertex:$c,begin_vertex:Jc,beginnormal_vertex:jc,bsdfs:Qc,iridescence_fragment:tl,bumpmap_pars_fragment:el,clipping_planes_fragment:nl,clipping_planes_pars_fragment:il,clipping_planes_pars_vertex:sl,clipping_planes_vertex:rl,color_fragment:ol,color_pars_fragment:al,color_pars_vertex:cl,color_vertex:ll,common:hl,cube_uv_reflection_fragment:ul,defaultnormal_vertex:dl,displacementmap_pars_vertex:fl,displacementmap_vertex:pl,emissivemap_fragment:ml,emissivemap_pars_fragment:_l,colorspace_fragment:gl,colorspace_pars_fragment:xl,envmap_fragment:vl,envmap_common_pars_fragment:Ml,envmap_pars_fragment:Sl,envmap_pars_vertex:yl,envmap_physical_pars_fragment:Il,envmap_vertex:El,fog_vertex:wl,fog_pars_vertex:Tl,fog_fragment:bl,fog_pars_fragment:Al,gradientmap_pars_fragment:Rl,lightmap_pars_fragment:Cl,lights_lambert_fragment:Pl,lights_lambert_pars_fragment:Ll,lights_pars_begin:Dl,lights_toon_fragment:Ul,lights_toon_pars_fragment:Nl,lights_phong_fragment:Fl,lights_phong_pars_fragment:Ol,lights_physical_fragment:Bl,lights_physical_pars_fragment:zl,lights_fragment_begin:Gl,lights_fragment_maps:kl,lights_fragment_end:Vl,logdepthbuf_fragment:Hl,logdepthbuf_pars_fragment:Wl,logdepthbuf_pars_vertex:Xl,logdepthbuf_vertex:Yl,map_fragment:ql,map_pars_fragment:Zl,map_particle_fragment:Kl,map_particle_pars_fragment:$l,metalnessmap_fragment:Jl,metalnessmap_pars_fragment:jl,morphinstance_vertex:Ql,morphcolor_vertex:th,morphnormal_vertex:eh,morphtarget_pars_vertex:nh,morphtarget_vertex:ih,normal_fragment_begin:sh,normal_fragment_maps:rh,normal_pars_fragment:oh,normal_pars_vertex:ah,normal_vertex:ch,normalmap_pars_fragment:lh,clearcoat_normal_fragment_begin:hh,clearcoat_normal_fragment_maps:uh,clearcoat_pars_fragment:dh,iridescence_pars_fragment:fh,opaque_fragment:ph,packing:mh,premultiplied_alpha_fragment:_h,project_vertex:gh,dithering_fragment:xh,dithering_pars_fragment:vh,roughnessmap_fragment:Mh,roughnessmap_pars_fragment:Sh,shadowmap_pars_fragment:yh,shadowmap_pars_vertex:Eh,shadowmap_vertex:wh,shadowmask_pars_fragment:Th,skinbase_vertex:bh,skinning_pars_vertex:Ah,skinning_vertex:Rh,skinnormal_vertex:Ch,specularmap_fragment:Ph,specularmap_pars_fragment:Lh,tonemapping_fragment:Dh,tonemapping_pars_fragment:Ih,transmission_fragment:Uh,transmission_pars_fragment:Nh,uv_pars_fragment:Fh,uv_pars_vertex:Oh,uv_vertex:Bh,worldpos_vertex:zh,background_vert:Gh,background_frag:kh,backgroundCube_vert:Vh,backgroundCube_frag:Hh,cube_vert:Wh,cube_frag:Xh,depth_vert:Yh,depth_frag:qh,distanceRGBA_vert:Zh,distanceRGBA_frag:Kh,equirect_vert:$h,equirect_frag:Jh,linedashed_vert:jh,linedashed_frag:Qh,meshbasic_vert:tu,meshbasic_frag:eu,meshlambert_vert:nu,meshlambert_frag:iu,meshmatcap_vert:su,meshmatcap_frag:ru,meshnormal_vert:ou,meshnormal_frag:au,meshphong_vert:cu,meshphong_frag:lu,meshphysical_vert:hu,meshphysical_frag:uu,meshtoon_vert:du,meshtoon_frag:fu,points_vert:pu,points_frag:mu,shadow_vert:_u,shadow_frag:gu,sprite_vert:xu,sprite_frag:vu},rt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Ke={basic:{uniforms:Ce([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ce([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ce([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ce([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ce([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ce([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ce([rt.points,rt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ce([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ce([rt.common,rt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ce([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ce([rt.sprite,rt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ce([rt.common,rt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ce([rt.lights,rt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Ke.physical={uniforms:Ce([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const os={r:0,b:0,g:0},Tn=new je,Mu=new re;function Su(i,t,e,n,s,r,o){const a=new Yt(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function m(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function g(S){let v=!1;const x=m(S);x===null?f(a,c):x&&x.isColor&&(f(x,1),v=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,v){const x=m(v);x&&(x.isCubeTexture||x.mapping===306)?(h===void 0&&(h=new zt(new B(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:li(Ke.backgroundCube.uniforms),vertexShader:Ke.backgroundCube.vertexShader,fragmentShader:Ke.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Tn.copy(v.backgroundRotation),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mu.makeRotationFromEuler(Tn)),h.material.toneMapped=qt.getTransfer(x.colorSpace)!==ie,(u!==x||d!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new zt(new Ee(2,2),new vn({name:"BackgroundMaterial",uniforms:li(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=qt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,v){S.getRGB(os,ya(i)),n.buffers.color.setClear(os.r,os.g,os.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(a,c)},render:g,addToRenderList:_}}function yu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,C,U,z,k){let G=!1;const Y=u(z,U,C);r!==Y&&(r=Y,l(r.object)),G=p(M,z,U,k),G&&m(M,z,U,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(M,C,U,z),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,U){const z=U.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let G=k[C.id];G===void 0&&(G={},k[C.id]=G);let Y=G[z];return Y===void 0&&(Y=d(c()),G[z]=Y),Y}function d(M){const C=[],U=[],z=[];for(let k=0;k<e;k++)C[k]=0,U[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,C,U,z){const k=r.attributes,G=C.attributes;let Y=0;const Q=U.getAttributes();for(const q in Q)if(Q[q].location>=0){const ut=k[q];let yt=G[q];if(yt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),ut===void 0||ut.attribute!==yt||yt&&ut.data!==yt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function m(M,C,U,z){const k={},G=C.attributes;let Y=0;const Q=U.getAttributes();for(const q in Q)if(Q[q].location>=0){let ut=G[q];ut===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));const yt={};yt.attribute=ut,ut&&ut.data&&(yt.data=ut.data),k[q]=yt,Y++}r.attributes=k,r.attributesNum=Y,r.index=z}function g(){const M=r.newAttributes;for(let C=0,U=M.length;C<U;C++)M[C]=0}function _(M){f(M,0)}function f(M,C){const U=r.newAttributes,z=r.enabledAttributes,k=r.attributeDivisors;U[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),k[M]!==C&&(i.vertexAttribDivisor(M,C),k[M]=C)}function S(){const M=r.newAttributes,C=r.enabledAttributes;for(let U=0,z=C.length;U<z;U++)C[U]!==M[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function v(M,C,U,z,k,G,Y){Y===!0?i.vertexAttribIPointer(M,C,U,k,G):i.vertexAttribPointer(M,C,U,z,k,G)}function x(M,C,U,z){g();const k=z.attributes,G=U.getAttributes(),Y=C.defaultAttributeValues;for(const Q in G){const q=G[Q];if(q.location>=0){let st=k[Q];if(st===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const ut=st.normalized,yt=st.itemSize,Nt=t.get(st);if(Nt===void 0)continue;const xt=Nt.buffer,K=Nt.type,tt=Nt.bytesPerElement,gt=K===i.INT||K===i.UNSIGNED_INT||st.gpuType===1013;if(st.isInterleavedBufferAttribute){const ot=st.data,bt=ot.stride,At=st.offset;if(ot.isInstancedInterleavedBuffer){for(let Ft=0;Ft<q.locationSize;Ft++)f(q.location+Ft,ot.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ft=0;Ft<q.locationSize;Ft++)_(q.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let Ft=0;Ft<q.locationSize;Ft++)v(q.location+Ft,yt/q.locationSize,K,ut,bt*tt,(At+yt/q.locationSize*Ft)*tt,gt)}else{if(st.isInstancedBufferAttribute){for(let ot=0;ot<q.locationSize;ot++)f(q.location+ot,st.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ot=0;ot<q.locationSize;ot++)_(q.location+ot);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let ot=0;ot<q.locationSize;ot++)v(q.location+ot,yt/q.locationSize,K,ut,yt*tt,yt/q.locationSize*ot*tt,gt)}}else if(Y!==void 0){const ut=Y[Q];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(q.location,ut);break;case 3:i.vertexAttrib3fv(q.location,ut);break;case 4:i.vertexAttrib4fv(q.location,ut);break;default:i.vertexAttrib1fv(q.location,ut)}}}}S()}function L(){P();for(const M in n){const C=n[M];for(const U in C){const z=C[U];for(const k in z)h(z[k].object),delete z[k];delete C[U]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const U in C){const z=C[U];for(const k in z)h(z[k].object),delete z[k];delete C[U]}delete n[M.id]}function A(M){for(const C in n){const U=n[C];if(U[M.id]===void 0)continue;const z=U[M.id];for(const k in z)h(z[k].object),delete z[k];delete U[M.id]}}function P(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:_,disableUnusedAttributes:S}}function Eu(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g]*d[g];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wu(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==1023&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==1009&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==1015&&!P)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:L,maxSamples:b}}function Tu(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Rn,a=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const m=u.clippingPlanes,g=u.clipIntersection,_=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!_)r?h(null):l();else{const S=r?0:n,v=S*4;let x=f.clippingState||null;c.value=x,x=h(m,d,v,p);for(let L=0;L!==v;++L)x[L]=e[L];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){const g=u!==null?u.length:0;let _=null;if(g!==0){if(_=c.value,m!==!0||_===null){const f=p+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(_===null||_.length<f)&&(_=new Float32Array(f));for(let v=0,x=p;v!==g;++v,x+=4)o.copy(u[v]).applyMatrix4(S,a),o.normal.toArray(_,x),_[x+3]=o.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,_}}function bu(i){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Oc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ir extends Ea{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ii=4,xo=[.125,.215,.35,.446,.526,.582],Ln=20,er=new Ir,vo=new Yt;let nr=null,ir=0,sr=0,rr=!1;const Cn=(1+Math.sqrt(5))/2,$n=1/Cn,Mo=[new R(-Cn,$n,0),new R(Cn,$n,0),new R(-$n,0,Cn),new R($n,0,Cn),new R(0,Cn,-$n),new R(0,Cn,$n),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class So{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){nr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel(),rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nr,ir,sr),this._renderer.xr.enabled=rr,t.scissorTest=!1,as(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel(),rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:hi,depthBuffer:!1},s=yo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Au(r)),this._blurMaterial=Ru(r,t,e)}return s}_compileMaterial(t){const e=new zt(this._lodPlanes[0],t);this._renderer.compile(e,er)}_sceneToCubeUV(t,e,n,s){const a=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(vo),h.toneMapping=0,h.autoClear=!1;const p=new ne({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),m=new zt(new B,p);let g=!1;const _=t.background;_?_.isColor&&(p.color.copy(_),t.background=null,g=!0):(p.color.copy(vo),g=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const v=this._cubeSize;as(s,S*v,f>2?v:0,v,v),h.setRenderTarget(s),g&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===301||t.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eo());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;as(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,er)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mo[(s-r-1)%Mo.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new zt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ln-1),g=r/m,_=isFinite(r)?1+Math.floor(h*g):Ln;_>Ln&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ln}`);const f=[];let S=0;for(let A=0;A<Ln;++A){const P=A/g,E=Math.exp(-P*P/2);f.push(E),A===0?S+=E:A<_&&(S+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/S;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;const x=this._sizeLods[s],L=3*x*(s>v-ii?s-v+ii:0),b=4*(this._cubeSize-x);as(e,L,b,3*x,2*x),c.setRenderTarget(e),c.render(u,er)}}function Au(i){const t=[],e=[],n=[];let s=i;const r=i-ii+1+xo.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ii?c=xo[o-i+ii-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,g=3,_=2,f=1,S=new Float32Array(g*m*p),v=new Float32Array(_*m*p),x=new Float32Array(f*m*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,P=b>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];S.set(E,g*m*b),v.set(d,_*m*b);const M=[b,b,b,b,b,b];x.set(M,f*m*b)}const L=new xe;L.setAttribute("position",new qe(S,g)),L.setAttribute("uv",new qe(v,_)),L.setAttribute("faceIndex",new qe(x,f)),t.push(L),s>ii&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yo(i,t,e){const n=new Un(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ru(i,t,e){const n=new Float32Array(Ln),s=new R(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ur(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Eo(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ur(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function wo(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ur(){return`

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
	`}function Cu(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===303||c===304,h=c===301||c===302;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new So(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new So(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Pu(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ai("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lu(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const g=d.morphAttributes[m];for(let _=0,f=g.length;_<f;_++)t.remove(g[_])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const m in p){const g=p[m];for(let _=0,f=g.length;_<f;_++)t.update(g[_],i.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,m=u.attributes.position;let g=0;if(p!==null){const S=p.array;g=p.version;for(let v=0,x=S.length;v<x;v+=3){const L=S[v+0],b=S[v+1],A=S[v+2];d.push(L,b,b,A,A,L)}}else if(m!==void 0){const S=m.array;g=m.version;for(let v=0,x=S.length/3-1;v<x;v+=3){const L=v+0,b=v+1,A=v+2;d.push(L,b,b,A,A,L)}}else return;const _=new(_a(d)?Sa:Ma)(d,1);_.version=g;const f=r.get(u);f&&t.remove(f),r.set(u,_)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Du(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*o,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let _=0;for(let f=0;f<m;f++)_+=p[f];e.update(_,n,1)}function u(d,p,m,g){if(m===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],g[f]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,g,0,m);let f=0;for(let S=0;S<m;S++)f+=p[S]*g[S];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Iu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Uu(i,t,e){const n=new WeakMap,s=new se;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),m===!0&&(v=2),g===!0&&(v=3);let x=a.attributes.position.count*v,L=1;x>t.maxTextureSize&&(L=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const b=new Float32Array(x*L*4*u),A=new xa(b,x,L,u);A.type=1015,A.needsUpdate=!0;const P=v*4;for(let M=0;M<u;M++){const C=_[M],U=f[M],z=S[M],k=x*L*4*M;for(let G=0;G<C.count;G++){const Y=G*P;p===!0&&(s.fromBufferAttribute(C,G),b[k+Y+0]=s.x,b[k+Y+1]=s.y,b[k+Y+2]=s.z,b[k+Y+3]=0),m===!0&&(s.fromBufferAttribute(U,G),b[k+Y+4]=s.x,b[k+Y+5]=s.y,b[k+Y+6]=s.z,b[k+Y+7]=0),g===!0&&(s.fromBufferAttribute(z,G),b[k+Y+8]=s.x,b[k+Y+9]=s.y,b[k+Y+10]=s.z,b[k+Y+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new it(x,L)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Nu(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class ba extends Le{constructor(t,e,n,s,r,o,a,c,l,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Aa=new Le,To=new ba(1,1),Ra=new xa,Ca=new Sc,Pa=new wa,bo=[],Ao=[],Ro=new Float32Array(16),Co=new Float32Array(9),Po=new Float32Array(4);function di(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=bo[s];if(r===void 0&&(r=new Float32Array(s),bo[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ps(i,t){let e=Ao[t];e===void 0&&(e=new Int32Array(t),Ao[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Fu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ou(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function Bu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function Gu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;Po.set(n),i.uniformMatrix2fv(this.addr,!1,Po),ge(e,n)}}function ku(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;Co.set(n),i.uniformMatrix3fv(this.addr,!1,Co),ge(e,n)}}function Vu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;Ro.set(n),i.uniformMatrix4fv(this.addr,!1,Ro),ge(e,n)}}function Hu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Wu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function Xu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function Yu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function qu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function Ku(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function $u(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function Ju(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(To.compareFunction=515,r=To):r=Aa,e.setTexture2D(t||r,s)}function ju(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ca,s)}function Qu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Pa,s)}function td(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ra,s)}function ed(i){switch(i){case 5126:return Fu;case 35664:return Ou;case 35665:return Bu;case 35666:return zu;case 35674:return Gu;case 35675:return ku;case 35676:return Vu;case 5124:case 35670:return Hu;case 35667:case 35671:return Wu;case 35668:case 35672:return Xu;case 35669:case 35673:return Yu;case 5125:return qu;case 36294:return Zu;case 36295:return Ku;case 36296:return $u;case 35678:case 36198:case 36298:case 36306:case 35682:return Ju;case 35679:case 36299:case 36307:return ju;case 35680:case 36300:case 36308:case 36293:return Qu;case 36289:case 36303:case 36311:case 36292:return td}}function nd(i,t){i.uniform1fv(this.addr,t)}function id(i,t){const e=di(t,this.size,2);i.uniform2fv(this.addr,e)}function sd(i,t){const e=di(t,this.size,3);i.uniform3fv(this.addr,e)}function rd(i,t){const e=di(t,this.size,4);i.uniform4fv(this.addr,e)}function od(i,t){const e=di(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ad(i,t){const e=di(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function cd(i,t){const e=di(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ld(i,t){i.uniform1iv(this.addr,t)}function hd(i,t){i.uniform2iv(this.addr,t)}function ud(i,t){i.uniform3iv(this.addr,t)}function dd(i,t){i.uniform4iv(this.addr,t)}function fd(i,t){i.uniform1uiv(this.addr,t)}function pd(i,t){i.uniform2uiv(this.addr,t)}function md(i,t){i.uniform3uiv(this.addr,t)}function _d(i,t){i.uniform4uiv(this.addr,t)}function gd(i,t,e){const n=this.cache,s=t.length,r=Ps(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Aa,r[o])}function xd(i,t,e){const n=this.cache,s=t.length,r=Ps(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ca,r[o])}function vd(i,t,e){const n=this.cache,s=t.length,r=Ps(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Pa,r[o])}function Md(i,t,e){const n=this.cache,s=t.length,r=Ps(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ra,r[o])}function Sd(i){switch(i){case 5126:return nd;case 35664:return id;case 35665:return sd;case 35666:return rd;case 35674:return od;case 35675:return ad;case 35676:return cd;case 5124:case 35670:return ld;case 35667:case 35671:return hd;case 35668:case 35672:return ud;case 35669:case 35673:return dd;case 5125:return fd;case 36294:return pd;case 36295:return md;case 36296:return _d;case 35678:case 36198:case 36298:case 36306:case 35682:return gd;case 35679:case 36299:case 36307:return xd;case 35680:case 36300:case 36308:case 36293:return vd;case 36289:case 36303:case 36311:case 36292:return Md}}class yd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ed(e.type)}}class Ed{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sd(e.type)}}class wd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const or=/(\w+)(\])?(\[|\.)?/g;function Lo(i,t){i.seq.push(t),i.map[t.id]=t}function Td(i,t,e){const n=i.name,s=n.length;for(or.lastIndex=0;;){const r=or.exec(n),o=or.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Lo(e,l===void 0?new yd(a,i,t):new Ed(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new wd(a),Lo(e,u)),e=u}}}class Ss{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Td(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Do(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const bd=37297;let Ad=0;function Rd(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Io=new Ut;function Cd(i){qt._getMatrix(Io,qt.workingColorSpace,i);const t=`mat3( ${Io.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Rs:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Uo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Rd(i.getShaderSource(t),o)}else return s}function Pd(i,t){const e=Cd(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ld(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const cs=new R;function Dd(){qt.getLuminanceCoefficients(cs);const i=cs.x.toFixed(4),t=cs.y.toFixed(4),e=cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Id(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function Ud(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Nd(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ri(i){return i!==""}function No(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Fd=/^[ \t]*#include +<([\w\d./]+)>/gm;function wr(i){return i.replace(Fd,Bd)}const Od=new Map;function Bd(i,t){let e=Bt[t];if(e===void 0){const n=Od.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wr(e)}const zd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oo(i){return i.replace(zd,Gd)}function Gd(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bo(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kd(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function Vd(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hd(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function Wd(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Xd(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Yd(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=kd(e),l=Vd(e),h=Hd(e),u=Wd(e),d=Xd(e),p=Id(e),m=Ud(r),g=s.createProgram();let _,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ri).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ri).join(`
`),f.length>0&&(f+=`
`)):(_=[Bo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),f=[Bo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Bt.tonemapping_pars_fragment:"",e.toneMapping!==0?Ld("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Pd("linearToOutputTexel",e.outputColorSpace),Dd(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ri).join(`
`)),o=wr(o),o=No(o,e),o=Fo(o,e),a=wr(a),a=No(a,e),a=Fo(a,e),o=Oo(o),a=Oo(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",e.glslVersion===Kr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=S+_+o,x=S+f+a,L=Do(s,s.VERTEX_SHADER,v),b=Do(s,s.FRAGMENT_SHADER,x);s.attachShader(g,L),s.attachShader(g,b),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(C){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(g).trim(),z=s.getShaderInfoLog(L).trim(),k=s.getShaderInfoLog(b).trim();let G=!0,Y=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,L,b);else{const Q=Uo(s,L,"vertex"),q=Uo(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+Q+`
`+q)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(z===""||k==="")&&(Y=!1);Y&&(C.diagnostics={runnable:G,programLog:U,vertexShader:{log:z,prefix:_},fragmentShader:{log:k,prefix:f}})}s.deleteShader(L),s.deleteShader(b),P=new Ss(s,g),E=Nd(s,g)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,bd)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ad++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=b,this}let qd=0;class Zd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Kd(t),e.set(t,n)),n}}class Kd{constructor(t){this.id=qd++,this.code=t,this.usedTimes=0}}function $d(i,t,e,n,s,r,o){const a=new Lr,c=new Zd,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function _(E,M,C,U,z){const k=U.fog,G=z.geometry,Y=E.isMeshStandardMaterial?U.environment:null,Q=(E.isMeshStandardMaterial?e:t).get(E.envMap||Y),q=Q&&Q.mapping===306?Q.image.height:null,st=m[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ut=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,yt=ut!==void 0?ut.length:0;let Nt=0;G.morphAttributes.position!==void 0&&(Nt=1),G.morphAttributes.normal!==void 0&&(Nt=2),G.morphAttributes.color!==void 0&&(Nt=3);let xt,K,tt,gt;if(st){const Qt=Ke[st];xt=Qt.vertexShader,K=Qt.fragmentShader}else xt=E.vertexShader,K=E.fragmentShader,c.update(E),tt=c.getVertexShaderID(E),gt=c.getFragmentShaderID(E);const ot=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),At=z.isInstancedMesh===!0,Ft=z.isBatchedMesh===!0,ce=!!E.map,Gt=!!E.matcap,ue=!!Q,O=!!E.aoMap,Ae=!!E.lightMap,kt=!!E.bumpMap,Vt=!!E.normalMap,Tt=!!E.displacementMap,ee=!!E.emissiveMap,wt=!!E.metalnessMap,T=!!E.roughnessMap,y=E.anisotropy>0,D=E.clearcoat>0,V=E.dispersion>0,$=E.iridescence>0,H=E.sheen>0,at=E.transmission>0,nt=y&&!!E.anisotropyMap,ft=D&&!!E.clearcoatMap,Ht=D&&!!E.clearcoatNormalMap,j=D&&!!E.clearcoatRoughnessMap,pt=$&&!!E.iridescenceMap,Ct=$&&!!E.iridescenceThicknessMap,Pt=H&&!!E.sheenColorMap,mt=H&&!!E.sheenRoughnessMap,Xt=!!E.specularMap,Ot=!!E.specularColorMap,oe=!!E.specularIntensityMap,I=at&&!!E.transmissionMap,ct=at&&!!E.thicknessMap,Z=!!E.gradientMap,J=!!E.alphaMap,dt=E.alphaTest>0,lt=!!E.alphaHash,Dt=!!E.extensions;let fe=0;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(fe=i.toneMapping);const we={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:xt,fragmentShader:K,defines:E.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&z._colorsTexture!==null,instancing:At,instancingColor:At&&z.instanceColor!==null,instancingMorph:At&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:hi,alphaToCoverage:!!E.alphaToCoverage,map:ce,matcap:Gt,envMap:ue,envMapMode:ue&&Q.mapping,envMapCubeUVHeight:q,aoMap:O,lightMap:Ae,bumpMap:kt,normalMap:Vt,displacementMap:d&&Tt,emissiveMap:ee,normalMapObjectSpace:Vt&&E.normalMapType===1,normalMapTangentSpace:Vt&&E.normalMapType===0,metalnessMap:wt,roughnessMap:T,anisotropy:y,anisotropyMap:nt,clearcoat:D,clearcoatMap:ft,clearcoatNormalMap:Ht,clearcoatRoughnessMap:j,dispersion:V,iridescence:$,iridescenceMap:pt,iridescenceThicknessMap:Ct,sheen:H,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:Xt,specularColorMap:Ot,specularIntensityMap:oe,transmission:at,transmissionMap:I,thicknessMap:ct,gradientMap:Z,opaque:E.transparent===!1&&E.blending===1&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:dt,alphaHash:lt,combine:E.combine,mapUv:ce&&g(E.map.channel),aoMapUv:O&&g(E.aoMap.channel),lightMapUv:Ae&&g(E.lightMap.channel),bumpMapUv:kt&&g(E.bumpMap.channel),normalMapUv:Vt&&g(E.normalMap.channel),displacementMapUv:Tt&&g(E.displacementMap.channel),emissiveMapUv:ee&&g(E.emissiveMap.channel),metalnessMapUv:wt&&g(E.metalnessMap.channel),roughnessMapUv:T&&g(E.roughnessMap.channel),anisotropyMapUv:nt&&g(E.anisotropyMap.channel),clearcoatMapUv:ft&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(E.sheenRoughnessMap.channel),specularMapUv:Xt&&g(E.specularMap.channel),specularColorMapUv:Ot&&g(E.specularColorMap.channel),specularIntensityMapUv:oe&&g(E.specularIntensityMap.channel),transmissionMapUv:I&&g(E.transmissionMap.channel),thicknessMapUv:ct&&g(E.thicknessMap.channel),alphaMapUv:J&&g(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Vt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(ce||J),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:ce&&E.map.isVideoTexture===!0&&qt.getTransfer(E.map.colorSpace)===ie,decodeVideoTextureEmissive:ee&&E.emissiveMap.isVideoTexture===!0&&qt.getTransfer(E.emissiveMap.colorSpace)===ie,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===2,flipSided:E.side===1,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Dt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&E.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function f(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(S(M,E),v(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function S(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const M=m[E.type];let C;if(M){const U=Ke[M];C=Ic.clone(U.uniforms)}else C=E.uniforms;return C}function L(E,M){let C;for(let U=0,z=h.length;U<z;U++){const k=h[U];if(k.cacheKey===M){C=k,++C.usedTimes;break}}return C===void 0&&(C=new Yd(i,M,E,r),h.push(C)),C}function b(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function P(){c.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:x,acquireProgram:L,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:P}}function Jd(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function jd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function zo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Go(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,m,g,_){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:g,group:_},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=g,f.group=_),t++,f}function a(u,d,p,m,g,_){const f=o(u,d,p,m,g,_);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,m,g,_){const f=o(u,d,p,m,g,_);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||jd),n.length>1&&n.sort(d||zo),s.length>1&&s.sort(d||zo)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Qd(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Go,i.set(n,[o])):s>=r.length?(o=new Go,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function tf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Yt};break;case"SpotLight":e={position:new R,direction:new R,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function ef(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let nf=0;function sf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function rf(i){const t=new tf,e=ef(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new re,o=new re;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,m=0,g=0,_=0,f=0,S=0,v=0,x=0,L=0,b=0,A=0;l.sort(sf);for(let E=0,M=l.length;E<M;E++){const C=l[E],U=C.color,z=C.intensity,k=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*z,u+=U.g*z,d+=U.b*z;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],z);A++}else if(C.isDirectionalLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,q=e.get(C);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=Y,p++}else if(C.isSpotLight){const Y=t.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(U).multiplyScalar(z),Y.distance=k,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[g]=Y;const Q=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,Q.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[g]=Q.matrix,C.castShadow){const q=e.get(C);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.spotShadow[g]=q,n.spotShadowMap[g]=G,x++}g++}else if(C.isRectAreaLight){const Y=t.get(C);Y.color.copy(U).multiplyScalar(z),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[_]=Y,_++}else if(C.isPointLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const Q=C.shadow,q=e.get(C);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=C.shadow.matrix,v++}n.point[m]=Y,m++}else if(C.isHemisphereLight){const Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(z),Y.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[f]=Y,f++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==m||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==f||P.numDirectionalShadows!==S||P.numPointShadows!==v||P.numSpotShadows!==x||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=_,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+L-b,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,P.directionalLength=p,P.pointLength=m,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=f,P.numDirectionalShadows=S,P.numPointShadows=v,P.numSpotShadows=x,P.numSpotMaps=L,P.numLightProbes=A,n.version=nf++)}function c(l,h){let u=0,d=0,p=0,m=0,g=0;const _=h.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const v=l[f];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),u++}else if(v.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),p++}else if(v.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),o.identity(),r.copy(v.matrixWorld),r.premultiply(_),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),d++}else if(v.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(_),g++}}}return{setup:a,setupView:c,state:n}}function ko(i){const t=new rf(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function of(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ko(i),t.set(s,[a])):r>=o.length?(a=new ko(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class af extends Fn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cf extends Fn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const lf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hf=`uniform sampler2D shadow_pass;
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
}`;function uf(i,t,e){let n=new Dr;const s=new it,r=new it,o=new se,a=new af({depthPacking:3201}),c=new cf,l={},h=e.maxTextureSize,u={0:1,1:0,2:2},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:lf,fragmentShader:hf}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new xe;m.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new zt(m,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(b,A,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||b.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(0),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=f!==3&&this.type===3,k=f===3&&this.type!==3;for(let G=0,Y=b.length;G<Y;G++){const Q=b[G],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const st=q.getFrameExtents();if(s.multiply(st),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,q.mapSize.y=r.y)),q.map===null||z===!0||k===!0){const yt=this.type!==3?{minFilter:1003,magFilter:1003}:{};q.map!==null&&q.map.dispose(),q.map=new Un(s.x,s.y,yt),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ut=q.getViewportCount();for(let yt=0;yt<ut;yt++){const Nt=q.getViewport(yt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),U.viewport(o),q.updateMatrices(Q,yt),n=q.getFrustum(),x(A,P,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===3&&S(q,P),q.needsUpdate=!1}f=this.type,_.needsUpdate=!1,i.setRenderTarget(E,M,C)};function S(b,A){const P=t.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Un(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,P,p,g,null)}function v(b,A,P,E){let M=null;const C=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const U=M.uuid,z=A.uuid;let k=l[U];k===void 0&&(k={},l[U]=k);let G=k[z];G===void 0&&(G=M.clone(),k[z]=G,A.addEventListener("dispose",L)),M=G}if(M.visible=A.visible,M.wireframe=A.wireframe,E===3?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=P}return M}function x(b,A,P,E,M){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===3)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const z=t.update(b),k=b.material;if(Array.isArray(k)){const G=z.groups;for(let Y=0,Q=G.length;Y<Q;Y++){const q=G[Y],st=k[q.materialIndex];if(st&&st.visible){const ut=v(b,st,E,M);b.onBeforeShadow(i,b,A,P,z,ut,q),i.renderBufferDirect(P,null,z,ut,b,q),b.onAfterShadow(i,b,A,P,z,ut,q)}}}else if(k.visible){const G=v(b,k,E,M);b.onBeforeShadow(i,b,A,P,z,G,null),i.renderBufferDirect(P,null,z,G,b,null),b.onAfterShadow(i,b,A,P,z,G,null)}}const U=b.children;for(let z=0,k=U.length;z<k;z++)x(U[z],A,P,E,M)}function L(b){b.target.removeEventListener("dispose",L);for(const P in l){const E=l[P],M=b.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const df={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function ff(i,t){function e(){let I=!1;const ct=new se;let Z=null;const J=new se(0,0,0,0);return{setMask:function(dt){Z!==dt&&!I&&(i.colorMask(dt,dt,dt,dt),Z=dt)},setLocked:function(dt){I=dt},setClear:function(dt,lt,Dt,fe,we){we===!0&&(dt*=fe,lt*=fe,Dt*=fe),ct.set(dt,lt,Dt,fe),J.equals(ct)===!1&&(i.clearColor(dt,lt,Dt,fe),J.copy(ct))},reset:function(){I=!1,Z=null,J.set(-1,0,0,0)}}}function n(){let I=!1,ct=!1,Z=null,J=null,dt=null;return{setReversed:function(lt){if(ct!==lt){const Dt=t.get("EXT_clip_control");ct?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const fe=dt;dt=null,this.setClear(fe)}ct=lt},getReversed:function(){return ct},setTest:function(lt){lt?ot(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(lt){Z!==lt&&!I&&(i.depthMask(lt),Z=lt)},setFunc:function(lt){if(ct&&(lt=df[lt]),J!==lt){switch(lt){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=lt}},setLocked:function(lt){I=lt},setClear:function(lt){dt!==lt&&(ct&&(lt=1-lt),i.clearDepth(lt),dt=lt)},reset:function(){I=!1,Z=null,J=null,dt=null,ct=!1}}}function s(){let I=!1,ct=null,Z=null,J=null,dt=null,lt=null,Dt=null,fe=null,we=null;return{setTest:function(Qt){I||(Qt?ot(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Qt){ct!==Qt&&!I&&(i.stencilMask(Qt),ct=Qt)},setFunc:function(Qt,ke,tn){(Z!==Qt||J!==ke||dt!==tn)&&(i.stencilFunc(Qt,ke,tn),Z=Qt,J=ke,dt=tn)},setOp:function(Qt,ke,tn){(lt!==Qt||Dt!==ke||fe!==tn)&&(i.stencilOp(Qt,ke,tn),lt=Qt,Dt=ke,fe=tn)},setLocked:function(Qt){I=Qt},setClear:function(Qt){we!==Qt&&(i.clearStencil(Qt),we=Qt)},reset:function(){I=!1,ct=null,Z=null,J=null,dt=null,lt=null,Dt=null,fe=null,we=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],m=null,g=!1,_=null,f=null,S=null,v=null,x=null,L=null,b=null,A=new Yt(0,0,0),P=0,E=!1,M=null,C=null,U=null,z=null,k=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Q=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=Q>=2);let st=null,ut={};const yt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),xt=new se().fromArray(yt),K=new se().fromArray(Nt);function tt(I,ct,Z,J){const dt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(I,lt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<Z;Dt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(ct+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return lt}const gt={};gt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(3),kt(!1),Vt(1),ot(i.CULL_FACE),O(0);function ot(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function bt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function At(I,ct){return u[I]!==ct?(i.bindFramebuffer(I,ct),u[I]=ct,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ft(I,ct){let Z=p,J=!1;if(I){Z=d.get(ct),Z===void 0&&(Z=[],d.set(ct,Z));const dt=I.textures;if(Z.length!==dt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Dt=dt.length;lt<Dt;lt++)Z[lt]=i.COLOR_ATTACHMENT0+lt;Z.length=dt.length,J=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,J=!0);J&&i.drawBuffers(Z)}function ce(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const Gt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Gt[103]=i.MIN,Gt[104]=i.MAX;const ue={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function O(I,ct,Z,J,dt,lt,Dt,fe,we,Qt){if(I===0){g===!0&&(bt(i.BLEND),g=!1);return}if(g===!1&&(ot(i.BLEND),g=!0),I!==5){if(I!==_||Qt!==E){if((f!==100||x!==100)&&(i.blendEquation(i.FUNC_ADD),f=100,x=100),Qt)switch(I){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,v=null,L=null,b=null,A.set(0,0,0),P=0,_=I,E=Qt}return}dt=dt||ct,lt=lt||Z,Dt=Dt||J,(ct!==f||dt!==x)&&(i.blendEquationSeparate(Gt[ct],Gt[dt]),f=ct,x=dt),(Z!==S||J!==v||lt!==L||Dt!==b)&&(i.blendFuncSeparate(ue[Z],ue[J],ue[lt],ue[Dt]),S=Z,v=J,L=lt,b=Dt),(fe.equals(A)===!1||we!==P)&&(i.blendColor(fe.r,fe.g,fe.b,we),A.copy(fe),P=we),_=I,E=!1}function Ae(I,ct){I.side===2?bt(i.CULL_FACE):ot(i.CULL_FACE);let Z=I.side===1;ct&&(Z=!Z),kt(Z),I.blending===1&&I.transparent===!1?O(0):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ee(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function Vt(I){I!==0?(ot(i.CULL_FACE),I!==C&&(I===1?i.cullFace(i.BACK):I===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),C=I}function Tt(I){I!==U&&(Y&&i.lineWidth(I),U=I)}function ee(I,ct,Z){I?(ot(i.POLYGON_OFFSET_FILL),(z!==ct||k!==Z)&&(i.polygonOffset(ct,Z),z=ct,k=Z)):bt(i.POLYGON_OFFSET_FILL)}function wt(I){I?ot(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function T(I){I===void 0&&(I=i.TEXTURE0+G-1),st!==I&&(i.activeTexture(I),st=I)}function y(I,ct,Z){Z===void 0&&(st===null?Z=i.TEXTURE0+G-1:Z=st);let J=ut[Z];J===void 0&&(J={type:void 0,texture:void 0},ut[Z]=J),(J.type!==I||J.texture!==ct)&&(st!==Z&&(i.activeTexture(Z),st=Z),i.bindTexture(I,ct||gt[I]),J.type=I,J.texture=ct)}function D(){const I=ut[st];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function V(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(I){xt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),xt.copy(I))}function mt(I){K.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),K.copy(I))}function Xt(I,ct){let Z=l.get(ct);Z===void 0&&(Z=new WeakMap,l.set(ct,Z));let J=Z.get(I);J===void 0&&(J=i.getUniformBlockIndex(ct,I.name),Z.set(I,J))}function Ot(I,ct){const J=l.get(ct).get(I);c.get(ct)!==J&&(i.uniformBlockBinding(ct,J,I.__bindingPointIndex),c.set(ct,J))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ut={},u={},d=new WeakMap,p=[],m=null,g=!1,_=null,f=null,S=null,v=null,x=null,L=null,b=null,A=new Yt(0,0,0),P=0,E=!1,M=null,C=null,U=null,z=null,k=null,xt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:bt,bindFramebuffer:At,drawBuffers:Ft,useProgram:ce,setBlending:O,setMaterial:Ae,setFlipSided:kt,setCullFace:Vt,setLineWidth:Tt,setPolygonOffset:ee,setScissorTest:wt,activeTexture:T,bindTexture:y,unbindTexture:D,compressedTexImage2D:V,compressedTexImage3D:$,texImage2D:pt,texImage3D:Ct,updateUBOMapping:Xt,uniformBlockBinding:Ot,texStorage2D:Ht,texStorage3D:j,texSubImage2D:H,texSubImage3D:at,compressedTexSubImage2D:nt,compressedTexSubImage3D:ft,scissor:Pt,viewport:mt,reset:oe}}function Vo(i,t,e,n){const s=pf(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/s.components*s.byteLength;case 1029:return i*t/s.components*s.byteLength;case 1030:return i*t*2/s.components*s.byteLength;case 1031:return i*t*2/s.components*s.byteLength;case 1022:return i*t*3/s.components*s.byteLength;case 1023:return i*t*4/s.components*s.byteLength;case 1033:return i*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pf(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function mf(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,y){return p?new OffscreenCanvas(T,y):Es("canvas")}function g(T,y,D){let V=1;const $=wt(T);if(($.width>D||$.height>D)&&(V=D/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const H=Math.floor(V*$.width),at=Math.floor(V*$.height);u===void 0&&(u=m(H,at));const nt=y?m(H,at):u;return nt.width=H,nt.height=at,nt.getContext("2d").drawImage(T,0,0,H,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+H+"x"+at+")."),nt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function _(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(T,y,D,V,$=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let H=y;if(y===i.RED&&(D===i.FLOAT&&(H=i.R32F),D===i.HALF_FLOAT&&(H=i.R16F),D===i.UNSIGNED_BYTE&&(H=i.R8)),y===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.R8UI),D===i.UNSIGNED_SHORT&&(H=i.R16UI),D===i.UNSIGNED_INT&&(H=i.R32UI),D===i.BYTE&&(H=i.R8I),D===i.SHORT&&(H=i.R16I),D===i.INT&&(H=i.R32I)),y===i.RG&&(D===i.FLOAT&&(H=i.RG32F),D===i.HALF_FLOAT&&(H=i.RG16F),D===i.UNSIGNED_BYTE&&(H=i.RG8)),y===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.RG8UI),D===i.UNSIGNED_SHORT&&(H=i.RG16UI),D===i.UNSIGNED_INT&&(H=i.RG32UI),D===i.BYTE&&(H=i.RG8I),D===i.SHORT&&(H=i.RG16I),D===i.INT&&(H=i.RG32I)),y===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.RGB8UI),D===i.UNSIGNED_SHORT&&(H=i.RGB16UI),D===i.UNSIGNED_INT&&(H=i.RGB32UI),D===i.BYTE&&(H=i.RGB8I),D===i.SHORT&&(H=i.RGB16I),D===i.INT&&(H=i.RGB32I)),y===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),D===i.UNSIGNED_INT&&(H=i.RGBA32UI),D===i.BYTE&&(H=i.RGBA8I),D===i.SHORT&&(H=i.RGBA16I),D===i.INT&&(H=i.RGBA32I)),y===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),y===i.RGBA){const at=$?Rs:qt.getTransfer(V);D===i.FLOAT&&(H=i.RGBA32F),D===i.HALF_FLOAT&&(H=i.RGBA16F),D===i.UNSIGNED_BYTE&&(H=at===ie?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function x(T,y){let D;return T?y===null||y===1014||y===1020?D=i.DEPTH24_STENCIL8:y===1015?D=i.DEPTH32F_STENCIL8:y===1012&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===1014||y===1020?D=i.DEPTH_COMPONENT24:y===1015?D=i.DEPTH_COMPONENT32F:y===1012&&(D=i.DEPTH_COMPONENT16),D}function L(T,y){return _(T)===!0||T.isFramebufferTexture&&T.minFilter!==1003&&T.minFilter!==1006?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function b(T){const y=T.target;y.removeEventListener("dispose",b),P(y),y.isVideoTexture&&h.delete(y)}function A(T){const y=T.target;y.removeEventListener("dispose",A),M(y)}function P(T){const y=n.get(T);if(y.__webglInit===void 0)return;const D=T.source,V=d.get(D);if(V){const $=V[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(T),Object.keys(V).length===0&&d.delete(D)}n.remove(T)}function E(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const D=T.source,V=d.get(D);delete V[y.__cacheKey],o.memory.textures--}function M(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let $=0;$<y.__webglFramebuffer[V].length;$++)i.deleteFramebuffer(y.__webglFramebuffer[V][$]);else i.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)i.deleteFramebuffer(y.__webglFramebuffer[V]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const D=T.textures;for(let V=0,$=D.length;V<$;V++){const H=n.get(D[V]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(D[V])}n.remove(T)}let C=0;function U(){C=0}function z(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function k(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function G(T,y){const D=n.get(T);if(T.isVideoTexture&&Tt(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){const V=T.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(D,T,y);return}}e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+y)}function Y(T,y){const D=n.get(T);if(T.version>0&&D.__version!==T.version){K(D,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+y)}function Q(T,y){const D=n.get(T);if(T.version>0&&D.__version!==T.version){K(D,T,y);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+y)}function q(T,y){const D=n.get(T);if(T.version>0&&D.__version!==T.version){tt(D,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+y)}const st={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},ut={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},yt={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Nt(T,y){if(y.type===1015&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===1006||y.magFilter===1007||y.magFilter===1005||y.magFilter===1008||y.minFilter===1006||y.minFilter===1007||y.minFilter===1005||y.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,st[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,st[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,st[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ut[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ut[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,yt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===1003||y.minFilter!==1005&&y.minFilter!==1008||y.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function xt(T,y){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",b));const V=y.source;let $=d.get(V);$===void 0&&($={},d.set(V,$));const H=k(y);if(H!==T.__cacheKey){$[H]===void 0&&($[H]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),$[H].usedTimes++;const at=$[T.__cacheKey];at!==void 0&&($[T.__cacheKey].usedTimes--,at.usedTimes===0&&E(y)),T.__cacheKey=H,T.__webglTexture=$[H].texture}return D}function K(T,y,D){let V=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=i.TEXTURE_3D);const $=xt(T,y),H=y.source;e.bindTexture(V,T.__webglTexture,i.TEXTURE0+D);const at=n.get(H);if(H.version!==at.__version||$===!0){e.activeTexture(i.TEXTURE0+D);const nt=qt.getPrimaries(qt.workingColorSpace),ft=y.colorSpace===xn?null:qt.getPrimaries(y.colorSpace),Ht=y.colorSpace===xn||nt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let j=g(y.image,!1,s.maxTextureSize);j=ee(y,j);const pt=r.convert(y.format,y.colorSpace),Ct=r.convert(y.type);let Pt=v(y.internalFormat,pt,Ct,y.colorSpace,y.isVideoTexture);Nt(V,y);let mt;const Xt=y.mipmaps,Ot=y.isVideoTexture!==!0,oe=at.__version===void 0||$===!0,I=H.dataReady,ct=L(y,j);if(y.isDepthTexture)Pt=x(y.format===1027,y.type),oe&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Pt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,Pt,j.width,j.height,0,pt,Ct,null));else if(y.isDataTexture)if(Xt.length>0){Ot&&oe&&e.texStorage2D(i.TEXTURE_2D,ct,Pt,Xt[0].width,Xt[0].height);for(let Z=0,J=Xt.length;Z<J;Z++)mt=Xt[Z],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(i.TEXTURE_2D,Z,Pt,mt.width,mt.height,0,pt,Ct,mt.data);y.generateMipmaps=!1}else Ot?(oe&&e.texStorage2D(i.TEXTURE_2D,ct,Pt,j.width,j.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,pt,Ct,j.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,j.width,j.height,0,pt,Ct,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ot&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Pt,Xt[0].width,Xt[0].height,j.depth);for(let Z=0,J=Xt.length;Z<J;Z++)if(mt=Xt[Z],y.format!==1023)if(pt!==null)if(Ot){if(I)if(y.layerUpdates.size>0){const dt=Vo(mt.width,mt.height,y.format,y.type);for(const lt of y.layerUpdates){const Dt=mt.data.subarray(lt*dt/mt.data.BYTES_PER_ELEMENT,(lt+1)*dt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,lt,mt.width,mt.height,1,pt,Dt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,mt.width,mt.height,j.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Pt,mt.width,mt.height,j.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,mt.width,mt.height,j.depth,pt,Ct,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Pt,mt.width,mt.height,j.depth,0,pt,Ct,mt.data)}else{Ot&&oe&&e.texStorage2D(i.TEXTURE_2D,ct,Pt,Xt[0].width,Xt[0].height);for(let Z=0,J=Xt.length;Z<J;Z++)mt=Xt[Z],y.format!==1023?pt!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?I&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(i.TEXTURE_2D,Z,Pt,mt.width,mt.height,0,pt,Ct,mt.data)}else if(y.isDataArrayTexture)if(Ot){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Pt,j.width,j.height,j.depth),I)if(y.layerUpdates.size>0){const Z=Vo(j.width,j.height,y.format,y.type);for(const J of y.layerUpdates){const dt=j.data.subarray(J*Z/j.data.BYTES_PER_ELEMENT,(J+1)*Z/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,j.width,j.height,1,pt,Ct,dt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pt,Ct,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,j.width,j.height,j.depth,0,pt,Ct,j.data);else if(y.isData3DTexture)Ot?(oe&&e.texStorage3D(i.TEXTURE_3D,ct,Pt,j.width,j.height,j.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pt,Ct,j.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,j.width,j.height,j.depth,0,pt,Ct,j.data);else if(y.isFramebufferTexture){if(oe)if(Ot)e.texStorage2D(i.TEXTURE_2D,ct,Pt,j.width,j.height);else{let Z=j.width,J=j.height;for(let dt=0;dt<ct;dt++)e.texImage2D(i.TEXTURE_2D,dt,Pt,Z,J,0,pt,Ct,null),Z>>=1,J>>=1}}else if(Xt.length>0){if(Ot&&oe){const Z=wt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Pt,Z.width,Z.height)}for(let Z=0,J=Xt.length;Z<J;Z++)mt=Xt[Z],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,pt,Ct,mt):e.texImage2D(i.TEXTURE_2D,Z,Pt,pt,Ct,mt);y.generateMipmaps=!1}else if(Ot){if(oe){const Z=wt(j);e.texStorage2D(i.TEXTURE_2D,ct,Pt,Z.width,Z.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Ct,j)}else e.texImage2D(i.TEXTURE_2D,0,Pt,pt,Ct,j);_(y)&&f(V),at.__version=H.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function tt(T,y,D){if(y.image.length!==6)return;const V=xt(T,y),$=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+D);const H=n.get($);if($.version!==H.__version||V===!0){e.activeTexture(i.TEXTURE0+D);const at=qt.getPrimaries(qt.workingColorSpace),nt=y.colorSpace===xn?null:qt.getPrimaries(y.colorSpace),ft=y.colorSpace===xn||at===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Ht=y.isCompressedTexture||y.image[0].isCompressedTexture,j=y.image[0]&&y.image[0].isDataTexture,pt=[];for(let J=0;J<6;J++)!Ht&&!j?pt[J]=g(y.image[J],!0,s.maxCubemapSize):pt[J]=j?y.image[J].image:y.image[J],pt[J]=ee(y,pt[J]);const Ct=pt[0],Pt=r.convert(y.format,y.colorSpace),mt=r.convert(y.type),Xt=v(y.internalFormat,Pt,mt,y.colorSpace),Ot=y.isVideoTexture!==!0,oe=H.__version===void 0||V===!0,I=$.dataReady;let ct=L(y,Ct);Nt(i.TEXTURE_CUBE_MAP,y);let Z;if(Ht){Ot&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Xt,Ct.width,Ct.height);for(let J=0;J<6;J++){Z=pt[J].mipmaps;for(let dt=0;dt<Z.length;dt++){const lt=Z[dt];y.format!==1023?Pt!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,lt.width,lt.height,Pt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Xt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,lt.width,lt.height,Pt,mt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Xt,lt.width,lt.height,0,Pt,mt,lt.data)}}}else{if(Z=y.mipmaps,Ot&&oe){Z.length>0&&ct++;const J=wt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Xt,J.width,J.height)}for(let J=0;J<6;J++)if(j){Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pt[J].width,pt[J].height,Pt,mt,pt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,pt[J].width,pt[J].height,0,Pt,mt,pt[J].data);for(let dt=0;dt<Z.length;dt++){const Dt=Z[dt].image[J].image;Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Dt.width,Dt.height,Pt,mt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Xt,Dt.width,Dt.height,0,Pt,mt,Dt.data)}}else{Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pt,mt,pt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,Pt,mt,pt[J]);for(let dt=0;dt<Z.length;dt++){const lt=Z[dt];Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Pt,mt,lt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Xt,Pt,mt,lt.image[J])}}}_(y)&&f(i.TEXTURE_CUBE_MAP),H.__version=$.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function gt(T,y,D,V,$,H){const at=r.convert(D.format,D.colorSpace),nt=r.convert(D.type),ft=v(D.internalFormat,at,nt,D.colorSpace),Ht=n.get(y),j=n.get(D);if(j.__renderTarget=y,!Ht.__hasExternalTextures){const pt=Math.max(1,y.width>>H),Ct=Math.max(1,y.height>>H);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,H,ft,pt,Ct,y.depth,0,at,nt,null):e.texImage2D($,H,ft,pt,Ct,0,at,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Vt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,$,j.__webglTexture,0,kt(y)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,$,j.__webglTexture,H),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(T,y,D){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){const V=y.depthTexture,$=V&&V.isDepthTexture?V.type:null,H=x(y.stencilBuffer,$),at=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=kt(y);Vt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,H,y.width,y.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,H,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,H,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,T)}else{const V=y.textures;for(let $=0;$<V.length;$++){const H=V[$],at=r.convert(H.format,H.colorSpace),nt=r.convert(H.type),ft=v(H.internalFormat,at,nt,H.colorSpace),Ht=kt(y);D&&Vt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,ft,y.width,y.height):Vt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,ft,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ft,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(y.depthTexture);V.__renderTarget=y,(!V.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);const $=V.__webglTexture,H=kt(y);if(y.depthTexture.format===1026)Vt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(y.depthTexture.format===1027)Vt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function At(T){const y=n.get(T),D=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const V=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){const $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=V}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");bt(y.__webglFramebuffer,T)}else if(D){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=i.createRenderbuffer(),ot(y.__webglDepthbuffer[V],T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,H)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ot(y.__webglDepthbuffer,T,!1);else{const V=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,$)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(T,y,D){const V=n.get(T);y!==void 0&&gt(V.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&At(T)}function ce(T){const y=T.texture,D=n.get(T),V=n.get(y);T.addEventListener("dispose",A);const $=T.textures,H=T.isWebGLCubeRenderTarget===!0,at=$.length>1;if(at||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=y.version,o.memory.textures++),H){D.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer[nt]=[];for(let ft=0;ft<y.mipmaps.length;ft++)D.__webglFramebuffer[nt][ft]=i.createFramebuffer()}else D.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer=[];for(let nt=0;nt<y.mipmaps.length;nt++)D.__webglFramebuffer[nt]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(at)for(let nt=0,ft=$.length;nt<ft;nt++){const Ht=n.get($[nt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Vt(T)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let nt=0;nt<$.length;nt++){const ft=$[nt];D.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[nt]);const Ht=r.convert(ft.format,ft.colorSpace),j=r.convert(ft.type),pt=v(ft.internalFormat,Ht,j,ft.colorSpace,T.isXRRenderTarget===!0),Ct=kt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,pt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,D.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(D.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,y);for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)gt(D.__webglFramebuffer[nt][ft],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft);else gt(D.__webglFramebuffer[nt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);_(y)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let nt=0,ft=$.length;nt<ft;nt++){const Ht=$[nt],j=n.get(Ht);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),Nt(i.TEXTURE_2D,Ht),gt(D.__webglFramebuffer,T,Ht,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,0),_(Ht)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(nt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,V.__webglTexture),Nt(nt,y),y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)gt(D.__webglFramebuffer[ft],T,y,i.COLOR_ATTACHMENT0,nt,ft);else gt(D.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,nt,0);_(y)&&f(nt),e.unbindTexture()}T.depthBuffer&&At(T)}function Gt(T){const y=T.textures;for(let D=0,V=y.length;D<V;D++){const $=y[D];if(_($)){const H=S(T),at=n.get($).__webglTexture;e.bindTexture(H,at),f(H),e.unbindTexture()}}}const ue=[],O=[];function Ae(T){if(T.samples>0){if(Vt(T)===!1){const y=T.textures,D=T.width,V=T.height;let $=i.COLOR_BUFFER_BIT;const H=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(T),nt=y.length>1;if(nt)for(let ft=0;ft<y.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ft=0;ft<y.length;ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[ft]);const Ht=n.get(y[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,D,V,0,0,D,V,$,i.NEAREST),c===!0&&(ue.length=0,O.length=0,ue.push(i.COLOR_ATTACHMENT0+ft),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ue.push(H),O.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let ft=0;ft<y.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,at.__webglColorRenderbuffer[ft]);const Ht=n.get(y[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function kt(T){return Math.min(s.maxSamples,T.samples)}function Vt(T){const y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Tt(T){const y=o.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function ee(T,y){const D=T.colorSpace,V=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==hi&&D!==xn&&(qt.getTransfer(D)===ie?(V!==1023||$!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),y}function wt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=q,this.rebindTextures=Ft,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Vt}function _f(i,t){function e(n,s=xn){let r;const o=qt.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class gf extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _t extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xf={type:"move"};class ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const _=e.getJointPose(g,n),f=this._getHandJoint(l,g);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const vf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vn({vertexShader:vf,fragmentShader:Mf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new Ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yf extends ui{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null;const g=new Sf,_=e.getContextAttributes();let f=null,S=null;const v=[],x=[],L=new it;let b=null;const A=new Ge;A.viewport=new se;const P=new Ge;P.viewport=new se;const E=[A,P],M=new gf;let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let tt=v[K];return tt===void 0&&(tt=new ar,v[K]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(K){let tt=v[K];return tt===void 0&&(tt=new ar,v[K]=tt),tt.getGripSpace()},this.getHand=function(K){let tt=v[K];return tt===void 0&&(tt=new ar,v[K]=tt),tt.getHandSpace()};function z(K){const tt=x.indexOf(K.inputSource);if(tt===-1)return;const gt=v[tt];gt!==void 0&&(gt.update(K.inputSource,K.frame,l||o),gt.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",G);for(let K=0;K<v.length;K++){const tt=x[K];tt!==null&&(x[K]=null,v[K].disconnect(tt))}C=null,U=null,g.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,S=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",k),s.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const tt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Un(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let tt=null,gt=null,ot=null;_.depth&&(ot=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=_.stencil?1027:1026,gt=_.stencil?1020:1014);const bt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Un(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new ba(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),xt.setContext(s),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(K){for(let tt=0;tt<K.removed.length;tt++){const gt=K.removed[tt],ot=x.indexOf(gt);ot>=0&&(x[ot]=null,v[ot].disconnect(gt))}for(let tt=0;tt<K.added.length;tt++){const gt=K.added[tt];let ot=x.indexOf(gt);if(ot===-1){for(let At=0;At<v.length;At++)if(At>=x.length){x.push(gt),ot=At;break}else if(x[At]===null){x[At]=gt,ot=At;break}if(ot===-1)break}const bt=v[ot];bt&&bt.connect(gt)}}const Y=new R,Q=new R;function q(K,tt,gt){Y.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(gt.matrixWorld);const ot=Y.distanceTo(Q),bt=tt.projectionMatrix.elements,At=gt.projectionMatrix.elements,Ft=bt[14]/(bt[10]-1),ce=bt[14]/(bt[10]+1),Gt=(bt[9]+1)/bt[5],ue=(bt[9]-1)/bt[5],O=(bt[8]-1)/bt[0],Ae=(At[8]+1)/At[0],kt=Ft*O,Vt=Ft*Ae,Tt=ot/(-O+Ae),ee=Tt*-O;if(tt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ee),K.translateZ(Tt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),bt[10]===-1)K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const wt=Ft+Tt,T=ce+Tt,y=kt-ee,D=Vt+(ot-ee),V=Gt*ce/T*wt,$=ue*ce/T*wt;K.projectionMatrix.makePerspective(y,D,V,$,wt,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function st(K,tt){tt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(tt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let tt=K.near,gt=K.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),M.near=P.near=A.near=tt,M.far=P.far=A.far=gt,(C!==M.near||U!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,U=M.far),A.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const ot=K.parent,bt=M.cameras;st(M,ot);for(let At=0;At<bt.length;At++)st(bt[At],ot);bt.length===2?q(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),ut(K,M,ot)};function ut(K,tt,gt){gt===null?K.matrix.copy(tt.matrixWorld):(K.matrix.copy(gt.matrixWorld),K.matrix.invert(),K.matrix.multiply(tt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ui*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let yt=null;function Nt(K,tt){if(h=tt.getViewerPose(l||o),m=tt,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let ot=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let At=0;At<gt.length;At++){const Ft=gt[At];let ce=null;if(p!==null)ce=p.getViewport(Ft);else{const ue=u.getViewSubImage(d,Ft);ce=ue.viewport,At===0&&(t.setRenderTargetTextures(S,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(S))}let Gt=E[At];Gt===void 0&&(Gt=new Ge,Gt.layers.enable(At),Gt.viewport=new se,E[At]=Gt),Gt.matrix.fromArray(Ft.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ft.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ce.x,ce.y,ce.width,ce.height),At===0&&(M.matrix.copy(Gt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(Gt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const At=u.getDepthInformation(gt[0]);At&&At.isValid&&At.texture&&g.init(t,At,s.renderState)}}for(let gt=0;gt<v.length;gt++){const ot=x[gt],bt=v[gt];ot!==null&&bt!==void 0&&bt.update(ot,tt,l||o)}yt&&yt(K,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}const xt=new Ta;xt.setAnimationLoop(Nt),this.setAnimationLoop=function(K){yt=K},this.dispose=function(){}}}const bn=new je,Ef=new re;function wf(i,t){function e(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function n(_,f){f.color.getRGB(_.fogColor.value,ya(i)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function s(_,f,S,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(_,f):f.isMeshToonMaterial?(r(_,f),u(_,f)):f.isMeshPhongMaterial?(r(_,f),h(_,f)):f.isMeshStandardMaterial?(r(_,f),d(_,f),f.isMeshPhysicalMaterial&&p(_,f,x)):f.isMeshMatcapMaterial?(r(_,f),m(_,f)):f.isMeshDepthMaterial?r(_,f):f.isMeshDistanceMaterial?(r(_,f),g(_,f)):f.isMeshNormalMaterial?r(_,f):f.isLineBasicMaterial?(o(_,f),f.isLineDashedMaterial&&a(_,f)):f.isPointsMaterial?c(_,f,S,v):f.isSpriteMaterial?l(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,e(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===1&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,e(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===1&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,e(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,e(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const S=t.get(f),v=S.envMap,x=S.envMapRotation;v&&(_.envMap.value=v,bn.copy(x),bn.x*=-1,bn.y*=-1,bn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),_.envMapRotation.value.setFromMatrix4(Ef.makeRotationFromEuler(bn)),_.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,_.aoMapTransform))}function o(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform))}function a(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function c(_,f,S,v){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*S,_.scale.value=v*.5,f.map&&(_.map.value=f.map,e(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function l(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function h(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function u(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function d(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function p(_,f,S){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,f){f.matcap&&(_.matcap.value=f.matcap)}function g(_,f){const S=t.get(f).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tf(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,v){const x=v.program;n.uniformBlockBinding(S,x)}function l(S,v){let x=s[S.id];x===void 0&&(m(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",_));const L=v.program;n.updateUBOMapping(S,L);const b=t.render.frame;r[S.id]!==b&&(d(S),r[S.id]=b)}function h(S){const v=u();S.__bindingPointIndex=v;const x=i.createBuffer(),L=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=s[S.id],x=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,A=x.length;b<A;b++){const P=Array.isArray(x[b])?x[b]:[x[b]];for(let E=0,M=P.length;E<M;E++){const C=P[E];if(p(C,b,E,L)===!0){const U=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let G=0;G<z.length;G++){const Y=z[G],Q=g(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,U+k,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,k),k+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,v,x,L){const b=S.value,A=v+"_"+x;if(L[A]===void 0)return typeof b=="number"||typeof b=="boolean"?L[A]=b:L[A]=b.clone(),!0;{const P=L[A];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return L[A]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function m(S){const v=S.uniforms;let x=0;const L=16;for(let A=0,P=v.length;A<P;A++){const E=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,C=E.length;M<C;M++){const U=E[M],z=Array.isArray(U.value)?U.value:[U.value];for(let k=0,G=z.length;k<G;k++){const Y=z[k],Q=g(Y),q=x%L,st=q%Q.boundary,ut=q+st;x+=st,ut!==0&&L-ut<Q.storage&&(x+=L-ut),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=Q.storage}}}const b=x%L;return b>0&&(x+=L-b),S.__size=x,S.__cache={},this}function g(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function _(S){const v=S.target;v.removeEventListener("dispose",_);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class bf{constructor(t={}){const{canvas:e=fc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=0,this.toneMappingExposure=1;const x=this;let L=!1,b=0,A=0,P=null,E=-1,M=null;const C=new se,U=new se;let z=null;const k=new Yt(0);let G=0,Y=e.width,Q=e.height,q=1,st=null,ut=null;const yt=new se(0,0,Y,Q),Nt=new se(0,0,Y,Q);let xt=!1;const K=new Dr;let tt=!1,gt=!1;const ot=new re,bt=new re,At=new R,Ft=new se,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function ue(){return P===null?q:1}let O=n;function Ae(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rr}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),O===null){const N="webgl2";if(O=Ae(N,w),O===null)throw Ae(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let kt,Vt,Tt,ee,wt,T,y,D,V,$,H,at,nt,ft,Ht,j,pt,Ct,Pt,mt,Xt,Ot,oe,I;function ct(){kt=new Pu(O),kt.init(),Ot=new _f(O,kt),Vt=new wu(O,kt,t,Ot),Tt=new ff(O,kt),Vt.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),ee=new Iu(O),wt=new Jd,T=new mf(O,kt,Tt,wt,Vt,Ot,ee),y=new bu(x),D=new Cu(x),V=new Gc(O),oe=new yu(O,V),$=new Lu(O,V,ee,oe),H=new Nu(O,$,V,ee),Pt=new Uu(O,Vt,T),j=new Tu(wt),at=new $d(x,y,D,kt,Vt,oe,j),nt=new wf(x,wt),ft=new Qd,Ht=new of(kt),Ct=new Su(x,y,D,Tt,H,p,c),pt=new uf(x,H,Vt),I=new Tf(O,ee,Vt,Tt),mt=new Eu(O,kt,ee),Xt=new Du(O,kt,ee),ee.programs=at.programs,x.capabilities=Vt,x.extensions=kt,x.properties=wt,x.renderLists=ft,x.shadowMap=pt,x.state=Tt,x.info=ee}ct();const Z=new yf(x,O);this.xr=Z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(Y,Q,!1))},this.getSize=function(w){return w.set(Y,Q)},this.setSize=function(w,N,W=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,Q=N,e.width=Math.floor(w*q),e.height=Math.floor(N*q),W===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(Y*q,Q*q).floor()},this.setDrawingBufferSize=function(w,N,W){Y=w,Q=N,q=W,e.width=Math.floor(w*W),e.height=Math.floor(N*W),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(yt)},this.setViewport=function(w,N,W,X){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,N,W,X),Tt.viewport(C.copy(yt).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(Nt)},this.setScissor=function(w,N,W,X){w.isVector4?Nt.set(w.x,w.y,w.z,w.w):Nt.set(w,N,W,X),Tt.scissor(U.copy(Nt).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(w){Tt.setScissorTest(xt=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){ut=w},this.getClearColor=function(w){return w.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(w=!0,N=!0,W=!0){let X=0;if(w){let F=!1;if(P!==null){const et=P.texture.format;F=et===1033||et===1031||et===1029}if(F){const et=P.texture.type,ht=et===1009||et===1014||et===1012||et===1020||et===1017||et===1018,vt=Ct.getClearColor(),Mt=Ct.getClearAlpha(),Lt=vt.r,It=vt.g,St=vt.b;ht?(m[0]=Lt,m[1]=It,m[2]=St,m[3]=Mt,O.clearBufferuiv(O.COLOR,0,m)):(g[0]=Lt,g[1]=It,g[2]=St,g[3]=Mt,O.clearBufferiv(O.COLOR,0,g))}else X|=O.COLOR_BUFFER_BIT}N&&(X|=O.DEPTH_BUFFER_BIT),W&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ft.dispose(),Ht.dispose(),wt.dispose(),y.dispose(),D.dispose(),H.dispose(),oe.dispose(),I.dispose(),at.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",kr),Z.removeEventListener("sessionend",Vr),Mn.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=ee.autoReset,N=pt.enabled,W=pt.autoUpdate,X=pt.needsUpdate,F=pt.type;ct(),ee.autoReset=w,pt.enabled=N,pt.autoUpdate=W,pt.needsUpdate=X,pt.type=F}function lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Dt(w){const N=w.target;N.removeEventListener("dispose",Dt),fe(N)}function fe(w){we(w),wt.remove(w)}function we(w){const N=wt.get(w).programs;N!==void 0&&(N.forEach(function(W){at.releaseProgram(W)}),w.isShaderMaterial&&at.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,W,X,F,et){N===null&&(N=ce);const ht=F.isMesh&&F.matrixWorld.determinant()<0,vt=Za(w,N,W,X,F);Tt.setMaterial(X,ht);let Mt=W.index,Lt=1;if(X.wireframe===!0){if(Mt=$.getWireframeAttribute(W),Mt===void 0)return;Lt=2}const It=W.drawRange,St=W.attributes.position;let Zt=It.start*Lt,ae=(It.start+It.count)*Lt;et!==null&&(Zt=Math.max(Zt,et.start*Lt),ae=Math.min(ae,(et.start+et.count)*Lt)),Mt!==null?(Zt=Math.max(Zt,0),ae=Math.min(ae,Mt.count)):St!=null&&(Zt=Math.max(Zt,0),ae=Math.min(ae,St.count));const le=ae-Zt;if(le<0||le===1/0)return;oe.setup(F,X,vt,W,Mt);let De,$t=mt;if(Mt!==null&&(De=V.get(Mt),$t=Xt,$t.setIndex(De)),F.isMesh)X.wireframe===!0?(Tt.setLineWidth(X.wireframeLinewidth*ue()),$t.setMode(O.LINES)):$t.setMode(O.TRIANGLES);else if(F.isLine){let Et=X.linewidth;Et===void 0&&(Et=1),Tt.setLineWidth(Et*ue()),F.isLineSegments?$t.setMode(O.LINES):F.isLineLoop?$t.setMode(O.LINE_LOOP):$t.setMode(O.LINE_STRIP)}else F.isPoints?$t.setMode(O.POINTS):F.isSprite&&$t.setMode(O.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)$t.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))$t.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Et=F._multiDrawStarts,en=F._multiDrawCounts,Jt=F._multiDrawCount,Ve=Mt?V.get(Mt).bytesPerElement:1,On=wt.get(X).currentProgram.getUniforms();for(let Ie=0;Ie<Jt;Ie++)On.setValue(O,"_gl_DrawID",Ie),$t.render(Et[Ie]/Ve,en[Ie])}else if(F.isInstancedMesh)$t.renderInstances(Zt,le,F.count);else if(W.isInstancedBufferGeometry){const Et=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,en=Math.min(W.instanceCount,Et);$t.renderInstances(Zt,le,en)}else $t.render(Zt,le)};function Qt(w,N,W){w.transparent===!0&&w.side===2&&w.forceSinglePass===!1?(w.side=1,w.needsUpdate=!0,Vi(w,N,W),w.side=0,w.needsUpdate=!0,Vi(w,N,W),w.side=2):Vi(w,N,W)}this.compile=function(w,N,W=null){W===null&&(W=w),f=Ht.get(W),f.init(N),v.push(f),W.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),w!==W&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const X=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const et=F.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){const vt=et[ht];Qt(vt,W,F),X.add(vt)}else Qt(et,W,F),X.add(et)}),v.pop(),f=null,X},this.compileAsync=function(w,N,W=null){const X=this.compile(w,N,W);return new Promise(F=>{function et(){if(X.forEach(function(ht){wt.get(ht).currentProgram.isReady()&&X.delete(ht)}),X.size===0){F(w);return}setTimeout(et,10)}kt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ke=null;function tn(w){ke&&ke(w)}function kr(){Mn.stop()}function Vr(){Mn.start()}const Mn=new Ta;Mn.setAnimationLoop(tn),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(w){ke=w,Z.setAnimationLoop(w),w===null?Mn.stop():Mn.start()},Z.addEventListener("sessionstart",kr),Z.addEventListener("sessionend",Vr),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(N),N=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,P),f=Ht.get(w,v.length),f.init(N),v.push(f),bt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(bt),gt=this.localClippingEnabled,tt=j.init(this.clippingPlanes,gt),_=ft.get(w,S.length),_.init(),S.push(_),Z.enabled===!0&&Z.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&Us(et,N,-1/0,x.sortObjects)}Us(w,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(st,ut),Gt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Gt&&Ct.addToRenderList(_,w),this.info.render.frame++,tt===!0&&j.beginShadows();const W=f.state.shadowsArray;pt.render(W,w,N),tt===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,F=_.transmissive;if(f.setupLights(),N.isArrayCamera){const et=N.cameras;if(F.length>0)for(let ht=0,vt=et.length;ht<vt;ht++){const Mt=et[ht];Wr(X,F,w,Mt)}Gt&&Ct.render(w);for(let ht=0,vt=et.length;ht<vt;ht++){const Mt=et[ht];Hr(_,w,Mt,Mt.viewport)}}else F.length>0&&Wr(X,F,w,N),Gt&&Ct.render(w),Hr(_,w,N);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(x,w,N),oe.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(f=v[v.length-1],tt===!0&&j.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?_=S[S.length-1]:_=null};function Us(w,N,W,X){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){X&&Ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(bt);const ht=H.update(w),vt=w.material;vt.visible&&_.push(w,ht,vt,W,Ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const ht=H.update(w),vt=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ft.copy(w.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ft.copy(ht.boundingSphere.center)),Ft.applyMatrix4(w.matrixWorld).applyMatrix4(bt)),Array.isArray(vt)){const Mt=ht.groups;for(let Lt=0,It=Mt.length;Lt<It;Lt++){const St=Mt[Lt],Zt=vt[St.materialIndex];Zt&&Zt.visible&&_.push(w,ht,Zt,W,Ft.z,St)}}else vt.visible&&_.push(w,ht,vt,W,Ft.z,null)}}const et=w.children;for(let ht=0,vt=et.length;ht<vt;ht++)Us(et[ht],N,W,X)}function Hr(w,N,W,X){const F=w.opaque,et=w.transmissive,ht=w.transparent;f.setupLightsView(W),tt===!0&&j.setGlobalState(x.clippingPlanes,W),X&&Tt.viewport(C.copy(X)),F.length>0&&ki(F,N,W),et.length>0&&ki(et,N,W),ht.length>0&&ki(ht,N,W),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Wr(w,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new Un(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const et=f.state.transmissionRenderTarget[X.id],ht=X.viewport||C;et.setSize(ht.z,ht.w);const vt=x.getRenderTarget();x.setRenderTarget(et),x.getClearColor(k),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),Gt&&Ct.render(W);const Mt=x.toneMapping;x.toneMapping=0;const Lt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),tt===!0&&j.setGlobalState(x.clippingPlanes,X),ki(w,W,X),T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et),kt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let St=0,Zt=N.length;St<Zt;St++){const ae=N[St],le=ae.object,De=ae.geometry,$t=ae.material,Et=ae.group;if($t.side===2&&le.layers.test(X.layers)){const en=$t.side;$t.side=1,$t.needsUpdate=!0,Xr(le,W,X,De,$t,Et),$t.side=en,$t.needsUpdate=!0,It=!0}}It===!0&&(T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et))}x.setRenderTarget(vt),x.setClearColor(k,G),Lt!==void 0&&(X.viewport=Lt),x.toneMapping=Mt}function ki(w,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let F=0,et=w.length;F<et;F++){const ht=w[F],vt=ht.object,Mt=ht.geometry,Lt=X===null?ht.material:X,It=ht.group;vt.layers.test(W.layers)&&Xr(vt,N,W,Mt,Lt,It)}}function Xr(w,N,W,X,F,et){w.onBeforeRender(x,N,W,X,F,et),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,N,W,X,w,et),F.transparent===!0&&F.side===2&&F.forceSinglePass===!1?(F.side=1,F.needsUpdate=!0,x.renderBufferDirect(W,N,X,F,w,et),F.side=0,F.needsUpdate=!0,x.renderBufferDirect(W,N,X,F,w,et),F.side=2):x.renderBufferDirect(W,N,X,F,w,et),w.onAfterRender(x,N,W,X,F,et)}function Vi(w,N,W){N.isScene!==!0&&(N=ce);const X=wt.get(w),F=f.state.lights,et=f.state.shadowsArray,ht=F.state.version,vt=at.getParameters(w,F.state,et,N,W),Mt=at.getProgramCacheKey(vt);let Lt=X.programs;X.environment=w.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(w.isMeshStandardMaterial?D:y).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",Dt),Lt=new Map,X.programs=Lt);let It=Lt.get(Mt);if(It!==void 0){if(X.currentProgram===It&&X.lightsStateVersion===ht)return qr(w,vt),It}else vt.uniforms=at.getUniforms(w),w.onBeforeCompile(vt,x),It=at.acquireProgram(vt,Mt),Lt.set(Mt,It),X.uniforms=vt.uniforms;const St=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(St.clippingPlanes=j.uniform),qr(w,vt),X.needsLights=$a(w),X.lightsStateVersion=ht,X.needsLights&&(St.ambientLightColor.value=F.state.ambient,St.lightProbe.value=F.state.probe,St.directionalLights.value=F.state.directional,St.directionalLightShadows.value=F.state.directionalShadow,St.spotLights.value=F.state.spot,St.spotLightShadows.value=F.state.spotShadow,St.rectAreaLights.value=F.state.rectArea,St.ltc_1.value=F.state.rectAreaLTC1,St.ltc_2.value=F.state.rectAreaLTC2,St.pointLights.value=F.state.point,St.pointLightShadows.value=F.state.pointShadow,St.hemisphereLights.value=F.state.hemi,St.directionalShadowMap.value=F.state.directionalShadowMap,St.directionalShadowMatrix.value=F.state.directionalShadowMatrix,St.spotShadowMap.value=F.state.spotShadowMap,St.spotLightMatrix.value=F.state.spotLightMatrix,St.spotLightMap.value=F.state.spotLightMap,St.pointShadowMap.value=F.state.pointShadowMap,St.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=It,X.uniformsList=null,It}function Yr(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Ss.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function qr(w,N){const W=wt.get(w);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Za(w,N,W,X,F){N.isScene!==!0&&(N=ce),T.resetTextureUnits();const et=N.fog,ht=X.isMeshStandardMaterial?N.environment:null,vt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:hi,Mt=(X.isMeshStandardMaterial?D:y).get(X.envMap||ht),Lt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,It=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),St=!!W.morphAttributes.position,Zt=!!W.morphAttributes.normal,ae=!!W.morphAttributes.color;let le=0;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(le=x.toneMapping);const De=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,$t=De!==void 0?De.length:0,Et=wt.get(X),en=f.state.lights;if(tt===!0&&(gt===!0||w!==M)){const Be=w===M&&X.id===E;j.setState(X,w,Be)}let Jt=!1;X.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==en.state.version||Et.outputColorSpace!==vt||F.isBatchedMesh&&Et.batching===!1||!F.isBatchedMesh&&Et.batching===!0||F.isBatchedMesh&&Et.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Et.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Et.instancing===!1||!F.isInstancedMesh&&Et.instancing===!0||F.isSkinnedMesh&&Et.skinning===!1||!F.isSkinnedMesh&&Et.skinning===!0||F.isInstancedMesh&&Et.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Et.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Et.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Et.instancingMorph===!1&&F.morphTexture!==null||Et.envMap!==Mt||X.fog===!0&&Et.fog!==et||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==j.numPlanes||Et.numIntersection!==j.numIntersection)||Et.vertexAlphas!==Lt||Et.vertexTangents!==It||Et.morphTargets!==St||Et.morphNormals!==Zt||Et.morphColors!==ae||Et.toneMapping!==le||Et.morphTargetsCount!==$t)&&(Jt=!0):(Jt=!0,Et.__version=X.version);let Ve=Et.currentProgram;Jt===!0&&(Ve=Vi(X,N,F));let On=!1,Ie=!1,fi=!1;const he=Ve.getUniforms(),Ze=Et.uniforms;if(Tt.useProgram(Ve.program)&&(On=!0,Ie=!0,fi=!0),X.id!==E&&(E=X.id,Ie=!0),On||M!==w){Tt.buffers.depth.getReversed()?(ot.copy(w.projectionMatrix),mc(ot),_c(ot),he.setValue(O,"projectionMatrix",ot)):he.setValue(O,"projectionMatrix",w.projectionMatrix),he.setValue(O,"viewMatrix",w.matrixWorldInverse);const ln=he.map.cameraPosition;ln!==void 0&&ln.setValue(O,At.setFromMatrixPosition(w.matrixWorld)),Vt.logarithmicDepthBuffer&&he.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&he.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ie=!0,fi=!0)}if(F.isSkinnedMesh){he.setOptional(O,F,"bindMatrix"),he.setOptional(O,F,"bindMatrixInverse");const Be=F.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),he.setValue(O,"boneTexture",Be.boneTexture,T))}F.isBatchedMesh&&(he.setOptional(O,F,"batchingTexture"),he.setValue(O,"batchingTexture",F._matricesTexture,T),he.setOptional(O,F,"batchingIdTexture"),he.setValue(O,"batchingIdTexture",F._indirectTexture,T),he.setOptional(O,F,"batchingColorTexture"),F._colorsTexture!==null&&he.setValue(O,"batchingColorTexture",F._colorsTexture,T));const pi=W.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&Pt.update(F,W,Ve),(Ie||Et.receiveShadow!==F.receiveShadow)&&(Et.receiveShadow=F.receiveShadow,he.setValue(O,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ze.envMap.value=Mt,Ze.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(Ze.envMapIntensity.value=N.environmentIntensity),Ie&&(he.setValue(O,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&Ka(Ze,fi),et&&X.fog===!0&&nt.refreshFogUniforms(Ze,et),nt.refreshMaterialUniforms(Ze,X,q,Q,f.state.transmissionRenderTarget[w.id]),Ss.upload(O,Yr(Et),Ze,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ss.upload(O,Yr(Et),Ze,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&he.setValue(O,"center",F.center),he.setValue(O,"modelViewMatrix",F.modelViewMatrix),he.setValue(O,"normalMatrix",F.normalMatrix),he.setValue(O,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Be=X.uniformsGroups;for(let ln=0,hn=Be.length;ln<hn;ln++){const Zr=Be[ln];I.update(Zr,Ve),I.bind(Zr,Ve)}}return Ve}function Ka(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function $a(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,N,W){wt.get(w.texture).__webglTexture=N,wt.get(w.depthTexture).__webglTexture=W;const X=wt.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const W=wt.get(w);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,W=0){P=w,b=N,A=W;let X=!0,F=null,et=!1,ht=!1;if(w){const Mt=wt.get(w);if(Mt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(O.FRAMEBUFFER,null),X=!1;else if(Mt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Mt.__hasExternalTextures)T.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const St=w.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&wt.has(St)&&(w.width!==St.image.width||w.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ht=!0);const It=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(It[N])?F=It[N][W]:F=It[N],et=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?F=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(It)?F=It[W]:F=It,C.copy(w.viewport),U.copy(w.scissor),z=w.scissorTest}else C.copy(yt).multiplyScalar(q).floor(),U.copy(Nt).multiplyScalar(q).floor(),z=xt;if(Tt.bindFramebuffer(O.FRAMEBUFFER,F)&&X&&Tt.drawBuffers(w,F),Tt.viewport(C),Tt.scissor(U),Tt.setScissorTest(z),et){const Mt=wt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Mt.__webglTexture,W)}else if(ht){const Mt=wt.get(w.texture),Lt=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Mt.__webglTexture,W||0,Lt)}E=-1},this.readRenderTargetPixels=function(w,N,W,X,F,et,ht){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){Tt.bindFramebuffer(O.FRAMEBUFFER,vt);try{const Mt=w.texture,Lt=Mt.format,It=Mt.type;if(!Vt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-X&&W>=0&&W<=w.height-F&&O.readPixels(N,W,X,F,Ot.convert(Lt),Ot.convert(It),et)}finally{const Mt=P!==null?wt.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(w,N,W,X,F,et,ht){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){const Mt=w.texture,Lt=Mt.format,It=Mt.type;if(!Vt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-X&&W>=0&&W<=w.height-F){Tt.bindFramebuffer(O.FRAMEBUFFER,vt);const St=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,St),O.bufferData(O.PIXEL_PACK_BUFFER,et.byteLength,O.STREAM_READ),O.readPixels(N,W,X,F,Ot.convert(Lt),Ot.convert(It),0);const Zt=P!==null?wt.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,Zt);const ae=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await pc(O,ae,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,St),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,et),O.deleteBuffer(St),O.deleteSync(ae),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,W=0){w.isTexture!==!0&&(Ai("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-W),F=Math.floor(w.image.width*X),et=Math.floor(w.image.height*X),ht=N!==null?N.x:0,vt=N!==null?N.y:0;T.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,ht,vt,F,et),Tt.unbindTexture()},this.copyTextureToTexture=function(w,N,W=null,X=null,F=0){w.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,W=null);let et,ht,vt,Mt,Lt,It,St,Zt,ae;const le=w.isCompressedTexture?w.mipmaps[F]:w.image;W!==null?(et=W.max.x-W.min.x,ht=W.max.y-W.min.y,vt=W.isBox3?W.max.z-W.min.z:1,Mt=W.min.x,Lt=W.min.y,It=W.isBox3?W.min.z:0):(et=le.width,ht=le.height,vt=le.depth||1,Mt=0,Lt=0,It=0),X!==null?(St=X.x,Zt=X.y,ae=X.z):(St=0,Zt=0,ae=0);const De=Ot.convert(N.format),$t=Ot.convert(N.type);let Et;N.isData3DTexture?(T.setTexture3D(N,0),Et=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Et=O.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Et=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);const en=O.getParameter(O.UNPACK_ROW_LENGTH),Jt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ve=O.getParameter(O.UNPACK_SKIP_PIXELS),On=O.getParameter(O.UNPACK_SKIP_ROWS),Ie=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,le.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Mt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Lt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,It);const fi=w.isDataArrayTexture||w.isData3DTexture,he=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Ze=wt.get(w),pi=wt.get(N),Be=wt.get(Ze.__renderTarget),ln=wt.get(pi.__renderTarget);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,Be.__webglFramebuffer),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let hn=0;hn<vt;hn++)fi&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,F,It+hn),w.isDepthTexture?(he&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(N).__webglTexture,F,ae+hn),O.blitFramebuffer(Mt,Lt,et,ht,St,Zt,et,ht,O.DEPTH_BUFFER_BIT,O.NEAREST)):he?O.copyTexSubImage3D(Et,F,St,Zt,ae+hn,Mt,Lt,et,ht):O.copyTexSubImage2D(Et,F,St,Zt,ae+hn,Mt,Lt,et,ht);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else he?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Et,F,St,Zt,ae,et,ht,vt,De,$t,le.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Et,F,St,Zt,ae,et,ht,vt,De,le.data):O.texSubImage3D(Et,F,St,Zt,ae,et,ht,vt,De,$t,le):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,St,Zt,et,ht,De,$t,le.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,St,Zt,le.width,le.height,De,le.data):O.texSubImage2D(O.TEXTURE_2D,F,St,Zt,et,ht,De,$t,le);O.pixelStorei(O.UNPACK_ROW_LENGTH,en),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Jt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ve),O.pixelStorei(O.UNPACK_SKIP_ROWS,On),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ie),F===0&&N.generateMipmaps&&O.generateMipmap(Et),Tt.unbindTexture()},this.copyTextureToTexture3D=function(w,N,W=null,X=null,F=0){return w.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0),Ai('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,W,X,F)},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){b=0,A=0,P=null,Tt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class Af extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Rf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Je()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new R;class ws{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ye(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ye(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ye(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ye(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ye(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ws(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gn extends Fn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Jn;const vi=new R,jn=new R,Qn=new R,ti=new it,Mi=new it,La=new re,ls=new R,Si=new R,hs=new R,Ho=new it,cr=new it,Wo=new it;class Pn extends Se{constructor(t=new gn){if(super(),this.isSprite=!0,this.type="Sprite",Jn===void 0){Jn=new xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rf(e,5);Jn.setIndex([0,1,2,0,2,3]),Jn.setAttribute("position",new ws(n,3,0,!1)),Jn.setAttribute("uv",new ws(n,2,3,!1))}this.geometry=Jn,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jn.setFromMatrixScale(this.matrixWorld),La.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jn.multiplyScalar(-Qn.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;us(ls.set(-.5,-.5,0),Qn,o,jn,s,r),us(Si.set(.5,-.5,0),Qn,o,jn,s,r),us(hs.set(.5,.5,0),Qn,o,jn,s,r),Ho.set(0,0),cr.set(1,0),Wo.set(1,1);let a=t.ray.intersectTriangle(ls,Si,hs,!1,vi);if(a===null&&(us(Si.set(-.5,.5,0),Qn,o,jn,s,r),cr.set(0,1),a=t.ray.intersectTriangle(ls,hs,Si,!1,vi),a===null))return;const c=t.ray.origin.distanceTo(vi);c<t.near||c>t.far||e.push({distance:c,point:vi.clone(),uv:Oe.getInterpolation(vi,ls,Si,hs,Ho,cr,Wo,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function us(i,t,e,n,s,r){ti.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Mi.x=r*ti.x-s*ti.y,Mi.y=s*ti.x+r*ti.y):Mi.copy(ti),i.copy(t),i.x+=Mi.x,i.y+=Mi.y,i.applyMatrix4(La)}class ni extends Fn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ts=new R,bs=new R,Xo=new re,yi=new Pr,ds=new Cs,lr=new R,Yo=new R;class Cf extends Se{constructor(t=new xe,e=new ni){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ts.fromBufferAttribute(e,s-1),bs.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ts.distanceTo(bs);t.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(s),ds.radius+=r,t.ray.intersectsSphere(ds)===!1)return;Xo.copy(s).invert(),yi.copy(t.ray).applyMatrix4(Xo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=p,_=m-1;g<_;g+=l){const f=h.getX(g),S=h.getX(g+1),v=fs(this,t,yi,c,f,S);v&&e.push(v)}if(this.isLineLoop){const g=h.getX(m-1),_=h.getX(p),f=fs(this,t,yi,c,g,_);f&&e.push(f)}}else{const p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=p,_=m-1;g<_;g+=l){const f=fs(this,t,yi,c,g,g+1);f&&e.push(f)}if(this.isLineLoop){const g=fs(this,t,yi,c,m-1,p);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fs(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Ts.fromBufferAttribute(o,s),bs.fromBufferAttribute(o,r),e.distanceSqToSegment(Ts,bs,lr,Yo)>n)return;lr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(lr);if(!(c<t.near||c>t.far))return{distance:c,point:Yo.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const qo=new R,Zo=new R;class Ei extends Cf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)qo.fromBufferAttribute(e,s),Zo.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qo.distanceTo(Zo);t.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gi extends Le{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qe{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new it:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],o=[],a=new R,c=new re;for(let p=0;p<=t;p++){const m=p/t;s[p]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(me(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(me(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nr extends Qe{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new it){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Pf extends Nr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fr(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ps=new R,hr=new Fr,ur=new Fr,dr=new Fr;class ys extends Qe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ps.subVectors(s[0],s[1]).add(s[0]),l=ps);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ps.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ps),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(h),p);g<1e-4&&(g=1),m<1e-4&&(m=g),_<1e-4&&(_=g),hr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,g,_),ur.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,g,_),dr.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,g,_)}else this.curveType==="catmullrom"&&(hr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ur.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),dr.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(hr.calc(c),ur.calc(c),dr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ko(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Lf(i,t){const e=1-i;return e*e*t}function Df(i,t){return 2*(1-i)*i*t}function If(i,t){return i*i*t}function Pi(i,t,e,n){return Lf(i,t)+Df(i,e)+If(i,n)}function Uf(i,t){const e=1-i;return e*e*e*t}function Nf(i,t){const e=1-i;return 3*e*e*i*t}function Ff(i,t){return 3*(1-i)*i*i*t}function Of(i,t){return i*i*i*t}function Li(i,t,e,n,s){return Uf(i,t)+Nf(i,e)+Ff(i,n)+Of(i,s)}class Da extends Qe{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Li(t,s.x,r.x,o.x,a.x),Li(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bf extends Qe{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Li(t,s.x,r.x,o.x,a.x),Li(t,s.y,r.y,o.y,a.y),Li(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ia extends Qe{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zf extends Qe{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ua extends Qe{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Pi(t,s.x,r.x,o.x),Pi(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gf extends Qe{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Pi(t,s.x,r.x,o.x),Pi(t,s.y,r.y,o.y),Pi(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Na extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ko(a,c.x,l.x,h.x,u.x),Ko(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var $o=Object.freeze({__proto__:null,ArcCurve:Pf,CatmullRomCurve3:ys,CubicBezierCurve:Da,CubicBezierCurve3:Bf,EllipseCurve:Nr,LineCurve:Ia,LineCurve3:zf,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:Gf,SplineCurve:Na});class kf extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $o[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new $o[s.type]().fromJSON(s))}return this}}class As extends kf{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ia(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ua(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Da(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Na(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Nr(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ls extends xe{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=me(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new R,d=new it,p=new R,m=new R,g=new R;let _=0,f=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:_=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,p.x=f*1,p.y=-_,p.z=f*0,g.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(g.x,g.y,g.z);break;default:_=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,p.x=f*1,p.y=-_,p.z=f*0,m.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),c.push(p.x,p.y,p.z),g.copy(m)}for(let S=0;S<=e;S++){const v=n+S*h*s,x=Math.sin(v),L=Math.cos(v);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*x,u.y=t[b].y,u.z=t[b].x*L,o.push(u.x,u.y,u.z),d.x=S/e,d.y=b/(t.length-1),a.push(d.x,d.y);const A=c[3*b+0]*x,P=c[3*b+1],E=c[3*b+0]*L;l.push(A,P,E)}}for(let S=0;S<e;S++)for(let v=0;v<t.length-1;v++){const x=v+S*t.length,L=x,b=x+t.length,A=x+t.length+1,P=x+1;r.push(L,b,P),r.push(A,P,b)}this.setIndex(r),this.setAttribute("position",new Wt(o,3)),this.setAttribute("uv",new Wt(a,2)),this.setAttribute("normal",new Wt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.points,t.segments,t.phiStart,t.phiLength)}}class Fe extends Ls{constructor(t=1,e=1,n=4,s=8){const r=new As;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Fe(t.radius,t.length,t.capSegments,t.radialSegments)}}class Or extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new R,h=new it;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(a,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Rt extends xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let m=0;const g=[],_=n/2;let f=0;S(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(p,2));function S(){const x=new R,L=new R;let b=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const E=[],M=P/r,C=M*(e-t)+t;for(let U=0;U<=s;U++){const z=U/s,k=z*c+a,G=Math.sin(k),Y=Math.cos(k);L.x=C*G,L.y=-M*n+_,L.z=C*Y,u.push(L.x,L.y,L.z),x.set(G,A,Y).normalize(),d.push(x.x,x.y,x.z),p.push(z,1-M),E.push(m++)}g.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){const M=g[E][P],C=g[E+1][P],U=g[E+1][P+1],z=g[E][P+1];(t>0||E!==0)&&(h.push(M,C,z),b+=3),(e>0||E!==r-1)&&(h.push(C,U,z),b+=3)}l.addGroup(f,b,0),f+=b}function v(x){const L=m,b=new it,A=new R;let P=0;const E=x===!0?t:e,M=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,_*M,0),d.push(0,M,0),p.push(.5,.5),m++;const C=m;for(let U=0;U<=s;U++){const k=U/s*c+a,G=Math.cos(k),Y=Math.sin(k);A.x=E*Y,A.y=_*M,A.z=E*G,u.push(A.x,A.y,A.z),d.push(0,M,0),b.x=G*.5+.5,b.y=Y*.5*M+.5,p.push(b.x,b.y),m++}for(let U=0;U<s;U++){const z=L+U,k=C+U;x===!0?h.push(k,k+1,z):h.push(k+1,k,z),P+=3}l.addGroup(f,P,x===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dn extends Rt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Dn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ds extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(r.slice(),3)),this.setAttribute("uv",new Wt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const v=new R,x=new R,L=new R;for(let b=0;b<e.length;b+=3)p(e[b+0],v),p(e[b+1],x),p(e[b+2],L),c(v,x,L,S)}function c(S,v,x,L){const b=L+1,A=[];for(let P=0;P<=b;P++){A[P]=[];const E=S.clone().lerp(x,P/b),M=v.clone().lerp(x,P/b),C=b-P;for(let U=0;U<=C;U++)U===0&&P===b?A[P][U]=E:A[P][U]=E.clone().lerp(M,U/C)}for(let P=0;P<b;P++)for(let E=0;E<2*(b-P)-1;E++){const M=Math.floor(E/2);E%2===0?(d(A[P][M+1]),d(A[P+1][M]),d(A[P][M])):(d(A[P][M+1]),d(A[P+1][M+1]),d(A[P+1][M]))}}function l(S){const v=new R;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(S),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){const S=new R;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];const x=_(S)/2/Math.PI+.5,L=f(S)/Math.PI+.5;o.push(x,1-L)}m(),u()}function u(){for(let S=0;S<o.length;S+=6){const v=o[S+0],x=o[S+2],L=o[S+4],b=Math.max(v,x,L),A=Math.min(v,x,L);b>.9&&A<.1&&(v<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),L<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,v){const x=S*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function m(){const S=new R,v=new R,x=new R,L=new R,b=new it,A=new it,P=new it;for(let E=0,M=0;E<r.length;E+=9,M+=6){S.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),b.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),L.copy(S).add(v).add(x).divideScalar(3);const C=_(L);g(b,M+0,S,C),g(A,M+2,v,C),g(P,M+4,x,C)}}function g(S,v,x,L){L<0&&S.x===1&&(o[v]=S.x-1),x.x===0&&x.z===0&&(o[v]=L/2/Math.PI+.5)}function _(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.vertices,t.indices,t.radius,t.details)}}const ms=new R,_s=new R,fr=new R,gs=new Oe;class wi extends xe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(oi*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:g,b:_,c:f}=gs;if(g.fromBufferAttribute(a,l[0]),_.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),gs.getNormal(fr),u[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[1]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const v=(S+1)%3,x=u[S],L=u[v],b=gs[h[S]],A=gs[h[v]],P=`${x}_${L}`,E=`${L}_${x}`;E in d&&d[E]?(fr.dot(d[E].normal)<=r&&(p.push(b.x,b.y,b.z),p.push(A.x,A.y,A.z)),d[E]=null):P in d||(d[P]={index0:l[S],index1:l[v],normal:fr.clone()})}}for(const m in d)if(d[m]){const{index0:g,index1:_}=d[m];ms.fromBufferAttribute(a,g),_s.fromBufferAttribute(a,_),p.push(ms.x,ms.y,ms.z),p.push(_s.x,_s.y,_s.z)}this.setAttribute("position",new Wt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Fa extends As{constructor(t){super(t),this.uuid=Je(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new As().fromJSON(s))}return this}}const Vf={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Oa(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=qf(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Ni(r,o,e,a,c,p,0),o}};function Oa(i,t,e,n,s){let r,o;if(s===sp(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Jo(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Jo(r,i[r],i[r+1],o);return o&&Is(o,o.next)&&(Oi(o),o=o.next),o}function Nn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Is(e,e.next)||de(e.prev,e,e.next)===0)){if(Oi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ni(i,t,e,n,s,r,o){if(!i)return;!o&&r&&jf(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Wf(i,n,s,r):Hf(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Oi(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Xf(Nn(i),t,e),Ni(i,t,e,n,s,r,2)):o===2&&Yf(i,t,e,n,s,r):Ni(Nn(i),t,e,n,s,r,1);break}}}function Hf(i){const t=i.prev,e=i,n=i.next;if(de(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&si(s,a,r,c,o,l,m.x,m.y)&&de(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Wf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(de(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,g=a>c?a>l?a:l:c>l?c:l,_=h>u?h>d?h:d:u>d?u:d,f=Tr(p,m,t,e,n),S=Tr(g,_,t,e,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=f&&x&&x.z<=S;){if(v.x>=p&&v.x<=g&&v.y>=m&&v.y<=_&&v!==s&&v!==o&&si(a,h,c,u,l,d,v.x,v.y)&&de(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=g&&x.y>=m&&x.y<=_&&x!==s&&x!==o&&si(a,h,c,u,l,d,x.x,x.y)&&de(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=g&&v.y>=m&&v.y<=_&&v!==s&&v!==o&&si(a,h,c,u,l,d,v.x,v.y)&&de(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=S;){if(x.x>=p&&x.x<=g&&x.y>=m&&x.y<=_&&x!==s&&x!==o&&si(a,h,c,u,l,d,x.x,x.y)&&de(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Xf(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Is(s,r)&&Ba(s,n,n.next,r)&&Fi(s,r)&&Fi(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Oi(n),Oi(n.next),n=i=r),n=n.next}while(n!==i);return Nn(n)}function Yf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ep(o,a)){let c=za(o,a);o=Nn(o,o.next),c=Nn(c,c.next),Ni(o,t,e,n,s,r,0),Ni(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function qf(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Oa(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(tp(l));for(s.sort(Zf),r=0;r<s.length;r++)e=Kf(s[r],e);return e}function Zf(i,t){return i.x-t.x}function Kf(i,t){const e=$f(i,t);if(!e)return t;const n=za(e,i);return Nn(n,n.next),Nn(e,e.next)}function $f(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&si(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Fi(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Jf(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Jf(i,t){return de(i.prev,i,t.prev)<0&&de(t.next,i,i.next)<0}function jf(i,t,e,n){let s=i;do s.z===0&&(s.z=Tr(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qf(s)}function Qf(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Tr(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function tp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function si(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ep(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!np(i,t)&&(Fi(i,t)&&Fi(t,i)&&ip(i,t)&&(de(i.prev,i,t.prev)||de(i,t.prev,t))||Is(i,t)&&de(i.prev,i,i.next)>0&&de(t.prev,t,t.next)>0)}function de(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Is(i,t){return i.x===t.x&&i.y===t.y}function Ba(i,t,e,n){const s=vs(de(i,t,e)),r=vs(de(i,t,n)),o=vs(de(e,n,i)),a=vs(de(e,n,t));return!!(s!==r&&o!==a||s===0&&xs(i,e,t)||r===0&&xs(i,n,t)||o===0&&xs(e,i,n)||a===0&&xs(e,t,n))}function xs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function vs(i){return i>0?1:i<0?-1:0}function np(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ba(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fi(i,t){return de(i.prev,i,i.next)<0?de(i,t,i.next)>=0&&de(i,i.prev,t)>=0:de(i,t,i.prev)<0||de(i,i.next,t)<0}function ip(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function za(i,t){const e=new br(i.i,i.x,i.y),n=new br(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Jo(i,t,e,n){const s=new br(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Oi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function br(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Di{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Di.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];jo(t),Qo(n,t);let o=t.length;e.forEach(jo);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Qo(n,e[c]);const a=Vf.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function jo(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qo(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Br extends Ds{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Br(t.radius,t.detail)}}class ri extends Ds{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ri(t.radius,t.detail)}}class Ii extends xe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,p=new R,m=new it;for(let g=0;g<=s;g++){for(let _=0;_<=n;_++){const f=r+_/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let g=0;g<s;g++){const _=g*(n+1);for(let f=0;f<n;f++){const S=f+_,v=S,x=S+n+1,L=S+n+2,b=S+1;a.push(v,x,b),a.push(x,L,b)}}this.setIndex(a),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zr extends xe{constructor(t=new Fa([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Wt(s,3)),this.setAttribute("normal",new Wt(r,3)),this.setAttribute("uv",new Wt(o,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let p=d.shape;const m=d.holes;Di.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,f=m.length;_<f;_++){const S=m[_];Di.isClockWise(S)===!0&&(m[_]=S.reverse())}const g=Di.triangulateShape(p,m);for(let _=0,f=m.length;_<f;_++){const S=m[_];p=p.concat(S)}for(let _=0,f=p.length;_<f;_++){const S=p[_];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let _=0,f=g.length;_<f;_++){const S=g[_],v=S[0]+u,x=S[1]+u,L=S[2]+u;n.push(v,x,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return rp(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new zr(n,t.curveSegments)}}function rp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class jt extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,p=[],m=[],g=[],_=[];for(let f=0;f<=n;f++){const S=[],v=f/n;let x=0;f===0&&o===0?x=.5/e:f===n&&c===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const b=L/e;u.x=-t*Math.cos(s+b*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+b*r)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),_.push(b+x,1-v),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const v=h[f][S+1],x=h[f][S],L=h[f+1][S],b=h[f+1][S+1];(f!==0||o>0)&&p.push(v,x,b),(f!==n-1||c<Math.PI)&&p.push(x,L,b)}this.setIndex(p),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $e extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){const g=m/s*r,_=p/n*Math.PI*2;u.x=(t+e*Math.cos(_))*Math.cos(g),u.y=(t+e*Math.cos(_))*Math.sin(g),u.z=e*Math.sin(_),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){const g=(s+1)*p+m-1,_=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,S=(s+1)*p+m;o.push(g,_,S),o.push(_,f,S)}this.setIndex(o),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Kt extends Fn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gr extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const pr=new re,ta=new R,ea=new R;class Ga{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ta.setFromMatrixPosition(t.matrixWorld),e.position.copy(ta),ea.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ea),e.updateMatrixWorld(),pr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const na=new re,Ti=new R,mr=new R;class op extends Ga{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ti.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ti),mr.copy(n.position),mr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(mr),n.updateMatrixWorld(),s.makeTranslation(-Ti.x,-Ti.y,-Ti.z),na.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na)}}class In extends Gr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new op}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ap extends Ga{constructor(){super(new Ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ia extends Gr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new ap}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cp extends Gr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class lp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=sa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function sa(){return performance.now()}const ra=new re;class hp{constructor(t,e,n=0,s=1/0){this.ray=new Pr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ra.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ra),this}intersectObject(t,e=!0,n=[]){return Ar(t,this,n,e),n.sort(oa),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ar(t[s],this,n,e);return n.sort(oa),n}}function oa(i,t){return i.distance-t.distance}function Ar(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ar(r[o],t,e,!0)}}class up{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rr);const _r=Math.PI*2,dp=5.2,fp=[[-30,25.5],[-30,41.5],[-28.4,45.4],[-24.5,47],[24.5,47],[28.4,45.4],[30,41.5],[30,26],[28.4,22.1],[24.5,20.5],[-24.5,20.5],[-28.4,22.1]];function pp(){const i=document.createElement("canvas");i.width=256,i.height=256;const t=i.getContext("2d");t.fillStyle="#343b45",t.fillRect(0,0,i.width,i.height);let e=41;for(let s=0;s<1800;s++){e=e*1664525+1013904223>>>0;const r=e%i.width;e=e*1664525+1013904223>>>0;const o=e%i.height,a=48+e%28;t.fillStyle=`rgba(${a}, ${a+4}, ${a+10}, 0.24)`,t.fillRect(r,o,1+e%2,1+e%2)}const n=new Gi(i);return n.wrapS=1e3,n.wrapT=1e3,n.repeat.set(8,5),n.anisotropy=4,n}function mp(){const i=document.createElement("canvas");i.width=512,i.height=192;const t=i.getContext("2d");t.fillStyle="#0b1524",t.fillRect(0,0,i.width,i.height),t.strokeStyle="#34d399",t.lineWidth=8,t.strokeRect(5,5,i.width-10,i.height-10),t.fillStyle="#e2e8f0",t.font='700 48px "Segoe UI", sans-serif',t.textAlign="center",t.fillText("AXIORYN",256,83),t.fillStyle="#6ee7b7",t.font='600 26px "Segoe UI", sans-serif',t.fillText("VISITANTES  ·  ESTACIONAMENTO",256,139);const e=new Gi(i);return e.colorSpace=Pe,e.anisotropy=4,e}function aa(i,t,e){const n=document.createElement("canvas");n.width=640,n.height=192;const s=n.getContext("2d");s.fillStyle="#0b1524",s.fillRect(0,0,n.width,n.height),s.strokeStyle=e,s.lineWidth=8,s.strokeRect(5,5,n.width-10,n.height-10),s.fillStyle="#f1f5f9",s.font='700 43px "Segoe UI", sans-serif',s.textAlign="center",s.fillText(i,n.width/2,88),s.fillStyle=e,s.font='600 23px "Segoe UI", sans-serif',s.fillText(t,n.width/2,145);const r=new Gi(n);return r.colorSpace=Pe,r.anisotropy=4,r}function _p(i){const t=document.createElement("canvas");t.width=512,t.height=192;const e=t.getContext("2d");e.fillStyle="#071521",e.fillRect(0,0,t.width,t.height),e.strokeStyle="#38bdf8",e.lineWidth=8,e.strokeRect(5,5,t.width-10,t.height-10),e.textAlign="center",e.fillStyle="#bae6fd",e.font='600 27px "Segoe UI", sans-serif',e.fillText("SENHA DA RECEPÇÃO",t.width/2,48),e.fillStyle="#f8fafc",e.font='700 76px "Segoe UI", sans-serif',e.fillText(i,t.width/2,132);const n=new Gi(t);n.colorSpace=Pe,n.anisotropy=4;const s=new gn({map:n,transparent:!0,depthTest:!1}),r=new Pn(s);return r.scale.set(1.7,.64,1),r.position.set(0,1.98,0),r.renderOrder=10,r}function Me(i,t,e,n,s,r=8){const o=new R(...t),a=new R(...e),c=new R().subVectors(a,o),l=new zt(new Rt(n,n,c.length(),r),s);return l.position.copy(o).add(a).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new R(0,1,0),c.normalize()),l.castShadow=!0,i.add(l),l}class gp{constructor(t,e){this.scene=t,this.groundY=e,this.root=new _t,this.scene.add(this.root),this.retailRoot=new _t,this.root.add(this.retailRoot),this.traffic=[],this.walkers=[],this.cyclists=[],this.paintMaterials=new Map,this.streetLights=[],this.storeLights=[],this.arrivalVisitor=null,this.materials={asphalt:new Kt({map:pp(),roughness:.94,metalness:.04}),bikeLane:new Kt({color:4811606,roughness:.92}),concrete:new Kt({color:8226704,roughness:.92}),curb:new Kt({color:12174024,roughness:.82}),marking:new Kt({color:15198168,roughness:.75}),yellow:new Kt({color:15908180,roughness:.72}),tire:new Kt({color:1382686,roughness:.96}),rubber:new Kt({color:2304046,roughness:.88}),alloy:new Kt({color:12371921,metalness:.82,roughness:.28}),trim:new Kt({color:1120289,metalness:.48,roughness:.42}),glass:new Kt({color:7514559,metalness:.26,roughness:.12,transparent:!0,opacity:.66}),glassStructure:new Kt({color:11065564,metalness:.18,roughness:.12,transparent:!0,opacity:.23,side:2,depthWrite:!1}),headlight:new Kt({color:16773828,emissive:16762967,emissiveIntensity:.15,roughness:.24}),tailLight:new Kt({color:16733515,emissive:10688530,emissiveIntensity:.35,roughness:.32}),steel:new Kt({color:5398896,metalness:.78,roughness:.3}),darkSteel:new Kt({color:1976629,metalness:.65,roughness:.38}),green:new Kt({color:3462041,emissive:952920,emissiveIntensity:.7,roughness:.42}),skin:new Kt({color:14262655,roughness:.88}),hair:new Kt({color:2760987,roughness:.94})},this.dayWindowMaterial=new Kt({color:3691883,metalness:.42,roughness:.3}),this.litWindowMaterial=new Kt({color:16770741,emissive:16760166,emissiveIntensity:0,roughness:.36}),this.carWheelGeometry=new Rt(.34,.34,.24,20),this.motoWheelGeometry=new Rt(.34,.34,.14,18),this._buildAccessRoad(),this._buildParkingAreas(),this._buildStreetFurniture(),this._buildNearbyBuildings(),this._buildElevator(),this._buildRetailConcourse(),this._buildTraffic(),this._buildWalkers(),this._buildCyclists(),this.setEnvironmentMode("day")}_addMesh(t,e,n,s,r={}){const o=new zt(e,n);return o.position.set(s[0],s[1],s[2]),o.castShadow=r.castShadow??!0,o.receiveShadow=r.receiveShadow??!0,t.add(o),o}_addBox(t,e,n,s,r={}){return this._addMesh(t,new B(e[0],e[1],e[2]),n,s,r)}_paint(t){return this.paintMaterials.has(t)||this.paintMaterials.set(t,new Kt({color:t,metalness:.62,roughness:.28})),this.paintMaterials.get(t)}_buildAccessRoad(){const t=this.groundY+.035;this._buildRoadLoop();for(const n of[20.5,47])for(let s=-26;s<=26;s+=5)this._addBox(this.root,[2.4,.025,.09],this.materials.yellow,[s,t+.055,n]);for(const n of[-30,30])for(let s=24;s<=44;s+=5)this._addBox(this.root,[.09,.025,2.3],this.materials.yellow,[n,t+.055,s]);for(const n of[-3.6,-2.4,-1.2,0,1.2,2.4,3.6])this._addBox(this.root,[.38,.03,3.4],this.materials.marking,[n,t+.07,20.5]);const e=this.groundY+.11;for(const n of[17.95,23.05,44.45,49.55])this._addBox(this.root,[66,.22,.28],this.materials.curb,[0,e,n]);for(const n of[-32.55,-27.45,27.45,32.55])this._addBox(this.root,[.28,.22,26.5],this.materials.curb,[n,e,33.75]);this._buildPedestrianNetwork()}_buildPedestrianNetwork(){const t=this.groundY+.04;this._addBox(this.root,[6.2,.08,12],this.materials.concrete,[0,t,40]);for(const e of[-1,1])this._addBox(this.root,[2.2,.08,20],this.materials.concrete,[e*8.8,t,34]),this._addBox(this.root,[3.4,.08,20],this.materials.concrete,[e*34,t,34]),this._addBox(this.root,[2,.05,19.8],this.materials.bikeLane,[e*4.3,this.groundY+.105,34]);for(const e of[23.9,44.1])this._addBox(this.root,[10.6,.05,2],this.materials.bikeLane,[0,this.groundY+.105,e]);for(const e of[-1,1])for(let n=0;n<6;n++)this._addBox(this.root,[3.1,.03,.38],this.materials.marking,[e*30,this.groundY+.09,32.1+n*.76])}_buildRoadLoop(){this.roadLoop=new ys(fp.map(([h,u])=>new R(h,0,u)),!0,"centripetal"),this.roadLoop.curveType="centripetal";const t=384,e=this.roadLoop.getLength(),n=new xe,s=[],r=[],o=[],a=new R,c=this.groundY+.075;for(let h=0;h<=t;h++){const u=h/t,d=this.roadLoop.getPointAt(u),p=this.roadLoop.getTangentAt(u);a.set(p.z,0,-p.x).normalize();for(const m of[-1,1]){const g=m*dp/2;s.push(d.x+a.x*g,c,d.z+a.z*g),r.push(u*e/8.25,m<0?0:1)}if(h<t){const m=h*2;o.push(m,m+2,m+1,m+1,m+2,m+3)}}n.setAttribute("position",new Wt(s,3)),n.setAttribute("uv",new Wt(r,2)),n.setIndex(o),n.computeVertexNormals(),n.computeBoundingSphere(),this.roadLoopMaterial=this.materials.asphalt.clone(),this.roadLoopMaterial.map=this.materials.asphalt.map.clone(),this.roadLoopMaterial.map.repeat.set(1,5),this.roadLoopMaterial.map.needsUpdate=!0;const l=new zt(n,this.roadLoopMaterial);l.castShadow=!1,l.receiveShadow=!0,this.root.add(l)}_buildParkingAreas(){const t=this.groundY+.04,e=[{side:-1,slot:0,row:0,color:2648232},{side:-1,slot:2,row:0,color:13028304},{side:-1,slot:1,row:1,color:11969147},{side:1,slot:0,row:0,color:2571085},{side:1,slot:4,row:1,color:4540763}];for(const n of[-1,1]){this._addBox(this.root,[18.5,.08,23],this.materials.asphalt,[n*19.25,t,34]);for(let s=0;s<5;s++){const r=n*(11.4+s*3.2);for(const o of[27.3,40.7])this._addBox(this.root,[.055,.025,5.35],this.materials.marking,[r-n*1.6,t+.06,o]),this._addBox(this.root,[.055,.025,5.35],this.materials.marking,[r+n*1.6,t+.06,o])}for(const s of[24.65,29.95,38.05,43.35])this._addBox(this.root,[16.4,.025,.055],this.materials.marking,[n*19.2,t+.06,s]);for(const s of[0,2,4]){const r=n*(11.4+s*3.2);this._addBox(this.root,[2,.11,.18],this.materials.darkSteel,[r,t+.13,31.2]),this._addBox(this.root,[2,.11,.18],this.materials.darkSteel,[r,t+.13,36.8])}}for(const n of e){const s=this._createCar(n.color);s.root.position.set(n.side*(11.4+n.slot*3.2),this.groundY+.06,n.row===0?27.3:40.7),s.root.rotation.y=n.row===0?0:Math.PI}this._buildAccessibleSpace(-1,24.2,40.7),this._buildChargingStations(),this._buildBicycleRack()}_buildAccessibleSpace(t,e,n){this._addBox(this.root,[2.9,.025,5.3],new Kt({color:1207188,roughness:.78}),[t*e,this.groundY+.105,n]);for(const o of[-1.4,1.4])this._addBox(this.root,[.055,.03,5.3],this.materials.marking,[t*e+o,this.groundY+.125,n]);const s=this._addBox(this.root,[.08,1.4,.08],this.materials.steel,[t*27.2,this.groundY+.75,n+1.5]),r=this._addMesh(this.root,new B(.8,.54,.06),this._paint(1338260),[t*27.2,this.groundY+1.55,n+1.5]);r.rotation.y=t<0?Math.PI/2:-Math.PI/2,s.userData.accessibleSpaceSign=!0}_buildChargingStations(){for(const[t,e]of[[-26.2,30.2],[26.2,37.8]]){this._addBox(this.root,[.44,1.32,.34],this.materials.darkSteel,[t,this.groundY+.72,e]),this._addBox(this.root,[.27,.045,.12],this.materials.green,[t,this.groundY+1.14,e+.19]);const n=new zt(new $e(.2,.025,6,14,Math.PI),this.materials.rubber);n.position.set(t+.34,this.groundY+.42,e+.05),n.rotation.z=Math.PI/2,this.root.add(n)}}_buildBicycleRack(){const t=this.materials.steel;for(let e=0;e<4;e++){const n=24.5+e*.74;Me(this.root,[7.6,this.groundY+.12,n],[7.6,this.groundY+.88,n],.045,t,8),Me(this.root,[7.6,this.groundY+.88,n],[8.2,this.groundY+.88,n],.045,t,8)}this._addBox(this.root,[2.4,.08,3.5],this.materials.concrete,[7.9,this.groundY+.04,25.7])}_buildStreetFurniture(){const t=new zt(new B(5.2,1.95,.14),new Kt({map:mp(),roughness:.52,metalness:.18}));t.position.set(0,this.groundY+2.7,50.3),t.castShadow=!0,this.root.add(t);for(const e of[-2.15,2.15])this._addBox(this.root,[.16,2.5,.16],this.materials.darkSteel,[e,this.groundY+1.25,50.3]);for(const[e,n]of[[-28,22.8],[28,22.8],[-28,45.2],[28,45.2]])this._buildLamp(e,n);for(const e of[-6.6,6.6])this._addBox(this.root,[2,.56,.46],this.materials.darkSteel,[e,this.groundY+.44,24.3]),this._addBox(this.root,[1.8,.08,.54],this._paint(9149322),[e,this.groundY+.77,24.3]);for(const e of[-1,1])for(let n=0;n<5;n++){const s=this._addBox(this.root,[2.6,.44,1.25],this._paint(3491647),[e*(12.2+n*3.2),this.groundY+.27,45.5]);s.castShadow=!0;const r=new zt(new Br(.44,1),this._paint(n%2===0?3108941:3767637));r.position.set(e*(12.2+n*3.2),this.groundY+.73,45.5),r.scale.set(1.15,.9,.8),r.castShadow=!0,this.root.add(r)}}_buildNearbyBuildings(){[{x:-43,z:34,width:14,depth:16,height:8,color:7635597},{x:43,z:34,width:14,depth:16,height:10,color:6847884}].forEach((e,n)=>{const{x:s,z:r,width:o,depth:a,height:c}=e,l=s<0?1:-1,h=s+l*(o/2+.06);this._addBox(this.root,[o,c,a],new Kt({color:e.color,roughness:.72,metalness:.16}),[s,this.groundY+c/2,r]),this._addBox(this.root,[o+.5,.28,a+.5],this.materials.darkSteel,[s,this.groundY+c+.14,r]),this._addBox(this.root,[.42,.16,5.4],this.materials.steel,[h,this.groundY+c-.56,r]),this._addBox(this.root,[.08,2.15,1.4],this.materials.glass,[h,this.groundY+1.18,r]);for(const d of[-2.5,2.5])this._addBox(this.root,[.08,2.05,2.2],this.materials.glass,[h,this.groundY+1.16,r+d]);const u=Math.floor((c-2.5)/2.3);for(let d=0;d<u;d++){const p=this.groundY+3.15+d*2.3;for(let m=0;m<5;m++){const g=r+(m-2)*2.55,f=(d+m+n)%3!==0?this.litWindowMaterial:this.dayWindowMaterial;this._addBox(this.root,[.08,1.25,1.42],f,[h,p,g]),this._addBox(this.root,[1.42,1.25,.08],f,[s+(m-2)*2.55,p,r+a/2+.06])}}})}_buildLamp(t,e){this._addBox(this.root,[.16,4.2,.16],this.materials.darkSteel,[t,this.groundY+2.1,e]);const n=this._addBox(this.root,[.9,.1,.12],this.materials.darkSteel,[t+(t<0?.34:-.34),this.groundY+4.05,e]);n.rotation.z=t<0?-.12:.12;const s=new Kt({color:16770728,emissive:16760149,emissiveIntensity:0,roughness:.4});this._addBox(this.root,[.72,.1,.38],s,[t+(t<0?.68:-.68),this.groundY+3.96,e]);const r=new In(16762997,5,18,2);r.position.set(t+(t<0?.68:-.68),this.groundY+3.72,e),r.visible=!1,this.root.add(r),this.streetLights.push({light:r,bulbMaterial:s})}setEnvironmentMode(t){var s;if(!["day","dusk","night"].includes(t))throw new RangeError(`Modo de ambiente inválido: ${t}`);const e=t==="night",n=t==="dusk";this.streetLights.forEach(({light:r,bulbMaterial:o})=>{r.visible=e||n,r.intensity=e?1.8:.9,o.emissiveIntensity=e?1.8:n?.65:0}),this.storeLights.forEach(r=>{r.intensity=e?3.2:n?2.4:1.4}),this.litWindowMaterial.color.setHex(e||n?16770741:3691883),this.litWindowMaterial.emissiveIntensity=e?1.15:n?.45:0,this.materials.headlight.emissiveIntensity=e?2.2:n?.8:.15,this.materials.tailLight.emissiveIntensity=e?1.4:n?.7:.35,this.materials.asphalt.color.setHex(e?8491170:16777215),(s=this.roadLoopMaterial)==null||s.color.setHex(e?8491170:16777215),this.materials.concrete.color.setHex(e?6845313:n?7371138:8226704)}setNightMode(t){this.setEnvironmentMode(t?"night":"day")}_buildElevator(){const t=new _t;t.position.set(0,0,13.8),this.root.add(t);const e=12.8,n=this.groundY+6.4;this._addBox(t,[2.75,e,2.75],this.materials.glassStructure,[0,n,0]);for(const o of[-1.28,1.28])for(const a of[-1.28,1.28])this._addBox(t,[.12,e+.1,.12],this.materials.darkSteel,[o,n,a]);for(const o of[this.groundY+.12,.03]){for(const a of[-1.34,1.34])this._addBox(t,[3,.22,.32],this.materials.steel,[0,o,a]);for(const a of[-1.34,1.34])this._addBox(t,[.32,.22,2.36],this.materials.steel,[a,o,0])}const s=new _t;t.add(s),this._addBox(s,[1.86,.12,1.86],this.materials.darkSteel,[0,0,0]);for(const o of[-.88,.88])this._addBox(s,[.06,2.16,1.74],this.materials.glass,[o,1.08,0]);for(const o of[-.88,.88])this._addBox(s,[1.72,2.16,.06],this.materials.glass,[0,1.08,o]);this._addBox(s,[1.75,.08,1.75],this.materials.headlight,[0,2.14,0]),this.elevatorCabin=s,s.position.set(0,this.groundY+.12,0),this.elevatorTravel=-(this.groundY+.12);const r=this._addBox(this.root,[4.4,.12,5],this.materials.concrete,[0,this.groundY+.03,17.1]);r.receiveShadow=!0,this._addBox(this.root,[3.6,.055,2],this.materials.marking,[0,this.groundY+.1,18.3])}_buildRetailFixtures(t,e){const n=this._paint(e.color),s=this.materials.darkSteel,r=(a,c,l)=>this._addBox(t,a,c,l),o=(a,c,l)=>this._addMesh(t,a,c,l);switch(e.kind){case"apparel":{r([e.width*.62,.08,.08],s,[0,1.65,-1.2]);for(const a of[-.56,-.19,.19,.56])r([.26,.72,.08],n,[a,1.18,-1.2]),r([.3,.035,.12],this.materials.alloy,[a,1.55,-1.2]);r([e.width*.58,.12,.42],this._paint(15390922),[0,.38,-1.72]);break}case"services":{r([.9,1.2,.12],s,[0,1.02,-1.56]),r([.78,.82,.035],this._paint(1057850),[0,1.1,-1.48]),r([.56,.06,.08],n,[0,.54,-1.46]);break}case"market":{const a=[16498468,3462041,6333946,16020150];for(const c of[.85,1.35,1.85])r([e.width*.68,.07,.38],s,[0,c,-1.54]),[-.72,-.24,.24,.72].forEach((l,h)=>{r([.22,.26,.22],this._paint(a[h]),[l,c+.16,-1.54])});break}case"technology":{for(const a of[-.58,.58])r([.58,.38,.06],s,[a,1.15,-1.48]),r([.48,.28,.025],n,[a,1.16,-1.43]),r([.16,.12,.1],this.materials.alloy,[a,.78,-1.45]);break}case"accessories":{for(const a of[-.58,0,.58])r([.48,.48,.42],this._paint(5268083),[a,.48,-1.5]),r([.48,.035,.42],this._paint(14213867),[a,.74,-1.5]),o(new jt(.13,12,8),n,[a,.91,-1.5]);break}case"barber":{o(new Rt(.24,.28,.08,16),s,[0,.08,-1.25]),o(new Rt(.08,.1,.48,12),s,[0,.34,-1.25]),r([.56,.18,.5],this._paint(3359061),[0,.68,-1.25]),r([.56,.58,.14],this._paint(3359061),[0,1,-1.48]),r([.72,.88,.04],this._paint(12176341),[0,1.7,-1.76]),r([.86,.07,.08],n,[0,2.17,-1.72]);break}case"cafe":case"restaurant":{o(new Rt(.11,.09,.2,12),this._paint(16317180),[-.62,1.2,-.8]),o(new Rt(.12,.1,.035,12),n,[-.62,1.31,-.8]),r([e.width*.54,.62,.045],s,[0,1.83,-1.78]),r([e.width*.44,.44,.025],n,[0,1.83,-1.74]);break}default:throw new RangeError(`Tipo de loja inválido: ${e.kind}`)}}_buildRetailConcourse(){const t=this.groundY+.03;this._addBox(this.retailRoot,[27.2,.16,23.2],this.materials.concrete,[0,t,0]);const e=this._paint(4608606);this._addBox(this.retailRoot,[11.2,.045,21.8],e,[0,t+.105,0]),this._addBox(this.retailRoot,[20.4,.045,5.2],e,[0,t+.105,11.1]);for(const c of[-3.02,3.02])this._addBox(this.retailRoot,[.07,.035,21.6],this.materials.green,[c,t+.15,0]);const n=[{id:"cafe",kind:"cafe",title:"CAFETERIA",subtitle:"CAFÉ & PAUSA",x:-9.9,z:7.1,rotation:0,width:2.8,depth:3.8,color:16096779},{id:"catalog",kind:"apparel",title:"MODA & VESTUÁRIO",subtitle:"ESTILO PARA O DIA A DIA",x:-6.6,z:7.1,rotation:0,width:2.8,depth:3.8,color:15235497},{id:"solutions",kind:"services",title:"SERVIÇOS",subtitle:"CATÁLOGO & SOLUÇÕES DIGITAIS",x:-3.3,z:7.1,rotation:0,width:2.8,depth:3.8,color:3462041},{id:"automation",kind:"market",title:"MINIMERCADO",subtitle:"CONVENIÊNCIA LOCAL",x:0,z:7.1,rotation:0,width:2.8,depth:3.8,color:10980346},{id:"technology",kind:"technology",title:"TECNOLOGIA",subtitle:"FERRAMENTAS & ACESSÓRIOS",x:3.3,z:7.1,rotation:0,width:2.8,depth:3.8,color:2282478},{id:"automotive",kind:"accessories",title:"ACESSÓRIOS & AUTO",subtitle:"VITRINE AUTOMOTIVA",x:6.6,z:7.1,rotation:0,width:2.8,depth:3.8,color:16347926},{id:"barbershop",kind:"barber",title:"BARBEARIA",subtitle:"CUIDADO & ESTILO",x:9.9,z:7.1,rotation:0,width:2.8,depth:3.8,color:6333946},{id:"restaurant-bistro",kind:"restaurant",title:"BISTRÔ",subtitle:"LANCHES & CAFÉ",x:-7.6,z:-5.5,rotation:0,width:4.8,depth:4,color:16020150},{id:"restaurant-grill",kind:"restaurant",title:"GRILL",subtitle:"PRATOS QUENTES",x:7.6,z:-5.5,rotation:0,width:4.8,depth:4,color:15680580}];for(const c of n){const{width:l,depth:h}=c,u=h/2-.08,d=new _t;d.position.set(c.x,this.groundY+.09,c.z),d.rotation.y=c.rotation,d.userData.storeId=c.id,d.userData.storeCategory=c.kind,d.userData.storeTitle=c.title,this.retailRoot.add(d),this._addBox(d,[l,.18,h],this.materials.darkSteel,[0,.09,0]),this._addBox(d,[l-.2,.16,h-.2],this._paint(2504002),[0,.2,0]),this._addBox(d,[l-.16,2.65,.16],this._paint(1976629),[0,1.52,-h/2+.08]);for(const _ of[-l/2+.08,l/2-.08])this._addBox(d,[.16,2.65,h-.1],this._paint(1976629),[_,1.52,0]),this._addBox(d,[.18,2.55,.18],this._paint(c.color),[_,1.46,u]);const p=this.materials.glass.clone();p.opacity=.5;for(const _ of[-l/4,l/4])this._addBox(d,[l/2-.55,2.1,.055],p,[_,1.37,u]);this._addBox(d,[l,.28,.22],this._paint(c.color),[0,2.83,u]),this._addBox(d,[l*.58,.76,.55],this._paint(c.color),[0,.58,-.25]),this._addBox(d,[l*.6,.08,.62],this.materials.alloy,[0,1,-.25]),this._buildRetailFixtures(d,c);const m=new zt(new Ee(l-.6,1.18),new ne({map:aa(c.title,c.subtitle,`#${c.color.toString(16).padStart(6,"0")}`),toneMapped:!1}));m.position.set(0,3.65,u+.12),d.add(m);const g=new In(c.color,1.4,10,2);g.position.set(0,2.3,0),d.add(g),this.storeLights.push(g)}const s=this._paint(7361080),r=this._paint(3424854),o=[[-3.5,-1.7],[3.5,-1.7],[-3.5,2],[3.5,2]];for(const[c,l]of o){const h=new _t;h.position.set(c,t+.15,l),this.retailRoot.add(h),this._addMesh(h,new Rt(.66,.66,.13,24),s,[0,.92,0]),this._addMesh(h,new Rt(.09,.15,.78,12),this.materials.darkSteel,[0,.46,0]),this._addMesh(h,new Rt(.28,.28,.025,20),this._paint(14870768),[0,1,0]);const u=[[0,1,Math.PI],[0,-1,0],[-1,0,Math.PI/2],[1,0,-Math.PI/2]];for(const[d,p,m]of u){const g=new _t;g.position.set(d,0,p),g.rotation.y=m,h.add(g);for(const _ of[-.2,.2])for(const f of[-.2,.2])this._addBox(g,[.045,.46,.045],this.materials.darkSteel,[_,.23,f]);this._addBox(g,[.58,.12,.58],r,[0,.48,0]),this._addBox(g,[.58,.56,.09],r,[0,.79,-.25])}}for(const c of[-5.2,5.2]){const l=new _t;l.position.set(c,t+.1,4.3),this.retailRoot.add(l),this._addBox(l,[.55,.78,.52],this._paint(2438730),[0,.39,0]),this._addBox(l,[.57,.08,.54],this._paint(3462041),[0,.81,0]),this._addBox(l,[.32,.035,.02],this._paint(14870768),[0,.58,.271])}for(const c of[-11.6,11.6])for(const l of[-6,-.2,5.2]){const h=new _t;h.position.set(c,t+.1,l),this.retailRoot.add(h),this._addMesh(h,new Rt(.45,.52,.64,12),this._paint(4674921),[0,.32,0]),this._addMesh(h,new Dn(.7,1.65,8),this.materials.green,[0,1.38,0])}const a=new zt(new Ee(7.2,1.15),new ne({map:aa("PRAÇA DE ALIMENTAÇÃO","BISTRÔ · GRILL · CAFETERIA","#34d399"),toneMapped:!1}));a.position.set(0,this.groundY+3.6,-2.6),this.retailRoot.add(a);for(const[c,l]of[[-4.4,-2.5],[4.4,-2.5],[-4.4,3.2],[4.4,3.2],[0,10.2]]){const h=new In(16770741,2.1,13,2);h.position.set(c,this.groundY+4.25,l),this.retailRoot.add(h),this.storeLights.push(h)}}_addWheel(t,e,n,s,r,o,a,c){const l=new _t;l.position.set(e,n,s);const h=new zt(r,this.materials.tire);h.rotation.z=Math.PI/2,h.castShadow=!0,l.add(h);const u=new zt(new Rt(o*.45,o*.45,a+.025,16),this.materials.alloy);return u.rotation.z=Math.PI/2,l.add(u),t.add(l),c.push(l),l}_createCar(t){const e=new _t,n=new _t;e.add(n);const s=this._paint(t),r=this.materials.glass,o=[],a=[];this._addBox(n,[1.92,.42,4.22],s,[0,.66,0],{castShadow:!0}),this._addBox(n,[1.88,.16,1.05],s,[0,.91,1.44]),this._addBox(n,[1.82,.15,.88],s,[0,.89,-1.55]),this._addBox(n,[1.48,.62,1.94],r,[0,1.22,-.22]),this._addBox(n,[1.53,.12,1.96],s,[0,1.57,-.22]);for(const c of[-.98,.98])this._addBox(n,[.055,.37,1.27],this.materials.trim,[c,.98,-.22]),this._addBox(n,[.13,.14,.34],r,[c*1.03,1.25,.88]),this._addBox(n,[.23,.08,.28],this.materials.headlight,[c*.72,.86,2.08]),this._addBox(n,[.24,.09,.18],this.materials.tailLight,[c*.72,.84,-2.12]),this._addBox(n,[.16,.07,.16],this.materials.trim,[c*1.06,1.2,.82]);this._addBox(n,[.72,.2,.12],this.materials.darkSteel,[0,.76,2.13]),this._addBox(n,[.62,.13,.08],this.materials.marking,[0,.7,2.2]),this._addBox(n,[.74,.22,.12],this.materials.darkSteel,[0,.76,-2.12]);for(const c of[-1,1])for(const l of[-1.34,1.34]){const h=l>0?new _t:e;l>0&&(h.position.set(c*.93,0,l),e.add(h),a.push(h)),this._addWheel(h,l>0?0:c*.93,.36,l>0?0:l,this.carWheelGeometry,.34,.24,o)}return this.root.add(e),{root:e,body:n,wheels:o,frontSteering:a,length:4.4,wheelRadius:.34,kind:"car"}}_createMotorcycle(t){const e=new _t,n=this._paint(t),s=[];this._addWheel(e,0,.36,-.78,this.motoWheelGeometry,.34,.14,s);const r=new _t;r.position.set(0,0,.78),e.add(r),this._addWheel(r,0,.36,0,this.motoWheelGeometry,.34,.14,s),Me(e,[0,.37,-.78],[0,.72,-.1],.07,this.materials.darkSteel),Me(e,[0,.72,-.1],[0,.52,.78],.055,this.materials.steel),this._addMesh(e,new jt(.35,18,12),n,[0,.98,.05]).scale.set(.82,.65,1.1),this._addBox(e,[.43,.16,.86],this.materials.trim,[0,1.02,-.45]),this._addBox(e,[.28,.08,.48],n,[0,1.13,-.46]),this._addBox(e,[.1,.1,.5],this.materials.steel,[0,.43,-.1]),this._addMesh(e,new jt(.14,14,10),this.materials.headlight,[0,1.02,.78]),Me(e,[-.3,1.25,.83],[.3,1.25,.83],.035,this.materials.darkSteel);const o=new _t;return o.position.set(0,0,-.02),e.add(o),this._addMesh(o,new Fe(.17,.38,4,8),this._paint(1920728),[0,1.42,-.06]).rotation.x=-.42,this._addMesh(o,new jt(.17,16,12),this._paint(14987662),[0,1.83,.05]),this._addMesh(o,new jt(.19,16,12),this._paint(16436245),[0,1.94,.04]),Me(o,[-.12,1.5,0],[-.18,1.2,.76],.055,this.materials.rubber),Me(o,[.12,1.5,0],[.18,1.2,.76],.055,this.materials.rubber),this.root.add(e),{root:e,wheels:s,frontSteering:[r],length:1.9,wheelRadius:.34,kind:"motorcycle"}}_buildTraffic(){const t=[{model:this._createCar(1606821),progress:.02,speed:3.2},{model:this._createMotorcycle(14715692),progress:.59,speed:4}];this.traffic=t.map(({model:e,progress:n,speed:s})=>({...e,progress:n,velocity:0,maxSpeed:s,acceleration:e.kind==="car"?1.45:2.1,braking:e.kind==="car"?3.8:4.6,lastYaw:0})),this.traffic.forEach(e=>this.root.add(e.root))}_buildWalkers(){const t=[{closed:!1,speed:.9,points:[[0,15],[0,20.5],[0,28],[0,35],[0,44.5]]},{closed:!1,speed:.78,points:[[33.2,25],[33.2,31],[33.2,37],[33.2,43]]}],e=[1920728,9647082,1013358,14251782];this.walkers=t.map((n,s)=>{const r=this._createWalker(e[s],s);this.root.add(r);const o=new ys(n.points.map(([a,c])=>new R(a,0,c)),n.closed,"centripetal");return{root:r,curve:o,closed:n.closed,speed:n.speed,phase:s*.17,cycle:s*.34,worldPosition:new R}})}_createWalker(t,e){const n=new _t,s=this._paint(t),r=new Rt(.07,.085,.52,8),o=new Rt(.045,.055,.42,8);this._addMesh(n,new Fe(.17,.46,4,8),s,[0,1.02,0]).scale.set(.92,1.05,.76),this._addMesh(n,new jt(.15,14,10),this.materials.skin,[0,1.53,.015]),this._addMesh(n,new jt(.153,12,8),this._paint(e%2?3155230:4272164),[0,1.59,-.015]).scale.set(1.02,.62,1);const l=[],h=[];for(const u of[-1,1]){const d=new _t;d.position.set(u*.105,.76,0),this._addMesh(d,r,this.materials.darkSteel,[0,-.25,0]),this._addBox(d,[.16,.08,.28],this.materials.trim,[0,-.5,.045]),n.add(d),l.push(d);const p=new _t;p.position.set(u*.22,1.27,0),this._addMesh(p,o,s,[0,-.2,0]),n.add(p),h.push(p)}return n.userData.walkAnimation={legs:l,arms:h},n.scale.setScalar(.92+e%2*.08),n}_createBicycle(){const t=new _t,e=this.materials.green,n=[],s=.37;for(const u of[-.78,.78]){const d=new _t;d.position.set(0,s,u),d.rotation.y=Math.PI/2;const p=new zt(new $e(s,.035,7,24),this.materials.rubber);d.add(p);const m=new zt(new Rt(.045,.045,.12,10),this.materials.alloy);m.rotation.z=Math.PI/2,d.add(m);for(let g=0;g<8;g++){const _=g/8*_r;Me(d,[0,Math.cos(_)*.04,Math.sin(_)*.04],[0,Math.cos(_)*(s-.03),Math.sin(_)*(s-.03)],.008,this.materials.alloy,5)}t.add(d),n.push(d)}const r=[0,s,-.78],o=[0,s,.78],a=[0,.36,-.08],c=[0,.93,-.34],l=[0,.91,.56];Me(t,r,a,.035,e),Me(t,a,c,.035,e),Me(t,c,r,.035,e),Me(t,a,o,.035,e),Me(t,o,l,.035,this.materials.darkSteel),Me(t,c,l,.035,e),Me(t,[0,.99,-.4],[0,1.03,-.18],.035,this.materials.trim),Me(t,[0,.97,.5],[0,1.02,.7],.035,this.materials.darkSteel);const h=new _t;return this._addMesh(h,new Fe(.15,.42,4,8),this._paint(14251782),[0,1.25,-.02]).rotation.x=-.52,this._addMesh(h,new jt(.145,14,10),this.materials.skin,[0,1.69,.02]),this._addMesh(h,new jt(.16,14,10),this._paint(1976635),[0,1.78,.01]),Me(h,[-.1,1.38,0],[-.1,1,.58],.045,this.materials.trim),Me(h,[.1,1.38,0],[.1,1,.58],.045,this.materials.trim),t.add(h),{root:t,wheels:n,wheelRadius:s}}_buildCyclists(){const t=new ys([new R(-4.3,0,21.8),new R(-4.3,0,45.5),new R(4.3,0,45.5),new R(4.3,0,21.8)],!0,"centripetal"),e=this._createBicycle();this.root.add(e.root),this.cyclists.push({...e,curve:t,progress:.15,speed:2.1,lastYaw:0})}_positionOnCurve(t,e,n){const s=t.getPointAt(e),r=t.getTangentAt(e);return n.set(s.x,this.groundY+.05,s.z),r}_updateTraffic(t){const e=this.roadLoop.getLength(),n=this.walkers.some(s=>{const{x:r,z:o}=s.worldPosition,a=Math.abs(r)<3.4&&Math.abs(o-20.5)<3.2,c=Math.abs(Math.abs(r)-30)<3.3&&Math.abs(o-34)<3.2;return a||c});for(const s of this.traffic){let r=1/0;for(const f of this.traffic){if(f===s)continue;const S=(f.progress-s.progress+1)%1*e;S>.01&&(r=Math.min(r,S))}const o=this.roadLoop.getPointAt(s.progress);let a=s.maxSpeed;const c=s.length+4.2;r<c+7&&(a*=Ms.clamp((r-c)/7,.06,1)),(Math.abs(o.x)<5.2&&Math.abs(o.z-20.5)<3.8||Math.abs(Math.abs(o.x)-30)<4&&Math.abs(o.z-34)<3.8)&&(a=Math.min(a,n?0:1));const h=a<s.velocity?s.braking:s.acceleration;s.velocity+=Ms.clamp(a-s.velocity,-h*t,h*t),s.velocity=Math.max(0,s.velocity);const u=s.velocity*t;s.progress=(s.progress+u/e)%1;const d=s.lastYaw,p=this._positionOnCurve(this.roadLoop,s.progress,s.root.position),m=Math.atan2(p.x,p.z);s.root.rotation.y=m,s.lastYaw=m,s.body&&(s.body.position.y=.015+Math.sin(s.progress*_r*38)*.012);for(const f of s.wheels)f.rotation.x-=u/s.wheelRadius;const g=Math.atan2(Math.sin(m-d),Math.cos(m-d)),_=Ms.clamp(g*4,-.28,.28);for(const f of s.frontSteering)f.rotation.y=_}}_updateWalkers(t,e){for(const n of this.walkers){const s=n.curve.getLength(),r=n.speed*t/s;n.phase=(n.phase+r)%(n.closed?1:2);const o=!n.closed&&n.phase>1,a=n.closed?n.phase:o?2-n.phase:n.phase,c=this._positionOnCurve(n.curve,a,n.worldPosition);o&&c.negate(),n.root.position.copy(n.worldPosition),n.root.rotation.y=Math.atan2(c.x,c.z);const l=n.root.userData.walkAnimation,h=Math.sin(e*5.2+n.cycle*_r);l.legs[0].rotation.x=h*.48,l.legs[1].rotation.x=-h*.48,l.arms[0].rotation.x=-h*.28,l.arms[1].rotation.x=h*.28,n.root.position.y+=Math.abs(h)*.018}}_updateCyclists(t){for(const e of this.cyclists){const n=e.curve.getLength(),s=e.speed*t;e.progress=(e.progress+s/n)%1;const r=this._positionOnCurve(e.curve,e.progress,e.root.position);e.root.rotation.y=Math.atan2(r.x,r.z);for(const o of e.wheels)o.rotation.x-=s/e.wheelRadius}}showVisitorArrival(t,e){if(typeof t!="string"||!t.trim()||this.arrivalVisitor)return!1;const n=this._createWalker(3900150,0);n.add(_p(t.trim()));const s=new In(9684477,2.2,4,2);return s.position.set(0,1.2,.15),n.add(s),n.position.set(0,-.18,0),this.elevatorCabin.position.y=this.groundY+.12,this.elevatorCabin.add(n),this.arrivalVisitor={root:n,phase:"ascending",elapsed:0,start:new R,destination:new R(2.9,-.17,11.45),onComplete:e},!0}showVisitorCoffee(){const t=this.arrivalVisitor;return t?(t.coffeeAccepted=!0,t.phase==="seated"&&this._serveVisitorCoffee(t),!0):!1}_serveVisitorCoffee(t){if(t.coffeeCup)return;const e=new _t;e.position.set(.3,.92,.18),e.add(new zt(new Rt(.055,.045,.12,14),this.materials.trim)),e.add(new zt(new Rt(.047,.047,.018,14),this.materials.darkSteel));const n=new zt(new $e(.038,.008,6,12),this.materials.trim);n.rotation.y=Math.PI/2,n.position.x=.055,e.add(n),t.root.add(e),t.coffeeCup=e}_updateVisitorArrival(t,e){var s;const n=this.arrivalVisitor;if(n){if(n.phase==="ascending"){n.elapsed+=t;const r=Math.min(n.elapsed/3.2,1),o=r*r*(3-2*r);this.elevatorCabin.position.y=this.groundY+.12+this.elevatorTravel*o,r===1&&(this.root.attach(n.root),n.root.position.set(0,-.17,13.8),n.start.copy(n.root.position),n.phase="walking",n.elapsed=0);return}if(n.phase==="walking"){n.elapsed+=t;const r=Math.min(n.elapsed/1.8,1),o=r*r*(3-2*r);n.root.position.copy(n.start).lerp(n.destination,o);const a=new R().subVectors(n.destination,n.start);n.root.rotation.y=Math.atan2(a.x,a.z);const c=n.root.userData.walkAnimation,l=Math.sin(e*5.2);c.legs[0].rotation.x=l*.48,c.legs[1].rotation.x=-l*.48,c.arms[0].rotation.x=-l*.28,c.arms[1].rotation.x=l*.28,n.root.position.y+=Math.abs(l)*.018,r===1&&(n.phase="seated",n.elapsed=0,n.root.rotation.y=Math.PI,n.root.position.y=-.22,c.legs[0].rotation.x=-1.15,c.legs[1].rotation.x=-1.15,c.arms[0].rotation.x=.16,c.arms[1].rotation.x=.16,n.coffeeAccepted&&this._serveVisitorCoffee(n),(s=n.onComplete)==null||s.call(n),n.onComplete=null);return}n.root.position.y=-.22+Math.sin(e*1.6)*.012}}update(t,e){var n;if(this._updateWalkers(t,e),this._updateTraffic(t),this._updateCyclists(t),this._updateVisitorArrival(t,e),((n=this.arrivalVisitor)==null?void 0:n.phase)!=="ascending"){const s=e%24/24,r=s<.5?s*2:1-(s-.5)*2,o=r*r*(3-2*r);this.elevatorCabin.position.y=this.groundY+.12+o*this.elevatorTravel}}}const ca=6.2,la=4,xp=14.2,vp=12.2,gr=15,ka=Object.freeze([3.8,11.2]),Va=Object.freeze([-9.8,-3.9,2,7.9]),Mp=6;function Ha(i){const t=xp+(i-1)*gr;return{x0:t,x1:t+gr,cx:t+gr/2}}function Wa(i,t,e){const{x0:n}=Ha(i);return{x:Sp(n+ka[t]),z:Va[e],wing:i}}const Sp=i=>Math.round(i*100)/100,Xa=Object.freeze({boss:{x:-20.2,z:-1.7},atlas:{x:-16.4,z:-1.7},atena:{x:-18.4,z:.8},pixel:{x:-10.4,z:-9.8},nexus:{x:10.4,z:-9.8},vega:{x:0,z:8.15},hermes:{x:-1.5,z:8.15},sentry:{x:10.4,z:7.4},ares:{x:-10.4,z:-4.6},neo:{x:10.4,z:-4.6},trinity:{x:-10.4,z:1.2},morpheus:{x:10.4,z:1.2},orion:{x:-10.4,z:7.4},gauss:Wa(1,0,3)});function Ya(i=Mp){const t=[];for(let e=1;e<=i;e++)for(let n=0;n<Va.length;n++)for(let s=0;s<ka.length;s++)t.push({...Wa(e,s,n),index:t.length});return t}const qa=(i,t)=>Math.abs(i.x-t.x)<1e-6&&Math.abs(i.z-t.z)<1e-6;function yp(i){const t={},e=[],n=[];for(const o of i){const a=Xa[o.slug];a?(t[o.slug]={...a,wing:a.wing??0},e.push(a)):n.push(o)}n.sort((o,a)=>(o.id??1/0)-(a.id??1/0)||String(o.slug).localeCompare(String(a.slug)));const s=Ya();let r=0;for(const o of n){for(;r<s.length&&e.some(h=>qa(h,s[r]));)r++;if(r>=s.length)break;const{x:a,z:c,wing:l}=s[r++];t[o.slug]={x:a,z:c,wing:l},e.push({x:a,z:c})}return t}function Ep(i){return[...new Set(Object.values(i).map(t=>t.wing).filter(t=>t>0))].sort((t,e)=>t-e)}function wp(i,t){const e=Object.values(t);return Ya().filter(n=>n.wing===i&&!e.some(s=>qa(s,n)))}const xr={IDLE:6583435,WORKING:1096065,WAITING_APPROVAL:16096779,BLOCKED:16347926,ERROR:15680580},ha={IDLE:"#94a3b8",WORKING:"#34d399",WAITING_APPROVAL:"#fbbf24",BLOCKED:"#fb923c",ERROR:"#f87171"},Tp={aerial:{target:[7,-3.2,0],offset:[31,31,34],zoom:.78},front:{target:[7,-3.2,4],offset:[0,15,42],zoom:.8},side:{target:[0,-3.2,0],offset:[42,14,0],zoom:.94},rear:{target:[7,-3.2,-2],offset:[0,15,-42],zoom:.8},shopping:{target:[0,-10.3,0],offset:[0,6,34],zoom:1.05},office:{target:[3,.3,0],offset:[28,22,30],zoom:.62},reception:{target:[0,1.8,9.2],offset:[0,8,19],zoom:1.55},rooftop:{target:[0,5.3,-14.8],offset:[21,14,22],zoom:1.12},exploded:{target:[0,-3,0],offset:[34,30,38],zoom:.82}},Dp=Xa,ua=[{slug:"boss",name:"DIRETORIA & COORDENAÇÃO",x:-20.2,z:-1.7,color:15381256,isBoss:!0},{slug:"atlas",name:"DIRETORIA & COORDENAÇÃO",x:-16.4,z:-1.7,color:3718648},{slug:"pixel",name:"TECNOLOGIA & ENGENHARIA",x:-10.4,z:-9.8,color:6514417},{slug:"nexus",name:"PESQUISA & INTELIGÊNCIA",x:10.4,z:-9.8,color:1096065},{slug:"vega",name:"RECEPÇÃO • ATENDIMENTO AO CLIENTE",x:0,z:8.15,color:16096779,isReception:!0},{slug:"sentry",name:"QUALIDADE & FINANÇAS",x:10.4,z:7.4,color:15485081},{slug:"ares",name:"RH & EQUIPES DE IA (ARES)",x:-10.4,z:-4.6,color:16347926},{slug:"neo",name:"SEGURANÇA & DEFESA (NEO)",x:10.4,z:-4.6,color:65382,spawnOnHire:!0}],bp={boss:{x:0,y:4.38,z:-13.3,rotY:0,pose:"STANDING",hasCoffee:!0},atlas:{x:-2.4,y:4.38,z:-13.6,rotY:.4,pose:"STANDING",hasCoffee:!0},pixel:{x:-8.3,y:4.38,z:-15.2,rotY:0,pose:"SEATED",hasCoffee:!1},nexus:{x:2.4,y:4.38,z:-13.6,rotY:-.4,pose:"STANDING",hasCoffee:!0},vega:{x:-6.3,y:4.38,z:-15.2,rotY:0,pose:"SEATED",hasCoffee:!0},sentry:{x:5.5,y:4.38,z:-14.6,rotY:Math.PI/5,pose:"STANDING",hasCoffee:!0},ares:{x:-4.2,y:4.38,z:-13.4,rotY:.2,pose:"STANDING",hasCoffee:!0},neo:{x:9.6,y:4.38,z:-13.5,rotY:-.3,pose:"STANDING",hasCoffee:!1},trinity:{x:.2,y:4.38,z:-14.8,rotY:.25,pose:"STANDING",hasCoffee:!0},orion:{x:-10.5,y:4.38,z:-14,rotY:.5,pose:"STANDING",hasCoffee:!0},atena:{x:3.9,y:4.38,z:-13.2,rotY:-.2,pose:"STANDING",hasCoffee:!0},hermes:{x:-9,y:4.38,z:-13.6,rotY:.3,pose:"STANDING",hasCoffee:!0},morpheus:{x:7.6,y:4.38,z:-14.5,rotY:-.4,pose:"STANDING",hasCoffee:!0},kai:{x:-7.6,y:4.38,z:-13.9,rotY:.3,pose:"STANDING",hasCoffee:!1}},vr=new Set(["vega","hermes"]),Ap=new Set(["hermes"]),Rp=new Set(["atena"]),Cp={boss:{blazer:1976635,pants:988970,shirt:16777215,tie:15381256,skin:15778720,hair:3359061,hairStyle:"quiff",glasses:!1},atlas:{blazer:1920728,pants:1976635,shirt:16317180,tie:3718648,skin:15250572,hair:1973016,hairStyle:"quiff",glasses:!1,headset:!0},pixel:{blazer:5195493,pants:1976635,shirt:14870768,tie:8490232,skin:15778720,hair:3875604,hairStyle:"spiky",glasses:!0},nexus:{blazer:292951,pants:3359061,shirt:16708551,tie:1096065,skin:14130034,hair:1579035,hairStyle:"parted",glasses:!0},vega:{blazer:14251782,pants:1976635,shirt:16777215,tie:16498468,skin:15250572,hair:6040854,hairStyle:"long",glasses:!1},sentry:{blazer:12458077,pants:2042167,shirt:16642808,tie:16020150,skin:15778720,hair:2563097,hairStyle:"long",glasses:!0},ares:{blazer:15357964,pants:1976635,shirt:16777215,tie:16486972,skin:13208931,hair:1841431,hairStyle:"parted",glasses:!1},neo:{blazer:398606,pants:264454,shirt:988970,tie:65382,skin:15778720,hair:593174,hairStyle:"slick",matrixGlasses:!0},trinity:{blazer:7153881,pants:1120295,shirt:16118783,tie:10980346,skin:15778720,hair:593174,hairStyle:"long",matrixGlasses:!0},orion:{blazer:889992,pants:1976635,shirt:15793658,tie:3003583,skin:14130034,hair:2696484,hairStyle:"quiff",glasses:!1},morpheus:{blazer:4988309,pants:988970,shirt:16707722,tie:12616956,skin:9263675,hair:1120295,hairStyle:"parted",matrixGlasses:!0},kai:{blazer:947344,pants:1461859,shirt:15531775,tie:2282478,skin:14130034,hair:593174,hairStyle:"spiky",glasses:!1,headset:!0}},ei={boss:{x:0,z:-10.45,rotY:0},atlas:{x:-1,z:-10.45,rotY:0},pixel:{x:1,z:-10.45,rotY:0},nexus:{x:-2,z:-10.45,rotY:0},vega:{x:2,z:-10.45,rotY:0},sentry:{x:-2,z:-6.75,rotY:Math.PI},ares:{x:-1,z:-6.75,rotY:Math.PI},neo:{x:0,z:-6.75,rotY:Math.PI},trinity:{x:1,z:-6.75,rotY:Math.PI},orion:{x:2,z:-6.75,rotY:Math.PI},morpheus:{x:-3.55,z:-8.6,rotY:Math.PI/2},kai:{x:3.55,z:-8.6,rotY:-Math.PI/2}},An=Object.freeze({cx:-18.4,cz:-1.7,w:8.4,d:6,doorWidth:1.8}),Mr=Object.freeze({cx:0,cz:-8.6,w:11.2,d:6.4}),da=[15250572,14130034,13208931,9263675,15778720],fa=[2826520,1315860,4008735,4868693,7031343];function Sr(i){return"#"+i.toString(16).padStart(6,"0")}function ye(i,t){const e=document.createElement("canvas");e.width=i,e.height=t;const n=new Gi(e);return n.anisotropy=2,{canvas:e,ctx:e.getContext("2d"),texture:n}}function yr(){const{ctx:i,texture:t}=ye(512,512);i.fillStyle="#121c2e",i.fillRect(0,0,512,512);const e=64;for(let n=0;n<512;n+=e)for(let s=0;s<512;s+=e){const r=(s/e+n/e)%2===0?"#142035":"#111b2d";i.fillStyle=r,i.fillRect(s+2,n+2,e-4,e-4),i.strokeStyle="rgba(148, 163, 184, 0.08)",i.lineWidth=1,i.strokeRect(s+2,n+2,e-4,e-4)}return t.wrapS=1e3,t.wrapT=1e3,t.repeat.set(7,6),t}function Pp(){const{ctx:i,texture:t}=ye(512,512);i.fillStyle="#4a2f1b",i.fillRect(0,0,512,512);const e=32,n=["#5c3a21","#694328","#52331c","#633e24"];for(let s=0;s<16;s++){const r=s*e;i.fillStyle=n[s%n.length],i.fillRect(0,r+1,512,e-2),i.fillStyle="rgba(20, 10, 4, 0.55)",i.fillRect(0,r,512,2);const o=s*137%380+60;i.fillRect(o,r,2,e)}return t.wrapS=1e3,t.wrapT=1e3,t.repeat.set(6,2),t}function pa(){const{ctx:i,texture:t}=ye(256,256);i.fillStyle="#14532d",i.fillRect(0,0,256,256);for(let e=0;e<600;e++){i.fillStyle=e%2===0?"#166534":"#15803d";const n=e*73%254,s=e*41%254;i.fillRect(n,s,3,3)}return t.wrapS=1e3,t.wrapT=1e3,t.repeat.set(4,2),t}function ma(){const{ctx:i,texture:t}=ye(512,512);i.fillStyle="#09101d",i.fillRect(0,0,512,512);for(let e=0;e<4;e++){const n=e*128;i.fillStyle="#1e293b",i.fillRect(0,n,512,18);for(let s=0;s<8;s++){const r=s*64+6,o=(e+s)%3!==0;i.fillStyle=o?"rgba(56, 189, 248, 0.22)":"rgba(15, 23, 42, 0.85)",i.fillRect(r,n+24,52,92),i.strokeStyle="#334155",i.lineWidth=2,i.strokeRect(r,n+24,52,92)}}return t.wrapS=1e3,t.wrapT=1e3,t.repeat.set(4,2),t}function ci(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function Er(i,t,e,{name:n,role:s,status:r,accentHex:o}){i.clearRect(0,0,t,e),i.fillStyle="rgba(8, 13, 26, 0.92)",ci(i,4,4,t-8,e-8,14),i.fill(),i.strokeStyle=o,i.globalAlpha=.65,i.lineWidth=3,ci(i,4,4,t-8,e-8,14),i.stroke(),i.globalAlpha=1,i.fillStyle=o,i.fillRect(4,4,10,e-8),i.fillStyle="#f8fafc",i.font='700 30px "Segoe UI", system-ui, sans-serif',i.fillText((n||"AGENTE").toUpperCase(),28,42),i.fillStyle="#9fb0c7",i.font='500 16px "Segoe UI", system-ui, sans-serif';let a=(s||"").toUpperCase();a.length>28&&(a=a.slice(0,27)+"…"),i.fillText(a,28,68);const c=(r||"IDLE").toUpperCase();i.fillStyle=ha[c]||ha.IDLE,i.beginPath(),i.arc(34,90,6,0,Math.PI*2),i.fill(),i.font='700 16px "Segoe UI", system-ui, sans-serif',i.fillText(c,48,95)}function bi(i,t,e,{title:n,subtitle:s,accentHex:r}){i.clearRect(0,0,t,e),i.fillStyle="rgba(8, 13, 26, 0.85)",ci(i,3,3,t-6,e-6,12),i.fill(),i.fillStyle=r,i.fillRect(3,3,8,e-6),i.fillStyle="#f1f5f9";let o=30;for(i.font=`700 ${o}px "Segoe UI", system-ui, sans-serif`;i.measureText(n).width>t-34&&o>20;)o-=1,i.font=`700 ${o}px "Segoe UI", system-ui, sans-serif`;i.textAlign="center",i.fillText(n,t/2+4,44,t-34),i.fillStyle="#8fa3bd";let a=18;for(i.font=`500 ${a}px "Segoe UI", system-ui, sans-serif`;i.measureText(s).width>t-34&&a>13;)a-=1,i.font=`500 ${a}px "Segoe UI", system-ui, sans-serif`;i.fillText(s,t/2+4,78,t-34),i.textAlign="left"}class Ip{constructor(t,e,n,s){this.container=t,this.onSelectAgent=e,this.onSelectStore=n,this.onVisitorArrivalComplete=s,this.agentMap=new Map,this.demoPreviewMode=!1,this.meetingMode=!1,this.explodedView=!1,this.viewMode="3d",this.environmentMode="day",this._rafActive=!1,this._t=0,this.scene=new Af,this.scene.background=new Yt(9287374),this.groundFloorGroup=new _t,this.officeFloorGroup=new _t,this.rooftopGroup=new _t,this.exteriorGroup=new _t,this.scene.add(this.groundFloorGroup,this.officeFloorGroup,this.rooftopGroup,this.exteriorGroup);const r=(this.container.clientWidth||900)/Math.max(1,this.container.clientHeight||650);this.frustumSize=27,this.camera=new Ir(-this.frustumSize*r/2,this.frustumSize*r/2,this.frustumSize/2,-this.frustumSize/2,.1,250),this.cameraTarget=new R(0,.4,-1.2),this.sphericalOffset=new R(24,22,24),this.zoomLevel=.98,this.resetCamera(),this.renderer=new bf({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.container.clientWidth||900,this.container.clientHeight||650),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.container.appendChild(this.renderer.domElement),this.raycaster=new hp,this.pointer=new it,this._setupLights(),this._buildOfficeArchitecture(),this._bindInteractions(),this.clock=new lp,this._animate=this._animate.bind(this),this.setViewMode("3d")}resetCamera(){this.cameraTarget.set(0,.4,-1.2),this.zoomLevel=.98,this._updateCameraTransform()}_updateCameraTransform(){this.camera.position.copy(this.cameraTarget).add(this.sphericalOffset),this.camera.zoom=this.zoomLevel,this.camera.lookAt(this.cameraTarget),this.camera.updateProjectionMatrix()}setCameraPreset(t,e=900,n){var g;const s=Tp[t];if(!s)throw new RangeError(`Preset de câmera inválido: ${t}`);(g=this._cameraTransitionCancel)==null||g.call(this),this.setExplodedView(t==="exploded");const r=new R(...s.target),o=new R(...s.offset),a=this.cameraTarget.clone(),c=this.sphericalOffset.clone(),l=this.zoomLevel,h=performance.now(),u=(this._cameraTransitionId??0)+1;let d=!1;this._cameraTransitionId=u;const p=()=>{d||(d=!0,u===this._cameraTransitionId&&(this._cameraTransitionCancel=null),n==null||n())};this._cameraTransitionCancel=p;const m=_=>{if(u!==this._cameraTransitionId)return;const f=e>0?Math.min((_-h)/e,1):1,S=f*f*(3-2*f);this.cameraTarget.copy(a).lerp(r,S),this.sphericalOffset.copy(c).lerp(o,S),this.zoomLevel=l+(s.zoom-l)*S,this._updateCameraTransform(),f<1?requestAnimationFrame(m):p()};requestAnimationFrame(m)}setFloorVisibility(t,e){const n=!!e;if(t==="shopping"){this.groundFloorGroup.visible=n,this.automotiveCampus&&(this.automotiveCampus.retailRoot.visible=n);return}if(t==="office"){this.officeFloorGroup.visible=n;return}if(t==="rooftop"){this.rooftopGroup.visible=n;return}throw new RangeError(`Pavimento inválido: ${t}`)}setExplodedView(t){const e=!!t;if(this.explodedView===e)return;this.explodedView=e;const n=e?{shopping:-2.4,office:1.1,rooftop:3.6}:{shopping:0,office:0,rooftop:0};this.groundFloorGroup.position.y=n.shopping,this.officeFloorGroup.position.y=n.office,this.rooftopGroup.position.y=n.rooftop,this.automotiveCampus&&(this.automotiveCampus.retailRoot.position.y=n.shopping)}setViewMode(t){if(t!=="2d"&&t!=="3d"||t===this.viewMode&&this._rafActive)return;this.viewMode=t;const e=t==="3d";this.renderer.domElement.style.display=e?"":"none",e&&!this._rafActive?(this._rafActive=!0,this.clock.getDelta(),requestAnimationFrame(this._animate)):e||(this._rafActive=!1)}setEnvironmentMode(t){var s;if(!["day","dusk","night"].includes(t))throw new RangeError(`Modo de ambiente inválido: ${t}`);const n={day:{background:9287374,ambient:14412542,ambientIntensity:.8,directional:16777215,directionalIntensity:1.15,rim:3718648,rimIntensity:.4,ground:16777215},dusk:{background:10187137,ambient:16762786,ambientIntensity:.58,directional:16757879,directionalIntensity:.78,rim:16096876,rimIntensity:.34,ground:14206648},night:{background:463391,ambient:8689848,ambientIntensity:.4,directional:10205151,directionalIntensity:.4,rim:5601208,rimIntensity:.28,ground:8753828}}[t];this.environmentMode=t,this.scene.background.setHex(n.background),this.ambientLight.color.setHex(n.ambient),this.ambientLight.intensity=n.ambientIntensity,this.environmentDirectionalLight.color.setHex(n.directional),this.environmentDirectionalLight.intensity=n.directionalIntensity,this.rimLight.color.setHex(n.rim),this.rimLight.intensity=n.rimIntensity,this.exteriorGround.material.color.setHex(n.ground),(s=this.automotiveCampus)==null||s.setEnvironmentMode(t)}showVisitorArrival(t){var e;return((e=this.automotiveCampus)==null?void 0:e.showVisitorArrival(t,this.onVisitorArrivalComplete))??!1}showVisitorCoffee(){var t;return((t=this.automotiveCampus)==null?void 0:t.showVisitorCoffee())??!1}syncEnvironmentWithSaoPauloClock(t=new Date){var a,c;const e=new Intl.DateTimeFormat("en-US",{timeZone:"America/Sao_Paulo",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(t),n=Number((a=e.find(l=>l.type==="hour"))==null?void 0:a.value),s=Number((c=e.find(l=>l.type==="minute"))==null?void 0:c.value),r=n*60+s,o=r>=360&&r<1020?"day":r<1140&&r>=1020?"dusk":"night";return o!==this.environmentMode&&this.setEnvironmentMode(o),o}_setupLights(){const t=new cp(14412542,.8);this.ambientLight=t,this.scene.add(t);const e=new ia(16777215,1.15);this.environmentDirectionalLight=e,e.position.set(16,28,14),e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,e.shadow.camera.left=-20,e.shadow.camera.right=20,e.shadow.camera.top=20,e.shadow.camera.bottom=-20,this.scene.add(e);const n=new ia(3718648,.4);this.rimLight=n,n.position.set(-18,12,-16),this.scene.add(n),n.position.set(-18,12,-16);const s=new In(3718648,12,12,1.8);s.position.set(Mr.cx,3.4,Mr.cz),this.scene.add(s);const r=new In(16769205,14,14,1.8);r.position.set(0,4.2,9.8),this.scene.add(r)}_std(t,e={}){return new Kt({color:t,roughness:.8,metalness:.08,...e})}_glassMaterial(){return new Kt({color:12575743,transparent:!0,opacity:.13,roughness:.08,metalness:.25,side:2,depthWrite:!1})}_mesh(t,e,{x:n=0,y:s=0,z:r=0,castShadow:o=!1,receiveShadow:a=!1}={}){const c=new zt(t,e);return c.position.set(n,s,r),c.castShadow=o,c.receiveShadow=a,c}_buildOfficeArchitecture(){const t=yr(),e=this._mesh(new B(28.4,.45,24.4),this._std(16777215,{map:t,roughness:.55,metalness:.12}),{x:0,y:-.22,z:0,receiveShadow:!0});this.officeFloorGroup.add(e);const n=this._std(1581621,{roughness:.65,metalness:.15}),s=this._mesh(new B(28.4,4.35,.35),n,{x:0,y:2.17,z:-12.17}),r=An.doorWidth/2+.1,a=[[-12.17,An.cz-r],[An.cz+r,12.17]].map(([d,p])=>this._mesh(new B(.35,4.35,p-d),n,{x:-14.17,y:2.17,z:(d+p)/2})),c=this._mesh(new B(.35,1.7,An.doorWidth+.2),n,{x:-14.17,y:3.5,z:An.cz});this.officeFloorGroup.add(s,...a,c);const l=new ne({color:3718648}),h=this._mesh(new B(28.2,.06,.06),l,{x:0,y:4.28,z:-11.95}),u=this._mesh(new B(.06,.06,24.2),l,{x:-13.95,y:4.28,z:0});this.officeFloorGroup.add(h,u);for(let d=0;d<3;d++){const p=-7+d*7;if(Math.abs(p-An.cz)<2.8)continue;const m=this._mesh(new B(.14,2.5,5.2),this._std(2898517,{metalness:.5}),{x:-13.95,y:2,z:p}),g=this._mesh(new B(.08,2.3,5),this._glassMaterial(),{x:-13.88,y:2,z:p});this.officeFloorGroup.add(m,g)}this._buildCorporateTowerAndRooftop(),this._buildEntryFacade(),this._buildExecutiveWing(),this._buildReception(),this._buildWaitingArea(),this._buildBoardroom();for(const d of ua)d.isBoss?this._buildBossSuite(d):d.slug==="atlas"?this._buildAtlasHub(d):d.isReception?this._buildReceptionStation(d):this._buildWorkstationZone(d),this._buildHumanoidAgent(d);this.exteriorGroundY=-10.45,this._buildExteriorLandscape(),this.automotiveCampus=new gp(this.scene,this.exteriorGroundY)}_buildExpansionWing(t){if(this._wings=this._wings||new Map,this._wings.has(t))return;const{x0:e,x1:n,cx:s}=Ha(t),r=n-e,o=this.officeFloorGroup,a=this.groundFloorGroup,c=this._std(988970,{metalness:.65,roughness:.35}),l=this._std(1581621,{roughness:.65,metalness:.15}),h=this._std(16777215,{map:ma(),roughness:.4,metalness:.35});o.add(this._mesh(new B(r,.45,vp*2),this._std(16777215,{map:yr(),roughness:.55,metalness:.12}),{x:s,y:-.22,z:0,receiveShadow:!0})),o.add(this._mesh(new B(r,4.35,.35),l,{x:s,y:2.17,z:-12.17})),o.add(this._mesh(new B(r-.2,.06,.06),new ne({color:3718648}),{x:s,y:4.28,z:-11.95}));const u=(m,g,_,f,S,v)=>a.add(this._mesh(new B(m,g,_),h,{x:f,y:S,z:v,receiveShadow:!0}));u(r,10,.38,s,-5.45,-11.91),u(r,10,.38,s,-5.45,11.91),u(.38,10,23.82,n-.19,-5.45,0),a.add(this._mesh(new B(r-.2,.28,24.8),c,{x:s+.1,y:-.35,z:0})),a.add(this._mesh(new B(r-.2,.06,24.9),new ne({color:3718648}),{x:s+.1,y:-.22,z:0})),a.add(this._mesh(new B(.55,10.4,.55),c,{x:n-.1,y:-5.2,z:-12.05})),a.add(this._mesh(new B(.55,10.4,.55),c,{x:n-.1,y:-5.2,z:12.05}));const d=ye(512,96);bi(d.ctx,512,96,{title:`ALA DE EXPANSÃO ${t}`,subtitle:"ESTAÇÕES PARA NOVOS COLABORADORES",accentHex:"#38bdf8"});const p=new Pn(new gn({map:d.texture,transparent:!0}));p.scale.set(3.4,.64,1),p.position.set(s,3.3,-11.7),o.add(p),this._wings.set(t,{markers:new Map})}_syncWingSlots(t){if(this._wings)for(const[e,n]of this._wings){const s=wp(e,t),r=new Set(s.map(o=>`${o.x}:${o.z}`));for(const o of s){const a=`${o.x}:${o.z}`;if(n.markers.has(a))continue;const c=new wi(new B(ca,.02,la)),l=new Ei(c,new ni({color:3718648,transparent:!0,opacity:.3}));l.position.set(o.x,.03,o.z),this.officeFloorGroup.add(l),n.markers.set(a,l)}for(const[o,a]of n.markers)a.visible=r.has(o)}}_buildEntryFacade(){const t=new _t,e=this._std(2504002,{roughness:.38,metalness:.72}),n=new Kt({color:10148043,transparent:!0,opacity:.2,roughness:.12,metalness:.3,side:2,depthWrite:!1});for(const s of[-13.75,-2,0,2,13.75])t.add(this._mesh(new B(.11,3.12,.18),e,{x:s,y:1.62,z:12.43}));for(const s of[-.73,.73])t.add(this._mesh(new B(1.38,2.9,.07),n,{x:s,y:1.57,z:12.45})),t.add(this._mesh(new B(.035,.42,.07),this._std(13358561,{metalness:.8}),{x:s+(s<0?.16:-.16),y:1.55,z:12.51}));this.officeFloorGroup.add(t)}_buildExteriorLandscape(){const t=this.exteriorGroundY,e=pa();e.repeat.set(24,24);const n=this._mesh(new B(150,.12,150),this._std(16777215,{map:e,roughness:.98}),{y:t-.06,receiveShadow:!0});this.exteriorGround=n,this.exteriorGroup.add(n);const s=this._std(5661298,{roughness:.92}),r=new zt(new Ii(20,24,72),s);r.rotation.x=-Math.PI/2,r.position.y=t+.02,r.receiveShadow=!0,this.exteriorGroup.add(r),this.exteriorGroup.add(this._mesh(new B(7.5,.08,22),s,{y:t+.035,z:23,receiveShadow:!0}));const o=new zt(new Or(6.5,32),s);o.rotation.x=-Math.PI/2,o.position.set(0,t+.025,34),o.receiveShadow=!0,this.exteriorGroup.add(o);const a=new Rt(.18,.28,2.4,7),c=[new Dn(1.45,2.6,7),new Dn(1.12,2.2,7),new Dn(.78,1.75,7)],l=this._std(5850420,{roughness:1}),h=[this._std(2057032,{roughness:1}),this._std(2980176,{roughness:1}),this._std(3703898,{roughness:1})];[[-33,-28,1.15],[-35,-8,.9],[-34,15,1.05],[-38,36,1.1],[-40,49,.95],[0,55,1.05],[38,37,1.15],[37,19,1.1],[39,-5,.9],[31,-29,1.15],[10,-40,1.05],[-15,-40,.95]].forEach(([d,p,m],g)=>{const _=new _t;_.position.set(d,t,p),_.scale.setScalar(m),_.add(this._mesh(a,l,{y:1.2,castShadow:!0})),_.add(this._mesh(c[0],h[g%h.length],{y:2.7,castShadow:!0})),_.add(this._mesh(c[1],h[(g+1)%h.length],{y:3.8,castShadow:!0})),_.add(this._mesh(c[2],h[(g+2)%h.length],{y:4.85,castShadow:!0})),this.exteriorGroup.add(_)})}_buildCorporateTowerAndRooftop(){const t=this.groundFloorGroup,e=this.rooftopGroup,n=ma(),s=Pp(),r=pa(),o=this._std(988970,{metalness:.65,roughness:.35}),a=this._std(16777215,{map:n,roughness:.4,metalness:.35}),c=(G,Y,Q,q,st,ut)=>{t.add(this._mesh(new B(G,Y,Q),a,{x:q,y:st,z:ut,receiveShadow:!0}))};c(28.2,10,.38,0,-5.45,-11.91),c(.38,10,23.82,-13.91,-5.45,0),c(.38,10,23.82,13.91,-5.45,0),c(28.2,5,.38,0,-2.95,11.91),c(4,5,.38,-12.1,-7.95,11.91),c(4,5,.38,12.1,-7.95,11.91);const l=new Kt({color:10148043,transparent:!0,opacity:.16,roughness:.12,metalness:.22,side:2,depthWrite:!1});t.add(this._mesh(new B(19.8,4.8,.06),l,{x:0,y:-7.95,z:12.12}));for(const G of[-9.9,-5,0,5,9.9])t.add(this._mesh(new B(.11,4.8,.14),o,{x:G,y:-7.95,z:12.18}));t.add(this._mesh(new B(19.8,.11,.14),o,{x:0,y:-7.95,z:12.18}));const h=l.clone();h.opacity=.07;for(const G of[-.66,.66])t.add(this._mesh(new B(1.24,4.55,.045),h,{x:G,y:-7.95,z:12.24})),t.add(this._mesh(new B(.045,.42,.06),o,{x:G+(G<0?.38:-.38),y:-7.95,z:12.29}));for(const G of[-14.05,0,14.05])for(const Y of[-12.05,0,12.05])G===0&&Y===0||t.add(this._mesh(new B(.55,10.4,.55),o,{x:G,y:-5.2,z:Y}));t.add(this._mesh(new B(28.8,.28,24.8),o,{x:0,y:-.35,z:0})),t.add(this._mesh(new B(28.9,.06,24.9),new ne({color:3718648}),{x:0,y:-.22,z:0}));const u=4.35,d=28.4,p=5.6,m=-14.8;e.add(this._mesh(new B(d,.35,p),this._std(1976635,{metalness:.35,roughness:.55}),{x:0,y:u-.17,z:m,receiveShadow:!0}));for(const G of[-13.8,-6.5,0,6.5,13.8])e.add(this._mesh(new B(.45,4.35,.45),o,{x:G,y:2.15,z:-17.3}));e.add(this._mesh(new B(d-.4,.06,p-.4),this._std(16777215,{map:s,roughness:.6}),{x:0,y:u+.02,z:m,receiveShadow:!0})),e.add(this._mesh(new B(9.2,.08,2.6),this._std(16777215,{map:r,roughness:.9}),{x:0,y:u+.04,z:-13.8,receiveShadow:!0}));const g=this._glassMaterial(),_=this._std(9741240,{metalness:.7,roughness:.25});e.add(this._mesh(new B(d-2.6,1.05,.06),g,{x:-1.2,y:u+.55,z:-12.05})),e.add(this._mesh(new B(d,1.05,.06),g,{x:0,y:u+.55,z:-17.55})),e.add(this._mesh(new B(.06,1.05,p),g,{x:-14.15,y:u+.55,z:m})),e.add(this._mesh(new B(.06,1.05,p),g,{x:14.15,y:u+.55,z:m})),e.add(this._mesh(new B(d-2.6,.06,.1),_,{x:-1.2,y:u+1.08,z:-12.05}));const f=12;for(let G=0;G<f;G++){const Y=(G+1)*(u/f),Q=-8.4-G*(3.6/f);e.add(this._mesh(new B(1.6,.12,.34),this._std(16777215,{map:s,roughness:.5}),{x:12.9,y:Y,z:Q,castShadow:!0}))}const S=this._std(2042167,{metalness:.5,roughness:.4});for(const G of[-10.8,-4.4])for(const Y of[-16.8,-13.2])e.add(this._mesh(new B(.16,2.5,.16),S,{x:G,y:u+1.25,z:Y}));for(let G=0;G<6;G++)e.add(this._mesh(new B(6.8,.1,.12),S,{x:-7.6,y:u+2.48,z:-16.6+G*.68}));const v=new In(16757844,12,16,1.5);v.position.set(-7.2,u+2.2,-14.8),e.add(v);const x=this._std(3359061,{roughness:.7}),L=this._std(14870768,{roughness:.85}),b=this._std(16347926,{roughness:.7});e.add(this._mesh(new B(3.6,.35,1),x,{x:-7.3,y:u+.22,z:-15.6,castShadow:!0})),e.add(this._mesh(new B(3.5,.14,.9),L,{x:-7.3,y:u+.44,z:-15.6})),e.add(this._mesh(new B(3.6,.55,.22),x,{x:-7.3,y:u+.65,z:-16.02})),e.add(this._mesh(new B(.35,.28,.18),b,{x:-8.2,y:u+.62,z:-15.82})),e.add(this._mesh(new B(.35,.28,.18),b,{x:-6.4,y:u+.62,z:-15.82})),e.add(this._mesh(new Rt(.65,.65,.08,24),this._std(16777215,{map:s}),{x:-7.3,y:u+.42,z:-14.2})),e.add(this._mesh(new Rt(.08,.12,.38,12),S,{x:-7.3,y:u+.2,z:-14.2})),e.add(this._mesh(new B(3.8,1.05,.9),this._std(1976635,{roughness:.5}),{x:6.8,y:u+.52,z:-16.1,castShadow:!0})),e.add(this._mesh(new B(4,.08,1.1),this._std(16777215,{map:s,roughness:.35}),{x:6.8,y:u+1.08,z:-16.1})),e.add(this._mesh(new B(.55,.42,.4),_,{x:5.9,y:u+1.32,z:-16.1}));for(const G of[-2.4,2.4])e.add(this._mesh(new Rt(.55,.55,.06,20),this._std(16317180),{x:G,y:u+.88,z:-14})),e.add(this._mesh(new Rt(.05,.08,.86,12),S,{x:G,y:u+.43,z:-14}));const A=this._buildPlant(-12.2,-13.5,1.35);A.position.y=u;const P=this._buildPlant(11.2,-13.5,1.35);P.position.y=u;const E=this._buildPlant(0,-16.4,1.45);E.position.y=u,e.add(A,P,E);const M=ye(1024,192);M.ctx.clearRect(0,0,1024,192),M.ctx.fillStyle="rgba(8, 13, 26, 0.94)",ci(M.ctx,8,8,1008,176,18),M.ctx.fill(),M.ctx.strokeStyle="#34d399",M.ctx.lineWidth=4,ci(M.ctx,8,8,1008,176,18),M.ctx.stroke(),M.ctx.textAlign="center",M.ctx.fillStyle="#f8fafc",M.ctx.font='800 76px "Segoe UI", system-ui, sans-serif',M.ctx.fillText("AXIORYN AI LABS",512,96),M.ctx.fillStyle="#a7f3d0",M.ctx.font='600 27px "Segoe UI", system-ui, sans-serif',M.ctx.fillText("HEADQUARTERS TOWER  •  ROOFTOP SKY LOUNGE",512,148),M.ctx.textAlign="left";const C=this._mesh(new B(8.6,1.5,.12),this._std(988970,{metalness:.5,roughness:.35}),{x:0,y:u+2.35,z:-17.55}),U=new zt(new Ee(8.4,1.42),new ne({map:M.texture,transparent:!0}));U.position.set(0,u+2.35,-17.47),e.add(C,U);const z=ye(512,96);bi(z.ctx,512,96,{title:"ROOFTOP SKY LOUNGE & CAFÉ",subtitle:"ÁREA DE DESCANSO DOS AGENTES EM IDLE",accentHex:"#10b981"});const k=new Pn(new gn({map:z.texture,transparent:!0,depthTest:!1}));k.scale.set(3.4,.64,1),k.position.set(0,u+1.45,-12.05),e.add(k),this.scene.add(t)}_buildExecutiveWing(){const t=new _t,{cx:e,cz:n,w:s,d:r,doorWidth:o}=An,a=s/2,c=r/2,l=2.65,h=this._glassMaterial(),u=this._std(3359068,{metalness:.55,roughness:.38}),d=yr();t.add(this._mesh(new B(s,.45,r),this._std(16777215,{map:d,roughness:.55,metalness:.12}),{x:e,y:-.22,z:n,receiveShadow:!0}));const p=new B(s,.08,r);t.add(this._mesh(p,this._std(1581880,{roughness:.85}),{x:e,y:.04,z:n,receiveShadow:!0})),t.add(new Ei(new wi(p),new ni({color:15381256})).translateX(e).translateY(.04).translateZ(n));const m=e-a,g=e+a;for(const v of[m,g]){const x=v===g,L=o/2,b=x?[[n-c,n-L],[n+L,n+c]]:[[n-c,n+c]];for(const[A,P]of b)t.add(this._mesh(new B(.05,l,P-A),h,{x:v,y:l/2+.04,z:(A+P)/2})),t.add(this._mesh(new B(.12,.09,P-A),u,{x:v,y:l+.04,z:(A+P)/2}))}for(const v of[n-c,n+c])t.add(this._mesh(new B(s,l,.05),h,{x:e,y:l/2+.04,z:v})),t.add(this._mesh(new B(s,.09,.12),u,{x:e,y:l+.04,z:v}));for(const v of[m,g])for(const x of[n-c,n+c])t.add(this._mesh(new B(.12,l+.1,.12),u,{x:v,y:(l+.1)/2,z:x}));for(const v of[n-o/2,n+o/2])t.add(this._mesh(new B(.12,l+.1,.12),u,{x:g,y:(l+.1)/2,z:v}));t.add(this._mesh(new B(.12,.1,o),u,{x:g,y:l+.04,z:n}));for(const v of[-o/4,o/4])t.add(this._mesh(new B(.035,l-.12,o/2-.04),h,{x:g,y:l/2+.04,z:n+v})),t.add(this._mesh(new B(.045,.32,.035),u,{x:g-.035,y:1.15,z:n+v+(v<0?.24:-.24)}));const _=ye(640,112);bi(_.ctx,640,112,{title:"DIRETORIA & COORDENAÇÃO",subtitle:"BOSS • ATLAS",accentHex:"#eab308"});const f=new Pn(new gn({map:_.texture,transparent:!0}));f.scale.set(3.4,.6,1),f.position.set(g+.1,3.25,n),t.add(f);for(const v of[n-c+.55,n+c-.55])t.add(this._buildPlant(e-a+.55,v,.7));this.officeFloorGroup.add(t);const S=this._std(1976635,{metalness:.65,roughness:.35});for(const v of[e-a+.25,e+a-.25])for(const x of[n-c+.25,n+c-.25])this.groundFloorGroup.add(this._mesh(new B(.42,10.1,.42),S,{x:v,y:-5.3,z:x}))}_buildBossSuite(t){const e=new _t,{x:n,z:s}=t,r=new _t;r.position.set(n,0,s-.65),r.add(this._mesh(new B(2.8,.14,1.25),this._std(2562321,{roughness:.35,metalness:.2}),{y:1.04,castShadow:!0})),r.add(this._mesh(new B(2.6,.72,.08),this._std(1120295,{metalness:.5}),{y:.64,z:-.52})),r.add(this._mesh(new B(2.62,.06,.09),new ne({color:15381256}),{y:.94,z:-.53}));const o=[],a=new ne({color:1976635});o.push(a);const c=this._std(988970,{metalness:.5,roughness:.3});r.add(this._mesh(new B(1.75,.85,.06),c,{x:0,y:1.58,z:-.35})),r.add(this._mesh(new Ee(1.65,.75),a,{x:0,y:1.58,z:-.31})),e.add(r);const l=this._stationSeat(t);e.add(this._buildChair(l.x,l.z,Math.PI,t.isBoss?15381256:t.color)),t.screenMats=o,this.officeFloorGroup.add(e)}_buildPlant(t,e,n=1){const s=new _t;s.position.set(t,0,e),s.scale.setScalar(n),s.add(this._mesh(new Rt(.17,.22,.26,12),this._std(2634314),{y:.13})),s.add(this._mesh(new Rt(.035,.045,.5,8),this._std(4020794),{y:.5}));const r=this._std(3112271,{roughness:.95});for(let o=0;o<4;o++){const a=this._mesh(new jt(.2,10,8),r,{x:Math.cos(o*1.7)*.14,y:.86+o*.09,z:Math.sin(o*1.7)*.14});a.scale.y=.8,s.add(a)}return this.officeFloorGroup.add(s),s}_buildReception(){const t=new _t,e=this._std(3425087,{roughness:.88});t.add(this._mesh(new B(6.8,2.75,.18),e,{x:0,y:1.45,z:7,castShadow:!0})),t.add(this._mesh(new B(6.8,.07,.22),this._std(13018475,{metalness:.18}),{x:0,y:2.86,z:7}));const n=ye(768,220);n.ctx.fillStyle="#263532",ci(n.ctx,6,6,756,208,22),n.ctx.fill(),n.ctx.fillStyle="#d4ae70",n.ctx.fillRect(40,42,8,136),n.ctx.textAlign="center",n.ctx.fillStyle="#f8fafc",n.ctx.font='700 58px "Segoe UI", system-ui, sans-serif',n.ctx.fillText("AXIORYN AI LABS",410,94),n.ctx.fillStyle="#e6c995",n.ctx.font='600 27px "Segoe UI", system-ui, sans-serif',n.ctx.fillText("RECEPÇÃO  •  ATENDIMENTO",410,151),n.ctx.textAlign="left";const s=new zt(new Ee(4.8,1.38),new ne({map:n.texture,transparent:!0}));s.position.set(0,2.15,7.105),t.add(s),t.add(this._mesh(new B(9.4,.05,2.6),this._std(3885639,{roughness:.95}),{x:0,y:.03,z:8.8,receiveShadow:!0}));const r=new Ei(new wi(new B(9.4,.06,2.6)),new ni({color:13018475}));r.position.set(0,.04,8.8),t.add(r);const o=this._std(5916212,{roughness:.72,metalness:.08}),a=this._mesh(new B(4.2,1.05,.42),o,{x:0,y:.52,z:9.4,castShadow:!0});t.add(a),t.add(this._mesh(new B(4.5,.09,1.35),this._std(11635548,{roughness:.52}),{x:0,y:1.08,z:9.28,castShadow:!0})),t.add(this._mesh(new B(.4,1.05,.9),o,{x:-2.3,y:.52,z:8.95})),t.add(this._mesh(new B(.4,1.05,.9),o,{x:2.3,y:.52,z:8.95}));const c=this._mesh(new B(4,.05,.03),new ne({color:3718648}),{x:0,y:.14,z:9.62});t.add(c),t.add(this._mesh(new B(.9,.55,.05),this._std(659224),{x:1.2,y:1.5,z:9.1,rotation:Math.PI*.94}));const l=this._std(988452,{metalness:.4});t.add(this._mesh(new B(.46,.08,.38),l,{y:.05,z:10.4,castShadow:!0})),t.add(this._mesh(new B(.14,.82,.14),l,{y:.49,z:10.4,castShadow:!0}));const h=this._mesh(new B(.78,.52,.06),this._std(725785,{metalness:.35}),{y:1.1,z:10.4});h.rotation.x=-.4,t.add(h);const u=ye(256,160);u.ctx.fillStyle="#0b1319",u.ctx.fillRect(0,0,256,160),u.ctx.fillStyle="#34d399",u.ctx.fillRect(16,16,224,6),u.ctx.textAlign="center",u.ctx.fillStyle="#d1fae5",u.ctx.font='700 23px "Segoe UI", sans-serif',u.ctx.fillText("BEM-VINDO",128,62),u.ctx.fillStyle="#34d399",u.ctx.font='700 20px "Segoe UI", sans-serif',u.ctx.fillText("RETIRE SUA SENHA",128,100),u.ctx.fillStyle="#94a3b8",u.ctx.font='500 16px "Segoe UI", sans-serif',u.ctx.fillText("ATENDIMENTO AXIORYN",128,132);const d=this._mesh(new Ee(.7,.44),new ne({map:u.texture}),{y:1.109,z:10.432});d.rotation.x=-.4,t.add(d),this.officeFloorGroup.add(t)}_buildWaitingArea(){const t=new _t,e=new B(11,.06,2.2);t.add(this._mesh(e,this._std(3885639,{roughness:.96}),{y:.03,z:11.1,receiveShadow:!0}));const n=new Ei(new wi(e),new ni({color:13018475}));n.position.set(0,.04,11.1),t.add(n);const s=ye(1024,160);s.ctx.fillStyle="#d9c49d",s.ctx.fillRect(78,42,8,76),s.ctx.textAlign="center",s.ctx.fillStyle="#f1e8d6",s.ctx.font='700 58px "Segoe UI", system-ui, sans-serif',s.ctx.fillText("AXIORYN AI LABS",540,102),s.ctx.textAlign="left";const r=new zt(new Ee(6.8,.86),new ne({map:s.texture,transparent:!0}));r.rotation.x=-Math.PI/2,r.position.set(0,.062,11.7),t.add(r);const o=this._std(6650496,{roughness:.94}),a=this._std(3359039,{roughness:.48,metalness:.38}),c=this._std(9138258,{roughness:.58,metalness:.08});for(const h of[-3.9,-1.3,1.3,3.9]){const u=new _t;u.position.set(h,0,11.1),u.rotation.y=Math.PI;for(const p of[-.34,.34])for(const m of[-.25,.25])u.add(this._mesh(new Rt(.025,.035,.48,8),a,{x:p,y:.24,z:m,castShadow:!0}));u.add(this._mesh(new B(.86,.14,.74),o,{y:.52,castShadow:!0})),u.add(this._mesh(new B(.82,.1,.68),o,{y:.64,z:.015}));const d=this._mesh(new B(.86,.82,.15),o,{y:1.05,z:-.3,castShadow:!0});d.rotation.x=-.08,u.add(d);for(const p of[-1,1])u.add(this._mesh(new B(.1,.12,.66),c,{x:p*.48,y:.82,z:.03,castShadow:!0})),u.add(this._mesh(new B(.055,.28,.06),a,{x:p*.45,y:.66,z:-.2})),u.add(this._mesh(new B(.055,.2,.06),a,{x:p*.45,y:.62,z:.25}));t.add(u)}const l=new _t;l.position.set(4.75,0,10.65),l.add(this._mesh(new Rt(.34,.37,.1,20),this._std(9138258),{y:.62,castShadow:!0})),l.add(this._mesh(new Rt(.055,.075,.55,12),a,{y:.31})),l.add(this._mesh(new Rt(.11,.095,.18,16),this._std(14997180),{y:.76})),l.add(this._mesh(new Rt(.084,.084,.012,16),this._std(4993057),{y:.857})),t.add(l),this.officeFloorGroup.add(t),this._buildPlant(-5.1,10.6,.8)}_buildBoardroom(){const t=new _t,{cx:e,cz:n,w:s,d:r}=Mr,o=s/2,a=r/2;t.add(this._mesh(new B(s,.06,r),this._std(1450812,{roughness:.95}),{x:e,y:.03,z:n,receiveShadow:!0}));const c=ye(1024,512);c.ctx.fillStyle="#14253b",c.ctx.fillRect(0,0,1024,512),c.ctx.strokeStyle="#38bdf8",c.ctx.lineWidth=12,c.ctx.strokeRect(24,24,976,464),c.ctx.strokeStyle="#eab308",c.ctx.lineWidth=4,c.ctx.strokeRect(44,44,936,424),c.ctx.textAlign="center",c.ctx.fillStyle="#f8fafc",c.ctx.font='800 104px "Segoe UI", system-ui, sans-serif',c.ctx.fillText("AXIORYN",512,252),c.ctx.fillStyle="#7dd3fc",c.ctx.font='600 30px "Segoe UI", system-ui, sans-serif',c.ctx.fillText("SALA DE REUNIÕES",512,314),c.ctx.textAlign="left";const l=new zt(new Ee(8.2,4.6),new ne({map:c.texture}));l.rotation.x=-Math.PI/2,l.position.set(e,.061,n),t.add(l);const h=this._glassMaterial(),u=this._std(3359068,{metalness:.5,roughness:.4}),d=2.6,p=n+a,m=n-a;for(const[U,z]of[[-(o+.9)/2,o-.9],[(o+.9)/2,o-.9]]){const k=this._mesh(new B(z,d,.05),h,{x:e+U,y:d/2+.05,z:p}),G=this._mesh(new B(z,.1,.12),u,{x:e+U,y:d+.05,z:p});t.add(k,G)}const g=this._mesh(new B(.1,d+.05,.14),u,{x:e-.9,y:(d+.05)/2,z:p}),_=this._mesh(new B(.1,d+.05,.14),u,{x:e+.9,y:(d+.05)/2,z:p}),f=this._mesh(new B(1.9,.12,.14),u,{x:e,y:d+.1,z:p});t.add(g,_,f);for(const U of[-.43,.43])t.add(this._mesh(new B(.82,d-.08,.035),h,{x:e+U,y:d/2+.05,z:p}));for(const U of[-1,1]){const z=this._mesh(new B(.05,d,r),h,{x:e+U*o,y:d/2+.05,z:n}),k=this._mesh(new B(.12,.1,r),u,{x:e+U*o,y:d+.05,z:n});t.add(z,k);const G=this._mesh(new B(.12,d+.12,.12),u,{x:e+U*o,y:(d+.05)/2,z:p});t.add(G)}t.add(this._mesh(new B(5.4,.14,2.1),this._std(2965345,{roughness:.45,metalness:.2}),{x:e,y:1,z:n,castShadow:!0})),t.add(this._mesh(new B(.18,.95,1.75),this._std(1845056),{x:e-2.2,y:.48,z:n})),t.add(this._mesh(new B(.18,.95,1.75),this._std(1845056),{x:e+2.2,y:.48,z:n})),this.holoCoreMat=new Kt({color:3718648,emissive:959977,emissiveIntensity:1.2,transparent:!0,opacity:.85});const S=this._mesh(new Rt(.3,.34,.06,20),this._std(988452,{metalness:.5}),{x:e,y:1.1,z:n});this.holoCore=this._mesh(new ri(.16,0),this.holoCoreMat,{x:e,y:1.38,z:n}),t.add(S,this.holoCore);for(const U of Object.keys(ei)){const z=ei[U];t.add(this._buildChair(e+z.x,z.z,z.rotY,6583435))}t.add(this._mesh(new B(3.9,2.2,.1),this._std(659224,{metalness:.3}),{x:e,y:1.75,z:m+.24}));const v=ye(512,288),x=v.ctx;x.fillStyle="#04101c",x.fillRect(0,0,512,288),x.fillStyle="#38bdf8",x.fillRect(0,0,512,42),x.fillStyle="#04101c",x.font='700 24px "Segoe UI", sans-serif',x.fillText("AXIORYN AI LABS — PAINEL OPERACIONAL",16,29),[64,120,90,150,110,170,84,132,158,100,142,76].forEach((U,z)=>{x.fillStyle=z%3===0?"#0ea5e9":"#155e75",x.fillRect(24+z*38,264-U,26,U)}),x.fillStyle="#7dd3fc",x.font='600 16px "Segoe UI", sans-serif',x.fillText("INFERÊNCIA 100% LOCAL • OLLAMA • MODELO ÚNICO 14B EM VRAM",16,279);const b=this._mesh(new Ee(3.7,2.05),new ne({map:v.texture}),{x:e,y:1.75,z:m+.31});t.add(b);for(const[U,z,k]of[[e-4.5,"PROPÓSITO","#38bdf8"],[e+4.5,"VISÃO","#eab308"]]){const G=ye(256,176);G.ctx.fillStyle="#0b1525",G.ctx.fillRect(0,0,256,176),G.ctx.strokeStyle=k,G.ctx.lineWidth=7,G.ctx.strokeRect(9,9,238,158),G.ctx.beginPath(),G.ctx.arc(128,70,38,0,Math.PI*2),G.ctx.stroke(),G.ctx.beginPath(),G.ctx.moveTo(46,128),G.ctx.lineTo(210,128),G.ctx.stroke(),G.ctx.textAlign="center",G.ctx.fillStyle="#e2e8f0",G.ctx.font='700 20px "Segoe UI", system-ui, sans-serif',G.ctx.fillText(z,128,154),G.ctx.textAlign="left",t.add(this._mesh(new B(1.45,1.08,.09),u,{x:U,y:2,z:m+.23})),t.add(this._mesh(new Ee(1.31,.94),new ne({map:G.texture}),{x:U,y:2,z:m+.31}))}const A=this._mesh(new Rt(.28,.28,.05,24),this._std(15265269),{x:e+3,y:2.3,z:m+.25});A.rotation.x=Math.PI/2;const P=this._mesh(new B(.03,.2,.02),this._std(988970),{x:e+3,y:2.3,z:m+.29}),E=this._mesh(new B(.03,.14,.02),this._std(988970),{x:e+3,y:2.3,z:m+.29});E.rotation.z=-Math.PI/2,t.add(A,P,E);const M=ye(512,96);bi(M.ctx,512,96,{title:"BOARDROOM",subtitle:"SALA DE REUNIÃO EXECUTIVA",accentHex:"#38bdf8"});const C=new Pn(new gn({map:M.texture,transparent:!0,depthTest:!1}));C.scale.set(2.6,.49,1),C.position.set(e,2.95,n+a+.35),t.add(C),this.officeFloorGroup.add(t)}_buildWorkstationZone(t){const e=new _t,{x:n,z:s}=t,r=!!t.compact,o=!!t.dynamic,a=r?5.6:ca,c=r?3.2:la,l=a/2,h=c/2,u=new B(a,.08,c),d=t.slug==="neo"?398350:1252401,p=this._mesh(u,this._std(d,{roughness:.9}),{x:n,y:.04,z:s,receiveShadow:!0});e.add(p);const m=new Ei(new wi(u),new ni({color:t.color}));m.position.set(n,.04,s),e.add(m);const g=this._glassMaterial(),_=this._std(3359068,{metalness:.5,roughness:.4}),f=r?2.1:2.4,S=r?1.5:1.8,v=s<0?s+h:s-h,x=s<0?s-h:s+h;for(const k of[n-l,n+l])e.add(this._mesh(new B(.05,f,c),g,{x:k,y:f/2+.04,z:s})),e.add(this._mesh(new B(.12,.09,c),_,{x:k,y:f+.04,z:s}));e.add(this._mesh(new B(a,f,.05),g,{x:n,y:f/2+.04,z:x})),e.add(this._mesh(new B(a,.09,.12),_,{x:n,y:f+.04,z:x}));for(const k of[-1,1]){const G=l-S/2;e.add(this._mesh(new B(G,f,.05),g,{x:n+k*(S/2+G/2),y:f/2+.04,z:v})),e.add(this._mesh(new B(G,.09,.12),_,{x:n+k*(S/2+G/2),y:f+.04,z:v})),e.add(this._mesh(new B(.12,f+.1,.12),_,{x:n+k*l,y:(f+.1)/2,z:v})),e.add(this._mesh(new B(.12,f+.1,.12),_,{x:n+k*S/2,y:(f+.1)/2,z:v})),e.add(this._mesh(new B(S/2-.06,f-.12,.035),g,{x:n+k*S/4,y:f/2+.04,z:v}))}for(const k of[n-l,n+l])for(const G of[v,x])e.add(this._mesh(new B(.12,f+.1,.12),_,{x:k,y:(f+.1)/2,z:G}));e.add(this._mesh(new B(S,.1,.12),_,{x:n,y:f+.04,z:v}));const L=new _t;L.position.set(n,0,s-.8),L.add(this._mesh(new B(3.4,.14,1.5),this._std(3359071,{roughness:.5,metalness:.2}),{y:1.02,castShadow:!0})),L.add(this._mesh(new B(3,.55,.07),this._std(2240586),{y:.72,z:-.5})),L.add(this._mesh(new B(.12,1,1.25),this._std(988452),{x:-1.55,y:.5})),L.add(this._mesh(new B(.12,1,1.25),this._std(988452),{x:1.55,y:.5})),L.add(this._mesh(new B(3.2,.05,.34),this._std(2832981),{y:2.05,z:-.55})),L.add(this._mesh(new B(.1,.95,.3),this._std(2240586),{x:-1.5,y:1.55,z:-.55})),L.add(this._mesh(new B(.1,.95,.3),this._std(2240586),{x:1.5,y:1.55,z:-.55})),L.add(this._mesh(new B(.5,.16,.24),this._std(4865899),{x:-.9,y:2.16,z:-.55})),L.add(this._mesh(new B(.4,.12,.22),this._std(3104138),{x:-.3,y:2.14,z:-.55}));const b=[],A=new ne({color:1976635});b.push(A);const P=this._std(659224,{metalness:.35,roughness:.4});L.add(this._mesh(new B(1.5,.9,.07),P,{x:-.25,y:1.62,z:-.5})),L.add(this._mesh(new Ee(1.38,.78),A,{x:-.25,y:1.62,z:-.45})),L.add(this._mesh(new Rt(.04,.09,.28,10),P,{x:-.25,y:1.19,z:-.55}));const E=new ne({color:1581620});b.push(E);const M=new _t;M.position.set(1.05,0,-.42),M.rotation.y=-.5,M.add(this._mesh(new B(1,.62,.06),P,{y:1.52})),M.add(this._mesh(new Ee(.9,.52),E,{y:1.52,z:.035})),M.add(this._mesh(new Rt(.03,.07,.22,10),P,{y:1.15,z:-.05})),L.add(M),L.add(this._mesh(new B(.8,.045,.28),this._std(1120295,{roughness:.5}),{x:-.15,y:1.11,z:.28})),L.add(this._mesh(new B(.1,.04,.15),this._std(1120295),{x:.45,y:1.11,z:.3})),L.add(this._mesh(new Rt(.05,.05,.11,10),this._std(Lp(t.color),{roughness:.4}),{x:-.85,y:1.14,z:.32})),e.add(L);const C=this._stationSeat(t);if(e.add(this._buildChair(C.x,C.z,Math.PI,t.color)),!o){const k=ye(512,96);bi(k.ctx,512,96,{title:t.name,subtitle:"DEPARTAMENTO AXIORYN",accentHex:Sr(t.color)});const G=new Pn(new gn({map:k.texture,transparent:!0}));G.scale.set(2.25,.43,1);const Y=v+(s<0?.3:-.3);G.position.set(n,3.45,Y),e.add(G)}const U=n<0?n-l+.45:n+l-.45,z=s<0?s-h+.45:s+h-.45;e.add(this._buildPlant(U,z,.85)),t.screenMats=b,this.officeFloorGroup.add(e)}_buildAtlasHub(t){const e=new _t,{x:n,z:s}=t;e.add(this._mesh(new Rt(1.25,1.32,.08,40),this._std(99e4,{roughness:.85}),{x:n,y:.04,z:s,receiveShadow:!0})),this.hubRingMat=new ne({color:3718648,transparent:!0,opacity:.85,side:2});const r=new zt(new Ii(1.1,1.22,40),this.hubRingMat);r.rotation.x=-Math.PI/2,r.position.set(n,.09,s),e.add(r);const o=new _t;o.position.set(n,0,s-1),o.add(this._mesh(new Rt(.9,.9,.12,28),this._std(3359071,{roughness:.45,metalness:.3}),{y:1.02,castShadow:!0})),o.add(this._mesh(new Rt(.14,.2,.95,16),this._std(1845056,{metalness:.4}),{y:.5})),o.add(this._mesh(new Rt(.5,.55,.06,20),this._std(1845056),{y:.03}));const a=[],c=this._std(659224,{metalness:.35,roughness:.4}),l=(d,p,m,g)=>{const _=new ne({color:1976635});a.push(_);const f=new _t;f.position.set(m,1.6,-.35),f.rotation.y=g,f.add(this._mesh(new B(d,p,.07),c,{y:0})),f.add(this._mesh(new Ee(d-.12,p-.12),_,{y:0,z:.04})),f.add(this._mesh(new Rt(.03,.07,.2,10),c,{y:-p/2-.1,z:-.05})),o.add(f)};l(1.5,.88,0,0),l(1.05,.6,-1.05,.55),l(1.05,.6,1.05,-.55),o.add(this._mesh(new B(.8,.04,.26),this._std(1120295,{roughness:.5}),{x:0,y:1.11,z:.4})),e.add(o),this.atlasHoloMat=new ne({color:3718648,transparent:!0,opacity:.35}),e.add(this._mesh(new Rt(.24,.3,.08,20),this._std(988452,{metalness:.5}),{x:n+1.35,y:.04,z:s+.75}));const h=this._mesh(new Rt(.08,.12,1.2,12,1,!0),this.atlasHoloMat,{x:n+1.35,y:.7,z:s+.75});e.add(h),this.atlasHoloGem=this._mesh(new ri(.16,0),new Kt({color:3718648,emissive:959977,emissiveIntensity:1}),{x:n+1.35,y:1.45,z:s+.75}),e.add(this.atlasHoloGem);const u=this._stationSeat(t);e.add(this._buildChair(u.x,u.z,Math.PI,t.color)),t.screenMats=a,this.officeFloorGroup.add(e)}_stationSeat(t){var n;const e=(n=this._homes)==null?void 0:n[t.slug];return{x:e?e.x:t.x,z:(e?e.z:t.z)+.15}}_buildChair(t,e,n,s){const r=new _t;r.position.set(t,0,e),r.rotation.y=n;const o=this._std(1910585,{roughness:.6}),a=this._std(1120295,{metalness:.4,roughness:.45});r.add(this._mesh(new Rt(.3,.32,.05,20),a,{y:.03})),r.add(this._mesh(new Rt(.04,.045,.34,12),a,{y:.22})),r.add(this._mesh(new B(.46,.09,.44),o,{y:.58,castShadow:!0}));const c=this._mesh(new B(.44,.6,.09),o,{y:1,z:-.23});c.rotation.x=-.1,r.add(c),r.add(this._mesh(new B(.3,.14,.07),o,{y:1.36,z:-.27})),r.add(this._mesh(new B(.44,.05,.1),this._std(s,{emissive:s,emissiveIntensity:.25}),{y:.82,z:-.24}));for(const l of[-1,1])r.add(this._mesh(new B(.05,.05,.3),o,{x:l*.27,y:.75,z:.02})),r.add(this._mesh(new B(.05,.14,.05),a,{x:l*.27,y:.66,z:.12}));return r}_buildReceptionStation(t){const e=new _t,n=this._stationSeat(t);e.add(this._buildChair(n.x,n.z,0,t.color)),this.officeFloorGroup.add(e)}_buildHumanoidAgent(t){const e=Math.max(0,ua.findIndex(D=>D.slug===t.slug)),n=Cp[t.slug]||{blazer:t.color||2450411,pants:1976635,shirt:16317180,tie:t.color||3718648,skin:da[e%da.length],hair:fa[e%fa.length],hairStyle:"quiff"},s=!!n.matrixGlasses,r=t.slug==="boss",o=n.skin,a=n.hair,c=n.blazer,l=n.shirt,h=t.color||n.tie,u=n.pants,d=new _t,p=this._stationSeat(t);d.position.set(p.x,0,p.z),d.rotation.y=vr.has(t.slug)?0:Math.PI,d.scale.setScalar(r?1.34:1.26),t.spawnOnHire&&(d.visible=!1);const m=D=>(D.userData.agentSlug=t.slug,D),g=new ne({color:h,side:2,transparent:!0,opacity:.85}),_=m(new zt(new Ii(.45,.58,36),g));_.rotation.x=-Math.PI/2,_.position.y=.04,d.add(_);const f=new ne({color:xr.WORKING}),S=m(new zt(new ri(.085,0),f));S.position.y=1.72,d.add(S);const v=ye(320,112);Er(v.ctx,320,112,{name:t.slug,role:"",status:"IDLE",accentHex:Sr(h)});const x=m(new Pn(new gn({map:v.texture,transparent:!0,depthTest:!1})));x.scale.set(1.08,.38,1),x.position.y=1.95+e%2*.14,d.add(x);const L=new _t;L.position.y=.64,d.add(m(L));const b=this._std(u,{roughness:.55}),A=m(this._mesh(new jt(.17,20,16),b,{castShadow:!0}));A.scale.set(1.04,.6,.8),L.add(A);const P=m(this._mesh(new $e(.163,.02,8,28),this._std(1120295,{roughness:.32,metalness:.35}),{y:.075}));P.rotation.x=Math.PI/2,L.add(P),L.add(m(this._mesh(new B(.055,.036,.024),this._std(r?16436245:14147048,{metalness:.9,roughness:.12}),{y:.075,z:.158})));const E=D=>{const V=new _t;V.position.set(D*.098,-.02,0),L.add(m(V)),V.add(m(this._mesh(new Fe(.068,.27,6,16),b,{y:-.19,castShadow:!0})));const $=new _t;$.position.y=-.37,V.add(m($)),$.add(m(this._mesh(new jt(.06,14,12),b))),$.add(m(this._mesh(new Fe(.052,.25,6,16),b,{y:-.19,castShadow:!0})));const H=new _t;H.position.set(0,-.385,.05),H.add(m(this._mesh(new B(.105,.055,.2),this._std(1251878,{roughness:.28,metalness:.3}),{y:.012})));const at=m(this._mesh(new jt(.052,14,12),this._std(1251878,{roughness:.28,metalness:.3}),{y:.012,z:.115}));return at.scale.set(1.02,.62,1.08),H.add(at),H.add(m(this._mesh(new B(.112,.02,.225),this._std(658966,{roughness:.5}),{y:-.026}))),$.add(H),{hip:V,knee:$}},M=E(-1),C=E(1),U=new _t;U.position.y=.08,L.add(m(U));const z=this._std(c,{roughness:.4,metalness:.18}),k=[[.02,0],[.192,0],[.186,.055],[.166,.13],[.17,.21],[.194,.31],[.199,.385],[.187,.45],[.152,.495],[.096,.52],[.076,.535]].map(([D,V])=>new it(D,V)),G=m(this._mesh(new Ls(k,30),z,{y:0,castShadow:!0}));G.scale.set(1.1,1,.76),U.add(G),U.add(m(this._mesh(new B(.155,.4,.048),this._std(l,{roughness:.5}),{y:.27,z:.135})));const Y=this._std(c,{roughness:.34,metalness:.22}),Q=m(this._mesh(new B(.058,.34,.034),Y,{x:-.078,y:.325,z:.15}));Q.rotation.z=-.2;const q=m(this._mesh(new B(.058,.34,.034),Y,{x:.078,y:.325,z:.15}));q.rotation.z=.2,U.add(Q,q);const st=m(this._mesh(new B(.07,.045,.02),this._std(16777215,{roughness:.45}),{x:-.042,y:.505,z:.118}));st.rotation.z=.32;const ut=m(this._mesh(new B(.07,.045,.02),this._std(16777215,{roughness:.45}),{x:.042,y:.505,z:.118}));ut.rotation.z=-.32,U.add(st,ut);const yt=this._std(n.tie||h,{emissive:n.tie||h,emissiveIntensity:.28}),Nt=m(this._mesh(new B(.045,.045,.032),yt,{y:.462,z:.145}));Nt.rotation.x=-.12,U.add(Nt),U.add(m(this._mesh(new B(.062,.31,.034),yt,{y:.285,z:.152}))),U.add(m(this._mesh(new B(.05,.022,.018),this._std(n.tie||h,{emissive:n.tie||h,emissiveIntensity:.35}),{x:.115,y:.37,z:.148})));for(const D of[.13,.05])U.add(m(this._mesh(new jt(.011,10,10),this._std(856864,{metalness:.7,roughness:.25}),{y:D,z:.147})));r&&U.add(m(this._mesh(new ri(.042,0),this._std(16436245,{emissive:15381256,emissiveIntensity:.65,metalness:.9}),{x:-.12,y:.41,z:.16}))),U.add(m(this._mesh(new Rt(.06,.072,.12,16),this._std(o,{roughness:.5}),{y:.56})));const xt=new _t;xt.position.y=.7,U.add(m(xt)),xt.scale.setScalar(.94);const K=this._std(o,{roughness:.46}),tt=m(this._mesh(new jt(.17,28,24),K,{castShadow:!0}));tt.scale.set(.97,1.05,.98),xt.add(tt);for(const D of[-1,1]){const V=m(this._mesh(new jt(.055,12,10),K,{x:D*.088,y:-.02,z:.108}));V.scale.set(.8,.7,.55),xt.add(V)}const gt=m(this._mesh(new jt(.1,18,14),K,{x:0,y:-.08,z:.038}));gt.scale.set(.88,.64,.78),xt.add(gt);for(const D of[-1,1])xt.add(m(this._mesh(new jt(.037,12,12),K,{x:D*.162,y:-.005,z:-.008})));const ot=m(this._mesh(new B(.022,.048,.024),K,{y:.002,z:.16}));ot.rotation.x=-.12,xt.add(ot),xt.add(m(this._mesh(new jt(.017,10,10),K,{y:-.022,z:.172})));const bt=m(new zt(new $e(.03,.006,8,16,Math.PI*.8),this._std(9062975,{roughness:.6})));bt.position.set(0,-.05,.152),bt.rotation.z=-Math.PI/2-Math.PI*.8/2,xt.add(bt);const At=this._std(a,{roughness:.68,metalness:.06}),Ft=m(this._mesh(new jt(.184,26,20),At,{y:.048,z:-.024}));if(Ft.scale.set(1.02,.88,1.04),xt.add(Ft),n.hairStyle==="long"){xt.add(m(this._mesh(new B(.3,.3,.16),At,{y:-.06,z:-.088})));for(const D of[-1,1]){const V=m(this._mesh(new B(.058,.21,.09),At,{x:D*.148,y:-.065,z:.008}));V.rotation.z=D*.06,xt.add(V)}xt.add(m(this._mesh(new B(.2,.045,.08),At,{y:.13,z:.1})))}else if(n.hairStyle==="spiky")[[-.09,.15,.03,-.3],[-.03,.18,.07,-.1],[.05,.19,.04,.12],[.1,.15,.01,.34],[-.06,.16,-.06,-.2],[.04,.17,-.07,.1]].forEach(([V,$,H,at])=>{const nt=m(this._mesh(new Dn(.044,.1,8),At,{x:V,y:$,z:H}));nt.rotation.z=at,xt.add(nt)});else{const D=m(this._mesh(new B(.22,.05,.11),At,{y:.152,z:.088}));n.hairStyle==="quiff"&&(D.rotation.x=-.3),n.hairStyle==="parted"&&(D.rotation.z=.16),n.hairStyle==="slick"&&(D.rotation.x=-.12),xt.add(D),xt.add(m(this._mesh(new B(.12,.035,.09),At,{y:.16,z:.06})))}const ce=this._std(a,{roughness:.85}),Gt=new ne({color:16777215}),ue=new ne({color:h}),O=new ne({color:593174}),Ae=D=>{const V=new _t;return V.position.set(D*.058,.022,.15),xt.add(m(V)),V.add(m(this._mesh(new jt(.027,12,12),Gt))),V.add(m(this._mesh(new jt(.016,10,10),ue,{z:.015}))),V.add(m(this._mesh(new jt(.0095,8,8),O,{z:.023}))),V.add(m(this._mesh(new jt(.005,6,6),Gt,{x:.006,y:.006,z:.027}))),V},kt=Ae(-1),Vt=Ae(1);for(const D of[-1,1]){const V=m(this._mesh(new B(.056,.015,.016),ce,{x:D*.058,y:.062,z:.156}));V.rotation.z=-D*.1,xt.add(V)}if(s){const D=this._std(263946,{metalness:.9,roughness:.1}),V=this._std(65382,{emissive:65382,emissiveIntensity:.55});xt.add(m(this._mesh(new B(.115,.05,.026),D,{x:-.062,y:.025,z:.175}))),xt.add(m(this._mesh(new B(.115,.05,.026),D,{x:.062,y:.025,z:.175}))),xt.add(m(this._mesh(new B(.255,.013,.028),V,{x:0,y:.052,z:.176})))}else if(n.glasses){const D=this._std(988970,{metalness:.6,roughness:.3}),V=$=>{const H=new Fa;H.moveTo(-.028,-.021),H.lineTo(.028,-.021),H.lineTo(.028,.021),H.lineTo(-.028,.021),H.closePath();const at=new As;at.moveTo(-.021,-.014),at.lineTo(.021,-.014),at.lineTo(.021,.014),at.lineTo(-.021,.014),at.closePath(),H.holes.push(at);const nt=m(new zt(new zr(H),D));nt.position.set($*.062,.026,.178),xt.add(nt)};V(-1),V(1),xt.add(m(this._mesh(new B(.032,.008,.008),D,{x:0,y:.032,z:.178})));for(const $ of[-1,1])xt.add(m(this._mesh(new B(.1,.008,.008),D,{x:$*.132,y:.032,z:.148})))}else if(n.headset){const D=this._std(988970,{metalness:.5,roughness:.35}),V=m(new zt(new $e(.186,.012,8,24,Math.PI),D));V.position.set(0,.03,-.01),xt.add(V);for(const at of[-1,1]){const nt=m(this._mesh(new Rt(.045,.048,.028,16),D,{x:at*.188,y:-.005,z:-.008}));nt.rotation.z=Math.PI/2,xt.add(nt)}const $=m(this._mesh(new $e(.028,.006,8,16),this._std(h,{emissive:h,emissiveIntensity:.55}),{x:.202,y:-.005,z:-.008}));$.rotation.y=Math.PI/2,xt.add($);const H=m(this._mesh(new Fe(.006,.05,4,8),D,{x:.13,y:-.06,z:.09}));H.rotation.z=.9,xt.add(H),xt.add(m(this._mesh(new jt(.011,8,8),this._std(h,{emissive:h,emissiveIntensity:.6}),{x:.1,y:-.075,z:.105})))}const Tt=D=>{const V=new _t;V.position.set(D*.262,.462,0),U.add(m(V));const $=m(this._mesh(new jt(.078,16,14),z,{castShadow:!0}));$.scale.set(1,.9,.88),V.add($),V.add(m(this._mesh(new Fe(.056,.17,6,14),z,{y:-.14,castShadow:!0})));const H=new _t;if(H.position.y=-.28,V.add(m(H)),H.add(m(this._mesh(new jt(.048,12,12),z))),H.add(m(this._mesh(new Fe(.045,.155,6,14),z,{y:-.12}))),H.add(m(this._mesh(new Fe(.047,.012,4,12),this._std(16317180,{roughness:.5}),{y:-.24}))),D===-1){const pt=m(new zt(new $e(.035,.009,8,18),this._std(r?16436245:9741240,{metalness:.9,roughness:.18})));pt.rotation.x=Math.PI/2,pt.position.y=-.24,H.add(pt)}const at=this._std(o,{roughness:.5}),nt=m(this._mesh(new jt(.05,14,14),at,{y:-.295,castShadow:!0}));nt.scale.set(.8,.6,1),H.add(nt);const ft=m(this._mesh(new Fe(.02,.03,4,10),at,{y:-.312,z:.045}));ft.rotation.x=Math.PI/2,H.add(ft);const Ht=m(this._mesh(new Fe(.015,.032,4,8),at,{x:D*.038,y:-.285,z:.03}));Ht.rotation.z=D*.55,H.add(Ht);let j=null;return D===1&&(j=new _t,j.position.set(0,-.315,.055),j.add(m(this._mesh(new Rt(.04,.032,.09,14),this._std(16777215,{roughness:.25}),{y:0}))),j.add(m(this._mesh(new Rt(.041,.036,.032,14),this._std(h,{emissive:h,emissiveIntensity:.25}),{y:0}))),H.add(j)),{shoulder:V,elbow:H,coffeeCup:j}},ee=Tt(-1),wt=Tt(1);this.officeFloorGroup.add(d);const T=bp[t.slug]||{x:(e%2===0?-1:1)*(2.5+e),y:4.38,z:-14.2,rotY:0,pose:"STANDING",hasCoffee:!0},y={slug:t.slug,idx:e,group:d,pos:{x:p.x,y:0,z:p.z},pelvisPivot:L,hipL:M.hip,kneeL:M.knee,hipR:C.hip,kneeR:C.knee,torsoPivot:U,torso:G,headGroup:xt,eyeL:kt,eyeR:Vt,blinkAt:this._t+1+Math.random()*4,shoulderL:ee.shoulder,elbowL:ee.elbow,shoulderR:wt.shoulder,elbowR:wt.elbow,coffeeCup:wt.coffeeCup,beacon:S,beaconMat:f,statusRingMat:g,screenMats:t.screenMats||[],badgeCtx:v.ctx,badgeTexture:v.texture,accentHex:Sr(h),status:"IDLE",agentData:null,station:{x:p.x,y:0,z:p.z,rotY:vr.has(t.slug)?0:Math.PI,pose:"SEATED"},rooftop:T,seat:ei[t.slug]?{x:ei[t.slug].x,y:0,z:ei[t.slug].z,rotY:ei[t.slug].rotY,pose:"SEATED"}:{x:(e%5-2)*1.5,y:0,z:5.2,rotY:Math.PI,pose:"SEATED"},phase:e*1.37,ang:{pelvisY:.64,hipLx:-Math.PI/2,kneeLx:Math.PI/2,hipRx:-Math.PI/2,kneeRx:Math.PI/2,torsoX:0,torsoY:0,headX:0,headY:0,shLx:.15,shLz:.06,elLx:-.3,shRx:.15,shRz:-.06,elRx:-.3}};this.agentMap.set(t.slug,y)}updateAgentsFromBackend(t){const e=yp(t);for(const n of Ep(e))this._buildExpansionWing(n);this._syncWingSlots(e),t.forEach(n=>{let s=this.agentMap.get(n.slug);const r=e[n.slug],o=(r==null?void 0:r.x)??n.home_x,a=(r==null?void 0:r.z)??n.home_z;if(!s){const l=n.accent_color?parseInt(n.accent_color.replace("#",""),16):65382,h={slug:n.slug,name:(n.department_name||n.role_title||n.name).toUpperCase(),x:typeof o=="number"?o:8.5,z:typeof a=="number"?a:0,color:l,dynamic:!0};Ap.has(n.slug)?this._buildReceptionStation(h):Rp.has(n.slug)?this._buildBossSuite(h):this._buildWorkstationZone(h),this._buildHumanoidAgent(h),s=this.agentMap.get(n.slug)}if(!s)return;s.agentData=n,s.group.visible=(n.lifecycle_status||"ACTIVE")==="ACTIVE",typeof o=="number"&&typeof a=="number"&&(this._homes=this._homes||{},this._homes[n.slug]={x:o,z:a},s.station={x:o,y:0,z:a+.15,rotY:vr.has(n.slug)?0:Math.PI,pose:"SEATED"});const c=this.demoPreviewMode?"WORKING":n.status||"IDLE";this._applyVisualStatus(s,c),Er(s.badgeCtx,320,112,{name:n.name||s.slug,role:n.department_name||n.role_title||"",status:c,accentHex:s.accentHex}),s.badgeTexture.needsUpdate=!0})}setDemoPreviewMode(t){this.demoPreviewMode=t,this.agentMap.forEach(e=>{const n=t?"WORKING":e.agentData?e.agentData.status:"IDLE";this._applyVisualStatus(e,n),e.agentData&&(Er(e.badgeCtx,320,112,{name:e.agentData.name||e.slug,role:e.agentData.department_name||e.agentData.role_title||"",status:n,accentHex:e.accentHex}),e.badgeTexture.needsUpdate=!0)})}setMeetingMode(t){this.meetingMode=!!t}_applyVisualStatus(t,e){t.status=e;const n=xr[e]||xr.IDLE;t.statusRingMat.color.setHex(n),t.beaconMat.color.setHex(n),e==="WORKING"?t.screenMats.forEach(s=>s.color.setHex(3718648)):e==="WAITING_APPROVAL"?t.screenMats.forEach(s=>s.color.setHex(16096779)):e==="ERROR"?t.screenMats.forEach(s=>s.color.setHex(15680580)):t.screenMats.forEach((s,r)=>s.color.setHex(r===0?1976635:1581620))}_sipCurve(t){if(t<=.42||t>=.82)return 0;const s=(t-.42)/(.82-.42),r=o=>o*o*(3-2*o);return s<.3?r(s/.3):s>.7?r((1-s)/.3):1}_poseTargets(t,e,n,s,r){var l;const{phase:o}=t,a=!n&&s==="STANDING";t._sip=0;const c={pelvisY:a?.72:r?.55:.64,hipLx:0,kneeLx:.07,hipRx:0,kneeRx:.07,torsoX:.02,torsoY:0,headX:.04,headY:0,shLx:.14,shLz:.08,elLx:-.32,shRx:.14,shRz:-.08,elRx:-.32};if(n){const h=Math.sin(e*9.5+o);c.hipLx=h*.5,c.hipRx=-h*.5,c.kneeLx=Math.max(.08,-h*.7),c.kneeRx=Math.max(.08,h*.7)}else if(a){const h=Math.sin(e*.8+o);c.hipLx=-.05+h*.02,c.hipRx=-.03-h*.02,c.kneeLx=.07,c.kneeRx=.07}else c.hipLx=-1.52,c.kneeLx=1.54,c.hipRx=-1.5,c.kneeRx=1.56;if(n){const h=Math.sin(e*9.5+o);c.torsoX=.09,c.torsoY=-h*.22,c.headX=.05,c.headY=Math.sin(e*1.4+o)*.06;const u=h*.4;return c.shLx=-u-.05,c.shRx=u-.05,c.shLz=.1,c.shRz=-.1,c.elLx=-.45,c.elRx=-.45,c}switch(t.status){case"WORKING":{if(a)c.headY=Math.sin(e*.7+o)*.12;else{const h=.45+.55*(.5+.5*Math.sin(e*.55+o*1.7)),u=Math.pow(Math.max(0,Math.sin(e*10.6+o)),3),d=Math.pow(Math.max(0,Math.sin(e*10.6+o+1.05)),3);c.torsoX=.13,c.headX=.25+Math.sin(e*.6+o)*.045,c.headY=Math.sin(e*.8+o)*.12+Math.sin(e*.23+o)*.06,c.shLx=-1.02+.04*Math.sin(e*2.3+o),c.shLz=.13,c.elLx=-.7-u*.17*h-.1*(1-h),c.shRx=-1.02+.04*Math.cos(e*2.3+o),c.shRz=-.13,c.elRx=-.7-d*.17*h-.1*(1-h)}break}case"WAITING_APPROVAL":{c.torsoX=-.02,c.headX=-.16+Math.sin(e*.9+o)*.03,c.headY=Math.sin(e*1.2+o)*.1,c.shLx=.16,c.shLz=.08,c.elLx=-.34,c.shRx=-2.35+Math.sin(e*2.6+o)*.09,c.shRz=-.28,c.elRx=-.4+Math.sin(e*2.6+o+.8)*.08;break}case"BLOCKED":{c.torsoX=.2,c.headX=.36+Math.sin(e*.7+o)*.02,c.shLx=-.62+Math.sin(e*.8+o)*.02,c.shLz=.9,c.elLx=-1.35,c.shRx=-.62,c.shRz=-.9,c.elRx=-1.35;break}case"ERROR":{c.torsoX=-.08,c.headX=-.06,c.headY=Math.sin(e*8+o)*.3,c.shLx=-.45+Math.sin(e*8+o)*.06,c.shLz=.6,c.elLx=-.95,c.shRx=-.45-Math.sin(e*8+o)*.06,c.shRz=-.6,c.elRx=-.95;break}case"IDLE":default:{const h=!!((l=t.rooftop)!=null&&l.hasCoffee);if(r){const u=h?this._sipCurve((e+o*2.1)%10/10):0;if(t._sip=u,a){const d=Math.sin(e*.5+o);c.pelvisY=.72+Math.abs(d)*.008,c.hipLx=-.03+d*.015,c.hipRx=.03-d*.015,c.torsoX=-.03,c.headX=-.04-u*.1+Math.sin(e*.4+o)*.02,c.headY=Math.sin(e*.35+o)*.3+Math.sin(e*.13+o)*.15,c.shLx=.1,c.shLz=.09,c.elLx=-.3,h?(c.shRx=-.2-u*1,c.shRz=-.12,c.elRx=-.55-u*.75):(c.shRx=.12,c.shRz=-.09,c.elRx=-.3)}else c.torsoX=-.08,c.headX=-.02-u*.12+Math.sin(e*.45+o)*.03,c.headY=Math.sin(e*.4+o)*.22+Math.sin(e*.16+o)*.1,c.shLx=-.75,c.shLz=.16,c.elLx=-.5,h?(c.shRx=-.5-u*.7,c.shRz=-.14,c.elRx=-.9-u*.45):(c.shRx=-.55,c.shRz=-.16,c.elRx=-.55)}else{const u=.35+.4*(.5+.5*Math.sin(e*.4+o*2.3)),d=Math.pow(Math.max(0,Math.sin(e*8.2+o)),3),p=Math.pow(Math.max(0,Math.sin(e*8.2+o+.9)),3);c.torsoX=.1,c.headX=.22+Math.sin(e*.5+o)*.05,c.headY=Math.sin(e*.55+o)*.15+Math.sin(e*.2+o*1.9)*.1,c.shLx=-.95+.04*Math.sin(e*2+o),c.shLz=.12,c.elLx=-.72-d*.14*u-.08*(1-u),c.shRx=-.95+.04*Math.cos(e*2+o),c.shRz=-.12,c.elRx=-.72-p*.14*u-.08*(1-u)}break}}return c}_bindInteractions(){let t=!1,e={x:0,y:0},n={x:0,y:0},s="pan";const r=this.renderer.domElement;r.addEventListener("contextmenu",o=>o.preventDefault()),r.addEventListener("pointerdown",o=>{if(o.button!==0&&o.button!==2)return;t=!0,s=o.button===2||o.shiftKey?"rotate":"pan",e={x:o.clientX,y:o.clientY},n={x:o.clientX,y:o.clientY};const a=this._cameraTransitionCancel;this._cameraTransitionCancel=null,this._cameraTransitionId=(this._cameraTransitionId??0)+1,a==null||a(),r.style.cursor="grabbing"}),window.addEventListener("pointermove",o=>{if(!t)return;const a=o.clientX-e.x,c=o.clientY-e.y;if(e={x:o.clientX,y:o.clientY},s==="rotate"){const l=new up().setFromVector3(this.sphericalOffset);l.theta-=a*.006,l.phi=Ms.clamp(l.phi+c*.006,.2,1.48),this.sphericalOffset.setFromSpherical(l)}else{const l=.032/this.zoomLevel,h=new R().subVectors(this.cameraTarget,this.camera.position);h.y=0,h.normalize();const u=new R().crossVectors(h,new R(0,1,0)).normalize();this.cameraTarget.addScaledVector(u,-a*l),this.cameraTarget.addScaledVector(h,c*l),this.cameraTarget.x=Math.max(-14,Math.min(14,this.cameraTarget.x)),this.cameraTarget.z=Math.max(-18,Math.min(24,this.cameraTarget.z))}this._updateCameraTransform()}),window.addEventListener("pointerup",o=>{if(!t)return;t=!1;const a=Math.hypot(o.clientX-n.x,o.clientY-n.y);r.style.cursor="grab",a<6&&s==="pan"&&o.button===0&&this._handlePick(o)}),r.addEventListener("wheel",o=>{o.preventDefault();const a=o.deltaY<0?1.1:.9;this.zoomLevel=Math.max(.55,Math.min(2.6,this.zoomLevel*a)),this._updateCameraTransform()},{passive:!1}),r.style.cursor="grab",window.addEventListener("resize",()=>{const o=this.container.clientWidth,a=Math.max(1,this.container.clientHeight),c=o/a;this.camera.left=-this.frustumSize*c/2,this.camera.right=this.frustumSize*c/2,this.camera.top=this.frustumSize/2,this.camera.bottom=-this.frustumSize/2,this.camera.updateProjectionMatrix(),this.renderer.setSize(o,a)})}_handlePick(t){var s;const e=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const n=this.raycaster.intersectObjects(this.scene.children,!0);for(const r of n){let o=r.object;for(;o;){if(o.userData&&o.userData.agentSlug){const a=this.agentMap.get(o.userData.agentSlug);a&&a.agentData&&this.onSelectAgent&&this.onSelectAgent(a.agentData);return}if(o.userData&&o.userData.storeId){(s=this.onSelectStore)==null||s.call(this,o.userData.storeId);return}o=o.parent}}}_animate(){var l;if(!this._rafActive||(requestAnimationFrame(this._animate),document.hidden))return;const t=Math.min(this.clock.getDelta(),.1);this._t+=t;const e=this._t;this.hubRingMat&&(this.hubRingMat.opacity=.55+Math.sin(e*2.2)*.3),this.holoCore&&(this.holoCore.rotation.y=e*1.4,this.holoCore.position.y=1.38+Math.sin(e*2.4)*.05),this.atlasHoloGem&&(this.atlasHoloGem.rotation.y=-e*1.1,this.atlasHoloGem.position.y=1.75+Math.sin(e*1.8)*.06);const n=Math.min(1,t*8),s=90,r=22,o=12,a=Math.floor(e/s)%o,c=e%s<r;this.agentMap.forEach(h=>{var M;const u=h.group,d=c&&h.idx%o===a,p=!this.meetingMode&&!this.demoPreviewMode&&h.status==="IDLE"&&h.slug!=="boss"&&h.slug!=="atlas"&&d&&!!h.rooftop,m=this.meetingMode?h.seat:p?h.rooftop:h.station,g=typeof m.y=="number"?m.y:0;h.pos||(h.pos={x:u.position.x,y:u.position.y,z:u.position.z});const _=m.x-h.pos.x,f=g-h.pos.y,S=m.z-h.pos.z,v=Math.hypot(_,f,S),x=v>.04;if(x){const C=Math.min(v,5.2*t);h.pos.x+=_/v*C,h.pos.y+=f/v*C,h.pos.z+=S/v*C,u.position.x=h.pos.x,u.position.z=h.pos.z,u.position.y=h.pos.y+Math.abs(Math.sin(e*10+h.phase))*.04;let z=(Math.atan2(_,S)-u.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;u.rotation.y+=z*Math.min(1,t*8)}else{h.pos.x=m.x,h.pos.y=g,h.pos.z=m.z,u.position.x=m.x,u.position.y=g,u.position.z=m.z;let C=(m.rotY-u.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;Math.abs(C)>.003?u.rotation.y+=C*n:u.rotation.y=m.rotY}const L=p&&!x;h.coffeeCup&&(h.coffeeCup.visible=L&&!!((M=h.rooftop)!=null&&M.hasCoffee)),!L&&!x&&h.status==="IDLE"&&h.screenMats.forEach((C,U)=>C.color.setHex(U===0?959977:1976635));const b=this._poseTargets(h,e,x,m.pose||"SEATED",L),A=h.ang;for(const C of Object.keys(A))typeof b[C]=="number"&&(A[C]+=(b[C]-A[C])*n);h.pelvisPivot&&(h.pelvisPivot.position.y=A.pelvisY),h.hipL&&(h.hipL.rotation.x=A.hipLx),h.kneeL&&(h.kneeL.rotation.x=A.kneeLx),h.hipR&&(h.hipR.rotation.x=A.hipRx),h.kneeR&&(h.kneeR.rotation.x=A.kneeRx),h.torsoPivot.rotation.x=A.torsoX,h.torsoPivot.rotation.y=A.torsoY;const P=Math.sin(e*1.55+h.phase);h.torso.scale.set(1.1*(1-P*.012),1+P*.02,.76*(1+P*.014)),h.headGroup.rotation.x=A.headX,h.headGroup.rotation.y=A.headY,h.shoulderL.rotation.x=A.shLx,h.shoulderL.rotation.z=A.shLz,h.elbowL.rotation.x=A.elLx,h.shoulderR.rotation.x=A.shRx,h.shoulderR.rotation.z=A.shRz,h.elbowR.rotation.x=A.elRx;const E=Math.sin(e*.55+h.phase);if(h.headGroup.rotation.z=E*.022,h.torsoPivot.rotation.z=E*.012,h.eyeL&&h.eyeR){let C=1;if(e>=h.blinkAt){const U=(e-h.blinkAt)/.22;U>=1?h.blinkAt=e+1.8+Math.random()*4.2:(C=U<.5?1-U*2:(U-.5)*2,C=.06+.94*C)}h.eyeL.scale.y=C,h.eyeR.scale.y=C}h.coffeeCup&&(h.coffeeCup.rotation.x=(h._sip||0)*.55),h.beacon.rotation.y=e*2.2+h.phase,h.status==="WAITING_APPROVAL"?h.beacon.position.y=1.72+Math.sin(e*5)*.07:h.beacon.position.y+=(1.72-h.beacon.position.y)*n}),(l=this.automotiveCampus)==null||l.update(t,e),this.renderer.render(this.scene,this.camera)}}function Lp(i){return typeof i=="number"?i:parseInt(i.replace("#",""),16)}export{Mr as BOARDROOM,An as EXECUTIVE_ROOM,Dp as OFFICE_STATION_LAYOUT,Ip as Office3DScene};
