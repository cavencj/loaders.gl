(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{TwbF:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Re})),r.d(t,"renderToDOM",(function(){return Le}));var n=r("o0o1"),a=r.n(n),o=(r("wcNg"),r("HaE+")),i=r("JX7q"),s=r("dI71"),c=r("rePB"),u=r("q1tI"),l=r.n(u),p=r("i8i4"),f=r("UP1k"),d=r("rta6"),h=r("yYqN"),m=r("Wium"),b=r("BENj"),y=r("G8qk"),g=r("24Wh"),v=r("KQm4"),x=r("SDD5"),w=r("Ns70"),O=r("O6hP"),S=r("rOwd");function P(e){var t=e.halfSize,r=w.a.WGS84.cartographicToCartesian(e.center),n=(new S.a).fromCornerPoints([r[0]-t[0],r[1]-t[1],r[2]-t[2]],[r[0]+t[0],r[1]+t[1],r[2]+t[2]]);return[].concat(Object(v.a)(e.center),[n.radius])}function _(e){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",JSON.parse((new TextDecoder).decode(t)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=_(t),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T={id:"i3s-node-page",name:"I3S Node Page",version:"undefined"!=typeof __VERSION__?__VERSION__:"latest",mimeTypes:["application/json"],parse:function(e){return k.apply(this,arguments)},extensions:["json"],options:{}};function I(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C=function(){function e(e,t){this.tileset=e,this.nodesPerPage=e.nodePages.nodesPerPage,this.lodSelectionMetricType=e.nodePages.lodSelectionMetricType,this.options=t,this.nodePages=[]}var t=e.prototype;return t.getNodeById=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Math.floor(t/this.nodesPerPage),this.nodePages[r]){e.next=7;break}return n=this.tileset.url+"/nodepages/"+r,this.nodePages[r]=Object(g.a)(n,T,this.options),e.next=6,this.nodePages[r];case 6:this.nodePages[r]=e.sent;case 7:if(!(this.nodePages[r]instanceof Promise)){e.next=11;break}return e.next=10,this.nodePages[r];case 10:this.nodePages[r]=e.sent;case 11:return o=t%this.nodesPerPage,e.abrupt("return",this.nodePages[r].nodes[o]);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.formTileFromNodePages=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n,o,i,s,c,u,l,p,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getNodeById(t);case 2:r=e.sent,n=[],o=I(r.children);case 5:if((i=o()).done){e.next=13;break}return s=i.value,e.next=9,this.getNodeById(s);case 9:c=e.sent,n.push({id:s,obb:c.obb,mbs:P(c.obb)});case 11:e.next=5;break;case 13:return u=null,l=null,r&&r.mesh&&(r.mesh.geometry&&(u=this.tileset.url+"/nodes/"+r.mesh.geometry.resource+"/geometries/0"),(p=this._getTextureName(r.mesh.material))&&(l=this.tileset.url+"/nodes/"+r.mesh.material.resource+"/textures/"+p)),f=[],"maxScreenThresholdSQ"===this.lodSelectionMetricType&&f.push({metricType:"maxScreenThreshold",maxError:Math.sqrt(r.lodThreshold/(.25*Math.PI))}),f.push({metricType:this.lodSelectionMetricType,maxError:r.lodThreshold}),e.abrupt("return",N({id:t,lodSelection:f,obb:r.obb,mbs:P(r.obb),contentUrl:u,textureUrl:l,children:n}));case 20:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t._getTextureName=function(e){if(e){var t=this.tileset.materialDefinitions[e.definition],r=t&&t.pbrMetallicRoughness&&t.pbrMetallicRoughness.baseColorTexture&&t.pbrMetallicRoughness.baseColorTexture.textureSetDefinitionId;if(r||0===r){var n=this.tileset.textureSetDefinitions[r];return n&&n.formats&&n.formats[0]&&n.formats[0].name}}return null},e}();function D(e,t){return void 0===t&&(t=null),t?e+"?token="+t:e}var M=new x.a;function U(e,t,r){return e.url=r.url,e.featureData&&(e.featureUrl=e.url+"/"+e.featureData[0].href),e.geometryData&&(e.contentUrl=e.url+"/"+e.geometryData[0].href),e.textureData&&(e.textureUrl=e.url+"/"+e.textureData[0].href),N(e)}function N(e){M.copy(e.mbs);var t=w.a.WGS84.cartographicToCartesian(e.mbs.slice(0,3));return e.boundingVolume={sphere:[].concat(Object(v.a)(t),[e.mbs[3]])},e.lodMetricType=e.lodSelection[0].metricType,e.lodMetricValue=e.lodSelection[0].maxError,e.transformMatrix=e.transform,e.type=O.f.MESH,e.refine=O.e.REPLACE,e}function A(e,t,r){return F.apply(this,arguments)}function F(){return(F=Object(o.a)(a.a.mark((function e(t,r,n){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url=n.url,!t.nodePages){e.next=8;break}return t.nodePagesTile=new C(t,r),e.next=5,t.nodePagesTile.formTileFromNodePages(0);case 5:t.root=e.sent,e.next=12;break;case 8:return o=D(t.url+"/nodes/root",r.token),e.next=11,Object(g.a)(o,t.loader,{i3s:{loadContent:!1,isTileHeader:!0,isTileset:!1}});case 11:t.root=e.sent;case 12:t.basePath=t.url,t.type=O.c.I3S,t.lodMetricType=t.root.lodMetricType,t.lodMetricValue=t.root.lodMetricValue;case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=r("kh/P"),R=r("gQyj"),L=r("R5E3"),B=r.n(L),z={UInt8:Uint8Array,UInt16:Uint16Array,UInt32:Uint32Array,Float32:Float32Array,UInt64:Float64Array},G={UInt8:B.a.UNSIGNED_BYTE,UInt16:B.a.UNSIGNED_INT,Float32:B.a.FLOAT,UInt32:B.a.UNSIGNED_INT,UInt64:B.a.DOUBLE},q={position:"position",normal:"normal",uv0:"uv0",color:"color",region:"region"},V={vertexAttributes:"vertexAttributes",featureAttributeOrder:"featureAttributeOrder",featureAttributes:"featureAttributes"},J="header",H="vertexCount",Y="featureCount",Q={UInt8:1,UInt16:2,UInt32:4,Float32:4,UInt64:8};function Z(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee=new x.a([0,0,0]);function te(e,t,r,n){return re.apply(this,arguments)}function re(){return(re=Object(o.a)(a.a.mark((function e(t,r,n,o){var i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.content=r.content||{},r.content.featureData=ae(r,n),r.content.attributes={},!r.textureUrl){e.next=8;break}return i=D(r.textureUrl,o.token),e.next=7,Object(g.a)(i,R.a);case 7:r.content.texture=e.sent;case 8:return e.abrupt("return",ne(t,r));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e,t){if(void 0===t&&(t={}),!t.content)return t;var r=t.content,n=r.featureData,a=n.vertexAttributes,o=n.attributesOrder,i=n.featureAttributes,s=n.featureAttributeOrder,c=function(e,t){var r=0,n=0,a=0,o=e.featureData[J];for(var i in o){var s=o[i],c=s.property,u=s.type,l=z[u];c===H&&(n=new l(t,0,4)[0],r+=Q[u]),c===Y&&(a=new l(t,4,4)[0],r+=Q[u])}return{vertexCount:n,featureCount:a,byteOffset:r}}(r,e),u=c.vertexCount,l=c.byteOffset,p=c.featureCount,f=oe(e,l,a,u,o),d=function(e,t){return X(X({},e),t)}(f.attributes,oe(e,f.byteOffset,i,p,s).attributes),h=function(e,t){var r=t.mbs,n=e.value,a=new W.a,o=new x.a(r[0],r[1],r[2]),i=new x.a;return w.a.WGS84.cartographicToCartesian(o,i),w.a.WGS84.eastNorthUpToFixedFrame(i,a),e.value=function(e,t){for(var r=new Float64Array(e.length),n=0;n<r.length;n+=3)r[n]=e[n]+t.x,r[n+1]=e[n+1]+t.y,r[n+2]=e[n+2]+t.z;for(var a=0;a<r.length;a+=3)w.a.WGS84.cartographicToCartesian(r.subarray(a,a+3),ee),r[a]=ee.x,r[a+1]=ee.y,r[a+2]=ee.z;return r}(n,o),{enuMatrix:a,fixedFrameToENUMatrix:a.invert(),cartographicOrigin:o,cartesianOrigin:i}}(d.position,t),m=h.enuMatrix,b=h.cartographicOrigin,y=h.cartesianOrigin,g=(new W.a).multiplyRight(m);return r.attributes={positions:d.position,normals:d.normal,colors:d.color,texCoords:d.uv0,featureIds:d.id,faceRange:d.faceRange},r.vertexCount=u,r.cartographicCenter=b,r.cartesianOrigin=y,r.modelMatrix=g.invert(),r.byteLength=e.byteLength,t}function ae(e,t){var r=t.store.defaultGeometrySchema,n=r;for(var a in V)for(var o in q){var i=r[a][o];if(i){var s=i.byteOffset,c=void 0===s?0:s,u=i.count,l=void 0===u?0:u,p=i.valueType,f=i.valuesPerElement;n[a][o]={valueType:p,valuesPerElement:f,byteOffset:c,count:l}}}return n.attributesOrder=r.ordering,n}function oe(e,t,r,n,a){for(var o,i={},s=Z(a);!(o=s()).done;){var c=o.value;if(r[c]){var u=r[c],l=u.valueType,p=u.valuesPerElement,f=n;if(t+f*p>e.byteLength)break;var d=new(0,z[l])(e.slice(t),0,f*p);switch(i[c]={value:d,type:G[l],size:p},c){case"color":i.color.normalized=!0}t+=f*p*Q[l]}}return{attributes:i,byteOffset:t}}var ie="undefined"!=typeof __VERSION__?__VERSION__:"latest",se=/layers\/[0-9]+$/,ce=/nodes\/([0-9-]+|root)$/;function ue(e,t,r){return le.apply(this,arguments)}function le(){return(le=Object(o.a)(a.a.mark((function e(t,r,n){var o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.i3s.tile,i=r.i3s.tileset,o.content=o.content||{},e.next=5,te(t,o,i,r);case 5:return e.abrupt("return",o.content);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(e,t,r){return fe.apply(this,arguments)}function fe(){return(fe=Object(o.a)(a.a.mark((function e(t,r,n){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=JSON.parse((new TextDecoder).decode(t))).loader=me,e.next=4,A(o,r,n);case 4:return e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(e,t,r){return he.apply(this,arguments)}function he(){return(he=Object(o.a)(a.a.mark((function e(t,r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse((new TextDecoder).decode(t)),e.abrupt("return",U(t,0,n));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var me={id:"i3s",name:"I3S 3D Tiles",version:ie,mimeTypes:["application/octet-stream"],parse:function(e,t,r,n){return be.apply(this,arguments)},extensions:["bin"],options:{i3s:{loadContent:!0,isTileset:"auto",isTileHeader:"auto",tile:null,tileset:null}}};function be(){return(be=Object(o.a)(a.a.mark((function e(t,r,n,o){var i,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.url,r.i3s=r.i3s||{},s="auto"===r.i3s.isTileset?se.test(i):r.i3s.isTileset,c="auto"===r.isTileHeader?ce.test(i):r.i3s.isTileHeader,!s){e.next=10;break}return e.next=7,pe(t,r,n);case 7:t=e.sent,e.next=23;break;case 10:if(!c){e.next=20;break}return e.next=13,de(t,r,n);case 13:if(t=e.sent,!r.i3s.loadContent){e.next=18;break}return r.i3s.tile=t,e.next=18,Object(g.a)(t.contentUrl,me,r);case 18:e.next=23;break;case 20:return e.next=22,ue(t,r,n);case 22:t=e.sent;case 23:return e.abrupt("return",t);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ye=me,ge=r("J4mz");function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function xe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var we={height:600,width:800,pitch:45,maxPitch:60,bearing:0,minZoom:2,maxZoom:30,zoom:14.5},Oe={"San Francisco":{name:"San Francisco",url:"https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/SanFrancisco_Bldgs/SceneServer/layers/0",viewport:xe(xe({},we),{},{longitude:-120,latitude:34})},"New York":{name:"New York",url:"https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Buildings_NewYork_17/SceneServer/layers/0",viewport:xe(xe({},we),{},{longitude:-74,latitude:40})}},Se=r("vOnD"),Pe={"Base Map: Satellite":"mapbox://styles/mapbox/satellite-v9","Base Map: Light":"mapbox://styles/mapbox/light-v9","Base Map: Dark":"mapbox://styles/mapbox/dark-v9"},_e=Pe["Base Map: Dark"],je=Se.c.div.withConfig({displayName:"control-panel__Container",componentId:"sc-14q5t5u-0"})(["display:flex;flex-direction:column;position:absolute;top:0;right:0;width:300px;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,0.3);padding:12px 18px;margin:20px;font-size:13px;line-height:2;outline:none;z-index:100;"]),ke=Se.c.select.withConfig({displayName:"control-panel__DropDown",componentId:"sc-14q5t5u-1"})(["margin-bottom:12px;"]),Te=Se.c.select.withConfig({displayName:"control-panel__TilesetDropDown",componentId:"sc-14q5t5u-2"})(["margin-bottom:12px;font-weight:800;font-size:16px;"]),Ie=Se.c.div.withConfig({displayName:"control-panel__FrameWrap",componentId:"sc-14q5t5u-3"})(["height:fit-content;padding:0;overflow:hidden;"]),Ee=Se.c.div.withConfig({displayName:"control-panel__FrameControl",componentId:"sc-14q5t5u-4"})(["margin:",";display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;"],(function(e){return e.showFullInfo?"12px 0":0})),Ce=Se.c.div.withConfig({displayName:"control-panel__FrameButton",componentId:"sc-14q5t5u-5"})(["display:flex;padding:6px 12px;color:white;background:rgb(52,152,219);align-items:center;height:20px;&:hover{background:rgb(0,152,219);cursor:pointer;}"]),De=function(e){function t(t){var r;return(r=e.call(this,t)||this)._renderMapStyles=r._renderMapStyles.bind(Object(i.a)(r)),r.state={showFullInfo:!1,selectedMapStyle:_e},r}Object(s.a)(t,e);var r=t.prototype;return r._renderExamples=function(){var e=this,t=this.props,r=t.name,n=t.onExampleChange;return l.a.createElement(Te,{value:r,onChange:function(t){var r=t.target.value;e.setState({selected:r}),n(Oe[r])}},!r&&l.a.createElement("option",{key:"custom-example",value:"custom-example"},"Custom example"),Object.keys(Oe).map((function(e){var t=Oe[e];return l.a.createElement("option",{key:e,value:t.name},t.name)})))},r._renderMapStyles=function(){var e=this,t=this.props.mapStyles,r=void 0===t?Pe:t,n=this.state.selectedMapStyle;return l.a.createElement(ke,{value:n,onChange:function(t){var r=t.target.value;e.setState({selectedMapStyle:r})}},Object.keys(r).map((function(e){return l.a.createElement("option",{key:e,value:r[e]},e)})))},r._renderInfo=function(){var e=this,t=this.props,r=t.metadata,n=t.token,a=this.state.showFullInfo;if(!r)return null;var o="https://www.arcgis.com/home/item.html?id="+r.serviceItemId;return n&&(o=o+"&token="+n),l.a.createElement(Ie,null,l.a.createElement("iframe",{id:"tileset-info",title:"tileset-info",style:{display:a?"inherit":"none",height:500,width:"99%",border:"1px solid rgba(200, 200, 200, 100)"},src:o}),l.a.createElement(Ee,{showFullInfo:a},l.a.createElement(Ce,{onClick:function(){return e.setState({showFullInfo:!a})}},"Show ",a?"Less":"More"),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:o},"Go to ArcGIS")))},r.render=function(){return l.a.createElement(je,null,this._renderExamples(),this._renderMapStyles(),this._renderInfo(),this.props.children)},t}(u.PureComponent);function Me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Me(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Me(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}De.defaultProps={droppedFile:null,onChange:function(){}};var Ne={}.MapboxAccessToken,Ae={longitude:-120,latitude:34,height:600,width:800,pitch:45,maxPitch:60,bearing:0,minZoom:2,maxZoom:30,zoom:14.5},Fe={wordBreak:"break-word",position:"absolute",padding:12,zIndex:"10000",maxWidth:300,background:"#000",color:"#fff"};function We(e,t){var r=new URL(e),n=e.lastIndexOf("/layers/0"),a=e.substring(0,n),o=t&&t.token;return r.search&&(o=r.searchParams.get("token"),a=""+a+r.search),Ue(Ue({},t),{},{tilesetUrl:e,token:o,metadataUrl:a})}var Re=function(e){function t(t){var r;return(r=e.call(this,t)||this)._tilesetStatsWidget=null,r.state={url:null,token:null,name:"San Francisco",viewState:Ae},r._onSelectTileset=r._onSelectTileset.bind(Object(i.a)(r)),r}Object(s.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e;this._memWidget=new ge.a(d.a.get("Memory Usage"),{framesPerUpdate:1,formatters:{"GPU Memory":"memory","Buffer Memory":"memory","Renderbuffer Memory":"memory","Texture Memory":"memory"},container:this._statsWidgetContainer}),this._tilesetStatsWidget=new ge.a(null,{container:this._statsWidgetContainer});var t=new URL(window.location.href).searchParams.get("url");e=t?{url:t}:Oe["San Francisco"],this._onSelectTileset(e)},r._onSelectTileset=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n,o,i,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=We(t.url,t),n=r.tilesetUrl,o=r.token,i=r.name,s=r.metadataUrl,this.setState({tilesetUrl:n,name:i,token:o}),e.next=5,fetch(s).then((function(e){return e.json()}));case 5:c=e.sent,this.setState({metadata:c});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),r._updateStatWidgets=function(){this._memWidget.update(),this._tilesetStatsWidget.update()},r._onTilesetLoad=function(e){var t=e.zoom,r=e.cartographicCenter,n=r[0],a=r[1],o=Ue(Ue({},this.state.viewState),{},{zoom:t+2.5,longitude:n,latitude:a});this.setState({tileset:e,viewState:Ue(Ue({},o),{},{transitionDuration:4e3,transitionInterpolator:new m.a})}),this._tilesetStatsWidget.setStats(e.stats)},r._onViewStateChange=function(e){var t=e.viewState;this.setState({viewState:t})},r._renderLayers=function(){var e=this,t=this.state,r=t.tilesetUrl,n=t.token,a={throttleRequests:!0};return n&&(a.token=n),[new y.a({data:r,loader:ye,onTilesetLoad:this._onTilesetLoad.bind(this),onTileLoad:function(){return e._updateStatWidgets()},onTileUnload:function(){return e._updateStatWidgets()},loadOptions:a})]},r._renderStats=function(){var e=this;return l.a.createElement("div",{style:Fe,ref:function(t){return e._statsWidgetContainer=t}})},r._renderControlPanel=function(){var e=this.state,t=e.name,r=e.tileset,n=e.token,a=e.metadata;return l.a.createElement(De,{tileset:r,name:t,metadata:a,token:n,onExampleChange:this._onSelectTileset})},r.render=function(){var e=this,t=this._renderLayers(),r=this.state.viewState;return l.a.createElement("div",{style:{position:"relative",height:"100%"}},this._renderStats(),this._renderControlPanel(),l.a.createElement(h.a,{layers:t,viewState:r,onViewStateChange:this._onViewStateChange.bind(this),controller:{type:b.a,maxPitch:85},onAfterRender:function(){return e._updateStatWidgets()}},l.a.createElement(f.a,{mapStyle:"mapbox://styles/mapbox/dark-v9",mapboxApiAccessToken:Ne,preventStyleDiffing:!0})))},t}(u.PureComponent);function Le(e){Object(p.render)(l.a.createElement(Re,null),e)}}}]);