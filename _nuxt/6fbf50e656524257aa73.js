(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(t,e,n){"use strict";n.d(e,"a",function(){return r});n(29);var r={mounted:function(){"localhost"!==window.location.hostname&&null!==this.$route.name&&(window.location="/404.html")}}},228:function(t,e,n){"use strict";n.r(e);n(31);var r,o=n(5),l=(n(29),n(19),n(14),n(111),n(41),{head:{titleTemplate:"Random User Data Generator - %s",meta:[{hid:"description",name:"description",content:"Random dummy user data generator."},{hid:"og:title",name:"og:title",content:"NamsoGen's Random User Data Generator"},{hid:"og:description",name:"og:description",content:"Random dummy user data generator."}]},mixins:[{filters:{ucwords:function(t){return(t+"").replace(/^(.)|\s+(.)/g,function(t){return t.toUpperCase()})}}},{filters:{jsonify:function(data){return JSON.stringify(data,null,2)}}},n(181).a],filters:{birthdate:function(t){var e=new Date(t);return"".concat(e.getFullYear(),"/").concat(e.getMonth(),"/").concat(e.getDate())}},data:function(){return{show:"cards",users:[],filters:{results:10,gender:"",password:"upper,lower,12",exc:"register,picture,id"},isGenerating:!1,nat:["US","CA","AU"],nationalities:["AU","BR","CA","CH","DE","DK","ES","FI","FR","GB","IE","IR","NO","NL","NZ","TR","US"]}},computed:{queryFilters:function(){return Object.entries(this.filters).map(function(filter){return"".concat(filter[0],"=").concat(filter[1])}).join("&")+"&nat=".concat(this.nat.join(","))},formattedUsers:function(){return this.users.map(function(t){return{name:"".concat(t.name.first," ").concat(t.name.last),email:"".concat(t.name.last).concat(t.dob.age,"@example.com"),username:t.login.username,password:t.login.password,gender:t.gender,age:t.dob.age,birthdate:t.dob.date,street:t.location.street,city:t.location.city,state:t.location.state,postal_code:t.location.postcode,phone:t.phone,cell:t.cell}})}},methods:{fetchRandomUser:(r=Object(o.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$axios.get("https://randomuser.me/api?".concat(this.queryFilters)),t.abrupt("return",e);case 2:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)}),generate:function(){var t=this;this.isGenerating=!0,this.fetchRandomUser().then(function(e){t.users=e.data.results,t.isGenerating=!1}).catch(function(t){return alert("Something went wrong.")})},toggleShow:function(){this.show="json"===this.show?"cards":"json"}}}),c=n(6),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-70-screen"},[n("h1",{staticClass:"text-3xl font-bold text-gray-700 text-center"},[t._v("Random Dummy User Data Generator")]),t._v(" "),t._m(0),t._v(" "),n("form",{staticClass:"mt-10 w-full lg:w-1/2 mx-auto",attrs:{action:"/",method:"get"},on:{submit:function(e){return e.preventDefault(),t.generate(e)}}},[n("div",{staticClass:"flex flex-wrap -mx-2"},[n("div",{staticClass:"w-full md:w-1/2 px-2"},[n("label",{staticClass:"block cursor-pointer relative"},[n("span",{staticClass:"text-gray-600 font-medium text-xs absolute bg-white px-3 pt-1 ml-2 -mt-3 uppercase"},[t._v("Gender")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.gender,expression:"filters.gender"}],staticClass:"form-select block w-full",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.filters,"gender",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[t._v("Random")]),t._v(" "),n("option",{attrs:{value:"male"}},[t._v("Male")]),t._v(" "),n("option",{attrs:{value:"female"}},[t._v("Female")])])])]),t._v(" "),n("div",{staticClass:"w-full md:w-1/2 px-2 mt-6 md:mt-0"},[n("label",{staticClass:"block cursor-pointer relative"},[n("span",{staticClass:"text-gray-600 font-medium text-xs absolute bg-white px-3 pt-1 ml-2 -mt-3 uppercase"},[t._v("Results")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.results,expression:"filters.results"}],staticClass:"form-input block w-full",attrs:{type:"text"},domProps:{value:t.filters.results},on:{input:function(e){e.target.composing||t.$set(t.filters,"results",e.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"mt-6"},[t._m(1),t._v(" "),n("div",{staticClass:"flex flex-wrap border-2 border-gray-500 rounded py-3"},t._l(t.nationalities,function(e,r){return n("label",{key:r,staticClass:"flex items-center cursor-pointer mx-2",class:[""]},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.nat,expression:"nat"}],staticClass:"form-checkbox text-teal-700 cursor-pointer",attrs:{type:"checkbox"},domProps:{value:e,checked:Array.isArray(t.nat)?t._i(t.nat,e)>-1:t.nat},on:{change:function(n){var r=t.nat,o=n.target,l=!!o.checked;if(Array.isArray(r)){var c=e,d=t._i(r,c);o.checked?d<0&&(t.nat=r.concat([c])):d>-1&&(t.nat=r.slice(0,d).concat(r.slice(d+1)))}else t.nat=l}}}),t._v(" "),n("span",{staticClass:"ml-2"},[t._v(t._s(e))])])}),0)]),t._v(" "),n("div",{staticClass:"mt-6"},[n("button",{staticClass:"block sm:inline-block w-full sm:w-auto shadow-md bg-teal-600 text-white font-medium rounded py-3 px-8 hover:bg-teal-500 focus:bg-teal-700 focus:outline-none",class:{"opacity-50 cursor-wait":t.isGenerating},attrs:{disabled:t.isGenerating,type:"submit"}},[t.isGenerating?[t._v("Generating")]:[t._v("Generate")]],2),t._v(" "),t.formattedUsers.length?n("button",{staticClass:"mt-3 sm:mt-0 block sm:inline-block w-full sm:w-auto shadow-md bg-gray-600 text-white font-medium rounded py-3 px-8 hover:bg-gray-500 focus:bg-gray-700 focus:outline-none",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.toggleShow(e)}}},[t._v("\n                Show "+t._s("json"===t.show?"card":"json")+" format\n            ")]):t._e()])]),t._v(" "),t.isGenerating?n("div",{staticClass:"py-20"},[n("svg",{staticClass:"fill-current w-24 mx-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[n("circle",{attrs:{cx:"50",cy:"50",fill:"none","stroke-linecap":"round",r:"30","stroke-width":"6",stroke:"#319795","stroke-dasharray":"47.12388980384689 47.12388980384689"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}})],1)])]):t._e(),t._v(" "),t.users.length&&!t.isGenerating?n("div",{staticClass:"bg-gray-100 p-2 rounded border border-gray-200 mt-10"},["json"===t.show?n("pre",{staticClass:"overflow-auto"},[t._v(t._s(t._f("jsonify")(t.formattedUsers)))]):n("div",{staticClass:"flex flex-wrap -mx-1 leading-relaxed"},t._l(t.formattedUsers,function(e,r){return n("div",{key:r,staticClass:"w-full lg:w-1/2 px-2 my-2"},[n("div",{staticClass:"bg-white p-3 shadow rounded-lg h-full"},[n("div",{staticClass:"flex flex-wrap -mx-1"},[n("div",{staticClass:"w-full sm:w-1/2 px-1 h-full"},[n("p",[n("span",{staticClass:"text-gray-500"},[t._v("Name:")]),t._v(" "),n("span",[t._v(t._s(t._f("ucwords")(e.name)))])]),t._v(" "),n("p",[n("span",{staticClass:"text-gray-500"},[t._v("Email:")]),t._v(" "),n("span",[t._v(t._s(e.email))])]),t._v(" "),n("p",[n("span",{staticClass:"text-gray-500"},[t._v("Username:")]),t._v(" "),n("span",[t._v(t._s(e.username))])]),t._v(" "),n("p",[n("span",{staticClass:"text-gray-500"},[t._v("Password:")]),t._v(" "),n("span",[t._v(t._s(e.password))])]),t._v(" "),n("p",[n("span",{staticClass:"text-gray-500"},[t._v("Gender:")]),t._v(" "),n("span",[t._v(t._s(t._f("ucwords")(e.gender)))])]),t._v(" "),n("p",[n("span",{staticClass:"text-gray-500"},[t._v("Age:")]),t._v(" "),n("span",[t._v(t._s(e.age))])]),t._v(" "),n("p",[n("span",{staticClass:"text-gray-500"},[t._v("Birthday:")]),t._v(" "),n("span",[t._v(t._s(t._f("birthdate")(e.birthdate)))])])]),t._v(" "),n("div",{staticClass:"w-full sm:w-1/2 px-1"},[n("p",[n("span",{staticClass:"text-gray-500"},[t._v("Street:")]),t._v(" "),n("span",[t._v(t._s(t._f("ucwords")(e.street)))])]),t._v(" "),n("p",[n("span",{staticClass:"text-gray-500"},[t._v("City:")]),t._v(" "),n("span",[t._v(t._s(t._f("ucwords")(e.city)))])]),t._v(" "),n("p",[n("span",{staticClass:"text-gray-500"},[t._v("State:")]),t._v(" "),n("span",[t._v(t._s(t._f("ucwords")(e.state)))])]),t._v(" "),n("p",[n("span",{staticClass:"text-gray-500"},[t._v("Postal Code:")]),t._v(" "),n("span",[t._v(t._s(e.postal_code))])]),t._v(" "),n("p",[n("span",{staticClass:"text-gray-500"},[t._v("Phone #:")]),t._v(" "),n("span",[t._v(t._s(e.phone.replace(/-/g,"")))])]),t._v(" "),n("p",[n("span",{staticClass:"text-gray-500"},[t._v("Cell #:")]),t._v(" "),n("span",[t._v(t._s(e.cell.replace(/-/g,"")))])])])])])])}),0)]):t._e(),t._v(" "),t._m(2),t._v(" "),n("input",{attrs:{type:"hidden",name:"IL_IN_TAG",value:"2"}})])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mt-3 text-center"},[this._v("\n        Generate random user data. These random users are generated from the help of\n        "),e("a",{staticClass:"font-medium underline",attrs:{href:"https://randomuser.me",target:"_blank"}},[this._v("randomuser.me")]),this._v("'s API.\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"block relative"},[e("span",{staticClass:"text-gray-600 font-medium text-xs absolute bg-white px-3 pt-1 ml-2 -mt-3 uppercase"},[this._v("Nationalities")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex py-2"},[e("input",{attrs:{type:"hidden",name:"IL_IN_ARTICLE"}})])}],!1,null,null,null);e.default=component.exports}}]);