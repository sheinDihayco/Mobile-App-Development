System.register(["./index-legacy-D7ENu4km.js","./index-legacy-bWGLu6PL.js"],(function(e,t){"use strict";var i,n,s,r,o,a,d,l,c,h,u,C,L,m,v,k,g,y,w,M,p,b,f,I;return{setters:[e=>{i=e.a5,n=e.d,s=e.k,r=e.l,o=e.I,a=e.a,d=e.b,l=e.c,c=e.e,h=e.y,u=e.z,C=e.A,L=e.B,m=e.C,v=e._,k=e.g,g=e.w,y=e.r,w=e.o,M=e.h,p=e.i,b=e.j},e=>{f=e.r,I=e.C}],execute:function(){var B=document.createElement("style");B.textContent="#map[data-v-0fd15e3e]{display:inline-block;width:100vw;height:100vh}\n",document.head.appendChild(B);const E=f("CapacitorGoogleMaps",{web:()=>i((()=>t.import("./web-legacy-CLFYzCwf.js")),void 0).then((e=>new e.CapacitorGoogleMapsWeb))});E.addListener("isMapInFocus",(e=>{var t;const i=e.x,n=e.y,s=document.elementFromPoint(i,n),r=(null===(t=null==s?void 0:s.dataset)||void 0===t?void 0:t.internalId)===e.mapId;E.dispatchMapEvent({id:e.mapId,focus:r})}));class P{constructor(e){this.southwest=e.southwest,this.center=e.center,this.northeast=e.northeast}async contains(e){return(await E.mapBoundsContains({bounds:this,point:e})).contains}async extend(e){const t=await E.mapBoundsExtend({bounds:this,point:e});return this.southwest=t.bounds.southwest,this.center=t.bounds.center,this.northeast=t.bounds.northeast,this}}var S;e("L",P),e("M",S),function(e){e.Normal="Normal",e.Hybrid="Hybrid",e.Satellite="Satellite",e.Terrain="Terrain",e.None="None"}(S||e("M",S={}));class D extends HTMLElement{constructor(){super()}connectedCallback(){if(this.innerHTML="","ios"==I.getPlatform()){this.style.overflow="scroll",this.style["-webkit-overflow-scrolling"]="touch";const e=document.createElement("div");e.style.height="200%",this.appendChild(e)}}}customElements.define("capacitor-google-map",D);class T{constructor(e){this.element=null,this.resizeObserver=null,this.handleScrollEvent=()=>this.updateMapBounds(),this.id=e}static async create(e,t){const i=new T(e.id);if(!e.element)throw new Error("container element is required");void 0===e.config.androidLiteMode&&(e.config.androidLiteMode=!1),i.element=e.element,i.element.dataset.internalId=e.id;const n=await T.getElementBounds(e.element);if(e.config.width=n.width,e.config.height=n.height,e.config.x=n.x,e.config.y=n.y,e.config.devicePixelRatio=window.devicePixelRatio,"android"==I.getPlatform()&&i.initScrolling(),I.isNativePlatform()){e.element={};const t=()=>{var e,t;const n=null!==(t=null===(e=i.element)||void 0===e?void 0:e.getBoundingClientRect())&&void 0!==t?t:{};return{x:n.x,y:n.y,width:n.width,height:n.height}},s=()=>{E.onDisplay({id:i.id,mapBounds:t()})},r=()=>{E.onResize({id:i.id,mapBounds:t()})},o=i.element.closest(".ion-page");"ios"===I.getPlatform()&&o&&(o.addEventListener("ionViewWillEnter",(()=>{setTimeout((()=>{s()}),100)})),o.addEventListener("ionViewDidEnter",(()=>{setTimeout((()=>{s()}),100)})));const a={width:n.width,height:n.height,isHidden:!1};i.resizeObserver=new ResizeObserver((()=>{if(null!=i.element){const e=i.element.getBoundingClientRect(),t=0===e.width&&0===e.height;t||(a.isHidden?"ios"!==I.getPlatform()||o||s():a.width===e.width&&a.height===e.height||r()),a.width=e.width,a.height=e.height,a.isHidden=t}})),i.resizeObserver.observe(i.element)}if(await new Promise(((t,i)=>{setTimeout((async()=>{try{await E.create(e),t(void 0)}catch(n){i(n)}}),200)})),t){const e=await E.addListener("onMapReady",(n=>{n.mapId==i.id&&(t(n),e.remove())}))}return i}static async getElementBounds(e){return new Promise((t=>{let i=e.getBoundingClientRect();if(0==i.width){let n=0;const s=setInterval((function(){0==i.width&&n<30?(i=e.getBoundingClientRect(),n++):(30==n&&console.warn("Map size could not be determined"),clearInterval(s),t(i))}),100)}else t(i)}))}async enableTouch(){return E.enableTouch({id:this.id})}async disableTouch(){return E.disableTouch({id:this.id})}async enableClustering(e){return E.enableClustering({id:this.id,minClusterSize:e})}async disableClustering(){return E.disableClustering({id:this.id})}async addMarker(e){return(await E.addMarker({id:this.id,marker:e})).id}async addMarkers(e){return(await E.addMarkers({id:this.id,markers:e})).ids}async removeMarker(e){return E.removeMarker({id:this.id,markerId:e})}async removeMarkers(e){return E.removeMarkers({id:this.id,markerIds:e})}async addPolygons(e){return(await E.addPolygons({id:this.id,polygons:e})).ids}async addPolylines(e){return(await E.addPolylines({id:this.id,polylines:e})).ids}async removePolygons(e){return E.removePolygons({id:this.id,polygonIds:e})}async addCircles(e){return(await E.addCircles({id:this.id,circles:e})).ids}async removeCircles(e){return E.removeCircles({id:this.id,circleIds:e})}async removePolylines(e){return E.removePolylines({id:this.id,polylineIds:e})}async destroy(){var e;return"android"==I.getPlatform()&&this.disableScrolling(),I.isNativePlatform()&&(null===(e=this.resizeObserver)||void 0===e||e.disconnect()),this.removeAllMapListeners(),E.destroy({id:this.id})}async setCamera(e){return E.setCamera({id:this.id,config:e})}async getMapType(){const{type:e}=await E.getMapType({id:this.id});return S[e]}async setMapType(e){return E.setMapType({id:this.id,mapType:e})}async enableIndoorMaps(e){return E.enableIndoorMaps({id:this.id,enabled:e})}async enableTrafficLayer(e){return E.enableTrafficLayer({id:this.id,enabled:e})}async enableAccessibilityElements(e){return E.enableAccessibilityElements({id:this.id,enabled:e})}async enableCurrentLocation(e){return E.enableCurrentLocation({id:this.id,enabled:e})}async setPadding(e){return E.setPadding({id:this.id,padding:e})}async getMapBounds(){return new P(await E.getMapBounds({id:this.id}))}async fitBounds(e,t){return E.fitBounds({id:this.id,bounds:e,padding:t})}initScrolling(){const e=document.getElementsByTagName("ion-content");for(let t=0;t<e.length;t++)e[t].scrollEvents=!0;window.addEventListener("ionScroll",this.handleScrollEvent),window.addEventListener("scroll",this.handleScrollEvent),window.addEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.addEventListener("change",(()=>{setTimeout(this.updateMapBounds,500)})):window.addEventListener("orientationchange",(()=>{setTimeout(this.updateMapBounds,500)}))}disableScrolling(){window.removeEventListener("ionScroll",this.handleScrollEvent),window.removeEventListener("scroll",this.handleScrollEvent),window.removeEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.removeEventListener("change",(()=>{setTimeout(this.updateMapBounds,1e3)})):window.removeEventListener("orientationchange",(()=>{setTimeout(this.updateMapBounds,1e3)}))}updateMapBounds(){if(this.element){const e=this.element.getBoundingClientRect();E.onScroll({id:this.id,mapBounds:{x:e.x,y:e.y,width:e.width,height:e.height}})}}async setOnCameraIdleListener(e){this.onCameraIdleListener&&this.onCameraIdleListener.remove(),this.onCameraIdleListener=e?await E.addListener("onCameraIdle",this.generateCallback(e)):void 0}async setOnBoundsChangedListener(e){this.onBoundsChangedListener&&this.onBoundsChangedListener.remove(),this.onBoundsChangedListener=e?await E.addListener("onBoundsChanged",this.generateCallback(e)):void 0}async setOnCameraMoveStartedListener(e){this.onCameraMoveStartedListener&&this.onCameraMoveStartedListener.remove(),this.onCameraMoveStartedListener=e?await E.addListener("onCameraMoveStarted",this.generateCallback(e)):void 0}async setOnClusterClickListener(e){this.onClusterClickListener&&this.onClusterClickListener.remove(),this.onClusterClickListener=e?await E.addListener("onClusterClick",this.generateCallback(e)):void 0}async setOnClusterInfoWindowClickListener(e){this.onClusterInfoWindowClickListener&&this.onClusterInfoWindowClickListener.remove(),this.onClusterInfoWindowClickListener=e?await E.addListener("onClusterInfoWindowClick",this.generateCallback(e)):void 0}async setOnInfoWindowClickListener(e){this.onInfoWindowClickListener&&this.onInfoWindowClickListener.remove(),this.onInfoWindowClickListener=e?await E.addListener("onInfoWindowClick",this.generateCallback(e)):void 0}async setOnMapClickListener(e){this.onMapClickListener&&this.onMapClickListener.remove(),this.onMapClickListener=e?await E.addListener("onMapClick",this.generateCallback(e)):void 0}async setOnPolygonClickListener(e){this.onPolygonClickListener&&this.onPolygonClickListener.remove(),this.onPolygonClickListener=e?await E.addListener("onPolygonClick",this.generateCallback(e)):void 0}async setOnCircleClickListener(e){this.onCircleClickListener&&this.onCircleClickListener.remove(),this.onCircleClickListener=e?await E.addListener("onCircleClick",this.generateCallback(e)):void 0}async setOnMarkerClickListener(e){this.onMarkerClickListener&&this.onMarkerClickListener.remove(),this.onMarkerClickListener=e?await E.addListener("onMarkerClick",this.generateCallback(e)):void 0}async setOnPolylineClickListener(e){this.onPolylineClickListener&&this.onPolylineClickListener.remove(),this.onPolylineClickListener=e?await E.addListener("onPolylineClick",this.generateCallback(e)):void 0}async setOnMarkerDragStartListener(e){this.onMarkerDragStartListener&&this.onMarkerDragStartListener.remove(),this.onMarkerDragStartListener=e?await E.addListener("onMarkerDragStart",this.generateCallback(e)):void 0}async setOnMarkerDragListener(e){this.onMarkerDragListener&&this.onMarkerDragListener.remove(),this.onMarkerDragListener=e?await E.addListener("onMarkerDrag",this.generateCallback(e)):void 0}async setOnMarkerDragEndListener(e){this.onMarkerDragEndListener&&this.onMarkerDragEndListener.remove(),this.onMarkerDragEndListener=e?await E.addListener("onMarkerDragEnd",this.generateCallback(e)):void 0}async setOnMyLocationButtonClickListener(e){this.onMyLocationButtonClickListener&&this.onMyLocationButtonClickListener.remove(),this.onMyLocationButtonClickListener=e?await E.addListener("onMyLocationButtonClick",this.generateCallback(e)):void 0}async setOnMyLocationClickListener(e){this.onMyLocationClickListener&&this.onMyLocationClickListener.remove(),this.onMyLocationClickListener=e?await E.addListener("onMyLocationClick",this.generateCallback(e)):void 0}async removeAllMapListeners(){this.onBoundsChangedListener&&(this.onBoundsChangedListener.remove(),this.onBoundsChangedListener=void 0),this.onCameraIdleListener&&(this.onCameraIdleListener.remove(),this.onCameraIdleListener=void 0),this.onCameraMoveStartedListener&&(this.onCameraMoveStartedListener.remove(),this.onCameraMoveStartedListener=void 0),this.onClusterClickListener&&(this.onClusterClickListener.remove(),this.onClusterClickListener=void 0),this.onClusterInfoWindowClickListener&&(this.onClusterInfoWindowClickListener.remove(),this.onClusterInfoWindowClickListener=void 0),this.onInfoWindowClickListener&&(this.onInfoWindowClickListener.remove(),this.onInfoWindowClickListener=void 0),this.onMapClickListener&&(this.onMapClickListener.remove(),this.onMapClickListener=void 0),this.onPolylineClickListener&&(this.onPolylineClickListener.remove(),this.onPolylineClickListener=void 0),this.onMarkerClickListener&&(this.onMarkerClickListener.remove(),this.onMarkerClickListener=void 0),this.onPolygonClickListener&&(this.onPolygonClickListener.remove(),this.onPolygonClickListener=void 0),this.onCircleClickListener&&(this.onCircleClickListener.remove(),this.onCircleClickListener=void 0),this.onMarkerDragStartListener&&(this.onMarkerDragStartListener.remove(),this.onMarkerDragStartListener=void 0),this.onMarkerDragListener&&(this.onMarkerDragListener.remove(),this.onMarkerDragListener=void 0),this.onMarkerDragEndListener&&(this.onMarkerDragEndListener.remove(),this.onMarkerDragEndListener=void 0),this.onMyLocationButtonClickListener&&(this.onMyLocationButtonClickListener.remove(),this.onMyLocationButtonClickListener=void 0),this.onMyLocationClickListener&&(this.onMyLocationClickListener.remove(),this.onMyLocationClickListener=void 0)}generateCallback(e){const t=this.id;return i=>{i.mapId==t&&e(i)}}}const O=n({name:"mapScreen",components:{IonBackButton:s,IonButtons:r,IonToolbar:o,IonTitle:a,IonHeader:d,IonPage:l,IonContent:c,IonIcon:h,IonRouterOutlet:u},data:()=>({apiKey:"AIzaSyA7nyAevnZcR1GncVAydyO9Nkip0JCBnb8"}),methods:{async initMap(){const e=document.getElementById("map");await T.create({id:"my-map",element:e,apiKey:this.apiKey,config:{center:{lat:10.231442099819981,lng:123.76719314420394},zoom:16}})}},setup:()=>({menu:C,home:L,person:m}),async mounted(){this.initMap()}}),W=v(O,[["render",function(e,t,i,n,s,r){const o=y("ion-back-button"),a=y("ion-buttons"),d=y("ion-title"),l=y("ion-toolbar"),c=y("ion-header"),h=y("ion-content"),u=y("ion-page");return w(),k(u,null,{default:g((()=>[M(c,null,{default:g((()=>[M(l,null,{default:g((()=>[M(a,{slot:"start"},{default:g((()=>[M(o)])),_:1}),M(d,{class:"bg-warning"},{default:g((()=>t[0]||(t[0]=[p(" Map ")]))),_:1})])),_:1})])),_:1}),M(h,null,{default:g((()=>t[1]||(t[1]=[b("div",{id:"map"},null,-1)]))),_:1})])),_:1})}],["__scopeId","data-v-0fd15e3e"]]),x=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));e("i",x)}}}));
