System.register(["./index-legacy-D7ENu4km.js"],(function(t,e){"use strict";var n,r,i;return{setters:[t=>{n=t.as,r=t.au,i=t.av}],execute:function(){var e=function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function c(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?n(t.value):i(t.value).then(a,c)}u((r=r.apply(t,e||[])).next())}))},o=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(t){return function(e){return u([t,e])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){a.label=c[1];break}if(6===c[0]&&a.label<i[1]){a.label=i[1],i=c;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(c);break}i[2]&&a.ops.pop(),a.trys.pop();continue}c=e.call(t,a)}catch(t){c=[6,t],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};t("pwa_camera_modal",function(){function t(t){r(this,t),this.onPhoto=i(this,"onPhoto",7),this.noDeviceError=i(this,"noDeviceError",7),this.facingMode="user",this.hidePicker=!1}return t.prototype.present=function(){return e(this,void 0,void 0,(function(){var t,n=this;return o(this,(function(r){return(t=document.createElement("pwa-camera-modal-instance")).facingMode=this.facingMode,t.hidePicker=this.hidePicker,t.addEventListener("onPhoto",(function(t){return e(n,void 0,void 0,(function(){var e;return o(this,(function(n){return this._modal?(e=t.detail,this.onPhoto.emit(e),[2]):[2]}))}))})),t.addEventListener("noDeviceError",(function(t){return e(n,void 0,void 0,(function(){return o(this,(function(e){return this.noDeviceError.emit(t),[2]}))}))})),document.body.append(t),this._modal=t,[2]}))}))},t.prototype.dismiss=function(){return e(this,void 0,void 0,(function(){return o(this,(function(t){return this._modal?(this._modal&&this._modal.parentNode.removeChild(this._modal),this._modal=null,[2]):[2]}))}))},t.prototype.render=function(){return n("div",null)},t}()).style=":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:600px;height:600px}"}}}));
