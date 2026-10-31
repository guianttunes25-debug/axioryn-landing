/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const br="170";const vn="",Pe="srgb",li="srgb-linear",Cs="linear",ne="srgb";const qr="300 es";class hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zr=1234567;const ri=Math.PI/180,Di=180/Math.PI;function Je(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function Ar(i,t){return(i%t+t)%t}function Ga(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ka(i,t,e){return i!==t?(e-i)/(t-i):0}function Ai(i,t,e){return(1-e)*i+e*t}function Va(i,t,e,n){return Ai(i,t,1-Math.exp(-e*n))}function Ha(i,t=1){return t-Math.abs(Ar(i,t*2)-t)}function Wa(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Xa(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ya(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qa(i,t){return i+Math.random()*(t-i)}function Za(i){return i*(.5-Math.random())}function $a(i){i!==void 0&&(Zr=i);let t=Zr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ka(i){return i*ri}function Ja(i){return i*Di}function ja(i){return(i&i-1)===0&&i!==0}function Qa(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ec(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ss={DEG2RAD:ri,RAD2DEG:Di,generateUUID:Je,clamp:me,euclideanModulo:Ar,mapLinear:Ga,inverseLerp:ka,lerp:Ai,damp:Va,pingpong:Ha,smoothstep:Wa,smootherstep:Xa,randInt:Ya,randFloat:qa,randFloatSpread:Za,seededRandom:$a,degToRad:Ka,radToDeg:Ja,isPowerOfTwo:ja,ceilPowerOfTwo:Qa,floorPowerOfTwo:tc,setQuaternionFromProperEuler:ec,normalize:te,denormalize:Ye};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,s,r,o,a,c,l){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],g=s[0],_=s[3],f=s[6],S=s[1],M=s[4],x=s[7],P=s[2],b=s[5],C=s[8];return r[0]=o*g+a*S+c*P,r[3]=o*_+a*M+c*b,r[6]=o*f+a*x+c*C,r[1]=l*g+h*S+u*P,r[4]=l*_+h*M+u*b,r[7]=l*f+h*x+u*C,r[2]=d*g+p*S+m*P,r[5]=d*_+p*M+m*b,r[8]=d*f+p*x+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=u*g,t[1]=(s*l-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=d*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=p*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fs.makeScale(t,e)),this}rotate(t){return this.premultiply(Fs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fs=new Ut;function da(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nc(){const i=ws("canvas");return i.style.display="block",i}const $r={};function wi(i){i in $r||($r[i]=!0,console.warn(i))}function ic(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function sc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:li,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(i.r=ln(i.r),i.g=ln(i.g),i.b=ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vn?Cs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Kr=[.64,.33,.3,.6,.15,.06],Jr=[.2126,.7152,.0722],jr=[.3127,.329],Qr=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),to=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[li]:{primaries:Kr,whitePoint:jr,transfer:Cs,toXYZ:Qr,fromXYZ:to,luminanceCoefficients:Jr,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:Kr,whitePoint:jr,transfer:ne,toXYZ:Qr,fromXYZ:to,luminanceCoefficients:Jr,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});let Bn;class oc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bn===void 0&&(Bn=ws("canvas")),Bn.width=t.width,Bn.height=t.height;const n=Bn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ws("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ln(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ln(e[n]/255)*255):e[n]=ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ac=0;class fa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=Je(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Os(s[o].image)):r.push(Os(s[o]))}else r=Os(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Os(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cc=0;class Le extends hi{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=1001,s=1001,r=1006,o=1008,a=1023,c=1009,l=Le.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=Je(),this.name="",this.source=new fa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=300;Le.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,s=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],g=c[2],_=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+_)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(p+1)/2,P=(f+1)/2,b=(h+d)/4,C=(u+g)/4,R=(m+_)/4;return M>x&&M>P?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=C/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=R/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=C/r,s=R/r),this.set(n,s,r,e),this}let S=Math.sqrt((_-m)*(_-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(_-m)/S,this.y=(u-g)/S,this.z=(d-h)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lc extends hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends lc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pa extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hc extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],m=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=g;return}if(u!==g||c!==d||l!==p||h!==m){let _=1-a;const f=c*d+l*p+h*m+u*g,S=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const P=Math.sqrt(M),b=Math.atan2(P,f*S);_=Math.sin(_*b)/P,a=Math.sin(a*b)/P}const x=a*S;if(c=c*_+d*x,l=l*_+p*x,h=h*_+m*x,u=u*_+g*x,_===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*p-l*d,t[e+1]=c*m+h*d+l*u-a*p,t[e+2]=l*m+h*p+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bs.copy(this).projectOnVector(t),this.sub(Bs)}reflect(t){return this.sub(Bs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new A,eo=new Fi;class Oi{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,He):He.fromBufferAttribute(r,o),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ki.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(t.matrixWorld),this.union(ki)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pi),Vi.subVectors(this.max,pi),zn.subVectors(t.a,pi),Gn.subVectors(t.b,pi),kn.subVectors(t.c,pi),dn.subVectors(Gn,zn),fn.subVectors(kn,Gn),En.subVectors(zn,kn);let e=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-En.z,En.y,dn.z,0,-dn.x,fn.z,0,-fn.x,En.z,0,-En.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-En.y,En.x,0];return!zs(e,zn,Gn,kn,Vi)||(e=[1,0,0,0,1,0,0,0,1],!zs(e,zn,Gn,kn,Vi))?!1:(Hi.crossVectors(dn,fn),e=[Hi.x,Hi.y,Hi.z],zs(e,zn,Gn,kn,Vi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const nn=[new A,new A,new A,new A,new A,new A,new A,new A],He=new A,ki=new Oi,zn=new A,Gn=new A,kn=new A,dn=new A,fn=new A,En=new A,pi=new A,Vi=new A,Hi=new A,wn=new A;function zs(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wn.fromArray(i,r);const a=s.x*Math.abs(wn.x)+s.y*Math.abs(wn.y)+s.z*Math.abs(wn.z),c=t.dot(wn),l=e.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const uc=new Oi,mi=new A,Gs=new A;class Ps{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):uc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mi.subVectors(t,this.center);const e=mi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(mi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mi.copy(t.center).add(Gs)),this.expandByPoint(mi.copy(t.center).sub(Gs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new A,ks=new A,Wi=new A,pn=new A,Vs=new A,Xi=new A,Hs=new A;class Rr{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ks.copy(t).add(e).multiplyScalar(.5),Wi.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(ks);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Wi),a=pn.dot(this.direction),c=-pn.dot(Wi),l=pn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ks).addScaledVector(Wi,d),p}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),s=sn.dot(sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,s,r){Vs.subVectors(e,t),Xi.subVectors(n,t),Hs.crossVectors(Vs,Xi);let o=this.direction.dot(Hs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pn.subVectors(this.origin,t);const c=a*this.direction.dot(Xi.crossVectors(pn,Xi));if(c<0)return null;const l=a*this.direction.dot(Vs.cross(pn));if(l<0||c+l>o)return null;const h=-a*pn.dot(Hs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,o,a,c,l,h,u,d,p,m,g,_){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,p,m,g,_)}set(t,e,n,s,r,o,a,c,l,h,u,d,p,m,g,_){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=g,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Vn.setFromMatrixColumn(t,0).length(),r=1/Vn.setFromMatrixColumn(t,1).length(),o=1/Vn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,m=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+m*l,e[5]=d-g*l,e[9]=-a*c,e[2]=g-d*l,e[6]=m+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,m=l*h,g=l*u;e[0]=d+g*a,e[4]=m*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-m,e[6]=g+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,m=l*h,g=l*u;e[0]=d-g*a,e[4]=-o*u,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,p=o*u,m=a*h,g=a*u;e[0]=c*h,e[4]=m*l-p,e[8]=d*l+g,e[1]=c*u,e[5]=g*l+d,e[9]=p*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,m=a*c,g=a*l;e[0]=c*h,e[4]=g-d*u,e[8]=m*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+m,e[10]=d-g*u}else if(t.order==="XZY"){const d=o*c,p=o*l,m=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+g,e[5]=o*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dc,t,fc)}lookAt(t,e,n){const s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),mn.crossVectors(n,Ue),mn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),mn.crossVectors(n,Ue)),mn.normalize(),Yi.crossVectors(Ue,mn),s[0]=mn.x,s[4]=Yi.x,s[8]=Ue.x,s[1]=mn.y,s[5]=Yi.y,s[9]=Ue.y,s[2]=mn.z,s[6]=Yi.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],g=n[6],_=n[10],f=n[14],S=n[3],M=n[7],x=n[11],P=n[15],b=s[0],C=s[4],R=s[8],E=s[12],v=s[1],L=s[5],F=s[9],B=s[13],X=s[2],G=s[6],q=s[10],j=s[14],Y=s[3],st=s[7],ut=s[11],yt=s[15];return r[0]=o*b+a*v+c*X+l*Y,r[4]=o*C+a*L+c*G+l*st,r[8]=o*R+a*F+c*q+l*ut,r[12]=o*E+a*B+c*j+l*yt,r[1]=h*b+u*v+d*X+p*Y,r[5]=h*C+u*L+d*G+p*st,r[9]=h*R+u*F+d*q+p*ut,r[13]=h*E+u*B+d*j+p*yt,r[2]=m*b+g*v+_*X+f*Y,r[6]=m*C+g*L+_*G+f*st,r[10]=m*R+g*F+_*q+f*ut,r[14]=m*E+g*B+_*j+f*yt,r[3]=S*b+M*v+x*X+P*Y,r[7]=S*C+M*L+x*G+P*st,r[11]=S*R+M*F+x*q+P*ut,r[15]=S*E+M*B+x*j+P*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],g=t[7],_=t[11],f=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+g*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+_*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],g=t[13],_=t[14],f=t[15],S=u*_*l-g*d*l+g*c*p-a*_*p-u*c*f+a*d*f,M=m*d*l-h*_*l-m*c*p+o*_*p+h*c*f-o*d*f,x=h*g*l-m*u*l+m*a*p-o*g*p-h*a*f+o*u*f,P=m*u*c-h*g*c-m*a*d+o*g*d+h*a*_-o*u*_,b=e*S+n*M+s*x+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=S*C,t[1]=(g*d*r-u*_*r-g*s*p+n*_*p+u*s*f-n*d*f)*C,t[2]=(a*_*r-g*c*r+g*s*l-n*_*l-a*s*f+n*c*f)*C,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*C,t[4]=M*C,t[5]=(h*_*r-m*d*r+m*s*p-e*_*p-h*s*f+e*d*f)*C,t[6]=(m*c*r-o*_*r-m*s*l+e*_*l+o*s*f-e*c*f)*C,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*C,t[8]=x*C,t[9]=(m*u*r-h*g*r-m*n*p+e*g*p+h*n*f-e*u*f)*C,t[10]=(o*g*r-m*a*r+m*n*l-e*g*l-o*n*f+e*a*f)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*C,t[12]=P*C,t[13]=(h*g*s-m*u*s+m*n*d-e*g*d-h*n*_+e*u*_)*C,t[14]=(m*a*s-o*g*s-m*n*c+e*g*c+o*n*_-e*a*_)*C,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,m=r*u,g=o*h,_=o*u,f=a*u,S=c*l,M=c*h,x=c*u,P=n.x,b=n.y,C=n.z;return s[0]=(1-(g+f))*P,s[1]=(p+x)*P,s[2]=(m-M)*P,s[3]=0,s[4]=(p-x)*b,s[5]=(1-(d+f))*b,s[6]=(_+S)*b,s[7]=0,s[8]=(m+M)*C,s[9]=(_-S)*C,s[10]=(1-(d+g))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Vn.set(s[0],s[1],s[2]).length();const o=Vn.set(s[4],s[5],s[6]).length(),a=Vn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],We.copy(this);const l=1/r,h=1/o,u=1/a;return We.elements[0]*=l,We.elements[1]*=l,We.elements[2]*=l,We.elements[4]*=h,We.elements[5]*=h,We.elements[6]*=h,We.elements[8]*=u,We.elements[9]*=u,We.elements[10]*=u,e.setFromRotationMatrix(We),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=2e3){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,m;if(a===2e3)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===2001)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=2e3){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,p=(n+s)*h;let m,g;if(a===2e3)m=(o+r)*u,g=-2*u;else if(a===2001)m=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vn=new A,We=new se,dc=new A(0,0,0),fc=new A(1,1,1),mn=new A,Yi=new A,Ue=new A,no=new se,io=new Fi;class je{constructor(t=0,e=0,n=0,s=je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return no.makeRotationFromQuaternion(t),this.setFromRotationMatrix(no,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return io.setFromEuler(this),this.setFromQuaternion(io,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}je.DEFAULT_ORDER="XYZ";class Cr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pc=0;const so=new A,Hn=new Fi,rn=new se,qi=new A,_i=new A,mc=new A,_c=new Fi,ro=new A(1,0,0),oo=new A(0,1,0),ao=new A(0,0,1),co={type:"added"},gc={type:"removed"},Wn={type:"childadded",child:null},Ws={type:"childremoved",child:null};class Se extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=Je(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new A,e=new je,n=new Fi,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Ut}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hn.setFromAxisAngle(t,e),this.quaternion.multiply(Hn),this}rotateOnWorldAxis(t,e){return Hn.setFromAxisAngle(t,e),this.quaternion.premultiply(Hn),this}rotateX(t){return this.rotateOnAxis(ro,t)}rotateY(t){return this.rotateOnAxis(oo,t)}rotateZ(t){return this.rotateOnAxis(ao,t)}translateOnAxis(t,e){return so.copy(t).applyQuaternion(this.quaternion),this.position.add(so.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ro,t)}translateY(t){return this.translateOnAxis(oo,t)}translateZ(t){return this.translateOnAxis(ao,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qi.copy(t):qi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(_i,qi,this.up):rn.lookAt(qi,_i,this.up),this.quaternion.setFromRotationMatrix(rn),s&&(rn.extractRotation(s.matrixWorld),Hn.setFromRotationMatrix(rn),this.quaternion.premultiply(Hn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(co),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gc),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(co),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,t,mc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,_c,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Se.DEFAULT_UP=new A(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new A,on=new A,Xs=new A,an=new A,Xn=new A,Yn=new A,lo=new A,Ys=new A,qs=new A,Zs=new A,$s=new ie,Ks=new ie,Js=new ie;class Oe{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xe.subVectors(t,e),s.cross(Xe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xe.subVectors(s,e),on.subVectors(n,e),Xs.subVectors(t,e);const o=Xe.dot(Xe),a=Xe.dot(on),c=Xe.dot(Xs),l=on.dot(on),h=on.dot(Xs),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,an)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,an.x),c.addScaledVector(o,an.y),c.addScaledVector(a,an.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return $s.setScalar(0),Ks.setScalar(0),Js.setScalar(0),$s.fromBufferAttribute(t,e),Ks.fromBufferAttribute(t,n),Js.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($s,r.x),o.addScaledVector(Ks,r.y),o.addScaledVector(Js,r.z),o}static isFrontFacing(t,e,n,s){return Xe.subVectors(n,e),on.subVectors(t,e),Xe.cross(on).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Xe.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Oe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Oe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Oe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Xn.subVectors(s,n),Yn.subVectors(r,n),Ys.subVectors(t,n);const c=Xn.dot(Ys),l=Yn.dot(Ys);if(c<=0&&l<=0)return e.copy(n);qs.subVectors(t,s);const h=Xn.dot(qs),u=Yn.dot(qs);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Xn,o);Zs.subVectors(t,r);const p=Xn.dot(Zs),m=Yn.dot(Zs);if(m>=0&&p<=m)return e.copy(r);const g=p*l-c*m;if(g<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Yn,a);const _=h*m-p*u;if(_<=0&&u-h>=0&&p-m>=0)return lo.subVectors(r,s),a=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(lo,a);const f=1/(_+g+d);return o=g*f,a=d*f,e.copy(n).addScaledVector(Xn,o).addScaledVector(Yn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ma={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function js(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Ar(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=js(o,r,t+1/3),this.g=js(o,r,t),this.b=js(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=ma[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return qt.fromWorkingColorSpace(Te.copy(this),t),Math.round(me(Te.r*255,0,255))*65536+Math.round(me(Te.g*255,0,255))*256+Math.round(me(Te.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,s=Te.g,r=Te.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Pe){qt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,s=Te.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(Zi);const n=Ai(_n.h,Zi.h,e),s=Ai(_n.s,Zi.s,e),r=Ai(_n.l,Zi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Yt;Yt.NAMES=ma;let xc=0;class Fn extends hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=Je(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ae extends Fn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new A,$i=new it;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$i.fromBufferAttribute(this,e),$i.applyMatrix3(t),this.setXY(e,$i.x,$i.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ye(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ye(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ye(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ye(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ye(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class _a extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ga extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Wt extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let vc=0;const ze=new se,Qs=new Se,qn=new A,Ne=new Oi,gi=new Oi,ve=new A;class xe extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=Je(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(da(t)?ga:_a)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return Qs.lookAt(t),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];gi.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Ne.min,gi.min),Ne.expandByPoint(ve),ve.addVectors(Ne.max,gi.max),Ne.expandByPoint(ve)):(Ne.expandByPoint(gi.min),Ne.expandByPoint(gi.max))}Ne.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ve.fromBufferAttribute(a,l),c&&(qn.fromBufferAttribute(t,l),ve.add(qn)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new A,c[R]=new A;const l=new A,h=new A,u=new A,d=new it,p=new it,m=new it,g=new A,_=new A;function f(R,E,v){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,v),h.sub(l),u.sub(l),p.sub(d),m.sub(d);const L=1/(p.x*m.y-m.x*p.y);isFinite(L)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(L),_.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(L),a[R].add(g),a[E].add(g),a[v].add(g),c[R].add(_),c[E].add(_),c[v].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,E=S.length;R<E;++R){const v=S[R],L=v.start,F=v.count;for(let B=L,X=L+F;B<X;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const M=new A,x=new A,P=new A,b=new A;function C(R){P.fromBufferAttribute(s,R),b.copy(P);const E=a[R];M.copy(E),M.sub(P.multiplyScalar(P.dot(E))).normalize(),x.crossVectors(b,E);const L=x.dot(c[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,L)}for(let R=0,E=S.length;R<E;++R){const v=S[R],L=v.start,F=v.count;for(let B=L,X=L+F;B<X;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let d=0,p=t.count;d<p;d+=3){const m=t.getX(d+0),g=t.getX(d+1),_=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,m=0;for(let g=0,_=c.length;g<_;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let f=0;f<h;f++)d[m++]=l[p++]}return new qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ho=new se,Tn=new Rr,Ki=new Ps,uo=new A,Ji=new A,ji=new A,Qi=new A,tr=new A,ts=new A,fo=new A,es=new A;class zt extends Se{constructor(t=new xe,e=new ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ts.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(tr.fromBufferAttribute(u,t),o?ts.addScaledVector(tr,h):ts.addScaledVector(tr.sub(e),h))}e.add(ts)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(r),Tn.copy(t.ray).recast(t.near),!(Ki.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(Ki,uo)===null||Tn.origin.distanceToSquared(uo)>(t.far-t.near)**2))&&(ho.copy(r).invert(),Tn.copy(t.ray).applyMatrix4(ho),!(n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Tn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const _=d[m],f=o[_.materialIndex],S=Math.max(_.start,p.start),M=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let x=S,P=M;x<P;x+=3){const b=a.getX(x),C=a.getX(x+1),R=a.getX(x+2);s=ns(this,f,t,n,l,h,u,b,C,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let _=m,f=g;_<f;_+=3){const S=a.getX(_),M=a.getX(_+1),x=a.getX(_+2);s=ns(this,o,t,n,l,h,u,S,M,x),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const _=d[m],f=o[_.materialIndex],S=Math.max(_.start,p.start),M=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let x=S,P=M;x<P;x+=3){const b=x,C=x+1,R=x+2;s=ns(this,f,t,n,l,h,u,b,C,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let _=m,f=g;_<f;_+=3){const S=_,M=_+1,x=_+2;s=ns(this,o,t,n,l,h,u,S,M,x),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function Mc(i,t,e,n,s,r,o,a){let c;if(t.side===1?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===0,a),c===null)return null;es.copy(a),es.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(es);return l<e.near||l>e.far?null:{distance:l,point:es.clone(),object:i}}function ns(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ji),i.getVertexPosition(c,ji),i.getVertexPosition(l,Qi);const h=Mc(i,t,e,n,Ji,ji,Qi,fo);if(h){const u=new A;Oe.getBarycoord(fo,Ji,ji,Qi,u),s&&(h.uv=Oe.getInterpolatedAttribute(s,a,c,l,u,new it)),r&&(h.uv1=Oe.getInterpolatedAttribute(r,a,c,l,u,new it)),o&&(h.normal=Oe.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};Oe.getNormal(Ji,ji,Qi,d.normal),h.face=d,h.barycoord=u}return h}class z extends xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function m(g,_,f,S,M,x,P,b,C,R,E){const v=x/C,L=P/R,F=x/2,B=P/2,X=b/2,G=C+1,q=R+1;let j=0,Y=0;const st=new A;for(let ut=0;ut<q;ut++){const yt=ut*L-B;for(let Nt=0;Nt<G;Nt++){const xt=Nt*v-F;st[g]=xt*S,st[_]=yt*M,st[f]=X,l.push(st.x,st.y,st.z),st[g]=0,st[_]=0,st[f]=b>0?1:-1,h.push(st.x,st.y,st.z),u.push(Nt/C),u.push(1-ut/R),j+=1}}for(let ut=0;ut<R;ut++)for(let yt=0;yt<C;yt++){const Nt=d+yt+G*ut,xt=d+yt+G*(ut+1),$=d+(yt+1)+G*(ut+1),tt=d+(yt+1)+G*ut;c.push(Nt,xt,tt),c.push(xt,$,tt),Y+=6}a.addGroup(p,Y,E),p+=Y,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new z(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ci(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){const t={};for(let e=0;e<i.length;e++){const n=ci(i[e]);for(const s in n)t[s]=n[s]}return t}function Sc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function xa(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const yc={clone:ci,merge:Ce};var Ec=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Fn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ec,this.fragmentShader=wc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ci(t.uniforms),this.uniformsGroups=Sc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class va extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gn=new A,po=new it,mo=new it;class Ge extends va{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Di*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ri*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Di*2*Math.atan(Math.tan(ri*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gn.x,gn.y).multiplyScalar(-t/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gn.x,gn.y).multiplyScalar(-t/gn.z)}getViewSize(t,e){return this.getViewBounds(t,po,mo),e.subVectors(mo,po)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ri*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zn=-90,$n=1;class Tc extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ge(Zn,$n,t,e);s.layers=this.layers,this.add(s);const r=new Ge(Zn,$n,t,e);r.layers=this.layers,this.add(r);const o=new Ge(Zn,$n,t,e);o.layers=this.layers,this.add(o);const a=new Ge(Zn,$n,t,e);a.layers=this.layers,this.add(a);const c=new Ge(Zn,$n,t,e);c.layers=this.layers,this.add(c);const l=new Ge(Zn,$n,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Ma extends Le{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bc extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ma(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new z(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const o=new zt(s,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Tc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const er=new A,Ac=new A,Rc=new Ut;class Pn{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=er.subVectors(n,e).cross(Ac.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(er),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rc.getNormalMatrix(t),s=this.coplanarPoint(er).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bn=new Ps,is=new A;class Pr{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],m=s[9],g=s[10],_=s[11],f=s[12],S=s[13],M=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,_-p,x-f).normalize(),n[1].setComponents(c+r,d+l,_+p,x+f).normalize(),n[2].setComponents(c+o,d+h,_+m,x+S).normalize(),n[3].setComponents(c-o,d-h,_-m,x-S).normalize(),n[4].setComponents(c-a,d-u,_-g,x-M).normalize(),e===2e3)n[5].setComponents(c+a,d+u,_+g,x+M).normalize();else if(e===2001)n[5].setComponents(a,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bn)}intersectsSprite(t){return bn.center.set(0,0,0),bn.radius=.7071067811865476,bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(bn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(is.x=s.normal.x>0?t.max.x:t.min.x,is.y=s.normal.y>0?t.max.y:t.min.y,is.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sa(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Cc(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){const m=u[d],g=u[p];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){const g=u[p];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class be extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],m=[],g=[],_=[];for(let f=0;f<h;f++){const S=f*d-o;for(let M=0;M<l;M++){const x=M*u-r;m.push(x,-S,0),g.push(0,0,1),_.push(M/a),_.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){const M=S+l*f,x=S+l*(f+1),P=S+1+l*(f+1),b=S+1+l*f;p.push(M,x,b),p.push(x,P,b)}this.setIndex(p),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lc=`#ifdef USE_ALPHAHASH
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
#endif`,Dc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ic=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fc=`#ifdef USE_AOMAP
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
#endif`,Oc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bc=`#ifdef USE_BATCHING
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
#endif`,zc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hc=`#ifdef USE_IRIDESCENCE
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
#endif`,Wc=`#ifdef USE_BUMPMAP
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
#endif`,Xc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jc=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qc=`#define PI 3.141592653589793
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
} // validated`,tl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,el=`vec3 transformedNormal = objectNormal;
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
#endif`,nl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,il=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ol="gl_FragColor = linearToOutputTexel( gl_FragColor );",al=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cl=`#ifdef USE_ENVMAP
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
#endif`,ll=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hl=`#ifdef USE_ENVMAP
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
#endif`,ul=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dl=`#ifdef USE_ENVMAP
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
#endif`,fl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ml=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_l=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gl=`#ifdef USE_GRADIENTMAP
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
}`,xl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ml=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sl=`uniform bool receiveShadow;
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
#endif`,yl=`#ifdef USE_ENVMAP
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
#endif`,El=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Al=`PhysicalMaterial material;
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
#endif`,Rl=`struct PhysicalMaterial {
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
}`,Cl=`
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
#endif`,Pl=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ll=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dl=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Il=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ul=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nl=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ol=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zl=`#if defined( USE_POINTS_UV )
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
#endif`,Gl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hl=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xl=`#ifdef USE_MORPHTARGETS
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
#endif`,Yl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ql=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zl=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$l=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jl=`#ifdef USE_NORMALMAP
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
#endif`,Ql=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,th=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ih=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ah=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ch=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ph=`float getShadowMask() {
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
}`,mh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_h=`#ifdef USE_SKINNING
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
#endif`,gh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xh=`#ifdef USE_SKINNING
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
#endif`,vh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eh=`#ifdef USE_TRANSMISSION
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
#endif`,wh=`#ifdef USE_TRANSMISSION
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
#endif`,Th=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ah=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ch=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ph=`uniform sampler2D t2D;
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
}`,Lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ih=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nh=`#include <common>
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
}`,Fh=`#if DEPTH_PACKING == 3200
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
}`,Oh=`#define DISTANCE
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
}`,Bh=`#define DISTANCE
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
}`,zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kh=`uniform float scale;
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
}`,Vh=`uniform vec3 diffuse;
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
}`,Hh=`#include <common>
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
}`,Wh=`uniform vec3 diffuse;
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
}`,Xh=`#define LAMBERT
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
}`,Yh=`#define LAMBERT
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
}`,qh=`#define MATCAP
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
}`,Zh=`#define MATCAP
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
}`,$h=`#define NORMAL
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
}`,Kh=`#define NORMAL
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
}`,Jh=`#define PHONG
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
}`,jh=`#define PHONG
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
}`,Qh=`#define STANDARD
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
}`,tu=`#define STANDARD
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
}`,eu=`#define TOON
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
}`,nu=`#define TOON
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
}`,iu=`uniform float size;
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
}`,su=`uniform vec3 diffuse;
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
}`,ru=`#include <common>
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
}`,ou=`uniform vec3 color;
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
}`,au=`uniform float rotation;
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
}`,cu=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Pc,alphahash_pars_fragment:Lc,alphamap_fragment:Dc,alphamap_pars_fragment:Ic,alphatest_fragment:Uc,alphatest_pars_fragment:Nc,aomap_fragment:Fc,aomap_pars_fragment:Oc,batching_pars_vertex:Bc,batching_vertex:zc,begin_vertex:Gc,beginnormal_vertex:kc,bsdfs:Vc,iridescence_fragment:Hc,bumpmap_pars_fragment:Wc,clipping_planes_fragment:Xc,clipping_planes_pars_fragment:Yc,clipping_planes_pars_vertex:qc,clipping_planes_vertex:Zc,color_fragment:$c,color_pars_fragment:Kc,color_pars_vertex:Jc,color_vertex:jc,common:Qc,cube_uv_reflection_fragment:tl,defaultnormal_vertex:el,displacementmap_pars_vertex:nl,displacementmap_vertex:il,emissivemap_fragment:sl,emissivemap_pars_fragment:rl,colorspace_fragment:ol,colorspace_pars_fragment:al,envmap_fragment:cl,envmap_common_pars_fragment:ll,envmap_pars_fragment:hl,envmap_pars_vertex:ul,envmap_physical_pars_fragment:yl,envmap_vertex:dl,fog_vertex:fl,fog_pars_vertex:pl,fog_fragment:ml,fog_pars_fragment:_l,gradientmap_pars_fragment:gl,lightmap_pars_fragment:xl,lights_lambert_fragment:vl,lights_lambert_pars_fragment:Ml,lights_pars_begin:Sl,lights_toon_fragment:El,lights_toon_pars_fragment:wl,lights_phong_fragment:Tl,lights_phong_pars_fragment:bl,lights_physical_fragment:Al,lights_physical_pars_fragment:Rl,lights_fragment_begin:Cl,lights_fragment_maps:Pl,lights_fragment_end:Ll,logdepthbuf_fragment:Dl,logdepthbuf_pars_fragment:Il,logdepthbuf_pars_vertex:Ul,logdepthbuf_vertex:Nl,map_fragment:Fl,map_pars_fragment:Ol,map_particle_fragment:Bl,map_particle_pars_fragment:zl,metalnessmap_fragment:Gl,metalnessmap_pars_fragment:kl,morphinstance_vertex:Vl,morphcolor_vertex:Hl,morphnormal_vertex:Wl,morphtarget_pars_vertex:Xl,morphtarget_vertex:Yl,normal_fragment_begin:ql,normal_fragment_maps:Zl,normal_pars_fragment:$l,normal_pars_vertex:Kl,normal_vertex:Jl,normalmap_pars_fragment:jl,clearcoat_normal_fragment_begin:Ql,clearcoat_normal_fragment_maps:th,clearcoat_pars_fragment:eh,iridescence_pars_fragment:nh,opaque_fragment:ih,packing:sh,premultiplied_alpha_fragment:rh,project_vertex:oh,dithering_fragment:ah,dithering_pars_fragment:ch,roughnessmap_fragment:lh,roughnessmap_pars_fragment:hh,shadowmap_pars_fragment:uh,shadowmap_pars_vertex:dh,shadowmap_vertex:fh,shadowmask_pars_fragment:ph,skinbase_vertex:mh,skinning_pars_vertex:_h,skinning_vertex:gh,skinnormal_vertex:xh,specularmap_fragment:vh,specularmap_pars_fragment:Mh,tonemapping_fragment:Sh,tonemapping_pars_fragment:yh,transmission_fragment:Eh,transmission_pars_fragment:wh,uv_pars_fragment:Th,uv_pars_vertex:bh,uv_vertex:Ah,worldpos_vertex:Rh,background_vert:Ch,background_frag:Ph,backgroundCube_vert:Lh,backgroundCube_frag:Dh,cube_vert:Ih,cube_frag:Uh,depth_vert:Nh,depth_frag:Fh,distanceRGBA_vert:Oh,distanceRGBA_frag:Bh,equirect_vert:zh,equirect_frag:Gh,linedashed_vert:kh,linedashed_frag:Vh,meshbasic_vert:Hh,meshbasic_frag:Wh,meshlambert_vert:Xh,meshlambert_frag:Yh,meshmatcap_vert:qh,meshmatcap_frag:Zh,meshnormal_vert:$h,meshnormal_frag:Kh,meshphong_vert:Jh,meshphong_frag:jh,meshphysical_vert:Qh,meshphysical_frag:tu,meshtoon_vert:eu,meshtoon_frag:nu,points_vert:iu,points_frag:su,shadow_vert:ru,shadow_frag:ou,sprite_vert:au,sprite_frag:cu},rt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},$e={basic:{uniforms:Ce([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ce([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ce([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ce([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ce([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ce([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ce([rt.points,rt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ce([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ce([rt.common,rt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ce([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ce([rt.sprite,rt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ce([rt.common,rt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ce([rt.lights,rt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};$e.physical={uniforms:Ce([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const ss={r:0,b:0,g:0},An=new je,lu=new se;function hu(i,t,e,n,s,r,o){const a=new Yt(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function m(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function g(S){let M=!1;const x=m(S);x===null?f(a,c):x&&x.isColor&&(f(x,1),M=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,M){const x=m(M);x&&(x.isCubeTexture||x.mapping===306)?(h===void 0&&(h=new zt(new z(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:ci($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),An.copy(M.backgroundRotation),An.x*=-1,An.y*=-1,An.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lu.makeRotationFromEuler(An)),h.material.toneMapped=qt.getTransfer(x.colorSpace)!==ne,(u!==x||d!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new zt(new be(2,2),new Sn({name:"BackgroundMaterial",uniforms:ci($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=qt.getTransfer(x.colorSpace)!==ne,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,M){S.getRGB(ss,xa(i)),n.buffers.color.setClear(ss.r,ss.g,ss.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),c=M,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(a,c)},render:g,addToRenderList:_}}function uu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,L,F,B,X){let G=!1;const q=u(B,F,L);r!==q&&(r=q,l(r.object)),G=p(v,B,F,X),G&&m(v,B,F,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(v,L,F,B),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,L,F){const B=F.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let G=X[L.id];G===void 0&&(G={},X[L.id]=G);let q=G[B];return q===void 0&&(q=d(c()),G[B]=q),q}function d(v){const L=[],F=[],B=[];for(let X=0;X<e;X++)L[X]=0,F[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:B,object:v,attributes:{},index:null}}function p(v,L,F,B){const X=r.attributes,G=L.attributes;let q=0;const j=F.getAttributes();for(const Y in j)if(j[Y].location>=0){const ut=X[Y];let yt=G[Y];if(yt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(yt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(yt=v.instanceColor)),ut===void 0||ut.attribute!==yt||yt&&ut.data!==yt.data)return!0;q++}return r.attributesNum!==q||r.index!==B}function m(v,L,F,B){const X={},G=L.attributes;let q=0;const j=F.getAttributes();for(const Y in j)if(j[Y].location>=0){let ut=G[Y];ut===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor));const yt={};yt.attribute=ut,ut&&ut.data&&(yt.data=ut.data),X[Y]=yt,q++}r.attributes=X,r.attributesNum=q,r.index=B}function g(){const v=r.newAttributes;for(let L=0,F=v.length;L<F;L++)v[L]=0}function _(v){f(v,0)}function f(v,L){const F=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;F[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),X[v]!==L&&(i.vertexAttribDivisor(v,L),X[v]=L)}function S(){const v=r.newAttributes,L=r.enabledAttributes;for(let F=0,B=L.length;F<B;F++)L[F]!==v[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function M(v,L,F,B,X,G,q){q===!0?i.vertexAttribIPointer(v,L,F,X,G):i.vertexAttribPointer(v,L,F,B,X,G)}function x(v,L,F,B){g();const X=B.attributes,G=F.getAttributes(),q=L.defaultAttributeValues;for(const j in G){const Y=G[j];if(Y.location>=0){let st=X[j];if(st===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),st!==void 0){const ut=st.normalized,yt=st.itemSize,Nt=t.get(st);if(Nt===void 0)continue;const xt=Nt.buffer,$=Nt.type,tt=Nt.bytesPerElement,_t=$===i.INT||$===i.UNSIGNED_INT||st.gpuType===1013;if(st.isInterleavedBufferAttribute){const ot=st.data,bt=ot.stride,At=st.offset;if(ot.isInstancedInterleavedBuffer){for(let Ft=0;Ft<Y.locationSize;Ft++)f(Y.location+Ft,ot.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ft=0;Ft<Y.locationSize;Ft++)_(Y.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let Ft=0;Ft<Y.locationSize;Ft++)M(Y.location+Ft,yt/Y.locationSize,$,ut,bt*tt,(At+yt/Y.locationSize*Ft)*tt,_t)}else{if(st.isInstancedBufferAttribute){for(let ot=0;ot<Y.locationSize;ot++)f(Y.location+ot,st.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ot=0;ot<Y.locationSize;ot++)_(Y.location+ot);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let ot=0;ot<Y.locationSize;ot++)M(Y.location+ot,yt/Y.locationSize,$,ut,yt*tt,yt/Y.locationSize*ot*tt,_t)}}else if(q!==void 0){const ut=q[j];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(Y.location,ut);break;case 3:i.vertexAttrib3fv(Y.location,ut);break;case 4:i.vertexAttrib4fv(Y.location,ut);break;default:i.vertexAttrib1fv(Y.location,ut)}}}}S()}function P(){R();for(const v in n){const L=n[v];for(const F in L){const B=L[F];for(const X in B)h(B[X].object),delete B[X];delete L[F]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;const L=n[v.id];for(const F in L){const B=L[F];for(const X in B)h(B[X].object),delete B[X];delete L[F]}delete n[v.id]}function C(v){for(const L in n){const F=n[L];if(F[v.id]===void 0)continue;const B=F[v.id];for(const X in B)h(B[X].object),delete B[X];delete F[v.id]}}function R(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:_,disableUnusedAttributes:S}}function du(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g]*d[g];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function fu(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==1023&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const R=C===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==1009&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==1015&&!R)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:P,maxSamples:b}}function pu(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Pn,a=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const m=u.clippingPlanes,g=u.clipIntersection,_=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!_)r?h(null):l();else{const S=r?0:n,M=S*4;let x=f.clippingState||null;c.value=x,x=h(m,d,M,p);for(let P=0;P!==M;++P)x[P]=e[P];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){const g=u!==null?u.length:0;let _=null;if(g!==0){if(_=c.value,m!==!0||_===null){const f=p+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(_===null||_.length<f)&&(_=new Float32Array(f));for(let M=0,x=p;M!==g;++M,x+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(_,x),_[x+3]=o.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,_}}function mu(i){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new bc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Lr extends va{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ni=4,_o=[.125,.215,.35,.446,.526,.582],Dn=20,nr=new Lr,go=new Yt;let ir=null,sr=0,rr=0,or=!1;const Ln=(1+Math.sqrt(5))/2,Kn=1/Ln,xo=[new A(-Ln,Kn,0),new A(Ln,Kn,0),new A(-Kn,0,Ln),new A(Kn,0,Ln),new A(0,Ln,-Kn),new A(0,Ln,Kn),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class vo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=So(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ir,sr,rr),this._renderer.xr.enabled=or,t.scissorTest=!1,rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:li,depthBuffer:!1},s=Mo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_u(r)),this._blurMaterial=gu(r,t,e)}return s}_compileMaterial(t){const e=new zt(this._lodPlanes[0],t);this._renderer.compile(e,nr)}_sceneToCubeUV(t,e,n,s){const a=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(go),h.toneMapping=0,h.autoClear=!1;const p=new ae({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),m=new zt(new z,p);let g=!1;const _=t.background;_?_.isColor&&(p.color.copy(_),t.background=null,g=!0):(p.color.copy(go),g=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const M=this._cubeSize;rs(s,S*M,f>2?M:0,M,M),h.setRenderTarget(s),g&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===301||t.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=So());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;rs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,nr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xo[(s-r-1)%xo.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new zt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Dn-1),g=r/m,_=isFinite(r)?1+Math.floor(h*g):Dn;_>Dn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Dn}`);const f=[];let S=0;for(let C=0;C<Dn;++C){const R=C/g,E=Math.exp(-R*R/2);f.push(E),C===0?S+=E:C<_&&(S+=2*E)}for(let C=0;C<f.length;C++)f[C]=f[C]/S;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;const x=this._sizeLods[s],P=3*x*(s>M-ni?s-M+ni:0),b=4*(this._cubeSize-x);rs(e,P,b,3*x,2*x),c.setRenderTarget(e),c.render(u,nr)}}function _u(i){const t=[],e=[],n=[];let s=i;const r=i-ni+1+_o.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ni?c=_o[o-i+ni-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,g=3,_=2,f=1,S=new Float32Array(g*m*p),M=new Float32Array(_*m*p),x=new Float32Array(f*m*p);for(let b=0;b<p;b++){const C=b%3*2/3-1,R=b>2?0:-1,E=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];S.set(E,g*m*b),M.set(d,_*m*b);const v=[b,b,b,b,b,b];x.set(v,f*m*b)}const P=new xe;P.setAttribute("position",new qe(S,g)),P.setAttribute("uv",new qe(M,_)),P.setAttribute("faceIndex",new qe(x,f)),t.push(P),s>ni&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mo(i,t,e){const n=new Un(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gu(i,t,e){const n=new Float32Array(Dn),s=new A(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function So(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function yo(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Dr(){return`

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
	`}function xu(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===303||c===304,h=c===301||c===302;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new vo(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new vo(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function vu(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&wi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mu(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const g=d.morphAttributes[m];for(let _=0,f=g.length;_<f;_++)t.remove(g[_])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const m in p){const g=p[m];for(let _=0,f=g.length;_<f;_++)t.update(g[_],i.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,m=u.attributes.position;let g=0;if(p!==null){const S=p.array;g=p.version;for(let M=0,x=S.length;M<x;M+=3){const P=S[M+0],b=S[M+1],C=S[M+2];d.push(P,b,b,C,C,P)}}else if(m!==void 0){const S=m.array;g=m.version;for(let M=0,x=S.length/3-1;M<x;M+=3){const P=M+0,b=M+1,C=M+2;d.push(P,b,b,C,C,P)}}else return;const _=new(da(d)?ga:_a)(d,1);_.version=g;const f=r.get(u);f&&t.remove(f),r.set(u,_)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Su(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*o,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let _=0;for(let f=0;f<m;f++)_+=p[f];e.update(_,n,1)}function u(d,p,m,g){if(m===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],g[f]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,g,0,m);let f=0;for(let S=0;S<m;S++)f+=p[S]*g[S];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Eu(i,t,e){const n=new WeakMap,s=new ie;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let E=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),m===!0&&(M=2),g===!0&&(M=3);let x=a.attributes.position.count*M,P=1;x>t.maxTextureSize&&(P=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const b=new Float32Array(x*P*4*u),C=new pa(b,x,P,u);C.type=1015,C.needsUpdate=!0;const R=M*4;for(let v=0;v<u;v++){const L=_[v],F=f[v],B=S[v],X=x*P*4*v;for(let G=0;G<L.count;G++){const q=G*R;p===!0&&(s.fromBufferAttribute(L,G),b[X+q+0]=s.x,b[X+q+1]=s.y,b[X+q+2]=s.z,b[X+q+3]=0),m===!0&&(s.fromBufferAttribute(F,G),b[X+q+4]=s.x,b[X+q+5]=s.y,b[X+q+6]=s.z,b[X+q+7]=0),g===!0&&(s.fromBufferAttribute(B,G),b[X+q+8]=s.x,b[X+q+9]=s.y,b[X+q+10]=s.z,b[X+q+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new it(x,P)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function wu(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class ya extends Le{constructor(t,e,n,s,r,o,a,c,l,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ea=new Le,Eo=new ya(1,1),wa=new pa,Ta=new hc,ba=new Ma,wo=[],To=[],bo=new Float32Array(16),Ao=new Float32Array(9),Ro=new Float32Array(4);function ui(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=wo[s];if(r===void 0&&(r=new Float32Array(s),wo[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ls(i,t){let e=To[t];e===void 0&&(e=new Int32Array(t),To[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function Au(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function Ru(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function Cu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;Ro.set(n),i.uniformMatrix2fv(this.addr,!1,Ro),ge(e,n)}}function Pu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;Ao.set(n),i.uniformMatrix3fv(this.addr,!1,Ao),ge(e,n)}}function Lu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;bo.set(n),i.uniformMatrix4fv(this.addr,!1,bo),ge(e,n)}}function Du(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Iu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function Uu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function Nu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function Fu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ou(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function Bu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function Gu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Eo.compareFunction=515,r=Eo):r=Ea,e.setTexture2D(t||r,s)}function ku(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ta,s)}function Vu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ba,s)}function Hu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wa,s)}function Wu(i){switch(i){case 5126:return Tu;case 35664:return bu;case 35665:return Au;case 35666:return Ru;case 35674:return Cu;case 35675:return Pu;case 35676:return Lu;case 5124:case 35670:return Du;case 35667:case 35671:return Iu;case 35668:case 35672:return Uu;case 35669:case 35673:return Nu;case 5125:return Fu;case 36294:return Ou;case 36295:return Bu;case 36296:return zu;case 35678:case 36198:case 36298:case 36306:case 35682:return Gu;case 35679:case 36299:case 36307:return ku;case 35680:case 36300:case 36308:case 36293:return Vu;case 36289:case 36303:case 36311:case 36292:return Hu}}function Xu(i,t){i.uniform1fv(this.addr,t)}function Yu(i,t){const e=ui(t,this.size,2);i.uniform2fv(this.addr,e)}function qu(i,t){const e=ui(t,this.size,3);i.uniform3fv(this.addr,e)}function Zu(i,t){const e=ui(t,this.size,4);i.uniform4fv(this.addr,e)}function $u(i,t){const e=ui(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ku(i,t){const e=ui(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ju(i,t){const e=ui(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ju(i,t){i.uniform1iv(this.addr,t)}function Qu(i,t){i.uniform2iv(this.addr,t)}function td(i,t){i.uniform3iv(this.addr,t)}function ed(i,t){i.uniform4iv(this.addr,t)}function nd(i,t){i.uniform1uiv(this.addr,t)}function id(i,t){i.uniform2uiv(this.addr,t)}function sd(i,t){i.uniform3uiv(this.addr,t)}function rd(i,t){i.uniform4uiv(this.addr,t)}function od(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ea,r[o])}function ad(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ta,r[o])}function cd(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ba,r[o])}function ld(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wa,r[o])}function hd(i){switch(i){case 5126:return Xu;case 35664:return Yu;case 35665:return qu;case 35666:return Zu;case 35674:return $u;case 35675:return Ku;case 35676:return Ju;case 5124:case 35670:return ju;case 35667:case 35671:return Qu;case 35668:case 35672:return td;case 35669:case 35673:return ed;case 5125:return nd;case 36294:return id;case 36295:return sd;case 36296:return rd;case 35678:case 36198:case 36298:case 36306:case 35682:return od;case 35679:case 36299:case 36307:return ad;case 35680:case 36300:case 36308:case 36293:return cd;case 36289:case 36303:case 36311:case 36292:return ld}}class ud{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wu(e.type)}}class dd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hd(e.type)}}class fd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ar=/(\w+)(\])?(\[|\.)?/g;function Co(i,t){i.seq.push(t),i.map[t.id]=t}function pd(i,t,e){const n=i.name,s=n.length;for(ar.lastIndex=0;;){const r=ar.exec(n),o=ar.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Co(e,l===void 0?new ud(a,i,t):new dd(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new fd(a),Co(e,u)),e=u}}}class ys{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);pd(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Po(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const md=37297;let _d=0;function gd(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Lo=new Ut;function xd(i){qt._getMatrix(Lo,qt.workingColorSpace,i);const t=`mat3( ${Lo.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Cs:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Do(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+gd(i.getShaderSource(t),o)}else return s}function vd(i,t){const e=xd(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Md(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const os=new A;function Sd(){qt.getLuminanceCoefficients(os);const i=os.x.toFixed(4),t=os.y.toFixed(4),e=os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ti).join(`
`)}function Ed(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wd(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ti(i){return i!==""}function Io(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Td=/^[ \t]*#include +<([\w\d./]+)>/gm;function yr(i){return i.replace(Td,Ad)}const bd=new Map;function Ad(i,t){let e=Bt[t];if(e===void 0){const n=bd.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yr(e)}const Rd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function No(i){return i.replace(Rd,Cd)}function Cd(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fo(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Pd(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function Ld(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dd(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function Id(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Ud(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Nd(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Pd(e),l=Ld(e),h=Dd(e),u=Id(e),d=Ud(e),p=yd(e),m=Ed(r),g=s.createProgram();let _,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ti).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ti).join(`
`),f.length>0&&(f+=`
`)):(_=[Fo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),f=[Fo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Bt.tonemapping_pars_fragment:"",e.toneMapping!==0?Md("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,vd("linearToOutputTexel",e.outputColorSpace),Sd(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ti).join(`
`)),o=yr(o),o=Io(o,e),o=Uo(o,e),a=yr(a),a=Io(a,e),a=Uo(a,e),o=No(o),a=No(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",e.glslVersion===qr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=S+_+o,x=S+f+a,P=Po(s,s.VERTEX_SHADER,M),b=Po(s,s.FRAGMENT_SHADER,x);s.attachShader(g,P),s.attachShader(g,b),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(L){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(g).trim(),B=s.getShaderInfoLog(P).trim(),X=s.getShaderInfoLog(b).trim();let G=!0,q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,P,b);else{const j=Do(s,P,"vertex"),Y=Do(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+j+`
`+Y)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||X==="")&&(q=!1);q&&(L.diagnostics={runnable:G,programLog:F,vertexShader:{log:B,prefix:_},fragmentShader:{log:X,prefix:f}})}s.deleteShader(P),s.deleteShader(b),R=new ys(s,g),E=wd(s,g)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,md)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_d++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=b,this}let Fd=0;class Od{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bd(t),e.set(t,n)),n}}class Bd{constructor(t){this.id=Fd++,this.code=t,this.usedTimes=0}}function zd(i,t,e,n,s,r,o){const a=new Cr,c=new Od,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function _(E,v,L,F,B){const X=F.fog,G=B.geometry,q=E.isMeshStandardMaterial?F.environment:null,j=(E.isMeshStandardMaterial?e:t).get(E.envMap||q),Y=j&&j.mapping===306?j.image.height:null,st=m[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ut=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,yt=ut!==void 0?ut.length:0;let Nt=0;G.morphAttributes.position!==void 0&&(Nt=1),G.morphAttributes.normal!==void 0&&(Nt=2),G.morphAttributes.color!==void 0&&(Nt=3);let xt,$,tt,_t;if(st){const Qt=$e[st];xt=Qt.vertexShader,$=Qt.fragmentShader}else xt=E.vertexShader,$=E.fragmentShader,c.update(E),tt=c.getVertexShaderID(E),_t=c.getFragmentShaderID(E);const ot=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),At=B.isInstancedMesh===!0,Ft=B.isBatchedMesh===!0,ce=!!E.map,Gt=!!E.matcap,ue=!!j,O=!!E.aoMap,Ae=!!E.lightMap,kt=!!E.bumpMap,Vt=!!E.normalMap,Tt=!!E.displacementMap,ee=!!E.emissiveMap,wt=!!E.metalnessMap,T=!!E.roughnessMap,y=E.anisotropy>0,D=E.clearcoat>0,k=E.dispersion>0,K=E.iridescence>0,V=E.sheen>0,at=E.transmission>0,nt=y&&!!E.anisotropyMap,ft=D&&!!E.clearcoatMap,Ht=D&&!!E.clearcoatNormalMap,Q=D&&!!E.clearcoatRoughnessMap,pt=K&&!!E.iridescenceMap,Rt=K&&!!E.iridescenceThicknessMap,Pt=V&&!!E.sheenColorMap,mt=V&&!!E.sheenRoughnessMap,Xt=!!E.specularMap,Ot=!!E.specularColorMap,re=!!E.specularIntensityMap,I=at&&!!E.transmissionMap,ct=at&&!!E.thicknessMap,Z=!!E.gradientMap,J=!!E.alphaMap,dt=E.alphaTest>0,lt=!!E.alphaHash,Dt=!!E.extensions;let fe=0;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(fe=i.toneMapping);const Ee={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:xt,fragmentShader:$,defines:E.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&B._colorsTexture!==null,instancing:At,instancingColor:At&&B.instanceColor!==null,instancingMorph:At&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:li,alphaToCoverage:!!E.alphaToCoverage,map:ce,matcap:Gt,envMap:ue,envMapMode:ue&&j.mapping,envMapCubeUVHeight:Y,aoMap:O,lightMap:Ae,bumpMap:kt,normalMap:Vt,displacementMap:d&&Tt,emissiveMap:ee,normalMapObjectSpace:Vt&&E.normalMapType===1,normalMapTangentSpace:Vt&&E.normalMapType===0,metalnessMap:wt,roughnessMap:T,anisotropy:y,anisotropyMap:nt,clearcoat:D,clearcoatMap:ft,clearcoatNormalMap:Ht,clearcoatRoughnessMap:Q,dispersion:k,iridescence:K,iridescenceMap:pt,iridescenceThicknessMap:Rt,sheen:V,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:Xt,specularColorMap:Ot,specularIntensityMap:re,transmission:at,transmissionMap:I,thicknessMap:ct,gradientMap:Z,opaque:E.transparent===!1&&E.blending===1&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:dt,alphaHash:lt,combine:E.combine,mapUv:ce&&g(E.map.channel),aoMapUv:O&&g(E.aoMap.channel),lightMapUv:Ae&&g(E.lightMap.channel),bumpMapUv:kt&&g(E.bumpMap.channel),normalMapUv:Vt&&g(E.normalMap.channel),displacementMapUv:Tt&&g(E.displacementMap.channel),emissiveMapUv:ee&&g(E.emissiveMap.channel),metalnessMapUv:wt&&g(E.metalnessMap.channel),roughnessMapUv:T&&g(E.roughnessMap.channel),anisotropyMapUv:nt&&g(E.anisotropyMap.channel),clearcoatMapUv:ft&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(E.sheenRoughnessMap.channel),specularMapUv:Xt&&g(E.specularMap.channel),specularColorMapUv:Ot&&g(E.specularColorMap.channel),specularIntensityMapUv:re&&g(E.specularIntensityMap.channel),transmissionMapUv:I&&g(E.transmissionMap.channel),thicknessMapUv:ct&&g(E.thicknessMap.channel),alphaMapUv:J&&g(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Vt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(ce||J),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Nt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:ce&&E.map.isVideoTexture===!0&&qt.getTransfer(E.map.colorSpace)===ne,decodeVideoTextureEmissive:ee&&E.emissiveMap.isVideoTexture===!0&&qt.getTransfer(E.emissiveMap.colorSpace)===ne,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===2,flipSided:E.side===1,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Dt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&E.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function f(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)v.push(L),v.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(S(v,E),M(v,E),v.push(i.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function S(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function M(E,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const v=m[E.type];let L;if(v){const F=$e[v];L=yc.clone(F.uniforms)}else L=E.uniforms;return L}function P(E,v){let L;for(let F=0,B=h.length;F<B;F++){const X=h[F];if(X.cacheKey===v){L=X,++L.usedTimes;break}}return L===void 0&&(L=new Nd(i,v,E,r),h.push(L)),L}function b(E){if(--E.usedTimes===0){const v=h.indexOf(E);h[v]=h[h.length-1],h.pop(),E.destroy()}}function C(E){c.remove(E)}function R(){c.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:x,acquireProgram:P,releaseProgram:b,releaseShaderCache:C,programs:h,dispose:R}}function Gd(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function kd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Oo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bo(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,m,g,_){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:g,group:_},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=g,f.group=_),t++,f}function a(u,d,p,m,g,_){const f=o(u,d,p,m,g,_);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,m,g,_){const f=o(u,d,p,m,g,_);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||kd),n.length>1&&n.sort(d||Oo),s.length>1&&s.sort(d||Oo)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Vd(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Bo,i.set(n,[o])):s>=r.length?(o=new Bo,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Yt};break;case"SpotLight":e={position:new A,direction:new A,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function Wd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Xd=0;function Yd(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qd(i){const t=new Hd,e=Wd(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,r=new se,o=new se;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,m=0,g=0,_=0,f=0,S=0,M=0,x=0,P=0,b=0,C=0;l.sort(Yd);for(let E=0,v=l.length;E<v;E++){const L=l[E],F=L.color,B=L.intensity,X=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*B,u+=F.g*B,d+=F.b*B;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],B);C++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,Y=e.get(L);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=L.shadow.matrix,S++}n.directional[p]=q,p++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(F).multiplyScalar(B),q.distance=X,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[g]=q;const j=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,j.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[g]=j.matrix,L.castShadow){const Y=e.get(L);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,n.spotShadow[g]=Y,n.spotShadowMap[g]=G,x++}g++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(F).multiplyScalar(B),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=q,_++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const j=L.shadow,Y=e.get(L);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=L.shadow.matrix,M++}n.point[m]=q,m++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(B),q.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[f]=q,f++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==g||R.rectAreaLength!==_||R.hemiLength!==f||R.numDirectionalShadows!==S||R.numPointShadows!==M||R.numSpotShadows!==x||R.numSpotMaps!==P||R.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=_,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,R.directionalLength=p,R.pointLength=m,R.spotLength=g,R.rectAreaLength=_,R.hemiLength=f,R.numDirectionalShadows=S,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=P,R.numLightProbes=C,n.version=Xd++)}function c(l,h){let u=0,d=0,p=0,m=0,g=0;const _=h.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const M=l[f];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),u++}else if(M.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),p++}else if(M.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(_),o.identity(),r.copy(M.matrixWorld),r.premultiply(_),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(_),d++}else if(M.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(_),g++}}}return{setup:a,setupView:c,state:n}}function zo(i){const t=new qd(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Zd(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new zo(i),t.set(s,[a])):r>=o.length?(a=new zo(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class $d extends Fn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kd extends Fn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Jd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jd=`uniform sampler2D shadow_pass;
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
}`;function Qd(i,t,e){let n=new Pr;const s=new it,r=new it,o=new ie,a=new $d({depthPacking:3201}),c=new Kd,l={},h=e.maxTextureSize,u={0:1,1:0,2:2},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Jd,fragmentShader:jd}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new xe;m.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new zt(m,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(b,C,R){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||b.length===0)return;const E=i.getRenderTarget(),v=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(0),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=f!==3&&this.type===3,X=f===3&&this.type!==3;for(let G=0,q=b.length;G<q;G++){const j=b[G],Y=j.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const st=Y.getFrameExtents();if(s.multiply(st),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,Y.mapSize.y=r.y)),Y.map===null||B===!0||X===!0){const yt=this.type!==3?{minFilter:1003,magFilter:1003}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Un(s.x,s.y,yt),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const ut=Y.getViewportCount();for(let yt=0;yt<ut;yt++){const Nt=Y.getViewport(yt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),F.viewport(o),Y.updateMatrices(j,yt),n=Y.getFrustum(),x(C,R,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===3&&S(Y,R),Y.needsUpdate=!1}f=this.type,_.needsUpdate=!1,i.setRenderTarget(E,v,L)};function S(b,C){const R=t.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Un(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,R,d,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,R,p,g,null)}function M(b,C,R,E){let v=null;const L=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)v=L;else if(v=R.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=v.uuid,B=C.uuid;let X=l[F];X===void 0&&(X={},l[F]=X);let G=X[B];G===void 0&&(G=v.clone(),X[B]=G,C.addEventListener("dispose",P)),v=G}if(v.visible=C.visible,v.wireframe=C.wireframe,E===3?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:u[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=i.properties.get(v);F.light=R}return v}function x(b,C,R,E,v){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===3)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const B=t.update(b),X=b.material;if(Array.isArray(X)){const G=B.groups;for(let q=0,j=G.length;q<j;q++){const Y=G[q],st=X[Y.materialIndex];if(st&&st.visible){const ut=M(b,st,E,v);b.onBeforeShadow(i,b,C,R,B,ut,Y),i.renderBufferDirect(R,null,B,ut,b,Y),b.onAfterShadow(i,b,C,R,B,ut,Y)}}}else if(X.visible){const G=M(b,X,E,v);b.onBeforeShadow(i,b,C,R,B,G,null),i.renderBufferDirect(R,null,B,G,b,null),b.onAfterShadow(i,b,C,R,B,G,null)}}const F=b.children;for(let B=0,X=F.length;B<X;B++)x(F[B],C,R,E,v)}function P(b){b.target.removeEventListener("dispose",P);for(const R in l){const E=l[R],v=b.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}const tf={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function ef(i,t){function e(){let I=!1;const ct=new ie;let Z=null;const J=new ie(0,0,0,0);return{setMask:function(dt){Z!==dt&&!I&&(i.colorMask(dt,dt,dt,dt),Z=dt)},setLocked:function(dt){I=dt},setClear:function(dt,lt,Dt,fe,Ee){Ee===!0&&(dt*=fe,lt*=fe,Dt*=fe),ct.set(dt,lt,Dt,fe),J.equals(ct)===!1&&(i.clearColor(dt,lt,Dt,fe),J.copy(ct))},reset:function(){I=!1,Z=null,J.set(-1,0,0,0)}}}function n(){let I=!1,ct=!1,Z=null,J=null,dt=null;return{setReversed:function(lt){if(ct!==lt){const Dt=t.get("EXT_clip_control");ct?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const fe=dt;dt=null,this.setClear(fe)}ct=lt},getReversed:function(){return ct},setTest:function(lt){lt?ot(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(lt){Z!==lt&&!I&&(i.depthMask(lt),Z=lt)},setFunc:function(lt){if(ct&&(lt=tf[lt]),J!==lt){switch(lt){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=lt}},setLocked:function(lt){I=lt},setClear:function(lt){dt!==lt&&(ct&&(lt=1-lt),i.clearDepth(lt),dt=lt)},reset:function(){I=!1,Z=null,J=null,dt=null,ct=!1}}}function s(){let I=!1,ct=null,Z=null,J=null,dt=null,lt=null,Dt=null,fe=null,Ee=null;return{setTest:function(Qt){I||(Qt?ot(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Qt){ct!==Qt&&!I&&(i.stencilMask(Qt),ct=Qt)},setFunc:function(Qt,ke,tn){(Z!==Qt||J!==ke||dt!==tn)&&(i.stencilFunc(Qt,ke,tn),Z=Qt,J=ke,dt=tn)},setOp:function(Qt,ke,tn){(lt!==Qt||Dt!==ke||fe!==tn)&&(i.stencilOp(Qt,ke,tn),lt=Qt,Dt=ke,fe=tn)},setLocked:function(Qt){I=Qt},setClear:function(Qt){Ee!==Qt&&(i.clearStencil(Qt),Ee=Qt)},reset:function(){I=!1,ct=null,Z=null,J=null,dt=null,lt=null,Dt=null,fe=null,Ee=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],m=null,g=!1,_=null,f=null,S=null,M=null,x=null,P=null,b=null,C=new Yt(0,0,0),R=0,E=!1,v=null,L=null,F=null,B=null,X=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=j>=2);let st=null,ut={};const yt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),xt=new ie().fromArray(yt),$=new ie().fromArray(Nt);function tt(I,ct,Z,J){const dt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(I,lt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<Z;Dt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(ct+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return lt}const _t={};_t[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(3),kt(!1),Vt(1),ot(i.CULL_FACE),O(0);function ot(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function bt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function At(I,ct){return u[I]!==ct?(i.bindFramebuffer(I,ct),u[I]=ct,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ft(I,ct){let Z=p,J=!1;if(I){Z=d.get(ct),Z===void 0&&(Z=[],d.set(ct,Z));const dt=I.textures;if(Z.length!==dt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Dt=dt.length;lt<Dt;lt++)Z[lt]=i.COLOR_ATTACHMENT0+lt;Z.length=dt.length,J=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,J=!0);J&&i.drawBuffers(Z)}function ce(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const Gt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Gt[103]=i.MIN,Gt[104]=i.MAX;const ue={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function O(I,ct,Z,J,dt,lt,Dt,fe,Ee,Qt){if(I===0){g===!0&&(bt(i.BLEND),g=!1);return}if(g===!1&&(ot(i.BLEND),g=!0),I!==5){if(I!==_||Qt!==E){if((f!==100||x!==100)&&(i.blendEquation(i.FUNC_ADD),f=100,x=100),Qt)switch(I){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,M=null,P=null,b=null,C.set(0,0,0),R=0,_=I,E=Qt}return}dt=dt||ct,lt=lt||Z,Dt=Dt||J,(ct!==f||dt!==x)&&(i.blendEquationSeparate(Gt[ct],Gt[dt]),f=ct,x=dt),(Z!==S||J!==M||lt!==P||Dt!==b)&&(i.blendFuncSeparate(ue[Z],ue[J],ue[lt],ue[Dt]),S=Z,M=J,P=lt,b=Dt),(fe.equals(C)===!1||Ee!==R)&&(i.blendColor(fe.r,fe.g,fe.b,Ee),C.copy(fe),R=Ee),_=I,E=!1}function Ae(I,ct){I.side===2?bt(i.CULL_FACE):ot(i.CULL_FACE);let Z=I.side===1;ct&&(Z=!Z),kt(Z),I.blending===1&&I.transparent===!1?O(0):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ee(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(I){v!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),v=I)}function Vt(I){I!==0?(ot(i.CULL_FACE),I!==L&&(I===1?i.cullFace(i.BACK):I===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),L=I}function Tt(I){I!==F&&(q&&i.lineWidth(I),F=I)}function ee(I,ct,Z){I?(ot(i.POLYGON_OFFSET_FILL),(B!==ct||X!==Z)&&(i.polygonOffset(ct,Z),B=ct,X=Z)):bt(i.POLYGON_OFFSET_FILL)}function wt(I){I?ot(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function T(I){I===void 0&&(I=i.TEXTURE0+G-1),st!==I&&(i.activeTexture(I),st=I)}function y(I,ct,Z){Z===void 0&&(st===null?Z=i.TEXTURE0+G-1:Z=st);let J=ut[Z];J===void 0&&(J={type:void 0,texture:void 0},ut[Z]=J),(J.type!==I||J.texture!==ct)&&(st!==Z&&(i.activeTexture(Z),st=Z),i.bindTexture(I,ct||_t[I]),J.type=I,J.texture=ct)}function D(){const I=ut[st];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function k(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(I){xt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),xt.copy(I))}function mt(I){$.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Xt(I,ct){let Z=l.get(ct);Z===void 0&&(Z=new WeakMap,l.set(ct,Z));let J=Z.get(I);J===void 0&&(J=i.getUniformBlockIndex(ct,I.name),Z.set(I,J))}function Ot(I,ct){const J=l.get(ct).get(I);c.get(ct)!==J&&(i.uniformBlockBinding(ct,J,I.__bindingPointIndex),c.set(ct,J))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ut={},u={},d=new WeakMap,p=[],m=null,g=!1,_=null,f=null,S=null,M=null,x=null,P=null,b=null,C=new Yt(0,0,0),R=0,E=!1,v=null,L=null,F=null,B=null,X=null,xt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:bt,bindFramebuffer:At,drawBuffers:Ft,useProgram:ce,setBlending:O,setMaterial:Ae,setFlipSided:kt,setCullFace:Vt,setLineWidth:Tt,setPolygonOffset:ee,setScissorTest:wt,activeTexture:T,bindTexture:y,unbindTexture:D,compressedTexImage2D:k,compressedTexImage3D:K,texImage2D:pt,texImage3D:Rt,updateUBOMapping:Xt,uniformBlockBinding:Ot,texStorage2D:Ht,texStorage3D:Q,texSubImage2D:V,texSubImage3D:at,compressedTexSubImage2D:nt,compressedTexSubImage3D:ft,scissor:Pt,viewport:mt,reset:re}}function Go(i,t,e,n){const s=nf(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/s.components*s.byteLength;case 1029:return i*t/s.components*s.byteLength;case 1030:return i*t*2/s.components*s.byteLength;case 1031:return i*t*2/s.components*s.byteLength;case 1022:return i*t*3/s.components*s.byteLength;case 1023:return i*t*4/s.components*s.byteLength;case 1033:return i*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nf(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function sf(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,y){return p?new OffscreenCanvas(T,y):ws("canvas")}function g(T,y,D){let k=1;const K=wt(T);if((K.width>D||K.height>D)&&(k=D/Math.max(K.width,K.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const V=Math.floor(k*K.width),at=Math.floor(k*K.height);u===void 0&&(u=m(V,at));const nt=y?m(V,at):u;return nt.width=V,nt.height=at,nt.getContext("2d").drawImage(T,0,0,V,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+at+")."),nt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function _(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,y,D,k,K=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let V=y;if(y===i.RED&&(D===i.FLOAT&&(V=i.R32F),D===i.HALF_FLOAT&&(V=i.R16F),D===i.UNSIGNED_BYTE&&(V=i.R8)),y===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(V=i.R8UI),D===i.UNSIGNED_SHORT&&(V=i.R16UI),D===i.UNSIGNED_INT&&(V=i.R32UI),D===i.BYTE&&(V=i.R8I),D===i.SHORT&&(V=i.R16I),D===i.INT&&(V=i.R32I)),y===i.RG&&(D===i.FLOAT&&(V=i.RG32F),D===i.HALF_FLOAT&&(V=i.RG16F),D===i.UNSIGNED_BYTE&&(V=i.RG8)),y===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(V=i.RG8UI),D===i.UNSIGNED_SHORT&&(V=i.RG16UI),D===i.UNSIGNED_INT&&(V=i.RG32UI),D===i.BYTE&&(V=i.RG8I),D===i.SHORT&&(V=i.RG16I),D===i.INT&&(V=i.RG32I)),y===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(V=i.RGB8UI),D===i.UNSIGNED_SHORT&&(V=i.RGB16UI),D===i.UNSIGNED_INT&&(V=i.RGB32UI),D===i.BYTE&&(V=i.RGB8I),D===i.SHORT&&(V=i.RGB16I),D===i.INT&&(V=i.RGB32I)),y===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),D===i.UNSIGNED_INT&&(V=i.RGBA32UI),D===i.BYTE&&(V=i.RGBA8I),D===i.SHORT&&(V=i.RGBA16I),D===i.INT&&(V=i.RGBA32I)),y===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),y===i.RGBA){const at=K?Cs:qt.getTransfer(k);D===i.FLOAT&&(V=i.RGBA32F),D===i.HALF_FLOAT&&(V=i.RGBA16F),D===i.UNSIGNED_BYTE&&(V=at===ne?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function x(T,y){let D;return T?y===null||y===1014||y===1020?D=i.DEPTH24_STENCIL8:y===1015?D=i.DEPTH32F_STENCIL8:y===1012&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===1014||y===1020?D=i.DEPTH_COMPONENT24:y===1015?D=i.DEPTH_COMPONENT32F:y===1012&&(D=i.DEPTH_COMPONENT16),D}function P(T,y){return _(T)===!0||T.isFramebufferTexture&&T.minFilter!==1003&&T.minFilter!==1006?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function b(T){const y=T.target;y.removeEventListener("dispose",b),R(y),y.isVideoTexture&&h.delete(y)}function C(T){const y=T.target;y.removeEventListener("dispose",C),v(y)}function R(T){const y=n.get(T);if(y.__webglInit===void 0)return;const D=T.source,k=d.get(D);if(k){const K=k[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(T),Object.keys(k).length===0&&d.delete(D)}n.remove(T)}function E(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const D=T.source,k=d.get(D);delete k[y.__cacheKey],o.memory.textures--}function v(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(y.__webglFramebuffer[k]))for(let K=0;K<y.__webglFramebuffer[k].length;K++)i.deleteFramebuffer(y.__webglFramebuffer[k][K]);else i.deleteFramebuffer(y.__webglFramebuffer[k]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[k])}else{if(Array.isArray(y.__webglFramebuffer))for(let k=0;k<y.__webglFramebuffer.length;k++)i.deleteFramebuffer(y.__webglFramebuffer[k]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let k=0;k<y.__webglColorRenderbuffer.length;k++)y.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[k]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const D=T.textures;for(let k=0,K=D.length;k<K;k++){const V=n.get(D[k]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(D[k])}n.remove(T)}let L=0;function F(){L=0}function B(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function X(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function G(T,y){const D=n.get(T);if(T.isVideoTexture&&Tt(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){const k=T.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(D,T,y);return}}e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+y)}function q(T,y){const D=n.get(T);if(T.version>0&&D.__version!==T.version){$(D,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+y)}function j(T,y){const D=n.get(T);if(T.version>0&&D.__version!==T.version){$(D,T,y);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+y)}function Y(T,y){const D=n.get(T);if(T.version>0&&D.__version!==T.version){tt(D,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+y)}const st={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},ut={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},yt={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Nt(T,y){if(y.type===1015&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===1006||y.magFilter===1007||y.magFilter===1005||y.magFilter===1008||y.minFilter===1006||y.minFilter===1007||y.minFilter===1005||y.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,st[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,st[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,st[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ut[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ut[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,yt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===1003||y.minFilter!==1005&&y.minFilter!==1008||y.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function xt(T,y){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",b));const k=y.source;let K=d.get(k);K===void 0&&(K={},d.set(k,K));const V=X(y);if(V!==T.__cacheKey){K[V]===void 0&&(K[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),K[V].usedTimes++;const at=K[T.__cacheKey];at!==void 0&&(K[T.__cacheKey].usedTimes--,at.usedTimes===0&&E(y)),T.__cacheKey=V,T.__webglTexture=K[V].texture}return D}function $(T,y,D){let k=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(k=i.TEXTURE_3D);const K=xt(T,y),V=y.source;e.bindTexture(k,T.__webglTexture,i.TEXTURE0+D);const at=n.get(V);if(V.version!==at.__version||K===!0){e.activeTexture(i.TEXTURE0+D);const nt=qt.getPrimaries(qt.workingColorSpace),ft=y.colorSpace===vn?null:qt.getPrimaries(y.colorSpace),Ht=y.colorSpace===vn||nt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let Q=g(y.image,!1,s.maxTextureSize);Q=ee(y,Q);const pt=r.convert(y.format,y.colorSpace),Rt=r.convert(y.type);let Pt=M(y.internalFormat,pt,Rt,y.colorSpace,y.isVideoTexture);Nt(k,y);let mt;const Xt=y.mipmaps,Ot=y.isVideoTexture!==!0,re=at.__version===void 0||K===!0,I=V.dataReady,ct=P(y,Q);if(y.isDepthTexture)Pt=x(y.format===1027,y.type),re&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Pt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Pt,Q.width,Q.height,0,pt,Rt,null));else if(y.isDataTexture)if(Xt.length>0){Ot&&re&&e.texStorage2D(i.TEXTURE_2D,ct,Pt,Xt[0].width,Xt[0].height);for(let Z=0,J=Xt.length;Z<J;Z++)mt=Xt[Z],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(i.TEXTURE_2D,Z,Pt,mt.width,mt.height,0,pt,Rt,mt.data);y.generateMipmaps=!1}else Ot?(re&&e.texStorage2D(i.TEXTURE_2D,ct,Pt,Q.width,Q.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,Rt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,Q.width,Q.height,0,pt,Rt,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ot&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Pt,Xt[0].width,Xt[0].height,Q.depth);for(let Z=0,J=Xt.length;Z<J;Z++)if(mt=Xt[Z],y.format!==1023)if(pt!==null)if(Ot){if(I)if(y.layerUpdates.size>0){const dt=Go(mt.width,mt.height,y.format,y.type);for(const lt of y.layerUpdates){const Dt=mt.data.subarray(lt*dt/mt.data.BYTES_PER_ELEMENT,(lt+1)*dt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,lt,mt.width,mt.height,1,pt,Dt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Pt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,mt.width,mt.height,Q.depth,pt,Rt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Pt,mt.width,mt.height,Q.depth,0,pt,Rt,mt.data)}else{Ot&&re&&e.texStorage2D(i.TEXTURE_2D,ct,Pt,Xt[0].width,Xt[0].height);for(let Z=0,J=Xt.length;Z<J;Z++)mt=Xt[Z],y.format!==1023?pt!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?I&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(i.TEXTURE_2D,Z,Pt,mt.width,mt.height,0,pt,Rt,mt.data)}else if(y.isDataArrayTexture)if(Ot){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Pt,Q.width,Q.height,Q.depth),I)if(y.layerUpdates.size>0){const Z=Go(Q.width,Q.height,y.format,y.type);for(const J of y.layerUpdates){const dt=Q.data.subarray(J*Z/Q.data.BYTES_PER_ELEMENT,(J+1)*Z/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,Q.width,Q.height,1,pt,Rt,dt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Rt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,Q.width,Q.height,Q.depth,0,pt,Rt,Q.data);else if(y.isData3DTexture)Ot?(re&&e.texStorage3D(i.TEXTURE_3D,ct,Pt,Q.width,Q.height,Q.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Rt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,Q.width,Q.height,Q.depth,0,pt,Rt,Q.data);else if(y.isFramebufferTexture){if(re)if(Ot)e.texStorage2D(i.TEXTURE_2D,ct,Pt,Q.width,Q.height);else{let Z=Q.width,J=Q.height;for(let dt=0;dt<ct;dt++)e.texImage2D(i.TEXTURE_2D,dt,Pt,Z,J,0,pt,Rt,null),Z>>=1,J>>=1}}else if(Xt.length>0){if(Ot&&re){const Z=wt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Pt,Z.width,Z.height)}for(let Z=0,J=Xt.length;Z<J;Z++)mt=Xt[Z],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,pt,Rt,mt):e.texImage2D(i.TEXTURE_2D,Z,Pt,pt,Rt,mt);y.generateMipmaps=!1}else if(Ot){if(re){const Z=wt(Q);e.texStorage2D(i.TEXTURE_2D,ct,Pt,Z.width,Z.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Rt,Q)}else e.texImage2D(i.TEXTURE_2D,0,Pt,pt,Rt,Q);_(y)&&f(k),at.__version=V.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function tt(T,y,D){if(y.image.length!==6)return;const k=xt(T,y),K=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+D);const V=n.get(K);if(K.version!==V.__version||k===!0){e.activeTexture(i.TEXTURE0+D);const at=qt.getPrimaries(qt.workingColorSpace),nt=y.colorSpace===vn?null:qt.getPrimaries(y.colorSpace),ft=y.colorSpace===vn||at===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Ht=y.isCompressedTexture||y.image[0].isCompressedTexture,Q=y.image[0]&&y.image[0].isDataTexture,pt=[];for(let J=0;J<6;J++)!Ht&&!Q?pt[J]=g(y.image[J],!0,s.maxCubemapSize):pt[J]=Q?y.image[J].image:y.image[J],pt[J]=ee(y,pt[J]);const Rt=pt[0],Pt=r.convert(y.format,y.colorSpace),mt=r.convert(y.type),Xt=M(y.internalFormat,Pt,mt,y.colorSpace),Ot=y.isVideoTexture!==!0,re=V.__version===void 0||k===!0,I=K.dataReady;let ct=P(y,Rt);Nt(i.TEXTURE_CUBE_MAP,y);let Z;if(Ht){Ot&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Xt,Rt.width,Rt.height);for(let J=0;J<6;J++){Z=pt[J].mipmaps;for(let dt=0;dt<Z.length;dt++){const lt=Z[dt];y.format!==1023?Pt!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,lt.width,lt.height,Pt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Xt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,lt.width,lt.height,Pt,mt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Xt,lt.width,lt.height,0,Pt,mt,lt.data)}}}else{if(Z=y.mipmaps,Ot&&re){Z.length>0&&ct++;const J=wt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Xt,J.width,J.height)}for(let J=0;J<6;J++)if(Q){Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pt[J].width,pt[J].height,Pt,mt,pt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,pt[J].width,pt[J].height,0,Pt,mt,pt[J].data);for(let dt=0;dt<Z.length;dt++){const Dt=Z[dt].image[J].image;Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Dt.width,Dt.height,Pt,mt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Xt,Dt.width,Dt.height,0,Pt,mt,Dt.data)}}else{Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pt,mt,pt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,Pt,mt,pt[J]);for(let dt=0;dt<Z.length;dt++){const lt=Z[dt];Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Pt,mt,lt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Xt,Pt,mt,lt.image[J])}}}_(y)&&f(i.TEXTURE_CUBE_MAP),V.__version=K.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function _t(T,y,D,k,K,V){const at=r.convert(D.format,D.colorSpace),nt=r.convert(D.type),ft=M(D.internalFormat,at,nt,D.colorSpace),Ht=n.get(y),Q=n.get(D);if(Q.__renderTarget=y,!Ht.__hasExternalTextures){const pt=Math.max(1,y.width>>V),Rt=Math.max(1,y.height>>V);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,V,ft,pt,Rt,y.depth,0,at,nt,null):e.texImage2D(K,V,ft,pt,Rt,0,at,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Vt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,K,Q.__webglTexture,0,kt(y)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,K,Q.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(T,y,D){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){const k=y.depthTexture,K=k&&k.isDepthTexture?k.type:null,V=x(y.stencilBuffer,K),at=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=kt(y);Vt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,V,y.width,y.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,V,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,V,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,T)}else{const k=y.textures;for(let K=0;K<k.length;K++){const V=k[K],at=r.convert(V.format,V.colorSpace),nt=r.convert(V.type),ft=M(V.internalFormat,at,nt,V.colorSpace),Ht=kt(y);D&&Vt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,ft,y.width,y.height):Vt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,ft,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ft,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=n.get(y.depthTexture);k.__renderTarget=y,(!k.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);const K=k.__webglTexture,V=kt(y);if(y.depthTexture.format===1026)Vt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(y.depthTexture.format===1027)Vt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function At(T){const y=n.get(T),D=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const k=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),k){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,k.removeEventListener("dispose",K)};k.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=k}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");bt(y.__webglFramebuffer,T)}else if(D){y.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[k]),y.__webglDepthbuffer[k]===void 0)y.__webglDepthbuffer[k]=i.createRenderbuffer(),ot(y.__webglDepthbuffer[k],T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,V)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ot(y.__webglDepthbuffer,T,!1);else{const k=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(T,y,D){const k=n.get(T);y!==void 0&&_t(k.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&At(T)}function ce(T){const y=T.texture,D=n.get(T),k=n.get(y);T.addEventListener("dispose",C);const K=T.textures,V=T.isWebGLCubeRenderTarget===!0,at=K.length>1;if(at||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=y.version,o.memory.textures++),V){D.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer[nt]=[];for(let ft=0;ft<y.mipmaps.length;ft++)D.__webglFramebuffer[nt][ft]=i.createFramebuffer()}else D.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer=[];for(let nt=0;nt<y.mipmaps.length;nt++)D.__webglFramebuffer[nt]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(at)for(let nt=0,ft=K.length;nt<ft;nt++){const Ht=n.get(K[nt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Vt(T)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let nt=0;nt<K.length;nt++){const ft=K[nt];D.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[nt]);const Ht=r.convert(ft.format,ft.colorSpace),Q=r.convert(ft.type),pt=M(ft.internalFormat,Ht,Q,ft.colorSpace,T.isXRRenderTarget===!0),Rt=kt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,pt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,D.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(D.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,y);for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)_t(D.__webglFramebuffer[nt][ft],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft);else _t(D.__webglFramebuffer[nt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);_(y)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let nt=0,ft=K.length;nt<ft;nt++){const Ht=K[nt],Q=n.get(Ht);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Nt(i.TEXTURE_2D,Ht),_t(D.__webglFramebuffer,T,Ht,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,0),_(Ht)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(nt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,k.__webglTexture),Nt(nt,y),y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)_t(D.__webglFramebuffer[ft],T,y,i.COLOR_ATTACHMENT0,nt,ft);else _t(D.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,nt,0);_(y)&&f(nt),e.unbindTexture()}T.depthBuffer&&At(T)}function Gt(T){const y=T.textures;for(let D=0,k=y.length;D<k;D++){const K=y[D];if(_(K)){const V=S(T),at=n.get(K).__webglTexture;e.bindTexture(V,at),f(V),e.unbindTexture()}}}const ue=[],O=[];function Ae(T){if(T.samples>0){if(Vt(T)===!1){const y=T.textures,D=T.width,k=T.height;let K=i.COLOR_BUFFER_BIT;const V=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(T),nt=y.length>1;if(nt)for(let ft=0;ft<y.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ft=0;ft<y.length;ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[ft]);const Ht=n.get(y[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,D,k,0,0,D,k,K,i.NEAREST),c===!0&&(ue.length=0,O.length=0,ue.push(i.COLOR_ATTACHMENT0+ft),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ue.push(V),O.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let ft=0;ft<y.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,at.__webglColorRenderbuffer[ft]);const Ht=n.get(y[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function kt(T){return Math.min(s.maxSamples,T.samples)}function Vt(T){const y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Tt(T){const y=o.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function ee(T,y){const D=T.colorSpace,k=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==li&&D!==vn&&(qt.getTransfer(D)===ne?(k!==1023||K!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),y}function wt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=Ft,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Vt}function rf(i,t){function e(n,s=vn){let r;const o=qt.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class of extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gt extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const af={type:"move"};class cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const _=e.getJointPose(g,n),f=this._getHandJoint(l,g);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(af)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lf=`
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

}`;class hf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Sn({vertexShader:cf,fragmentShader:lf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uf extends hi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null;const g=new hf,_=e.getContextAttributes();let f=null,S=null;const M=[],x=[],P=new it;let b=null;const C=new Ge;C.viewport=new ie;const R=new Ge;R.viewport=new ie;const E=[C,R],v=new of;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=M[$];return tt===void 0&&(tt=new cr,M[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=M[$];return tt===void 0&&(tt=new cr,M[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=M[$];return tt===void 0&&(tt=new cr,M[$]=tt),tt.getHandSpace()};function B($){const tt=x.indexOf($.inputSource);if(tt===-1)return;const _t=M[tt];_t!==void 0&&(_t.update($.inputSource,$.frame,l||o),_t.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",G);for(let $=0;$<M.length;$++){const tt=x[$];tt!==null&&(x[$]=null,M[$].disconnect(tt))}L=null,F=null,g.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,S=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const tt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Un(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let tt=null,_t=null,ot=null;_.depth&&(ot=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=_.stencil?1027:1026,_t=_.stencil?1020:1014);const bt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Un(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new ya(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),xt.setContext(s),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G($){for(let tt=0;tt<$.removed.length;tt++){const _t=$.removed[tt],ot=x.indexOf(_t);ot>=0&&(x[ot]=null,M[ot].disconnect(_t))}for(let tt=0;tt<$.added.length;tt++){const _t=$.added[tt];let ot=x.indexOf(_t);if(ot===-1){for(let At=0;At<M.length;At++)if(At>=x.length){x.push(_t),ot=At;break}else if(x[At]===null){x[At]=_t,ot=At;break}if(ot===-1)break}const bt=M[ot];bt&&bt.connect(_t)}}const q=new A,j=new A;function Y($,tt,_t){q.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);const ot=q.distanceTo(j),bt=tt.projectionMatrix.elements,At=_t.projectionMatrix.elements,Ft=bt[14]/(bt[10]-1),ce=bt[14]/(bt[10]+1),Gt=(bt[9]+1)/bt[5],ue=(bt[9]-1)/bt[5],O=(bt[8]-1)/bt[0],Ae=(At[8]+1)/At[0],kt=Ft*O,Vt=Ft*Ae,Tt=ot/(-O+Ae),ee=Tt*-O;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ee),$.translateZ(Tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),bt[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const wt=Ft+Tt,T=ce+Tt,y=kt-ee,D=Vt+(ot-ee),k=Gt*ce/T*wt,K=ue*ce/T*wt;$.projectionMatrix.makePerspective(y,D,k,K,wt,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function st($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let tt=$.near,_t=$.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),v.near=R.near=C.near=tt,v.far=R.far=C.far=_t,(L!==v.near||F!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),L=v.near,F=v.far),C.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,v.layers.mask=C.layers.mask|R.layers.mask;const ot=$.parent,bt=v.cameras;st(v,ot);for(let At=0;At<bt.length;At++)st(bt[At],ot);bt.length===2?Y(v,C,R):v.projectionMatrix.copy(C.projectionMatrix),ut($,v,ot)};function ut($,tt,_t){_t===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(_t.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Di*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let yt=null;function Nt($,tt){if(h=tt.getViewerPose(l||o),m=tt,h!==null){const _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let ot=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,ot=!0);for(let At=0;At<_t.length;At++){const Ft=_t[At];let ce=null;if(p!==null)ce=p.getViewport(Ft);else{const ue=u.getViewSubImage(d,Ft);ce=ue.viewport,At===0&&(t.setRenderTargetTextures(S,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(S))}let Gt=E[At];Gt===void 0&&(Gt=new Ge,Gt.layers.enable(At),Gt.viewport=new ie,E[At]=Gt),Gt.matrix.fromArray(Ft.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ft.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ce.x,ce.y,ce.width,ce.height),At===0&&(v.matrix.copy(Gt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ot===!0&&v.cameras.push(Gt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const At=u.getDepthInformation(_t[0]);At&&At.isValid&&At.texture&&g.init(t,At,s.renderState)}}for(let _t=0;_t<M.length;_t++){const ot=x[_t],bt=M[_t];ot!==null&&bt!==void 0&&bt.update(ot,tt,l||o)}yt&&yt($,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}const xt=new Sa;xt.setAnimationLoop(Nt),this.setAnimationLoop=function($){yt=$},this.dispose=function(){}}}const Rn=new je,df=new se;function ff(i,t){function e(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function n(_,f){f.color.getRGB(_.fogColor.value,xa(i)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function s(_,f,S,M,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(_,f):f.isMeshToonMaterial?(r(_,f),u(_,f)):f.isMeshPhongMaterial?(r(_,f),h(_,f)):f.isMeshStandardMaterial?(r(_,f),d(_,f),f.isMeshPhysicalMaterial&&p(_,f,x)):f.isMeshMatcapMaterial?(r(_,f),m(_,f)):f.isMeshDepthMaterial?r(_,f):f.isMeshDistanceMaterial?(r(_,f),g(_,f)):f.isMeshNormalMaterial?r(_,f):f.isLineBasicMaterial?(o(_,f),f.isLineDashedMaterial&&a(_,f)):f.isPointsMaterial?c(_,f,S,M):f.isSpriteMaterial?l(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,e(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===1&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,e(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===1&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,e(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,e(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const S=t.get(f),M=S.envMap,x=S.envMapRotation;M&&(_.envMap.value=M,Rn.copy(x),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),_.envMapRotation.value.setFromMatrix4(df.makeRotationFromEuler(Rn)),_.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,_.aoMapTransform))}function o(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform))}function a(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function c(_,f,S,M){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*S,_.scale.value=M*.5,f.map&&(_.map.value=f.map,e(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function l(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function h(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function u(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function d(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function p(_,f,S){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,f){f.matcap&&(_.matcap.value=f.matcap)}function g(_,f){const S=t.get(f).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pf(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){const x=M.program;n.uniformBlockBinding(S,x)}function l(S,M){let x=s[S.id];x===void 0&&(m(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",_));const P=M.program;n.updateUBOMapping(S,P);const b=t.render.frame;r[S.id]!==b&&(d(S),r[S.id]=b)}function h(S){const M=u();S.__bindingPointIndex=M;const x=i.createBuffer(),P=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=s[S.id],x=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,C=x.length;b<C;b++){const R=Array.isArray(x[b])?x[b]:[x[b]];for(let E=0,v=R.length;E<v;E++){const L=R[E];if(p(L,b,E,P)===!0){const F=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let G=0;G<B.length;G++){const q=B[G],j=g(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,F+X,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,M,x,P){const b=S.value,C=M+"_"+x;if(P[C]===void 0)return typeof b=="number"||typeof b=="boolean"?P[C]=b:P[C]=b.clone(),!0;{const R=P[C];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return P[C]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function m(S){const M=S.uniforms;let x=0;const P=16;for(let C=0,R=M.length;C<R;C++){const E=Array.isArray(M[C])?M[C]:[M[C]];for(let v=0,L=E.length;v<L;v++){const F=E[v],B=Array.isArray(F.value)?F.value:[F.value];for(let X=0,G=B.length;X<G;X++){const q=B[X],j=g(q),Y=x%P,st=Y%j.boundary,ut=Y+st;x+=st,ut!==0&&P-ut<j.storage&&(x+=P-ut),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=j.storage}}}const b=x%P;return b>0&&(x+=P-b),S.__size=x,S.__cache={},this}function g(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function _(S){const M=S.target;M.removeEventListener("dispose",_);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class mf{constructor(t={}){const{canvas:e=nc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=0,this.toneMappingExposure=1;const x=this;let P=!1,b=0,C=0,R=null,E=-1,v=null;const L=new ie,F=new ie;let B=null;const X=new Yt(0);let G=0,q=e.width,j=e.height,Y=1,st=null,ut=null;const yt=new ie(0,0,q,j),Nt=new ie(0,0,q,j);let xt=!1;const $=new Pr;let tt=!1,_t=!1;const ot=new se,bt=new se,At=new A,Ft=new ie,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function ue(){return R===null?Y:1}let O=n;function Ae(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${br}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),O===null){const U="webgl2";if(O=Ae(U,w),O===null)throw Ae(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let kt,Vt,Tt,ee,wt,T,y,D,k,K,V,at,nt,ft,Ht,Q,pt,Rt,Pt,mt,Xt,Ot,re,I;function ct(){kt=new vu(O),kt.init(),Ot=new rf(O,kt),Vt=new fu(O,kt,t,Ot),Tt=new ef(O,kt),Vt.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),ee=new yu(O),wt=new Gd,T=new sf(O,kt,Tt,wt,Vt,Ot,ee),y=new mu(x),D=new xu(x),k=new Cc(O),re=new uu(O,k),K=new Mu(O,k,ee,re),V=new wu(O,K,k,ee),Pt=new Eu(O,Vt,T),Q=new pu(wt),at=new zd(x,y,D,kt,Vt,re,Q),nt=new ff(x,wt),ft=new Vd,Ht=new Zd(kt),Rt=new hu(x,y,D,Tt,V,p,c),pt=new Qd(x,V,Vt),I=new pf(O,ee,Vt,Tt),mt=new du(O,kt,ee),Xt=new Su(O,kt,ee),ee.programs=at.programs,x.capabilities=Vt,x.extensions=kt,x.properties=wt,x.renderLists=ft,x.shadowMap=pt,x.state=Tt,x.info=ee}ct();const Z=new uf(x,O);this.xr=Z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(q,j,!1))},this.getSize=function(w){return w.set(q,j)},this.setSize=function(w,U,H=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,j=U,e.width=Math.floor(w*Y),e.height=Math.floor(U*Y),H===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(q*Y,j*Y).floor()},this.setDrawingBufferSize=function(w,U,H){q=w,j=U,Y=H,e.width=Math.floor(w*H),e.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(yt)},this.setViewport=function(w,U,H,W){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,U,H,W),Tt.viewport(L.copy(yt).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(Nt)},this.setScissor=function(w,U,H,W){w.isVector4?Nt.set(w.x,w.y,w.z,w.w):Nt.set(w,U,H,W),Tt.scissor(F.copy(Nt).multiplyScalar(Y).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(w){Tt.setScissorTest(xt=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){ut=w},this.getClearColor=function(w){return w.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(w=!0,U=!0,H=!0){let W=0;if(w){let N=!1;if(R!==null){const et=R.texture.format;N=et===1033||et===1031||et===1029}if(N){const et=R.texture.type,ht=et===1009||et===1014||et===1012||et===1020||et===1017||et===1018,vt=Rt.getClearColor(),Mt=Rt.getClearAlpha(),Lt=vt.r,It=vt.g,St=vt.b;ht?(m[0]=Lt,m[1]=It,m[2]=St,m[3]=Mt,O.clearBufferuiv(O.COLOR,0,m)):(g[0]=Lt,g[1]=It,g[2]=St,g[3]=Mt,O.clearBufferiv(O.COLOR,0,g))}else W|=O.COLOR_BUFFER_BIT}U&&(W|=O.DEPTH_BUFFER_BIT),H&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ft.dispose(),Ht.dispose(),wt.dispose(),y.dispose(),D.dispose(),V.dispose(),re.dispose(),I.dispose(),at.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",zr),Z.removeEventListener("sessionend",Gr),yn.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=ee.autoReset,U=pt.enabled,H=pt.autoUpdate,W=pt.needsUpdate,N=pt.type;ct(),ee.autoReset=w,pt.enabled=U,pt.autoUpdate=H,pt.needsUpdate=W,pt.type=N}function lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Dt(w){const U=w.target;U.removeEventListener("dispose",Dt),fe(U)}function fe(w){Ee(w),wt.remove(w)}function Ee(w){const U=wt.get(w).programs;U!==void 0&&(U.forEach(function(H){at.releaseProgram(H)}),w.isShaderMaterial&&at.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,W,N,et){U===null&&(U=ce);const ht=N.isMesh&&N.matrixWorld.determinant()<0,vt=Oa(w,U,H,W,N);Tt.setMaterial(W,ht);let Mt=H.index,Lt=1;if(W.wireframe===!0){if(Mt=K.getWireframeAttribute(H),Mt===void 0)return;Lt=2}const It=H.drawRange,St=H.attributes.position;let Zt=It.start*Lt,oe=(It.start+It.count)*Lt;et!==null&&(Zt=Math.max(Zt,et.start*Lt),oe=Math.min(oe,(et.start+et.count)*Lt)),Mt!==null?(Zt=Math.max(Zt,0),oe=Math.min(oe,Mt.count)):St!=null&&(Zt=Math.max(Zt,0),oe=Math.min(oe,St.count));const le=oe-Zt;if(le<0||le===1/0)return;re.setup(N,W,vt,H,Mt);let De,Kt=mt;if(Mt!==null&&(De=k.get(Mt),Kt=Xt,Kt.setIndex(De)),N.isMesh)W.wireframe===!0?(Tt.setLineWidth(W.wireframeLinewidth*ue()),Kt.setMode(O.LINES)):Kt.setMode(O.TRIANGLES);else if(N.isLine){let Et=W.linewidth;Et===void 0&&(Et=1),Tt.setLineWidth(Et*ue()),N.isLineSegments?Kt.setMode(O.LINES):N.isLineLoop?Kt.setMode(O.LINE_LOOP):Kt.setMode(O.LINE_STRIP)}else N.isPoints?Kt.setMode(O.POINTS):N.isSprite&&Kt.setMode(O.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Kt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Et=N._multiDrawStarts,en=N._multiDrawCounts,Jt=N._multiDrawCount,Ve=Mt?k.get(Mt).bytesPerElement:1,On=wt.get(W).currentProgram.getUniforms();for(let Ie=0;Ie<Jt;Ie++)On.setValue(O,"_gl_DrawID",Ie),Kt.render(Et[Ie]/Ve,en[Ie])}else if(N.isInstancedMesh)Kt.renderInstances(Zt,le,N.count);else if(H.isInstancedBufferGeometry){const Et=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,en=Math.min(H.instanceCount,Et);Kt.renderInstances(Zt,le,en)}else Kt.render(Zt,le)};function Qt(w,U,H){w.transparent===!0&&w.side===2&&w.forceSinglePass===!1?(w.side=1,w.needsUpdate=!0,Gi(w,U,H),w.side=0,w.needsUpdate=!0,Gi(w,U,H),w.side=2):Gi(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),f=Ht.get(H),f.init(U),M.push(f),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),w!==H&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const W=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const et=N.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){const vt=et[ht];Qt(vt,H,N),W.add(vt)}else Qt(et,H,N),W.add(et)}),M.pop(),f=null,W},this.compileAsync=function(w,U,H=null){const W=this.compile(w,U,H);return new Promise(N=>{function et(){if(W.forEach(function(ht){wt.get(ht).currentProgram.isReady()&&W.delete(ht)}),W.size===0){N(w);return}setTimeout(et,10)}kt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ke=null;function tn(w){ke&&ke(w)}function zr(){yn.stop()}function Gr(){yn.start()}const yn=new Sa;yn.setAnimationLoop(tn),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(w){ke=w,Z.setAnimationLoop(w),w===null?yn.stop():yn.start()},Z.addEventListener("sessionstart",zr),Z.addEventListener("sessionend",Gr),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(U),U=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,R),f=Ht.get(w,M.length),f.init(U),M.push(f),bt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(bt),_t=this.localClippingEnabled,tt=Q.init(this.clippingPlanes,_t),_=ft.get(w,S.length),_.init(),S.push(_),Z.enabled===!0&&Z.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&Ns(et,U,-1/0,x.sortObjects)}Ns(w,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(st,ut),Gt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Gt&&Rt.addToRenderList(_,w),this.info.render.frame++,tt===!0&&Q.beginShadows();const H=f.state.shadowsArray;pt.render(H,w,U),tt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,N=_.transmissive;if(f.setupLights(),U.isArrayCamera){const et=U.cameras;if(N.length>0)for(let ht=0,vt=et.length;ht<vt;ht++){const Mt=et[ht];Vr(W,N,w,Mt)}Gt&&Rt.render(w);for(let ht=0,vt=et.length;ht<vt;ht++){const Mt=et[ht];kr(_,w,Mt,Mt.viewport)}}else N.length>0&&Vr(W,N,w,U),Gt&&Rt.render(w),kr(_,w,U);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,U),re.resetDefaultState(),E=-1,v=null,M.pop(),M.length>0?(f=M[M.length-1],tt===!0&&Q.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?_=S[S.length-1]:_=null};function Ns(w,U,H,W){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){W&&Ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(bt);const ht=V.update(w),vt=w.material;vt.visible&&_.push(w,ht,vt,H,Ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){const ht=V.update(w),vt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ft.copy(w.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ft.copy(ht.boundingSphere.center)),Ft.applyMatrix4(w.matrixWorld).applyMatrix4(bt)),Array.isArray(vt)){const Mt=ht.groups;for(let Lt=0,It=Mt.length;Lt<It;Lt++){const St=Mt[Lt],Zt=vt[St.materialIndex];Zt&&Zt.visible&&_.push(w,ht,Zt,H,Ft.z,St)}}else vt.visible&&_.push(w,ht,vt,H,Ft.z,null)}}const et=w.children;for(let ht=0,vt=et.length;ht<vt;ht++)Ns(et[ht],U,H,W)}function kr(w,U,H,W){const N=w.opaque,et=w.transmissive,ht=w.transparent;f.setupLightsView(H),tt===!0&&Q.setGlobalState(x.clippingPlanes,H),W&&Tt.viewport(L.copy(W)),N.length>0&&zi(N,U,H),et.length>0&&zi(et,U,H),ht.length>0&&zi(ht,U,H),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Vr(w,U,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Un(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const et=f.state.transmissionRenderTarget[W.id],ht=W.viewport||L;et.setSize(ht.z,ht.w);const vt=x.getRenderTarget();x.setRenderTarget(et),x.getClearColor(X),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),Gt&&Rt.render(H);const Mt=x.toneMapping;x.toneMapping=0;const Lt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),tt===!0&&Q.setGlobalState(x.clippingPlanes,W),zi(w,H,W),T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et),kt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let St=0,Zt=U.length;St<Zt;St++){const oe=U[St],le=oe.object,De=oe.geometry,Kt=oe.material,Et=oe.group;if(Kt.side===2&&le.layers.test(W.layers)){const en=Kt.side;Kt.side=1,Kt.needsUpdate=!0,Hr(le,H,W,De,Kt,Et),Kt.side=en,Kt.needsUpdate=!0,It=!0}}It===!0&&(T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et))}x.setRenderTarget(vt),x.setClearColor(X,G),Lt!==void 0&&(W.viewport=Lt),x.toneMapping=Mt}function zi(w,U,H){const W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,et=w.length;N<et;N++){const ht=w[N],vt=ht.object,Mt=ht.geometry,Lt=W===null?ht.material:W,It=ht.group;vt.layers.test(H.layers)&&Hr(vt,U,H,Mt,Lt,It)}}function Hr(w,U,H,W,N,et){w.onBeforeRender(x,U,H,W,N,et),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(x,U,H,W,w,et),N.transparent===!0&&N.side===2&&N.forceSinglePass===!1?(N.side=1,N.needsUpdate=!0,x.renderBufferDirect(H,U,W,N,w,et),N.side=0,N.needsUpdate=!0,x.renderBufferDirect(H,U,W,N,w,et),N.side=2):x.renderBufferDirect(H,U,W,N,w,et),w.onAfterRender(x,U,H,W,N,et)}function Gi(w,U,H){U.isScene!==!0&&(U=ce);const W=wt.get(w),N=f.state.lights,et=f.state.shadowsArray,ht=N.state.version,vt=at.getParameters(w,N.state,et,U,H),Mt=at.getProgramCacheKey(vt);let Lt=W.programs;W.environment=w.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(w.isMeshStandardMaterial?D:y).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",Dt),Lt=new Map,W.programs=Lt);let It=Lt.get(Mt);if(It!==void 0){if(W.currentProgram===It&&W.lightsStateVersion===ht)return Xr(w,vt),It}else vt.uniforms=at.getUniforms(w),w.onBeforeCompile(vt,x),It=at.acquireProgram(vt,Mt),Lt.set(Mt,It),W.uniforms=vt.uniforms;const St=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(St.clippingPlanes=Q.uniform),Xr(w,vt),W.needsLights=za(w),W.lightsStateVersion=ht,W.needsLights&&(St.ambientLightColor.value=N.state.ambient,St.lightProbe.value=N.state.probe,St.directionalLights.value=N.state.directional,St.directionalLightShadows.value=N.state.directionalShadow,St.spotLights.value=N.state.spot,St.spotLightShadows.value=N.state.spotShadow,St.rectAreaLights.value=N.state.rectArea,St.ltc_1.value=N.state.rectAreaLTC1,St.ltc_2.value=N.state.rectAreaLTC2,St.pointLights.value=N.state.point,St.pointLightShadows.value=N.state.pointShadow,St.hemisphereLights.value=N.state.hemi,St.directionalShadowMap.value=N.state.directionalShadowMap,St.directionalShadowMatrix.value=N.state.directionalShadowMatrix,St.spotShadowMap.value=N.state.spotShadowMap,St.spotLightMatrix.value=N.state.spotLightMatrix,St.spotLightMap.value=N.state.spotLightMap,St.pointShadowMap.value=N.state.pointShadowMap,St.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=It,W.uniformsList=null,It}function Wr(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=ys.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Xr(w,U){const H=wt.get(w);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Oa(w,U,H,W,N){U.isScene!==!0&&(U=ce),T.resetTextureUnits();const et=U.fog,ht=W.isMeshStandardMaterial?U.environment:null,vt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:li,Mt=(W.isMeshStandardMaterial?D:y).get(W.envMap||ht),Lt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,It=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),St=!!H.morphAttributes.position,Zt=!!H.morphAttributes.normal,oe=!!H.morphAttributes.color;let le=0;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(le=x.toneMapping);const De=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Kt=De!==void 0?De.length:0,Et=wt.get(W),en=f.state.lights;if(tt===!0&&(_t===!0||w!==v)){const Be=w===v&&W.id===E;Q.setState(W,w,Be)}let Jt=!1;W.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==en.state.version||Et.outputColorSpace!==vt||N.isBatchedMesh&&Et.batching===!1||!N.isBatchedMesh&&Et.batching===!0||N.isBatchedMesh&&Et.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Et.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Et.instancing===!1||!N.isInstancedMesh&&Et.instancing===!0||N.isSkinnedMesh&&Et.skinning===!1||!N.isSkinnedMesh&&Et.skinning===!0||N.isInstancedMesh&&Et.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Et.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Et.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Et.instancingMorph===!1&&N.morphTexture!==null||Et.envMap!==Mt||W.fog===!0&&Et.fog!==et||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Q.numPlanes||Et.numIntersection!==Q.numIntersection)||Et.vertexAlphas!==Lt||Et.vertexTangents!==It||Et.morphTargets!==St||Et.morphNormals!==Zt||Et.morphColors!==oe||Et.toneMapping!==le||Et.morphTargetsCount!==Kt)&&(Jt=!0):(Jt=!0,Et.__version=W.version);let Ve=Et.currentProgram;Jt===!0&&(Ve=Gi(W,U,N));let On=!1,Ie=!1,di=!1;const he=Ve.getUniforms(),Ze=Et.uniforms;if(Tt.useProgram(Ve.program)&&(On=!0,Ie=!0,di=!0),W.id!==E&&(E=W.id,Ie=!0),On||v!==w){Tt.buffers.depth.getReversed()?(ot.copy(w.projectionMatrix),sc(ot),rc(ot),he.setValue(O,"projectionMatrix",ot)):he.setValue(O,"projectionMatrix",w.projectionMatrix),he.setValue(O,"viewMatrix",w.matrixWorldInverse);const hn=he.map.cameraPosition;hn!==void 0&&hn.setValue(O,At.setFromMatrixPosition(w.matrixWorld)),Vt.logarithmicDepthBuffer&&he.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&he.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,Ie=!0,di=!0)}if(N.isSkinnedMesh){he.setOptional(O,N,"bindMatrix"),he.setOptional(O,N,"bindMatrixInverse");const Be=N.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),he.setValue(O,"boneTexture",Be.boneTexture,T))}N.isBatchedMesh&&(he.setOptional(O,N,"batchingTexture"),he.setValue(O,"batchingTexture",N._matricesTexture,T),he.setOptional(O,N,"batchingIdTexture"),he.setValue(O,"batchingIdTexture",N._indirectTexture,T),he.setOptional(O,N,"batchingColorTexture"),N._colorsTexture!==null&&he.setValue(O,"batchingColorTexture",N._colorsTexture,T));const fi=H.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&Pt.update(N,H,Ve),(Ie||Et.receiveShadow!==N.receiveShadow)&&(Et.receiveShadow=N.receiveShadow,he.setValue(O,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ze.envMap.value=Mt,Ze.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Ze.envMapIntensity.value=U.environmentIntensity),Ie&&(he.setValue(O,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&Ba(Ze,di),et&&W.fog===!0&&nt.refreshFogUniforms(Ze,et),nt.refreshMaterialUniforms(Ze,W,Y,j,f.state.transmissionRenderTarget[w.id]),ys.upload(O,Wr(Et),Ze,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ys.upload(O,Wr(Et),Ze,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&he.setValue(O,"center",N.center),he.setValue(O,"modelViewMatrix",N.modelViewMatrix),he.setValue(O,"normalMatrix",N.normalMatrix),he.setValue(O,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Be=W.uniformsGroups;for(let hn=0,un=Be.length;hn<un;hn++){const Yr=Be[hn];I.update(Yr,Ve),I.bind(Yr,Ve)}}return Ve}function Ba(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function za(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,H){wt.get(w.texture).__webglTexture=U,wt.get(w.depthTexture).__webglTexture=H;const W=wt.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const H=wt.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,H=0){R=w,b=U,C=H;let W=!0,N=null,et=!1,ht=!1;if(w){const Mt=wt.get(w);if(Mt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(O.FRAMEBUFFER,null),W=!1;else if(Mt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Mt.__hasExternalTextures)T.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const St=w.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&wt.has(St)&&(w.width!==St.image.width||w.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ht=!0);const It=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(It[U])?N=It[U][H]:N=It[U],et=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?N=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(It)?N=It[H]:N=It,L.copy(w.viewport),F.copy(w.scissor),B=w.scissorTest}else L.copy(yt).multiplyScalar(Y).floor(),F.copy(Nt).multiplyScalar(Y).floor(),B=xt;if(Tt.bindFramebuffer(O.FRAMEBUFFER,N)&&W&&Tt.drawBuffers(w,N),Tt.viewport(L),Tt.scissor(F),Tt.setScissorTest(B),et){const Mt=wt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,H)}else if(ht){const Mt=wt.get(w.texture),Lt=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Mt.__webglTexture,H||0,Lt)}E=-1},this.readRenderTargetPixels=function(w,U,H,W,N,et,ht){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){Tt.bindFramebuffer(O.FRAMEBUFFER,vt);try{const Mt=w.texture,Lt=Mt.format,It=Mt.type;if(!Vt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-W&&H>=0&&H<=w.height-N&&O.readPixels(U,H,W,N,Ot.convert(Lt),Ot.convert(It),et)}finally{const Mt=R!==null?wt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(w,U,H,W,N,et,ht){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){const Mt=w.texture,Lt=Mt.format,It=Mt.type;if(!Vt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-W&&H>=0&&H<=w.height-N){Tt.bindFramebuffer(O.FRAMEBUFFER,vt);const St=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,St),O.bufferData(O.PIXEL_PACK_BUFFER,et.byteLength,O.STREAM_READ),O.readPixels(U,H,W,N,Ot.convert(Lt),Ot.convert(It),0);const Zt=R!==null?wt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,Zt);const oe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ic(O,oe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,St),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,et),O.deleteBuffer(St),O.deleteSync(oe),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,H=0){w.isTexture!==!0&&(wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const W=Math.pow(2,-H),N=Math.floor(w.image.width*W),et=Math.floor(w.image.height*W),ht=U!==null?U.x:0,vt=U!==null?U.y:0;T.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,ht,vt,N,et),Tt.unbindTexture()},this.copyTextureToTexture=function(w,U,H=null,W=null,N=0){w.isTexture!==!0&&(wi("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let et,ht,vt,Mt,Lt,It,St,Zt,oe;const le=w.isCompressedTexture?w.mipmaps[N]:w.image;H!==null?(et=H.max.x-H.min.x,ht=H.max.y-H.min.y,vt=H.isBox3?H.max.z-H.min.z:1,Mt=H.min.x,Lt=H.min.y,It=H.isBox3?H.min.z:0):(et=le.width,ht=le.height,vt=le.depth||1,Mt=0,Lt=0,It=0),W!==null?(St=W.x,Zt=W.y,oe=W.z):(St=0,Zt=0,oe=0);const De=Ot.convert(U.format),Kt=Ot.convert(U.type);let Et;U.isData3DTexture?(T.setTexture3D(U,0),Et=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),Et=O.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),Et=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const en=O.getParameter(O.UNPACK_ROW_LENGTH),Jt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ve=O.getParameter(O.UNPACK_SKIP_PIXELS),On=O.getParameter(O.UNPACK_SKIP_ROWS),Ie=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,le.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Mt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Lt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,It);const di=w.isDataArrayTexture||w.isData3DTexture,he=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Ze=wt.get(w),fi=wt.get(U),Be=wt.get(Ze.__renderTarget),hn=wt.get(fi.__renderTarget);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,Be.__webglFramebuffer),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let un=0;un<vt;un++)di&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,N,It+un),w.isDepthTexture?(he&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(U).__webglTexture,N,oe+un),O.blitFramebuffer(Mt,Lt,et,ht,St,Zt,et,ht,O.DEPTH_BUFFER_BIT,O.NEAREST)):he?O.copyTexSubImage3D(Et,N,St,Zt,oe+un,Mt,Lt,et,ht):O.copyTexSubImage2D(Et,N,St,Zt,oe+un,Mt,Lt,et,ht);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else he?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Et,N,St,Zt,oe,et,ht,vt,De,Kt,le.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Et,N,St,Zt,oe,et,ht,vt,De,le.data):O.texSubImage3D(Et,N,St,Zt,oe,et,ht,vt,De,Kt,le):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,N,St,Zt,et,ht,De,Kt,le.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,N,St,Zt,le.width,le.height,De,le.data):O.texSubImage2D(O.TEXTURE_2D,N,St,Zt,et,ht,De,Kt,le);O.pixelStorei(O.UNPACK_ROW_LENGTH,en),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Jt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ve),O.pixelStorei(O.UNPACK_SKIP_ROWS,On),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ie),N===0&&U.generateMipmaps&&O.generateMipmap(Et),Tt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,H=null,W=null,N=0){return w.isTexture!==!0&&(wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,H,W,N)},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){b=0,C=0,R=null,Tt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class _f extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Je()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new A;class Ts{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ye(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ye(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ye(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ye(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ye(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ts(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class cn extends Fn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Jn;const xi=new A,jn=new A,Qn=new A,ti=new it,vi=new it,Aa=new se,as=new A,Mi=new A,cs=new A,ko=new it,lr=new it,Vo=new it;class xn extends Se{constructor(t=new cn){if(super(),this.isSprite=!0,this.type="Sprite",Jn===void 0){Jn=new xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gf(e,5);Jn.setIndex([0,1,2,0,2,3]),Jn.setAttribute("position",new Ts(n,3,0,!1)),Jn.setAttribute("uv",new Ts(n,2,3,!1))}this.geometry=Jn,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jn.setFromMatrixScale(this.matrixWorld),Aa.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jn.multiplyScalar(-Qn.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;ls(as.set(-.5,-.5,0),Qn,o,jn,s,r),ls(Mi.set(.5,-.5,0),Qn,o,jn,s,r),ls(cs.set(.5,.5,0),Qn,o,jn,s,r),ko.set(0,0),lr.set(1,0),Vo.set(1,1);let a=t.ray.intersectTriangle(as,Mi,cs,!1,xi);if(a===null&&(ls(Mi.set(-.5,.5,0),Qn,o,jn,s,r),lr.set(0,1),a=t.ray.intersectTriangle(as,cs,Mi,!1,xi),a===null))return;const c=t.ray.origin.distanceTo(xi);c<t.near||c>t.far||e.push({distance:c,point:xi.clone(),uv:Oe.getInterpolation(xi,as,Mi,cs,ko,lr,Vo,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ls(i,t,e,n,s,r){ti.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(vi.x=r*ti.x-s*ti.y,vi.y=s*ti.x+r*ti.y):vi.copy(ti),i.copy(t),i.x+=vi.x,i.y+=vi.y,i.applyMatrix4(Aa)}class bi extends Fn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bs=new A,As=new A,Ho=new se,Si=new Rr,hs=new Ps,hr=new A,Wo=new A;class xf extends Se{constructor(t=new xe,e=new bi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)bs.fromBufferAttribute(e,s-1),As.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=bs.distanceTo(As);t.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(s),hs.radius+=r,t.ray.intersectsSphere(hs)===!1)return;Ho.copy(s).invert(),Si.copy(t.ray).applyMatrix4(Ho);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=p,_=m-1;g<_;g+=l){const f=h.getX(g),S=h.getX(g+1),M=us(this,t,Si,c,f,S);M&&e.push(M)}if(this.isLineLoop){const g=h.getX(m-1),_=h.getX(p),f=us(this,t,Si,c,g,_);f&&e.push(f)}}else{const p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=p,_=m-1;g<_;g+=l){const f=us(this,t,Si,c,g,g+1);f&&e.push(f)}if(this.isLineLoop){const g=us(this,t,Si,c,m-1,p);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function us(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(bs.fromBufferAttribute(o,s),As.fromBufferAttribute(o,r),e.distanceSqToSegment(bs,As,hr,Wo)>n)return;hr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(hr);if(!(c<t.near||c>t.far))return{distance:c,point:Wo.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Xo=new A,Yo=new A;class ds extends xf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Xo.fromBufferAttribute(e,s),Yo.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xo.distanceTo(Yo);t.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bi extends Le{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qe{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new it:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],r=[],o=[],a=new A,c=new se;for(let p=0;p<=t;p++){const m=p/t;s[p]=this.getTangentAt(m,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(me(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(me(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ir extends Qe{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new it){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vf extends Ir{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ur(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const fs=new A,ur=new Ur,dr=new Ur,fr=new Ur;class Es extends Qe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(fs.subVectors(s[0],s[1]).add(s[0]),l=fs);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(fs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(h),p);g<1e-4&&(g=1),m<1e-4&&(m=g),_<1e-4&&(_=g),ur.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,g,_),dr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,g,_),fr.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,g,_)}else this.curveType==="catmullrom"&&(ur.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),dr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),fr.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ur.calc(c),dr.calc(c),fr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qo(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Mf(i,t){const e=1-i;return e*e*t}function Sf(i,t){return 2*(1-i)*i*t}function yf(i,t){return i*i*t}function Ri(i,t,e,n){return Mf(i,t)+Sf(i,e)+yf(i,n)}function Ef(i,t){const e=1-i;return e*e*e*t}function wf(i,t){const e=1-i;return 3*e*e*i*t}function Tf(i,t){return 3*(1-i)*i*i*t}function bf(i,t){return i*i*i*t}function Ci(i,t,e,n,s){return Ef(i,t)+wf(i,e)+Tf(i,n)+bf(i,s)}class Ra extends Qe{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ci(t,s.x,r.x,o.x,a.x),Ci(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Af extends Qe{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ci(t,s.x,r.x,o.x,a.x),Ci(t,s.y,r.y,o.y,a.y),Ci(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ca extends Qe{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rf extends Qe{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pa extends Qe{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ri(t,s.x,r.x,o.x),Ri(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cf extends Qe{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ri(t,s.x,r.x,o.x),Ri(t,s.y,r.y,o.y),Ri(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class La extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(qo(a,c.x,l.x,h.x,u.x),qo(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var Zo=Object.freeze({__proto__:null,ArcCurve:vf,CatmullRomCurve3:Es,CubicBezierCurve:Ra,CubicBezierCurve3:Af,EllipseCurve:Ir,LineCurve:Ca,LineCurve3:Rf,QuadraticBezierCurve:Pa,QuadraticBezierCurve3:Cf,SplineCurve:La});class Pf extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Zo[s.type]().fromJSON(s))}return this}}class Rs extends Pf{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ca(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Pa(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Ra(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new La(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ir(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ds extends xe{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=me(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new A,d=new it,p=new A,m=new A,g=new A;let _=0,f=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:_=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,p.x=f*1,p.y=-_,p.z=f*0,g.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(g.x,g.y,g.z);break;default:_=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,p.x=f*1,p.y=-_,p.z=f*0,m.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),c.push(p.x,p.y,p.z),g.copy(m)}for(let S=0;S<=e;S++){const M=n+S*h*s,x=Math.sin(M),P=Math.cos(M);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*x,u.y=t[b].y,u.z=t[b].x*P,o.push(u.x,u.y,u.z),d.x=S/e,d.y=b/(t.length-1),a.push(d.x,d.y);const C=c[3*b+0]*x,R=c[3*b+1],E=c[3*b+0]*P;l.push(C,R,E)}}for(let S=0;S<e;S++)for(let M=0;M<t.length-1;M++){const x=M+S*t.length,P=x,b=x+t.length,C=x+t.length+1,R=x+1;r.push(P,b,R),r.push(C,R,b)}this.setIndex(r),this.setAttribute("position",new Wt(o,3)),this.setAttribute("uv",new Wt(a,2)),this.setAttribute("normal",new Wt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.points,t.segments,t.phiStart,t.phiLength)}}class Fe extends Ds{constructor(t=1,e=1,n=4,s=8){const r=new Rs;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Fe(t.radius,t.length,t.capSegments,t.radialSegments)}}class Nr extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new A,h=new it;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(a,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ct extends xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let m=0;const g=[],_=n/2;let f=0;S(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(p,2));function S(){const x=new A,P=new A;let b=0;const C=(e-t)/n;for(let R=0;R<=r;R++){const E=[],v=R/r,L=v*(e-t)+t;for(let F=0;F<=s;F++){const B=F/s,X=B*c+a,G=Math.sin(X),q=Math.cos(X);P.x=L*G,P.y=-v*n+_,P.z=L*q,u.push(P.x,P.y,P.z),x.set(G,C,q).normalize(),d.push(x.x,x.y,x.z),p.push(B,1-v),E.push(m++)}g.push(E)}for(let R=0;R<s;R++)for(let E=0;E<r;E++){const v=g[E][R],L=g[E+1][R],F=g[E+1][R+1],B=g[E][R+1];(t>0||E!==0)&&(h.push(v,L,B),b+=3),(e>0||E!==r-1)&&(h.push(L,F,B),b+=3)}l.addGroup(f,b,0),f+=b}function M(x){const P=m,b=new it,C=new A;let R=0;const E=x===!0?t:e,v=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,_*v,0),d.push(0,v,0),p.push(.5,.5),m++;const L=m;for(let F=0;F<=s;F++){const X=F/s*c+a,G=Math.cos(X),q=Math.sin(X);C.x=E*q,C.y=_*v,C.z=E*G,u.push(C.x,C.y,C.z),d.push(0,v,0),b.x=G*.5+.5,b.y=q*.5*v+.5,p.push(b.x,b.y),m++}for(let F=0;F<s;F++){const B=P+F,X=L+F;x===!0?h.push(X,X+1,B):h.push(X+1,X,B),R+=3}l.addGroup(f,R,x===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ct(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class In extends Ct{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new In(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Is extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(r.slice(),3)),this.setAttribute("uv",new Wt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new A,x=new A,P=new A;for(let b=0;b<e.length;b+=3)p(e[b+0],M),p(e[b+1],x),p(e[b+2],P),c(M,x,P,S)}function c(S,M,x,P){const b=P+1,C=[];for(let R=0;R<=b;R++){C[R]=[];const E=S.clone().lerp(x,R/b),v=M.clone().lerp(x,R/b),L=b-R;for(let F=0;F<=L;F++)F===0&&R===b?C[R][F]=E:C[R][F]=E.clone().lerp(v,F/L)}for(let R=0;R<b;R++)for(let E=0;E<2*(b-R)-1;E++){const v=Math.floor(E/2);E%2===0?(d(C[R][v+1]),d(C[R+1][v]),d(C[R][v])):(d(C[R][v+1]),d(C[R+1][v+1]),d(C[R+1][v]))}}function l(S){const M=new A;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(S),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const S=new A;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const x=_(S)/2/Math.PI+.5,P=f(S)/Math.PI+.5;o.push(x,1-P)}m(),u()}function u(){for(let S=0;S<o.length;S+=6){const M=o[S+0],x=o[S+2],P=o[S+4],b=Math.max(M,x,P),C=Math.min(M,x,P);b>.9&&C<.1&&(M<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),P<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,M){const x=S*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function m(){const S=new A,M=new A,x=new A,P=new A,b=new it,C=new it,R=new it;for(let E=0,v=0;E<r.length;E+=9,v+=6){S.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),b.set(o[v+0],o[v+1]),C.set(o[v+2],o[v+3]),R.set(o[v+4],o[v+5]),P.copy(S).add(M).add(x).divideScalar(3);const L=_(P);g(b,v+0,S,L),g(C,v+2,M,L),g(R,v+4,x,L)}}function g(S,M,x,P){P<0&&S.x===1&&(o[M]=S.x-1),x.x===0&&x.z===0&&(o[M]=P/2/Math.PI+.5)}function _(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.vertices,t.indices,t.radius,t.details)}}const ps=new A,ms=new A,pr=new A,_s=new Oe;class gs extends xe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(ri*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:g,b:_,c:f}=_s;if(g.fromBufferAttribute(a,l[0]),_.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),_s.getNormal(pr),u[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[1]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const M=(S+1)%3,x=u[S],P=u[M],b=_s[h[S]],C=_s[h[M]],R=`${x}_${P}`,E=`${P}_${x}`;E in d&&d[E]?(pr.dot(d[E].normal)<=r&&(p.push(b.x,b.y,b.z),p.push(C.x,C.y,C.z)),d[E]=null):R in d||(d[R]={index0:l[S],index1:l[M],normal:pr.clone()})}}for(const m in d)if(d[m]){const{index0:g,index1:_}=d[m];ps.fromBufferAttribute(a,g),ms.fromBufferAttribute(a,_),p.push(ps.x,ps.y,ps.z),p.push(ms.x,ms.y,ms.z)}this.setAttribute("position",new Wt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Da extends Rs{constructor(t){super(t),this.uuid=Je(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Rs().fromJSON(s))}return this}}const Lf={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ia(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=Ff(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Ii(r,o,e,a,c,p,0),o}};function Ia(i,t,e,n,s){let r,o;if(s===qf(i,t,e,n)>0)for(r=t;r<e;r+=n)o=$o(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=$o(r,i[r],i[r+1],o);return o&&Us(o,o.next)&&(Ni(o),o=o.next),o}function Nn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Us(e,e.next)||de(e.prev,e,e.next)===0)){if(Ni(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ii(i,t,e,n,s,r,o){if(!i)return;!o&&r&&kf(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?If(i,n,s,r):Df(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ni(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Uf(Nn(i),t,e),Ii(i,t,e,n,s,r,2)):o===2&&Nf(i,t,e,n,s,r):Ii(Nn(i),t,e,n,s,r,1);break}}}function Df(i){const t=i.prev,e=i,n=i.next;if(de(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&ii(s,a,r,c,o,l,m.x,m.y)&&de(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function If(i,t,e,n){const s=i.prev,r=i,o=i.next;if(de(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,g=a>c?a>l?a:l:c>l?c:l,_=h>u?h>d?h:d:u>d?u:d,f=Er(p,m,t,e,n),S=Er(g,_,t,e,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=f&&x&&x.z<=S;){if(M.x>=p&&M.x<=g&&M.y>=m&&M.y<=_&&M!==s&&M!==o&&ii(a,h,c,u,l,d,M.x,M.y)&&de(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=p&&x.x<=g&&x.y>=m&&x.y<=_&&x!==s&&x!==o&&ii(a,h,c,u,l,d,x.x,x.y)&&de(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=g&&M.y>=m&&M.y<=_&&M!==s&&M!==o&&ii(a,h,c,u,l,d,M.x,M.y)&&de(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=S;){if(x.x>=p&&x.x<=g&&x.y>=m&&x.y<=_&&x!==s&&x!==o&&ii(a,h,c,u,l,d,x.x,x.y)&&de(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Uf(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Us(s,r)&&Ua(s,n,n.next,r)&&Ui(s,r)&&Ui(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ni(n),Ni(n.next),n=i=r),n=n.next}while(n!==i);return Nn(n)}function Nf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wf(o,a)){let c=Na(o,a);o=Nn(o,o.next),c=Nn(c,c.next),Ii(o,t,e,n,s,r,0),Ii(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ff(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Ia(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Hf(l));for(s.sort(Of),r=0;r<s.length;r++)e=Bf(s[r],e);return e}function Of(i,t){return i.x-t.x}function Bf(i,t){const e=zf(i,t);if(!e)return t;const n=Na(e,i);return Nn(n,n.next),Nn(e,e.next)}function zf(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ii(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ui(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Gf(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Gf(i,t){return de(i.prev,i,t.prev)<0&&de(t.next,i,i.next)<0}function kf(i,t,e,n){let s=i;do s.z===0&&(s.z=Er(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Vf(s)}function Vf(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Er(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Hf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ii(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Wf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xf(i,t)&&(Ui(i,t)&&Ui(t,i)&&Yf(i,t)&&(de(i.prev,i,t.prev)||de(i,t.prev,t))||Us(i,t)&&de(i.prev,i,i.next)>0&&de(t.prev,t,t.next)>0)}function de(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Us(i,t){return i.x===t.x&&i.y===t.y}function Ua(i,t,e,n){const s=vs(de(i,t,e)),r=vs(de(i,t,n)),o=vs(de(e,n,i)),a=vs(de(e,n,t));return!!(s!==r&&o!==a||s===0&&xs(i,e,t)||r===0&&xs(i,n,t)||o===0&&xs(e,i,n)||a===0&&xs(e,t,n))}function xs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function vs(i){return i>0?1:i<0?-1:0}function Xf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ua(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ui(i,t){return de(i.prev,i,i.next)<0?de(i,t,i.next)>=0&&de(i,i.prev,t)>=0:de(i,t,i.prev)<0||de(i,i.next,t)<0}function Yf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Na(i,t){const e=new wr(i.i,i.x,i.y),n=new wr(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $o(i,t,e,n){const s=new wr(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ni(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wr(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Pi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Pi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ko(t),Jo(n,t);let o=t.length;e.forEach(Ko);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Jo(n,e[c]);const a=Lf.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Ko(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Jo(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Fr extends Is{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fr(t.radius,t.detail)}}class si extends Is{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new si(t.radius,t.detail)}}class Li extends xe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,p=new A,m=new it;for(let g=0;g<=s;g++){for(let _=0;_<=n;_++){const f=r+_/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let g=0;g<s;g++){const _=g*(n+1);for(let f=0;f<n;f++){const S=f+_,M=S,x=S+n+1,P=S+n+2,b=S+1;a.push(M,x,b),a.push(x,P,b)}}this.setIndex(a),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Or extends xe{constructor(t=new Da([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Wt(s,3)),this.setAttribute("normal",new Wt(r,3)),this.setAttribute("uv",new Wt(o,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let p=d.shape;const m=d.holes;Pi.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,f=m.length;_<f;_++){const S=m[_];Pi.isClockWise(S)===!0&&(m[_]=S.reverse())}const g=Pi.triangulateShape(p,m);for(let _=0,f=m.length;_<f;_++){const S=m[_];p=p.concat(S)}for(let _=0,f=p.length;_<f;_++){const S=p[_];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let _=0,f=g.length;_<f;_++){const S=g[_],M=S[0]+u,x=S[1]+u,P=S[2]+u;n.push(M,x,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Zf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Or(n,t.curveSegments)}}function Zf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class jt extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,d=new A,p=[],m=[],g=[],_=[];for(let f=0;f<=n;f++){const S=[],M=f/n;let x=0;f===0&&o===0?x=.5/e:f===n&&c===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const b=P/e;u.x=-t*Math.cos(s+b*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+b*r)*Math.sin(o+M*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),_.push(b+x,1-M),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const M=h[f][S+1],x=h[f][S],P=h[f+1][S],b=h[f+1][S+1];(f!==0||o>0)&&p.push(M,x,b),(f!==n-1||c<Math.PI)&&p.push(x,P,b)}this.setIndex(p),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ke extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new A,u=new A,d=new A;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){const g=m/s*r,_=p/n*Math.PI*2;u.x=(t+e*Math.cos(_))*Math.cos(g),u.y=(t+e*Math.cos(_))*Math.sin(g),u.z=e*Math.sin(_),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){const g=(s+1)*p+m-1,_=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,S=(s+1)*p+m;o.push(g,_,S),o.push(_,f,S)}this.setIndex(o),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $t extends Fn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Br extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const mr=new se,jo=new A,Qo=new A;class Fa{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;jo.setFromMatrixPosition(t.matrixWorld),e.position.copy(jo),Qo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qo),e.updateMatrixWorld(),mr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ta=new se,yi=new A,_r=new A;class $f extends Fa{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),yi.setFromMatrixPosition(t.matrixWorld),n.position.copy(yi),_r.copy(n.position),_r.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_r),n.updateMatrixWorld(),s.makeTranslation(-yi.x,-yi.y,-yi.z),ta.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta)}}class Mn extends Br{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $f}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Kf extends Fa{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ea extends Br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Kf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jf extends Br{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class jf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=na(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=na();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function na(){return performance.now()}const ia=new se;class Qf{constructor(t,e,n=0,s=1/0){this.ray=new Rr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ia.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ia),this}intersectObject(t,e=!0,n=[]){return Tr(t,this,n,e),n.sort(sa),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Tr(t[s],this,n,e);return n.sort(sa),n}}function sa(i,t){return i.distance-t.distance}function Tr(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Tr(r[o],t,e,!0)}}class tp{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:br}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=br);const gr=Math.PI*2,ep=5.2,np=[[-30,25.5],[-30,41.5],[-28.4,45.4],[-24.5,47],[24.5,47],[28.4,45.4],[30,41.5],[30,26],[28.4,22.1],[24.5,20.5],[-24.5,20.5],[-28.4,22.1]];function ip(){const i=document.createElement("canvas");i.width=256,i.height=256;const t=i.getContext("2d");t.fillStyle="#343b45",t.fillRect(0,0,i.width,i.height);let e=41;for(let s=0;s<1800;s++){e=e*1664525+1013904223>>>0;const r=e%i.width;e=e*1664525+1013904223>>>0;const o=e%i.height,a=48+e%28;t.fillStyle=`rgba(${a}, ${a+4}, ${a+10}, 0.24)`,t.fillRect(r,o,1+e%2,1+e%2)}const n=new Bi(i);return n.wrapS=1e3,n.wrapT=1e3,n.repeat.set(8,5),n.anisotropy=4,n}function sp(){const i=document.createElement("canvas");i.width=512,i.height=192;const t=i.getContext("2d");t.fillStyle="#0b1524",t.fillRect(0,0,i.width,i.height),t.strokeStyle="#34d399",t.lineWidth=8,t.strokeRect(5,5,i.width-10,i.height-10),t.fillStyle="#e2e8f0",t.font='700 48px "Segoe UI", sans-serif',t.textAlign="center",t.fillText("AXIORYN",256,83),t.fillStyle="#6ee7b7",t.font='600 26px "Segoe UI", sans-serif',t.fillText("VISITANTES  ·  ESTACIONAMENTO",256,139);const e=new Bi(i);return e.colorSpace=Pe,e.anisotropy=4,e}function ra(i,t,e){const n=document.createElement("canvas");n.width=640,n.height=192;const s=n.getContext("2d");s.fillStyle="#0b1524",s.fillRect(0,0,n.width,n.height),s.strokeStyle=e,s.lineWidth=8,s.strokeRect(5,5,n.width-10,n.height-10),s.fillStyle="#f1f5f9",s.font='700 43px "Segoe UI", sans-serif',s.textAlign="center",s.fillText(i,n.width/2,88),s.fillStyle=e,s.font='600 23px "Segoe UI", sans-serif',s.fillText(t,n.width/2,145);const r=new Bi(n);return r.colorSpace=Pe,r.anisotropy=4,r}function rp(i){const t=document.createElement("canvas");t.width=512,t.height=192;const e=t.getContext("2d");e.fillStyle="#071521",e.fillRect(0,0,t.width,t.height),e.strokeStyle="#38bdf8",e.lineWidth=8,e.strokeRect(5,5,t.width-10,t.height-10),e.textAlign="center",e.fillStyle="#bae6fd",e.font='600 27px "Segoe UI", sans-serif',e.fillText("SENHA DA RECEPÇÃO",t.width/2,48),e.fillStyle="#f8fafc",e.font='700 76px "Segoe UI", sans-serif',e.fillText(i,t.width/2,132);const n=new Bi(t);n.colorSpace=Pe,n.anisotropy=4;const s=new cn({map:n,transparent:!0,depthTest:!1}),r=new xn(s);return r.scale.set(1.7,.64,1),r.position.set(0,1.98,0),r.renderOrder=10,r}function Me(i,t,e,n,s,r=8){const o=new A(...t),a=new A(...e),c=new A().subVectors(a,o),l=new zt(new Ct(n,n,c.length(),r),s);return l.position.copy(o).add(a).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new A(0,1,0),c.normalize()),l.castShadow=!0,i.add(l),l}class op{constructor(t,e){this.scene=t,this.groundY=e,this.root=new gt,this.scene.add(this.root),this.retailRoot=new gt,this.root.add(this.retailRoot),this.traffic=[],this.walkers=[],this.cyclists=[],this.paintMaterials=new Map,this.streetLights=[],this.storeLights=[],this.arrivalVisitor=null,this.materials={asphalt:new $t({map:ip(),roughness:.94,metalness:.04}),bikeLane:new $t({color:4811606,roughness:.92}),concrete:new $t({color:8226704,roughness:.92}),curb:new $t({color:12174024,roughness:.82}),marking:new $t({color:15198168,roughness:.75}),yellow:new $t({color:15908180,roughness:.72}),tire:new $t({color:1382686,roughness:.96}),rubber:new $t({color:2304046,roughness:.88}),alloy:new $t({color:12371921,metalness:.82,roughness:.28}),trim:new $t({color:1120289,metalness:.48,roughness:.42}),glass:new $t({color:7514559,metalness:.26,roughness:.12,transparent:!0,opacity:.66}),glassStructure:new $t({color:11065564,metalness:.18,roughness:.12,transparent:!0,opacity:.23,side:2,depthWrite:!1}),headlight:new $t({color:16773828,emissive:16762967,emissiveIntensity:.15,roughness:.24}),tailLight:new $t({color:16733515,emissive:10688530,emissiveIntensity:.35,roughness:.32}),steel:new $t({color:5398896,metalness:.78,roughness:.3}),darkSteel:new $t({color:1976629,metalness:.65,roughness:.38}),green:new $t({color:3462041,emissive:952920,emissiveIntensity:.7,roughness:.42}),skin:new $t({color:14262655,roughness:.88}),hair:new $t({color:2760987,roughness:.94})},this.dayWindowMaterial=new $t({color:3691883,metalness:.42,roughness:.3}),this.litWindowMaterial=new $t({color:16770741,emissive:16760166,emissiveIntensity:0,roughness:.36}),this.carWheelGeometry=new Ct(.34,.34,.24,20),this.motoWheelGeometry=new Ct(.34,.34,.14,18),this._buildAccessRoad(),this._buildParkingAreas(),this._buildStreetFurniture(),this._buildNearbyBuildings(),this._buildElevator(),this._buildRetailConcourse(),this._buildTraffic(),this._buildWalkers(),this._buildCyclists(),this.setEnvironmentMode("day")}_addMesh(t,e,n,s,r={}){const o=new zt(e,n);return o.position.set(s[0],s[1],s[2]),o.castShadow=r.castShadow??!0,o.receiveShadow=r.receiveShadow??!0,t.add(o),o}_addBox(t,e,n,s,r={}){return this._addMesh(t,new z(e[0],e[1],e[2]),n,s,r)}_paint(t){return this.paintMaterials.has(t)||this.paintMaterials.set(t,new $t({color:t,metalness:.62,roughness:.28})),this.paintMaterials.get(t)}_buildAccessRoad(){const t=this.groundY+.035;this._buildRoadLoop();for(const n of[20.5,47])for(let s=-26;s<=26;s+=5)this._addBox(this.root,[2.4,.025,.09],this.materials.yellow,[s,t+.055,n]);for(const n of[-30,30])for(let s=24;s<=44;s+=5)this._addBox(this.root,[.09,.025,2.3],this.materials.yellow,[n,t+.055,s]);for(const n of[-3.6,-2.4,-1.2,0,1.2,2.4,3.6])this._addBox(this.root,[.38,.03,3.4],this.materials.marking,[n,t+.07,20.5]);const e=this.groundY+.11;for(const n of[17.95,23.05,44.45,49.55])this._addBox(this.root,[66,.22,.28],this.materials.curb,[0,e,n]);for(const n of[-32.55,-27.45,27.45,32.55])this._addBox(this.root,[.28,.22,26.5],this.materials.curb,[n,e,33.75]);this._buildPedestrianNetwork()}_buildPedestrianNetwork(){const t=this.groundY+.04;this._addBox(this.root,[6.2,.08,12],this.materials.concrete,[0,t,40]);for(const e of[-1,1])this._addBox(this.root,[2.2,.08,20],this.materials.concrete,[e*8.8,t,34]),this._addBox(this.root,[3.4,.08,20],this.materials.concrete,[e*34,t,34]),this._addBox(this.root,[2,.05,19.8],this.materials.bikeLane,[e*4.3,this.groundY+.105,34]);for(const e of[23.9,44.1])this._addBox(this.root,[10.6,.05,2],this.materials.bikeLane,[0,this.groundY+.105,e]);for(const e of[-1,1])for(let n=0;n<6;n++)this._addBox(this.root,[3.1,.03,.38],this.materials.marking,[e*30,this.groundY+.09,32.1+n*.76])}_buildRoadLoop(){this.roadLoop=new Es(np.map(([h,u])=>new A(h,0,u)),!0,"centripetal"),this.roadLoop.curveType="centripetal";const t=384,e=this.roadLoop.getLength(),n=new xe,s=[],r=[],o=[],a=new A,c=this.groundY+.075;for(let h=0;h<=t;h++){const u=h/t,d=this.roadLoop.getPointAt(u),p=this.roadLoop.getTangentAt(u);a.set(p.z,0,-p.x).normalize();for(const m of[-1,1]){const g=m*ep/2;s.push(d.x+a.x*g,c,d.z+a.z*g),r.push(u*e/8.25,m<0?0:1)}if(h<t){const m=h*2;o.push(m,m+2,m+1,m+1,m+2,m+3)}}n.setAttribute("position",new Wt(s,3)),n.setAttribute("uv",new Wt(r,2)),n.setIndex(o),n.computeVertexNormals(),n.computeBoundingSphere(),this.roadLoopMaterial=this.materials.asphalt.clone(),this.roadLoopMaterial.map=this.materials.asphalt.map.clone(),this.roadLoopMaterial.map.repeat.set(1,5),this.roadLoopMaterial.map.needsUpdate=!0;const l=new zt(n,this.roadLoopMaterial);l.castShadow=!1,l.receiveShadow=!0,this.root.add(l)}_buildParkingAreas(){const t=this.groundY+.04,e=[{side:-1,slot:0,row:0,color:2648232},{side:-1,slot:2,row:0,color:13028304},{side:-1,slot:1,row:1,color:11969147},{side:1,slot:0,row:0,color:2571085},{side:1,slot:4,row:1,color:4540763}];for(const n of[-1,1]){this._addBox(this.root,[18.5,.08,23],this.materials.asphalt,[n*19.25,t,34]);for(let s=0;s<5;s++){const r=n*(11.4+s*3.2);for(const o of[27.3,40.7])this._addBox(this.root,[.055,.025,5.35],this.materials.marking,[r-n*1.6,t+.06,o]),this._addBox(this.root,[.055,.025,5.35],this.materials.marking,[r+n*1.6,t+.06,o])}for(const s of[24.65,29.95,38.05,43.35])this._addBox(this.root,[16.4,.025,.055],this.materials.marking,[n*19.2,t+.06,s]);for(const s of[0,2,4]){const r=n*(11.4+s*3.2);this._addBox(this.root,[2,.11,.18],this.materials.darkSteel,[r,t+.13,31.2]),this._addBox(this.root,[2,.11,.18],this.materials.darkSteel,[r,t+.13,36.8])}}for(const n of e){const s=this._createCar(n.color);s.root.position.set(n.side*(11.4+n.slot*3.2),this.groundY+.06,n.row===0?27.3:40.7),s.root.rotation.y=n.row===0?0:Math.PI}this._buildAccessibleSpace(-1,24.2,40.7),this._buildChargingStations(),this._buildBicycleRack()}_buildAccessibleSpace(t,e,n){this._addBox(this.root,[2.9,.025,5.3],new $t({color:1207188,roughness:.78}),[t*e,this.groundY+.105,n]);for(const o of[-1.4,1.4])this._addBox(this.root,[.055,.03,5.3],this.materials.marking,[t*e+o,this.groundY+.125,n]);const s=this._addBox(this.root,[.08,1.4,.08],this.materials.steel,[t*27.2,this.groundY+.75,n+1.5]),r=this._addMesh(this.root,new z(.8,.54,.06),this._paint(1338260),[t*27.2,this.groundY+1.55,n+1.5]);r.rotation.y=t<0?Math.PI/2:-Math.PI/2,s.userData.accessibleSpaceSign=!0}_buildChargingStations(){for(const[t,e]of[[-26.2,30.2],[26.2,37.8]]){this._addBox(this.root,[.44,1.32,.34],this.materials.darkSteel,[t,this.groundY+.72,e]),this._addBox(this.root,[.27,.045,.12],this.materials.green,[t,this.groundY+1.14,e+.19]);const n=new zt(new Ke(.2,.025,6,14,Math.PI),this.materials.rubber);n.position.set(t+.34,this.groundY+.42,e+.05),n.rotation.z=Math.PI/2,this.root.add(n)}}_buildBicycleRack(){const t=this.materials.steel;for(let e=0;e<4;e++){const n=24.5+e*.74;Me(this.root,[7.6,this.groundY+.12,n],[7.6,this.groundY+.88,n],.045,t,8),Me(this.root,[7.6,this.groundY+.88,n],[8.2,this.groundY+.88,n],.045,t,8)}this._addBox(this.root,[2.4,.08,3.5],this.materials.concrete,[7.9,this.groundY+.04,25.7])}_buildStreetFurniture(){const t=new zt(new z(5.2,1.95,.14),new $t({map:sp(),roughness:.52,metalness:.18}));t.position.set(0,this.groundY+2.7,50.3),t.castShadow=!0,this.root.add(t);for(const e of[-2.15,2.15])this._addBox(this.root,[.16,2.5,.16],this.materials.darkSteel,[e,this.groundY+1.25,50.3]);for(const[e,n]of[[-28,22.8],[28,22.8],[-28,45.2],[28,45.2]])this._buildLamp(e,n);for(const e of[-6.6,6.6])this._addBox(this.root,[2,.56,.46],this.materials.darkSteel,[e,this.groundY+.44,24.3]),this._addBox(this.root,[1.8,.08,.54],this._paint(9149322),[e,this.groundY+.77,24.3]);for(const e of[-1,1])for(let n=0;n<5;n++){const s=this._addBox(this.root,[2.6,.44,1.25],this._paint(3491647),[e*(12.2+n*3.2),this.groundY+.27,45.5]);s.castShadow=!0;const r=new zt(new Fr(.44,1),this._paint(n%2===0?3108941:3767637));r.position.set(e*(12.2+n*3.2),this.groundY+.73,45.5),r.scale.set(1.15,.9,.8),r.castShadow=!0,this.root.add(r)}}_buildNearbyBuildings(){[{x:-43,z:34,width:14,depth:16,height:8,color:7635597},{x:43,z:34,width:14,depth:16,height:10,color:6847884}].forEach((e,n)=>{const{x:s,z:r,width:o,depth:a,height:c}=e,l=s<0?1:-1,h=s+l*(o/2+.06);this._addBox(this.root,[o,c,a],new $t({color:e.color,roughness:.72,metalness:.16}),[s,this.groundY+c/2,r]),this._addBox(this.root,[o+.5,.28,a+.5],this.materials.darkSteel,[s,this.groundY+c+.14,r]),this._addBox(this.root,[.42,.16,5.4],this.materials.steel,[h,this.groundY+c-.56,r]),this._addBox(this.root,[.08,2.15,1.4],this.materials.glass,[h,this.groundY+1.18,r]);for(const d of[-2.5,2.5])this._addBox(this.root,[.08,2.05,2.2],this.materials.glass,[h,this.groundY+1.16,r+d]);const u=Math.floor((c-2.5)/2.3);for(let d=0;d<u;d++){const p=this.groundY+3.15+d*2.3;for(let m=0;m<5;m++){const g=r+(m-2)*2.55,f=(d+m+n)%3!==0?this.litWindowMaterial:this.dayWindowMaterial;this._addBox(this.root,[.08,1.25,1.42],f,[h,p,g]),this._addBox(this.root,[1.42,1.25,.08],f,[s+(m-2)*2.55,p,r+a/2+.06])}}})}_buildLamp(t,e){this._addBox(this.root,[.16,4.2,.16],this.materials.darkSteel,[t,this.groundY+2.1,e]);const n=this._addBox(this.root,[.9,.1,.12],this.materials.darkSteel,[t+(t<0?.34:-.34),this.groundY+4.05,e]);n.rotation.z=t<0?-.12:.12;const s=new $t({color:16770728,emissive:16760149,emissiveIntensity:0,roughness:.4});this._addBox(this.root,[.72,.1,.38],s,[t+(t<0?.68:-.68),this.groundY+3.96,e]);const r=new Mn(16762997,5,18,2);r.position.set(t+(t<0?.68:-.68),this.groundY+3.72,e),r.visible=!1,this.root.add(r),this.streetLights.push({light:r,bulbMaterial:s})}setEnvironmentMode(t){var s;if(!["day","dusk","night"].includes(t))throw new RangeError(`Modo de ambiente inválido: ${t}`);const e=t==="night",n=t==="dusk";this.streetLights.forEach(({light:r,bulbMaterial:o})=>{r.visible=e||n,r.intensity=e?1.8:.9,o.emissiveIntensity=e?1.8:n?.65:0}),this.storeLights.forEach(r=>{r.intensity=e?3.2:n?2.4:1.4}),this.litWindowMaterial.color.setHex(e||n?16770741:3691883),this.litWindowMaterial.emissiveIntensity=e?1.15:n?.45:0,this.materials.headlight.emissiveIntensity=e?2.2:n?.8:.15,this.materials.tailLight.emissiveIntensity=e?1.4:n?.7:.35,this.materials.asphalt.color.setHex(e?8491170:16777215),(s=this.roadLoopMaterial)==null||s.color.setHex(e?8491170:16777215),this.materials.concrete.color.setHex(e?6845313:n?7371138:8226704)}setNightMode(t){this.setEnvironmentMode(t?"night":"day")}_buildElevator(){const t=new gt;t.position.set(0,0,13.8),this.root.add(t);const e=12.8,n=this.groundY+6.4;this._addBox(t,[2.75,e,2.75],this.materials.glassStructure,[0,n,0]);for(const o of[-1.28,1.28])for(const a of[-1.28,1.28])this._addBox(t,[.12,e+.1,.12],this.materials.darkSteel,[o,n,a]);for(const o of[this.groundY+.12,.03]){for(const a of[-1.34,1.34])this._addBox(t,[3,.22,.32],this.materials.steel,[0,o,a]);for(const a of[-1.34,1.34])this._addBox(t,[.32,.22,2.36],this.materials.steel,[a,o,0])}const s=new gt;t.add(s),this._addBox(s,[1.86,.12,1.86],this.materials.darkSteel,[0,0,0]);for(const o of[-.88,.88])this._addBox(s,[.06,2.16,1.74],this.materials.glass,[o,1.08,0]);for(const o of[-.88,.88])this._addBox(s,[1.72,2.16,.06],this.materials.glass,[0,1.08,o]);this._addBox(s,[1.75,.08,1.75],this.materials.headlight,[0,2.14,0]),this.elevatorCabin=s,s.position.set(0,this.groundY+.12,0),this.elevatorTravel=-(this.groundY+.12);const r=this._addBox(this.root,[4.4,.12,5],this.materials.concrete,[0,this.groundY+.03,17.1]);r.receiveShadow=!0,this._addBox(this.root,[3.6,.055,2],this.materials.marking,[0,this.groundY+.1,18.3])}_buildRetailFixtures(t,e){const n=this._paint(e.color),s=this.materials.darkSteel,r=(a,c,l)=>this._addBox(t,a,c,l),o=(a,c,l)=>this._addMesh(t,a,c,l);switch(e.kind){case"apparel":{r([e.width*.62,.08,.08],s,[0,1.65,-1.2]);for(const a of[-.56,-.19,.19,.56])r([.26,.72,.08],n,[a,1.18,-1.2]),r([.3,.035,.12],this.materials.alloy,[a,1.55,-1.2]);r([e.width*.58,.12,.42],this._paint(15390922),[0,.38,-1.72]);break}case"services":{r([.9,1.2,.12],s,[0,1.02,-1.56]),r([.78,.82,.035],this._paint(1057850),[0,1.1,-1.48]),r([.56,.06,.08],n,[0,.54,-1.46]);break}case"market":{const a=[16498468,3462041,6333946,16020150];for(const c of[.85,1.35,1.85])r([e.width*.68,.07,.38],s,[0,c,-1.54]),[-.72,-.24,.24,.72].forEach((l,h)=>{r([.22,.26,.22],this._paint(a[h]),[l,c+.16,-1.54])});break}case"technology":{for(const a of[-.58,.58])r([.58,.38,.06],s,[a,1.15,-1.48]),r([.48,.28,.025],n,[a,1.16,-1.43]),r([.16,.12,.1],this.materials.alloy,[a,.78,-1.45]);break}case"accessories":{for(const a of[-.58,0,.58])r([.48,.48,.42],this._paint(5268083),[a,.48,-1.5]),r([.48,.035,.42],this._paint(14213867),[a,.74,-1.5]),o(new jt(.13,12,8),n,[a,.91,-1.5]);break}case"barber":{o(new Ct(.24,.28,.08,16),s,[0,.08,-1.25]),o(new Ct(.08,.1,.48,12),s,[0,.34,-1.25]),r([.56,.18,.5],this._paint(3359061),[0,.68,-1.25]),r([.56,.58,.14],this._paint(3359061),[0,1,-1.48]),r([.72,.88,.04],this._paint(12176341),[0,1.7,-1.76]),r([.86,.07,.08],n,[0,2.17,-1.72]);break}case"cafe":case"restaurant":{o(new Ct(.11,.09,.2,12),this._paint(16317180),[-.62,1.2,-.8]),o(new Ct(.12,.1,.035,12),n,[-.62,1.31,-.8]),r([e.width*.54,.62,.045],s,[0,1.83,-1.78]),r([e.width*.44,.44,.025],n,[0,1.83,-1.74]);break}default:throw new RangeError(`Tipo de loja inválido: ${e.kind}`)}}_buildRetailConcourse(){const t=this.groundY+.03;this._addBox(this.retailRoot,[27.2,.16,23.2],this.materials.concrete,[0,t,0]);const e=this._paint(4608606);this._addBox(this.retailRoot,[11.2,.045,21.8],e,[0,t+.105,0]),this._addBox(this.retailRoot,[20.4,.045,5.2],e,[0,t+.105,11.1]);for(const c of[-3.02,3.02])this._addBox(this.retailRoot,[.07,.035,21.6],this.materials.green,[c,t+.15,0]);const n=[{id:"cafe",kind:"cafe",title:"CAFETERIA",subtitle:"CAFÉ & PAUSA",x:-9.9,z:7.1,rotation:0,width:2.8,depth:3.8,color:16096779},{id:"catalog",kind:"apparel",title:"MODA & VESTUÁRIO",subtitle:"ESTILO PARA O DIA A DIA",x:-6.6,z:7.1,rotation:0,width:2.8,depth:3.8,color:15235497},{id:"solutions",kind:"services",title:"SERVIÇOS",subtitle:"CATÁLOGO & SOLUÇÕES DIGITAIS",x:-3.3,z:7.1,rotation:0,width:2.8,depth:3.8,color:3462041},{id:"automation",kind:"market",title:"MINIMERCADO",subtitle:"CONVENIÊNCIA LOCAL",x:0,z:7.1,rotation:0,width:2.8,depth:3.8,color:10980346},{id:"technology",kind:"technology",title:"TECNOLOGIA",subtitle:"FERRAMENTAS & ACESSÓRIOS",x:3.3,z:7.1,rotation:0,width:2.8,depth:3.8,color:2282478},{id:"automotive",kind:"accessories",title:"ACESSÓRIOS & AUTO",subtitle:"VITRINE AUTOMOTIVA",x:6.6,z:7.1,rotation:0,width:2.8,depth:3.8,color:16347926},{id:"barbershop",kind:"barber",title:"BARBEARIA",subtitle:"CUIDADO & ESTILO",x:9.9,z:7.1,rotation:0,width:2.8,depth:3.8,color:6333946},{id:"restaurant-bistro",kind:"restaurant",title:"BISTRÔ",subtitle:"LANCHES & CAFÉ",x:-7.6,z:-5.5,rotation:0,width:4.8,depth:4,color:16020150},{id:"restaurant-grill",kind:"restaurant",title:"GRILL",subtitle:"PRATOS QUENTES",x:7.6,z:-5.5,rotation:0,width:4.8,depth:4,color:15680580}];for(const c of n){const{width:l,depth:h}=c,u=h/2-.08,d=new gt;d.position.set(c.x,this.groundY+.09,c.z),d.rotation.y=c.rotation,d.userData.storeId=c.id,d.userData.storeCategory=c.kind,d.userData.storeTitle=c.title,this.retailRoot.add(d),this._addBox(d,[l,.18,h],this.materials.darkSteel,[0,.09,0]),this._addBox(d,[l-.2,.16,h-.2],this._paint(2504002),[0,.2,0]),this._addBox(d,[l-.16,2.65,.16],this._paint(1976629),[0,1.52,-h/2+.08]);for(const _ of[-l/2+.08,l/2-.08])this._addBox(d,[.16,2.65,h-.1],this._paint(1976629),[_,1.52,0]),this._addBox(d,[.18,2.55,.18],this._paint(c.color),[_,1.46,u]);const p=this.materials.glass.clone();p.opacity=.5;for(const _ of[-l/4,l/4])this._addBox(d,[l/2-.55,2.1,.055],p,[_,1.37,u]);this._addBox(d,[l,.28,.22],this._paint(c.color),[0,2.83,u]),this._addBox(d,[l*.58,.76,.55],this._paint(c.color),[0,.58,-.25]),this._addBox(d,[l*.6,.08,.62],this.materials.alloy,[0,1,-.25]),this._buildRetailFixtures(d,c);const m=new zt(new be(l-.6,1.18),new ae({map:ra(c.title,c.subtitle,`#${c.color.toString(16).padStart(6,"0")}`),toneMapped:!1}));m.position.set(0,3.65,u+.12),d.add(m);const g=new Mn(c.color,1.4,10,2);g.position.set(0,2.3,0),d.add(g),this.storeLights.push(g)}const s=this._paint(7361080),r=this._paint(3424854),o=[[-3.5,-1.7],[3.5,-1.7],[-3.5,2],[3.5,2]];for(const[c,l]of o){const h=new gt;h.position.set(c,t+.15,l),this.retailRoot.add(h),this._addMesh(h,new Ct(.66,.66,.13,24),s,[0,.92,0]),this._addMesh(h,new Ct(.09,.15,.78,12),this.materials.darkSteel,[0,.46,0]),this._addMesh(h,new Ct(.28,.28,.025,20),this._paint(14870768),[0,1,0]);const u=[[0,1,Math.PI],[0,-1,0],[-1,0,Math.PI/2],[1,0,-Math.PI/2]];for(const[d,p,m]of u){const g=new gt;g.position.set(d,0,p),g.rotation.y=m,h.add(g);for(const _ of[-.2,.2])for(const f of[-.2,.2])this._addBox(g,[.045,.46,.045],this.materials.darkSteel,[_,.23,f]);this._addBox(g,[.58,.12,.58],r,[0,.48,0]),this._addBox(g,[.58,.56,.09],r,[0,.79,-.25])}}for(const c of[-5.2,5.2]){const l=new gt;l.position.set(c,t+.1,4.3),this.retailRoot.add(l),this._addBox(l,[.55,.78,.52],this._paint(2438730),[0,.39,0]),this._addBox(l,[.57,.08,.54],this._paint(3462041),[0,.81,0]),this._addBox(l,[.32,.035,.02],this._paint(14870768),[0,.58,.271])}for(const c of[-11.6,11.6])for(const l of[-6,-.2,5.2]){const h=new gt;h.position.set(c,t+.1,l),this.retailRoot.add(h),this._addMesh(h,new Ct(.45,.52,.64,12),this._paint(4674921),[0,.32,0]),this._addMesh(h,new In(.7,1.65,8),this.materials.green,[0,1.38,0])}const a=new zt(new be(7.2,1.15),new ae({map:ra("PRAÇA DE ALIMENTAÇÃO","BISTRÔ · GRILL · CAFETERIA","#34d399"),toneMapped:!1}));a.position.set(0,this.groundY+3.6,-2.6),this.retailRoot.add(a);for(const[c,l]of[[-4.4,-2.5],[4.4,-2.5],[-4.4,3.2],[4.4,3.2],[0,10.2]]){const h=new Mn(16770741,2.1,13,2);h.position.set(c,this.groundY+4.25,l),this.retailRoot.add(h),this.storeLights.push(h)}}_addWheel(t,e,n,s,r,o,a,c){const l=new gt;l.position.set(e,n,s);const h=new zt(r,this.materials.tire);h.rotation.z=Math.PI/2,h.castShadow=!0,l.add(h);const u=new zt(new Ct(o*.45,o*.45,a+.025,16),this.materials.alloy);return u.rotation.z=Math.PI/2,l.add(u),t.add(l),c.push(l),l}_createCar(t){const e=new gt,n=new gt;e.add(n);const s=this._paint(t),r=this.materials.glass,o=[],a=[];this._addBox(n,[1.92,.42,4.22],s,[0,.66,0],{castShadow:!0}),this._addBox(n,[1.88,.16,1.05],s,[0,.91,1.44]),this._addBox(n,[1.82,.15,.88],s,[0,.89,-1.55]),this._addBox(n,[1.48,.62,1.94],r,[0,1.22,-.22]),this._addBox(n,[1.53,.12,1.96],s,[0,1.57,-.22]);for(const c of[-.98,.98])this._addBox(n,[.055,.37,1.27],this.materials.trim,[c,.98,-.22]),this._addBox(n,[.13,.14,.34],r,[c*1.03,1.25,.88]),this._addBox(n,[.23,.08,.28],this.materials.headlight,[c*.72,.86,2.08]),this._addBox(n,[.24,.09,.18],this.materials.tailLight,[c*.72,.84,-2.12]),this._addBox(n,[.16,.07,.16],this.materials.trim,[c*1.06,1.2,.82]);this._addBox(n,[.72,.2,.12],this.materials.darkSteel,[0,.76,2.13]),this._addBox(n,[.62,.13,.08],this.materials.marking,[0,.7,2.2]),this._addBox(n,[.74,.22,.12],this.materials.darkSteel,[0,.76,-2.12]);for(const c of[-1,1])for(const l of[-1.34,1.34]){const h=l>0?new gt:e;l>0&&(h.position.set(c*.93,0,l),e.add(h),a.push(h)),this._addWheel(h,l>0?0:c*.93,.36,l>0?0:l,this.carWheelGeometry,.34,.24,o)}return this.root.add(e),{root:e,body:n,wheels:o,frontSteering:a,length:4.4,wheelRadius:.34,kind:"car"}}_createMotorcycle(t){const e=new gt,n=this._paint(t),s=[];this._addWheel(e,0,.36,-.78,this.motoWheelGeometry,.34,.14,s);const r=new gt;r.position.set(0,0,.78),e.add(r),this._addWheel(r,0,.36,0,this.motoWheelGeometry,.34,.14,s),Me(e,[0,.37,-.78],[0,.72,-.1],.07,this.materials.darkSteel),Me(e,[0,.72,-.1],[0,.52,.78],.055,this.materials.steel),this._addMesh(e,new jt(.35,18,12),n,[0,.98,.05]).scale.set(.82,.65,1.1),this._addBox(e,[.43,.16,.86],this.materials.trim,[0,1.02,-.45]),this._addBox(e,[.28,.08,.48],n,[0,1.13,-.46]),this._addBox(e,[.1,.1,.5],this.materials.steel,[0,.43,-.1]),this._addMesh(e,new jt(.14,14,10),this.materials.headlight,[0,1.02,.78]),Me(e,[-.3,1.25,.83],[.3,1.25,.83],.035,this.materials.darkSteel);const o=new gt;return o.position.set(0,0,-.02),e.add(o),this._addMesh(o,new Fe(.17,.38,4,8),this._paint(1920728),[0,1.42,-.06]).rotation.x=-.42,this._addMesh(o,new jt(.17,16,12),this._paint(14987662),[0,1.83,.05]),this._addMesh(o,new jt(.19,16,12),this._paint(16436245),[0,1.94,.04]),Me(o,[-.12,1.5,0],[-.18,1.2,.76],.055,this.materials.rubber),Me(o,[.12,1.5,0],[.18,1.2,.76],.055,this.materials.rubber),this.root.add(e),{root:e,wheels:s,frontSteering:[r],length:1.9,wheelRadius:.34,kind:"motorcycle"}}_buildTraffic(){const t=[{model:this._createCar(1606821),progress:.02,speed:3.2},{model:this._createMotorcycle(14715692),progress:.59,speed:4}];this.traffic=t.map(({model:e,progress:n,speed:s})=>({...e,progress:n,velocity:0,maxSpeed:s,acceleration:e.kind==="car"?1.45:2.1,braking:e.kind==="car"?3.8:4.6,lastYaw:0})),this.traffic.forEach(e=>this.root.add(e.root))}_buildWalkers(){const t=[{closed:!1,speed:.9,points:[[0,15],[0,20.5],[0,28],[0,35],[0,44.5]]},{closed:!1,speed:.78,points:[[33.2,25],[33.2,31],[33.2,37],[33.2,43]]}],e=[1920728,9647082,1013358,14251782];this.walkers=t.map((n,s)=>{const r=this._createWalker(e[s],s);this.root.add(r);const o=new Es(n.points.map(([a,c])=>new A(a,0,c)),n.closed,"centripetal");return{root:r,curve:o,closed:n.closed,speed:n.speed,phase:s*.17,cycle:s*.34,worldPosition:new A}})}_createWalker(t,e){const n=new gt,s=this._paint(t),r=new Ct(.07,.085,.52,8),o=new Ct(.045,.055,.42,8);this._addMesh(n,new Fe(.17,.46,4,8),s,[0,1.02,0]).scale.set(.92,1.05,.76),this._addMesh(n,new jt(.15,14,10),this.materials.skin,[0,1.53,.015]),this._addMesh(n,new jt(.153,12,8),this._paint(e%2?3155230:4272164),[0,1.59,-.015]).scale.set(1.02,.62,1);const l=[],h=[];for(const u of[-1,1]){const d=new gt;d.position.set(u*.105,.76,0),this._addMesh(d,r,this.materials.darkSteel,[0,-.25,0]),this._addBox(d,[.16,.08,.28],this.materials.trim,[0,-.5,.045]),n.add(d),l.push(d);const p=new gt;p.position.set(u*.22,1.27,0),this._addMesh(p,o,s,[0,-.2,0]),n.add(p),h.push(p)}return n.userData.walkAnimation={legs:l,arms:h},n.scale.setScalar(.92+e%2*.08),n}_createBicycle(){const t=new gt,e=this.materials.green,n=[],s=.37;for(const u of[-.78,.78]){const d=new gt;d.position.set(0,s,u),d.rotation.y=Math.PI/2;const p=new zt(new Ke(s,.035,7,24),this.materials.rubber);d.add(p);const m=new zt(new Ct(.045,.045,.12,10),this.materials.alloy);m.rotation.z=Math.PI/2,d.add(m);for(let g=0;g<8;g++){const _=g/8*gr;Me(d,[0,Math.cos(_)*.04,Math.sin(_)*.04],[0,Math.cos(_)*(s-.03),Math.sin(_)*(s-.03)],.008,this.materials.alloy,5)}t.add(d),n.push(d)}const r=[0,s,-.78],o=[0,s,.78],a=[0,.36,-.08],c=[0,.93,-.34],l=[0,.91,.56];Me(t,r,a,.035,e),Me(t,a,c,.035,e),Me(t,c,r,.035,e),Me(t,a,o,.035,e),Me(t,o,l,.035,this.materials.darkSteel),Me(t,c,l,.035,e),Me(t,[0,.99,-.4],[0,1.03,-.18],.035,this.materials.trim),Me(t,[0,.97,.5],[0,1.02,.7],.035,this.materials.darkSteel);const h=new gt;return this._addMesh(h,new Fe(.15,.42,4,8),this._paint(14251782),[0,1.25,-.02]).rotation.x=-.52,this._addMesh(h,new jt(.145,14,10),this.materials.skin,[0,1.69,.02]),this._addMesh(h,new jt(.16,14,10),this._paint(1976635),[0,1.78,.01]),Me(h,[-.1,1.38,0],[-.1,1,.58],.045,this.materials.trim),Me(h,[.1,1.38,0],[.1,1,.58],.045,this.materials.trim),t.add(h),{root:t,wheels:n,wheelRadius:s}}_buildCyclists(){const t=new Es([new A(-4.3,0,21.8),new A(-4.3,0,45.5),new A(4.3,0,45.5),new A(4.3,0,21.8)],!0,"centripetal"),e=this._createBicycle();this.root.add(e.root),this.cyclists.push({...e,curve:t,progress:.15,speed:2.1,lastYaw:0})}_positionOnCurve(t,e,n){const s=t.getPointAt(e),r=t.getTangentAt(e);return n.set(s.x,this.groundY+.05,s.z),r}_updateTraffic(t){const e=this.roadLoop.getLength(),n=this.walkers.some(s=>{const{x:r,z:o}=s.worldPosition,a=Math.abs(r)<3.4&&Math.abs(o-20.5)<3.2,c=Math.abs(Math.abs(r)-30)<3.3&&Math.abs(o-34)<3.2;return a||c});for(const s of this.traffic){let r=1/0;for(const f of this.traffic){if(f===s)continue;const S=(f.progress-s.progress+1)%1*e;S>.01&&(r=Math.min(r,S))}const o=this.roadLoop.getPointAt(s.progress);let a=s.maxSpeed;const c=s.length+4.2;r<c+7&&(a*=Ss.clamp((r-c)/7,.06,1)),(Math.abs(o.x)<5.2&&Math.abs(o.z-20.5)<3.8||Math.abs(Math.abs(o.x)-30)<4&&Math.abs(o.z-34)<3.8)&&(a=Math.min(a,n?0:1));const h=a<s.velocity?s.braking:s.acceleration;s.velocity+=Ss.clamp(a-s.velocity,-h*t,h*t),s.velocity=Math.max(0,s.velocity);const u=s.velocity*t;s.progress=(s.progress+u/e)%1;const d=s.lastYaw,p=this._positionOnCurve(this.roadLoop,s.progress,s.root.position),m=Math.atan2(p.x,p.z);s.root.rotation.y=m,s.lastYaw=m,s.body&&(s.body.position.y=.015+Math.sin(s.progress*gr*38)*.012);for(const f of s.wheels)f.rotation.x-=u/s.wheelRadius;const g=Math.atan2(Math.sin(m-d),Math.cos(m-d)),_=Ss.clamp(g*4,-.28,.28);for(const f of s.frontSteering)f.rotation.y=_}}_updateWalkers(t,e){for(const n of this.walkers){const s=n.curve.getLength(),r=n.speed*t/s;n.phase=(n.phase+r)%(n.closed?1:2);const o=!n.closed&&n.phase>1,a=n.closed?n.phase:o?2-n.phase:n.phase,c=this._positionOnCurve(n.curve,a,n.worldPosition);o&&c.negate(),n.root.position.copy(n.worldPosition),n.root.rotation.y=Math.atan2(c.x,c.z);const l=n.root.userData.walkAnimation,h=Math.sin(e*5.2+n.cycle*gr);l.legs[0].rotation.x=h*.48,l.legs[1].rotation.x=-h*.48,l.arms[0].rotation.x=-h*.28,l.arms[1].rotation.x=h*.28,n.root.position.y+=Math.abs(h)*.018}}_updateCyclists(t){for(const e of this.cyclists){const n=e.curve.getLength(),s=e.speed*t;e.progress=(e.progress+s/n)%1;const r=this._positionOnCurve(e.curve,e.progress,e.root.position);e.root.rotation.y=Math.atan2(r.x,r.z);for(const o of e.wheels)o.rotation.x-=s/e.wheelRadius}}showVisitorArrival(t,e){if(typeof t!="string"||!t.trim()||this.arrivalVisitor)return!1;const n=this._createWalker(3900150,0);n.add(rp(t.trim()));const s=new Mn(9684477,2.2,4,2);return s.position.set(0,1.2,.15),n.add(s),n.position.set(0,-.18,0),this.elevatorCabin.position.y=this.groundY+.12,this.elevatorCabin.add(n),this.arrivalVisitor={root:n,phase:"ascending",elapsed:0,start:new A,destination:new A(2.9,-.17,11.45),onComplete:e},!0}showVisitorCoffee(){const t=this.arrivalVisitor;return t?(t.coffeeAccepted=!0,t.phase==="seated"&&this._serveVisitorCoffee(t),!0):!1}_serveVisitorCoffee(t){if(t.coffeeCup)return;const e=new gt;e.position.set(.3,.92,.18),e.add(new zt(new Ct(.055,.045,.12,14),this.materials.trim)),e.add(new zt(new Ct(.047,.047,.018,14),this.materials.darkSteel));const n=new zt(new Ke(.038,.008,6,12),this.materials.trim);n.rotation.y=Math.PI/2,n.position.x=.055,e.add(n),t.root.add(e),t.coffeeCup=e}_updateVisitorArrival(t,e){var s;const n=this.arrivalVisitor;if(n){if(n.phase==="ascending"){n.elapsed+=t;const r=Math.min(n.elapsed/3.2,1),o=r*r*(3-2*r);this.elevatorCabin.position.y=this.groundY+.12+this.elevatorTravel*o,r===1&&(this.root.attach(n.root),n.root.position.set(0,-.17,13.8),n.start.copy(n.root.position),n.phase="walking",n.elapsed=0);return}if(n.phase==="walking"){n.elapsed+=t;const r=Math.min(n.elapsed/1.8,1),o=r*r*(3-2*r);n.root.position.copy(n.start).lerp(n.destination,o);const a=new A().subVectors(n.destination,n.start);n.root.rotation.y=Math.atan2(a.x,a.z);const c=n.root.userData.walkAnimation,l=Math.sin(e*5.2);c.legs[0].rotation.x=l*.48,c.legs[1].rotation.x=-l*.48,c.arms[0].rotation.x=-l*.28,c.arms[1].rotation.x=l*.28,n.root.position.y+=Math.abs(l)*.018,r===1&&(n.phase="seated",n.elapsed=0,n.root.rotation.y=Math.PI,n.root.position.y=-.22,c.legs[0].rotation.x=-1.15,c.legs[1].rotation.x=-1.15,c.arms[0].rotation.x=.16,c.arms[1].rotation.x=.16,n.coffeeAccepted&&this._serveVisitorCoffee(n),(s=n.onComplete)==null||s.call(n),n.onComplete=null);return}n.root.position.y=-.22+Math.sin(e*1.6)*.012}}update(t,e){var n;if(this._updateWalkers(t,e),this._updateTraffic(t),this._updateCyclists(t),this._updateVisitorArrival(t,e),((n=this.arrivalVisitor)==null?void 0:n.phase)!=="ascending"){const s=e%24/24,r=s<.5?s*2:1-(s-.5)*2,o=r*r*(3-2*r);this.elevatorCabin.position.y=this.groundY+.12+o*this.elevatorTravel}}}const xr={IDLE:6583435,WORKING:1096065,WAITING_APPROVAL:16096779,BLOCKED:16347926,ERROR:15680580},oa={IDLE:"#94a3b8",WORKING:"#34d399",WAITING_APPROVAL:"#fbbf24",BLOCKED:"#fb923c",ERROR:"#f87171"},ap={aerial:{target:[0,-3.2,0],offset:[31,31,34],zoom:.9},front:{target:[0,-3.2,4],offset:[0,15,42],zoom:.94},side:{target:[0,-3.2,0],offset:[42,14,0],zoom:.94},rear:{target:[0,-3.2,-2],offset:[0,15,-42],zoom:.94},shopping:{target:[0,-10.3,0],offset:[0,6,34],zoom:1.05},office:{target:[-4.2,.3,0],offset:[28,22,30],zoom:.76},rooftop:{target:[0,5.3,-14.8],offset:[21,14,22],zoom:1.12},exploded:{target:[0,-3,0],offset:[34,30,38],zoom:.82}},cp=Object.freeze({boss:{x:-20.2,z:-1.7},atlas:{x:-16.4,z:-1.7},pixel:{x:-10.2,z:-7.8},nexus:{x:10.2,z:-7.8},vega:{x:0,z:8.15},sentry:{x:10.2,z:9.2},ares:{x:-10.2,z:-1.7},neo:{x:10.2,z:-1.7},trinity:{x:-10.2,z:4.2},morpheus:{x:10.2,z:4.2},orion:{x:-10.2,z:9.2}}),aa=[{slug:"boss",name:"DIRETORIA & COORDENAÇÃO",x:-20.2,z:-1.7,color:15381256,isBoss:!0},{slug:"atlas",name:"DIRETORIA & COORDENAÇÃO",x:-16.4,z:-1.7,color:3718648},{slug:"pixel",name:"TECNOLOGIA & ENGENHARIA",x:-10.2,z:-7.8,color:6514417},{slug:"nexus",name:"PESQUISA & INTELIGÊNCIA",x:10.2,z:-7.8,color:1096065},{slug:"vega",name:"RECEPÇÃO • ATENDIMENTO AO CLIENTE",x:0,z:8.15,color:16096779,isReception:!0},{slug:"sentry",name:"QUALIDADE & FINANÇAS",x:10.2,z:9.2,color:15485081},{slug:"ares",name:"RH & EQUIPES DE IA (ARES)",x:-10.2,z:-1.7,color:16347926},{slug:"neo",name:"SEGURANÇA & DEFESA (NEO)",x:10.2,z:-1.7,color:65382,spawnOnHire:!0}],lp={boss:{x:0,y:4.38,z:-13.3,rotY:0,pose:"STANDING",hasCoffee:!0},atlas:{x:-2.4,y:4.38,z:-13.6,rotY:.4,pose:"STANDING",hasCoffee:!0},pixel:{x:-8.3,y:4.38,z:-15.2,rotY:0,pose:"SEATED",hasCoffee:!1},nexus:{x:2.4,y:4.38,z:-13.6,rotY:-.4,pose:"STANDING",hasCoffee:!0},vega:{x:-6.3,y:4.38,z:-15.2,rotY:0,pose:"SEATED",hasCoffee:!0},sentry:{x:5.5,y:4.38,z:-14.6,rotY:Math.PI/5,pose:"STANDING",hasCoffee:!0},ares:{x:-4.2,y:4.38,z:-13.4,rotY:.2,pose:"STANDING",hasCoffee:!0},neo:{x:9.6,y:4.38,z:-13.5,rotY:-.3,pose:"STANDING",hasCoffee:!1},trinity:{x:.2,y:4.38,z:-14.8,rotY:.25,pose:"STANDING",hasCoffee:!0},orion:{x:-10.5,y:4.38,z:-14,rotY:.5,pose:"STANDING",hasCoffee:!0},morpheus:{x:7.6,y:4.38,z:-14.5,rotY:-.4,pose:"STANDING",hasCoffee:!0},kai:{x:-7.6,y:4.38,z:-13.9,rotY:.3,pose:"STANDING",hasCoffee:!1}},vr=new Set(["vega"]),hp={boss:{blazer:1976635,pants:988970,shirt:16777215,tie:15381256,skin:15778720,hair:3359061,hairStyle:"quiff",glasses:!1},atlas:{blazer:1920728,pants:1976635,shirt:16317180,tie:3718648,skin:15250572,hair:1973016,hairStyle:"quiff",glasses:!1,headset:!0},pixel:{blazer:5195493,pants:1976635,shirt:14870768,tie:8490232,skin:15778720,hair:3875604,hairStyle:"spiky",glasses:!0},nexus:{blazer:292951,pants:3359061,shirt:16708551,tie:1096065,skin:14130034,hair:1579035,hairStyle:"parted",glasses:!0},vega:{blazer:14251782,pants:1976635,shirt:16777215,tie:16498468,skin:15250572,hair:6040854,hairStyle:"long",glasses:!1},sentry:{blazer:12458077,pants:2042167,shirt:16642808,tie:16020150,skin:15778720,hair:2563097,hairStyle:"long",glasses:!0},ares:{blazer:15357964,pants:1976635,shirt:16777215,tie:16486972,skin:13208931,hair:1841431,hairStyle:"parted",glasses:!1},neo:{blazer:398606,pants:264454,shirt:988970,tie:65382,skin:15778720,hair:593174,hairStyle:"slick",matrixGlasses:!0},trinity:{blazer:7153881,pants:1120295,shirt:16118783,tie:10980346,skin:15778720,hair:593174,hairStyle:"long",matrixGlasses:!0},orion:{blazer:889992,pants:1976635,shirt:15793658,tie:3003583,skin:14130034,hair:2696484,hairStyle:"quiff",glasses:!1},morpheus:{blazer:4988309,pants:988970,shirt:16707722,tie:12616956,skin:9263675,hair:1120295,hairStyle:"parted",matrixGlasses:!0},kai:{blazer:947344,pants:1461859,shirt:15531775,tie:2282478,skin:14130034,hair:593174,hairStyle:"spiky",glasses:!1,headset:!0}},ei={boss:{x:0,z:-10.45,rotY:0},atlas:{x:-1,z:-10.45,rotY:0},pixel:{x:1,z:-10.45,rotY:0},nexus:{x:-2,z:-10.45,rotY:0},vega:{x:2,z:-10.45,rotY:0},sentry:{x:-2,z:-6.75,rotY:Math.PI},ares:{x:-1,z:-6.75,rotY:Math.PI},neo:{x:0,z:-6.75,rotY:Math.PI},trinity:{x:1,z:-6.75,rotY:Math.PI},orion:{x:2,z:-6.75,rotY:Math.PI},morpheus:{x:-3.55,z:-8.6,rotY:Math.PI/2},kai:{x:3.55,z:-8.6,rotY:-Math.PI/2}},Cn=Object.freeze({cx:-18.4,cz:-1.7,w:8.4,d:6,doorWidth:1.8}),Mr=Object.freeze({cx:0,cz:-8.6,w:11.2,d:6.4}),ca=[15250572,14130034,13208931,9263675,15778720],la=[2826520,1315860,4008735,4868693,7031343];function Ms(i){return"#"+i.toString(16).padStart(6,"0")}function ye(i,t){const e=document.createElement("canvas");e.width=i,e.height=t;const n=new Bi(e);return n.anisotropy=2,{canvas:e,ctx:e.getContext("2d"),texture:n}}function ha(){const{ctx:i,texture:t}=ye(512,512);i.fillStyle="#121c2e",i.fillRect(0,0,512,512);const e=64;for(let n=0;n<512;n+=e)for(let s=0;s<512;s+=e){const r=(s/e+n/e)%2===0?"#142035":"#111b2d";i.fillStyle=r,i.fillRect(s+2,n+2,e-4,e-4),i.strokeStyle="rgba(148, 163, 184, 0.08)",i.lineWidth=1,i.strokeRect(s+2,n+2,e-4,e-4)}return t.wrapS=1e3,t.wrapT=1e3,t.repeat.set(7,6),t}function up(){const{ctx:i,texture:t}=ye(512,512);i.fillStyle="#4a2f1b",i.fillRect(0,0,512,512);const e=32,n=["#5c3a21","#694328","#52331c","#633e24"];for(let s=0;s<16;s++){const r=s*e;i.fillStyle=n[s%n.length],i.fillRect(0,r+1,512,e-2),i.fillStyle="rgba(20, 10, 4, 0.55)",i.fillRect(0,r,512,2);const o=s*137%380+60;i.fillRect(o,r,2,e)}return t.wrapS=1e3,t.wrapT=1e3,t.repeat.set(6,2),t}function ua(){const{ctx:i,texture:t}=ye(256,256);i.fillStyle="#14532d",i.fillRect(0,0,256,256);for(let e=0;e<600;e++){i.fillStyle=e%2===0?"#166534":"#15803d";const n=e*73%254,s=e*41%254;i.fillRect(n,s,3,3)}return t.wrapS=1e3,t.wrapT=1e3,t.repeat.set(4,2),t}function dp(){const{ctx:i,texture:t}=ye(512,512);i.fillStyle="#09101d",i.fillRect(0,0,512,512);for(let e=0;e<4;e++){const n=e*128;i.fillStyle="#1e293b",i.fillRect(0,n,512,18);for(let s=0;s<8;s++){const r=s*64+6,o=(e+s)%3!==0;i.fillStyle=o?"rgba(56, 189, 248, 0.22)":"rgba(15, 23, 42, 0.85)",i.fillRect(r,n+24,52,92),i.strokeStyle="#334155",i.lineWidth=2,i.strokeRect(r,n+24,52,92)}}return t.wrapS=1e3,t.wrapT=1e3,t.repeat.set(4,2),t}function ai(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function Sr(i,t,e,{name:n,role:s,status:r,accentHex:o}){i.clearRect(0,0,t,e),i.fillStyle="rgba(8, 13, 26, 0.92)",ai(i,4,4,t-8,e-8,14),i.fill(),i.strokeStyle=o,i.globalAlpha=.65,i.lineWidth=3,ai(i,4,4,t-8,e-8,14),i.stroke(),i.globalAlpha=1,i.fillStyle=o,i.fillRect(4,4,10,e-8),i.fillStyle="#f8fafc",i.font='700 30px "Segoe UI", system-ui, sans-serif',i.fillText((n||"AGENTE").toUpperCase(),28,42),i.fillStyle="#9fb0c7",i.font='500 16px "Segoe UI", system-ui, sans-serif';let a=(s||"").toUpperCase();a.length>28&&(a=a.slice(0,27)+"…"),i.fillText(a,28,68);const c=(r||"IDLE").toUpperCase();i.fillStyle=oa[c]||oa.IDLE,i.beginPath(),i.arc(34,90,6,0,Math.PI*2),i.fill(),i.font='700 16px "Segoe UI", system-ui, sans-serif',i.fillText(c,48,95)}function Ei(i,t,e,{title:n,subtitle:s,accentHex:r}){i.clearRect(0,0,t,e),i.fillStyle="rgba(8, 13, 26, 0.85)",ai(i,3,3,t-6,e-6,12),i.fill(),i.fillStyle=r,i.fillRect(3,3,8,e-6),i.fillStyle="#f1f5f9";let o=30;for(i.font=`700 ${o}px "Segoe UI", system-ui, sans-serif`;i.measureText(n).width>t-34&&o>20;)o-=1,i.font=`700 ${o}px "Segoe UI", system-ui, sans-serif`;i.textAlign="center",i.fillText(n,t/2+4,44,t-34),i.fillStyle="#8fa3bd";let a=18;for(i.font=`500 ${a}px "Segoe UI", system-ui, sans-serif`;i.measureText(s).width>t-34&&a>13;)a-=1,i.font=`500 ${a}px "Segoe UI", system-ui, sans-serif`;i.fillText(s,t/2+4,78,t-34),i.textAlign="left"}class pp{constructor(t,e,n,s){this.container=t,this.onSelectAgent=e,this.onSelectStore=n,this.onVisitorArrivalComplete=s,this.agentMap=new Map,this.demoPreviewMode=!1,this.meetingMode=!1,this.explodedView=!1,this.viewMode="3d",this.environmentMode="day",this._rafActive=!1,this._t=0,this.scene=new _f,this.scene.background=new Yt(9287374),this.groundFloorGroup=new gt,this.officeFloorGroup=new gt,this.rooftopGroup=new gt,this.exteriorGroup=new gt,this.scene.add(this.groundFloorGroup,this.officeFloorGroup,this.rooftopGroup,this.exteriorGroup);const r=(this.container.clientWidth||900)/Math.max(1,this.container.clientHeight||650);this.frustumSize=27,this.camera=new Lr(-this.frustumSize*r/2,this.frustumSize*r/2,this.frustumSize/2,-this.frustumSize/2,.1,250),this.cameraTarget=new A(0,.4,-1.2),this.sphericalOffset=new A(24,22,24),this.zoomLevel=.98,this.resetCamera(),this.renderer=new mf({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.container.clientWidth||900,this.container.clientHeight||650),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.container.appendChild(this.renderer.domElement),this.raycaster=new Qf,this.pointer=new it,this._setupLights(),this._buildOfficeArchitecture(),this._bindInteractions(),this.clock=new jf,this._animate=this._animate.bind(this),this.setViewMode("3d")}resetCamera(){this.cameraTarget.set(0,.4,-1.2),this.zoomLevel=.98,this._updateCameraTransform()}_updateCameraTransform(){this.camera.position.copy(this.cameraTarget).add(this.sphericalOffset),this.camera.zoom=this.zoomLevel,this.camera.lookAt(this.cameraTarget),this.camera.updateProjectionMatrix()}setCameraPreset(t,e=900,n){var g;const s=ap[t];if(!s)throw new RangeError(`Preset de câmera inválido: ${t}`);(g=this._cameraTransitionCancel)==null||g.call(this),this.setExplodedView(t==="exploded");const r=new A(...s.target),o=new A(...s.offset),a=this.cameraTarget.clone(),c=this.sphericalOffset.clone(),l=this.zoomLevel,h=performance.now(),u=(this._cameraTransitionId??0)+1;let d=!1;this._cameraTransitionId=u;const p=()=>{d||(d=!0,u===this._cameraTransitionId&&(this._cameraTransitionCancel=null),n==null||n())};this._cameraTransitionCancel=p;const m=_=>{if(u!==this._cameraTransitionId)return;const f=e>0?Math.min((_-h)/e,1):1,S=f*f*(3-2*f);this.cameraTarget.copy(a).lerp(r,S),this.sphericalOffset.copy(c).lerp(o,S),this.zoomLevel=l+(s.zoom-l)*S,this._updateCameraTransform(),f<1?requestAnimationFrame(m):p()};requestAnimationFrame(m)}setFloorVisibility(t,e){const n=!!e;if(t==="shopping"){this.groundFloorGroup.visible=n,this.automotiveCampus&&(this.automotiveCampus.retailRoot.visible=n);return}if(t==="office"){this.officeFloorGroup.visible=n;return}if(t==="rooftop"){this.rooftopGroup.visible=n;return}throw new RangeError(`Pavimento inválido: ${t}`)}setExplodedView(t){const e=!!t;if(this.explodedView===e)return;this.explodedView=e;const n=e?{shopping:-2.4,office:1.1,rooftop:3.6}:{shopping:0,office:0,rooftop:0};this.groundFloorGroup.position.y=n.shopping,this.officeFloorGroup.position.y=n.office,this.rooftopGroup.position.y=n.rooftop,this.automotiveCampus&&(this.automotiveCampus.retailRoot.position.y=n.shopping)}setViewMode(t){if(t!=="2d"&&t!=="3d"||t===this.viewMode&&this._rafActive)return;this.viewMode=t;const e=t==="3d";this.renderer.domElement.style.display=e?"":"none",e&&!this._rafActive?(this._rafActive=!0,this.clock.getDelta(),requestAnimationFrame(this._animate)):e||(this._rafActive=!1)}setEnvironmentMode(t){var s;if(!["day","dusk","night"].includes(t))throw new RangeError(`Modo de ambiente inválido: ${t}`);const n={day:{background:9287374,ambient:14412542,ambientIntensity:.8,directional:16777215,directionalIntensity:1.15,rim:3718648,rimIntensity:.4,ground:16777215},dusk:{background:10187137,ambient:16762786,ambientIntensity:.58,directional:16757879,directionalIntensity:.78,rim:16096876,rimIntensity:.34,ground:14206648},night:{background:463391,ambient:8689848,ambientIntensity:.4,directional:10205151,directionalIntensity:.4,rim:5601208,rimIntensity:.28,ground:8753828}}[t];this.environmentMode=t,this.scene.background.setHex(n.background),this.ambientLight.color.setHex(n.ambient),this.ambientLight.intensity=n.ambientIntensity,this.environmentDirectionalLight.color.setHex(n.directional),this.environmentDirectionalLight.intensity=n.directionalIntensity,this.rimLight.color.setHex(n.rim),this.rimLight.intensity=n.rimIntensity,this.exteriorGround.material.color.setHex(n.ground),(s=this.automotiveCampus)==null||s.setEnvironmentMode(t)}showVisitorArrival(t){var e;return((e=this.automotiveCampus)==null?void 0:e.showVisitorArrival(t,this.onVisitorArrivalComplete))??!1}showVisitorCoffee(){var t;return((t=this.automotiveCampus)==null?void 0:t.showVisitorCoffee())??!1}syncEnvironmentWithSaoPauloClock(t=new Date){var a,c;const e=new Intl.DateTimeFormat("en-US",{timeZone:"America/Sao_Paulo",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(t),n=Number((a=e.find(l=>l.type==="hour"))==null?void 0:a.value),s=Number((c=e.find(l=>l.type==="minute"))==null?void 0:c.value),r=n*60+s,o=r>=360&&r<1020?"day":r<1140&&r>=1020?"dusk":"night";return o!==this.environmentMode&&this.setEnvironmentMode(o),o}_setupLights(){const t=new Jf(14412542,.8);this.ambientLight=t,this.scene.add(t);const e=new ea(16777215,1.15);this.environmentDirectionalLight=e,e.position.set(16,28,14),e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,e.shadow.camera.left=-20,e.shadow.camera.right=20,e.shadow.camera.top=20,e.shadow.camera.bottom=-20,this.scene.add(e);const n=new ea(3718648,.4);this.rimLight=n,n.position.set(-18,12,-16),this.scene.add(n),n.position.set(-18,12,-16);const s=new Mn(3718648,12,12,1.8);s.position.set(Mr.cx,3.4,Mr.cz),this.scene.add(s);const r=new Mn(16767392,8,9,1.8);r.position.set(0,3,10),this.scene.add(r)}_std(t,e={}){return new $t({color:t,roughness:.8,metalness:.08,...e})}_glassMaterial(){return new $t({color:12575743,transparent:!0,opacity:.13,roughness:.08,metalness:.25,side:2,depthWrite:!1})}_mesh(t,e,{x:n=0,y:s=0,z:r=0,castShadow:o=!1,receiveShadow:a=!1}={}){const c=new zt(t,e);return c.position.set(n,s,r),c.castShadow=o,c.receiveShadow=a,c}_buildOfficeArchitecture(){const t=ha(),e=this._mesh(new z(28.4,.45,24.4),this._std(16777215,{map:t,roughness:.55,metalness:.12}),{x:0,y:-.22,z:0,receiveShadow:!0});this.officeFloorGroup.add(e);const n=this._std(1581621,{roughness:.65,metalness:.15}),s=this._mesh(new z(28.4,4.35,.35),n,{x:0,y:2.17,z:-12.17}),r=Cn.doorWidth/2+.1,a=[[-12.17,Cn.cz-r],[Cn.cz+r,12.17]].map(([d,p])=>this._mesh(new z(.35,4.35,p-d),n,{x:-14.17,y:2.17,z:(d+p)/2})),c=this._mesh(new z(.35,1.7,Cn.doorWidth+.2),n,{x:-14.17,y:3.5,z:Cn.cz});this.officeFloorGroup.add(s,...a,c);const l=new ae({color:3718648}),h=this._mesh(new z(28.2,.06,.06),l,{x:0,y:4.28,z:-11.95}),u=this._mesh(new z(.06,.06,24.2),l,{x:-13.95,y:4.28,z:0});this.officeFloorGroup.add(h,u);for(let d=0;d<3;d++){const p=-7+d*7;if(Math.abs(p-Cn.cz)<2.8)continue;const m=this._mesh(new z(.14,2.5,5.2),this._std(2898517,{metalness:.5}),{x:-13.95,y:2,z:p}),g=this._mesh(new z(.08,2.3,5),this._glassMaterial(),{x:-13.88,y:2,z:p});this.officeFloorGroup.add(m,g)}this._buildCorporateTowerAndRooftop(),this._buildEntryFacade(),this._buildExecutiveWing(),this._buildReception(),this._buildWaitingArea(),this._buildBoardroom();for(const d of aa)d.isBoss?this._buildBossSuite(d):d.slug==="atlas"?this._buildAtlasHub(d):d.isReception?this._buildReceptionStation(d):this._buildWorkstationZone(d),this._buildHumanoidAgent(d);this.exteriorGroundY=-10.45,this._buildExteriorLandscape(),this.automotiveCampus=new op(this.scene,this.exteriorGroundY)}_buildEntryFacade(){const t=new gt,e=this._std(1055011,{roughness:.42,metalness:.58}),n=this._std(2504002,{roughness:.38,metalness:.72}),s=new $t({color:10148043,transparent:!0,opacity:.2,roughness:.12,metalness:.3,side:2,depthWrite:!1}),r=new ae({color:3462041});for(const l of[-13.75,-2,0,2,13.75])t.add(this._mesh(new z(.11,3.12,.18),n,{x:l,y:1.62,z:12.43}));for(const l of[-.73,.73])t.add(this._mesh(new z(1.38,2.9,.07),s,{x:l,y:1.57,z:12.45})),t.add(this._mesh(new z(.035,.42,.07),this._std(13358561,{metalness:.8}),{x:l+(l<0?.16:-.16),y:1.55,z:12.51}));t.add(this._mesh(new z(27.5,.13,.2),e,{y:3.2,z:12.43})),t.add(this._mesh(new z(9.5,.11,.85),e,{y:3.6,z:12.95,castShadow:!0})),t.add(this._mesh(new z(9,.035,.035),r,{y:3.54,z:13.4}));const o=ye(1024,192);o.ctx.fillStyle="#101923",o.ctx.fillRect(0,0,1024,192),o.ctx.fillStyle="#34d399",o.ctx.fillRect(36,34,8,124),o.ctx.font="700 68px Inter, Arial, sans-serif",o.ctx.fillStyle="#f8fafc",o.ctx.textAlign="left",o.ctx.textBaseline="middle",o.ctx.fillText("AXIORYN AI LABS",72,84),o.ctx.font="500 24px Inter, Arial, sans-serif",o.ctx.fillStyle="#9fb3c8",o.ctx.fillText("SOLUÇÕES DIGITAIS",74,145),o.texture.needsUpdate=!0,t.add(this._mesh(new z(9.5,1.18,.18),e,{y:3.82,z:13.5,castShadow:!0}));const a=new zt(new be(9.15,1.05),new ae({map:o.texture,toneMapped:!1}));a.position.set(0,3.82,13.61),t.add(a);const c=new Mn(3462041,4,18,2);c.position.set(0,3,13.6),t.add(c),this.officeFloorGroup.add(t)}_buildExteriorLandscape(){const t=this.exteriorGroundY,e=ua();e.repeat.set(24,24);const n=this._mesh(new z(150,.12,150),this._std(16777215,{map:e,roughness:.98}),{y:t-.06,receiveShadow:!0});this.exteriorGround=n,this.exteriorGroup.add(n);const s=this._std(5661298,{roughness:.92}),r=new zt(new Li(20,24,72),s);r.rotation.x=-Math.PI/2,r.position.y=t+.02,r.receiveShadow=!0,this.exteriorGroup.add(r),this.exteriorGroup.add(this._mesh(new z(7.5,.08,22),s,{y:t+.035,z:23,receiveShadow:!0}));const o=new zt(new Nr(6.5,32),s);o.rotation.x=-Math.PI/2,o.position.set(0,t+.025,34),o.receiveShadow=!0,this.exteriorGroup.add(o);const a=new Ct(.18,.28,2.4,7),c=[new In(1.45,2.6,7),new In(1.12,2.2,7),new In(.78,1.75,7)],l=this._std(5850420,{roughness:1}),h=[this._std(2057032,{roughness:1}),this._std(2980176,{roughness:1}),this._std(3703898,{roughness:1})];[[-33,-28,1.15],[-35,-8,.9],[-34,15,1.05],[-38,36,1.1],[-40,49,.95],[0,55,1.05],[38,37,1.15],[37,19,1.1],[39,-5,.9],[31,-29,1.15],[10,-40,1.05],[-15,-40,.95]].forEach(([d,p,m],g)=>{const _=new gt;_.position.set(d,t,p),_.scale.setScalar(m),_.add(this._mesh(a,l,{y:1.2,castShadow:!0})),_.add(this._mesh(c[0],h[g%h.length],{y:2.7,castShadow:!0})),_.add(this._mesh(c[1],h[(g+1)%h.length],{y:3.8,castShadow:!0})),_.add(this._mesh(c[2],h[(g+2)%h.length],{y:4.85,castShadow:!0})),this.exteriorGroup.add(_)})}_buildCorporateTowerAndRooftop(){const t=this.groundFloorGroup,e=this.rooftopGroup,n=dp(),s=up(),r=ua(),o=this._std(988970,{metalness:.65,roughness:.35}),a=this._std(16777215,{map:n,roughness:.4,metalness:.35}),c=(G,q,j,Y,st,ut)=>{t.add(this._mesh(new z(G,q,j),a,{x:Y,y:st,z:ut,receiveShadow:!0}))};c(28.2,10,.38,0,-5.45,-11.91),c(.38,10,23.82,-13.91,-5.45,0),c(.38,10,23.82,13.91,-5.45,0),c(28.2,5,.38,0,-2.95,11.91),c(4,5,.38,-12.1,-7.95,11.91),c(4,5,.38,12.1,-7.95,11.91);const l=new $t({color:10148043,transparent:!0,opacity:.16,roughness:.12,metalness:.22,side:2,depthWrite:!1});t.add(this._mesh(new z(19.8,4.8,.06),l,{x:0,y:-7.95,z:12.12}));for(const G of[-9.9,-5,0,5,9.9])t.add(this._mesh(new z(.11,4.8,.14),o,{x:G,y:-7.95,z:12.18}));t.add(this._mesh(new z(19.8,.11,.14),o,{x:0,y:-7.95,z:12.18}));const h=l.clone();h.opacity=.07;for(const G of[-.66,.66])t.add(this._mesh(new z(1.24,4.55,.045),h,{x:G,y:-7.95,z:12.24})),t.add(this._mesh(new z(.045,.42,.06),o,{x:G+(G<0?.38:-.38),y:-7.95,z:12.29}));for(const G of[-14.05,0,14.05])for(const q of[-12.05,0,12.05])G===0&&q===0||t.add(this._mesh(new z(.55,10.4,.55),o,{x:G,y:-5.2,z:q}));t.add(this._mesh(new z(28.8,.28,24.8),o,{x:0,y:-.35,z:0})),t.add(this._mesh(new z(28.9,.06,24.9),new ae({color:3718648}),{x:0,y:-.22,z:0}));const u=4.35,d=28.4,p=5.6,m=-14.8;e.add(this._mesh(new z(d,.35,p),this._std(1976635,{metalness:.35,roughness:.55}),{x:0,y:u-.17,z:m,receiveShadow:!0}));for(const G of[-13.8,-6.5,0,6.5,13.8])e.add(this._mesh(new z(.45,4.35,.45),o,{x:G,y:2.15,z:-17.3}));e.add(this._mesh(new z(d-.4,.06,p-.4),this._std(16777215,{map:s,roughness:.6}),{x:0,y:u+.02,z:m,receiveShadow:!0})),e.add(this._mesh(new z(9.2,.08,2.6),this._std(16777215,{map:r,roughness:.9}),{x:0,y:u+.04,z:-13.8,receiveShadow:!0}));const g=this._glassMaterial(),_=this._std(9741240,{metalness:.7,roughness:.25});e.add(this._mesh(new z(d-2.6,1.05,.06),g,{x:-1.2,y:u+.55,z:-12.05})),e.add(this._mesh(new z(d,1.05,.06),g,{x:0,y:u+.55,z:-17.55})),e.add(this._mesh(new z(.06,1.05,p),g,{x:-14.15,y:u+.55,z:m})),e.add(this._mesh(new z(.06,1.05,p),g,{x:14.15,y:u+.55,z:m})),e.add(this._mesh(new z(d-2.6,.06,.1),_,{x:-1.2,y:u+1.08,z:-12.05}));const f=12;for(let G=0;G<f;G++){const q=(G+1)*(u/f),j=-8.4-G*(3.6/f);e.add(this._mesh(new z(1.6,.12,.34),this._std(16777215,{map:s,roughness:.5}),{x:12.9,y:q,z:j,castShadow:!0}))}const S=this._std(2042167,{metalness:.5,roughness:.4});for(const G of[-10.8,-4.4])for(const q of[-16.8,-13.2])e.add(this._mesh(new z(.16,2.5,.16),S,{x:G,y:u+1.25,z:q}));for(let G=0;G<6;G++)e.add(this._mesh(new z(6.8,.1,.12),S,{x:-7.6,y:u+2.48,z:-16.6+G*.68}));const M=new Mn(16757844,12,16,1.5);M.position.set(-7.2,u+2.2,-14.8),e.add(M);const x=this._std(3359061,{roughness:.7}),P=this._std(14870768,{roughness:.85}),b=this._std(16347926,{roughness:.7});e.add(this._mesh(new z(3.6,.35,1),x,{x:-7.3,y:u+.22,z:-15.6,castShadow:!0})),e.add(this._mesh(new z(3.5,.14,.9),P,{x:-7.3,y:u+.44,z:-15.6})),e.add(this._mesh(new z(3.6,.55,.22),x,{x:-7.3,y:u+.65,z:-16.02})),e.add(this._mesh(new z(.35,.28,.18),b,{x:-8.2,y:u+.62,z:-15.82})),e.add(this._mesh(new z(.35,.28,.18),b,{x:-6.4,y:u+.62,z:-15.82})),e.add(this._mesh(new Ct(.65,.65,.08,24),this._std(16777215,{map:s}),{x:-7.3,y:u+.42,z:-14.2})),e.add(this._mesh(new Ct(.08,.12,.38,12),S,{x:-7.3,y:u+.2,z:-14.2})),e.add(this._mesh(new z(3.8,1.05,.9),this._std(1976635,{roughness:.5}),{x:6.8,y:u+.52,z:-16.1,castShadow:!0})),e.add(this._mesh(new z(4,.08,1.1),this._std(16777215,{map:s,roughness:.35}),{x:6.8,y:u+1.08,z:-16.1})),e.add(this._mesh(new z(.55,.42,.4),_,{x:5.9,y:u+1.32,z:-16.1}));for(const G of[-2.4,2.4])e.add(this._mesh(new Ct(.55,.55,.06,20),this._std(16317180),{x:G,y:u+.88,z:-14})),e.add(this._mesh(new Ct(.05,.08,.86,12),S,{x:G,y:u+.43,z:-14}));const C=this._buildPlant(-12.2,-13.5,1.35);C.position.y=u;const R=this._buildPlant(11.2,-13.5,1.35);R.position.y=u;const E=this._buildPlant(0,-16.4,1.45);E.position.y=u,e.add(C,R,E);const v=ye(1024,192);v.ctx.clearRect(0,0,1024,192),v.ctx.fillStyle="rgba(8, 13, 26, 0.94)",ai(v.ctx,8,8,1008,176,18),v.ctx.fill(),v.ctx.strokeStyle="#34d399",v.ctx.lineWidth=4,ai(v.ctx,8,8,1008,176,18),v.ctx.stroke(),v.ctx.textAlign="center",v.ctx.fillStyle="#f8fafc",v.ctx.font='800 76px "Segoe UI", system-ui, sans-serif',v.ctx.fillText("AXIORYN AI LABS",512,96),v.ctx.fillStyle="#a7f3d0",v.ctx.font='600 27px "Segoe UI", system-ui, sans-serif',v.ctx.fillText("HEADQUARTERS TOWER  •  ROOFTOP SKY LOUNGE",512,148),v.ctx.textAlign="left";const L=this._mesh(new z(8.6,1.5,.12),this._std(988970,{metalness:.5,roughness:.35}),{x:0,y:u+2.35,z:-17.55}),F=new zt(new be(8.4,1.42),new ae({map:v.texture,transparent:!0}));F.position.set(0,u+2.35,-17.47),e.add(L,F);const B=ye(512,96);Ei(B.ctx,512,96,{title:"ROOFTOP SKY LOUNGE & CAFÉ",subtitle:"ÁREA DE DESCANSO DOS AGENTES EM IDLE",accentHex:"#10b981"});const X=new xn(new cn({map:B.texture,transparent:!0,depthTest:!1}));X.scale.set(3.4,.64,1),X.position.set(0,u+1.45,-12.05),e.add(X),this.scene.add(t)}_buildExecutiveWing(){const t=new gt,{cx:e,cz:n,w:s,d:r,doorWidth:o}=Cn,a=s/2,c=r/2,l=2.65,h=this._glassMaterial(),u=this._std(3359068,{metalness:.55,roughness:.38}),d=ha();t.add(this._mesh(new z(s,.45,r),this._std(16777215,{map:d,roughness:.55,metalness:.12}),{x:e,y:-.22,z:n,receiveShadow:!0}));const p=new z(s,.08,r);t.add(this._mesh(p,this._std(1581880,{roughness:.85}),{x:e,y:.04,z:n,receiveShadow:!0})),t.add(new ds(new gs(p),new bi({color:15381256})).translateX(e).translateY(.04).translateZ(n));const m=e-a,g=e+a;for(const M of[m,g]){const x=M===g,P=o/2,b=x?[[n-c,n-P],[n+P,n+c]]:[[n-c,n+c]];for(const[C,R]of b)t.add(this._mesh(new z(.05,l,R-C),h,{x:M,y:l/2+.04,z:(C+R)/2})),t.add(this._mesh(new z(.12,.09,R-C),u,{x:M,y:l+.04,z:(C+R)/2}))}for(const M of[n-c,n+c])t.add(this._mesh(new z(s,l,.05),h,{x:e,y:l/2+.04,z:M})),t.add(this._mesh(new z(s,.09,.12),u,{x:e,y:l+.04,z:M}));for(const M of[m,g])for(const x of[n-c,n+c])t.add(this._mesh(new z(.12,l+.1,.12),u,{x:M,y:(l+.1)/2,z:x}));for(const M of[n-o/2,n+o/2])t.add(this._mesh(new z(.12,l+.1,.12),u,{x:g,y:(l+.1)/2,z:M}));t.add(this._mesh(new z(.12,.1,o),u,{x:g,y:l+.04,z:n}));for(const M of[-o/4,o/4])t.add(this._mesh(new z(.035,l-.12,o/2-.04),h,{x:g,y:l/2+.04,z:n+M})),t.add(this._mesh(new z(.045,.32,.035),u,{x:g-.035,y:1.15,z:n+M+(M<0?.24:-.24)}));const _=ye(640,112);Ei(_.ctx,640,112,{title:"DIRETORIA & COORDENAÇÃO",subtitle:"BOSS • ATLAS",accentHex:"#eab308"});const f=new xn(new cn({map:_.texture,transparent:!0}));f.scale.set(3.4,.6,1),f.position.set(g+.1,3.25,n),t.add(f);for(const M of[n-c+.55,n+c-.55])t.add(this._buildPlant(e-a+.55,M,.7));this.officeFloorGroup.add(t);const S=this._std(1976635,{metalness:.65,roughness:.35});for(const M of[e-a+.25,e+a-.25])for(const x of[n-c+.25,n+c-.25])this.groundFloorGroup.add(this._mesh(new z(.42,10.1,.42),S,{x:M,y:-5.3,z:x}))}_buildBossSuite(t){const e=new gt,{x:n,z:s}=t,r=new gt;r.position.set(n,0,s-.65),r.add(this._mesh(new z(2.8,.14,1.25),this._std(2562321,{roughness:.35,metalness:.2}),{y:1.04,castShadow:!0})),r.add(this._mesh(new z(2.6,.72,.08),this._std(1120295,{metalness:.5}),{y:.64,z:-.52})),r.add(this._mesh(new z(2.62,.06,.09),new ae({color:15381256}),{y:.94,z:-.53}));const o=[],a=new ae({color:1976635});o.push(a);const c=this._std(988970,{metalness:.5,roughness:.3});r.add(this._mesh(new z(1.75,.85,.06),c,{x:0,y:1.58,z:-.35})),r.add(this._mesh(new be(1.65,.75),a,{x:0,y:1.58,z:-.31})),e.add(r);const l=this._stationSeat(t);e.add(this._buildChair(l.x,l.z,Math.PI,15381256)),t.screenMats=o,this.officeFloorGroup.add(e)}_buildPlant(t,e,n=1){const s=new gt;s.position.set(t,0,e),s.scale.setScalar(n),s.add(this._mesh(new Ct(.17,.22,.26,12),this._std(2634314),{y:.13})),s.add(this._mesh(new Ct(.035,.045,.5,8),this._std(4020794),{y:.5}));const r=this._std(3112271,{roughness:.95});for(let o=0;o<4;o++){const a=this._mesh(new jt(.2,10,8),r,{x:Math.cos(o*1.7)*.14,y:.86+o*.09,z:Math.sin(o*1.7)*.14});a.scale.y=.8,s.add(a)}return this.officeFloorGroup.add(s),s}_buildReception(){const t=new gt;t.add(this._mesh(new z(8.4,.05,2.4),this._std(2240586,{roughness:.95}),{x:0,y:.03,z:8.8,receiveShadow:!0}));const e=new ds(new gs(new z(8.4,.06,2.4)),new bi({color:3718648}));e.position.set(0,.04,8.8),t.add(e);const n=this._std(2832981,{roughness:.6,metalness:.25}),s=this._mesh(new z(4.2,1.05,.42),n,{x:0,y:.52,z:9.4,castShadow:!0});t.add(s),t.add(this._mesh(new z(4.5,.09,1.35),this._std(3820915,{roughness:.5}),{x:0,y:1.08,z:9.28,castShadow:!0})),t.add(this._mesh(new z(.4,1.05,.9),n,{x:-2.3,y:.52,z:8.95})),t.add(this._mesh(new z(.4,1.05,.9),n,{x:2.3,y:.52,z:8.95}));const r=this._mesh(new z(4,.05,.03),new ae({color:3718648}),{x:0,y:.14,z:9.62});t.add(r);const o=ye(256,64);o.ctx.fillStyle="rgba(8,13,26,0.9)",ai(o.ctx,2,2,252,60,10),o.ctx.fill(),o.ctx.fillStyle="#e2e8f0",o.ctx.font='800 30px "Segoe UI", sans-serif',o.ctx.textAlign="center",o.ctx.fillText("AXIORYN AI LABS",128,42),o.ctx.textAlign="left";const a=new xn(new cn({map:o.texture,transparent:!0}));a.scale.set(2.2,.55,1),a.position.set(0,2.08,9.45),t.add(a),t.add(this._mesh(new z(.9,.55,.05),this._std(659224),{x:1.2,y:1.5,z:9.1,rotation:Math.PI*.94}));const c=this._std(988452,{metalness:.4});t.add(this._mesh(new z(.46,.08,.38),c,{y:.05,z:10.4,castShadow:!0})),t.add(this._mesh(new z(.14,.82,.14),c,{y:.49,z:10.4,castShadow:!0}));const l=this._mesh(new z(.78,.52,.06),this._std(725785,{metalness:.35}),{y:1.1,z:10.4});l.rotation.x=-.4,t.add(l);const h=ye(256,160);h.ctx.fillStyle="#0b1319",h.ctx.fillRect(0,0,256,160),h.ctx.fillStyle="#34d399",h.ctx.fillRect(16,16,224,6),h.ctx.textAlign="center",h.ctx.fillStyle="#d1fae5",h.ctx.font='700 23px "Segoe UI", sans-serif',h.ctx.fillText("BEM-VINDO",128,62),h.ctx.fillStyle="#34d399",h.ctx.font='700 20px "Segoe UI", sans-serif',h.ctx.fillText("RETIRE SUA SENHA",128,100),h.ctx.fillStyle="#94a3b8",h.ctx.font='500 16px "Segoe UI", sans-serif',h.ctx.fillText("ATENDIMENTO AXIORYN",128,132);const u=this._mesh(new be(.7,.44),new ae({map:h.texture}),{y:1.109,z:10.432});u.rotation.x=-.4,t.add(u),this.officeFloorGroup.add(t)}_buildWaitingArea(){const t=new gt,e=new z(11,.06,2.2);t.add(this._mesh(e,this._std(2503229,{roughness:.98}),{y:.03,z:11.1,receiveShadow:!0}));const n=new ds(new gs(e),new bi({color:5399404}));n.position.set(0,.04,11.1),t.add(n);const s=this._std(4016981,{roughness:.94}),r=this._std(2568762,{roughness:.48,metalness:.48}),o=this._std(5720894,{roughness:.58,metalness:.12});for(const a of[-4.4,-2.9,2.9,4.4]){const c=new gt;c.position.set(a,0,11.1),c.rotation.y=Math.PI;for(const h of[-.34,.34])for(const u of[-.25,.25])c.add(this._mesh(new Ct(.025,.035,.48,8),r,{x:h,y:.24,z:u,castShadow:!0}));c.add(this._mesh(new z(.86,.14,.74),s,{y:.52,castShadow:!0})),c.add(this._mesh(new z(.82,.1,.68),s,{y:.64,z:.015}));const l=this._mesh(new z(.86,.82,.15),s,{y:1.05,z:-.3,castShadow:!0});l.rotation.x=-.08,c.add(l);for(const h of[-1,1])c.add(this._mesh(new z(.1,.12,.66),o,{x:h*.48,y:.82,z:.03,castShadow:!0})),c.add(this._mesh(new z(.055,.28,.06),r,{x:h*.45,y:.66,z:-.2})),c.add(this._mesh(new z(.055,.2,.06),r,{x:h*.45,y:.62,z:.25}));t.add(c)}this.officeFloorGroup.add(t)}_buildBoardroom(){const t=new gt,{cx:e,cz:n,w:s,d:r}=Mr,o=s/2,a=r/2;t.add(this._mesh(new z(s,.06,r),this._std(1450812,{roughness:.95}),{x:e,y:.03,z:n,receiveShadow:!0}));const c=ye(1024,512);c.ctx.fillStyle="#14253b",c.ctx.fillRect(0,0,1024,512),c.ctx.strokeStyle="#38bdf8",c.ctx.lineWidth=12,c.ctx.strokeRect(24,24,976,464),c.ctx.strokeStyle="#eab308",c.ctx.lineWidth=4,c.ctx.strokeRect(44,44,936,424),c.ctx.textAlign="center",c.ctx.fillStyle="#f8fafc",c.ctx.font='800 104px "Segoe UI", system-ui, sans-serif',c.ctx.fillText("AXIORYN",512,252),c.ctx.fillStyle="#7dd3fc",c.ctx.font='600 30px "Segoe UI", system-ui, sans-serif',c.ctx.fillText("SALA DE REUNIÕES",512,314),c.ctx.textAlign="left";const l=new zt(new be(8.2,4.6),new ae({map:c.texture}));l.rotation.x=-Math.PI/2,l.position.set(e,.061,n),t.add(l);const h=this._glassMaterial(),u=this._std(3359068,{metalness:.5,roughness:.4}),d=2.6,p=n+a,m=n-a;for(const[F,B]of[[-(o+.9)/2,o-.9],[(o+.9)/2,o-.9]]){const X=this._mesh(new z(B,d,.05),h,{x:e+F,y:d/2+.05,z:p}),G=this._mesh(new z(B,.1,.12),u,{x:e+F,y:d+.05,z:p});t.add(X,G)}const g=this._mesh(new z(.1,d+.05,.14),u,{x:e-.9,y:(d+.05)/2,z:p}),_=this._mesh(new z(.1,d+.05,.14),u,{x:e+.9,y:(d+.05)/2,z:p}),f=this._mesh(new z(1.9,.12,.14),u,{x:e,y:d+.1,z:p});t.add(g,_,f);for(const F of[-.43,.43])t.add(this._mesh(new z(.82,d-.08,.035),h,{x:e+F,y:d/2+.05,z:p}));for(const F of[-1,1]){const B=this._mesh(new z(.05,d,r),h,{x:e+F*o,y:d/2+.05,z:n}),X=this._mesh(new z(.12,.1,r),u,{x:e+F*o,y:d+.05,z:n});t.add(B,X);const G=this._mesh(new z(.12,d+.12,.12),u,{x:e+F*o,y:(d+.05)/2,z:p});t.add(G)}t.add(this._mesh(new z(5.4,.14,2.1),this._std(2965345,{roughness:.45,metalness:.2}),{x:e,y:1,z:n,castShadow:!0})),t.add(this._mesh(new z(.18,.95,1.75),this._std(1845056),{x:e-2.2,y:.48,z:n})),t.add(this._mesh(new z(.18,.95,1.75),this._std(1845056),{x:e+2.2,y:.48,z:n})),this.holoCoreMat=new $t({color:3718648,emissive:959977,emissiveIntensity:1.2,transparent:!0,opacity:.85});const S=this._mesh(new Ct(.3,.34,.06,20),this._std(988452,{metalness:.5}),{x:e,y:1.1,z:n});this.holoCore=this._mesh(new si(.16,0),this.holoCoreMat,{x:e,y:1.38,z:n}),t.add(S,this.holoCore);for(const F of Object.keys(ei)){const B=ei[F];t.add(this._buildChair(e+B.x,B.z,B.rotY,6583435))}t.add(this._mesh(new z(3.9,2.2,.1),this._std(659224,{metalness:.3}),{x:e,y:1.75,z:m+.24}));const M=ye(512,288),x=M.ctx;x.fillStyle="#04101c",x.fillRect(0,0,512,288),x.fillStyle="#38bdf8",x.fillRect(0,0,512,42),x.fillStyle="#04101c",x.font='700 24px "Segoe UI", sans-serif',x.fillText("AXIORYN AI LABS — PAINEL OPERACIONAL",16,29),[64,120,90,150,110,170,84,132,158,100,142,76].forEach((F,B)=>{x.fillStyle=B%3===0?"#0ea5e9":"#155e75",x.fillRect(24+B*38,264-F,26,F)}),x.fillStyle="#7dd3fc",x.font='600 16px "Segoe UI", sans-serif',x.fillText("INFERÊNCIA 100% LOCAL • OLLAMA • MODELO ÚNICO 14B EM VRAM",16,279);const b=this._mesh(new be(3.7,2.05),new ae({map:M.texture}),{x:e,y:1.75,z:m+.31});t.add(b);for(const[F,B,X]of[[e-4.5,"PROPÓSITO","#38bdf8"],[e+4.5,"VISÃO","#eab308"]]){const G=ye(256,176);G.ctx.fillStyle="#0b1525",G.ctx.fillRect(0,0,256,176),G.ctx.strokeStyle=X,G.ctx.lineWidth=7,G.ctx.strokeRect(9,9,238,158),G.ctx.beginPath(),G.ctx.arc(128,70,38,0,Math.PI*2),G.ctx.stroke(),G.ctx.beginPath(),G.ctx.moveTo(46,128),G.ctx.lineTo(210,128),G.ctx.stroke(),G.ctx.textAlign="center",G.ctx.fillStyle="#e2e8f0",G.ctx.font='700 20px "Segoe UI", system-ui, sans-serif',G.ctx.fillText(B,128,154),G.ctx.textAlign="left",t.add(this._mesh(new z(1.45,1.08,.09),u,{x:F,y:2,z:m+.23})),t.add(this._mesh(new be(1.31,.94),new ae({map:G.texture}),{x:F,y:2,z:m+.31}))}const C=this._mesh(new Ct(.28,.28,.05,24),this._std(15265269),{x:e+3,y:2.3,z:m+.25});C.rotation.x=Math.PI/2;const R=this._mesh(new z(.03,.2,.02),this._std(988970),{x:e+3,y:2.3,z:m+.29}),E=this._mesh(new z(.03,.14,.02),this._std(988970),{x:e+3,y:2.3,z:m+.29});E.rotation.z=-Math.PI/2,t.add(C,R,E);const v=ye(512,96);Ei(v.ctx,512,96,{title:"BOARDROOM",subtitle:"SALA DE REUNIÃO EXECUTIVA",accentHex:"#38bdf8"});const L=new xn(new cn({map:v.texture,transparent:!0,depthTest:!1}));L.scale.set(2.6,.49,1),L.position.set(e,2.95,n+a+.35),t.add(L),this.officeFloorGroup.add(t)}_buildWorkstationZone(t){const e=new gt,{x:n,z:s}=t,r=!!t.compact,o=!!t.dynamic,a=r?5.6:6.8,c=r?3.2:5,l=a/2,h=c/2,u=new z(a,.08,c),d=t.slug==="neo"?398350:1252401,p=this._mesh(u,this._std(d,{roughness:.9}),{x:n,y:.04,z:s,receiveShadow:!0});e.add(p);const m=new ds(new gs(u),new bi({color:t.color}));m.position.set(n,.04,s),e.add(m);const g=this._glassMaterial(),_=this._std(3359068,{metalness:.5,roughness:.4}),f=r?2.1:2.4,S=r?1.5:1.8,M=s<0?s+h:s-h,x=s<0?s-h:s+h;for(const j of[n-l,n+l])e.add(this._mesh(new z(.05,f,c),g,{x:j,y:f/2+.04,z:s})),e.add(this._mesh(new z(.12,.09,c),_,{x:j,y:f+.04,z:s}));e.add(this._mesh(new z(a,f,.05),g,{x:n,y:f/2+.04,z:x})),e.add(this._mesh(new z(a,.09,.12),_,{x:n,y:f+.04,z:x}));for(const j of[-1,1]){const Y=l-S/2;e.add(this._mesh(new z(Y,f,.05),g,{x:n+j*(S/2+Y/2),y:f/2+.04,z:M})),e.add(this._mesh(new z(Y,.09,.12),_,{x:n+j*(S/2+Y/2),y:f+.04,z:M})),e.add(this._mesh(new z(.12,f+.1,.12),_,{x:n+j*l,y:(f+.1)/2,z:M})),e.add(this._mesh(new z(.12,f+.1,.12),_,{x:n+j*S/2,y:(f+.1)/2,z:M})),e.add(this._mesh(new z(S/2-.06,f-.12,.035),g,{x:n+j*S/4,y:f/2+.04,z:M}))}for(const j of[n-l,n+l])for(const Y of[M,x])e.add(this._mesh(new z(.12,f+.1,.12),_,{x:j,y:(f+.1)/2,z:Y}));e.add(this._mesh(new z(S,.1,.12),_,{x:n,y:f+.04,z:M}));const P=new gt;P.position.set(n,0,s-.8),P.add(this._mesh(new z(3.4,.14,1.5),this._std(3359071,{roughness:.5,metalness:.2}),{y:1.02,castShadow:!0})),P.add(this._mesh(new z(3,.55,.07),this._std(2240586),{y:.72,z:-.5})),P.add(this._mesh(new z(.12,1,1.25),this._std(988452),{x:-1.55,y:.5})),P.add(this._mesh(new z(.12,1,1.25),this._std(988452),{x:1.55,y:.5})),P.add(this._mesh(new z(3.2,.05,.34),this._std(2832981),{y:2.05,z:-.55})),P.add(this._mesh(new z(.1,.95,.3),this._std(2240586),{x:-1.5,y:1.55,z:-.55})),P.add(this._mesh(new z(.1,.95,.3),this._std(2240586),{x:1.5,y:1.55,z:-.55})),P.add(this._mesh(new z(.5,.16,.24),this._std(4865899),{x:-.9,y:2.16,z:-.55})),P.add(this._mesh(new z(.4,.12,.22),this._std(3104138),{x:-.3,y:2.14,z:-.55}));const b=[],C=new ae({color:1976635});b.push(C);const R=this._std(659224,{metalness:.35,roughness:.4});P.add(this._mesh(new z(1.5,.9,.07),R,{x:-.25,y:1.62,z:-.5})),P.add(this._mesh(new be(1.38,.78),C,{x:-.25,y:1.62,z:-.45})),P.add(this._mesh(new Ct(.04,.09,.28,10),R,{x:-.25,y:1.19,z:-.55}));const E=new ae({color:1581620});b.push(E);const v=new gt;v.position.set(1.05,0,-.42),v.rotation.y=-.5,v.add(this._mesh(new z(1,.62,.06),R,{y:1.52})),v.add(this._mesh(new be(.9,.52),E,{y:1.52,z:.035})),v.add(this._mesh(new Ct(.03,.07,.22,10),R,{y:1.15,z:-.05})),P.add(v),P.add(this._mesh(new z(.8,.045,.28),this._std(1120295,{roughness:.5}),{x:-.15,y:1.11,z:.28})),P.add(this._mesh(new z(.1,.04,.15),this._std(1120295),{x:.45,y:1.11,z:.3})),P.add(this._mesh(new Ct(.05,.05,.11,10),this._std(fp(t.color),{roughness:.4}),{x:-.85,y:1.14,z:.32})),e.add(P);const L=this._stationSeat(t);e.add(this._buildChair(L.x,L.z,Math.PI,t.color));const F=ye(512,96);Ei(F.ctx,512,96,{title:t.name,subtitle:o?"ESTAÇÃO DEDICADA AXIORYN":"DEPARTAMENTO AXIORYN",accentHex:Ms(t.color)});const B=new xn(new cn({map:F.texture,transparent:!0}));B.scale.set(o?1.8:2.25,o?.36:.43,1);const X=M+(s<0?.3:-.3);B.position.set(n,3.45,X),e.add(B);const G=n<0?n-l+.45:n+l-.45,q=s<0?s-h+.45:s+h-.45;e.add(this._buildPlant(G,q,.85)),t.screenMats=b,this.officeFloorGroup.add(e)}_buildAtlasHub(t){const e=new gt,{x:n,z:s}=t;e.add(this._mesh(new Ct(1.25,1.32,.08,40),this._std(99e4,{roughness:.85}),{x:n,y:.04,z:s,receiveShadow:!0})),this.hubRingMat=new ae({color:3718648,transparent:!0,opacity:.85,side:2});const r=new zt(new Li(1.1,1.22,40),this.hubRingMat);r.rotation.x=-Math.PI/2,r.position.set(n,.09,s),e.add(r);const o=new gt;o.position.set(n,0,s-1),o.add(this._mesh(new Ct(.9,.9,.12,28),this._std(3359071,{roughness:.45,metalness:.3}),{y:1.02,castShadow:!0})),o.add(this._mesh(new Ct(.14,.2,.95,16),this._std(1845056,{metalness:.4}),{y:.5})),o.add(this._mesh(new Ct(.5,.55,.06,20),this._std(1845056),{y:.03}));const a=[],c=this._std(659224,{metalness:.35,roughness:.4}),l=(d,p,m,g)=>{const _=new ae({color:1976635});a.push(_);const f=new gt;f.position.set(m,1.6,-.35),f.rotation.y=g,f.add(this._mesh(new z(d,p,.07),c,{y:0})),f.add(this._mesh(new be(d-.12,p-.12),_,{y:0,z:.04})),f.add(this._mesh(new Ct(.03,.07,.2,10),c,{y:-p/2-.1,z:-.05})),o.add(f)};l(1.5,.88,0,0),l(1.05,.6,-1.05,.55),l(1.05,.6,1.05,-.55),o.add(this._mesh(new z(.8,.04,.26),this._std(1120295,{roughness:.5}),{x:0,y:1.11,z:.4})),e.add(o),this.atlasHoloMat=new ae({color:3718648,transparent:!0,opacity:.35}),e.add(this._mesh(new Ct(.24,.3,.08,20),this._std(988452,{metalness:.5}),{x:n+1.35,y:.04,z:s+.75}));const h=this._mesh(new Ct(.08,.12,1.2,12,1,!0),this.atlasHoloMat,{x:n+1.35,y:.7,z:s+.75});e.add(h),this.atlasHoloGem=this._mesh(new si(.16,0),new $t({color:3718648,emissive:959977,emissiveIntensity:1}),{x:n+1.35,y:1.45,z:s+.75}),e.add(this.atlasHoloGem);const u=this._stationSeat(t);e.add(this._buildChair(u.x,u.z,Math.PI,t.color)),t.screenMats=a,this.officeFloorGroup.add(e)}_stationSeat(t){var n;const e=(n=this._homes)==null?void 0:n[t.slug];return{x:e?e.x:t.x,z:(e?e.z:t.z)+.15}}_buildChair(t,e,n,s){const r=new gt;r.position.set(t,0,e),r.rotation.y=n;const o=this._std(1910585,{roughness:.6}),a=this._std(1120295,{metalness:.4,roughness:.45});r.add(this._mesh(new Ct(.3,.32,.05,20),a,{y:.03})),r.add(this._mesh(new Ct(.04,.045,.34,12),a,{y:.22})),r.add(this._mesh(new z(.46,.09,.44),o,{y:.58,castShadow:!0}));const c=this._mesh(new z(.44,.6,.09),o,{y:1,z:-.23});c.rotation.x=-.1,r.add(c),r.add(this._mesh(new z(.3,.14,.07),o,{y:1.36,z:-.27})),r.add(this._mesh(new z(.44,.05,.1),this._std(s,{emissive:s,emissiveIntensity:.25}),{y:.82,z:-.24}));for(const l of[-1,1])r.add(this._mesh(new z(.05,.05,.3),o,{x:l*.27,y:.75,z:.02})),r.add(this._mesh(new z(.05,.14,.05),a,{x:l*.27,y:.66,z:.12}));return r}_buildReceptionStation(t){const e=new gt,n=this._stationSeat(t);e.add(this._buildChair(n.x,n.z,0,t.color));const s=ye(512,96);Ei(s.ctx,512,96,{title:"RECEPÇÃO & ATENDIMENTO",subtitle:"ORÇAMENTO POR E-MAIL • 1 DIA ÚTIL",accentHex:Ms(t.color)});const r=new xn(new cn({map:s.texture,transparent:!0,depthTest:!1}));r.scale.set(2.9,.54,1),r.position.set(t.x-3.5,2.3,t.z+.5),e.add(r),this.officeFloorGroup.add(e)}_buildHumanoidAgent(t){const e=Math.max(0,aa.findIndex(D=>D.slug===t.slug)),n=hp[t.slug]||{blazer:t.color||2450411,pants:1976635,shirt:16317180,tie:t.color||3718648,skin:ca[e%ca.length],hair:la[e%la.length],hairStyle:"quiff"},s=!!n.matrixGlasses,r=t.slug==="boss",o=n.skin,a=n.hair,c=n.blazer,l=n.shirt,h=t.color||n.tie,u=n.pants,d=new gt,p=this._stationSeat(t);d.position.set(p.x,0,p.z),d.rotation.y=vr.has(t.slug)?0:Math.PI,d.scale.setScalar(r?1.34:1.26),t.spawnOnHire&&(d.visible=!1);const m=D=>(D.userData.agentSlug=t.slug,D),g=new ae({color:h,side:2,transparent:!0,opacity:.85}),_=m(new zt(new Li(.45,.58,36),g));_.rotation.x=-Math.PI/2,_.position.y=.04,d.add(_);const f=new ae({color:xr.WORKING}),S=m(new zt(new si(.085,0),f));S.position.y=1.72,d.add(S);const M=ye(320,112);Sr(M.ctx,320,112,{name:t.slug,role:"",status:"IDLE",accentHex:Ms(h)});const x=m(new xn(new cn({map:M.texture,transparent:!0,depthTest:!1})));x.scale.set(1.08,.38,1),x.position.y=1.95+e%2*.14,d.add(x);const P=new gt;P.position.y=.64,d.add(m(P));const b=this._std(u,{roughness:.55}),C=m(this._mesh(new jt(.17,20,16),b,{castShadow:!0}));C.scale.set(1.04,.6,.8),P.add(C);const R=m(this._mesh(new Ke(.163,.02,8,28),this._std(1120295,{roughness:.32,metalness:.35}),{y:.075}));R.rotation.x=Math.PI/2,P.add(R),P.add(m(this._mesh(new z(.055,.036,.024),this._std(r?16436245:14147048,{metalness:.9,roughness:.12}),{y:.075,z:.158})));const E=D=>{const k=new gt;k.position.set(D*.098,-.02,0),P.add(m(k)),k.add(m(this._mesh(new Fe(.068,.27,6,16),b,{y:-.19,castShadow:!0})));const K=new gt;K.position.y=-.37,k.add(m(K)),K.add(m(this._mesh(new jt(.06,14,12),b))),K.add(m(this._mesh(new Fe(.052,.25,6,16),b,{y:-.19,castShadow:!0})));const V=new gt;V.position.set(0,-.385,.05),V.add(m(this._mesh(new z(.105,.055,.2),this._std(1251878,{roughness:.28,metalness:.3}),{y:.012})));const at=m(this._mesh(new jt(.052,14,12),this._std(1251878,{roughness:.28,metalness:.3}),{y:.012,z:.115}));return at.scale.set(1.02,.62,1.08),V.add(at),V.add(m(this._mesh(new z(.112,.02,.225),this._std(658966,{roughness:.5}),{y:-.026}))),K.add(V),{hip:k,knee:K}},v=E(-1),L=E(1),F=new gt;F.position.y=.08,P.add(m(F));const B=this._std(c,{roughness:.4,metalness:.18}),X=[[.02,0],[.192,0],[.186,.055],[.166,.13],[.17,.21],[.194,.31],[.199,.385],[.187,.45],[.152,.495],[.096,.52],[.076,.535]].map(([D,k])=>new it(D,k)),G=m(this._mesh(new Ds(X,30),B,{y:0,castShadow:!0}));G.scale.set(1.1,1,.76),F.add(G),F.add(m(this._mesh(new z(.155,.4,.048),this._std(l,{roughness:.5}),{y:.27,z:.135})));const q=this._std(c,{roughness:.34,metalness:.22}),j=m(this._mesh(new z(.058,.34,.034),q,{x:-.078,y:.325,z:.15}));j.rotation.z=-.2;const Y=m(this._mesh(new z(.058,.34,.034),q,{x:.078,y:.325,z:.15}));Y.rotation.z=.2,F.add(j,Y);const st=m(this._mesh(new z(.07,.045,.02),this._std(16777215,{roughness:.45}),{x:-.042,y:.505,z:.118}));st.rotation.z=.32;const ut=m(this._mesh(new z(.07,.045,.02),this._std(16777215,{roughness:.45}),{x:.042,y:.505,z:.118}));ut.rotation.z=-.32,F.add(st,ut);const yt=this._std(n.tie||h,{emissive:n.tie||h,emissiveIntensity:.28}),Nt=m(this._mesh(new z(.045,.045,.032),yt,{y:.462,z:.145}));Nt.rotation.x=-.12,F.add(Nt),F.add(m(this._mesh(new z(.062,.31,.034),yt,{y:.285,z:.152}))),F.add(m(this._mesh(new z(.05,.022,.018),this._std(n.tie||h,{emissive:n.tie||h,emissiveIntensity:.35}),{x:.115,y:.37,z:.148})));for(const D of[.13,.05])F.add(m(this._mesh(new jt(.011,10,10),this._std(856864,{metalness:.7,roughness:.25}),{y:D,z:.147})));r&&F.add(m(this._mesh(new si(.042,0),this._std(16436245,{emissive:15381256,emissiveIntensity:.65,metalness:.9}),{x:-.12,y:.41,z:.16}))),F.add(m(this._mesh(new Ct(.06,.072,.12,16),this._std(o,{roughness:.5}),{y:.56})));const xt=new gt;xt.position.y=.7,F.add(m(xt)),xt.scale.setScalar(.94);const $=this._std(o,{roughness:.46}),tt=m(this._mesh(new jt(.17,28,24),$,{castShadow:!0}));tt.scale.set(.97,1.05,.98),xt.add(tt);for(const D of[-1,1]){const k=m(this._mesh(new jt(.055,12,10),$,{x:D*.088,y:-.02,z:.108}));k.scale.set(.8,.7,.55),xt.add(k)}const _t=m(this._mesh(new jt(.1,18,14),$,{x:0,y:-.08,z:.038}));_t.scale.set(.88,.64,.78),xt.add(_t);for(const D of[-1,1])xt.add(m(this._mesh(new jt(.037,12,12),$,{x:D*.162,y:-.005,z:-.008})));const ot=m(this._mesh(new z(.022,.048,.024),$,{y:.002,z:.16}));ot.rotation.x=-.12,xt.add(ot),xt.add(m(this._mesh(new jt(.017,10,10),$,{y:-.022,z:.172})));const bt=m(new zt(new Ke(.03,.006,8,16,Math.PI*.8),this._std(9062975,{roughness:.6})));bt.position.set(0,-.05,.152),bt.rotation.z=-Math.PI/2-Math.PI*.8/2,xt.add(bt);const At=this._std(a,{roughness:.68,metalness:.06}),Ft=m(this._mesh(new jt(.184,26,20),At,{y:.048,z:-.024}));if(Ft.scale.set(1.02,.88,1.04),xt.add(Ft),n.hairStyle==="long"){xt.add(m(this._mesh(new z(.3,.3,.16),At,{y:-.06,z:-.088})));for(const D of[-1,1]){const k=m(this._mesh(new z(.058,.21,.09),At,{x:D*.148,y:-.065,z:.008}));k.rotation.z=D*.06,xt.add(k)}xt.add(m(this._mesh(new z(.2,.045,.08),At,{y:.13,z:.1})))}else if(n.hairStyle==="spiky")[[-.09,.15,.03,-.3],[-.03,.18,.07,-.1],[.05,.19,.04,.12],[.1,.15,.01,.34],[-.06,.16,-.06,-.2],[.04,.17,-.07,.1]].forEach(([k,K,V,at])=>{const nt=m(this._mesh(new In(.044,.1,8),At,{x:k,y:K,z:V}));nt.rotation.z=at,xt.add(nt)});else{const D=m(this._mesh(new z(.22,.05,.11),At,{y:.152,z:.088}));n.hairStyle==="quiff"&&(D.rotation.x=-.3),n.hairStyle==="parted"&&(D.rotation.z=.16),n.hairStyle==="slick"&&(D.rotation.x=-.12),xt.add(D),xt.add(m(this._mesh(new z(.12,.035,.09),At,{y:.16,z:.06})))}const ce=this._std(a,{roughness:.85}),Gt=new ae({color:16777215}),ue=new ae({color:h}),O=new ae({color:593174}),Ae=D=>{const k=new gt;return k.position.set(D*.058,.022,.15),xt.add(m(k)),k.add(m(this._mesh(new jt(.027,12,12),Gt))),k.add(m(this._mesh(new jt(.016,10,10),ue,{z:.015}))),k.add(m(this._mesh(new jt(.0095,8,8),O,{z:.023}))),k.add(m(this._mesh(new jt(.005,6,6),Gt,{x:.006,y:.006,z:.027}))),k},kt=Ae(-1),Vt=Ae(1);for(const D of[-1,1]){const k=m(this._mesh(new z(.056,.015,.016),ce,{x:D*.058,y:.062,z:.156}));k.rotation.z=-D*.1,xt.add(k)}if(s){const D=this._std(263946,{metalness:.9,roughness:.1}),k=this._std(65382,{emissive:65382,emissiveIntensity:.55});xt.add(m(this._mesh(new z(.115,.05,.026),D,{x:-.062,y:.025,z:.175}))),xt.add(m(this._mesh(new z(.115,.05,.026),D,{x:.062,y:.025,z:.175}))),xt.add(m(this._mesh(new z(.255,.013,.028),k,{x:0,y:.052,z:.176})))}else if(n.glasses){const D=this._std(988970,{metalness:.6,roughness:.3}),k=K=>{const V=new Da;V.moveTo(-.028,-.021),V.lineTo(.028,-.021),V.lineTo(.028,.021),V.lineTo(-.028,.021),V.closePath();const at=new Rs;at.moveTo(-.021,-.014),at.lineTo(.021,-.014),at.lineTo(.021,.014),at.lineTo(-.021,.014),at.closePath(),V.holes.push(at);const nt=m(new zt(new Or(V),D));nt.position.set(K*.062,.026,.178),xt.add(nt)};k(-1),k(1),xt.add(m(this._mesh(new z(.032,.008,.008),D,{x:0,y:.032,z:.178})));for(const K of[-1,1])xt.add(m(this._mesh(new z(.1,.008,.008),D,{x:K*.132,y:.032,z:.148})))}else if(n.headset){const D=this._std(988970,{metalness:.5,roughness:.35}),k=m(new zt(new Ke(.186,.012,8,24,Math.PI),D));k.position.set(0,.03,-.01),xt.add(k);for(const at of[-1,1]){const nt=m(this._mesh(new Ct(.045,.048,.028,16),D,{x:at*.188,y:-.005,z:-.008}));nt.rotation.z=Math.PI/2,xt.add(nt)}const K=m(this._mesh(new Ke(.028,.006,8,16),this._std(h,{emissive:h,emissiveIntensity:.55}),{x:.202,y:-.005,z:-.008}));K.rotation.y=Math.PI/2,xt.add(K);const V=m(this._mesh(new Fe(.006,.05,4,8),D,{x:.13,y:-.06,z:.09}));V.rotation.z=.9,xt.add(V),xt.add(m(this._mesh(new jt(.011,8,8),this._std(h,{emissive:h,emissiveIntensity:.6}),{x:.1,y:-.075,z:.105})))}const Tt=D=>{const k=new gt;k.position.set(D*.262,.462,0),F.add(m(k));const K=m(this._mesh(new jt(.078,16,14),B,{castShadow:!0}));K.scale.set(1,.9,.88),k.add(K),k.add(m(this._mesh(new Fe(.056,.17,6,14),B,{y:-.14,castShadow:!0})));const V=new gt;if(V.position.y=-.28,k.add(m(V)),V.add(m(this._mesh(new jt(.048,12,12),B))),V.add(m(this._mesh(new Fe(.045,.155,6,14),B,{y:-.12}))),V.add(m(this._mesh(new Fe(.047,.012,4,12),this._std(16317180,{roughness:.5}),{y:-.24}))),D===-1){const pt=m(new zt(new Ke(.035,.009,8,18),this._std(r?16436245:9741240,{metalness:.9,roughness:.18})));pt.rotation.x=Math.PI/2,pt.position.y=-.24,V.add(pt)}const at=this._std(o,{roughness:.5}),nt=m(this._mesh(new jt(.05,14,14),at,{y:-.295,castShadow:!0}));nt.scale.set(.8,.6,1),V.add(nt);const ft=m(this._mesh(new Fe(.02,.03,4,10),at,{y:-.312,z:.045}));ft.rotation.x=Math.PI/2,V.add(ft);const Ht=m(this._mesh(new Fe(.015,.032,4,8),at,{x:D*.038,y:-.285,z:.03}));Ht.rotation.z=D*.55,V.add(Ht);let Q=null;return D===1&&(Q=new gt,Q.position.set(0,-.315,.055),Q.add(m(this._mesh(new Ct(.04,.032,.09,14),this._std(16777215,{roughness:.25}),{y:0}))),Q.add(m(this._mesh(new Ct(.041,.036,.032,14),this._std(h,{emissive:h,emissiveIntensity:.25}),{y:0}))),V.add(Q)),{shoulder:k,elbow:V,coffeeCup:Q}},ee=Tt(-1),wt=Tt(1);this.officeFloorGroup.add(d);const T=lp[t.slug]||{x:(e%2===0?-1:1)*(2.5+e),y:4.38,z:-14.2,rotY:0,pose:"STANDING",hasCoffee:!0},y={slug:t.slug,idx:e,group:d,pos:{x:p.x,y:0,z:p.z},pelvisPivot:P,hipL:v.hip,kneeL:v.knee,hipR:L.hip,kneeR:L.knee,torsoPivot:F,torso:G,headGroup:xt,eyeL:kt,eyeR:Vt,blinkAt:this._t+1+Math.random()*4,shoulderL:ee.shoulder,elbowL:ee.elbow,shoulderR:wt.shoulder,elbowR:wt.elbow,coffeeCup:wt.coffeeCup,beacon:S,beaconMat:f,statusRingMat:g,screenMats:t.screenMats||[],badgeCtx:M.ctx,badgeTexture:M.texture,accentHex:Ms(h),status:"IDLE",agentData:null,station:{x:p.x,y:0,z:p.z,rotY:vr.has(t.slug)?0:Math.PI,pose:"SEATED"},rooftop:T,seat:ei[t.slug]?{x:ei[t.slug].x,y:0,z:ei[t.slug].z,rotY:ei[t.slug].rotY,pose:"SEATED"}:{x:(e%5-2)*1.5,y:0,z:5.2,rotY:Math.PI,pose:"SEATED"},phase:e*1.37,ang:{pelvisY:.64,hipLx:-Math.PI/2,kneeLx:Math.PI/2,hipRx:-Math.PI/2,kneeRx:Math.PI/2,torsoX:0,torsoY:0,headX:0,headY:0,shLx:.15,shLz:.06,elLx:-.3,shRx:.15,shRz:-.06,elRx:-.3}};this.agentMap.set(t.slug,y)}updateAgentsFromBackend(t){t.forEach(e=>{let n=this.agentMap.get(e.slug);const s=cp[e.slug],r=(s==null?void 0:s.x)??e.home_x,o=(s==null?void 0:s.z)??e.home_z;if(!n){const c=e.accent_color?parseInt(e.accent_color.replace("#",""),16):65382,l={slug:e.slug,name:(e.department_name||e.role_title||e.name).toUpperCase(),x:typeof r=="number"?r:8.5,z:typeof o=="number"?o:0,color:c,dynamic:!0};this._buildWorkstationZone(l),this._buildHumanoidAgent(l),n=this.agentMap.get(e.slug)}if(!n)return;n.agentData=e,n.group.visible=(e.lifecycle_status||"ACTIVE")==="ACTIVE",typeof r=="number"&&typeof o=="number"&&(this._homes=this._homes||{},this._homes[e.slug]={x:r,z:o},n.station={x:r,y:0,z:o+.15,rotY:vr.has(e.slug)?0:Math.PI,pose:"SEATED"});const a=this.demoPreviewMode?"WORKING":e.status||"IDLE";this._applyVisualStatus(n,a),Sr(n.badgeCtx,320,112,{name:e.name||n.slug,role:e.department_name||e.role_title||"",status:a,accentHex:n.accentHex}),n.badgeTexture.needsUpdate=!0})}setDemoPreviewMode(t){this.demoPreviewMode=t,this.agentMap.forEach(e=>{const n=t?"WORKING":e.agentData?e.agentData.status:"IDLE";this._applyVisualStatus(e,n),e.agentData&&(Sr(e.badgeCtx,320,112,{name:e.agentData.name||e.slug,role:e.agentData.department_name||e.agentData.role_title||"",status:n,accentHex:e.accentHex}),e.badgeTexture.needsUpdate=!0)})}setMeetingMode(t){this.meetingMode=!!t}_applyVisualStatus(t,e){t.status=e;const n=xr[e]||xr.IDLE;t.statusRingMat.color.setHex(n),t.beaconMat.color.setHex(n),e==="WORKING"?t.screenMats.forEach(s=>s.color.setHex(3718648)):e==="WAITING_APPROVAL"?t.screenMats.forEach(s=>s.color.setHex(16096779)):e==="ERROR"?t.screenMats.forEach(s=>s.color.setHex(15680580)):t.screenMats.forEach((s,r)=>s.color.setHex(r===0?1976635:1581620))}_sipCurve(t){if(t<=.42||t>=.82)return 0;const s=(t-.42)/(.82-.42),r=o=>o*o*(3-2*o);return s<.3?r(s/.3):s>.7?r((1-s)/.3):1}_poseTargets(t,e,n,s,r){var l;const{phase:o}=t,a=!n&&s==="STANDING";t._sip=0;const c={pelvisY:a?.72:r?.55:.64,hipLx:0,kneeLx:.07,hipRx:0,kneeRx:.07,torsoX:.02,torsoY:0,headX:.04,headY:0,shLx:.14,shLz:.08,elLx:-.32,shRx:.14,shRz:-.08,elRx:-.32};if(n){const h=Math.sin(e*9.5+o);c.hipLx=h*.5,c.hipRx=-h*.5,c.kneeLx=Math.max(.08,-h*.7),c.kneeRx=Math.max(.08,h*.7)}else if(a){const h=Math.sin(e*.8+o);c.hipLx=-.05+h*.02,c.hipRx=-.03-h*.02,c.kneeLx=.07,c.kneeRx=.07}else c.hipLx=-1.52,c.kneeLx=1.54,c.hipRx=-1.5,c.kneeRx=1.56;if(n){const h=Math.sin(e*9.5+o);c.torsoX=.09,c.torsoY=-h*.22,c.headX=.05,c.headY=Math.sin(e*1.4+o)*.06;const u=h*.4;return c.shLx=-u-.05,c.shRx=u-.05,c.shLz=.1,c.shRz=-.1,c.elLx=-.45,c.elRx=-.45,c}switch(t.status){case"WORKING":{if(a)c.headY=Math.sin(e*.7+o)*.12;else{const h=.45+.55*(.5+.5*Math.sin(e*.55+o*1.7)),u=Math.pow(Math.max(0,Math.sin(e*10.6+o)),3),d=Math.pow(Math.max(0,Math.sin(e*10.6+o+1.05)),3);c.torsoX=.13,c.headX=.25+Math.sin(e*.6+o)*.045,c.headY=Math.sin(e*.8+o)*.12+Math.sin(e*.23+o)*.06,c.shLx=-1.02+.04*Math.sin(e*2.3+o),c.shLz=.13,c.elLx=-.7-u*.17*h-.1*(1-h),c.shRx=-1.02+.04*Math.cos(e*2.3+o),c.shRz=-.13,c.elRx=-.7-d*.17*h-.1*(1-h)}break}case"WAITING_APPROVAL":{c.torsoX=-.02,c.headX=-.16+Math.sin(e*.9+o)*.03,c.headY=Math.sin(e*1.2+o)*.1,c.shLx=.16,c.shLz=.08,c.elLx=-.34,c.shRx=-2.35+Math.sin(e*2.6+o)*.09,c.shRz=-.28,c.elRx=-.4+Math.sin(e*2.6+o+.8)*.08;break}case"BLOCKED":{c.torsoX=.2,c.headX=.36+Math.sin(e*.7+o)*.02,c.shLx=-.62+Math.sin(e*.8+o)*.02,c.shLz=.9,c.elLx=-1.35,c.shRx=-.62,c.shRz=-.9,c.elRx=-1.35;break}case"ERROR":{c.torsoX=-.08,c.headX=-.06,c.headY=Math.sin(e*8+o)*.3,c.shLx=-.45+Math.sin(e*8+o)*.06,c.shLz=.6,c.elLx=-.95,c.shRx=-.45-Math.sin(e*8+o)*.06,c.shRz=-.6,c.elRx=-.95;break}case"IDLE":default:{const h=!!((l=t.rooftop)!=null&&l.hasCoffee);if(r){const u=h?this._sipCurve((e+o*2.1)%10/10):0;if(t._sip=u,a){const d=Math.sin(e*.5+o);c.pelvisY=.72+Math.abs(d)*.008,c.hipLx=-.03+d*.015,c.hipRx=.03-d*.015,c.torsoX=-.03,c.headX=-.04-u*.1+Math.sin(e*.4+o)*.02,c.headY=Math.sin(e*.35+o)*.3+Math.sin(e*.13+o)*.15,c.shLx=.1,c.shLz=.09,c.elLx=-.3,h?(c.shRx=-.2-u*1,c.shRz=-.12,c.elRx=-.55-u*.75):(c.shRx=.12,c.shRz=-.09,c.elRx=-.3)}else c.torsoX=-.08,c.headX=-.02-u*.12+Math.sin(e*.45+o)*.03,c.headY=Math.sin(e*.4+o)*.22+Math.sin(e*.16+o)*.1,c.shLx=-.75,c.shLz=.16,c.elLx=-.5,h?(c.shRx=-.5-u*.7,c.shRz=-.14,c.elRx=-.9-u*.45):(c.shRx=-.55,c.shRz=-.16,c.elRx=-.55)}else{const u=.35+.4*(.5+.5*Math.sin(e*.4+o*2.3)),d=Math.pow(Math.max(0,Math.sin(e*8.2+o)),3),p=Math.pow(Math.max(0,Math.sin(e*8.2+o+.9)),3);c.torsoX=.1,c.headX=.22+Math.sin(e*.5+o)*.05,c.headY=Math.sin(e*.55+o)*.15+Math.sin(e*.2+o*1.9)*.1,c.shLx=-.95+.04*Math.sin(e*2+o),c.shLz=.12,c.elLx=-.72-d*.14*u-.08*(1-u),c.shRx=-.95+.04*Math.cos(e*2+o),c.shRz=-.12,c.elRx=-.72-p*.14*u-.08*(1-u)}break}}return c}_bindInteractions(){let t=!1,e={x:0,y:0},n={x:0,y:0},s="pan";const r=this.renderer.domElement;r.addEventListener("contextmenu",o=>o.preventDefault()),r.addEventListener("pointerdown",o=>{if(o.button!==0&&o.button!==2)return;t=!0,s=o.button===2||o.shiftKey?"rotate":"pan",e={x:o.clientX,y:o.clientY},n={x:o.clientX,y:o.clientY};const a=this._cameraTransitionCancel;this._cameraTransitionCancel=null,this._cameraTransitionId=(this._cameraTransitionId??0)+1,a==null||a(),r.style.cursor="grabbing"}),window.addEventListener("pointermove",o=>{if(!t)return;const a=o.clientX-e.x,c=o.clientY-e.y;if(e={x:o.clientX,y:o.clientY},s==="rotate"){const l=new tp().setFromVector3(this.sphericalOffset);l.theta-=a*.006,l.phi=Ss.clamp(l.phi+c*.006,.2,1.48),this.sphericalOffset.setFromSpherical(l)}else{const l=.032/this.zoomLevel,h=new A().subVectors(this.cameraTarget,this.camera.position);h.y=0,h.normalize();const u=new A().crossVectors(h,new A(0,1,0)).normalize();this.cameraTarget.addScaledVector(u,-a*l),this.cameraTarget.addScaledVector(h,c*l),this.cameraTarget.x=Math.max(-14,Math.min(14,this.cameraTarget.x)),this.cameraTarget.z=Math.max(-18,Math.min(24,this.cameraTarget.z))}this._updateCameraTransform()}),window.addEventListener("pointerup",o=>{if(!t)return;t=!1;const a=Math.hypot(o.clientX-n.x,o.clientY-n.y);r.style.cursor="grab",a<6&&s==="pan"&&o.button===0&&this._handlePick(o)}),r.addEventListener("wheel",o=>{o.preventDefault();const a=o.deltaY<0?1.1:.9;this.zoomLevel=Math.max(.55,Math.min(2.6,this.zoomLevel*a)),this._updateCameraTransform()},{passive:!1}),r.style.cursor="grab",window.addEventListener("resize",()=>{const o=this.container.clientWidth,a=Math.max(1,this.container.clientHeight),c=o/a;this.camera.left=-this.frustumSize*c/2,this.camera.right=this.frustumSize*c/2,this.camera.top=this.frustumSize/2,this.camera.bottom=-this.frustumSize/2,this.camera.updateProjectionMatrix(),this.renderer.setSize(o,a)})}_handlePick(t){var s;const e=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const n=this.raycaster.intersectObjects(this.scene.children,!0);for(const r of n){let o=r.object;for(;o;){if(o.userData&&o.userData.agentSlug){const a=this.agentMap.get(o.userData.agentSlug);a&&a.agentData&&this.onSelectAgent&&this.onSelectAgent(a.agentData);return}if(o.userData&&o.userData.storeId){(s=this.onSelectStore)==null||s.call(this,o.userData.storeId);return}o=o.parent}}}_animate(){var o;if(!this._rafActive||(requestAnimationFrame(this._animate),document.hidden))return;const t=Math.min(this.clock.getDelta(),.1);this._t+=t;const e=this._t;this.hubRingMat&&(this.hubRingMat.opacity=.55+Math.sin(e*2.2)*.3),this.holoCore&&(this.holoCore.rotation.y=e*1.4,this.holoCore.position.y=1.38+Math.sin(e*2.4)*.05),this.atlasHoloGem&&(this.atlasHoloGem.rotation.y=-e*1.1,this.atlasHoloGem.position.y=1.75+Math.sin(e*1.8)*.06);const n=Math.min(1,t*8),s=Math.floor(e/28)%6,r=(s+3)%6;this.agentMap.forEach(a=>{var C;const c=a.group,l=a.idx%6===s||a.idx%6===r,h=!this.meetingMode&&!this.demoPreviewMode&&a.status==="IDLE"&&a.slug!=="boss"&&a.slug!=="atlas"&&l&&!!a.rooftop,u=this.meetingMode?a.seat:h?a.rooftop:a.station,d=typeof u.y=="number"?u.y:0;a.pos||(a.pos={x:c.position.x,y:c.position.y,z:c.position.z});const p=u.x-a.pos.x,m=d-a.pos.y,g=u.z-a.pos.z,_=Math.hypot(p,m,g),f=_>.04;if(f){const R=Math.min(_,5.2*t);a.pos.x+=p/_*R,a.pos.y+=m/_*R,a.pos.z+=g/_*R,c.position.x=a.pos.x,c.position.z=a.pos.z,c.position.y=a.pos.y+Math.abs(Math.sin(e*10+a.phase))*.04;let v=(Math.atan2(p,g)-c.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;c.rotation.y+=v*Math.min(1,t*8)}else{a.pos.x=u.x,a.pos.y=d,a.pos.z=u.z,c.position.x=u.x,c.position.y=d,c.position.z=u.z;let R=(u.rotY-c.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;Math.abs(R)>.003?c.rotation.y+=R*n:c.rotation.y=u.rotY}const S=h&&!f;a.coffeeCup&&(a.coffeeCup.visible=S&&!!((C=a.rooftop)!=null&&C.hasCoffee)),!S&&!f&&a.status==="IDLE"&&a.screenMats.forEach((R,E)=>R.color.setHex(E===0?959977:1976635));const M=this._poseTargets(a,e,f,u.pose||"SEATED",S),x=a.ang;for(const R of Object.keys(x))typeof M[R]=="number"&&(x[R]+=(M[R]-x[R])*n);a.pelvisPivot&&(a.pelvisPivot.position.y=x.pelvisY),a.hipL&&(a.hipL.rotation.x=x.hipLx),a.kneeL&&(a.kneeL.rotation.x=x.kneeLx),a.hipR&&(a.hipR.rotation.x=x.hipRx),a.kneeR&&(a.kneeR.rotation.x=x.kneeRx),a.torsoPivot.rotation.x=x.torsoX,a.torsoPivot.rotation.y=x.torsoY;const P=Math.sin(e*1.55+a.phase);a.torso.scale.set(1.1*(1-P*.012),1+P*.02,.76*(1+P*.014)),a.headGroup.rotation.x=x.headX,a.headGroup.rotation.y=x.headY,a.shoulderL.rotation.x=x.shLx,a.shoulderL.rotation.z=x.shLz,a.elbowL.rotation.x=x.elLx,a.shoulderR.rotation.x=x.shRx,a.shoulderR.rotation.z=x.shRz,a.elbowR.rotation.x=x.elRx;const b=Math.sin(e*.55+a.phase);if(a.headGroup.rotation.z=b*.022,a.torsoPivot.rotation.z=b*.012,a.eyeL&&a.eyeR){let R=1;if(e>=a.blinkAt){const E=(e-a.blinkAt)/.22;E>=1?a.blinkAt=e+1.8+Math.random()*4.2:(R=E<.5?1-E*2:(E-.5)*2,R=.06+.94*R)}a.eyeL.scale.y=R,a.eyeR.scale.y=R}a.coffeeCup&&(a.coffeeCup.rotation.x=(a._sip||0)*.55),a.beacon.rotation.y=e*2.2+a.phase,a.status==="WAITING_APPROVAL"?a.beacon.position.y=1.72+Math.sin(e*5)*.07:a.beacon.position.y+=(1.72-a.beacon.position.y)*n}),(o=this.automotiveCampus)==null||o.update(t,e),this.renderer.render(this.scene,this.camera)}}function fp(i){return typeof i=="number"?i:parseInt(i.replace("#",""),16)}export{Mr as BOARDROOM,Cn as EXECUTIVE_ROOM,cp as OFFICE_STATION_LAYOUT,pp as Office3DScene};
