!function(n){var t={};function r(u){if(t[u])return t[u].exports;var e=t[u]={i:u,l:!1,exports:{}};return n[u].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=t,r.d=function(n,t,u){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:u})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var u=Object.create(null);if(r.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)r.d(u,e,function(t){return n[t]}.bind(null,e));return u},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="/",r(r.s=69)}({0:function(n,t,r){"use strict";var u={};r.r(u),r.d(u,"create",function(){return h}),r.d(u,"clone",function(){return s}),r.d(u,"copy",function(){return d}),r.d(u,"fromValues",function(){return M}),r.d(u,"set",function(){return l}),r.d(u,"identity",function(){return v}),r.d(u,"transpose",function(){return m}),r.d(u,"invert",function(){return b}),r.d(u,"adjoint",function(){return p}),r.d(u,"determinant",function(){return g}),r.d(u,"multiply",function(){return w}),r.d(u,"translate",function(){return x}),r.d(u,"scale",function(){return y}),r.d(u,"rotate",function(){return q}),r.d(u,"rotateX",function(){return _}),r.d(u,"rotateY",function(){return A}),r.d(u,"rotateZ",function(){return S}),r.d(u,"fromTranslation",function(){return P}),r.d(u,"fromScaling",function(){return T}),r.d(u,"fromRotation",function(){return I}),r.d(u,"fromXRotation",function(){return R}),r.d(u,"fromYRotation",function(){return E}),r.d(u,"fromZRotation",function(){return L}),r.d(u,"fromRotationTranslation",function(){return F}),r.d(u,"fromQuat2",function(){return O}),r.d(u,"getTranslation",function(){return k}),r.d(u,"getScaling",function(){return D}),r.d(u,"getRotation",function(){return V}),r.d(u,"fromRotationTranslationScale",function(){return j}),r.d(u,"fromRotationTranslationScaleOrigin",function(){return C}),r.d(u,"fromQuat",function(){return z}),r.d(u,"frustum",function(){return U}),r.d(u,"perspective",function(){return B}),r.d(u,"perspectiveFromFieldOfView",function(){return G}),r.d(u,"ortho",function(){return W}),r.d(u,"lookAt",function(){return Y}),r.d(u,"targetTo",function(){return N}),r.d(u,"str",function(){return Q}),r.d(u,"frob",function(){return X}),r.d(u,"add",function(){return H}),r.d(u,"subtract",function(){return Z}),r.d(u,"multiplyScalar",function(){return K}),r.d(u,"multiplyScalarAndAdd",function(){return J}),r.d(u,"exactEquals",function(){return $}),r.d(u,"equals",function(){return nn}),r.d(u,"mul",function(){return tn}),r.d(u,"sub",function(){return rn});var e={};r.r(e),r.d(e,"create",function(){return un}),r.d(e,"clone",function(){return en}),r.d(e,"fromValues",function(){return an}),r.d(e,"copy",function(){return on}),r.d(e,"set",function(){return cn}),r.d(e,"add",function(){return fn}),r.d(e,"subtract",function(){return hn}),r.d(e,"multiply",function(){return sn}),r.d(e,"divide",function(){return dn}),r.d(e,"ceil",function(){return Mn}),r.d(e,"floor",function(){return ln}),r.d(e,"min",function(){return vn}),r.d(e,"max",function(){return mn}),r.d(e,"round",function(){return bn}),r.d(e,"scale",function(){return pn}),r.d(e,"scaleAndAdd",function(){return gn}),r.d(e,"distance",function(){return wn}),r.d(e,"squaredDistance",function(){return xn}),r.d(e,"length",function(){return yn}),r.d(e,"squaredLength",function(){return qn}),r.d(e,"negate",function(){return _n}),r.d(e,"inverse",function(){return An}),r.d(e,"normalize",function(){return Sn}),r.d(e,"dot",function(){return Pn}),r.d(e,"cross",function(){return Tn}),r.d(e,"lerp",function(){return In}),r.d(e,"random",function(){return Rn}),r.d(e,"transformMat2",function(){return En}),r.d(e,"transformMat2d",function(){return Ln}),r.d(e,"transformMat3",function(){return Fn}),r.d(e,"transformMat4",function(){return On}),r.d(e,"rotate",function(){return kn}),r.d(e,"angle",function(){return Dn}),r.d(e,"zero",function(){return Vn}),r.d(e,"str",function(){return jn}),r.d(e,"exactEquals",function(){return Cn}),r.d(e,"equals",function(){return zn}),r.d(e,"len",function(){return Bn}),r.d(e,"sub",function(){return Gn}),r.d(e,"mul",function(){return Wn}),r.d(e,"div",function(){return Yn}),r.d(e,"dist",function(){return Nn}),r.d(e,"sqrDist",function(){return Qn}),r.d(e,"sqrLen",function(){return Xn}),r.d(e,"forEach",function(){return Hn});var a={};r.r(a),r.d(a,"create",function(){return Zn}),r.d(a,"clone",function(){return Kn}),r.d(a,"length",function(){return Jn}),r.d(a,"fromValues",function(){return $n}),r.d(a,"copy",function(){return nt}),r.d(a,"set",function(){return tt}),r.d(a,"add",function(){return rt}),r.d(a,"subtract",function(){return ut}),r.d(a,"multiply",function(){return et}),r.d(a,"divide",function(){return at}),r.d(a,"ceil",function(){return ot}),r.d(a,"floor",function(){return it}),r.d(a,"min",function(){return ct}),r.d(a,"max",function(){return ft}),r.d(a,"round",function(){return ht}),r.d(a,"scale",function(){return st}),r.d(a,"scaleAndAdd",function(){return dt}),r.d(a,"distance",function(){return Mt}),r.d(a,"squaredDistance",function(){return lt}),r.d(a,"squaredLength",function(){return vt}),r.d(a,"negate",function(){return mt}),r.d(a,"inverse",function(){return bt}),r.d(a,"normalize",function(){return pt}),r.d(a,"dot",function(){return gt}),r.d(a,"cross",function(){return wt}),r.d(a,"lerp",function(){return xt}),r.d(a,"hermite",function(){return yt}),r.d(a,"bezier",function(){return qt}),r.d(a,"random",function(){return _t}),r.d(a,"transformMat4",function(){return At}),r.d(a,"transformMat3",function(){return St}),r.d(a,"transformQuat",function(){return Pt}),r.d(a,"rotateX",function(){return Tt}),r.d(a,"rotateY",function(){return It}),r.d(a,"rotateZ",function(){return Rt}),r.d(a,"angle",function(){return Et}),r.d(a,"zero",function(){return Lt}),r.d(a,"str",function(){return Ft}),r.d(a,"exactEquals",function(){return Ot}),r.d(a,"equals",function(){return kt}),r.d(a,"sub",function(){return Dt}),r.d(a,"mul",function(){return Vt}),r.d(a,"div",function(){return jt}),r.d(a,"dist",function(){return Ct}),r.d(a,"sqrDist",function(){return zt}),r.d(a,"len",function(){return Ut}),r.d(a,"sqrLen",function(){return Bt}),r.d(a,"forEach",function(){return Gt});var o={};r.r(o),r.d(o,"create",function(){return Wt}),r.d(o,"clone",function(){return Yt}),r.d(o,"fromValues",function(){return Nt}),r.d(o,"copy",function(){return Qt}),r.d(o,"set",function(){return Xt}),r.d(o,"add",function(){return Ht}),r.d(o,"subtract",function(){return Zt}),r.d(o,"multiply",function(){return Kt}),r.d(o,"divide",function(){return Jt}),r.d(o,"ceil",function(){return $t}),r.d(o,"floor",function(){return nr}),r.d(o,"min",function(){return tr}),r.d(o,"max",function(){return rr}),r.d(o,"round",function(){return ur}),r.d(o,"scale",function(){return er}),r.d(o,"scaleAndAdd",function(){return ar}),r.d(o,"distance",function(){return or}),r.d(o,"squaredDistance",function(){return ir}),r.d(o,"length",function(){return cr}),r.d(o,"squaredLength",function(){return fr}),r.d(o,"negate",function(){return hr}),r.d(o,"inverse",function(){return sr}),r.d(o,"normalize",function(){return dr}),r.d(o,"dot",function(){return Mr}),r.d(o,"cross",function(){return lr}),r.d(o,"lerp",function(){return vr}),r.d(o,"random",function(){return mr}),r.d(o,"transformMat4",function(){return br}),r.d(o,"transformQuat",function(){return pr}),r.d(o,"zero",function(){return gr}),r.d(o,"str",function(){return wr}),r.d(o,"exactEquals",function(){return xr}),r.d(o,"equals",function(){return yr}),r.d(o,"sub",function(){return qr}),r.d(o,"mul",function(){return _r}),r.d(o,"div",function(){return Ar}),r.d(o,"dist",function(){return Sr}),r.d(o,"sqrDist",function(){return Pr}),r.d(o,"len",function(){return Tr}),r.d(o,"sqrLen",function(){return Ir}),r.d(o,"forEach",function(){return Rr});var i=1e-6,c="undefined"!=typeof Float32Array?Float32Array:Array,f=Math.random;Math.PI;function h(){var n=new c(16);return c!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function s(n){var t=new c(16);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function d(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function M(n,t,r,u,e,a,o,i,f,h,s,d,M,l,v,m){var b=new c(16);return b[0]=n,b[1]=t,b[2]=r,b[3]=u,b[4]=e,b[5]=a,b[6]=o,b[7]=i,b[8]=f,b[9]=h,b[10]=s,b[11]=d,b[12]=M,b[13]=l,b[14]=v,b[15]=m,b}function l(n,t,r,u,e,a,o,i,c,f,h,s,d,M,l,v,m){return n[0]=t,n[1]=r,n[2]=u,n[3]=e,n[4]=a,n[5]=o,n[6]=i,n[7]=c,n[8]=f,n[9]=h,n[10]=s,n[11]=d,n[12]=M,n[13]=l,n[14]=v,n[15]=m,n}function v(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function m(n,t){if(n===t){var r=t[1],u=t[2],e=t[3],a=t[6],o=t[7],i=t[11];n[1]=t[4],n[2]=t[8],n[3]=t[12],n[4]=r,n[6]=t[9],n[7]=t[13],n[8]=u,n[9]=a,n[11]=t[14],n[12]=e,n[13]=o,n[14]=i}else n[0]=t[0],n[1]=t[4],n[2]=t[8],n[3]=t[12],n[4]=t[1],n[5]=t[5],n[6]=t[9],n[7]=t[13],n[8]=t[2],n[9]=t[6],n[10]=t[10],n[11]=t[14],n[12]=t[3],n[13]=t[7],n[14]=t[11],n[15]=t[15];return n}function b(n,t){var r=t[0],u=t[1],e=t[2],a=t[3],o=t[4],i=t[5],c=t[6],f=t[7],h=t[8],s=t[9],d=t[10],M=t[11],l=t[12],v=t[13],m=t[14],b=t[15],p=r*i-u*o,g=r*c-e*o,w=r*f-a*o,x=u*c-e*i,y=u*f-a*i,q=e*f-a*c,_=h*v-s*l,A=h*m-d*l,S=h*b-M*l,P=s*m-d*v,T=s*b-M*v,I=d*b-M*m,R=p*I-g*T+w*P+x*S-y*A+q*_;return R?(R=1/R,n[0]=(i*I-c*T+f*P)*R,n[1]=(e*T-u*I-a*P)*R,n[2]=(v*q-m*y+b*x)*R,n[3]=(d*y-s*q-M*x)*R,n[4]=(c*S-o*I-f*A)*R,n[5]=(r*I-e*S+a*A)*R,n[6]=(m*w-l*q-b*g)*R,n[7]=(h*q-d*w+M*g)*R,n[8]=(o*T-i*S+f*_)*R,n[9]=(u*S-r*T-a*_)*R,n[10]=(l*y-v*w+b*p)*R,n[11]=(s*w-h*y-M*p)*R,n[12]=(i*A-o*P-c*_)*R,n[13]=(r*P-u*A+e*_)*R,n[14]=(v*g-l*x-m*p)*R,n[15]=(h*x-s*g+d*p)*R,n):null}function p(n,t){var r=t[0],u=t[1],e=t[2],a=t[3],o=t[4],i=t[5],c=t[6],f=t[7],h=t[8],s=t[9],d=t[10],M=t[11],l=t[12],v=t[13],m=t[14],b=t[15];return n[0]=i*(d*b-M*m)-s*(c*b-f*m)+v*(c*M-f*d),n[1]=-(u*(d*b-M*m)-s*(e*b-a*m)+v*(e*M-a*d)),n[2]=u*(c*b-f*m)-i*(e*b-a*m)+v*(e*f-a*c),n[3]=-(u*(c*M-f*d)-i*(e*M-a*d)+s*(e*f-a*c)),n[4]=-(o*(d*b-M*m)-h*(c*b-f*m)+l*(c*M-f*d)),n[5]=r*(d*b-M*m)-h*(e*b-a*m)+l*(e*M-a*d),n[6]=-(r*(c*b-f*m)-o*(e*b-a*m)+l*(e*f-a*c)),n[7]=r*(c*M-f*d)-o*(e*M-a*d)+h*(e*f-a*c),n[8]=o*(s*b-M*v)-h*(i*b-f*v)+l*(i*M-f*s),n[9]=-(r*(s*b-M*v)-h*(u*b-a*v)+l*(u*M-a*s)),n[10]=r*(i*b-f*v)-o*(u*b-a*v)+l*(u*f-a*i),n[11]=-(r*(i*M-f*s)-o*(u*M-a*s)+h*(u*f-a*i)),n[12]=-(o*(s*m-d*v)-h*(i*m-c*v)+l*(i*d-c*s)),n[13]=r*(s*m-d*v)-h*(u*m-e*v)+l*(u*d-e*s),n[14]=-(r*(i*m-c*v)-o*(u*m-e*v)+l*(u*c-e*i)),n[15]=r*(i*d-c*s)-o*(u*d-e*s)+h*(u*c-e*i),n}function g(n){var t=n[0],r=n[1],u=n[2],e=n[3],a=n[4],o=n[5],i=n[6],c=n[7],f=n[8],h=n[9],s=n[10],d=n[11],M=n[12],l=n[13],v=n[14],m=n[15];return(t*o-r*a)*(s*m-d*v)-(t*i-u*a)*(h*m-d*l)+(t*c-e*a)*(h*v-s*l)+(r*i-u*o)*(f*m-d*M)-(r*c-e*o)*(f*v-s*M)+(u*c-e*i)*(f*l-h*M)}function w(n,t,r){var u=t[0],e=t[1],a=t[2],o=t[3],i=t[4],c=t[5],f=t[6],h=t[7],s=t[8],d=t[9],M=t[10],l=t[11],v=t[12],m=t[13],b=t[14],p=t[15],g=r[0],w=r[1],x=r[2],y=r[3];return n[0]=g*u+w*i+x*s+y*v,n[1]=g*e+w*c+x*d+y*m,n[2]=g*a+w*f+x*M+y*b,n[3]=g*o+w*h+x*l+y*p,g=r[4],w=r[5],x=r[6],y=r[7],n[4]=g*u+w*i+x*s+y*v,n[5]=g*e+w*c+x*d+y*m,n[6]=g*a+w*f+x*M+y*b,n[7]=g*o+w*h+x*l+y*p,g=r[8],w=r[9],x=r[10],y=r[11],n[8]=g*u+w*i+x*s+y*v,n[9]=g*e+w*c+x*d+y*m,n[10]=g*a+w*f+x*M+y*b,n[11]=g*o+w*h+x*l+y*p,g=r[12],w=r[13],x=r[14],y=r[15],n[12]=g*u+w*i+x*s+y*v,n[13]=g*e+w*c+x*d+y*m,n[14]=g*a+w*f+x*M+y*b,n[15]=g*o+w*h+x*l+y*p,n}function x(n,t,r){var u,e,a,o,i,c,f,h,s,d,M,l,v=r[0],m=r[1],b=r[2];return t===n?(n[12]=t[0]*v+t[4]*m+t[8]*b+t[12],n[13]=t[1]*v+t[5]*m+t[9]*b+t[13],n[14]=t[2]*v+t[6]*m+t[10]*b+t[14],n[15]=t[3]*v+t[7]*m+t[11]*b+t[15]):(u=t[0],e=t[1],a=t[2],o=t[3],i=t[4],c=t[5],f=t[6],h=t[7],s=t[8],d=t[9],M=t[10],l=t[11],n[0]=u,n[1]=e,n[2]=a,n[3]=o,n[4]=i,n[5]=c,n[6]=f,n[7]=h,n[8]=s,n[9]=d,n[10]=M,n[11]=l,n[12]=u*v+i*m+s*b+t[12],n[13]=e*v+c*m+d*b+t[13],n[14]=a*v+f*m+M*b+t[14],n[15]=o*v+h*m+l*b+t[15]),n}function y(n,t,r){var u=r[0],e=r[1],a=r[2];return n[0]=t[0]*u,n[1]=t[1]*u,n[2]=t[2]*u,n[3]=t[3]*u,n[4]=t[4]*e,n[5]=t[5]*e,n[6]=t[6]*e,n[7]=t[7]*e,n[8]=t[8]*a,n[9]=t[9]*a,n[10]=t[10]*a,n[11]=t[11]*a,n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function q(n,t,r,u){var e,a,o,c,f,h,s,d,M,l,v,m,b,p,g,w,x,y,q,_,A,S,P,T,I=u[0],R=u[1],E=u[2],L=Math.sqrt(I*I+R*R+E*E);return L<i?null:(I*=L=1/L,R*=L,E*=L,e=Math.sin(r),o=1-(a=Math.cos(r)),c=t[0],f=t[1],h=t[2],s=t[3],d=t[4],M=t[5],l=t[6],v=t[7],m=t[8],b=t[9],p=t[10],g=t[11],w=I*I*o+a,x=R*I*o+E*e,y=E*I*o-R*e,q=I*R*o-E*e,_=R*R*o+a,A=E*R*o+I*e,S=I*E*o+R*e,P=R*E*o-I*e,T=E*E*o+a,n[0]=c*w+d*x+m*y,n[1]=f*w+M*x+b*y,n[2]=h*w+l*x+p*y,n[3]=s*w+v*x+g*y,n[4]=c*q+d*_+m*A,n[5]=f*q+M*_+b*A,n[6]=h*q+l*_+p*A,n[7]=s*q+v*_+g*A,n[8]=c*S+d*P+m*T,n[9]=f*S+M*P+b*T,n[10]=h*S+l*P+p*T,n[11]=s*S+v*P+g*T,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n)}function _(n,t,r){var u=Math.sin(r),e=Math.cos(r),a=t[4],o=t[5],i=t[6],c=t[7],f=t[8],h=t[9],s=t[10],d=t[11];return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[4]=a*e+f*u,n[5]=o*e+h*u,n[6]=i*e+s*u,n[7]=c*e+d*u,n[8]=f*e-a*u,n[9]=h*e-o*u,n[10]=s*e-i*u,n[11]=d*e-c*u,n}function A(n,t,r){var u=Math.sin(r),e=Math.cos(r),a=t[0],o=t[1],i=t[2],c=t[3],f=t[8],h=t[9],s=t[10],d=t[11];return t!==n&&(n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[0]=a*e-f*u,n[1]=o*e-h*u,n[2]=i*e-s*u,n[3]=c*e-d*u,n[8]=a*u+f*e,n[9]=o*u+h*e,n[10]=i*u+s*e,n[11]=c*u+d*e,n}function S(n,t,r){var u=Math.sin(r),e=Math.cos(r),a=t[0],o=t[1],i=t[2],c=t[3],f=t[4],h=t[5],s=t[6],d=t[7];return t!==n&&(n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n[0]=a*e+f*u,n[1]=o*e+h*u,n[2]=i*e+s*u,n[3]=c*e+d*u,n[4]=f*e-a*u,n[5]=h*e-o*u,n[6]=s*e-i*u,n[7]=d*e-c*u,n}function P(n,t){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function T(n,t){return n[0]=t[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=t[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=t[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function I(n,t,r){var u,e,a,o=r[0],c=r[1],f=r[2],h=Math.sqrt(o*o+c*c+f*f);return h<i?null:(o*=h=1/h,c*=h,f*=h,u=Math.sin(t),a=1-(e=Math.cos(t)),n[0]=o*o*a+e,n[1]=c*o*a+f*u,n[2]=f*o*a-c*u,n[3]=0,n[4]=o*c*a-f*u,n[5]=c*c*a+e,n[6]=f*c*a+o*u,n[7]=0,n[8]=o*f*a+c*u,n[9]=c*f*a-o*u,n[10]=f*f*a+e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n)}function R(n,t){var r=Math.sin(t),u=Math.cos(t);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=u,n[6]=r,n[7]=0,n[8]=0,n[9]=-r,n[10]=u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function E(n,t){var r=Math.sin(t),u=Math.cos(t);return n[0]=u,n[1]=0,n[2]=-r,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=r,n[9]=0,n[10]=u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function L(n,t){var r=Math.sin(t),u=Math.cos(t);return n[0]=u,n[1]=r,n[2]=0,n[3]=0,n[4]=-r,n[5]=u,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function F(n,t,r){var u=t[0],e=t[1],a=t[2],o=t[3],i=u+u,c=e+e,f=a+a,h=u*i,s=u*c,d=u*f,M=e*c,l=e*f,v=a*f,m=o*i,b=o*c,p=o*f;return n[0]=1-(M+v),n[1]=s+p,n[2]=d-b,n[3]=0,n[4]=s-p,n[5]=1-(h+v),n[6]=l+m,n[7]=0,n[8]=d+b,n[9]=l-m,n[10]=1-(h+M),n[11]=0,n[12]=r[0],n[13]=r[1],n[14]=r[2],n[15]=1,n}function O(n,t){var r=new c(3),u=-t[0],e=-t[1],a=-t[2],o=t[3],i=t[4],f=t[5],h=t[6],s=t[7],d=u*u+e*e+a*a+o*o;return d>0?(r[0]=2*(i*o+s*u+f*a-h*e)/d,r[1]=2*(f*o+s*e+h*u-i*a)/d,r[2]=2*(h*o+s*a+i*e-f*u)/d):(r[0]=2*(i*o+s*u+f*a-h*e),r[1]=2*(f*o+s*e+h*u-i*a),r[2]=2*(h*o+s*a+i*e-f*u)),F(n,t,r),n}function k(n,t){return n[0]=t[12],n[1]=t[13],n[2]=t[14],n}function D(n,t){var r=t[0],u=t[1],e=t[2],a=t[4],o=t[5],i=t[6],c=t[8],f=t[9],h=t[10];return n[0]=Math.sqrt(r*r+u*u+e*e),n[1]=Math.sqrt(a*a+o*o+i*i),n[2]=Math.sqrt(c*c+f*f+h*h),n}function V(n,t){var r=t[0]+t[5]+t[10],u=0;return r>0?(u=2*Math.sqrt(r+1),n[3]=.25*u,n[0]=(t[6]-t[9])/u,n[1]=(t[8]-t[2])/u,n[2]=(t[1]-t[4])/u):t[0]>t[5]&&t[0]>t[10]?(u=2*Math.sqrt(1+t[0]-t[5]-t[10]),n[3]=(t[6]-t[9])/u,n[0]=.25*u,n[1]=(t[1]+t[4])/u,n[2]=(t[8]+t[2])/u):t[5]>t[10]?(u=2*Math.sqrt(1+t[5]-t[0]-t[10]),n[3]=(t[8]-t[2])/u,n[0]=(t[1]+t[4])/u,n[1]=.25*u,n[2]=(t[6]+t[9])/u):(u=2*Math.sqrt(1+t[10]-t[0]-t[5]),n[3]=(t[1]-t[4])/u,n[0]=(t[8]+t[2])/u,n[1]=(t[6]+t[9])/u,n[2]=.25*u),n}function j(n,t,r,u){var e=t[0],a=t[1],o=t[2],i=t[3],c=e+e,f=a+a,h=o+o,s=e*c,d=e*f,M=e*h,l=a*f,v=a*h,m=o*h,b=i*c,p=i*f,g=i*h,w=u[0],x=u[1],y=u[2];return n[0]=(1-(l+m))*w,n[1]=(d+g)*w,n[2]=(M-p)*w,n[3]=0,n[4]=(d-g)*x,n[5]=(1-(s+m))*x,n[6]=(v+b)*x,n[7]=0,n[8]=(M+p)*y,n[9]=(v-b)*y,n[10]=(1-(s+l))*y,n[11]=0,n[12]=r[0],n[13]=r[1],n[14]=r[2],n[15]=1,n}function C(n,t,r,u,e){var a=t[0],o=t[1],i=t[2],c=t[3],f=a+a,h=o+o,s=i+i,d=a*f,M=a*h,l=a*s,v=o*h,m=o*s,b=i*s,p=c*f,g=c*h,w=c*s,x=u[0],y=u[1],q=u[2],_=e[0],A=e[1],S=e[2],P=(1-(v+b))*x,T=(M+w)*x,I=(l-g)*x,R=(M-w)*y,E=(1-(d+b))*y,L=(m+p)*y,F=(l+g)*q,O=(m-p)*q,k=(1-(d+v))*q;return n[0]=P,n[1]=T,n[2]=I,n[3]=0,n[4]=R,n[5]=E,n[6]=L,n[7]=0,n[8]=F,n[9]=O,n[10]=k,n[11]=0,n[12]=r[0]+_-(P*_+R*A+F*S),n[13]=r[1]+A-(T*_+E*A+O*S),n[14]=r[2]+S-(I*_+L*A+k*S),n[15]=1,n}function z(n,t){var r=t[0],u=t[1],e=t[2],a=t[3],o=r+r,i=u+u,c=e+e,f=r*o,h=u*o,s=u*i,d=e*o,M=e*i,l=e*c,v=a*o,m=a*i,b=a*c;return n[0]=1-s-l,n[1]=h+b,n[2]=d-m,n[3]=0,n[4]=h-b,n[5]=1-f-l,n[6]=M+v,n[7]=0,n[8]=d+m,n[9]=M-v,n[10]=1-f-s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function U(n,t,r,u,e,a,o){var i=1/(r-t),c=1/(e-u),f=1/(a-o);return n[0]=2*a*i,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=2*a*c,n[6]=0,n[7]=0,n[8]=(r+t)*i,n[9]=(e+u)*c,n[10]=(o+a)*f,n[11]=-1,n[12]=0,n[13]=0,n[14]=o*a*2*f,n[15]=0,n}function B(n,t,r,u,e){var a,o=1/Math.tan(t/2);return n[0]=o/r,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=o,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,null!=e&&e!==1/0?(a=1/(u-e),n[10]=(e+u)*a,n[14]=2*e*u*a):(n[10]=-1,n[14]=-2*u),n}function G(n,t,r,u){var e=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),o=Math.tan(t.leftDegrees*Math.PI/180),i=Math.tan(t.rightDegrees*Math.PI/180),c=2/(o+i),f=2/(e+a);return n[0]=c,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=f,n[6]=0,n[7]=0,n[8]=-(o-i)*c*.5,n[9]=(e-a)*f*.5,n[10]=u/(r-u),n[11]=-1,n[12]=0,n[13]=0,n[14]=u*r/(r-u),n[15]=0,n}function W(n,t,r,u,e,a,o){var i=1/(t-r),c=1/(u-e),f=1/(a-o);return n[0]=-2*i,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*c,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*f,n[11]=0,n[12]=(t+r)*i,n[13]=(e+u)*c,n[14]=(o+a)*f,n[15]=1,n}function Y(n,t,r,u){var e,a,o,c,f,h,s,d,M,l,m=t[0],b=t[1],p=t[2],g=u[0],w=u[1],x=u[2],y=r[0],q=r[1],_=r[2];return Math.abs(m-y)<i&&Math.abs(b-q)<i&&Math.abs(p-_)<i?v(n):(s=m-y,d=b-q,M=p-_,e=w*(M*=l=1/Math.sqrt(s*s+d*d+M*M))-x*(d*=l),a=x*(s*=l)-g*M,o=g*d-w*s,(l=Math.sqrt(e*e+a*a+o*o))?(e*=l=1/l,a*=l,o*=l):(e=0,a=0,o=0),c=d*o-M*a,f=M*e-s*o,h=s*a-d*e,(l=Math.sqrt(c*c+f*f+h*h))?(c*=l=1/l,f*=l,h*=l):(c=0,f=0,h=0),n[0]=e,n[1]=c,n[2]=s,n[3]=0,n[4]=a,n[5]=f,n[6]=d,n[7]=0,n[8]=o,n[9]=h,n[10]=M,n[11]=0,n[12]=-(e*m+a*b+o*p),n[13]=-(c*m+f*b+h*p),n[14]=-(s*m+d*b+M*p),n[15]=1,n)}function N(n,t,r,u){var e=t[0],a=t[1],o=t[2],i=u[0],c=u[1],f=u[2],h=e-r[0],s=a-r[1],d=o-r[2],M=h*h+s*s+d*d;M>0&&(h*=M=1/Math.sqrt(M),s*=M,d*=M);var l=c*d-f*s,v=f*h-i*d,m=i*s-c*h;return(M=l*l+v*v+m*m)>0&&(l*=M=1/Math.sqrt(M),v*=M,m*=M),n[0]=l,n[1]=v,n[2]=m,n[3]=0,n[4]=s*m-d*v,n[5]=d*l-h*m,n[6]=h*v-s*l,n[7]=0,n[8]=h,n[9]=s,n[10]=d,n[11]=0,n[12]=e,n[13]=a,n[14]=o,n[15]=1,n}function Q(n){return"mat4("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+", "+n[4]+", "+n[5]+", "+n[6]+", "+n[7]+", "+n[8]+", "+n[9]+", "+n[10]+", "+n[11]+", "+n[12]+", "+n[13]+", "+n[14]+", "+n[15]+")"}function X(n){return Math.sqrt(Math.pow(n[0],2)+Math.pow(n[1],2)+Math.pow(n[2],2)+Math.pow(n[3],2)+Math.pow(n[4],2)+Math.pow(n[5],2)+Math.pow(n[6],2)+Math.pow(n[7],2)+Math.pow(n[8],2)+Math.pow(n[9],2)+Math.pow(n[10],2)+Math.pow(n[11],2)+Math.pow(n[12],2)+Math.pow(n[13],2)+Math.pow(n[14],2)+Math.pow(n[15],2))}function H(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n[3]=t[3]+r[3],n[4]=t[4]+r[4],n[5]=t[5]+r[5],n[6]=t[6]+r[6],n[7]=t[7]+r[7],n[8]=t[8]+r[8],n[9]=t[9]+r[9],n[10]=t[10]+r[10],n[11]=t[11]+r[11],n[12]=t[12]+r[12],n[13]=t[13]+r[13],n[14]=t[14]+r[14],n[15]=t[15]+r[15],n}function Z(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n[3]=t[3]-r[3],n[4]=t[4]-r[4],n[5]=t[5]-r[5],n[6]=t[6]-r[6],n[7]=t[7]-r[7],n[8]=t[8]-r[8],n[9]=t[9]-r[9],n[10]=t[10]-r[10],n[11]=t[11]-r[11],n[12]=t[12]-r[12],n[13]=t[13]-r[13],n[14]=t[14]-r[14],n[15]=t[15]-r[15],n}function K(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n[4]=t[4]*r,n[5]=t[5]*r,n[6]=t[6]*r,n[7]=t[7]*r,n[8]=t[8]*r,n[9]=t[9]*r,n[10]=t[10]*r,n[11]=t[11]*r,n[12]=t[12]*r,n[13]=t[13]*r,n[14]=t[14]*r,n[15]=t[15]*r,n}function J(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n[2]=t[2]+r[2]*u,n[3]=t[3]+r[3]*u,n[4]=t[4]+r[4]*u,n[5]=t[5]+r[5]*u,n[6]=t[6]+r[6]*u,n[7]=t[7]+r[7]*u,n[8]=t[8]+r[8]*u,n[9]=t[9]+r[9]*u,n[10]=t[10]+r[10]*u,n[11]=t[11]+r[11]*u,n[12]=t[12]+r[12]*u,n[13]=t[13]+r[13]*u,n[14]=t[14]+r[14]*u,n[15]=t[15]+r[15]*u,n}function $(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]&&n[3]===t[3]&&n[4]===t[4]&&n[5]===t[5]&&n[6]===t[6]&&n[7]===t[7]&&n[8]===t[8]&&n[9]===t[9]&&n[10]===t[10]&&n[11]===t[11]&&n[12]===t[12]&&n[13]===t[13]&&n[14]===t[14]&&n[15]===t[15]}function nn(n,t){var r=n[0],u=n[1],e=n[2],a=n[3],o=n[4],c=n[5],f=n[6],h=n[7],s=n[8],d=n[9],M=n[10],l=n[11],v=n[12],m=n[13],b=n[14],p=n[15],g=t[0],w=t[1],x=t[2],y=t[3],q=t[4],_=t[5],A=t[6],S=t[7],P=t[8],T=t[9],I=t[10],R=t[11],E=t[12],L=t[13],F=t[14],O=t[15];return Math.abs(r-g)<=i*Math.max(1,Math.abs(r),Math.abs(g))&&Math.abs(u-w)<=i*Math.max(1,Math.abs(u),Math.abs(w))&&Math.abs(e-x)<=i*Math.max(1,Math.abs(e),Math.abs(x))&&Math.abs(a-y)<=i*Math.max(1,Math.abs(a),Math.abs(y))&&Math.abs(o-q)<=i*Math.max(1,Math.abs(o),Math.abs(q))&&Math.abs(c-_)<=i*Math.max(1,Math.abs(c),Math.abs(_))&&Math.abs(f-A)<=i*Math.max(1,Math.abs(f),Math.abs(A))&&Math.abs(h-S)<=i*Math.max(1,Math.abs(h),Math.abs(S))&&Math.abs(s-P)<=i*Math.max(1,Math.abs(s),Math.abs(P))&&Math.abs(d-T)<=i*Math.max(1,Math.abs(d),Math.abs(T))&&Math.abs(M-I)<=i*Math.max(1,Math.abs(M),Math.abs(I))&&Math.abs(l-R)<=i*Math.max(1,Math.abs(l),Math.abs(R))&&Math.abs(v-E)<=i*Math.max(1,Math.abs(v),Math.abs(E))&&Math.abs(m-L)<=i*Math.max(1,Math.abs(m),Math.abs(L))&&Math.abs(b-F)<=i*Math.max(1,Math.abs(b),Math.abs(F))&&Math.abs(p-O)<=i*Math.max(1,Math.abs(p),Math.abs(O))}var tn=w,rn=Z;function un(){var n=new c(2);return c!=Float32Array&&(n[0]=0,n[1]=0),n}function en(n){var t=new c(2);return t[0]=n[0],t[1]=n[1],t}function an(n,t){var r=new c(2);return r[0]=n,r[1]=t,r}function on(n,t){return n[0]=t[0],n[1]=t[1],n}function cn(n,t,r){return n[0]=t,n[1]=r,n}function fn(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n}function hn(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n}function sn(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n}function dn(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n}function Mn(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n}function ln(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n}function vn(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n}function mn(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n}function bn(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n}function pn(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n}function gn(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n}function wn(n,t){var r=t[0]-n[0],u=t[1]-n[1];return Math.sqrt(r*r+u*u)}function xn(n,t){var r=t[0]-n[0],u=t[1]-n[1];return r*r+u*u}function yn(n){var t=n[0],r=n[1];return Math.sqrt(t*t+r*r)}function qn(n){var t=n[0],r=n[1];return t*t+r*r}function _n(n,t){return n[0]=-t[0],n[1]=-t[1],n}function An(n,t){return n[0]=1/t[0],n[1]=1/t[1],n}function Sn(n,t){var r=t[0],u=t[1],e=r*r+u*u;return e>0&&(e=1/Math.sqrt(e)),n[0]=t[0]*e,n[1]=t[1]*e,n}function Pn(n,t){return n[0]*t[0]+n[1]*t[1]}function Tn(n,t,r){var u=t[0]*r[1]-t[1]*r[0];return n[0]=n[1]=0,n[2]=u,n}function In(n,t,r,u){var e=t[0],a=t[1];return n[0]=e+u*(r[0]-e),n[1]=a+u*(r[1]-a),n}function Rn(n,t){t=t||1;var r=2*f()*Math.PI;return n[0]=Math.cos(r)*t,n[1]=Math.sin(r)*t,n}function En(n,t,r){var u=t[0],e=t[1];return n[0]=r[0]*u+r[2]*e,n[1]=r[1]*u+r[3]*e,n}function Ln(n,t,r){var u=t[0],e=t[1];return n[0]=r[0]*u+r[2]*e+r[4],n[1]=r[1]*u+r[3]*e+r[5],n}function Fn(n,t,r){var u=t[0],e=t[1];return n[0]=r[0]*u+r[3]*e+r[6],n[1]=r[1]*u+r[4]*e+r[7],n}function On(n,t,r){var u=t[0],e=t[1];return n[0]=r[0]*u+r[4]*e+r[12],n[1]=r[1]*u+r[5]*e+r[13],n}function kn(n,t,r,u){var e=t[0]-r[0],a=t[1]-r[1],o=Math.sin(u),i=Math.cos(u);return n[0]=e*i-a*o+r[0],n[1]=e*o+a*i+r[1],n}function Dn(n,t){var r=n[0],u=n[1],e=t[0],a=t[1],o=r*r+u*u;o>0&&(o=1/Math.sqrt(o));var i=e*e+a*a;i>0&&(i=1/Math.sqrt(i));var c=(r*e+u*a)*o*i;return c>1?0:c<-1?Math.PI:Math.acos(c)}function Vn(n){return n[0]=0,n[1]=0,n}function jn(n){return"vec2("+n[0]+", "+n[1]+")"}function Cn(n,t){return n[0]===t[0]&&n[1]===t[1]}function zn(n,t){var r=n[0],u=n[1],e=t[0],a=t[1];return Math.abs(r-e)<=i*Math.max(1,Math.abs(r),Math.abs(e))&&Math.abs(u-a)<=i*Math.max(1,Math.abs(u),Math.abs(a))}var Un,Bn=yn,Gn=hn,Wn=sn,Yn=dn,Nn=wn,Qn=xn,Xn=qn,Hn=(Un=un(),function(n,t,r,u,e,a){var o,i;for(t||(t=2),r||(r=0),i=u?Math.min(u*t+r,n.length):n.length,o=r;o<i;o+=t)Un[0]=n[o],Un[1]=n[o+1],e(Un,Un,a),n[o]=Un[0],n[o+1]=Un[1];return n});function Zn(){var n=new c(3);return c!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function Kn(n){var t=new c(3);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function Jn(n){var t=n[0],r=n[1],u=n[2];return Math.sqrt(t*t+r*r+u*u)}function $n(n,t,r){var u=new c(3);return u[0]=n,u[1]=t,u[2]=r,u}function nt(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function tt(n,t,r,u){return n[0]=t,n[1]=r,n[2]=u,n}function rt(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n}function ut(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n}function et(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n[2]=t[2]*r[2],n}function at(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n[2]=t[2]/r[2],n}function ot(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n[2]=Math.ceil(t[2]),n}function it(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n[2]=Math.floor(t[2]),n}function ct(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n[2]=Math.min(t[2],r[2]),n}function ft(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n[2]=Math.max(t[2],r[2]),n}function ht(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n[2]=Math.round(t[2]),n}function st(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n}function dt(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n[2]=t[2]+r[2]*u,n}function Mt(n,t){var r=t[0]-n[0],u=t[1]-n[1],e=t[2]-n[2];return Math.sqrt(r*r+u*u+e*e)}function lt(n,t){var r=t[0]-n[0],u=t[1]-n[1],e=t[2]-n[2];return r*r+u*u+e*e}function vt(n){var t=n[0],r=n[1],u=n[2];return t*t+r*r+u*u}function mt(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n}function bt(n,t){return n[0]=1/t[0],n[1]=1/t[1],n[2]=1/t[2],n}function pt(n,t){var r=t[0],u=t[1],e=t[2],a=r*r+u*u+e*e;return a>0&&(a=1/Math.sqrt(a)),n[0]=t[0]*a,n[1]=t[1]*a,n[2]=t[2]*a,n}function gt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function wt(n,t,r){var u=t[0],e=t[1],a=t[2],o=r[0],i=r[1],c=r[2];return n[0]=e*c-a*i,n[1]=a*o-u*c,n[2]=u*i-e*o,n}function xt(n,t,r,u){var e=t[0],a=t[1],o=t[2];return n[0]=e+u*(r[0]-e),n[1]=a+u*(r[1]-a),n[2]=o+u*(r[2]-o),n}function yt(n,t,r,u,e,a){var o=a*a,i=o*(2*a-3)+1,c=o*(a-2)+a,f=o*(a-1),h=o*(3-2*a);return n[0]=t[0]*i+r[0]*c+u[0]*f+e[0]*h,n[1]=t[1]*i+r[1]*c+u[1]*f+e[1]*h,n[2]=t[2]*i+r[2]*c+u[2]*f+e[2]*h,n}function qt(n,t,r,u,e,a){var o=1-a,i=o*o,c=a*a,f=i*o,h=3*a*i,s=3*c*o,d=c*a;return n[0]=t[0]*f+r[0]*h+u[0]*s+e[0]*d,n[1]=t[1]*f+r[1]*h+u[1]*s+e[1]*d,n[2]=t[2]*f+r[2]*h+u[2]*s+e[2]*d,n}function _t(n,t){t=t||1;var r=2*f()*Math.PI,u=2*f()-1,e=Math.sqrt(1-u*u)*t;return n[0]=Math.cos(r)*e,n[1]=Math.sin(r)*e,n[2]=u*t,n}function At(n,t,r){var u=t[0],e=t[1],a=t[2],o=r[3]*u+r[7]*e+r[11]*a+r[15];return o=o||1,n[0]=(r[0]*u+r[4]*e+r[8]*a+r[12])/o,n[1]=(r[1]*u+r[5]*e+r[9]*a+r[13])/o,n[2]=(r[2]*u+r[6]*e+r[10]*a+r[14])/o,n}function St(n,t,r){var u=t[0],e=t[1],a=t[2];return n[0]=u*r[0]+e*r[3]+a*r[6],n[1]=u*r[1]+e*r[4]+a*r[7],n[2]=u*r[2]+e*r[5]+a*r[8],n}function Pt(n,t,r){var u=r[0],e=r[1],a=r[2],o=r[3],i=t[0],c=t[1],f=t[2],h=e*f-a*c,s=a*i-u*f,d=u*c-e*i,M=e*d-a*s,l=a*h-u*d,v=u*s-e*h,m=2*o;return h*=m,s*=m,d*=m,M*=2,l*=2,v*=2,n[0]=i+h+M,n[1]=c+s+l,n[2]=f+d+v,n}function Tt(n,t,r,u){var e=[],a=[];return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],a[0]=e[0],a[1]=e[1]*Math.cos(u)-e[2]*Math.sin(u),a[2]=e[1]*Math.sin(u)+e[2]*Math.cos(u),n[0]=a[0]+r[0],n[1]=a[1]+r[1],n[2]=a[2]+r[2],n}function It(n,t,r,u){var e=[],a=[];return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],a[0]=e[2]*Math.sin(u)+e[0]*Math.cos(u),a[1]=e[1],a[2]=e[2]*Math.cos(u)-e[0]*Math.sin(u),n[0]=a[0]+r[0],n[1]=a[1]+r[1],n[2]=a[2]+r[2],n}function Rt(n,t,r,u){var e=[],a=[];return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],a[0]=e[0]*Math.cos(u)-e[1]*Math.sin(u),a[1]=e[0]*Math.sin(u)+e[1]*Math.cos(u),a[2]=e[2],n[0]=a[0]+r[0],n[1]=a[1]+r[1],n[2]=a[2]+r[2],n}function Et(n,t){var r=$n(n[0],n[1],n[2]),u=$n(t[0],t[1],t[2]);pt(r,r),pt(u,u);var e=gt(r,u);return e>1?0:e<-1?Math.PI:Math.acos(e)}function Lt(n){return n[0]=0,n[1]=0,n[2]=0,n}function Ft(n){return"vec3("+n[0]+", "+n[1]+", "+n[2]+")"}function Ot(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]}function kt(n,t){var r=n[0],u=n[1],e=n[2],a=t[0],o=t[1],c=t[2];return Math.abs(r-a)<=i*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(u-o)<=i*Math.max(1,Math.abs(u),Math.abs(o))&&Math.abs(e-c)<=i*Math.max(1,Math.abs(e),Math.abs(c))}var Dt=ut,Vt=et,jt=at,Ct=Mt,zt=lt,Ut=Jn,Bt=vt,Gt=function(){var n=Zn();return function(t,r,u,e,a,o){var i,c;for(r||(r=3),u||(u=0),c=e?Math.min(e*r+u,t.length):t.length,i=u;i<c;i+=r)n[0]=t[i],n[1]=t[i+1],n[2]=t[i+2],a(n,n,o),t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2];return t}}();function Wt(){var n=new c(4);return c!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0,n[3]=0),n}function Yt(n){var t=new c(4);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function Nt(n,t,r,u){var e=new c(4);return e[0]=n,e[1]=t,e[2]=r,e[3]=u,e}function Qt(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function Xt(n,t,r,u,e){return n[0]=t,n[1]=r,n[2]=u,n[3]=e,n}function Ht(n,t,r){return n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n[3]=t[3]+r[3],n}function Zt(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n[3]=t[3]-r[3],n}function Kt(n,t,r){return n[0]=t[0]*r[0],n[1]=t[1]*r[1],n[2]=t[2]*r[2],n[3]=t[3]*r[3],n}function Jt(n,t,r){return n[0]=t[0]/r[0],n[1]=t[1]/r[1],n[2]=t[2]/r[2],n[3]=t[3]/r[3],n}function $t(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n[2]=Math.ceil(t[2]),n[3]=Math.ceil(t[3]),n}function nr(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n[2]=Math.floor(t[2]),n[3]=Math.floor(t[3]),n}function tr(n,t,r){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n[2]=Math.min(t[2],r[2]),n[3]=Math.min(t[3],r[3]),n}function rr(n,t,r){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n[2]=Math.max(t[2],r[2]),n[3]=Math.max(t[3],r[3]),n}function ur(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n[2]=Math.round(t[2]),n[3]=Math.round(t[3]),n}function er(n,t,r){return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n}function ar(n,t,r,u){return n[0]=t[0]+r[0]*u,n[1]=t[1]+r[1]*u,n[2]=t[2]+r[2]*u,n[3]=t[3]+r[3]*u,n}function or(n,t){var r=t[0]-n[0],u=t[1]-n[1],e=t[2]-n[2],a=t[3]-n[3];return Math.sqrt(r*r+u*u+e*e+a*a)}function ir(n,t){var r=t[0]-n[0],u=t[1]-n[1],e=t[2]-n[2],a=t[3]-n[3];return r*r+u*u+e*e+a*a}function cr(n){var t=n[0],r=n[1],u=n[2],e=n[3];return Math.sqrt(t*t+r*r+u*u+e*e)}function fr(n){var t=n[0],r=n[1],u=n[2],e=n[3];return t*t+r*r+u*u+e*e}function hr(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n}function sr(n,t){return n[0]=1/t[0],n[1]=1/t[1],n[2]=1/t[2],n[3]=1/t[3],n}function dr(n,t){var r=t[0],u=t[1],e=t[2],a=t[3],o=r*r+u*u+e*e+a*a;return o>0&&(o=1/Math.sqrt(o)),n[0]=r*o,n[1]=u*o,n[2]=e*o,n[3]=a*o,n}function Mr(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function lr(n,t,r,u){var e=r[0]*u[1]-r[1]*u[0],a=r[0]*u[2]-r[2]*u[0],o=r[0]*u[3]-r[3]*u[0],i=r[1]*u[2]-r[2]*u[1],c=r[1]*u[3]-r[3]*u[1],f=r[2]*u[3]-r[3]*u[2],h=t[0],s=t[1],d=t[2],M=t[3];return n[0]=s*f-d*c+M*i,n[1]=-h*f+d*o-M*a,n[2]=h*c-s*o+M*e,n[3]=-h*i+s*a-d*e,n}function vr(n,t,r,u){var e=t[0],a=t[1],o=t[2],i=t[3];return n[0]=e+u*(r[0]-e),n[1]=a+u*(r[1]-a),n[2]=o+u*(r[2]-o),n[3]=i+u*(r[3]-i),n}function mr(n,t){var r,u,e,a,o,i;t=t||1;do{o=(r=2*f()-1)*r+(u=2*f()-1)*u}while(o>=1);do{i=(e=2*f()-1)*e+(a=2*f()-1)*a}while(i>=1);var c=Math.sqrt((1-o)/i);return n[0]=t*r,n[1]=t*u,n[2]=t*e*c,n[3]=t*a*c,n}function br(n,t,r){var u=t[0],e=t[1],a=t[2],o=t[3];return n[0]=r[0]*u+r[4]*e+r[8]*a+r[12]*o,n[1]=r[1]*u+r[5]*e+r[9]*a+r[13]*o,n[2]=r[2]*u+r[6]*e+r[10]*a+r[14]*o,n[3]=r[3]*u+r[7]*e+r[11]*a+r[15]*o,n}function pr(n,t,r){var u=t[0],e=t[1],a=t[2],o=r[0],i=r[1],c=r[2],f=r[3],h=f*u+i*a-c*e,s=f*e+c*u-o*a,d=f*a+o*e-i*u,M=-o*u-i*e-c*a;return n[0]=h*f+M*-o+s*-c-d*-i,n[1]=s*f+M*-i+d*-o-h*-c,n[2]=d*f+M*-c+h*-i-s*-o,n[3]=t[3],n}function gr(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=0,n}function wr(n){return"vec4("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}function xr(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]&&n[3]===t[3]}function yr(n,t){var r=n[0],u=n[1],e=n[2],a=n[3],o=t[0],c=t[1],f=t[2],h=t[3];return Math.abs(r-o)<=i*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(u-c)<=i*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(e-f)<=i*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(a-h)<=i*Math.max(1,Math.abs(a),Math.abs(h))}var qr=Zt,_r=Kt,Ar=Jt,Sr=or,Pr=ir,Tr=cr,Ir=fr,Rr=function(){var n=Wt();return function(t,r,u,e,a,o){var i,c;for(r||(r=4),u||(u=0),c=e?Math.min(e*r+u,t.length):t.length,i=u;i<c;i+=r)n[0]=t[i],n[1]=t[i+1],n[2]=t[i+2],n[3]=t[i+3],a(n,n,o),t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3];return t}}();r.d(t,"a",function(){return u}),r.d(t,"b",function(){return e}),r.d(t,"c",function(){return a}),r.d(t,"d",function(){return o})},1:function(n,t,r){"use strict";r.d(t,"d",function(){return o}),r.d(t,"a",function(){return i}),r.d(t,"c",function(){return c}),r.d(t,"b",function(){return h});var u=r(0);var e='This page requires a browser that supports WebGL.<br/>\n<a href="http://get.webgl.org">Click here to upgrade your browser.</a>',a='It doesn\'t appear your computer can support WebGL.<br/>\n<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>';function o(n,t){function r(t){var r=n.parentNode;r&&(r.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>\n    <td align="center">\n    <div style="display: table-cell; vertical-align: middle;">\n    <div>'.concat(t,"</div>\n    </div>\n    </td></tr></table>"))}if(!window.WebGLRenderingContext)return r(e),null;var u=function(n,t){for(var r=["webgl","experimental-webgl","webkit-3d","moz-webgl"],u=null,e=0;e<r.length;++e){try{u=n.getContext(r[e],t)}catch(n){}if(u)break}return u}(n,t);return u||r(a),u}function i(n,t,r){var u=n.createShader(n.VERTEX_SHADER);if(n.shaderSource(u,t),n.compileShader(u),!n.getShaderParameter(u,n.COMPILE_STATUS)){var e="Vertex shader failed to compile.  The error log is:".concat(n.getShaderInfoLog(u));return console.error(e),-1}var a=n.createShader(n.FRAGMENT_SHADER);if(n.shaderSource(a,r),n.compileShader(a),!n.getShaderParameter(a,n.COMPILE_STATUS)){var o="Fragment shader failed to compile.  The error log is:".concat(n.getShaderInfoLog(a));return console.error(o),-1}var i=n.createProgram();if(n.attachShader(i,u),n.attachShader(i,a),n.linkProgram(i),!n.getProgramParameter(i,n.LINK_STATUS)){var c="Shader program failed to link.  The error log is:".concat(n.getProgramInfoLog(i));return console.error(c),-1}return i}function c(n){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Float32Array,r=n[0].length,u=n.length,e=new t(r*u),a=0,o=0;o<u;o++)for(var i=0;i<r;i++)e[a++]=n[o][i];return e}var f={fv3:{},fv4:{},uv3:{},uv4:{}};function h(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fv4";if(f[t][n])return f[t][n];var r,e=parseInt(n.charAt(1)+n.charAt(2),16),a=parseInt(n.charAt(3)+n.charAt(4),16),o=parseInt(n.charAt(5)+n.charAt(6),16);return r="fv3"===t?u.c.fromValues(e/255,a/255,o/255):"fv4"===t?u.d.fromValues(e/255,a/255,o/255,1):"uv3"===t?new Uint8Array([e,a,o]):new Uint8Array([e,a,o,255]),f[t][n]=r,f[t][n]}},13:function(n,t){n.exports=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},14:function(n,t){function r(n,t){for(var r=0;r<t.length;r++){var u=t[r];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(n,u.key,u)}}n.exports=function(n,t,u){return t&&r(n.prototype,t),u&&r(n,u),n}},25:function(n,t){n.exports="attribute vec4 vPosition;\nvoid main() {\n\tgl_PointSize = 1.0;\n\tgl_Position = vPosition;\n}\n"},26:function(n,t){n.exports="precision mediump float;\nvoid main() {\n\tgl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n}\n"},69:function(n,t,r){"use strict";r.r(t);for(var u=r(13),e=r.n(u),a=r(14),o=r.n(a),i=r(1),c=r(0),f=r(25),h=r.n(f),s=r(26),d=r.n(s),M=new(function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;e()(this,n),this.theta=u,this.x=t,this.y=r,this._penStatus="down",this._points=[[c.b.fromValues(t,r)]],this._initGl(),this._timer=null}return o()(n,[{key:"forward",value:function(n){var t=this;if(this.x+=n*Math.cos(Math.PI*this.theta/180),this.y+=n*Math.sin(Math.PI*this.theta/180),"down"===this._penStatus){var r=this._points;r[r.length-1].push(c.b.fromValues(this.x,this.y)),clearTimeout(this._timer),this._timer=setTimeout(function(){t._render()})}}},{key:"right",value:function(n){this.theta+=-1*n}},{key:"left",value:function(n){this.theta+=n}},{key:"pen",value:function(n){if(this._penStatus=n,"up"===n&&0!==this._points[this._points.length-1].length)this._points.push([]);else if("down"===n){this._points[this._points.length-1][0]=c.b.fromValues(this.x,this.y)}}},{key:"_initGl",value:function(){var n=document.getElementById("gl-canvas"),t=Object(i.d)(n);t||console.error("WebGL isn't available"),t.viewport(0,0,n.width,n.height),t.clearColor(1,1,1,1);var r=Object(i.a)(t,h.a,d.a);t.useProgram(r),this._gl=t,this._program=r}},{key:"_render",value:function(){var n=this._gl;n.clear(n.COLOR_BUFFER_BIT);for(var t=n.getAttribLocation(this._program,"vPosition"),r=0;r<this._points.length;r++){var u=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,u),n.bufferData(n.ARRAY_BUFFER,Object(i.c)(this._points[r]),n.STATIC_DRAW),n.vertexAttribPointer(t,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(t),n.drawArrays(n.LINE_STRIP,0,this._points[r].length)}}}]),n}()),l=0;l<1080;l+=5){M.theta=l;for(var v=0;v<4;v++)M.forward(1/360/5*l),M.right(90)}}});