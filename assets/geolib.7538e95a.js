var pe={},m={},d={};Object.defineProperty(d,"__esModule",{value:!0});d.areaConversion=d.timeConversion=d.distanceConversion=d.altitudeKeys=d.latitudeKeys=d.longitudeKeys=d.MAXLON=d.MINLON=d.MAXLAT=d.MINLAT=d.earthRadius=d.sexagesimalPattern=void 0;var wt=/^([0-9]{1,3})°\s*([0-9]{1,3}(?:\.(?:[0-9]{1,}))?)['′]\s*(([0-9]{1,3}(\.([0-9]{1,}))?)["″]\s*)?([NEOSW]?)$/;d.sexagesimalPattern=wt;var It=6378137;d.earthRadius=It;var qt=-90;d.MINLAT=qt;var xt=90;d.MAXLAT=xt;var Tt=-180;d.MINLON=Tt;var Et=180;d.MAXLON=Et;var Kt=["lng","lon","longitude",0];d.longitudeKeys=Kt;var Wt=["lat","latitude",1];d.latitudeKeys=Wt;var Bt=["alt","altitude","elevation","elev",2];d.altitudeKeys=Bt;var Ft={m:1,km:.001,cm:100,mm:1e3,mi:1/1609.344,sm:1/1852.216,ft:100/30.48,in:100/2.54,yd:1/.9144};d.distanceConversion=Ft;var Xt={m:60,h:3600,d:86400};d.timeConversion=Xt;var p={m2:1,km2:1e-6,ha:1e-4,a:.01,ft2:10.763911,yd2:1.19599,in2:1550.0031};d.areaConversion=p;p.sqm=p.m2;p.sqkm=p.km2;p.sqft=p.ft2;p.sqyd=p.yd2;p.sqin=p.in2;var b={};Object.defineProperty(b,"__esModule",{value:!0});b.default=void 0;var Vt=function(t,a){return a.reduce(function(r,u){if(typeof t=="undefined"||t===null)throw new Error("'".concat(t,"' is no valid coordinate."));return Object.prototype.hasOwnProperty.call(t,u)&&typeof u!="undefined"&&typeof r=="undefined"?(r=u,u):r},void 0)},Ut=Vt;b.default=Ut;var T={},C={};Object.defineProperty(C,"__esModule",{value:!0});C.default=void 0;var kt=function(t){var a=t.toString().trim();return isNaN(parseFloat(a))?!1:parseFloat(a)===Number(a)},Gt=kt;C.default=Gt;var w={};Object.defineProperty(w,"__esModule",{value:!0});w.default=void 0;var Yt=d,Zt=function(t){return Yt.sexagesimalPattern.test(t.toString().trim())},Ht=Zt;w.default=Ht;var I={};Object.defineProperty(I,"__esModule",{value:!0});I.default=void 0;var zt=d,Jt=function(t){var a=new RegExp(zt.sexagesimalPattern).exec(t.toString().trim());if(typeof a=="undefined"||a===null)throw new Error("Given value is not in sexagesimal format");var r=Number(a[2])/60||0,u=Number(a[4])/3600||0,n=parseFloat(a[1])+r+u;return["S","W"].includes(a[7])?-n:n},Qt=Jt;I.default=Qt;var Z={},E={};Object.defineProperty(E,"__esModule",{value:!0});E.default=void 0;var se=d,ve=jt(b);function jt(e){return e&&e.__esModule?e:{default:e}}function Je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),a.push.apply(a,r)}return a}function ea(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Je(Object(a),!0).forEach(function(r){ta(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Je(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function ta(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var aa=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{longitude:se.longitudeKeys,latitude:se.latitudeKeys,altitude:se.altitudeKeys},r=(0,ve.default)(t,a.longitude),u=(0,ve.default)(t,a.latitude),n=(0,ve.default)(t,a.altitude);return ea({latitude:u,longitude:r},n?{altitude:n}:{})},ra=aa;E.default=ra;var H={};Object.defineProperty(H,"__esModule",{value:!0});H.default=void 0;var ua=Le(C),na=Le(w),ia=Le(I),Qe=d;function Le(e){return e&&e.__esModule?e:{default:e}}var da=function e(t){return(0,ua.default)(t)?!(parseFloat(t)>Qe.MAXLAT||t<Qe.MINLAT):(0,na.default)(t)?e((0,ia.default)(t)):!1},la=da;H.default=la;var z={};Object.defineProperty(z,"__esModule",{value:!0});z.default=void 0;var fa=Pe(C),oa=Pe(w),sa=Pe(I),je=d;function Pe(e){return e&&e.__esModule?e:{default:e}}var va=function e(t){return(0,fa.default)(t)?!(parseFloat(t)>je.MAXLON||t<je.MINLON):(0,oa.default)(t)?e((0,sa.default)(t)):!1},ca=va;z.default=ca;Object.defineProperty(Z,"__esModule",{value:!0});Z.default=void 0;var _a=Oe(E),et=Oe(H),tt=Oe(z);function Oe(e){return e&&e.__esModule?e:{default:e}}var ga=function(t){var a=(0,_a.default)(t),r=a.latitude,u=a.longitude;if(Array.isArray(t)&&t.length>=2)return(0,tt.default)(t[0])&&(0,et.default)(t[1]);if(typeof r=="undefined"||typeof u=="undefined")return!1;var n=t[u],i=t[r];return!(typeof i=="undefined"||typeof n=="undefined"||(0,et.default)(i)===!1||(0,tt.default)(n)===!1)},ma=ga;Z.default=ma;Object.defineProperty(T,"__esModule",{value:!0});T.default=void 0;var ha=K(C),ya=K(w),$a=K(I),at=K(Z),Ma=K(E);function K(e){return e&&e.__esModule?e:{default:e}}function rt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),a.push.apply(a,r)}return a}function ce(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?rt(Object(a),!0).forEach(function(r){Me(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):rt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function Me(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var pa=function e(t){if((0,ha.default)(t))return Number(t);if((0,ya.default)(t))return(0,$a.default)(t);if((0,at.default)(t)){var a=(0,Ma.default)(t);return Array.isArray(t)?t.map(function(r,u){return[0,1].includes(u)?e(r):r}):ce(ce(ce({},t),a.latitude&&Me({},a.latitude,e(t[a.latitude]))),a.longitude&&Me({},a.longitude,e(t[a.longitude])))}return Array.isArray(t)?t.map(function(r){return(0,at.default)(r)?e(r):r}):t},La=pa;T.default=La;Object.defineProperty(m,"__esModule",{value:!0});m.default=void 0;var Pa=d,Oa=Ot(b),Da=Ot(T);function Ot(e){return e&&e.__esModule?e:{default:e}}var Na=function(t,a){var r=(0,Oa.default)(t,Pa.latitudeKeys);if(!(typeof r=="undefined"||r===null)){var u=t[r];return a===!0?u:(0,Da.default)(u)}},Aa=Na;m.default=Aa;var h={};Object.defineProperty(h,"__esModule",{value:!0});h.default=void 0;var Sa=d,Ra=Dt(b),ba=Dt(T);function Dt(e){return e&&e.__esModule?e:{default:e}}var Ca=function(t,a){var r=(0,Ra.default)(t,Sa.longitudeKeys);if(!(typeof r=="undefined"||r===null)){var u=t[r];return a===!0?u:(0,ba.default)(u)}},wa=Ca;h.default=wa;var L={};Object.defineProperty(L,"__esModule",{value:!0});L.default=void 0;var Ia=function(t){return t*Math.PI/180},qa=Ia;L.default=qa;var N={};Object.defineProperty(N,"__esModule",{value:!0});N.default=void 0;var xa=function(t){return t*180/Math.PI},Ta=xa;N.default=Ta;Object.defineProperty(pe,"__esModule",{value:!0});pe.default=void 0;var Ea=J(m),Ka=J(h),_e=J(L),ge=J(N),ut=d;function J(e){return e&&e.__esModule?e:{default:e}}var Wa=function(t,a,r){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:6371e3,n=(0,Ea.default)(t),i=(0,Ka.default)(t),l=a/u,f=(0,_e.default)(r),o=(0,_e.default)(n),y=(0,_e.default)(i),g=Math.asin(Math.sin(o)*Math.cos(l)+Math.cos(o)*Math.sin(l)*Math.cos(f)),v=y+Math.atan2(Math.sin(f)*Math.sin(l)*Math.cos(o),Math.cos(l)-Math.sin(o)*Math.sin(g)),c=(0,ge.default)(v);return(c<ut.MINLON||c>ut.MAXLON)&&(v=(v+3*Math.PI)%(2*Math.PI)-Math.PI,c=(0,ge.default)(v)),{latitude:(0,ge.default)(g),longitude:c}},Ba=Wa;pe.default=Ba;var De={};Object.defineProperty(De,"__esModule",{value:!0});De.default=void 0;var Fa=d,Xa=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"m",r=Fa.areaConversion[a];if(r)return t*r;throw new Error("Invalid unit used for area conversion.")},Va=Xa;De.default=Va;var Ne={};Object.defineProperty(Ne,"__esModule",{value:!0});Ne.default=void 0;var Ua=d,ka=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"m",r=Ua.distanceConversion[a];if(r)return t*r;throw new Error("Invalid unit used for distance conversion.")},Ga=ka;Ne.default=Ga;var Ae={};Object.defineProperty(Ae,"__esModule",{value:!0});Ae.default=void 0;var V=d,Ya=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"kmh";switch(a){case"kmh":return t*V.timeConversion.h*V.distanceConversion.km;case"mph":return t*V.timeConversion.h*V.distanceConversion.mi;default:return t}},Za=Ya;Ae.default=Za;var Se={};Object.defineProperty(Se,"__esModule",{value:!0});Se.default=void 0;function nt(e,t){return Qa(e)||Ja(e,t)||za(e,t)||Ha()}function Ha(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function za(e,t){if(!!e){if(typeof e=="string")return it(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return it(e,t)}}function it(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function Ja(e,t){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(e)))){var a=[],r=!0,u=!1,n=void 0;try{for(var i=e[Symbol.iterator](),l;!(r=(l=i.next()).done)&&(a.push(l.value),!(t&&a.length===t));r=!0);}catch(f){u=!0,n=f}finally{try{!r&&i.return!=null&&i.return()}finally{if(u)throw n}}return a}}function Qa(e){if(Array.isArray(e))return e}var ja=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:4,r=Math.pow(10,a);return Math.round(t*r)/r},er=function(t){var a=t.toString().split("."),r=nt(a,2),u=r[0],n=r[1],i=Math.abs(Number(u)),l=Number("0."+(n||0))*60,f=l.toString().split("."),o=Math.floor(l),y=ja(Number("0."+(f[1]||0))*60).toString(),g=y.split("."),v=nt(g,2),c=v[0],_=v[1],s=_===void 0?"0":_;return i+"\xB0 "+o.toString().padStart(2,"0")+"' "+c.padStart(2,"0")+"."+s.padEnd(1,"0")+'"'},tr=er;Se.default=tr;var Re={},Q={},O={},W={};Object.defineProperty(W,"__esModule",{value:!0});W.default=void 0;var ar=function(t){return t>1?1:t<-1?-1:t},rr=ar;W.default=rr;Object.defineProperty(O,"__esModule",{value:!0});O.default=void 0;var dt=j(m),lt=j(h),S=j(L),ur=j(W),nr=d;function j(e){return e&&e.__esModule?e:{default:e}}var ir=function(t,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;r=typeof r!="undefined"&&!isNaN(r)?r:1;var u=(0,dt.default)(t),n=(0,lt.default)(t),i=(0,dt.default)(a),l=(0,lt.default)(a),f=Math.acos((0,ur.default)(Math.sin((0,S.default)(i))*Math.sin((0,S.default)(u))+Math.cos((0,S.default)(i))*Math.cos((0,S.default)(u))*Math.cos((0,S.default)(n)-(0,S.default)(l))))*nr.earthRadius;return Math.round(f/r)*r},dr=ir;O.default=dr;Object.defineProperty(Q,"__esModule",{value:!0});Q.default=void 0;var ft=lr(O);function lr(e){return e&&e.__esModule?e:{default:e}}var fr=function(t,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ft.default;return r=typeof r=="function"?r:ft.default,a.slice().sort(function(u,n){return r(t,u)-r(t,n)})},or=fr;Q.default=or;Object.defineProperty(Re,"__esModule",{value:!0});Re.default=void 0;var sr=vr(Q);function vr(e){return e&&e.__esModule?e:{default:e}}var cr=function(t,a){return(0,sr.default)(t,a)[0]},_r=cr;Re.default=_r;var be={};Object.defineProperty(be,"__esModule",{value:!0});be.default=void 0;var me=Ce(L),gr=Ce(m),ot=Ce(h),st=d;function Ce(e){return e&&e.__esModule?e:{default:e}}var mr=function(t){var a=0;if(t.length>2){for(var r,u,n,i=0;i<t.length;i++){i===t.length-2?(r=t.length-2,u=t.length-1,n=0):i===t.length-1?(r=t.length-1,u=0,n=1):(r=i,u=i+1,n=i+2);var l=(0,ot.default)(t[r]),f=(0,gr.default)(t[u]),o=(0,ot.default)(t[n]);a+=((0,me.default)(o)-(0,me.default)(l))*Math.sin((0,me.default)(f))}a=a*st.earthRadius*st.earthRadius/2}return Math.abs(a)},hr=mr;be.default=hr;var ee={};Object.defineProperty(ee,"__esModule",{value:!0});ee.default=void 0;var yr=Nt(m),$r=Nt(h);function Nt(e){return e&&e.__esModule?e:{default:e}}var Mr=function(t){if(Array.isArray(t)===!1||t.length===0)throw new Error("No points were given.");return t.reduce(function(a,r){var u=(0,yr.default)(r),n=(0,$r.default)(r);return{maxLat:Math.max(u,a.maxLat),minLat:Math.min(u,a.minLat),maxLng:Math.max(n,a.maxLng),minLng:Math.min(n,a.minLng)}},{maxLat:-1/0,minLat:1/0,maxLng:-1/0,minLng:1/0})},pr=Mr;ee.default=pr;var we={};Object.defineProperty(we,"__esModule",{value:!0});we.default=void 0;var Lr=te(m),Pr=te(h),R=te(L),U=te(N),x=d;function te(e){return e&&e.__esModule?e:{default:e}}var Or=function(t,a){var r=(0,Lr.default)(t),u=(0,Pr.default)(t),n=(0,R.default)(r),i=(0,R.default)(u),l=a/x.earthRadius,f=n-l,o=n+l,y=(0,R.default)(x.MAXLAT),g=(0,R.default)(x.MINLAT),v=(0,R.default)(x.MAXLON),c=(0,R.default)(x.MINLON),_,s;if(f>g&&o<y){var M=Math.asin(Math.sin(l)/Math.cos(n));_=i-M,_<c&&(_+=Math.PI*2),s=i+M,s>v&&(s-=Math.PI*2)}else f=Math.max(f,g),o=Math.min(o,y),_=c,s=v;return[{latitude:(0,U.default)(f),longitude:(0,U.default)(_)},{latitude:(0,U.default)(o),longitude:(0,U.default)(s)}]},Dr=Or;we.default=Dr;var Ie={};Object.defineProperty(Ie,"__esModule",{value:!0});Ie.default=void 0;var Nr=ae(m),Ar=ae(h),vt=ae(L),ct=ae(N);function ae(e){return e&&e.__esModule?e:{default:e}}var Sr=function(t){if(Array.isArray(t)===!1||t.length===0)return!1;var a=t.length,r=t.reduce(function(l,f){var o=(0,vt.default)((0,Nr.default)(f)),y=(0,vt.default)((0,Ar.default)(f));return{X:l.X+Math.cos(o)*Math.cos(y),Y:l.Y+Math.cos(o)*Math.sin(y),Z:l.Z+Math.sin(o)}},{X:0,Y:0,Z:0}),u=r.X/a,n=r.Y/a,i=r.Z/a;return{longitude:(0,ct.default)(Math.atan2(n,u)),latitude:(0,ct.default)(Math.atan2(i,Math.sqrt(u*u+n*n)))}},Rr=Sr;Ie.default=Rr;var qe={};Object.defineProperty(qe,"__esModule",{value:!0});qe.default=void 0;var br=Cr(ee);function Cr(e){return e&&e.__esModule?e:{default:e}}var wr=function(t){var a=(0,br.default)(t),r=a.minLat+(a.maxLat-a.minLat)/2,u=a.minLng+(a.maxLng-a.minLng)/2;return{latitude:parseFloat(r.toFixed(6)),longitude:parseFloat(u.toFixed(6))}},Ir=wr;qe.default=Ir;var xe={},re={};Object.defineProperty(re,"__esModule",{value:!0});re.default=void 0;var _t=ue(m),gt=ue(h),k=ue(L),qr=ue(N);function ue(e){return e&&e.__esModule?e:{default:e}}var xr=function(t,a){var r=(0,k.default)((0,gt.default)(a))-(0,k.default)((0,gt.default)(t)),u=Math.log(Math.tan((0,k.default)((0,_t.default)(a))/2+Math.PI/4)/Math.tan((0,k.default)((0,_t.default)(t))/2+Math.PI/4));return Math.abs(r)>Math.PI&&(r>0?r=(Math.PI*2-r)*-1:r=Math.PI*2+r),((0,qr.default)(Math.atan2(r,u))+360)%360},Tr=xr;re.default=Tr;Object.defineProperty(xe,"__esModule",{value:!0});xe.default=void 0;var mt=Er(re);function Er(e){return e&&e.__esModule?e:{default:e}}var Kr=function(t,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:mt.default,u=typeof r=="function"?r(t,a):(0,mt.default)(t,a);if(isNaN(u))throw new Error("Could not calculate bearing for given points. Check your bearing function");switch(Math.round(u/22.5)){case 1:return"NNE";case 2:return"NE";case 3:return"ENE";case 4:return"E";case 5:return"ESE";case 6:return"SE";case 7:return"SSE";case 8:return"S";case 9:return"SSW";case 10:return"SW";case 11:return"WSW";case 12:return"W";case 13:return"WNW";case 14:return"NW";case 15:return"NNW";default:return"N"}},Wr=Kr;xe.default=Wr;var ne={};Object.defineProperty(ne,"__esModule",{value:!0});ne.default=void 0;var he=At(O),ht=At(W);function At(e){return e&&e.__esModule?e:{default:e}}var Br=function(t,a,r){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,n=(0,he.default)(a,t,u),i=(0,he.default)(t,r,u),l=(0,he.default)(a,r,u),f=Math.acos((0,ht.default)((n*n+l*l-i*i)/(2*n*l))),o=Math.acos((0,ht.default)((i*i+l*l-n*n)/(2*i*l)));return f>Math.PI/2?n:o>Math.PI/2?i:Math.sin(f)*n},Fr=Br;ne.default=Fr;var Te={};Object.defineProperty(Te,"__esModule",{value:!0});Te.default=void 0;var yt=ie(m),$t=ie(h),P=ie(L),Xr=ie(N);function ie(e){return e&&e.__esModule?e:{default:e}}var Vr=function(t,a){var r=(0,yt.default)(a),u=(0,$t.default)(a),n=(0,yt.default)(t),i=(0,$t.default)(t),l=((0,Xr.default)(Math.atan2(Math.sin((0,P.default)(u)-(0,P.default)(i))*Math.cos((0,P.default)(r)),Math.cos((0,P.default)(n))*Math.sin((0,P.default)(r))-Math.sin((0,P.default)(n))*Math.cos((0,P.default)(r))*Math.cos((0,P.default)(u)-(0,P.default)(i))))+360)%360;return l},Ur=Vr;Te.default=Ur;var Ee={};Object.defineProperty(Ee,"__esModule",{value:!0});Ee.default=void 0;var kr=Gr(O);function Gr(e){return e&&e.__esModule?e:{default:e}}function Y(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Y=function(a){return typeof a}:Y=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Y(e)}var Yr=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:kr.default;return t.reduce(function(r,u){return Y(r)==="object"&&r.last!==null&&(r.distance+=a(u,r.last)),r.last=u,r},{last:null,distance:0}).distance},Zr=Yr;Ee.default=Zr;var Ke={};Object.defineProperty(Ke,"__esModule",{value:!0});Ke.default=void 0;var Mt=We(m),pt=We(h),ye=We(L),Lt=d;function We(e){return e&&e.__esModule?e:{default:e}}var Hr=function(t,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;r=typeof r!="undefined"&&!isNaN(r)?r:1;var u=(0,Mt.default)(t),n=(0,pt.default)(t),i=(0,Mt.default)(a),l=(0,pt.default)(a),f=6356752314245e-6,o=1/298.257223563,y=(0,ye.default)(l-n),g,v,c,_,s,M,Ye=Math.atan((1-o)*Math.tan((0,ye.default)(parseFloat(u)))),Ze=Math.atan((1-o)*Math.tan((0,ye.default)(parseFloat(i)))),B=Math.sin(Ye),F=Math.cos(Ye),X=Math.sin(Ze),A=Math.cos(Ze),q=y,He,ze=100;do{var de=Math.sin(q),le=Math.cos(q);if(M=Math.sqrt(A*de*(A*de)+(F*X-B*A*le)*(F*X-B*A*le)),M===0)return 0;g=B*X+F*A*le,v=Math.atan2(M,g),c=F*A*de/M,_=1-c*c,s=g-2*B*X/_,isNaN(s)&&(s=0);var fe=o/16*_*(4+o*(4-3*_));He=q,q=y+(1-fe)*o*c*(v+fe*M*(s+fe*g*(-1+2*s*s)))}while(Math.abs(q-He)>1e-12&&--ze>0);if(ze===0)return NaN;var D=_*(Lt.earthRadius*Lt.earthRadius-f*f)/(f*f),Rt=1+D/16384*(4096+D*(-768+D*(320-175*D))),oe=D/1024*(256+D*(-128+D*(74-47*D))),bt=oe*M*(s+oe/4*(g*(-1+2*s*s)-oe/6*s*(-3+4*M*M)*(-3+4*s*s))),Ct=f*Rt*(v-bt);return Math.round(Ct/r)*r},zr=Hr;Ke.default=zr;var Be={};Object.defineProperty(Be,"__esModule",{value:!0});Be.default=void 0;var Jr=function(t){if(/^NNE|NE|NNW|N$/.test(t))return"N";if(/^ENE|E|ESE|SE$/.test(t))return"E";if(/^SSE|S|SSW|SW$/.test(t))return"S";if(/^WSW|W|WNW|NW$/.test(t))return"W"},Qr=Jr;Be.default=Qr;var Fe={};Object.defineProperty(Fe,"__esModule",{value:!0});Fe.default=void 0;var jr=eu(O);function eu(e){return e&&e.__esModule?e:{default:e}}var tu=function(t,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:jr.default,u=r(t,a),n=Number(a.time)-Number(t.time),i=u/n*1e3;return i},au=tu;Fe.default=au;var Xe={};Object.defineProperty(Xe,"__esModule",{value:!0});Xe.default=void 0;var $e=ru(O);function ru(e){return e&&e.__esModule?e:{default:e}}var uu=function(t,a,r){return(0,$e.default)(a,t)+(0,$e.default)(t,r)===(0,$e.default)(a,r)},nu=uu;Xe.default=nu;var Ve={};Object.defineProperty(Ve,"__esModule",{value:!0});Ve.default=void 0;var G=St(m),$=St(h);function St(e){return e&&e.__esModule?e:{default:e}}var iu=function(t,a){for(var r=!1,u=a.length,n=-1,i=u-1;++n<u;i=n)((0,$.default)(a[n])<=(0,$.default)(t)&&(0,$.default)(t)<(0,$.default)(a[i])||(0,$.default)(a[i])<=(0,$.default)(t)&&(0,$.default)(t)<(0,$.default)(a[n]))&&(0,G.default)(t)<((0,G.default)(a[i])-(0,G.default)(a[n]))*((0,$.default)(t)-(0,$.default)(a[n]))/((0,$.default)(a[i])-(0,$.default)(a[n]))+(0,G.default)(a[n])&&(r=!r);return r},du=iu;Ve.default=du;var Ue={};Object.defineProperty(Ue,"__esModule",{value:!0});Ue.default=void 0;var lu=fu(ne);function fu(e){return e&&e.__esModule?e:{default:e}}var ou=function(t,a,r,u){return(0,lu.default)(t,a,r)<u},su=ou;Ue.default=su;var ke={};Object.defineProperty(ke,"__esModule",{value:!0});ke.default=void 0;var vu=cu(O);function cu(e){return e&&e.__esModule?e:{default:e}}var _u=function(t,a,r){return(0,vu.default)(t,a)<r},gu=_u;ke.default=gu;var Ge={};Object.defineProperty(Ge,"__esModule",{value:!0});Ge.default=void 0;function mu(e,t){return Mu(e)||$u(e,t)||yu(e,t)||hu()}function hu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yu(e,t){if(!!e){if(typeof e=="string")return Pt(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Pt(e,t)}}function Pt(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function $u(e,t){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(e)))){var a=[],r=!0,u=!1,n=void 0;try{for(var i=e[Symbol.iterator](),l;!(r=(l=i.next()).done)&&(a.push(l.value),!(t&&a.length===t));r=!0);}catch(f){u=!0,n=f}finally{try{!r&&i.return!=null&&i.return()}finally{if(u)throw n}}return a}}function Mu(e){if(Array.isArray(e))return e}var pu=function(t){if(!t.startsWith("POLYGON"))throw new Error("Invalid wkt.");var a=t.slice(t.indexOf("(")+2,t.indexOf(")")).split(", "),r=a.map(function(u){var n=u.split(" "),i=mu(n,2),l=i[0],f=i[1];return{longitude:parseFloat(l),latitude:parseFloat(f)}});return r},Lu=pu;Ge.default=Lu;export{Ue as A,ke as B,w as C,Z as D,H as E,z as F,Q as G,I as H,T as I,L as J,N as K,Ge as L,pe as M,d as N,Ne as a,Ae as b,De as c,Se as d,ee as e,Re as f,be as g,we as h,Ie as i,qe as j,xe as k,b as l,E as m,O as n,ne as o,Te as p,m as q,h as r,Ee as s,Ke as t,re as u,Be as v,Fe as w,C as x,Xe as y,Ve as z};
