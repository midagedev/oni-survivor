(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const Vh="185",up=0,kc=1,dp=2,Zr=1,fp=2,La=3,kn=0,vi=1,di=2,nn=0,sn=1,We=2,Nc=3,zc=4,pp=5,Qn=100,mp=101,gp=102,vp=103,xp=104,_p=200,bp=201,yp=202,Mp=203,Bl=204,Hl=205,wp=206,Sp=207,Ap=208,Tp=209,Ep=210,Cp=211,Rp=212,Pp=213,Lp=214,Gl=0,Vl=1,Wl=2,Ks=3,Xl=4,ql=5,$l=6,jl=7,Kd=0,Fp=1,Dp=2,an=0,Wh=1,Xh=2,qh=3,Mo=4,$h=5,jh=6,Zh=7,Yd=300,rs=301,Ys=302,Po=303,Lo=304,wo=306,bn=1e3,Gi=1001,Zl=1002,oe=1003,Wa=1004,Ja=1005,li=1006,Fo=1007,is=1008,Fi=1009,Jd=1010,Qd=1011,Ua=1012,Kh=1013,rn=1014,Vi=1015,Si=1016,Yh=1017,Jh=1018,ka=1020,tf=35902,ef=35899,nf=1021,sf=1022,Wi=1023,yn=1026,ns=1027,Qh=1028,tc=1029,os=1030,ec=1031,ic=1033,Kr=33776,Yr=33777,Jr=33778,Qr=33779,Kl=35840,Yl=35841,Jl=35842,Ql=35843,th=36196,eh=37492,ih=37496,nh=37488,sh=37489,ro=37490,ah=37491,rh=37808,oh=37809,lh=37810,hh=37811,ch=37812,uh=37813,dh=37814,fh=37815,ph=37816,mh=37817,gh=37818,vh=37819,xh=37820,_h=37821,bh=36492,yh=36494,Mh=36495,wh=36283,Sh=36284,oo=36285,Ah=36286,Ip=3200,Oc=0,Up=1,Ln="",Se="srgb",lo="srgb-linear",ho="linear",ae="srgb",ms=7680,Bc=519,kp=512,Np=513,zp=514,nc=515,Op=516,Bp=517,sc=518,Hp=519,Th=35044,Tt=35048,Hc="300 es",en=2e3,co=2001;function Gp(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Na(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Vp(){const a=Na("canvas");return a.style.display="block",a}const Gc={};function uo(...a){const t="THREE."+a.shift();console.log(t,...a)}function af(a){const t=a[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=a[1];e&&e.isStackTrace?a[0]+=" "+e.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function kt(...a){a=af(a);const t="THREE."+a.shift();{const e=a[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...a)}}function Jt(...a){a=af(a);const t="THREE."+a.shift();{const e=a[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...a)}}function qs(...a){const t=a.join(" ");t in Gc||(Gc[t]=!0,kt(...a))}function Wp(a,t,e){return new Promise(function(i,n){function s(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Xp={[Gl]:Vl,[Wl]:$l,[Xl]:jl,[Ks]:ql,[Vl]:Gl,[$l]:Wl,[jl]:Xl,[ql]:Ks};class cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,t);t.target=null}}}const ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Do=Math.PI/180,Eh=180/Math.PI;function Un(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ii[a&255]+ii[a>>8&255]+ii[a>>16&255]+ii[a>>24&255]+"-"+ii[t&255]+ii[t>>8&255]+"-"+ii[t>>16&15|64]+ii[t>>24&255]+"-"+ii[e&63|128]+ii[e>>8&255]+"-"+ii[e>>16&255]+ii[e>>24&255]+ii[i&255]+ii[i>>8&255]+ii[i>>16&255]+ii[i>>24&255]).toLowerCase()}function Kt(a,t,e){return Math.max(t,Math.min(e,a))}function qp(a,t){return(a%t+t)%t}function Io(a,t,e){return(1-e)*a+e*t}function tn(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ue(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class vt{static{vt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*n+t.x,this.y=s*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class na{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,r,o){let l=i[n+0],h=i[n+1],c=i[n+2],u=i[n+3],d=s[r+0],f=s[r+1],m=s[r+2],v=s[r+3];if(u!==v||l!==d||h!==f||c!==m){let g=l*d+h*f+c*m+u*v;g<0&&(d=-d,f=-f,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){const w=Math.acos(g),T=Math.sin(w);p=Math.sin(p*w)/T,o=Math.sin(o*w)/T,l=l*p+d*o,h=h*p+f*o,c=c*p+m*o,u=u*p+v*o}else{l=l*p+d*o,h=h*p+f*o,c=c*p+m*o,u=u*p+v*o;const w=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=w,h*=w,c*=w,u*=w}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,r){const o=i[n],l=i[n+1],h=i[n+2],c=i[n+3],u=s[r],d=s[r+1],f=s[r+2],m=s[r+3];return t[e]=o*m+c*u+l*f-h*d,t[e+1]=l*m+c*d+h*u-o*f,t[e+2]=h*m+c*f+o*d-l*u,t[e+3]=c*m-o*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),m=l(s/2);switch(r){case"XYZ":this._x=d*c*u+h*f*m,this._y=h*f*u-d*c*m,this._z=h*c*m+d*f*u,this._w=h*c*u-d*f*m;break;case"YXZ":this._x=d*c*u+h*f*m,this._y=h*f*u-d*c*m,this._z=h*c*m-d*f*u,this._w=h*c*u+d*f*m;break;case"ZXY":this._x=d*c*u-h*f*m,this._y=h*f*u+d*c*m,this._z=h*c*m+d*f*u,this._w=h*c*u-d*f*m;break;case"ZYX":this._x=d*c*u-h*f*m,this._y=h*f*u+d*c*m,this._z=h*c*m-d*f*u,this._w=h*c*u+d*f*m;break;case"YZX":this._x=d*c*u+h*f*m,this._y=h*f*u+d*c*m,this._z=h*c*m-d*f*u,this._w=h*c*u-d*f*m;break;case"XZY":this._x=d*c*u-h*f*m,this._y=h*f*u-d*c*m,this._z=h*c*m+d*f*u,this._w=h*c*u+d*f*m;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(s-h)*f,this._z=(r-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(c-l)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+h)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(s-h)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(r-n)/f,this._x=(s+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,r=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+r*o+n*h-s*l,this._y=n*c+r*l+s*o-i*h,this._z=s*c+r*h+i*l-n*o,this._w=r*c-i*o-n*l-s*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,r=-r,o=-o);let l=1-e;if(o<.9995){const h=Math.acos(o),c=Math.sin(h);l=Math.sin(l*h)/c,e=Math.sin(e*h)/c,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{static{L.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,r=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,r=t.y,o=t.z,l=t.w,h=2*(r*n-o*i),c=2*(o*e-s*n),u=2*(s*i-r*e);return this.x=e+l*h+r*u-o*c,this.y=i+l*c+o*h-s*u,this.z=n+l*u+s*c-r*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,r=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*r-i*l,this.z=i*o-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Uo.copy(this).projectOnVector(t),this.sub(Uo)}reflect(t){return this.sub(Uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uo=new L,Vc=new na;class Ot{static{Ot.prototype.isMatrix3=!0}constructor(t,e,i,n,s,r,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,o,l,h)}set(t,e,i,n,s,r,o,l,h){const c=this.elements;return c[0]=t,c[1]=n,c[2]=o,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=r,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,r=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],f=i[5],m=i[8],v=n[0],g=n[3],p=n[6],w=n[1],T=n[4],M=n[7],A=n[2],y=n[5],E=n[8];return s[0]=r*v+o*w+l*A,s[3]=r*g+o*T+l*y,s[6]=r*p+o*M+l*E,s[1]=h*v+c*w+u*A,s[4]=h*g+c*T+u*y,s[7]=h*p+c*M+u*E,s[2]=d*v+f*w+m*A,s[5]=d*g+f*T+m*y,s[8]=d*p+f*M+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*r*c-e*o*h-i*s*c+i*o*l+n*s*h-n*r*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*r-o*h,d=o*l-c*s,f=h*s-r*l,m=e*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=u*v,t[1]=(n*h-c*i)*v,t[2]=(o*i-n*r)*v,t[3]=d*v,t[4]=(c*e-n*l)*v,t[5]=(n*s-o*e)*v,t[6]=f*v,t[7]=(i*l-h*e)*v,t[8]=(r*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,r,o){const l=Math.cos(s),h=Math.sin(s);return this.set(i*l,i*h,-i*(l*r+h*o)+r+t,-n*h,n*l,-n*(-h*r+l*o)+o+e,0,0,1),this}scale(t,e){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ko.makeScale(t,e)),this}rotate(t){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ko.makeRotation(-t)),this}translate(t,e){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new Ot,Wc=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $p(){const a={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(n,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ae&&(n.r=_n(n.r),n.g=_n(n.g),n.b=_n(n.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ae&&(n.r=$s(n.r),n.g=$s(n.g),n.b=$s(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ln?ho:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,r){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[lo]:{primaries:t,whitePoint:i,transfer:ho,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}}),a}const Zt=$p();function _n(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function $s(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let gs;class jp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{gs===void 0&&(gs=Na("canvas")),gs.width=t.width,gs.height=t.height;const n=gs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=gs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Na("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=_n(s[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_n(e[i]/255)*255):e[i]=_n(e[i]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zp=0;class ac{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Un(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?s.push(No(n[r].image)):s.push(No(n[r]))}else s=No(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function No(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?jp.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}let Kp=0;const zo=new L;class ti extends cs{constructor(t=ti.DEFAULT_IMAGE,e=ti.DEFAULT_MAPPING,i=Gi,n=Gi,s=li,r=is,o=Wi,l=Fi,h=ti.DEFAULT_ANISOTROPY,c=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Un(),this.name="",this.source=new ac(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zo).x}get height(){return this.source.getSize(zo).y}get depth(){return this.source.getSize(zo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bn:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case Zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bn:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case Zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=Yd;ti.DEFAULT_ANISOTROPY=1;class Le{static{Le.prototype.isVector4=!0}constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(h+1)/2,M=(f+1)/2,A=(p+1)/2,y=(c+d)/4,E=(u+v)/4,x=(m+g)/4;return T>M&&T>A?T<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(T),n=y/i,s=E/i):M>A?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=y/n,s=x/n):A<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(A),i=E/s,n=x/s),this.set(i,n,s,e),this}let w=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-c)*(d-c));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(u-v)/w,this.z=(d-c)/w,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yp extends cs{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];const n={width:t,height:e,depth:i.depth},s=new ti(n),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:li,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new ac(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Yp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class rf extends ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=oe,this.minFilter=oe,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jp extends ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=oe,this.minFilter=oe,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class me{static{me.prototype.isMatrix4=!0}constructor(t,e,i,n,s,r,o,l,h,c,u,d,f,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,o,l,h,c,u,d,f,m,v,g)}set(t,e,i,n,s,r,o,l,h,c,u,d,f,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=r,p[9]=o,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/vs.setFromMatrixColumn(t,0).length(),s=1/vs.setFromMatrixColumn(t,1).length(),r=1/vs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=r*c,f=r*u,m=o*c,v=o*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+m*h,e[5]=d-v*h,e[9]=-o*l,e[2]=v-d*h,e[6]=m+f*h,e[10]=r*l}else if(t.order==="YXZ"){const d=l*c,f=l*u,m=h*c,v=h*u;e[0]=d+v*o,e[4]=m*o-f,e[8]=r*h,e[1]=r*u,e[5]=r*c,e[9]=-o,e[2]=f*o-m,e[6]=v+d*o,e[10]=r*l}else if(t.order==="ZXY"){const d=l*c,f=l*u,m=h*c,v=h*u;e[0]=d-v*o,e[4]=-r*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=r*c,e[9]=v-d*o,e[2]=-r*h,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const d=r*c,f=r*u,m=o*c,v=o*u;e[0]=l*c,e[4]=m*h-f,e[8]=d*h+v,e[1]=l*u,e[5]=v*h+d,e[9]=f*h-m,e[2]=-h,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*h,m=o*l,v=o*h;e[0]=l*c,e[4]=v-d*u,e[8]=m*u+f,e[1]=u,e[5]=r*c,e[9]=-o*c,e[2]=-h*c,e[6]=f*u+m,e[10]=d-v*u}else if(t.order==="XZY"){const d=r*l,f=r*h,m=o*l,v=o*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+v,e[5]=r*c,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*c,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qp,t,tm)}lookAt(t,e,i){const n=this.elements;return bi.subVectors(t,e),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),An.crossVectors(i,bi),An.lengthSq()===0&&(Math.abs(i.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),An.crossVectors(i,bi)),An.normalize(),Qa.crossVectors(bi,An),n[0]=An.x,n[4]=Qa.x,n[8]=bi.x,n[1]=An.y,n[5]=Qa.y,n[9]=bi.y,n[2]=An.z,n[6]=Qa.z,n[10]=bi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,r=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],f=i[13],m=i[2],v=i[6],g=i[10],p=i[14],w=i[3],T=i[7],M=i[11],A=i[15],y=n[0],E=n[4],x=n[8],b=n[12],R=n[1],P=n[5],D=n[9],W=n[13],$=n[2],z=n[6],V=n[10],k=n[14],K=n[3],tt=n[7],at=n[11],ut=n[15];return s[0]=r*y+o*R+l*$+h*K,s[4]=r*E+o*P+l*z+h*tt,s[8]=r*x+o*D+l*V+h*at,s[12]=r*b+o*W+l*k+h*ut,s[1]=c*y+u*R+d*$+f*K,s[5]=c*E+u*P+d*z+f*tt,s[9]=c*x+u*D+d*V+f*at,s[13]=c*b+u*W+d*k+f*ut,s[2]=m*y+v*R+g*$+p*K,s[6]=m*E+v*P+g*z+p*tt,s[10]=m*x+v*D+g*V+p*at,s[14]=m*b+v*W+g*k+p*ut,s[3]=w*y+T*R+M*$+A*K,s[7]=w*E+T*P+M*z+A*tt,s[11]=w*x+T*D+M*V+A*at,s[15]=w*b+T*W+M*k+A*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],r=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15],w=l*f-h*d,T=o*f-h*u,M=o*d-l*u,A=r*f-h*c,y=r*d-l*c,E=r*u-o*c;return e*(v*w-g*T+p*M)-i*(m*w-g*A+p*y)+n*(m*T-v*A+p*E)-s*(m*M-v*y+g*E)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],r=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return e*(r*c-o*h)-i*(s*c-o*l)+n*(s*h-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],w=e*o-i*r,T=e*l-n*r,M=e*h-s*r,A=i*l-n*o,y=i*h-s*o,E=n*h-s*l,x=c*v-u*m,b=c*g-d*m,R=c*p-f*m,P=u*g-d*v,D=u*p-f*v,W=d*p-f*g,$=w*W-T*D+M*P+A*R-y*b+E*x;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/$;return t[0]=(o*W-l*D+h*P)*z,t[1]=(n*D-i*W-s*P)*z,t[2]=(v*E-g*y+p*A)*z,t[3]=(d*y-u*E-f*A)*z,t[4]=(l*R-r*W-h*b)*z,t[5]=(e*W-n*R+s*b)*z,t[6]=(g*M-m*E-p*T)*z,t[7]=(c*E-d*M+f*T)*z,t[8]=(r*D-o*R+h*x)*z,t[9]=(i*R-e*D-s*x)*z,t[10]=(m*y-v*M+p*w)*z,t[11]=(u*M-c*y-f*w)*z,t[12]=(o*b-r*P-l*x)*z,t[13]=(e*P-i*b+n*x)*z,t[14]=(v*T-m*A-g*w)*z,t[15]=(c*A-u*T+d*w)*z,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,r=t.x,o=t.y,l=t.z,h=s*r,c=s*o;return this.set(h*r+i,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+i,c*l-n*r,0,h*l-n*o,c*l+n*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,r){return this.set(1,i,s,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,r=e._y,o=e._z,l=e._w,h=s+s,c=r+r,u=o+o,d=s*h,f=s*c,m=s*u,v=r*c,g=r*u,p=o*u,w=l*h,T=l*c,M=l*u,A=i.x,y=i.y,E=i.z;return n[0]=(1-(v+p))*A,n[1]=(f+M)*A,n[2]=(m-T)*A,n[3]=0,n[4]=(f-M)*y,n[5]=(1-(d+p))*y,n[6]=(g+w)*y,n[7]=0,n[8]=(m+T)*E,n[9]=(g-w)*E,n[10]=(1-(d+v))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let r=vs.set(n[0],n[1],n[2]).length();const o=vs.set(n[4],n[5],n[6]).length(),l=vs.set(n[8],n[9],n[10]).length();s<0&&(r=-r),ki.copy(this);const h=1/r,c=1/o,u=1/l;return ki.elements[0]*=h,ki.elements[1]*=h,ki.elements[2]*=h,ki.elements[4]*=c,ki.elements[5]*=c,ki.elements[6]*=c,ki.elements[8]*=u,ki.elements[9]*=u,ki.elements[10]*=u,e.setFromRotationMatrix(ki),i.x=r,i.y=o,i.z=l,this}makePerspective(t,e,i,n,s,r,o=en,l=!1){const h=this.elements,c=2*s/(e-t),u=2*s/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n);let m,v;if(l)m=s/(r-s),v=r*s/(r-s);else if(o===en)m=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(o===co)m=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=u,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,n,s,r,o=en,l=!1){const h=this.elements,c=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n);let m,v;if(l)m=1/(r-s),v=r/(r-s);else if(o===en)m=-2/(r-s),v=-(r+s)/(r-s);else if(o===co)m=-1/(r-s),v=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=u,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=m,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const vs=new L,ki=new me,Qp=new L(0,0,0),tm=new L(1,1,1),An=new L,Qa=new L,bi=new L,qc=new me,$c=new na;class ls{constructor(t=0,e=0,i=0,n=ls.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],r=n[4],o=n[8],l=n[1],h=n[5],c=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $c.setFromEuler(this),this.setFromQuaternion($c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ls.DEFAULT_ORDER="XYZ";class of{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let em=0;const jc=new L,xs=new na,ln=new me,tr=new L,ca=new L,im=new L,nm=new na,Zc=new L(1,0,0),Kc=new L(0,1,0),Yc=new L(0,0,1),Jc={type:"added"},sm={type:"removed"},_s={type:"childadded",child:null},Oo={type:"childremoved",child:null};class Ze extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const t=new L,e=new ls,i=new na,n=new L(1,1,1);function s(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new me},normalMatrix:{value:new Ot}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(Zc,t)}rotateY(t){return this.rotateOnAxis(Kc,t)}rotateZ(t){return this.rotateOnAxis(Yc,t)}translateOnAxis(t,e){return jc.copy(t).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zc,t)}translateY(t){return this.translateOnAxis(Kc,t)}translateZ(t){return this.translateOnAxis(Yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?tr.copy(t):tr.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(ca,tr,this.up):ln.lookAt(tr,ca,this.up),this.quaternion.setFromRotationMatrix(ln),n&&(ln.extractRotation(n.matrixWorld),xs.setFromRotationMatrix(ln),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jc),_s.child=t,this.dispatchEvent(_s),_s.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sm),Oo.child=t,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jc),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,t,im),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,nm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),h=r(t.textures),c=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),m=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function r(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Ze.DEFAULT_UP=new L(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class er extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const am={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,r=null;const o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){r=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,i),p=this._getHandJoint(h,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,m=.005;h.inputState.pinching&&d>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(am)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new er;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function Ho(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Zt.workingColorSpace){if(t=qp(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,r=2*i-s;this.r=Ho(r,s,t+1/3),this.g=Ho(r,s,t),this.b=Ho(r,s,t-1/3)}return Zt.colorSpaceToWorking(this,n),this}setStyle(t,e=Se){function i(s){s!==void 0&&parseFloat(s)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const i=lf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return Zt.workingToColorSpace(ni.copy(this),t),Math.round(Kt(ni.r*255,0,255))*65536+Math.round(Kt(ni.g*255,0,255))*256+Math.round(Kt(ni.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(ni.copy(this),e);const i=ni.r,n=ni.g,s=ni.b,r=Math.max(i,n,s),o=Math.min(i,n,s);let l,h;const c=(o+r)/2;if(o===r)l=0,h=0;else{const u=r-o;switch(h=c<=.5?u/(r+o):u/(2-r-o),r){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(ni.copy(this),e),t.r=ni.r,t.g=ni.g,t.b=ni.b,t}getStyle(t=Se){Zt.workingToColorSpace(ni.copy(this),t);const e=ni.r,i=ni.g,n=ni.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(ir);const i=Io(Tn.h,ir.h,e),n=Io(Tn.s,ir.s,e),s=Io(Tn.l,ir.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new zt;zt.NAMES=lf;class rc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new rc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rm extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ls,this.environmentIntensity=1,this.environmentRotation=new ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ni=new L,hn=new L,Go=new L,cn=new L,bs=new L,ys=new L,Qc=new L,Vo=new L,Wo=new L,Xo=new L,qo=new Le,$o=new Le,jo=new Le;class Di{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ni.subVectors(t,e),n.cross(Ni);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ni.subVectors(n,e),hn.subVectors(i,e),Go.subVectors(t,e);const r=Ni.dot(Ni),o=Ni.dot(hn),l=Ni.dot(Go),h=hn.dot(hn),c=hn.dot(Go),u=r*h-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(h*l-o*c)*d,m=(r*c-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,i,n,s,r,o,l){return this.getBarycoord(t,e,i,n,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,cn.x),l.addScaledVector(r,cn.y),l.addScaledVector(o,cn.z),l)}static getInterpolatedAttribute(t,e,i,n,s,r){return qo.setScalar(0),$o.setScalar(0),jo.setScalar(0),qo.fromBufferAttribute(t,e),$o.fromBufferAttribute(t,i),jo.fromBufferAttribute(t,n),r.setScalar(0),r.addScaledVector(qo,s.x),r.addScaledVector($o,s.y),r.addScaledVector(jo,s.z),r}static isFrontFacing(t,e,i,n){return Ni.subVectors(i,e),hn.subVectors(t,e),Ni.cross(hn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ni.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Di.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return Di.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return Di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let r,o;bs.subVectors(n,i),ys.subVectors(s,i),Vo.subVectors(t,i);const l=bs.dot(Vo),h=ys.dot(Vo);if(l<=0&&h<=0)return e.copy(i);Wo.subVectors(t,n);const c=bs.dot(Wo),u=ys.dot(Wo);if(c>=0&&u<=c)return e.copy(n);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return r=l/(l-c),e.copy(i).addScaledVector(bs,r);Xo.subVectors(t,s);const f=bs.dot(Xo),m=ys.dot(Xo);if(m>=0&&f<=m)return e.copy(s);const v=f*h-l*m;if(v<=0&&h>=0&&m<=0)return o=h/(h-m),e.copy(i).addScaledVector(ys,o);const g=c*m-f*u;if(g<=0&&u-c>=0&&f-m>=0)return Qc.subVectors(s,n),o=(u-c)/(u-c+(f-m)),e.copy(n).addScaledVector(Qc,o);const p=1/(g+v+d);return r=v*p,o=d*p,e.copy(i).addScaledVector(bs,r).addScaledVector(ys,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class us{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(zi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(zi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=zi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,zi):zi.fromBufferAttribute(s,r),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nr.copy(i.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}const n=t.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ua),sr.subVectors(this.max,ua),Ms.subVectors(t.a,ua),ws.subVectors(t.b,ua),Ss.subVectors(t.c,ua),En.subVectors(ws,Ms),Cn.subVectors(Ss,ws),On.subVectors(Ms,Ss);let e=[0,-En.z,En.y,0,-Cn.z,Cn.y,0,-On.z,On.y,En.z,0,-En.x,Cn.z,0,-Cn.x,On.z,0,-On.x,-En.y,En.x,0,-Cn.y,Cn.x,0,-On.y,On.x,0];return!Zo(e,Ms,ws,Ss,sr)||(e=[1,0,0,0,1,0,0,0,1],!Zo(e,Ms,ws,Ss,sr))?!1:(ar.crossVectors(En,Cn),e=[ar.x,ar.y,ar.z],Zo(e,Ms,ws,Ss,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const un=[new L,new L,new L,new L,new L,new L,new L,new L],zi=new L,nr=new us,Ms=new L,ws=new L,Ss=new L,En=new L,Cn=new L,On=new L,ua=new L,sr=new L,ar=new L,Bn=new L;function Zo(a,t,e,i,n){for(let s=0,r=a.length-3;s<=r;s+=3){Bn.fromArray(a,s);const o=n.x*Math.abs(Bn.x)+n.y*Math.abs(Bn.y)+n.z*Math.abs(Bn.z),l=t.dot(Bn),h=e.dot(Bn),c=i.dot(Bn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const Be=new L,rr=new vt;let om=0;class Ae extends cs{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:om++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Th,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=tn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Th&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class hf extends Ae{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class cf extends Ae{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class xe extends Ae{constructor(t,e,i){super(new Float32Array(t),e,i)}}const lm=new us,da=new L,Ko=new L;class sa{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):lm.setFromPoints(t).getCenter(i);let n=0;for(let s=0,r=t.length;s<r;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;da.subVectors(t,this.center);const e=da.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(da,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(da.copy(t.center).add(Ko)),this.expandByPoint(da.copy(t.center).sub(Ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let hm=0;const Ci=new me,Yo=new Ze,As=new L,yi=new us,fa=new us,je=new L;class Ne extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gp(t)?cf:hf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ot().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,e,i){return Ci.makeTranslation(t,e,i),this.applyMatrix4(Ci),this}scale(t,e,i){return Ci.makeScale(t,e,i),this.applyMatrix4(Ci),this}lookAt(t){return Yo.lookAt(t),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new xe(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];yi.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];fa.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(yi.min,fa.min),yi.expandByPoint(je),je.addVectors(yi.max,fa.max),yi.expandByPoint(je)):(yi.expandByPoint(fa.min),yi.expandByPoint(fa.max))}yi.getCenter(i);let n=0;for(let s=0,r=t.count;s<r;s++)je.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(je));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)je.fromBufferAttribute(o,h),l&&(As.fromBufferAttribute(t,h),je.add(As)),n=Math.max(n,i.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Ae(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new L,l[x]=new L;const h=new L,c=new L,u=new L,d=new vt,f=new vt,m=new vt,v=new L,g=new L;function p(x,b,R){h.fromBufferAttribute(i,x),c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),d.fromBufferAttribute(s,x),f.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),c.sub(h),u.sub(h),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(v.copy(c).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(c,-m.x).multiplyScalar(P),o[x].add(v),o[b].add(v),o[R].add(v),l[x].add(g),l[b].add(g),l[R].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let x=0,b=w.length;x<b;++x){const R=w[x],P=R.start,D=R.count;for(let W=P,$=P+D;W<$;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const T=new L,M=new L,A=new L,y=new L;function E(x){A.fromBufferAttribute(n,x),y.copy(A);const b=o[x];T.copy(b),T.sub(A.multiplyScalar(A.dot(b))).normalize(),M.crossVectors(y,b);const P=M.dot(l[x])<0?-1:1;r.setXYZW(x,T.x,T.y,T.z,P)}for(let x=0,b=w.length;x<b;++x){const R=w[x],P=R.start,D=R.count;for(let W=P,$=P+D;W<$;W+=3)E(t.getX(W+0)),E(t.getX(W+1)),E(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new L,s=new L,r=new L,o=new L,l=new L,h=new L,c=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),c.subVectors(r,s),u.subVectors(n,s),c.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),h.fromBufferAttribute(i,g),o.add(c),l.add(c),h.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),c.subVectors(r,s),u.subVectors(n,s),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,l){const h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c);let f=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*c;for(let p=0;p<c;p++)d[m++]=h[f++]}return new Ae(d,c,u)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],h=t(l,i);e.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const l=[],h=s[o];for(let c=0,u=h.length;c<u;c++){const d=h[c],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const h=r[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const h=i[l];t.data.attributes[l]=h.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(n[l]=c,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const h in n){const c=n[h];this.setAttribute(h,c.clone(e))}const s=t.morphAttributes;for(const h in s){const c=[],u=s[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let h=0,c=r.length;h<c;h++){const u=r[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Th,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ci=new L;class fo{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ci.fromBufferAttribute(this,e),ci.applyMatrix4(t),this.setXYZ(e,ci.x,ci.y,ci.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ci.fromBufferAttribute(this,e),ci.applyNormalMatrix(t),this.setXYZ(e,ci.x,ci.y,ci.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ci.fromBufferAttribute(this,e),ci.transformDirection(t),this.setXYZ(e,ci.x,ci.y,ci.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=tn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=tn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){uo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new fo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){uo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let um=0;class aa extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=sn,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=Hl,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sn&&(i.blending=this.blending),this.side!==kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bl&&(i.blendSrc=this.blendSrc),this.blendDst!==Hl&&(i.blendDst=this.blendDst),this.blendEquation!==Qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(e){const s=n(t.textures),r=n(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new vt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Js extends aa{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ts;const pa=new L,Es=new L,Cs=new L,Rs=new vt,ma=new vt,uf=new me,or=new L,ga=new L,lr=new L,tu=new vt,Jo=new vt,eu=new vt;class za extends Ze{constructor(t=new Js){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Ne;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cm(e,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new fo(i,3,0,!1)),Ts.setAttribute("uv",new fo(i,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new vt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),uf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Cs.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const r=this.center;hr(or.set(-.5,-.5,0),Cs,r,Es,n,s),hr(ga.set(.5,-.5,0),Cs,r,Es,n,s),hr(lr.set(.5,.5,0),Cs,r,Es,n,s),tu.set(0,0),Jo.set(1,0),eu.set(1,1);let o=t.ray.intersectTriangle(or,ga,lr,!1,pa);if(o===null&&(hr(ga.set(-.5,.5,0),Cs,r,Es,n,s),Jo.set(0,1),o=t.ray.intersectTriangle(or,lr,ga,!1,pa),o===null))return;const l=t.ray.origin.distanceTo(pa);l<t.near||l>t.far||e.push({distance:l,point:pa.clone(),uv:Di.getInterpolation(pa,or,ga,lr,tu,Jo,eu,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function hr(a,t,e,i,n,s){Rs.subVectors(a,e).addScalar(.5).multiply(i),n!==void 0?(ma.x=s*Rs.x-n*Rs.y,ma.y=n*Rs.x+s*Rs.y):ma.copy(Rs),a.copy(t),a.x+=ma.x,a.y+=ma.y,a.applyMatrix4(uf)}const dn=new L,Qo=new L,cr=new L,Rn=new L,tl=new L,ur=new L,el=new L;class df{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Qo.copy(t).add(e).multiplyScalar(.5),cr.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(Qo);const s=t.distanceTo(e)*.5,r=-this.direction.dot(cr),o=Rn.dot(this.direction),l=-Rn.dot(cr),h=Rn.lengthSq(),c=Math.abs(1-r*r);let u,d,f,m;if(c>0)if(u=r*l-o,d=r*o-l,m=s*c,u>=0)if(d>=-m)if(d<=m){const v=1/c;u*=v,d*=v,f=u*(u+r*d+2*o)+d*(r*u+d+2*l)+h}else d=s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+h;else d=-s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+h;else d<=-m?(u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+h):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+h):(u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+h);else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Qo).addScaledVector(cr,d),f}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const i=dn.dot(this.direction),n=dn.dot(dn)-i*i,s=t.radius*t.radius;if(n>s)return null;const r=Math.sqrt(s-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,r,o,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,n=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,n=(t.min.x-d.x)*h),c>=0?(s=(t.min.y-d.y)*c,r=(t.max.y-d.y)*c):(s=(t.max.y-d.y)*c,r=(t.min.y-d.y)*c),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,i,n,s){tl.subVectors(e,t),ur.subVectors(i,t),el.crossVectors(tl,ur);let r=this.direction.dot(el),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Rn.subVectors(this.origin,t);const l=o*this.direction.dot(ur.crossVectors(Rn,ur));if(l<0)return null;const h=o*this.direction.dot(tl.cross(Rn));if(h<0||l+h>r)return null;const c=-o*Rn.dot(el);return c<0?null:this.at(c/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ii extends aa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.combine=Kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const iu=new me,Hn=new df,dr=new sa,nu=new L,fr=new L,pr=new L,mr=new L,il=new L,gr=new L,su=new L,vr=new L;class Fe extends Ze{constructor(t=new Ne,e=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){gr.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const c=o[l],u=s[l];c!==0&&(il.fromBufferAttribute(u,t),r?gr.addScaledVector(il,c):gr.addScaledVector(il.sub(e),c))}e.add(gr)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(s),Hn.copy(t.ray).recast(t.near),!(dr.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(dr,nu)===null||Hn.origin.distanceToSquared(nu)>(t.far-t.near)**2))&&(iu.copy(s).invert(),Hn.copy(t.ray).applyMatrix4(iu),!(i.boundingBox!==null&&Hn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,i){let n;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,h=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=r[g.materialIndex],w=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=w,A=T;M<A;M+=3){const y=o.getX(M),E=o.getX(M+1),x=o.getX(M+2);n=xr(this,p,t,i,h,c,u,y,E,x),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const w=o.getX(g),T=o.getX(g+1),M=o.getX(g+2);n=xr(this,r,t,i,h,c,u,w,T,M),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=r[g.materialIndex],w=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=w,A=T;M<A;M+=3){const y=M,E=M+1,x=M+2;n=xr(this,p,t,i,h,c,u,y,E,x),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const w=g,T=g+1,M=g+2;n=xr(this,r,t,i,h,c,u,w,T,M),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}}function dm(a,t,e,i,n,s,r,o){let l;if(t.side===vi?l=i.intersectTriangle(r,s,n,!0,o):l=i.intersectTriangle(n,s,r,t.side===kn,o),l===null)return null;vr.copy(o),vr.applyMatrix4(a.matrixWorld);const h=e.ray.origin.distanceTo(vr);return h<e.near||h>e.far?null:{distance:h,point:vr.clone(),object:a}}function xr(a,t,e,i,n,s,r,o,l,h){a.getVertexPosition(o,fr),a.getVertexPosition(l,pr),a.getVertexPosition(h,mr);const c=dm(a,t,e,i,fr,pr,mr,su);if(c){const u=new L;Di.getBarycoord(su,fr,pr,mr,u),n&&(c.uv=Di.getInterpolatedAttribute(n,o,l,h,u,new vt)),s&&(c.uv1=Di.getInterpolatedAttribute(s,o,l,h,u,new vt)),r&&(c.normal=Di.getInterpolatedAttribute(r,o,l,h,u,new L),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:h,normal:new L,materialIndex:0};Di.getNormal(fr,pr,mr,d.normal),c.face=d,c.barycoord=u}return c}class ff extends ti{constructor(t=null,e=1,i=1,n,s,r,o,l,h=oe,c=oe,u,d){super(null,r,o,l,h,c,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wt extends Ae{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ps=new me,au=new me,_r=[],ru=new us,fm=new me,va=new Fe,xa=new sa;class ye extends Fe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wt(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,fm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new us),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ps),ru.copy(t.boundingBox).applyMatrix4(Ps),this.boundingBox.union(ru)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new sa),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ps),xa.copy(t.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(xa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,r=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[r+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(va.geometry=this.geometry,va.material=this.material,va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(i),t.ray.intersectsSphere(xa)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Ps),au.multiplyMatrices(i,Ps),va.matrixWorld=au,va.raycast(t,_r);for(let r=0,o=_r.length;r<o;r++){const l=_r[r];l.instanceId=s,l.object=this,e.push(l)}_r.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Wt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new ff(new Float32Array(n*this.count),n,this.count,Qh,Vi));const s=this.morphTexture.source.data.data;let r=0;for(let h=0;h<i.length;h++)r+=i[h];const o=this.geometry.morphTargetsRelative?1:1-r,l=n*t;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const nl=new L,pm=new L,mm=new Ot;class Yn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=nl.subVectors(i,e).cross(pm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(nl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||mm.getNormalMatrix(t),n=this.coplanarPoint(nl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new sa,gm=new vt(.5,.5),br=new L;class pf{constructor(t=new Yn,e=new Yn,i=new Yn,n=new Yn,s=new Yn,r=new Yn){this.planes=[t,e,i,n,s,r]}set(t,e,i,n,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=en,i=!1){const n=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],h=s[3],c=s[4],u=s[5],d=s[6],f=s[7],m=s[8],v=s[9],g=s[10],p=s[11],w=s[12],T=s[13],M=s[14],A=s[15];if(n[0].setComponents(h-r,f-c,p-m,A-w).normalize(),n[1].setComponents(h+r,f+c,p+m,A+w).normalize(),n[2].setComponents(h+o,f+u,p+v,A+T).normalize(),n[3].setComponents(h-o,f-u,p-v,A-T).normalize(),i)n[4].setComponents(l,d,g,M).normalize(),n[5].setComponents(h-l,f-d,p-g,A-M).normalize();else if(n[4].setComponents(h-l,f-d,p-g,A-M).normalize(),e===en)n[5].setComponents(h+l,f+d,p+g,A+M).normalize();else if(e===co)n[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){Gn.center.set(0,0,0);const e=gm.distanceTo(t.center);return Gn.radius=.7071067811865476+e,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(br.x=n.normal.x>0?t.max.x:t.min.x,br.y=n.normal.y>0?t.max.y:t.min.y,br.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vm extends aa{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ou=new me,Ch=new df,yr=new sa,Mr=new L;class mf extends Ze{constructor(t=new Ne,e=new vm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(n),yr.radius+=s,t.ray.intersectsSphere(yr)===!1)return;ou.copy(n).invert(),Ch.copy(t.ray).applyMatrix4(ou);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let m=d,v=f;m<v;m++){const g=h.getX(m);Mr.fromBufferAttribute(u,g),lu(Mr,g,l,n,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=d,v=f;m<v;m++)Mr.fromBufferAttribute(u,m),lu(Mr,m,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function lu(a,t,e,i,n,s,r){const o=Ch.distanceSqToPoint(a);if(o<e){const l=new L;Ch.closestPointToPoint(a,l),l.applyMatrix4(i);const h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class gf extends ti{constructor(t=[],e=rs,i,n,s,r,o,l,h,c){super(t,e,i,n,s,r,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ai extends ti{constructor(t,e,i,n,s,r,o,l,h){super(t,e,i,n,s,r,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qs extends ti{constructor(t,e,i=rn,n,s,r,o=oe,l=oe,h,c=yn,u=1){if(c!==yn&&c!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,n,s,r,o,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ac(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class xm extends Qs{constructor(t,e=rn,i=rs,n,s,r=oe,o=oe,l,h=yn){const c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,i,n,s,r,o,l,h),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class vf extends ti{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class on extends Ne{constructor(t=1,e=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};const o=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);const l=[],h=[],c=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,e,t,r,s,0),m("z","y","x",1,-1,i,e,-t,r,s,1),m("x","z","y",1,1,t,i,e,n,r,2),m("x","z","y",1,-1,t,i,-e,n,r,3),m("x","y","z",1,-1,t,e,i,n,s,4),m("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new xe(h,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(u,2));function m(v,g,p,w,T,M,A,y,E,x,b){const R=M/E,P=A/x,D=M/2,W=A/2,$=y/2,z=E+1,V=x+1;let k=0,K=0;const tt=new L;for(let at=0;at<V;at++){const ut=at*P-W;for(let xt=0;xt<z;xt++){const Yt=xt*R-D;tt[v]=Yt*w,tt[g]=ut*T,tt[p]=$,h.push(tt.x,tt.y,tt.z),tt[v]=0,tt[g]=0,tt[p]=y>0?1:-1,c.push(tt.x,tt.y,tt.z),u.push(xt/E),u.push(1-at/x),k+=1}}for(let at=0;at<x;at++)for(let ut=0;ut<E;ut++){const xt=d+ut+z*at,Yt=d+ut+z*(at+1),Te=d+(ut+1)+z*(at+1),ie=d+(ut+1)+z*at;l.push(xt,Yt,ie),l.push(Yt,Te,ie),K+=6}o.addGroup(f,K,b),f+=K,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class So extends Ne{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],r=[],o=[],l=[],h=new L,c=new vt;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*n;h.x=t*Math.cos(f),h.y=t*Math.sin(f),r.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(r[d]/t+1)/2,c.y=(r[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ra extends Ne{constructor(t=1,e=1,i=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const h=this;n=Math.floor(n),s=Math.floor(s);const c=[],u=[],d=[],f=[];let m=0;const v=[],g=i/2;let p=0;w(),r===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(c),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(f,2));function w(){const M=new L,A=new L;let y=0;const E=(e-t)/i;for(let x=0;x<=s;x++){const b=[],R=x/s,P=R*(e-t)+t;for(let D=0;D<=n;D++){const W=D/n,$=W*l+o,z=Math.sin($),V=Math.cos($);A.x=P*z,A.y=-R*i+g,A.z=P*V,u.push(A.x,A.y,A.z),M.set(z,E,V).normalize(),d.push(M.x,M.y,M.z),f.push(W,1-R),b.push(m++)}v.push(b)}for(let x=0;x<n;x++)for(let b=0;b<s;b++){const R=v[b][x],P=v[b+1][x],D=v[b+1][x+1],W=v[b][x+1];(t>0||b!==0)&&(c.push(R,P,W),y+=3),(e>0||b!==s-1)&&(c.push(P,D,W),y+=3)}h.addGroup(p,y,0),p+=y}function T(M){const A=m,y=new vt,E=new L;let x=0;const b=M===!0?t:e,R=M===!0?1:-1;for(let D=1;D<=n;D++)u.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),m++;const P=m;for(let D=0;D<=n;D++){const $=D/n*l+o,z=Math.cos($),V=Math.sin($);E.x=b*V,E.y=g*R,E.z=b*z,u.push(E.x,E.y,E.z),d.push(0,R,0),y.x=z*.5+.5,y.y=V*.5*R+.5,f.push(y.x,y.y),m++}for(let D=0;D<n;D++){const W=A+D,$=P+D;M===!0?c.push($,$+1,W):c.push($+1,$,W),x+=3}h.addGroup(p,x,M===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ds extends ra{constructor(t=1,e=1,i=32,n=1,s=!1,r=0,o=Math.PI*2){super(0,t,e,i,n,s,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(t){return new ds(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ao extends Ne{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],r=[];o(n),h(i),c(),this.setAttribute("position",new xe(s,3)),this.setAttribute("normal",new xe(s.slice(),3)),this.setAttribute("uv",new xe(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const T=new L,M=new L,A=new L;for(let y=0;y<e.length;y+=3)f(e[y+0],T),f(e[y+1],M),f(e[y+2],A),l(T,M,A,w)}function l(w,T,M,A){const y=A+1,E=[];for(let x=0;x<=y;x++){E[x]=[];const b=w.clone().lerp(M,x/y),R=T.clone().lerp(M,x/y),P=y-x;for(let D=0;D<=P;D++)D===0&&x===y?E[x][D]=b:E[x][D]=b.clone().lerp(R,D/P)}for(let x=0;x<y;x++)for(let b=0;b<2*(y-x)-1;b++){const R=Math.floor(b/2);b%2===0?(d(E[x][R+1]),d(E[x+1][R]),d(E[x][R])):(d(E[x][R+1]),d(E[x+1][R+1]),d(E[x+1][R]))}}function h(w){const T=new L;for(let M=0;M<s.length;M+=3)T.x=s[M+0],T.y=s[M+1],T.z=s[M+2],T.normalize().multiplyScalar(w),s[M+0]=T.x,s[M+1]=T.y,s[M+2]=T.z}function c(){const w=new L;for(let T=0;T<s.length;T+=3){w.x=s[T+0],w.y=s[T+1],w.z=s[T+2];const M=g(w)/2/Math.PI+.5,A=p(w)/Math.PI+.5;r.push(M,1-A)}m(),u()}function u(){for(let w=0;w<r.length;w+=6){const T=r[w+0],M=r[w+2],A=r[w+4],y=Math.max(T,M,A),E=Math.min(T,M,A);y>.9&&E<.1&&(T<.2&&(r[w+0]+=1),M<.2&&(r[w+2]+=1),A<.2&&(r[w+4]+=1))}}function d(w){s.push(w.x,w.y,w.z)}function f(w,T){const M=w*3;T.x=t[M+0],T.y=t[M+1],T.z=t[M+2]}function m(){const w=new L,T=new L,M=new L,A=new L,y=new vt,E=new vt,x=new vt;for(let b=0,R=0;b<s.length;b+=9,R+=6){w.set(s[b+0],s[b+1],s[b+2]),T.set(s[b+3],s[b+4],s[b+5]),M.set(s[b+6],s[b+7],s[b+8]),y.set(r[R+0],r[R+1]),E.set(r[R+2],r[R+3]),x.set(r[R+4],r[R+5]),A.copy(w).add(T).add(M).divideScalar(3);const P=g(A);v(y,R+0,w,P),v(E,R+2,T,P),v(x,R+4,M,P)}}function v(w,T,M,A){A<0&&w.x===1&&(r[T]=w.x-1),M.x===0&&M.z===0&&(r[T]=A/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.vertices,t.indices,t.radius,t.detail)}}class oc extends Ao{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oc(t.radius,t.detail)}}class po extends Ao{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new po(t.radius,t.detail)}}class Qt extends Ne{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,r=e/2,o=Math.floor(i),l=Math.floor(n),h=o+1,c=l+1,u=t/o,d=e/l,f=[],m=[],v=[],g=[];for(let p=0;p<c;p++){const w=p*d-r;for(let T=0;T<h;T++){const M=T*u-s;m.push(M,-w,0),v.push(0,0,1),g.push(T/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const T=w+h*p,M=w+h*(p+1),A=w+1+h*(p+1),y=w+1+h*p;f.push(T,M,y),f.push(M,A,y)}this.setIndex(f),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ti extends Ne{constructor(t=.5,e=1,i=32,n=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],h=[],c=[];let u=t;const d=(e-t)/n,f=new L,m=new vt;for(let v=0;v<=n;v++){for(let g=0;g<=i;g++){const p=s+g/i*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),h.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,c.push(m.x,m.y)}u+=d}for(let v=0;v<n;v++){const g=v*(i+1);for(let p=0;p<i;p++){const w=p+g,T=w,M=w+i+1,A=w+i+2,y=w+1;o.push(T,M,y),o.push(M,A,y)}}this.setIndex(o),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class lc extends Ne{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let h=0;const c=[],u=new L,d=new L,f=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){const w=[],T=p/i,M=r+T*o,A=t*Math.cos(M),y=Math.sqrt(t*t-A*A);let E=0;p===0&&r===0?E=.5/e:p===i&&l===Math.PI&&(E=-.5/e);for(let x=0;x<=e;x++){const b=x/e,R=n+b*s;u.x=-y*Math.cos(R),u.y=A,u.z=y*Math.sin(R),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(b+E,1-T),w.push(h++)}c.push(w)}for(let p=0;p<i;p++)for(let w=0;w<e;w++){const T=c[p][w+1],M=c[p][w],A=c[p+1][w],y=c[p+1][w+1];(p!==0||r>0)&&f.push(T,M,y),(p!==i-1||l<Math.PI)&&f.push(M,A,y)}this.setIndex(f),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ta(a){const t={};for(const e in a){t[e]={};for(const i in a[e]){const n=a[e][i];if(hu(n))n.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(hu(n[0])){const s=[];for(let r=0,o=n.length;r<o;r++)s[r]=n[r].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ui(a){const t={};for(let e=0;e<a.length;e++){const i=ta(a[e]);for(const n in i)t[n]=i[n]}return t}function hu(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function _m(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function xf(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Oa={clone:ta,merge:ui};var bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bt extends aa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bm,this.fragmentShader=ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ta(t.uniforms),this.uniformsGroups=_m(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new zt().setHex(n.value);break;case"v2":this.uniforms[i].value=new vt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new L().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ot().fromArray(n.value);break;case"m4":this.uniforms[i].value=new me().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class _f extends Bt{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mm extends aa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wm extends aa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sl={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(cu(a)||(this.files[a]=t))},get:function(a){if(this.enabled!==!1&&!cu(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function cu(a){try{const t=a.slice(a.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Sm{constructor(t,e,i){const n=this;let s=!1,r=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,s===!1&&n.onStart!==void 0&&n.onStart(c,r,o),s=!0},this.itemEnd=function(c){r++,n.onProgress!==void 0&&n.onProgress(c,r,o),r===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){const u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){const f=h[u],m=h[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Am=new Sm;class hc{constructor(t){this.manager=t!==void 0?t:Am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}hc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ls=new WeakMap;class Tm extends hc{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=sl.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0);else{let u=Ls.get(r);u===void 0&&(u=[],Ls.set(r,u)),u.push({onLoad:e,onError:n})}return r}const o=Na("img");function l(){c(),e&&e(this);const u=Ls.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Ls.delete(this),s.manager.itemEnd(t)}function h(u){c(),n&&n(u),sl.remove(`image:${t}`);const d=Ls.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}Ls.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),sl.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class Xa extends hc{constructor(t){super(t)}load(t,e,i,n){const s=new ti,r=new Tm(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}}const wr=new L,Sr=new na,ji=new L;class bf extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=en,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wr,Sr,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Sr,ji.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(wr,Sr,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Sr,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new L,uu=new vt,du=new vt;class Pi extends bf{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Eh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Eh*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,uu,du),e.subVectors(du,uu)}setViewOffset(t,e,i,n,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Do*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,h=r.fullHeight;s+=r.offsetX*n/l,e-=r.offsetY*i/h,n*=r.width/l,i*=r.height/h}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class cc extends bf{constructor(t=-1,e=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,r=s+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fs=-90,Ds=1;class Em extends Ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Pi(Fs,Ds,t,e);n.layers=this.layers,this.add(n);const s=new Pi(Fs,Ds,t,e);s.layers=this.layers,this.add(s);const r=new Pi(Fs,Ds,t,e);r.layers=this.layers,this.add(r);const o=new Pi(Fs,Ds,t,e);o.layers=this.layers,this.add(o);const l=new Pi(Fs,Ds,t,e);l.layers=this.layers,this.add(l);const h=new Pi(Fs,Ds,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,r,o,l]=e;for(const h of e)this.remove(h);if(t===en)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===co)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,2,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Cm extends Pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Rm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Pm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Pm(){this._document.hidden===!1&&this.reset()}class yf{static{yf.prototype.isMatrix2=!0}constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}}function fu(a,t,e,i){const n=Lm(i);switch(e){case nf:return a*t;case Qh:return a*t/n.components*n.byteLength;case tc:return a*t/n.components*n.byteLength;case os:return a*t*2/n.components*n.byteLength;case ec:return a*t*2/n.components*n.byteLength;case sf:return a*t*3/n.components*n.byteLength;case Wi:return a*t*4/n.components*n.byteLength;case ic:return a*t*4/n.components*n.byteLength;case Kr:case Yr:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Jr:case Qr:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Yl:case Ql:return Math.max(a,16)*Math.max(t,8)/4;case Kl:case Jl:return Math.max(a,8)*Math.max(t,8)/2;case th:case eh:case nh:case sh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case ih:case ro:case ah:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case rh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case oh:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case lh:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case hh:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case ch:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case uh:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case dh:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case fh:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case ph:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case mh:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case gh:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case vh:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case xh:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case _h:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case bh:case yh:case Mh:return Math.ceil(a/4)*Math.ceil(t/4)*16;case wh:case Sh:return Math.ceil(a/4)*Math.ceil(t/4)*8;case oo:case Ah:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lm(a){switch(a){case Fi:case Jd:return{byteLength:1,components:1};case Ua:case Qd:case Si:return{byteLength:2,components:1};case Yh:case Jh:return{byteLength:2,components:4};case rn:case Kh:case Vi:return{byteLength:4,components:1};case tf:case ef:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);function Mf(){let a=null,t=!1,e=null,i=null;function n(s,r){e(s,r),i=a.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&a!==null&&(i=a.requestAnimationFrame(n),t=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function Fm(a){const t=new WeakMap;function e(o,l){const h=o.array,c=o.usage,u=h.byteLength,d=a.createBuffer();a.bindBuffer(l,d),a.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=a.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=a.SHORT;else if(h instanceof Uint32Array)f=a.UNSIGNED_INT;else if(h instanceof Int32Array)f=a.INT;else if(h instanceof Int8Array)f=a.BYTE;else if(h instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,h){const c=l.array,u=l.updateRanges;if(a.bindBuffer(h,o),u.length===0)a.bufferSubData(h,0,c);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];a.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(a.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:n,remove:s,update:r}}var Dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Im=`#ifdef USE_ALPHAHASH
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
#endif`,Um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Om=`#ifdef USE_AOMAP
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
#endif`,Bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hm=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qm=`#ifdef USE_IRIDESCENCE
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
#endif`,$m=`#ifdef USE_BUMPMAP
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,n0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s0=`vec3 transformedNormal = objectNormal;
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
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",c0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,g0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
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
}`,y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S0=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,A0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,T0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,L0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F0=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,D0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,I0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,k0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V0=`#if defined( USE_POINTS_UV )
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
#endif`,W0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`#ifdef USE_MORPHTARGETS
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
#endif`,K0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,J0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ig=`#ifdef USE_NORMALMAP
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
#endif`,ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,xg=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,_g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`#include <common>
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
}`,Bg=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hg=`#define DISTANCE
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
}`,Gg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`uniform float scale;
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
}`,qg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,jg=`uniform vec3 diffuse;
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
}`,Zg=`#define LAMBERT
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
}`,Kg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Yg=`#define MATCAP
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
}`,Jg=`#define MATCAP
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
}`,Qg=`#define NORMAL
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
}`,tv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ev=`#define PHONG
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
}`,iv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,nv=`#define STANDARD
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
}`,sv=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,av=`#define TOON
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
}`,rv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,ov=`uniform float size;
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
}`,lv=`uniform vec3 diffuse;
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
}`,hv=`#include <common>
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
}`,cv=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,uv=`uniform float rotation;
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
}`,dv=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Dm,alphahash_pars_fragment:Im,alphamap_fragment:Um,alphamap_pars_fragment:km,alphatest_fragment:Nm,alphatest_pars_fragment:zm,aomap_fragment:Om,aomap_pars_fragment:Bm,batching_pars_vertex:Hm,batching_vertex:Gm,begin_vertex:Vm,beginnormal_vertex:Wm,bsdfs:Xm,iridescence_fragment:qm,bumpmap_pars_fragment:$m,clipping_planes_fragment:jm,clipping_planes_pars_fragment:Zm,clipping_planes_pars_vertex:Km,clipping_planes_vertex:Ym,color_fragment:Jm,color_pars_fragment:Qm,color_pars_vertex:t0,color_vertex:e0,common:i0,cube_uv_reflection_fragment:n0,defaultnormal_vertex:s0,displacementmap_pars_vertex:a0,displacementmap_vertex:r0,emissivemap_fragment:o0,emissivemap_pars_fragment:l0,colorspace_fragment:h0,colorspace_pars_fragment:c0,envmap_fragment:u0,envmap_common_pars_fragment:d0,envmap_pars_fragment:f0,envmap_pars_vertex:p0,envmap_physical_pars_fragment:A0,envmap_vertex:m0,fog_vertex:g0,fog_pars_vertex:v0,fog_fragment:x0,fog_pars_fragment:_0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:y0,lights_lambert_fragment:M0,lights_lambert_pars_fragment:w0,lights_pars_begin:S0,lights_toon_fragment:T0,lights_toon_pars_fragment:E0,lights_phong_fragment:C0,lights_phong_pars_fragment:R0,lights_physical_fragment:P0,lights_physical_pars_fragment:L0,lights_fragment_begin:F0,lights_fragment_maps:D0,lights_fragment_end:I0,lightprobes_pars_fragment:U0,logdepthbuf_fragment:k0,logdepthbuf_pars_fragment:N0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:O0,map_fragment:B0,map_pars_fragment:H0,map_particle_fragment:G0,map_particle_pars_fragment:V0,metalnessmap_fragment:W0,metalnessmap_pars_fragment:X0,morphinstance_vertex:q0,morphcolor_vertex:$0,morphnormal_vertex:j0,morphtarget_pars_vertex:Z0,morphtarget_vertex:K0,normal_fragment_begin:Y0,normal_fragment_maps:J0,normal_pars_fragment:Q0,normal_pars_vertex:tg,normal_vertex:eg,normalmap_pars_fragment:ig,clearcoat_normal_fragment_begin:ng,clearcoat_normal_fragment_maps:sg,clearcoat_pars_fragment:ag,iridescence_pars_fragment:rg,opaque_fragment:og,packing:lg,premultiplied_alpha_fragment:hg,project_vertex:cg,dithering_fragment:ug,dithering_pars_fragment:dg,roughnessmap_fragment:fg,roughnessmap_pars_fragment:pg,shadowmap_pars_fragment:mg,shadowmap_pars_vertex:gg,shadowmap_vertex:vg,shadowmask_pars_fragment:xg,skinbase_vertex:_g,skinning_pars_vertex:bg,skinning_vertex:yg,skinnormal_vertex:Mg,specularmap_fragment:wg,specularmap_pars_fragment:Sg,tonemapping_fragment:Ag,tonemapping_pars_fragment:Tg,transmission_fragment:Eg,transmission_pars_fragment:Cg,uv_pars_fragment:Rg,uv_pars_vertex:Pg,uv_vertex:Lg,worldpos_vertex:Fg,background_vert:Dg,background_frag:Ig,backgroundCube_vert:Ug,backgroundCube_frag:kg,cube_vert:Ng,cube_frag:zg,depth_vert:Og,depth_frag:Bg,distance_vert:Hg,distance_frag:Gg,equirect_vert:Vg,equirect_frag:Wg,linedashed_vert:Xg,linedashed_frag:qg,meshbasic_vert:$g,meshbasic_frag:jg,meshlambert_vert:Zg,meshlambert_frag:Kg,meshmatcap_vert:Yg,meshmatcap_frag:Jg,meshnormal_vert:Qg,meshnormal_frag:tv,meshphong_vert:ev,meshphong_frag:iv,meshphysical_vert:nv,meshphysical_frag:sv,meshtoon_vert:av,meshtoon_frag:rv,points_vert:ov,points_frag:lv,shadow_vert:hv,shadow_frag:cv,sprite_vert:uv,sprite_frag:dv},ft={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Qi={basic:{uniforms:ui([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:ui([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:ui([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:ui([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:ui([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new zt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:ui([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:ui([ft.points,ft.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:ui([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:ui([ft.common,ft.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:ui([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:ui([ft.sprite,ft.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:ui([ft.common,ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:ui([ft.lights,ft.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Qi.physical={uniforms:ui([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Ar={r:0,b:0,g:0},fv=new me,wf=new Ot;wf.set(-1,0,0,0,1,0,0,0,1);function pv(a,t,e,i,n,s){const r=new zt(0);let o=n===!0?0:1,l,h,c=null,u=0,d=null;function f(w){let T=w.isScene===!0?w.background:null;if(T&&T.isTexture){const M=w.backgroundBlurriness>0;T=t.get(T,M)}return T}function m(w){let T=!1;const M=f(w);M===null?g(r,o):M&&M.isColor&&(g(M,1),T=!0);const A=a.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(a.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function v(w,T){const M=f(T);M&&(M.isCubeTexture||M.mapping===wo)?(h===void 0&&(h=new Fe(new on(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:ta(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fv.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(wf),h.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ae,(c!==M||u!==M.version||d!==a.toneMapping)&&(h.material.needsUpdate=!0,c=M,u=M.version,d=a.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Fe(new Qt(2,2),new Bt({name:"BackgroundMaterial",uniforms:ta(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(c!==M||u!==M.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,c=M,u=M.version,d=a.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function g(w,T){w.getRGB(Ar,xf(a)),e.buffers.color.setClear(Ar.r,Ar.g,Ar.b,T,s)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(w,T=1){r.set(w),o=T,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,g(r,o)},render:m,addToRenderList:v,dispose:p}}function mv(a,t){const e=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},n=d(null);let s=n,r=!1;function o(P,D,W,$,z){let V=!1;const k=u(P,$,W,D);s!==k&&(s=k,h(s.object)),V=f(P,$,W,z),V&&m(P,$,W,z),z!==null&&t.update(z,a.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,M(P,D,W,$),z!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return a.createVertexArray()}function h(P){return a.bindVertexArray(P)}function c(P){return a.deleteVertexArray(P)}function u(P,D,W,$){const z=$.wireframe===!0;let V=i[D.id];V===void 0&&(V={},i[D.id]=V);const k=P.isInstancedMesh===!0?P.id:0;let K=V[k];K===void 0&&(K={},V[k]=K);let tt=K[W.id];tt===void 0&&(tt={},K[W.id]=tt);let at=tt[z];return at===void 0&&(at=d(l()),tt[z]=at),at}function d(P){const D=[],W=[],$=[];for(let z=0;z<e;z++)D[z]=0,W[z]=0,$[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:$,object:P,attributes:{},index:null}}function f(P,D,W,$){const z=s.attributes,V=D.attributes;let k=0;const K=W.getAttributes();for(const tt in K)if(K[tt].location>=0){const ut=z[tt];let xt=V[tt];if(xt===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(xt=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(xt=P.instanceColor)),ut===void 0||ut.attribute!==xt||xt&&ut.data!==xt.data)return!0;k++}return s.attributesNum!==k||s.index!==$}function m(P,D,W,$){const z={},V=D.attributes;let k=0;const K=W.getAttributes();for(const tt in K)if(K[tt].location>=0){let ut=V[tt];ut===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(ut=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(ut=P.instanceColor));const xt={};xt.attribute=ut,ut&&ut.data&&(xt.data=ut.data),z[tt]=xt,k++}s.attributes=z,s.attributesNum=k,s.index=$}function v(){const P=s.newAttributes;for(let D=0,W=P.length;D<W;D++)P[D]=0}function g(P){p(P,0)}function p(P,D){const W=s.newAttributes,$=s.enabledAttributes,z=s.attributeDivisors;W[P]=1,$[P]===0&&(a.enableVertexAttribArray(P),$[P]=1),z[P]!==D&&(a.vertexAttribDivisor(P,D),z[P]=D)}function w(){const P=s.newAttributes,D=s.enabledAttributes;for(let W=0,$=D.length;W<$;W++)D[W]!==P[W]&&(a.disableVertexAttribArray(W),D[W]=0)}function T(P,D,W,$,z,V,k){k===!0?a.vertexAttribIPointer(P,D,W,z,V):a.vertexAttribPointer(P,D,W,$,z,V)}function M(P,D,W,$){v();const z=$.attributes,V=W.getAttributes(),k=D.defaultAttributeValues;for(const K in V){const tt=V[K];if(tt.location>=0){let at=z[K];if(at===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(at=P.instanceColor)),at!==void 0){const ut=at.normalized,xt=at.itemSize,Yt=t.get(at);if(Yt===void 0)continue;const Te=Yt.buffer,ie=Yt.type,Y=Yt.bytesPerElement,rt=ie===a.INT||ie===a.UNSIGNED_INT||at.gpuType===Kh;if(at.isInterleavedBufferAttribute){const et=at.data,Nt=et.stride,Ht=at.offset;if(et.isInstancedInterleavedBuffer){for(let It=0;It<tt.locationSize;It++)p(tt.location+It,et.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let It=0;It<tt.locationSize;It++)g(tt.location+It);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let It=0;It<tt.locationSize;It++)T(tt.location+It,xt/tt.locationSize,ie,ut,Nt*Y,(Ht+xt/tt.locationSize*It)*Y,rt)}else{if(at.isInstancedBufferAttribute){for(let et=0;et<tt.locationSize;et++)p(tt.location+et,at.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let et=0;et<tt.locationSize;et++)g(tt.location+et);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let et=0;et<tt.locationSize;et++)T(tt.location+et,xt/tt.locationSize,ie,ut,xt*Y,xt/tt.locationSize*et*Y,rt)}}else if(k!==void 0){const ut=k[K];if(ut!==void 0)switch(ut.length){case 2:a.vertexAttrib2fv(tt.location,ut);break;case 3:a.vertexAttrib3fv(tt.location,ut);break;case 4:a.vertexAttrib4fv(tt.location,ut);break;default:a.vertexAttrib1fv(tt.location,ut)}}}}w()}function A(){b();for(const P in i){const D=i[P];for(const W in D){const $=D[W];for(const z in $){const V=$[z];for(const k in V)c(V[k].object),delete V[k];delete $[z]}}delete i[P]}}function y(P){if(i[P.id]===void 0)return;const D=i[P.id];for(const W in D){const $=D[W];for(const z in $){const V=$[z];for(const k in V)c(V[k].object),delete V[k];delete $[z]}}delete i[P.id]}function E(P){for(const D in i){const W=i[D];for(const $ in W){const z=W[$];if(z[P.id]===void 0)continue;const V=z[P.id];for(const k in V)c(V[k].object),delete V[k];delete z[P.id]}}}function x(P){for(const D in i){const W=i[D],$=P.isInstancedMesh===!0?P.id:0,z=W[$];if(z!==void 0){for(const V in z){const k=z[V];for(const K in k)c(k[K].object),delete k[K];delete z[V]}delete W[$],Object.keys(W).length===0&&delete i[D]}}}function b(){R(),r=!0,s!==n&&(s=n,h(s.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:b,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:y,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:w}}function gv(a,t,e){let i;function n(l){i=l}function s(l,h){a.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,c){c!==0&&(a.drawArraysInstanced(i,l,h,c),e.update(h,i,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,c);let d=0;for(let f=0;f<c;f++)d+=h[f];e.update(d,i,1)}this.setMode=n,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function vv(a,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){return!(E!==Wi&&i.convert(E)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const x=E===Si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Fi&&i.convert(E)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Vi&&!x)}function l(E){if(E==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(kt("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),w=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),T=a.getParameter(a.MAX_VARYING_VECTORS),M=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),A=a.getParameter(a.MAX_SAMPLES),y=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:M,maxSamples:A,samples:y}}function xv(a){const t=this;let e=null,i=0,n=!1,s=!1;const r=new Yn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=a.get(u);if(!n||m===null||m.length===0||s&&!g)s?c(null):h();else{const w=s?0:i,T=w*4;let M=p.clippingState||null;l.value=M,M=c(m,d,T,f);for(let A=0;A!==T;++A)M[A]=e[A];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,d,f,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=f+v*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,M=f;T!==v;++T,M+=4)r.copy(u[T]).applyMatrix4(w,o),r.normal.toArray(g,M),g[M+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}const In=4,pu=[.125,.215,.35,.446,.526,.582],ts=20,_v=256,_a=new cc,mu=new zt;let al=null,rl=0,ol=0,ll=!1;const bv=new L;class gu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){const{size:r=256,position:o=bv}=s;al=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(al,rl,ol),this._renderer.xr.enabled=ll,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),al=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:Si,format:Wi,colorSpace:lo,depthBuffer:!1},n=vu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yv(s)),this._blurMaterial=wv(s,t,e),this._ggxMaterial=Mv(s,t,e)}return n}_compileMaterial(t){const e=new Fe(new Ne,t);this._renderer.compile(e,_a)}_sceneToCubeUV(t,e,i,n,s){const l=new Pi(90,1,e,i),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(mu),u.toneMapping=an,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new on,new Ii({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const w=t.background;w?w.isColor&&(g.color.copy(w),t.background=null,p=!0):(g.color.copy(mu),p=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(l.up.set(0,h[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[T],s.y,s.z)):M===1?(l.up.set(0,0,h[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[T],s.z)):(l.up.set(0,h[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[T]));const A=this._cubeSize;Is(n,M*A,T>2?A:0,A,A),u.setRenderTarget(n),p&&u.render(v,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=w}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===rs||t.mapping===Ys;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=_u()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());const s=n?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Is(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,_a)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,h=i/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),u=Math.sqrt(h*h-c*c),d=0+h*1.25,f=u*d,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-In?i-m+In:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Is(s,g,p,3*v,2*v),n.setRenderTarget(s),n.render(o,_a),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Is(t,g,p,3*v,2*v),n.setRenderTarget(t),n.render(o,_a)}_blur(t,e,i,n,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",s),this._halfBlur(r,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,r,o){const l=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Jt("blur direction must be either latitudinal or longitudinal!");const c=3,u=this._lodMeshes[n];u.material=h;const d=h.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ts-1),v=s/m,g=isFinite(s)?1+Math.floor(c*v):ts;g>ts&&kt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ts}`);const p=[];let w=0;for(let E=0;E<ts;++E){const x=E/v,b=Math.exp(-x*x/2);p.push(b),E===0?w+=b:E<g&&(w+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/w;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=m,d.mipInt.value=T-i;const M=this._sizeLods[n],A=3*M*(n>T-In?n-T+In:0),y=4*(this._cubeSize-M);Is(e,A,y,3*M,2*M),l.setRenderTarget(e),l.render(u,_a)}}function yv(a){const t=[],e=[],i=[];let n=a;const s=a-In+1+pu.length;for(let r=0;r<s;r++){const o=Math.pow(2,n);t.push(o);let l=1/o;r>a-In?l=pu[r-a+In-1]:r===0&&(l=0),e.push(l);const h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,m=6,v=3,g=2,p=1,w=new Float32Array(v*m*f),T=new Float32Array(g*m*f),M=new Float32Array(p*m*f);for(let y=0;y<f;y++){const E=y%3*2/3-1,x=y>2?0:-1,b=[E,x,0,E+2/3,x,0,E+2/3,x+1,0,E,x,0,E+2/3,x+1,0,E,x+1,0];w.set(b,v*m*y),T.set(d,g*m*y);const R=[y,y,y,y,y,y];M.set(R,p*m*y)}const A=new Ne;A.setAttribute("position",new Ae(w,v)),A.setAttribute("uv",new Ae(T,g)),A.setAttribute("faceIndex",new Ae(M,p)),i.push(new Fe(A,null)),n>In&&n--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function vu(a,t,e){const i=new xi(a,t,e);return i.texture.mapping=wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(a,t,e,i,n){a.viewport.set(t,e,i,n),a.scissor.set(t,e,i,n)}function Mv(a,t,e){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_v,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:To(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function wv(a,t,e){const i=new Float32Array(ts),n=new L(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:To(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function xu(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function _u(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function To(){return`

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
	`}class Sf extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new gf(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new on(5,5,5),s=new Bt({name:"CubemapFromEquirect",uniforms:ta(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vi,blending:nn});s.uniforms.tEquirect.value=e;const r=new Fe(n,s),o=e.minFilter;return e.minFilter===is&&(e.minFilter=li),new Em(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(s)}}function Sv(a){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?r(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Po||f===Lo)if(t.has(d)){const m=t.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const v=new Sf(m.height);return v.fromEquirectangularTexture(a,d),t.set(d,v),d.addEventListener("dispose",h),o(v.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const f=d.mapping,m=f===Po||f===Lo,v=f===rs||f===Ys;if(m||v){let g=e.get(d);const p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new gu(a)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const w=d.image;return m&&w&&w.height>0||v&&w&&l(w)?(i===null&&(i=new gu(a)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function o(d,f){return f===Po?d.mapping=rs:f===Lo&&(d.mapping=Ys),d}function l(d){let f=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&f++;return f===m}function h(d){const f=d.target;f.removeEventListener("dispose",h);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function c(d){const f=d.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function Av(a){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=a.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&qs("WebGLRenderer: "+i+" extension not supported."),n}}}function Tv(a,t,e,i){const n={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",r),delete n[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",r),n[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],a.ARRAY_BUFFER)}function h(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(m===void 0)return;if(f!==null){const w=f.array;v=f.version;for(let T=0,M=w.length;T<M;T+=3){const A=w[T+0],y=w[T+1],E=w[T+2];d.push(A,y,y,E,E,A)}}else{const w=m.array;v=m.version;for(let T=0,M=w.length/3-1;T<M;T+=3){const A=T+0,y=T+1,E=T+2;d.push(A,y,y,E,E,A)}}const g=new(m.count>=65535?cf:hf)(d,1);g.version=v;const p=s.get(u);p&&t.remove(p),s.set(u,g)}function c(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Ev(a,t,e){let i;function n(u){i=u}let s,r;function o(u){s=u.type,r=u.bytesPerElement}function l(u,d){a.drawElements(i,d,s,u*r),e.update(d,i,1)}function h(u,d,f){f!==0&&(a.drawElementsInstanced(i,d,s,u*r,f),e.update(d,i,f))}function c(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];e.update(v,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function Cv(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(e.calls++,r){case a.TRIANGLES:e.triangles+=o*(s/3);break;case a.LINES:e.lines+=o*(s/2);break;case a.LINE_STRIP:e.lines+=o*(s-1);break;case a.LINE_LOOP:e.lines+=o*s;break;case a.POINTS:e.points+=o*s;break;default:Jt("WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Rv(a,t,e){const i=new WeakMap,n=new Le;function s(r,o,l){const h=r.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let R=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var f=R;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let M=0;m===!0&&(M=1),v===!0&&(M=2),g===!0&&(M=3);let A=o.attributes.position.count*M,y=1;A>t.maxTextureSize&&(y=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const E=new Float32Array(A*y*4*u),x=new rf(E,A,y,u);x.type=Vi,x.needsUpdate=!0;const b=M*4;for(let P=0;P<u;P++){const D=p[P],W=w[P],$=T[P],z=A*y*4*P;for(let V=0;V<D.count;V++){const k=V*b;m===!0&&(n.fromBufferAttribute(D,V),E[z+k+0]=n.x,E[z+k+1]=n.y,E[z+k+2]=n.z,E[z+k+3]=0),v===!0&&(n.fromBufferAttribute(W,V),E[z+k+4]=n.x,E[z+k+5]=n.y,E[z+k+6]=n.z,E[z+k+7]=0),g===!0&&(n.fromBufferAttribute($,V),E[z+k+8]=n.x,E[z+k+9]=n.y,E[z+k+10]=n.z,E[z+k+11]=$.itemSize===4?n.w:1)}}d={count:u,texture:x,size:new vt(A,y)},i.set(o,d),o.addEventListener("dispose",R)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",r.morphTexture,e);else{let m=0;for(let g=0;g<h.length;g++)m+=h[g];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(a,"morphTargetBaseInfluence",v),l.getUniforms().setValue(a,"morphTargetInfluences",h)}l.getUniforms().setValue(a,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:s}}function Pv(a,t,e,i,n){let s=new WeakMap;function r(h){const c=n.render.frame,u=h.geometry,d=t.get(h,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),s.get(h)!==c&&(e.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,a.ARRAY_BUFFER),s.set(h,c))),h.isSkinnedMesh){const f=h.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function l(h){const c=h.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Lv={[Wh]:"LINEAR_TONE_MAPPING",[Xh]:"REINHARD_TONE_MAPPING",[qh]:"CINEON_TONE_MAPPING",[Mo]:"ACES_FILMIC_TONE_MAPPING",[jh]:"AGX_TONE_MAPPING",[Zh]:"NEUTRAL_TONE_MAPPING",[$h]:"CUSTOM_TONE_MAPPING"};function Fv(a,t,e,i,n,s){const r=new xi(t,e,{type:a,depthBuffer:n,stencilBuffer:s,samples:i?4:0,depthTexture:n?new Qs(t,e):void 0}),o=new xi(t,e,{type:Si,depthBuffer:!1,stencilBuffer:!1}),l=new Ne;l.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new xe([0,2,0,0,2,0],2));const h=new _f({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Fe(l,h),u=new cc(-1,1,1,-1,0,1);let d=null,f=null,m=!1,v,g=null,p=[],w=!1;this.setSize=function(T,M){r.setSize(T,M),o.setSize(T,M);for(let A=0;A<p.length;A++){const y=p[A];y.setSize&&y.setSize(T,M)}},this.setEffects=function(T){p=T,w=p.length>0&&p[0].isRenderPass===!0;const M=r.width,A=r.height;for(let y=0;y<p.length;y++){const E=p[y];E.setSize&&E.setSize(M,A)}},this.begin=function(T,M){if(m||T.toneMapping===an&&p.length===0)return!1;if(g=M,M!==null){const A=M.width,y=M.height;(r.width!==A||r.height!==y)&&this.setSize(A,y)}return w===!1&&T.setRenderTarget(r),v=T.toneMapping,T.toneMapping=an,!0},this.hasRenderPass=function(){return w},this.end=function(T,M){T.toneMapping=v,m=!0;let A=r,y=o;for(let E=0;E<p.length;E++){const x=p[E];if(x.enabled!==!1&&(x.render(T,y,A,M),x.needsSwap!==!1)){const b=A;A=y,y=b}}if(d!==T.outputColorSpace||f!==T.toneMapping){d=T.outputColorSpace,f=T.toneMapping,h.defines={},Zt.getTransfer(d)===ae&&(h.defines.SRGB_TRANSFER="");const E=Lv[f];E&&(h.defines[E]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,T.setRenderTarget(g),T.render(c,u),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),h.dispose()}}const Af=new ti,Rh=new Qs(1,1),Tf=new rf,Ef=new Jp,Cf=new gf,bu=[],yu=[],Mu=new Float32Array(16),wu=new Float32Array(9),Su=new Float32Array(4);function oa(a,t,e){const i=a[0];if(i<=0||i>0)return a;const n=t*e;let s=bu[n];if(s===void 0&&(s=new Float32Array(n),bu[n]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function Xe(a,t){if(a.length!==t.length)return!1;for(let e=0,i=a.length;e<i;e++)if(a[e]!==t[e])return!1;return!0}function qe(a,t){for(let e=0,i=t.length;e<i;e++)a[e]=t[e]}function Eo(a,t){let e=yu[t];e===void 0&&(e=new Int32Array(t),yu[t]=e);for(let i=0;i!==t;++i)e[i]=a.allocateTextureUnit();return e}function Dv(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function Iv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;a.uniform2fv(this.addr,t),qe(e,t)}}function Uv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;a.uniform3fv(this.addr,t),qe(e,t)}}function kv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;a.uniform4fv(this.addr,t),qe(e,t)}}function Nv(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;Su.set(i),a.uniformMatrix2fv(this.addr,!1,Su),qe(e,i)}}function zv(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;wu.set(i),a.uniformMatrix3fv(this.addr,!1,wu),qe(e,i)}}function Ov(a,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;Mu.set(i),a.uniformMatrix4fv(this.addr,!1,Mu),qe(e,i)}}function Bv(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function Hv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;a.uniform2iv(this.addr,t),qe(e,t)}}function Gv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;a.uniform3iv(this.addr,t),qe(e,t)}}function Vv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;a.uniform4iv(this.addr,t),qe(e,t)}}function Wv(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function Xv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;a.uniform2uiv(this.addr,t),qe(e,t)}}function qv(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;a.uniform3uiv(this.addr,t),qe(e,t)}}function $v(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;a.uniform4uiv(this.addr,t),qe(e,t)}}function jv(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let s;this.type===a.SAMPLER_2D_SHADOW?(Rh.compareFunction=e.isReversedDepthBuffer()?sc:nc,s=Rh):s=Af,e.setTexture2D(t||s,n)}function Zv(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ef,n)}function Kv(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Cf,n)}function Yv(a,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Tf,n)}function Jv(a){switch(a){case 5126:return Dv;case 35664:return Iv;case 35665:return Uv;case 35666:return kv;case 35674:return Nv;case 35675:return zv;case 35676:return Ov;case 5124:case 35670:return Bv;case 35667:case 35671:return Hv;case 35668:case 35672:return Gv;case 35669:case 35673:return Vv;case 5125:return Wv;case 36294:return Xv;case 36295:return qv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Yv}}function Qv(a,t){a.uniform1fv(this.addr,t)}function tx(a,t){const e=oa(t,this.size,2);a.uniform2fv(this.addr,e)}function ex(a,t){const e=oa(t,this.size,3);a.uniform3fv(this.addr,e)}function ix(a,t){const e=oa(t,this.size,4);a.uniform4fv(this.addr,e)}function nx(a,t){const e=oa(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function sx(a,t){const e=oa(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function ax(a,t){const e=oa(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function rx(a,t){a.uniform1iv(this.addr,t)}function ox(a,t){a.uniform2iv(this.addr,t)}function lx(a,t){a.uniform3iv(this.addr,t)}function hx(a,t){a.uniform4iv(this.addr,t)}function cx(a,t){a.uniform1uiv(this.addr,t)}function ux(a,t){a.uniform2uiv(this.addr,t)}function dx(a,t){a.uniform3uiv(this.addr,t)}function fx(a,t){a.uniform4uiv(this.addr,t)}function px(a,t,e){const i=this.cache,n=t.length,s=Eo(e,n);Xe(i,s)||(a.uniform1iv(this.addr,s),qe(i,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=Rh:r=Af;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||r,s[o])}function mx(a,t,e){const i=this.cache,n=t.length,s=Eo(e,n);Xe(i,s)||(a.uniform1iv(this.addr,s),qe(i,s));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Ef,s[r])}function gx(a,t,e){const i=this.cache,n=t.length,s=Eo(e,n);Xe(i,s)||(a.uniform1iv(this.addr,s),qe(i,s));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||Cf,s[r])}function vx(a,t,e){const i=this.cache,n=t.length,s=Eo(e,n);Xe(i,s)||(a.uniform1iv(this.addr,s),qe(i,s));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Tf,s[r])}function xx(a){switch(a){case 5126:return Qv;case 35664:return tx;case 35665:return ex;case 35666:return ix;case 35674:return nx;case 35675:return sx;case 35676:return ax;case 5124:case 35670:return rx;case 35667:case 35671:return ox;case 35668:case 35672:return lx;case 35669:case 35673:return hx;case 5125:return cx;case 36294:return ux;case 36295:return dx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return vx}}class _x{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Jv(e.type)}}class bx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xx(e.type)}}class yx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,r=n.length;s!==r;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const hl=/(\w+)(\])?(\[|\.)?/g;function Au(a,t){a.seq.push(t),a.map[t.id]=t}function Mx(a,t,e){const i=a.name,n=i.length;for(hl.lastIndex=0;;){const s=hl.exec(i),r=hl.lastIndex;let o=s[1];const l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&r+2===n){Au(e,h===void 0?new _x(o,a,t):new bx(o,a,t));break}else{let u=e.map[o];u===void 0&&(u=new yx(o),Au(e,u)),e=u}}}class to{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);Mx(o,l,this)}const n=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(r):s.push(r);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,r=e.length;s!==r;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function Tu(a,t,e){const i=a.createShader(t);return a.shaderSource(i,e),a.compileShader(i),i}const wx=37297;let Sx=0;function Ax(a,t){const e=a.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=n;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}const Eu=new Ot;function Tx(a){Zt._getMatrix(Eu,Zt.workingColorSpace,a);const t=`mat3( ${Eu.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(a)){case ho:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function Cu(a,t,e){const i=a.getShaderParameter(t,a.COMPILE_STATUS),s=(a.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ax(a.getShaderSource(t),o)}else return s}function Ex(a,t){const e=Tx(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Cx={[Wh]:"Linear",[Xh]:"Reinhard",[qh]:"Cineon",[Mo]:"ACESFilmic",[jh]:"AgX",[Zh]:"Neutral",[$h]:"Custom"};function Rx(a,t){const e=Cx[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Tr=new L;function Px(){Zt.getLuminanceCoefficients(Tr);const a=Tr.x.toFixed(4),t=Tr.y.toFixed(4),e=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lx(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function Fx(a){const t=[];for(const e in a){const i=a[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Dx(a,t){const e={},i=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=a.getActiveAttrib(t,n),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function Fa(a){return a!==""}function Ru(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pu(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(a){return a.replace(Ix,kx)}const Ux=new Map;function kx(a,t){let e=Xt[t];if(e===void 0){const i=Ux.get(t);if(i!==void 0)e=Xt[i],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ph(e)}const Nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(a){return a.replace(Nx,zx)}function zx(a,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Fu(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Ox={[Zr]:"SHADOWMAP_TYPE_PCF",[La]:"SHADOWMAP_TYPE_VSM"};function Bx(a){return Ox[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hx={[rs]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[wo]:"ENVMAP_TYPE_CUBE_UV"};function Gx(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Hx[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const Vx={[Ys]:"ENVMAP_MODE_REFRACTION"};function Wx(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Vx[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Xx={[Kd]:"ENVMAP_BLENDING_MULTIPLY",[Fp]:"ENVMAP_BLENDING_MIX",[Dp]:"ENVMAP_BLENDING_ADD"};function qx(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Xx[a.combine]||"ENVMAP_BLENDING_NONE"}function $x(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function jx(a,t,e,i){const n=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=Bx(e),h=Gx(e),c=Wx(e),u=qx(e),d=$x(e),f=Lx(e),m=Fx(s),v=n.createProgram();let g,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Fa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Fa).join(`
`),p.length>0&&(p+=`
`)):(g=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),p=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==an?"#define TONE_MAPPING":"",e.toneMapping!==an?Xt.tonemapping_pars_fragment:"",e.toneMapping!==an?Rx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Ex("linearToOutputTexel",e.outputColorSpace),Px(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fa).join(`
`)),r=Ph(r),r=Ru(r,e),r=Pu(r,e),o=Ph(o),o=Ru(o,e),o=Pu(o,e),r=Lu(r),o=Lu(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=w+g+r,M=w+p+o,A=Tu(n,n.VERTEX_SHADER,T),y=Tu(n,n.FRAGMENT_SHADER,M);n.attachShader(v,A),n.attachShader(v,y),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function E(P){if(a.debug.checkShaderErrors){const D=n.getProgramInfoLog(v)||"",W=n.getShaderInfoLog(A)||"",$=n.getShaderInfoLog(y)||"",z=D.trim(),V=W.trim(),k=$.trim();let K=!0,tt=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(K=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,v,A,y);else{const at=Cu(n,A,"vertex"),ut=Cu(n,y,"fragment");Jt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+at+`
`+ut)}else z!==""?kt("WebGLProgram: Program Info Log:",z):(V===""||k==="")&&(tt=!1);tt&&(P.diagnostics={runnable:K,programLog:z,vertexShader:{log:V,prefix:g},fragmentShader:{log:k,prefix:p}})}n.deleteShader(A),n.deleteShader(y),x=new to(n,v),b=Dx(n,v)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(v,wx)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=y,this}let Zx=0;class Kx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Yx(t),e.set(t,i)),i}}class Yx{constructor(t){this.id=Zx++,this.code=t,this.usedTimes=0}}function Jx(a){return a===os||a===ro||a===oo}function Qx(a,t,e,i,n,s){const r=new of,o=new Kx,l=new Set,h=[],c=new Map,u=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,b,R,P,D,W){const $=P.fog,z=D.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=t.get(x.envMap||V,k),tt=K&&K.mapping===wo?K.image.height:null,at=f[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&kt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ut=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xt=ut!==void 0?ut.length:0;let Yt=0;z.morphAttributes.position!==void 0&&(Yt=1),z.morphAttributes.normal!==void 0&&(Yt=2),z.morphAttributes.color!==void 0&&(Yt=3);let Te,ie,Y,rt;if(at){const St=Qi[at];Te=St.vertexShader,ie=St.fragmentShader}else{Te=x.vertexShader,ie=x.fragmentShader;const St=o.getVertexShaderStage(x),Ce=o.getFragmentShaderStage(x);o.update(x,St,Ce),Y=St.id,rt=Ce.id}const et=a.getRenderTarget(),Nt=a.state.buffers.depth.getReversed(),Ht=D.isInstancedMesh===!0,It=D.isBatchedMesh===!0,De=!!x.map,jt=!!x.matcap,de=!!K,ne=!!x.aoMap,te=!!x.lightMap,ze=!!x.bumpMap&&x.wireframe===!1,He=!!x.normalMap,$e=!!x.displacementMap,Ke=!!x.emissiveMap,Ee=!!x.metalnessMap,Oe=!!x.roughnessMap,I=x.anisotropy>0,pi=x.clearcoat>0,re=x.dispersion>0,C=x.iridescence>0,_=x.sheen>0,N=x.transmission>0,H=I&&!!x.anisotropyMap,X=pi&&!!x.clearcoatMap,nt=pi&&!!x.clearcoatNormalMap,ot=pi&&!!x.clearcoatRoughnessMap,q=C&&!!x.iridescenceMap,Z=C&&!!x.iridescenceThicknessMap,lt=_&&!!x.sheenColorMap,Ct=_&&!!x.sheenRoughnessMap,dt=!!x.specularMap,ht=!!x.specularColorMap,Ft=!!x.specularIntensityMap,Ut=N&&!!x.transmissionMap,Gt=N&&!!x.thicknessMap,F=!!x.gradientMap,st=!!x.alphaMap,j=x.alphaTest>0,ct=!!x.alphaHash,gt=!!x.extensions;let Q=an;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Q=a.toneMapping);const Et={shaderID:at,shaderType:x.type,shaderName:x.name,vertexShader:Te,fragmentShader:ie,defines:x.defines,customVertexShaderID:Y,customFragmentShaderID:rt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:It,batchingColor:It&&D._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&D.instanceColor!==null,instancingMorph:Ht&&D.morphTexture!==null,outputColorSpace:et===null?a.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:jt,envMap:de,envMapMode:de&&K.mapping,envMapCubeUVHeight:tt,aoMap:ne,lightMap:te,bumpMap:ze,normalMap:He,displacementMap:$e,emissiveMap:Ke,normalMapObjectSpace:He&&x.normalMapType===Up,normalMapTangentSpace:He&&x.normalMapType===Oc,packedNormalMap:He&&x.normalMapType===Oc&&Jx(x.normalMap.format),metalnessMap:Ee,roughnessMap:Oe,anisotropy:I,anisotropyMap:H,clearcoat:pi,clearcoatMap:X,clearcoatNormalMap:nt,clearcoatRoughnessMap:ot,dispersion:re,iridescence:C,iridescenceMap:q,iridescenceThicknessMap:Z,sheen:_,sheenColorMap:lt,sheenRoughnessMap:Ct,specularMap:dt,specularColorMap:ht,specularIntensityMap:Ft,transmission:N,transmissionMap:Ut,thicknessMap:Gt,gradientMap:F,opaque:x.transparent===!1&&x.blending===sn&&x.alphaToCoverage===!1,alphaMap:st,alphaTest:j,alphaHash:ct,combine:x.combine,mapUv:De&&m(x.map.channel),aoMapUv:ne&&m(x.aoMap.channel),lightMapUv:te&&m(x.lightMap.channel),bumpMapUv:ze&&m(x.bumpMap.channel),normalMapUv:He&&m(x.normalMap.channel),displacementMapUv:$e&&m(x.displacementMap.channel),emissiveMapUv:Ke&&m(x.emissiveMap.channel),metalnessMapUv:Ee&&m(x.metalnessMap.channel),roughnessMapUv:Oe&&m(x.roughnessMap.channel),anisotropyMapUv:H&&m(x.anisotropyMap.channel),clearcoatMapUv:X&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:nt&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&m(x.sheenRoughnessMap.channel),specularMapUv:dt&&m(x.specularMap.channel),specularColorMapUv:ht&&m(x.specularColorMap.channel),specularIntensityMapUv:Ft&&m(x.specularIntensityMap.channel),transmissionMapUv:Ut&&m(x.transmissionMap.channel),thicknessMapUv:Gt&&m(x.thicknessMap.channel),alphaMapUv:st&&m(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(He||I),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(De||st),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&He===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Nt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Yt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:Q,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&Zt.getTransfer(x.map.colorSpace)===ae,decodeVideoTextureEmissive:Ke&&x.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(x.emissiveMap.colorSpace)===ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===di,flipSided:x.side===vi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:gt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&x.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function g(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)b.push(R),b.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(b,x),w(b,x),b.push(a.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function w(x,b){r.disableAll(),b.instancing&&r.enable(0),b.instancingColor&&r.enable(1),b.instancingMorph&&r.enable(2),b.matcap&&r.enable(3),b.envMap&&r.enable(4),b.normalMapObjectSpace&&r.enable(5),b.normalMapTangentSpace&&r.enable(6),b.clearcoat&&r.enable(7),b.iridescence&&r.enable(8),b.alphaTest&&r.enable(9),b.vertexColors&&r.enable(10),b.vertexAlphas&&r.enable(11),b.vertexUv1s&&r.enable(12),b.vertexUv2s&&r.enable(13),b.vertexUv3s&&r.enable(14),b.vertexTangents&&r.enable(15),b.anisotropy&&r.enable(16),b.alphaHash&&r.enable(17),b.batching&&r.enable(18),b.dispersion&&r.enable(19),b.batchingColor&&r.enable(20),b.gradientMap&&r.enable(21),b.packedNormalMap&&r.enable(22),b.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),b.numLightProbeGrids>0&&r.enable(22),b.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function T(x){const b=f[x.type];let R;if(b){const P=Qi[b];R=Oa.clone(P.uniforms)}else R=x.uniforms;return R}function M(x,b){let R=c.get(b);return R!==void 0?++R.usedTimes:(R=new jx(a,b,x,n),h.push(R),c.set(b,R)),R}function A(x){if(--x.usedTimes===0){const b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),c.delete(x.cacheKey),x.destroy()}}function y(x){o.remove(x)}function E(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:T,acquireProgram:M,releaseProgram:A,releaseShaderCache:y,programs:h,dispose:E}}function t_(){let a=new WeakMap;function t(r){return a.has(r)}function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function i(r){a.delete(r)}function n(r,o,l){a.get(r)[o]=l}function s(){a=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function e_(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.materialVariant!==t.materialVariant?a.materialVariant-t.materialVariant:a.z!==t.z?a.z-t.z:a.id-t.id}function Du(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function Iu(){const a=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function r(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,v,g,p){let w=a[t];return w===void 0?(w={id:d.id,object:d,geometry:f,material:m,materialVariant:r(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:p},a[t]=w):(w.id=d.id,w.object=d,w.geometry=f,w.material=m,w.materialVariant=r(d),w.groupOrder=v,w.renderOrder=d.renderOrder,w.z=g,w.group=p),t++,w}function l(d,f,m,v,g,p){const w=o(d,f,m,v,g,p);m.transmission>0?i.push(w):m.transparent===!0?n.push(w):e.push(w)}function h(d,f,m,v,g,p){const w=o(d,f,m,v,g,p);m.transmission>0?i.unshift(w):m.transparent===!0?n.unshift(w):e.unshift(w)}function c(d,f,m){e.length>1&&e.sort(d||e_),i.length>1&&i.sort(f||Du),n.length>1&&n.sort(f||Du),m&&(e.reverse(),i.reverse(),n.reverse())}function u(){for(let d=t,f=a.length;d<f;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:h,finish:u,sort:c}}function i_(){let a=new WeakMap;function t(i,n){const s=a.get(i);let r;return s===void 0?(r=new Iu,a.set(i,[r])):n>=s.length?(r=new Iu,s.push(r)):r=s[n],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function n_(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new zt};break;case"SpotLight":e={position:new L,direction:new L,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new L,halfWidth:new L,halfHeight:new L};break}return a[t.id]=e,e}}}function s_(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let a_=0;function r_(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function o_(a){const t=new n_,e=s_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);const n=new L,s=new me,r=new me;function o(h){let c=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,w=0,T=0,M=0,A=0,y=0,E=0;h.sort(r_);for(let b=0,R=h.length;b<R;b++){const P=h[b],D=P.color,W=P.intensity,$=P.distance;let z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===os?z=P.shadow.map.texture:z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=D.r*W,u+=D.g*W,d+=D.b*W;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],W);E++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,K=e.get(P);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,i.directionalShadow[f]=K,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=P.shadow.matrix,w++}i.directional[f]=V,f++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(D).multiplyScalar(W),V.distance=$,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[v]=V;const k=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,k.updateMatrices(P),P.castShadow&&y++),i.spotLightMatrix[v]=k.matrix,P.castShadow){const K=e.get(P);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,i.spotShadow[v]=K,i.spotShadowMap[v]=z,M++}v++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(D).multiplyScalar(W),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=V,g++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const k=P.shadow,K=e.get(P);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,K.shadowCameraNear=k.camera.near,K.shadowCameraFar=k.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=P.shadow.matrix,T++}i.point[m]=V,m++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(W),V.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[p]=V,p++}}g>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==f||x.pointLength!==m||x.spotLength!==v||x.rectAreaLength!==g||x.hemiLength!==p||x.numDirectionalShadows!==w||x.numPointShadows!==T||x.numSpotShadows!==M||x.numSpotMaps!==A||x.numLightProbes!==E)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+A-y,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=E,x.directionalLength=f,x.pointLength=m,x.spotLength=v,x.rectAreaLength=g,x.hemiLength=p,x.numDirectionalShadows=w,x.numPointShadows=T,x.numSpotShadows=M,x.numSpotMaps=A,x.numLightProbes=E,i.version=a_++)}function l(h,c){let u=0,d=0,f=0,m=0,v=0;const g=c.matrixWorldInverse;for(let p=0,w=h.length;p<w;p++){const T=h[p];if(T.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),u++}else if(T.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(T.matrixWorld),n.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),f++}else if(T.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),r.identity(),s.copy(T.matrixWorld),s.premultiply(g),r.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),m++}else if(T.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),d++}else if(T.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Uu(a){const t=new o_(a),e=[],i=[],n=[];function s(d){u.camera=d,e.length=0,i.length=0,n.length=0}function r(d){e.push(d)}function o(d){i.push(d)}function l(d){n.push(d)}function h(){t.setup(e)}function c(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:h,setupLightsView:c,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function l_(a){let t=new WeakMap;function e(n,s=0){const r=t.get(n);let o;return r===void 0?(o=new Uu(a),t.set(n,[o])):s>=r.length?(o=new Uu(a),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const h_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,u_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],d_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],ku=new me,ba=new L,cl=new L;function f_(a,t,e){let i=new pf;const n=new vt,s=new vt,r=new Le,o=new Mm,l=new wm,h={},c=e.maxTextureSize,u={[kn]:vi,[vi]:kn,[di]:di},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:h_,fragmentShader:c_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ne;m.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Fe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zr;let p=this.type;this.render=function(y,E,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===fp&&(kt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zr);const b=a.getRenderTarget(),R=a.getActiveCubeFace(),P=a.getActiveMipmapLevel(),D=a.state;D.setBlending(nn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const W=p!==this.type;W&&E.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(z=>z.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,z=y.length;$<z;$++){const V=y[$],k=V.shadow;if(k===void 0){kt("WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);const K=k.getFrameExtents();n.multiply(K),s.copy(k.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/K.x),n.x=s.x*K.x,k.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/K.y),n.y=s.y*K.y,k.mapSize.y=s.y));const tt=a.state.buffers.depth.getReversed();if(k.camera._reversedDepth=tt,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===La){if(V.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new xi(n.x,n.y,{format:os,type:Si,minFilter:li,magFilter:li,generateMipmaps:!1}),k.map.texture.name=V.name+".shadowMap",k.map.depthTexture=new Qs(n.x,n.y,Vi),k.map.depthTexture.name=V.name+".shadowMapDepth",k.map.depthTexture.format=yn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=oe,k.map.depthTexture.magFilter=oe}else V.isPointLight?(k.map=new Sf(n.x),k.map.depthTexture=new xm(n.x,rn)):(k.map=new xi(n.x,n.y),k.map.depthTexture=new Qs(n.x,n.y,rn)),k.map.depthTexture.name=V.name+".shadowMap",k.map.depthTexture.format=yn,this.type===Zr?(k.map.depthTexture.compareFunction=tt?sc:nc,k.map.depthTexture.minFilter=li,k.map.depthTexture.magFilter=li):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=oe,k.map.depthTexture.magFilter=oe);k.camera.updateProjectionMatrix()}const at=k.map.isWebGLCubeRenderTarget?6:1;for(let ut=0;ut<at;ut++){if(k.map.isWebGLCubeRenderTarget)a.setRenderTarget(k.map,ut),a.clear();else{ut===0&&(a.setRenderTarget(k.map),a.clear());const xt=k.getViewport(ut);r.set(s.x*xt.x,s.y*xt.y,s.x*xt.z,s.y*xt.w),D.viewport(r)}if(V.isPointLight){const xt=k.camera,Yt=k.matrix,Te=V.distance||xt.far;Te!==xt.far&&(xt.far=Te,xt.updateProjectionMatrix()),ba.setFromMatrixPosition(V.matrixWorld),xt.position.copy(ba),cl.copy(xt.position),cl.add(u_[ut]),xt.up.copy(d_[ut]),xt.lookAt(cl),xt.updateMatrixWorld(),Yt.makeTranslation(-ba.x,-ba.y,-ba.z),ku.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ku,xt.coordinateSystem,xt.reversedDepth)}else k.updateMatrices(V);i=k.getFrustum(),M(E,x,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===La&&w(k,x),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,a.setRenderTarget(b,R,P)};function w(y,E){const x=t.update(v);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new xi(n.x,n.y,{format:os,type:Si})),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,a.setRenderTarget(y.mapPass),a.clear(),a.renderBufferDirect(E,null,x,d,v,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,a.setRenderTarget(y.map),a.clear(),a.renderBufferDirect(E,null,x,f,v,null)}function T(y,E,x,b){let R=null;const P=x.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:o,a.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const D=R.uuid,W=E.uuid;let $=h[D];$===void 0&&($={},h[D]=$);let z=$[W];z===void 0&&(z=R.clone(),$[W]=z,E.addEventListener("dispose",A)),R=z}if(R.visible=E.visible,R.wireframe=E.wireframe,b===La?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:u[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=a.properties.get(R);D.light=x}return R}function M(y,E,x,b,R){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&R===La)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,y.matrixWorld);const W=t.update(y),$=y.material;if(Array.isArray($)){const z=W.groups;for(let V=0,k=z.length;V<k;V++){const K=z[V],tt=$[K.materialIndex];if(tt&&tt.visible){const at=T(y,tt,b,R);y.onBeforeShadow(a,y,E,x,W,at,K),a.renderBufferDirect(x,null,W,at,y,K),y.onAfterShadow(a,y,E,x,W,at,K)}}}else if($.visible){const z=T(y,$,b,R);y.onBeforeShadow(a,y,E,x,W,z,null),a.renderBufferDirect(x,null,W,z,y,null),y.onAfterShadow(a,y,E,x,W,z,null)}}const D=y.children;for(let W=0,$=D.length;W<$;W++)M(D[W],E,x,b,R)}function A(y){y.target.removeEventListener("dispose",A);for(const x in h){const b=h[x],R=y.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function p_(a,t){function e(){let F=!1;const st=new Le;let j=null;const ct=new Le(0,0,0,0);return{setMask:function(gt){j!==gt&&!F&&(a.colorMask(gt,gt,gt,gt),j=gt)},setLocked:function(gt){F=gt},setClear:function(gt,Q,Et,St,Ce){Ce===!0&&(gt*=St,Q*=St,Et*=St),st.set(gt,Q,Et,St),ct.equals(st)===!1&&(a.clearColor(gt,Q,Et,St),ct.copy(st))},reset:function(){F=!1,j=null,ct.set(-1,0,0,0)}}}function i(){let F=!1,st=!1,j=null,ct=null,gt=null;return{setReversed:function(Q){if(st!==Q){const Et=t.get("EXT_clip_control");Q?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),st=Q;const St=gt;gt=null,this.setClear(St)}},getReversed:function(){return st},setTest:function(Q){Q?et(a.DEPTH_TEST):Nt(a.DEPTH_TEST)},setMask:function(Q){j!==Q&&!F&&(a.depthMask(Q),j=Q)},setFunc:function(Q){if(st&&(Q=Xp[Q]),ct!==Q){switch(Q){case Gl:a.depthFunc(a.NEVER);break;case Vl:a.depthFunc(a.ALWAYS);break;case Wl:a.depthFunc(a.LESS);break;case Ks:a.depthFunc(a.LEQUAL);break;case Xl:a.depthFunc(a.EQUAL);break;case ql:a.depthFunc(a.GEQUAL);break;case $l:a.depthFunc(a.GREATER);break;case jl:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ct=Q}},setLocked:function(Q){F=Q},setClear:function(Q){gt!==Q&&(gt=Q,st&&(Q=1-Q),a.clearDepth(Q))},reset:function(){F=!1,j=null,ct=null,gt=null,st=!1}}}function n(){let F=!1,st=null,j=null,ct=null,gt=null,Q=null,Et=null,St=null,Ce=null;return{setTest:function(ge){F||(ge?et(a.STENCIL_TEST):Nt(a.STENCIL_TEST))},setMask:function(ge){st!==ge&&!F&&(a.stencilMask(ge),st=ge)},setFunc:function(ge,Xi,qi){(j!==ge||ct!==Xi||gt!==qi)&&(a.stencilFunc(ge,Xi,qi),j=ge,ct=Xi,gt=qi)},setOp:function(ge,Xi,qi){(Q!==ge||Et!==Xi||St!==qi)&&(a.stencilOp(ge,Xi,qi),Q=ge,Et=Xi,St=qi)},setLocked:function(ge){F=ge},setClear:function(ge){Ce!==ge&&(a.clearStencil(ge),Ce=ge)},reset:function(){F=!1,st=null,j=null,ct=null,gt=null,Q=null,Et=null,St=null,Ce=null}}}const s=new e,r=new i,o=new n,l=new WeakMap,h=new WeakMap;let c={},u={},d={},f=new WeakMap,m=[],v=null,g=!1,p=null,w=null,T=null,M=null,A=null,y=null,E=null,x=new zt(0,0,0),b=0,R=!1,P=null,D=null,W=null,$=null,z=null;const V=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,K=0;const tt=a.getParameter(a.VERSION);tt.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(tt)[1]),k=K>=1):tt.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),k=K>=2);let at=null,ut={};const xt=a.getParameter(a.SCISSOR_BOX),Yt=a.getParameter(a.VIEWPORT),Te=new Le().fromArray(xt),ie=new Le().fromArray(Yt);function Y(F,st,j,ct){const gt=new Uint8Array(4),Q=a.createTexture();a.bindTexture(F,Q),a.texParameteri(F,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(F,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Et=0;Et<j;Et++)F===a.TEXTURE_3D||F===a.TEXTURE_2D_ARRAY?a.texImage3D(st,0,a.RGBA,1,1,ct,0,a.RGBA,a.UNSIGNED_BYTE,gt):a.texImage2D(st+Et,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,gt);return Q}const rt={};rt[a.TEXTURE_2D]=Y(a.TEXTURE_2D,a.TEXTURE_2D,1),rt[a.TEXTURE_CUBE_MAP]=Y(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[a.TEXTURE_2D_ARRAY]=Y(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),rt[a.TEXTURE_3D]=Y(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(a.DEPTH_TEST),r.setFunc(Ks),ze(!1),He(kc),et(a.CULL_FACE),ne(nn);function et(F){c[F]!==!0&&(a.enable(F),c[F]=!0)}function Nt(F){c[F]!==!1&&(a.disable(F),c[F]=!1)}function Ht(F,st){return d[F]!==st?(a.bindFramebuffer(F,st),d[F]=st,F===a.DRAW_FRAMEBUFFER&&(d[a.FRAMEBUFFER]=st),F===a.FRAMEBUFFER&&(d[a.DRAW_FRAMEBUFFER]=st),!0):!1}function It(F,st){let j=m,ct=!1;if(F){j=f.get(st),j===void 0&&(j=[],f.set(st,j));const gt=F.textures;if(j.length!==gt.length||j[0]!==a.COLOR_ATTACHMENT0){for(let Q=0,Et=gt.length;Q<Et;Q++)j[Q]=a.COLOR_ATTACHMENT0+Q;j.length=gt.length,ct=!0}}else j[0]!==a.BACK&&(j[0]=a.BACK,ct=!0);ct&&a.drawBuffers(j)}function De(F){return v!==F?(a.useProgram(F),v=F,!0):!1}const jt={[Qn]:a.FUNC_ADD,[mp]:a.FUNC_SUBTRACT,[gp]:a.FUNC_REVERSE_SUBTRACT};jt[vp]=a.MIN,jt[xp]=a.MAX;const de={[_p]:a.ZERO,[bp]:a.ONE,[yp]:a.SRC_COLOR,[Bl]:a.SRC_ALPHA,[Ep]:a.SRC_ALPHA_SATURATE,[Ap]:a.DST_COLOR,[wp]:a.DST_ALPHA,[Mp]:a.ONE_MINUS_SRC_COLOR,[Hl]:a.ONE_MINUS_SRC_ALPHA,[Tp]:a.ONE_MINUS_DST_COLOR,[Sp]:a.ONE_MINUS_DST_ALPHA,[Cp]:a.CONSTANT_COLOR,[Rp]:a.ONE_MINUS_CONSTANT_COLOR,[Pp]:a.CONSTANT_ALPHA,[Lp]:a.ONE_MINUS_CONSTANT_ALPHA};function ne(F,st,j,ct,gt,Q,Et,St,Ce,ge){if(F===nn){g===!0&&(Nt(a.BLEND),g=!1);return}if(g===!1&&(et(a.BLEND),g=!0),F!==pp){if(F!==p||ge!==R){if((w!==Qn||A!==Qn)&&(a.blendEquation(a.FUNC_ADD),w=Qn,A=Qn),ge)switch(F){case sn:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case We:a.blendFunc(a.ONE,a.ONE);break;case Nc:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case zc:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Jt("WebGLState: Invalid blending: ",F);break}else switch(F){case sn:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case We:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Nc:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zc:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",F);break}T=null,M=null,y=null,E=null,x.set(0,0,0),b=0,p=F,R=ge}return}gt=gt||st,Q=Q||j,Et=Et||ct,(st!==w||gt!==A)&&(a.blendEquationSeparate(jt[st],jt[gt]),w=st,A=gt),(j!==T||ct!==M||Q!==y||Et!==E)&&(a.blendFuncSeparate(de[j],de[ct],de[Q],de[Et]),T=j,M=ct,y=Q,E=Et),(St.equals(x)===!1||Ce!==b)&&(a.blendColor(St.r,St.g,St.b,Ce),x.copy(St),b=Ce),p=F,R=!1}function te(F,st){F.side===di?Nt(a.CULL_FACE):et(a.CULL_FACE);let j=F.side===vi;st&&(j=!j),ze(j),F.blending===sn&&F.transparent===!1?ne(nn):ne(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const ct=F.stencilWrite;o.setTest(ct),ct&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?et(a.SAMPLE_ALPHA_TO_COVERAGE):Nt(a.SAMPLE_ALPHA_TO_COVERAGE)}function ze(F){P!==F&&(F?a.frontFace(a.CW):a.frontFace(a.CCW),P=F)}function He(F){F!==up?(et(a.CULL_FACE),F!==D&&(F===kc?a.cullFace(a.BACK):F===dp?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Nt(a.CULL_FACE),D=F}function $e(F){F!==W&&(k&&a.lineWidth(F),W=F)}function Ke(F,st,j){F?(et(a.POLYGON_OFFSET_FILL),($!==st||z!==j)&&($=st,z=j,r.getReversed()&&(st=-st),a.polygonOffset(st,j))):Nt(a.POLYGON_OFFSET_FILL)}function Ee(F){F?et(a.SCISSOR_TEST):Nt(a.SCISSOR_TEST)}function Oe(F){F===void 0&&(F=a.TEXTURE0+V-1),at!==F&&(a.activeTexture(F),at=F)}function I(F,st,j){j===void 0&&(at===null?j=a.TEXTURE0+V-1:j=at);let ct=ut[j];ct===void 0&&(ct={type:void 0,texture:void 0},ut[j]=ct),(ct.type!==F||ct.texture!==st)&&(at!==j&&(a.activeTexture(j),at=j),a.bindTexture(F,st||rt[F]),ct.type=F,ct.texture=st)}function pi(){const F=ut[at];F!==void 0&&F.type!==void 0&&(a.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function re(){try{a.compressedTexImage2D(...arguments)}catch(F){Jt("WebGLState:",F)}}function C(){try{a.compressedTexImage3D(...arguments)}catch(F){Jt("WebGLState:",F)}}function _(){try{a.texSubImage2D(...arguments)}catch(F){Jt("WebGLState:",F)}}function N(){try{a.texSubImage3D(...arguments)}catch(F){Jt("WebGLState:",F)}}function H(){try{a.compressedTexSubImage2D(...arguments)}catch(F){Jt("WebGLState:",F)}}function X(){try{a.compressedTexSubImage3D(...arguments)}catch(F){Jt("WebGLState:",F)}}function nt(){try{a.texStorage2D(...arguments)}catch(F){Jt("WebGLState:",F)}}function ot(){try{a.texStorage3D(...arguments)}catch(F){Jt("WebGLState:",F)}}function q(){try{a.texImage2D(...arguments)}catch(F){Jt("WebGLState:",F)}}function Z(){try{a.texImage3D(...arguments)}catch(F){Jt("WebGLState:",F)}}function lt(F){return u[F]!==void 0?u[F]:a.getParameter(F)}function Ct(F,st){u[F]!==st&&(a.pixelStorei(F,st),u[F]=st)}function dt(F){Te.equals(F)===!1&&(a.scissor(F.x,F.y,F.z,F.w),Te.copy(F))}function ht(F){ie.equals(F)===!1&&(a.viewport(F.x,F.y,F.z,F.w),ie.copy(F))}function Ft(F,st){let j=h.get(st);j===void 0&&(j=new WeakMap,h.set(st,j));let ct=j.get(F);ct===void 0&&(ct=a.getUniformBlockIndex(st,F.name),j.set(F,ct))}function Ut(F,st){const ct=h.get(st).get(F);l.get(st)!==ct&&(a.uniformBlockBinding(st,ct,F.__bindingPointIndex),l.set(st,ct))}function Gt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),c={},u={},at=null,ut={},d={},f=new WeakMap,m=[],v=null,g=!1,p=null,w=null,T=null,M=null,A=null,y=null,E=null,x=new zt(0,0,0),b=0,R=!1,P=null,D=null,W=null,$=null,z=null,Te.set(0,0,a.canvas.width,a.canvas.height),ie.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:et,disable:Nt,bindFramebuffer:Ht,drawBuffers:It,useProgram:De,setBlending:ne,setMaterial:te,setFlipSided:ze,setCullFace:He,setLineWidth:$e,setPolygonOffset:Ke,setScissorTest:Ee,activeTexture:Oe,bindTexture:I,unbindTexture:pi,compressedTexImage2D:re,compressedTexImage3D:C,texImage2D:q,texImage3D:Z,pixelStorei:Ct,getParameter:lt,updateUBOMapping:Ft,uniformBlockBinding:Ut,texStorage2D:nt,texStorage3D:ot,texSubImage2D:_,texSubImage3D:N,compressedTexSubImage2D:H,compressedTexSubImage3D:X,scissor:dt,viewport:ht,reset:Gt}}function m_(a,t,e,i,n,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new vt,c=new WeakMap,u=new Set;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,_){return m?new OffscreenCanvas(C,_):Na("canvas")}function g(C,_,N){let H=1;const X=re(C);if((X.width>N||X.height>N)&&(H=N/Math.max(X.width,X.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const nt=Math.floor(H*X.width),ot=Math.floor(H*X.height);d===void 0&&(d=v(nt,ot));const q=_?v(nt,ot):d;return q.width=nt,q.height=ot,q.getContext("2d").drawImage(C,0,0,nt,ot),kt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+nt+"x"+ot+")."),q}else return"data"in C&&kt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),C;return C}function p(C){return C.generateMipmaps}function w(C){a.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?a.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function M(C,_,N,H,X,nt=!1){if(C!==null){if(a[C]!==void 0)return a[C];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ot;H&&(ot=t.get("EXT_texture_norm16"),ot||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=_;if(_===a.RED&&(N===a.FLOAT&&(q=a.R32F),N===a.HALF_FLOAT&&(q=a.R16F),N===a.UNSIGNED_BYTE&&(q=a.R8),N===a.UNSIGNED_SHORT&&ot&&(q=ot.R16_EXT),N===a.SHORT&&ot&&(q=ot.R16_SNORM_EXT)),_===a.RED_INTEGER&&(N===a.UNSIGNED_BYTE&&(q=a.R8UI),N===a.UNSIGNED_SHORT&&(q=a.R16UI),N===a.UNSIGNED_INT&&(q=a.R32UI),N===a.BYTE&&(q=a.R8I),N===a.SHORT&&(q=a.R16I),N===a.INT&&(q=a.R32I)),_===a.RG&&(N===a.FLOAT&&(q=a.RG32F),N===a.HALF_FLOAT&&(q=a.RG16F),N===a.UNSIGNED_BYTE&&(q=a.RG8),N===a.UNSIGNED_SHORT&&ot&&(q=ot.RG16_EXT),N===a.SHORT&&ot&&(q=ot.RG16_SNORM_EXT)),_===a.RG_INTEGER&&(N===a.UNSIGNED_BYTE&&(q=a.RG8UI),N===a.UNSIGNED_SHORT&&(q=a.RG16UI),N===a.UNSIGNED_INT&&(q=a.RG32UI),N===a.BYTE&&(q=a.RG8I),N===a.SHORT&&(q=a.RG16I),N===a.INT&&(q=a.RG32I)),_===a.RGB_INTEGER&&(N===a.UNSIGNED_BYTE&&(q=a.RGB8UI),N===a.UNSIGNED_SHORT&&(q=a.RGB16UI),N===a.UNSIGNED_INT&&(q=a.RGB32UI),N===a.BYTE&&(q=a.RGB8I),N===a.SHORT&&(q=a.RGB16I),N===a.INT&&(q=a.RGB32I)),_===a.RGBA_INTEGER&&(N===a.UNSIGNED_BYTE&&(q=a.RGBA8UI),N===a.UNSIGNED_SHORT&&(q=a.RGBA16UI),N===a.UNSIGNED_INT&&(q=a.RGBA32UI),N===a.BYTE&&(q=a.RGBA8I),N===a.SHORT&&(q=a.RGBA16I),N===a.INT&&(q=a.RGBA32I)),_===a.RGB&&(N===a.UNSIGNED_SHORT&&ot&&(q=ot.RGB16_EXT),N===a.SHORT&&ot&&(q=ot.RGB16_SNORM_EXT),N===a.UNSIGNED_INT_5_9_9_9_REV&&(q=a.RGB9_E5),N===a.UNSIGNED_INT_10F_11F_11F_REV&&(q=a.R11F_G11F_B10F)),_===a.RGBA){const Z=nt?ho:Zt.getTransfer(X);N===a.FLOAT&&(q=a.RGBA32F),N===a.HALF_FLOAT&&(q=a.RGBA16F),N===a.UNSIGNED_BYTE&&(q=Z===ae?a.SRGB8_ALPHA8:a.RGBA8),N===a.UNSIGNED_SHORT&&ot&&(q=ot.RGBA16_EXT),N===a.SHORT&&ot&&(q=ot.RGBA16_SNORM_EXT),N===a.UNSIGNED_SHORT_4_4_4_4&&(q=a.RGBA4),N===a.UNSIGNED_SHORT_5_5_5_1&&(q=a.RGB5_A1)}return(q===a.R16F||q===a.R32F||q===a.RG16F||q===a.RG32F||q===a.RGBA16F||q===a.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function A(C,_){let N;return C?_===null||_===rn||_===ka?N=a.DEPTH24_STENCIL8:_===Vi?N=a.DEPTH32F_STENCIL8:_===Ua&&(N=a.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===rn||_===ka?N=a.DEPTH_COMPONENT24:_===Vi?N=a.DEPTH_COMPONENT32F:_===Ua&&(N=a.DEPTH_COMPONENT16),N}function y(C,_){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==oe&&C.minFilter!==li?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function E(C){const _=C.target;_.removeEventListener("dispose",E),b(_),_.isVideoTexture&&c.delete(_),_.isHTMLTexture&&u.delete(_)}function x(C){const _=C.target;_.removeEventListener("dispose",x),P(_)}function b(C){const _=i.get(C);if(_.__webglInit===void 0)return;const N=C.source,H=f.get(N);if(H){const X=H[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&R(C),Object.keys(H).length===0&&f.delete(N)}i.remove(C)}function R(C){const _=i.get(C);a.deleteTexture(_.__webglTexture);const N=C.source,H=f.get(N);delete H[_.__cacheKey],r.memory.textures--}function P(C){const _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let X=0;X<_.__webglFramebuffer[H].length;X++)a.deleteFramebuffer(_.__webglFramebuffer[H][X]);else a.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)a.deleteFramebuffer(_.__webglFramebuffer[H]);else a.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&a.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&a.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&a.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=C.textures;for(let H=0,X=N.length;H<X;H++){const nt=i.get(N[H]);nt.__webglTexture&&(a.deleteTexture(nt.__webglTexture),r.memory.textures--),i.remove(N[H])}i.remove(C)}let D=0;function W(){D=0}function $(){return D}function z(C){D=C}function V(){const C=D;return C>=n.maxTextures&&kt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),D+=1,C}function k(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function K(C,_){const N=i.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const H=C.image;if(H===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(N,C,_);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(a.TEXTURE_2D,N.__webglTexture,a.TEXTURE0+_)}function tt(C,_){const N=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){Nt(N,C,_);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(a.TEXTURE_2D_ARRAY,N.__webglTexture,a.TEXTURE0+_)}function at(C,_){const N=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){Nt(N,C,_);return}e.bindTexture(a.TEXTURE_3D,N.__webglTexture,a.TEXTURE0+_)}function ut(C,_){const N=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){Ht(N,C,_);return}e.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+_)}const xt={[bn]:a.REPEAT,[Gi]:a.CLAMP_TO_EDGE,[Zl]:a.MIRRORED_REPEAT},Yt={[oe]:a.NEAREST,[Wa]:a.NEAREST_MIPMAP_NEAREST,[Ja]:a.NEAREST_MIPMAP_LINEAR,[li]:a.LINEAR,[Fo]:a.LINEAR_MIPMAP_NEAREST,[is]:a.LINEAR_MIPMAP_LINEAR},Te={[kp]:a.NEVER,[Hp]:a.ALWAYS,[Np]:a.LESS,[nc]:a.LEQUAL,[zp]:a.EQUAL,[sc]:a.GEQUAL,[Op]:a.GREATER,[Bp]:a.NOTEQUAL};function ie(C,_){if(_.type===Vi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===li||_.magFilter===Fo||_.magFilter===Ja||_.magFilter===is||_.minFilter===li||_.minFilter===Fo||_.minFilter===Ja||_.minFilter===is)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(C,a.TEXTURE_WRAP_S,xt[_.wrapS]),a.texParameteri(C,a.TEXTURE_WRAP_T,xt[_.wrapT]),(C===a.TEXTURE_3D||C===a.TEXTURE_2D_ARRAY)&&a.texParameteri(C,a.TEXTURE_WRAP_R,xt[_.wrapR]),a.texParameteri(C,a.TEXTURE_MAG_FILTER,Yt[_.magFilter]),a.texParameteri(C,a.TEXTURE_MIN_FILTER,Yt[_.minFilter]),_.compareFunction&&(a.texParameteri(C,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(C,a.TEXTURE_COMPARE_FUNC,Te[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===oe||_.minFilter!==Ja&&_.minFilter!==is||_.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");a.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Y(C,_){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",E));const H=_.source;let X=f.get(H);X===void 0&&(X={},f.set(H,X));const nt=k(_);if(nt!==C.__cacheKey){X[nt]===void 0&&(X[nt]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,N=!0),X[nt].usedTimes++;const ot=X[C.__cacheKey];ot!==void 0&&(X[C.__cacheKey].usedTimes--,ot.usedTimes===0&&R(_)),C.__cacheKey=nt,C.__webglTexture=X[nt].texture}return N}function rt(C,_,N){return Math.floor(Math.floor(C/N)/_)}function et(C,_,N,H){const nt=C.updateRanges;if(nt.length===0)e.texSubImage2D(a.TEXTURE_2D,0,0,0,_.width,_.height,N,H,_.data);else{nt.sort((Ct,dt)=>Ct.start-dt.start);let ot=0;for(let Ct=1;Ct<nt.length;Ct++){const dt=nt[ot],ht=nt[Ct],Ft=dt.start+dt.count,Ut=rt(ht.start,_.width,4),Gt=rt(dt.start,_.width,4);ht.start<=Ft+1&&Ut===Gt&&rt(ht.start+ht.count-1,_.width,4)===Ut?dt.count=Math.max(dt.count,ht.start+ht.count-dt.start):(++ot,nt[ot]=ht)}nt.length=ot+1;const q=e.getParameter(a.UNPACK_ROW_LENGTH),Z=e.getParameter(a.UNPACK_SKIP_PIXELS),lt=e.getParameter(a.UNPACK_SKIP_ROWS);e.pixelStorei(a.UNPACK_ROW_LENGTH,_.width);for(let Ct=0,dt=nt.length;Ct<dt;Ct++){const ht=nt[Ct],Ft=Math.floor(ht.start/4),Ut=Math.ceil(ht.count/4),Gt=Ft%_.width,F=Math.floor(Ft/_.width),st=Ut,j=1;e.pixelStorei(a.UNPACK_SKIP_PIXELS,Gt),e.pixelStorei(a.UNPACK_SKIP_ROWS,F),e.texSubImage2D(a.TEXTURE_2D,0,Gt,F,st,j,N,H,_.data)}C.clearUpdateRanges(),e.pixelStorei(a.UNPACK_ROW_LENGTH,q),e.pixelStorei(a.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(a.UNPACK_SKIP_ROWS,lt)}}function Nt(C,_,N){let H=a.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=a.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=a.TEXTURE_3D);const X=Y(C,_),nt=_.source;e.bindTexture(H,C.__webglTexture,a.TEXTURE0+N);const ot=i.get(nt);if(nt.version!==ot.__version||X===!0){if(e.activeTexture(a.TEXTURE0+N),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const j=Zt.getPrimaries(Zt.workingColorSpace),ct=_.colorSpace===Ln?null:Zt.getPrimaries(_.colorSpace),gt=_.colorSpace===Ln||j===ct?a.NONE:a.BROWSER_DEFAULT_WEBGL;e.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}e.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment);let Z=g(_.image,!1,n.maxTextureSize);Z=pi(_,Z);const lt=s.convert(_.format,_.colorSpace),Ct=s.convert(_.type);let dt=M(_.internalFormat,lt,Ct,_.normalized,_.colorSpace,_.isVideoTexture);ie(H,_);let ht;const Ft=_.mipmaps,Ut=_.isVideoTexture!==!0,Gt=ot.__version===void 0||X===!0,F=nt.dataReady,st=y(_,Z);if(_.isDepthTexture)dt=A(_.format===ns,_.type),Gt&&(Ut?e.texStorage2D(a.TEXTURE_2D,1,dt,Z.width,Z.height):e.texImage2D(a.TEXTURE_2D,0,dt,Z.width,Z.height,0,lt,Ct,null));else if(_.isDataTexture)if(Ft.length>0){Ut&&Gt&&e.texStorage2D(a.TEXTURE_2D,st,dt,Ft[0].width,Ft[0].height);for(let j=0,ct=Ft.length;j<ct;j++)ht=Ft[j],Ut?F&&e.texSubImage2D(a.TEXTURE_2D,j,0,0,ht.width,ht.height,lt,Ct,ht.data):e.texImage2D(a.TEXTURE_2D,j,dt,ht.width,ht.height,0,lt,Ct,ht.data);_.generateMipmaps=!1}else Ut?(Gt&&e.texStorage2D(a.TEXTURE_2D,st,dt,Z.width,Z.height),F&&et(_,Z,lt,Ct)):e.texImage2D(a.TEXTURE_2D,0,dt,Z.width,Z.height,0,lt,Ct,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ut&&Gt&&e.texStorage3D(a.TEXTURE_2D_ARRAY,st,dt,Ft[0].width,Ft[0].height,Z.depth);for(let j=0,ct=Ft.length;j<ct;j++)if(ht=Ft[j],_.format!==Wi)if(lt!==null)if(Ut){if(F)if(_.layerUpdates.size>0){const gt=fu(ht.width,ht.height,_.format,_.type);for(const Q of _.layerUpdates){const Et=ht.data.subarray(Q*gt/ht.data.BYTES_PER_ELEMENT,(Q+1)*gt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,j,0,0,Q,ht.width,ht.height,1,lt,Et)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,j,0,0,0,ht.width,ht.height,Z.depth,lt,ht.data)}else e.compressedTexImage3D(a.TEXTURE_2D_ARRAY,j,dt,ht.width,ht.height,Z.depth,0,ht.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?F&&e.texSubImage3D(a.TEXTURE_2D_ARRAY,j,0,0,0,ht.width,ht.height,Z.depth,lt,Ct,ht.data):e.texImage3D(a.TEXTURE_2D_ARRAY,j,dt,ht.width,ht.height,Z.depth,0,lt,Ct,ht.data)}else{Ut&&Gt&&e.texStorage2D(a.TEXTURE_2D,st,dt,Ft[0].width,Ft[0].height);for(let j=0,ct=Ft.length;j<ct;j++)ht=Ft[j],_.format!==Wi?lt!==null?Ut?F&&e.compressedTexSubImage2D(a.TEXTURE_2D,j,0,0,ht.width,ht.height,lt,ht.data):e.compressedTexImage2D(a.TEXTURE_2D,j,dt,ht.width,ht.height,0,ht.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?F&&e.texSubImage2D(a.TEXTURE_2D,j,0,0,ht.width,ht.height,lt,Ct,ht.data):e.texImage2D(a.TEXTURE_2D,j,dt,ht.width,ht.height,0,lt,Ct,ht.data)}else if(_.isDataArrayTexture)if(Ut){if(Gt&&e.texStorage3D(a.TEXTURE_2D_ARRAY,st,dt,Z.width,Z.height,Z.depth),F)if(_.layerUpdates.size>0){const j=fu(Z.width,Z.height,_.format,_.type);for(const ct of _.layerUpdates){const gt=Z.data.subarray(ct*j/Z.data.BYTES_PER_ELEMENT,(ct+1)*j/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ct,Z.width,Z.height,1,lt,Ct,gt)}_.clearLayerUpdates()}else e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,lt,Ct,Z.data)}else e.texImage3D(a.TEXTURE_2D_ARRAY,0,dt,Z.width,Z.height,Z.depth,0,lt,Ct,Z.data);else if(_.isData3DTexture)Ut?(Gt&&e.texStorage3D(a.TEXTURE_3D,st,dt,Z.width,Z.height,Z.depth),F&&e.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,lt,Ct,Z.data)):e.texImage3D(a.TEXTURE_3D,0,dt,Z.width,Z.height,Z.depth,0,lt,Ct,Z.data);else if(_.isFramebufferTexture){if(Gt)if(Ut)e.texStorage2D(a.TEXTURE_2D,st,dt,Z.width,Z.height);else{let j=Z.width,ct=Z.height;for(let gt=0;gt<st;gt++)e.texImage2D(a.TEXTURE_2D,gt,dt,j,ct,0,lt,Ct,null),j>>=1,ct>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in a){const j=a.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Z.parentNode!==j){j.appendChild(Z),u.add(_),j.onpaint=ct=>{const gt=ct.changedElements;for(const Q of u)gt.includes(Q.image)&&(Q.needsUpdate=!0)},j.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,Z);else{const gt=a.RGBA,Q=a.RGBA,Et=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,gt,Q,Et,Z)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Ut&&Gt){const j=re(Ft[0]);e.texStorage2D(a.TEXTURE_2D,st,dt,j.width,j.height)}for(let j=0,ct=Ft.length;j<ct;j++)ht=Ft[j],Ut?F&&e.texSubImage2D(a.TEXTURE_2D,j,0,0,lt,Ct,ht):e.texImage2D(a.TEXTURE_2D,j,dt,lt,Ct,ht);_.generateMipmaps=!1}else if(Ut){if(Gt){const j=re(Z);e.texStorage2D(a.TEXTURE_2D,st,dt,j.width,j.height)}F&&e.texSubImage2D(a.TEXTURE_2D,0,0,0,lt,Ct,Z)}else e.texImage2D(a.TEXTURE_2D,0,dt,lt,Ct,Z);p(_)&&w(H),ot.__version=nt.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Ht(C,_,N){if(_.image.length!==6)return;const H=Y(C,_),X=_.source;e.bindTexture(a.TEXTURE_CUBE_MAP,C.__webglTexture,a.TEXTURE0+N);const nt=i.get(X);if(X.version!==nt.__version||H===!0){e.activeTexture(a.TEXTURE0+N);const ot=Zt.getPrimaries(Zt.workingColorSpace),q=_.colorSpace===Ln?null:Zt.getPrimaries(_.colorSpace),Z=_.colorSpace===Ln||ot===q?a.NONE:a.BROWSER_DEFAULT_WEBGL;e.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const lt=_.isCompressedTexture||_.image[0].isCompressedTexture,Ct=_.image[0]&&_.image[0].isDataTexture,dt=[];for(let Q=0;Q<6;Q++)!lt&&!Ct?dt[Q]=g(_.image[Q],!0,n.maxCubemapSize):dt[Q]=Ct?_.image[Q].image:_.image[Q],dt[Q]=pi(_,dt[Q]);const ht=dt[0],Ft=s.convert(_.format,_.colorSpace),Ut=s.convert(_.type),Gt=M(_.internalFormat,Ft,Ut,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,st=nt.__version===void 0||H===!0,j=X.dataReady;let ct=y(_,ht);ie(a.TEXTURE_CUBE_MAP,_);let gt;if(lt){F&&st&&e.texStorage2D(a.TEXTURE_CUBE_MAP,ct,Gt,ht.width,ht.height);for(let Q=0;Q<6;Q++){gt=dt[Q].mipmaps;for(let Et=0;Et<gt.length;Et++){const St=gt[Et];_.format!==Wi?Ft!==null?F?j&&e.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et,0,0,St.width,St.height,Ft,St.data):e.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et,Gt,St.width,St.height,0,St.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?j&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et,0,0,St.width,St.height,Ft,Ut,St.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et,Gt,St.width,St.height,0,Ft,Ut,St.data)}}}else{if(gt=_.mipmaps,F&&st){gt.length>0&&ct++;const Q=re(dt[0]);e.texStorage2D(a.TEXTURE_CUBE_MAP,ct,Gt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Ct){F?j&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,dt[Q].width,dt[Q].height,Ft,Ut,dt[Q].data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Gt,dt[Q].width,dt[Q].height,0,Ft,Ut,dt[Q].data);for(let Et=0;Et<gt.length;Et++){const Ce=gt[Et].image[Q].image;F?j&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et+1,0,0,Ce.width,Ce.height,Ft,Ut,Ce.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et+1,Gt,Ce.width,Ce.height,0,Ft,Ut,Ce.data)}}else{F?j&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ft,Ut,dt[Q]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Gt,Ft,Ut,dt[Q]);for(let Et=0;Et<gt.length;Et++){const St=gt[Et];F?j&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et+1,0,0,Ft,Ut,St.image[Q]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Et+1,Gt,Ft,Ut,St.image[Q])}}}p(_)&&w(a.TEXTURE_CUBE_MAP),nt.__version=X.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function It(C,_,N,H,X,nt){const ot=s.convert(N.format,N.colorSpace),q=s.convert(N.type),Z=M(N.internalFormat,ot,q,N.normalized,N.colorSpace),lt=i.get(_),Ct=i.get(N);if(Ct.__renderTarget=_,!lt.__hasExternalTextures){const dt=Math.max(1,_.width>>nt),ht=Math.max(1,_.height>>nt);X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?e.texImage3D(X,nt,Z,dt,ht,_.depth,0,ot,q,null):e.texImage2D(X,nt,Z,dt,ht,0,ot,q,null)}e.bindFramebuffer(a.FRAMEBUFFER,C),Oe(_)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,H,X,Ct.__webglTexture,0,Ee(_)):(X===a.TEXTURE_2D||X>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,H,X,Ct.__webglTexture,nt),e.bindFramebuffer(a.FRAMEBUFFER,null)}function De(C,_,N){if(a.bindRenderbuffer(a.RENDERBUFFER,C),_.depthBuffer){const H=_.depthTexture,X=H&&H.isDepthTexture?H.type:null,nt=A(_.stencilBuffer,X),ot=_.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Oe(_)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ee(_),nt,_.width,_.height):N?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ee(_),nt,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,nt,_.width,_.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ot,a.RENDERBUFFER,C)}else{const H=_.textures;for(let X=0;X<H.length;X++){const nt=H[X],ot=s.convert(nt.format,nt.colorSpace),q=s.convert(nt.type),Z=M(nt.internalFormat,ot,q,nt.normalized,nt.colorSpace);Oe(_)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ee(_),Z,_.width,_.height):N?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ee(_),Z,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,Z,_.width,_.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function jt(C,_,N){const H=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(a.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(_.depthTexture);if(X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(X.__webglInit===void 0&&(X.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),X.__webglTexture===void 0){X.__webglTexture=a.createTexture(),e.bindTexture(a.TEXTURE_CUBE_MAP,X.__webglTexture),ie(a.TEXTURE_CUBE_MAP,_.depthTexture);const lt=s.convert(_.depthTexture.format),Ct=s.convert(_.depthTexture.type);let dt;_.depthTexture.format===yn?dt=a.DEPTH_COMPONENT24:_.depthTexture.format===ns&&(dt=a.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,dt,_.width,_.height,0,lt,Ct,null)}}else K(_.depthTexture,0);const nt=X.__webglTexture,ot=Ee(_),q=H?a.TEXTURE_CUBE_MAP_POSITIVE_X+N:a.TEXTURE_2D,Z=_.depthTexture.format===ns?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(_.depthTexture.format===yn)Oe(_)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Z,q,nt,0,ot):a.framebufferTexture2D(a.FRAMEBUFFER,Z,q,nt,0);else if(_.depthTexture.format===ns)Oe(_)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Z,q,nt,0,ot):a.framebufferTexture2D(a.FRAMEBUFFER,Z,q,nt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(C){const _=i.get(C),N=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const H=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",X)};H.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=H}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let H=0;H<6;H++)jt(_.__webglFramebuffer[H],C,H);else{const H=C.texture.mipmaps;H&&H.length>0?jt(_.__webglFramebuffer[0],C,0):jt(_.__webglFramebuffer,C,0)}else if(N){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=a.createRenderbuffer(),De(_.__webglDepthbuffer[H],C,!1);else{const X=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,nt=_.__webglDepthbuffer[H];a.bindRenderbuffer(a.RENDERBUFFER,nt),a.framebufferRenderbuffer(a.FRAMEBUFFER,X,a.RENDERBUFFER,nt)}}else{const H=C.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=a.createRenderbuffer(),De(_.__webglDepthbuffer,C,!1);else{const X=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,nt=_.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,nt),a.framebufferRenderbuffer(a.FRAMEBUFFER,X,a.RENDERBUFFER,nt)}}e.bindFramebuffer(a.FRAMEBUFFER,null)}function ne(C,_,N){const H=i.get(C);_!==void 0&&It(H.__webglFramebuffer,C,C.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),N!==void 0&&de(C)}function te(C){const _=C.texture,N=i.get(C),H=i.get(_);C.addEventListener("dispose",x);const X=C.textures,nt=C.isWebGLCubeRenderTarget===!0,ot=X.length>1;if(ot||(H.__webglTexture===void 0&&(H.__webglTexture=a.createTexture()),H.__version=_.version,r.memory.textures++),nt){N.__webglFramebuffer=[];for(let q=0;q<6;q++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[q]=[];for(let Z=0;Z<_.mipmaps.length;Z++)N.__webglFramebuffer[q][Z]=a.createFramebuffer()}else N.__webglFramebuffer[q]=a.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let q=0;q<_.mipmaps.length;q++)N.__webglFramebuffer[q]=a.createFramebuffer()}else N.__webglFramebuffer=a.createFramebuffer();if(ot)for(let q=0,Z=X.length;q<Z;q++){const lt=i.get(X[q]);lt.__webglTexture===void 0&&(lt.__webglTexture=a.createTexture(),r.memory.textures++)}if(C.samples>0&&Oe(C)===!1){N.__webglMultisampledFramebuffer=a.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(a.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let q=0;q<X.length;q++){const Z=X[q];N.__webglColorRenderbuffer[q]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,N.__webglColorRenderbuffer[q]);const lt=s.convert(Z.format,Z.colorSpace),Ct=s.convert(Z.type),dt=M(Z.internalFormat,lt,Ct,Z.normalized,Z.colorSpace,C.isXRRenderTarget===!0),ht=Ee(C);a.renderbufferStorageMultisample(a.RENDERBUFFER,ht,dt,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+q,a.RENDERBUFFER,N.__webglColorRenderbuffer[q])}a.bindRenderbuffer(a.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=a.createRenderbuffer(),De(N.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(a.FRAMEBUFFER,null)}}if(nt){e.bindTexture(a.TEXTURE_CUBE_MAP,H.__webglTexture),ie(a.TEXTURE_CUBE_MAP,_);for(let q=0;q<6;q++)if(_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)It(N.__webglFramebuffer[q][Z],C,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else It(N.__webglFramebuffer[q],C,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(_)&&w(a.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let q=0,Z=X.length;q<Z;q++){const lt=X[q],Ct=i.get(lt);let dt=a.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),e.bindTexture(dt,Ct.__webglTexture),ie(dt,lt),It(N.__webglFramebuffer,C,lt,a.COLOR_ATTACHMENT0+q,dt,0),p(lt)&&w(dt)}e.unbindTexture()}else{let q=a.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),e.bindTexture(q,H.__webglTexture),ie(q,_),_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)It(N.__webglFramebuffer[Z],C,_,a.COLOR_ATTACHMENT0,q,Z);else It(N.__webglFramebuffer,C,_,a.COLOR_ATTACHMENT0,q,0);p(_)&&w(q),e.unbindTexture()}C.depthBuffer&&de(C)}function ze(C){const _=C.textures;for(let N=0,H=_.length;N<H;N++){const X=_[N];if(p(X)){const nt=T(C),ot=i.get(X).__webglTexture;e.bindTexture(nt,ot),w(nt),e.unbindTexture()}}}const He=[],$e=[];function Ke(C){if(C.samples>0){if(Oe(C)===!1){const _=C.textures,N=C.width,H=C.height;let X=a.COLOR_BUFFER_BIT;const nt=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ot=i.get(C),q=_.length>1;if(q)for(let lt=0;lt<_.length;lt++)e.bindFramebuffer(a.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+lt,a.RENDERBUFFER,null),e.bindFramebuffer(a.FRAMEBUFFER,ot.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+lt,a.TEXTURE_2D,null,0);e.bindFramebuffer(a.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);const Z=C.texture.mipmaps;Z&&Z.length>0?e.bindFramebuffer(a.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(a.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let lt=0;lt<_.length;lt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(X|=a.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(X|=a.STENCIL_BUFFER_BIT)),q){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);const Ct=i.get(_[lt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ct,0)}a.blitFramebuffer(0,0,N,H,0,0,N,H,X,a.NEAREST),l===!0&&(He.length=0,$e.length=0,He.push(a.COLOR_ATTACHMENT0+lt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(He.push(nt),$e.push(nt),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,$e)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,He))}if(e.bindFramebuffer(a.READ_FRAMEBUFFER,null),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),q)for(let lt=0;lt<_.length;lt++){e.bindFramebuffer(a.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+lt,a.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);const Ct=i.get(_[lt]).__webglTexture;e.bindFramebuffer(a.FRAMEBUFFER,ot.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+lt,a.TEXTURE_2D,Ct,0)}e.bindFramebuffer(a.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const _=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[_])}}}function Ee(C){return Math.min(n.maxSamples,C.samples)}function Oe(C){const _=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(C){const _=r.render.frame;c.get(C)!==_&&(c.set(C,_),C.update())}function pi(C,_){const N=C.colorSpace,H=C.format,X=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==lo&&N!==Ln&&(Zt.getTransfer(N)===ae?(H!==Wi||X!==Fi)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",N)),_}function re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.getTextureUnits=$,this.setTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=tt,this.setTexture3D=at,this.setTextureCube=ut,this.rebindTextures=ne,this.setupRenderTarget=te,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function g_(a,t){function e(i,n=Ln){let s;const r=Zt.getTransfer(n);if(i===Fi)return a.UNSIGNED_BYTE;if(i===Yh)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Jh)return a.UNSIGNED_SHORT_5_5_5_1;if(i===tf)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===ef)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jd)return a.BYTE;if(i===Qd)return a.SHORT;if(i===Ua)return a.UNSIGNED_SHORT;if(i===Kh)return a.INT;if(i===rn)return a.UNSIGNED_INT;if(i===Vi)return a.FLOAT;if(i===Si)return a.HALF_FLOAT;if(i===nf)return a.ALPHA;if(i===sf)return a.RGB;if(i===Wi)return a.RGBA;if(i===yn)return a.DEPTH_COMPONENT;if(i===ns)return a.DEPTH_STENCIL;if(i===Qh)return a.RED;if(i===tc)return a.RED_INTEGER;if(i===os)return a.RG;if(i===ec)return a.RG_INTEGER;if(i===ic)return a.RGBA_INTEGER;if(i===Kr||i===Yr||i===Jr||i===Qr)if(r===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Kr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Kr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===Yl||i===Jl||i===Ql)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ql)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===th||i===eh||i===ih||i===nh||i===sh||i===ro||i===ah)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===th||i===eh)return r===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ih)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===nh)return s.COMPRESSED_R11_EAC;if(i===sh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ro)return s.COMPRESSED_RG11_EAC;if(i===ah)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rh||i===oh||i===lh||i===hh||i===ch||i===uh||i===dh||i===fh||i===ph||i===mh||i===gh||i===vh||i===xh||i===_h)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===rh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ch)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ph)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xh)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_h)return r===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bh||i===yh||i===Mh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===bh)return r===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wh||i===Sh||i===oo||i===Ah)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===wh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ah)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ka?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:e}}const v_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x_=`
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

}`;class __{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new vf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Bt({vertexShader:v_,fragmentShader:x_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new Qt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b_ extends cs{constructor(t,e){super();const i=this;let n=null,s=1,r=null,o="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",g=new __,p={},w=e.getContextAttributes();let T=null,M=null;const A=[],y=[],E=new vt;let x=null;const b=new Pi;b.viewport=new Le;const R=new Pi;R.viewport=new Le;const P=[b,R],D=new Cm;let W=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let rt=A[Y];return rt===void 0&&(rt=new Bo,A[Y]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Y){let rt=A[Y];return rt===void 0&&(rt=new Bo,A[Y]=rt),rt.getGripSpace()},this.getHand=function(Y){let rt=A[Y];return rt===void 0&&(rt=new Bo,A[Y]=rt),rt.getHandSpace()};function z(Y){const rt=y.indexOf(Y.inputSource);if(rt===-1)return;const et=A[rt];et!==void 0&&(et.update(Y.inputSource,Y.frame,h||r),et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",k);for(let Y=0;Y<A.length;Y++){const rt=y[Y];rt!==null&&(y[Y]=null,A[Y].disconnect(rt))}W=null,$=null,g.reset();for(const Y in p)delete p[Y];t.setRenderTarget(T),f=null,d=null,u=null,n=null,M=null,ie.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(T=t.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",V),n.addEventListener("inputsourceschange",k),w.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,Nt=null,Ht=null;w.depth&&(Ht=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=w.stencil?ns:yn,Nt=w.stencil?ka:rn);const It={colorFormat:e.RGBA8,depthFormat:Ht,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(It),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new xi(d.textureWidth,d.textureHeight,{format:Wi,type:Fi,depthTexture:new Qs(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const et={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,et),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new xi(f.framebufferWidth,f.framebufferHeight,{format:Wi,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),h=null,r=await n.requestReferenceSpace(o),ie.setContext(n),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(Y){for(let rt=0;rt<Y.removed.length;rt++){const et=Y.removed[rt],Nt=y.indexOf(et);Nt>=0&&(y[Nt]=null,A[Nt].disconnect(et))}for(let rt=0;rt<Y.added.length;rt++){const et=Y.added[rt];let Nt=y.indexOf(et);if(Nt===-1){for(let It=0;It<A.length;It++)if(It>=y.length){y.push(et),Nt=It;break}else if(y[It]===null){y[It]=et,Nt=It;break}if(Nt===-1)break}const Ht=A[Nt];Ht&&Ht.connect(et)}}const K=new L,tt=new L;function at(Y,rt,et){K.setFromMatrixPosition(rt.matrixWorld),tt.setFromMatrixPosition(et.matrixWorld);const Nt=K.distanceTo(tt),Ht=rt.projectionMatrix.elements,It=et.projectionMatrix.elements,De=Ht[14]/(Ht[10]-1),jt=Ht[14]/(Ht[10]+1),de=(Ht[9]+1)/Ht[5],ne=(Ht[9]-1)/Ht[5],te=(Ht[8]-1)/Ht[0],ze=(It[8]+1)/It[0],He=De*te,$e=De*ze,Ke=Nt/(-te+ze),Ee=Ke*-te;if(rt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ee),Y.translateZ(Ke),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ht[10]===-1)Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Oe=De+Ke,I=jt+Ke,pi=He-Ee,re=$e+(Nt-Ee),C=de*jt/I*Oe,_=ne*jt/I*Oe;Y.projectionMatrix.makePerspective(pi,re,C,_,Oe,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ut(Y,rt){rt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(rt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let rt=Y.near,et=Y.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(et=g.depthFar)),D.near=R.near=b.near=rt,D.far=R.far=b.far=et,(W!==D.near||$!==D.far)&&(n.updateRenderState({depthNear:D.near,depthFar:D.far}),W=D.near,$=D.far),D.layers.mask=Y.layers.mask|6,b.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;const Nt=Y.parent,Ht=D.cameras;ut(D,Nt);for(let It=0;It<Ht.length;It++)ut(Ht[It],Nt);Ht.length===2?at(D,b,R):D.projectionMatrix.copy(b.projectionMatrix),xt(Y,D,Nt)};function xt(Y,rt,et){et===null?Y.matrix.copy(rt.matrixWorld):(Y.matrix.copy(et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(rt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Eh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(Y){return p[Y]};let Yt=null;function Te(Y,rt){if(c=rt.getViewerPose(h||r),m=rt,c!==null){const et=c.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Nt=!1;et.length!==D.cameras.length&&(D.cameras.length=0,Nt=!0);for(let jt=0;jt<et.length;jt++){const de=et[jt];let ne=null;if(f!==null)ne=f.getViewport(de);else{const ze=u.getViewSubImage(d,de);ne=ze.viewport,jt===0&&(t.setRenderTargetTextures(M,ze.colorTexture,ze.depthStencilTexture),t.setRenderTarget(M))}let te=P[jt];te===void 0&&(te=new Pi,te.layers.enable(jt),te.viewport=new Le,P[jt]=te),te.matrix.fromArray(de.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(de.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ne.x,ne.y,ne.width,ne.height),jt===0&&(D.matrix.copy(te.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Nt===!0&&D.cameras.push(te)}const Ht=n.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const jt=u.getDepthInformation(et[0]);jt&&jt.isValid&&jt.texture&&g.init(jt,n.renderState)}if(Ht&&Ht.includes("camera-access")&&v){t.state.unbindTexture(),u=i.getBinding();for(let jt=0;jt<et.length;jt++){const de=et[jt].camera;if(de){let ne=p[de];ne||(ne=new vf,p[de]=ne);const te=u.getCameraImage(de);ne.sourceTexture=te}}}}for(let et=0;et<A.length;et++){const Nt=y[et],Ht=A[et];Nt!==null&&Ht!==void 0&&Ht.update(Nt,rt,h||r)}Yt&&Yt(Y,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),m=null}const ie=new Mf;ie.setAnimationLoop(Te),this.setAnimationLoop=function(Y){Yt=Y},this.dispose=function(){}}}const y_=new me,Rf=new Ot;Rf.set(-1,0,0,0,1,0,0,0,1);function M_(a,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,xf(a)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,w,T,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),c(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,w,T):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===vi&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===vi&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const w=t.get(p),T=w.envMap,M=w.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(y_.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Rf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,w,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vi&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const w=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function w_(a,t,e,i){let n={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const y=A.program;i.uniformBlockBinding(M,y)}function h(M,A){let y=n[M.id];y===void 0&&(g(M),y=c(M),n[M.id]=y,M.addEventListener("dispose",w));const E=A.program;i.updateUBOMapping(M,E);const x=t.render.frame;s[M.id]!==x&&(d(M),s[M.id]=x)}function c(M){const A=u();M.__bindingPointIndex=A;const y=a.createBuffer(),E=M.__size,x=M.usage;return a.bindBuffer(a.UNIFORM_BUFFER,y),a.bufferData(a.UNIFORM_BUFFER,E,x),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,A,y),y}function u(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const A=n[M.id],y=M.uniforms,E=M.__cache;a.bindBuffer(a.UNIFORM_BUFFER,A);for(let x=0,b=y.length;x<b;x++){const R=y[x];if(Array.isArray(R))for(let P=0,D=R.length;P<D;P++)f(R[P],x,P,E);else f(R,x,0,E)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(M,A,y,E){if(v(M,A,y,E)===!0){const x=M.__offset,b=M.value;if(Array.isArray(b)){let R=0;for(let P=0;P<b.length;P++){const D=b[P],W=p(D);m(D,M.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,M.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,x,M.__data)}}function m(M,A,y){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,y)}function v(M,A,y,E){const x=M.value,b=A+"_"+y;if(E[b]===void 0)return typeof x=="number"||typeof x=="boolean"?E[b]=x:ArrayBuffer.isView(x)?E[b]=x.slice():E[b]=x.clone(),!0;{const R=E[b];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return E[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(M){const A=M.uniforms;let y=0;const E=16;for(let b=0,R=A.length;b<R;b++){const P=Array.isArray(A[b])?A[b]:[A[b]];for(let D=0,W=P.length;D<W;D++){const $=P[D],z=Array.isArray($.value)?$.value:[$.value];for(let V=0,k=z.length;V<k;V++){const K=z[V],tt=p(K),at=y%E,ut=at%tt.boundary,xt=at+ut;y+=ut,xt!==0&&E-xt<tt.storage&&(y+=E-xt),$.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=y,y+=tt.storage}}}const x=y%E;return x>0&&(y+=E-x),M.__size=y,M.__cache={},this}function p(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",M),A}function w(M){const A=M.target;A.removeEventListener("dispose",w);const y=r.indexOf(A.__bindingPointIndex);r.splice(y,1),a.deleteBuffer(n[A.id]),delete n[A.id],delete s[A.id]}function T(){for(const M in n)a.deleteBuffer(n[M]);r=[],n={},s={}}return{bind:l,update:h,dispose:T}}const S_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function A_(){return Zi===null&&(Zi=new ff(S_,16,16,os,Si),Zi.name="DFG_LUT",Zi.minFilter=li,Zi.magFilter=li,Zi.wrapS=Gi,Zi.wrapT=Gi,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class T_{constructor(t={}){const{canvas:e=Vp(),context:i=null,depth:n=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Fi}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=r;const v=f,g=new Set([ic,ec,tc]),p=new Set([Fi,rn,Ua,ka,Yh,Jh]),w=new Uint32Array(4),T=new Int32Array(4),M=new L;let A=null,y=null;const E=[],x=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=an,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,D=null,W=null,$=null,z=null;this._outputColorSpace=Se;let V=0,k=0,K=null,tt=-1,at=null;const ut=new Le,xt=new Le;let Yt=null;const Te=new zt(0);let ie=0,Y=e.width,rt=e.height,et=1,Nt=null,Ht=null;const It=new Le(0,0,Y,rt),De=new Le(0,0,Y,rt);let jt=!1;const de=new pf;let ne=!1,te=!1;const ze=new me,He=new L,$e=new Le,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function Oe(){return K===null?et:1}let I=i;function pi(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vh}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Xi,!1),I===null){const U="webgl2";if(I=pi(U,S),I===null)throw pi(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Jt("WebGLRenderer: "+S.message),S}let re,C,_,N,H,X,nt,ot,q,Z,lt,Ct,dt,ht,Ft,Ut,Gt,F,st,j,ct,gt,Q;function Et(){re=new Av(I),re.init(),ct=new g_(I,re),C=new vv(I,re,t,ct),_=new p_(I,re),C.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),W=I.createFramebuffer(),$=I.createFramebuffer(),z=I.createFramebuffer(),N=new Cv(I),H=new t_,X=new m_(I,re,_,H,C,ct,N),nt=new Sv(R),ot=new Fm(I),gt=new mv(I,ot),q=new Tv(I,ot,N,gt),Z=new Pv(I,q,ot,gt,N),F=new Rv(I,C,X),Ft=new xv(H),lt=new Qx(R,nt,re,C,gt,Ft),Ct=new M_(R,H),dt=new i_,ht=new l_(re),Gt=new pv(R,nt,_,Z,m,l),Ut=new f_(R,Z,C),Q=new w_(I,N,C,_),st=new gv(I,re,N),j=new Ev(I,re,N),N.programs=lt.programs,R.capabilities=C,R.extensions=re,R.properties=H,R.renderLists=dt,R.shadowMap=Ut,R.state=_,R.info=N}Et(),v!==Fi&&(b=new Fv(v,e.width,e.height,o,n,s));const St=new b_(R,I);this.xr=St,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(S){S!==void 0&&(et=S,this.setSize(Y,rt,!1))},this.getSize=function(S){return S.set(Y,rt)},this.setSize=function(S,U,G=!0){if(St.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,rt=U,e.width=Math.floor(S*et),e.height=Math.floor(U*et),G===!0&&(e.style.width=S+"px",e.style.height=U+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Y*et,rt*et).floor()},this.setDrawingBufferSize=function(S,U,G){Y=S,rt=U,et=G,e.width=Math.floor(S*G),e.height=Math.floor(U*G),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(v===Fi){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ut)},this.getViewport=function(S){return S.copy(It)},this.setViewport=function(S,U,G,O){S.isVector4?It.set(S.x,S.y,S.z,S.w):It.set(S,U,G,O),_.viewport(ut.copy(It).multiplyScalar(et).round())},this.getScissor=function(S){return S.copy(De)},this.setScissor=function(S,U,G,O){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,U,G,O),_.scissor(xt.copy(De).multiplyScalar(et).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(S){_.setScissorTest(jt=S)},this.setOpaqueSort=function(S){Nt=S},this.setTransparentSort=function(S){Ht=S},this.getClearColor=function(S){return S.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,G=!0){let O=0;if(S){let B=!1;if(K!==null){const mt=K.texture.format;B=g.has(mt)}if(B){const mt=K.texture.type,bt=p.has(mt),pt=Gt.getClearColor(),At=Gt.getClearAlpha(),Rt=pt.r,Vt=pt.g,qt=pt.b;bt?(w[0]=Rt,w[1]=Vt,w[2]=qt,w[3]=At,I.clearBufferuiv(I.COLOR,0,w)):(T[0]=Rt,T[1]=Vt,T[2]=qt,T[3]=At,I.clearBufferiv(I.COLOR,0,T))}else O|=I.COLOR_BUFFER_BIT}U&&(O|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),D=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Xi,!1),Gt.dispose(),dt.dispose(),ht.dispose(),H.dispose(),nt.dispose(),Z.dispose(),gt.dispose(),Q.dispose(),lt.dispose(),St.dispose(),St.removeEventListener("sessionstart",Cc),St.removeEventListener("sessionend",Rc),zn.stop()};function Ce(S){S.preventDefault(),uo("WebGLRenderer: Context Lost."),P=!0}function ge(){uo("WebGLRenderer: Context Restored."),P=!1;const S=N.autoReset,U=Ut.enabled,G=Ut.autoUpdate,O=Ut.needsUpdate,B=Ut.type;Et(),N.autoReset=S,Ut.enabled=U,Ut.autoUpdate=G,Ut.needsUpdate=O,Ut.type=B}function Xi(S){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function qi(S){const U=S.target;U.removeEventListener("dispose",qi),sp(U)}function sp(S){ap(S),H.remove(S)}function ap(S){const U=H.get(S).programs;U!==void 0&&(U.forEach(function(G){lt.releaseProgram(G)}),S.isShaderMaterial&&lt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,G,O,B,mt){U===null&&(U=Ke);const bt=B.isMesh&&B.matrixWorld.determinantAffine()<0,pt=lp(S,U,G,O,B);_.setMaterial(O,bt);let At=G.index,Rt=1;if(O.wireframe===!0){if(At=q.getWireframeAttribute(G),At===void 0)return;Rt=2}const Vt=G.drawRange,qt=G.attributes.position;let Lt=Vt.start*Rt,le=(Vt.start+Vt.count)*Rt;mt!==null&&(Lt=Math.max(Lt,mt.start*Rt),le=Math.min(le,(mt.start+mt.count)*Rt)),At!==null?(Lt=Math.max(Lt,0),le=Math.min(le,At.count)):qt!=null&&(Lt=Math.max(Lt,0),le=Math.min(le,qt.count));const Ie=le-Lt;if(Ie<0||Ie===1/0)return;gt.setup(B,O,pt,G,At);let Re,fe=st;if(At!==null&&(Re=ot.get(At),fe=j,fe.setIndex(Re)),B.isMesh)O.wireframe===!0?(_.setLineWidth(O.wireframeLinewidth*Oe()),fe.setMode(I.LINES)):fe.setMode(I.TRIANGLES);else if(B.isLine){let ei=O.linewidth;ei===void 0&&(ei=1),_.setLineWidth(ei*Oe()),B.isLineSegments?fe.setMode(I.LINES):B.isLineLoop?fe.setMode(I.LINE_LOOP):fe.setMode(I.LINE_STRIP)}else B.isPoints?fe.setMode(I.POINTS):B.isSprite&&fe.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(re.get("WEBGL_multi_draw"))fe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ei=B._multiDrawStarts,_t=B._multiDrawCounts,_i=B._multiDrawCount,ee=At?ot.get(At).bytesPerElement:1,Ei=H.get(O).currentProgram.getUniforms();for(let $i=0;$i<_i;$i++)Ei.setValue(I,"_gl_DrawID",$i),fe.render(ei[$i]/ee,_t[$i])}else if(B.isInstancedMesh)fe.renderInstances(Lt,Ie,B.count);else if(G.isInstancedBufferGeometry){const ei=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_t=Math.min(G.instanceCount,ei);fe.renderInstances(Lt,Ie,_t)}else fe.render(Lt,Ie)};function Ec(S,U,G){S.transparent===!0&&S.side===di&&S.forceSinglePass===!1?(S.side=vi,S.needsUpdate=!0,Ya(S,U,G),S.side=kn,S.needsUpdate=!0,Ya(S,U,G),S.side=di):Ya(S,U,G)}this.compile=function(S,U,G=null){G===null&&(G=S),y=ht.get(G),y.init(U),x.push(y),G.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(y.pushLight(B),B.castShadow&&y.pushShadow(B))}),S!==G&&S.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(y.pushLight(B),B.castShadow&&y.pushShadow(B))}),y.setupLights();const O=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const mt=B.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){const pt=mt[bt];Ec(pt,G,B),O.add(pt)}else Ec(mt,G,B),O.add(mt)}),y=x.pop(),O},this.compileAsync=function(S,U,G=null){const O=this.compile(S,U,G);return new Promise(B=>{function mt(){if(O.forEach(function(bt){H.get(bt).currentProgram.isReady()&&O.delete(bt)}),O.size===0){B(S);return}setTimeout(mt,10)}re.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Co=null;function rp(S){Co&&Co(S)}function Cc(){zn.stop()}function Rc(){zn.start()}const zn=new Mf;zn.setAnimationLoop(rp),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(S){Co=S,St.setAnimationLoop(S),S===null?zn.stop():zn.start()},St.addEventListener("sessionstart",Cc),St.addEventListener("sessionend",Rc),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(S,U);const G=St.enabled===!0&&St.isPresenting===!0,O=b!==null&&(K===null||G)&&b.begin(R,K);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(U),U=St.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,U,K),y=ht.get(S,x.length),y.init(U),y.state.textureUnits=X.getTextureUnits(),x.push(y),ze.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),de.setFromProjectionMatrix(ze,en,U.reversedDepth),te=this.localClippingEnabled,ne=Ft.init(this.clippingPlanes,te),A=dt.get(S,E.length),A.init(),E.push(A),St.enabled===!0&&St.isPresenting===!0){const bt=R.xr.getDepthSensingMesh();bt!==null&&Ro(bt,U,-1/0,R.sortObjects)}Ro(S,U,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(Nt,Ht,U.reversedDepth),Ee=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,Ee&&Gt.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&Ft.beginShadows();const B=y.state.shadowsArray;if(Ut.render(B,S,U),ne===!0&&Ft.endShadows(),(O&&b.hasRenderPass())===!1){const bt=A.opaque,pt=A.transmissive;if(y.setupLights(),U.isArrayCamera){const At=U.cameras;if(pt.length>0)for(let Rt=0,Vt=At.length;Rt<Vt;Rt++){const qt=At[Rt];Lc(bt,pt,S,qt)}Ee&&Gt.render(S);for(let Rt=0,Vt=At.length;Rt<Vt;Rt++){const qt=At[Rt];Pc(A,S,qt,qt.viewport)}}else pt.length>0&&Lc(bt,pt,S,U),Ee&&Gt.render(S),Pc(A,S,U)}K!==null&&k===0&&(X.updateMultisampleRenderTarget(K),X.updateRenderTargetMipmap(K)),O&&b.end(R),S.isScene===!0&&S.onAfterRender(R,S,U),gt.resetDefaultState(),tt=-1,at=null,x.pop(),x.length>0?(y=x[x.length-1],X.setTextureUnits(y.state.textureUnits),ne===!0&&Ft.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,E.pop(),E.length>0?A=E[E.length-1]:A=null,D!==null&&D.renderEnd()};function Ro(S,U,G,O){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)y.pushLightProbeGrid(S);else if(S.isLight)y.pushLight(S),S.castShadow&&y.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||de.intersectsSprite(S)){O&&$e.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ze);const bt=Z.update(S),pt=S.material;pt.visible&&A.push(S,bt,pt,G,$e.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||de.intersectsObject(S))){const bt=Z.update(S),pt=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),$e.copy(S.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),$e.copy(bt.boundingSphere.center)),$e.applyMatrix4(S.matrixWorld).applyMatrix4(ze)),Array.isArray(pt)){const At=bt.groups;for(let Rt=0,Vt=At.length;Rt<Vt;Rt++){const qt=At[Rt],Lt=pt[qt.materialIndex];Lt&&Lt.visible&&A.push(S,bt,Lt,G,$e.z,qt)}}else pt.visible&&A.push(S,bt,pt,G,$e.z,null)}}const mt=S.children;for(let bt=0,pt=mt.length;bt<pt;bt++)Ro(mt[bt],U,G,O)}function Pc(S,U,G,O){const{opaque:B,transmissive:mt,transparent:bt}=S;y.setupLightsView(G),ne===!0&&Ft.setGlobalState(R.clippingPlanes,G),O&&_.viewport(ut.copy(O)),B.length>0&&Ka(B,U,G),mt.length>0&&Ka(mt,U,G),bt.length>0&&Ka(bt,U,G),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Lc(S,U,G,O){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[O.id]===void 0){const Lt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[O.id]=new xi(1,1,{generateMipmaps:!0,type:Lt?Si:Fi,minFilter:is,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const mt=y.state.transmissionRenderTarget[O.id],bt=O.viewport||ut;mt.setSize(bt.z*R.transmissionResolutionScale,bt.w*R.transmissionResolutionScale);const pt=R.getRenderTarget(),At=R.getActiveCubeFace(),Rt=R.getActiveMipmapLevel();R.setRenderTarget(mt),R.getClearColor(Te),ie=R.getClearAlpha(),ie<1&&R.setClearColor(16777215,.5),R.clear(),Ee&&Gt.render(G);const Vt=R.toneMapping;R.toneMapping=an;const qt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),y.setupLightsView(O),ne===!0&&Ft.setGlobalState(R.clippingPlanes,O),Ka(S,G,O),X.updateMultisampleRenderTarget(mt),X.updateRenderTargetMipmap(mt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let le=0,Ie=U.length;le<Ie;le++){const Re=U[le],{object:fe,geometry:ei,material:_t,group:_i}=Re;if(_t.side===di&&fe.layers.test(O.layers)){const ee=_t.side;_t.side=vi,_t.needsUpdate=!0,Fc(fe,G,O,ei,_t,_i),_t.side=ee,_t.needsUpdate=!0,Lt=!0}}Lt===!0&&(X.updateMultisampleRenderTarget(mt),X.updateRenderTargetMipmap(mt))}R.setRenderTarget(pt,At,Rt),R.setClearColor(Te,ie),qt!==void 0&&(O.viewport=qt),R.toneMapping=Vt}function Ka(S,U,G){const O=U.isScene===!0?U.overrideMaterial:null;for(let B=0,mt=S.length;B<mt;B++){const bt=S[B],{object:pt,geometry:At,group:Rt}=bt;let Vt=bt.material;Vt.allowOverride===!0&&O!==null&&(Vt=O),pt.layers.test(G.layers)&&Fc(pt,U,G,At,Vt,Rt)}}function Fc(S,U,G,O,B,mt){S.onBeforeRender(R,U,G,O,B,mt),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(R,U,G,O,S,mt),B.transparent===!0&&B.side===di&&B.forceSinglePass===!1?(B.side=vi,B.needsUpdate=!0,R.renderBufferDirect(G,U,O,B,S,mt),B.side=kn,B.needsUpdate=!0,R.renderBufferDirect(G,U,O,B,S,mt),B.side=di):R.renderBufferDirect(G,U,O,B,S,mt),S.onAfterRender(R,U,G,O,B,mt)}function Ya(S,U,G){U.isScene!==!0&&(U=Ke);const O=H.get(S),B=y.state.lights,mt=y.state.shadowsArray,bt=B.state.version,pt=lt.getParameters(S,B.state,mt,U,G,y.state.lightProbeGridArray),At=lt.getProgramCacheKey(pt);let Rt=O.programs;O.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,O.fog=U.fog;const Vt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;O.envMap=nt.get(S.envMap||O.environment,Vt),O.envMapRotation=O.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Rt===void 0&&(S.addEventListener("dispose",qi),Rt=new Map,O.programs=Rt);let qt=Rt.get(At);if(qt!==void 0){if(O.currentProgram===qt&&O.lightsStateVersion===bt)return Ic(S,pt),qt}else pt.uniforms=lt.getUniforms(S),D!==null&&S.isNodeMaterial&&D.build(S,G,pt),S.onBeforeCompile(pt,R),qt=lt.acquireProgram(pt,At),Rt.set(At,qt),O.uniforms=pt.uniforms;const Lt=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Lt.clippingPlanes=Ft.uniform),Ic(S,pt),O.needsLights=cp(S),O.lightsStateVersion=bt,O.needsLights&&(Lt.ambientLightColor.value=B.state.ambient,Lt.lightProbe.value=B.state.probe,Lt.directionalLights.value=B.state.directional,Lt.directionalLightShadows.value=B.state.directionalShadow,Lt.spotLights.value=B.state.spot,Lt.spotLightShadows.value=B.state.spotShadow,Lt.rectAreaLights.value=B.state.rectArea,Lt.ltc_1.value=B.state.rectAreaLTC1,Lt.ltc_2.value=B.state.rectAreaLTC2,Lt.pointLights.value=B.state.point,Lt.pointLightShadows.value=B.state.pointShadow,Lt.hemisphereLights.value=B.state.hemi,Lt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Lt.spotLightMatrix.value=B.state.spotLightMatrix,Lt.spotLightMap.value=B.state.spotLightMap,Lt.pointShadowMatrix.value=B.state.pointShadowMatrix),O.lightProbeGrid=y.state.lightProbeGridArray.length>0,O.currentProgram=qt,O.uniformsList=null,qt}function Dc(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=to.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Ic(S,U){const G=H.get(S);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function op(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let G=0,O=S.length;G<O;G++){const B=S[G];if(B.texture!==null&&B.boundingBox.containsPoint(M))return B}return null}function lp(S,U,G,O,B){U.isScene!==!0&&(U=Ke),X.resetTextureUnits();const mt=U.fog,bt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?U.environment:null,pt=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Zt.workingColorSpace,At=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Rt=nt.get(O.envMap||bt,At),Vt=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qt=!!G.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Lt=!!G.morphAttributes.position,le=!!G.morphAttributes.normal,Ie=!!G.morphAttributes.color;let Re=an;O.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Re=R.toneMapping);const fe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ei=fe!==void 0?fe.length:0,_t=H.get(O),_i=y.state.lights;if(ne===!0&&(te===!0||S!==at)){const ve=S===at&&O.id===tt;Ft.setState(O,S,ve)}let ee=!1;O.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==_i.state.version||_t.outputColorSpace!==pt||B.isBatchedMesh&&_t.batching===!1||!B.isBatchedMesh&&_t.batching===!0||B.isBatchedMesh&&_t.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&_t.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&_t.instancing===!1||!B.isInstancedMesh&&_t.instancing===!0||B.isSkinnedMesh&&_t.skinning===!1||!B.isSkinnedMesh&&_t.skinning===!0||B.isInstancedMesh&&_t.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&_t.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&_t.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&_t.instancingMorph===!1&&B.morphTexture!==null||_t.envMap!==Rt||O.fog===!0&&_t.fog!==mt||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==Ft.numPlanes||_t.numIntersection!==Ft.numIntersection)||_t.vertexAlphas!==Vt||_t.vertexTangents!==qt||_t.morphTargets!==Lt||_t.morphNormals!==le||_t.morphColors!==Ie||_t.toneMapping!==Re||_t.morphTargetsCount!==ei||!!_t.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,_t.__version=O.version);let Ei=_t.currentProgram;ee===!0&&(Ei=Ya(O,U,B),D&&O.isNodeMaterial&&D.onUpdateProgram(O,Ei,_t));let $i=!1,Mn=!1,fs=!1;const pe=Ei.getUniforms(),Ue=_t.uniforms;if(_.useProgram(Ei.program)&&($i=!0,Mn=!0,fs=!0),O.id!==tt&&(tt=O.id,Mn=!0),_t.needsLights){const ve=op(y.state.lightProbeGridArray,B);_t.lightProbeGrid!==ve&&(_t.lightProbeGrid=ve,Mn=!0)}if($i||at!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pe.setValue(I,"projectionMatrix",S.projectionMatrix),pe.setValue(I,"viewMatrix",S.matrixWorldInverse);const Sn=pe.map.cameraPosition;Sn!==void 0&&Sn.setValue(I,He.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&pe.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&pe.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),at!==S&&(at=S,Mn=!0,fs=!0)}if(_t.needsLights&&(_i.state.directionalShadowMap.length>0&&pe.setValue(I,"directionalShadowMap",_i.state.directionalShadowMap,X),_i.state.spotShadowMap.length>0&&pe.setValue(I,"spotShadowMap",_i.state.spotShadowMap,X),_i.state.pointShadowMap.length>0&&pe.setValue(I,"pointShadowMap",_i.state.pointShadowMap,X)),B.isSkinnedMesh){pe.setOptional(I,B,"bindMatrix"),pe.setOptional(I,B,"bindMatrixInverse");const ve=B.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),pe.setValue(I,"boneTexture",ve.boneTexture,X))}B.isBatchedMesh&&(pe.setOptional(I,B,"batchingTexture"),pe.setValue(I,"batchingTexture",B._matricesTexture,X),pe.setOptional(I,B,"batchingIdTexture"),pe.setValue(I,"batchingIdTexture",B._indirectTexture,X),pe.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&pe.setValue(I,"batchingColorTexture",B._colorsTexture,X));const wn=G.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&F.update(B,G,Ei),(Mn||_t.receiveShadow!==B.receiveShadow)&&(_t.receiveShadow=B.receiveShadow,pe.setValue(I,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&U.environment!==null&&(Ue.envMapIntensity.value=U.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=A_()),Mn){if(pe.setValue(I,"toneMappingExposure",R.toneMappingExposure),_t.needsLights&&hp(Ue,fs),mt&&O.fog===!0&&Ct.refreshFogUniforms(Ue,mt),Ct.refreshMaterialUniforms(Ue,O,et,rt,y.state.transmissionRenderTarget[S.id]),_t.needsLights&&_t.lightProbeGrid){const ve=_t.lightProbeGrid;Ue.probesSH.value=ve.texture,Ue.probesMin.value.copy(ve.boundingBox.min),Ue.probesMax.value.copy(ve.boundingBox.max),Ue.probesResolution.value.copy(ve.resolution)}to.upload(I,Dc(_t),Ue,X)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(to.upload(I,Dc(_t),Ue,X),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&pe.setValue(I,"center",B.center),pe.setValue(I,"modelViewMatrix",B.modelViewMatrix),pe.setValue(I,"normalMatrix",B.normalMatrix),pe.setValue(I,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){const ve=O.uniformsGroups;for(let Sn=0,ps=ve.length;Sn<ps;Sn++){const Uc=ve[Sn];Q.update(Uc,Ei),Q.bind(Uc,Ei)}}return Ei}function hp(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function cp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(S,U,G){const O=H.get(S);O.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=U,H.get(S.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:G,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const G=H.get(S);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,G=0){K=S,V=U,k=G;let O=null,B=!1,mt=!1;if(S){const pt=H.get(S);if(pt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(I.FRAMEBUFFER,pt.__webglFramebuffer),ut.copy(S.viewport),xt.copy(S.scissor),Yt=S.scissorTest,_.viewport(ut),_.scissor(xt),_.setScissorTest(Yt),tt=-1;return}else if(pt.__webglFramebuffer===void 0)X.setupRenderTarget(S);else if(pt.__hasExternalTextures)X.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Vt=S.depthTexture;if(pt.__boundDepthTexture!==Vt){if(Vt!==null&&H.has(Vt)&&(S.width!==Vt.image.width||S.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(S)}}const At=S.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(mt=!0);const Rt=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?O=Rt[U][G]:O=Rt[U],B=!0):S.samples>0&&X.useMultisampledRTT(S)===!1?O=H.get(S).__webglMultisampledFramebuffer:Array.isArray(Rt)?O=Rt[G]:O=Rt,ut.copy(S.viewport),xt.copy(S.scissor),Yt=S.scissorTest}else ut.copy(It).multiplyScalar(et).floor(),xt.copy(De).multiplyScalar(et).floor(),Yt=jt;if(G!==0&&(O=W),_.bindFramebuffer(I.FRAMEBUFFER,O)&&_.drawBuffers(S,O),_.viewport(ut),_.scissor(xt),_.setScissorTest(Yt),B){const pt=H.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,pt.__webglTexture,G)}else if(mt){const pt=U;for(let At=0;At<S.textures.length;At++){const Rt=H.get(S.textures[At]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+At,Rt.__webglTexture,G,pt)}}else if(S!==null&&G!==0){const pt=H.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pt.__webglTexture,G)}tt=-1},this.readRenderTargetPixels=function(S,U,G,O,B,mt,bt,pt=0){if(!(S&&S.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){_.bindFramebuffer(I.FRAMEBUFFER,At);try{const Rt=S.textures[pt],Vt=Rt.format,qt=Rt.type;if(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pt),!C.textureFormatReadable(Vt)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(qt)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-O&&G>=0&&G<=S.height-B&&I.readPixels(U,G,O,B,ct.convert(Vt),ct.convert(qt),mt)}finally{const Rt=K!==null?H.get(K).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(S,U,G,O,B,mt,bt,pt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At)if(U>=0&&U<=S.width-O&&G>=0&&G<=S.height-B){_.bindFramebuffer(I.FRAMEBUFFER,At);const Rt=S.textures[pt],Vt=Rt.format,qt=Rt.type;if(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pt),!C.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Lt),I.bufferData(I.PIXEL_PACK_BUFFER,mt.byteLength,I.STREAM_READ),I.readPixels(U,G,O,B,ct.convert(Vt),ct.convert(qt),0);const le=K!==null?H.get(K).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,le);const Ie=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Wp(I,Ie,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Lt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,mt),I.deleteBuffer(Lt),I.deleteSync(Ie),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,G=0){const O=Math.pow(2,-G),B=Math.floor(S.image.width*O),mt=Math.floor(S.image.height*O),bt=U!==null?U.x:0,pt=U!==null?U.y:0;X.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,bt,pt,B,mt),_.unbindTexture()},this.copyTextureToTexture=function(S,U,G=null,O=null,B=0,mt=0){let bt,pt,At,Rt,Vt,qt,Lt,le,Ie;const Re=S.isCompressedTexture?S.mipmaps[mt]:S.image;if(G!==null)bt=G.max.x-G.min.x,pt=G.max.y-G.min.y,At=G.isBox3?G.max.z-G.min.z:1,Rt=G.min.x,Vt=G.min.y,qt=G.isBox3?G.min.z:0;else{const Ue=Math.pow(2,-B);bt=Math.floor(Re.width*Ue),pt=Math.floor(Re.height*Ue),S.isDataArrayTexture?At=Re.depth:S.isData3DTexture?At=Math.floor(Re.depth*Ue):At=1,Rt=0,Vt=0,qt=0}O!==null?(Lt=O.x,le=O.y,Ie=O.z):(Lt=0,le=0,Ie=0);const fe=ct.convert(U.format),ei=ct.convert(U.type);let _t;U.isData3DTexture?(X.setTexture3D(U,0),_t=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(X.setTexture2DArray(U,0),_t=I.TEXTURE_2D_ARRAY):(X.setTexture2D(U,0),_t=I.TEXTURE_2D),_.activeTexture(I.TEXTURE0),_.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const _i=_.getParameter(I.UNPACK_ROW_LENGTH),ee=_.getParameter(I.UNPACK_IMAGE_HEIGHT),Ei=_.getParameter(I.UNPACK_SKIP_PIXELS),$i=_.getParameter(I.UNPACK_SKIP_ROWS),Mn=_.getParameter(I.UNPACK_SKIP_IMAGES);_.pixelStorei(I.UNPACK_ROW_LENGTH,Re.width),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Re.height),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Rt),_.pixelStorei(I.UNPACK_SKIP_ROWS,Vt),_.pixelStorei(I.UNPACK_SKIP_IMAGES,qt);const fs=S.isDataArrayTexture||S.isData3DTexture,pe=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Ue=H.get(S),wn=H.get(U),ve=H.get(Ue.__renderTarget),Sn=H.get(wn.__renderTarget);_.bindFramebuffer(I.READ_FRAMEBUFFER,ve.__webglFramebuffer),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let ps=0;ps<At;ps++)fs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(S).__webglTexture,B,qt+ps),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(U).__webglTexture,mt,Ie+ps)),I.blitFramebuffer(Rt,Vt,bt,pt,Lt,le,bt,pt,I.DEPTH_BUFFER_BIT,I.NEAREST);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||H.has(S)){const Ue=H.get(S),wn=H.get(U);_.bindFramebuffer(I.READ_FRAMEBUFFER,$),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,z);for(let ve=0;ve<At;ve++)fs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ue.__webglTexture,B,qt+ve):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ue.__webglTexture,B),pe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wn.__webglTexture,mt,Ie+ve):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wn.__webglTexture,mt),B!==0?I.blitFramebuffer(Rt,Vt,bt,pt,Lt,le,bt,pt,I.COLOR_BUFFER_BIT,I.NEAREST):pe?I.copyTexSubImage3D(_t,mt,Lt,le,Ie+ve,Rt,Vt,bt,pt):I.copyTexSubImage2D(_t,mt,Lt,le,Rt,Vt,bt,pt);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else pe?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(_t,mt,Lt,le,Ie,bt,pt,At,fe,ei,Re.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(_t,mt,Lt,le,Ie,bt,pt,At,fe,Re.data):I.texSubImage3D(_t,mt,Lt,le,Ie,bt,pt,At,fe,ei,Re):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,mt,Lt,le,bt,pt,fe,ei,Re.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,mt,Lt,le,Re.width,Re.height,fe,Re.data):I.texSubImage2D(I.TEXTURE_2D,mt,Lt,le,bt,pt,fe,ei,Re);_.pixelStorei(I.UNPACK_ROW_LENGTH,_i),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ee),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Ei),_.pixelStorei(I.UNPACK_SKIP_ROWS,$i),_.pixelStorei(I.UNPACK_SKIP_IMAGES,Mn),mt===0&&U.generateMipmaps&&I.generateMipmap(_t),_.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&X.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?X.setTextureCube(S,0):S.isData3DTexture?X.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?X.setTexture2DArray(S,0):X.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){V=0,k=0,K=null,_.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const eo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class la{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const E_=new cc(-1,1,1,-1,0,1);class C_ extends Ne{constructor(){super(),this.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xe([0,2,0,0,2,0],2))}}const R_=new C_;class uc{constructor(t){this._mesh=new Fe(R_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,E_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class dc extends la{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Bt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Oa.clone(t.uniforms),this.material=new Bt({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new uc(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Nu extends la{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class P_ extends la{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class L_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new vt);this._width=i.width,this._height=i.height,e=new xi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Si}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dc(eo),this.copyPass.material.blending=nn,this.timer=new Rm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Nu!==void 0&&(r instanceof Nu?i=!0:r instanceof P_&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class F_ extends la{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new zt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=n}}const D_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new zt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ea extends la{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new vt(t.x,t.y):new vt(256,256),this.clearColor=new zt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new xi(s,r,{type:Si}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const u=new xi(s,r,{type:Si});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new xi(s,r,{type:Si});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}const o=D_;this.highPassUniforms=Oa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new vt(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Oa.clone(eo.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:eo.vertexShader,fragmentShader:eo.fragmentShader,premultipliedAlpha:!0,blending:We,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new zt,this._oldClearAlpha=1,this._basic=new Ii,this._fsQuad=new uc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new vt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ea.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ea.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=r}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(i*i))/i);return new Bt({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new vt(.5,.5)},direction:{value:new vt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Bt({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ea.BlurDirectionX=new vt(1,0);ea.BlurDirectionY=new vt(0,1);const Er={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class I_ extends la{constructor(){super(),this.isOutputPass=!0,this.uniforms=Oa.clone(Er.uniforms),this.material=new _f({name:Er.name,uniforms:this.uniforms,vertexShader:Er.vertexShader,fragmentShader:Er.fragmentShader}),this._fsQuad=new uc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Zt.getTransfer(this._outputColorSpace)===ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===$h&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const U_={uniforms:{tDiffuse:{value:null},uTime:{value:0},uBlur:{value:0},uBlurDir:{value:new vt(0,0)},uAberr:{value:0},uMobile:{value:0},uRes:{value:new vt(1,1)},uGrain:{value:.035},uVig:{value:.26}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uBlur;
    uniform vec2 uBlurDir;
    uniform float uAberr;
    uniform float uMobile;
    uniform vec2 uRes;
    uniform float uGrain;
    uniform float uVig;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 uv = vUv;
      vec2 c = uv - 0.5;
      vec3 col;
      // 방향성/라디얼 모션 블러 (이벤트/무쌍, 데스크톱만)
      if (uBlur > 0.002 && uMobile < 0.5) {
        vec2 dir = (c * 0.9 + uBlurDir * 1.5) * uBlur * 0.055;
        vec3 acc = vec3(0.0);
        for (int i = 0; i < 6; i++) {
          acc += texture2D(tDiffuse, uv - dir * (float(i) / 5.0)).rgb;
        }
        col = acc / 6.0;
      } else {
        col = texture2D(tDiffuse, uv).rgb;
      }
      // 색수차 펄스 (이벤트): R/B 반경 오프셋
      if (uAberr > 0.002) {
        vec2 off = c * uAberr * 0.02;
        col.r = texture2D(tDiffuse, uv + off).r;
        col.b = texture2D(tDiffuse, uv - off).b;
      }
      // 톤 그레이딩: HDR 안전한 미세 온기 곱(섀도 청록/하이라이트 웜 대비)
      col *= vec3(1.025, 1.0, 0.985);
      // 비네트 브리딩 (상시, 아주 느린 맥동)
      float breathe = uVig + 0.05 * sin(uTime * 0.6);
      float vig = 1.0 - smoothstep(0.45, 0.98, length(c)) * breathe;
      col *= vig;
      // 필름 그레인 (상시, 애니메이션)
      float g = hash(uv * uRes + fract(uTime) * 91.7);
      col += (g - 0.5) * uGrain;
      gl_FragColor = vec4(col, 1.0);
    }
  `};class k_{pass;mobile;blur=0;blurX=0;blurZ=0;aberr=0;musou=0;time=0;lastT=0;constructor(t){this.mobile=t,this.pass=new dc(U_),this.pass.uniforms.uMobile.value=t?1:0,this.pass.uniforms.uGrain.value=t?.02:.035,this.lastT=performance.now()}pulseBlur(t,e=0,i=0){t>this.blur&&(this.blur=t);const n=Math.hypot(e,i);n>.001?(this.blurX=e/n,this.blurZ=i/n):(this.blurX=0,this.blurZ=0)}pulseAberration(t){t>this.aberr&&(this.aberr=t)}setMusou(t){this.musou=t<0?0:t>1?1:t}setSize(t,e){this.pass.uniforms.uRes.value.set(t,e)}reset(){this.blur=0,this.aberr=0,this.musou=0}update(){const t=performance.now();let e=(t-this.lastT)/1e3;this.lastT=t,e>.1&&(e=.1),this.time+=e,this.blur=this.blur>.01?this.blur*Math.exp(-e/.11):0,this.aberr=this.aberr>.01?this.aberr*Math.exp(-e/.16):0;const i=this.musou*.45,n=this.musou*.3,s=this.blur>.01,r=this.pass.uniforms;r.uBlur.value=Math.max(this.blur,i),r.uBlurDir.value.set(s?this.blurX:0,s?this.blurZ:0),r.uAberr.value=Math.max(this.aberr,n),r.uTime.value=this.time}}function io(){return"ontouchstart"in window||navigator.maxTouchPoints>0}function Lh(){return Math.min(window.devicePixelRatio,io()?1.5:2)}function N_(a){const t=new T_({antialias:!1,powerPreference:"high-performance"});return t.setPixelRatio(Lh()),t.setSize(window.innerWidth,window.innerHeight),t.toneMapping=Mo,t.toneMappingExposure=1,t.outputColorSpace=Se,t.setClearColor(329226,1),a.appendChild(t.domElement),t}const z_={uniforms:{tDiffuse:{value:null},uStrength:{value:0},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uStrength;
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      if (uStrength <= 0.001) { gl_FragColor = c; return; }
      vec2 d = vUv - 0.5;
      float dist = length(d);
      float ang = atan(d.y, d.x);
      // 채도 부스트 + 살짝 붉은 기운
      float luma = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      vec3 sat = mix(vec3(luma), c.rgb, 1.0 + 0.6 * uStrength);
      sat.r *= 1.0 + 0.06 * uStrength;
      // 방사형 스피드라인 (가장자리에서 강함)
      float lines = sin(ang * 60.0 + uTime * 4.0) * 0.5 + 0.5;
      lines = pow(lines, 6.0) * smoothstep(0.15, 0.5, dist);
      sat += lines * uStrength * 0.5;
      // 비네트
      float vig = 1.0 - smoothstep(0.35, 0.85, dist) * uStrength * 0.8;
      gl_FragColor = vec4(sat * vig, c.a);
    }
  `},Cr=320,Rr=180,O_=2,ya=90,zu=4;class B_{composer;bloom;musouPass;postfx;renderer;bloomScale;pipEnabled;ring=[];ringCtx=[];ringFilled=0;ringHead=0;capCounter=0;replayT=-1;replayStart=0;replayFrames=[];pipWrap=null;pipCanvas=null;pipCtx=null;constructor(t,e,i){this.renderer=t,this.composer=new L_(t),this.composer.setPixelRatio(Lh()),this.composer.setSize(window.innerWidth,window.innerHeight),this.composer.addPass(new F_(e,i)),this.bloomScale=io()?.5:1,this.bloom=new ea(new vt(window.innerWidth*this.bloomScale,window.innerHeight*this.bloomScale),.34,.4,.88),this.composer.addPass(this.bloom),this.musouPass=new dc(z_),this.composer.addPass(this.musouPass),this.postfx=new k_(io()),this.postfx.setSize(window.innerWidth,window.innerHeight),this.composer.addPass(this.postfx.pass),this.composer.addPass(new I_),this.pipEnabled=!io(),this.pipEnabled&&this.initPip()}initPip(){for(let s=0;s<ya;s++){const r=document.createElement("canvas");r.width=Cr,r.height=Rr;const o=r.getContext("2d");if(!o){this.pipEnabled=!1;return}this.ring.push(r),this.ringCtx.push(o)}const t=document.createElement("div");t.style.cssText=["position:fixed","right:18px","bottom:18px","width:26vw","max-width:360px","aspect-ratio:16/9","z-index:28","pointer-events:none","display:none","border:2px solid rgba(232,201,103,0.85)","border-radius:6px","overflow:hidden","box-shadow:0 6px 24px rgba(0,0,0,0.6)"].join(";");const e=document.createElement("div");e.textContent="討伐 · 슬로 리플레이",e.style.cssText=["position:absolute","left:0","top:0","padding:2px 8px","font:600 12px/1.4 system-ui,sans-serif","color:#ffe9a8","background:linear-gradient(90deg,rgba(0,0,0,0.7),rgba(0,0,0,0))","letter-spacing:0.04em"].join(";");const i=document.createElement("canvas");i.width=Cr,i.height=Rr,i.style.cssText="width:100%;height:100%;display:block;";const n=i.getContext("2d");if(!n){this.pipEnabled=!1;return}t.appendChild(i),t.appendChild(e),document.body.appendChild(t),this.pipWrap=t,this.pipCanvas=i,this.pipCtx=n}playReplay(){if(!this.pipEnabled||this.replayT>=0||this.ringFilled<8)return;this.replayFrames.length=0;const t=this.ringFilled<ya?0:this.ringHead;for(let e=0;e<this.ringFilled;e++)this.replayFrames.push(this.ring[(t+e)%ya]);this.replayT=0,this.replayStart=performance.now(),this.pipWrap&&(this.pipWrap.style.display="block",this.pipWrap.animate([{opacity:0,transform:"translateY(12px) scale(0.94)"},{opacity:1,transform:"none"}],{duration:260,easing:"ease-out"}))}setMusou(t,e){this.musouPass.uniforms.uStrength.value=t,this.musouPass.uniforms.uTime.value=e,this.postfx.setMusou(t)}pulseBlur(t,e=0,i=0){this.postfx.pulseBlur(t,e,i)}pulseAberration(t){this.postfx.pulseAberration(t)}setSize(t,e){const i=Lh();this.renderer.setPixelRatio(i),this.renderer.setSize(t,e),this.composer.setPixelRatio(i),this.composer.setSize(t,e),this.bloom.setSize(t*this.bloomScale,e*this.bloomScale),this.postfx.setSize(t,e)}render(){this.postfx.update(),this.composer.render(),this.pipEnabled&&this.pipTick()}pipTick(){if(this.replayT>=0){this.advanceReplay();return}++this.capCounter<O_||(this.capCounter=0,this.ringCtx[this.ringHead].drawImage(this.renderer.domElement,0,0,Cr,Rr),this.ringHead=(this.ringHead+1)%ya,this.ringFilled<ya&&this.ringFilled++)}advanceReplay(){const t=(performance.now()-this.replayStart)/1e3;if(this.replayT=t,t>=zu||!this.pipCtx||this.replayFrames.length===0){this.endReplay();return}const e=Math.min(this.replayFrames.length-1,Math.floor(t/zu*this.replayFrames.length));this.pipCtx.drawImage(this.replayFrames[e],0,0,Cr,Rr)}endReplay(){if(this.replayT=-1,this.replayFrames.length=0,this.capCounter=0,this.pipWrap){const t=this.pipWrap;t.animate([{opacity:1},{opacity:0}],{duration:260,easing:"ease-in"}).onfinish=()=>{t.style.display="none"}}}}const ha=55*Math.PI/180,H_=24,G_=Math.sin(ha),V_=Math.cos(ha),W_=1.1,X_=1.5,Ou=1.1,q_=.08,$_=2.5,j_=.3,Z_=.05,K_=.05,Y_=1.32,Bu=2.2,J_=.55,Hu=1.8;function ul(a,t){const e=Math.sin(a*12.9898+t*78.233)*43758.5453;return(e-Math.floor(e))*2-1}const Gu=40;class Q_{camera;sx={x:0,z:0};trauma=0;time=0;inited=!1;fovPunch=0;zoom=1;threat=0;speedFrac=0;cine=0;cineHold=0;azi=0;elevOff=0;offX=0;offZ=0;laX=0;laZ=0;laTX=0;laTZ=0;look=new L;constructor(){this.camera=new Pi(Gu,window.innerWidth/window.innerHeight,.1,300)}onResize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}addTrauma(t){this.trauma=Math.min(1,this.trauma+t)}punchFov(t){this.fovPunch=Math.max(-6,Math.min(6,this.fovPunch+t))}setThreat(t){this.threat=t<0?0:t>1?1:t}setLookAhead(t,e,i){const n=Math.min(1,i);this.speedFrac=n;const s=Math.hypot(t,e)||1;this.laTX=t/s*n*Bu*J_,this.laTZ=e/s*n*Bu}cinematic(t){this.cine=t}setCinematicPose(t,e,i,n=0,s=0){this.azi=t,this.elevOff=e,this.cineHold=i,this.offX=n,this.offZ=s}update(t,e,i){this.time+=t,this.laX+=(this.laTX-this.laX)*Math.min(1,Hu*t),this.laZ+=(this.laTZ-this.laZ)*Math.min(1,Hu*t);const n=e+this.laX,s=i+this.laZ;this.inited||(this.sx.x=n,this.sx.z=s,this.inited=!0);const r=1-Math.exp(-9*t);this.sx.x+=(n-this.sx.x)*r,this.sx.z+=(s-this.sx.z)*r,this.cine*=Math.exp(-t/.7),Math.abs(this.cine)<.002&&(this.cine=0);const o=Math.min(Y_,1+this.threat*j_-Z_*(1-this.threat)+K_*this.speedFrac);this.zoom+=(o-this.zoom)*Math.min(1,$_*t);const l=H_*Math.max(.5,this.zoom+this.cine+this.cineHold);Math.abs(this.fovPunch)>.001&&(this.fovPunch*=Math.exp(-t/.18),Math.abs(this.fovPunch)<.001&&(this.fovPunch=0),this.camera.fov=Gu+this.fovPunch,this.camera.updateProjectionMatrix());let h=G_,c=V_;if(this.elevOff!==0){const m=ha+this.elevOff;h=Math.sin(m),c=Math.cos(m)}const u=l*c,d=this.sx.x+this.offX,f=this.sx.z+this.offZ;if(this.azi!==0?this.camera.position.set(d+u*Math.sin(this.azi),l*h,f+u*Math.cos(this.azi)):this.camera.position.set(d,l*h,f+u),this.look.set(d,W_,f),this.camera.lookAt(this.look),this.trauma=Math.max(0,this.trauma-X_*t),this.trauma>0){const m=this.trauma*this.trauma,v=this.time*32;this.camera.position.x+=Ou*m*ul(v,1),this.camera.position.y+=Ou*m*ul(v,2),this.camera.rotation.z+=q_*m*ul(v,3)}}}class tb{down=new Set;pressed=new Set;move={x:0,z:0};joy={x:0,z:0,active:!1};constructor(t=window){t.addEventListener("keydown",this.onKeyDown),t.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",()=>{this.down.clear()})}onKeyDown=t=>{eb.has(t.code)&&t.preventDefault(),this.down.has(t.code)||this.pressed.add(t.code),this.down.add(t.code)};onKeyUp=t=>{this.down.delete(t.code)};isDown(t){return this.down.has(t)}consumePressed(t){return this.pressed.has(t)?(this.pressed.delete(t),!0):!1}press(t){this.pressed.add(t)}poll(){if(this.joy.active){this.move.x=this.joy.x,this.move.z=this.joy.z;return}let t=0,e=0;(this.down.has("KeyD")||this.down.has("ArrowRight"))&&(t+=1),(this.down.has("KeyA")||this.down.has("ArrowLeft"))&&(t-=1),(this.down.has("KeyS")||this.down.has("ArrowDown"))&&(e+=1),(this.down.has("KeyW")||this.down.has("ArrowUp"))&&(e-=1),this.move.x=t,this.move.z=e}endFrame(){this.pressed.clear()}}const eb=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);class ib{running=!1;last=0;cb;constructor(t){this.cb=t}start(){this.running||(this.running=!0,this.last=performance.now(),requestAnimationFrame(this.tick))}stop(){this.running=!1}tick=t=>{if(!this.running)return;let e=(t-this.last)/1e3;this.last=t,e>.033&&(e=.033),e<0&&(e=0),this.cb(e),requestAnimationFrame(this.tick)}}const Nn=48,Ba=64;function fc(a,t,e,i,n,s){const r=t+n*Nn,o=e+i*Ba;s.u=r/a.texW,s.v=1-(o+Ba)/a.texH}class nb{manifest;sgrade;apriority;soldiers;variants;constructor(t,e){this.manifest=t,this.sgrade=e.sgrade,this.apriority=e.apriority,this.soldiers=e.soldiers,this.variants=e.variants}soldierBlockPx(t){return t*4*Nn}variantBlocks(t){return this.manifest.sheets.soldiersVariants.variants[t]??[]}}function Pr(a,t,e){a.magFilter=oe,a.minFilter=oe,a.generateMipmaps=!1,a.colorSpace=Se,a.premultiplyAlpha=!1,a.flipY=!0,a.needsUpdate=!0;const i=t*Nn,n=e*Ba;return{texture:a,texW:i,texH:n,cellUvW:Nn/i,cellUvH:Ba/n}}async function sb(){const t="/oni-survivor/"+"assets/sprites/",i=await(await fetch(t+"manifest.json")).json(),n=new Xa,s=c=>new Promise((u,d)=>{n.load(t+c,u,void 0,d)}),[r,o,l,h]=await Promise.all([s(i.sheets.sgrade.file),s(i.sheets.apriority.file),s(i.sheets.soldiers.file),s(i.sheets.soldiersVariants.file)]);return new nb(i,{sgrade:Pr(r,i.sheets.sgrade.cols,i.sheets.sgrade.rows),apriority:Pr(o,i.sheets.apriority.cols,i.sheets.apriority.rows),soldiers:Pr(l,i.sheets.soldiers.cols,i.sheets.soldiers.rows),variants:Pr(h,i.sheets.soldiersVariants.cols,i.sheets.soldiersVariants.rows)})}const Us=a=>1-Math.pow(1-a,3),ks=a=>a<.5?4*a*a*a:1-Math.pow(-2*a+2,3)/2,Fh=a=>a<0?0:a>1?1:a,Vu=(a,t,e)=>{const i=Fh((e-a)/(t-a));return i*i*(3-2*i)},Lr=.4,dl=-.15,Wu=-.08,ab=-.11,Xu=.4,Fr=.6,fl=1.1,rb=.07,ob=.9,qu=.45,pl=.7,lb=-.13,hb=32,$u=1,ju=9,cb=.1,Zu=1.2,ub=.62,db=-.12,Ku=6,Yu=.7,Ju=4,fb=.05;class pb{rig;onReplay;musouActive=!1;musouT=0;musouEndT=-1;endAzi=0;endElev=0;endZoom=0;killcamT=-1;killcamCooldown=0;panT=-1;panDirX=0;panDirZ=0;deathT=-1;deathDirX=0;deathDirZ=0;allyT=-1;allyDirX=0;allyDirZ=0;vignette;replayPending=!1;constructor(t,e){this.rig=t,this.onReplay=e??null,this.vignette=document.createElement("div"),this.vignette.style.cssText=["position:fixed","inset:0","pointer-events:none","opacity:0","z-index:29","background:radial-gradient(ellipse at center, rgba(0,0,0,0) 34%, rgba(6,4,10,0.9) 100%)"].join(";"),document.body.appendChild(this.vignette)}onMusouStart(){this.musouActive=!0,this.musouT=0,this.musouEndT=-1,this.killcamT=-1,this.rig.addTrauma(.35),this.rig.punchFov(-2.5)}onMusouEnd(){if(!this.musouActive)return;const t=this.musouPose(this.musouT);this.endAzi=t.azi,this.endElev=t.elev,this.endZoom=t.zoom,this.musouActive=!1,this.musouEndT=0,this.rig.cinematic(-.11),this.rig.punchFov(4.5),this.rig.addTrauma(.6)}onMassKill(t){this.musouActive||this.musouEndT>=0||this.killcamCooldown>0||this.killcamT>=0||(this.killcamT=0,this.killcamCooldown=hb,this.rig.addTrauma(.25),this.vignette.animate([{opacity:0},{opacity:.95,offset:.22},{opacity:.6,offset:.55},{opacity:0}],{duration:pl*1e3,easing:"ease-out"}))}onBossSpawn(t,e){const i=Math.hypot(t,e)||1;this.panDirX=t/i,this.panDirZ=e/i,this.panT=0}onBossDeath(t,e){const i=Math.hypot(t,e)||1;this.deathDirX=t/i,this.deathDirZ=e/i,this.deathT=0,this.panT=-1,this.onReplay?this.onReplay():this.replayPending=!0}onAllyJoin(t,e){if(this.musouActive||this.musouEndT>=0||this.panT>=0||this.deathT>=0||this.killcamT>=0)return;const i=Math.hypot(t,e)||1;this.allyDirX=t/i,this.allyDirZ=e/i,this.allyT=0}onDash(){this.rig.cinematic(-.1),this.rig.punchFov(2)}get wantsSkipInput(){return this.panT>=0}skip(){this.panT>=0&&(this.panT=-1),this.allyT>=0&&(this.allyT=-1)}consumeReplayTrigger(){return this.replayPending?(this.replayPending=!1,!0):!1}reset(){this.musouActive=!1,this.musouEndT=-1,this.killcamT=-1,this.killcamCooldown=0,this.panT=-1,this.deathT=-1,this.allyT=-1,this.replayPending=!1,this.rig.setCinematicPose(0,0,0,0,0)}update(t){this.killcamCooldown>0&&(this.killcamCooldown-=t);let e=0,i=0,n=0,s=0,r=0;if(this.musouActive){this.musouT+=t;const o=this.musouPose(this.musouT);e+=o.azi,i+=o.elev,n+=o.zoom}else if(this.musouEndT>=0){this.musouEndT+=t;const o=ks(Fh(this.musouEndT/qu));e+=this.endAzi*(1-o),i+=this.endElev*(1-o),n+=this.endZoom*(1-o),this.musouEndT>=qu&&(this.musouEndT=-1)}if(this.killcamT>=0){this.killcamT+=t;const o=this.killcamT/pl,l=Vu(0,.18,o)*(1-Vu(.55,1,o));n+=lb*l,this.killcamT>=pl&&(this.killcamT=-1)}if(this.panT>=0){this.panT+=t;const o=this.panT/$u,l=o<.5?Us(o/.5):1-ks((o-.5)/.5);s+=this.panDirX*ju*l,r+=this.panDirZ*ju*l,n+=cb*l,this.panT>=$u&&(this.panT=-1)}if(this.deathT>=0){this.deathT+=t;const o=this.deathT/Zu,l=o<.45?Us(o/.45):1-ks((o-.45)/.55);e+=ub*l,n+=db*l,s+=this.deathDirX*Ku*l,r+=this.deathDirZ*Ku*l,this.deathT>=Zu&&(this.deathT=-1)}if(this.allyT>=0)if(this.musouActive||this.musouEndT>=0||this.panT>=0||this.deathT>=0||this.killcamT>=0)this.allyT=-1;else{this.allyT+=t;const o=this.allyT/Yu,l=o<.5?Us(o/.5):1-ks((o-.5)/.5);s+=this.allyDirX*Ju*l,r+=this.allyDirZ*Ju*l,n+=fb*l,this.allyT>=Yu&&(this.allyT=-1)}this.rig.setCinematicPose(e,i,n,s,r)}musouPose(t){let e;if(t<Lr)e=dl*Us(t/Lr);else if(t<.9){const s=ks((t-Lr)/(.9-Lr));e=dl+(Wu-dl)*s}else e=Wu;const i=ab*Us(Fh(t/.5));let n;if(t<Fr)n=Xu*Us(t/Fr);else if(t<fl){const s=ks((t-Fr)/(fl-Fr));n=Xu*(1-s)}else n=rb*Math.sin((t-fl)*ob);return{azi:n,elev:i,zoom:e}}}const Je=12,qa=`
  #define MAX_LIGHTS ${Je}
  uniform vec3 uLightPos[MAX_LIGHTS];
  uniform vec3 uLightColor[MAX_LIGHTS];
  uniform float uLightRadius[MAX_LIGHTS];
  uniform int uLightCount;
  varying vec2 vWorldXZ;
  vec3 sampleLights() {
    vec3 s = vec3(0.0);
    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= uLightCount) break;
      vec2 d = vWorldXZ - uLightPos[i].xz;
      float dist = length(d);
      float a = clamp(1.0 - dist / uLightRadius[i], 0.0, 1.0);
      s += uLightColor[i] * a * a;
    }
    return s;
  }
`,$a="varying vec2 vWorldXZ;";class mb{px=new Float32Array(Je);py=new Float32Array(Je);pz=new Float32Array(Je);cr=new Float32Array(Je);cg=new Float32Array(Je);cb=new Float32Array(Je);rad=new Float32Array(Je);life=new Float32Array(Je);maxLife=new Float32Array(Je);prio=new Uint8Array(Je);uLightPos={value:new Float32Array(Je*3)};uLightColor={value:new Float32Array(Je*3)};uLightRadius={value:new Float32Array(Je)};uLightCount={value:0};capActive;constructor(t=!1){this.capActive=t?6:Je}spawn(t,e,i,n,s,r,o,l,h=!1){let c=-1,u=1/0;for(let d=0;d<Je;d++){if(this.life[d]<=0){c=d;break}!h&&this.prio[d]===1||this.life[d]<u&&(u=this.life[d],c=d)}c<0||(this.px[c]=t,this.py[c]=e,this.pz[c]=i,this.cr[c]=n,this.cg[c]=s,this.cb[c]=r,this.rad[c]=o,this.life[c]=l,this.maxLife[c]=l,this.prio[c]=h?1:0)}update(t){const e=this.uLightPos.value,i=this.uLightColor.value,n=this.uLightRadius.value;let s=0;for(let r=0;r<Je;r++){if(this.life[r]<=0||(this.life[r]-=t,this.life[r]<=0||s>=this.capActive))continue;const o=this.life[r]/this.maxLife[r],l=o*o,h=s*3;e[h]=this.px[r],e[h+1]=this.py[r],e[h+2]=this.pz[r],i[h]=this.cr[r]*l,i[h+1]=this.cg[r]*l,i[h+2]=this.cb[r]*l,n[s]=this.rad[r],s++}this.uLightCount.value=s}uniforms(){return{uLightPos:this.uLightPos,uLightColor:this.uLightColor,uLightRadius:this.uLightRadius,uLightCount:this.uLightCount}}reset(){this.life.fill(0),this.prio.fill(0),this.uLightCount.value=0}get activeCount(){return this.uLightCount.value}}const Dh=420,Ih=42,Qu=Dh/Ih,Dr=240,gb=34;class vb{plane;tex;fireflies;fireflyMat;time=0;constructor(t,e){t.fog=new rc(329226,.017),this.tex=xb(),this.tex.wrapS=bn,this.tex.wrapT=bn,this.tex.repeat.set(Ih,Ih);const i=new Qt(Dh,Dh,1,1);i.rotateX(-Math.PI/2);const n=new Ii({map:this.tex,toneMapped:!0});n.onBeforeCompile=h=>{Object.assign(h.uniforms,e),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
${$a}`).replace("#include <project_vertex>",`#include <project_vertex>
  vWorldXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
${qa}`).replace("#include <tonemapping_fragment>",`  gl_FragColor.rgb += sampleLights() * 1.35;
#include <tonemapping_fragment>`)},this.plane=new Fe(i,n),this.plane.renderOrder=-1,t.add(this.plane);const s=new Ne,r=new Float32Array(Dr*3),o=new Float32Array(Dr),l=new Float32Array(Dr);for(let h=0;h<Dr;h++){const c=Math.random()*Math.PI*2,u=Math.sqrt(Math.random())*gb;r[h*3]=Math.cos(c)*u,r[h*3+1]=.5+Math.random()*7,r[h*3+2]=Math.sin(c)*u,o[h]=Math.random()*Math.PI*2,l[h]=.5+Math.random()*1.2}s.setAttribute("position",new Ae(r,3)),s.setAttribute("aPhase",new Ae(o,1)),s.setAttribute("aSpeed",new Ae(l,1)),this.fireflyMat=new Bt({uniforms:{uTime:{value:0},uSize:{value:90},uColor:{value:new zt(1.5,.85,.4)}},vertexShader:`
        attribute float aPhase;
        attribute float aSpeed;
        uniform float uTime;
        uniform float uSize;
        varying float vTw;
        void main() {
          vec3 p = position;
          p.x += sin(uTime * 0.5 * aSpeed + aPhase) * 0.9;
          p.y += sin(uTime * 0.7 * aSpeed + aPhase * 1.7) * 0.6;
          p.z += cos(uTime * 0.45 * aSpeed + aPhase) * 0.9;
          vTw = 0.5 + 0.5 * sin(uTime * 2.0 * aSpeed + aPhase * 3.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = uSize / max(0.1, -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying float vTw;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(uColor * (0.4 + vTw) * a, 1.0);
        }
      `,transparent:!0,blending:We,depthWrite:!1,depthTest:!0}),this.fireflies=new mf(s,this.fireflyMat),this.fireflies.frustumCulled=!1,t.add(this.fireflies)}update(t,e,i){this.time+=t,this.plane.position.set(e,0,i),this.tex.offset.set(e/Qu,-i/Qu),this.fireflies.position.set(e,0,i),this.fireflyMat.uniforms.uTime.value=this.time}}function xb(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#080a11",e.fillRect(0,0,512,512);const i=(s,r,o,l,h)=>{for(let c=-1;c<=1;c++)for(let u=-1;u<=1;u++)e.fillStyle=`rgba(${l},${l+4},${l+12},${h})`,e.beginPath(),e.arc(s+c*512,r+u*512,o,0,Math.PI*2),e.fill()};for(let s=0;s<40;s++)i(Math.random()*512,Math.random()*512,40+Math.random()*90,6+Math.random()*14,.04);for(let s=0;s<240;s++)i(Math.random()*512,Math.random()*512,8+Math.random()*30,8+Math.random()*26,.05);for(let s=0;s<900;s++)i(Math.random()*512,Math.random()*512,1+Math.random()*6,10+Math.random()*30,.05);e.strokeStyle="rgba(20,24,34,0.45)";for(let s=0;s<22;s++){e.lineWidth=.5+Math.random()*1.6;let r=Math.random()*512,o=Math.random()*512;e.beginPath(),e.moveTo(r,o);const l=3+(Math.random()*5|0);for(let h=0;h<l;h++)r+=(Math.random()*2-1)*55,o+=(Math.random()*2-1)*55,e.lineTo(r,o);e.stroke()}const n=new Ai(t);return n.anisotropy=4,n.needsUpdate=!0,n}const _b=new L(18e-5,26e-5,8e-4),bb=.019,ss={uCutFrom:{value:new L(0,40,60)},uCutTo:{value:new L(0,1.2,0)},uCutR:{value:2},uCutOn:{value:0}};function td(a,t,e,i,n,s,r){ss.uCutFrom.value.set(a,t,e),ss.uCutTo.value.set(i,n,s),ss.uCutOn.value=r?1:0}const ed=new Map;function yb(a){const t=ed.get(a);if(t)return t;const e=document.createElement("canvas");e.width=64,e.height=64;const i=e.getContext("2d"),n=a==="stone"?["#b7b2aa","#948f89","#716e6d","#4e4d52"]:a==="darkStone"?["#8b8988","#69686b","#4c4c52","#303138"]:a==="roof"?["#a5a9a8","#797f82","#545c62","#303943"]:a==="wood"?["#b7ada4","#8f857f","#655d5c","#403a3d"]:["#d8d1be","#afa68e","#817965","#514b42"];if(i.fillStyle=n[1],i.fillRect(0,0,64,64),a==="stone"||a==="darkStone")for(let r=0;r<64;r+=8){const o=(r/8&1)*6;i.fillStyle=n[3],i.fillRect(0,r,64,1);for(let l=-o;l<64;l+=12){i.fillRect(l,r,1,8);const h=l*7+r*11>>>2&1;i.fillStyle=n[h],i.fillRect(l+2,r+2,7,1),i.fillStyle=n[3]}}else if(a==="roof"){i.fillStyle=n[3];for(let r=0;r<64;r+=8)i.fillRect(0,r,64,1);for(let r=0;r<64;r+=8){const o=(r/8&1)*4;for(let l=-o;l<64;l+=8)i.fillStyle=n[2],i.fillRect(l,r+1,1,7),i.fillStyle=n[0],i.fillRect(l+2,r+2,4,1)}}else if(a==="wood"){for(let r=0;r<64;r+=8)i.fillStyle=n[3],i.fillRect(r,0,1,64),i.fillStyle=n[0],i.fillRect(r+2,0,1,64);for(let r=7;r<64;r+=17)i.fillStyle=n[2],i.fillRect(r*5%56+2,r,4,2)}else for(let r=0;r<64;r+=6)i.fillStyle=r/6&1?n[0]:n[2],i.fillRect(0,r,64,2);const s=new Ai(e);return s.colorSpace=Se,s.wrapS=bn,s.wrapT=bn,s.magFilter=oe,s.minFilter=Wa,s.generateMipmaps=!0,ed.set(a,s),s}function ja(a){return new Bt({uniforms:{uBase:{value:new zt(a.base)},uDark:{value:new zt(a.dark)},uMap:{value:yb(a.surface)},uTextureScale:{value:a.textureScale},uFogColor:{value:_b.clone()},uFogDensity:{value:bb},uCutFrom:ss.uCutFrom,uCutTo:ss.uCutTo,uCutR:ss.uCutR,uCutOn:ss.uCutOn},vertexShader:`
      varying vec3 vWorld;
      varying vec3 vNormalWorld;
      varying float vFogDepth;
      void main() {
        mat4 worldMatrix = modelMatrix * instanceMatrix;
        vec4 world = worldMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vNormalWorld = normalize(mat3(worldMatrix) * normal);
        vec4 mv = viewMatrix * world;
        vFogDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uBase;
      uniform vec3 uDark;
      uniform sampler2D uMap;
      uniform float uTextureScale;
      uniform vec3 uFogColor;
      uniform float uFogDensity;
      uniform vec3 uCutFrom;
      uniform vec3 uCutTo;
      uniform float uCutR;
      uniform float uCutOn;
      varying vec3 vWorld;
      varying vec3 vNormalWorld;
      varying float vFogDepth;
      void main() {
        // #52 컷어웨이: 카메라→플레이어 광선 실린더 안이고 플레이어보다 카메라 쪽에 있는
        // 조각을 오더드 디더(IGN)로 제거 → 성문루/성벽 뒤 플레이어가 비쳐 보인다.
        if (uCutOn > 0.5) {
          vec3 axis = uCutTo - uCutFrom;
          float pl = length(axis);
          vec3 dir = axis / max(pl, 0.001);
          vec3 rel = vWorld - uCutFrom;
          float along = dot(rel, dir);
          if (along > 0.4 && along < pl - 0.5) {
            float perp = length(rel - dir * along);
            float hole = 1.0 - smoothstep(uCutR * 0.6, uCutR, perp);
            if (hole > 0.001) {
              float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
              if (hole > ign) discard;
            }
          }
        }
        vec3 n = normalize(vNormalWorld);
        vec2 surfaceUv = abs(n.y) > 0.72
          ? vWorld.xz
          : (abs(n.x) > abs(n.z) ? vWorld.zy : vWorld.xy);
        float texel = texture2D(uMap, surfaceUv * uTextureScale).r;
        vec3 albedo = mix(uDark, uBase, clamp(texel * 1.32, 0.0, 1.0));

        // 장면에 실제 광원이 없어도 형태가 뜨지 않도록 반구광, 지면 반사광, 기단 AO를 합성한다.
        vec3 keyDir = normalize(vec3(-0.48, 0.84, 0.28));
        vec3 fillDir = normalize(vec3(0.62, 0.24, -0.52));
        float key = max(0.0, dot(n, keyDir));
        float fill = max(0.0, dot(n, fillDir));
        float hemi = mix(0.76, 1.04, n.y * 0.5 + 0.5);
        float baseAo = mix(0.74, 1.0, smoothstep(0.0, 1.35, vWorld.y));
        float undersideAo = mix(0.82, 1.0, smoothstep(-0.35, 0.35, n.y));
        vec3 ambientTint = mix(vec3(0.72, 0.66, 0.64), vec3(0.84, 0.9, 1.0), n.y * 0.5 + 0.5);
        vec3 illumination = ambientTint * hemi + vec3(1.0, 0.78, 0.56) * key * 0.34 + vec3(0.38, 0.45, 0.62) * fill * 0.14;
        vec3 col = albedo * illumination * baseAo * undersideAo;

        // 조명을 계단식으로 양자화해 기존 캐릭터 도트와 어울리는 면 분할을 만든다.
        col = floor(col * 18.0 + 0.5) / 18.0;
        float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
        gl_FragColor = vec4(mix(col, uFogColor, clamp(fog, 0.0, 1.0)), 1.0);
      }
    `,depthWrite:!0,depthTest:!0})}class Vn{mesh;dummy=new Ze;scratch=new me;w=0;constructor(t,e,i,n){this.mesh=new ye(e,i,n),this.mesh.instanceMatrix.setUsage(Tt),this.mesh.count=0,this.mesh.frustumCulled=!1,t.add(this.mesh)}begin(){this.w=0}push(t,e,i,n,s,r,o=0,l=0,h=0){this.w>=this.mesh.instanceMatrix.count||(this.dummy.position.set(t,e,i),this.dummy.rotation.set(h,o,l,"YXZ"),this.dummy.scale.set(n,s,r),this.dummy.updateMatrix(),this.scratch.copy(this.dummy.matrix),this.mesh.setMatrixAt(this.w++,this.scratch))}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.computeBoundingSphere()}get count(){return this.w}}const Mb=ja({base:4011318,dark:2038043,surface:"stone",textureScale:.46}),wb=ja({base:6511446,dark:2696746,surface:"darkStone",textureScale:.52}),Sb=ja({base:3489861,dark:1515042,surface:"roof",textureScale:.62}),Ab=ja({base:10165019,dark:4852234,surface:"wood",textureScale:.72}),id=ja({base:14792285,dark:7423265,surface:"gold",textureScale:.8});function Ir(){const a=new on(1,1,1);return a.translate(0,.5,0),a}function Tb(){const a=document.createElement("canvas");a.width=32,a.height=32;const t=a.getContext("2d"),e=t.createRadialGradient(16,16,2,16,16,16);e.addColorStop(0,"rgba(255,255,255,0.78)"),e.addColorStop(.58,"rgba(255,255,255,0.48)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32);const i=new Ai(a);return i.magFilter=oe,i.minFilter=oe,i.generateMipmaps=!1,i}class Eb{stone;darkStone;roof;wood;goldTrim;gold;shadows;constructor(t){this.stone=new Vn(t,Ir(),Mb,1400),this.darkStone=new Vn(t,Ir(),wb,720),this.roof=new Vn(t,new on(1,1,1),Sb,160),this.wood=new Vn(t,Ir(),Ab,320),this.goldTrim=new Vn(t,Ir(),id,160),this.gold=new Vn(t,new lc(1,6,4),id,320);const e=new Qt(1,1);e.rotateX(-Math.PI*.5);const i=new Ii({map:Tb(),color:329226,transparent:!0,opacity:.62,depthWrite:!1,depthTest:!0,toneMapped:!1});this.shadows=new Vn(t,e,i,192),this.shadows.mesh.renderOrder=0}begin(){this.stone.begin(),this.darkStone.begin(),this.roof.begin(),this.wood.begin(),this.goldTrim.begin(),this.gold.begin(),this.shadows.begin()}addWall(t){const e=t.hx*2,i=t.hz*2,n=t.horizontal?e:i,s=2.25,r=1.35,o=t.horizontal?n:r,l=t.horizontal?r:n;this.shadows.push(t.x,.035,t.z,o+2.1,1,l+2.1),this.darkStone.push(t.x,0,t.z,o+(t.horizontal?.18:.42),.42,l+(t.horizontal?.42:.18)),this.stone.push(t.x,.32,t.z,o,s-.32,l),this.darkStone.push(t.x,s-.08,t.z,t.horizontal?n+.2:1.72,.22,t.horizontal?1.72:n+.2);const h=Math.max(2,Math.floor(n/1.85)),c=n/h;for(let d=0;d<h;d++){if((d&1)!==0)continue;const f=-n*.5+c*(d+.5);for(const m of[-1,1]){const v=t.x+(t.horizontal?f:m*.54),g=t.z+(t.horizontal?m*.54:f);this.stone.push(v,s+.12,g,t.horizontal?c*.82:.44,.62,t.horizontal?.44:c*.82)}}const u=Math.max(2,Math.ceil(n/5.5));for(let d=0;d<=u;d++){const f=-n*.5+n*d/u,m=t.x+(t.horizontal?f:0),v=t.z+(t.horizontal?0:f);this.darkStone.push(m,0,v,t.horizontal?.42:1.72,1.5,t.horizontal?1.72:.42),this.stone.push(m,1.48,v,t.horizontal?.56:1.62,.28,t.horizontal?1.62:.56)}}addGate(t,e,i){const n=t.horizontal,s=m=>({x:t.x+(n?m:0),z:t.z+(n?0:m)}),r=(m,v,g,p,w,T,M=0)=>{const A=s(v);m.push(A.x,g,A.z,n?p:T,w,n?T:p,M)},o=(m,v,g,p)=>{const w=s(m),T=.18,M=p*.56;n?(this.roof.push(w.x,v+.18,w.z+p*.24,g,.13,M,0,0,T),this.roof.push(w.x,v+.18,w.z-p*.24,g,.13,M,0,0,-T),this.wood.push(w.x,v+.02,w.z+p*.55,g+.28,.14,.12),this.wood.push(w.x,v+.02,w.z-p*.55,g+.28,.14,.12),this.goldTrim.push(w.x,v+.39,w.z,g*.78,.09,.11)):(this.roof.push(w.x+p*.24,v+.18,w.z,M,.13,g,0,-T),this.roof.push(w.x-p*.24,v+.18,w.z,M,.13,g,0,T),this.wood.push(w.x+p*.55,v+.02,w.z,.12,.14,g+.28),this.wood.push(w.x-p*.55,v+.02,w.z,.12,.14,g+.28),this.goldTrim.push(w.x,v+.39,w.z,.11,.09,g*.78))};if(!i){for(const m of[-1,1]){r(this.darkStone,m*3.85,0,.84,.34,1.38),r(this.stone,m*3.85,.28,.66,2.25,1.16),r(this.darkStone,m*3.85,2.48,.92,.18,1.42);const v=s(m*3.85);this.gold.push(v.x,2.86,v.z,.12,.22,.12)}return}this.shadows.push(t.x,.038,t.z,n?12.2:6.2,1,n?6.2:12.2);const l=4.2,h=2.65,c=3.15,u=3.55,d=5;for(const m of[-1,1]){r(this.darkStone,m*l,0,h+.35,.45,c+.4),r(this.stone,m*l,.36,h,u-.36,c),r(this.darkStone,m*l,u-.12,h+.45,.22,c+.45);const v=s(m*l);o(m*l,u+.1,2.78,2.7),this.gold.push(v.x,u+.58,v.z,.12,.18,.12);for(const g of[-.62,.62]){const p=m*l+g*(h*.5);r(this.wood,p,u-.85,.13,.78,c+.18)}}r(this.stone,0,2.36,d+.72,1.02,c+.12),r(this.darkStone,0,3.34,d+1.15,.2,c+.42);const f=c*.5+.1;if(n?(this.wood.push(t.x,2.72,t.z+f,d+.32,.46,.16),this.goldTrim.push(t.x,2.82,t.z+f+.09,1.58,.25,.08)):(this.wood.push(t.x+f,2.72,t.z,.16,.46,d+.32),this.goldTrim.push(t.x+f+.09,2.82,t.z,.08,.25,1.58)),o(0,3.46,5.58,3),e)for(let m=0;m<12;m++){const v=m<6?-1:1,g=m%6/5,p=v*(d*(.26+g*.21)),w=s(p),T=(m*17%7-3)*.16,M=w.x+(n?0:T),A=w.z+(n?T:0);this.stone.push(M,0,A,.45+m%3*.14,.24+m%2*.15,.4+(m+1)%3*.12,m*.37)}else{const v=c*.5-.12;n?this.wood.push(t.x,0,t.z+v,d,2.62,.34):this.wood.push(t.x+v,0,t.z,.34,2.62,d);for(let g=-2;g<=2;g++){const p=s(d/5*g);n?this.darkStone.push(p.x,.12,p.z+v+.03,.09,2.34,.34+.08):this.darkStone.push(p.x+v+.03,.12,p.z,.34+.08,2.34,.09)}n?(this.goldTrim.push(t.x,.72,t.z+v+.08,d+.1,.12,.34+.14),this.goldTrim.push(t.x,1.76,t.z+v+.08,d+.1,.12,.34+.14)):(this.goldTrim.push(t.x+v+.08,.72,t.z,.34+.14,.12,d+.1),this.goldTrim.push(t.x+v+.08,1.76,t.z,.34+.14,.12,d+.1));for(const g of[-1,1]){const p=s(g*.58),w=n?{x:0,z:.23}:{x:.23,z:0};this.gold.push(p.x+w.x,1.27,p.z+w.z,.14,.14,.14)}}}end(){this.stone.end(),this.darkStone.end(),this.roof.end(),this.wood.end(),this.goldTrim.end(),this.gold.end(),this.shadows.end()}get count(){return this.stone.count+this.darkStone.count+this.roof.count+this.wood.count+this.goldTrim.count+this.gold.count+this.shadows.count}}const pc=2.4,Pf=-ha,Cb=48/64,Rb=new L(18e-5,26e-5,8e-4),Pb=.019,Lf=1.15;function Ff(){const a=new Qt(Cb,1,1,1);return a.translate(0,.5,0),a.rotateX(Pf),a}const Df="varying float vFogDepth;",If=`
  varying float vFogDepth;
  uniform vec3 uFogColor;
  uniform float uFogDensity;
`,Lb=`
  attribute vec2 aUvOffset;
  attribute float aFlash;
  attribute vec3 aTint;
  attribute vec2 aSquash; // #45 19.4 피격 스쿼시(x=폭·y=높이 곱, 기본 1,1) — 빌보드 변환 전 로컬 적용
  uniform vec2 uCellUv;
  varying vec2 vUv;
  varying vec2 vCellLo;
  varying float vFlash;
  varying vec3 vTint;
  ${$a}
  ${Df}
  void main() {
    vUv = aUvOffset + uv * uCellUv;
    vCellLo = aUvOffset;
    vFlash = aFlash;
    vTint = aTint;
    vWorldXZ = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
    vec3 sp = vec3(position.x * aSquash.x, position.y * aSquash.y, position.z);
    vec4 mv = modelViewMatrix * instanceMatrix * vec4(sp, 1.0);
    vFogDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,Uf=`
  uniform vec2 uTexel;   // (1/texW, 1/texH)
  uniform vec2 uCellUv;  // 셀 UV 크기
  float nbTrans(vec2 uv, vec2 lo, vec2 hi) {
    if (uv.x < lo.x || uv.y < lo.y || uv.x > hi.x || uv.y > hi.y) return 1.0;
    return texture2D(uMap, uv).a < 0.5 ? 1.0 : 0.0;
  }
  float edgeFactor(vec2 uv, vec2 cellLo) {
    vec2 hi = cellLo + uCellUv;
    float e = nbTrans(uv + vec2(uTexel.x, 0.0), cellLo, hi);
    e = max(e, nbTrans(uv - vec2(uTexel.x, 0.0), cellLo, hi));
    e = max(e, nbTrans(uv + vec2(0.0, uTexel.y), cellLo, hi));
    e = max(e, nbTrans(uv - vec2(0.0, uTexel.y), cellLo, hi));
    return e;
  }
`,Fb=`
  uniform vec2 uCellUv;
  uniform vec2 uUvOffset;
  uniform float uFootDepth;
  varying vec2 vUv;
  ${$a}
  ${Df}
  void main() {
    vUv = uUvOffset + uv * uCellUv;
    vWorldXZ = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vFogDepth = -mv.z;
    vec4 clip = projectionMatrix * mv;
    // #52 발 기준 깊이: 켜지면 전체 스프라이트 깊이를 발(오브젝트 원점) 깊이로 통일.
    // 기운 빌보드의 머리가 뒤로 밀려 3D 성벽 박스 깊이에 파묻혀 가려지던 문제 해소.
    // 화면 x/y는 그대로 두고 z(깊이)만 발 기준 → 발이 벽 앞이면 전체가 앞, 뒤면 정상 가림.
    if (uFootDepth > 0.5) {
      vec4 footClip = projectionMatrix * modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
      clip.z = footClip.z / footClip.w * clip.w;
    }
    gl_Position = clip;
  }
`,Db=`
  uniform sampler2D uMap;
  varying vec2 vUv;
  varying vec2 vCellLo;
  varying float vFlash;
  varying vec3 vTint;
  ${Uf}
  ${qa}
  ${If}
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    if (tex.a < 0.5) discard;
    vec3 col = pow(tex.rgb, vec3(2.2)) * vTint * ${Lf.toFixed(3)};
    // 디매팅 프린지 → 어두운 아웃라인으로 눌러 밝은 테두리 제거
    col *= mix(1.0, 0.32, edgeFactor(vUv, vCellLo));
    col += sampleLights() * 0.75; // 폭발/낙뢰가 적을 실제로 비춤
    col = mix(col, vec3(2.0), vFlash); // 피격 화이트 플래시(HDR로 블룸)
    float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
    col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
    gl_FragColor = vec4(col, 1.0);
  }
`,Ib=`
  uniform sampler2D uMap;
  uniform vec2 uUvOffset;
  uniform float uFlash;
  uniform vec3 uTint;
  uniform float uPlayer; // 1이면 플레이어(금색 림) / 0이면 다크 아웃라인
  uniform float uAlly; // 1이면 원군(청록 림 — 적과 확실히 구분)
  uniform float uRim; // 림 강도(모바일 저해상도 블룸 대응으로 낮춤)
  varying vec2 vUv;
  ${Uf}
  ${qa}
  ${If}
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    if (tex.a < 0.5) discard;
    float lift = ${Lf.toFixed(3)} * mix(1.0, 1.18, max(uPlayer, uAlly));
    vec3 col = pow(tex.rgb, vec3(2.2)) * uTint * lift;
    float edge = edgeFactor(vUv, uUvOffset);
    // 플레이어=금색 림 / 원군=청록 림(아군 표식) / 그 외(보스)=다크 아웃라인
    vec3 darkEdge = col * 0.32;
    vec3 goldRim = mix(darkEdge, vec3(1.9, 1.35, 0.55) * uRim, 0.8);
    vec3 azureRim = mix(darkEdge, vec3(0.45, 1.4, 2.3) * uRim, 0.85);
    vec3 rimC = mix(mix(darkEdge, azureRim, uAlly), goldRim, uPlayer); // 플레이어 우선
    col = mix(col, rimC, edge);
    col += sampleLights() * 0.6;
    col = mix(col, vec3(2.0), uFlash);
    float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
    col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
    gl_FragColor = vec4(col, 1.0);
  }
`;function kf(){return{uFogColor:{value:Rb.clone()},uFogDensity:{value:Pb}}}class Ur{mesh;matArr;uvArr;flashArr;tintArr;uvAttr;flashAttr;tintAttr;squashArr;squashAttr;w=0;constructor(t,e,i){const n=Ff();this.uvArr=new Float32Array(e*2),this.flashArr=new Float32Array(e),this.tintArr=new Float32Array(e*3),this.uvAttr=new Wt(this.uvArr,2),this.flashAttr=new Wt(this.flashArr,1),this.tintAttr=new Wt(this.tintArr,3),this.uvAttr.setUsage(Tt),this.flashAttr.setUsage(Tt),this.tintAttr.setUsage(Tt),this.squashArr=new Float32Array(e*2),this.squashAttr=new Wt(this.squashArr,2),this.squashAttr.setUsage(Tt),n.setAttribute("aUvOffset",this.uvAttr),n.setAttribute("aFlash",this.flashAttr),n.setAttribute("aTint",this.tintAttr),n.setAttribute("aSquash",this.squashAttr);const s=new Bt({uniforms:{uMap:{value:t.texture},uCellUv:{value:new vt(t.cellUvW,t.cellUvH)},uTexel:{value:new vt(1/t.texW,1/t.texH)},...i,...kf()},vertexShader:Lb,fragmentShader:Db,transparent:!1,depthWrite:!0,depthTest:!0});this.mesh=new ye(n,s,e),this.mesh.instanceMatrix.setUsage(Tt),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=2,this.matArr=this.mesh.instanceMatrix.array}begin(){this.w=0}push(t,e,i,n,s,r,o,l,h){const c=this.w,u=c*16;this.matArr[u]=i,this.matArr[u+5]=i,this.matArr[u+10]=i,this.matArr[u+12]=t,this.matArr[u+13]=0,this.matArr[u+14]=e,this.matArr[u+15]=1;const d=c*2;this.uvArr[d]=n,this.uvArr[d+1]=s,this.flashArr[c]=r;const f=c*3;this.tintArr[f]=o,this.tintArr[f+1]=l,this.tintArr[f+2]=h,this.squashArr[c*2]=1,this.squashArr[c*2+1]=1,this.w++}setSquash(t,e){const i=this.w-1;i<0||(this.squashArr[i*2]=t,this.squashArr[i*2+1]=e)}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.uvAttr.needsUpdate=!0,this.flashAttr.needsUpdate=!0,this.tintAttr.needsUpdate=!0,this.squashAttr.needsUpdate=!0}}class Nf{mesh;mat;worldH;constructor(t,e,i=pc){this.worldH=i,this.mat=new Bt({uniforms:{uMap:{value:t.texture},uCellUv:{value:new vt(t.cellUvW,t.cellUvH)},uTexel:{value:new vt(1/t.texW,1/t.texH)},uUvOffset:{value:new vt(0,0)},uFootDepth:{value:0},uFlash:{value:0},uTint:{value:new zt(1,1,1)},uPlayer:{value:0},uAlly:{value:0},uRim:{value:1},...e,...kf()},vertexShader:Fb,fragmentShader:Ib,transparent:!1,depthWrite:!0,depthTest:!0}),this.mesh=new Fe(Ff(),this.mat),this.mesh.frustumCulled=!1,this.mesh.scale.setScalar(i),this.mesh.renderOrder=2}setPlayer(t){this.mat.uniforms.uPlayer.value=t?1:0}setFootDepth(t){this.mat.uniforms.uFootDepth.value=t?1:0}setAlly(t){this.mat.uniforms.uAlly.value=t?1:0}setRimScale(t){this.mat.uniforms.uRim.value=t}setSquash(t,e){this.mesh.scale.set(this.worldH*t,this.worldH*e,this.worldH*t)}setUv(t,e){this.mat.uniforms.uUvOffset.value.set(t,e)}setFlash(t){this.mat.uniforms.uFlash.value=t}setTint(t,e,i){this.mat.uniforms.uTint.value.setRGB(t,e,i)}setPosition(t,e,i){this.mesh.position.set(t,e,i)}setScale(t){this.mesh.scale.setScalar(t)}}class mc{mesh;matArr;w=0;constructor(t){const e=new So(1,20);e.rotateX(-Math.PI/2);const i=Ub(),n=new Ii({map:i,color:0,transparent:!0,opacity:.5,depthWrite:!1,depthTest:!0,side:di,toneMapped:!1});this.mesh=new ye(e,n,t),this.mesh.instanceMatrix.setUsage(Tt),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=0,this.matArr=this.mesh.instanceMatrix.array}begin(){this.w=0}push(t,e,i){const n=this.w*16;this.matArr[n]=i,this.matArr[n+5]=1,this.matArr[n+10]=i,this.matArr[n+12]=t,this.matArr[n+13]=.02,this.matArr[n+14]=e,this.matArr[n+15]=1,this.w++}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0}}function Ub(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.6,"rgba(255,255,255,0.7)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,64,64);const n=new Ai(t);return n.needsUpdate=!0,n}function js(a,t,e){return a===0&&t===0?e:Math.abs(a)>Math.abs(t)?a>0?2:1:t>0?0:3}const Ns={palisade:3,warDrum:6,powderCart:8,dumplingCart:9,shrine:10,gong:12},kb=4,Nb=4,zb=new L(18e-5,26e-5,8e-4),Ob=.019;let ml=null;function Bb(){if(ml)return ml;const a=new Xa().load("/oni-survivor/assets/world/world-kit-atlas-retro.png");return a.colorSpace=Se,a.magFilter=oe,a.minFilter=Wa,a.generateMipmaps=!0,a.wrapS=Gi,a.wrapT=Gi,ml=a,a}class zf{mesh;matrices;uvOffsets;tints;uvAttr;tintAttr;cols;rows;w=0;constructor(t,e,i=!0,n=Bb(),s=kb,r=Nb){this.cols=s,this.rows=r;const o=new Qt(1,1,1,1);o.translate(0,.5,0),o.rotateX(-ha),this.uvOffsets=new Float32Array(e*2),this.tints=new Float32Array(e*3),this.uvAttr=new Wt(this.uvOffsets,2),this.tintAttr=new Wt(this.tints,3),i&&(this.uvAttr.setUsage(Tt),this.tintAttr.setUsage(Tt)),o.setAttribute("aUvOffset",this.uvAttr),o.setAttribute("aTint",this.tintAttr);const l=new Bt({uniforms:{uMap:{value:n},uCellUv:{value:new vt(1/s,1/r)},uFogColor:{value:zb.clone()},uFogDensity:{value:Ob}},vertexShader:`
        attribute vec2 aUvOffset;
        attribute vec3 aTint;
        uniform vec2 uCellUv;
        varying vec2 vUv;
        varying vec3 vTint;
        varying float vFogDepth;
        void main() {
          vUv = aUvOffset + uv * uCellUv;
          vTint = aTint;
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying vec2 vUv;
        varying vec3 vTint;
        varying float vFogDepth;
        void main() {
          vec4 tex = texture2D(uMap, vUv);
          if (tex.a < 0.48) discard;
          // Texture.colorSpace가 sRGB 디코딩을 담당하므로 생성 에셋의 어두운 팔레트에
          // 감마를 중복 적용하지 않는다. 약한 리프트만 주어 캐릭터 도트와 명도를 맞춘다.
          vec3 col = tex.rgb * vTint * 1.08;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, 1.0);
        }
      `,transparent:!1,depthWrite:!0,depthTest:!0});this.mesh=new ye(o,l,e),i&&this.mesh.instanceMatrix.setUsage(Tt),this.mesh.count=0,this.mesh.renderOrder=1,this.mesh.frustumCulled=!1,this.matrices=this.mesh.instanceMatrix.array,t.add(this.mesh)}begin(){this.w=0}push(t,e,i,n,s,r=1){const o=this.w++,l=o*16;this.matrices[l]=n,this.matrices[l+5]=s,this.matrices[l+10]=s,this.matrices[l+12]=e,this.matrices[l+13]=0,this.matrices[l+14]=i,this.matrices[l+15]=1;const h=o*2,c=t%this.cols,u=Math.floor(t/this.cols);this.uvOffsets[h]=c/this.cols,this.uvOffsets[h+1]=1-(u+1)/this.rows;const d=o*3;this.tints[d]=r,this.tints[d+1]=r,this.tints[d+2]=r}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.uvAttr.needsUpdate=!0,this.tintAttr.needsUpdate=!0}get count(){return this.w}}class Hb{mesh;matrices;w=0;constructor(t,e){const i=new Qt(1,1);i.rotateX(-Math.PI/2);const n=Gb(),s=new Ii({map:n,transparent:!0,opacity:.54,depthWrite:!1});this.mesh=new ye(i,s,e),this.mesh.count=0,this.mesh.renderOrder=0,this.mesh.frustumCulled=!1,this.matrices=this.mesh.instanceMatrix.array,t.add(this.mesh)}begin(){this.w=0}push(t,e,i,n){const s=this.w++*16;this.matrices[s]=i,this.matrices[s+5]=1,this.matrices[s+10]=n,this.matrices[s+12]=t,this.matrices[s+13]=.025,this.matrices[s+14]=e,this.matrices[s+15]=1}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0}get count(){return this.w}}function Gb(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.clearRect(0,0,64,64),e.fillStyle="rgba(72,55,39,0.74)",e.fillRect(2,2,60,60);for(let n=4;n<60;n+=6)for(let s=3+n/6%2*4;s<61;s+=9){const r=66+(s*13+n*7)%22;e.fillStyle=`rgba(${r},${r-10},${r-21},0.48)`,e.fillRect(s,n,6,3)}const i=new Ai(t);return i.colorSpace=Se,i.magFilter=oe,i.minFilter=Wa,i.wrapS=bn,i.wrapT=bn,i.generateMipmaps=!0,i}class Vb{mesh;constructor(t){const e=new Qt(1,1);e.translate(0,.5,0),e.rotateX(-ha);const i=new Xa().load("/oni-survivor/assets/world/hulao-fortress.png");i.colorSpace=Se,i.magFilter=oe,i.minFilter=Wa,i.generateMipmaps=!0,i.repeat.set(1,.62),i.offset.set(0,.38);const n=new Ii({map:i,alphaTest:.08,transparent:!0,opacity:.72,depthWrite:!1,depthTest:!0,toneMapped:!1,side:di});this.mesh=new Fe(e,n),this.mesh.visible=!1,this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1,t.add(this.mesh)}place(t,e){this.mesh.visible=!0,this.mesh.position.set(t,4.1,e-5.6),this.mesh.scale.set(14,6.4,6.4)}}class Wb{map;sprites;roads;fortress;landmark;propShadows;revision=-1;constructor(t,e){this.map=e,this.sprites=new zf(t,320,!1),this.roads=new Hb(t,160),this.fortress=new Eb(t),this.landmark=new Vb(t),this.propShadows=new mc(64),t.add(this.propShadows.mesh)}update(){if(this.revision!==this.map.revision){this.revision=this.map.revision,this.sprites.begin(),this.fortress.begin(),this.roads.begin(),this.propShadows.begin(),this.landmark.mesh.visible=!1;for(const t of this.map.roads)this.roads.push(t.x,t.z,t.width,t.depth);for(const t of this.map.walls)this.fortress.addWall(t);for(const t of this.map.gates){const e=this.map.isGateBreached(t.key);t.key==="origin-north"&&this.landmark.place(t.x,t.z);const i=t.key==="origin-north"||t.key.startsWith("castle-");this.fortress.addGate(t,e,i)}for(const t of this.map.props)this.sprites.push(t.kind,t.x,t.z,t.width,t.height,.96),this.propShadows.push(t.x,t.z,Math.max(.8,t.width*.38));this.roads.end(),this.fortress.end(),this.sprites.end(),this.propShadows.end()}}get visibleProps(){return this.sprites.count+this.fortress.count+this.roads.count}get landmarkVisible(){return this.landmark.mesh.visible}}const Ge=72;class Xb{x=new Float32Array(Ge);y=new Float32Array(Ge);z=new Float32Array(Ge);vx=new Float32Array(Ge);vy=new Float32Array(Ge);vz=new Float32Array(Ge);life=new Float32Array(Ge);ttl=new Float32Array(Ge);sx=new Float32Array(Ge);sy=new Float32Array(Ge);sz=new Float32Array(Ge);cr=new Float32Array(Ge);cg=new Float32Array(Ge);cb=new Float32Array(Ge);cursor=0;mesh;matrices;colors;fades;colorAttr;fadeAttr;constructor(t){const e=new on(1,1,1);this.colors=new Float32Array(Ge*3),this.fades=new Float32Array(Ge),this.colorAttr=new Wt(this.colors,3),this.fadeAttr=new Wt(this.fades,1),this.colorAttr.setUsage(Tt),this.fadeAttr.setUsage(Tt),e.setAttribute("aColor",this.colorAttr),e.setAttribute("aFade",this.fadeAttr);const i=new Bt({vertexShader:`
        attribute vec3 aColor;
        attribute float aFade;
        varying vec3 vColor;
        varying float vFade;
        void main() {
          vColor = aColor;
          vFade = aFade;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vFade;
        void main() {
          float bayer = mod(gl_FragCoord.x + gl_FragCoord.y * 2.0, 4.0) / 4.0;
          if (vFade < bayer * 0.72) discard;
          vec3 stepped = floor(vColor * 5.0 + 0.5) / 5.0;
          gl_FragColor = vec4(stepped * (1.0 + vFade * 0.55), 1.0);
        }
      `,transparent:!1,depthWrite:!0,depthTest:!0});this.mesh=new ye(e,i,Ge),this.mesh.instanceMatrix.setUsage(Tt),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,this.matrices=this.mesh.instanceMatrix.array,t.add(this.mesh)}reset(){this.life.fill(0),this.mesh.count=0}burst(t,e){const i="ontouchstart"in window?28:48;for(let n=0;n<i;n++){const s=this.cursor++%Ge,r=Math.random()*Math.PI*2,o=2.4+Math.random()*5.2;if(this.x[s]=t+(Math.random()-.5)*3.4,this.y[s]=.8+Math.random()*3.8,this.z[s]=e+(Math.random()-.5)*1.2,this.vx[s]=Math.cos(r)*o,this.vz[s]=Math.sin(r)*o,this.vy[s]=3.8+Math.random()*6.5,this.ttl[s]=.75+Math.random()*.75,this.life[s]=this.ttl[s],this.sx[s]=.16+Math.random()*.42,this.sy[s]=.12+Math.random()*.5,this.sz[s]=.14+Math.random()*.4,n%4===0)this.cr[s]=1.08,this.cg[s]=.3,this.cb[s]=.13;else{const l=.34+Math.random()*.28;this.cr[s]=l*1.1,this.cg[s]=l*.78,this.cb[s]=l*.58}}}update(t){let e=0;for(let i=0;i<Ge;i++){if(this.life[i]<=0||(this.life[i]-=t,this.life[i]<=0))continue;this.vy[i]-=12*t,this.x[i]+=this.vx[i]*t,this.y[i]+=this.vy[i]*t,this.z[i]+=this.vz[i]*t,this.vx[i]*=Math.max(0,1-t*1.5),this.vz[i]*=Math.max(0,1-t*1.5),this.y[i]<.12&&(this.y[i]=.12,this.vy[i]*=-.28);const n=e*16;this.matrices[n]=this.sx[i],this.matrices[n+5]=this.sy[i],this.matrices[n+10]=this.sz[i],this.matrices[n+12]=this.x[i],this.matrices[n+13]=this.y[i],this.matrices[n+14]=this.z[i],this.matrices[n+15]=1;const s=e*3;this.colors[s]=this.cr[i],this.colors[s+1]=this.cg[i],this.colors[s+2]=this.cb[i],this.fades[e]=this.life[i]/this.ttl[i],e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.colorAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}get activeCount(){return this.mesh.count}}function Ui(a,t=!1){const e=a[0].index!==null,i=new Set(Object.keys(a[0].attributes)),n=new Set(Object.keys(a[0].morphAttributes)),s={},r={},o=a[0].morphTargetsRelative,l=new Ne;let h=0;for(let c=0;c<a.length;++c){const u=a[c];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(e){let c=0;const u=[];for(let d=0;d<a.length;++d){const f=a[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+c);c+=a[d].attributes.position.count}l.setIndex(u)}for(const c in s){const u=nd(s[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(const c in r){const u=r[c][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<r[c].length;++v)f.push(r[c][v][d]);const m=nd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(m)}}}return l}function nd(a){let t,e,i,n=-1,s=0;for(let h=0;h<a.length;++h){const c=a[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=c.gpuType),n!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*e}const r=new t(s),o=new Ae(r,e,i);let l=0;for(let h=0;h<a.length;++h){const c=a[h];if(c.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=c.count;d<f;d++)for(let m=0;m<e;m++){const v=c.getComponent(d,m);o.setComponent(d+u,m,v)}}else r.set(c.array,l);l+=c.count*e}return n!==void 0&&(o.gpuType=n),o}const qb=0,$b=1,jb=["attack-spear","attack-guandao","attack-zhangba","attack-halberd"];function Zb(a){const t=new Xa().load(`/oni-survivor/assets/projectiles/${a}.png`);return t.colorSpace=Se,t.magFilter=oe,t.minFilter=oe,t.generateMipmaps=!1,t}class Kb{pools=[[],[],[],[]];cursors=new Uint8Array(4);constructor(t){const e=new Qt(1,1);e.rotateX(-Math.PI*.5);const i=e.clone();i.translate(.5,0,0);for(let n=0;n<4;n++){const s=Zb(jb[n]),r=n===qb?i:e;for(let o=0;o<8;o++){const l=new Ii({map:s,transparent:!0,opacity:0,blending:sn,depthWrite:!1,depthTest:!0,toneMapped:!1}),h=new Fe(r,l);h.visible=!1,h.frustumCulled=!1,h.renderOrder=5,t.add(h),this.pools[n].push({mesh:h,material:l,age:0,duration:.2,scaleX:1,scaleZ:1,active:!1})}}}spawn(t,e,i,n,s,r,o,l){const h=this.pools[t],c=this.cursors[t];this.cursors[t]=(c+1)%h.length;const u=h[c];u.age=0,u.duration=l,u.scaleX=r,u.scaleZ=o,u.active=!0,u.mesh.visible=!0,u.mesh.position.set(e,.72,i),u.mesh.rotation.y=Math.atan2(-s,n),u.mesh.scale.set(r*.88,1,o*.88),u.material.opacity=1}update(t){for(const e of this.pools)for(const i of e){if(!i.active)continue;i.age+=t;const n=i.age/i.duration;if(n>=1){i.active=!1,i.mesh.visible=!1;continue}const r=.88+(1-(1-n)*(1-n))*.16;i.mesh.scale.set(i.scaleX*r,1,i.scaleZ*r),i.material.opacity=Math.min(1,(1-n)*1.7)}}}const ke=12,Uh=0,sd=1,gl=2;class Yb{x=new Float32Array(ke);z=new Float32Array(ke);ang=new Float32Array(ke);sx=new Float32Array(ke);sz=new Float32Array(ke);shape=new Float32Array(ke);param=new Float32Array(ke);life=new Float32Array(ke);maxLife=new Float32Array(ke);cr=new Float32Array(ke);cg=new Float32Array(ke);cb=new Float32Array(ke);alive=new Uint8Array(ke);cursor=0;mesh;matArr;aShape;aProg;aParam;aCol;aAlpha;shapeAttr;progAttr;paramAttr;colAttr;alphaAttr;constructor(t){const e=new Qt(1,1);e.rotateX(-Math.PI/2),this.aShape=new Float32Array(ke),this.aProg=new Float32Array(ke),this.aParam=new Float32Array(ke),this.aCol=new Float32Array(ke*3),this.aAlpha=new Float32Array(ke),this.shapeAttr=new Wt(this.aShape,1),this.progAttr=new Wt(this.aProg,1),this.paramAttr=new Wt(this.aParam,1),this.colAttr=new Wt(this.aCol,3),this.alphaAttr=new Wt(this.aAlpha,1);for(const n of[this.shapeAttr,this.progAttr,this.paramAttr,this.colAttr,this.alphaAttr])n.setUsage(Tt);e.setAttribute("aShape",this.shapeAttr),e.setAttribute("aProg",this.progAttr),e.setAttribute("aParam",this.paramAttr),e.setAttribute("aCol",this.colAttr),e.setAttribute("aAlpha",this.alphaAttr);const i=new Bt({vertexShader:`
        attribute float aShape; attribute float aProg; attribute float aParam;
        attribute vec3 aCol; attribute float aAlpha;
        varying vec2 vUv; varying float vShape; varying float vProg; varying float vParam;
        varying vec3 vCol; varying float vAlpha;
        void main() {
          vUv = uv; vShape = aShape; vProg = aProg; vParam = aParam; vCol = aCol; vAlpha = aAlpha;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv; varying float vShape; varying float vProg; varying float vParam;
        varying vec3 vCol; varying float vAlpha;
        void main() {
          vec2 p = (vUv - 0.5) * 2.0; // [-1,1]
          float len = length(p);
          float m; float border;
          if (vShape < 0.5) {                 // 원
            m = 1.0 - step(1.0, len);
            border = smoothstep(0.82, 1.0, len);
          } else if (vShape < 1.5) {          // 콘: 중심 apex, +x 방향, 반각 vParam
            float ang = atan(p.y, p.x);
            m = (1.0 - step(1.0, len)) * (1.0 - step(vParam, abs(ang)));
            float radB = smoothstep(0.82, 1.0, len);
            float angB = smoothstep(vParam * 0.8, vParam, abs(ang));
            border = min(1.0, radB + angB);
          } else {                            // 사각: 쿼드 전체
            m = 1.0;
            vec2 d = abs(p);
            border = max(smoothstep(0.8, 1.0, d.x), smoothstep(0.8, 1.0, d.y));
          }
          if (m < 0.5) discard;
          // 채움 스윕: 원은 반경, 콘/사각은 진행 축(uv.x) 따라 진홍이 차오름 = 남은 시간.
          float fill = (vShape < 0.5) ? step(len, vProg) : step(vUv.x, vProg);
          float a = (0.14 + 0.14 * fill + 0.32 * border) * vAlpha;
          if (a < 0.01) discard;
          vec3 col = vCol * (0.75 + 0.5 * fill) + border * vCol * 0.7;
          gl_FragColor = vec4(col, a);
        }
      `,transparent:!0,blending:sn,depthWrite:!1,depthTest:!0});this.mesh=new ye(e,i,ke),this.mesh.instanceMatrix.setUsage(Tt),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=2,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}reset(){this.alive.fill(0),this.mesh.count=0}spawn(t,e,i,n,s,r,o,l,h,c,u){const d=this.cursor;this.cursor=(this.cursor+1)%ke,this.x[d]=e,this.z[d]=i,this.ang[d]=n,this.sx[d]=s,this.sz[d]=r,this.shape[d]=t,this.param[d]=o,this.life[d]=l,this.maxLife[d]=l,this.cr[d]=h,this.cg[d]=c,this.cb[d]=u,this.alive[d]=1}update(t){let e=0;for(let i=0;i<ke;i++){if(this.alive[i]===0)continue;if(this.life[i]-=t,this.life[i]<=0){this.alive[i]=0;continue}const n=Math.cos(this.ang[i]),s=Math.sin(this.ang[i]),r=this.sx[i],o=this.sz[i],l=e*16;this.matArr[l]=n*r,this.matArr[l+1]=0,this.matArr[l+2]=-s*r,this.matArr[l+3]=0,this.matArr[l+4]=0,this.matArr[l+5]=1,this.matArr[l+6]=0,this.matArr[l+7]=0,this.matArr[l+8]=s*o,this.matArr[l+9]=0,this.matArr[l+10]=n*o,this.matArr[l+11]=0,this.matArr[l+12]=this.x[i],this.matArr[l+13]=.05,this.matArr[l+14]=this.z[i],this.matArr[l+15]=1,this.aShape[e]=this.shape[i],this.aProg[e]=1-this.life[i]/this.maxLife[i],this.aParam[e]=this.param[i],this.aCol[e*3]=this.cr[i],this.aCol[e*3+1]=this.cg[i],this.aCol[e*3+2]=this.cb[i],this.aAlpha[e]=Math.min(1,(this.maxLife[i]-this.life[i])/.12),e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.shapeAttr.needsUpdate=!0,this.progAttr.needsUpdate=!0,this.paramAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.alphaAttr.needsUpdate=!0}}const si=6,Jb=12;class Qb{x=new Float32Array(si);y=new Float32Array(si);z=new Float32Array(si);vx=new Float32Array(si);vy=new Float32Array(si);vz=new Float32Array(si);rot=new Float32Array(si);spin=new Float32Array(si);life=new Float32Array(si);maxLife=new Float32Array(si);alive=new Uint8Array(si);cursor=0;mesh;matArr;aFade;fadeAttr;constructor(t){const e=new Qt(1,1);this.aFade=new Float32Array(si),this.fadeAttr=new Wt(this.aFade,1),this.fadeAttr.setUsage(Tt),e.setAttribute("aFade",this.fadeAttr);const i=new Bt({vertexShader:`
        attribute float aFade; varying vec2 vUv; varying float vFade;
        void main() { vUv = uv; vFade = aFade; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }
      `,fragmentShader:`
        varying vec2 vUv; varying float vFade;
        void main() {
          vec2 p = (vUv - 0.5) * 2.0;
          float r = length(p);
          float a = atan(p.y, p.x);
          // 5각별 SDF: 각도별 반경 경계
          float star = 0.5 + 0.42 * cos(floor(0.5 + a * 5.0 / 3.14159265 * 1.5) * 3.14159265 * 2.0 / 5.0 - a);
          // 채운 별 + 얇은 밝은 테두리 + 아주 옅은 중앙 광택 → 블롭이 아니라 '별 실루엣'으로 읽히게.
          float fill = smoothstep(star + 0.05, star - 0.03, r) * 0.82;
          float rim = smoothstep(0.09, 0.0, abs(r - star)) * 0.55;
          float core = smoothstep(0.30, 0.0, r) * 0.13;
          float b = (fill + rim + core) * vFade;
          if (b < 0.01) discard;
          // 옅은 상아빛(금색 강조 X, 오너 피드백). 블룸에 안 타는 낮은 명도 — 존재만 하고 눈에 안 튐.
          vec3 col = vec3(0.85, 0.82, 0.66);
          gl_FragColor = vec4(col * b, b);
        }
      `,transparent:!0,blending:We,depthWrite:!1,depthTest:!1});this.mesh=new ye(e,i,si),this.mesh.instanceMatrix.setUsage(Tt),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=20,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}reset(){this.alive.fill(0),this.mesh.count=0}activeCount(){let t=0;for(let e=0;e<si;e++)t+=this.alive[e];return t}spawn(t,e,i,n){if(this.activeCount()>=2)return;const s=this.cursor;this.cursor=(this.cursor+1)%si,this.x[s]=t,this.y[s]=1,this.z[s]=e,this.vx[s]=i*22+(Math.random()-.5)*2,this.vy[s]=6+Math.random()*2,this.vz[s]=n*22+(Math.random()-.5)*2,this.rot[s]=Math.random()*6.28,this.spin[s]=7+Math.random()*5,this.life[s]=1.1,this.maxLife[s]=1.1,this.alive[s]=1}update(t){let e=0;for(let i=0;i<si;i++){if(this.alive[i]===0)continue;if(this.life[i]-=t,this.life[i]<=0){this.alive[i]=0;continue}this.vy[i]-=Jb*t,this.x[i]+=this.vx[i]*t,this.y[i]+=this.vy[i]*t,this.z[i]+=this.vz[i]*t,this.rot[i]+=this.spin[i]*t;const n=this.life[i]/this.maxLife[i],s=this.maxLife[i]-this.life[i],r=.88+.12*Math.min(1,s/.05),o=.8+.2*Math.min(1,n/.28),l=1.25*r*o,h=Math.cos(this.rot[i])*l,c=Math.sin(this.rot[i])*l,u=e*16;this.matArr[u]=h,this.matArr[u+1]=c,this.matArr[u+2]=0,this.matArr[u+3]=0,this.matArr[u+4]=-c,this.matArr[u+5]=h,this.matArr[u+6]=0,this.matArr[u+7]=0,this.matArr[u+8]=0,this.matArr[u+9]=0,this.matArr[u+10]=l,this.matArr[u+11]=0,this.matArr[u+12]=this.x[i],this.matArr[u+13]=this.y[i],this.matArr[u+14]=this.z[i],this.matArr[u+15]=1;const d=Math.min(1,n/.22),f=1+.3*Math.max(0,1-s/.08);this.aFade[e]=Math.min(1.1,d*f),e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}}const Of=new L(18e-5,26e-5,8e-4),Bf=.019;function t1(){const a=new ra(.055,.055,.78,6);a.rotateZ(-Math.PI/2),a.translate(-.06,0,0);const t=new ds(.15,.32,8);return t.rotateZ(-Math.PI/2),t.translate(.49,0,0),Ui([a,t],!1)}class e1{mesh;matArr;colArr;fadeArr;colAttr;fadeAttr;cap;w=0;constructor(t,e,i){this.cap=e;const n=t1();this.colArr=new Float32Array(e*3),this.fadeArr=new Float32Array(e),this.colAttr=new Wt(this.colArr,3),this.fadeAttr=new Wt(this.fadeArr,1),this.colAttr.setUsage(Tt),this.fadeAttr.setUsage(Tt),n.setAttribute("aColor",this.colAttr),n.setAttribute("aFade",this.fadeAttr);const s=new Bt({uniforms:{uFogColor:{value:Of.clone()},uFogDensity:{value:Bf},...i},vertexShader:`
        attribute vec3 aColor;
        attribute float aFade;
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        varying float vFogDepth;
        ${$a}
        void main() {
          vColor = aColor;
          vFade = aFade;
          vec3 n = normalize(mat3(instanceMatrix) * normal);
          vShade = 0.55 + 0.45 * clamp(dot(n, normalize(vec3(0.4, 0.8, 0.35))), 0.0, 1.0);
          vWorldXZ = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        varying float vFogDepth;
        ${qa}
        void main() {
          vec3 col = vColor * vShade;
          col += sampleLights() * 0.9;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, vFade);
        }
      `,transparent:!0,depthWrite:!0,depthTest:!0});this.mesh=new ye(n,s,e),this.mesh.instanceMatrix.setUsage(Tt),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=4,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}begin(){this.w=0}push(t,e,i,n,s,r,o,l,h,c){if(this.w>=this.cap)return;const u=this.w++,d=u*16,f=Math.cos(n),m=Math.sin(n);this.matArr[d]=f*s,this.matArr[d+1]=0,this.matArr[d+2]=-m*s,this.matArr[d+3]=0,this.matArr[d+4]=0,this.matArr[d+5]=r,this.matArr[d+6]=0,this.matArr[d+7]=0,this.matArr[d+8]=m*r,this.matArr[d+9]=0,this.matArr[d+10]=f*r,this.matArr[d+11]=0,this.matArr[d+12]=t,this.matArr[d+13]=e,this.matArr[d+14]=i,this.matArr[d+15]=1;const v=u*3;this.colArr[v]=o,this.colArr[v+1]=l,this.colArr[v+2]=h,this.fadeArr[u]=c}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}}class Ki{mesh;matArr;colArr;fadeArr;colAttr;fadeAttr;cap;w=0;constructor(t,e,i,n){this.cap=i,this.colArr=new Float32Array(i*3),this.fadeArr=new Float32Array(i),this.colAttr=new Wt(this.colArr,3),this.fadeAttr=new Wt(this.fadeArr,1),this.colAttr.setUsage(Tt),this.fadeAttr.setUsage(Tt),e.setAttribute("aColor",this.colAttr),e.setAttribute("aFade",this.fadeAttr);const s=new Bt({uniforms:{uFogColor:{value:Of.clone()},uFogDensity:{value:Bf},...n},vertexShader:`
        attribute vec3 aColor;
        attribute float aFade;
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        varying float vFogDepth;
        ${$a}
        void main() {
          vColor = aColor;
          vFade = aFade;
          vec3 n = normalize(mat3(instanceMatrix) * normal);
          vShade = 0.65 + 0.35 * clamp(dot(n, normalize(vec3(0.4, 0.8, 0.35))), 0.0, 1.0);
          vWorldXZ = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying vec3 vColor;
        varying float vFade;
        varying float vShade;
        varying float vFogDepth;
        ${qa}
        void main() {
          vec3 col = vColor * vShade * 1.5;
          col += sampleLights() * 1.2;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, vFade);
        }
      `,transparent:!0,depthWrite:!1,depthTest:!0,blending:We});this.mesh=new ye(e,s,i),this.mesh.instanceMatrix.setUsage(Tt),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=5,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}begin(){this.w=0}push(t,e,i,n,s,r,o,l,h,c,u){if(this.w>=this.cap)return;const d=this.w++,f=d*16,m=Math.cos(n),v=Math.sin(n);this.matArr[f]=m*s,this.matArr[f+1]=0,this.matArr[f+2]=-v*s,this.matArr[f+3]=0,this.matArr[f+4]=0,this.matArr[f+5]=r,this.matArr[f+6]=0,this.matArr[f+7]=0,this.matArr[f+8]=v*o,this.matArr[f+9]=0,this.matArr[f+10]=m*o,this.matArr[f+11]=0,this.matArr[f+12]=t,this.matArr[f+13]=e,this.matArr[f+14]=i,this.matArr[f+15]=1;const g=d*3;this.colArr[g]=l,this.colArr[g+1]=h,this.colArr[g+2]=c,this.fadeArr[d]=u}end(){this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}}function i1(){const a=[];for(let t=0;t<3;t++){const e=new Ti(.6+t*.18,.78+t*.18,24,1,-.9+t*.15,1.8-t*.1);e.rotateX(-Math.PI/2),e.translate(0,.15*t,0),a.push(e)}return Ui(a,!1)}function n1(){const a=[];for(let t=-1;t<=1;t++){const e=new ds(.08,1.6,4);e.rotateZ(-Math.PI/2),e.translate(.8,0,t*.35),a.push(e)}return Ui(a,!1)}function s1(){const a=new Ti(.5,.65,32);a.rotateX(-Math.PI/2);const t=new Ti(.85,.95,32);return t.rotateX(-Math.PI/2),Ui([a,t],!1)}function a1(){const a=[];for(let t=0;t<3;t++){const e=new Ti(.7+t*.22,.96+t*.22,28,1,-1.1+t*.18,2.2-t*.12);e.rotateX(-Math.PI/2),e.translate(0,.18*t,0),a.push(e)}for(let t=0;t<4;t++){const e=new ds(.12,1.1,5),i=-.8+t*.5;e.rotateX(-Math.PI/2),e.rotateY(i),e.translate(Math.cos(i)*1.3,.25,Math.sin(i)*1.3),a.push(e)}return Ui(a,!1)}function r1(){const a=[],t=new Ti(.6,.85,32);t.rotateX(-Math.PI/2),a.push(t);for(let e=0;e<12;e++){const i=new ds(.08,.9,4),n=e/12*Math.PI*2;i.rotateX(-Math.PI/2),i.rotateY(n),i.translate(Math.cos(n)*1.1,.1,Math.sin(n)*1.1),a.push(i)}return Ui(a,!1)}function o1(){const a=[],t=[[0,0,0],[.5,0,.3],[.9,0,-.2],[1.4,0,.4],[1.9,0,-.1]];for(let i=0;i<t.length-1;i++){const n=t[i],s=t[i+1],r=s[0]-n[0],o=s[2]-n[2],l=Math.sqrt(r*r+o*o),h=new ra(.06-i*.008,.08-i*.008,l,6);h.rotateZ(-Math.PI/2);const c=Math.atan2(-o,r);h.rotateY(c),h.translate((n[0]+s[0])/2,0,(n[2]+s[2])/2),a.push(h)}const e=new ds(.09,.6,6);return e.rotateZ(-Math.PI/2),e.translate(2.1,0,-.1),a.push(e),Ui(a,!1)}function l1(){const a=[];for(let e=0;e<16;e++){const i=e/16,n=i*Math.PI*3,s=.5+i*.8,r=new Qt(.24,.45);r.rotateX(-Math.PI/2),r.rotateY(n),r.translate(Math.cos(n)*s,Math.sin(i*Math.PI)*.4,Math.sin(n)*s),a.push(r)}return Ui(a,!1)}function h1(){const a=[],t=new Ti(.15,.65,12,1,.2,2.2);t.rotateX(-Math.PI/2),t.rotateZ(.3),t.translate(.35,.15,.2),a.push(t);const e=new Ti(.15,.65,12,1,-2.4,2.2);e.rotateX(-Math.PI/2),e.rotateZ(-.3),e.translate(-.35,.15,.2),a.push(e);const i=new ra(.03,.08,1.2,6);return i.rotateZ(-Math.PI/2),a.push(i),Ui(a,!1)}function c1(){const a=[],t=new Ti(.7,1.1,24,1,-1.2,2.4);t.rotateX(-Math.PI/2),a.push(t);for(let e=-1;e<=1;e++){const i=new Ti(.25,.42,12,1,-1,2);i.rotateX(-Math.PI/2),i.translate(e*.65,.1,.4),a.push(i)}return Ui(a,!1)}function u1(){const a=[];for(let e=0;e<6;e++){const i=new po(.35),n=e/6*Math.PI*2;i.scale(.6,1.4,.6),i.rotateZ(-Math.PI/4),i.rotateY(n),i.translate(Math.cos(n)*.6,.2,Math.sin(n)*.6),a.push(i)}const t=new po(.4);return t.translate(0,.35,0),a.push(t),Ui(a,!1)}class d1{scene;thrusts=[];arcs=[];rings=[];bolts=[];chains=[];tCur=0;aCur=0;rCur=0;bCur=0;cCur=0;flashes=[];fCur=0;flashThisFrame=0;attackSprites;telegraph;koStar;decals=[];dCur=0;fireWalls=[];fwCur=0;meteors=[];mCur=0;ringQT=new Float32Array(8);ringQX=new Float32Array(8);ringQZ=new Float32Array(8);ringQR=new Float32Array(8);ringQCr=new Float32Array(8);ringQCg=new Float32Array(8);ringQCb=new Float32Array(8);ringQActive=new Uint8Array(8);rqCur=0;crestTexCache=new Map;baguaTexCache=null;screenFlash=null;spawnLight=null;spawnDecal=null;spawnMusouLight=null;glowWater=null;glowFlame=null;glowSun=null;glowThunder=null;glowRibbon=null;glowButterfly=null;glowClaw=null;glowMoon=null;glowBlood=null;glowCompass=null;initGlowBatches(t){this.glowWater=new Ki(this.scene,i1(),64,t),this.glowFlame=new Ki(this.scene,a1(),64,t),this.glowSun=new Ki(this.scene,r1(),64,t),this.glowThunder=new Ki(this.scene,o1(),64,t),this.glowRibbon=new Ki(this.scene,l1(),64,t),this.glowButterfly=new Ki(this.scene,h1(),64,t),this.glowClaw=new Ki(this.scene,n1(),64,t),this.glowMoon=new Ki(this.scene,c1(),64,t),this.glowBlood=new Ki(this.scene,u1(),64,t),this.glowCompass=new Ki(this.scene,s1(),64,t)}spawnTechniqueMesh(t,e,i,n,s,r,o,l,h,c,u,d=1){switch(t){case"water":this.glowWater?.push(e,i,n,s,r,o,l,h,c,u,d);break;case"flame":this.glowFlame?.push(e,i,n,s,r,o,l,h,c,u,d);break;case"sun":this.glowSun?.push(e,i,n,s,r,o,l,h,c,u,d);break;case"thunder":this.glowThunder?.push(e,i,n,s,r,o,l,h,c,u,d);break;case"ribbon":this.glowRibbon?.push(e,i,n,s,r,o,l,h,c,u,d);break;case"butterfly":this.glowButterfly?.push(e,i,n,s,r,o,l,h,c,u,d);break;case"claw":this.glowClaw?.push(e,i,n,s,r,o,l,h,c,u,d);break;case"moon":this.glowMoon?.push(e,i,n,s,r,o,l,h,c,u,d);break;case"blood":this.glowBlood?.push(e,i,n,s,r,o,l,h,c,u,d);break;case"compass":this.glowCompass?.push(e,i,n,s,r,o,l,h,c,u,d);break}}constructor(t){this.scene=t,this.attackSprites=new Kb(t),this.telegraph=new Yb(t),this.koStar=new Qb(t);const e=new Qt(1,1,1,1);e.rotateX(-Math.PI/2),e.translate(.5,0,0);for(let f=0;f<24;f++)this.thrusts.push(this.makeSlot(e,m1,1));const i=f1(56);for(let f=0;f<20;f++)this.arcs.push(this.makeSlot(i,g1,1,p1));const n=new Ti(.8,1,48);n.rotateX(-Math.PI/2);for(let f=0;f<24;f++)this.rings.push(this.makeSlot(n,v1,.05));const s=new Qt(1,1,1,1);s.translate(0,.5,0);const r=new Qt(1,1,1,1);r.rotateY(Math.PI/2),r.translate(0,.5,0);const o=Ui([s,r]);for(let f=0;f<16;f++)this.bolts.push(this.makeSlot(o,_1,.16));const l=new Qt(1,1,1,1);l.rotateX(-Math.PI/2),l.translate(.5,0,0);for(let f=0;f<40;f++)this.chains.push(this.makeSlot(l,b1,.12));const h=new Ti(0,1,28);h.rotateX(-Math.PI/2);for(let f=0;f<24;f++)this.flashes.push(this.makeSlot(h,x1,.2));const c=new Qt(1,1);c.rotateX(-Math.PI/2);for(let f=0;f<6;f++){const m=new Bt({uniforms:{uMap:{value:null},uAlpha:{value:0},uColor:{value:new zt(1,1,1)}},vertexShader:vl,fragmentShader:y1,transparent:!0,blending:We,depthWrite:!1,depthTest:!0}),v=new Fe(c,m);v.visible=!1,v.frustumCulled=!1,v.renderOrder=1,this.scene.add(v),this.decals.push({mesh:v,mat:m,age:0,dur:1,active:!1,rot:0})}const u=new Qt(1,1,1,1);u.rotateX(-Math.PI/2),u.translate(.5,0,0);for(let f=0;f<16;f++)this.fireWalls.push(this.makeSlot(u,M1,1));const d=new Qt(1,1,1,1);d.translate(0,.5,0);for(let f=0;f<20;f++){const m=new Bt({uniforms:{uColor:{value:new zt(1,1,1)},uT:{value:0}},vertexShader:vl,fragmentShader:w1,transparent:!0,blending:We,depthWrite:!1,depthTest:!0}),v=new Fe(d,m);v.visible=!1,v.frustumCulled=!1,v.renderOrder=4,this.scene.add(v),this.meteors.push({mesh:v,mat:m,age:0,dur:1,active:!1,tx:0,tz:0,h0:14,r:1,g:1,b:1})}}makeSlot(t,e,i,n=vl){const s=new Bt({uniforms:{uT:{value:0},uAlpha:{value:0},uColor:{value:new zt(1,1,1)},uHalf:{value:Math.PI},uSeed:{value:0}},vertexShader:n,fragmentShader:e,transparent:!0,blending:We,depthWrite:!1,depthTest:!0}),r=new Fe(t,s);return r.visible=!1,r.frustumCulled=!1,r.renderOrder=4,this.scene.add(r),{mesh:r,mat:s,age:0,dur:i,active:!1,data:0}}spawnThrust(t,e,i,n,s,r,o=.7,l=.95,h=1.7,c=.15,u=!0){const d=this.thrusts[this.tCur];this.tCur=(this.tCur+1)%this.thrusts.length,d.age=0,d.dur=c,d.active=!0,d.mesh.visible=!0,d.mesh.position.set(t,1,e),d.mesh.rotation.y=Math.atan2(-n,i),d.mesh.scale.set(s,1,r),d.mat.uniforms.uColor.value.setRGB(o,l,h),d.mat.uniforms.uAlpha.value=1}spawnDoubleThrust(t,e,i,n,s,r,o=1.2,l=1,h=.7,c=.16){this.spawnThrust(t,e,i,n,s,r,o,l,h,c,!1),this.spawnThrust(t,e,-i,-n,s,r,o,l,h,c,!1)}spawnSlashArc(t,e,i,n,s,r,o=1.6,l=.9,h=.5,c=.22,u=$b){const d=this.arcs[this.aCur];this.aCur=(this.aCur+1)%this.arcs.length,d.age=0,d.dur=c,d.active=!0,d.mesh.visible=!0,d.mesh.position.set(t,.6,e),d.mesh.rotation.y=Math.atan2(-n,i),d.mesh.scale.setScalar(s),d.mat.uniforms.uColor.value.setRGB(o,l,h),d.mat.uniforms.uHalf.value=r,d.mat.uniforms.uT.value=0;const f=Math.atan2(-n,i);o>2&&l<1?this.spawnTechniqueMesh("flame",t,.4,e,f,s*.9,.8,s*.9,o,l,h,.95):h>1.8&&o<1?this.spawnTechniqueMesh("water",t,.4,e,f,s*.9,.8,s*.9,o,l,h,.95):o>2&&l>1.8?this.spawnTechniqueMesh("sun",t,.4,e,f,s,1,s,o,l,h,.95):o>1&&h>1.5?this.spawnTechniqueMesh("butterfly",t,.4,e,f,s*.85,.8,s*.85,o,l,h,.95):o>1.5&&l<.8&&h>1?this.spawnTechniqueMesh("ribbon",t,.4,e,f,s*.9,.8,s*.9,o,l,h,.95):this.spawnTechniqueMesh("moon",t,.4,e,f,s*.85,.8,s*.85,o,l,h,.95)}spawnRing(t,e,i,n=1.4,s=1.2,r=.7,o=.5){const l=this.rings[this.rCur];this.rCur=(this.rCur+1)%this.rings.length,l.age=0,l.dur=o,l.active=!0,l.data=i,l.mesh.visible=!0,l.mesh.position.set(t,.5,e),l.mesh.scale.setScalar(i*.15),l.mat.uniforms.uColor.value.setRGB(n,s,r),l.mat.uniforms.uT.value=0,i>=3&&(this.spawnLight&&this.spawnLight(t,e,n,s,r,i*1.8,o*.7),this.spawnDecal&&this.spawnDecal(t,e,i*1.15,n,s,r))}spawnFlash(t,e,i,n,s,r){if(this.flashThisFrame>=3)return;this.flashThisFrame++;const o=this.flashes[this.fCur];this.fCur=(this.fCur+1)%this.flashes.length,o.age=0,o.dur=.2,o.active=!0,o.data=r,o.mesh.visible=!0,o.mesh.position.set(t,.45,e),o.mesh.scale.setScalar(r*.6),o.mat.uniforms.uColor.value.setRGB(i,n,s),o.mat.uniforms.uT.value=0,this.spawnLight&&this.spawnLight(t,e,i,n,s,r*1.6,.12+r*.02)}spawnTelegraph(t,e,i,n,s,r,o,l,h=.95,c=.18,u=.18){this.telegraph.spawn(t,e,i,n,s,r,o,l,h,c,u)}spawnKOStar(t,e,i,n){this.koStar.spawn(t,e,i,n)}spawnLightning(t,e,i=1.4,n=1.8,s=2.6,r=7){const o=this.bolts[this.bCur];this.bCur=(this.bCur+1)%this.bolts.length,o.age=0,o.dur=.16,o.active=!0,o.mesh.visible=!0,o.mesh.position.set(t,0,e),o.mesh.scale.set(2.2,r,1),o.mat.uniforms.uColor.value.setRGB(i,n,s),o.mat.uniforms.uSeed.value=Math.random(),o.mat.uniforms.uT.value=0,this.spawnRing(t,e,2.2,i*.8,n*.8,s,.4),this.screenFlash&&this.screenFlash(.16),this.spawnLight&&this.spawnLight(t,e,i,n,s,9,.3),this.spawnDecal&&this.spawnDecal(t,e,3.2,i,n,s)}spawnChainArc(t,e,i,n,s=1.2,r=1.8,o=2.6){const l=this.chains[this.cCur];this.cCur=(this.cCur+1)%this.chains.length;const h=i-t,c=n-e,u=Math.hypot(h,c)||.001;l.age=0,l.dur=.13,l.active=!0,l.mesh.visible=!0,l.mesh.position.set(t,.8,e),l.mesh.rotation.y=Math.atan2(-c,h),l.mesh.scale.set(u,1,.9),l.mat.uniforms.uColor.value.setRGB(s,r,o),l.mat.uniforms.uSeed.value=Math.random(),l.mat.uniforms.uT.value=0}spawnCrest(t,e,i,n,s,r,o=5){this.placeDecal(this.crestTexture(i),t,e,6.4,o,.4,n,s,r)}spawnBaguaSigil(t,e,i=5){this.placeDecal(this.baguaTexture(),t,e,8.4,i,.9,.6,1.5,2.4)}placeDecal(t,e,i,n,s,r,o,l,h){const c=this.decals[this.dCur];this.dCur=(this.dCur+1)%this.decals.length,c.mat.uniforms.uMap.value=t,c.mat.uniforms.uColor.value.setRGB(o,l,h),c.mesh.position.set(e,.07,i),c.mesh.scale.set(n,1,n),c.mesh.rotation.y=0,c.age=0,c.dur=s,c.rot=r,c.active=!0,c.mesh.visible=!0}spawnTripleShock(t,e,i,n=1.6,s=1,r=.4){this.spawnRing(t,e,i,n,s,r,.55);for(let o=1;o<=2;o++){const l=this.rqCur;this.rqCur=(this.rqCur+1)%8,this.ringQT[l]=o*.11,this.ringQX[l]=t,this.ringQZ[l]=e,this.ringQR[l]=i*(1+o*.35),this.ringQCr[l]=n,this.ringQCg[l]=s,this.ringQCb[l]=r,this.ringQActive[l]=1}}spawnFireWall(t,e,i,n,s,r=1.8,o=2.2){const l=this.fireWalls[this.fwCur];this.fwCur=(this.fwCur+1)%this.fireWalls.length,l.age=0,l.dur=o,l.active=!0,l.mesh.visible=!0,l.mesh.position.set(t,.15,e),l.mesh.rotation.y=Math.atan2(-n,i),l.mesh.scale.set(s,1,r),l.mat.uniforms.uColor.value.setRGB(2.4,.7,.2),l.mat.uniforms.uAlpha.value=1}spawnMeteorArrow(t,e,i=1.7,n=1.4,s=.6,r=.5){const o=this.meteors[this.mCur];this.mCur=(this.mCur+1)%this.meteors.length,o.age=0,o.dur=r,o.active=!0,o.tx=t,o.tz=e,o.h0=16,o.r=i,o.g=n,o.b=s,o.mat.uniforms.uColor.value.setRGB(i,n,s),o.mesh.visible=!0}spawnFlameTrail(t,e,i=.4,n=1.9,s=1.1){this.spawnFlash(t,e,i,n,s,1.5)}update(t){this.flashThisFrame=0,this.glowWater?.begin(),this.glowFlame?.begin(),this.glowSun?.begin(),this.glowThunder?.begin(),this.glowRibbon?.begin(),this.glowButterfly?.begin(),this.glowClaw?.begin(),this.glowMoon?.begin(),this.glowBlood?.begin(),this.glowCompass?.begin(),this.attackSprites.update(t),this.telegraph.update(t),this.koStar.update(t),this.tickThrust(t),this.tickArc(t),this.tickRing(t),this.tickFlash(t),this.tickDecals(t),this.tickFireWalls(t),this.tickMeteors(t),this.tickRingQueue(t),this.tickSimple(this.bolts,t),this.tickSimple(this.chains,t),this.glowWater?.end(),this.glowFlame?.end(),this.glowSun?.end(),this.glowThunder?.end(),this.glowRibbon?.end(),this.glowButterfly?.end(),this.glowClaw?.end(),this.glowMoon?.end(),this.glowBlood?.end(),this.glowCompass?.end()}tickDecals(t){for(const e of this.decals){if(!e.active)continue;if(e.age+=t,e.age>=e.dur){e.active=!1,e.mesh.visible=!1;continue}e.mesh.rotation.y+=e.rot*t;const i=e.age/e.dur,n=Math.min(1,i*6)*Math.min(1,(1-i)*3)*(.85+.15*Math.sin(e.age*6));e.mat.uniforms.uAlpha.value=n}}tickFireWalls(t){for(const e of this.fireWalls){if(!e.active)continue;e.age+=t;const i=e.age/e.dur;if(i>=1){this.retire(e);continue}e.mat.uniforms.uAlpha.value=Math.min(1,(1-i)*2.5),e.mat.uniforms.uT.value=e.age}}tickMeteors(t){for(const e of this.meteors){if(!e.active)continue;e.age+=t;const i=e.age/e.dur;if(i>=1){e.active=!1,e.mesh.visible=!1,this.spawnRing(e.tx,e.tz,2.6,e.r,e.g,e.b,.4);continue}const n=e.h0*(1-i)*(1-i);e.mesh.position.set(e.tx,n,e.tz),e.mesh.scale.set(.5,2.4,1),e.mat.uniforms.uT.value=i}}tickRingQueue(t){for(let e=0;e<8;e++)this.ringQActive[e]!==0&&(this.ringQT[e]-=t,this.ringQT[e]<=0&&(this.ringQActive[e]=0,this.spawnRing(this.ringQX[e],this.ringQZ[e],this.ringQR[e],this.ringQCr[e],this.ringQCg[e],this.ringQCb[e],.55)))}tickThrust(t){for(const e of this.thrusts){if(!e.active)continue;e.age+=t;const i=e.age/e.dur;if(i>=1){this.retire(e);continue}e.mat.uniforms.uAlpha.value=1-i}}tickArc(t){for(const e of this.arcs){if(!e.active)continue;e.age+=t;const i=e.age/e.dur;if(i>=1){this.retire(e);continue}e.mat.uniforms.uT.value=i}}tickRing(t){for(const e of this.rings){if(!e.active)continue;e.age+=t;const i=e.age/e.dur;if(i>=1){this.retire(e);continue}const n=e.data*(.15+.85*(1-(1-i)*(1-i)));e.mesh.scale.setScalar(n),e.mat.uniforms.uT.value=i}}tickFlash(t){for(const e of this.flashes){if(!e.active)continue;e.age+=t;const i=e.age/e.dur;if(i>=1){this.retire(e);continue}e.mesh.scale.setScalar(e.data*(.6+.6*i)),e.mat.uniforms.uT.value=i}}tickSimple(t,e){for(const i of t){if(!i.active)continue;i.age+=e;const n=i.age/i.dur;if(n>=1){this.retire(i);continue}i.mat.uniforms.uT.value=n}}retire(t){t.active=!1,t.mesh.visible=!1}crestTexture(t){const e=this.crestTexCache.get(t);if(e)return e;const i=256,n=document.createElement("canvas");n.width=i,n.height=i;const s=n.getContext("2d");s.clearRect(0,0,i,i),s.strokeStyle="rgba(255,255,255,0.85)",s.lineWidth=5,s.beginPath(),s.arc(i/2,i/2,i*.44,0,Math.PI*2),s.stroke(),s.lineWidth=2,s.beginPath(),s.arc(i/2,i/2,i*.38,0,Math.PI*2),s.stroke(),s.fillStyle="#ffffff",s.font='bold 150px "Nanum Myeongjo","SimSun",serif',s.textAlign="center",s.textBaseline="middle",s.fillText(t,i/2,i/2+6);const r=new Ai(n);return r.colorSpace=Se,r.needsUpdate=!0,this.crestTexCache.set(t,r),r}baguaTexture(){if(this.baguaTexCache)return this.baguaTexCache;const t=256,e=document.createElement("canvas");e.width=t,e.height=t;const i=e.getContext("2d"),n=t/2;i.clearRect(0,0,t,t),i.strokeStyle="rgba(255,255,255,0.9)",i.lineWidth=3;for(const r of[t*.46,t*.32,t*.2])i.beginPath(),i.arc(n,n,r,0,Math.PI*2),i.stroke();for(let r=0;r<8;r++){const o=r/8*Math.PI*2;i.save(),i.translate(n+Math.cos(o)*t*.39,n+Math.sin(o)*t*.39),i.rotate(o+Math.PI/2),i.fillStyle="#ffffff";for(let l=0;l<3;l++){const h=(l-1)*9;r>>l&1?i.fillRect(-16,h-2,32,4):(i.fillRect(-16,h-2,12,4),i.fillRect(4,h-2,12,4))}i.restore()}const s=new Ai(e);return s.colorSpace=Se,s.needsUpdate=!0,this.baguaTexCache=s,s}}function f1(a){const i=(a+1)*2,n=new Float32Array(i*3),s=new Float32Array(i),r=new Float32Array(i);for(let h=0;h<=a;h++){const c=-Math.PI+h/a*Math.PI*2,u=Math.cos(c),d=Math.sin(c),f=h*2;n[f*3]=.16*u,n[f*3+1]=0,n[f*3+2]=.16*d,s[f]=c/Math.PI,r[f]=0;const m=h*2+1;n[m*3]=1*u,n[m*3+1]=0,n[m*3+2]=1*d,s[m]=c/Math.PI,r[m]=1}const o=[];for(let h=0;h<a;h++){const c=h*2,u=h*2+1,d=(h+1)*2,f=(h+1)*2+1;o.push(c,u,d,u,f,d)}const l=new Ne;return l.setAttribute("position",new Ae(n,3)),l.setAttribute("aAng",new Ae(s,1)),l.setAttribute("aRad",new Ae(r,1)),l.setIndex(o),l}const vl=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,p1=`
  attribute float aAng;
  attribute float aRad;
  varying float vAng;
  varying float vRad;
  void main() {
    vAng = aAng;
    vRad = aRad;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,m1=`
  uniform float uAlpha;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
    float along = smoothstep(0.0, 0.12, vUv.x) * (1.0 - smoothstep(0.55, 1.0, vUv.x));
    float b = pow(max(across, 0.0), 1.6) * along;
    gl_FragColor = vec4(uColor * b * 1.7, b * uAlpha);
  }
`,g1=`
  uniform float uT;
  uniform float uHalf;
  uniform vec3 uColor;
  varying float vAng;
  varying float vRad;
  void main() {
    float ang = vAng * 3.14159265;
    float amask = mix(1.0 - smoothstep(uHalf * 0.8, uHalf, abs(ang)), 1.0, step(3.13, uHalf));
    if (amask <= 0.001) discard;
    float redge = smoothstep(0.12, 0.4, vRad) * (1.0 - smoothstep(0.82, 1.0, vRad));
    // 선두 크레스트가 아크를 가로질러 스윕
    float crestA = mix(-uHalf, uHalf, uT);
    float near = 1.0 - clamp(abs(ang - crestA) / (uHalf * 0.5 + 0.15), 0.0, 1.0);
    float crest = pow(near, 2.0);
    float b = amask * (redge * 0.55 + crest * 1.1);
    float fade = 1.0 - uT * uT;
    gl_FragColor = vec4(uColor * b * 1.9, b * fade);
  }
`,v1=`
  uniform float uT;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float fade = 1.0 - uT;
    float b = fade * 1.4;
    gl_FragColor = vec4(uColor * b * 1.3, fade);
  }
`,x1=`
  uniform float uT;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float r = length(vUv - 0.5) * 2.0;
    float core = smoothstep(1.0, 0.0, r);
    float fade = 1.0 - uT;
    float b = core * fade;
    if (b <= 0.001) discard;
    gl_FragColor = vec4(uColor * b * 1.6, b);
  }
`,_1=`
  uniform float uT;
  uniform float uSeed;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float y = vUv.y;
    float cx = 0.5
      + 0.14 * sin(y * 17.0 + uSeed * 6.283)
      + 0.07 * sin(y * 41.0 + uSeed * 11.0)
      + 0.03 * sin(y * 90.0 + uSeed * 3.0);
    float dist = abs(vUv.x - cx);
    float core = smoothstep(0.05, 0.0, dist);
    float glow = smoothstep(0.3, 0.0, dist);
    float taper = smoothstep(0.0, 0.06, y) * smoothstep(1.0, 0.85, y);
    float env = pow(1.0 - uT, 1.4);
    float b = (glow * 0.4 + core) * taper;
    vec3 col = (vec3(0.5, 0.7, 1.0) * glow * 0.5 + uColor * core) * taper * env;
    gl_FragColor = vec4(col * 2.2, b * env);
  }
`,b1=`
  uniform float uT;
  uniform float uSeed;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float x = vUv.x;
    float cy = 0.5
      + 0.16 * sin(x * 22.0 + uSeed * 6.283)
      + 0.08 * sin(x * 47.0 + uSeed * 9.0);
    float dist = abs(vUv.y - cy);
    float core = smoothstep(0.14, 0.0, dist);
    float glow = smoothstep(0.4, 0.0, dist);
    float env = 1.0 - uT;
    float b = (glow * 0.4 + core);
    gl_FragColor = vec4(uColor * b * 2.4 * env, b * env);
  }
`,y1=`
  uniform sampler2D uMap;
  uniform float uAlpha;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    float m = tex.a * max(tex.r, max(tex.g, tex.b));
    if (m <= 0.01) discard;
    gl_FragColor = vec4(uColor * m * 1.6, m * uAlpha);
  }
`,M1=`
  uniform float uAlpha;
  uniform float uT;
  uniform vec3 uColor;
  varying vec2 vUv;
  float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
  void main() {
    float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
    float flick = 0.6 + 0.4 * sin(uT * 14.0 + vUv.x * 30.0) * h(floor(vUv * vec2(24.0, 4.0)));
    float b = pow(max(across, 0.0), 1.4) * flick;
    if (b <= 0.01) discard;
    gl_FragColor = vec4(uColor * b * 0.35, b * uAlpha * 0.8); // #23: additive 누적 백색폭발 방지로 강도 하향
  }
`,w1=`
  uniform vec3 uColor;
  uniform float uT;
  varying vec2 vUv;
  void main() {
    float across = 1.0 - abs(vUv.x - 0.5) * 2.0;
    float tail = smoothstep(0.0, 0.5, vUv.y); // 위(꼬리) → 아래(촉)
    float core = pow(max(across, 0.0), 2.0);
    float b = core * (0.35 + tail);
    if (b <= 0.01) discard;
    gl_FragColor = vec4(uColor * b * 2.0, b);
  }
`,mi=28,ad=1.7,xl=14,S1=.6,kr=2.4,A1=2.6,T1=.14,E1=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  }
`,C1=`
  varying vec2 vUv;
  void main() {
    float across = 1.0 - abs(vUv.x - 0.5) * 2.0;
    float core = pow(max(across, 0.0), 1.5);
    float tip = smoothstep(0.22, 0.0, vUv.y);       // y=0(선두)에서 1 → 촉
    float shaft = smoothstep(1.0, 0.12, vUv.y);      // 꼬리로 갈수록 페이드 → 살대
    vec3 shaftCol = vec3(0.05, 0.045, 0.04);
    vec3 tipCol = vec3(1.0, 0.5, 0.2);
    float body = core * shaft;
    float head = core * tip;
    vec3 col = shaftCol * body + tipCol * head;
    float a = clamp(body * 0.5 + head * 0.95, 0.0, 1.0);
    if (a < 0.01) discard;
    gl_FragColor = vec4(col, a);
  }
`;class R1{effects;mesh;dummy=new Ze;up=new L(0,1,0);backDir=new L(0,1,0);phase=new Uint8Array(mi);wait=new Float32Array(mi);fall=new Float32Array(mi);ttl=new Float32Array(mi);tx=new Float32Array(mi);tz=new Float32Array(mi);wx=new Float32Array(mi);wz=new Float32Array(mi);bdx=new Float32Array(mi);bdy=new Float32Array(mi);bdz=new Float32Array(mi);cur=0;constructor(t,e){this.effects=e;const i=new Qt(1,1);i.translate(0,.5,0);const n=new Bt({vertexShader:E1,fragmentShader:C1,transparent:!0,blending:sn,side:di,depthWrite:!1,depthTest:!0});this.mesh=new ye(i,n,mi),this.mesh.instanceMatrix.setUsage(Tt),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=4,t.add(this.mesh)}volley(t){if(t.length===0)return;const e=Math.random()*Math.PI*2,i=Math.cos(e),n=Math.sin(e);for(const s of t){const r=Math.max(.05,s.t);this.effects.spawnTelegraph(Uh,s.x,s.z,0,ad*2,ad*2,0,r,1,.4,.14),this.alloc(s.x,s.z,r,i,n)}}alloc(t,e,i,n,s){const r=this.cur;this.cur=(this.cur+1)%mi;const o=Math.min(i,S1);this.phase[r]=1,this.wait[r]=Math.max(0,i-o),this.fall[r]=o,this.ttl[r]=o,this.tx[r]=t,this.tz[r]=e,this.wx[r]=n,this.wz[r]=s;const l=n*kr,h=s*kr,c=Math.hypot(l,xl,h)||1;this.bdx[r]=l/c,this.bdy[r]=xl/c,this.bdz[r]=h/c}update(t){let e=0;for(let i=0;i<mi;i++){const n=this.phase[i];if(n===0)continue;if(n===1){if(this.wait[i]-=t,this.wait[i]>0)continue;this.phase[i]=2,this.ttl[i]=this.fall[i]}if(this.ttl[i]-=t,this.ttl[i]<=0){this.impact(i),this.phase[i]=0;continue}const s=this.ttl[i]/this.fall[i],r=1-(1-s)*(1-s),o=this.tx[i]+this.wx[i]*kr*r,l=xl*r,h=this.tz[i]+this.wz[i]*kr*r;this.dummy.position.set(o,l,h),this.backDir.set(this.bdx[i],this.bdy[i],this.bdz[i]),this.dummy.quaternion.setFromUnitVectors(this.up,this.backDir),this.dummy.scale.set(T1,A1,1),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix),e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0}impact(t){const e=this.tx[t],i=this.tz[t];this.effects.spawnRing(e,i,1.6,.75,.5,.28,.32),this.effects.spawnDecal?.(e,i,1.3,.85,.4,.16)}reset(){this.phase.fill(0),this.cur=0,this.mesh.count=0}}const P1=Nn/Ba,L1=.25,F1=.4;class D1{mesh;mat;time=0;vis=0;boundTex=null;constructor(t){const e=new Qt(P1,1);e.translate(0,.5,0),e.rotateX(Pf),this.mat=new Bt({uniforms:{uMap:{value:null},uUvOffset:{value:new vt(0,0)},uCellUv:{value:new vt(1,1)},uTexel:{value:new vt(1,1)},uTime:{value:0},uAlpha:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D uMap;
        uniform vec2 uUvOffset;
        uniform vec2 uCellUv;
        uniform vec2 uTexel;
        uniform float uTime;
        uniform float uAlpha;
        varying vec2 vUv;
        // 셀 내부 정규화 좌표(cuv 0..1)에서 알파 마스크 샘플. 셀 밖은 투명(0) → 콘텐츠 외곽선 정확.
        float aAt(vec2 cuv) {
          if (cuv.x < 0.0 || cuv.y < 0.0 || cuv.x > 1.0 || cuv.y > 1.0) return 0.0;
          return texture2D(uMap, uUvOffset + cuv * uCellUv).a >= 0.5 ? 1.0 : 0.0;
        }
        // 반경 r 텍셀 8방향 팽창(최대 알파).
        float dil(vec2 cuv, float r) {
          vec2 t = (uTexel / uCellUv) * r;
          float d = t.x * 0.7071, e = t.y * 0.7071;
          float m = aAt(cuv + vec2(t.x, 0.0));
          m = max(m, aAt(cuv + vec2(-t.x, 0.0)));
          m = max(m, aAt(cuv + vec2(0.0, t.y)));
          m = max(m, aAt(cuv + vec2(0.0, -t.y)));
          m = max(m, aAt(cuv + vec2(d, e)));
          m = max(m, aAt(cuv + vec2(-d, e)));
          m = max(m, aAt(cuv + vec2(d, -e)));
          m = max(m, aAt(cuv + vec2(-d, -e)));
          return m;
        }
        // 사이버 네온 팔레트: 청록→자홍→보라 순환.
        vec3 neon(float t) {
          t = fract(t) * 3.0;
          vec3 c0 = vec3(0.15, 0.95, 1.05);
          vec3 c1 = vec3(1.05, 0.22, 0.9);
          vec3 c2 = vec3(0.6, 0.32, 1.05);
          if (t < 1.0) return mix(c0, c1, smoothstep(0.0, 1.0, t));
          if (t < 2.0) return mix(c1, c2, smoothstep(0.0, 1.0, t - 1.0));
          return mix(c2, c0, smoothstep(0.0, 1.0, t - 2.0));
        }
        void main() {
          vec2 cuv = vUv;
          float own = aAt(cuv);                 // 몸통(불투명)이면 1
          float outer = 1.0 - own;              // 외곽(투명)만 밴드 후보
          float d1 = dil(cuv, 1.5);             // 얇은 밝은 외곽선
          float d2 = dil(cuv, 2.6);             // 살짝 넓은 은은한 글로우(몸통 쪽 번짐 최소화로 좁게)
          float band = (d1 + d2 * 0.4) * outer;
          if (band < 0.02) discard;             // 몸통(투명)·먼 배경(밴드 없음) → 안 가림
          // 흐르는 색: 스프라이트 프레임 중심 기준 각도 + 시간 → 팔레트가 윤곽을 타고 회전.
          vec2 P = cuv - 0.5;
          float a = atan(P.y, P.x) / 6.2831853 + 0.5;
          vec3 col = neon(a + uTime * 0.22);
          float sd = abs(fract(a - uTime * 0.42 + 0.5) - 0.5); // 이동 스윕 하이라이트
          float sweep = smoothstep(0.14, 0.0, sd);
          float b = min(1.4, band) * (0.6 + sweep * 0.55);
          // 게인 1.2로 코어만 블룸(임계 0.88) 살짝 태워 "버프 중" 확실히, 스윕/글로우 절제로 몸통 번짐·블로우아웃 없음.
          vec3 outc = (col + vec3(0.22) * sweep) * b * 1.2;
          gl_FragColor = vec4(outc, min(1.0, b) * uAlpha);
        }
      `,transparent:!0,blending:We,depthWrite:!1,depthTest:!1}),this.mesh=new Fe(e,this.mat),this.mesh.scale.setScalar(pc),this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.mesh.renderOrder=5,t.add(this.mesh)}reset(){this.time=0,this.vis=0,this.mesh.visible=!1}update(t,e,i,n,s=null,r=0,o=0){t>.1&&(t=.1);const l=s!==null;if(this.vis=n&&l?Math.min(1,this.vis+t/L1):Math.max(0,this.vis-t/F1),this.vis<=.001){this.mesh.visible=!1;return}this.time+=t,s&&(this.boundTex!==s.texture&&(this.mat.uniforms.uMap.value=s.texture,this.boundTex=s.texture),this.mat.uniforms.uCellUv.value.set(s.cellUvW,s.cellUvH),this.mat.uniforms.uTexel.value.set(1/s.texW,1/s.texH),this.mat.uniforms.uUvOffset.value.set(r,o)),this.mesh.position.set(e,0,i),this.mesh.visible=!0,this.mat.uniforms.uTime.value=this.time,this.mat.uniforms.uAlpha.value=this.vis}}class I1{points;pos;col;life;size;vel;invDur;grav;drag;posAttr;colAttr;lifeAttr;sizeAttr;n;cursor=0;constructor(t,e=4e3){this.n=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.life=new Float32Array(e),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.invDur=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e);const i=new Ne;this.posAttr=new Ae(this.pos,3),this.colAttr=new Ae(this.col,3),this.lifeAttr=new Ae(this.life,1),this.sizeAttr=new Ae(this.size,1),this.posAttr.setUsage(Tt),this.lifeAttr.setUsage(Tt),this.sizeAttr.setUsage(Tt),this.colAttr.setUsage(Tt),i.setAttribute("position",this.posAttr),i.setAttribute("aColor",this.colAttr),i.setAttribute("aLife",this.lifeAttr),i.setAttribute("aSize",this.sizeAttr);const n=new Bt({uniforms:{uPix:{value:320}},vertexShader:`
        attribute float aLife;
        attribute float aSize;
        attribute vec3 aColor;
        uniform float uPix;
        varying float vLife;
        varying vec3 vColor;
        void main() {
          vLife = aLife;
          vColor = aColor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (aLife > 0.0) ? uPix * aSize * aLife / max(0.1, -mv.z) : 0.0;
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        varying float vLife;
        varying vec3 vColor;
        void main() {
          if (vLife <= 0.0) discard;
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(vColor * vLife * a, 1.0);
        }
      `,transparent:!0,blending:We,depthWrite:!1,depthTest:!0});this.points=new mf(i,n),this.points.frustumCulled=!1,this.points.renderOrder=3,t.add(this.points)}emit(t,e,i,n,s,r,o,l,h,c,u,d,f){const m=this.cursor;this.cursor=(this.cursor+1)%this.n;const v=m*3;this.pos[v]=t,this.pos[v+1]=e,this.pos[v+2]=i,this.vel[v]=n,this.vel[v+1]=s,this.vel[v+2]=r,this.col[v]=o,this.col[v+1]=l,this.col[v+2]=h,this.size[m]=c,this.life[m]=1,this.invDur[m]=1/u,this.grav[m]=d,this.drag[m]=f}burst(t,e,i,n,s,r,o){for(let l=0;l<r;l++){const h=Math.random()*Math.PI*2,c=o*(.3+Math.random()*.9);this.emit(t,.7+Math.random()*.8,e,Math.cos(h)*c,1.5+Math.random()*3,Math.sin(h)*c,i,n,s,1,.3+Math.random()*.35,6,.92)}}fireEmber(t,e,i){const n=Math.random()*Math.PI*2,s=Math.sqrt(Math.random())*i;this.emit(t+Math.cos(n)*s,.2,e+Math.sin(n)*s,(Math.random()-.5)*.6,1.6+Math.random()*1.8,(Math.random()-.5)*.6,1.2,.5+Math.random()*.25,.12,.4+Math.random()*.3,.5+Math.random()*.4,-1.2,.9)}steam(t,e){const i=Math.random()*Math.PI*2,n=Math.random()*.5;this.emit(t+Math.cos(i)*n,1.6+Math.random()*.4,e+Math.sin(i)*n,(Math.random()-.5)*.3,.9+Math.random()*.7,(Math.random()-.5)*.3,.9,.95,.85,.9+Math.random()*.5,.7+Math.random()*.5,-.6,.94)}spark(t,e){const i=Math.random()*Math.PI*2,n=1.6+Math.random()*2.2;this.emit(t,1+Math.random()*.6,e,Math.cos(i)*n,1.2+Math.random()*2,Math.sin(i)*n,1.6,.85,.25,.42+Math.random()*.3,.22+Math.random()*.16,7,.9)}incense(t,e){const i=Math.random()*Math.PI*2,n=Math.random()*.7;this.emit(t+Math.cos(i)*n,1.2+Math.random()*.5,e+Math.sin(i)*n,(Math.random()-.5)*.25,.55+Math.random()*.5,(Math.random()-.5)*.25,1.1,.92,.55,.8+Math.random()*.6,.9+Math.random()*.6,-.4,.95)}dust(t,e){const i=Math.random()*Math.PI*2;this.emit(t,.3+Math.random()*.5,e,Math.cos(i)*1.4,.6+Math.random()*1,Math.sin(i)*1.4,1.1,1,.85,1.3+Math.random(),.4+Math.random()*.3,3,.9)}projectileTrail(t,e,i,n,s,r,o,l){const h=Math.hypot(i,n)||1,c=i/h,u=n/h,d=l===4?2:1,f=l===2||l===4?.75:l===3?.58:.38;for(let m=0;m<d;m++){const v=(Math.random()-.5)*(l===4?1.2:.35),g=Math.random()*(l===4?1.4:.45);this.emit(t-c*g-u*v,.75+Math.random()*.35,e-u*g+c*v,-c*(.8+Math.random()*1.6)-u*v,.25+Math.random()*.6,-u*(.8+Math.random()*1.6)+c*v,s*.7,r*.7,o*.7,f*(.7+Math.random()*.6),.16+Math.random()*.14,1,.88)}}projectileImpact(t,e,i,n,s,r){const o=r===2||r===4?9:r===3?6:4,l=r===4?5.2:r===2?4:2.8;for(let h=0;h<o;h++){const c=h/o*Math.PI*2+Math.random()*.45,u=l*(.45+Math.random()*.7);this.emit(t,.75+Math.random()*.45,e,Math.cos(c)*u,.9+Math.random()*1.8,Math.sin(c)*u,i,n,s,(r===2||r===4?.72:.48)*(.75+Math.random()*.5),.18+Math.random()*.18,4.2,.9)}}wisteriaPetal(t,e,i){const n=Math.random()*Math.PI*2,s=Math.sqrt(Math.random())*i;this.emit(t+Math.cos(n)*s,8+Math.random()*4,e+Math.sin(n)*s,-.8+(Math.random()-.5)*1.5,-1.5-Math.random()*1.2,-.8+(Math.random()-.5)*1.5,.54+Math.random()*.16,.22+Math.random()*.1,.72+Math.random()*.22,.35+Math.random()*.2,3+Math.random()*2,.8,.96)}waterSplash(t,e,i=12){for(let n=0;n<i;n++){const s=Math.random()*Math.PI*2,r=2+Math.random()*3.5;this.emit(t+(Math.random()-.5)*.8,.3+Math.random()*.6,e+(Math.random()-.5)*.8,Math.cos(s)*r,2+Math.random()*3,Math.sin(s)*r,.2+Math.random()*.2,.7+Math.random()*.3,1.8+Math.random()*.6,.8+Math.random()*.6,.35+Math.random()*.25,7,.91)}}lightningSpark(t,e,i=15){for(let n=0;n<i;n++){const s=Math.random()*Math.PI*2,r=4+Math.random()*6;this.emit(t,.5+Math.random()*.8,e,Math.cos(s)*r,1+Math.random()*4,Math.sin(s)*r,2.5+Math.random()*.5,2+Math.random()*.4,.3+Math.random()*.3,.6+Math.random()*.5,.2+Math.random()*.2,4,.88)}}butterflyPoison(t,e,i=8){for(let n=0;n<i;n++){const s=Math.random()*Math.PI*2,r=1+Math.random()*2;this.emit(t+(Math.random()-.5)*.5,.6+Math.random()*.8,e+(Math.random()-.5)*.5,Math.cos(s)*r,.8+Math.random()*1.5,Math.sin(s)*r,1.4+Math.random()*.4,.3+Math.random()*.2,2.2+Math.random()*.6,.7+Math.random()*.4,.5+Math.random()*.3,-.5,.93)}}update(t){const e=this.pos,i=this.vel,n=this.life,s=this.invDur,r=this.grav,o=this.drag;for(let l=0;l<this.n;l++){const h=n[l];if(h<=0)continue;const c=h-t*s[l];n[l]=c>0?c:0;const u=l*3;e[u]+=i[u]*t,e[u+1]+=i[u+1]*t,e[u+2]+=i[u+2]*t;const d=o[l];i[u]*=d,i[u+1]=i[u+1]*d-r[l]*t,i[u+2]*=d}this.posAttr.needsUpdate=!0,this.lifeAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.sizeAttr.needsUpdate=!0}}const zs=128,Os=72;class U1{slots=[];cap;cursor=0;constructor(t,e=56){this.cap=e;for(let i=0;i<e;i++){const n=document.createElement("canvas");n.width=zs,n.height=Os;const s=n.getContext("2d"),r=new Ai(n),o=new Js({map:r,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),l=new za(o);l.visible=!1,l.renderOrder=10,t.add(l),this.slots.push({sprite:l,mat:o,tex:r,ctx:s,life:0,dur:.75,active:!1,base:1.25,crit:!1,bx:0})}}spawn(t,e,i,n,s=!1){const r=this.slots[this.cursor];this.cursor=(this.cursor+1)%this.cap;const o=r.ctx;o.clearRect(0,0,zs,Os);const l=Math.max(1,Math.round(t)).toString();o.font=s?'bold 46px "Times New Roman", serif':'bold 34px "Times New Roman", serif',o.textAlign="center",o.textBaseline="middle",o.lineWidth=5,o.strokeStyle="rgba(0,0,0,0.85)",o.strokeText(l,zs/2,Os/2),o.fillStyle=s?"#ffe14d":"#ffffff",o.fillText(l,zs/2,Os/2),r.tex.needsUpdate=!0,r.base=s?1.9:1.25,r.crit=s,r.bx=e+(Math.random()*.7-.35),r.sprite.scale.set(r.base*(zs/Os),r.base,1),r.sprite.position.set(r.bx,i,n),r.sprite.visible=!0,r.life=s?.95:.75,r.dur=r.life,r.mat.opacity=1,r.active=!0}update(t){for(let e=0;e<this.cap;e++){const i=this.slots[e];if(!i.active)continue;if(i.life-=t,i.life<=0){i.active=!1,i.sprite.visible=!1;continue}const n=i.dur-i.life,s=1-i.life/i.dur,r=1+.4*Math.exp(-n/.06),o=i.base*r;i.sprite.scale.set(o*(zs/Os),o,1);const l=i.crit?Math.sin(n*60)*.12*Math.exp(-n/.12):0;i.sprite.position.x=i.bx+l,i.sprite.position.y+=t*1.8,i.mat.opacity=1-s*s}}}const Ma=256,wa=64;class k1{slots=[];cap;cursor=0;constructor(t,e=10){this.cap=e;for(let i=0;i<e;i++){const n=document.createElement("canvas");n.width=Ma,n.height=wa;const s=n.getContext("2d"),r=new Ai(n),o=new Js({map:r,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),l=new za(o);l.visible=!1,l.renderOrder=11,l.scale.set(1.5*(Ma/wa),1.5,1),t.add(l),this.slots.push({sprite:l,mat:o,tex:r,ctx:s,text:""})}}begin(){this.cursor=0}place(t,e,i,n){if(this.cursor>=this.cap)return;const s=this.slots[this.cursor++];if(s.text!==t){s.text=t;const r=s.ctx;r.clearRect(0,0,Ma,wa),r.font='bold 30px "Nanum Myeongjo","Times New Roman",serif',r.textAlign="center",r.textBaseline="middle",r.lineWidth=5,r.strokeStyle="rgba(0,0,0,0.9)",r.strokeText(t,Ma/2,wa/2),r.fillStyle="#f0e0a0",r.fillText(t,Ma/2,wa/2),s.tex.needsUpdate=!0}s.sprite.position.set(e,i,n),s.sprite.visible=!0}end(){for(let t=this.cursor;t<this.cap;t++)this.slots[t].sprite.visible=!1}reset(){for(const t of this.slots)t.sprite.visible=!1;this.cursor=0}}const Wn=30,fn=7,gi=1.25,ai=1.5,he=64,_l=65535,Qe=0,Ve=-48,Nr=9,gn=36,Oi=32,Ws=16,es=14,rd=8,N1=34,z1=41,O1=30,Xn=800,zr=900,od=26,B1=9,se={banners:[],bannerVersion:0,title:{text:"무한성 Mugen Castle",x:Qe,y:6.4,z:Ve+Oi-8,alpha:0},allied:!1,flipVersion:0,flipX:0,flipZ:0},yt={cx:Qe,cz:Ve,ohx:gn,ohz:Oi,ihx:Ws,ihz:es,outerGates:[{key:"castle-s",x:Qe,z:Ve+Oi,horizontal:!0},{key:"castle-e",x:Qe+gn,z:Ve,horizontal:!1},{key:"castle-w",x:Qe-gn,z:Ve,horizontal:!1}],keepGate:{x:Qe,z:Ve+es}},ld=[{kind:11,width:3.2,height:5.4,name:"등나무 제단 Wisteria Altar",glow:1.6,gr:1.2,gg:.4,gb:1.8},{kind:5,width:5.4,height:4,name:"귀살대 막사 Corps Barrack",glow:0,gr:0,gg:0,gb:0},{kind:6,width:3,height:3.4,name:"비파 연주대 Biwa Dais",glow:1.7,gr:2,gg:.4,gb:.4},{kind:2,width:3.4,height:5.6,name:"등꽃 망루 Wisteria Tower",glow:0,gr:0,gg:0,gb:0},{kind:4,width:4.8,height:3.6,name:"목조 폐허 Wooden Ruin",glow:0,gr:0,gg:0,gb:0}],H1=12,G1=2.399963229728653;function gc(a,t){let e=Math.imul(a^2654435769,2246822507)^Math.imul(t^3266489909,668265263);return e^=e>>>16,e>>>0}function hd(a,t,e){e.x=a,e.z=t,!(a===0&&t===0)&&(a===0?e.z-=Math.sign(t):t===0||(gc(a,t)&1)===0?e.x-=Math.sign(a):e.z-=Math.sign(t))}const bl={x:0,z:0},yl={x:0,z:0};function Or(a,t,e,i){if(hd(a,t,bl),bl.x===e&&bl.z===i||(hd(e,i,yl),yl.x===a&&yl.z===t))return!0;const n=Math.min(a,e),s=Math.min(t,i),r=a!==e?17:43;return gc(n*2+r,s*2-r)%100<22}class V1{walls=[];roads=[];props=[];landmarks=[];gates=[];revision=0;collisionCount=0;breachCount=0;gateKills=0;colliders=[];breached=new Set;keepSealed=!0;castleBreachable=!0;gateHp={"castle-s":Xn,"castle-e":Xn,"castle-w":Xn,hulao:zr};hulaoActive=!1;hulaoTimer=0;hulaoX=0;hulaoZ=0;playerX=0;playerZ=0;castleFlow=!1;flowActive=!1;castleTitleAlpha=0;castleBannerDefs=[];flowOriginX=0;flowOriginZ=0;flowTargetCell=-1;flowTimer=0;blocked=new Uint8Array(he*he);distance=new Uint16Array(he*he);queue=new Int32Array(he*he);update(t,e,i){this.playerX=t,this.playerZ=e,this.hulaoActive&&(this.hulaoTimer-=i,(this.hulaoTimer<=0||this.breached.has("hulao"))&&this.endHulao());const n=t-Qe,s=e-Ve,r=Math.hypot(n,s);if(this.castleTitleAlpha+=((r<O1?1:0)-this.castleTitleAlpha)*Math.min(1,i*2.4),se.title.alpha=this.castleTitleAlpha,this.castleFlow?r>z1&&(this.castleFlow=!1):r<N1&&(this.castleFlow=!0,this.flowTimer=0),this.flowActive=this.hulaoActive||this.castleFlow,!this.flowActive)return;this.flowTimer-=i;const o=Math.floor(t/ai),l=Math.floor(e/ai),h=(o&65535)<<16^l&65535;(this.flowTimer<=0||h!==this.flowTargetCell)&&(this.flowTargetCell=h,this.flowTimer=.22,this.rebuildFlow())}reset(){this.breached.clear(),this.breachCount=0,this.gateKills=0,this.hulaoActive=!1,this.hulaoTimer=0,this.castleFlow=!1,this.flowActive=!1,this.castleTitleAlpha=0,se.title.alpha=0,this.keepSealed=!0,this.castleBreachable=!0,this.gateHp["castle-s"]=Xn,this.gateHp["castle-e"]=Xn,this.gateHp["castle-w"]=Xn,this.gateHp.hulao=zr,se.allied=!1,se.flipX=Qe,se.flipZ=Ve,se.flipVersion++,this.rebuild()}triggerHulao(t,e,i=45){this.hulaoActive=!0;const n=[e-14,e+14,Ve+Oi+15,Ve-Oi-15];let s=n[0];for(const r of n)if(!this.hulaoOverlapsCastle(t,r)){s=r;break}this.hulaoX=t,this.hulaoZ=s,this.hulaoTimer=i,this.gateKills=0,this.gateHp.hulao=zr,this.breached.delete("hulao"),this.rebuild(),this.rebuildFlow()}hulaoOverlapsCastle(t,e){const s=e>=Ve-Oi-3&&e<=Ve+Oi+3,r=t+20>=Qe-gn-3&&t-20<=Qe+gn+3;return s&&r}endHulao(){this.hulaoActive=!1,this.rebuild(),this.revision++}get hulaoOn(){return this.hulaoActive}rebuild(){this.walls.length=0,this.roads.length=0,this.props.length=0,this.landmarks.length=0,this.gates.length=0,this.colliders.length=0,this.buildLandmarks(),this.buildCastle(),this.hulaoActive&&this.buildHulao(),this.castleBannerDefs.length===0&&this.buildBanners(),this.revision++}buildLandmarks(){for(let t=0;t<H1;t++){const e=ld[t%ld.length],i=18+t*5.8,n=t*G1,s=Math.cos(n)*i,r=Math.sin(n)*i;this.props.push({x:s,z:r,kind:e.kind,width:e.width,height:e.height}),this.landmarks.push({x:s,z:r,kind:e.kind,width:e.width,height:e.height,name:e.name,glow:e.glow,gr:e.gr,gg:e.gg,gb:e.gb})}}buildCastle(){const t=gi,e=Qe,i=Ve,n=gn,s=Oi,r=Nr*.5,o=n-r,l=s-r;this.addWall(e,i-s,n*2,t,!0,!0),this.addWall(e-r-o*.5,i+s,o,t,!0,!0),this.addWall(e+r+o*.5,i+s,o,t,!0,!0),this.gates.push({key:"castle-s",x:e,z:i+s,horizontal:!0,visible:!0}),this.addCastleGateCollider("castle-s",e,i+s,Nr,!0),this.addWall(e+n,i-r-l*.5,t,l,!1,!0),this.addWall(e+n,i+r+l*.5,t,l,!1,!0),this.gates.push({key:"castle-e",x:e+n,z:i,horizontal:!1,visible:!0}),this.addCastleGateCollider("castle-e",e+n,i,Nr,!1),this.addWall(e-n,i-r-l*.5,t,l,!1,!0),this.addWall(e-n,i+r+l*.5,t,l,!1,!0),this.gates.push({key:"castle-w",x:e-n,z:i,horizontal:!1,visible:!0}),this.addCastleGateCollider("castle-w",e-n,i,Nr,!1);const h=Ws,c=es,u=rd*.5,d=h-u;this.addWall(e,i-c,h*2,t,!0,!0),this.addWall(e-u-d*.5,i+c,d,t,!0,!0),this.addWall(e+u+d*.5,i+c,d,t,!0,!0),this.gates.push({key:"castle-keep-s",x:e,z:i+c,horizontal:!0,visible:!0}),this.keepSealed&&this.addCastleGateCollider("castle-keep-s",e,i+c,rd,!0),this.addWall(e+h,i,t,c*2,!1,!0),this.addWall(e-h,i,t,c*2,!1,!0),this.props.push({x:e-6,z:i+s+1,kind:11,width:2.6,height:4.4}),this.props.push({x:e+6,z:i+s+1,kind:11,width:2.6,height:4.4}),this.props.push({x:e-n+2,z:i-s,kind:2,width:3.2,height:5.4}),this.props.push({x:e+n-2,z:i-s,kind:2,width:3.2,height:5.4}),this.landmarks.push({x:e,z:i+s+1.2,kind:11,width:2.6,height:4.4,name:"성문 城門",glow:3.2,gr:1.7,gg:.85,gb:.32}),this.landmarks.push({x:e,z:i,kind:2,width:3.4,height:5.6,name:"본성 本城",glow:1.7,gr:1.35,gg:1.05,gb:.5})}buildBanners(){const t=[.6,.11,.1],e=[.56,.42,.14],i=this.castleBannerDefs,n=(c,u,d,f,m,v,g)=>{i.push({x:c,z:u,poleH:d,w:f,h:m,ry:v,r:g[0],g:g[1],b:g[2]})},s=Qe,r=Ve,o=gn,l=Oi;n(s-5.4,r+l,3.6,1.8,1.2,.28,t),n(s+5.4,r+l,3.6,1.8,1.2,-.28,t),n(s+o,r-5.6,3.4,1.7,1.1,.2,t),n(s+o,r+5.6,3.4,1.7,1.1,-.2,t),n(s-o,r-5.6,3.4,1.7,1.1,.2,t),n(s-o,r+5.6,3.4,1.7,1.1,-.2,t),n(s-o+1.6,r-l,3.7,1.6,1.05,.35,t),n(s+o-1.6,r-l,3.7,1.6,1.05,-.35,t),n(s-Ws+1.2,r-es,4.3,2.1,1.4,.35,e),n(s+Ws-1.2,r-es,4.3,2.1,1.4,-.35,e);let h=0;for(const c of this.landmarks)c.kind===5&&(n(c.x+c.width*.42,c.z,3,1.7,1.1,.6+h,t),h+=.7);se.banners=i,se.bannerVersion++}buildHulao(){const t=this.hulaoX,e=this.hulaoZ,i=20,n=fn*.5,s=i-n;this.addWall(t-n-s*.5,e,s,gi,!0,!0),this.addWall(t+n+s*.5,e,s,gi,!0,!0),this.gates.push({key:"hulao",x:t,z:e,horizontal:!0,visible:!0}),this.breached.has("hulao")||this.colliders.push({x:t,z:e,hx:n,hz:gi*.5,gateKey:"hulao"}),this.props.push({x:t-i,z:e,kind:10,width:5,height:5}),this.props.push({x:t+i,z:e,kind:10,width:5,height:5})}buildChunk(t,e,i){const n=t*Wn,s=e*Wn,r=Or(t,e,t,e-1),o=Or(t,e,t+1,e),l=Or(t,e,t,e+1),h=Or(t,e,t-1,e);if(i){this.roads.push({x:n,z:s,width:9,depth:9}),r&&this.roads.push({x:n,z:s-9.75,width:fn,depth:19.5}),l&&this.roads.push({x:n,z:s+9.75,width:fn,depth:19.5}),h&&this.roads.push({x:n-9.75,z:s,width:19.5,depth:fn}),o&&this.roads.push({x:n+9.75,z:s,width:19.5,depth:fn});const u=Number(r)+Number(o)+Number(l)+Number(h),d=gc(t,e),f=n+(d&1?10:-10),m=s+(d&2?9:-9);this.props.push({x:f,z:m,kind:u<=1?5:u===2?6:u===3?11:10,width:u<=1?5.5:3.4,height:u<=1?4.2:4.6})}const c=t===0&&e===0?"origin-north":`${t},${e}:n`;this.addBoundary(n,s-Wn*.5,!0,r,i,t===0&&e===0,c),this.addBoundary(n-Wn*.5,s,!1,h,i,!1,`${t},${e}:w`)}addBoundary(t,e,i,n,s,r,o){if(!n){this.addWall(t,e,i?Wn:gi,i?gi:Wn,i,s);return}const l=(Wn-fn)*.25,h=fn*.5+l;i?(this.addWall(t-h,e,l*2,gi,!0,s),this.addWall(t+h,e,l*2,gi,!0,s)):(this.addWall(t,e-h,gi,l*2,!1,s),this.addWall(t,e+h,gi,l*2,!1,s)),s&&this.gates.push({key:o,x:t,z:e,horizontal:i,visible:s}),r&&!this.breached.has(o)&&this.colliders.push({x:t,z:e,hx:i?fn*.5:gi*.5,hz:i?gi*.5:fn*.5,gateKey:o})}addWall(t,e,i,n,s,r){this.colliders.push({x:t,z:e,hx:i*.5,hz:n*.5,gateKey:null}),r&&this.walls.push({x:t,z:e,hx:i*.5,hz:n*.5,horizontal:s,visible:r})}addCastleGateCollider(t,e,i,n,s){this.breached.has(t)||this.colliders.push({x:e,z:i,hx:s?n*.5:gi*.5,hz:s?gi*.5:n*.5,gateKey:t})}circleBlocked(t,e,i){for(const n of this.colliders){const s=Math.max(n.x-n.hx,Math.min(t,n.x+n.hx)),r=Math.max(n.z-n.hz,Math.min(e,n.z+n.hz)),o=t-s,l=e-r;if(o*o+l*l<i*i)return!0}return!1}resolveMovement(t,e,i,n,s,r){const o=this.colliders;if(o.length===0)return r.x=i,r.z=n,!1;let l=!1;const h=f=>{let m=i;for(let v=0;v<2;v++)for(const g of o)f<=g.z-g.hz-s||f>=g.z+g.hz+s||m<=g.x-g.hx-s||m>=g.x+g.hx+s||(m=i>=t?g.x-g.hx-s:g.x+g.hx+s,l=!0);return m},c=f=>{let m=n;for(let v=0;v<2;v++)for(const g of o)f<=g.x-g.hx-s||f>=g.x+g.hx+s||m<=g.z-g.hz-s||m>=g.z+g.hz+s||(m=n>=e?g.z-g.hz-s:g.z+g.hz+s,l=!0);return m};let u,d;return Math.abs(n-e)>Math.abs(i-t)?(d=c(t),u=h(d)):(u=h(e),d=c(u)),r.x=u,r.z=d,l&&this.collisionCount++,l}projectWalkable(t,e,i,n){if(!this.circleBlocked(t,e,i))return n.x=t,n.z=e,!1;for(let s=1;s<=5;s++){const r=s*1.1;for(let o=0;o<16;o++){const l=o/16*Math.PI*2,h=t+Math.cos(l)*r,c=e+Math.sin(l)*r;if(!this.circleBlocked(h,c,i))return n.x=h,n.z=c,!0}}return n.x=this.playerX,n.z=this.playerZ,!0}breachGate(t){const e=this.gates.find(n=>n.key===t);if(!e||this.breached.has(t))return null;this.breached.add(t),this.breachCount++,t in this.gateHp&&(this.gateHp[t]=0);const i={...e};return this.rebuild(),this.rebuildFlow(),i}breachNear(t,e,i){for(const n of this.gates){if(this.breached.has(n.key))continue;const s=t-n.x,r=e-n.z;if(!(s*s+r*r>i*i))return this.breachGate(n.key)}return null}gateMaxHp(t){return t==="hulao"?zr:t==="castle-s"||t==="castle-e"||t==="castle-w"?Xn:-1}damageGate(t,e){return this.gateMaxHp(t)<0||this.breached.has(t)||t.startsWith("castle-")&&!this.castleBreachable||e<=0||(this.gateHp[t]=Math.max(0,this.gateHp[t]-e),this.gateHp[t]>0)?null:this.breachGate(t)}gateHp01(t){if(this.breached.has(t))return-1;const e=this.gateMaxHp(t);return e<=0?-1:this.gateHp[t]/e}nearestSealedGateKey(t,e,i){let n=null,s=i*i;for(const r of this.gates){if(this.gateMaxHp(r.key)<0||this.breached.has(r.key)||r.key.startsWith("castle-")&&!this.castleBreachable)continue;const o=t-r.x,l=e-r.z,h=o*o+l*l;h<s&&(s=h,n=r.key)}return n}recordKillAt(t,e){const i=this.nearestSealedGateKey(t,e,B1);return i?this.damageGate(i,od):null}primeGate(){this.breached.has("hulao")||(this.gateHp.hulao=od)}isGateBreached(t="hulao"){return this.breached.has(t)}rebuildFlow(){this.flowOriginX=Math.floor(this.playerX/ai)*ai-he*ai/2,this.flowOriginZ=Math.floor(this.playerZ/ai)*ai-he*ai/2;const t=he*he;this.distance.fill(_l);for(let o=0;o<he;o++)for(let l=0;l<he;l++){const h=this.flowOriginX+(l+.5)*ai,c=this.flowOriginZ+(o+.5)*ai;this.blocked[o*he+l]=this.circleBlocked(h,c,.58)?1:0}const e=Math.max(0,Math.min(he-1,Math.floor((this.playerX-this.flowOriginX)/ai)));let n=Math.max(0,Math.min(he-1,Math.floor((this.playerZ-this.flowOriginZ)/ai)))*he+e;if(this.blocked[n]){for(let o=0;o<t;o++)if(!this.blocked[o]){n=o;break}}let s=0,r=0;for(this.queue[r++]=n,this.distance[n]=0;s<r;){const o=this.queue[s++],l=o%he,h=o/he|0,c=this.distance[o]+1;l>0&&(r=this.visitFlow(o-1,c,r)),l+1<he&&(r=this.visitFlow(o+1,c,r)),h>0&&(r=this.visitFlow(o-he,c,r)),h+1<he&&(r=this.visitFlow(o+he,c,r))}}visitFlow(t,e,i){return this.blocked[t]||this.distance[t]!==_l?i:(this.distance[t]=e,this.queue[i]=t,i+1)}flowDirection(t,e,i,n,s){if(!this.flowActive){this.directDirection(t,e,i,n,s);return}const r=Math.floor((t-this.flowOriginX)/ai),o=Math.floor((e-this.flowOriginZ)/ai);if(r<1||o<1||r>=he-1||o>=he-1){this.directDirection(t,e,i,n,s);return}const l=o*he+r;let h=this.distance[l],c=r,u=o;for(let m=-1;m<=1;m++)for(let v=-1;v<=1;v++){if(v===0&&m===0)continue;const g=(o+m)*he+r+v;this.blocked[g]||this.distance[g]>=h||v!==0&&m!==0&&(this.blocked[o*he+r+v]||this.blocked[(o+m)*he+r])||(h=this.distance[g],c=r+v,u=o+m)}if(h===_l||c===r&&u===o){this.directDirection(t,e,i,n,s);return}const d=this.flowOriginX+(c+.5)*ai,f=this.flowOriginZ+(u+.5)*ai;this.directDirection(t,e,d,f,s)}directDirection(t,e,i,n,s){const r=i-t,o=n-e,l=Math.hypot(r,o)||1;s.x=r/l,s.z=o/l}get activeColliderCount(){return this.colliders.length}get castleFlowActive(){return this.castleFlow}get castleCenterX(){return Qe}get castleCenterZ(){return Ve}insideCastleBounds(t,e,i=0){return t>=Qe-gn-i&&t<=Qe+gn+i&&e>=Ve-Oi-i&&e<=Ve+Oi+i}insideKeepBounds(t,e,i=0){return t>=Qe-Ws-i&&t<=Qe+Ws+i&&e>=Ve-es-i&&e<=Ve+es+i}openKeepGate(){this.keepSealed&&(this.keepSealed=!1,this.rebuild(),this.rebuildFlow())}setCastleBreachable(t){this.castleBreachable=t}castleOuterBreachCount(){let t=0;for(const e of yt.outerGates)this.breached.has(e.key)&&t++;return t}get keepGateSealed(){return this.keepSealed}}const Sa=288,Aa=72,W1={font:'bold 30px "Nanum Myeongjo","Times New Roman",serif',fill:"#f0e0a0",stroke:"rgba(0,0,0,0.92)",strokeW:6,scale:1.35},X1={font:'bold 27px "Nanum Myeongjo","Times New Roman",serif',fill:"#c8ecff",stroke:"rgba(0,0,0,0.88)",strokeW:6,scale:1.18},q1={font:'bold 32px "Nanum Myeongjo","Times New Roman",serif',fill:"#ffe6a2",stroke:"rgba(0,0,0,0.94)",strokeW:7,scale:2.35},$1=new L(18e-5,26e-5,8e-4),j1=.019,Ml=[.14,.46,.44],Z1=.055,K1=.8,Y1=.15;class wl{slots=[];cap;style;cursor=0;constructor(t,e,i,n){this.cap=e,this.style=i;for(let s=0;s<e;s++){const r=document.createElement("canvas");r.width=Sa,r.height=Aa;const o=r.getContext("2d"),l=new Ai(r),h=new Js({map:l,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),c=new za(h);c.visible=!1,c.renderOrder=n,c.scale.set(i.scale*(Sa/Aa),i.scale,1),t.add(c),this.slots.push({sprite:c,mat:h,tex:l,ctx:o,text:""})}}begin(){this.cursor=0}place(t,e,i,n,s){if(this.cursor>=this.cap)return;const r=this.slots[this.cursor++];if(r.text!==t){r.text=t;const o=r.ctx,l=this.style;o.clearRect(0,0,Sa,Aa),o.font=l.font,o.textAlign="center",o.textBaseline="middle",o.lineWidth=l.strokeW,o.lineJoin="round",o.strokeStyle=l.stroke,o.strokeText(t,Sa/2,Aa/2),o.fillStyle=l.fill,o.fillText(t,Sa/2,Aa/2),r.tex.needsUpdate=!0}r.mat.opacity=s,r.sprite.position.set(e,i,n),r.sprite.visible=!0}end(){for(let t=this.cursor;t<this.cap;t++)this.slots[t].sprite.visible=!1}reset(){for(const t of this.slots)t.sprite.visible=!1;this.cursor=0}}class J1{mat;matrices;colors;seeds;colAttr;seedAttr;mesh;cap;w=0;constructor(t,e){this.cap=e;const i=new Qt(1,1);i.rotateX(-Math.PI/2),this.colors=new Float32Array(e*3),this.seeds=new Float32Array(e),this.colAttr=new Wt(this.colors,3),this.seedAttr=new Wt(this.seeds,1),this.colAttr.setUsage(Tt),this.seedAttr.setUsage(Tt),i.setAttribute("aColor",this.colAttr),i.setAttribute("aSeed",this.seedAttr),this.mat=new Bt({uniforms:{uTime:{value:0}},vertexShader:`
        attribute vec3 aColor;
        attribute float aSeed;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vSeed;
        void main() {
          vUv = uv;
          vColor = aColor;
          vSeed = aSeed;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vSeed;
        void main() {
          float r = length(vUv - 0.5) * 2.0;
          float soft = smoothstep(1.0, 0.12, r);
          if (soft <= 0.002) discard;
          float pulse = 0.8 + 0.2 * sin(uTime * 2.3 + vSeed * 6.283);
          float b = soft * soft * pulse;
          gl_FragColor = vec4(vColor * b, b * 0.55);
        }
      `,transparent:!0,blending:We,depthWrite:!1,depthTest:!0}),this.mesh=new ye(i,this.mat,e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.mesh.instanceMatrix.setUsage(Tt),this.matrices=this.mesh.instanceMatrix.array,t.add(this.mesh)}begin(){this.w=0}push(t,e,i,n,s,r){if(this.w>=this.cap)return;const o=this.w++,l=o*16,h=i*2;this.matrices[l]=h,this.matrices[l+5]=1,this.matrices[l+10]=h,this.matrices[l+12]=t,this.matrices[l+13]=.06,this.matrices[l+14]=e,this.matrices[l+15]=1;const c=o*3;this.colors[c]=n,this.colors[c+1]=s,this.colors[c+2]=r,this.seeds[o]=(Math.floor(t*3.1+e*7.7)&63)/64}end(t){this.mat.uniforms.uTime.value=t,this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.seedAttr.needsUpdate=!0}reset(){this.w=0,this.mesh.count=0}}class Q1{cloth;poles;clothMat;seeds;cols;seedAttr;colAttr;flut;flutAttr;dummy=new Ze;cap;version=-1;flipVersion=-1;lastTime=-1;count=0;anyFlip=!1;bx;bz;baseCol;isRed;trPhase;trDelay;trProg;trFrom;trTo;constructor(t,e=24){this.cap=e;const i=new Qt(1,1,14,3);i.translate(.5,.5,0),this.seeds=new Float32Array(e),this.cols=new Float32Array(e*3),this.flut=new Float32Array(e).fill(1),this.seedAttr=new Wt(this.seeds,1),this.colAttr=new Wt(this.cols,3),this.flutAttr=new Wt(this.flut,1),this.seedAttr.setUsage(Tt),this.colAttr.setUsage(Tt),this.flutAttr.setUsage(Tt),i.setAttribute("aSeed",this.seedAttr),i.setAttribute("aColor",this.colAttr),i.setAttribute("aFlutter",this.flutAttr),this.bx=new Float32Array(e),this.bz=new Float32Array(e),this.baseCol=new Float32Array(e*3),this.isRed=new Uint8Array(e),this.trPhase=new Uint8Array(e),this.trDelay=new Float32Array(e),this.trProg=new Float32Array(e),this.trFrom=new Float32Array(e*3),this.trTo=new Float32Array(e*3),this.clothMat=new Bt({uniforms:{uTime:{value:0},uFogColor:{value:$1.clone()},uFogDensity:{value:j1}},vertexShader:`
        attribute float aSeed;
        attribute vec3 aColor;
        attribute float aFlutter;
        uniform float uTime;
        varying vec3 vColor;
        varying float vShade;
        varying float vFogDepth;
        void main() {
          vColor = aColor;
          vec3 p = position;
          float t = uTime + aSeed * 6.2831;
          float amp = p.x * aFlutter; // 깃대(0)→자유단(1) 진폭 증가 × 전환 웨이브 순간 가산
          float w = sin(p.x * 6.5 - t * 5.5) * 0.17 * amp
                  + sin(p.x * 3.0 - t * 3.2 + 1.3) * 0.09 * amp;
          p.z += w;
          p.y += sin(p.x * 4.5 - t * 4.8) * 0.05 * amp;
          vShade = 0.66 + 0.28 * cos(p.x * 6.5 - t * 5.5); // 사인 기울기로 가짜 음영
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(p, 1.0);
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying vec3 vColor;
        varying float vShade;
        varying float vFogDepth;
        void main() {
          vec3 col = vColor * vShade;
          float fog = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
          gl_FragColor = vec4(col, 1.0);
        }
      `,side:di,transparent:!1,depthWrite:!0,depthTest:!0}),this.cloth=new ye(i,this.clothMat,e),this.cloth.count=0,this.cloth.frustumCulled=!1,this.cloth.renderOrder=1,this.cloth.instanceMatrix.setUsage(Tt);const n=new on(1,1,1);n.translate(0,.5,0);const s=new Ii({color:2366745,toneMapped:!0});this.poles=new ye(n,s,e),this.poles.count=0,this.poles.frustumCulled=!1,this.poles.instanceMatrix.setUsage(Tt),t.add(this.cloth),t.add(this.poles)}rebuild(t){const e=Math.min(t.length,this.cap);for(let i=0;i<e;i++){const n=t[i];this.dummy.position.set(n.x,0,n.z),this.dummy.rotation.set(0,0,0),this.dummy.scale.set(.16,n.poleH,.16),this.dummy.updateMatrix(),this.poles.setMatrixAt(i,this.dummy.matrix),this.dummy.position.set(n.x,n.poleH-n.h-.15,n.z),this.dummy.rotation.set(0,n.ry,0),this.dummy.scale.set(n.w,n.h,1),this.dummy.updateMatrix(),this.cloth.setMatrixAt(i,this.dummy.matrix),this.seeds[i]=i*.37%1,this.cols[i*3]=n.r,this.cols[i*3+1]=n.g,this.cols[i*3+2]=n.b,this.bx[i]=n.x,this.bz[i]=n.z,this.baseCol[i*3]=n.r,this.baseCol[i*3+1]=n.g,this.baseCol[i*3+2]=n.b,this.isRed[i]=n.r>n.g&&n.r>n.b&&n.g<n.r*.5?1:0,this.trPhase[i]=0,this.flut[i]=1}this.count=e,this.cloth.count=e,this.poles.count=e,this.anyFlip=!1,this.cloth.instanceMatrix.needsUpdate=!0,this.poles.instanceMatrix.needsUpdate=!0,this.seedAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.flutAttr.needsUpdate=!0}update(t){se.bannerVersion!==this.version&&(this.version=se.bannerVersion,this.rebuild(se.banners)),this.clothMat.uniforms.uTime.value=t;const e=this.lastTime<0?0:Math.min(.05,Math.max(0,t-this.lastTime));this.lastTime=t,se.flipVersion!==this.flipVersion&&(this.flipVersion=se.flipVersion,this.flipVersion>0&&this.armFlip()),this.anyFlip&&this.advanceFlip(e)}armFlip(){const t=se.flipX,e=se.flipZ,i=se.allied;let n=!1;for(let s=0;s<this.count;s++){if(this.isRed[s]===0||Math.abs(this.bx[s]-yt.cx)>yt.ohx+2.5||Math.abs(this.bz[s]-yt.cz)>yt.ohz+2.5)continue;const r=this.bx[s]-t,o=this.bz[s]-e,l=Math.hypot(r,o);this.trDelay[s]=l*Z1,this.trProg[s]=0,this.trPhase[s]=1;const h=s*3;this.trFrom[h]=this.cols[h],this.trFrom[h+1]=this.cols[h+1],this.trFrom[h+2]=this.cols[h+2],i?(this.trTo[h]=Ml[0],this.trTo[h+1]=Ml[1],this.trTo[h+2]=Ml[2]):(this.trTo[h]=this.baseCol[h],this.trTo[h+1]=this.baseCol[h+1],this.trTo[h+2]=this.baseCol[h+2]),n=!0}this.anyFlip=n}advanceFlip(t){let e=!1;for(let i=0;i<this.count;i++){const n=this.trPhase[i];if(n===0)continue;if(e=!0,n===1){if(this.trDelay[i]-=t,this.trDelay[i]>0){this.flut[i]=1;continue}this.trPhase[i]=2,this.trProg[i]=0}this.trProg[i]+=t/K1;const s=this.trProg[i]>=1?1:this.trProg[i],r=s*s*(3-2*s),o=i*3;this.cols[o]=this.trFrom[o]+(this.trTo[o]-this.trFrom[o])*r,this.cols[o+1]=this.trFrom[o+1]+(this.trTo[o+1]-this.trFrom[o+1])*r,this.cols[o+2]=this.trFrom[o+2]+(this.trTo[o+2]-this.trFrom[o+2])*r,this.flut[i]=1+Y1*Math.sin(s*Math.PI),s>=1&&(this.trPhase[i]=0,this.flut[i]=1)}this.anyFlip=e,this.colAttr.needsUpdate=!0,this.flutAttr.needsUpdate=!0}resetOwnership(){for(let t=0;t<this.count;t++){const e=t*3;this.cols[e]=this.baseCol[e],this.cols[e+1]=this.baseCol[e+1],this.cols[e+2]=this.baseCol[e+2],this.trPhase[t]=0,this.flut[t]=1}this.anyFlip=!1,this.flipVersion=se.flipVersion,this.colAttr.needsUpdate=!0,this.flutAttr.needsUpdate=!0}}function ty(a,t,e){const i=document.createElement("canvas");i.width=4,i.height=4;const n=i.getContext("2d");n.fillStyle=`rgb(${a},${t},${e})`,n.fillRect(0,0,4,4);const s=new Ai(i);return s.needsUpdate=!0,s}function ey(){const a=document.createElement("canvas");a.width=64,a.height=8;const t=a.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgb(224,180,90)"),e.addColorStop(1,"rgb(200,96,36)"),t.fillStyle=e,t.fillRect(0,0,64,8);const i=new Ai(a);return i.needsUpdate=!0,i}const Br=3,Sl=.34,cd=3.2;class iy{bg=[];fill=[];cap;w=0;constructor(t,e){this.cap=e;const i=ty(58,12,10),n=ey();for(let s=0;s<e;s++){const r=new Js({map:i,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,opacity:.9}),o=new za(r);o.center.set(0,.5),o.scale.set(Br,Sl,1),o.renderOrder=13,o.visible=!1,t.add(o),this.bg.push(o);const l=new Js({map:n,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),h=new za(l);h.center.set(0,.5),h.scale.set(Br,Sl,1),h.renderOrder=14,h.visible=!1,t.add(h),this.fill.push(h)}}begin(){this.w=0}push(t,e,i){if(this.w>=this.cap||i<0)return;const n=this.w++,s=t-Br*.5,r=this.bg[n];r.position.set(s,cd,e),r.visible=!0;const o=i>1?1:i,l=this.fill[n];l.position.set(s,cd,e),l.scale.set(Br*o,Sl,1),l.visible=o>.001}end(){for(let t=this.w;t<this.cap;t++)this.bg[t].visible=!1,this.fill[t].visible=!1}reset(){for(let t=0;t<this.cap;t++)this.bg[t].visible=!1,this.fill[t].visible=!1;this.w=0}}class ny{mat;matrices;colors;actives;colAttr;actAttr;mesh;cap;w=0;constructor(t,e){this.cap=e;const i=new Qt(1,1);i.rotateX(-Math.PI/2),this.colors=new Float32Array(e*3),this.actives=new Float32Array(e),this.colAttr=new Wt(this.colors,3),this.actAttr=new Wt(this.actives,1),this.colAttr.setUsage(Tt),this.actAttr.setUsage(Tt),i.setAttribute("aColor",this.colAttr),i.setAttribute("aActive",this.actAttr),this.mat=new Bt({uniforms:{uTime:{value:0}},vertexShader:`
        attribute vec3 aColor;
        attribute float aActive;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vActive;
        void main() {
          vUv = uv;
          vColor = aColor;
          vActive = aActive;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vActive;
        void main() {
          float r = length(vUv - 0.5) * 2.0;
          // 고리 밴드: 안쪽 0.72 상승 ~ 바깥 0.98 하강.
          float band = smoothstep(0.72, 0.84, r) * smoothstep(1.0, 0.9, r);
          if (band <= 0.002 && vActive < 0.5) discard;
          float pulse = 0.72 + 0.28 * sin(uTime * 3.0);
          // active: 맥동하는 고리 + 아주 옅은 안쪽 채움. 비활성: 정적 흐린 고리만.
          float ringA = band * (vActive > 0.5 ? 0.5 * pulse : 0.2);
          float innerA = vActive > 0.5 ? smoothstep(0.86, 0.0, r) * 0.1 : 0.0;
          float a = ringA + innerA;
          if (a <= 0.003) discard;
          gl_FragColor = vec4(vColor * a, a);
        }
      `,transparent:!0,blending:We,depthWrite:!1,depthTest:!0}),this.mesh=new ye(i,this.mat,e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.mesh.instanceMatrix.setUsage(Tt),this.matrices=this.mesh.instanceMatrix.array,t.add(this.mesh)}begin(){this.w=0}push(t,e,i,n,s,r,o){if(this.w>=this.cap)return;const l=this.w++,h=l*16,c=i*2;this.matrices[h]=c,this.matrices[h+5]=1,this.matrices[h+10]=c,this.matrices[h+12]=t,this.matrices[h+13]=.05,this.matrices[h+14]=e,this.matrices[h+15]=1;const u=l*3;this.colors[u]=n,this.colors[u+1]=s,this.colors[u+2]=r,this.actives[l]=o?1:0}end(t){this.mat.uniforms.uTime.value=t,this.mesh.count=this.w,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.actAttr.needsUpdate=!0}reset(){this.w=0,this.mesh.count=0}}class sy{glow;names;hints;titles;banners;gateBars;rings;time=0;guideEl;guideArrow;guideDist;gv=new L;constructor(t,e=24,i=18,n=6){this.glow=new J1(t,e),this.names=new wl(t,i,W1,11),this.hints=new wl(t,n,X1,12),this.titles=new wl(t,2,q1,13),this.banners=new Q1(t),this.gateBars=new iy(t,4),this.rings=new ny(t,12),this.guideEl=document.createElement("div"),this.guideEl.style.cssText=["position:fixed","left:0","top:0","display:none","flex-direction:column","align-items:center","gap:2px","pointer-events:none","z-index:19",'font-family:"Nanum Myeongjo","Times New Roman",serif',"will-change:transform,left,top"].join(";"),this.guideArrow=document.createElement("div"),this.guideArrow.style.cssText=["width:0","height:0","border-top:7px solid transparent","border-bottom:7px solid transparent","border-left:26px solid rgba(244,222,150,0.9)","filter:drop-shadow(0 0 4px rgba(0,0,0,0.7))"].join(";"),this.guideDist=document.createElement("div"),this.guideDist.style.cssText="color:rgba(240,224,170,0.85);font-size:12px;letter-spacing:1px;text-shadow:0 1px 3px rgba(0,0,0,0.9);font-variant-numeric:tabular-nums;",this.guideEl.appendChild(this.guideArrow),this.guideEl.appendChild(this.guideDist),document.body.appendChild(this.guideEl)}begin(t){this.time=t,this.glow.begin(),this.names.begin(),this.hints.begin(),this.gateBars.begin(),this.rings.begin(),this.banners.update(t),this.titles.begin();const e=se.title;e.alpha>.02&&this.titles.place(e.text,e.x,e.y,e.z,Math.min(1,e.alpha))}glowAt(t,e,i,n,s,r){this.glow.push(t,e,i,n,s,r)}name(t,e,i,n){this.names.place(t,e,i,n,1)}hint(t,e,i,n){const s=.62+.38*Math.sin(this.time*5.2);this.hints.place(t,e,i,n,s)}gateBar(t,e,i){this.gateBars.push(t,e,i)}interactRing(t,e,i,n,s,r){this.rings.push(t,e,1.6,i,n,s,r)}guide(t,e,i,n,s,r="rgba(244,222,150,0.9)"){const o=window.innerWidth,l=window.innerHeight;this.gv.set(t,2.2,e),this.gv.project(s);const h=this.gv.z>1;if(!h&&this.gv.x>=-1&&this.gv.x<=1&&this.gv.y>=-1&&this.gv.y<=1){this.guideEl.style.display!=="none"&&(this.guideEl.style.display="none");return}let u=this.gv.x,d=this.gv.y;h&&(u=-u,d=-d);let f=u,m=-d;const v=Math.hypot(f,m)||1;f/=v,m/=v;const g=o*.5,p=l*.5,w=46,T=Math.max(10,g-w),M=Math.max(10,p-w),A=Math.abs(f)<.001?1/0:T/Math.abs(f),y=Math.abs(m)<.001?1/0:M/Math.abs(m),E=Math.min(A,y),x=g+f*E,b=p+m*E,R=Math.atan2(m,f)*180/Math.PI,P=Math.round(Math.hypot(t-i,e-n));this.guideEl.style.display="flex",this.guideEl.style.left=`${x}px`,this.guideEl.style.top=`${b}px`,this.guideEl.style.transform="translate(-50%,-50%)",this.guideArrow.style.transform=`rotate(${R}deg)`,this.guideArrow.style.borderLeftColor=r,this.guideDist.style.color=r,this.guideDist.textContent=`${P}m`}guideOff(){this.guideEl.style.display!=="none"&&(this.guideEl.style.display="none")}end(){this.glow.end(this.time),this.names.end(),this.hints.end(),this.titles.end(),this.gateBars.end(),this.rings.end(this.time)}reset(){this.glow.reset(),this.names.reset(),this.hints.reset(),this.titles.reset(),this.gateBars.reset(),this.rings.reset(),this.guideOff(),this.banners.resetOwnership()}}const ay=.6,ry=.4,oy=new L(.14,.46,.44),ly=new L(.17,.55,.5),hy=.03,cy=.045,uy=1.2;function ud(a,t){const e=t.borderW+.6,i=new Qt((t.halfX+e)*2,(t.halfZ+e)*2);i.rotateX(-Math.PI/2);const n=new Bt({uniforms:{uCenter:{value:a.clone()},uHalf:{value:new vt(t.halfX,t.halfZ)},uColor:{value:t.color.clone()},uFill:{value:t.fill},uLine:{value:t.line},uBorderW:{value:t.borderW},uGateHalf:{value:t.gateHalf},uGateSoft:{value:uy},uGateMode:{value:t.gateMode},uInnerGap:{value:t.innerGap},uOpacity:{value:0},uTime:{value:0},uFlow:{value:.15}},vertexShader:`
      uniform vec2 uCenter;
      varying vec2 vRel;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vRel = wp.xz - uCenter; // 중심 기준 월드 XZ 오프셋(x=동서, y=남북 Z)
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec2 uHalf;
      uniform vec3 uColor;
      uniform float uFill, uLine, uBorderW, uGateHalf, uGateSoft, uGateMode, uInnerGap, uOpacity, uTime, uFlow;
      varying vec2 vRel;
      void main() {
        vec2 a = abs(vRel);
        float dX = uHalf.x - a.x; // 세로변(동·서)에서 안쪽으로 들어온 거리(m)
        float dZ = uHalf.y - a.y; // 가로변(남·북)에서 안쪽으로 들어온 거리(m)
        float d = min(dX, dZ);    // 가장 가까운 변까지 거리(안쪽 +, 바깥 -)

        // 채움: 사각 안쪽만(살짝 AA). 지면이 비치도록 저알파.
        float fill = smoothstep(0.0, 0.4, d) * uFill;

        // 경계 라인: 변(d≈0)에 밴드. 내성은 안쪽 평행선 1겹 추가(이중선).
        float line = smoothstep(uBorderW, 0.0, abs(d));
        if (uInnerGap > 0.001) line += 0.7 * smoothstep(uBorderW, 0.0, abs(d - uInnerGap));
        line = min(line, 1.2);

        // 성문 통로: 해당 변의 성문 폭만큼 라인을 끊는다.
        float gate = 0.0;
        if (uGateMode > 0.5) {
          if (dX < dZ) {
            // 세로변(동·서 성문) — 외성(mode 1)에만. 성문은 vRel.y(남북) 중앙.
            if (uGateMode < 1.5) gate = 1.0 - smoothstep(uGateHalf, uGateHalf + uGateSoft, abs(vRel.y));
          } else {
            // 가로변: 남성문만(vRel.y>0), 북벽은 폐쇄.
            float south = 1.0 - smoothstep(uGateHalf, uGateHalf + uGateSoft, abs(vRel.x));
            gate = vRel.y > 0.0 ? south : 0.0;
          }
        }
        line *= (1.0 - gate);

        // 경계를 천천히 도는 은은한 셰이드(활성 방어선 느낌 — 저진폭·저속).
        float ang = atan(vRel.y, vRel.x);
        float flow = (1.0 - uFlow) + uFlow * (0.5 + 0.5 * sin(ang * 2.0 - uTime * 0.9));
        line *= flow;

        float alpha = (fill + line * uLine) * uOpacity;
        if (alpha <= 0.003) discard;
        // 라인은 같은 색조로 약간 밝게(블룸 임계는 안 넘게).
        vec3 col = uColor * (1.0 + 0.45 * line);
        gl_FragColor = vec4(col, alpha);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:di}),s=new Fe(i,n);return s.position.set(a.x,t.y,a.y),s.renderOrder=0,s.frustumCulled=!1,s.visible=!1,{mesh:s,mat:n}}class dy{outerMat;innerMat;outer;inner;opacity=0;target=0;time=0;constructor(t){const e=new vt(yt.cx,yt.cz),i=ud(e,{halfX:yt.ohx,halfZ:yt.ohz,color:oy,fill:.13,line:.5,borderW:.7,gateHalf:4.5,gateMode:1,innerGap:0,y:hy}),n=ud(e,{halfX:yt.ihx,halfZ:yt.ihz,color:ly,fill:.2,line:.6,borderW:.45,gateHalf:4,gateMode:2,innerGap:1.1,y:cy});this.outer=i.mesh,this.outerMat=i.mat,this.inner=n.mesh,this.innerMat=n.mat,t.add(this.outer,this.inner)}setActive(t){this.target=t?1:0,t&&(this.outer.visible=!0,this.inner.visible=!0)}update(t){if(this.opacity===0&&this.target===0){this.outer.visible&&(this.outer.visible=!1,this.inner.visible=!1);return}if(this.time+=t,this.opacity!==this.target){const e=this.target>this.opacity?t/ay:t/ry;this.opacity=this.target>this.opacity?Math.min(this.target,this.opacity+e):Math.max(this.target,this.opacity-e)}this.outerMat.uniforms.uOpacity.value=this.opacity,this.innerMat.uniforms.uOpacity.value=this.opacity,this.outerMat.uniforms.uTime.value=this.time,this.innerMat.uniforms.uTime.value=this.time,this.opacity===0&&(this.outer.visible=!1,this.inner.visible=!1)}reset(){this.opacity=0,this.target=0,this.time=0,this.outerMat.uniforms.uOpacity.value=0,this.innerMat.uniforms.uOpacity.value=0,this.outer.visible=!1,this.inner.visible=!1}}const fy=`
  uniform float uTime;
  uniform float uReveal;
  varying vec2 vUv;
  varying float vFold;
  void main() {
    vUv = uv;
    vec3 p = position;
    // 결(가로) 방향으로 진행하는 두 개의 사인파 → 천이 펄럭이는 주름.
    float w = sin(p.x * 7.0 + uTime * 3.4) * 0.5 + sin(p.x * 13.0 - uTime * 2.1) * 0.22;
    // 세로 가장자리로 갈수록 진폭↑ (매달린 천 느낌). 펼쳐지는 앞단에서 진폭 가중.
    float edge = 0.35 + abs(p.y) * 1.3;
    float amp = 0.05 * edge * smoothstep(0.0, 0.3, uReveal);
    p.z += w * amp;
    vFold = w; // 주름 음영용
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,py=`
  precision highp float;
  uniform vec3 uColor;
  uniform float uReveal;
  uniform float uAlpha;
  uniform float uTime;
  uniform sampler2D uTex;
  varying vec2 vUv;
  varying float vFold;
  void main() {
    // 좌→우 펼침: uReveal 경계 밖은 버림 + 앞단 밝은 띠.
    float lead = uReveal;
    if (vUv.x > lead) discard;
    float leadGlow = smoothstep(0.05, 0.0, lead - vUv.x) * 0.6;

    // 부드러운 라운드 사각형 천 알파(가장자리 페더).
    vec2 d = abs(vUv - 0.5) * 2.0;
    float shape = (1.0 - smoothstep(0.86, 1.0, d.x)) * (1.0 - smoothstep(0.72, 1.0, d.y));

    // 장수색은 블룸용 HDR(>1)일 수 있어 그대로 쓰면 천이 하얘짐 → LDR로 클램프 후 사용(오너 피드백).
    vec3 tint = clamp(uColor, 0.0, 1.0);
    // 어두운 군기 바탕 + 세력색 틴트 → 옅은 색 장수(원군 등)에서도 화면을 하얗게 덮지 않음.
    float shade = 0.5 + vFold * 0.26 + 0.14 * (1.0 - vUv.y);
    vec3 cloth = mix(vec3(0.05, 0.06, 0.09), tint * 0.7, 0.5) * shade;

    // 문양(한자) — 세력색 위주 엠블럼(흰색 지배 제거 → 화면 하얗게 덮는 문제 해소).
    vec4 g = texture2D(uTex, vUv);
    vec3 emblem = tint * 0.9 + vec3(0.12);
    vec3 col = mix(cloth, emblem, g.a);
    col += leadGlow * tint * 0.7;

    // 위·아래 얇은 금색 테두리 선.
    float bar = smoothstep(0.9, 0.97, d.y) * (1.0 - smoothstep(0.97, 1.02, d.y));
    col = mix(col, vec3(0.95, 0.8, 0.45), bar * 0.8);

    float a = shape * uAlpha;
    if (a < 0.01) discard;
    gl_FragColor = vec4(col, a);
  }
`;class my{mesh;mat;texCache=new Map;life=0;dur=3;constructor(t){const e=new Qt(1,1,48,10);this.mat=new Bt({uniforms:{uTime:{value:0},uReveal:{value:0},uAlpha:{value:0},uColor:{value:new zt(.6,.6,.6)},uTex:{value:this.glyphTexture("群雄","군웅")}},vertexShader:fy,fragmentShader:py,transparent:!0,depthTest:!1,depthWrite:!1,side:di}),this.mesh=new Fe(e,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=998,this.mesh.visible=!1,this.mesh.scale.set(18,4.4,1),t.add(this.mesh)}trigger(t,e,i){this.mat.uniforms.uColor.value=new zt(i[0],i[1],i[2]),this.mat.uniforms.uTex.value=this.glyphTexture(t,e),this.life=this.dur,this.mesh.visible=!0}update(t,e){if(this.life<=0){this.mesh.visible&&(this.mesh.visible=!1);return}this.life-=t;const i=1-this.life/this.dur;this.mat.uniforms.uTime.value+=t,this.mat.uniforms.uReveal.value=Math.min(1,i/.12);const n=Math.min(1,i/.1),s=Math.min(1,this.life/.6);this.mat.uniforms.uAlpha.value=Math.min(n,s)*.8,this.mesh.position.copy(e.position),this.mesh.quaternion.copy(e.quaternion),this.mesh.translateZ(-24),this.mesh.translateY(2.6)}reset(){this.life=0,this.mesh.visible=!1}get playing(){return this.life>0}glyphTexture(t,e){const i=t+e,n=this.texCache.get(i);if(n)return n;const s=1024,r=256,o=document.createElement("canvas");o.width=s,o.height=r;const l=o.getContext("2d");l.clearRect(0,0,s,r),l.textAlign="center",l.textBaseline="middle",l.shadowColor="rgba(0,0,0,0.85)",l.shadowBlur=10,l.fillStyle="#ffffff",l.font='bold 150px "Nanum Myeongjo","SimSun",serif',l.fillText(t,s/2,r*.42),l.font='bold 52px "Nanum Gothic","Malgun Gothic",sans-serif',l.fillText(e,s/2,r*.82);const h=new Ai(o);return h.colorSpace=Se,h.needsUpdate=!0,this.texCache.set(i,h),h}}const Ye=40;class gy{x=new Float32Array(Ye);z=new Float32Array(Ye);rad=new Float32Array(Ye);life=new Float32Array(Ye);maxLife=new Float32Array(Ye);seed=new Float32Array(Ye);cr=new Float32Array(Ye);cg=new Float32Array(Ye);cb=new Float32Array(Ye);alive=new Uint8Array(Ye);cursor=0;mesh;matArr;colArr;fadeArr;seedArr;colAttr;fadeAttr;seedAttr;constructor(t){const e=new Qt(1,1);e.rotateX(-Math.PI/2),this.colArr=new Float32Array(Ye*3),this.fadeArr=new Float32Array(Ye),this.seedArr=new Float32Array(Ye),this.colAttr=new Wt(this.colArr,3),this.fadeAttr=new Wt(this.fadeArr,1),this.seedAttr=new Wt(this.seedArr,1),this.colAttr.setUsage(Tt),this.fadeAttr.setUsage(Tt),this.seedAttr.setUsage(Tt),e.setAttribute("aColor",this.colAttr),e.setAttribute("aFade",this.fadeAttr),e.setAttribute("aSeed",this.seedAttr);const i=new Bt({vertexShader:`
        attribute vec3 aColor;
        attribute float aFade;
        attribute float aSeed;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vFade;
        varying float vSeed;
        void main() {
          vUv = uv;
          vColor = aColor;
          vFade = aFade;
          vSeed = aSeed;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vFade;
        varying float vSeed;
        void main() {
          vec2 p = vUv - 0.5;
          float r = length(p) * 2.0;
          if (r > 1.0) discard;
          float ang = atan(p.y, p.x);
          // 방사형 균열: 각도 별로 갈라진 밝은 선 + 중심에서 바깥으로 감쇠
          float cracks = pow(abs(sin(ang * 5.0 + vSeed * 12.566)), 10.0)
                       + 0.6 * pow(abs(sin(ang * 8.0 - vSeed * 7.0)), 12.0);
          float radial = smoothstep(1.0, 0.15, r);
          float ember = smoothstep(0.5, 0.0, r) * 0.35; // 중심 잔불
          float b = (cracks * radial + ember) * vFade;
          if (b <= 0.004) discard;
          gl_FragColor = vec4(vColor * b * 1.4, b * 0.9);
        }
      `,transparent:!0,blending:We,depthWrite:!1,depthTest:!0});this.mesh=new ye(e,i,Ye),this.mesh.instanceMatrix.setUsage(Tt),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=1,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}reset(){this.alive.fill(0),this.mesh.count=0}spawn(t,e,i,n,s,r,o=1.6){const l=this.cursor;this.cursor=(this.cursor+1)%Ye,this.x[l]=t,this.z[l]=e,this.rad[l]=i,this.life[l]=o,this.maxLife[l]=o,this.seed[l]=Math.random(),this.cr[l]=n,this.cg[l]=s,this.cb[l]=r,this.alive[l]=1}update(t){for(let e=0;e<Ye;e++)this.alive[e]!==0&&(this.life[e]-=t,this.life[e]<=0&&(this.alive[e]=0))}render(){let t=0;for(let e=0;e<Ye;e++){if(this.alive[e]===0)continue;const i=t*16,n=this.rad[e]*2;this.matArr[i]=n,this.matArr[i+5]=1,this.matArr[i+10]=n,this.matArr[i+12]=this.x[e],this.matArr[i+13]=.04,this.matArr[i+14]=this.z[e],this.matArr[i+15]=1;const s=t*3;this.colArr[s]=this.cr[e],this.colArr[s+1]=this.cg[e],this.colArr[s+2]=this.cb[e];const r=this.life[e]/this.maxLife[e];this.fadeArr[t]=Math.min(1,r*3.5)*r,this.seedArr[t]=this.seed[e],t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0,this.seedAttr.needsUpdate=!0}}const Hf="threesur-lang";let hs=vy();const kh=new Set;function vy(){try{const a=localStorage.getItem(Hf);if(a==="ko"||a==="en")return a}catch{}return xy()}function xy(){const a=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language])||[];for(const t of a)if(typeof t=="string"&&t.toLowerCase().startsWith("ko"))return"ko";return"en"}function wt(){return hs}function _y(a){if(a!==hs){hs=a;try{localStorage.setItem(Hf,a)}catch{}for(const t of kh)t(a)}}function by(){return _y(hs==="ko"?"en":"ko"),hs}function yy(a){return kh.add(a),()=>kh.delete(a)}function it(a,t){let i=(Al[hs]??Al.ko)[a]??Al.ko[a]??a;if(t)for(const n in t)i=i.replace(new RegExp(`\\{${n}\\}`,"g"),String(t[n]));return i}function Me(a,t,e){return hs==="ko"?e:My[a][t]??e}const Al={ko:{titleKor:"귀 멸 서 바 이 버",titleTag:"귀멸 서바이버 · 전집중의 호흡으로 혈귀를 베어라",start:"출진 出陣",shop:"본진 本陣",codex:"전공 戰功",back:"뒤로 ‹",controlsHint:"<b>WASD / 화살표</b> 이동 · <b>Space</b> 무쌍난무 · <b>Esc</b> 일시정지<br>모바일: 좌측 가상 조이스틱 + 우측 무쌍 버튼",selectTitle:"대원 선택",weaponLabel:"호흡/혈귀술",unlockAtShop:"본진에서 해금",hudKills:"처치 {n}",hudKillsLabel:"처치",hudLevel:"Lv {n}",hudCombo:"連 킬",musouHint:"무쌍난무 — Space",resultWin:"무잔 격퇴",resultLose:"전사",rsSurvive:"생존",rsKills:"처치",rsMaxCombo:"최대 콤보",rsLevel:"레벨",rsHero:"대원",rsBossKill:"상현 처치",goldEarned:"획득 골드",goldBonus:"(콤보 보너스 +{n})",baseBalance:"본진 잔액 ⟡ {n}",retry:"다시 출진 再出陣",share:"전과 공유 戰果",toTitle:"본진으로 本陣",newRecord:"신기록",achGet:"업적 달성!",heroUnlockGet:"새 대원 해금!",shopTitle:"본진",goldHeld:"보유 골드 ⟡ {n}",tabUpgrade:"강화 强化",tabCodex:"전공 戰功",upgradeBuy:"강화",unlockBuy:"해금",lvbuUnlockName:"렌고쿠 해금",lvbuUnlockDesc:"화염의 호흡 · 공격력 +25%(받는 피해 +25%) · 염호무쌍",maxed:"MAX",recSurvive:"최고 생존",recKills:"최다 처치",recLevel:"최고 레벨",recCombo:"최대 콤보",bossCodex:"상현 토벌 기록",slain:"토벌 완료",notSlain:"미토벌",achSection:"업적 業績",levelupTitle:"레벨 업 — 하나를 택하라",reroll:"리롤 (50G) · 보유 {n}G",levelupHint:"1 · 2 · 3 키로도 선택",tagNew:"신규",tagUp:"강화",tagMax:"최대",tagReward:"보상",tagCurse:"저주",catWeapon:"무기",catPassive:"패시브",catRelic:"저주 유물",rewardHealName:"재정비",rewardHealDesc:"체력 50% 회복",rewardGoldName:"군자금",rewardGoldDesc:"골드 +200",rewardXpName:"병법 수련",rewardXpDesc:"경험치 대량 획득",pauseTitle:"일시정지",resume:"계속 繼續",abandon:"포기 抛棄",resumeHint:"Esc 로도 계속",bannerAppear:"등장",bannerHulao:"호로관 출현",bannerAlly:"원군",bannerSupply:"보급 확보",bannerHulaoBreak:"호로관 파성",bannerEvolve:"진화!",bannerTreasure:"보물 寶物",bannerReward:"보상 報償",bannerEndless:"무한 전투"},en:{titleKor:"ILGIDANGCHEON",titleTag:"Three Kingdoms Survivor · One general, ten thousand foes",start:"Sortie 出陣",shop:"Camp 本陣",codex:"Records 戰功",back:"Back ‹",controlsHint:"<b>WASD / Arrows</b> Move · <b>Space</b> Musou · <b>Esc</b> Pause<br>Mobile: left virtual stick + right Musou button",selectTitle:"Choose Your General",weaponLabel:"Weapon",unlockAtShop:"Unlock at Camp",hudKills:"Kills {n}",hudKillsLabel:"Kills",hudLevel:"Lv {n}",hudCombo:"Combo",musouHint:"Musou 無雙 — Space",resultWin:"Unify the Realm",resultLose:"Fallen in Battle",rsSurvive:"Survived",rsKills:"Kills",rsMaxCombo:"Max Combo",rsLevel:"Level",rsHero:"General",rsBossKill:"Bosses Slain",goldEarned:"Gold Earned",goldBonus:"(combo bonus +{n})",baseBalance:"Camp balance ⟡ {n}",retry:"Sortie Again 再出陣",share:"Share 戰果",toTitle:"To Camp 本陣",newRecord:"RECORD",achGet:"Achievement unlocked!",heroUnlockGet:"New general unlocked!",shopTitle:"Camp",goldHeld:"Gold ⟡ {n}",tabUpgrade:"Upgrades 强化",tabCodex:"Records 戰功",upgradeBuy:"Upgrade",unlockBuy:"Unlock",lvbuUnlockName:"Unlock Lü Bu",lvbuUnlockDesc:"Sky Piercer · Attack +25% (damage taken +25%) · Red Hare Rampage",maxed:"MAX",recSurvive:"Best Survival",recKills:"Most Kills",recLevel:"Best Level",recCombo:"Max Combo",bossCodex:"Bosses Slain",slain:"Slain",notSlain:"Not yet",achSection:"Achievements 業績",levelupTitle:"Level Up — Choose One",reroll:"Reroll (50G) · {n}G held",levelupHint:"Or press 1 · 2 · 3",tagNew:"NEW",tagUp:"UP",tagMax:"MAX",tagReward:"REWARD",tagCurse:"CURSE",catWeapon:"Weapon",catPassive:"Passive",catRelic:"Cursed Relic",rewardHealName:"Regroup",rewardHealDesc:"Restore 50% HP",rewardGoldName:"War Funds",rewardGoldDesc:"Gold +200",rewardXpName:"War Study",rewardXpDesc:"Gain a large amount of XP",pauseTitle:"Paused",resume:"Resume 繼續",abandon:"Abandon 抛棄",resumeHint:"Esc to resume",bannerAppear:"appears",bannerHulao:"Hulao Gate appears",bannerAlly:"Reinforcement",bannerSupply:"Supplies Secured",bannerHulaoBreak:"Hulao Gate Breached",bannerEvolve:"Evolved!",bannerTreasure:"Treasure 寶物",bannerReward:"Reward 報償",bannerEndless:"Endless Battle"}},My={hero:{zhaoyun:"Tanjiro",guanyu:"Tomioka Giyu",zhangfei:"Kamado Nezuko",zhugeliang:"Kanroji Mitsuri",huangzhong:"Kocho Shinobu",sunshangxiang:"Akaza",lvbu:"Rengoku Kyojuro",yuanshao:"Yuan Shao",dongzhuo:"Dong Zhuo"},weapon:{spear:"Water Breathing",guandao:"Water Breathing: Lull",zhangba:"Beast Breathing",baiyu:"Enchanting Blood",crossbow:"Insect Breathing",fire:"Exploding Blood",thunder:"Thunder Breathing: Thunderclap",orbit:"Wisteria Wards",halberd:"Destructive Death: Compass",cavalry:"Flame Breathing: Flame Tiger",caltrop:"Iron Caltrops",poison:"Venom Spring",twinring:"Twin Rings",zhanma:"Water Breathing: Eleventh Style",bamen:"Wisteria Barrier",chibi:"Blood Explosion Inferno",tianfa:"Thunderclap Six Fold",yuanrong:"Insect Breathing: 百花繚亂"},passive:{horseshoe:"Total Concentration",armor:"Corps Uniform",warbook:"Final Selection",wine:"Wisteria Rice Cake",seal:"Corps Purse",censer:"Kasugai Crow",talismanho:"Body Enhancement",vermilion:"Shrine Blessing"},upgrade:{attack:"Martial Training",health:"Iron Reinforcement",speed:"Steed Training",pickup:"Soul-Gathering Sachet",cooldown:"Tactical Mastery",startLevel:"Veteran Deployment",revive:"Rise from Death"}},Ha={spear:"Piercing water stream thrust",guandao:"Water surface fan-shaped slash",zhangba:"Double fangs front & rear slash",baiyu:"Homing blood art projectiles",crossbow:"Rapid poison needle fire at nearest foe",fire:"Pink blood flame field",thunder:"High-speed lightning flash attacks",orbit:"Orbiting wisteria shields",halberd:"360° air punch shockwaves",cavalry:"Summoned flame tiger charge",zhanma:"Launches spinning water slash waves",bamen:"Piercing wisteria barrier storm",chibi:"Advancing blood explosion inferno",tianfa:"Chain lightning strikes between foes",yuanrong:"Omnidirectional poison needle storm"},no={first_win:{name:"Mugen Castle Conqueror",desc:"First victory (survive 10:00)"},slay_lvbu:{name:"Upper Rank Slayer",desc:"Defeat the final boss Kokushibo"},thousand_cut:{name:"Thousand-Demon Slayer",desc:"Slay 1,000 demons in a single run"},five_hundred_cut:{name:"Demon Hunter",desc:"Slay 500 demons in a single run"},invincible:{name:"See-Through World",desc:"Take no hit for 3 minutes"},master_smith:{name:"Swordsmith Prodigy",desc:"3+ evolved weapons in one run"},combo_master:{name:"Breathing Virtuoso",desc:"Exceed a 500 max combo"},veteran:{name:"Hashira Candidate",desc:"10,000 cumulative demon kills"},all_bosses:{name:"Twelve Kizuki Hunter",desc:"Slay all three bosses in one run"},high_level:{name:"Marked Slayer",desc:"Reach level 40"},endless_walker:{name:"Muzan Hunter",desc:"Survive 15 min in endless mode"},survivor:{name:"Corps Veteran",desc:"Survive 5+ minutes"}},wy={zhaoyun:"Move speed +10% (Total Concentration)",guanyu:"Attack +15% (Water Breathing)",zhangfei:"Max HP +25% (Blood Demon Art)",zhugeliang:"Cooldown -10% (Love Breathing)",huangzhong:"Range & projectile speed +20% (Insect Breathing)",sunshangxiang:"Range & projectile speed +15%, move speed +10% (Destructive Death)",lvbu:"Attack +25%, damage taken +25% (Flame Breathing)"},Sy={zhaoyun:"Musou · Hinokami Kagura — 8-way invincible sun dash",guanyu:"Musou · Lull — giant water whirlpool slash",zhangfei:"Musou · Exploding Blood — full-screen blood shockwave",zhugeliang:"Musou · Enchanting Blood Art — hallucination storm",huangzhong:"Musou · Dance of the Centipede — omnidirectional needles",sunshangxiang:"Musou · Destructive Death Compass — shockwave storm",lvbu:"Musou · Flame Tiger — steerable invincible flame charge"},Gf=[{id:"horseshoe",name:"전집중 상시",hanja:"全集中·常中",maxLevel:5,desc:a=>wt()==="en"?`Move speed +${a*8}%`:`이동속도 +${a*8}%`,apply:(a,t)=>{a.speedMul*=1+.08*t}},{id:"armor",name:"귀살대 대원복",hanja:"鬼殺隊服",maxLevel:5,desc:a=>wt()==="en"?`Damage taken -${a*8}%`:`받는 피해 -${a*8}%`,apply:(a,t)=>{a.dmgReduction=Math.min(.8,a.dmgReduction+.08*t)}},{id:"warbook",name:"최종선별 경험",hanja:"最終選別",maxLevel:5,desc:a=>wt()==="en"?`XP +${a*8}%`:`경험치 +${a*8}%`,apply:(a,t)=>{a.xpMul*=1+.08*t}},{id:"wine",name:"우코기 떡",hanja:"薬草餅",maxLevel:5,desc:a=>wt()==="en"?`Max HP +${a*10}%, regen ${(a*.8).toFixed(1)}/s`:`최대체력 +${a*10}%, 재생 ${(a*.8).toFixed(1)}/s`,apply:(a,t)=>{a.maxHpMul*=1+.1*t,a.hpRegen+=.8*t}},{id:"seal",name:"주화 은행",hanja:"鬼殺隊銀行",maxLevel:5,desc:a=>wt()==="en"?`Gold gain +${a*10}%`:`골드 획득 +${a*10}%`,apply:(a,t)=>{a.goldMul*=1+.1*t}},{id:"censer",name:"까마귀 통신",hanja:"鎹鴉",maxLevel:5,desc:a=>wt()==="en"?`Pickup radius +${a*15}%`:`픽업 반경 +${a*15}%`,apply:(a,t)=>{a.pickupMul*=1+.15*t}},{id:"talismanho",name:"육체 강화",hanja:"身體强化",maxLevel:5,desc:a=>wt()==="en"?`Cooldown -${(100*(1-Math.pow(.95,a))).toFixed(0)}%`:`쿨다운 -${(100*(1-Math.pow(.95,a))).toFixed(0)}%`,apply:(a,t)=>{a.cooldownMul*=Math.pow(.95,t)}},{id:"vermilion",name:"사당 축복",hanja:"神社の祝福",maxLevel:3,rare:!0,desc:a=>wt()==="en"?`Projectiles +${a}`:`투사체 +${a}`,apply:(a,t)=>{a.projectileBonus+=t}}],Hi={};for(const a of Gf)Hi[a.id]=a;const Vf=[{id:"seven_star",name:"독낫",nameEn:"Gyutaro's Sickle",hanja:"毒鎌",desc:"공격력 +40%, 최대 체력 -30%",descEn:"Attack +40%, Max HP -30%",apply:a=>{a.damageMul*=1.4,a.maxHpMul*=.7}},{id:"bronze_decree",name:"무한성 비와 열쇠",nameEn:"Mugen Castle Key",hanja:"無限城琵琶鍵",desc:"골드 획득 +100%, 이동속도 -15%",descEn:"Gold gain +100%, Move speed -15%",apply:a=>{a.goldMul*=2,a.speedMul*=.85}},{id:"ox_fan",name:"금강엽 부채",nameEn:"Doma's Golden Fan",hanja:"鐵扇",desc:"쿨다운 -25%, 픽업 반경 -50%",descEn:"Cooldown -25%, Pickup radius -50%",apply:a=>{a.cooldownMul*=.75,a.pickupMul*=.5}},{id:"poison_pill",name:"푸른 피안화 가루",nameEn:"Blue Spider Lily Powder",hanja:"彼岸花",desc:"공격력 +30%, 받는 피해 +25%",descEn:"Attack +30%, Damage taken +25%",apply:a=>{a.damageMul*=1.3,a.dmgTakenMul*=1.25}},{id:"blood_banner",name:"희귀혈 주머니",nameEn:"Marechi Blood Pouch",hanja:"稀血",desc:"투사체 +2, 체력 재생 정지, 최대 체력 -15%",descEn:"Projectiles +2, HP regen off, Max HP -15%",apply:a=>{a.projectileBonus+=2,a.hpRegen=0,a.maxHpMul*=.85}},{id:"greedy_seal",name:"상현의 인장",nameEn:"Upper Rank Crest",hanja:"上弦印",desc:"경험치 +50%, 광역 -25%",descEn:"XP +50%, Area -25%",apply:a=>{a.xpMul*=1.5,a.areaMul*=.75}}],vc={};for(const a of Vf)vc[a.id]=a;function Ay(a){return wt()==="en"?a.nameEn:a.name}function Ty(a){return wt()==="en"?a.descEn:a.desc}function Ey(a,t){const e=Vf.filter(i=>!t.includes(i.id));return e.length===0?null:e[Math.floor(a()*e.length)]}const Ga=[{id:"zhangba_mao",name:"이노스케의 이도",nameEn:"Inosuke's Serrated Blades",hanja:"雙刀",desc:"공격력 +20%, 광역 +15%",descEn:"Attack +20%, Area +15%",lore:"이노스케가 멧돼지 탈을 쓰고 난전에서 거칠게 휘두르는 톱니 모양의 이도. 거친 성정만큼이나 무자비하게 살을 뜯어낸다.",loreEn:"A pair of serrated Nichirin blades Inosuke swings wildly. True to his beastly nature, they tear flesh apart mercilessly.",apply:a=>{a.damageMul*=1.2,a.areaMul*=1.15}},{id:"qinggang_jian",name:"탄지로의 일륜도",nameEn:"Tanjiro's Black Nichirin Sword",hanja:"日輪刀",desc:"공격력 +18%, 사거리·투사체 속도 +15%",descEn:"Attack +18%, Range & projectile speed +15%",lore:"탄지로가 쥐는 검은색 일륜도. 물의 호흡과 해의 호흡을 오가며 혈귀를 베어 가를 때 검신이 칠흑의 빛을 발한다.",loreEn:"A jet-black Nichirin sword held by Tanjiro. It glows with an abyssal sheen when channeling water or sun breathing forms.",apply:a=>{a.damageMul*=1.18,a.rangeMul*=1.15}},{id:"wanshi_gong",name:"젠이츠의 일륜도",nameEn:"Zenitsu's Nichirin Sword",hanja:"雷刀",desc:"사거리·투사체 속도 +30%",descEn:"Range & projectile speed +30%",lore:"젠이츠의 황금빛 일륜도. 벽력일섬의 번개 기운이 실려 순식간에 시공간을 가로지르는 신속의 참격을 퍼붓는다.",loreEn:"A golden Nichirin sword representing Thunder Breathing. Infused with lightning speed, it flashes through the battlefield.",apply:a=>{a.rangeMul*=1.3}},{id:"bao_dao",name:"렌고쿠의 코등이",nameEn:"Kyojuro's Flame Tsuba",hanja:"炎鍔",desc:"공격력 +28%",descEn:"Attack +28%",lore:"염주 렌고쿠 쿄쥬로가 쓰던 불꽃 모양 코등이. 타오르는 마음가짐과 호흡을 고조시켜 공격의 파괴력을 끌어올린다.",loreEn:"The flame-shaped sword guard left by Kyojuro. It fuels the slayers heart, heavily amplifying breathing power.",apply:a=>{a.damageMul*=1.28}},{id:"tietai_gong",name:"기유의 일륜도",nameEn:"Giyu's Nichirin Sword",hanja:"水刀",desc:"투사체 +1, 공격력 +10%",descEn:"Projectiles +1, Attack +10%",lore:"수주 토미오카 기유가 쥐는 청색 일륜도. 고요하고 물러서지 않는 신념의 검격으로 잔잔한 파동을 퍼트린다.",loreEn:"The blue Nichirin sword held by Giyu. It cuts with the absolute stillness of deep water, creating smooth shockwaves.",apply:a=>{a.projectileBonus+=1,a.damageMul*=1.1}},{id:"shuangtie_ji",name:"텐겐의 대형 이도",nameEn:"Tengen's Cleavers",hanja:"音爆刀",desc:"투사체 +1, 광역 +12%",descEn:"Projectiles +1, Area +12%",lore:"음주 우즈이 텐겐의 체인으로 연결된 대형 이도. 소리의 호흡과 폭발성 참격을 흩날려 넓은 범위를 날려버린다.",loreEn:"Massive dual cleavers connected by a chain. Used by Tengen to trigger roaring explosions across a wide sweep.",apply:a=>{a.projectileBonus+=1,a.areaMul*=1.12}},{id:"lian_nu",name:"사네미의 일륜도",nameEn:"Sanemi's Nichirin Sword",hanja:"風刀",desc:"쿨다운 -20%",descEn:"Cooldown -20%",lore:"풍주 시나즈가와 사네미의 녹색 일륜도. 거친 폭풍 같은 궤적으로 몰아치는 난무가 쉴 새 없이 휘몰아친다.",loreEn:"A green Nichirin sword representing Wind Breathing. Its tempestuous attacks slice in rapid, non-stop successions.",apply:a=>{a.cooldownMul*=.8}},{id:"mingguang_kai",name:"귀살대 대원복",nameEn:"Demon Slayer Uniform",hanja:"隊服",desc:"받는 피해 -22%",descEn:"Damage taken -22%",lore:"귀살대원들이 착용하는 칠흑의 대원복. 특수한 가공을 거쳐 혈귀의 엄니로부터 대원을 보호하며 가볍고 튼튼하다.",loreEn:"Special pitch-black uniform worn by members of the Demon Slayer Corps, offering protection against demonic fangs.",apply:a=>{a.dmgTakenMul*=.78}},{id:"sunzi_bingfa",name:"호흡의 비기",nameEn:"Breathing Secrets",hanja:"呼吸秘卷",desc:"쿨다운 -15%, 광역 +10%",descEn:"Cooldown -15%, Area +10%",lore:"역대 주들의 호흡 비결과 전투 비기가 적힌 두루마리. 읽은 자는 싸우기 전에 칼끝이 닿을 궤적의 틈을 포착한다.",loreEn:"Scrolls detailing ancient breathing mastery. Studying it sharpens focus and reveals the thread of interval.",apply:a=>{a.cooldownMul*=.85,a.areaMul*=1.1}},{id:"taigong_bingfa",name:"전집중 호흡법",nameEn:"Total Concentration Guide",hanja:"全集中法",desc:"경험치 +35%",descEn:"XP +35%",lore:"하루 종일 가슴에 산소를 가득 채우는 전집중 호흡의 해설서. 체내 에너지를 한계까지 끌어올려 성장 속도를 가속한다.",loreEn:"A master handbook on maintaining oxygen intake 24/7. It boosts cellular metabolism, hastening experience gain.",apply:a=>{a.xpMul*=1.35}},{id:"heshi_bi",name:"등나무꽃 주머니",nameEn:"Wisteria Sachet",hanja:"藤香囊",desc:"골드 +60%, 픽업 반경 +20%",descEn:"Gold +60%, Pickup radius +20%",lore:"혈귀들이 기피하는 등나무꽃 진액이 가득 든 향나무 주머니. 정신을 맑게 다스리고 장내를 정화하는 가호가 내린다.",loreEn:"A wooden sachet filled with wisteria essence. Its aroma cleanses the air, drawing gold and items closer.",apply:a=>{a.goldMul*=1.6,a.pickupMul*=1.2}},{id:"yu_jue",name:"오니의 곡옥",nameEn:"Demonic Magatama",hanja:"鬼勾玉",desc:"체력 재생 +1.5/s, 최대 체력 +12%",descEn:"HP regen +1.5/s, Max HP +12%",lore:"오니의 왕의 세포가 깃든 차가운 푸른색 곡옥. 등골이 서늘해지는 저주가 흐르지만 육체 치유 능력을 경이롭게 돕는다.",loreEn:"A freezing blue magatama containing Muzan's cells. It runs cold but acts as a powerful regenerative catalyst.",apply:a=>{a.hpRegen+=1.5,a.maxHpMul*=1.12}},{id:"shuo",name:"귀살대 보급마",nameEn:"Slayer Steed",hanja:"軍馬",desc:"공격력 +15%, 이동속도 +10%",descEn:"Attack +15%, Move speed +10%",lore:"기병이 타던 사나운 명마. 렌고쿠 가문 등에서 애용하던 말로 전장의 흙바닥을 힘차게 달리며 돌진력을 더한다.",loreEn:"A warhorse bred for rapid responses. It speeds up exploration and gives extra strength to charges.",apply:a=>{a.damageMul*=1.15,a.speedMul*=1.1}},{id:"huanshou_dao",name:"시노부의 하오리",nameEn:"Shinobu's Haori",hanja:"羽織",desc:"쿨다운 -10%, 공격력 +10%",descEn:"Cooldown -10%, Attack +10%",lore:"나비 날개 문양이 새겨진 가벼운 하오리. 바람을 가를 때마다 독침이 더 날카롭고 유연하게 사방으로 퍼진다.",loreEn:"A lightweight haori adorned with butterfly wing designs. It helps poison darts slip through the air much faster.",apply:a=>{a.cooldownMul*=.9,a.damageMul*=1.1}},{id:"jiao_gong",name:"교메이의 염주",nameEn:"Gyomei's Beads",hanja:"數珠",desc:"사거리·투사체 속도 +20%, 쿨다운 -8%",descEn:"Range & projectile speed +20%, Cooldown -8%",lore:"암주 히메지마 교메이의 무겁고 거대한 염주. 눈먼 자의 직감을 벼려내어 보이지 않는 장막 너머까지 거리를 넓힌다.",loreEn:"Heavy iron prayer beads belonging to Gyomei. They enhance focus, extending range beyond visual limits.",apply:a=>{a.rangeMul*=1.2,a.cooldownMul*=.92}},{id:"liangdang_kai",name:"귀살대 나무나막신",nameEn:"Wooden Geta",hanja:"木屐",desc:"받는 피해 -10%, 이동속도 +8%",descEn:"Damage taken -10%, Move speed +8%",lore:"대원들이 즐겨 신는 튼튼한 오동나무 나막신. 디딤발이 가벼워져 지면의 습격과 칼날을 사뿐하게 회피한다.",loreEn:"Sturdy wooden geta that lighten the slayers steps, making evasion and movement agile.",apply:a=>{a.dmgReduction=Math.min(.8,a.dmgReduction+.1),a.speedMul*=1.08}},{id:"zha_jia",name:"오니의 강갑",nameEn:"Demon Hide",hanja:"鬼皮",desc:"받는 피해 -12%, 최대 체력 +8%",descEn:"Damage taken -12%, Max HP +8%",lore:"강력한 오니를 사냥한 후 얻은 질긴 가죽들을 겹쳐 덧댄 갑옷 조각. 오니의 살점처럼 단단히 달라붙어 방호를 제공한다.",loreEn:"Armor fragments pieced together from tough demon hide. It acts like a secondary, resilient skin.",apply:a=>{a.dmgReduction=Math.min(.8,a.dmgReduction+.12),a.maxHpMul*=1.08}},{id:"zishou_jinyin",name:"등나무꽃 신사가마",nameEn:"Shrine Palanquin",hanja:"神輿",desc:"골드 +35%, 경험치 +15%",descEn:"Gold +35%, XP +15%",lore:"등나무꽃 신사를 모시는 영험한 의례용 가마. 축제의 북소리가 전장의 마장을 물리치고 대원들에게 자비와 수련의 축복을 싣는다.",loreEn:"A sacred shrine palanquin used in ceremonies. Its music dispels evil, granting coins and wisdom to slayers.",apply:a=>{a.goldMul*=1.35,a.xpMul*=1.15}},{id:"yin_yin",name:"우부야시키의 은인",nameEn:"Ubuyashiki Crest",hanja:"産屋敷印",desc:"골드 +25%, 최대 체력 +8%",descEn:"Gold +25%, Max HP +8%",lore:"등나무꽃 문양이 음각으로 조각된 은빛 결속의 인장. 가문의 가호와 영애가 대원들의 가슴속에 끝없는 생명력을 메운다.",loreEn:"A silver crest engraved with the wisteria mark. It instills honor and resilience in those who carry it.",apply:a=>{a.goldMul*=1.25,a.maxHpMul*=1.08}},{id:"jiuzhang_suanshu",name:"무잔의 피병",nameEn:"Blood of Muzan",hanja:"無惨血",desc:"픽업 반경 +30%, 경험치 +15%",descEn:"Pickup radius +30%, XP +15%",lore:"키부츠지 무잔의 저주받은 피가 극미량 든 시약병. 육체의 모든 감각과 오감을 폭발적으로 열어 자력과 흡수력을 넓힌다.",loreEn:"A vial holding a drop of Muzan's blood. It expands the senses, dramatically increasing magnet and XP intake.",apply:a=>{a.pickupMul*=1.3,a.xpMul*=1.15}},{id:"sima_fa",name:"수련용 목도",nameEn:"Training Bokken",hanja:"木刀",desc:"광역 +12%, 최대 체력 +10%",descEn:"Area +12%, Max HP +10%",lore:"사콘지의 폭포 수련장 등에서 끊임없이 휘두르던 무거운 참나무 목도. 몸에 각인된 단련의 궤적이 칼날을 한층 두껍게 뿜어낸다.",loreEn:"A heavy oak sword used in rigorous training. The callused hands it leaves produce massive strike arcs.",apply:a=>{a.areaMul*=1.12,a.maxHpMul*=1.1}},{id:"bingfa_chaolu",name:"귀살대 임무일지",nameEn:"Slayer Chronicles",hanja:"任務日誌",desc:"경험치 +20%, 광역 +10%",descEn:"XP +20%, Area +10%",lore:"임무를 거쳐 간 수많은 대원들의 전투 경험과 혈귀의 기믹이 기록된 책자. 선배들의 피맺힌 조언은 실전을 거칠 때 큰 격을 가르친다.",loreEn:"Chronicles logging combat details against various demons. The notes left by fallen elders teach valuable combat insight.",apply:a=>{a.xpMul*=1.2,a.areaMul*=1.1}},{id:"baiyu_pei",name:"액막이 가면",nameEn:"Ward Mask",hanja:"厄除面",desc:"체력 재생 +1/s, 이동속도 +8%",descEn:"HP regen +1/s, Move speed +8%",lore:"사콘지가 제자들의 액운을 막기 위해 깎아 만든 여우 모양 목가면. 재앙을 비껴가고 착용자의 상처를 부드럽게 감싸 치료한다.",loreEn:"A hand-carved fox mask given by Sakonji to ward off misfortune. It heals wounds and lightens the steps.",apply:a=>{a.hpRegen+=1,a.speedMul*=1.08}},{id:"shuanghuan_pei",name:"네즈코의 재갈",nameEn:"Nezuko's Bamboo Gag",hanja:"竹筒",desc:"쿨다운 -12%, 사거리·투사체 속도 +10%",descEn:"Cooldown -12%, Range & projectile speed +10%",lore:"네즈코가 입에 물고 있는 곧은 대나무 재갈. 인간을 공격하지 않고 이성을 유지하겠다는 강력한 절제와 다짐의 물건.",loreEn:"The bamboo gag Nezuko wears in her mouth. It stands as a symbol of restraint, calming thoughts and cooling skills.",apply:a=>{a.cooldownMul*=.88,a.rangeMul*=1.1}}],mo={};for(const a of Ga)mo[a.id]=a;function Wf(a){return wt()==="en"?a.nameEn:a.name}function Xf(a){return wt()==="en"?a.descEn:a.desc}function Cy(a){return wt()==="en"?a.loreEn:a.lore}function Ry(a){return Ga.filter(t=>a.masterworks.includes(t.id))}function Py(a,t){return t.masterworks.includes(a)}function dd(a,t,e){const i=Ga.filter(n=>!t.includes(n.id));for(let n=i.length-1;n>0;n--){const s=Math.floor(a()*(n+1)),r=i[n];i[n]=i[s],i[s]=r}return i.slice(0,Math.max(0,e))}const Ly=8,Fy=.5,Dy=6,Iy=.5,Uy=.16,ky=.8,Ny=3.8,zy=.24,Oy=.26,fd={KeyW:{x:0,z:-1},ArrowUp:{x:0,z:-1},KeyS:{x:0,z:1},ArrowDown:{x:0,z:1},KeyA:{x:-1,z:0},ArrowLeft:{x:-1,z:0},KeyD:{x:1,z:0},ArrowRight:{x:1,z:0}},By=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"];class Hy{x=0;z=0;hp;maxHp;stats;hero;meta=null;relicIds=[];masterworkIds=[];curPassives={};buffAttackT=0;buffSpeedT=0;buffMusouT=0;faceX=0;faceZ=1;invuln=0;musouInvuln=!1;flash=0;hurtT=0;hurtFlash(){this.hurtT=.32}dir=0;frame=0;animTime=0;moving=!1;vx=0;vz=0;dashT=0;dashCd=0;ddx=0;ddz=1;time=0;lastTapCode="";lastTapAt=-1;sqSX=1;sqSY=1;justDashed=!1;dashDirX=0;dashDirZ=1;knbX=0;knbZ=0;driftCharge=0;driftSteerX=0;driftSteerZ=1;boostT=0;boostMul=1;boostDirX=0;boostDirZ=1;boostTier=0;justSkid=!1;justBoost=!1;nudge(t,e,i){this.knbX+=t*i,this.knbZ+=e*i}get dashing(){return this.dashT>0}get boosting(){return this.boostT>0}get velX(){return this.vx}get velZ(){return this.vz}get speedFrac(){return Math.hypot(this.vx,this.vz)/Math.max(.01,this.baseSpeed*this.stats.speedMul)}baseSpeed;baseHp;blockPx;quad;atlas;uv={u:0,v:0};constructor(t,e,i){this.atlas=t,this.hero=e,this.quad=new Nf(t.sgrade,i),this.quad.setPlayer(!0),this.quad.setFootDepth(!0),this.baseSpeed=e.baseSpeed,this.baseHp=e.baseHp,this.stats={damageMul:1,cooldownMul:1,speedMul:1,maxHpMul:1,pickupMul:1,xpMul:1,dmgReduction:0,goldMul:1,hpRegen:0,projectileBonus:0,rangeMul:1,areaMul:1,dmgTakenMul:1},this.blockPx=e.charIndex*4*Nn,this.resetStats({}),this.maxHp=this.baseHp*this.stats.maxHpMul,this.hp=this.maxHp}get mesh(){return this.quad.mesh}get radius(){return Iy}setRimScale(t){this.quad.setRimScale(t)}setHero(t){this.hero=t,this.baseSpeed=t.baseSpeed,this.baseHp=t.baseHp,this.blockPx=t.charIndex*4*Nn}setMeta(t){this.meta=t}resetStats(t){this.curPassives=t;const e=this.stats,i=this.hero;e.damageMul=i.damageMul,e.cooldownMul=i.cooldownMul,e.speedMul=i.speedMul,e.maxHpMul=i.maxHpMul,e.pickupMul=1,e.xpMul=1,e.dmgReduction=0,e.goldMul=1,e.hpRegen=0,e.projectileBonus=0,e.rangeMul=i.rangeMul,e.areaMul=1,e.dmgTakenMul=i.dmgTakenMul;for(const n in t){const s=Hi[n];s&&s.apply(e,t[n])}this.meta&&(e.damageMul*=this.meta.damageMul,e.maxHpMul*=this.meta.maxHpMul,e.speedMul*=this.meta.speedMul,e.pickupMul*=this.meta.pickupMul,e.cooldownMul*=this.meta.cooldownMul);for(const n of this.relicIds){const s=vc[n];s&&s.apply(e)}for(const n of this.masterworkIds){const s=mo[n];s&&s.apply(e)}this.buffAttackT>0&&(e.damageMul*=1.3),this.buffSpeedT>0&&(e.speedMul*=1.25)}addRelic(t){this.relicIds.includes(t)||(this.relicIds.push(t),this.recomputeStats(this.curPassives))}get relicCount(){return this.relicIds.length}addMasterwork(t){this.masterworkIds.includes(t)||(this.masterworkIds.push(t),this.recomputeStats(this.curPassives))}applyBuff(t,e){t==="attack"?this.buffAttackT=Math.max(this.buffAttackT,e):t==="speed"?this.buffSpeedT=Math.max(this.buffSpeedT,e):this.buffMusouT=Math.max(this.buffMusouT,e),this.recomputeStats(this.curPassives)}get musouBuffed(){return this.buffMusouT>0}get shrineBuffActive(){return this.buffAttackT>0||this.buffSpeedT>0||this.buffMusouT>0}get frameUv(){return this.uv}recomputeStats(t){const e=this.maxHp>0?this.hp/this.maxHp:1;this.resetStats(t),this.maxHp=this.baseHp*this.stats.maxHpMul,this.hp=this.maxHp*e}reset(t){this.x=0,this.z=0,this.relicIds=[],this.masterworkIds=[],this.buffAttackT=0,this.buffSpeedT=0,this.buffMusouT=0,this.resetStats(t),this.maxHp=this.baseHp*this.stats.maxHpMul,this.hp=this.maxHp,this.invuln=0,this.musouInvuln=!1,this.flash=0,this.faceX=0,this.faceZ=1,this.vx=0,this.vz=0,this.dashT=0,this.dashCd=0,this.driftCharge=0,this.boostT=0,this.boostTier=0,this.justSkid=!1,this.justBoost=!1,this.sqSX=1,this.sqSY=1,this.justDashed=!1}update(t,e){this.time+=t;const i=e.move.x,n=e.move.z,s=Math.hypot(i,n),r=s>0,o=r?i/s:0,l=r?n/s:0;let h=!1,c=r?o:this.faceX,u=r?l:this.faceZ;(e.consumePressed("ShiftLeft")||e.consumePressed("ShiftRight"))&&(h=!0);for(const A of By)e.consumePressed(A)&&(this.lastTapCode===A&&this.time-this.lastTapAt<Oy&&(h=!0,c=fd[A].x,u=fd[A].z),this.lastTapCode=A,this.lastTapAt=this.time);if(this.dashCd>0&&(this.dashCd-=t),h&&this.dashCd<=0&&this.dashT<=0){const A=Math.hypot(c,u)||1;this.ddx=c/A,this.ddz=u/A,this.dashT=Uy,this.dashCd=ky,this.invuln=Math.max(this.invuln,zy),this.faceX=this.ddx,this.faceZ=this.ddz,this.dashDirX=this.ddx,this.dashDirZ=this.ddz,this.justDashed=!0}const d=this.baseSpeed*this.stats.speedMul;if(this.dashT>0){r&&o*this.ddx+l*this.ddz<.766&&(this.driftCharge+=t,this.driftSteerX=o,this.driftSteerZ=l,this.justSkid=!0),this.dashT-=t;const A=d*Ny;if(this.vx=this.ddx*A,this.vz=this.ddz*A,this.dashT<=0&&this.driftCharge>=.07){const y=this.driftCharge>=.12;this.boostT=y?.6:.4,this.boostMul=y?1.4:1.3,this.boostDirX=this.driftSteerX,this.boostDirZ=this.driftSteerZ,this.boostTier=y?2:1,this.justBoost=!0}this.dashT<=0&&(this.driftCharge=0)}else if(this.boostT>0){this.boostT-=t;const A=d*this.boostMul;this.vx=this.boostDirX*A,this.vz=this.boostDirZ*A,this.faceX=this.boostDirX,this.faceZ=this.boostDirZ}else if(r){this.faceX=o,this.faceZ=l;const A=1-Math.exp(-20*t);this.vx+=(o*d-this.vx)*A,this.vz+=(l*d-this.vz)*A}else{const A=Math.exp(-13*t);this.vx*=A,this.vz*=A,Math.abs(this.vx)<.02&&(this.vx=0),Math.abs(this.vz)<.02&&(this.vz=0)}this.x+=this.vx*t,this.z+=this.vz*t,this.x+=this.knbX*t,this.z+=this.knbZ*t;const f=Math.exp(-8*t);this.knbX*=f,this.knbZ*=f;const m=Math.hypot(this.vx,this.vz);this.moving=m>.05,this.moving?(this.dir=js(this.vx,this.vz,this.dir),this.animTime+=t,this.frame=(this.animTime*Ly|0)%4):(this.dir=js(this.faceX,this.faceZ,this.dir),this.frame=0),this.invuln>0&&(this.invuln-=t),this.flash>0&&(this.flash-=t*Dy,this.flash<0&&(this.flash=0)),this.hurtT>0&&(this.hurtT-=t);let v=1,g=1,p=1;if(this.hurtT>0){const A=this.hurtT/.32;g=1-.62*A,p=1-.62*A}if(this.invuln>0){const A=.6+.4*(Math.sin(this.time*34)>0?1:0);v*=A,g*=A,p*=A}if(this.quad.setTint(v,g,p),this.buffAttackT>0||this.buffSpeedT>0||this.buffMusouT>0){const A=this.buffAttackT>0,y=this.buffSpeedT>0;this.buffAttackT>0&&(this.buffAttackT-=t),this.buffSpeedT>0&&(this.buffSpeedT-=t),this.buffMusouT>0&&(this.buffMusouT-=t),(A&&this.buffAttackT<=0||y&&this.buffSpeedT<=0)&&this.recomputeStats(this.curPassives)}this.stats.hpRegen>0&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+this.stats.hpRegen*t));let w=1;this.dashT>0?w=1.28:m>d*.55&&(w=1.07);const T=1/Math.sqrt(w),M=Math.min(1,t*16);this.sqSX+=(T-this.sqSX)*M,this.sqSY+=(w-this.sqSY)*M,this.quad.setSquash(this.sqSX,this.sqSY),fc(this.atlas.sgrade,this.blockPx,0,this.dir,this.frame,this.uv),this.quad.setUv(this.uv.u,this.uv.v),this.quad.setFlash(this.flash),this.quad.setPosition(this.x,0,this.z)}setPosition(t,e){this.x=t,this.z=e,this.quad.setPosition(t,0,e)}takeDamage(t){if(this.musouInvuln||this.invuln>0)return!1;const e=t*this.stats.dmgTakenMul*(1-this.stats.dmgReduction);return this.hp-=e,this.hp<0&&(this.hp=0),this.invuln=Fy,this.flash=1,!0}heal(t){this.hp=Math.min(this.maxHp,this.hp+t)}revive(t,e){this.hp=this.maxHp*t,this.invuln=e,this.flash=1}get dead(){return this.hp<=0}}class Li{mesh;matrices;fade;fadeAttr;material;cursor=0;constructor(t,e,i,n=5,s=1,r=!1){const o=new Xa().load(`/oni-survivor/assets/projectiles/${e}.png`);o.colorSpace=Se,o.magFilter=oe,o.minFilter=oe,o.generateMipmaps=!1;const l=new Qt(1,1,r?12:1,1);l.rotateX(-Math.PI/2),this.fade=new Float32Array(i),this.fadeAttr=new Wt(this.fade,1),this.fadeAttr.setUsage(Tt),l.setAttribute("aFade",this.fadeAttr),this.material=new Bt({uniforms:{uMap:{value:o},uTime:{value:0},uIntensity:{value:s}},vertexShader:`
        attribute float aFade;
        uniform float uTime;
        varying vec2 vUv;
        varying float vFade;
        void main() {
          vUv = uv;
          vFade = aFade;
          vec3 pos = position;
          ${r?"pos.y += sin(pos.x * 7.0 + uTime * 13.0) * 0.13 + sin(pos.z * 5.0 - uTime * 9.0) * 0.05;":""}
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(pos, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        uniform float uTime;
        uniform float uIntensity;
        varying vec2 vUv;
        varying float vFade;
        void main() {
          vec4 texel = texture2D(uMap, vUv);
          if (texel.a < 0.04) discard;
          float inkPulse = 0.97 + 0.03 * sin(uTime * 5.0 + vUv.x * 5.0);
          // EffectComposer의 OutputPass가 최종 변환하므로 원화 sRGB를 먼저 선형화한다.
          vec3 col = pow(texel.rgb, vec3(2.2)) * inkPulse * uIntensity;
          gl_FragColor = vec4(col, texel.a * vFade);
        }
      `,transparent:!0,blending:sn,depthWrite:!1,depthTest:!0}),this.mesh=new ye(l,this.material,i),this.mesh.instanceMatrix.setUsage(Tt),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=n,this.matrices=this.mesh.instanceMatrix.array,t.add(this.mesh)}begin(t){this.cursor=0,this.material.uniforms.uTime.value=t}push(t,e,i,n,s,r,o){const l=this.cursor++,h=l*16,c=Math.cos(n),u=Math.sin(n);this.matrices[h]=c*s,this.matrices[h+1]=0,this.matrices[h+2]=-u*s,this.matrices[h+3]=0,this.matrices[h+4]=0,this.matrices[h+5]=1,this.matrices[h+6]=0,this.matrices[h+7]=0,this.matrices[h+8]=u*r,this.matrices[h+9]=0,this.matrices[h+10]=c*r,this.matrices[h+11]=0,this.matrices[h+12]=t,this.matrices[h+13]=e,this.matrices[h+14]=i,this.matrices[h+15]=1,this.fade[l]=o}end(){this.mesh.count=this.cursor,this.mesh.instanceMatrix.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}}const $t=256,Bi=0,xc=1,go=2,_c=3,Zs=4,vn=5,Gy=6;class Ia{x=new Float32Array($t);z=new Float32Array($t);vx=new Float32Array($t);vz=new Float32Array($t);life=new Float32Array($t);damage=new Float32Array($t);radius=new Float32Array($t);homing=new Uint8Array($t);turn=new Float32Array($t);kind=new Uint8Array($t);cr=new Float32Array($t);cg=new Float32Array($t);cb=new Float32Array($t);size=new Float32Array($t);trailT=new Float32Array($t);alive=new Uint8Array($t);free=new Int32Array($t);freeTop=0;mesh;matArr;colArr;kindArr;colAttr;kindAttr;spriteBatches;dots;dotArr;static AIM_CAP=8;aimLines;aimMatArr;aimChargeArr;aimChargeAttr;aimN=0;constructor(t){for(let l=0;l<$t;l++)this.free[l]=$t-1-l;this.freeTop=$t;const e=new Qt(1,1,1,1);e.rotateX(-Math.PI/2),this.colArr=new Float32Array($t*3),this.kindArr=new Float32Array($t),this.colAttr=new Wt(this.colArr,3),this.kindAttr=new Wt(this.kindArr,1),this.colAttr.setUsage(Tt),e.setAttribute("aColor",this.colAttr),e.setAttribute("aKind",this.kindAttr);const i=new Bt({uniforms:{uTime:{value:0}},vertexShader:`
        attribute vec3 aColor;
        attribute float aKind;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vKind;
        void main() {
          vUv = uv;
          vColor = aColor;
          vKind = aKind;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vKind;
        void main() {
          vec2 p = vUv - 0.5;
          if (vKind < 0.5) {
            // 적 궁수 화살(#18.2): 몸통+머리 + 중심선 마젠타 핫코어. 야간 지면서 1순위로 읽히게 강하게 태움.
            float across = abs(p.y) * 2.0;
            float body = smoothstep(1.0, 0.4, across);
            float head = smoothstep(0.2, 1.0, vUv.x);
            float b = body * (0.4 + head);
            if (b <= 0.01) discard;
            float core = smoothstep(0.45, 0.0, across) * head;
            vec3 col = mix(vColor, vec3(2.7, 1.3, 2.5), core * 0.65);
            gl_FragColor = vec4(col * b * 0.62, b * 0.5);
          } else {
            float r = length(p) * 2.0;
            float pulse = 0.8 + 0.2 * sin(uTime * 12.0);
            float b = smoothstep(1.0, 0.0, r) * pulse;
            if (b <= 0.01) discard;
            gl_FragColor = vec4(vColor * b * 0.42, b * 0.34);
          }
        }
      `,transparent:!0,blending:We,depthWrite:!1,depthTest:!0});this.mesh=new ye(e,i,$t),this.mesh.instanceMatrix.setUsage(Tt),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=4,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh);const n=new Qt(1,1);n.rotateX(-Math.PI/2);const s=new Bt({uniforms:{uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          float r = length(vUv - 0.5) * 2.0;
          if (r > 1.0) discard;
          float ring = smoothstep(1.0, 0.55, r) * smoothstep(0.15, 0.5, r); // 링
          float core = smoothstep(0.4, 0.0, r) * 0.6;
          float pulse = 0.75 + 0.25 * sin(uTime * 9.0);
          float b = (ring + core) * pulse;
          gl_FragColor = vec4(vec3(2.2, 0.15, 0.12) * b, b * 0.7);
        }
      `,transparent:!0,blending:We,depthWrite:!1,depthTest:!0});this.dots=new ye(n,s,$t),this.dots.instanceMatrix.setUsage(Tt),this.dots.frustumCulled=!1,this.dots.count=0,this.dots.renderOrder=1,this.dotArr=this.dots.instanceMatrix.array,t.add(this.dots);const r=new Qt(1,1);r.rotateX(-Math.PI/2),this.aimChargeArr=new Float32Array(Ia.AIM_CAP),this.aimChargeAttr=new Wt(this.aimChargeArr,1),this.aimChargeAttr.setUsage(Tt),r.setAttribute("aCharge",this.aimChargeAttr);const o=new Bt({vertexShader:`
        attribute float aCharge;
        varying vec2 vUv;
        varying float vCharge;
        void main() { vUv = uv; vCharge = aCharge; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }
      `,fragmentShader:`
        varying vec2 vUv;
        varying float vCharge;
        void main() {
          // 가로(vUv.x)=사수→플레이어, 세로(vUv.y)=폭. 중심선 얇게 + 양끝 페이드(플레이어 수렴 블롭 방지).
          float across = abs(vUv.y - 0.5) * 2.0;
          float line = smoothstep(1.0, 0.0, across);
          float ends = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.86, vUv.x);
          float a = line * ends * vCharge * 0.3; // 알파 상한 0.3 (시각 소음 억제)
          if (a <= 0.004) discard;
          gl_FragColor = vec4(vec3(1.9, 0.35, 2.2) * a * 1.3, a); // 마젠타
        }
      `,transparent:!0,blending:We,depthWrite:!1,depthTest:!0});this.aimLines=new ye(r,o,Ia.AIM_CAP),this.aimLines.instanceMatrix.setUsage(Tt),this.aimLines.frustumCulled=!1,this.aimLines.count=0,this.aimLines.renderOrder=2,this.aimMatArr=this.aimLines.instanceMatrix.array,t.add(this.aimLines),this.spriteBatches=[new Li(t,"enemy-arrow",$t,5,.92),new Li(t,"enemy-orb",$t,5,.92),new Li(t,"boss-fireball",$t,5,.92),new Li(t,"boss-poison-orb",$t,5,.92),new Li(t,"boss-lightning-spear",$t,5,.92),new Li(t,"boss-heavy-shot",$t,5,.92)]}get object(){return this.mesh}get activeCount(){return $t-this.freeTop}get kindCounts(){const t=new Array(Gy).fill(0);for(let e=0;e<$t;e++)this.alive[e]&&t[this.kind[e]]++;return t}reset(){this.alive.fill(0);for(let t=0;t<$t;t++)this.free[t]=$t-1-t;this.freeTop=$t,this.aimN=0,this.aimLines.count=0}aimLine(t,e,i,n,s){if(this.aimN>=Ia.AIM_CAP)return;const r=i-t,o=n-e,l=Math.hypot(r,o)||.001,h=Math.atan2(-o,r),c=Math.cos(h),u=Math.sin(h),d=.42,f=this.aimN*16;this.aimMatArr[f]=c*l,this.aimMatArr[f+2]=-u*l,this.aimMatArr[f+5]=1,this.aimMatArr[f+8]=u*d,this.aimMatArr[f+10]=c*d,this.aimMatArr[f+12]=(t+i)*.5,this.aimMatArr[f+13]=.06,this.aimMatArr[f+14]=(e+n)*.5,this.aimMatArr[f+15]=1,this.aimChargeArr[this.aimN]=s,this.aimN++}spawn(t,e,i,n,s,r,o,l){if(this.freeTop===0)return;const h=this.free[--this.freeTop];this.x[h]=t,this.z[h]=e,this.vx[h]=i*s,this.vz[h]=n*s;const c=Math.max(Bi,Math.min(vn,l|0));switch(this.life[h]=o?4.5:c===vn?3.8:3,this.damage[h]=r,this.homing[h]=o?1:0,this.kind[h]=c,this.trailT[h]=0,c){case xc:this.cr[h]=1.55,this.cg[h]=.5,this.cb[h]=2.25,this.size[h]=1.26,this.radius[h]=.4,this.turn[h]=3;break;case go:this.cr[h]=2.5,this.cg[h]=.65,this.cb[h]=.18,this.size[h]=1.35,this.radius[h]=.48,this.turn[h]=0;break;case _c:this.cr[h]=.6,this.cg[h]=2.05,this.cb[h]=1,this.size[h]=1.18,this.radius[h]=.45,this.turn[h]=1.35;break;case Zs:this.cr[h]=1.9,this.cg[h]=.55,this.cb[h]=2.55,this.size[h]=1.5,this.radius[h]=.38,this.turn[h]=0;break;case vn:this.cr[h]=2.65,this.cg[h]=.95,this.cb[h]=.22,this.size[h]=1.7,this.radius[h]=.65,this.turn[h]=0;break;default:this.cr[h]=2.5,this.cg[h]=.4,this.cb[h]=1.7,this.size[h]=1.56,this.radius[h]=.34,this.turn[h]=0;break}this.alive[h]=1}update(t,e,i,n,s,r,o,l=null){const h=n;for(let c=0;c<$t;c++){if(this.alive[c]===0)continue;if(this.homing[c]){const m=e-this.x[c],v=i-this.z[c],g=Math.hypot(m,v)||1,p=Math.hypot(this.vx[c],this.vz[c]),w=Math.min(1,this.turn[c]*t);this.vx[c]+=(m/g*p-this.vx[c])*w,this.vz[c]+=(v/g*p-this.vz[c])*w}if(this.x[c]+=this.vx[c]*t,this.z[c]+=this.vz[c]*t,l&&l(this.x[c],this.z[c],this.radius[c])){r.projectileImpact(this.x[c],this.z[c],this.cr[c],this.cg[c],this.cb[c],this.kind[c]===Bi?0:3),this.alive[c]=0,this.free[this.freeTop++]=c;continue}this.trailT[c]-=t,this.trailT[c]<=0&&(r.projectileTrail(this.x[c],this.z[c],this.vx[c],this.vz[c],this.cr[c],this.cg[c],this.cb[c],this.kind[c]===Bi?0:3),this.trailT[c]=this.kind[c]===Bi?.09:.055);const u=e-this.x[c],d=i-this.z[c],f=this.radius[c]+h;if(u*u+d*d<=f*f){if(r.projectileImpact(this.x[c],this.z[c],this.cr[c],this.cg[c],this.cb[c],this.kind[c]===Bi?0:3),this.kind[c]!==Bi){const v=this.kind[c]===vn?2.1:this.kind[c]===go?1.65:1.25;o.spawnRing(this.x[c],this.z[c],v,this.cr[c],this.cg[c],this.cb[c],.24)}r.burst(this.x[c],this.z[c],this.cr[c],this.cg[c],this.cb[c],9,5.5);const m=Math.hypot(this.vx[c],this.vz[c])||1;s(this.damage[c],this.vx[c]/m,this.vz[c]/m),this.alive[c]=0,this.free[this.freeTop++]=c;continue}this.life[c]-=t,this.life[c]<=0&&(this.alive[c]=0,this.free[this.freeTop++]=c)}}render(t){this.mesh.material.uniforms.uTime.value=t,this.dots.material.uniforms.uTime.value=t;for(const i of this.spriteBatches)i.begin(t);let e=0;for(let i=0;i<$t;i++){if(this.alive[i]===0)continue;const n=e*16,s=Math.atan2(-this.vz[i],this.vx[i]),r=Math.cos(s),o=Math.sin(s),l=this.kind[i]===Bi||this.kind[i]===Zs||this.kind[i]===vn,h=l?this.size[i]*1.6:this.size[i],c=l?this.size[i]*.5:this.size[i];this.matArr[n]=r*h,this.matArr[n+2]=-o*h,this.matArr[n+5]=1,this.matArr[n+8]=o*c,this.matArr[n+10]=r*c,this.matArr[n+12]=this.x[i],this.matArr[n+13]=1,this.matArr[n+14]=this.z[i],this.matArr[n+15]=1;const u=e*3;this.colArr[u]=this.cr[i],this.colArr[u+1]=this.cg[i],this.colArr[u+2]=this.cb[i],this.kindArr[e]=this.kind[i];let d=this.size[i]*1.4,f=d;this.kind[i]===Bi?(d=this.size[i]*1.8,f=this.size[i]*.58):this.kind[i]===Zs?(d=this.size[i]*1.9,f=this.size[i]*.68):this.kind[i]===vn&&(d=this.size[i]*1.65,f=this.size[i]*.82),this.spriteBatches[this.kind[i]].push(this.x[i],1.055,this.z[i],s,d,f,1);const m=e*16,v=(this.radius[i]+.68)*2;this.dotArr[m]=v,this.dotArr[m+5]=1,this.dotArr[m+10]=v,this.dotArr[m+12]=this.x[i],this.dotArr[m+13]=.05,this.dotArr[m+14]=this.z[i],this.dotArr[m+15]=1,e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.kindAttr.needsUpdate=!0,this.dots.count=e,this.dots.instanceMatrix.needsUpdate=!0;for(const i of this.spriteBatches)i.end();this.aimLines.count=this.aimN,this.aimLines.instanceMatrix.needsUpdate=!0,this.aimChargeAttr.needsUpdate=!0,this.aimN=0}}class Vy{s;constructor(t=Math.random()*4294967295>>>0){this.s=t>>>0}next(){this.s=this.s+1831565813|0;let t=Math.imul(this.s^this.s>>>15,1|this.s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t){return this.next()*t|0}}const ce=new Vy,Mt=1024,Tl=8,pd=7,Wy=7,md=8,gd=3,Xy=0,Nh=1,qy=2,Jn=3,vo=4,qn=0,Ta=1,Hr=2,Bs=3,zh=0,qf=1,Ji=2,Xs=3;class $y{x=new Float32Array(Mt);z=new Float32Array(Mt);hp=new Float32Array(Mt);maxHp=new Float32Array(Mt);speed=new Float32Array(Mt);radius=new Float32Array(Mt);damage=new Float32Array(Mt);gemValue=new Float32Array(Mt);scale=new Float32Array(Mt);sheetId=new Uint8Array(Mt);blockPx=new Float32Array(Mt);blockPy=new Float32Array(Mt);dir=new Uint8Array(Mt);frame=new Uint8Array(Mt);animTime=new Float32Array(Mt);flash=new Float32Array(Mt);hitPunch=new Float32Array(Mt);alive=new Uint8Array(Mt);tr=new Float32Array(Mt);tg=new Float32Array(Mt);tb=new Float32Array(Mt);kbx=new Float32Array(Mt);kbz=new Float32Array(Mt);kbResist=new Float32Array(Mt);ranged=new Uint8Array(Mt);range=new Float32Array(Mt);atkCd=new Float32Array(Mt);atkTimer=new Float32Array(Mt);projDamage=new Float32Array(Mt);projSpeed=new Float32Array(Mt);projHoming=new Uint8Array(Mt);behavior=new Uint8Array(Mt);patternState=new Uint8Array(Mt);patternT=new Float32Array(Mt);aimX=new Float32Array(Mt);aimZ=new Float32Array(Mt);shieldHits=new Uint8Array(Mt);elite=new Uint8Array(Mt);boss=new Uint8Array(Mt);groggy=new Uint8Array(Mt);controlled=new Uint8Array(Mt);stun=new Float32Array(Mt);flee=new Uint8Array(Mt);cart=new Uint8Array(Mt);labels=new Array(Mt).fill(null);chargeStarts=0;volleyStarts=0;casterStarts=0;specials=[];free=new Int32Array(Mt);freeTop=0;aliveCount=0;cand=[];uv={u:0,v:0};nav={x:0,z:0};moved={x:0,z:0};constructor(){for(let t=0;t<Mt;t++)this.free[t]=Mt-1-t;this.freeTop=Mt}spawn(t,e,i,n,s,r,o,l,h,c,u){if(this.freeTop===0)return-1;const d=this.free[--this.freeTop];return this.x[d]=t,this.z[d]=e,this.hp[d]=i,this.maxHp[d]=i,this.speed[d]=n,this.radius[d]=s,this.damage[d]=r,this.gemValue[d]=o,this.scale[d]=pc*l,this.sheetId[d]=h,this.blockPx[d]=c,this.blockPy[d]=u,this.dir[d]=0,this.frame[d]=0,this.animTime[d]=Math.random()*.5,this.flash[d]=0,this.hitPunch[d]=0,this.tr[d]=1,this.tg[d]=1,this.tb[d]=1,this.kbx[d]=0,this.kbz[d]=0,this.kbResist[d]=0,this.ranged[d]=0,this.atkTimer[d]=.5+Math.random(),this.behavior[d]=Xy,this.patternState[d]=qn,this.patternT[d]=.8+Math.random()*1.8,this.aimX[d]=0,this.aimZ[d]=1,this.shieldHits[d]=0,this.elite[d]=0,this.boss[d]=0,this.groggy[d]=0,this.controlled[d]=0,this.stun[d]=0,this.flee[d]=0,this.cart[d]=0,this.labels[d]=null,this.alive[d]=1,this.aliveCount++,d}markSpecial(t){this.specials.push(t)}kill(t){this.alive[t]!==0&&(this.alive[t]=0,this.labels[t]=null,this.free[this.freeTop++]=t,this.aliveCount--)}reset(){this.alive.fill(0);for(let t=0;t<Mt;t++)this.free[t]=Mt-1-t,this.labels[t]=null;this.freeTop=Mt,this.aliveCount=0,this.specials.length=0,this.chargeStarts=0,this.volleyStarts=0,this.casterStarts=0}damageAt(t,e){return this.behavior[t]===vo&&this.patternState[t]===qn&&(e*=.55,this.shieldHits[t]++,this.shieldHits[t]>=3&&(this.shieldHits[t]=0,this.patternState[t]=Bs,this.patternT[t]=2.4)),this.hp[t]-=e,this.flash[t]=1,this.hitPunch[t]=1,this.hp[t]<=0}push(t,e,i,n){if(this.controlled[t]===1)return;const s=n*(1-this.kbResist[t]);s<=0||(this.kbx[t]+=e*s,this.kbz[t]+=i*s,s>4&&this.stun[t]<.14&&(this.stun[t]=.14))}randomAlive(){if(this.aliveCount===0)return-1;let t=ce.next()*Mt|0;for(let e=0;e<Mt;e++){if(this.alive[t]===1&&this.controlled[t]===0)return t;t=(t+1)%Mt}return-1}countInsideWalls(t){let e=0;for(let i=0;i<Mt;i++)this.alive[i]&&t.circleBlocked(this.x[i],this.z[i],this.radius[i]*.9)&&e++;return e}insertAll(t){const e=this.alive;for(let i=0;i<Mt;i++)e[i]&&t.insert(i,this.x[i],this.z[i])}update(t,e,i,n,s,r,o){const l=this.cand;let h=0;for(let c=0;c<Mt;c++)this.alive[c]&&(this.patternState[c]===Ta||this.patternState[c]===Hr)&&h++;for(let c=0;c<Mt;c++){if(this.alive[c]===0)continue;this.flash[c]>0&&(this.flash[c]-=t*Wy,this.flash[c]<0&&(this.flash[c]=0)),this.hitPunch[c]>0&&(this.hitPunch[c]-=t*9,this.hitPunch[c]<0&&(this.hitPunch[c]=0));const u=this.x[c],d=this.z[c],f=e-u,m=i-d,v=Math.hypot(f,m)||1,g=f/v,p=m/v;o.flowDirection(u,d,e,i,this.nav);let w=this.nav.x,T=this.nav.z;if(this.controlled[c]===1){this.dir[c]=js(g,p,this.dir[c]),this.animTime[c]+=t,this.frame[c]=(this.animTime[c]*Tl|0)%4;continue}if(this.stun[c]>0){this.stun[c]-=t,o.resolveMovement(u,d,u+this.kbx[c]*t,d+this.kbz[c]*t,this.radius[c],this.moved),this.x[c]=this.moved.x,this.z[c]=this.moved.z;const V=Math.max(0,1-md*t);this.kbx[c]*=V,this.kbz[c]*=V;continue}const M=this.speed[c];let A=w*M,y=T*M;if(this.flee[c]===1){o.resolveMovement(u,d,u-w*M*t,d-T*M*t,this.radius[c],this.moved),this.x[c]=this.moved.x,this.z[c]=this.moved.z,this.dir[c]=js(-w,-T,this.dir[c]),this.animTime[c]+=t,this.frame[c]=(this.animTime[c]*Tl|0)%4;continue}const E=this.behavior[c],x=this.patternState[c];if(E===Nh&&(this.patternT[c]-=t,x===qn?this.patternT[c]<=0&&v>=4&&v<=12&&h<gd&&(this.patternState[c]=Ta,this.patternT[c]=.68,this.aimX[c]=g,this.aimZ[c]=p,r.spawnRing(u,d,2.8,2.5,.35,.18,.55),r.spawnThrust(u,d,g,p,8.5,.24,2.5,.28,.14,.68),this.flash[c]=.28,this.chargeStarts++,h++):x===Ta?(A=0,y=0,this.flash[c]=Math.max(this.flash[c],.16),this.patternT[c]<=0&&(this.patternState[c]=Hr,this.patternT[c]=.42)):x===Hr?(A=this.aimX[c]*10.5,y=this.aimZ[c]*10.5,this.patternT[c]<=0&&(this.patternState[c]=Bs,this.patternT[c]=.95)):(A*=.12,y*=.12,this.patternT[c]<=0&&(this.patternState[c]=qn,this.patternT[c]=2.8+ce.next()*1.8))),E===vo&&x===Bs&&(this.patternT[c]-=t,A*=.35,y*=.35,this.patternT[c]<=0&&(this.patternState[c]=qn)),this.ranged[c]===1){const V=this.range[c];if(v<V*.6?(A=-w*M,y=-T*M):v<V&&(A*=.15,y*=.15),x===qn)this.atkTimer[c]-=t,this.atkTimer[c]<=0&&v<=V*1.15&&h<gd&&(this.patternState[c]=Ta,this.patternT[c]=E===Jn?.92:.72,this.aimX[c]=g,this.aimZ[c]=p,E===Jn?(r.spawnRing(u,d,3.4,1.5,.45,2.5,.75),this.casterStarts++):(r.spawnRing(u,d,2.8,1.9,.4,2.3,.55),r.spawnThrust(u,d,g,p,10.5,.14,1.9,.4,2.3,.72),this.volleyStarts++),h++);else if(x===Ta){this.patternT[c]-=t,A*=.05,y*=.05;const k=E===Jn?.92:.72,K=Math.min(1,Math.max(0,1-this.patternT[c]/k));this.flash[c]=Math.max(this.flash[c],.1+K*.5),E!==Jn&&s.aimLine(u,d,e,i,K),this.patternT[c]<=0&&(this.fireFan(c,u,d,s,E===Jn),this.patternState[c]=Bs,this.patternT[c]=E===Jn?.85:.6)}else x===Bs&&(this.patternT[c]-=t,A*=.2,y*=.2,this.patternT[c]<=0&&(this.patternState[c]=qn,this.atkTimer[c]=this.atkCd[c]))}const b=this.radius[c],R=b+.9,P=n.query(u,d,R,l);let D=0,W=0;for(let V=0;V<P;V++){const k=l[V];if(k===c)continue;const K=u-this.x[k],tt=d-this.z[k],at=K*K+tt*tt,ut=b+this.radius[k];if(at>0&&at<ut*ut){const xt=Math.sqrt(at),Yt=(ut-xt)/ut;D+=K/xt*Yt,W+=tt/xt*Yt}}A+=D*pd,y+=W*pd,A+=this.kbx[c],y+=this.kbz[c];const $=Math.max(0,1-md*t);this.kbx[c]*=$,this.kbz[c]*=$;const z=o.resolveMovement(u,d,u+A*t,d+y*t,b,this.moved);this.x[c]=this.moved.x,this.z[c]=this.moved.z,z&&E===Nh&&this.patternState[c]===Hr&&(this.patternState[c]=Bs,this.patternT[c]=.95,r.spawnRing(this.x[c],this.z[c],1.8,2,.45,.18,.25)),this.dir[c]=js(A,y,this.dir[c]),this.animTime[c]+=t,this.frame[c]=(this.animTime[c]*Tl|0)%4}}fireFan(t,e,i,n,s){const r=Math.atan2(this.aimZ[t],this.aimX[t]),o=s?.23:.16,l=this.projSpeed[t]*.88;for(let h=-1;h<=1;h++){const c=r+o*h;n.spawn(e,i,Math.cos(c),Math.sin(c),l,this.projDamage[t],s,s?xc:Bi)}}render(t,e,i,n,s,r){e.begin(),i.begin(),n.begin(),s.begin();const o=this.uv;for(let l=0;l<Mt;l++){if(this.alive[l]===0)continue;const h=this.sheetId[l];let c,u;if(h===qf?(c=t.variants,u=i):h===Ji?(c=t.sgrade,u=n):h===Xs?(c=t.apriority,u=s):(c=t.soldiers,u=e),fc(c,this.blockPx[l],this.blockPy[l],this.dir[l],this.frame[l],o),u.push(this.x[l],this.z[l],this.scale[l],o.u,o.v,this.flash[l],this.tr[l],this.tg[l],this.tb[l]),this.hitPunch[l]>0){const d=this.hitPunch[l],f=this.boss[l]===1;u.setSquash(1+(f?.1:.25)*d,1-(f?.08:.25)*d)}r.push(this.x[l],this.z[l],this.radius[l]*1.5)}e.end(),i.end(),n.end(),s.end()}}const wi={worker:{id:"worker",charIndex:7,hp:6,speed:1.6,radius:.45,damage:6,gemValue:1,worldScale:1},runner:{id:"runner",charIndex:9,hp:4,speed:3.3,radius:.4,damage:5,gemValue:1,worldScale:.95},guard:{id:"guard",charIndex:8,hp:14,speed:1.9,radius:.55,damage:8,gemValue:5,worldScale:1.1},general_spear:{id:"general_spear",charIndex:1,hp:42,speed:1.7,radius:.62,damage:11,gemValue:5,worldScale:1.18},general_blade:{id:"general_blade",charIndex:2,hp:26,speed:2.4,radius:.52,damage:10,gemValue:5,worldScale:1.06},general_bow:{id:"general_bow",charIndex:3,hp:20,speed:1.7,radius:.5,damage:6,gemValue:5,worldScale:1,ranged:!0,range:11,atkCd:2.2,projDamage:8,projSpeed:12},strategist:{id:"strategist",charIndex:4,hp:24,speed:1.4,radius:.5,damage:6,gemValue:5,worldScale:1,ranged:!0,range:13,atkCd:2.8,projDamage:11,projSpeed:7,projHoming:!0}},jy=192,Zy=192,Ky=19,vd=24,Gr=420,El=90,xd=[{id:"yellowturban",ko:"황건적",hanja:"黃巾",en:"Yellow Turbans",banner:[.85,.62,.24],tints:[[1.32,1.06,.5],[1.38,1.12,.56],[1.24,.98,.46]],variantStart:0,variantCount:7},{id:"dongzhuo",ko:"동탁군",hanja:"董卓",en:"Dong Zhuo's Host",banner:[.72,.2,.17],tints:[[1.4,.66,.56],[1.28,.58,.5],[1.46,.74,.64]],variantStart:7,variantCount:7},{id:"yuanshao",ko:"원소군",hanja:"袁紹",en:"Yuan Shao's Host",banner:[.24,.44,.72],tints:[[.66,.84,1.4],[.74,.9,1.32],[.6,.78,1.46]],variantStart:14,variantCount:6},{id:"warlords",ko:"군웅",hanja:"群雄",en:"Warlords",banner:[.5,.54,.6],tints:[[.88,.9,1.02],[.78,.82,.94],[1,.94,.92]],variantStart:20,variantCount:4}];function _d(a){return a<2.75?0:a<5.75?1:a<8.75?2:3}class Yy{acc=0;eliteTimer=El;surroundTimer=0;bossActive=!1;siegeActive=!1;factionIdx=0;onWave=null;atlas;pool;map;apriorityNames;constructor(t,e,i){this.atlas=t,this.pool=e,this.map=i;const n=t.manifest.sheets.apriority.chars;this.apriorityNames=new Array(16).fill("장수");for(const s in n){const r=n[s];this.apriorityNames[r]=t.manifest.names[s]??s}}reset(){this.acc=0,this.eliteTimer=El,this.surroundTimer=0,this.bossActive=!1,this.siegeActive=!1,this.factionIdx=0}setBossActive(t){this.bossActive=t}setSiegeActive(t){this.siegeActive=t}hpScale(t){let e=1+.13*t+.011*t*t;return t>10&&(e*=Math.pow(1.35,t-10)),e}update(t,e,i,n){const s=e/60,r=_d(s);r!==this.factionIdx&&(this.factionIdx=r,this.onWave?.(xd[r]));let o=Math.min(18,2+s*1.7);if(this.bossActive?o*=.4:this.siegeActive&&(o*=.55),this.pool.aliveCount<Gr)for(this.acc+=o*t;this.acc>=1&&(this.acc-=1,!(this.pool.aliveCount>=Gr));)this.spawnOne(s,i,n);else this.acc=0;this.bossActive||(this.eliteTimer-=t,this.eliteTimer<=0&&(this.eliteTimer+=El,this.spawnElite(s,i,n))),!this.bossActive&&e>=300&&(this.surroundTimer-=t,this.surroundTimer<=0&&(this.surroundTimer=22,this.spawnSurround(s,i,n)))}ringPos(t,e,i){const n=ce.next()*Math.PI*2,s=ce.range(Ky,vd);i.x=t+Math.cos(n)*s,i.z=e+Math.sin(n)*s,this.map.projectWalkable(i.x,i.z,.75,i)}_p={x:0,z:0};_spawnP={x:0,z:0};spawnOne(t,e,i){const n=this.pickType(t);this.ringPos(e,i,this._p),this.placeEnemy(n,this._p.x,this._p.z,t)}placeEnemy(t,e,i,n,s){this.map.projectWalkable(e,i,t.radius+.08,this._spawnP),e=this._spawnP.x,i=this._spawnP.z;const r=t.hp*this.hpScale(n);let o=zh,l=this.atlas.soldierBlockPx(t.charIndex),h=0;const c=xd[s??_d(n)];if(n>=1){const f=this.atlas.variantBlocks(t.id);if(f.length>0){const m=(c.variantStart+ce.int(c.variantCount))%f.length,v=f[m];o=qf,l=v.c*jy,h=v.r*256}}const u=this.pool.spawn(e,i,r,t.speed,t.radius,t.damage,t.gemValue,t.worldScale,o,l,h);if(u<0)return-1;const d=c.tints[ce.int(c.tints.length)];return this.pool.tr[u]=d[0],this.pool.tg[u]=d[1],this.pool.tb[u]=d[2],t.ranged&&(this.pool.ranged[u]=1,this.pool.range[u]=t.range??11,this.pool.atkCd[u]=t.atkCd??2.5,this.pool.projDamage[u]=t.projDamage??8,this.pool.projSpeed[u]=t.projSpeed??10,this.pool.projHoming[u]=t.projHoming?1:0),t.id==="general_spear"||t.id==="runner"&&ce.next()<.34?this.pool.behavior[u]=Nh:t.id==="general_bow"?this.pool.behavior[u]=qy:t.id==="strategist"?this.pool.behavior[u]=Jn:t.id==="guard"&&(this.pool.behavior[u]=vo),u}spawnElite(t,e,i){if(this.pool.aliveCount>=Gr)return;this.ringPos(e,i,this._p);const n=ce.int(16),s=wi.guard.hp*25*this.hpScale(t),r=this.pool.spawn(this._p.x,this._p.z,s,2.2,.85,13,20,1.5,Xs,n*Zy,0);r<0||(this.pool.elite[r]=1,this.pool.kbResist[r]=.5,this.pool.behavior[r]=vo,this.pool.tr[r]=1.5,this.pool.tg[r]=1.2,this.pool.tb[r]=.7,this.pool.labels[r]=`${this.apriorityNames[n]} 精銳`,this.pool.markSpecial(r))}forcePattern(t,e,i,n){const s=e/60;if(t==="charge"){const r=this.placeEnemy(wi.general_spear,i+8,n,s);r>=0&&(this.pool.patternT[r]=0)}else if(t==="volley")for(let r=-1;r<=1;r++){const o=this.placeEnemy(wi.general_bow,i+r*2.2,n+9,s);o>=0&&(this.pool.atkTimer[o]=0)}else if(t==="strategist"){const r=this.placeEnemy(wi.strategist,i-8,n+5,s);r>=0&&(this.pool.atkTimer[r]=0)}else t==="shield"&&this.placeEnemy(wi.guard,i+5,n+3,s)}spawnGateRush(t,e,i,n,s){for(let r=0;r<10;r++){const o=r/2|0,l=r%2*2-1,h=i?t+l*1.5:t-4-o*1.4,c=i?e-4-o*1.4:e+l*1.5;this.placeEnemy(r>=8?wi.general_spear:wi.runner,h,c,n,s)}}spawnSiegeAttacker(t,e,i,n=!1){const s=n?wi.general_bow:this.pickType(i);return this.placeEnemy(s,t,e,i,1)}spawnSiegeRush(t,e,i){for(let n=0;n<10;n++){const s=n/10*Math.PI*2,r=1.4+n%3*.9;this.spawnSiegeAttacker(t+Math.cos(s)*r,e+Math.sin(s)*r,i,n>=8)}}spawnGateWatch(t,e){for(const i of t)this.spawnSiegeAttacker(i.x,i.z,e,!0)}garrisonCount(){let t=0;for(let e=0;e<Mt;e++)this.pool.alive[e]===1&&this.pool.controlled[e]===0&&this.map.insideCastleBounds(this.pool.x[e],this.pool.z[e],0)&&t++;return t}spawnSurround(t,e,i){const s=vd;for(let r=0;r<36&&!(this.pool.aliveCount>=Gr);r++){const o=r/36*Math.PI*2+ce.range(-.05,.05),l=this.pickType(t);this.placeEnemy(l,e+Math.cos(o)*s,i+Math.sin(o)*s,t)}}pickType(t){const e=ce.next(),i=wi;return t<1?e<.6?i.worker:i.runner:t<2?e<.45?i.worker:e<.75?i.runner:i.guard:t<3?e<.35?i.worker:e<.6?i.runner:e<.85?i.guard:i.general_spear:t<4.5?e<.3?i.worker:e<.5?i.runner:e<.68?i.guard:e<.85?i.general_spear:i.general_blade:t<6?e<.25?i.worker:e<.42?i.runner:e<.58?i.guard:e<.72?i.general_spear:e<.87?i.general_blade:i.general_bow:t<7.5?e<.2?i.runner:e<.36?i.guard:e<.52?i.general_spear:e<.68?i.general_blade:e<.85?i.general_bow:i.strategist:e<.16?i.runner:e<.32?i.guard:e<.48?i.general_spear:e<.66?i.general_blade:e<.83?i.general_bow:i.strategist}}const Hs=2,bd=4096,Jy=8192;function yd(a,t){return(a+bd)*Jy+(t+bd)}class Qy{buckets=new Map;used=[];clear(){const t=this.used;for(let e=0;e<t.length;e++){const i=this.buckets.get(t[e]);i&&(i.length=0)}t.length=0}insert(t,e,i){const n=Math.floor(e/Hs),s=Math.floor(i/Hs),r=yd(n,s);let o=this.buckets.get(r);o===void 0&&(o=[],this.buckets.set(r,o)),o.length===0&&this.used.push(r),o.push(t)}query(t,e,i,n){const s=Math.floor((t-i)/Hs),r=Math.floor((t+i)/Hs),o=Math.floor((e-i)/Hs),l=Math.floor((e+i)/Hs);let h=0;for(let c=s;c<=r;c++)for(let u=o;u<=l;u++){const d=this.buckets.get(yd(c,u));if(d!==void 0)for(let f=0;f<d.length;f++)n[h++]=d[f]}return h}}let Md=0;function tM(a,t,e,i,n,s,r=0){const o=t.query(e,i,n,s);let l=-1,h=n*n,c=-1,u=n*n;const d=a.boss;for(let f=0;f<o;f++){const m=s[f];if(a.alive[m]===0)continue;const v=a.x[m]-e,g=a.z[m]-i,p=v*v+g*g;p<h&&(h=p,l=m),d!==void 0&&d[m]===1&&p<u&&(u=p,c=m)}if(Md++,c>=0){const m=90+Math.round(40*Math.min(1,Math.max(0,r-60)/90));if(Md%200<m)return c}return l}function eM(a,t,e,i,n,s){const r=n-e,o=s-i,l=r*r+o*o;let h=l>0?((a-e)*r+(t-i)*o)/l:0;h<0?h=0:h>1&&(h=1);const c=e+r*h,u=i+o*h,d=a-c,f=t-u;return d*d+f*f}const Pe=512,iM=2,wd=.7;class nM{x=new Float32Array(Pe);z=new Float32Array(Pe);value=new Float32Array(Pe);heal=new Uint8Array(Pe);mag=new Uint8Array(Pe);cr=new Float32Array(Pe);cg=new Float32Array(Pe);cb=new Float32Array(Pe);alive=new Uint8Array(Pe);free=new Int32Array(Pe);freeTop=0;time=0;mesh;matArr;colArr;colAttr;constructor(t){for(let n=0;n<Pe;n++)this.free[n]=Pe-1-n;this.freeTop=Pe;const e=new oc(.26,0),i=new Ii({toneMapped:!1});this.mesh=new ye(e,i,Pe),this.mesh.instanceMatrix.setUsage(Tt),this.colArr=new Float32Array(Pe*3),this.colAttr=new Wt(this.colArr,3),this.colAttr.setUsage(Tt),this.mesh.instanceColor=this.colAttr,this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=1,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}get object(){return this.mesh}reset(){for(let t=0;t<Pe;t++)this.alive[t]=0,this.free[t]=Pe-1-t;this.freeTop=Pe}spawn(t,e,i){if(this.freeTop===0)return;const n=this.free[--this.freeTop];this.x[n]=t,this.z[n]=e,this.value[n]=i,this.heal[n]=0,this.mag[n]=0,this.alive[n]=1,i>=20?(this.cr[n]=2.2,this.cg[n]=.4,this.cb[n]=.5):i>=5?(this.cr[n]=.4,this.cg[n]=2,this.cb[n]=.7):(this.cr[n]=.35,this.cg[n]=.75,this.cb[n]=2.2)}spawnHeal(t,e,i){if(this.freeTop===0)return;const n=this.free[--this.freeTop];this.x[n]=t,this.z[n]=e,this.value[n]=i,this.heal[n]=1,this.mag[n]=0,this.alive[n]=1,this.cr[n]=2.4,this.cg[n]=2.1,this.cb[n]=1.5}magnetizeAll(){for(let t=0;t<Pe;t++)this.alive[t]===1&&(this.mag[t]=1)}get activeHealCount(){let t=0;for(let e=0;e<Pe;e++)this.alive[e]===1&&this.heal[e]===1&&t++;return t}update(t,e,i,n,s,r){this.time+=t;const o=iM*n,l=o*o,h=wd*wd;for(let c=0;c<Pe;c++){if(this.alive[c]===0)continue;const u=e-this.x[c],d=i-this.z[c],f=u*u+d*d;if(this.mag[c]===0&&f<=l&&(this.mag[c]=1),this.mag[c]){const m=Math.sqrt(f)||1,v=6+(o-Math.min(o,m))*5+10/m;this.x[c]+=u/m*v*t,this.z[c]+=d/m*v*t,f<=h&&(this.heal[c]===1?r?.(this.value[c]):s(this.value[c]),this.alive[c]=0,this.free[this.freeTop++]=c)}}}render(){let t=0;const e=this.time;for(let i=0;i<Pe;i++){if(this.alive[i]===0)continue;const n=t*16,s=1+.12*Math.sin(e*5+i);this.matArr[n]=s,this.matArr[n+5]=s,this.matArr[n+10]=s,this.matArr[n+12]=this.x[i],this.matArr[n+13]=.5+Math.sin(e*3+i)*.12,this.matArr[n+14]=this.z[i],this.matArr[n+15]=1;const r=t*3;this.colArr[r]=this.cr[i],this.colArr[r+1]=this.cg[i],this.colArr[r+2]=this.cb[i],t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0}}const Dt=384,Cl=8,sM=8,aM=.35,ia=0,bc=1,as=2,Da=3,Fn=4,$f=5;class rM{x=new Float32Array(Dt);z=new Float32Array(Dt);vx=new Float32Array(Dt);vz=new Float32Array(Dt);life=new Float32Array(Dt);invDur=new Float32Array(Dt);damage=new Float32Array(Dt);radius=new Float32Array(Dt);pierce=new Int16Array(Dt);homing=new Uint8Array(Dt);turn=new Float32Array(Dt);kind=new Uint8Array(Dt);cr=new Float32Array(Dt);cg=new Float32Array(Dt);cb=new Float32Array(Dt);len=new Float32Array(Dt);wid=new Float32Array(Dt);hy=new Float32Array(Dt);mode=new Uint8Array(Dt);oAng=new Float32Array(Dt);oRad=new Float32Array(Dt);oVel=new Float32Array(Dt);atkT=new Float32Array(Dt);dusty=new Uint8Array(Dt);trailT=new Float32Array(Dt);alive=new Uint8Array(Dt);hits=new Int32Array(Dt*Cl);hitN=new Uint8Array(Dt);free=new Int32Array(Dt);freeTop=0;mesh;matArr;colArr;kindArr;fadeArr;colAttr;kindAttr;fadeAttr;spriteBatches;arrows;constructor(t,e){for(let s=0;s<Dt;s++)this.free[s]=Dt-1-s;this.freeTop=Dt;const i=new Qt(1,1,1,1);i.rotateX(-Math.PI/2),this.colArr=new Float32Array(Dt*3),this.kindArr=new Float32Array(Dt),this.fadeArr=new Float32Array(Dt),this.colAttr=new Wt(this.colArr,3),this.kindAttr=new Wt(this.kindArr,1),this.fadeAttr=new Wt(this.fadeArr,1),this.colAttr.setUsage(Tt),this.fadeAttr.setUsage(Tt),i.setAttribute("aColor",this.colAttr),i.setAttribute("aKind",this.kindAttr),i.setAttribute("aFade",this.fadeAttr);const n=new Bt({uniforms:{uTime:{value:0}},vertexShader:`
        attribute vec3 aColor;
        attribute float aKind;
        attribute float aFade;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vKind;
        varying float vFade;
        void main() {
          vUv = uv;
          vColor = aColor;
          vKind = aKind;
          vFade = aFade;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vColor;
        varying float vKind;
        varying float vFade;
        void main() {
          vec2 p = vUv - 0.5;
          float along = vUv.x;      // 0..1 (진행 방향 +X)
          float across = abs(p.y) * 2.0;
          float b = 0.0;
          if (vKind < 0.5) {
            // 화살: 뾰족한 머리 + 꼬리 스트릭
            float body = smoothstep(1.0, 0.35, across);
            float head = smoothstep(0.2, 1.0, along);
            float tail = smoothstep(0.0, 0.5, along);
            b = body * mix(tail, 1.0, head) * (0.6 + head);
          } else if (vKind < 1.5) {
            // 부적: 부드러운 발광 블롭 + 짧은 꼬리 + 룬 깜빡임
            float blob = smoothstep(0.6, 0.0, length(p));
            float tailg = smoothstep(0.0, 0.6, along) * smoothstep(1.0, 0.4, across);
            float flick = 0.75 + 0.25 * sin(uTime * 20.0 + vUv.x * 6.0);
            b = (blob + tailg * 0.4) * flick;
          } else if (vKind < 2.5) {
            // 참격파: 넓은 크레센트 밴드
            float band = smoothstep(1.0, 0.2, across) * smoothstep(0.0, 0.3, along) * (1.0 - smoothstep(0.8, 1.0, along));
            b = band * 1.2;
          } else if (vKind < 3.5) {
            // 태극 오브: 이중 소용돌이 발광 구슬
            float r = length(p) * 2.0;
            float disc = smoothstep(1.0, 0.0, r);
            float swirl = 0.5 + 0.5 * sin(atan(p.y, p.x) * 2.0 + uTime * 6.0 + r * 4.0);
            b = disc * (0.6 + 0.5 * swirl);
          } else if (vKind < 4.5) {
            // 기마 돌격: 길고 강한 스트릭
            float body = smoothstep(1.0, 0.2, across);
            float streak = smoothstep(0.0, 0.3, along) * (1.0 - smoothstep(0.7, 1.0, along) * 0.5);
            b = body * streak * 1.3;
          } else {
            // 화염 화살(원융노): 화살형 후광
            float body = smoothstep(1.0, 0.35, across);
            float head = smoothstep(0.2, 1.0, along);
            float tail = smoothstep(0.0, 0.5, along);
            b = body * mix(tail, 1.0, head) * (0.6 + head);
          }
          if (b <= 0.001) discard;
          // 생성 스프라이트가 본체를 담당한다. 이 셰이더는 뒤쪽 후광/속도선만 얇게 맡는다.
          gl_FragColor = vec4(vColor * b * 0.34, b * vFade * 0.2);
        }
      `,transparent:!0,blending:We,depthWrite:!1,depthTest:!0});this.mesh=new ye(i,n,Dt),this.mesh.instanceMatrix.setUsage(Tt),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=4,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh),this.spriteBatches=[new Li(t,"player-arrow-basic",Dt),new Li(t,"talisman",Dt,5,1,!0),new Li(t,"slash-wave",Dt),new Li(t,"bagua-orb",Dt),new Li(t,"cavalry",Dt),new Li(t,"player-arrow",Dt)],this.arrows=new e1(t,Dt,e)}get object(){return this.mesh}reset(){this.alive.fill(0);for(let t=0;t<Dt;t++)this.free[t]=Dt-1-t;this.freeTop=Dt}acquire(){return this.freeTop===0?-1:this.free[--this.freeTop]}spawn(t,e,i,n,s,r,o,l,h,c,u,d,f,m,v,g=!1,p=6,w=!1){const T=this.acquire();T<0||(this.x[T]=t,this.z[T]=e,this.vx[T]=i*s,this.vz[T]=n*s,this.life[T]=h,this.invDur[T]=1/h,this.damage[T]=r,this.radius[T]=o,this.pierce[T]=l,this.homing[T]=g?1:0,this.turn[T]=p,this.kind[T]=c,this.cr[T]=u,this.cg[T]=d,this.cb[T]=f,this.len[T]=m,this.wid[T]=v,this.hy[T]=c===as?.7:c===Da?.9:1,this.mode[T]=0,this.dusty[T]=w?1:0,this.trailT[T]=0,this.hitN[T]=0,this.alive[T]=1)}spawnOrbit(t,e,i,n,s,r,o,l){const h=this.acquire();h<0||(this.mode[h]=1,this.oAng[h]=t,this.oRad[h]=e,this.oVel[h]=i,this.damage[h]=n,this.radius[h]=l*.6,this.kind[h]=Da,this.cr[h]=s,this.cg[h]=r,this.cb[h]=o,this.len[h]=l,this.wid[h]=l,this.hy[h]=.9,this.atkT[h]=0,this.life[h]=1,this.invDur[h]=0,this.dusty[h]=0,this.trailT[h]=0,this.alive[h]=1)}clearOrbits(){for(let t=0;t<Dt;t++)this.alive[t]===1&&this.mode[t]===1&&(this.alive[t]=0,this.free[this.freeTop++]=t)}refreshOrbits(t,e,i){for(let n=0;n<Dt;n++)this.alive[n]===1&&this.mode[n]===1&&(this.damage[n]=t,this.oRad[n]=e,this.oVel[n]=i)}countOrbits(){let t=0;for(let e=0;e<Dt;e++)this.alive[e]===1&&this.mode[e]===1&&t++;return t}tryHit(t,e,i,n,s,r,o,l,h){const c=this.x[t],u=this.z[t],d=this.radius[t]+.7,f=i.query(c,u,d,r),m=this.mode[t]===1,v=t*Cl;for(let g=0;g<f;g++){const p=r[g];if(e.alive[p]===0)continue;const w=e.x[p]-c,T=e.z[p]-u,M=this.radius[t]+e.radius[p];if(w*w+T*T>M*M)continue;if(m){if(!o)continue}else{let x=!1;const b=this.hitN[t];for(let R=0;R<b;R++)if(this.hits[v+R]===p){x=!0;break}if(x)continue;b<Cl&&(this.hits[v+this.hitN[t]++]=p)}const y=e.boss[p]===1?this.damage[t]*sM*(e.groggy[p]===1?1.6:1)*(m?aM:1):this.damage[t],E=e.damageAt(p,y);if(n.spawn(y,e.x[p],e.scale[p]*.7,e.z[p],!1),l.projectileImpact(e.x[p],e.z[p],this.cr[t],this.cg[t],this.cb[t],this.kind[t]),this.kind[t]===as?h.spawnRing(e.x[p],e.z[p],1.5,this.cr[t],this.cg[t],this.cb[t],.2):this.kind[t]===Da&&o?h.spawnRing(e.x[p],e.z[p],.75,this.cr[t],this.cg[t],this.cb[t],.18):this.kind[t]===Fn&&h.spawnRing(e.x[p],e.z[p],1.9,1.5,.75,.35,.24),!E){if(this.kind[t]===Fn||this.kind[t]===as){const x=Math.hypot(this.vx[t],this.vz[t])||1;e.push(p,this.vx[t]/x,this.vz[t]/x,this.kind[t]===Fn?7:3)}else if(m){const x=e.x[p]-c,b=e.z[p]-u,R=Math.hypot(x,b)||1;e.push(p,x/R,b/R,2)}}if(E&&s(p),!m&&(this.pierce[t]--,this.pierce[t]<0)){this.kill(t);return}}}kill(t){this.alive[t]=0,this.free[this.freeTop++]=t}update(t,e,i,n,s,r,o,l,h,c){for(let u=0;u<Dt;u++)if(this.alive[u]!==0){if(this.mode[u]===1){this.oAng[u]+=this.oVel[u]*t,this.x[u]=e+Math.cos(this.oAng[u])*this.oRad[u],this.z[u]=i+Math.sin(this.oAng[u])*this.oRad[u],this.atkT[u]-=t;const d=this.atkT[u]<=0;d&&(this.atkT[u]=.3),this.trailT[u]-=t,this.trailT[u]<=0&&(l.projectileTrail(this.x[u],this.z[u],0,0,this.cr[u],this.cg[u],this.cb[u],this.kind[u]),this.trailT[u]=.09),this.tryHit(u,n,s,r,o,c,d,l,h);continue}if(this.homing[u]){const d=oM(n,s,this.x[u],this.z[u],9,c);if(d>=0){const f=n.x[d]-this.x[u],m=n.z[d]-this.z[u],v=Math.hypot(f,m)||1,g=Math.hypot(this.vx[u],this.vz[u]),p=Math.min(1,this.turn[u]*t);this.vx[u]+=(f/v*g-this.vx[u])*p,this.vz[u]+=(m/v*g-this.vz[u])*p}}this.x[u]+=this.vx[u]*t,this.z[u]+=this.vz[u]*t,this.dusty[u]&&l.dust(this.x[u],this.z[u]),this.trailT[u]-=t,this.trailT[u]<=0&&(l.projectileTrail(this.x[u],this.z[u],this.vx[u],this.vz[u],this.cr[u],this.cg[u],this.cb[u],this.kind[u]),this.trailT[u]=this.kind[u]===Fn?.035:this.kind[u]===ia?.08:.055),this.tryHit(u,n,s,r,o,c,!1,l,h),this.alive[u]!==0&&(this.life[u]-=t,this.life[u]<=0&&this.kill(u))}}render(t){this.mesh.material.uniforms.uTime.value=t;for(const i of this.spriteBatches)i.begin(t);this.arrows.begin();let e=0;for(let i=0;i<Dt;i++){if(this.alive[i]===0)continue;const n=e*16;let s,r,o;this.mode[i]===1||this.kind[i]===Da?(s=t*3,r=this.len[i],o=this.wid[i]):(s=Math.atan2(-this.vz[i],this.vx[i]),r=this.len[i],o=this.wid[i]);const l=Math.cos(s),h=Math.sin(s);this.matArr[n]=l*r,this.matArr[n+1]=0,this.matArr[n+2]=-h*r,this.matArr[n+3]=0,this.matArr[n+4]=0,this.matArr[n+5]=1,this.matArr[n+6]=0,this.matArr[n+7]=0,this.matArr[n+8]=h*o,this.matArr[n+9]=0,this.matArr[n+10]=l*o,this.matArr[n+11]=0,this.matArr[n+12]=this.x[i],this.matArr[n+13]=this.hy[i],this.matArr[n+14]=this.z[i],this.matArr[n+15]=1;const c=e*3;this.colArr[c]=this.cr[i],this.colArr[c+1]=this.cg[i],this.colArr[c+2]=this.cb[i],this.kindArr[e]=this.kind[i];let u=1;if(this.mode[i]===0){const m=this.life[i]*this.invDur[i];u=Math.min(1,m*4)*Math.min(1,(1-m)*6+.3)}this.fadeArr[e]=u;const d=this.kind[i]===Fn?this.len[i]:this.kind[i]===as?Math.max(this.len[i],this.wid[i]):this.len[i]*1.18;this.kind[i]===ia||this.kind[i]===$f?this.arrows.push(this.x[i],this.hy[i]+.2,this.z[i],s,this.len[i]*1.05,Math.max(this.wid[i],.5)*1.05,this.cr[i],this.cg[i],this.cb[i],u):this.spriteBatches[this.kind[i]].push(this.x[i],this.hy[i]+.055,this.z[i],s,d,d,u),e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.kindAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0;for(const i of this.spriteBatches)i.end();this.arrows.end()}}function oM(a,t,e,i,n,s){const r=t.query(e,i,n,s);let o=-1,l=n*n;for(let h=0;h<r;h++){const c=s[h];if(a.alive[c]===0)continue;const u=a.x[c]-e,d=a.z[c]-i,f=u*u+d*d;f<l&&(l=f,o=c)}return o}const _e=64,Sd=.25;class lM{x=new Float32Array(_e);z=new Float32Array(_e);radius=new Float32Array(_e);life=new Float32Array(_e);maxLife=new Float32Array(_e);dps=new Float32Array(_e);vx=new Float32Array(_e);vz=new Float32Array(_e);tickT=new Float32Array(_e);cr=new Float32Array(_e);cg=new Float32Array(_e);cb=new Float32Array(_e);alive=new Uint8Array(_e);free=new Int32Array(_e);freeTop=0;mesh;matArr;colArr;fadeArr;colAttr;fadeAttr;spawnLight=null;constructor(t){for(let n=0;n<_e;n++)this.free[n]=_e-1-n;this.freeTop=_e;const e=new So(1,40);e.rotateX(-Math.PI/2),this.colArr=new Float32Array(_e*3),this.fadeArr=new Float32Array(_e),this.colAttr=new Wt(this.colArr,3),this.fadeAttr=new Wt(this.fadeArr,1),this.colAttr.setUsage(Tt),this.fadeAttr.setUsage(Tt),e.setAttribute("aColor",this.colAttr),e.setAttribute("aFade",this.fadeAttr);const i=new Bt({uniforms:{uTime:{value:0}},vertexShader:`
        attribute vec3 aColor;
        attribute float aFade;
        varying vec2 vLocal;
        varying vec3 vColor;
        varying float vFade;
        void main() {
          vLocal = position.xz; // -1..1 원반
          vColor = aColor;
          vFade = aFade;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vLocal;
        varying vec3 vColor;
        varying float vFade;
        // 값 노이즈
        float hash(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
        float noise(vec2 p){
          vec2 i = floor(p); vec2 f = fract(p);
          float a = hash(i), b = hash(i + vec2(1.0,0.0));
          float c = hash(i + vec2(0.0,1.0)), d = hash(i + vec2(1.0,1.0));
          vec2 u = f*f*(3.0-2.0*f);
          return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
        }
        void main() {
          float r = length(vLocal);
          if (r > 1.0) discard;
          float t = uTime;
          float n = noise(vLocal * 4.0 + vec2(0.0, -t * 1.6));
          n += 0.5 * noise(vLocal * 8.0 + vec2(t * 0.8, -t * 2.2));
          n /= 1.5;
          // 가장자리 일렁임 + 중심 발광 (과다 블룸 방지로 강도 억제)
          float edge = 1.0 - smoothstep(0.5, 1.0, r);
          float flame = edge * (0.3 + n * 0.65);
          float core = smoothstep(0.55, 0.0, r) * 0.25;
          float b = (flame + core) * vFade;
          if (b <= 0.01) discard;
          vec3 col = mix(vColor, vec3(1.7, 1.0, 0.35), core);
          gl_FragColor = vec4(col * b * 0.6, b * 0.85);
        }
      `,transparent:!0,blending:We,depthWrite:!1,depthTest:!0});this.mesh=new ye(e,i,_e),this.mesh.instanceMatrix.setUsage(Tt),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=3,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}get object(){return this.mesh}reset(){this.alive.fill(0);for(let t=0;t<_e;t++)this.free[t]=_e-1-t;this.freeTop=_e}spawn(t,e,i,n,s,r=2.4,o=.9,l=.25,h=0,c=0){if(this.freeTop===0)return;const u=this.free[--this.freeTop];this.x[u]=t,this.z[u]=e,this.radius[u]=i,this.life[u]=n,this.maxLife[u]=n,this.dps[u]=s,this.vx[u]=h,this.vz[u]=c,this.tickT[u]=0,this.cr[u]=r,this.cg[u]=o,this.cb[u]=l,this.alive[u]=1}update(t,e,i,n,s,r,o){for(let l=0;l<_e;l++){if(this.alive[l]===0)continue;if(this.x[l]+=this.vx[l]*t,this.z[l]+=this.vz[l]*t,this.life[l]-=t,this.life[l]<=0){this.alive[l]=0,this.free[this.freeTop++]=l;continue}if(Math.random()<.22&&r.fireEmber(this.x[l],this.z[l],this.radius[l]*.8),this.spawnLight&&Math.random()<.55){const m=.35+Math.random()*.3;this.spawnLight(this.x[l],this.z[l],this.cr[l]*m,this.cg[l]*m,this.cb[l]*m,this.radius[l]*2,.14)}if(this.tickT[l]-=t,this.tickT[l]>0)continue;this.tickT[l]=Sd;const h=this.x[l],c=this.z[l],u=this.radius[l],d=this.dps[l]*Sd,f=i.query(h,c,u,o);for(let m=0;m<f;m++){const v=o[m];if(e.alive[v]===0)continue;const g=e.x[v]-h,p=e.z[v]-c,w=u+e.radius[v];if(g*g+p*p>w*w)continue;const T=e.damageAt(v,d);n.spawn(d,e.x[v],e.scale[v]*.7,e.z[v],!1),T&&s(v)}}}render(t){this.mesh.material.uniforms.uTime.value=t;let e=0;for(let i=0;i<_e;i++){if(this.alive[i]===0)continue;const n=e*16,s=this.radius[i];this.matArr[n]=s,this.matArr[n+5]=1,this.matArr[n+10]=s,this.matArr[n+12]=this.x[i],this.matArr[n+13]=.05,this.matArr[n+14]=this.z[i],this.matArr[n+15]=1;const r=e*3;this.colArr[r]=this.cr[i],this.colArr[r+1]=this.cg[i],this.colArr[r+2]=this.cb[i];const o=this.life[i]/this.maxLife[i];this.fadeArr[e]=Math.min(1,(1-o)*8+.4)*Math.min(1,o*4+.2),e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.fadeAttr.needsUpdate=!0}}const ri=12,hM=2.6,Ad=1;class cM{x=new Float32Array(ri);z=new Float32Array(ri);mag=new Uint8Array(ri);boss=new Uint8Array(ri);alive=new Uint8Array(ri);free=new Int32Array(ri);freeTop=0;time=0;mesh;matArr;colArr;colAttr;constructor(t){for(let n=0;n<ri;n++)this.free[n]=ri-1-n;this.freeTop=ri;const e=new on(.8,.6,.8),i=new Ii({toneMapped:!1,vertexColors:!1});this.mesh=new ye(e,i,ri),this.mesh.instanceMatrix.setUsage(Tt),this.colArr=new Float32Array(ri*3),this.colAttr=new Wt(this.colArr,3),this.colAttr.setUsage(Tt),this.mesh.instanceColor=this.colAttr,this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=1,this.matArr=this.mesh.instanceMatrix.array,t.add(this.mesh)}get object(){return this.mesh}reset(){this.alive.fill(0);for(let t=0;t<ri;t++)this.free[t]=ri-1-t;this.freeTop=ri}spawn(t,e,i){if(this.freeTop===0)return;const n=this.free[--this.freeTop];this.x[n]=t,this.z[n]=e,this.mag[n]=0,this.boss[n]=i?1:0,this.alive[n]=1}update(t,e,i,n,s){this.time+=t;const r=hM*n,o=r*r,l=Ad*Ad;for(let h=0;h<ri;h++){if(this.alive[h]===0)continue;const c=e-this.x[h],u=i-this.z[h],d=c*c+u*u;if(this.mag[h]===0&&d<=o&&(this.mag[h]=1),this.mag[h]){const f=Math.sqrt(d)||1,m=5+8/f;this.x[h]+=c/f*m*t,this.z[h]+=u/f*m*t,d<=l&&(s(this.boss[h]===1),this.alive[h]=0,this.free[this.freeTop++]=h)}}}render(){let t=0;const e=this.time;for(let i=0;i<ri;i++){if(this.alive[i]===0)continue;const n=t*16,s=e*2+i,r=Math.cos(s),o=Math.sin(s),l=1+.12*Math.sin(e*5+i);this.matArr[n]=r*l,this.matArr[n+2]=-o*l,this.matArr[n+5]=l,this.matArr[n+8]=o*l,this.matArr[n+10]=r*l,this.matArr[n+12]=this.x[i],this.matArr[n+13]=.7+Math.sin(e*3+i)*.15,this.matArr[n+14]=this.z[i],this.matArr[n+15]=1;const h=t*3;this.boss[i]===1?(this.colArr[h]=2.6,this.colArr[h+1]=1.4,this.colArr[h+2]=2.4):(this.colArr[h]=2.8,this.colArr[h+1]=2,this.colArr[h+2]=.6),t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.colAttr.needsUpdate=!0}}const uM=3,Td=[100,500,1e3],dM=["百人斬!","五百人斬!","千人斬!"],fM=[30,120,400],pM=200;class mM{count=0;timer=0;nextMilestone=0;onBanner;onPunch;constructor(t,e){this.onBanner=t,this.onPunch=e}reset(){this.count=0,this.timer=0,this.nextMilestone=0}get fever(){return this.count>=pM}onKill(){this.count++,this.timer=uM,this.onPunch();let t=0;for(;this.nextMilestone<Td.length&&this.count>=Td[this.nextMilestone];)this.onBanner(dM[this.nextMilestone]),t+=fM[this.nextMilestone],this.nextMilestone++;return t}update(t){this.count>0&&(this.timer-=t,this.timer<=0&&(this.count=0,this.nextMilestone=0))}}const Rl=5,gM=.3,Ed={zhaoyun:{char:"龍",r:.5,g:1.4,b:2.4},guanyu:{char:"義",r:.35,g:1.9,b:1.1},zhangfei:{char:"蛇",r:2.3,g:1.2,b:.5},zhugeliang:{char:"卦",r:.7,g:1.2,b:2.4},huangzhong:{char:"弓",r:2.2,g:1.6,b:.6},lvbu:{char:"戟",r:2.4,g:.5,b:.3},sunshangxiang:{char:"香",r:2.2,g:.55,b:1.05},default:{char:"武",r:1.5,g:1.4,b:1}};class vM{gauge=0;active=!1;chargeMul=1;killRate=0;chargeLockT=0;timer=0;tick=0;stormAngle=0;dashIdx=0;dashTimer=0;initDone=!1;introDone=!1;heroMusou;onActivateFx;constructor(t,e){this.heroMusou=t,this.onActivateFx=e}setHero(t){this.heroMusou=t}reset(){this.gauge=0,this.active=!1,this.timer=0,this.tick=0,this.dashIdx=0,this.dashTimer=0,this.initDone=!1,this.introDone=!1,this.chargeMul=1,this.killRate=0,this.chargeLockT=0}get ready(){return this.gauge>=100}get enemyTimeScale(){return this.active?gM:1}addKill(t){if(this.active||this.chargeLockT>0)return;this.killRate+=.25;const e=1+Math.min(1.5,t*.02),i=Math.min(e,2/Math.max(this.killRate,.5));this.gauge=Math.min(100,this.gauge+i*this.chargeMul)}addHit(){this.active||(this.gauge=Math.min(100,this.gauge+3*this.chargeMul))}activate(){return!this.ready||this.active?!1:(this.active=!0,this.timer=Rl,this.tick=0,this.stormAngle=0,this.dashIdx=0,this.dashTimer=0,this.initDone=!1,this.introDone=!1,this.gauge=0,this.onActivateFx(),!0)}update(t,e,i){if(this.killRate*=Math.exp(-t/4),this.chargeLockT>0&&(this.chargeLockT-=t),!this.active)return!1;this.timer-=t,this.tick-=t,this.dashTimer-=t;const n=Ed[this.heroMusou]??Ed.default;switch(this.introDone||(this.introDone=!0,e.effects.spawnCrest(i.x,i.z,n.char,n.r,n.g,n.b,Rl),this.heroMusou==="zhugeliang"&&e.effects.spawnBaguaSigil(i.x,i.z,Rl)),e.effects.spawnMusouLight?.(i.x,i.z,n.r*.32,n.g*.32,n.b*.32,6.5,.07),this.heroMusou){case"zhaoyun":this.runZhaoyun(e,i);break;case"guanyu":this.runGuanyu(e,i);break;case"zhangfei":this.runZhangfei(e,i);break;case"zhugeliang":this.runZhuge(e,i);break;case"huangzhong":this.runHuang(e,i);break;case"lvbu":this.runLvbu(e,i);break;case"sunshangxiang":this.runSunshangxiang(e,i);break;default:this.runCommon(e,i);break}return this.timer<=0?(this.active=!1,this.chargeLockT=6,e.effects.spawnTripleShock(i.x,i.z,30,n.r,n.g,n.b),e.effects.spawnRing(i.x,i.z,26,2.2,1.7,.8,.7),e.effects.spawnMusouLight?.(i.x,i.z,n.r*.6,n.g*.6,n.b*.6,15,.5),this.aoe(e,i.x,i.z,30,400*e.stats.damageMul,6),!0):!1}runCommon(t,e){if(this.tick>0)return;this.tick=.1,this.stormAngle+=.9;const i=Math.cos(this.stormAngle),n=Math.sin(this.stormAngle);t.effects.spawnSlashArc(e.x,e.z,i,n,7,1.3,1.6,1.2,2.4,.24),this.aoe(t,e.x,e.z,7.5,60*t.stats.damageMul,0)}runZhaoyun(t,e){if(this.runCommon(t,e),this.dashTimer>0)return;this.dashTimer=.5;const i=this.dashIdx/8*Math.PI*2;this.dashIdx++;const n=Math.cos(i),s=Math.sin(i);e.x+=n*3.2,e.z+=s*3.2,e.faceX=n,e.faceZ=s,t.effects.spawnThrust(e.x,e.z,n,s,9,2.2,1.4,1.9,2.6);for(let r=0;r<4;r++)t.effects.spawnFlameTrail(e.x-n*r*1.8,e.z-s*r*1.8,.5,1.3,2.4);this.capsule(t,e.x,e.z,n,s,9,1.2,90*t.stats.damageMul)}runGuanyu(t,e){if(this.tick>0)return;this.tick=.06,this.stormAngle+=.55;const i=Math.cos(this.stormAngle),n=Math.sin(this.stormAngle);t.effects.spawnSlashArc(e.x,e.z,i,n,9.5,1.5,.6,2.2,1.1,.2),t.effects.spawnFlameTrail(e.x+i*9,e.z+n*9,.3,1.9,1.1),this.aoe(t,e.x,e.z,9.5,55*t.stats.damageMul,5)}runZhangfei(t,e){if(!this.initDone){this.initDone=!0,this.stunAll(t,e.x,e.z,30,3),t.effects.spawnTripleShock(e.x,e.z,28,2.4,1.5,.6);for(let i=0;i<28;i++){const n=i/28*Math.PI*2;t.particles.dust(e.x+Math.cos(n)*3,e.z+Math.sin(n)*3)}this.aoe(t,e.x,e.z,30,90*t.stats.damageMul,12)}this.tick>0||(this.tick=.5,t.effects.spawnRing(e.x,e.z,14,2.2,1.2,.6,.4),this.aoe(t,e.x,e.z,26,70*t.stats.damageMul,4))}runZhuge(t,e){if(this.tick>0)return;this.tick=.12;const i=t.enemies.randomAlive();if(i<0)return;const n=t.enemies.x[i],s=t.enemies.z[i];t.effects.spawnLightning(n,s),this.aoe(t,n,s,3,80*t.stats.damageMul,0)}runHuang(t,e){if(this.tick>0)return;this.tick=.08;const i=12,n=this.stormAngle;this.stormAngle+=.4;const s=30*t.stats.damageMul;for(let r=0;r<i;r++){const o=n+r/i*Math.PI*2;t.projectiles.spawn(e.x,e.z,Math.cos(o),Math.sin(o),18,s,.5,3,1.6,ia,2.2,1.6,.7,1.6,.55)}for(let r=0;r<3;r++){const o=4+Math.random()*16,l=Math.random()*Math.PI*2,h=e.x+Math.cos(l)*o,c=e.z+Math.sin(l)*o;t.effects.spawnMeteorArrow(h,c,2.2,1.6,.6,.45+Math.random()*.25),this.aoe(t,h,c,2.4,s*.7,2)}}runSunshangxiang(t,e){if(!(this.tick>0)){this.tick=.1,this.stormAngle+=.7;for(let i=0;i<3;i++){const n=this.stormAngle+i/3*Math.PI*2;t.effects.spawnSlashArc(e.x,e.z,Math.cos(n),Math.sin(n),6.5,.7,2.2,.55,1.05,.2)}if(this.aoe(t,e.x,e.z,7,62*t.stats.damageMul,4),this.dashTimer<=0){this.dashTimer=.8;const i=12,n=26*t.stats.damageMul;for(let s=0;s<i;s++){const r=this.stormAngle+s/i*Math.PI*2;t.projectiles.spawn(e.x,e.z,Math.cos(r),Math.sin(r),17,n,.5,3,1.5,ia,2.3,1,.85,1.6,.55)}}}}runLvbu(t,e){t.particles.dust(e.x,e.z),!(this.tick>0)&&(this.tick=.28,t.effects.spawnFireWall(e.x,e.z,e.faceX,e.faceZ,6,1.5,.5),t.effects.spawnRing(e.x,e.z,2.6,2.2,1,.4,.3),this.aoe(t,e.x,e.z,7,85*t.stats.damageMul*2.3,6))}aoe(t,e,i,n,s,r){const o=t.enemies,l=t.hash.query(e,i,n,t.scratch);for(let h=0;h<l;h++){const c=t.scratch[h];if(o.alive[c]===0)continue;const u=o.x[c]-e,d=o.z[c]-i,f=u*u+d*d;if(f>n*n)continue;const m=o.damageAt(c,s);if(r>0){const v=Math.sqrt(f)||1;o.push(c,u/v,d/v,r)}m&&t.onKill(c)}}stunAll(t,e,i,n,s){const r=t.enemies,o=t.hash.query(e,i,n,t.scratch);for(let l=0;l<o;l++){const h=t.scratch[l];r.alive[h]===0||r.boss[h]===1||r.stun[h]<s&&(r.stun[h]=s)}}capsule(t,e,i,n,s,r,o,l){const h=t.enemies,c=e+n*r,u=i+s*r,d=(e+c)*.5,f=(i+u)*.5,m=t.hash.query(d,f,r*.5+o+1.2,t.scratch);for(let v=0;v<m;v++){const g=t.scratch[v];if(h.alive[g]===0)continue;const p=o+h.radius[g],w=xM(h.x[g],h.z[g],e,i,c,u),T=e+(c-e)*w,M=i+(u-i)*w,A=h.x[g]-T,y=h.z[g]-M;if(A*A+y*y>p*p)continue;const E=h.damageAt(g,l);h.push(g,n,s,6),E&&t.onKill(g)}}}function xM(a,t,e,i,n,s){const r=n-e,o=s-i,l=r*r+o*o;if(l<=0)return 0;let h=((a-e)*r+(t-i)*o)/l;return h<0?h=0:h>1&&(h=1),h}const jf={yuanshao:{name:"원소",hanja:"袁紹",charIndex:14,sheet:Ji,pattern:"fan",hp:6e3,speed:2.5,contact:14,radius:1.4,tr:1.1,tg:1.1,tb:1.4},xiahoudun:{name:"하후돈",hanja:"夏侯惇",charIndex:14,sheet:Xs,pattern:"dash",hp:6e3,speed:2.9,contact:16,radius:1.45,tr:1.5,tg:.85,tb:.8},sunce:{name:"손책",hanja:"孫策",charIndex:12,sheet:Ji,pattern:"rush",hp:5800,speed:3.3,contact:15,radius:1.35,tr:1,tg:1.2,tb:1.5},dongzhuo:{name:"동탁",hanja:"董卓",charIndex:4,sheet:Ji,pattern:"firezone",hp:3600,speed:2.1,contact:18,radius:1.6,tr:1.4,tg:1,tb:.9},simayi:{name:"사마의",hanja:"司馬懿",charIndex:11,sheet:Ji,pattern:"delaybolt",hp:4e3,speed:2.3,contact:16,radius:1.5,tr:.9,tg:1.05,tb:1.5},zhouyu:{name:"주유",hanja:"周瑜",charIndex:18,sheet:Ji,pattern:"firezone",hp:3600,speed:2.4,contact:16,radius:1.5,tr:2,tg:1,tb:.45},lvbu:{name:"여포",hanja:"呂布",charIndex:10,sheet:Ji,pattern:"lvbu",hp:7500,speed:3.6,contact:20,radius:1.5,tr:1.5,tg:.9,tb:1.1},huaxiong:{name:"화웅",hanja:"華雄",charIndex:4,sheet:Ji,pattern:"dash",hp:5200,speed:2.7,contact:16,radius:1.45,tr:1.7,tg:.5,tb:.42},dianwei:{name:"전위",hanja:"典韋",charIndex:6,sheet:Xs,pattern:"dash",hp:5e3,speed:2.8,contact:17,radius:1.4,tr:1.4,tg:1.1,tb:.9},gaoshun:{name:"고순",hanja:"高順",charIndex:8,sheet:Xs,pattern:"fan",hp:5e3,speed:2.5,contact:15,radius:1.35,tr:1.2,tg:1.15,tb:1},xiahouyuan:{name:"하후연",hanja:"夏侯淵",charIndex:15,sheet:Xs,pattern:"delaybolt",hp:5e3,speed:2.6,contact:15,radius:1.4,tr:1.45,tg:.95,tb:.85},lumeng:{name:"여몽",hanja:"呂蒙",charIndex:8,sheet:Ji,pattern:"firezone",hp:5e3,speed:2.5,contact:16,radius:1.45,tr:.95,tg:1.3,tb:1.05},luxun:{name:"육손",hanja:"陸遜",charIndex:9,sheet:Ji,pattern:"fan",hp:5e3,speed:2.5,contact:15,radius:1.4,tr:2,tg:1.05,tb:.5}},Cd=["dianwei","gaoshun","xiahouyuan","lumeng","luxun"],_M=192;class bM{active=!1;idx=-1;typeId="";def=null;atlas;onWarn;atk1=0;atk2=0;atk3=0;dashState=0;dashT=0;dashDx=0;dashDz=0;boltX=new Float32Array(3);boltZ=new Float32Array(3);boltT=-1;groggyT=0;groggyCd=0;constructor(t,e){this.atlas=t,this.onWarn=e}get name(){return this.def?this.def.name:""}get hanja(){return this.def?this.def.hanja:""}hpFrac(t){if(!this.active||this.idx<0)return 0;const e=t.enemies;return e.alive[this.idx]===0?0:Math.max(0,e.hp[this.idx]/e.maxHp[this.idx])}spawn(t,e,i,n,s){const r=jf[t];if(!r)return;const o=i.enemies,l=r.hp*(1+.08*e),h=o.spawn(n,s-16,l,r.speed,r.radius,r.contact,40,2.2,r.sheet,r.charIndex*_M,0);h<0||(o.boss[h]=1,o.kbResist[h]=.9,o.controlled[h]=1,o.tr[h]=r.tr,o.tg[h]=r.tg,o.tb[h]=r.tb,o.labels[h]=`${r.name} ${r.hanja}`,o.markSpecial(h),this.idx=h,this.typeId=t,this.def=r,this.active=!0,this.atk1=2,this.atk2=r.pattern==="lvbu"?1.15:3.5,this.atk3=6,this.dashState=0,this.boltT=-1,this.groggyT=0,this.groggyCd=4,i.effects.spawnRing(n,s,24,2.4,1.2,.6,.9),i.effects.spawnLight?.(n,s-16,r.tr*.45,r.tg*.45,r.tb*.45,8,.55),this.onWarn(r.name,r.hanja))}update(t,e,i,n,s){if(!this.active)return;const r=e.enemies;if(r.alive[this.idx]===0){this.active=!1,this.idx=-1;return}const o=this.idx,l=this.def;if(this.groggyCd-=t,this.groggyT>0){this.groggyT-=t,r.groggy[o]=1,r.tr[o]=.55,r.tg[o]=.78,r.tb[o]=1.28,this.groggyT<=0&&(r.groggy[o]=0,r.tr[o]=l.tr,r.tg[o]=l.tg,r.tb[o]=l.tb);return}let h=n-r.x[o],c=s-r.z[o];const u=Math.hypot(h,c)||1;if(h/=u,c/=u,this.dashState===2)r.x[o]+=this.dashDx*18*t,r.z[o]+=this.dashDz*18*t;else if(this.dashState===1)r.flash[o]=.6;else{const d=l.pattern==="fan"?u>9?1:-.2:1;r.x[o]+=h*l.speed*d*t,r.z[o]+=c*l.speed*d*t}switch(this.atk1-=t,this.atk2-=t,this.atk3-=t,l.pattern){case"fan":this.updateFan(e,i,o,h,c);break;case"firezone":this.updateFirezone(e,i,o,n,s,h,c);break;case"dash":this.updateDash(t,e,i,o,h,c);break;case"rush":this.updateRush(t,e,o,h,c);break;case"delaybolt":this.updateDelaybolt(t,e,i,o,n,s);break;case"lvbu":this.updateLvbu(t,e,i,o,n,s,h,c);break}}tryGroggy(t,e){if(this.groggyCd>0||this.groggyT>0)return;const i=t.enemies,n=i.hp[e]/i.maxHp[e]<.25;this.groggyT=n?1.2:1.8,this.groggyCd=this.groggyT+5,i.groggy[e]=1,i.hitPunch[e]=1,t.effects.spawnCrest(i.x[e],i.z[e],"隙",.6,.85,1.4,this.groggyT),t.particles.dust(i.x[e],i.z[e])}updateFan(t,e,i,n,s){const r=t.enemies;if(this.atk1<=0){this.atk1=2.4;const o=Math.atan2(s,n);for(let l=-3;l<=3;l++){const h=o+l*.16;e.spawn(r.x[i],r.z[i],Math.cos(h),Math.sin(h),10,12,!1,Bi)}t.effects.spawnRing(r.x[i],r.z[i],3,1.4,1.2,2,.4),t.effects.spawnTelegraph(sd,r.x[i],r.z[i],Math.atan2(s,n),22,22,.62,.5),this.tryGroggy(t,i)}if(this.atk2<=0){this.atk2=5.2;const o=Math.atan2(s,n);for(let l=-1;l<=1;l++){const h=o+l*.32;e.spawn(r.x[i],r.z[i],Math.cos(h),Math.sin(h),5.4,16,!0,_c)}t.effects.spawnRing(r.x[i],r.z[i],4.2,.7,2.1,1.2,.55)}}updateFirezone(t,e,i,n,s,r,o){const l=t.enemies;if(this.atk1<=0){this.atk1=3.2;for(let h=0;h<4;h++){const c=t.rng.next()*Math.PI*2,u=t.rng.range(0,5),d=n+Math.cos(c)*u,f=s+Math.sin(c)*u;t.effects.spawnTelegraph(Uh,d,f,0,6,6,0,.6),t.zones.spawn(d,f,3,3.2,16,2.6,.7,.2)}t.effects.spawnRing(l.x[i],l.z[i],4,2.4,1,.4,.5),this.tryGroggy(t,i)}if(this.atk2<=0){this.atk2=4.6;const h=Math.atan2(o,r);e.spawn(l.x[i],l.z[i],r,o,7.2,24,!1,vn);for(const c of[-.32,.32]){const u=h+c;e.spawn(l.x[i],l.z[i],Math.cos(u),Math.sin(u),8.5,17,!1,go)}t.effects.spawnRing(l.x[i],l.z[i],4.8,2.6,.75,.2,.55)}}updateDash(t,e,i,n,s,r){const o=e.enemies;if(this.dashState===1?(this.dashT-=t,this.dashT<=0&&(this.dashState=2,this.dashT=.5,o.damage[n]=46,e.effects.spawnThrust(o.x[n],o.z[n],this.dashDx,this.dashDz,12,3.2,2.2,.7,.6),e.effects.spawnDecal?.(o.x[n],o.z[n],4,2.4,1,.4))):this.dashState===2&&(this.dashT-=t,e.particles.dust(o.x[n],o.z[n]),Math.random()<.4&&e.effects.spawnDecal?.(o.x[n],o.z[n],2.6,2.2,.9,.35),this.dashT<=0&&(this.dashState=0,o.damage[n]=this.def.contact,this.tryGroggy(e,n))),this.atk1<=0&&this.dashState===0&&(this.atk1=3,this.dashState=1,this.dashT=.55,this.dashDx=s,this.dashDz=r,e.effects.spawnTelegraph(gl,o.x[n]+s*5,o.z[n]+r*5,Math.atan2(r,s),10,4.2,0,.55)),this.atk2<=0){this.atk2=3.4;const l=Math.atan2(r,s);for(let h=-1;h<=1;h++){const c=l+h*.22;i.spawn(o.x[n],o.z[n],Math.cos(c),Math.sin(c),11,14,!1,vn)}}}updateRush(t,e,i,n,s){const r=e.enemies;this.dashState===2&&(this.dashT-=t,this.dashT<=0&&(this.dashState=0,r.damage[i]=this.def.contact,this.tryGroggy(e,i))),this.atk1<=0&&this.dashState===0&&(this.atk1=1.6,this.dashState=2,this.dashT=.3,this.dashDx=n,this.dashDz=s,r.damage[i]=30,e.effects.spawnTelegraph(gl,r.x[i]+n*4,r.z[i]+s*4,Math.atan2(s,n),8,3.4,0,.3),e.effects.spawnThrust(r.x[i],r.z[i],n,s,7,2.4,.5,1.25,2.2,.34,!1))}updateDelaybolt(t,e,i,n,s,r){if(e.enemies,this.atk1<=0&&this.boltT<0){this.atk1=3.6;for(let o=0;o<3;o++){const l=e.rng.next()*Math.PI*2,h=e.rng.range(0,6);this.boltX[o]=s+Math.cos(l)*h,this.boltZ[o]=r+Math.sin(l)*h,e.effects.spawnTelegraph(Uh,this.boltX[o],this.boltZ[o],0,6,6,0,.7)}this.boltT=.7}if(this.boltT>=0&&(this.boltT-=t,this.boltT<=0)){this.boltT=-1;for(let o=0;o<3;o++){e.effects.spawnLightning(this.boltX[o],this.boltZ[o],.7,1.2,2.6,9);for(let l=0;l<6;l++){const h=l/6*Math.PI*2;i.spawn(this.boltX[o],this.boltZ[o],Math.cos(h),Math.sin(h),5,16,!1,Zs)}}this.tryGroggy(e,n)}}updateLvbu(t,e,i,n,s,r,o,l){const h=e.enemies;if(this.dashState===1?(this.dashT-=t,this.dashT<=0&&(this.dashState=2,this.dashT=.45,h.damage[n]=40,e.effects.spawnThrust(h.x[n],h.z[n],this.dashDx,this.dashDz,10,3,2.2,.8,.7))):this.dashState===2&&(this.dashT-=t,e.particles.dust(h.x[n],h.z[n]),this.dashT<=0&&(this.dashState=0,h.damage[n]=this.def.contact,this.tryGroggy(e,n))),this.atk1<=0&&this.dashState===0&&(this.atk1=4.5,this.dashState=1,this.dashT=.6,this.dashDx=o,this.dashDz=l,e.effects.spawnTelegraph(gl,h.x[n]+o*4.5,h.z[n]+l*4.5,Math.atan2(l,o),9,4.2,0,.6)),this.atk2<=0){this.atk2=3;const c=Math.atan2(l,o);e.effects.spawnTelegraph(sd,h.x[n],h.z[n],c,20,20,.5,.4);for(let u=-2;u<=2;u++){const d=c+u*.2;i.spawn(h.x[n],h.z[n],Math.cos(d),Math.sin(d),13,14,!1,Zs)}this.tryGroggy(e,n)}if(this.atk3<=0){this.atk3=11;const c=wi.general_blade,u=this.atlas.soldierBlockPx(c.charIndex);for(let d=0;d<3;d++){const f=e.rng.next()*Math.PI*2,m=3+e.rng.range(0,3);h.spawn(s+Math.cos(f)*m,r+Math.sin(f)*m,c.hp*2,c.speed,c.radius,c.damage,c.gemValue,c.worldScale,0,u,0)}e.effects.spawnRing(h.x[n],h.z[n],5,2,.8,1.4,.5)}}}const Gs=40;class yM{d;cartTimes=[];cartFired=0;rush4=!1;rush7=!1;meteorCooldown=0;busyT=0;rushRemaining=0;rushAcc=0;rushDirX=0;rushDirZ=0;showerRemaining=0;showerAcc=0;mx=new Float32Array(Gs);mz=new Float32Array(Gs);mt=new Float32Array(Gs);mActive=new Uint8Array(Gs);constructor(t){this.d=t,this.reset()}reset(){const t=this.d.rng;this.cartTimes=[t.range(120,300),t.range(300,480)].sort((e,i)=>e-i),this.cartFired=0,this.rush4=!1,this.rush7=!1,this.meteorCooldown=0,this.busyT=0,this.rushRemaining=0,this.showerRemaining=0,this.mActive.fill(0)}update(t,e){this.busyT>0&&(this.busyT-=t);const i=this.busyT<=0;i&&this.cartFired<this.cartTimes.length&&e>=this.cartTimes[this.cartFired]?(this.cartFired++,this.spawnSupplyCart(e),this.busyT=14):i&&!this.rush4&&e>=240?(this.rush4=!0,this.startRush(),this.busyT=32):i&&!this.rush7&&e>=420?(this.rush7=!0,this.startRush(),this.busyT=32):i&&e>=360&&(this.meteorCooldown-=t,this.meteorCooldown<=0&&this.showerRemaining<=0&&(this.meteorCooldown=this.d.rng.range(35,55),this.startMeteorShower(),this.busyT=16)),this.rushRemaining>0&&this.tickRush(t,e),this.showerRemaining>0&&this.tickShower(t),this.tickMeteorImpacts(t)}forceRush(){this.startRush()}forceMeteor(){this.startMeteorShower()}forceCart(t){this.spawnSupplyCart(t)}startRush(){const t=this.d.rng.next()*Math.PI*2;this.rushDirX=Math.cos(t),this.rushDirZ=Math.sin(t),this.rushRemaining=30,this.rushAcc=0,this.d.banner(wt()==="en"?"Yellow Turban Horde 黃巾大軍":"황건 대군 黃巾大軍","#e8c667")}tickRush(t,e){this.rushRemaining-=t,this.rushAcc+=t*14;const i=this.d.playerX(),n=this.d.playerZ(),s=e/60,r=1+.13*s+.011*s*s;for(;this.rushAcc>=1;){this.rushAcc-=1;const o=this.d.rng.range(-16,16),l=-this.rushDirZ,h=this.rushDirX,c=i-this.rushDirX*26+l*o,u=n-this.rushDirZ*26+h*o,d=this.d.rng.next()<.7?wi.worker:wi.runner;this.d.enemies.spawn(c,u,d.hp*r,d.speed,d.radius,d.damage,d.gemValue,d.worldScale,zh,this.d.atlas.soldierBlockPx(d.charIndex),0)}}startMeteorShower(){this.showerRemaining=15,this.showerAcc=0,this.d.banner(wt()==="en"?"Meteor Shower 流星雨":"유성우 流星雨","#ff9a3c")}tickShower(t){for(this.showerRemaining-=t,this.showerAcc+=t*3;this.showerAcc>=1;)this.showerAcc-=1,this.queueMeteor()}queueMeteor(){let t=-1;for(let l=0;l<Gs;l++)if(this.mActive[l]===0){t=l;break}if(t<0)return;const e=this.d.playerX(),i=this.d.playerZ(),n=this.d.rng.next()*Math.PI*2,s=this.d.rng.range(0,15),r=e+Math.cos(n)*s,o=i+Math.sin(n)*s;this.mx[t]=r,this.mz[t]=o,this.mt[t]=1,this.mActive[t]=1,this.d.effects.spawnRing(r,o,3.2,2,.7,.2,1)}tickMeteorImpacts(t){for(let e=0;e<Gs;e++){if(this.mActive[e]===0||(this.mt[e]-=t,this.mt[e]>0))continue;this.mActive[e]=0;const i=this.mx[e],n=this.mz[e];this.d.effects.spawnRing(i,n,4.5,2.6,1.2,.4,.5),this.d.zones.spawn(i,n,3.5,.5,120,2.6,.8,.2),this.d.particles.burst(i,n,2.6,1.2,.4,24,7);const s=this.d.playerX()-i,r=this.d.playerZ()-n;s*s+r*r<3.5*3.5&&this.d.hitPlayer(28)}}spawnSupplyCart(t){const e=this.d.enemies,i=t/60,n=1+.13*i+.011*i*i,s=this.d.playerX(),r=this.d.playerZ(),o=this.d.rng.next()*Math.PI*2,l=wi.runner,h=s+Math.cos(o)*12,c=r+Math.sin(o)*12,u=e.spawn(h,c,220*n,3.6,.7,0,20,1.3,zh,this.d.atlas.soldierBlockPx(l.charIndex),0);u<0||(e.flee[u]=1,e.cart[u]=1,e.tr[u]=2.4,e.tg[u]=1.9,e.tb[u]=.6,e.labels[u]=wt()==="en"?"Supply Cart 補給馬車":"보급 마차 補給馬車",e.markSpecial(u),this.d.effects.spawnRing(h,c,4,2.4,1.9,.6,.6),this.d.banner(wt()==="en"?"Supply Cart — don’t let it escape!":"보급 마차 — 놓치지 마라!","#ffe14d"))}}const oi=32,pn=0,Vs=1,$n=2,Ea=3,Ca=4,Vr=5,jn=6.5,Rd=3,MM=25,Pd=5.2,wM=["혈귀술 폭탄 爆彈","등나무꽃 약탕 藥湯","등나무꽃 사당 神社","귀살대 결계목 結界","경보 종 警鐘","전집중 북 戰鼓"],SM=["Blood Demon Bomb","Wisteria Elixir Cart","Wisteria Shrine","Corps Barrier","Warning Bell","Breathing Drum"],AM=["공격 → 유폭","회복 +30%","호흡 가호 획득","공격 → 파괴","접촉 → 젬 흡수","접근 → 적 기절"],TM=["Attack → explode","Heal +30%","Gain blessing","Attack → break","Touch → pull gems","Near → stun foes"],EM=a=>wt()==="en"?SM[a]:wM[a],CM=a=>wt()==="en"?TM[a]:AM[a],Ld=[2.5,2.6,3.8,2.6,2.6,2.6],RM=[[1.5,.5,.18,2.5],[.55,1.25,.7,2.2],[1.5,1.05,.4,3.4],null,[1.7,1.3,.4,2.6],[1.4,.9,.5,2.4]];class PM{d;x=new Float32Array(oi);z=new Float32Array(oi);kind=new Uint8Array(oi);alive=new Uint8Array(oi);igniteT=new Float32Array(oi);drumCd=new Float32Array(oi);spawnTimer=4;batch;shadows;constructor(t,e){this.d=e,this.batch=new zf(t,oi),this.shadows=new mc(oi),t.add(this.shadows.mesh)}reset(){this.alive.fill(0),this.igniteT.fill(0),this.drumCd.fill(0),this.spawnTimer=4}spawnObject(t){let e=-1;for(let h=0;h<oi;h++)if(this.alive[h]===0){e=h;break}if(e<0)return;const i=this.d.rng,n=i.next(),s=(this.d.playerHpFrac?.()??1)<.4?.6:.44;let r=pn;n<.07?r=Ca:n<.15?r=Vr:n<.24?r=$n:t>90&&n<s?r=Vs:n>.72&&(r=Ea);const o=i.next()*Math.PI*2,l=i.range(8,16);this.x[e]=this.d.playerX()+Math.cos(o)*l,this.z[e]=this.d.playerZ()+Math.sin(o)*l,this.kind[e]=r,this.igniteT[e]=0,this.drumCd[e]=0,this.alive[e]=1}placeAt(t,e,i){let n=-1;for(let s=0;s<oi;s++)if(this.alive[s]===0){n=s;break}return n<0?!1:(this.x[n]=e,this.z[n]=i,this.kind[n]=t,this.igniteT[n]=0,this.drumCd[n]=0,this.alive[n]=1,!0)}spawnDumplingAt(t,e){return this.placeAt(Vs,t,e)}spawnGongAt(t,e){return this.placeAt(Ca,t,e)}update(t,e){this.spawnTimer-=t,this.spawnTimer<=0&&(this.spawnTimer=this.d.rng.range(6,11),this.spawnObject(e));const i=this.d.playerX(),n=this.d.playerZ(),s=this.d.playerRadius+.9,r=this.d.particles;for(let o=0;o<oi;o++){if(this.alive[o]===0)continue;const l=this.kind[o],h=this.x[o],c=this.z[o];if(l===Vs?Math.random()<9*t&&r.steam(h,c+.2):l===$n?Math.random()<7*t&&r.incense(h,c):l===pn&&Math.random()<3.5*t&&r.spark(h,c),l===pn&&this.igniteT[o]>0&&(this.igniteT[o]-=t,Math.random()<40*t&&r.spark(h,c+.5),this.igniteT[o]<=0)){this.explode(o);continue}if(l===pn||l===Ea)continue;if(l===Vr){this.drumCd[o]>0&&(this.drumCd[o]-=t);const f=i-h,m=n-c;this.drumCd[o]<=0&&f*f+m*m<=36&&this.beatDrum(o);continue}const u=i-h,d=n-c;u*u+d*d<=s*s&&this.interact(o)}}emitMarkers(t,e,i){const n=Pd*Pd;for(let s=0;s<oi;s++){if(this.alive[s]===0)continue;const r=this.kind[s],o=this.x[s],l=this.z[s],h=RM[r];h&&t.glowAt(o,l,h[3],h[0],h[1],h[2]),t.name(EM(r),o,Ld[r],l),r===$n?t.interactRing(o,l,1.5,1.05,.4,!0):r===Ca?t.interactRing(o,l,1.5,1.2,.5,!0):r===Vr&&t.interactRing(o,l,1.4,.85,.4,this.drumCd[s]<=0);const c=e-o,u=i-l;c*c+u*u<=n&&t.hint(CM(r),o,Ld[r]+1,l)}}interact(t){if(this.kind[t]===Vs)this.d.heal(.3),this.d.particles.burst(this.x[t],this.z[t],1.6,2.2,1,12,3),this.d.banner(wt()==="en"?"Wisteria Elixir Cart":"등나무꽃 약탕","#9affc0");else if(this.kind[t]===$n){const i=["attack","speed","musou"][this.d.rng.int(3)];this.d.applyBuff(i,30),this.d.effects.spawnRing(this.x[t],this.z[t],6,2.4,2,.8,.7);const n=wt()==="en",s=i==="attack"?n?"Attack Up":"공격 강화":i==="speed"?n?"Gale":"질풍":n?"Musou Charge":"무쌍 충전";this.d.banner(`${n?"Wisteria Shrine":"등나무꽃 사당"} · ${s}`,"#e8c667")}else this.kind[t]===Ca&&(this.d.magnetizeGems?.(),this.d.effects.spawnRing(this.x[t],this.z[t],10,2,1.5,.5,.6),this.d.effects.spawnRing(this.x[t],this.z[t],18,1.8,1.35,.45,.8),this.d.banner(wt()==="en"?"Warning Bell":"경보 종","#ffd86b"));this.alive[t]=0}beatDrum(t){this.drumCd[t]=MM,this.d.stunEnemies?.(this.x[t],this.z[t],9,.8),this.d.effects.spawnRing(this.x[t],this.z[t],9,1.5,.85,.4,.55),this.d.particles.burst(this.x[t],this.z[t],1.3,.85,.4,16,4),this.d.banner(wt()==="en"?"Breathing Drum":"전집중 북","#e4a05b")}hitAt(t,e,i){let n=!1;for(let s=0;s<oi;s++){if(this.alive[s]===0||this.kind[s]!==pn&&this.kind[s]!==Ea)continue;const r=t-this.x[s],o=e-this.z[s],l=i+.7;r*r+o*o<=l*l&&(this.kind[s]===pn?this.igniteT[s]<=0&&(this.igniteT[s]=Rd,this.d.effects.spawnRing(this.x[s],this.z[s],1.4,2.2,1.4,.5,.25)):this.breakPalisade(s),n=!0)}return n}explode(t){const e=this.x[t],i=this.z[t];this.alive[t]=0,this.igniteT[t]=0,this.d.effects.spawnRing(e,i,jn,2.6,1,.3,.55),this.d.effects.spawnRing(e,i,jn*.55,2.9,1.5,.6,.35),this.d.effects.spawnDecal?.(e,i,jn*.8,.5,.28,.14),this.d.effects.spawnLight?.(e,i,2.4,1.15,.4,jn*1.3,.32),this.d.particles.burst(e,i,2.6,1.1,.3,42,9),this.d.damageArea(e,i,jn,120);for(let n=0;n<oi;n++){if(this.alive[n]===0||this.kind[n]!==pn||this.igniteT[n]>0)continue;const s=this.x[n]-e,r=this.z[n]-i;s*s+r*r<=jn*jn&&(this.igniteT[n]=.3)}}breakPalisade(t){const e=this.x[t],i=this.z[t];this.alive[t]=0,this.d.effects.spawnRing(e,i,2.8,1.6,1.05,.45,.3),this.d.particles.burst(e,i,1.5,.85,.35,22,5),this.d.damageArea(e,i,2.5,35),this.d.banner(wt()==="en"?"Palisade Broken 木柵":"목책 돌파 木柵","#e4a05b")}render(t){this.batch.begin(),this.shadows.begin();for(let e=0;e<oi;e++){if(this.alive[e]===0)continue;if(this.kind[e]===pn){let n=1.12;if(this.igniteT[e]>0){const s=2+Math.max(0,Rd-this.igniteT[e])*3.5;n=Math.sin(t*s*Math.PI*2)>0?2.3:.7}this.batch.push(Ns.powderCart,this.x[e],this.z[e],2.4,2,n)}else this.kind[e]===Vs?this.batch.push(Ns.dumplingCart,this.x[e],this.z[e],2.5,2.1,1.18):this.kind[e]===$n?this.batch.push(Ns.shrine,this.x[e],this.z[e],2.8,3.3,1.13):this.kind[e]===Ca?this.batch.push(Ns.gong,this.x[e],this.z[e],2.4,2.2,1.1):this.kind[e]===Vr?this.batch.push(Ns.warDrum,this.x[e],this.z[e],2.4,2.2,1.1):this.batch.push(Ns.palisade,this.x[e],this.z[e],3.7,2.15,1.05);const i=this.kind[e]===Ea?1.55:this.kind[e]===$n?1.08:.92;this.shadows.push(this.x[e],this.z[e],i)}this.batch.end(),this.shadows.end()}get visibleCount(){let t=0;for(let e=0;e<oi;e++)t+=this.alive[e];return t}testShowcase(t,e){this.alive.fill(0);const i=[[-4.2,-3,pn],[4.2,-3,Vs],[-4.2,3.2,$n],[4.2,3.2,Ea]];for(let n=0;n<i.length;n++)this.x[n]=t+i[n][0],this.z[n]=e+i[n][1],this.kind[n]=i[n][2],this.alive[n]=1}}const LM={yuanshao:{appear:[{ko:"하북의 대군이다. 관도의 둑을 넘을 성싶으냐.",en:"The host of Hebei. Think you to cross the Guandu dike?"},{ko:"사세삼공의 이름 앞이다. 무릎이 먼저 꺾일 것이다.",en:"Four generations of ministers stand here — your knees break first."}],death:[{ko:"군세는 컸으나… 내 결단이 늦었구나.",en:"My armies were vast… my resolve came too late."},{ko:"옳은 쪽을 고를 하루가… 이제는 없구나.",en:"The day left to choose the right side… is gone."}]},dongzhuo:{appear:[{ko:"낙양을 불사른 이 몸이 두렵지 않으냐!",en:"I burned Luoyang to ash. Do you not fear me?"},{ko:"폐립도 내 뜻이었다. 네 목숨도 그러하리라.",en:"I unmade emperors at will — your life is no different."}],death:[{ko:"재로 세운 권세가… 재로 돌아가는가.",en:"Power raised from ash… returns to ash."},{ko:"미오의 곳간이… 나보다 오래 남겠구나.",en:"The granaries of Mei… will outlast me."}]},lvbu:{appear:[{ko:"천하의 여포다. 나를 당할 자 있거든 나오라!",en:"I am Lü Bu. Let any who can match me step forth!"},{ko:"방천극의 무게를 재려는 눈이 또 하나 늘었군.",en:"Another pair of eyes come to weigh my halberd."}],death:[{ko:"적토마여… 나를 두고 어디로 가느냐.",en:"Red Hare… where do you go, leaving me behind?"},{ko:"가까이 둔 칼이… 끝내 나를 겨눴는가.",en:"The blade I kept close… turned on me at last."}]},xiahoudun:{appear:[{ko:"부모의 눈을 화살째 삼킨 하후돈이다!",en:"Xiahou Dun — I swallowed my own eye, arrow and all!"},{ko:"내 한 발은 주공 막사 앞에 박혔다. 물러서지 않는다.",en:"My foot is planted before my lord’s tent — I do not retreat."}],death:[{ko:"남은 한 눈에… 주공의 깃발이 흐려진다.",en:"In my one eye… my lord’s banner grows dim."},{ko:"막사 앞… 첫 한 발을 이제야 뒤로 떼는가.",en:"Before the tent… now at last my foot steps back."}]},sunce:{appear:[{ko:"강동은 내가 세웠다. 소패왕의 창을 받아라!",en:"I forged Jiangdong. Take the Little Conqueror’s spear!"},{ko:"낡은 부곡이 노를 잡았다. 새 깃발이 그 뒤를 친다!",en:"Old retainers man the oars — the new banner strikes behind!"}],death:[{ko:"강동을 아우에게… 손권, 뒤를 맡긴다.",en:"Jiangdong to my brother… Sun Quan, hold it."},{ko:"너무 빨리 열린 문이… 나를 삼키는구나.",en:"The gate that opened too fast… swallows me now."}]},simayi:{appear:[{ko:"죽은 공명도 산 중달을 이기지 못했다.",en:"Even dead Kongming never bested the living Zhongda."},{ko:"낙엽은 담 밑까지 몰아 한 번에 거둔다.",en:"I sweep the leaves to the wall, then take them all at once."}],death:[{ko:"때를 기다린 내가… 그 때에 잡히는구나.",en:"I who waited for the hour… am seized by it."},{ko:"아껴 둔 북소리를… 끝내 울리지 못했다.",en:"The war-drum I hoarded… I never got to sound."}]},zhouyu:{appear:[{ko:"적벽에 동남풍이 분다. 불바다를 보아라!",en:"The southeast wind rises at Chibi. Behold the inferno!"},{ko:"묶인 배는 한 덩이 장작이다. 불씨 하나면 된다.",en:"Chained ships are one great pyre — a single spark will do."}],death:[{ko:"하늘이 주유를 내고 어찌 공명을 냈는가…",en:"Heaven bore Yu — why then did it bear Liang?"},{ko:"음이 틀렸다… 이 한 줄이 불길의 길을 바꾸는가.",en:"A false note… does this one string turn the fire’s path?"}]},dianwei:{appear:[{ko:"주공께는 손대지 못한다. 이 문은 전위가 막는다!",en:"None shall touch my lord. Dian Wei bars this gate!"},{ko:"문은 좁아야 좋다. 한 사람만 들면 한 사람만 막는다.",en:"A narrow gate is best — one enters, one is stopped."}],death:[{ko:"이 문만은… 내 주검으로 막으리라.",en:"This gate alone… I hold with my corpse."},{ko:"떨리는 팔로도… 다섯 걸음은 지켰다.",en:"Even with trembling arms… I held the five paces."}]},gaoshun:{appear:[{ko:"함진영이 나선다. 무너지되 물러서지 않는다.",en:"The Trap-Breaker Camp advances. We fall, never retreat."},{ko:"일곱 줄이다. 한 줄이 비면 그 자리부터 진다.",en:"Seven ranks. Where one empties, there we lose."}],death:[{ko:"여포공을 따라… 하비에서 스러지는가.",en:"Following Lord Lü… I fade at Xiapi."},{ko:"끊긴 줄 하나… 그게 나였구나.",en:"One broken rank… and it was mine."}]},xiahouyuan:{appear:[{ko:"사흘에 오백 리, 질풍의 하후연이다!",en:"Five hundred li in three days — Xiahou Yuan the gale!"},{ko:"성을 보면 늦는다. 나는 성 밖 길목을 친다!",en:"Eye the walls and you’re late — I strike the road beyond!"}],death:[{ko:"정군산 안개 속에… 목이 가벼워졌다.",en:"In the mist of Dingjun… my head has gone light."},{ko:"한 번 보고 친 길이… 내 뒤를 비웠구나.",en:"The road I struck on sight… left my own rear bare."}]},lumeng:{appear:[{ko:"흰 옷으로 강을 건넜다. 형주는 이미 오의 것.",en:"In white robes I crossed the river. Jing is Wu’s now."},{ko:"병이라 적은 문서가 먼저 강을 건넜다.",en:"A letter feigning illness crossed the river first."}],death:[{ko:"관공의 원혼이… 나를 부르는구나.",en:"The wronged spirit of Lord Guan… calls me."},{ko:"늦게 잡은 책도… 여기서 덮이는가.",en:"The book I took up late… closes here."}]},luxun:{appear:[{ko:"서생이라 얕보았느냐. 이릉의 불줄을 받아라!",en:"You scorned a scholar? Take the fire-line of Yiling!"},{ko:"더운 바람이 먼저 일하게 두었다. 긴 영채가 탄다.",en:"I let the hot wind work first — the long camp burns."}],death:[{ko:"촉을 삼킨 불도… 끝내 재만 남기는구나.",en:"Even the fire that ate Shu… leaves only ash."},{ko:"얇은 종이로 눌렀으나… 나도 눌리는구나.",en:"I pressed with thin paper… now I too am pressed."}]}};function Fd(a,t){const e=LM[a];if(!e)return"";const i=e[t];if(!i||i.length===0)return"";const n=i[Math.floor(Math.random()*i.length)];return wt()==="en"?n.en:n.ko}const Zf=["cavalry","caltrop","poison"],so=1e3,Kf=480,Yf="cavalry";function yc(a,t){switch(a){case"caltrop":return t.totalKills>=so;case"poison":return t.best.time>=Kf;case Yf:return t.bosses.length>=1;default:return!0}}function FM(a){return Zf.filter(t=>yc(t,a))}function DM(a,t){const e=wt()==="en";switch(a){case"caltrop":{const i=Math.min(so,Math.floor(t.totalKills));return e?`Total kills ${i}/${so}`:`누적 처치 ${i}/${so}`}case"poison":{const i=Math.min(Kf,Math.floor(t.best.time)),n=`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`;return e?`Best survival ${n} / 8:00`:`최고 생존 ${n} / 8:00`}case Yf:return e?"Defeat your first boss":"첫 보스 처치";default:return""}}const Pl={caltrop:{def:{id:"caltrop",name:"철질려",hanja:"蒺藜",maxLevel:8,desc:"이동 경로에 마름쇠 설치 · 접촉 시 폭발 + 둔화"},nameEn:"Iron Caltrops",descEn:"Caltrops along your path; blast + slow on contact"},poison:{def:{id:"poison",name:"독천",hanja:"毒泉",maxLevel:8,desc:"최다 밀집 지점에 독 웅덩이 · 지속 피해"},nameEn:"Venom Spring",descEn:"Venom pool on the densest cluster; damage over time"},twinring:{def:{id:"twinring",name:"쌍륜",hanja:"雙輪",maxLevel:8,desc:"전방 투척 부메랑 · 왕복하며 2회 관통 타격"},nameEn:"Twin Rings",descEn:"Boomerang chakrams; pierce twice on the round trip"}},we={spear:{id:"spear",name:"물의 호흡",hanja:"水の呼吸",maxLevel:8,desc:"물줄기 관통 찌르기"},guandao:{id:"guandao",name:"물의 호흡 · 나기",hanja:"凪",maxLevel:8,desc:"수면 부채꼴 참격"},zhangba:{id:"zhangba",name:"짐승의 호흡",hanja:"獣の呼吸",maxLevel:8,desc:"쌍 엄니 전후 찢기"},baiyu:{id:"baiyu",name:"혈귀술 · 매혹의 연기",hanja:"惑血の香",maxLevel:8,desc:"유도 혈귀 투사체"},crossbow:{id:"crossbow",name:"벌레의 호흡",hanja:"蟲の呼吸",maxLevel:8,desc:"독침 자동 연사"},fire:{id:"fire",name:"혈귀술 · 폭혈",hanja:"爆血",maxLevel:8,desc:"핏빛 화염 장판"},thunder:{id:"thunder",name:"번개의 호흡 · 벽력일섬",hanja:"霹靂一閃",maxLevel:8,desc:"초고속 연쇄 참격"},orbit:{id:"orbit",name:"등나무꽃 수호",hanja:"藤の花",maxLevel:8,desc:"회전 등꽃 수호구"},halberd:{id:"halberd",name:"파괴살 · 나식",hanja:"破壊殺·羅針",maxLevel:8,desc:"360° 공권 충격파"},cavalry:{id:"cavalry",name:"화염의 호흡 · 염호",hanja:"炎の呼吸·炎虎",maxLevel:8,desc:"불호랑이 돌격"},zhanma:{id:"zhanma",name:"물의 호흡 · 십일식",hanja:"拾壱ノ型·凪",maxLevel:8,desc:"수류 회전 참격파",evolution:!0},bamen:{id:"bamen",name:"등나무꽃 결계",hanja:"藤の花の結界",maxLevel:8,desc:"관통 등꽃 부적 폭풍",evolution:!0},chibi:{id:"chibi",name:"혈귀술 · 폭혈 난무",hanja:"爆血亂舞",maxLevel:8,desc:"전진하는 핏빛 화염 해일",evolution:!0},tianfa:{id:"tianfa",name:"번개의 호흡 · 육연",hanja:"霹靂一閃·六連",maxLevel:8,desc:"적간 연쇄 낙뢰",evolution:!0},yuanrong:{id:"yuanrong",name:"벌레의 호흡 · 백화요란",hanja:"百花繚亂",maxLevel:8,desc:"전방위 독침 난사",evolution:!0}},Oh=[{from:"guandao",passive:"armor",to:"zhanma"},{from:"baiyu",passive:"warbook",to:"bamen"},{from:"fire",passive:"wine",to:"chibi"},{from:"thunder",passive:"talismanho",to:"tianfa"},{from:"crossbow",passive:"vermilion",to:"yuanrong"}];for(const a in Pl)we[a]=Pl[a].def,Ha[a]=Pl[a].descEn;const Jf=4.5;function xo(a,t,e,i,n,s,r,o){const l=a.enemies,h=(t+i)*.5,c=(e+n)*.5,u=Math.hypot(i-t,n-e)*.5+s+1.2,d=a.boosting===!0,f=d||a.dashing===!0?1.5:1,m=d?1.25:1,v=a.hash.query(h,c,u,a.scratch);for(let g=0;g<v;g++){const p=a.scratch[g];if(l.alive[p]===0)continue;const w=s+l.radius[p];if(eM(l.x[p],l.z[p],t,e,i,n)>w*w)continue;const T=l.boss[p]===1,M=(T?r*Jf*(l.groggy[p]===1?1.6:1):r)*m,A=l.damageAt(p,M);a.damageText.spawn(M,l.x[p],l.scale[p]*.7,l.z[p],!1);const y=l.x[p]-a.px,E=l.z[p]-a.pz,x=Math.hypot(y,E)||1;o>0&&(l.push(p,y/x,E/x,o*f),o>=5&&!A&&a.rng.next()<.4&&a.particles.dust(l.x[p],l.z[p])),A?(a.onKill(p),!T&&(d||a.rng.next()<.6)&&a.effects.spawnKOStar(l.x[p],l.z[p],y/x,E/x)):T||(l.hitPunch[p]=d?1.6:1.4)}}function Mc(a,t,e,i,n,s,r,o,l){const h=a.enemies,c=Math.cos(r),u=a.boosting===!0,d=u||a.dashing===!0?1.5:1,f=u?1.25:1,m=a.hash.query(t,e,s+21,a.scratch);for(let v=0;v<m;v++){const g=a.scratch[v];if(h.alive[g]===0)continue;const p=h.x[g]-t,w=h.z[g]-e,T=p*p+w*w,M=h.boss[g]===1,A=(M?s+20:s)+h.radius[g];if(T>A*A)continue;const y=Math.sqrt(T)||1;if(r<3.13&&!M&&p/y*i+w/y*n<c)continue;const E=(M?o*Jf*(h.groggy[g]===1?1.6:1):o)*f,x=h.damageAt(g,E);a.damageText.spawn(E,h.x[g],h.scale[g]*.7,h.z[g],!1),l>0&&(h.push(g,p/y,w/y,l*d),l>=5&&!x&&a.rng.next()<.35&&a.particles.dust(h.x[g],h.z[g])),x?(a.onKill(g),!M&&(u||a.rng.next()<.6)&&a.effects.spawnKOStar(h.x[g],h.z[g],p/y,w/y)):M||(h.hitPunch[g]=u?1.6:1.4)}}function fi(a,t,e,i){return t*a.stats.damageMul*(1+(e-1)*i)}class hi{level=1;timer=0;cooldownPerLevel=0;update(t){if(this.timer-=t.dt,this.timer>0)return;const e=this.baseCooldown*t.stats.cooldownMul*(1-(this.level-1)*this.cooldownPerLevel);this.timer+=Math.max(.05,e),this.timer<0&&(this.timer=0),t.onAttack(this.id,t.aimX,t.aimZ),this.fire(t)}}class IM extends hi{id="spear";baseCooldown=1.1;fire(t){const e=(5+(this.level-1)*.6)*t.stats.rangeMul,i=.72,n=t.musouActive&&t.musouKey==="zhaoyun",s=fi(t,n?15:8,this.level,.15),r=t.px+t.aimX*e,o=t.pz+t.aimZ*e;xo(t,t.px,t.pz,r,o,i,s,3),n?(t.effects.spawnThrust(t.px,t.pz,t.aimX,t.aimZ,e,i*2.2,2.4,.6,.2),t.particles.burst(r,o,2.4,.6,.2,10,4)):(t.effects.spawnThrust(t.px,t.pz,t.aimX,t.aimZ,e,i*2.2,.7,.95,1.9),t.particles.waterSplash(r,o,14))}}class UM extends hi{id="guandao";baseCooldown=1.45;fire(t){const e=(4.4+(this.level-1)*.35)*t.stats.areaMul,i=1.05+(this.level-1)*.02,n=fi(t,15,this.level,.18);Mc(t,t.px,t.pz,t.aimX,t.aimZ,e,i,n,5),t.effects.spawnSlashArc(t.px,t.pz,t.aimX,t.aimZ,e,i,.3,.7,2.2),t.particles.waterSplash(t.px+t.aimX*e*.7,t.pz+t.aimZ*e*.7,16),t.effects.spawnRing(t.px,t.pz,e*.9,.3,.8,2.2,.35)}}class kM extends hi{id="zhangba";baseCooldown=1.15;fire(t){const e=(4.6+(this.level-1)*.4)*t.stats.rangeMul,i=.85,n=fi(t,10,this.level,.15),s=t.aimX,r=t.aimZ;xo(t,t.px,t.pz,t.px+s*e,t.pz+r*e,i,n,9),xo(t,t.px,t.pz,t.px-s*e,t.pz-r*e,i,n,9),t.effects.spawnDoubleThrust(t.px,t.pz,s,r,e,i*2.2,.7,1.3,1.5)}}class NM extends hi{id="baiyu";baseCooldown=1.6;fire(t){const e=2+Math.floor((this.level-1)/2)+t.stats.projectileBonus,i=fi(t,9,this.level,.14),n=8.5*t.stats.rangeMul,s=1+Math.floor(this.level/3),r=Math.atan2(t.aimZ,t.aimX);for(let o=0;o<e;o++){const l=r+(o-(e-1)*.5)*.24;t.projectiles.spawn(t.px,t.pz,Math.cos(l),Math.sin(l),n,i,.5,s,2.6,bc,1.8,.5,.8,1.5,.7,!0,7)}}}class zM extends hi{id="crossbow";baseCooldown=.55;cooldownPerLevel=.04;fire(t){const e=t.aimX,i=t.aimZ,n=1+t.stats.projectileBonus,s=fi(t,7,this.level,.12),r=15*t.stats.rangeMul,o=Math.floor((this.level-1)/2);t.particles.butterflyPoison(t.px,t.pz,6);for(let l=0;l<n;l++){const h=(l-(n-1)/2)*.12,c=Math.atan2(i,e)+h;t.projectiles.spawn(t.px,t.pz,Math.cos(c),Math.sin(c),r,s,.45,o,1.6,ia,.7,.3,.9,1.5,.55)}}}class OM extends hi{id="fire";baseCooldown=3;fire(t){const e=(2.2+(this.level-1)*.28)*t.stats.areaMul,i=3+(this.level-1)*.3,n=10*t.stats.damageMul*(1+(this.level-1)*.15);t.zones.spawn(t.px,t.pz,e,i,n,2.5,.3,1.2),t.effects.spawnTechniqueMesh("blood",t.px,.15,t.pz,0,e*1.2,1,e*1.2,2.4,.4,1.5,.95),t.effects.spawnTripleShock(t.px,t.pz,e*1.3,2.4,.4,1.5)}}class BM extends hi{id="thunder";baseCooldown=2.4;cooldownPerLevel=.03;fire(t){const e=2+Math.floor(this.level/2)+t.stats.projectileBonus,i=fi(t,22,this.level,.16);let n=t.px,s=t.pz;const r=new Set;for(let o=0;o<e;o++){let l=-1,h=324;const c=t.hash.query(n,s,18,t.scratch);for(let m=0;m<c;m++){const v=t.scratch[m];if(t.enemies.alive[v]===0||r.has(v))continue;const g=t.enemies.x[v]-n,p=t.enemies.z[v]-s,w=g*g+p*p;w<h&&(h=w,l=v)}if(l<0&&(l=t.enemies.randomAlive(),l<0))break;r.add(l);const u=t.enemies.x[l],d=t.enemies.z[l];t.effects.spawnChainArc(n,s,u,d,2.8,2.3,.3),t.effects.spawnLightning(u,d,2.8,2.2,.3,4);const f=Math.atan2(-(d-s),u-n);t.effects.spawnTechniqueMesh("thunder",n,.4,s,f,3.5,1,1.2,2.8,2.2,.3,.95),t.particles.lightningSpark(u,d,12),t.effects.spawnFlash(u,d,2.6,2.1,.4,2.5),xo(t,n,s,u,d,1.2,i,4),n=u,s=d}}}class HM{id="orbit";level=1;built=-1;count(){return 2+Math.floor((this.level-1)/2)}update(t){const e=this.count()+t.stats.projectileBonus,i=3.2,n=2.2+(this.level-1)*.15,s=8*t.stats.damageMul*(1+(this.level-1)*.16);if(e!==this.built){t.projectiles.clearOrbits();for(let r=0;r<e;r++){const o=r/e*Math.PI*2;t.projectiles.spawnOrbit(o,i,n,s,1.2,.4,1.8,.9)}this.built=e}t.projectiles.refreshOrbits(s,i,n),t.effects.spawnTechniqueMesh("ribbon",t.px,.3,t.pz,Date.now()*.002,i*.8,.8,i*.8,1.8,.6,1.6,.8)}}class GM extends hi{id="halberd";baseCooldown=1.5;fire(t){const e=(3.6+(this.level-1)*.35)*t.stats.areaMul,i=fi(t,14,this.level,.16);Mc(t,t.px,t.pz,t.aimX,t.aimZ,e,Math.PI,i,6),t.effects.spawnTechniqueMesh("compass",t.px,.1,t.pz,0,e*1.6,.8,e*1.6,.8,.4,2.2,.95),t.effects.spawnRing(t.px,t.pz,e*1.4,.8,.4,2.2,.45),t.effects.spawnRing(t.px,t.pz,e*.8,1.4,.6,2.5,.3);const n=8+t.stats.projectileBonus;for(let s=0;s<n;s++){const r=s/n*Math.PI*2,o=Math.cos(r),l=Math.sin(r);t.projectiles.spawn(t.px,t.pz,o,l,13,i*.7,1.2,3,.6,as,.8,.4,2.2,e*.7,e*.5,!1,0,!0)}}}class VM extends hi{id="cavalry";baseCooldown=4;fire(t){const e=1+Math.floor(this.level/2)+t.stats.projectileBonus,i=fi(t,18,this.level,.15),n=16;for(let s=0;s<e;s++){const r=t.rng.next()*Math.PI*2,o=Math.cos(r),l=Math.sin(r),h=t.px-o*22,c=t.pz-l*22;t.projectiles.spawn(h,c,o,l,n,i,1.3,9999,3,Fn,2.8,.6,.15,4.5,1.7,!1,0,!0)}}}class Mi{id="caltrop";level=1;static CAP=32;static PLACE_INTERVAL=.9;static MAX_AGE=14;static TRIGGER_R=.95;cx=new Float32Array(Mi.CAP);cz=new Float32Array(Mi.CAP);age=new Float32Array(Mi.CAP);glintT=new Float32Array(Mi.CAP);armed=new Uint8Array(Mi.CAP);placeT=0;maxActive(){return Math.min(Mi.CAP,3+(this.level-1))}update(t){const e=Mi.CAP;this.placeT-=t.dt,this.placeT<=0&&(this.placeT+=Mi.PLACE_INTERVAL*t.stats.cooldownMul,this.placeT<0&&(this.placeT=0),this.place(t));const i=t.enemies,n=Mi.TRIGGER_R,s=(2.2+(this.level-1)*.13)*t.stats.areaMul,r=fi(t,20,this.level,.13),o=.5+(this.level-1)*.03;for(let l=0;l<e;l++){if(this.armed[l]===0)continue;if(this.age[l]+=t.dt,this.age[l]>=Mi.MAX_AGE){this.armed[l]=0;continue}const h=this.cx[l],c=this.cz[l];if(this.glintT[l]-=t.dt,this.glintT[l]<=0){this.glintT[l]=.7+t.rng.next()*.8;for(let f=0;f<3;f++)t.particles.emit(h+(t.rng.next()-.5)*.5,.12,c+(t.rng.next()-.5)*.5,(t.rng.next()-.5)*.3,.5+t.rng.next()*.5,(t.rng.next()-.5)*.3,.55,.68,.95,.5,.55,-.4,.9)}let u=!1;const d=t.hash.query(h,c,n+1,t.scratch);for(let f=0;f<d;f++){const m=t.scratch[f];if(i.alive[m]===0)continue;const v=i.x[m]-h,g=i.z[m]-c,p=n+i.radius[m];if(v*v+g*g<=p*p){u=!0;break}}u&&this.explode(t,l,h,c,s,r,o)}}place(t){const e=Mi.CAP,i=this.maxActive();let n=-1,s=0,r=-1,o=-1;for(let u=0;u<e;u++){if(this.armed[u]===0){n<0&&(n=u);continue}s++,this.age[u]>o&&(o=this.age[u],r=u)}let l;if(s<i&&n>=0)l=n;else if(r>=0)l=r;else if(n>=0)l=n;else return;const h=t.px-t.faceX*.5,c=t.pz-t.faceZ*.5;this.cx[l]=h,this.cz[l]=c,this.age[l]=0,this.glintT[l]=0,this.armed[l]=1,t.effects.spawnDecal?.(h,c,.55,.5,.62,.9)}explode(t,e,i,n,s,r,o){this.armed[e]=0;const l=t.enemies,h=t.hash.query(i,n,s,t.scratch);for(let c=0;c<h;c++){const u=t.scratch[c];if(l.alive[u]===0)continue;const d=l.x[u]-i,f=l.z[u]-n,m=s+l.radius[u];if(d*d+f*f>m*m)continue;const v=l.damageAt(u,r);t.damageText.spawn(r,l.x[u],l.scale[u]*.7,l.z[u],!1);const g=Math.sqrt(d*d+f*f)||1;l.push(u,d/g,f/g,4),v||(l.stun[u]=Math.max(l.stun[u],o)),v&&t.onKill(u)}t.effects.spawnRing(i,n,s+.6,.6,.75,1.1,.4),t.effects.spawnFlash(i,n,.7,.85,1.2,s*.8),t.particles.burst(i,n,.6,.72,1,12,6),t.effects.spawnDecal?.(i,n,s*.7,.55,.68,1),t.effects.spawnLight?.(i,n,.5,.65,1,s*2.2,.18)}}class WM extends hi{id="poison";baseCooldown=2.8;fire(t){const e=(2.4+(this.level-1)*.3)*t.stats.areaMul,i=4+(this.level-1)*.35,n=9*t.stats.damageMul*(1+(this.level-1)*.15),s=t.enemies;let r=t.px,o=t.pz,l=-1;const h=e*e;for(let c=0;c<6;c++){const u=s.randomAlive();if(u<0)break;const d=s.x[u],f=s.z[u],m=t.hash.query(d,f,e,t.scratch);let v=0;for(let g=0;g<m;g++){const p=t.scratch[g];if(s.alive[p]===0)continue;const w=s.x[p]-d,T=s.z[p]-f;w*w+T*T<=h&&v++}v>l&&(l=v,r=d,o=f)}l<0||t.zones.spawn(r,o,e,i,n,.3,1.3,.5)}}class be extends hi{id="twinring";baseCooldown=1.6;static CAP=12;static HITSET=16;static OUT_SPEED=13;static RET_SPEED=15;static MAX_LIFE=4;bx=new Float32Array(be.CAP);bz=new Float32Array(be.CAP);dirX=new Float32Array(be.CAP);dirZ=new Float32Array(be.CAP);dist=new Float32Array(be.CAP);maxD=new Float32Array(be.CAP);dmgv=new Float32Array(be.CAP);rad=new Float32Array(be.CAP);life=new Float32Array(be.CAP);spin=new Float32Array(be.CAP);phase=new Uint8Array(be.CAP);active=new Uint8Array(be.CAP);hitset=new Int32Array(be.CAP*be.HITSET);hitN=new Uint8Array(be.CAP);update(t){super.update(t),this.simulate(t)}fire(t){const e=1+Math.floor((this.level-1)/2)+t.stats.projectileBonus,i=fi(t,12,this.level,.13),n=(6+(this.level-1)*.5)*t.stats.rangeMul,s=Math.atan2(t.aimZ,t.aimX);for(let r=0;r<e;r++){const o=s+(r-(e-1)*.5)*.2;this.throwRing(t,Math.cos(o),Math.sin(o),i,n)}}throwRing(t,e,i,n,s){let r=-1;for(let o=0;o<be.CAP;o++)if(this.active[o]===0){r=o;break}r<0||(this.bx[r]=t.px,this.bz[r]=t.pz,this.dirX[r]=e,this.dirZ[r]=i,this.dist[r]=0,this.maxD[r]=s,this.dmgv[r]=n,this.rad[r]=.9,this.life[r]=be.MAX_LIFE,this.spin[r]=0,this.phase[r]=0,this.hitN[r]=0,this.active[r]=1)}simulate(t){const e=be.CAP;for(let i=0;i<e;i++)if(this.active[i]!==0){if(this.life[i]-=t.dt,this.spin[i]+=t.dt*16,this.phase[i]===0){const n=be.OUT_SPEED*t.dt;this.bx[i]+=this.dirX[i]*n,this.bz[i]+=this.dirZ[i]*n,this.dist[i]+=n,this.dist[i]>=this.maxD[i]&&(this.phase[i]=1,this.hitN[i]=0)}else{const n=t.px-this.bx[i],s=t.pz-this.bz[i],r=Math.hypot(n,s)||1,o=n/r,l=s/r,h=be.RET_SPEED*t.dt,c=Math.min(1,r/this.maxD[i])*3.4;if(this.bx[i]+=o*h+-l*c*t.dt,this.bz[i]+=l*h+o*c*t.dt,r<=.9){this.active[i]=0;continue}}if(this.life[i]<=0){this.active[i]=0;continue}this.hitScan(t,i),this.renderBody(t,i)}}hitScan(t,e){const i=t.enemies,n=this.bx[e],s=this.bz[e],r=this.rad[e],o=e*be.HITSET,l=t.hash.query(n,s,r+1,t.scratch);for(let h=0;h<l;h++){const c=t.scratch[h];if(i.alive[c]===0)continue;const u=i.x[c]-n,d=i.z[c]-s,f=r+i.radius[c];if(u*u+d*d>f*f)continue;let m=!1;const v=this.hitN[e];for(let p=0;p<v;p++)if(this.hitset[o+p]===c){m=!0;break}if(m)continue;v<be.HITSET&&(this.hitset[o+this.hitN[e]++]=c);const g=i.damageAt(c,this.dmgv[e]);if(t.damageText.spawn(this.dmgv[e],i.x[c],i.scale[c]*.7,i.z[c],!1),!g){const p=Math.sqrt(u*u+d*d)||1;i.push(c,u/p,d/p,2)}t.effects.spawnRing(i.x[c],i.z[c],1,1.6,.5,.3,.16),g&&t.onKill(c)}}renderBody(t,e){const i=this.bx[e],n=this.bz[e],s=this.spin[e],r=.34;t.particles.emit(i+Math.cos(s)*r,.9,n+Math.sin(s)*r,0,0,0,.95,.62,.14,.6,.1,0,.9),t.particles.emit(i+Math.cos(s+Math.PI)*r,.9,n+Math.sin(s+Math.PI)*r,0,0,0,.9,.12,.14,.6,.1,0,.9),t.particles.emit(i,.9,n,0,0,0,.5,.22,.08,.42,.08,0,.9),t.rng.next()<.6&&t.effects.spawnLight?.(i,n,.42,.3,.09,1.5,.1)}}class XM extends hi{id="zhanma";level=8;baseCooldown=1;fire(t){const e=5.5*t.stats.areaMul;Mc(t,t.px,t.pz,t.aimX,t.aimZ,e,1.2,fi(t,26,8,.16),4),t.effects.spawnSlashArc(t.px,t.pz,t.aimX,t.aimZ,e,1.2,.6,2.4,1.2);const i=fi(t,22,8,.16),n=Math.atan2(t.aimZ,t.aimX);for(let s=-1;s<=1;s++){const r=n+s*.28;t.projectiles.spawn(t.px,t.pz,Math.cos(r),Math.sin(r),12,i,1.4,6,1.4,as,.7,2.4,1.2,3,2.2)}}}class qM extends hi{id="bamen";level=8;baseCooldown=1.3;fire(t){const e=8+t.stats.projectileBonus,i=fi(t,12,8,.14),n=9*t.stats.rangeMul,s=t.rng.next()*Math.PI*2;for(let r=0;r<e;r++){const o=s+r/e*Math.PI*2;t.projectiles.spawn(t.px,t.pz,Math.cos(o),Math.sin(o),n,i,.55,6,3,bc,1.6,1.9,2.4,1.2,1,!0,5)}}}class $M extends hi{id="chibi";level=8;baseCooldown=2.4;fire(t){const e=18*t.stats.damageMul,i=t.aimX,n=t.aimZ;for(let s=0;s<3;s++){const r=1.5+s*2.2;t.zones.spawn(t.px+i*r,t.pz+n*r,(2.6+s*.4)*t.stats.areaMul,2.6,e,2.6,.7,.2,i*4.5,n*4.5)}}}class jM extends hi{id="tianfa";level=8;baseCooldown=2;hitBuf=new Int32Array(8);fire(t){const e=fi(t,24,8,.15),i=3+t.stats.projectileBonus,n=this.hitBuf;for(let s=0;s<i;s++){let r=t.enemies.randomAlive();if(r<0)break;t.effects.spawnLightning(t.enemies.x[r],t.enemies.z[r]);let o=t.enemies.x[r],l=t.enemies.z[r];n[0]=r;let h=1;for(let c=0;c<6;c++){const u=t.enemies,d=u.damageAt(r,e);t.damageText.spawn(e,u.x[r],u.scale[r]*.7,u.z[r],!0),d&&t.onKill(r);let f=-1,m=36;const v=t.hash.query(o,l,6,t.scratch);for(let g=0;g<v;g++){const p=t.scratch[g];if(u.alive[p]===0)continue;let w=!1;for(let y=0;y<h;y++)n[y]===p&&(w=!0);if(w)continue;const T=u.x[p]-o,M=u.z[p]-l,A=T*T+M*M;A<m&&(m=A,f=p)}if(f<0)break;t.effects.spawnChainArc(o,l,t.enemies.x[f],t.enemies.z[f]),t.particles.lightningSpark(t.enemies.x[f],t.enemies.z[f],8),o=t.enemies.x[f],l=t.enemies.z[f],r=f,h<n.length&&(n[h++]=f)}}}}class ZM extends hi{id="yuanrong";level=8;baseCooldown=.5;fire(t){const i=fi(t,9,8,.12),n=16*t.stats.rangeMul;for(let s=0;s<12;s++){const r=s/12*Math.PI*2;t.projectiles.spawn(t.px,t.pz,Math.cos(r),Math.sin(r),n,i,.45,2,1.5,$f,2.6,1.4,.5,1.5,.55)}}}const KM={spear:IM,guandao:UM,zhangba:kM,baiyu:NM,crossbow:zM,fire:OM,thunder:BM,orbit:HM,halberd:GM,cavalry:VM,caltrop:Mi,poison:WM,twinring:be,zhanma:XM,bamen:qM,chibi:$M,tianfa:jM,yuanrong:ZM};function Ra(a){const t=KM[a];return new t}class YM{root;cardEls=[];rerollBtn;titleEl;hintEl;onPick=null;onReroll=null;count=0;active=!1;constructor(){this.root=document.createElement("div"),this.root.className="levelup-overlay";const t=document.createElement("div");t.className="levelup-wrap";const e=document.createElement("div");e.className="levelup-title",this.titleEl=e,t.appendChild(e);const i=document.createElement("div");i.className="levelup-row";for(let r=0;r<3;r++){const o=document.createElement("div");o.className="levelup-card";const l=r;o.addEventListener("click",()=>this.pick(l)),i.appendChild(o),this.cardEls.push(o)}t.appendChild(i);const n=document.createElement("div");n.className="levelup-bottom";const s=document.createElement("div");s.className="levelup-hint",this.hintEl=s,n.appendChild(s),this.rerollBtn=document.createElement("div"),this.rerollBtn.className="levelup-reroll",this.rerollBtn.addEventListener("click",()=>{this.onReroll&&this.onReroll()}),n.appendChild(this.rerollBtn),t.appendChild(n),this.root.appendChild(t),document.body.appendChild(this.root)}open(t,e,i,n,s){this.onPick=n,this.onReroll=s,this.count=t.length;for(let r=0;r<this.cardEls.length;r++){const o=this.cardEls[r],l=t[r];if(l){o.style.display="flex",o.style.borderColor=l.rare?"#ffe9a8":l.accent,o.style.boxShadow=l.rare?"0 0 26px rgba(255,220,120,0.4),inset 0 0 0 1px rgba(255,220,120,0.4)":"0 0 18px rgba(232,198,103,0.12),inset 0 0 0 1px rgba(232,198,103,0.12)";const h=l.badge?`<div class="lc-badge" style="background:${l.accent}22;color:${l.accent};border-color:${l.accent}66;">${l.badge}</div>`:"",c=l.count?/(\d+)\s*\/\s*(\d+)/.exec(l.count):null,u=c?c[1]===c[2]:!1,d=l.count?`<span class="lc-count${u?" full":""}">${l.count}</span>`:"",f=l.evoHint?`<div class="lc-evohint">${l.evoHint}</div>`:"";o.innerHTML=h+`<div class="lc-symbol" style="color:${l.accent};border-color:${l.accent};box-shadow:0 0 14px ${l.accent}55;">${l.symbol}</div><div class="lc-tag" style="color:${l.accent};">${l.tag}${d}</div><div class="lc-title">${l.title}</div><div class="lc-hanja" style="color:${l.accent};">${l.hanja}</div><div class="lc-desc">${l.desc}</div>`+f+`<div class="lc-num">${r+1}</div>`,o.animate([{transform:"translateY(26px) scale(0.9)",opacity:0},{transform:"translateY(0) scale(1)",opacity:1}],{duration:300,delay:r*90,easing:"cubic-bezier(0.2,0.9,0.3,1)",fill:"backwards"})}else o.style.display="none"}this.titleEl.innerHTML=`${it("levelupTitle")} <span>選一</span>`,this.hintEl.textContent=it("levelupHint"),this.rerollBtn.textContent=it("reroll",{n:e}),this.rerollBtn.style.opacity=i?"1":"0.4",this.rerollBtn.style.pointerEvents=i?"auto":"none",this.root.style.display="flex",this.active=!0}pick(t){if(!this.active||t>=this.count)return;this.active=!1,this.root.style.display="none";const e=this.onPick;this.onPick=null,this.onReroll=null,e&&e(t)}close(){this.active=!1,this.root.style.display="none"}}const Dd=6,JM=6;class QM{root;timerEl;killsEl;levelEl;goldEl;xpFill;hpFill;hpDelay;hpText;musouWrap;musouFill;musouHint;comboEl;bossWrap;bossFill;bossName;bannerLayer;bannerQueue=[];bannerSeq=0;bannerPlaying=!1;quoteLayer;bossActiveNow=!1;objWrap;objTitle;objSub;objBarTrack;objBarFill;objCountdown;objVisible=!1;objDanger=!1;feverEl;feverOn=!1;slotBar;bottom;seenSlots=new Set;weaponsFullSeen=!1;lastCombo=0;wasReady=!1;touch;constructor(t=!1){this.touch=t;const e=document.createElement("div");e.className="hud-top",e.style.cssText=["position:fixed","top:calc(env(safe-area-inset-top,0px) + 10px)","left:0","right:0","display:flex","flex-direction:column","align-items:center","gap:6px","pointer-events:none","z-index:20","transform-origin:top center",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";"),this.timerEl=document.createElement("div"),this.timerEl.style.cssText="color:#f0e4c0;font-size:34px;letter-spacing:3px;text-shadow:0 2px 8px rgba(0,0,0,0.8);font-variant-numeric:tabular-nums;",this.timerEl.textContent="00:00",e.appendChild(this.timerEl);const i=document.createElement("div");i.style.cssText="display:flex;gap:20px;color:#c9cdda;font-size:15px;letter-spacing:1px;align-items:center;",this.levelEl=document.createElement("div"),this.levelEl.textContent="Lv 1",this.killsEl=document.createElement("div"),this.killsEl.style.cssText="font-variant-numeric:tabular-nums;",this.killsEl.textContent=`${it("hudKillsLabel")} 0`,this.goldEl=document.createElement("div"),this.goldEl.style.cssText="color:#e8c667;font-variant-numeric:tabular-nums;",this.goldEl.textContent="⟡ 0",i.appendChild(this.levelEl),i.appendChild(this.killsEl),i.appendChild(this.goldEl),e.appendChild(i);const n=document.createElement("div");n.style.cssText="width:min(70vw,520px);height:7px;background:rgba(20,22,30,0.85);border:1px solid rgba(232,198,103,0.3);border-radius:4px;overflow:hidden;",this.xpFill=document.createElement("div"),this.xpFill.style.cssText="height:100%;width:0%;background:linear-gradient(90deg,#5aa9ff,#a9d4ff);box-shadow:0 0 8px rgba(120,180,255,0.7);",n.appendChild(this.xpFill),e.appendChild(n),this.bossWrap=document.createElement("div"),this.bossWrap.style.cssText="display:none;flex-direction:column;align-items:center;gap:5px;margin-top:12px;",this.bossName=document.createElement("div"),this.bossName.style.cssText="color:#ff7a68;font-size:19px;letter-spacing:4px;text-shadow:0 0 12px rgba(232,92,74,0.7),0 2px 4px rgba(0,0,0,0.9);",this.bossWrap.appendChild(this.bossName);const s=document.createElement("div");s.style.cssText="width:min(80vw,640px);height:14px;background:rgba(20,10,10,0.85);border:1px solid rgba(232,92,74,0.5);border-radius:4px;overflow:hidden;",this.bossFill=document.createElement("div"),this.bossFill.style.cssText="height:100%;width:100%;background:linear-gradient(90deg,#8a1f16,#e85c4a,#e8c667);box-shadow:0 0 10px rgba(232,92,74,0.6);transition:width 0.1s;",s.appendChild(this.bossFill),this.bossWrap.appendChild(s),e.appendChild(this.bossWrap),this.objWrap=document.createElement("div"),this.objWrap.className="hud-objective",this.objWrap.style.cssText=["display:none","flex-direction:column","align-items:center","gap:4px","max-width:min(92vw,440px)","box-sizing:border-box","margin-top:10px","padding:7px 18px","border:1px solid rgba(232,198,103,0.42)","border-radius:9px","background:linear-gradient(180deg,rgba(22,19,12,0.9),rgba(12,11,8,0.92))","box-shadow:0 3px 16px rgba(0,0,0,0.5),0 0 14px rgba(232,198,103,0.1)"].join(";");const r=document.createElement("div");r.style.cssText="display:flex;gap:12px;align-items:baseline;justify-content:center;flex-wrap:wrap;max-width:100%;",this.objTitle=document.createElement("div"),this.objTitle.style.cssText="color:#f4e6bd;font-size:17px;letter-spacing:2px;text-align:center;line-height:1.25;text-shadow:0 1px 6px rgba(0,0,0,0.8);",this.objCountdown=document.createElement("div"),this.objCountdown.style.cssText="display:none;color:#e8c667;font-size:15px;letter-spacing:1px;font-variant-numeric:tabular-nums;",r.appendChild(this.objTitle),r.appendChild(this.objCountdown),this.objSub=document.createElement("div"),this.objSub.style.cssText="display:none;color:#b9b18c;font-size:12px;letter-spacing:1px;text-align:center;line-height:1.3;",this.objBarTrack=document.createElement("div"),this.objBarTrack.style.cssText="display:none;width:100%;height:5px;border-radius:3px;background:rgba(20,18,12,0.9);border:1px solid rgba(232,198,103,0.28);overflow:hidden;",this.objBarFill=document.createElement("div"),this.objBarFill.style.cssText="height:100%;width:0%;background:linear-gradient(90deg,#a8791f,#e8c667);box-shadow:0 0 6px rgba(232,198,103,0.4);transition:width 0.18s;",this.objBarTrack.appendChild(this.objBarFill),this.objWrap.appendChild(r),this.objWrap.appendChild(this.objSub),this.objWrap.appendChild(this.objBarTrack),e.appendChild(this.objWrap),document.body.appendChild(e),this.root=e,this.slotBar=document.createElement("div"),this.slotBar.className="hud-slots",this.slotBar.style.cssText=["position:fixed","top:calc(env(safe-area-inset-top,0px) + 10px)","left:calc(env(safe-area-inset-left,0px) + 10px)","display:flex","flex-direction:column","gap:6px","pointer-events:none","z-index:20","transform-origin:top left"].join(";");const o=document.createElement("div");o.style.cssText="display:flex;gap:4px;flex-wrap:wrap;max-width:220px;";const l=document.createElement("div");l.style.cssText="display:flex;gap:4px;flex-wrap:wrap;max-width:220px;",this.slotBar.appendChild(o),this.slotBar.appendChild(l),this.slotBar._w=o,this.slotBar._p=l,document.body.appendChild(this.slotBar);const h=document.createElement("div");h.className="hud-bottom",h.style.cssText=["position:fixed",`bottom:calc(env(safe-area-inset-bottom,0px) + ${this.touch?"15vh":"22px"})`,"left:0",`right:${this.touch?"calc(env(safe-area-inset-right,0px) + 134px)":"0"}`,"display:flex","flex-direction:column","align-items:center","gap:6px","pointer-events:none","z-index:20","transform-origin:bottom center",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";"),this.musouWrap=document.createElement("div"),this.musouWrap.style.cssText=`display:${this.touch?"none":"flex"};flex-direction:column;align-items:center;gap:2px;`,this.musouHint=document.createElement("div"),this.musouHint.style.cssText="color:#e8c667;font-size:12px;letter-spacing:2px;opacity:0;transition:opacity 0.2s;",this.musouHint.innerHTML=it("musouHint"),this.musouWrap.appendChild(this.musouHint);const c=document.createElement("div");c.style.cssText="width:min(46vw,320px);height:9px;background:rgba(28,22,10,0.85);border:1px solid rgba(232,198,103,0.4);border-radius:5px;overflow:hidden;",this.musouFill=document.createElement("div"),this.musouFill.style.cssText="height:100%;width:0%;background:linear-gradient(90deg,#a8791f,#e8c667,#fff2c0);box-shadow:0 0 8px rgba(232,198,103,0.7);",c.appendChild(this.musouFill),this.musouWrap.appendChild(c),h.appendChild(this.musouWrap);const u=document.createElement("div");u.style.cssText=`width:${this.touch?"min(56vw,340px)":"min(60vw,420px)"};height:16px;background:rgba(20,22,30,0.85);border:1px solid rgba(232,198,103,0.35);border-radius:5px;overflow:hidden;position:relative;`,this.hpDelay=document.createElement("div"),this.hpDelay.style.cssText="position:absolute;left:0;top:0;height:100%;width:100%;background:rgba(255,225,210,0.7);transition:width 0.45s ease-out 0.14s;",u.appendChild(this.hpDelay),this.hpFill=document.createElement("div"),this.hpFill.style.cssText="position:absolute;left:0;top:0;height:100%;width:100%;background:linear-gradient(90deg,#c0362b,#e85c4a);box-shadow:0 0 8px rgba(232,92,74,0.6);transition:width 0.12s;",u.appendChild(this.hpFill),this.hpText=document.createElement("div"),this.hpText.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;letter-spacing:1px;text-shadow:0 1px 2px rgba(0,0,0,0.9);font-variant-numeric:tabular-nums;",this.hpText.textContent="100 / 100",u.appendChild(this.hpText),h.appendChild(u),document.body.appendChild(h),this.bottom=h,this.comboEl=document.createElement("div"),this.comboEl.style.cssText=["position:fixed","right:28px","top:38%","display:none","flex-direction:column","align-items:center","pointer-events:none","z-index:20",'font-family:"Nanum Myeongjo","Times New Roman",serif',"text-shadow:0 0 12px rgba(232,198,103,0.5)"].join(";"),document.body.appendChild(this.comboEl),this.bannerLayer=document.createElement("div"),this.bannerLayer.style.cssText=["position:fixed","inset:0","display:flex","align-items:center","justify-content:center","pointer-events:none","z-index:32",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";"),document.body.appendChild(this.bannerLayer),this.quoteLayer=document.createElement("div"),this.quoteLayer.style.cssText=["position:fixed","top:calc(env(safe-area-inset-top,0px) + 96px)","left:0","right:0","display:flex","justify-content:center","padding:0 12px","pointer-events:none","z-index:21",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";"),document.body.appendChild(this.quoteLayer),this.feverEl=document.createElement("div"),this.feverEl.style.cssText=["position:fixed","inset:0","pointer-events:none","opacity:0","z-index:29","transition:opacity 0.25s","box-shadow:inset 0 0 120px 24px rgba(255,180,60,0.55),inset 0 0 40px 8px rgba(255,120,30,0.5)"].join(";"),document.body.appendChild(this.feverEl)}setFever(t){t!==this.feverOn&&(this.feverOn=t,t?(this.feverEl.style.opacity="1",this.feverEl.animate([{filter:"brightness(1)"},{filter:"brightness(1.5)"},{filter:"brightness(1)"}],{duration:700,iterations:1/0})):(this.feverEl.style.opacity="0",this.feverEl.getAnimations().forEach(e=>e.cancel())))}setVisible(t){this.root.style.display=t?"flex":"none",this.slotBar.style.display=t?"flex":"none",this.bottom.style.display=t?"flex":"none",t||(this.comboEl.style.display="none",this.bossWrap.style.display="none",this.quoteLayer.textContent="",this.bannerQueue.length=0,this.bannerPlaying=!1,this.bannerLayer.textContent="",this.setFever(!1),this.objVisible=!1,this.objDanger=!1,this.objCountdown.classList.remove("obj-danger"),this.objCountdown.style.color="#e8c667",this.objWrap.getAnimations().forEach(e=>e.cancel()),this.objWrap.style.display="none",this.reflowQuote())}setObjective(t){if(!t){if(!this.objVisible)return;this.objVisible=!1,this.objDanger&&(this.objDanger=!1,this.objCountdown.classList.remove("obj-danger"),this.objCountdown.style.color="#e8c667");const i=this.objWrap,n=i.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease-out"});n.onfinish=()=>{this.objVisible||(i.style.display="none")},this.reflowQuote();return}if(this.objTitle.textContent=t.title,t.sub?(this.objSub.textContent=t.sub,this.objSub.style.display=""):this.objSub.style.display="none",t.progress01!==void 0&&t.progress01>=0?(this.objBarTrack.style.display="",this.objBarFill.style.width=`${Math.max(0,Math.min(1,t.progress01))*100}%`,this.objBarFill.style.background=t.color?`linear-gradient(90deg,${t.color},${t.color})`:"linear-gradient(90deg,#a8791f,#e8c667)"):this.objBarTrack.style.display="none",t.countdownSec!==void 0&&t.countdownSec>=0){const i=Math.ceil(t.countdownSec),n=Math.floor(i/60),s=i%60;this.objCountdown.textContent=`${n}:${s.toString().padStart(2,"0")}`,this.objCountdown.style.display="";const r=t.countdownSec<=10;r!==this.objDanger&&(this.objDanger=r,this.objCountdown.classList.toggle("obj-danger",r),this.objCountdown.style.color=r?"#ff6a58":"#e8c667")}else this.objCountdown.style.display="none",this.objDanger&&(this.objDanger=!1,this.objCountdown.classList.remove("obj-danger"),this.objCountdown.style.color="#e8c667");const e=this.objVisible;this.objVisible=!0,this.objWrap.style.display="flex",this.reflowQuote(),e||this.objWrap.animate([{opacity:0,transform:"translateY(-6px)"},{opacity:1,transform:"translateY(0)"}],{duration:200,easing:"ease-out"})}reflowQuote(){if(this.objVisible){const t=this.objWrap.getBoundingClientRect().bottom;this.quoteLayer.style.top=`${Math.round(t+8)}px`}else this.quoteLayer.style.top=`calc(env(safe-area-inset-top,0px) + ${this.bossActiveNow?164:96}px)`}setLoadout(t,e){const i=this.slotBar._w,n=this.slotBar._p;if(this.renderSlots(i,t,Dd),this.renderSlots(n,e,JM),!this.weaponsFullSeen&&t.length>=Dd){this.weaponsFullSeen=!0;const s=wt()==="en"?"Full Arsenal":"병법 만진";this.banner(`${s} 兵法滿陣`,"#e8c667",54,1700)}}renderSlots(t,e,i){for(;t.children.length<i;){const n=document.createElement("div");n.style.cssText=["position:relative","width:30px","height:30px","border-radius:6px","display:flex","align-items:center","justify-content:center","font-size:16px",'font-family:"Nanum Myeongjo",serif',"box-shadow:0 1px 4px rgba(0,0,0,0.6)","transition:border-color 0.2s,background 0.2s"].join(";");const s=document.createElement("span"),r=document.createElement("span");r.style.cssText="position:absolute;right:-2px;bottom:-4px;font-size:10px;color:#f0e4c0;background:rgba(0,0,0,0.7);border-radius:3px;padding:0 2px;line-height:1.2;",n.appendChild(s),n.appendChild(r),t.appendChild(n)}for(let n=0;n<i;n++){const s=t.children[n],r=s.children[0],o=s.children[1],l=e[n];l?(s.style.borderStyle="solid",s.style.borderWidth="1px",s.style.borderColor=l.accent,s.style.background="rgba(14,15,21,0.8)",r.style.color=l.accent,r.textContent=l.glyph,o.style.display="",o.textContent=String(l.level),this.seenSlots.has(l.id)||(this.seenSlots.add(l.id),s.animate([{transform:"scale(1.6)",filter:"brightness(2.2)"},{transform:"scale(1)",filter:"brightness(1)"}],{duration:420,easing:"ease-out"}))):(s.style.borderStyle="dashed",s.style.borderWidth="1px",s.style.borderColor="rgba(232,198,103,0.16)",s.style.background="rgba(10,11,16,0.4)",r.style.color="rgba(232,198,103,0.22)",r.textContent="·",o.style.display="none",o.textContent="")}}resetSlots(){this.seenSlots.clear(),this.weaponsFullSeen=!1;const t=this.slotBar._w,e=this.slotBar._p;t.textContent="",e.textContent=""}update(t){const e=Math.floor(t.time/60),i=Math.floor(t.time%60);this.timerEl.textContent=`${e.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`,this.killsEl.textContent=`${it("hudKillsLabel")} ${t.kills}`,this.levelEl.textContent=`Lv ${t.level}`,this.goldEl.textContent=`⟡ ${Math.floor(t.gold)}`,this.xpFill.style.width=`${Math.min(100,t.xp/t.nextXp*100)}%`;const n=Math.max(0,t.hp/t.maxHp*100);this.hpFill.style.width=`${n}%`,this.hpDelay.style.width=`${n}%`,this.hpText.textContent=`${Math.ceil(t.hp)} / ${Math.round(t.maxHp)}`,this.touch||(this.musouFill.style.width=`${Math.min(100,t.musouPct)}%`,t.musouReady&&!this.wasReady?(this.musouHint.style.opacity="1",this.musouWrap.animate([{filter:"brightness(1)"},{filter:"brightness(1.8)"},{filter:"brightness(1)"}],{duration:900,iterations:1/0})):!t.musouReady&&this.wasReady&&(this.musouHint.style.opacity="0",this.musouWrap.getAnimations().forEach(s=>s.cancel())),this.wasReady=t.musouReady),t.combo>=3?(this.comboEl.style.display="flex",this.comboEl.innerHTML=`<div style="color:#f0e4c0;font-size:52px;line-height:1;font-variant-numeric:tabular-nums;">${t.combo}</div><div style="color:#e8c667;font-size:16px;letter-spacing:2px;">${it("hudCombo")}</div>`,t.combo!==this.lastCombo&&this.punchCombo()):this.comboEl.style.display="none",this.lastCombo=t.combo,t.bossActive?(this.bossWrap.style.display="flex",this.bossName.textContent=`${t.bossName} ${t.bossHanja}`,this.bossFill.style.width=`${Math.max(0,t.bossFrac*100)}%`):this.bossWrap.style.display="none",t.bossActive!==this.bossActiveNow&&(this.bossActiveNow=t.bossActive,this.reflowQuote())}punchLevel(){this.levelEl.animate([{transform:"scale(1.35)",color:"#e8c667"},{transform:"scale(1)",color:"#c9cdda"}],{duration:260,easing:"ease-out"})}punchCombo(){this.comboEl.animate([{transform:"scale(1.3)"},{transform:"scale(1)"}],{duration:140,easing:"ease-out"})}banner(t,e,i,n=1400,s=0){for(this.bannerQueue.push({text:t,color:e,sizePx:i,durationMs:n,priority:s,seq:this.bannerSeq++});this.bannerQueue.length>2;){let r=0;for(let o=1;o<this.bannerQueue.length;o++){const l=this.bannerQueue[o],h=this.bannerQueue[r];(l.priority<h.priority||l.priority===h.priority&&l.seq<h.seq)&&(r=o)}this.bannerQueue.splice(r,1)}this.bannerPlaying||this.playNextBanner()}playNextBanner(){if(this.bannerQueue.length===0){this.bannerPlaying=!1;return}let t=0;for(let s=1;s<this.bannerQueue.length;s++){const r=this.bannerQueue[s],o=this.bannerQueue[t];(r.priority>o.priority||r.priority===o.priority&&r.seq<o.seq)&&(t=s)}const e=this.bannerQueue.splice(t,1)[0];this.bannerPlaying=!0;const i=document.createElement("div");i.textContent=e.text,i.style.cssText=["position:absolute",`color:${e.color}`,`font-size:min(${e.sizePx}px, 13vw)`,"letter-spacing:6px",`text-shadow:0 0 24px ${e.color}`,"white-space:nowrap"].join(";"),this.bannerLayer.appendChild(i);const n=i.animate([{transform:"scale(0.6)",opacity:0},{transform:"scale(1.1)",opacity:1,offset:.2},{transform:"scale(1)",opacity:1,offset:.75},{transform:"scale(1.05)",opacity:0}],{duration:e.durationMs,easing:"ease-out"});n.onfinish=()=>{i.remove(),this.playNextBanner()}}quote(t,e,i=3600){if(!e)return;this.quoteLayer.textContent="";const n=document.createElement("div");n.className="battle-quote",n.style.cssText=["width:min(680px,92vw)","padding:10px 16px","border:1px solid rgba(126,200,255,0.45)","border-radius:10px","background:linear-gradient(90deg,rgba(8,14,24,0.92),rgba(15,25,38,0.86))","box-shadow:0 4px 22px rgba(0,0,0,0.5),0 0 20px rgba(80,160,240,0.16)","display:flex","gap:10px","align-items:baseline","color:#e9f4ff","font-size:min(15px,3.6vw)","letter-spacing:0.4px","white-space:normal"].join(";");const s=document.createElement("b");s.textContent=t,s.style.cssText="color:#7ec8ff;white-space:nowrap;letter-spacing:2px;flex-shrink:0;";const r=document.createElement("span");r.textContent=`“${e}”`,r.style.cssText="line-height:1.4;",n.appendChild(s),n.appendChild(r),this.quoteLayer.appendChild(n);const o=n.animate([{transform:"translateY(-12px)",opacity:0},{transform:"translateY(0)",opacity:1,offset:.15},{transform:"translateY(0)",opacity:1,offset:.82},{transform:"translateY(-6px)",opacity:0}],{duration:i,easing:"ease-out"});o.onfinish=()=>n.remove()}}const xn={zhaoyun:{id:"zhaoyun",name:"탄지로",hanja:"竈門炭治郎",sheet:"sgrade",charIndex:17,portrait:"tanjiro",baseHp:100,baseSpeed:5.2,speedMul:1.1,damageMul:1,maxHpMul:1,cooldownMul:1,rangeMul:1,dmgTakenMul:1,startWeapon:"spear",bonusText:"이동속도 +10% (전집중 호흡)",musou:"zhaoyun"},guanyu:{id:"guanyu",name:"토미오카 기유",hanja:"冨岡義勇",sheet:"sgrade",charIndex:5,portrait:"tomioka",baseHp:110,baseSpeed:4.9,speedMul:1,damageMul:1.15,maxHpMul:1,cooldownMul:1,rangeMul:1,dmgTakenMul:1,startWeapon:"guandao",bonusText:"공격력 +15% (물의 호흡)",musou:"guanyu"},zhangfei:{id:"zhangfei",name:"카마도 네즈코",hanja:"竈門禰豆子",sheet:"sgrade",charIndex:15,portrait:"nezuko",baseHp:100,baseSpeed:4.8,speedMul:1,damageMul:1,maxHpMul:1.25,cooldownMul:1,rangeMul:1,dmgTakenMul:1,startWeapon:"zhangba",bonusText:"최대체력 +25% (혈귀술)",musou:"zhangfei"},zhugeliang:{id:"zhugeliang",name:"칸로지 미츠리",hanja:"甘露寺蜜璃",sheet:"sgrade",charIndex:19,portrait:"kanroji",baseHp:90,baseSpeed:4.9,speedMul:1,damageMul:1,maxHpMul:1,cooldownMul:.9,rangeMul:1,dmgTakenMul:1,startWeapon:"baiyu",bonusText:"쿨다운 -10% (사랑의 호흡)",musou:"zhugeliang"},huangzhong:{id:"huangzhong",name:"코쵸우 시노부",hanja:"胡蝶しのぶ",sheet:"sgrade",charIndex:6,portrait:"shinobu",baseHp:95,baseSpeed:4.9,speedMul:1,damageMul:1,maxHpMul:1,cooldownMul:1,rangeMul:1.2,dmgTakenMul:1,startWeapon:"crossbow",bonusText:"사거리·투사체속도 +20% (벌레의 호흡)",musou:"huangzhong"},sunshangxiang:{id:"sunshangxiang",name:"아카자",hanja:"猗窩座",sheet:"sgrade",charIndex:20,portrait:"akaza",baseHp:90,baseSpeed:5.3,speedMul:1.1,damageMul:1,maxHpMul:1,cooldownMul:1,rangeMul:1.15,dmgTakenMul:1,startWeapon:"twinring",bonusText:"사거리·투사체속도 +15%, 이동속도 +10% (파괴살)",musou:"sunshangxiang"},lvbu:{id:"lvbu",name:"렌고쿠 쿄쥬로",hanja:"煉獄杏壽郎",sheet:"sgrade",charIndex:10,portrait:"rengoku",baseHp:120,baseSpeed:5,speedMul:1,damageMul:1.25,maxHpMul:1,cooldownMul:1,rangeMul:1,dmgTakenMul:1.25,startWeapon:"halberd",bonusText:"공격력 +25%, 받는 피해 +25% (화염의 호흡)",musou:"lvbu"}},tw={title:"bgm-title.mp3",battle:"bgm-battle.mp3",boss:"bgm-boss.mp3",siege:"bgm-siege.mp3",victory:"jingle-victory.mp3",defeat:"jingle-defeat.mp3"},Ll=1.2,ew=2;class iw{ctx=null;master=null;musicBus=null;sfxBus=null;noise=null;buffers={};loading={};current=null;fading=null;wantBgm=null;muted=!1;hitCount=0;gemStep=0;gemStepAt=0;init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{const s=window.AudioContext??window.webkitAudioContext;this.ctx=new s}catch{this.ctx=null;return}const t=this.ctx,e=t.createDynamicsCompressor();e.threshold.value=-14,e.knee.value=24,e.ratio.value=4,e.attack.value=.003,e.release.value=.25,e.connect(t.destination),this.master=t.createGain(),this.master.gain.value=this.muted?0:1,this.master.connect(e),this.musicBus=t.createGain(),this.musicBus.gain.value=.55,this.musicBus.connect(this.master),this.sfxBus=t.createGain(),this.sfxBus.gain.value=.9,this.sfxBus.connect(this.master);const i=t.sampleRate*.5;this.noise=t.createBuffer(1,i,t.sampleRate);const n=this.noise.getChannelData(0);for(let s=0;s<i;s++)n[s]=Math.random()*2-1;this.resume(),this.wantBgm&&this.playBgm(this.wantBgm)}async resume(){if(this.ctx&&this.ctx.state==="suspended")try{await this.ctx.resume()}catch{}}get initialized(){return this.ctx!==null}setMuted(t){if(this.muted=t,this.master&&this.ctx){const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t?0:1,e,.05)}}toggleMuted(){return this.setMuted(!this.muted),this.muted}base(){return"/oni-survivor/assets/audio/"}ensureBuffer(t){if(!this.ctx||this.buffers[t]||this.loading[t])return;const e=tw[t];e&&(this.loading[t]=!0,fetch(this.base()+e).then(i=>i.arrayBuffer()).then(i=>this.ctx.decodeAudioData(i)).then(i=>{this.buffers[t]=i,this.loading[t]=!1,this.wantBgm===t&&(!this.current||this.current.name!==t)&&this.startBgm(t,i,!0)}).catch(()=>{this.loading[t]=!1}))}playBgm(t){if(this.wantBgm=t,!this.ctx||!this.musicBus||this.current&&this.current.name===t)return;const e=this.buffers[t];if(!e){this.ensureBuffer(t),this.fadeOutCurrent();return}this.startBgm(t,e,!0)}playJingle(t){if(this.wantBgm=null,!this.ctx||!this.musicBus)return;this.fadeOutCurrent();const e=this.buffers[t];if(!e){this.ensureBuffer(t);let i=!1;const n=()=>{if(i)return;const s=this.buffers[t];s&&(i=!0,this.startBgm(t,s,!1))};setTimeout(n,400),setTimeout(n,1200);return}this.startBgm(t,e,!1)}startBgm(t,e,i){if(!this.ctx||!this.musicBus)return;const n=this.ctx.currentTime;this.fadeOutCurrent();const s=this.ctx.createBufferSource();s.buffer=e,s.loop=i;const r=this.ctx.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(1,n+Ll),s.connect(r).connect(this.musicBus),s.start(),i?this.current={src:s,gain:r,name:t}:s.onended=()=>{try{s.disconnect(),r.disconnect()}catch{}}}hardStopFading(){if(!this.fading||!this.ctx)return;const t=this.ctx.currentTime,{src:e,gain:i}=this.fading;try{i.gain.cancelScheduledValues(t),i.gain.setValueAtTime(0,t),e.stop(t+.02)}catch{}this.fading=null}fadeOutCurrent(){if(!this.ctx||!this.current)return;this.hardStopFading();const t=this.ctx.currentTime,{src:e,gain:i}=this.current;i.gain.cancelScheduledValues(t),i.gain.setValueAtTime(i.gain.value,t),i.gain.linearRampToValueAtTime(0,t+Ll);try{e.stop(t+Ll+.05)}catch{}const n={src:e,gain:i};this.fading=n,e.onended=()=>{this.fading===n&&(this.fading=null);try{e.disconnect(),i.disconnect()}catch{}},this.current=null}stopBgm(){this.wantBgm=null,this.fadeOutCurrent()}endFrame(){this.hitCount=0}sfx(t){if(!this.ctx||!this.sfxBus||this.ctx.state!=="running")return;if(t==="hit"){if(this.hitCount>=ew)return;this.hitCount++}const e=this.ctx.currentTime;switch(t){case"hit":this.playHit(e);break;case"gem":this.playGem(e);break;case"levelup":this.playGong(e,220,1.4,.5),this.playGong(e+.02,330,1.2,.35);break;case"cardSelect":this.playBlip(e,660,.08,"square",.18),this.playBlip(e+.05,990,.07,"square",.14);break;case"musou":this.playDrum(e),this.playHum(e);break;case"bossHorn":this.playHorn(e);break;case"evolve":this.playSweep(e);break;case"playerHit":this.playThud(e);break;case"playerHitProj":this.playBlip(e,92,.11,"sine",.3),this.playBlip(e+.012,128,.07,"triangle",.16);break;case"revive":this.playGong(e,523,2.2,.4),this.playGong(e+.08,784,2,.3),this.playGong(e+.16,1046,1.8,.24);break;case"uiClick":this.playBlip(e,440,.05,"triangle",.12);break;case"relic":this.playSweep(e),this.playGong(e,147,1.8,.4);break;case"buff":this.playGong(e,587,1,.34),this.playGong(e+.07,880,.9,.26);break;case"warn":this.playHorn(e);break;case"fever":this.playDrum(e),this.playBlip(e,660,.08,"square",.16),this.playBlip(e+.06,990,.08,"square",.14),this.playBlip(e+.12,1320,.08,"square",.12);break;case"explosion":this.playThud(e),this.playHit(e);break;case"heartbeat":this.playBlip(e,70,.09,"sine",.18),this.playBlip(e+.13,58,.11,"sine",.14);break;case"achievement":this.playGong(e,659,1.6,.34),this.playGong(e+.09,988,1.4,.26),this.playGong(e+.18,1319,1.2,.2);break}}env(t,e,i,n,s){t.gain.setValueAtTime(0,e),t.gain.linearRampToValueAtTime(i,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+n+s)}playHit(t){const e=this.ctx,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(180,t),i.frequency.exponentialRampToValueAtTime(60,t+.09);const n=e.createGain();this.env(n,t,.5,.002,.09),i.connect(n).connect(this.sfxBus),i.start(t),i.stop(t+.12);const s=e.createBufferSource();s.buffer=this.noise;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=1400,r.Q.value=.8;const o=e.createGain();this.env(o,t,.28,.001,.05),s.connect(r).connect(o).connect(this.sfxBus),s.start(t),s.stop(t+.07)}playGem(t){const e=this.ctx;t-this.gemStepAt<.8?this.gemStep=Math.min(14,this.gemStep+1):this.gemStep=0,this.gemStepAt=t;const i=[0,2,4,7,9],n=Math.floor(this.gemStep/5),s=i[this.gemStep%5]+n*12,r=523.25*Math.pow(2,s/12),o=e.createOscillator();o.type="triangle",o.frequency.setValueAtTime(r,t);const l=e.createGain();this.env(l,t,.16,.004,.14),o.connect(l).connect(this.sfxBus),o.start(t),o.stop(t+.18)}playGong(t,e,i,n){const s=this.ctx,r=s.createOscillator();r.type="sine",r.frequency.setValueAtTime(e,t),r.frequency.exponentialRampToValueAtTime(e*.985,t+i);const o=s.createGain();this.env(o,t,n,.006,i);const l=s.createOscillator();l.type="sine",l.frequency.setValueAtTime(e*2.76,t);const h=s.createGain();this.env(h,t,n*.3,.006,i*.5),r.connect(o).connect(this.sfxBus),l.connect(h).connect(this.sfxBus),r.start(t),r.stop(t+i+.1),l.start(t),l.stop(t+i+.1)}playBlip(t,e,i,n,s){const r=this.ctx,o=r.createOscillator();o.type=n,o.frequency.setValueAtTime(e,t);const l=r.createGain();this.env(l,t,s,.002,i),o.connect(l).connect(this.sfxBus),o.start(t),o.stop(t+i+.02)}playDrum(t){const e=this.ctx,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(160,t),i.frequency.exponentialRampToValueAtTime(45,t+.25);const n=e.createGain();this.env(n,t,.8,.002,.35),i.connect(n).connect(this.sfxBus),i.start(t),i.stop(t+.4);const s=e.createBufferSource();s.buffer=this.noise;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=800;const o=e.createGain();this.env(o,t,.4,.001,.08),s.connect(r).connect(o).connect(this.sfxBus),s.start(t),s.stop(t+.1)}playHum(t){const e=this.ctx,i=e.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(70,t);const n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=220;const s=e.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.22,t+.15),s.gain.linearRampToValueAtTime(.18,t+.6),s.gain.exponentialRampToValueAtTime(1e-4,t+1.1),i.connect(n).connect(s).connect(this.sfxBus),i.start(t),i.stop(t+1.2)}playHorn(t){const e=this.ctx,i=e.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(140,t),i.frequency.linearRampToValueAtTime(175,t+.5);const n=e.createOscillator();n.frequency.value=5.5;const s=e.createGain();s.gain.value=6,n.connect(s).connect(i.frequency);const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=900;const o=e.createGain();o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.5,t+.12),o.gain.linearRampToValueAtTime(.45,t+.9),o.gain.exponentialRampToValueAtTime(1e-4,t+1.4),i.connect(r).connect(o).connect(this.sfxBus),i.start(t),i.stop(t+1.5),n.start(t),n.stop(t+1.5)}playSweep(t){const e=this.ctx,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(300,t),i.frequency.exponentialRampToValueAtTime(1200,t+.6);const n=e.createGain();this.env(n,t,.4,.02,.6),i.connect(n).connect(this.sfxBus),i.start(t),i.stop(t+.7);const s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(900,t),s.frequency.exponentialRampToValueAtTime(2400,t+.5);const r=e.createGain();this.env(r,t+.05,.18,.02,.45),s.connect(r).connect(this.sfxBus),s.start(t),s.stop(t+.6)}playThud(t){const e=this.ctx,i=e.createBufferSource();i.buffer=this.noise;const n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=300;const s=e.createGain();this.env(s,t,.45,.002,.16),i.connect(n).connect(s).connect(this.sfxBus),i.start(t),i.stop(t+.2);const r=e.createOscillator();r.type="sine",r.frequency.setValueAtTime(90,t),r.frequency.exponentialRampToValueAtTime(50,t+.15);const o=e.createGain();this.env(o,t,.35,.002,.15),r.connect(o).connect(this.sfxBus),r.start(t),r.stop(t+.2)}}const Pt=new iw,Dn={zhaoyun:{id:"liubei",name:"유비",hanja:"劉備",charIndex:7,attack:"slash",damage:30,cooldown:1.1,special:"rally",specialCd:16,line:{ko:"함께 갑시다!",en:"Forward, together!"},cr:1.6,cg:1.3,cb:.5},guanyu:{id:"caocao",name:"조조",hanja:"曹操",charIndex:0,attack:"lightning",damage:34,cooldown:1.45,special:"triplebolt",specialCd:18,line:{ko:"천하는 내 것이다",en:"The realm is mine."},cr:.7,cg:1,cb:2.4},zhangfei:{id:"zhaoyun",name:"조운",hanja:"趙雲",charIndex:17,attack:"slash",damage:32,cooldown:1,special:"pierce",specialCd:15,line:{ko:"이 한 몸으로 뚫겠소!",en:"I'll cut clean through!"},cr:.6,cg:1.4,cb:2.3},zhugeliang:{id:"zhouyu",name:"주유",hanja:"周瑜",charIndex:18,attack:"lightning",damage:36,cooldown:1.5,special:"firefan",specialCd:18,line:{ko:"적벽의 불을 보아라",en:"Behold the flames of Chibi!"},cr:2.4,cg:1,cb:.35},huangzhong:{id:"liubei",name:"유비",hanja:"劉備",charIndex:7,attack:"slash",damage:30,cooldown:1.1,special:"rally",specialCd:16,line:{ko:"함께 갑시다!",en:"Forward, together!"},cr:1.6,cg:1.3,cb:.5},lvbu:{id:"zhangliao",name:"장료",hanja:"張遼",charIndex:16,attack:"slash",damage:36,cooldown:1.05,special:"chargesweep",specialCd:16,line:{ko:"장료, 여기 있다!",en:"Zhang Liao stands here!"},cr:1.8,cg:1.5,cb:.7}},Id=45,nw=270,sw=[Dn.zhaoyun,Dn.guanyu,Dn.zhangfei,Dn.zhugeliang,Dn.lvbu];function aw(a,t){const e=sw.filter(i=>i.id!==a);return e[t()*e.length|0]}function rw(a){return wt()==="en"?a.line.en:a.line.ko}const ow=15,lw=7,hw=.64;class Ud{active=!1;attacks=0;kills=0;x=0;z=0;radius=.45;def=Dn.zhaoyun;sheet;quad;blockPx=0;dir=0;frame=0;animTime=0;attackTimer=0;specialTimer=0;posRingT=0;side=1;joinTime=Id;specialPhase=0;damageScale=1;joinDirX=0;joinDirZ=1;playerLevel=1;musouActive=!1;pendingSpecial=null;uv={u:0,v:0};constructor(t,e,i){this.sheet=e.sgrade,this.quad=new Nf(this.sheet,i,2.15),this.quad.setTint(.72,1.12,1.5),this.quad.setAlly(!0),this.quad.mesh.visible=!1,t.add(this.quad.mesh)}get definition(){return this.def}consumeSpecialEvent(){const t=this.pendingSpecial;return this.pendingSpecial=null,t}reset(t,e){this.def=e?.def??Dn[t]??Dn.zhaoyun,this.blockPx=this.def.charIndex*4*Nn,this.side=e?.side??1,this.joinTime=e?.joinTime??Id,this.specialPhase=e?.specialPhase??0,this.damageScale=1,this.active=!1,this.attacks=0,this.kills=0,this.animTime=0,this.attackTimer=0,this.specialTimer=0,this.pendingSpecial=null,this.quad.mesh.visible=!1}update(t,e,i,n,s,r){this.playerLevel=s,this.musouActive=r;let o=!1;if(!this.active){if(e<this.joinTime)return!1;this.active=!0,this.x=i.x-i.faceX*2.2+this.side*i.faceZ*1.4,this.z=i.z-i.faceZ*2.2-this.side*i.faceX*1.4,this.joinDirX=i.faceX||0,this.joinDirZ=i.faceZ||1,this.quad.mesh.visible=!0,this.specialTimer=this.def.specialCd*.5+this.specialPhase,this.joinSetpiece(n,i),o=!0}const l=i.x-i.faceX*2.2+this.side*i.faceZ*1.4,h=i.z-i.faceZ*2.2-this.side*i.faceX*1.4;let c=l-this.x,u=h-this.z;if(Math.hypot(c,u)>14)this.x=l,this.z=h,c=0,u=0;else{const m=1-Math.exp(-4.5*t);this.x+=c*m,this.z+=u*m}const f=Math.hypot(c,u)>.08;return this.dir=js(c,u,this.dir),f?(this.animTime+=t,this.frame=(this.animTime*lw|0)%4):this.frame=0,this.specialTimer-=t,this.specialTimer<=0&&this.nearestEnemy(n,18)>=0&&(this.useSpecial(n,i),this.specialTimer=this.def.specialCd),this.attackTimer-=t,this.attackTimer<=0&&this.attack(n),this.posRingT-=t,this.posRingT<=0&&(this.posRingT=.55,n.effects.spawnRing(this.x,this.z,1.5,.4,1.2,2,.5)),fc(this.sheet,this.blockPx,0,this.dir,this.frame,this.uv),this.quad.setUv(this.uv.u,this.uv.v),this.quad.setPosition(this.x,0,this.z),o}dmg(t,e){return t*e.stats.damageMul*(1+this.playerLevel*.05)*this.damageScale}nearestEnemy(t,e){const i=t.enemies,n=t.hash.query(this.x,this.z,e,t.scratch);let s=-1,r=e*e;for(let o=0;o<n;o++){const l=t.scratch[o];if(i.alive[l]===0)continue;const h=i.x[l]-this.x,c=i.z[l]-this.z,u=h*h+c*c;u<r&&(r=u,s=l)}return s}joinSetpiece(t,e){const i=this.def,n=e.faceX||0,s=e.faceZ||1;for(let r=1;r<=4;r++)t.particles.dust(this.x-n*(1.2*r),this.z-s*(1.2*r));t.effects.spawnThrust(this.x-n*4.5,this.z-s*4.5,n,s,4.5,1.4,i.cr,i.cg,i.cb,.2),t.effects.spawnFlash(this.x,this.z,i.cr,i.cg,i.cb,2),t.effects.spawnRing(this.x,this.z,2.8,i.cr,i.cg,i.cb,.45),this.aoe(t,this.x,this.z,6,this.dmg(60,t),7)}attack(t){const e=this.nearestEnemy(t,ow);if(e<0){this.attackTimer=.25;return}const i=t.enemies,n=i.x[e]-this.x,s=i.z[e]-this.z,r=Math.hypot(n,s)||1,o=n/r,l=s/r,h=this.dmg(this.def.damage,t),c=this.musouActive?1.3:1;if(this.def.attack==="lightning"){t.effects.spawnChainArc(this.x,this.z,i.x[e],i.z[e],this.def.cr,this.def.cg,this.def.cb),this.hit(t,e,o,l,h*c,3);const d=this.nearestOther(t,i.x[e],i.z[e],e,6);d>=0&&(t.effects.spawnChainArc(i.x[e],i.z[e],i.x[d],i.z[d],this.def.cr,this.def.cg,this.def.cb),this.hit(t,d,o,l,h*.8*c,2))}else t.effects.spawnSlashArc(this.x,this.z,o,l,5.5,.9,this.def.cr,this.def.cg,this.def.cb,.18),this.cone(t,o,l,5.5,h*c,4);this.attacks++;let u=this.def.cooldown*t.stats.cooldownMul;this.musouActive&&(u*=.5),this.attackTimer=u}useSpecial(t,e){const i=this.def;switch(i.special){case"rally":{t.effects.spawnRing(this.x,this.z,9,i.cr,i.cg,i.cb,.6),t.effects.spawnFlash(this.x,this.z,i.cr,i.cg,i.cb,4),this.aoe(t,this.x,this.z,9,this.dmg(70,t),6),e.heal(e.maxHp*.05);break}case"triplebolt":{for(let n=0;n<3;n++){const s=this.nthEnemy(t,18,n);if(s<0)break;t.effects.spawnLightning(t.enemies.x[s],t.enemies.z[s],i.cr,i.cg,i.cb),this.aoe(t,t.enemies.x[s],t.enemies.z[s],3.2,this.dmg(55,t),3)}break}case"pierce":{const n=this.nearestEnemy(t,18),s=n>=0?t.enemies.x[n]-this.x:e.faceX,r=n>=0?t.enemies.z[n]-this.z:e.faceZ,o=Math.hypot(s,r)||1,l=s/o,h=r/o;t.effects.spawnThrust(this.x,this.z,l,h,11,2.2,i.cr,i.cg,i.cb,.24),this.capsule(t,this.x,this.z,l,h,11,1.4,this.dmg(85,t),9),this.x+=l*8,this.z+=h*8,t.effects.spawnFlash(this.x,this.z,i.cr,i.cg,i.cb,3);break}case"firefan":{const n=this.nearestEnemy(t,18),s=n>=0?t.enemies.x[n]-this.x:e.faceX,r=n>=0?t.enemies.z[n]-this.z:e.faceZ,o=Math.hypot(s,r)||1,l=s/o,h=r/o;t.effects.spawnSlashArc(this.x,this.z,l,h,9,1.3,i.cr,i.cg,i.cb,.24),this.cone(t,l,h,9,this.dmg(60,t),5),t.zones.spawn(this.x+l*5,this.z+h*5,4,3,this.dmg(24,t),2.4,.9,.25);break}case"chargesweep":{t.effects.spawnRing(this.x,this.z,9,i.cr,i.cg,i.cb,.5),t.effects.spawnSlashArc(this.x,this.z,this.dir===2?1:-1,0,9,1.5,i.cr,i.cg,i.cb,.26),this.aoe(t,this.x,this.z,9,this.dmg(75,t),9);break}}this.pendingSpecial={line:rw(i),cr:i.cr,cg:i.cg,cb:i.cb}}hit(t,e,i,n,s,r){const o=t.enemies;if(o.alive[e]===0)return;const l=o.damageAt(e,s);t.damageText.spawn(s,o.x[e],o.scale[e]*.7,o.z[e],!1),o.push(e,i,n,r),l&&t.onKill(e)}aoe(t,e,i,n,s,r){const o=t.enemies,l=t.hash.query(e,i,n,t.scratch);for(let h=0;h<l;h++){const c=t.scratch[h];if(o.alive[c]===0)continue;const u=o.x[c]-e,d=o.z[c]-i,f=u*u+d*d;if(f>n*n)continue;const m=Math.sqrt(f)||1,v=o.damageAt(c,s);t.damageText.spawn(s,o.x[c],o.scale[c]*.7,o.z[c],!1),o.push(c,u/m,d/m,r),v&&(this.kills++,t.onKill(c))}}cone(t,e,i,n,s,r){const o=t.enemies,l=t.hash.query(this.x,this.z,n,t.scratch);for(let h=0;h<l;h++){const c=t.scratch[h];if(o.alive[c]===0)continue;const u=o.x[c]-this.x,d=o.z[c]-this.z,f=u*u+d*d;if(f>n*n)continue;const m=Math.sqrt(f)||1;if(u/m*e+d/m*i<hw)continue;const v=o.damageAt(c,s);t.damageText.spawn(s,o.x[c],o.scale[c]*.7,o.z[c],!1),o.push(c,u/m,d/m,r),v&&(this.kills++,t.onKill(c))}}capsule(t,e,i,n,s,r,o,l,h){const c=t.enemies,u=e+n*r,d=i+s*r,f=(e+u)*.5,m=(i+d)*.5,v=t.hash.query(f,m,r*.5+o+1.2,t.scratch);for(let g=0;g<v;g++){const p=t.scratch[g];if(c.alive[p]===0)continue;const w=o+c.radius[p];let T=((c.x[p]-e)*n+(c.z[p]-i)*s)/(r||1);T<0?T=0:T>r&&(T=r);const M=e+n*T,A=i+s*T,y=c.x[p]-M,E=c.z[p]-A;if(y*y+E*E>w*w)continue;const x=c.damageAt(p,l);t.damageText.spawn(l,c.x[p],c.scale[p]*.7,c.z[p],!1),c.push(p,n,s,h),x&&(this.kills++,t.onKill(p))}}nearestOther(t,e,i,n,s){const r=t.enemies,o=t.hash.query(e,i,s,t.scratch);let l=-1,h=s*s;for(let c=0;c<o;c++){const u=t.scratch[c];if(u===n||r.alive[u]===0)continue;const d=r.x[u]-e,f=r.z[u]-i,m=d*d+f*f;m<h&&(h=m,l=u)}return l}nthEnemy(t,e,i){const n=t.enemies,s=t.hash.query(this.x,this.z,e,t.scratch);let r=0;for(let o=0;o<s;o++){const l=t.scratch[o];if(n.alive[l]!==0){if(r===i)return l;r++}}return-1}}const Bh={zhaoyun:{name:"탄지로",select:"가마도 탄지로, 혈귀를 베기 위해 검을 들었습니다!",lines:["가자, 네즈코! 우리는 함께 가야 해!","꺾이지 마! 포기하지 마! 마음을 강하게 먹어라!","물이 되어라, 물의 호흡 제1형 수면 베기!","히노카미 카구라... 맑고 푸른 하늘!","인간은 상처를 입어도, 마음의 상처는 치유할 수 있다!","새벽에는 호흡을 가다듬고 훈련에 임한다.","한낮에는 네즈코의 나무 궤를 살펴본다.","저물녘에는 산 너머 귀살대의 임무를 지시받는다.","밤에는 일륜도를 쥔 채 오니들을 추격한다."]},guanyu:{name:"기유",select:"내 목숨을 걸고서라도 네즈코의 처분을 미뤄 다오.",lines:["생살여탈권을 남에게 쥐어주지 마라!","물은 모든 것을 정화하며 흐른다. 내 칼날끝도 마찬가지.","나는 수주의 자리에 걸맞지 않은 사람이다.","사비토… 네 몫까지 내가 살아 있어야 했는데…","물의 호흡 제11형, 잔잔한 물결(凪)!","말은 적게 하오. 한 번 뱉은 말은 돌이킬 수 없소.","새벽 칼을 갈며 나를 거쳐간 인연들을 헤아린다.","한낮에도 등을 곧추세워 부끄럼이 없다.","저물녘 긴 칼날을 닦으며 마음을 조율한다.","밤이 깊어도 동료들의 의를 저버린 적 없다."]},zhangfei:{name:"네즈코",select:"음… 음음! (오빠, 내가 같이 싸울게!)",lines:["음-! (혈귀술 폭혈!)","음음! (인간은 내 가족이다. 혈귀는 적이다.)","음! (오빠를 다치게 하지 마!)","음음음! (등꽃 향기가 싫어... 하지만 오빠 곁에 있을 거야.)","음! (햇빛 아래서 걷고 싶어...)","음음! (오빠가 싸운다면 나도 같이 싸우겠어.)","새벽엔 나무 상자 틈으로 새어드는 오빠의 숨소리를 듣는다.","한낮엔 어두운 상자 속에서 묵묵히 이동하는 오빠의 진동을 느낀다.","저물녘 상자 문이 열리고 별빛 아래로 나설 준비를 한다.","밤엔 오빠의 등 뒤를 노리는 혈귀들에게 발차기를 날린다."]},zhugeliang:{name:"타마요",select:"인간으로 되돌릴 약은 반드시 완성될 것입니다.",lines:["혈귀술, 감각을 어지럽히는 향기!","인간을 해치지 않고 오니를 무찌르는 방법을 갈구해 왔습니다.","무잔... 당신은 반드시 내가 지옥으로 보낼 것입니다.","유시로, 나를 도와 함께 약을 만들어 보아요.","의사로서, 그리고 한 인간으로서 속죄의 길을 걷겠습니다.","새벽에는 현미경으로 오니의 세포를 조사한다.","한낮에는 조용한 서재에서 한약재를 정성스레 다린다.","저물녘에는 동틀 녘의 기운이 사라지길 조용히 기다린다.","밤에는 혈귀술로 약물의 융합 상태를 확인한다."]},huangzhong:{name:"시노부",select:"벌레의 호흡, 춤(舞) — 나비 춤!",lines:["당신을 죽이지는 않겠어요, 그저 고통 없는 독을 놓아줄 뿐.","언니... 귀살대의 평화로운 세상을 제가 이어받겠어요.","등나무꽃에서 추출한 맹독이 온몸을 휘감아 돌 것입니다.","화내지 않았어요, 전 늘 웃고 있답니다.","오니와 인간이 사이좋게 지낼 수 있는 날이 올까요?","새벽엔 독약 가마의 온도를 조절해 본다.","한낮엔 나비 저택에서 부상병들을 돌본다.","저물녘엔 독침 주사기의 흠집을 매끄럽게 닦아낸다.","밤엔 소리 없이 날아다니는 나비처럼 혈귀를 찾아 나선다."]},lvbu:{name:"쿄쥬로",select:"마음을 불태워라. 한계를 뛰어넘어라!",lines:["맛있다! 맛있다! 맛있다!","어머니, 저처럼 강하게 태어난 자의 의무는 약자를 돕는 것입니다.","내 검이 있는 한, 이 열차 안의 단 한 사람도 죽게 두지 않는다!","화염의 호흡 제9형 — 렌고쿠(煉獄)!","가슴을 펴고 살아라. 꺾이지 마라.","새벽에는 단풍 가득한 숲에서 마음을 다잡는다.","한낮엔 동료 대원들과 도시락을 맛있게 비운다.","저물녘엔 약자를 지킬 검날을 곧게 세운다.","밤에는 무한열차의 달리는 길목을 수호한다."]},sunshangxiang:{name:"아카자",select:"너도 혈귀가 되어라. 나와 함께 무술의 극의를 걷자!",lines:["강한 자는 살아남고, 약한 자는 도태된다. 이것이 이치다.","파괴살 나침... 네 투기(鬪氣)가 다 보이는군!","쿄쥬로, 너는 이대로 죽기엔 너무나 아깝다!","더 강한 강자를 내놔라! 멈추지 말고 덤벼라!","내 주먹은 한계가 없다. 허공을 뚫고 지나가리라!","새벽에는 무림의 극한을 찾아 주먹을 내지른다.","한낮에는 조용히 눈을 감고 투기의 조화를 살핀다.","저물녘에는 붉은 노을을 보며 옛 기억의 단편을 헤매인다.","밤에는 끝없는 강자들과 생사를 겨룬다."]},liubei:{name:"우로코다키",select:"판단이 늦다! 정신 차려라!",lines:["물의 호흡의 기본은 물의 흐름과 하나가 되는 것이다.","네가 그 거대한 수련 바위를 벨 때까지, 나는 기다릴 것이다.","두 남매가 사람을 해치지 않을 것임을, 내가 보증하마.","돌아와 주었구나... 무사히 돌아와 줘서 고맙다.","마지막 시험을 통과하라. 좁사 산의 덫들을 뚫고 살아 돌아오너라.","새벽에는 좁사 산 꼭대기에서 수련 강도를 검토한다.","한낮에는 탄지로의 자세를 매섭게 지적한다.","저물녘에는 여우 가면의 액막이 가호를 기원한다.","밤에는 두 남매의 장래를 생각하며 편지를 적는다."]},caocao:{name:"사비토",select:"사내로 태어났다면 고통을 견뎌라!",lines:["네 노력은 충분하지 않아. 모든 노력을 쏟아부어 몸으로 터득해라!","기유는... 살아야 한다. 그 녀석은 살아남아 수주가 되어야 해.","여우 가면 아래에 숨겨둔 각오가, 네 검 끝에서 우는구나.","나는 너를 지켜볼 것이다. 저 바위를 가를 때까지.","죽음은 슬픈 것이 아냐, 각오가 부족했음을 탓할 뿐.","새벽에는 안개 속에서 수련의 시작을 알린다.","한낮에는 목검을 쥐고 탄지로의 빈틈을 파고든다.","저물녘에는 기유의 뒷모습을 조용히 지켜본다.","밤에는 사령(死靈)의 목소리가 들리는 좁사 산을 지킨다."]},zhouyu:{name:"유시로",select:"타마요 님께 무례하게 굴지 마라!",lines:["타마요 님은 아름다우셔. 오늘도, 내일도 아름다우실 거다!","내 혈귀술은 시각을 가리고 결계를 생성한다.","탄지로, 타마요 님의 곁에 너무 가까이 서지 마라.","우리는 숨어 살아야 해. 무잔의 추격자들을 따돌려야 한다.","타마요 님을 위해서라면 내 목숨도 아깝지 않다!","새벽에는 타마요 님의 연구 기록을 정리해 둔다.","한낮에는 햇빛 차단 막을 이중으로 점검한다.","저물녘에는 입구의 결계 눈가림 부적을 갱신한다.","밤에는 타마요 님을 위해 차를 끓이고 곁을 지킨다."]},zhangliao:{name:"이노스케",select:"저돌맹진! 저돌맹진!! 이 몸이 가신다!",lines:["어이, 몬지로! 나와 힘을 겨루자!","짐승의 호흡 제3형 — 찢어발기기!","이 몸은 산의 왕이다! 모든 동물들은 나를 따른다!","칼날을 둥근 돌로 두드려 톱니처럼 만드는 것이 내 스타일이다!","약한 소리 하지 마라! 강해지는 것 외엔 길이 없다!","새벽에는 산속의 짐승들과 달리기 시합을 한다.","한낮에는 멧돼지 가면의 가죽을 강물에 빤다.","저물녘에는 돌멩이로 일륜도의 칼날을 갈아댄다.","밤에는 제일 큰 혈귀의 기운을 감지하며 냄새를 쫓는다."]},yuanshao:{name:"도마",select:"나는 만세극락교의 교주란다. 슬픔도 아픔도 없는 극락으로 인도해 주마.",lines:["사람들은 참 불쌍해. 감정에 휩쓸려 아파하기만 하고.","내 얼음 부채는 아름답지 않니? 마시면 폐가 얼어붙는 눈꽃이란다.","인간의 감정이라는 건 결국 착각에 불과해.","시노부 양... 나를 미워하지 마렴, 내 안에서 함께 영원히 살자.","무잔 님은 위대하셔. 그분의 명을 어기는 건 슬픈 일이지.","새벽에는 만세극락교의 신도들 기도를 들어준다.","한낮에는 차가운 얼음 정원에서 연꽃의 개화를 지켜본다.","저물녘에는 극락교의 연회 준비를 지시한다.","밤에는 맛있는 신도를 골라 한구석에서 만찬을 즐긴다."]},dongzhuo:{name:"엔무",select:"행복한 꿈을 꾸게 해 줄게. 영원히 깨어나지 않는 달콤한 꿈을...",lines:["인간의 마음은 유리 같아서 조금만 충격을 주어도 깨져 버리지.","꿈속에서 사랑하는 가족들을 만났니? 그런데 그건 전부 가짜란다.","무한열차와 융합한 내 몸은 그 누구도 막을 수 없어!","귀살대 녀석들의 절망하는 얼굴을 보는 건 정말 즐거워!","더 깊은 잠으로 빠져들어라... 강제 혼도 수면 최면!","새벽에는 무한열차의 들보 사이에서 기운을 조율한다.","한낮에는 승객들의 꿈결 속에 숨어들어 그들의 마음의 핵을 찾는다.","저물녘엔 기관실의 불길을 높여 속도를 가속한다.","밤에는 강제 수면 가스를 뿜어 전 차량을 지배한다."]},xiahoudun:{name:"아카자",select:"술식을 전개한다. 나침!",lines:["가까이 오너라! 네 투기가 내 나침을 자극하는군!","오직 강함만이 존재의 가치다. 약자는 죽어 마땅해!","나와 백 년이고 이백 년이고 겨루며 강해지자!","파괴살 공식... 내 권풍은 대기를 찢어발긴다!","인간은 결국 늙고 병들어 죽는다. 어째서 혈귀가 되지 않지?","새벽에는 주먹을 단련해 대기를 부수는 힘을 다듬는다.","한낮에는 굳게 닫힌 눈으로 투기의 맑음을 유도한다.","저물녘에는 붉게 물든 하늘을 보며 싸울 의지를 태운다.","밤에는 귀살대의 주들을 토벌하러 전장을 종횡무진한다."]},sunce:{name:"코쿠시보",select:"달의 호흡... 눈을 떠라, 일륜의 검이여.",lines:["나의 검은 달을 닮아 차갑고, 휘는 칼날은 공간을 왜곡한다.","오백 년간 닦아온 참격의 극의를 보여주마.","내 동생... 요리이치... 왜 너만을 축복한 것이냐...","귀살대의 검술 따위는 내 상대가 되지 못한다.","달의 호흡 제16형 — 월홍, 단현의 밤!","새벽에는 칼날에 돋아난 오니의 눈들을 정렬한다.","한낮에는 수백 년 전 동생과 겨루던 기억에 잠긴다.","저물녘에는 차오르는 달무리를 보며 칼끝을 세운다.","밤에는 상현의 1로서 오니들을 통솔하고 침입자를 벤다."]},simayi:{name:"루이",select:"내 가족의 인연을 방해하지 마라.",lines:["거미줄로 연결된 가족의 끈이야말로 절대적이다.","역할을 다하지 않는 가족은 존재할 가치가 없어.","내 실은 칼날보다 단단하고, 강철도 쉽게 썰어낸다.","탄지로, 네 여동생의 유대감을 내게 넘겨라!","각혈선혈... 붉은 실로 감싸 영원히 묶어주마.","새벽에는 거미줄에 맺힌 아침 이슬로 마장을 감춘다.","한낮에는 거미집 한가운데 거꾸로 매달려 휴식을 취한다.","저물녘에는 공포로 다져진 가족들의 기강을 정비한다.","밤에는 등나무 산에 진입하는 대원들을 실로 옭아맨다."]}};function wc(a){return Bh[a]??null}function kd(a){return wc(a)?.select??""}function Nd(a,t){const e=wc(a);return!e||e.lines.length===0?"":e.lines[(t%e.lines.length+e.lines.length)%e.lines.length]}function cw(a=Math.random){const t=Object.keys(Bh),e=t[Math.floor(a()*t.length)],i=wc(e)??Bh[e];return{id:e,name:i.name,line:i.lines[Math.floor(a()*i.lines.length)]??i.select}}const uw=40,dw=1.2,fw=40,zd=100,Fl=75,pw=12,mw=55,gw=8,vw=11,xw=.9,Od=1.7,_w=10,bw=6,Bd=90,yw=[180,360,540];class Mw{onLordSpawn=null;onCapture=null;onCounterattack=null;onVolley=null;onDefended=null;onLost=null;onApproach=null;d;state="enemy_held";approached=!1;sentriesSpawned=!1;garrisonAcc=0;captureTimer=0;counterTimer=0;waveIdx=0;trickleAcc=0;volleyTimer=0;fallGauge=0;gaugeThrottle=0;supplyTimer=0;lordX=0;lordZ=0;gameTime=0;volleys=[];_pt={x:0,z:0};constructor(t){this.d=t}reset(){this.state="enemy_held",this.approached=!1,this.sentriesSpawned=!1,this.garrisonAcc=0,this.captureTimer=0,this.counterTimer=0,this.waveIdx=0,this.trickleAcc=0,this.volleyTimer=0,this.fallGauge=0,this.gaugeThrottle=0,this.supplyTimer=0,this.volleys.length=0}update(t,e,i,n){this.gameTime=e;const s=Math.max(1,e/60),r=i-yt.cx,o=n-yt.cz,l=Math.hypot(r,o);switch(this.state){case"enemy_held":case"breached":this.updateSiegePhase(t,s,i,n,l);break;case"lord":break;case"captured":this.updateCaptured(t,e);break;case"counterattack":this.updateCounterattack(t,s,i,n,l);break}}updateSiegePhase(t,e,i,n,s){if(!(s>uw)){for(this.approached||(this.approached=!0,this.onApproach?.()),this.sentriesSpawned||(this.sentriesSpawned=!0,this.d.spawner.spawnGateWatch(this.courtyardCorners(),e)),this.garrisonAcc+=dw*t;this.garrisonAcc>=1;){if(this.garrisonAcc-=1,this.d.spawner.garrisonCount()>=fw){this.garrisonAcc=0;break}const r=this.courtyardPoint();this.d.spawner.spawnSiegeAttacker(r.x,r.z,e,!1)}this.state==="breached"&&this.d.map.insideCastleBounds(i,n,-1)&&!this.d.map.insideKeepBounds(i,n,0)&&!this.d.bossActive()&&this.spawnLord()}}spawnLord(){this.state="lord",this.lordX=yt.keepGate.x,this.lordZ=yt.keepGate.z+4,this.d.map.openKeepGate(),this.d.requestLord(this.lordX,this.lordZ),this.onLordSpawn?.(this.lordX,this.lordZ)}notifyGateBreach(t){this.state==="enemy_held"&&(t==="castle-s"||t==="castle-e"||t==="castle-w")&&(this.state="breached")}captureNow(t,e){this.state==="lord"&&(this.state="captured",this.captureTimer=0,this.d.map.setCastleBreachable(!1),se.allied=!0,se.flipX=t,se.flipZ=e,se.flipVersion++,this.dropDumplings(2),this.d.placeSupply("gong",yt.cx,yt.cz+2),this.supplyTimer=Bd,this.onCapture?.(t,e))}updateCaptured(t,e){this.captureTimer+=t,this.tickSupplyRespawn(t),this.captureTimer>=zd&&this.canStartCounter(e)&&this.startCounterattack()}canStartCounter(t){if(this.d.bossActive()||this.d.hulaoActive())return!1;for(const e of yw)if(t>=e-25&&t<e)return!1;return!0}tickSupplyRespawn(t){this.supplyTimer-=t,this.supplyTimer<=0&&(this.supplyTimer=Bd,this.d.placeSupply("dumpling",yt.cx+(this.d.rng.next()-.5)*5,yt.cz+(this.d.rng.next()-.5)*4))}startCounterattack(){this.state="counterattack",this.counterTimer=0,this.waveIdx=0,this.trickleAcc=0,this.fallGauge=0,this.gaugeThrottle=0,this.volleyTimer=this.d.rng.range(2,4),this.volleys.length=0,this.d.spawner.setSiegeActive(!0),this.onCounterattack?.(),this.spawnWave(),this.waveIdx=1}updateCounterattack(t,e,i,n,s){for(this.counterTimer+=t,this.tickSupplyRespawn(t);this.waveIdx<4&&this.counterTimer>=this.waveIdx*20;)this.spawnWave(),this.waveIdx++;for(this.trickleAcc+=2*t;this.trickleAcc>=1;)this.trickleAcc-=1,this.spawnTrickle(e);if(this.volleyTimer-=t,this.volleyTimer<=0&&(this.d.map.insideCastleBounds(i,n,0)&&this.fireVolley(i,n),this.volleyTimer=this.d.rng.range(gw,vw)),this.updateVolleys(t,i,n),s>mw){this.fall();return}this.counterTimer>=Fl&&this.defend()}spawnWave(){const t=Math.max(1,this.gameTime/60);for(const e of yt.outerGates){const i=this.gateOutward(e.x,e.z);this.d.spawner.spawnSiegeRush(i.x,i.z,t)}}spawnTrickle(t){const e=yt.outerGates.filter(s=>this.d.map.isGateBreached(s.key));if(e.length===0)return;const i=e[this.d.rng.int(e.length)],n=this.gateOutward(i.x,i.z);this.d.spawner.spawnSiegeAttacker(n.x+(this.d.rng.next()-.5)*3,n.z+(this.d.rng.next()-.5)*3,t,this.d.rng.next()<.15)}gateOutward(t,e){let i=t-yt.cx,n=e-yt.cz;const s=Math.hypot(i,n)||1;return i/=s,n/=s,{x:t+i*5,z:e+n*5}}fireVolley(t,e){const i=5+this.d.rng.int(3),n=[];for(let s=0;s<i;s++){const r=this.d.rng.next()*Math.PI*2,o=this.d.rng.range(0,5.5);n.push({x:t+Math.cos(r)*o,z:e+Math.sin(r)*o,t:xw})}for(const s of n)this.volleys.push({x:s.x,z:s.z,t:s.t});this.onVolley?.(n)}updateVolleys(t,e,i){for(let n=this.volleys.length-1;n>=0;n--){const s=this.volleys[n];if(s.t-=t,s.t<=0){const r=e-s.x,o=i-s.z;r*r+o*o<=Od*Od&&this.d.hitPlayer(_w),this.volleys.splice(n,1)}}}defend(){this.state="held",this.d.spawner.setSiegeActive(!1),this.volleys.length=0,this.onDefended?.()}fall(){this.state="fallen",this.d.spawner.setSiegeActive(!1),this.volleys.length=0,se.allied=!1,se.flipX=yt.cx,se.flipZ=yt.cz,se.flipVersion++,this.onLost?.()}courtyardPoint(){for(let t=0;t<8;t++){const e=yt.cx+this.d.rng.range(-34,yt.ohx-2),i=yt.cz+this.d.rng.range(-30,yt.ohz-2);if(!this.d.map.insideKeepBounds(e,i,1))return this.d.map.projectWalkable(e,i,.75,this._pt),this._pt}return this._pt.x=yt.cx,this._pt.z=yt.cz+yt.ohz-4,this._pt}courtyardCorners(){return[{x:yt.cx-yt.ohx+3,z:yt.cz-yt.ohz+3},{x:yt.cx+yt.ohx-3,z:yt.cz-yt.ohz+3},{x:yt.cx-yt.ohx+3,z:yt.cz+yt.ohz-3},{x:yt.cx+yt.ohx-3,z:yt.cz+yt.ohz-3}]}dropDumplings(t){for(let e=0;e<t;e++){const i=e/Math.max(1,t)*Math.PI*2+.5;this.d.placeSupply("dumpling",yt.cx+Math.cos(i)*3,yt.cz+Math.sin(i)*3)}}get keepAuraActive(){return this.state==="captured"||this.state==="counterattack"||this.state==="held"}get keepCenterX(){return yt.cx}get keepCenterZ(){return yt.cz}get keepAuraRadius(){return bw}get siegeState(){return this.state}get fallGaugeValue(){return this.fallGauge}get lordActive(){return this.state==="lord"}get counterRemainSec(){return this.state==="counterattack"?Math.max(0,Fl-this.counterTimer):-1}get captureRemainSec(){return this.state==="captured"?Math.max(0,zd-this.captureTimer):-1}testForceLord(){this.state==="enemy_held"&&(this.state="breached"),this.state==="breached"&&this.spawnLord()}testForceCounter(){this.state==="captured"&&this.startCounterattack()}testAddFall(t){this.fallGauge+=t,this.state==="counterattack"&&this.fallGauge>=pw&&this.fall()}testForceDefend(){this.state==="counterattack"&&(this.counterTimer=Fl,this.defend())}}const ww={ko:"화웅",en:"Hua Xiong"},Hd=[{ko:"낙양은 상국(相國)께서 지키라 명하신 성. 한 걸음도 들이지 못한다!",en:"Luoyang is the fortress the Chancellor bade me hold — not one step further!"},{ko:"화웅의 목을 노린 자, 모두 관문 앞의 흙이 되었다.",en:"All who sought Hua Xiong’s head became dust before this pass."},{ko:"연합의 깃발이 많다 한들, 한 길목은 한 줄 창병이면 막는다.",en:"However many your banners — one pass needs but one line of spears."},{ko:"호로관 바람은 칼끝에 붙어도, 피 묻은 날을 닦지는 못한다.",en:"The Hulao wind clings to my blade, yet wipes no blood from it."}],Gd=[{ko:"이 화웅이… 끝내 성문 앞에서 스러지는가.",en:"So Hua Xiong falls… here at the gate at last."},{ko:"관문 앞 흙이 된 이름들에… 내 이름도 얹히는가.",en:"To the names turned to dust before this pass… mine is added."}],Sw={ko:"낙양성에 동탁의 잔당이 웅거하고 있다. 성문을 부수고 성주의 목을 취하라.",en:"Dong Zhuo’s remnants hold Luoyang. Break the gates and take the lord’s head."},Aw={capture:{ko:"낙양 입성 洛陽入城",en:"Luoyang Taken 洛陽入城"},counter:{ko:"낙양 탈환군 來襲",en:"Reclaimers Strike 洛陽奪還軍來襲"},defended:{ko:"낙양 사수 洛陽死守",en:"Luoyang Held 洛陽死守"},fallen:{ko:"낙양 함락 洛陽陷落",en:"Luoyang Fallen 洛陽陷落"}},Za=a=>wt()==="en"?a.en:a.ko;function Vd(){return Za(ww)}function Tw(a=-1){const t=Hd.length,e=a<0?Math.floor(Math.random()*t):a%t;return Za(Hd[e])}function Ew(a=-1){const t=Gd.length,e=a<0?Math.floor(Math.random()*t):a%t;return Za(Gd[e])}function Cw(){return Za(Sw)}function Wr(a){return Za(Aw[a])}const Sc=a=>wt()==="en"?a.en:a.ko,Rw={dongzhuo:{ko:"무한성 상공이 칠흑 같은 어둠에 휩싸인다. 십이귀월이 밀려온다.",en:"The Luoyang sky darkens at noon — Dong Zhuo’s host presses in."},yuanshao:{ko:"하북의 대군이 둑을 넘는다. 넓은 군세, 넓은 그늘.",en:"Hebei’s great host crosses the dike — a wide army, a wide shadow."},warlords:{ko:"깃발이 갈라진다. 이제부터는 군웅의 땅이다.",en:"The banners splinter — from here, the land of warlords."}},Pw={ko:"호로관 성문이 솟는다. 바람이 칼끝에 붙는다.",en:"The gate of Hulao rises — the wind clings to the blade."},Lw={dianwei:{ko:"완성 문을 지킨 그 교위가 다시 나섰다.",en:"That captain who held the Wancheng gate rides out again."},gaoshun:{ko:"함진영을 이끈 그 진장이 다시 줄을 세운다.",en:"That captain of the Trap-Breaker Camp forms his ranks anew."},xiahouyuan:{ko:"정군산의 그 선봉이 또 길목을 친다.",en:"That vanguard of Dingjun strikes the road once more."},lumeng:{ko:"형주를 삼킨 그 도독이 흰 옷으로 다시 온다.",en:"That commander who swallowed Jing comes again in white."},luxun:{ko:"이릉의 그 별장이 또 불줄을 편다.",en:"That lieutenant of Yiling lays out his fire-line again."}};function Fw(a){const t=Rw[a];return t?Sc(t):""}function Dw(){return Sc(Pw)}function Iw(a){const t=Lw[a];return t?Sc(t):""}const Wd=11,Uw=1.25,kw=46,Xd=6,qd=4.5,Nw=12,zw=1.2,Ow=9,Dl=0,Il=1,Bw=2;class Hw{map;towerX=[];towerZ=[];beaconX=[];beaconZ=[];beaconState=[];beaconTimer=[];syncedRevision=-1;_dir={x:0,z:0};_pos={x:0,z:0};constructor(t){this.map=t}reset(){this.beaconX.length=0,this.beaconZ.length=0,this.beaconState.length=0,this.beaconTimer.length=0,this.towerX.length=0,this.towerZ.length=0,this.syncedRevision=-1,this.sync()}sync(){if(this.map.revision===this.syncedRevision)return;this.syncedRevision=this.map.revision;const t=this.beaconX.slice(),e=this.beaconZ.slice(),i=this.beaconState.slice(),n=this.beaconTimer.slice();this.towerX.length=0,this.towerZ.length=0,this.beaconX.length=0,this.beaconZ.length=0,this.beaconState.length=0,this.beaconTimer.length=0;for(const s of this.map.landmarks)if(s.name.includes("望樓"))this.towerX.push(s.x),this.towerZ.push(s.z);else if(s.name.includes("烽火")){this.beaconX.push(s.x),this.beaconZ.push(s.z);let r=Dl,o=0;for(let l=0;l<t.length;l++){const h=t[l]-s.x,c=e[l]-s.z;if(h*h+c*c<.25){r=i[l],o=n[l];break}}this.beaconState.push(r),this.beaconTimer.push(o)}}update(t){this.sync();for(let e=0;e<this.beaconState.length;e++)this.beaconState[e]===Il&&(this.beaconTimer[e]-=t,this.beaconTimer[e]<=0&&(this.beaconTimer[e]=0,this.beaconState[e]=Bw))}watchtowerActive(t,e){this.sync();const i=Wd*Wd;for(let n=0;n<this.towerX.length;n++){const s=t-this.towerX[n],r=e-this.towerZ[n];if(s*s+r*r<=i)return!0}return!1}nearestThreatDir(t,e,i){const n=i.alive.length,s=kw,r=s*s,o=Xd*Xd,l=i.controlled;let h=0,c=0,u=!1;for(let f=0;f<n;f++){if(i.alive[f]===0||l&&l[f]===1)continue;const m=i.x[f]-t,v=i.z[f]-e,g=m*m+v*v;if(g>r||g<o)continue;const p=Math.sqrt(g),w=1-p/s;h+=m/p*w,c+=v/p*w,u=!0}if(!u)return null;const d=Math.hypot(h,c);return d<1e-4?null:(this._dir.x=h/d,this._dir.z=c/d,this._dir)}tryIgniteBeacon(t,e){this.sync();const i=qd*qd;for(let n=0;n<this.beaconX.length;n++){if(this.beaconState[n]!==Dl)continue;const s=t-this.beaconX[n],r=e-this.beaconZ[n];if(s*s+r*r<=i)return this.beaconState[n]=Il,this.beaconTimer[n]=Nw,{x:this.beaconX[n],z:this.beaconZ[n],radius:Ow}}return null}beaconBuffActive(){for(let t=0;t<this.beaconState.length;t++)if(this.beaconState[t]===Il)return!0;return!1}nearestArmedBeacon(t,e,i){this.sync();let n=null,s=i*i;for(let r=0;r<this.beaconX.length;r++){if(this.beaconState[r]!==Dl)continue;const o=t-this.beaconX[r],l=e-this.beaconZ[r],h=o*o+l*l;h<s&&(s=h,this._pos.x=this.beaconX[r],this._pos.z=this.beaconZ[r],n=this._pos)}return n}beaconStateNear(t,e){this.sync();for(let i=0;i<this.beaconX.length;i++){const n=this.beaconX[i]-t,s=this.beaconZ[i]-e;if(n*n+s*s<.25)return this.beaconState[i]}return-1}get watchtowerCount(){return this.sync(),this.towerX.length}get beaconCount(){return this.sync(),this.beaconX.length}}const Xr=6,Ul=6,kl=50,Nl=600,Gw=2,Vw=.1;function qr(a){return 8+a*a*3}class _o{scene=new rm;rig;cinematics;postfx=null;input;atlas;ground;map=new V1;world;soldiersR;variantsR;sgradeR;apriorityR;shadowR;effects;lightField;banner;decals;particles;damageText;labels;markers;castleZone;gateBreachFx;arrowRain;starAura;player;companion;companion2;enemies=new $y;spawner;hash=new Qy;gems;projectiles;zones;enemyProj;treasure;weapons;passives={};availableWeapons=null;combo;musou;boss;events;objects;siege;landmarks;siegeEvents={lordSpawn:0,capture:0,counter:0,volley:0,defended:0,lost:0};hud;levelup=new YM;hooks;hero=xn.zhaoyun;meta=null;state="attract";gameTime=0;kills=0;level=1;xp=0;nextXp=qr(1);pendingLevels=0;gold=0;goldEarned=0;maxCombo=0;bossesKilled=new Set;reviveAvailable=!1;reviveUsed=!1;ended=!1;attractTime=0;bossFlags={b3:!1,b6:!1,b9:!1};minibossIdx=0;nextMinibossAt=720;frameKills=0;killWindowT=0;killWindowCount=0;rerolledThisLevel=!1;relicIds=[];masterworkIds=[];feverWasOn=!1;endless=!1;victoryAchieved=!1;forceRelicNext=!1;heroQuoteCursor=0;nextHeroQuoteAt=12;hulaoAt=0;gateRushTimer=0;gateRushX=0;gateRushZ=0;gateRushHorizontal=!0;playerWallHits=0;timeScale=1;hitstopRemaining=0;musouStrength=0;renderTime=0;scratch=[];ctx;damageFlash;curChoices=[];moveOut={x:0,z:0};lastAttackWeapon="";lastAttackX=0;lastAttackZ=1;lastAttackCount=0;prevAttackCount=0;constructor(t,e,i,n,s=!1){this.atlas=t,this.rig=e,this.cinematics=new pb(e),this.input=i,this.hooks=n,this.hud=new QM(s),this.lightField=new mb(s);const r=this.lightField.uniforms();this.ground=new vb(this.scene,r),this.map.update(0,0,0),this.world=new Wb(this.scene,this.map),this.soldiersR=new Ur(t.soldiers,Mt,r),this.variantsR=new Ur(t.variants,Mt,r),this.sgradeR=new Ur(t.sgrade,48,r),this.apriorityR=new Ur(t.apriority,48,r),this.shadowR=new mc(Mt+2),this.scene.add(this.soldiersR.mesh,this.variantsR.mesh,this.sgradeR.mesh,this.apriorityR.mesh,this.shadowR.mesh),this.effects=new d1(this.scene),this.arrowRain=new R1(this.scene,this.effects),this.starAura=new D1(this.scene),this.decals=new gy(this.scene),this.particles=new I1(this.scene),this.damageText=new U1(this.scene),this.labels=new k1(this.scene),this.markers=new sy(this.scene),this.castleZone=new dy(this.scene),this.gateBreachFx=new Xb(this.scene),this.gems=new nM(this.scene),this.projectiles=new rM(this.scene,r),this.zones=new lM(this.scene),this.enemyProj=new Ia(this.scene),this.treasure=new cM(this.scene),this.player=new Hy(t,this.hero,r),this.player.setRimScale(s?.5:1),this.scene.add(this.player.mesh),this.companion=new Ud(this.scene,t,r),this.companion2=new Ud(this.scene,t,r),this.spawner=new Yy(t,this.enemies,this.map),this.banner=new my(this.scene),this.spawner.onWave=o=>{this.banner.trigger(o.hanja,o.ko,o.banner);const l=Fw(o.id);l&&(this.hud.quote(this.hero.name,l,3200),this.nextHeroQuoteAt=this.gameTime+30)},this.weapons=[Ra(this.hero.startWeapon)],this.combo=new mM(o=>this.hud.banner(o,"#e8c667",60),()=>this.hud.punchCombo()),this.musou=new vM(this.hero.musou,()=>{this.hud.banner("無雙","#ffe9a8",120,1200,3),this.sayHero(2600),Pt.sfx("musou")}),this.boss=new bM(t,(o,l)=>{this.hud.banner(`${o} ${it("bannerAppear")} ${l}`,"#e85c4a",44,1800,2),this.sayHero(),Pt.sfx("bossHorn"),Pt.playBgm("boss")}),this.events=new yM({enemies:this.enemies,zones:this.zones,effects:this.effects,particles:this.particles,atlas:t,rng:ce,banner:(o,l)=>{this.hud.banner(o,l,44,1800),Pt.sfx("warn")},playerX:()=>this.player.x,playerZ:()=>this.player.z,hitPlayer:o=>{this.onPlayerHit(o)}}),this.objects=new PM(this.scene,{effects:this.effects,particles:this.particles,rng:ce,playerX:()=>this.player.x,playerZ:()=>this.player.z,playerRadius:this.player.radius,damageArea:(o,l,h,c)=>{this.shockwave(o,l,h,c),Pt.sfx("explosion")},heal:o=>{this.player.heal(this.player.maxHp*o),Pt.sfx("buff")},applyBuff:(o,l)=>{this.player.applyBuff(o,l),Pt.sfx("buff")},banner:(o,l)=>{this.hud.banner(o,l,40,1400)},playerHpFrac:()=>this.player.hp/Math.max(1,this.player.maxHp),magnetizeGems:()=>this.gems.magnetizeAll(),stunEnemies:(o,l,h,c)=>{const u=this.hash.query(o,l,h,this.scratch);for(let d=0;d<u;d++){const f=this.scratch[d];this.enemies.alive[f]===1&&this.enemies.controlled[f]===0&&(this.enemies.stun[f]=Math.max(this.enemies.stun[f],c))}}}),this.ctx={dt:0,gameTime:0,px:0,pz:0,faceX:0,faceZ:1,aimX:0,aimZ:1,aimTarget:-1,hash:this.hash,enemies:this.enemies,effects:this.effects,damageText:this.damageText,projectiles:this.projectiles,zones:this.zones,particles:this.particles,stats:this.player.stats,rng:ce,onKill:o=>this.handleKill(o),onAttack:(o,l,h)=>{this.lastAttackWeapon=o,this.lastAttackX=l,this.lastAttackZ=h,this.lastAttackCount++},scratch:this.scratch},this.siege=new Mw({map:this.map,spawner:this.spawner,enemies:this.enemies,rng:ce,bossActive:()=>this.boss.active,hulaoActive:()=>this.map.hulaoOn,requestLord:(o,l)=>{this.boss.active||(this.boss.spawn("huaxiong",Math.max(1,this.gameTime/60),this.ctx,o,l+16),this.boss.idx>=0&&(this.enemies.x[this.boss.idx]=o,this.enemies.z[this.boss.idx]=l,this.cinematics.onBossSpawn(o-this.player.x,l-this.player.z)))},hitPlayer:o=>{this.onPlayerHit(o)},placeSupply:(o,l,h)=>{o==="dumpling"?this.objects.spawnDumplingAt(l,h):this.objects.spawnGongAt(l,h)}}),this.siege.onApproach=()=>{this.hud.quote(this.hero.name,Cw(),3600),Pt.sfx("warn")},this.siege.onLordSpawn=()=>{this.siegeEvents.lordSpawn++,this.hud.quote(Vd(),Tw(),3200)},this.siege.onCapture=(o,l)=>{this.siegeEvents.capture++,this.hud.banner(Wr("capture"),"#ffd86b",60,1800,1);for(let c=0;c<10;c++){const u=ce.next()*Math.PI*2;this.gems.spawn(o+Math.cos(u)*2,l+Math.sin(u)*2,6)}const h=dd(()=>ce.next(),this.masterworkIds,3);if(h.length>0){this.player.heal(this.player.maxHp*.4),this.curChoices=h.map(u=>({kind:"masterwork",id:u.id})),this.state="levelup";const c=this.curChoices.map(u=>this.cardView(u));this.levelup.open(c,Math.floor(this.gold),!1,u=>this.pickCard(u),()=>{})}else this.player.heal(this.player.maxHp*.5);this.hud.quote(this.hero.name,wt()==="en"?"Luoyang is ours. Stay in the keep, resupply — the reclaimers will come.":"무한성을 함락시켰다. 결계를 사수하고 무잔을 소멸시켜라.",4200)},this.siege.onCounterattack=()=>{this.siegeEvents.counter++,this.hud.banner(Wr("counter"),"#e85c4a",56,1800,1),this.hud.quote(this.hero.name,wt()==="en"?"Reclaimers flood in! Hold your ground in the castle for 75 seconds.":"탈환군이 몰려온다! 성 안에서 75초만 버텨내라.",4600),Pt.sfx("warn"),Pt.playBgm("siege"),this.rig.addTrauma(.4)},this.siege.onVolley=o=>{this.siegeEvents.volley++,this.arrowRain.volley(o)},this.siege.onDefended=()=>{this.siegeEvents.defended++,this.hud.banner(Wr("defended"),"#9affc0",60,1800,1);for(let o=0;o<24;o++){const l=ce.next()*Math.PI*2,h=2+ce.next()*5;this.gems.spawn(yt.cx+Math.cos(l)*h,yt.cz+Math.sin(l)*h,8)}for(let o=0;o<3;o++)this.objects.spawnDumplingAt(yt.cx+(o-1)*3,yt.cz+3);this.musou.gauge=Math.min(100,this.musou.gauge+50),this.rig.addTrauma(.5),Pt.sfx("levelup"),this.boss.active||Pt.playBgm("battle")},this.siege.onLost=()=>{this.siegeEvents.lost++,this.hud.banner(Wr("fallen"),"#c8322a",56,1800,1),this.rig.addTrauma(.6),Pt.sfx("warn"),this.boss.active||Pt.playBgm("battle")},this.landmarks=new Hw(this.map),this.effects.screenFlash=o=>this.flashScreen(o),this.effects.spawnLight=(o,l,h,c,u,d,f)=>this.lightField.spawn(o,.6,l,h,c,u,d,f),this.zones.spawnLight=(o,l,h,c,u,d,f)=>this.lightField.spawn(o,.5,l,h,c,u,d,f),this.effects.spawnDecal=(o,l,h,c,u,d)=>this.decals.spawn(o,l,h,c,u,d),this.effects.spawnMusouLight=(o,l,h,c,u,d,f)=>this.lightField.spawn(o,.8,l,h,c,u,d,f,!0),this.damageFlash=document.createElement("div"),this.damageFlash.style.cssText=["position:fixed","inset:0","pointer-events:none","opacity:0","z-index:30","background:radial-gradient(ellipse at center, rgba(0,0,0,0) 28%, rgba(200,26,20,0.98) 100%)"].join(";"),document.body.appendChild(this.damageFlash),this.lowHpVignette=document.createElement("div"),this.lowHpVignette.style.cssText=["position:fixed","inset:0","pointer-events:none","opacity:0","z-index:29","transition:opacity 0.25s linear","background:radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(150,10,10,0.9) 100%)"].join(";"),document.body.appendChild(this.lowHpVignette)}lowHpVignette;lowHpBeat=0;damageVigLevel=0;smallFlashCd=0;flashActive=0;updateLowHp(t){this.smallFlashCd>0&&(this.smallFlashCd-=t),this.damageVigLevel>.001?(this.damageVigLevel*=Math.exp(-t/.26),this.damageVigLevel<.02&&(this.damageVigLevel=0),this.damageFlash.style.opacity=this.damageVigLevel.toFixed(3)):this.damageFlash.style.opacity!=="0"&&(this.damageFlash.style.opacity="0");const e=this.player.hp/Math.max(1,this.player.maxHp);if(e<.3&&this.state==="play"&&!this.player.dead){const i=(.3-e)/.3;this.lowHpVignette.style.opacity=(.3+.3*i).toFixed(2),this.lowHpBeat-=t,this.lowHpBeat<=0&&(this.lowHpBeat=.5+.5*(e/.3),Pt.sfx("heartbeat"))}else this.lowHpVignette.style.opacity!=="0"&&(this.lowHpVignette.style.opacity="0",this.lowHpBeat=0)}pulseDamageVig(t){const e=t<.15?.15:t>.62?.62:t;e>this.damageVigLevel&&(this.damageVigLevel=e)}flashScreen(t){let e=t;if(e<.2){if(this.smallFlashCd>0)return;this.smallFlashCd=.5,e>.06&&(e=.06)}if(e=Math.min(e,.5-this.flashActive),e<=.01)return;const n=e;this.flashActive+=n;const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:31;background:rgba(200,220,255,1);",document.body.appendChild(s),s.animate([{opacity:e},{opacity:0}],{duration:120,easing:"ease-out"}).onfinish=()=>{s.remove(),this.flashActive-=n}}hitstop(t,e=.05){this.hitstopRemaining=Math.max(this.hitstopRemaining,t/1e3),this.timeScale=e}setHero(t){const e=xn[t];e&&(this.hero=e,this.player.setHero(e),this.musou.setHero(e.musou))}enterAttract(){this.resetPools(),this.player.mesh.visible=!1,this.hud.setVisible(!1),this.state="attract",this.attractTime=0}beginRun(t,e,i){this.setHero(t),this.meta=e,this.player.setMeta(e),this.availableWeapons=i?new Set(i):null,this.restart()}resetPools(){this.enemies.reset(),this.gems.reset(),this.projectiles.reset(),this.zones.reset(),this.enemyProj.reset(),this.treasure.reset(),this.labels.reset(),this.markers.reset(),this.castleZone.reset(),this.arrowRain.reset(),this.lightField.reset(),this.banner.reset(),this.decals.reset(),this.lowHpVignette.style.opacity="0",this.lowHpBeat=0,this.damageVigLevel=0,this.smallFlashCd=0,this.flashActive=0,this.damageFlash.style.opacity="0",this.spawner.reset(),this.combo.reset(),this.musou.reset(),this.events.reset(),this.objects.reset(),this.map.reset(),this.siege.reset(),this.landmarks.reset(),this.siegeEvents={lordSpawn:0,capture:0,counter:0,volley:0,defended:0,lost:0},this.gateBreachFx.reset(),this.starAura.reset(),this.cinematics.reset(),this.gateRushTimer=0,this.hulaoAt=420+ce.range(0,120),this.playerWallHits=0,this.lastAttackWeapon="",this.lastAttackX=0,this.lastAttackZ=1,this.lastAttackCount=0,this.prevAttackCount=0,this.companion.reset(this.hero.id),this.companion2.reset(this.hero.id,{def:aw(this.companion.definition.id,()=>ce.next()),side:-1,joinTime:nw,specialPhase:6}),this.boss.active=!1,this.boss.idx=-1}restart(){this.resetPools(),this.passives={},this.player.reset(this.passives),this.player.mesh.visible=!0,this.weapons=[Ra(this.hero.startWeapon)],this.gameTime=0,this.kills=0,this.xp=0,this.gold=0,this.goldEarned=0,this.maxCombo=0,this.bossesKilled.clear(),this.ended=!1,this.bossFlags={b3:!1,b6:!1,b9:!1},this.minibossIdx=0,this.nextMinibossAt=720,this.timeScale=1,this.hitstopRemaining=0,this.musouStrength=0,this.relicIds=[],this.masterworkIds=[],this.endless=!1,this.victoryAchieved=!1,this.forceRelicNext=!1,this.feverWasOn=!1,this.heroQuoteCursor=0,this.nextHeroQuoteAt=12,this.hud.setFever(!1),this.reviveAvailable=this.meta?.revive??!1,this.reviveUsed=!1;const t=this.meta?.startLevel??0;this.level=1+t,this.nextXp=qr(this.level),this.pendingLevels=t,this.hud.setVisible(!0),this.hud.resetSlots(),this.refreshLoadout(),this.state="play",Pt.playBgm("battle")}refreshLoadout(){const t=[];for(const i of this.weapons)t.push({id:i.id,glyph:(we[i.id]?.hanja??"?")[0],level:i.level,accent:"#e8c667"});const e=[];for(const i in this.passives)e.push({id:i,glyph:(Hi[i]?.hanja??"?")[0],level:this.passives[i],accent:"#7ec8ff"});this.hud.setLoadout(t,e)}pause(){this.state==="play"&&(this.state="paused",this.hooks.onPause())}resume(){this.state==="paused"&&(this.state="play")}abandon(){(this.state==="paused"||this.state==="play")&&this.finish(this.victoryAchieved)}get musouGauge(){return this.musou.gauge}get musouReadyFlag(){return this.musou.ready}get currentState(){return this.state}update(t){if(this.renderTime+=t,this.state==="attract"){this.attractTime+=t;const y=Math.sin(this.attractTime*.06)*5,E=Math.cos(this.attractTime*.05)*5;this.ground.update(t,y,E),this.map.update(y,E,t),this.world.update(),this.particles.update(t),this.effects.update(t),this.rig.update(t,y,E),td(0,0,0,0,0,0,!1),this.musouStrength+=(0-this.musouStrength)*Math.min(1,t*6),this.renderSprites();return}if(this.state==="dead"||this.state==="victory")return;if(this.state==="levelup"){this.input.consumePressed("Digit1")?this.pickCard(0):this.input.consumePressed("Digit2")?this.pickCard(1):this.input.consumePressed("Digit3")&&this.pickCard(2);return}if((this.input.consumePressed("Escape")||this.input.consumePressed("KeyP"))&&this.pause(),this.state==="paused")return;this.cinematics.wantsSkipInput&&(this.input.move.x!==0||this.input.move.z!==0||this.input.isDown("Space"))&&this.cinematics.skip(),this.input.consumePressed("Space")&&this.musou.activate()&&(this.rig.addTrauma(.5),this.cinematics.onMusouStart(),this.postfx?.pulseAberration(.7),this.flashScreen(.35)),this.hitstopRemaining>0&&(this.hitstopRemaining-=t,this.hitstopRemaining<=0&&(this.timeScale=1));const e=t*this.timeScale,i=e*this.musou.enemyTimeScale;this.frameKills=0,this.musou.chargeMul=this.player.musouBuffed?2:1,this.gameTime+=e,this.player.musouInvuln=this.musou.active,this.map.update(this.player.x,this.player.z,e);const n=this.player.x,s=this.player.z;if(this.player.update(e,this.input),this.map.resolveMovement(n,s,this.player.x,this.player.z,this.player.radius,this.moveOut)&&this.playerWallHits++,this.player.setPosition(this.moveOut.x,this.moveOut.z),this.player.justSkid&&(this.player.justSkid=!1,this.effects.spawnFlash(this.player.x,this.player.z,1.6,1.2,.4,.9),this.particles.dust(this.player.x,this.player.z)),this.player.justBoost){this.player.justBoost=!1;const y=this.player.boostTier>=2;this.effects.spawnThrust(this.player.x,this.player.z,this.player.faceX,this.player.faceZ,y?6:4.5,y?2.2:1.6,1.7,1.35,.5,.24),this.effects.spawnRing(this.player.x,this.player.z,y?4:2.8,1.7,1.3,.5,.4),this.rig.punchFov(y?3:2),Pt.sfx("warn")}if(this.map.update(this.player.x,this.player.z,0),this.world.update(),this.player.justDashed){this.player.justDashed=!1;const y=this.player.x,E=this.player.z,x=this.player.dashDirX,b=this.player.dashDirZ;this.effects.spawnRing(y,E,4.5,1.4,1.9,2.4,.35),this.effects.spawnThrust(y,E,x,b,6,2,.7,1.4,2.2,.22),this.effects.spawnFlash(y,E,.8,1.4,2.2,2.2);for(let R=0;R<6;R++)this.particles.dust(y-x*R*.4,E-b*R*.4);this.cinematics.onDash(),this.postfx?.pulseBlur(.8,x,b),Pt.sfx("warn")}this.gameTime>=this.nextHeroQuoteAt&&this.sayHero(),this.checkBossSpawn(),this.hulaoAt>0&&this.gameTime>=this.hulaoAt&&!this.map.hulaoOn&&!this.map.isGateBreached()&&(this.hulaoAt=0,this.map.triggerHulao(this.player.x,this.player.z),this.hud.banner(`${it("bannerHulao")} 虎牢關`,"#ffb05a",48,1800),this.hud.quote(this.hero.name,Dw(),3200),this.nextHeroQuoteAt=this.gameTime+30,Pt.sfx("warn")),this.spawner.setBossActive(this.boss.active),this.spawner.update(i,this.gameTime,this.player.x,this.player.z),this.siege.update(i,this.gameTime,this.player.x,this.player.z),this.castleZone.setActive(this.siege.keepAuraActive),this.castleZone.update(e),this.landmarks.update(i);const r=this.landmarks.tryIgniteBeacon(this.player.x,this.player.z);if(r){const y=this.hash.query(r.x,r.z,r.radius,this.scratch);for(let E=0;E<y;E++){const x=this.scratch[E];if(this.enemies.alive[x]===1&&this.enemies.controlled[x]===0){this.enemies.stun[x]=Math.max(this.enemies.stun[x],.9);const b=this.enemies.x[x]-r.x,R=this.enemies.z[x]-r.z,P=Math.hypot(b,R)||1;this.enemies.push(x,b/P,R/P,6)}}this.effects.spawnRing(r.x,r.z,r.radius,2.2,1.1,.4,.5),this.hud.banner(wt()==="en"?"Beacon Rally 烽火":"봉화 랠리 烽火","#ff9a3c",46,1400,1),Pt.sfx("warn")}this.hash.clear(),this.enemies.insertAll(this.hash);const o=tM(this.enemies,this.hash,this.player.x,this.player.z,22,this.scratch,this.enemies.aliveCount);if(this.ctx.aimTarget=o,this.ctx.aimX=this.player.faceX,this.ctx.aimZ=this.player.faceZ,this.ctx.dashing=this.player.dashing,this.ctx.boosting=this.player.boosting,o>=0){const y=this.enemies.x[o]-this.player.x,E=this.enemies.z[o]-this.player.z,x=Math.hypot(y,E)||1;this.ctx.aimX=y/x,this.ctx.aimZ=E/x}this.enemies.update(i,this.player.x,this.player.z,this.hash,this.enemyProj,this.effects,this.map),this.ctx.dt=e,this.ctx.gameTime=this.gameTime,this.ctx.px=this.player.x,this.ctx.pz=this.player.z,this.ctx.faceX=this.player.faceX,this.ctx.faceZ=this.player.faceZ,this.ctx.dt=i,this.boss.update(i,this.ctx,this.enemyProj,this.player.x,this.player.z),this.events.update(i,this.gameTime),this.ctx.dt=e,this.hash.clear(),this.enemies.insertAll(this.hash);const l=y=>{const E=y.definition;this.hud.banner(`${it("bannerAlly")} ${E.name} ${E.hanja}`,"#7ec8ff",46,1600),this.hud.quote(E.name,Nd(E.id,0)),Pt.sfx("buff"),this.cinematics.onAllyJoin(y.joinDirX,y.joinDirZ),this.hitstop(250,.32),this.banner.playing||this.banner.trigger(E.hanja,E.name,[E.cr,E.cg,E.cb])};this.companion.update(e,this.gameTime,this.player,this.ctx,this.level,this.musou.active)&&l(this.companion),this.companion2.update(e,this.gameTime,this.player,this.ctx,this.level,this.musou.active)&&l(this.companion2);const h=this.companion.active&&this.companion2.active;this.companion.damageScale=h?.8:1,this.companion2.damageScale=h?.8:1;const c=this.companion.consumeSpecialEvent();c&&(this.hud.quote(this.companion.definition.name,c.line),Pt.sfx("buff"));const u=this.companion2.consumeSpecialEvent();u&&(this.hud.quote(this.companion2.definition.name,u.line),Pt.sfx("buff"));const d=this.player.stats.rangeMul,f=this.player.stats.damageMul;this.landmarks.watchtowerActive(this.player.x,this.player.z)&&(this.player.stats.rangeMul=d*Uw),this.landmarks.beaconBuffActive()&&(this.player.stats.damageMul=f*zw);for(let y=0;y<this.weapons.length;y++)this.weapons[y].update(this.ctx);this.player.stats.rangeMul=d,this.player.stats.damageMul=f,this.projectiles.update(e,this.player.x,this.player.z,this.enemies,this.hash,this.damageText,this.ctx.onKill,this.particles,this.effects,this.scratch),this.zones.update(e,this.enemies,this.hash,this.damageText,this.ctx.onKill,this.particles,this.scratch),this.objects.update(e,this.gameTime);for(const y of this.map.landmarks){if(y.kind!==5)continue;const E=this.player.x-y.x,x=this.player.z-y.z;E*E+x*x<=25&&(this.player.heal(this.player.maxHp*.025*e),Math.random()<6*e&&this.particles.steam(y.x,y.z+.4),this.lightField.spawn(y.x,.6,y.z,1.3,.9,.5,6,.2))}if(this.siege.keepAuraActive){const y=this.siege.keepCenterX,E=this.siege.keepCenterZ,x=this.player.x-y,b=this.player.z-E,R=this.siege.keepAuraRadius;x*x+b*b<=R*R&&(this.player.heal(this.player.maxHp*.025*e),Math.random()<6*e&&this.particles.steam(y,E+.4),this.lightField.spawn(y,.6,E,1.3,.9,.5,6,.2))}this.objects.hitAt(this.player.x,this.player.z,4);const m=this.lastAttackCount-this.prevAttackCount;if(this.prevAttackCount=this.lastAttackCount,m>0){const y=this.map.nearestSealedGateKey(this.player.x,this.player.z,6);if(y){const E=34*this.player.stats.damageMul*m,x=this.map.damageGate(y,E),b=this.map.gates.find(R=>R.key===y);b&&this.effects.spawnRing(b.x,b.z,1.5,1.6,.6,.22,.22),x&&this.onGateBreached(x)}}this.ctx.dt=t;const v=this.player.x,g=this.player.z;this.musou.update(t,this.ctx,this.player)&&this.cinematics.onMusouEnd(),this.map.resolveMovement(v,g,this.player.x,this.player.z,this.player.radius,this.moveOut),this.player.setPosition(this.moveOut.x,this.moveOut.z),this.ctx.dt=e,this.enemyProj.update(i,this.player.x,this.player.z,this.player.radius,this.onPlayerHit,this.particles,this.effects,(y,E,x)=>this.map.circleBlocked(y,E,x)),this.contactDamage(),this.frameKills>=8&&(this.hitstop(30,.08),this.rig.addTrauma(.35)),this.killWindowT-=t,this.killWindowT<=0&&(this.killWindowT=.5,this.killWindowCount=0),this.killWindowCount+=this.frameKills,this.killWindowCount>=6&&(this.cinematics.onMassKill(this.killWindowCount),this.postfx?.pulseBlur(.85),this.hitstop(240,.28),this.killWindowCount=-1e5),this.gems.update(e,this.player.x,this.player.z,this.player.stats.pickupMul,this.onCollect,y=>{this.player.heal(this.player.maxHp*y),Pt.sfx("buff")}),this.treasure.update(e,this.player.x,this.player.z,this.player.stats.pickupMul,this.onTreasure),this.combo.update(e);const p=this.combo.fever;this.hud.setFever(p),p&&!this.feverWasOn&&Pt.sfx("fever"),this.feverWasOn=p,this.effects.update(t),this.arrowRain.update(t),this.starAura.update(t,this.player.x,this.player.z,this.player.shrineBuffActive,this.atlas.sgrade,this.player.frameUv.u,this.player.frameUv.v),this.lightField.update(t),this.decals.update(t),this.updateLowHp(t),this.particles.update(t),this.damageText.update(t),this.gateBreachFx.update(t),this.ground.update(t,this.player.x,this.player.z),this.map.update(this.player.x,this.player.z,t),this.world.update();const w=this.hash.query(this.player.x,this.player.z,11,this.scratch);let T=0;for(let y=0;y<w;y++){const E=this.scratch[y];this.enemies.alive[E]===1&&this.enemies.controlled[E]===0&&T++}this.rig.setThreat(Math.min(1,T/45)),this.rig.setLookAhead(this.player.velX,this.player.velZ,this.player.speedFrac),this.cinematics.update(t),this.rig.update(t,this.player.x,this.player.z),this.banner.update(t,this.rig.camera);const M=this.rig.camera.position;td(M.x,M.y,M.z,this.player.x,1.2,this.player.z,this.map.activeColliderCount>0),this.gateRushTimer>0&&(this.gateRushTimer-=t,this.gateRushTimer<=0&&this.spawner.spawnGateRush(this.gateRushX,this.gateRushZ,this.gateRushHorizontal,this.gameTime/60));const A=this.musou.active?.9:0;this.musouStrength+=(A-this.musouStrength)*Math.min(1,t*6),this.renderSprites(),this.updateLabels(),this.updateMarkers(t),this.updateSiegeObjective(),this.pendingLevels>0&&this.state==="play"&&this.showNextLevelUp(),this.player.dead?this.onPlayerDeath():!this.endless&&this.gameTime>=Nl&&this.finish(!0),!this.ended&&this.hud.update(this.buildHudState())}buildHudState(){return{time:this.gameTime,kills:this.kills,level:this.level,xp:this.xp,nextXp:this.nextXp,hp:this.player.hp,maxHp:this.player.maxHp,gold:this.gold,musouPct:this.musou.gauge,musouReady:this.musou.ready,combo:this.combo.count,bossActive:this.boss.active,bossName:Me("hero",this.boss.typeId,this.boss.name),bossHanja:this.boss.hanja,bossFrac:this.boss.hpFrac(this.ctx)}}sayHero(t=3600){const e=Nd(this.hero.id,this.heroQuoteCursor++);this.hud.quote(this.hero.name,e,t),this.nextHeroQuoteAt=this.gameTime+60}static BOSS_SLOT_3=["yuanshao","xiahoudun","sunce"];static BOSS_SLOT_6=["dongzhuo","simayi","zhouyu"];checkBossSpawn(){if(this.boss.active)return;let t=!1;const e=this.gameTime/60;if(!this.bossFlags.b3&&this.gameTime>=180){this.bossFlags.b3=!0;const i=_o.BOSS_SLOT_3;this.boss.spawn(i[ce.int(i.length)],e,this.ctx,this.player.x,this.player.z),t=!0}else if(!this.bossFlags.b6&&this.gameTime>=360){this.bossFlags.b6=!0;const i=_o.BOSS_SLOT_6;this.boss.spawn(i[ce.int(i.length)],e,this.ctx,this.player.x,this.player.z),t=!0}else if(!this.bossFlags.b9&&this.gameTime>=540)this.bossFlags.b9=!0,this.boss.spawn("lvbu",e,this.ctx,this.player.x,this.player.z),t=!0;else if(this.endless&&this.gameTime>=this.nextMinibossAt){this.nextMinibossAt+=180;const i=Cd[this.minibossIdx%Cd.length];this.minibossIdx++,this.boss.spawn(i,e,this.ctx,this.player.x,this.player.z),t=!0}if(t&&this.boss.idx>=0&&(this.cinematics.onBossSpawn(this.enemies.x[this.boss.idx]-this.player.x,this.enemies.z[this.boss.idx]-this.player.z),this.boss.typeId)){const i=this.endless?Iw(this.boss.typeId):"",n=i||Fd(this.boss.typeId,"appear");if(n){const s=i?this.hero.name:Me("hero",this.boss.typeId,this.boss.name);this.hud.quote(s,n,3200)}}}consumeReplayTrigger(){return this.cinematics.consumeReplayTrigger()}setPostFx(t){this.postfx=t}renderSprites(){this.shadowR.begin(),this.state!=="attract"&&this.shadowR.push(this.player.x,this.player.z,this.player.radius*1.6),this.companion.active&&this.shadowR.push(this.companion.x,this.companion.z,this.companion.radius*1.5),this.companion2.active&&this.shadowR.push(this.companion2.x,this.companion2.z,this.companion2.radius*1.5),this.enemies.render(this.atlas,this.soldiersR,this.variantsR,this.sgradeR,this.apriorityR,this.shadowR),this.shadowR.end(),this.decals.render(),this.gems.render(),this.projectiles.render(this.renderTime),this.zones.render(this.renderTime),this.enemyProj.render(this.renderTime),this.treasure.render(),this.objects.render(this.renderTime)}updateLabels(){const t=this.enemies,e=t.specials;this.labels.begin();for(let i=e.length-1;i>=0;i--){const n=e[i];if(t.alive[n]===0||t.labels[n]===null){e.splice(i,1);continue}this.labels.place(t.labels[n],t.x[n],t.scale[n]*1.05,t.z[n]),t.cart[n]===1&&Math.random()<.6&&this.particles.emit(t.x[n],.8,t.z[n],0,.5,0,2.2,1.8,.6,.6,.5,-.4,.9)}this.labels.end()}updateMarkers(t){const e=this.player.x,i=this.player.z;this.markers.begin(this.renderTime);const n=this.map.landmarks;for(let r=0;r<n.length;r++){const o=n[r],l=e-o.x,h=i-o.z,c=l*l+h*h;o.glow>0&&this.markers.glowAt(o.x,o.z,o.glow,o.gr,o.gg,o.gb),c<900&&this.markers.name(o.name,o.x,o.height*.5+1,o.z),c<2116&&this.emitLandmarkAmbient(o,t),o.kind===11?this.markers.interactRing(o.x,o.z,1.6,.9,.35,this.landmarks.beaconStateNear(o.x,o.z)===0):o.kind===5?this.markers.interactRing(o.x,o.z,.5,1.3,.7,!0):o.kind===6?this.markers.interactRing(o.x,o.z,1.4,.85,.4,!0):o.kind===2&&this.markers.interactRing(o.x,o.z,.6,.85,1.2,this.landmarks.watchtowerActive(o.x,o.z))}this.objects.emitMarkers(this.markers,e,i);for(const r of yt.outerGates)this.markers.gateBar(r.x,r.z,this.map.gateHp01(r.key));const s=this.guideTarget();s?this.markers.guide(s.x,s.z,e,i,this.rig.camera,s.color):this.markers.guideOff(),this.markers.end()}guideTarget(){const t=this.enemies;for(let i=0;i<t.flee.length;i++)if(t.alive[i]===1&&t.flee[i]===1)return{x:t.x[i],z:t.z[i],color:"rgba(255,225,77,0.95)"};if(this.boss.active&&this.boss.idx>=0&&t.alive[this.boss.idx]===1)return{x:t.x[this.boss.idx],z:t.z[this.boss.idx],color:"rgba(232,92,74,0.95)"};const e=this.siegeGuideTarget();return e?{x:e.x,z:e.z,color:"rgba(120,220,200,0.9)"}:null}siegeGuideTarget(){const t=this.siege.siegeState;if(t==="held"||t==="fallen")return null;const e=Math.hypot(this.player.x-yt.cx,this.player.z-yt.cz)<70;if(t==="enemy_held"||t==="breached"){if(!e)return null;let i=null,n=1/0;for(const s of yt.outerGates){if(this.map.isGateBreached(s.key))continue;const r=(s.x-this.player.x)**2+(s.z-this.player.z)**2;r<n&&(n=r,i={x:s.x,z:s.z})}return i}return(t==="lord"||t==="captured"||t==="counterattack")&&e?{x:yt.cx,z:yt.cz}:null}updateSiegeObjective(){const t=this.siege.siegeState,e=Math.hypot(this.player.x-yt.cx,this.player.z-yt.cz)<60,i=wt()==="en";if(!e||t==="held"||t==="fallen"){this.hud.setObjective(null);return}if(t==="enemy_held"||t==="breached"){const n=this.map.castleOuterBreachCount();this.hud.setObjective({title:i?"Breach the Mugen Castle gates":"무한성 관문을 부숴라",sub:i?`Attack the gate · breached ${n}/3 · reward 名器`:`성문을 공격하라 · 파성 ${n}/3 · 보상 名器`,progress01:n/3})}else if(t==="lord")this.hud.setObjective({title:i?"Slay the warlord Hua Xiong":"성주 화웅을 베어라",color:"#e85c4a"});else if(t==="captured"){const n=this.siege.captureRemainSec;this.hud.setObjective({title:i?"Mugen Castle breached":"무한성 침투 — 정비",sub:i?"Stay in the keep. Reclaimers incoming":"성에 머물러 대비 · 탈환군 내습 임박",countdownSec:n>=0?n:void 0,color:"#9affc0"})}else if(t==="counterattack"){const n=this.siege.counterRemainSec;this.hud.setObjective({title:i?"Hold Mugen Castle — survive!":"무한성 결전 — 버텨라!",sub:i?"Survive in the castle until time runs out":"성 안에서 시간이 다할 때까지 버텨라",countdownSec:n>=0?n:void 0,color:"#e85c4a"})}}emitLandmarkAmbient(t,e){const i=t.kind;i===11?Math.random()<13*e&&this.particles.fireEmber(t.x,t.z,.5):i===5?Math.random()<4*e&&this.particles.emit(t.x+(Math.random()-.5),t.height*.72,t.z+(Math.random()-.5)*.6,(Math.random()-.5)*.2,.7+Math.random()*.4,(Math.random()-.5)*.2,.5,.5,.52,1.1,1.2,-.3,.95):i===4&&Math.random()<2*e&&this.particles.emit(t.x,t.height*.5,t.z,0,.5+Math.random()*.3,0,.42,.42,.44,.9,1.4,-.2,.96)}contactDamage(){const t=this.player.x,e=this.player.z,i=this.hash.query(t,e,this.player.radius+1.8,this.scratch);let n=0;for(let s=0;s<i;s++){const r=this.scratch[s];if(this.enemies.alive[r]===0)continue;const o=t-this.enemies.x[r],l=e-this.enemies.z[r],h=this.player.radius+this.enemies.radius[r];o*o+l*l<=h*h&&this.enemies.damage[r]>n&&(n=this.enemies.damage[r])}n>0&&this.player.takeDamage(n*.5)&&(this.hitstop(90,.05),this.rig.addTrauma(.65),this.pulseDamageVig(.22+n*.5/this.player.maxHp*1.1),this.player.hurtFlash(),this.postfx?.pulseAberration(.85),this.musou.addHit(),Pt.sfx("playerHit"))}onPlayerHit=(t,e=0,i=0)=>(this.player.takeDamage(t)&&(this.hitstop(90,.05),this.rig.addTrauma(.62),this.pulseDamageVig(.22+t/this.player.maxHp*1.1),this.player.hurtFlash(),this.postfx?.pulseAberration(.85),this.musou.addHit(),e!==0||i!==0?(this.player.nudge(e,i,2.4),this.rig.addTrauma(.15),Pt.sfx("playerHitProj")):Pt.sfx("playerHit")),!0);addGold(t){this.gold+=t,this.goldEarned+=t}handleKill(t){const e=this.enemies,i=e.x[t],n=e.z[t],s=this.map.recordKillAt(i,n);if(s&&this.onGateBreached(s),e.cart[t]===1){this.particles.burst(i,n,2.6,2,.7,30,6),this.effects.spawnRing(i,n,7,2.6,2,.7,.6),this.treasure.spawn(i,n,!1),this.addGold(Math.round(400*this.player.stats.goldMul)),this.hud.banner(`${it("bannerSupply")} 補給確保`,"#ffe14d",52,1500),Pt.sfx("levelup"),this.kills++,e.kill(t);return}if(e.boss[t]===1){if(this.boss.typeId==="huaxiong"){this.captureCastle(t);return}if(this.particles.burst(i,n,2.6,1.6,.7,60,8),this.effects.spawnRing(i,n,16,2.4,1.6,.8,.7),this.effects.spawnRing(i,n,10,2.2,1.2,2,.5),this.effects.spawnFlash(i,n,2.6,2,1,7),this.treasure.spawn(i,n,!0),this.hitstop(120,.05),this.rig.addTrauma(.9),this.cinematics.onBossDeath(i-this.player.x,n-this.player.z),this.postfx?.pulseBlur(.7),this.postfx?.pulseAberration(1),this.flashScreen(.4),this.hud.banner("討伐","#e8c667",90,1600,1),Pt.sfx("levelup"),this.boss.typeId){const o=Fd(this.boss.typeId,"death");o&&this.hud.quote(Me("hero",this.boss.typeId,this.boss.name),o,3200),this.bossesKilled.add(this.boss.typeId)}Pt.playBgm("battle"),this.addGold(Math.round(300*this.player.stats.goldMul)),this.kills++,e.kill(t);return}if(e.elite[t]===1){this.particles.burst(i,n,2.4,1.4,.7,26,6),this.effects.spawnRing(i,n,6,2.2,1.6,.8,.5),this.effects.spawnFlash(i,n,2.2,1.6,.8,3.6),this.treasure.spawn(i,n,!1),this.hitstop(60,.06),this.rig.addTrauma(.4),Pt.sfx("hit"),this.addGold(Math.round(50*this.player.stats.goldMul)),this.kills++,e.kill(t);return}if(this.particles.burst(i,n,2.2*e.tr[t],1.3*e.tg[t],.5*e.tb[t],14,4.5),this.gems.spawn(i,n,e.gemValue[t]),this.musou.active){const o=Math.atan2(n-this.player.z,i-this.player.x);this.effects.spawnKOStar(i,n,Math.cos(o),Math.sin(o))}{const o=this.player.hp<this.player.maxHp*.4;this.gems.activeHealCount<6&&ce.next()<(o?.024:.012)&&this.gems.spawnHeal(i,n,.06)}this.addGold(this.player.stats.goldMul),this.kills++,this.frameKills++,this.frameKills<=2&&this.effects.spawnFlash(i,n,1.5*e.tr[t],.95*e.tg[t],.5*e.tb[t],1.4),Pt.sfx("hit");const r=this.combo.onKill();this.combo.count>this.maxCombo&&(this.maxCombo=this.combo.count),r>0&&(this.xp+=r*this.player.stats.xpMul),this.musou.addKill(this.combo.count),this.rig.punchFov(-.5),e.kill(t)}captureCastle(t){const e=this.enemies,i=e.x[t],n=e.z[t];this.particles.burst(i,n,2.6,1.6,.7,60,8),this.effects.spawnRing(i,n,16,2.4,1.6,.8,.7),this.effects.spawnRing(i,n,10,2.2,1.2,2,.5),this.effects.spawnFlash(i,n,2.6,2,1,7),this.hitstop(120,.05),this.rig.addTrauma(.9),this.cinematics.onBossDeath(i-this.player.x,n-this.player.z),this.postfx?.pulseBlur(.7),this.postfx?.pulseAberration(1),this.flashScreen(.4);const s=Ew();s&&this.hud.quote(Vd(),s,3200),Pt.sfx("levelup"),Pt.playBgm("battle"),this.kills++,this.siege.captureNow(i,n),e.kill(t)}onGateBreached(t){if(this.world.update(),this.gateBreachFx.burst(t.x,t.z),this.effects.spawnRing(t.x,t.z,11,1.15,.36,.13,.62),this.effects.spawnRing(t.x,t.z,6.5,.95,.62,.24,.4),this.particles.burst(t.x,t.z,1.8,.7,.25,72,9),this.hitstop(90,.03),this.rig.addTrauma(.78),this.rig.punchFov(3),this.flashScreen(.16),Pt.sfx("explosion"),t.key.startsWith("castle-")){this.siege.notifyGateBreach(t.key),this.hud.banner(`${wt()==="en"?"Gate Breached":"성문 돌파"} 城門突破`,"#ffb05a",52,1600,1);return}this.hud.banner(`${it("bannerHulaoBreak")} 虎牢關破城`,"#ffb05a",58,1900),this.gateRushTimer=.8,this.gateRushX=t.x,this.gateRushZ=t.z,this.gateRushHorizontal=t.horizontal}onCollect=t=>{const e=this.combo.fever?1.5:1;for(this.xp+=t*this.player.stats.xpMul*e,Pt.sfx("gem"),this.particles.emit(this.player.x,1,this.player.z,0,1.5,0,.4,.8,2.2,.7,.4,3,.9);this.xp>=this.nextXp;)this.xp-=this.nextXp,this.level++,this.nextXp=qr(this.level),this.pendingLevels++,this.hud.punchLevel(),Pt.sfx("levelup")};onTreasure=t=>{this.effects.spawnRing(this.player.x,this.player.z,5,2.6,2,.8,.5);const e=this.tryEvolve();if(e){this.hud.banner(`${it("bannerEvolve")} ${e}`,"#ff9a3c",56,1800),Pt.sfx("evolve"),this.refreshLoadout();return}if(t){const i=dd(()=>ce.next(),this.masterworkIds,3);if(i.length>0){this.player.heal(this.player.maxHp*.5),this.curChoices=i.map(s=>({kind:"masterwork",id:s.id})),this.state="levelup";const n=this.curChoices.map(s=>this.cardView(s));this.levelup.open(n,Math.floor(this.gold),!1,s=>this.pickCard(s),()=>{});return}}for(this.player.heal(this.player.maxHp*(t?.6:.35)),this.addGold(Math.round((t?200:80)*this.player.stats.goldMul)),this.xp+=(t?this.nextXp*1.5:this.nextXp*.6)*this.player.stats.xpMul,this.hud.banner(it(t?"bannerTreasure":"bannerReward"),"#9affc0",48,1400);this.xp>=this.nextXp;)this.xp-=this.nextXp,this.level++,this.nextXp=qr(this.level),this.pendingLevels++};tryEvolve(){for(const t of Oh){const e=this.weapons.find(n=>n.id===t.from);if(!e||e.level<8||(this.passives[t.passive]??0)<1||this.weapons.some(n=>n.id===t.to))continue;const i=this.weapons.indexOf(e);return this.weapons[i]=Ra(t.to),this.projectiles.clearOrbits(),this.effects.spawnRing(this.player.x,this.player.z,9,2.8,1.6,2.4,.8),we[t.to].name}return null}showNextLevelUp(){if(this.pendingLevels<=0){this.state="play";return}this.pendingLevels--,this.state="levelup",this.rerolledThisLevel=!1,this.openCards()}openCards(){this.curChoices=this.buildChoices();const t=this.curChoices.map(e=>this.cardView(e));this.levelup.open(t,Math.floor(this.gold),!this.rerolledThisLevel&&this.gold>=kl,e=>this.pickCard(e),()=>this.reroll())}reroll(){this.rerolledThisLevel||this.gold<kl||(this.gold-=kl,this.rerolledThisLevel=!0,this.openCards())}buildChoices(){const t=[];for(const i of this.weapons)i.level<8&&we[i.id]&&!we[i.id].evolution&&t.push({kind:"upWeapon",id:i.id});for(const i in this.passives){const n=Hi[i];n&&this.passives[i]<n.maxLevel&&t.push({kind:"upPassive",id:i})}if(this.weapons.length<Xr)for(const i in we)we[i].evolution||this.availableWeapons&&!this.availableWeapons.has(i)||this.weapons.some(s=>s.id===i)||t.push({kind:"newWeapon",id:i});if(Object.keys(this.passives).length<Ul)for(const i of Gf)this.passives[i.id]===void 0&&t.push({kind:"newPassive",id:i.id});for(let i=t.length-1;i>0;i--){const n=ce.int(i+1),s=t[i];t[i]=t[n],t[n]=s}const e=t.slice(0,3);for(;e.length<3;){const i=["heal","gold","xp"][e.length%3];e.push({kind:"reward",id:i})}if(this.relicIds.length<Gw&&(this.forceRelicNext||ce.next()<Vw)){const i=Ey(()=>ce.next(),this.relicIds);i&&(e[ce.int(e.length)]={kind:"relic",id:i.id}),this.forceRelicNext=!1}return e}cardView(t){const e=wt()==="en";if(t.kind==="newWeapon"){const s=we[t.id];return{title:Me("weapon",t.id,s.name),hanja:s.hanja,desc:e?Ha[t.id]??s.desc:s.desc,tag:`${it("catWeapon")} · ${it("tagNew")}`,accent:"#e8c667",symbol:s.hanja[0],badge:it("tagNew"),count:`${e?"Weapons":"무기"} ${this.weapons.length}/${Xr}`}}if(t.kind==="upWeapon"){const s=we[t.id],r=this.weapons.find(h=>h.id===t.id),o=r.level+1>=8;let l;if(o){const h=Oh.find(c=>c.from===t.id);if(h&&!this.weapons.some(c=>c.id===h.to)){const c=Me("passive",h.passive,Hi[h.passive]?.name??h.passive);l=(this.passives[h.passive]??0)>=1?e?"Evolution ready · elite chest 進化":"進化 준비 완료 · 정예 보물상자":e?`Evolve soon · needs ${c} 進化`:`進化 임박 · ${c} 필요`}}return{title:Me("weapon",t.id,s.name),hanja:s.hanja,desc:e?Ha[t.id]??s.desc:s.desc,tag:`${it("catWeapon")} ${it(o?"tagMax":"tagUp")} Lv${r.level}→${r.level+1}`,accent:"#e8a94a",symbol:s.hanja[0],badge:it(o?"tagMax":"tagUp"),rare:o,count:`${e?"Weapons":"무기"} ${this.weapons.length}/${Xr}`,evoHint:l}}if(t.kind==="newPassive"){const s=Hi[t.id];return{title:Me("passive",t.id,s.name),hanja:s.hanja,desc:s.desc(1),tag:`${it("catPassive")} · ${it("tagNew")}`,accent:"#7ec8ff",symbol:s.hanja[0],badge:it("tagNew"),rare:s.rare,count:`${e?"Passives":"패시브"} ${Object.keys(this.passives).length}/${Ul}`}}if(t.kind==="upPassive"){const s=Hi[t.id],r=this.passives[t.id];return{title:Me("passive",t.id,s.name),hanja:s.hanja,desc:s.desc(r+1),tag:`${it("catPassive")} ${it("tagUp")} Lv${r}→${r+1}`,accent:"#7ec8ff",symbol:s.hanja[0],badge:it("tagUp"),rare:s.rare,count:`${e?"Passives":"패시브"} ${Object.keys(this.passives).length}/${Ul}`}}if(t.kind==="relic"){const s=vc[t.id];return{title:Ay(s),hanja:s.hanja,desc:Ty(s),tag:it("catRelic"),accent:"#c77dff",symbol:s.hanja[0],badge:it("tagCurse"),rare:!0}}if(t.kind==="masterwork"){const s=mo[t.id];return{title:Wf(s),hanja:s.hanja,desc:Xf(s),tag:e?"Masterwork 名器":"명기 名器",accent:"#f5c542",symbol:s.hanja[0],badge:e?"RARE":"名器",rare:!0}}const n={heal:{name:it("rewardHealName"),hanja:"再整備",desc:it("rewardHealDesc"),symbol:"治"},gold:{name:it("rewardGoldName"),hanja:"軍資金",desc:it("rewardGoldDesc"),symbol:"金"},xp:{name:it("rewardXpName"),hanja:"兵法修鍊",desc:it("rewardXpDesc"),symbol:"書"}}[t.id];return{title:n.name,hanja:n.hanja,desc:n.desc,tag:it("tagReward"),accent:"#9affc0",symbol:n.symbol,badge:it("tagReward")}}pickCard(t){if(!this.levelup.active&&this.state!=="levelup")return;const e=this.curChoices[t];e&&(Pt.sfx("cardSelect"),this.applyChoice(e),this.levelup.close(),this.refreshLoadout(),this.showNextLevelUp())}applyChoice(t){if(t.kind==="newWeapon")this.weapons.push(Ra(t.id));else if(t.kind==="upWeapon"){const e=this.weapons.find(i=>i.id===t.id);e&&(e.level=Math.min(8,e.level+1))}else if(t.kind==="newPassive")this.passives[t.id]=1,this.player.recomputeStats(this.passives);else if(t.kind==="upPassive")this.passives[t.id]++,this.player.recomputeStats(this.passives);else if(t.kind==="relic")this.relicIds.push(t.id),this.player.addRelic(t.id),Pt.sfx("relic");else if(t.kind==="masterwork"){this.masterworkIds.push(t.id),this.player.addMasterwork(t.id),Pt.sfx("relic");const e=mo[t.id].hanja[0];this.effects.spawnCrest(this.player.x,this.player.z,e,1.3,1.02,.34,2),this.effects.spawnRing(this.player.x,this.player.z,9,1.3,1.02,.34,.7),this.effects.spawnLight&&this.effects.spawnLight(this.player.x,this.player.z,1.6,1.2,.4,7,.5)}else t.id==="heal"?this.player.heal(this.player.maxHp*.5):t.id==="gold"?this.gold+=200:this.xp+=this.nextXp*.9*this.player.stats.xpMul}onPlayerDeath(){if(this.reviveAvailable&&!this.reviveUsed){this.reviveUsed=!0,this.player.revive(.5,2),this.effects.spawnRing(this.player.x,this.player.z,24,2.4,1.8,.8,.7),this.shockwave(this.player.x,this.player.z,26,600*this.player.stats.damageMul),this.rig.addTrauma(.7),this.flashScreen(.45),this.hud.banner("起死回生","#9affc0",60,1600),Pt.sfx("revive");return}this.finish(this.victoryAchieved)}resumeEndless(){this.endless||(this.endless=!0,this.ended=!1,this.victoryAchieved=!0,this.state="play",this.hud.setVisible(!0),this.hud.banner(`${it("bannerEndless")} 無限`,"#e85c4a",56,1600),Pt.playBgm("battle"))}shockwave(t,e,i,n){this.postfx?.pulseAberration(.7);const s=this.enemies,r=this.hash.query(t,e,i,this.scratch);for(let o=0;o<r;o++){const l=this.scratch[o];if(s.alive[l]===0)continue;const h=s.x[l]-t,c=s.z[l]-e,u=h*h+c*c;if(u>i*i)continue;const d=Math.sqrt(u)||1;s.push(l,h/d,c/d,10),s.damageAt(l,n)&&this.handleKill(l)}}finish(t){if(this.ended)return;this.ended=!0,t&&!this.endless&&this.gameTime>=Nl&&(this.victoryAchieved=!0),this.hud.setFever(!1),this.state=t?"victory":"dead",t?this.rig.addTrauma(.5):(this.damageVigLevel=0,this.damageFlash.animate([{opacity:.85},{opacity:0}],{duration:600,easing:"ease-out"}),this.rig.addTrauma(.8)),this.hud.setVisible(!1);const e=Math.floor(this.maxCombo),i={victory:t,heroId:this.hero.id,time:this.gameTime,kills:this.kills,maxCombo:this.maxCombo,level:this.level,goldEarned:Math.floor(this.goldEarned)+e,comboBonus:e,weapons:this.weapons.map(n=>({id:n.id,level:n.level})),passives:Object.keys(this.passives).map(n=>({id:n,level:this.passives[n]})),bosses:Array.from(this.bossesKilled),masterworks:[...this.masterworkIds],endless:this.endless,canContinue:t&&!this.endless&&this.gameTime>=Nl,luoyang:this.siegeEvents.defended>0?"held":this.siegeEvents.lost>0?"fallen":this.siegeEvents.capture>0?"captured":"none"};this.hooks.onEnd(i)}testSetTime(t){this.gameTime=t}testGiveWeapon(t){if(!we[t])return;const e=this.weapons.find(i=>i.id===t);if(e)e.level=8;else{this.weapons.length>=Xr&&this.weapons.pop();const i=Ra(t);i.level=8,this.weapons.push(i)}this.refreshLoadout()}testGivePassive(t,e=5){Hi[t]&&(this.passives[t]=Math.min(Hi[t].maxLevel,e),this.player.recomputeStats(this.passives),this.refreshLoadout())}testKillPlayer(){this.player.invuln=0,this.player.musouInvuln=!1,this.reviveAvailable=!1,this.player.takeDamage(999999)}testDamagePlayer(t){this.onPlayerHit(t)}testKillBoss(){if(!this.boss.active||this.boss.idx<0)return;const t=this.boss.idx;this.enemies.damageAt(t,1e9)&&this.handleKill(t)}testMusouFx(){const t=this.player.x,e=this.player.z;this.effects.spawnCrest(t,e,"龍",.5,1.4,2.4,6),this.effects.spawnBaguaSigil(t+13,e,6),this.effects.spawnTripleShock(t-13,e,5,1.6,1,.4),this.effects.spawnFireWall(t,e+11,1,0,9,1.8,3),this.effects.spawnFlameTrail(t+7,e-9,.4,1.9,1.1);for(let i=0;i<6;i++)this.effects.spawnMeteorArrow(t-12+i*4.5,e-13,1.7,1.4,.6,.55+i*.07);this.lightField.spawn(t,1,e,.5,1.2,2.2,12,2,!0)}testForceLevel(){this.xp+=this.nextXp,this.onCollect(0)}testShrineBuff(t="attack",e=30){this.player.applyBuff(t,e)}testFlashBurst(t=6,e=.4){for(let i=0;i<t;i++)this.flashScreen(e)}testFillMusou(){this.musou.gauge=100}testActivateMusou(){this.musou.gauge=100,this.musou.activate()}testAddGold(t){this.gold+=t}testSpawnProjectileShowcase(){const t=this.player.x-4,e=this.player.z,i=[[ia,-3.2,2,1.5,.55,2,1.5,.7],[bc,-1.6,1.6,1.25,.95,1.7,1.7,2.1],[as,0,1.3,3,2.2,.7,2.4,1.2],[Da,1.8,1,1.35,1.35,1.6,1.8,2.3],[Fn,3.8,2.4,4.5,1.7,2,1.4,.9]];for(const[n,s,r,o,l,h,c,u]of i)this.projectiles.spawn(t,e+s,1,0,r,0,.2,99,4.5,n,h,c,u,o,l,!1,0,n===Fn);this.testSpawnEnemyProjectileShowcase()}testSpawnEnemyProjectileShowcase(){const t=this.player.x-2.4,e=this.player.z,i=[[Bi,6.2,1.8,!1],[xc,3.8,1.3,!0],[go,1.5,1.45,!1],[_c,-.8,1.2,!0],[Zs,-3.6,1.7,!1],[vn,-6.2,1.05,!1]];for(const[n,s,r,o]of i)this.enemyProj.spawn(t,e+s,1,0,r,0,o,n)}testSpawnBoss(t){this.boss.active||this.boss.spawn(t,this.gameTime/60,this.ctx,this.player.x,this.player.z)}testTreasure(t=!1){this.onTreasure(t)}testSetBossFlags(t,e,i){this.bossFlags={b3:t,b6:e,b9:i}}testTriggerEvent(t){t==="rush"?this.events.forceRush():t==="meteor"?this.events.forceMeteor():t==="cart"&&this.events.forceCart(this.gameTime)}testSpawnPattern(t){this.spawner.forcePattern(t,this.gameTime,this.player.x,this.player.z)}testShowWorldObjects(){this.objects.testShowcase(this.player.x,this.player.z)}testSetPlayerPosition(t,e){this.map.projectWalkable(t,e,this.player.radius,this.moveOut),this.player.setPosition(this.moveOut.x,this.moveOut.z),this.map.update(this.player.x,this.player.z,0),this.world.update()}testSetInvulnerable(t=60){this.player.invuln=Math.max(this.player.invuln,t)}testTriggerHulao(){this.map.triggerHulao(this.player.x,this.player.z)}testFlipBanners(t){se.allied=t,se.flipX=yt.cx,se.flipZ=yt.cz,se.flipVersion++}testVolley(){const t=this.player.x,e=this.player.z,i=[];for(let n=0;n<6;n++){const s=n/6*Math.PI*2;i.push({x:t+Math.cos(s)*5,z:e+Math.sin(s)*5,t:.9})}this.arrowRain.volley(i)}testPrimeGate(){this.map.hulaoOn||this.map.triggerHulao(this.player.x,this.player.z),this.map.primeGate()}testBreachGate(){this.map.hulaoOn||this.map.triggerHulao(this.player.x,this.player.z),this.map.primeGate();const t=this.map.gates.find(i=>i.key==="hulao");if(!t)return;const e=this.map.recordKillAt(t.x,t.z);e&&this.onGateBreached(e)}testSiegeBreach(t="castle-s"){const e=this.map.gates.find(n=>n.key===t);if(!e)return;const i=this.map.breachNear(e.x,e.z,.5);i&&this.onGateBreached(i)}testSiegeForceLord(){this.siege.testForceLord()}testSiegeForceCounter(){this.siege.testForceCounter()}testSiegeAddFall(t){this.siege.testAddFall(t)}testSiegeForceDefend(){this.siege.testForceDefend()}testSetObjective(t){this.hud.setObjective(t)}testDamageGate(t,e){const i=this.map.damageGate(t,e);i&&this.onGateBreached(i)}testForceRelic(){this.forceRelicNext=!0,this.testForceLevel()}testEnterEndless(){this.victoryAchieved=!0,this.endless=!0,this.gameTime<601&&(this.gameTime=601)}get testStats(){return{time:this.gameTime,musouGauge:this.musou.gauge,kills:this.kills,level:this.level,gold:Math.floor(this.gold),goldEarned:Math.floor(this.goldEarned),maxCombo:this.maxCombo,hero:this.hero.id,alive:this.enemies.aliveCount,worldProps:this.world.visibleProps,worldObjects:this.objects.visibleCount,map:{walls:this.map.walls.length,roads:this.map.roads.length,landmarks:this.map.landmarks.length,landmarkVisible:this.world.landmarkVisible,colliders:this.map.activeColliderCount,collisions:this.map.collisionCount,gateKills:this.map.gateKills,gateBreached:this.map.isGateBreached(),gateHp:{s:this.map.gateHp01("castle-s"),e:this.map.gateHp01("castle-e"),w:this.map.gateHp01("castle-w")},breaches:this.map.breachCount,playerInsideWall:this.map.circleBlocked(this.player.x,this.player.z,this.player.radius*.95),playerWallHits:this.playerWallHits,enemiesInsideWall:this.enemies.countInsideWalls(this.map),debris:this.gateBreachFx.activeCount,playerX:this.player.x,playerZ:this.player.z},enemyProjectiles:this.enemyProj.activeCount,enemyProjectileKinds:this.enemyProj.kindCounts,patterns:{charge:this.enemies.chargeStarts,volley:this.enemies.volleyStarts,caster:this.enemies.casterStarts},autoAim:{target:this.ctx.aimTarget,x:this.ctx.aimX,z:this.ctx.aimZ,lastWeapon:this.lastAttackWeapon,lastX:this.lastAttackX,lastZ:this.lastAttackZ,count:this.lastAttackCount},weapons:this.weapons.map(t=>`${t.id}:${t.level}`),passives:{...this.passives},musou:this.musou.gauge,bossActive:this.boss.active,bossHp01:this.boss.hpFrac(this.ctx),bossX:this.boss.idx>=0?this.enemies.x[this.boss.idx]:0,bossZ:this.boss.idx>=0?this.enemies.z[this.boss.idx]:0,companion:this.companion.active?this.companion.definition.id:null,companionAttacks:this.companion.attacks,companionKills:this.companion.kills+this.companion2.kills,relics:[...this.relicIds],endless:this.endless,fever:this.combo.fever,siege:{state:this.siege.siegeState,fallGauge:this.siege.fallGaugeValue,allied:se.allied,events:{...this.siegeEvents}},state:this.state}}}const Qf=[{id:"attack",name:"무예 단련",hanja:"武藝鍛鍊",maxLevel:5,desc:a=>wt()==="en"?`Attack +${a*8}%`:`공격력 +${a*8}%`},{id:"health",name:"철갑 강화",hanja:"鐵甲强化",maxLevel:5,desc:a=>wt()==="en"?`Max HP +${a*10}%`:`최대 체력 +${a*10}%`},{id:"speed",name:"준마 훈련",hanja:"駿馬訓鍊",maxLevel:5,desc:a=>wt()==="en"?`Move speed +${a*5}%`:`이동속도 +${a*5}%`},{id:"pickup",name:"집혼 향낭",hanja:"集魂香囊",maxLevel:5,desc:a=>wt()==="en"?`Pickup radius +${a*12}%`:`픽업 반경 +${a*12}%`},{id:"cooldown",name:"전술 통달",hanja:"戰術通達",maxLevel:5,desc:a=>wt()==="en"?`Cooldown -${(100*(1-Math.pow(.96,a))).toFixed(0)}%`:`쿨다운 -${(100*(1-Math.pow(.96,a))).toFixed(0)}%`},{id:"startLevel",name:"숙련 출진",hanja:"熟練出陣",maxLevel:5,desc:a=>wt()==="en"?a>0?`Start at level ${1+a}`:"Start at level 1":a>0?`${a}레벨 상태로 시작`:"기본 1레벨로 시작"},{id:"revive",name:"기사회생",hanja:"起死回生",maxLevel:1,desc:a=>wt()==="en"?a>0?"Revive once per run (HP 50%, 2s invuln, shockwave)":"No revival on death":a>0?"런당 1회 부활 (HP 50%·무적 2초·충격파)":"사망 시 부활 없음"}],tp={};for(const a of Qf)tp[a.id]=a;function ep(a,t){return t>=a.maxLevel?-1:200*Math.pow(2,t)}const bo=5e3;function Ww(a){const t=e=>a[e]??0;return{damageMul:1+.08*t("attack"),maxHpMul:1+.1*t("health"),speedMul:1+.05*t("speed"),pickupMul:1+.12*t("pickup"),cooldownMul:Math.pow(.96,t("cooldown")),startLevel:t("startLevel"),revive:t("revive")>0}}function Xw(a){let t=0;for(const e of a)we[e.id]?.evolution&&t++;return t}const yo=[{id:"first_win",name:"천하의 주인",hanja:"天下之主",desc:"첫 승리 (10:00 생존)",priority:60,check:a=>a.victory},{id:"slay_lvbu",name:"비장군 참살",hanja:"飛將軍斬殺",desc:"최종보스 여포 처치",priority:80,check:a=>a.bosses.includes("lvbu")},{id:"thousand_cut",name:"천인참",hanja:"千人斬",desc:"한 런에서 1,000명 처치",priority:55,check:a=>a.kills>=1e3},{id:"five_hundred_cut",name:"오백인참",hanja:"五百人斬",desc:"한 런에서 500명 처치",priority:35,check:a=>a.kills>=500},{id:"invincible",name:"금강불괴",hanja:"金剛不壞",desc:"3분간 무피격 유지",priority:65,check:a=>(a.noHitTime??0)>=180},{id:"master_smith",name:"전설의 대장장이",hanja:"傳說鍛冶",desc:"한 런에서 진화 무기 3종 이상",priority:70,check:a=>Xw(a.weapons)>=3},{id:"combo_master",name:"연격의 화신",hanja:"連擊化身",desc:"최대 콤보 500 돌파",priority:50,check:a=>a.maxCombo>=500},{id:"veteran",name:"백전노장",hanja:"百戰老將",desc:"누적 10,000명 처치",priority:45,check:a=>(a.totalKills??0)>=1e4},{id:"all_bosses",name:"군웅할거의 종결자",hanja:"群雄割據終結",desc:"한 런에서 세 보스 모두 처치",priority:75,check:a=>a.bosses.includes("yuanshao")&&a.bosses.includes("dongzhuo")&&a.bosses.includes("lvbu")},{id:"high_level",name:"병법의 대가",hanja:"兵法大家",desc:"레벨 40 도달",priority:40,check:a=>a.level>=40},{id:"endless_walker",name:"무명의 사신",hanja:"無名死神",desc:"무한 모드에서 15분 생존",priority:85,check:a=>!!a.endless&&a.time>=900},{id:"survivor",name:"역전의 용사",hanja:"歷戰勇士",desc:"5분 이상 생존",priority:20,check:a=>a.time>=300}],Ac={};for(const a of yo)Ac[a.id]=a;function qw(a){const t=[];for(const e of yo)e.check(a)&&t.push(e.id);return t}function $w(a){let t=null;for(const i of a){const n=Ac[i];n&&(!t||n.priority>t.priority)&&(t=n)}const e=wt()==="en";return t?{name:e?no[t.id]?.name??t.name:t.name,hanja:t.hanja}:{name:e?"Nameless General":"무명의 장수",hanja:"無名將"}}const jw=[{id:"mugen_conquered",ko:"무한성을 정복한 자",en:"Conqueror of Mugen Castle",rarity:3,cond:a=>a.luoyang==="held"},{id:"ilgidangcheon",ko:"일기당천 一騎當千",en:"One Rider, a Thousand Foes",rarity:3,cond:a=>a.kills>=1e3},{id:"endless_field",ko:"끝나지 않는 전장에 남은 자",en:"One Who Remained on the Endless Field",rarity:3,cond:a=>a.endless},{id:"wuchao_fire",ko:"오소의 밤불을 든 자",en:"Bearer of the Wuchao Night-Fire",rarity:3,cond:a=>a.bosses.length>=3&&a.maxCombo>=300},{id:"first_unify",ko:"처음으로 천하를 통일한 자",en:"First to Unify the Realm",rarity:3,cond:(a,t)=>a.victory&&t.totalWins<=1},{id:"gate_breaker",ko:"성문을 여는 자",en:"Breaker of the Gate",rarity:2,cond:a=>a.luoyang==="captured"||a.luoyang==="held"},{id:"fallen_gate",ko:"무너진 성문에서 살아남은 자",en:"Survivor of the Fallen Gate",rarity:2,cond:a=>a.luoyang==="fallen"},{id:"three_champions",ko:"세 챔피언을 꺾은 자",en:"Feller of Three Champions",rarity:2,cond:a=>a.bosses.length>=3},{id:"combo_sweep",ko:"한 호흡에 벤 자",en:"One Breath, One Sweep",rarity:2,cond:a=>a.maxCombo>=300},{id:"masterworks_bearer",ko:"명기를 갖춘 자",en:"Bearer of Masterworks",rarity:2,cond:a=>a.masterworks.length>=3},{id:"yangren_gate",ko:"양인의 잿문을 연 자",en:"One Who Opened the Ash-Gate of Yangren",rarity:2,cond:a=>a.bosses.includes("dongzhuo")},{id:"baima_banner",ko:"백마 둑의 큰 깃발을 붙든 자",en:"Holder of the Great Banner at Baima",rarity:2,cond:a=>a.bosses.includes("yuanshao")},{id:"unified",ko:"살아 돌아온 머릿수를 센 자",en:"One Who Counted the Living Home",rarity:1,cond:a=>a.victory},{id:"ash_road",ko:"잿길을 헤치고 나아간 자",en:"One Who Cut Through the Ash-Road",rarity:1,cond:a=>a.kills>=500},{id:"one_masterwork",ko:"명기 하나를 얻은 자",en:"Finder of a Masterwork",rarity:1,cond:a=>a.masterworks.length>=1},{id:"altar_count",ko:"제단 아래 사람 수를 센 자",en:"One Who Counted Heads Beneath the Altar",rarity:1,cond:()=>!0}];function ip(a,t){let e=null;for(const i of jw)i.cond(a,t)&&(!e||i.rarity>e.rarity)&&(e=i);return e}function Zw(a){return wt()==="en"?a.en:a.ko}const Kw=["zhaoyun","guanyu","sunshangxiang","zhangfei","zhugeliang","huangzhong","lvbu"];function Tc(a,t){switch(a){case"zhaoyun":case"guanyu":case"sunshangxiang":return!0;case"zhangfei":return t.totalKills>=100;case"huangzhong":return t.best.time>=180;case"zhugeliang":return t.bosses.includes("dongzhuo");case"lvbu":return t.lvbuUnlocked;default:return!1}}function $d(a){return Kw.filter(t=>Tc(t,a))}function Yw(a,t){const e=wt()==="en";switch(a){case"zhangfei":return e?`Total kills ${Math.min(100,Math.floor(t.totalKills))}/100`:`누적 처치 ${Math.min(100,Math.floor(t.totalKills))}/100`;case"huangzhong":{const i=Math.min(180,Math.floor(t.best.time)),n=`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`;return e?`Best survival ${n} / 3:00`:`최고 생존 ${n} / 3:00`}case"zhugeliang":return e?"Defeat Dong Zhuo 董卓":"동탁 董卓 토벌";case"lvbu":return e?"Unlock at Camp (5000⟡)":"본진에서 5000⟡ 해금";default:return""}}const Ri=1200,Yi=630,Jw="midagedev.github.io/threesur",jd="https://midagedev.github.io/threesur/";function Qw(a){const t=Math.floor(a/60),e=Math.floor(a%60);return`${t.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}function tS(a,t){const e=document.createElement("canvas");e.width=Ri,e.height=Yi;const i=e.getContext("2d"),n=xn[a.heroId],s=i.createLinearGradient(0,0,Ri,Yi);s.addColorStop(0,"#12131b"),s.addColorStop(1,"#05060a"),i.fillStyle=s,i.fillRect(0,0,Ri,Yi);const r=i.createRadialGradient(Ri/2,Yi/2,200,Ri/2,Yi/2,760);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,0.55)"),i.fillStyle=r,i.fillRect(0,0,Ri,Yi),i.strokeStyle="rgba(120,140,180,0.05)",i.lineWidth=1;for(let y=0;y<=Ri;y+=60)i.beginPath(),i.moveTo(y,0),i.lineTo(y,Yi),i.stroke();i.strokeStyle="rgba(232,198,103,0.7)",i.lineWidth=2,i.strokeRect(22,22,Ri-44,Yi-44),i.strokeStyle="rgba(232,198,103,0.25)",i.lineWidth=1,i.strokeRect(30,30,Ri-60,Yi-60);const o='"Nanum Myeongjo","Times New Roman",serif';i.textAlign="left",i.textBaseline="alphabetic",i.fillStyle="#f0e4c0",i.font=`bold 46px ${o}`,i.fillText(wt()==="en"?"MELGWIMUSOU":"멸귀무쌍",60,96),i.fillStyle="#e8c667",i.font=`30px ${o}`,i.fillText("滅鬼無雙",270,94);const l=70,h=150,c=210,u=280;i.save(),i.fillStyle="rgba(0,0,0,0.35)",i.fillRect(l,h,c,u),i.strokeStyle="rgba(232,198,103,0.5)",i.lineWidth=2,i.strokeRect(l,h,c,u);const d=t?.sgrade.texture.image;if(d&&n){const y=n.charIndex*4*48;i.imageSmoothingEnabled=!1;const E=Math.min(c/48,u/64)*.82,x=48*E,b=64*E;i.drawImage(d,y,0,48,64,l+(c-x)/2,h+(u-b)/2-6,x,b)}i.restore(),i.textAlign="center",i.fillStyle="#f0e4c0",i.font=`28px ${o}`,i.fillText(n?Me("hero",a.heroId,n.name):wt()==="en"?"General":"장수",l+c/2,h+u+40),i.fillStyle="#e8c667",i.font=`20px ${o}`,i.fillText(n?n.hanja:"",l+c/2,h+u+68);const f=340;i.textAlign="left",i.fillStyle="#8a8f9c",i.font=`26px ${o}`,i.fillText(wt()==="en"?"KILLS":"처치",f,190);const m=a.kills.toLocaleString();i.fillStyle="#e85c4a",i.font=`bold 130px ${o}`,i.fillText(m,f,300);const v=i.measureText(m).width;i.fillStyle="#e8c667",i.font=`56px ${o}`,i.fillText("斬",f+v+24,300);const g=366,p=[[wt()==="en"?"Survived":"생존",Qw(a.time)],[wt()==="en"?"Max Combo":"최대 콤보",`${a.maxCombo.toLocaleString()}`],[wt()==="en"?"Level":"레벨",`Lv ${a.level}`],[wt()==="en"?"Gold":"획득 골드",`${a.goldEarned.toLocaleString()}`]];let w=f;i.textBaseline="alphabetic";for(const[y,E]of p){i.textAlign="left",i.fillStyle="#8a8f9c",i.font=`20px ${o}`,i.fillText(y,w,g),i.fillStyle="#f0e4c0",i.font=`bold 34px ${o}`,i.fillText(E,w,g+40);const x=i.measureText(E).width;w+=Math.max(150,x+70)}if(a.title){const y=f,E=430,x=`${a.title.name} ${a.title.hanja}`;i.font=`24px ${o}`;const b=i.measureText(x).width+44;i.fillStyle="rgba(232,198,103,0.14)",$r(i,y,E,b,44,22),i.fill(),i.strokeStyle="rgba(232,198,103,0.6)",i.lineWidth=1.5,$r(i,y,E,b,44,22),i.stroke(),i.fillStyle="#e8c667",i.textAlign="left",i.fillText(x,y+22,E+30)}const T=502;i.font=`20px ${o}`,i.textAlign="left",i.fillStyle="#8a8f9c",i.fillText(wt()==="en"?"TACTICS":"전법",f,T-6);let M=f;const A=T+8;for(const y of a.weapons.slice(0,6)){const E=we[y.id];if(!E)continue;const x=E.hanja;i.font=`22px ${o}`;const b=i.measureText(x).width+28,R=E.evolution;if(i.fillStyle=R?"rgba(255,154,60,0.16)":"rgba(120,150,200,0.12)",$r(i,M,A,b,40,8),i.fill(),i.strokeStyle=R?"rgba(255,154,60,0.7)":"rgba(160,180,220,0.5)",i.lineWidth=1.5,$r(i,M,A,b,40,8),i.stroke(),i.fillStyle=R?"#ffb469":"#cdd7ee",i.fillText(x,M+14,A+28),M+=b+12,M>Ri-70)break}return eS(i,Ri-150,150,a.victory),i.textAlign="right",i.fillStyle="#8a8f9c",i.font=`22px ${o}`,i.fillText(Jw,Ri-60,Yi-48),e}function $r(a,t,e,i,n,s){a.beginPath(),a.moveTo(t+s,e),a.arcTo(t+i,e,t+i,e+n,s),a.arcTo(t+i,e+n,t,e+n,s),a.arcTo(t,e+n,t,e,s),a.arcTo(t,e,t+i,e,s),a.closePath()}function eS(a,t,e,i){a.save(),a.translate(t,e),a.rotate(-.12);const s=i?"#c0362b":"#3a3f4c";a.strokeStyle=s,a.lineWidth=5,a.beginPath(),a.rect(-78,-78,156,156),a.stroke(),a.fillStyle=i?"rgba(192,54,43,0.12)":"rgba(58,63,76,0.15)",a.fillRect(-78,-78,156,156),a.fillStyle=s,a.textAlign="center",a.textBaseline="middle",a.font='bold 40px "Nanum Myeongjo","Times New Roman",serif',i?(a.fillText("天下",0,-26),a.fillText("統一",0,26)):(a.font='bold 62px "Nanum Myeongjo","Times New Roman",serif',a.fillText("戰死",0,0)),a.restore()}function Hh(a){return new Promise((t,e)=>{a.toBlob(i=>i?t(i):e(new Error("blob 생성 실패")),"image/png")})}function iS(a){const t=xn[a.heroId];if(wt()==="en"){const n=t?Me("hero",a.heroId,t.name):"a slayer",s=a.victory?"conquered Mugen Castle":`slew ${a.kills.toLocaleString()} demons`;return`As ${n} in Melgwimusou, I ${s}! ⚔️ ${jd}`}const e=t?t.name:"대원",i=a.victory?"무한성을 함락했다":`${a.kills.toLocaleString()}마리의 혈귀를 베었다`;return`멸귀무쌍에서 ${e}으로 ${i}! ⚔️ ${jd}`}async function nS(a,t){let e;try{e=await Hh(a)}catch{return"failed"}const i=new File([e],"melgwimusou.png",{type:"image/png"}),n=navigator;if(n.share&&n.canShare&&n.canShare({files:[i]}))try{return await n.share({files:[i],text:t,title:"멸귀무쌍 滅鬼無雙"}),"shared"}catch{}try{const s=window.ClipboardItem;if(s&&navigator.clipboard&&"write"in navigator.clipboard)return await navigator.clipboard.write([new s({"image/png":e})]),"copied"}catch{}try{const s=URL.createObjectURL(e),r=document.createElement("a");return r.href=s,r.download="ilgidangcheon.png",document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(s),4e3),"downloaded"}catch{return"failed"}}function sS(a,t){const e=tS(a,t),i=document.createElement("div");i.style.cssText=["position:fixed","inset:0","z-index:60","display:flex","flex-direction:column","align-items:center","justify-content:center","gap:18px","background:rgba(4,5,9,0.88)",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";");const n=document.createElement("img");n.src=e.toDataURL("image/png"),n.style.cssText="width:min(90vw,720px);border-radius:8px;box-shadow:0 8px 40px rgba(0,0,0,0.6);",i.appendChild(n);const s=document.createElement("div");s.style.cssText="color:#e8c667;font-size:15px;height:18px;letter-spacing:1px;",i.appendChild(s);const r=u=>{s.textContent=u,s.animate([{opacity:1},{opacity:1,offset:.7},{opacity:0}],{duration:2200})},o=document.createElement("div");o.style.cssText="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;";const l=(u,d,f=!1)=>{const m=document.createElement("button");return m.textContent=u,m.style.cssText=["padding:11px 22px","border-radius:8px","cursor:pointer","font-size:15px","letter-spacing:1px","font-family:inherit",f?"background:linear-gradient(180deg,#e8c667,#a8791f);color:#161006;border:none;":"background:transparent;color:#e8c667;border:1px solid #6b5a2e;"].join(";"),m.addEventListener("click",d),o.appendChild(m),m},h=wt()==="en",c=iS(a);l(h?"Share":"전과 공유",async()=>{const u=await nS(e,c);r(h?u==="shared"?"Shared":u==="copied"?"Image copied to clipboard":u==="downloaded"?"Image saved":"Share failed":u==="shared"?"공유했습니다":u==="copied"?"이미지를 클립보드에 복사했습니다":u==="downloaded"?"이미지를 저장했습니다":"공유에 실패했습니다")},!0),l(h?"Copy Image":"이미지 복사",async()=>{try{const u=window.ClipboardItem,d=await Hh(e);if(!u)throw new Error("unsupported");await navigator.clipboard.write([new u({"image/png":d})]),r(h?"Image copied to clipboard":"이미지를 클립보드에 복사했습니다")}catch{r(h?"This browser does not support image copy":"이 브라우저는 이미지 복사를 지원하지 않습니다")}}),l(h?"Save Image":"이미지 저장",async()=>{const u=await Hh(e),d=URL.createObjectURL(u),f=document.createElement("a");f.href=d,f.download="ilgidangcheon.png",f.click(),setTimeout(()=>URL.revokeObjectURL(d),4e3),r(h?"Image saved":"이미지를 저장했습니다")}),l(h?"Copy Text":"문구 복사",async()=>{try{await navigator.clipboard.writeText(c),r(h?"Share text copied":"공유 문구를 복사했습니다")}catch{r(h?"Clipboard access blocked":"클립보드 접근이 차단되었습니다")}}),l(h?"Close":"닫기",()=>i.remove()),i.appendChild(o),document.body.appendChild(i)}const aS=["zhaoyun","guanyu","sunshangxiang","zhangfei","zhugeliang","huangzhong","lvbu"],rS=["yuanshao","dongzhuo","lvbu"];function Zd(a){const t=Math.floor(a/60),e=Math.floor(a%60);return`${t.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}function J(a,t,e){const i=document.createElement(a);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i}function oS(a,t){const e="/oni-survivor/assets/sprites/sgrade.png",o=a*4*48,l=J("div","hero-portrait");return l.style.width=`${48*t}px`,l.style.height=`${64*t}px`,l.style.backgroundImage=`url(${e})`,l.style.backgroundSize=`${4032*t}px ${256*t}px`,l.style.backgroundPosition=`-${o*t}px 0px`,l}class lS{cb;atlas;overlay;fade;muted=!1;current="none";rerender=null;constructor(t,e){this.cb=t,this.atlas=e,this.fade=J("div"),this.fade.id="fade",document.body.appendChild(this.fade),this.overlay=J("div","overlay"),document.body.appendChild(this.overlay),yy(()=>{this.rerender&&this.rerender()})}setMuted(t){this.muted=t}show(t,e=!1){const i=()=>{this.overlay.textContent="",t(),this.overlay.classList.add("show")};if(e){i();return}this.fade.style.pointerEvents="auto";const n=this.fade.animate([{opacity:0},{opacity:1}],{duration:150,easing:"ease-in",fill:"forwards"});n.onfinish=()=>{i();const s=this.fade.animate([{opacity:1},{opacity:0}],{duration:150,easing:"ease-out",fill:"forwards"});s.onfinish=()=>{this.fade.style.pointerEvents="none"}}}hide(){this.overlay.classList.remove("show"),this.current="none"}button(t,e,i){const n=J("button",i?.primary?"btn btn-primary":"btn");return n.textContent=t,i?.disabled&&(n.disabled=!0),n.addEventListener("click",()=>{n.disabled||e()}),n}muteButton(){const t=J("button","btn btn-icon");return t.textContent=this.muted?"🔇":"🔊",t.setAttribute("aria-label","음소거 토글 / mute"),t.addEventListener("click",()=>{this.muted=this.cb.onToggleMute(),t.textContent=this.muted?"🔇":"🔊"}),t}langButton(){const t=J("button","btn btn-icon");return t.textContent=wt()==="ko"?"EN":"KO",t.setAttribute("aria-label","language / 언어"),t.addEventListener("click",()=>{by()}),t}showTitle(t=!1){this.current="title";const e=cw(),i=()=>{const n=J("div","screen"),s=J("div","title-mark");s.appendChild(J("div","title-hanja","一騎當千")),s.appendChild(J("div","title-kor",it("titleKor"))),s.appendChild(J("div","title-tag",it("titleTag"))),n.appendChild(s);const r=J("div","btn-row");r.appendChild(this.button(it("start"),this.cb.onStart,{primary:!0})),n.appendChild(r);const o=J("div","btn-row");o.appendChild(this.button(it("shop"),()=>this.cb.onOpenShop("upgrade"))),o.appendChild(this.button(it("codex"),()=>this.cb.onOpenShop("codex"))),o.appendChild(this.muteButton()),o.appendChild(this.langButton()),n.appendChild(o),n.appendChild(J("div","controls-hint",it("controlsHint"))),e.line&&n.appendChild(J("div","title-quote",`“${e.line}” <span class="who">— ${e.name}</span>`)),this.overlay.appendChild(n)};this.rerender=()=>{this.overlay.textContent="",i()},this.show(i,t)}showSelect(t){this.current="select";const e=()=>{const i=J("div","screen");i.appendChild(J("div","section-title",`${it("selectTitle")} <small>將帥選擇</small>`));const n=J("div","hero-grid");for(const s of aS){const r=xn[s];if(!r)continue;const o=!Tc(s,t),l=J("div",o?"hero-card locked":"hero-card");o&&s==="lvbu"&&l.classList.add("shop-lock");const h=oS(r.charIndex,2.4);if(l.appendChild(h),o){const d=J("div","hero-lock");d.appendChild(J("div","","🔒")),d.appendChild(J("div","price",Yw(s,t))),l.appendChild(d)}const c=we[r.startWeapon]?.name??r.startWeapon;l.appendChild(J("div","hero-name",`${Me("hero",s,r.name)}<span class="hanja">${r.hanja}</span>`)),l.appendChild(J("div","hero-line",`${it("weaponLabel")} <span class="k">${Me("weapon",r.startWeapon,c)}</span>`)),l.appendChild(J("div","hero-line",wt()==="en"?wy[s]??r.bonusText:r.bonusText)),l.appendChild(J("div","hero-musou",this.musouText(s)));const u=kd(s);u&&!o&&l.appendChild(J("div","hero-quote",`“${u}”`)),o?s==="lvbu"&&l.addEventListener("click",()=>this.cb.onOpenShop("upgrade")):l.addEventListener("click",()=>this.cb.onSelectHero(s)),n.appendChild(l)}i.appendChild(n),i.appendChild(this.button(it("back"),this.cb.onBackToTitle)),this.overlay.appendChild(i)};this.rerender=()=>{this.overlay.textContent="",e()},this.show(e)}musouText(t){return wt()==="en"?Sy[t]??"Musou":{zhaoyun:"무쌍 창격돌진 — 8방향 무적 돌진",guanyu:"무쌍 청룡회천참 — 거대 회전 참격",zhangfei:"무쌍 장판교 포효 — 전화면 스턴",zhugeliang:"무쌍 천뢰소환 — 낙뢰 폭풍",huangzhong:"무쌍 백보천양 — 전방위 화살",sunshangxiang:"무쌍 홍련난무 — 붉은 화살 폭풍",lvbu:"무쌍 적토무쌍 — 조작 가능 무적 돌진"}[t]??"무쌍난무"}showResult(t,e,i,n){this.current="result";const s=()=>{const r=J("div","screen"),o=t.victory;r.appendChild(J("div",`result-title ${o?"win":"lose"}`,o?"天下統一":"戰死")),r.appendChild(J("div","result-sub",it(o?"resultWin":"resultLose")));const l=kd(t.heroId);l&&r.appendChild(J("div","result-quote",`“${l}”`));const h=ip(t,e);if(h){const g=wt()==="en"?"Epithet":"訓章";r.appendChild(J("div","result-epithet",`<span class="ep-label">${g}</span><span class="ep-name">“${Zw(h)}”</span>`))}if(n.newAchievements.length>0){const g=n.newAchievements.map(p=>Ac[p]).filter(p=>!!p).map(p=>`${wt()==="en"?no[p.id]?.name??p.name:p.name} ${p.hanja}`).join(" · ");r.appendChild(J("div","ach-toast",`${it("achGet")} <b>${g}</b>`))}if(n.newHeroes.length>0){const g=n.newHeroes.map(p=>xn[p]?`${Me("hero",p,xn[p].name)} ${xn[p].hanja}`:null).filter(p=>!!p).join(" · ");r.appendChild(J("div","ach-toast hero-unlock-toast",`${it("heroUnlockGet")} <b>${g}</b>`))}if(n.newWeapons&&n.newWeapons.length>0){const g=n.newWeapons.map(p=>we[p]?`${Me("weapon",p,we[p].name)} ${we[p].hanja}`:null).filter(p=>!!p).join(" · ");if(g){const p=wt()==="en"?"New tactic unlocked":"신규 병법 해금";r.appendChild(J("div","ach-toast weapon-unlock-toast",`${p} — <b>${g}</b>`))}}const c=J("div","result-stats");c.appendChild(this.stat(it("rsSurvive"),Zd(t.time),i.time)),c.appendChild(this.stat(it("rsKills"),String(t.kills),i.kills)),c.appendChild(this.stat(it("rsMaxCombo"),String(t.maxCombo),i.combo)),c.appendChild(this.stat(it("rsLevel"),`Lv ${t.level}`,i.level)),c.appendChild(this.stat(it("rsHero"),Me("hero",t.heroId,xn[t.heroId]?.name??t.heroId),!1)),c.appendChild(this.stat(it("rsBossKill"),String(t.bosses.length),!1)),r.appendChild(c);const u=J("div","gold-earned",`${it("goldEarned")} ⟡ ${t.goldEarned}`+(t.comboBonus>0?`<span class="bonus">${it("goldBonus",{n:t.comboBonus})}</span>`:""));r.appendChild(u);const d=wt()==="en";r.appendChild(J("div","controls-hint",`${it("baseBalance",{n:e.gold})} · ${d?"spend it below to upgrade your camp":"아래 강화로 본진을 영구 강화"}`));const f=J("div","build-summary");for(const g of t.weapons)f.appendChild(J("div","build-chip w",`${Me("weapon",g.id,we[g.id]?.name??g.id)} <b>Lv${g.level}</b>`));for(const g of t.passives)f.appendChild(J("div","build-chip p",`${Me("passive",g.id,Hi[g.id]?.name??g.id)} <b>Lv${g.level}</b>`));r.appendChild(f);const m=J("div","btn-row");m.appendChild(this.button(it("retry"),this.cb.onRetry,{primary:!0}));const v=this.button(`${d?"Upgrade":"본진 강화"} ⟡ ${e.gold} 強化`,()=>this.cb.onOpenShop("upgrade"));v.style.borderColor="#e8c667",v.style.color="#f4dc8a",v.style.boxShadow="0 0 14px rgba(232, 198, 103, 0.28)",m.appendChild(v),m.appendChild(this.button(it("share"),()=>sS({victory:t.victory,heroId:t.heroId,time:t.time,kills:t.kills,maxCombo:t.maxCombo,level:t.level,goldEarned:t.goldEarned,weapons:t.weapons,title:n.title},this.atlas))),m.appendChild(this.button(it("toTitle"),this.cb.onBackToTitle)),r.appendChild(m),this.overlay.appendChild(r)};this.rerender=()=>{this.overlay.textContent="",s()},this.show(s)}stat(t,e,i){const n=J("div","rs");return n.appendChild(J("div","v",e+(i?`<span class="nr">${it("newRecord")}</span>`:""))),n.appendChild(J("div","l",t)),n}shopSave=null;shopTab="upgrade";showShop(t,e){this.current="shop",this.rerender=()=>this.rebuildShop(t,this.shopTab),this.show(()=>this.buildShop(t,e))}rerenderShop(){this.current==="shop"&&this.shopSave&&this.rebuildShop(this.shopSave,this.shopTab)}rebuildShop(t,e){this.overlay.textContent="",this.buildShop(t,e)}buildShop(t,e){this.shopSave=t,this.shopTab=e;const i=J("div","screen");i.appendChild(J("div","section-title",`${it("shopTitle")} <small>本陣</small>`)),i.appendChild(J("div","gold-tag",it("goldHeld",{n:t.gold})));const n=J("div","tabs"),s=J("div",e==="upgrade"?"tab active":"tab",it("tabUpgrade")),r=J("div",e==="codex"?"tab active":"tab",it("tabCodex"));s.addEventListener("click",()=>this.rebuildShop(t,"upgrade")),r.addEventListener("click",()=>this.rebuildShop(t,"codex")),n.appendChild(s),n.appendChild(r),i.appendChild(n),e==="upgrade"?i.appendChild(this.upgradeList(t)):i.appendChild(this.codexPanel(t)),i.appendChild(this.button(it("back"),this.cb.onBackToTitle)),this.overlay.appendChild(i)}upgradeList(t){const e=J("div","shop-list");for(const i of Qf){const n=t.upgrades[i.id]??0,s=ep(i,n),r=s<0,o=J("div","shop-row"),l=J("div","shop-info");l.appendChild(J("div","name",`${Me("upgrade",i.id,i.name)}<span class="hanja">${i.hanja}</span>`)),l.appendChild(J("div","desc",r?i.desc(n):i.desc(n+1)));const h=J("div","pips");for(let u=0;u<i.maxLevel;u++)h.appendChild(J("div",u<n?"pip on":"pip"));l.appendChild(h),o.appendChild(l);const c=J("div","shop-buy");if(r)c.appendChild(J("div","gold-tag",it("maxed")));else{const u=t.gold>=s;c.appendChild(J("div","controls-hint",`⟡ ${s}`)),c.appendChild(this.button(it("upgradeBuy"),()=>this.cb.onBuyUpgrade(i.id),{disabled:!u}))}o.appendChild(c),e.appendChild(o)}if(!t.lvbuUnlocked){const i=J("div","shop-row"),n=J("div","shop-info");n.appendChild(J("div","name",`${it("lvbuUnlockName")}<span class="hanja">呂布</span>`)),n.appendChild(J("div","desc",it("lvbuUnlockDesc"))),i.appendChild(n);const s=J("div","shop-buy");s.appendChild(J("div","controls-hint",`⟡ ${bo}`)),s.appendChild(this.button(it("unlockBuy"),this.cb.onUnlockLvbu,{disabled:t.gold<bo})),i.appendChild(s),e.appendChild(i)}return e}codexPanel(t){const e=J("div","screen");e.style.gap="14px",e.style.padding="0";const i=J("div","records");i.appendChild(this.rec(Zd(t.best.time),it("recSurvive"))),i.appendChild(this.rec(String(t.best.kills),it("recKills"))),i.appendChild(this.rec(`Lv ${t.best.level}`,it("recLevel"))),i.appendChild(this.rec(String(t.best.combo),it("recCombo"))),e.appendChild(i),e.appendChild(J("div","controls-hint",it("bossCodex")));const n=J("div","codex-grid");for(const f of rS){const m=jf[f];if(!m)continue;const v=t.bosses.includes(f),g=J("div",v?"codex-cell slain":"codex-cell");g.appendChild(J("div","cx-name",v?`${Me("hero",f,m.name)} ${m.hanja}`:"???")),g.appendChild(J("div","cx-state",v?`<span style="color:#e8c667">${it("slain")}</span>`:`<span style="color:#7f8496">${it("notSlain")}</span>`)),n.appendChild(g)}e.appendChild(n);const s=wt()==="en";e.appendChild(J("div","controls-hint",s?"Tactics Codex 兵法":"병법 도감 兵法"));const r=J("div","wpn-grid");for(const f in we){const m=we[f];if(m.evolution)continue;const v=Zf.includes(f)&&!yc(f,t),g=J("div",v?"wpn-cell locked":"wpn-cell");v?(g.appendChild(J("div","wpn-name","？？？")),g.appendChild(J("div","wpn-cond",DM(f,t)))):(g.appendChild(J("div","wpn-name",`${Me("weapon",f,m.name)} <span class="wh">${m.hanja}</span>`)),g.appendChild(J("div","wpn-desc",s?Ha[f]??m.desc:m.desc))),r.appendChild(g)}e.appendChild(r),e.appendChild(J("div","controls-hint",s?"Evolutions 秘傳":"진화 비전 秘傳"));const o="MAX",l=J("div","wpn-grid");for(const f of Oh){const m=we[f.to],v=we[f.from],g=Hi[f.passive];if(!m||!v||!g)continue;const p=J("div","wpn-cell evo");p.appendChild(J("div","wpn-name",`${Me("weapon",f.to,m.name)} <span class="wh">${m.hanja}</span>`)),p.appendChild(J("div","wpn-desc",s?Ha[f.to]??m.desc:m.desc)),p.appendChild(J("div","wpn-recipe",`${Me("weapon",f.from,v.name)} <b>${o}</b> + ${Me("passive",f.passive,g.name)}`)),l.appendChild(p)}e.appendChild(l);const h=Ry(t).length;e.appendChild(J("div","controls-hint",`${s?"Masterworks":"명기 도감"} 名器 (${h}/${Ga.length})`));const c=J("div","mw-grid");for(const f of Ga){const m=Py(f.id,t),v=J("div",m?"mw-cell owned":"mw-cell locked");v.appendChild(J("div","mw-name",`${Wf(f)} <span class="mh">${f.hanja}</span>`)),m?(v.appendChild(J("div","mw-desc",Xf(f))),v.appendChild(J("div","mw-lore",`“${Cy(f)}”`))):v.appendChild(J("div","mw-state",s?"Undiscovered":"未得")),c.appendChild(v)}e.appendChild(c);const u=t.achievements??[];e.appendChild(J("div","controls-hint",`${it("achSection")} (${u.length}/${yo.length})`));const d=J("div","ach-grid");for(const f of yo){const m=u.includes(f.id),v=s?no[f.id]?.name??f.name:f.name,g=s?no[f.id]?.desc??f.desc:f.desc,p=J("div",m?"ach-cell done":"ach-cell");p.appendChild(J("div","ach-name",m?`${v} <span class="ah">${f.hanja}</span>`:v)),p.appendChild(J("div","ach-desc",m?g:"???")),d.appendChild(p)}return e.appendChild(d),e}rec(t,e){const i=J("div","rec");return i.appendChild(J("div","rv",t)),i.appendChild(J("div","rl",e)),i}showPause(){this.current="pause";const t=()=>{this.overlay.textContent="";const e=J("div","screen");e.appendChild(J("div","section-title",`${it("pauseTitle")} <small>一時停止</small>`));const i=J("div","btn-row");i.appendChild(this.button(it("resume"),this.cb.onResume,{primary:!0})),i.appendChild(this.muteButton()),i.appendChild(this.langButton()),i.appendChild(this.button(it("abandon"),this.cb.onAbandon)),e.appendChild(i),e.appendChild(J("div","controls-hint",it("resumeHint"))),this.overlay.appendChild(e),this.overlay.classList.add("show")};this.rerender=t,t()}}const mn=60,hS=.1;class cS{input;moveZone;base;knob;musouBtn;musouRing;movePointer=-1;startX=0;startY=0;visible=!1;ready=!1;constructor(t){this.input=t,this.moveZone=document.createElement("div"),this.moveZone.style.cssText=["position:fixed","inset:0","z-index:22","touch-action:none","display:none"].join(";"),this.base=document.createElement("div"),this.base.style.cssText=["position:fixed","z-index:22",`width:${mn*2}px`,`height:${mn*2}px`,"border-radius:50%","border:2px solid rgba(232,198,103,0.5)","background:radial-gradient(circle,rgba(20,22,30,0.5),rgba(10,11,17,0.35))","box-shadow:0 0 18px rgba(232,198,103,0.2)","transform:translate(-50%,-50%)","display:none","pointer-events:none"].join(";"),this.knob=document.createElement("div"),this.knob.style.cssText=["position:absolute","width:52px","height:52px","border-radius:50%","background:radial-gradient(circle at 40% 35%,#f0e4c0,#a8791f)","box-shadow:0 0 14px rgba(232,198,103,0.6)","transform:translate(-50%,-50%)","pointer-events:none"].join(";"),this.base.appendChild(this.knob),this.moveZone.appendChild(this.base),document.body.appendChild(this.moveZone),this.musouBtn=document.createElement("div"),this.musouBtn.style.cssText=["position:fixed","right:calc(env(safe-area-inset-right,0px) + 22px)","bottom:calc(env(safe-area-inset-bottom,0px) + 64px)","width:92px","height:92px","border-radius:50%","z-index:23","touch-action:none","display:none","align-items:center","justify-content:center",'font-family:"Nanum Myeongjo","Times New Roman",serif'].join(";"),this.musouRing=document.createElement("div"),this.musouRing.style.cssText=["position:absolute","inset:0","border-radius:50%","background:conic-gradient(#e8c667 0deg, rgba(40,32,14,0.7) 0deg)","-webkit-mask:radial-gradient(circle, transparent 34px, #000 35px)","mask:radial-gradient(circle, transparent 34px, #000 35px)"].join(";"),this.musouBtn.appendChild(this.musouRing);const e=document.createElement("div");e.style.cssText=["position:absolute","inset:10px","border-radius:50%","background:radial-gradient(circle at 40% 35%,#2a2410,#14120a)","border:1px solid rgba(232,198,103,0.5)","display:flex","align-items:center","justify-content:center","color:#e8c667","font-size:26px","letter-spacing:1px"].join(";"),e.textContent="無",this.musouBtn.appendChild(e),document.body.appendChild(this.musouBtn),this.moveZone.addEventListener("pointerdown",this.onMoveDown,{passive:!1}),this.moveZone.addEventListener("pointermove",this.onMoveMove,{passive:!1}),this.moveZone.addEventListener("pointerup",this.onMoveUp),this.moveZone.addEventListener("pointercancel",this.onMoveUp),this.moveZone.addEventListener("lostpointercapture",this.onMoveUp),window.addEventListener("pointerup",this.onWindowRelease),window.addEventListener("pointercancel",this.onWindowRelease),this.musouBtn.addEventListener("pointerdown",this.onMusouDown)}onWindowRelease=t=>{this.movePointer!==-1&&t.pointerId===this.movePointer&&this.endMove()};setVisible(t){this.visible!==t&&(this.visible=t,this.moveZone.style.display=t?"block":"none",this.musouBtn.style.display=t?"flex":"none",t||this.endMove())}setMusou(t,e){if(!this.visible)return;const i=Math.min(360,t/100*360);this.musouRing.style.background=`conic-gradient(#e8c667 ${i}deg, rgba(40,32,14,0.7) ${i}deg)`,e&&!this.ready?this.musouBtn.animate([{transform:"scale(1)"},{transform:"scale(1.12)"},{transform:"scale(1)"}],{duration:700,iterations:1/0}):!e&&this.ready&&this.musouBtn.getAnimations().forEach(n=>n.cancel()),this.ready=e}onMoveDown=t=>{if(t.preventDefault(),this.movePointer!==-1&&this.movePointer!==t.pointerId)try{this.moveZone.releasePointerCapture(this.movePointer)}catch{}this.movePointer=t.pointerId,this.startX=t.clientX,this.startY=t.clientY,this.base.style.left=`${t.clientX}px`,this.base.style.top=`${t.clientY}px`,this.base.style.display="block",this.knob.style.left="50%",this.knob.style.top="50%",this.input.joy.active=!0,this.input.joy.x=0,this.input.joy.z=0;try{this.moveZone.setPointerCapture(t.pointerId)}catch{}};onMoveMove=t=>{if(t.pointerId!==this.movePointer)return;t.preventDefault();let e=t.clientX-this.startX,i=t.clientY-this.startY;const n=Math.hypot(e,i);n>mn&&(e=e/n*mn,i=i/n*mn),this.knob.style.left=`${50+e/mn*50}%`,this.knob.style.top=`${50+i/mn*50}%`;const s=e/mn,r=i/mn;Math.hypot(s,r)<hS?(this.input.joy.x=0,this.input.joy.z=0):(this.input.joy.x=s,this.input.joy.z=r)};onMoveUp=t=>{t.pointerId===this.movePointer&&this.endMove()};endMove(){if(this.movePointer!==-1)try{this.moveZone.releasePointerCapture(this.movePointer)}catch{}this.movePointer=-1,this.base.style.display="none",this.input.joy.active=!1,this.input.joy.x=0,this.input.joy.z=0}onMusouDown=t=>{t.preventDefault(),this.input.press("Space"),this.musouBtn.animate([{filter:"brightness(1.8)"},{filter:"brightness(1)"}],{duration:200,easing:"ease-out"})}}function uS(){return new URLSearchParams(location.search).has("touch")?!0:"ontouchstart"in window||navigator.maxTouchPoints>0}const np="threesur-save-v1",Gh=1;function ao(){return{version:Gh,gold:0,upgrades:{},lvbuUnlocked:!1,muted:!1,best:{time:0,kills:0,level:1,combo:0},bosses:[],achievements:[],unlockedWeapons:[],masterworks:[],totalKills:0,totalWins:0,epithets:[]}}function dS(){let a=null;try{a=localStorage.getItem(np)}catch{return ao()}if(!a)return ao();let t;try{t=JSON.parse(a)}catch{return ao()}return fS(t)}function fS(a){const t=ao();if(typeof a!="object"||a===null)return t;const e=a;return typeof e.version=="number"&&e.version>Gh?t:{version:Gh,gold:Zn(e.gold,0),upgrades:pS(e.upgrades),lvbuUnlocked:e.lvbuUnlocked===!0,muted:e.muted===!0,best:{time:Zn(e.best?.time,0),kills:Zn(e.best?.kills,0),level:Zn(e.best?.level,1),combo:Zn(e.best?.combo,0)},bosses:Array.isArray(e.bosses)?e.bosses.filter(i=>typeof i=="string"):[],achievements:Array.isArray(e.achievements)?e.achievements.filter(i=>typeof i=="string"):[],unlockedWeapons:Array.isArray(e.unlockedWeapons)?e.unlockedWeapons.filter(i=>typeof i=="string"):[],masterworks:Array.isArray(e.masterworks)?e.masterworks.filter(i=>typeof i=="string"):[],totalKills:Zn(e.totalKills,0),totalWins:Zn(e.totalWins,0),epithets:Array.isArray(e.epithets)?e.epithets.filter(i=>typeof i=="string"):[]}}function Zn(a,t){return typeof a=="number"&&isFinite(a)?a:t}function pS(a){const t={};if(typeof a=="object"&&a!==null)for(const e in a){const i=a[e];typeof i=="number"&&isFinite(i)&&i>0&&(t[e]=Math.floor(i))}return t}function Pa(a){try{localStorage.setItem(np,JSON.stringify(a))}catch{}}function mS(a,t){const e={time:t.time>a.time,kills:t.kills>a.kills,level:t.level>a.level,combo:t.combo>a.combo};return e.time&&(a.time=t.time),e.kills&&(a.kills=t.kills),e.level&&(a.level=t.level),e.combo&&(a.combo=t.combo),e}const gS=document.getElementById("app"),Va=document.createElement("div");Va.id="loading";Va.innerHTML='<div style="font-size:30px;">일기당천 一騎當千</div><div style="font-size:15px;color:#b8bcc8;">전장 준비 중…</div>';document.body.appendChild(Va);const Kn=N_(gS),zl=new Q_,jr=new tb,Ol=uS();sb().then(a=>{const t=dS();Pt.setMuted(t.muted);let e="title",i="zhaoyun",n=null;const s=new _o(a,zl,jr,{onEnd:b=>m(b),onPause:()=>v()},Ol),r=new B_(Kn,s.scene,zl.camera);s.setPostFx(r);const o=new cS(jr),l=new lS({onStart:()=>c(),onSelectHero:b=>f(b),onOpenShop:b=>u(b),onBackToTitle:()=>h(),onRetry:()=>f(n?.heroId??i),onBuyUpgrade:b=>p(b),onUnlockLvbu:()=>w(),onToggleMute:()=>(t.muted=Pt.toggleMuted(),Pa(t),t.muted),onResume:()=>g(),onAbandon:()=>s.abandon()},a);l.setMuted(t.muted);function h(){e="title",s.enterAttract(),o.setVisible(!1),Pt.playBgm("title"),l.showTitle()}function c(){e="select",Pt.playBgm("title"),l.showSelect(t)}function u(b){e="shop",Pt.playBgm("title"),l.showShop(t,b)}function d(b){return Object.keys(we).filter(R=>!we[R].evolution&&yc(R,b))}function f(b,R=!1){!R&&!Tc(b,t)||(i=b,e="run",l.hide(),s.beginRun(b,Ww(t.upgrades),d(t)),o.setVisible(Ol))}function m(b){e="result",n=b,o.setVisible(!1);const R=new Set($d(t));t.gold+=b.goldEarned;const P=mS(t.best,{time:b.time,kills:b.kills,level:b.level,combo:b.maxCombo});for(const k of b.bosses)t.bosses.includes(k)||t.bosses.push(k);t.totalKills+=b.kills,b.victory&&(t.totalWins+=1);const D=qw({victory:b.victory,kills:b.kills,maxCombo:b.maxCombo,time:b.time,level:b.level,bosses:b.bosses,weapons:b.weapons,totalKills:t.totalKills,totalWins:t.totalWins,endless:b.endless}),W=D.filter(k=>!t.achievements.includes(k));for(const k of W)t.achievements.push(k);const $=$d(t).filter(k=>!R.has(k)),z=FM(t).filter(k=>!t.unlockedWeapons.includes(k));for(const k of z)t.unlockedWeapons.push(k);for(const k of b.masterworks)t.masterworks.includes(k)||t.masterworks.push(k);const V=ip(b,t);V&&!t.epithets.includes(V.id)&&t.epithets.push(V.id),Pa(t),Pt.playJingle(b.victory?"victory":"defeat"),(W.length>0||z.length>0)&&Pt.sfx("achievement"),l.showResult(b,t,P,{title:$w(D),newAchievements:W,newHeroes:$,newWeapons:z})}function v(){e="pause",o.setVisible(!1),l.showPause()}function g(){e="run",l.hide(),s.resume(),o.setVisible(Ol)}function p(b){const R=tp[b];if(!R)return;const P=t.upgrades[b]??0,D=ep(R,P);D<0||t.gold<D||(t.gold-=D,t.upgrades[b]=P+1,Pa(t),Pt.sfx("uiClick"),l.rerenderShop())}function w(){t.lvbuUnlocked||t.gold<bo||(t.gold-=bo,t.lvbuUnlocked=!0,Pa(t),Pt.sfx("revive"),l.rerenderShop())}const T=()=>{Pt.init(),Pt.playBgm(e==="run"?"battle":"title")};window.addEventListener("pointerdown",T,{once:!0}),window.addEventListener("keydown",T,{once:!0}),document.addEventListener("gesturestart",b=>b.preventDefault(),{passive:!1}),document.addEventListener("gesturechange",b=>b.preventDefault(),{passive:!1});let M=0;document.addEventListener("touchend",b=>{const R=performance.now();R-M<320&&b.cancelable&&b.preventDefault(),M=R},{passive:!1}),window.addEventListener("keydown",b=>{b.code==="Escape"&&e==="pause"&&g()});const A=()=>{const b=Math.round(window.visualViewport?.width??window.innerWidth),R=Math.round(window.visualViewport?.height??window.innerHeight);zl.onResize(b,R),r.setSize(b,R)};window.addEventListener("resize",A),window.visualViewport?.addEventListener("resize",A),window.addEventListener("orientationchange",()=>{A(),setTimeout(A,250)}),requestAnimationFrame(A),setTimeout(A,300),s.enterAttract(),Pt.playBgm("title"),l.showTitle(!0),Va.remove(),Kn.info.autoReset=!1;let y=60;new ib(b=>{jr.poll(),s.update(b),e==="run"&&o.setMusou(s.musouGauge,s.musouReadyFlag),r.setMusou(s.musouStrength,s.renderTime),e==="run"&&s.consumeReplayTrigger()&&r.playReplay(),Kn.info.reset(),r.render(),jr.endFrame(),Pt.endFrame(),b>0&&(y+=(1/b-y)*.05)}).start(),(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.__GAME_TEST__={goToTitle:()=>h(),selectHero:b=>f(b,!0),openShop:(b="upgrade")=>u(b),grantGold:b=>{t.gold+=b,Pa(t),l.rerenderShop()},buyUpgrade:b=>p(b),unlockLvbu:()=>w(),killPlayer:()=>s.testKillPlayer(),damagePlayer:b=>s.testDamagePlayer(b),killBoss:()=>s.testKillBoss(),get scene(){return e},get save(){return{gold:t.gold,upgrades:{...t.upgrades},lvbuUnlocked:t.lvbuUnlocked,best:{...t.best},bosses:[...t.bosses],achievements:[...t.achievements],totalKills:t.totalKills,totalWins:t.totalWins}},setTime:b=>s.testSetTime(b),giveWeapon:b=>s.testGiveWeapon(b),givePassive:(b,R)=>s.testGivePassive(b,R),levelUp:()=>s.testForceLevel(),fillMusou:()=>s.testFillMusou(),activateMusou:()=>s.testActivateMusou(),addGold:b=>s.testAddGold(b),showProjectiles:()=>s.testSpawnProjectileShowcase(),showEnemyProjectiles:()=>s.testSpawnEnemyProjectileShowcase(),musouFx:()=>s.testMusouFx(),shrineBuff:(b,R)=>s.testShrineBuff(b,R),flashBurst:(b,R)=>s.testFlashBurst(b,R),spawnBoss:b=>s.testSpawnBoss(b),setBossFlags:(b,R,P)=>s.testSetBossFlags(b,R,P),treasure:b=>s.testTreasure(b),triggerEvent:b=>s.testTriggerEvent(b),spawnPattern:b=>s.testSpawnPattern(b),showWorldObjects:()=>s.testShowWorldObjects(),setPlayerPosition:(b,R)=>s.testSetPlayerPosition(b,R),setInvulnerable:b=>s.testSetInvulnerable(b),primeGate:()=>s.testPrimeGate(),breachGate:()=>s.testBreachGate(),triggerHulao:()=>s.testTriggerHulao(),flipBanners:b=>s.testFlipBanners(b),testVolley:()=>s.testVolley(),siegeBreach:(b="castle-s")=>s.testSiegeBreach(b),siegeForceLord:()=>s.testSiegeForceLord(),siegeForceCounter:()=>s.testSiegeForceCounter(),siegeAddFall:b=>s.testSiegeAddFall(b),siegeForceDefend:()=>s.testSiegeForceDefend(),setObjective:b=>s.testSetObjective(b),damageGate:(b,R)=>s.testDamageGate(b,R),resumeEndless:()=>s.resumeEndless(),forceRelic:()=>s.testForceRelic(),enterEndless:()=>s.testEnterEndless(),get stats(){return s.testStats}},window.__DEBUG__={info:()=>({fps:Math.round(y),calls:Kn.info.render.calls,tris:Kn.info.render.triangles,geometries:Kn.info.memory.geometries,textures:Kn.info.memory.textures})})}).catch(a=>{console.error(a),Va.innerHTML=`<div style="color:#e85c4a;font-size:22px;">로드 실패</div><div style="font-size:13px;color:#b8bcc8;max-width:80vw;">${String(a)}</div>`});
