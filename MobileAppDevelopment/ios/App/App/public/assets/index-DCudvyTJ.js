const __vite__fileDeps=["assets/web-CihXkCud.js","assets/index-Cwenx0lJ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a5 as v,d as y,k,l as I,I as g,a as w,b as B,c as C,e as P,y as V,z as $,A as D,B as T,C as S,_ as x,g as N,w as a,r as n,o as h,h as s,i as A,j as t,a6 as r,a7 as i}from"./index-BdJ-Jja0.js";import{r as E}from"./index-Cwenx0lJ.js";const u=E("Preferences",{web:()=>v(()=>import("./web-CihXkCud.js"),__vite__mapDeps([0,1])).then(e=>new e.PreferencesWeb)}),L=y({name:"localstorageScreen",components:{IonBackButton:k,IonButtons:I,IonToolbar:g,IonTitle:w,IonHeader:B,IonPage:C,IonContent:P,IonIcon:V,IonRouterOutlet:$},data(){return{form:{key:"",value:""}}},methods:{async save(){await u.set({key:this.form.key,value:this.form.value})},async getData(){const e=await u.get({key:this.form.key});e.value&&(this.form.value=e.value)}},setup(){return{menu:D,home:T,person:S}}}),O={class:"p-3"},R={class:"mb-3"},U={class:"mb-3"};function j(e,o,z,G,H,K){const m=n("ion-back-button"),d=n("ion-buttons"),p=n("ion-title"),c=n("ion-toolbar"),_=n("ion-header"),f=n("ion-content"),b=n("ion-page");return h(),N(b,null,{default:a(()=>[s(_,null,{default:a(()=>[s(c,{color:"primary"},{default:a(()=>[s(d,{slot:"start"},{default:a(()=>[s(m)]),_:1}),s(p,null,{default:a(()=>o[4]||(o[4]=[A(" Local Storage ")])),_:1})]),_:1})]),_:1}),s(f,null,{default:a(()=>[t("div",O,[t("div",R,[o[5]||(o[5]=t("label",{class:"form-label"},"Key name ",-1)),r(t("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.form.key=l),type:"text",class:"form-control"},null,512),[[i,e.form.key]])]),t("div",U,[o[6]||(o[6]=t("label",{class:"form-label"},"Value",-1)),r(t("input",{"onUpdate:modelValue":o[1]||(o[1]=l=>e.form.value=l),type:"text",class:"form-control"},null,512),[[i,e.form.value]])]),t("button",{class:"btn btn-primary w-100",onClick:o[2]||(o[2]=l=>e.save())}," Save Storage "),t("button",{class:"btn btn-primary w-100 mt-3",onClick:o[3]||(o[3]=l=>e.getData())}," Get Data ")])]),_:1})]),_:1})}const q=x(L,[["render",j],["__scopeId","data-v-0217db90"]]);export{q as default};