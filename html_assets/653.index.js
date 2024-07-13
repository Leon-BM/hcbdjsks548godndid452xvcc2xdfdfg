(self.webpackChunk=self.webpackChunk||[]).push([[653],{79656:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return R}});n(64828),n(99745);var o=n(28508),i=n.n(o),r=n(25920),a=n.n(r),s=n(56724),l=n.n(s),c=n(61370),d=n.n(c),m=new URL(n(6285),n.b),p='<div id="viewer__vr"> <div id="enter-vr-modal"> <p> {{ vf.l10n.vrStartModalMessage }} </p> <div class="enter-vr-modal__action-buttons"> <span id="enter-vr-button" ng-click="onEnterVrButtonClick()"> {{ vf.l10n.beginButton }}</span> <span id="exit-vr-button" ng-click="exitVr($event)"> {{ vf.l10n.backButton }}</span> </div> </div> <a-scene id="scene" ios-fullwindow embedded scene-animation scene-navigation scene-tick scene-window-resize vr-mode-ui="enabled: false"> <a-assets> <img id="exit-btn-img" src="'+d()(m)+'" crossorigin="anonymous"> </a-assets> <a-sky id="image-360-fader" radius="9" color="black" opacity="0" animation__out="property: opacity; from: 0; to: 1; dur: 500; startEvents: image-360-fader-fadeout;" animation__in="property: opacity; from: 1; to: 0; dur: 500; startEvents: image-360-fader-fadein;"> </a-sky> <a-entity id="floorplan-rotation" floorplan-rotation> <a-entity id="floorplan-transform" position="0 1.6 0" rotation="-90 0 0" animation__up="property: rotation; from: -90 0 0; to: 0 0 0; dur: 750; startEvents: floorplan-animate-up;" animation__down="property: rotation; from: 0 0 0; to: -90 0 0; dur: 750; startEvents: floorplan-animate-down;"> <a-plane id="bottom-floorplan" position="0 0 -1.6" width="{{floorplanSize}}" height="{{floorplanSize}}" floorplan-draw="\n            size: {{floorplanSize}};\n            srcPrefix: {{floorplanSrcPrefix}};\n            allowTransparency: {{!isIOS}}" material="opacity: 0.75; transparent: true"> <a-entity id="floor-menu" position="-0.9 0 0" floor-selector> </a-entity> </a-plane> </a-entity> </a-entity> <a-circle id="exit-btn" position="0 -0.5 0" rotation="-90 0 0" radius="{{floorplanSize/3}}" src="#exit-btn-img" visible="false" exit-btn entity-clickable> </a-circle> <a-entity id="neighbors" neighbors-draw neighbors-opacity="\n        allowTransparency: {{!isIOS}}" light="type: ambient;"> </a-entity> <a-camera id="a-camera" fov="90" look-controls> <a-cursor id="cursor" cursor-opacity="\n          allowTransparency: {{!isIOS}}" fuse="true" fuse-timeout="1000" color="springgreen" opacity="1" raycaster="objects: [entity-clickable]"> <a-ring id="spinner" color="springgreen" radius-inner="0.03" radius-outer="0.05" theta-start="90" theta-length="0" visibility="false" animation="property: geometry.thetaLength; from: 0; to: 360; dur: 1000; dir: reverse; startEvents: animate-spinner; pauseEvents: stop-spinner;"> </a-ring> </a-cursor> <a-plane id="corner-floorplan" material="opacity: 0.75; transparent: true" width="{{cornerFloorplanSize}}" height="{{cornerFloorplanSize}}" floorplan-draw="\n          size: {{cornerFloorplanSize}};\n          srcPrefix: {{cornerFloorplanSrcPrefix}};\n          allowTransparency: {{!isIOS}}" corner-floorplan-opacity="\n        allowTransparency: {{!isIOS}}" corner-floorplan-position corner-floorplan-visible> <a-entity class="radar" radar-position radar-rotation> <a-entity material="color: rgb(253, 117, 103)" geometry="primitive: triangle-small"> </a-entity> <a-circle color="rgb(253, 117, 103)" radius="0.01" theta-start="180" theta-length="180"> </a-circle> </a-entity> </a-plane> </a-camera> </a-scene> </div> ';n(50065);a().registerComponent("corner-floorplan-opacity",{dependencies:["floorplan-draw"],schema:{allowTransparency:{type:"boolean"}},init:function(){this.vr=document.querySelector("a-scene").systems.vr.vr},setOpacity:function(t){if(!t.isUp){var e=t.cameraElev/(this.vr.FP_ANGLE_DEG+5),n=e>0?.75:.75+e;if(this.el.components.material.material.opacity=n,this.el.components["floorplan-draw"].setPanoStyle(n),this.data.allowTransparency){var o,i=this.el.getElementsByClassName("pano-ring");for(o=0;o<i.length;o++)i[o].components.material.material&&(i[o].components.material.material.opacity=n,i[o].components.material.material.transparent=!0);var r=this.el.getElementsByClassName("radar")[0];for(o=0;o<r.children.length;o++)r.children[o].components.material.material&&(r.children[o].components.material.material.opacity=n,r.children[o].components.material.material.transparent=!0)}}}});a().registerComponent("corner-floorplan-position",{init:function(){this.onWindowResize()},onWindowResize:function(){var t,e,n=(this.el,t=90*Math.PI/180,{width:(e=2*Math.tan(t/2)*1)*(window.innerWidth/window.innerHeight),height:e});this.el.setAttribute("position",{x:-n.width/12,y:n.height/6,z:-1})}}),a().registerComponent("corner-floorplan-visible",{setVisible:function(t){this.el.setAttribute("visible",t)}});var h=a().utils.bind;a().registerComponent("entity-clickable",{init:function(){var t=this.el.components["pano-click"];this.panoId=t?t.attrValue.index:void 0;var e=this.el.components["floor-click"];this.floorId=e?e.attrValue.index:void 0,this.el.addEventListener("mouseenter",h(this.onMouseEnter,this)),this.el.addEventListener("mouseleave",h(this.onMouseLeave,this))},onMouseEnter:function(){this.el.sceneEl.emit("entity-mouseenter",{panoId:this.panoId,floorId:this.floorId})},onMouseLeave:function(){this.el.sceneEl.emit("entity-mouseleave",{panoId:this.panoId,floorId:this.floorId})}});var f=n(33419),u=function(t,e){for(;t>e;)t-=e;return t};a().registerComponent("cursor-opacity",{schema:{allowTransparency:{type:"boolean"}},setOpacity:function(t){var e=t.floorplan;if(this.data.allowTransparency&&0!==e.getNShownPanos()){var n,o,i=1.701807049,r=t.cameraAngle,a=t.cameraElev,s=e.getActivePano().neighbors,l=999;if(t.isUp)this.el.components.material.material&&(this.el.components.material.material.opacity=1);else{for(var c=0;c<s.length;c++)s[c].isGate||e.isPanoShown(e.getPanoById(s[c].targetId))&&(n=u(s[c].angle-f.pj,f.uo),(o=e.getDist(n,r,a))&&o<l&&(l=o));this.el.components.material.material&&(this.el.components.material.material.opacity=l>i?0:1-l/i,this.el.components.material.material.transparent=!0)}}}});var g=a().utils.bind;a().registerComponent("exit-btn",{init:function(){this.el.addEventListener("click",g(this.onClick,this)),this.el.sceneEl.addEventListener("enter-vr",g(this.onEnterVr,this)),this.el.sceneEl.addEventListener("exit-vr",g(this.onExitVr,this))},setRotation:function(t){this.el.object3D.rotation.y=t.cameraAngle*f.ZX},onClick:function(){this.el.sceneEl.exitVR()},onExitVr:function(){this.el.setAttribute("visible",!1)},onEnterVr:function(){this.el.setAttribute("visible",!0)}}),a().registerComponent("floorplan-rotation",{isRotatable:!0,setFloorplanRotation:function(t){this.isRotatable&&(t.isUp||(this.el.object3D.rotation.y=t.cameraAngle*f.ZX))},onSceneTick:function(t){this.setFloorplanRotation(t)},setIsRotatable:function(t){this.isRotatable=t}});var v=a().utils.bind;a().registerComponent("floor-click",{schema:{index:{type:"int",default:0}},init:function(){this.vr=this.el.sceneEl.systems.vr.vr,this.el.addEventListener("click",v(this.onClick,this))},onClick:function(){this.data.index!==this.vr.house.active_floorplan_index&&(document.querySelector("#image-360").emit("set-image-fade"),setTimeout(v(this.onTimeout,this),500))},onTimeout:function(){this.el.sceneEl.emit("floor-click",{idx:this.data.index})}});var b={fontSize:48,bgcolor:"#222",color:"white"},y={fontSize:48,bgcolor:"black",color:"#b3b3b3"},w=function(t,e){return t===e?b:y};a().registerComponent("floor-selector",{init:function(){this.vr=document.querySelector("a-scene").systems.vr.vr},setVisible:function(t){this.el.setAttribute("visible",t)},createLabel:function(t){var e=document.createElement("canvas");return e.id="a-scene__floor-label".concat(t),e.width=700,e.height=100,e.classList.add("hidden"),document.getElementById("scene").appendChild(e),e},drawLabelText:function(t,e,n){var o=document.getElementById("a-scene__floor-label".concat(t)),i=e.fontSize,r=e.bgcolor,a=e.color,s=o.getContext("2d");s.fillStyle=r,s.fillRect(0,0,700,100),s.font="".concat(i,"pt Arial"),s.textAlign="center",s.fillStyle=a,s.fillText(n,o.width/2,3*o.height/4)},writeFloorMenuItems:function(t){if(!(t.length<2)){this.floors=t;for(var e,n,o=document.getElementById("floor-menu"),i=.1*t.length/2,r=0;r<t.length;r++){var a=this.vr.house.getFloorplanIdFromIdx(r);e=document.createElement("a-plane"),o.appendChild(e),e.setAttribute("id","floor".concat(a)),e.setAttribute("position","".concat(0," ",i-.1*r," ",.3)),e.setAttribute("width",.7),e.setAttribute("height",.1),e.setAttribute("floor-click",{index:a}),e.setAttribute("entity-clickable",""),this.createLabel(a),n=w(a,this.vr.house.active_floorplan_index),this.drawLabelText(a,n,this.floors[r].label),e.setAttribute("material",{src:"#a-scene__floor-label".concat(a)})}}},onFloorEntered:function(t){void 0!==t&&this.drawLabelText(t,b,this.getFloorFromId(t).label)},onFloorLeft:function(t){if(void 0!==t){var e=w(t,this.vr.house.active_floorplan_index);this.drawLabelText(t,e,this.getFloorFromId(t).label)}},onFloorActivated:function(t){for(var e,n=0;n<this.floors.length;n++){var o=this.vr.house.getFloorplanIdFromIdx(n);e=w(o,t),this.drawLabelText(o,e,this.floors[n].label)}},getFloorFromId:function(t){for(var e=0;e<this.floors.length;e++)if(this.floors[e].id===t)return this.floors[e]}}),a().registerComponent("floorplan-draw",{schema:{size:{type:"number"},srcPrefix:{type:"string"},allowTransparency:{type:"boolean"}},init:function(){this.vr=document.querySelector("a-scene").systems.vr.vr,this.size=this.data.size,this.writePanos(),this.setImage()},size:0,onPanoChanged:function(){this.vr.floorplan.getNShownPanos()>0&&this.setPanoStyle()},onFloorChanged:function(){this.erasePanos(),this.setImage(),this.writePanos()},setImage:function(){this.el.setAttribute("src",this.data.srcPrefix+this.vr.house.active_floorplan_index)},onWindowResize:function(){this.erasePanos(),this.writePanos(),this.setPanoStyle()},erasePanos:function(){for(var t=this.el.querySelectorAll(".pano"),e=this.el.querySelectorAll(".pano-ring"),n=0;n<t.length;n++)t[n].outerHTML="",e[n].outerHTML=""},writePanos:function(){for(var t=this.vr.floorplan.panos,e=this.data.size,n=this.el,o=0;o<t.length;o++)if(this.vr.floorplan.isPanoShown(t[o])){var i=this.vr.floorplan.vrGetPanoIdfromIdx(o),r=this.vr.floorplan.dataToCircle(t[o].center0,e),a=document.createElement("a-circle");n.appendChild(a),a.setAttribute("id","pano".concat(i)),a.setAttribute("class","pano pano".concat(i)),a.setAttribute("material","opacity",0),a.setAttribute("material","color","green"),a.setAttribute("radius",e/40),a.setAttribute("position",{x:r.x,y:r.y,z:.001}),a.setAttribute("pano-click",{index:i}),a.setAttribute("entity-clickable","");var s=document.createElement("a-ring");n.appendChild(s),s.setAttribute("id","pano-ring".concat(i)),s.setAttribute("class","pano-ring"),s.setAttribute("material","color","green"),s.setAttribute("radius-outer",e/40),s.setAttribute("radius-inner",e/60),s.setAttribute("position",{x:r.x,y:r.y,z:.001})}},setPanoStyle:function(t){void 0===t&&(t=1);for(var e,n,o,i=this.vr.floorplan.panos,r=this.vr.floorplan.getIdxFromNActivePano(),a=this.data.size,s=0;s<i.length;s++)if(this.vr.floorplan.isPanoShown(i[s])){s===r?(n=a/80,e=1,i[s].visited=!0):i[s].visited?(n=a/60,e=0):(n=a/60,e=.3),o=this.el.getElementsByClassName("pano".concat(this.vr.floorplan.vrGetPanoIdfromIdx(s)));for(var l=void 0,c=0;c<o.length;c++)this.data.allowTransparency&&((l=o[c].components.material.material)?(l.opacity=e*t,l.transparent=!0):o[c].setAttribute("material","opacity",e*t)),o[c].setAttribute("radius",n)}}});var E=a().utils.bind;a().registerComponent("ios-fullwindow",{init:function(){var t=this.el.canvas;t?a().utils.device.isIOS()&&(this.el.addEventListener("enter-vr",(function(){t.classList.add("ios-fullwindow")})),this.el.addEventListener("exit-vr",(function(){t.classList.remove("ios-fullwindow")}))):this.el.addEventListener("render-target-loaded",E(this.init,this))}}),a().registerComponent("neighbors-opacity",{schema:{allowTransparency:{type:"boolean"}},setOpacity:function(t){if(this.data.allowTransparency&&0!==t.floorplan.getNShownPanos())for(var e,n,o,i=t.cameraAngle,r=t.cameraElev,a=t.floorplan.getActivePano().neighbors,s=0;s<a.length;s++)!a[s].isGate&&t.floorplan.isPanoShown(t.floorplan.getPanoById(a[s].targetId))&&(e=(0,f.D5)(a[s].angle-f.pj,f.uo),(n=document.getElementById("neighbor-ring".concat(a[s].targetId)))&&(o=t.floorplan.getDist(e,i,r),n.components.material.material&&(n.components.material.material.opacity=1-o/1.701807049,n.components.material.material.transparent=!0)))}}),a().registerComponent("radar-position",{schema:{type:"vec3"},onPanoChanged:function(t,e){e?(this.setVisible(!0),this.setPosition(t)):this.setVisible(!1)},setVisible:function(t){this.el.setAttribute("visible",t)},setPosition:function(t){this.el.setAttribute("position",{x:t.x,y:t.y,z:.002})}}),a().registerComponent("radar-rotation",{setRotation:function(t){this.el.object3D.rotation.z=t.cameraAngle*f.ZX}});var A=a().utils.bind;a().registerComponent("pano-click",{schema:{index:{type:"int",default:0}},init:function(){this.vr=this.el.sceneEl.systems.vr.vr,this.el.addEventListener("click",A(this.onClick,this))},onClick:function(){this.data.index!==this.vr.floorplan.nActivePano&&(document.querySelector("#image-360").emit("set-image-fade"),setTimeout(A(this.onTimeout,this),500))},onTimeout:function(){this.el.sceneEl.emit("pano-click",{idx:this.data.index})}});var x=a().utils.bind,I=30*f.ZX,k=45*f.ZX,P="".concat(0," ",0," ",0),C="".concat(-90," ",0," ",0);a().registerComponent("scene-animation",{init:function(){this.vr=this.el.systems.vr.vr,this.els=this.el.systems.vr.getEls(),this.els.floorSelector.components["floor-selector"].setVisible(this.isUp),this.els.floorplanTransform.addEventListener("animationbegin",x(this.onAnimationstart,this)),this.els.floorplanTransform.addEventListener("animationcomplete",x(this.onAnimationend,this))},isUp:!1,getIsUp:function(){return this.isUp},animationCount:0,onAnimationstart:function(){this.animationCount++,1===this.animationCount&&(this.isUp=!this.isUp,this.animationCount=0),this.isAnimating=!0,this.els.floorplanRotation.components["floorplan-rotation"].setIsRotatable(!1),this.els.floorSelector.components["floor-selector"].setVisible(this.isUp)},onAnimationend:function(){if(this.isAnimating=!1,this.els.cornerFloorplan.components["corner-floorplan-visible"].setVisible(!this.isUp),this.els.floorplanRotation.components["floorplan-rotation"].setIsRotatable(!0),this.isUp)return this.els.floorplanTransform.setAttribute("rotation",P),void(this.angle=this.els.floorplanRotation.object3D.rotation.y);this.els.floorplanTransform.setAttribute("rotation",C),this.angle=void 0},setFloorplanOrientation:function(t){var e=t.cameraAngle*f.ZX,n=t.cameraElev,o=this.els.floorplanTransform;this.isUp?(e<this.angle-I||e>this.angle+k||n>30)&&o.emit("floorplan-animate-down"):-n>this.vr.FP_ANGLE_DEG&&-n<this.vr.FP_ANGLE_DEG+20&&o.emit("floorplan-animate-up")}});var _=n(4743),S=a().utils.bind;a().registerComponent("scene-navigation",{init:function(){this.vr=this.el.systems.vr.vr,this.els=this.el.systems.vr.getEls(),this.els.floorSelector.components["floor-selector"].writeFloorMenuItems(this.vr.getShownFloorplans()),this.setPano(this.vr.floorplan.getNActivePano()),this.el.addEventListener("pano-click",S(this.onPanoClick,this)),this.el.addEventListener("floor-click",S(this.onFloorClick,this))},onPanoClick:function(t){this.setPano(t.detail.idx)},onFloorClick:function(t){this.vr.setFloorplan(t.detail.idx),this.els.floorSelector.components["floor-selector"].onFloorActivated(t.detail.idx),this.els.floorplan.components["floorplan-draw"].onFloorChanged(),this.els.cornerFloorplan.components["floorplan-draw"].onFloorChanged(),this.setPano(this.vr.floorplan.getFirstShownPanoId())},setPano:function(t){var e=this;this.vr.floorplan.setNActivePano(t);var n=function(){e.els.cornerFloorplan.components["floorplan-draw"].onPanoChanged(),e.els.floorplan.components["floorplan-draw"].onPanoChanged(),e.els.neighbors.components["neighbors-draw"].write({floorplan:e.vr.floorplan}),e.setRadarPosition()},o=function(t){var n=document.createElement("a-sky");e.els.scene.appendChild(n),n.setAttribute("id","image-360"),n.setAttribute("radius",10);var o=e.vr.floorplan.getActivePano();if(o){var i=e.vr.vf.assets.sphere(o.vrGetSphereId());n.setAttribute("src",i),n.setAttribute("repeat","1 1"),n.setAttribute("rotation","y",180*o.rotationAngle/Math.PI)}else n.setAttribute("src",_),n.setAttribute("repeat","6, 3");t&&n.addEventListener("materialtextureloaded",t)};this.els.neighbors.components["neighbors-draw"].erase();var i=document.getElementById("image-360");if(i){var r=document.getElementById("image-360-fader");r.emit("image-360-fader-fadeout");r.addEventListener("animationcomplete__out",(function t(){r.removeEventListener("animationcomplete__out",t),e.els.scene.removeChild(i),o((function(){r.emit("image-360-fader-fadein"),n()}))}))}else o(),n()},setRadarPosition:function(){var t=this.vr.floorplan,e=this.els.cornerFloorplan.components["floorplan-draw"].data.size,n=t.getRadarPosition(e);this.els.radar.components["radar-position"].onPanoChanged(n,t.getNShownPanos()>0)}});var z=a().utils.bind;a().registerComponent("scene-tick",{init:function(){this.vr=this.el.systems.vr.vr,this.els=this.el.systems.vr.getEls(),this.el.addEventListener("entity-mouseenter",z(this.onMouseEnter,this)),this.el.addEventListener("entity-mouseleave",z(this.onMouseLeave,this))},tick:function(){var t=this.els.camera.getAttribute("rotation").y,e=this.els.camera.getAttribute("rotation").x,n={floorplan:this.vr.floorplan,cameraAngle:t,cameraElev:e,isUp:this.el.components["scene-animation"].getIsUp()};this.els.radar.components["radar-rotation"].setRotation(n),this.els.exitBtn.components["exit-btn"].setRotation(n),this.els.floorplanRotation.components["floorplan-rotation"].onSceneTick(n),this.els.cornerFloorplan.components["corner-floorplan-opacity"].setOpacity(n),this.els.cursor.components["cursor-opacity"].setOpacity(n),this.els.neighbors.components["neighbors-opacity"].setOpacity(n),this.el.components["scene-animation"].setFloorplanOrientation(n)},onMouseEnter:function(t){var e=t.detail.floorId,n=t.detail.panoId;e!==this.vr.house.active_floorplan_index&&n!==this.vr.floorplan.nActivePano&&(this.els.spinner.setAttribute("visible",!0),this.els.spinner.emit("animate-spinner"),this.els.floorSelector.components["floor-selector"].onFloorEntered(e))},onMouseLeave:function(t){var e=t.detail.floorId,n=t.detail.panoId;e!==this.vr.house.active_floorplan_index&&n!==this.vr.floorplan.nActivePano&&(this.els.spinner.emit("stop-spinner"),this.els.spinner.setAttribute("visible",!1),this.els.floorSelector.components["floor-selector"].onFloorLeft(e))}});var L=a().utils.bind;a().registerComponent("scene-window-resize",{init:function(){this.vr=this.el.systems.vr.vr,this.els=this.el.systems.vr.getEls(),window.addEventListener("resize",L(this.onWindowResize,this))},onWindowResize:function(){this.els.cornerFloorplan.components["corner-floorplan-position"].onWindowResize(),this.els.floorplan.components["floorplan-draw"].onWindowResize()}});var F=function(t){return t*f.jl};a().registerComponent("neighbors-draw",{onPanoChanged:function(t){this.erase(),this.write(t)},write:function(t){if(0!==t.floorplan.getNShownPanos())for(var e,n,o,i=t.floorplan.getActivePano().neighbors,r=0;r<i.length;r++)if(!i[r].isGate&&t.floorplan.isPanoShown(t.floorplan.getPanoById(i[r].targetId))){e=2*Math.sin(Math.PI/2+i[r].angle),n=2*Math.cos(Math.PI/2+i[r].angle),o=(0,f.D5)(F(Math.PI/2+i[r].angle),360);var a=document.createElement("a-circle");document.getElementById("neighbors").appendChild(a),a.setAttribute("id","neighbor".concat(i[r].targetId)),a.setAttribute("radius",.045),a.setAttribute("material","opacity",0),a.setAttribute("position","".concat(e," ",1.6," ").concat(n)),a.setAttribute("rotation","".concat(0," ",o-180," ",0)),a.setAttribute("pano-click",{index:i[r].targetId}),a.setAttribute("entity-clickable","");var s=document.createElement("a-ring");document.getElementById("neighbors").appendChild(s),s.setAttribute("id","neighbor-ring".concat(i[r].targetId)),s.setAttribute("radius-outer",.075),s.setAttribute("radius-inner",.045),s.setAttribute("material","color","green"),s.setAttribute("position","".concat(e," ",1.6," ").concat(n)),s.setAttribute("rotation","".concat(0," ",o-180," ",0))}},erase:function(){document.getElementById("neighbors").innerHTML=""}}),a().registerComponent("update-raycaster",{schema:{type:"selector"},init:function(){this.data.components.raycaster.refreshObjects()}});n(23149);var T=a().THREE;a().registerGeometry("triangle-small",{init:function(){var t=new T.BufferGeometry,e=new Float32Array([-.01,0,0,.01,0,0,0,.03,0]);t.setAttribute("position",new T.BufferAttribute(e,3)),t.computeVertexNormals(),this.geometry=t}});var B=i().module("iguide.viewer.vr",[]);B.directive("vfVr",(function(){return{scope:{vf:"=",onVrExit:"&",vr:"="},replace:!0,template:p,link:function(t,e){var n=t.vf,o=t.vr;t.exitVr=function(e){e.stopPropagation(),t.onVrExit()},t.$on("vf-resized",(function(t,n){e.height(n.getContainerHeight())})),e.height(t.vf.tourDims.getContainerHeight());var i,r;t.cornerFloorplanSize=.4,t.floorplanSize=1.5,t.cornerFloorplanSrcPrefix="#floorplan-img",t.floorplanSrcPrefix="#floorplan-with-labels-img",a().registerSystem("vr",{init:function(){o.spheres=n.spheres,this.vr=o,this.els={scene:document.getElementById("scene"),sky:document.getElementById("image-360"),cornerFloorplan:document.getElementById("corner-floorplan"),cursor:document.getElementById("cursor"),spinner:document.getElementById("spinner"),floorplanRotation:document.getElementById("floorplan-rotation"),floorplanTransform:document.getElementById("floorplan-transform"),floorplanTransformAnim:document.getElementById("floorplan-transform-anim"),floorplan:document.getElementById("bottom-floorplan"),floorSelector:document.getElementById("floor-menu"),radar:document.getElementsByClassName("radar")[0],camera:document.getElementById("a-camera"),neighbors:document.getElementById("neighbors"),exitBtn:document.getElementById("exit-btn")},(i=document.querySelector("a-scene")).addEventListener("exit-vr",(function(){r.disable()}))},getEls:function(){return this.els}}),e[0]&&e[0].parentNode.classList.remove("hidden"),r=new(l()),function(){for(var t,n,o=e[0].parentNode.getElementsByClassName("floor"),i=0;i<o.length;i++){for(var r=o[i].id.match(/\d+/)[0],a=o[i].querySelectorAll("g.arrows"),s=0;s<a.length;s++)a[s].parentElement.removeChild(a[s]);o[i].classList.add("hidden"),n=window.btoa(o[i].outerHTML),(t=new Image).src="data:image/svg+xml;base64,".concat(n),t.id="floorplan-with-labels-img".concat(r),t.classList.add("hidden"),document.querySelector("a-assets").appendChild(t);var l=o[i].querySelector("#floor-labels"),c=o[i].querySelector("#room-labels");l.parentNode.removeChild(l),c.parentNode.removeChild(c),(t=new Image).src="data:image/svg+xml;base64,".concat(n),t.id="floorplan-img".concat(r),t.classList.add("hidden"),document.querySelector("a-assets").appendChild(t)}}(),o.setFloorplan(1),t.isIOS=a().utils.device.isIOS(),t.onEnterVrButtonClick=function(){i.enterVR(),r.enable()}}}}));var R=B.name},69136:function(t,e,n){"use strict";n.r(e);var o=n(54933),i=n.n(o),r=n(93476),a=n.n(r)()(i());a.push([t.id,"#viewer__vr {\n  font-size: 0.75em;\n}\n#viewer__vr .center-absolute {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n#viewer__vr .center-horizontal {\n  position: absolute;\n  left: 50%;\n  margin-right: -50%;\n  -webkit-transform: translate(-50%, 0);\n  -moz-transform: translate(-50%, 0);\n  -ms-transform: translate(-50%, 0);\n  -o-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n}\n#viewer__vr .btn {\n  background: #3498db;\n  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);\n  background-image: -moz-linear-gradient(top, #3498db, #2980b9);\n  background-image: -ms-linear-gradient(top, #3498db, #2980b9);\n  background-image: -o-linear-gradient(top, #3498db, #2980b9);\n  background-image: linear-gradient(to bottom, #3498db, #2980b9);\n  -webkit-border-radius: 4;\n  -moz-border-radius: 4;\n  border-radius: 4px;\n  font-family: Arial;\n  color: #ffffff;\n  font-size: 0.65em;\n  padding: 0.2em 0.75em;\n  text-decoration: none;\n}\n#viewer__vr .btn:hover {\n  background: #3cb0fd;\n  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);\n  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);\n  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);\n  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);\n  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);\n  text-decoration: none;\n}\n#viewer__vr #enter-vr-modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 40%;\n  height: 40%;\n  z-index: 1;\n  background-color: black;\n  color: white;\n  opacity: 0.75;\n  padding: 0 0.5em;\n}\n#viewer__vr #enter-vr-modal p {\n  display: table;\n  text-align: center;\n  vertical-align: middle;\n  margin: auto;\n  font-size: 0.5em;\n  margin: 1em auto;\n}\n#viewer__vr #enter-vr-modal .enter-vr-modal__action-buttons {\n  position: absolute;\n  left: 50%;\n  margin-right: -50%;\n  -webkit-transform: translate(-50%, 0);\n  -moz-transform: translate(-50%, 0);\n  -ms-transform: translate(-50%, 0);\n  -o-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  bottom: 0;\n  padding: 0.5em;\n}\n#viewer__vr #enter-vr-modal #enter-vr-button,\n#viewer__vr #enter-vr-modal #exit-vr-button {\n  background: #3498db;\n  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);\n  background-image: -moz-linear-gradient(top, #3498db, #2980b9);\n  background-image: -ms-linear-gradient(top, #3498db, #2980b9);\n  background-image: -o-linear-gradient(top, #3498db, #2980b9);\n  background-image: linear-gradient(to bottom, #3498db, #2980b9);\n  -webkit-border-radius: 4;\n  -moz-border-radius: 4;\n  border-radius: 4px;\n  font-family: Arial;\n  color: #ffffff;\n  font-size: 0.65em;\n  padding: 0.2em 0.75em;\n  text-decoration: none;\n  cursor: pointer;\n  margin: 0.55em;\n  font-size: 0.5em;\n}\n@media screen and (orientation: portrait) and (max-width: 400px) {\n  #viewer__vr #enter-vr-modal {\n    width: 80%;\n  }\n}\n@media screen and (orientation: landscape) and (max-height: 275px) {\n  #viewer__vr #enter-vr-modal {\n    width: 60%;\n  }\n}\n#viewer__vr .a-canvas.ios-fullwindow {\n  position: fixed !important;\n  width: 100% !important;\n  height: 100% !important;\n  z-index: 1000 !important;\n  padding: 0 !important;\n}\n",""]),e.default=a},50065:function(t,e,n){var o=n(69136);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(32997).Z)("4c234cf8",o,!0,{})},6285:function(t,e,n){"use strict";t.exports=n.p+"a/0107ec1c8781eda13691.svg"}}]);