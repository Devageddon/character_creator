(()=>{"use strict";var e={841:(e,t,a)=>{var s=a(130),r=a(768);const l={id:"app"};function c(e,t,a,s,c,o){const n=(0,r.g2)("Navbar"),i=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",l,[(0,r.bF)(n),(0,r.bF)(i)])}const o={class:"navbar"},n={class:"nav-links"};function i(e,t,a,s,l,c){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("nav",o,[t[3]||(t[3]=(0,r.Lk)("h1",null,"Character Creator",-1)),(0,r.Lk)("div",n,[(0,r.bF)(i,{to:"/"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("Builder")]))),_:1}),(0,r.bF)(i,{to:"/add-part"},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("Add Part")]))),_:1}),(0,r.bF)(i,{to:"/find-parts"},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("Find Parts")]))),_:1})])])}const d={name:"Navbar"};var u=a(241);const p=(0,u.A)(d,[["render",i],["__scopeId","data-v-19f0294a"]]),h=p,m={components:{Navbar:h}},k=(0,u.A)(m,[["render",c],["__scopeId","data-v-5adf84b4"]]),b=k;var y=a(973);const g={class:"add-part-wrapper"},f={class:"add-part"},v={class:"form-group"},P={class:"form-group"},E={class:"form-group"},L={class:"form-group"};function C(e,t,a,l,c,o){return(0,r.uX)(),(0,r.CE)("div",g,[(0,r.Lk)("div",f,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=t=>e.$router.push("/"))},"Back"),t[11]||(t[11]=(0,r.Lk)("h3",null,"Add a New Part",-1)),(0,r.Lk)("form",{onSubmit:t[5]||(t[5]=(0,s.D$)(((...e)=>o.addPart&&o.addPart(...e)),["prevent"]))},[(0,r.Lk)("div",v,[t[6]||(t[6]=(0,r.Lk)("label",{for:"name"},"Part Name",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>c.part.name=e),placeholder:"Enter part name",required:""},null,512),[[s.Jo,c.part.name]])]),(0,r.Lk)("div",P,[t[7]||(t[7]=(0,r.Lk)("label",{for:"type"},"Type (e.g., head, eyes, etc.)",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>c.part.type=e),placeholder:"Enter part type",required:""},null,512),[[s.Jo,c.part.type]])]),(0,r.Lk)("div",E,[t[8]||(t[8]=(0,r.Lk)("label",{for:"filePath"},"File Path",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>c.part.filePath=e),placeholder:"Enter file path",required:""},null,512),[[s.Jo,c.part.filePath]])]),(0,r.Lk)("div",L,[t[9]||(t[9]=(0,r.Lk)("label",{for:"tags"},"Tags (comma-separated)",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=e=>c.tagsInput=e),placeholder:"Enter tags"},null,512),[[s.Jo,c.tagsInput]])]),t[10]||(t[10]=(0,r.Lk)("button",{type:"submit"},"Add Part",-1))],32)])])}var S=a(161),w=a(400),I=a(844);const M={apiKey:(void 0).VITE_API_KEY,authDomain:"character-creator-7be8e.firebaseapp.com",projectId:"character-creator-7be8e",storageBucket:"character-creator-7be8e.appspot.com",messagingSenderId:"686916926734",appId:"1:686916926734:web:aefa4c260c1c59701cab5f",measurementId:"G-YEPM1R5F1Q"},H=(0,w.Wp)(M),N=((0,I.c7)(H),(0,S.C3)(H)),X={data(){return{part:{name:"",type:"",filePath:"",tags:[]},tagsInput:""}},methods:{addPart(){this.part.tags=this.tagsInput.split(",").map((e=>e.trim()));const e=(0,S.KR)(N,"parts");(0,S.VC)(e,this.part).then((()=>{this.part={name:"",type:"",filePath:"",tags:[]},this.tagsInput=""}))}}},O=(0,u.A)(X,[["render",C],["__scopeId","data-v-6d617fd8"]]),_=O,B={class:"character-builder-wrapper"},A={class:"clear-all"},Q={class:"character-builder"},T={class:"character-display"},D=["src"],j=["src"],x=["src"],F=["src"],J=["src"],$=["src"],R=["src"],V=["src"],W=["src"],K=["src"],U=["src"],Z=["src"],q={class:"side-buttons"};function z(e,t,a,s,l,c){const o=(0,r.g2)("SlidingMenu");return(0,r.uX)(),(0,r.CE)("div",B,[(0,r.Lk)("div",A,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>c.clearAll&&c.clearAll(...e)),class:"clear-button"},"Clear All")]),(0,r.Lk)("div",Q,[(0,r.Lk)("div",T,[l.selectedBackground?((0,r.uX)(),(0,r.CE)("img",{key:0,src:l.selectedBackground,alt:"Background",class:"background-layer"},null,8,D)):(0,r.Q3)("",!0),e.selectedHairBack?((0,r.uX)(),(0,r.CE)("img",{key:1,src:e.selectedHairBack,alt:"Hair Back",class:"hair-back-layer"},null,8,j)):(0,r.Q3)("",!0),l.selectedShirt?((0,r.uX)(),(0,r.CE)("img",{key:2,src:l.selectedShirt,alt:"Shirt",class:"shirt-layer"},null,8,x)):(0,r.Q3)("",!0),e.selectedJacket?((0,r.uX)(),(0,r.CE)("img",{key:3,src:e.selectedJacket,alt:"Jacket",class:"jacket-layer"},null,8,F)):(0,r.Q3)("",!0),l.selectedEar?((0,r.uX)(),(0,r.CE)("img",{key:4,src:l.selectedEar,alt:"Ear",class:"ear-layer"},null,8,J)):(0,r.Q3)("",!0),l.selectedHead?((0,r.uX)(),(0,r.CE)("img",{key:5,src:l.selectedHead,alt:"Head",class:"head-layer"},null,8,$)):(0,r.Q3)("",!0),e.selectedWrinkles?((0,r.uX)(),(0,r.CE)("img",{key:6,src:e.selectedWrinkles,alt:"Wrinkles",class:"wrinkle-layer"},null,8,R)):(0,r.Q3)("",!0),l.selectedMouth?((0,r.uX)(),(0,r.CE)("img",{key:7,src:l.selectedMouth,alt:"Mouth",class:"mouth-layer"},null,8,V)):(0,r.Q3)("",!0),l.selectedNose?((0,r.uX)(),(0,r.CE)("img",{key:8,src:l.selectedNose,alt:"Nose",class:"nose-layer"},null,8,W)):(0,r.Q3)("",!0),l.selectedEye?((0,r.uX)(),(0,r.CE)("img",{key:9,src:l.selectedEye,alt:"Eye",class:"eye-layer"},null,8,K)):(0,r.Q3)("",!0),l.selectedEyebrow?((0,r.uX)(),(0,r.CE)("img",{key:10,src:l.selectedEyebrow,alt:"Eyebrow",class:"eyebrow-layer"},null,8,U)):(0,r.Q3)("",!0),l.selectedHair?((0,r.uX)(),(0,r.CE)("img",{key:11,src:l.selectedHair,alt:"Hair",class:"hair-layer"},null,8,Z)):(0,r.Q3)("",!0)]),(0,r.Lk)("div",q,[(0,r.Lk)("button",{onClick:t[1]||(t[1]=e=>c.openMenu("head")),class:"button"},"Select Head"),(0,r.Lk)("button",{onClick:t[2]||(t[2]=e=>c.openMenu("nose")),class:"button"},"Select Nose"),(0,r.Lk)("button",{onClick:t[3]||(t[3]=e=>c.openMenu("ear")),class:"button"},"Select Ear"),(0,r.Lk)("button",{onClick:t[4]||(t[4]=e=>c.openMenu("eyebrow")),class:"button"},"Select Eyebrow"),(0,r.Lk)("button",{onClick:t[5]||(t[5]=e=>c.openMenu("eye")),class:"button"},"Select Eye"),(0,r.Lk)("button",{onClick:t[6]||(t[6]=e=>c.openMenu("mouth")),class:"button"},"Select Mouth"),(0,r.Lk)("button",{onClick:t[7]||(t[7]=e=>c.openMenu("hair")),class:"button"},"Select Hair"),(0,r.Lk)("button",{onClick:t[8]||(t[8]=e=>c.openMenu("shirt")),class:"button"},"Select Shirt"),(0,r.Lk)("button",{onClick:t[9]||(t[9]=e=>c.openMenu("background")),class:"button"},"Select Background")])]),l.menuOpen?((0,r.uX)(),(0,r.Wv)(o,{key:0,"is-open":l.menuOpen,part:l.selectedPart,onClose:t[10]||(t[10]=e=>l.menuOpen=!1),onPartSelected:c.setSelectedPart},null,8,["is-open","part","onPartSelected"])):(0,r.Q3)("",!0)])}var Y=a(232);const G={key:0,class:"thumbnail-grid"},ee=["onClick"],te=["src","alt"],ae={key:1};function se(e,t,a,s,l,c){return(0,r.uX)(),(0,r.CE)("div",{class:(0,Y.C4)(["sliding-menu",{"is-open":a.isOpen}])},[(0,r.Lk)("button",{class:"close-button",onClick:t[0]||(t[0]=(...e)=>c.closeMenu&&c.closeMenu(...e))},"X"),(0,r.Lk)("h3",null,"Select a "+(0,Y.v_)(a.part),1),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>c.selectNone&&c.selectNone(...e)),class:"none-button"},"None"),l.thumbnails.length>0?((0,r.uX)(),(0,r.CE)("div",G,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(l.thumbnails,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e.id,class:"thumbnail-container",onClick:t=>c.selectThumbnail(e)},[(0,r.Lk)("img",{src:e.filePath,alt:e.name,class:"thumbnail"},null,8,te),(0,r.Lk)("p",null,(0,Y.v_)(e.name),1)],8,ee)))),128))])):((0,r.uX)(),(0,r.CE)("p",ae,"No images found for this part type."))],2)}const re={props:["isOpen","part"],data(){return{thumbnails:[]}},methods:{closeMenu(){this.$emit("close")},selectThumbnail(e){this.$emit("part-selected",e.filePath)},selectNone(){this.$emit("part-selected","none")},fetchThumbnails(){const e=(0,S.KR)(N,"parts");(0,S.Zy)(e,(e=>{const t=e.val();t?this.thumbnails=Object.values(t).filter((e=>e.type===this.part)):console.warn(`No parts found for type: ${this.part}`)}),(e=>{console.error("Error fetching parts:",e)}))}},watch:{part(e){e&&this.fetchThumbnails()}},mounted(){this.fetchThumbnails()}},le=(0,u.A)(re,[["render",se],["__scopeId","data-v-84dc3b2a"]]),ce=le,oe={components:{SlidingMenu:ce},data(){return{menuOpen:!1,selectedPart:null,selectedHead:null,selectedNose:null,selectedEar:null,selectedEyebrow:null,selectedEye:null,selectedMouth:null,selectedHair:null,selectedShirt:null,selectedBackground:null}},methods:{openMenu(e){this.menuOpen=!0,this.selectedPart=e},setSelectedPart(e){"none"===e&&(e=this.getBlankSvg()),"head"===this.selectedPart?this.selectedHead=e:"nose"===this.selectedPart?this.selectedNose=e:"ear"===this.selectedPart?this.selectedEar=e:"eyebrow"===this.selectedPart?this.selectedEyebrow=e:"eye"===this.selectedPart?this.selectedEye=e:"mouth"===this.selectedPart?this.selectedMouth=e:"hair"===this.selectedPart?this.selectedHair=e:"shirt"===this.selectedPart?this.selectedShirt=e:"background"===this.selectedPart&&(this.selectedBackground=e),this.saveToLocalStorage()},clearAll(){this.selectedHead=null,this.selectedNose=null,this.selectedEar=null,this.selectedEyebrow=null,this.selectedEye=null,this.selectedMouth=null,this.selectedHair=null,this.selectedShirt=null,this.selectedBackground=null,this.saveToLocalStorage()},saveToLocalStorage(){const e={selectedHead:this.selectedHead,selectedNose:this.selectedNose,selectedEar:this.selectedEar,selectedEyebrow:this.selectedEyebrow,selectedEye:this.selectedEye,selectedMouth:this.selectedMouth,selectedHair:this.selectedHair,selectedShirt:this.selectedShirt,selectedBackground:this.selectedBackground};localStorage.setItem("characterParts",JSON.stringify(e))},loadFromLocalStorage(){const e=JSON.parse(localStorage.getItem("characterParts"));e&&(this.selectedHead=e.selectedHead,this.selectedNose=e.selectedNose,this.selectedEar=e.selectedEar,this.selectedEyebrow=e.selectedEyebrow,this.selectedEye=e.selectedEye,this.selectedMouth=e.selectedMouth,this.selectedHair=e.selectedHair,this.selectedShirt=e.selectedShirt,this.selectedBackground=e.selectedBackground)},getBlankSvg(){return"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIi8+PC9zdmc+"}},mounted(){this.loadFromLocalStorage()}},ne=(0,u.A)(oe,[["render",z],["__scopeId","data-v-55b19164"]]),ie=ne,de={key:0,class:"edit-part-wrapper"},ue={class:"edit-part"},pe={class:"image-container"},he=["src"],me={class:"form-container"},ke={class:"form-group"},be={class:"form-group"},ye={class:"form-group"},ge={class:"form-group"},fe={key:0,class:"delete-popup-overlay"},ve={class:"delete-popup"},Pe={class:"popup-buttons"},Ee={key:1};function Le(e,t,a,l,c,o){return c.part?((0,r.uX)(),(0,r.CE)("div",de,[(0,r.Lk)("div",ue,[(0,r.Lk)("div",pe,[(0,r.Lk)("img",{src:c.part.filePath,alt:"Part Image",class:"part-image"},null,8,he)]),(0,r.Lk)("div",me,[t[13]||(t[13]=(0,r.Lk)("h3",null,"Edit Part",-1)),(0,r.Lk)("form",{onSubmit:t[5]||(t[5]=(0,s.D$)(((...e)=>o.savePart&&o.savePart(...e)),["prevent"]))},[(0,r.Lk)("div",ke,[t[8]||(t[8]=(0,r.Lk)("label",{for:"name"},"Part Name",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>c.part.name=e),placeholder:"Enter part name",required:""},null,512),[[s.Jo,c.part.name]])]),(0,r.Lk)("div",be,[t[9]||(t[9]=(0,r.Lk)("label",{for:"type"},"Type (e.g., head, eyes, etc.)",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>c.part.type=e),placeholder:"Enter part type",required:""},null,512),[[s.Jo,c.part.type]])]),(0,r.Lk)("div",ye,[t[10]||(t[10]=(0,r.Lk)("label",{for:"filePath"},"File Path",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>c.part.filePath=e),placeholder:"Enter file path",required:""},null,512),[[s.Jo,c.part.filePath]])]),(0,r.Lk)("div",ge,[t[11]||(t[11]=(0,r.Lk)("label",{for:"tags"},"Tags (comma-separated)",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>c.tagsInput=e),placeholder:"Enter tags"},null,512),[[s.Jo,c.tagsInput]])]),t[12]||(t[12]=(0,r.Lk)("button",{type:"submit"},"Save Part",-1)),(0,r.Lk)("button",{type:"button",onClick:t[4]||(t[4]=(...e)=>o.confirmDelete&&o.confirmDelete(...e)),class:"delete-button"},"Delete Part")],32)])]),c.showDeletePopup?((0,r.uX)(),(0,r.CE)("div",fe,[(0,r.Lk)("div",ve,[t[14]||(t[14]=(0,r.Lk)("p",null,"Are you sure you want to delete this part?",-1)),(0,r.Lk)("div",Pe,[(0,r.Lk)("button",{onClick:t[6]||(t[6]=(...e)=>o.deletePart&&o.deletePart(...e))},"Yes"),(0,r.Lk)("button",{onClick:t[7]||(t[7]=(...e)=>o.closeDeletePopup&&o.closeDeletePopup(...e))},"No")])])])):(0,r.Q3)("",!0)])):((0,r.uX)(),(0,r.CE)("div",Ee,t[15]||(t[15]=[(0,r.Lk)("p",null,"Loading part details...",-1)])))}const Ce={data(){return{part:null,tagsInput:"",showDeletePopup:!1}},methods:{fetchPart(e){const t=(0,S.KR)(N,"parts");(0,S.Zy)(t,(t=>{const a=t.val(),s=Object.values(a).find((t=>t.name===e));s?(this.part=s,this.tagsInput=this.part.tags.join(", ")):console.error("Part not found")}))},savePart(){if(this.part){this.part.tags=this.tagsInput.split(",").map((e=>e.trim()));const e=(0,S.KR)(N,`parts/${this.part.id}`);(0,S.yo)(e,this.part).then((()=>alert("Part updated successfully"))).catch((e=>console.error("Error updating part:",e)))}},confirmDelete(){this.showDeletePopup=!0},closeDeletePopup(){this.showDeletePopup=!1},deletePart(){const e=(0,S.KR)(N,`parts/${this.part.id}`);(0,S.TF)(e).then((()=>{alert("Part deleted successfully"),this.$router.push("/find-parts")})).catch((e=>console.error("Error deleting part:",e)))}},mounted(){const e=this.$route.params.name;e?this.fetchPart(e):console.error("Part name is missing from route params")}},Se=(0,u.A)(Ce,[["render",Le],["__scopeId","data-v-30ba4b90"]]),we=Se,Ie={class:"find-parts-wrapper"},Me={class:"find-parts-container"},He={class:"masonry-grid"},Ne={class:"card-content"},Xe=["src"],Oe={class:"card-footer"},_e=["onClick"];function Be(e,t,a,l,c,o){return(0,r.uX)(),(0,r.CE)("div",Ie,[(0,r.Lk)("div",Me,[(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>c.searchQuery=e),placeholder:"Search parts by name...",class:"search-bar",onInput:t[1]||(t[1]=(...e)=>o.searchParts&&o.searchParts(...e))},null,544),[[s.Jo,c.searchQuery]]),(0,r.Lk)("div",He,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(c.filteredParts,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{key:t,class:"card"},[(0,r.Lk)("div",Ne,[(0,r.Lk)("img",{src:e.filePath,alt:"Part Image",class:"part-image"},null,8,Xe),(0,r.Lk)("div",Oe,[(0,r.Lk)("p",null,(0,Y.v_)(e.name),1),(0,r.Lk)("button",{onClick:t=>o.openEditPage(e)},"Info",8,_e)])])])))),128))])])])}const Ae={data(){return{searchQuery:"",parts:[],filteredParts:[]}},methods:{fetchParts(){const e=(0,S.KR)(N,"parts");(0,S.Zy)(e,(e=>{const t=e.val();this.parts=t?Object.values(t):[],this.filteredParts=[]}))},searchParts(){""===this.searchQuery.trim()?this.filteredParts=[]:this.filteredParts=this.parts.filter((e=>e.name.toLowerCase().includes(this.searchQuery.toLowerCase())))},openEditPage(e){e&&e.name?this.$router.push({name:"EditPart",params:{name:e.name}}):console.error("Part name is missing")}},mounted(){this.fetchParts()}},Qe=(0,u.A)(Ae,[["render",Be],["__scopeId","data-v-245ed182"]]),Te=Qe,De=[{path:"/",component:ie},{path:"/add-part",component:_},{path:"/find-parts",component:Te},{path:"/edit-part/:name",name:"EditPart",component:we}],je=(0,y.aE)({history:(0,y.Bt)("/character_creator/"),routes:De}),xe=je,Fe={parts:{head:[]}},Je={SET_PART_OPTIONS(e,{partName:t,options:a}){e.parts[t]=a}},$e={async loadPartOptions({commit:e},t){}},Re={getPartOptions:e=>t=>e.parts[t]||[]},Ve={namespaced:!0,state:Fe,mutations:Je,actions:$e,getters:Re};var We=a(782);const Ke=(0,We.y$)({modules:{character:Ve}}),Ue=(0,s.Ef)(b);Ue.use(Ke),Ue.use(xe),Ue.mount("#app")}},t={};function a(s){var r=t[s];if(void 0!==r)return r.exports;var l=t[s]={exports:{}};return e[s](l,l.exports,a),l.exports}a.m=e,(()=>{var e=[];a.O=(t,s,r,l)=>{if(!s){var c=1/0;for(d=0;d<e.length;d++){for(var[s,r,l]=e[d],o=!0,n=0;n<s.length;n++)(!1&l||c>=l)&&Object.keys(a.O).every((e=>a.O[e](s[n])))?s.splice(n--,1):(o=!1,l<c&&(c=l));if(o){e.splice(d--,1);var i=r();void 0!==i&&(t=i)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[s,r,l]}})(),(()=>{a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={524:0};a.O.j=t=>0===e[t];var t=(t,s)=>{var r,l,[c,o,n]=s,i=0;if(c.some((t=>0!==e[t]))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(n)var d=n(a)}for(t&&t(s);i<c.length;i++)l=c[i],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(d)},s=self["webpackChunkcharacter_creator"]=self["webpackChunkcharacter_creator"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var s=a.O(void 0,[504],(()=>a(841)));s=a.O(s)})();
//# sourceMappingURL=app.88e9956d.js.map