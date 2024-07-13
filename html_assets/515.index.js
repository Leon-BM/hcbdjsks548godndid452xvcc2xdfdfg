(self.webpackChunk=self.webpackChunk||[]).push([[515],{21611:function(e,t,r){"use strict";r.r(t);var a=r(54933),n=r.n(a),l=r(93476),i=r.n(l)()(n());i.push([e.id,"\n.strong{\n  font-weight: 400;\n}\n.normal{\n  font-weight: 200;\n}\n.bold{\n  font-weight: bold;\n}\n",""]),t.default=i},13515:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var a=r(96656),n=r(52309),l={components:{VfMeasurement:a.Z},mixins:[n.r],props:{buildings:{type:Array,required:!0},options:{type:Object,required:!0}}},i=(0,r(40810).Z)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._l(e.buildings,(function(t){return r("span",{key:t.id},[r("b",[e._v(e._s(t.name))]),e._v(" "),r("br"),e._v(" "),e._l(t.floors,(function(a){return r("span",{key:a.id,staticStyle:{"font-weight":"400","margin-left":"0.5em"}},[e._v("\n      "+e._s(a.name)+"\n      "),a.isBelowGrade?r("span",[e._v("("+e._s(e.l10n.belowGrade)+")")]):e._e(),e._v(" "),r("br"),e._v(" "),r("span",{staticStyle:{display:"block","margin-left":"1.25em"}},[a.interiorArea?r("VfMeasurement",{attrs:{value:a.interiorArea,title:e.l10n.interiorArea}}):e._e(),e._v(" "),a.excludedArea?r("VfMeasurement",{attrs:{value:a.excludedArea,title:e.l10n.excludedArea}}):e._e(),e._v(" "),a.perimeter?r("VfMeasurement",{attrs:{value:a.perimeter,title:e.l10n.perimeterWallLength}}):e._e(),e._v(" "),(a.wallThickness||t.wallThickness)&&(a.interiorArea||a.perimeter||a.exteriorArea)?r("VfMeasurement",{attrs:{value:a.wallThickness,title:e.l10n.perimeterWallThickness}}):e._e(),e._v(" "),a.exteriorArea?r("VfMeasurement",{attrs:{value:a.exteriorArea,title:e.l10n.exteriorArea}}):e._e(),e._v(" "),e.options.reportFinishedArea&&(a.finishedArea||a.unfinishedArea)?r("VfMeasurement",{attrs:{title:e.l10n.finishedArea,value:a.finishedArea}}):e._e(),e._v(" "),e.options.reportFinishedArea&&(a.finishedArea||a.unfinishedArea)?r("VfMeasurement",{attrs:{title:e.l10n.unfinishedArea,value:a.unfinishedArea}}):e._e(),e._v(" "),a.interiorArea||a.perimeter||a.exteriorArea?e._e():r("span",[e._v("\n          "+e._s(e.l10n.allSpaceIsExcluded)),r("br")]),e._v(" "),r("br")],1)])}))],2)})),e._v(" "),e.options.showTotalArea?r("b",[e._v(e._s(e.l10n.totalFloorArea))]):r("b",[e._v(e._s(e.l10n.totalAboveGradeFloorArea))]),e._v(" "),r("br"),e._v(" "),e._l(e.buildings,(function(t){return r("span",{key:"b"+t.id},[r("span",{staticStyle:{"margin-left":"0.5em",display:"block"}},[e.options.noInteriorArea&&t.extAreaAboveGrade?e._e():r("span",[e.options.showTotalArea&&t.intAreaTotal||t.intAreaAboveGrade?r("VfMeasurement",{attrs:{title:t.name+" "+e.l10n.interior,value:e.options.showTotalArea?t.intAreaTotal:t.intAreaAboveGrade}}):e._e(),e._v(" "),e.options.showTotalArea&&t.excludedAreaTotal||t.excludedAreaAboveGrade?r("VfMeasurement",{attrs:{title:t.name+" "+e.l10n.excluded,value:e.options.showTotalArea?t.excludedAreaTotal:t.excludedAreaAboveGrade}}):e._e()],1),e._v(" "),r("VfMeasurement",{attrs:{title:t.name+" "+e.l10n.exterior,value:e.options.showTotalArea?t.extAreaTotal:t.extAreaAboveGrade,titleBold:"",valueStrong:""}}),e._v(" "),e.options.reportFinishedArea&&(t.finishedAreaAboveGrade||t.unfinishedAreaAboveGrade)?r("span",[r("VfMeasurement",{attrs:{title:t.name+" "+e.l10n.finishedArea,value:e.options.showTotalArea?t.finishedAreaTotal:t.finishedAreaAboveGrade,valueStrong:""}}),e._v(" "),r("VfMeasurement",{attrs:{title:t.name+" "+e.l10n.unfinishedArea,value:e.options.showTotalArea?t.unfinishedAreaTotal:t.unfinishedAreaAboveGrade,valueStrong:""}})],1):e._e(),e._v(" "),r("br")],1)])}))],2)}),[],!1,null,null,null).exports},96656:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a={mixins:[r(52309).r],props:{title:{type:String,default:""},value:{type:String,default:""},notComputed:{type:Boolean},titleBold:{type:Boolean},valueStrong:{type:Boolean}}},n=(r(83935),(0,r(40810).Z)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("span",{staticClass:"strong",class:[e.titleBold?"bold":""]},[e._v(e._s(e.title)+":")]),e._v(" "),r("span",{class:[e.valueStrong?"strong":"normal"]},[e._v(e._s(e.notComputed?e.l10n.abbrNC:e.value?e.value:e.l10n.abbrNA))]),e._v(" "),r("br")])}),[],!1,null,null,null).exports)},83935:function(e,t,r){var a=r(21611);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,r(32997).Z)("5a9819b6",a,!0,{})}}]);