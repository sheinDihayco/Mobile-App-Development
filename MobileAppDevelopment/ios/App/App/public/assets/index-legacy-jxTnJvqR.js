System.register(["./index-legacy-XBgqorLW.js","./index-legacy-bWGLu6PL.js"],(function(e,t){"use strict";var a,n,o,l,r,s,u,c,i,d,m,f,b,v,y,p,g,h,k,I,w,_,x,j,C;return{setters:[e=>{a=e.a5,n=e.d,o=e.k,l=e.l,r=e.I,s=e.a,u=e.b,c=e.c,i=e.e,d=e.y,m=e.z,f=e.A,b=e.B,v=e.C,y=e._,p=e.g,g=e.w,h=e.r,k=e.o,I=e.h,w=e.i,_=e.j,x=e.a6,j=e.a7},e=>{C=e.r}],execute:function(){var S=document.createElement("style");S.textContent=".banner[data-v-4e28d574]{width:100vw;height:260px;object-fit:cover;object-position:center}\n",document.head.appendChild(S);const B=C("Preferences",{web:()=>a((()=>t.import("./web-legacy-D-RSdifL.js")),void 0).then((e=>new e.PreferencesWeb))}),D=n({name:"localstorageScreen",components:{IonBackButton:o,IonButtons:l,IonToolbar:r,IonTitle:s,IonHeader:u,IonPage:c,IonContent:i,IonIcon:d,IonRouterOutlet:m},data:()=>({form:{key:"",value:""}}),methods:{async save(){await B.set({key:this.form.key,value:this.form.value})},async getData(){const e=await B.get({key:this.form.key});e.value&&(this.form.value=e.value)}},setup:()=>({menu:f,home:b,person:v})}),P={class:"p-3"},V={class:"mb-3"},T={class:"mb-3"};e("default",y(D,[["render",function(e,t,a,n,o,l){const r=h("ion-back-button"),s=h("ion-buttons"),u=h("ion-title"),c=h("ion-toolbar"),i=h("ion-header"),d=h("ion-content"),m=h("ion-page");return k(),p(m,null,{default:g((()=>[I(i,null,{default:g((()=>[I(c,null,{default:g((()=>[I(s,{slot:"start"},{default:g((()=>[I(r)])),_:1}),I(u,null,{default:g((()=>t[4]||(t[4]=[w(" Local Storage ")]))),_:1})])),_:1})])),_:1}),I(d,null,{default:g((()=>[_("div",P,[_("div",V,[t[5]||(t[5]=_("label",{class:"form-label"},"Key name ",-1)),x(_("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.key=t),type:"text",class:"form-control"},null,512),[[j,e.form.key]])]),_("div",T,[t[6]||(t[6]=_("label",{class:"form-label"},"Value",-1)),x(_("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.value=t),type:"text",class:"form-control"},null,512),[[j,e.form.value]])]),_("button",{class:"btn btn-primary w-100",onClick:t[2]||(t[2]=t=>e.save())}," Save Storage "),_("button",{class:"btn btn-primary w-100 mt-3",onClick:t[3]||(t[3]=t=>e.getData())}," Get Data ")])])),_:1})])),_:1})}],["__scopeId","data-v-4e28d574"]]))}}}));
