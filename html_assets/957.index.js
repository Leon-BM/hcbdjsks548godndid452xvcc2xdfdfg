(self.webpackChunk=self.webpackChunk||[]).push([[957],{21611:function(e,t,n){"use strict";n.r(t);var a=n(54933),o=n.n(a),l=n(93476),r=n.n(l)()(o());r.push([e.id,"\n.strong{\n  font-weight: 400;\n}\n.normal{\n  font-weight: 200;\n}\n.bold{\n  font-weight: bold;\n}\n",""]),t.default=r},90957:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var a=n(66357),o=n(52309),l={components:{VfMeasurement:n(96656).Z},mixins:[o.r],props:{buildings:{type:Array,required:!0},options:{type:Object,required:!0}},computed:{hasNotComputed(){return this.buildings.some((e=>e.floors.some((e=>e.notComputed))))}},methods:{capitalize:a.k}},r=(0,n(40810).Z)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.buildings,(function(t){return n("span",{key:t.id},[n("b",[e._v(e._s(t.name))]),e._v(" "),n("br"),e._v(" "),e._l(t.floors,(function(t){return n("span",{key:t.id,staticStyle:{"font-weight":"400","margin-left":"0.5em"}},[e._v("\n      "+e._s(t.name)+"\n      "),t.isBelowGrade?n("span",[e._v("("+e._s(e.l10n.belowGrade)+")")]):e._e(),e._v(" "),n("br"),e._v(" "),n("span",{staticStyle:{"margin-left":"1.25em",display:"block"}},[n("VfMeasurement",{attrs:{title:e.l10n.finishedArea,value:t.finishedArea,notComputed:t.notComputed}}),e._v(" "),n("VfMeasurement",{attrs:{title:e.l10n.unfinishedArea,value:t.unfinishedArea,notComputed:t.notComputed}})],1),e._v(" "),n("br")])}))],2)})),e._v(" "),e._l(e.buildings,(function(t){return n("span",{key:"b"+t.id},[n("b",[e._v(e._s(e.l10n.ansi)+",\n      "+e._s(e.capitalize(e.getLocalizedLabel(t.name))))]),n("br"),e._v(" "),n("span",{staticStyle:{display:"block","margin-left":"0.5em"}},[n("VfMeasurement",{attrs:{title:e.l10n.aboveGradeFinishedArea,value:t.finishedAreaAboveGrade,notComputed:e.hasNotComputed,valueStrong:""}}),e._v(" "),n("VfMeasurement",{attrs:{title:e.l10n.aboveGradeUnfinishedArea,value:t.unfinishedAreaAboveGrade,notComputed:e.hasNotComputed,valueStrong:""}}),e._v(" "),t.finishedAreaBelowGrade?n("VfMeasurement",{attrs:{title:e.l10n.belowGradeFinishedArea,value:t.finishedAreaBelowGrade,notComputed:e.hasNotComputed,valueStrong:""}}):e._e(),e._v(" "),t.unfinishedAreaBelowGrade?n("VfMeasurement",{attrs:{title:e.l10n.belowGradeUnfinishedArea,value:t.unfinishedAreaBelowGrade,notComputed:e.hasNotComputed,valueStrong:""}}):e._e(),e._v(" "),n("br")],1),e._v(" "),e.options.showTotalArea?n("b",[e._v("\n      "+e._s(e.l10n.totalAreaAboveBelowGrade)+",\n      "+e._s(e.capitalize(e.getLocalizedLabel(t.name)))+"\n    ")]):e._e(),e._v(" "),n("br"),e._v(" "),e.options.showTotalArea?n("span",{staticStyle:{display:"block","margin-left":"0.5em"}},[t.finishedAreaTotal?n("VfMeasurement",{attrs:{title:e.l10n.finishedArea,value:t.finishedAreaTotal,notComputed:e.hasNotComputed,valueStrong:""}}):e._e(),e._v(" "),t.unfinishedAreaTotal?n("VfMeasurement",{attrs:{title:e.l10n.unfinishedArea,value:t.unfinishedAreaTotal,notComputed:e.hasNotComputed,valueStrong:""}}):e._e(),e._v(" "),n("br")],1):e._e()])}))],2)}),[],!1,null,null,null).exports},96656:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a={mixins:[n(52309).r],props:{title:{type:String,default:""},value:{type:String,default:""},notComputed:{type:Boolean},titleBold:{type:Boolean},valueStrong:{type:Boolean}}},o=(n(83935),(0,n(40810).Z)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("span",{staticClass:"strong",class:[e.titleBold?"bold":""]},[e._v(e._s(e.title)+":")]),e._v(" "),n("span",{class:[e.valueStrong?"strong":"normal"]},[e._v(e._s(e.notComputed?e.l10n.abbrNC:e.value?e.value:e.l10n.abbrNA))]),e._v(" "),n("br")])}),[],!1,null,null,null).exports)},83935:function(e,t,n){var a=n(21611);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,n(32997).Z)("5a9819b6",a,!0,{})}}]);