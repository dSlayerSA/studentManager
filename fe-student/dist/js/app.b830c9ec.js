(function(){"use strict";var e={9198:function(e,t,n){var i=n(144),s=n(9669),a=n.n(s);let l={};const o=a().create(l);o.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=o,window.axios=o,Object.defineProperties(e.prototype,{axios:{get(){return o}},$axios:{get(){return o}}})},i.ZP.use(Plugin);Plugin;var d=n(7359),r=n(998),u=n(6232),c=n(6190),h=n(9582),f=n(4886),m=n(433),p=n(3304),S=n(4061),g=n(5125),v=n(4324),Z=n(5808),x=n(4525),b=n(4611),A=n(8279),R=n(3059),E=n(4528),k=n(7233),y=n(3687),w=n(7808),$=n(7953),_=function(){var e=this,t=e._self._c;return t(r.Z,[t(u.Z,{attrs:{app:"",color:"indigo darken-2",dark:""}},[t(c.Z,{attrs:{icon:""},on:{click:function(t){e.drawer=!e.drawer}}},[t(v.Z,[e._v("mdi-menu")])],1),t($.qW,[e._v("Menu")])],1),t(k.Z,{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(Z.Z,[t(x.Z,{on:{click:function(t){return e.selectPage("Students")}}},[t(A.V9,[e._v("Alunos")])],1)],1)],1),t(R.Z,[t(m.Z,["Students"===e.selectedPage?t(h.Z,[t(f.EB,[e._v("Pesquisar Alunos "),t(y.Z),t(c.Z,{attrs:{color:"primary"},on:{click:e.AddStudentDialog}},[e._v("Adicionar Aluno")])],1),t(f.ZB,[t(w.Z,{attrs:{label:"Pesquise por RA, CPF ou nome do aluno",outlined:""},on:{input:e.clearedSearchInput},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),t(c.Z,{attrs:{color:"primary"},on:{click:e.show}},[e._v("Pesquisar")])],1),e.Students.length>0?t(p.Z,{attrs:{dense:"",headers:e.headers,items:e.Students},scopedSlots:e._u([{key:"item",fn:function({item:n}){return[t("tr",[t("td",[t(w.Z,{attrs:{solo:"",dense:"",flat:"",readonly:""},model:{value:n.AR,callback:function(t){e.$set(n,"AR",t)},expression:"item.AR"}})],1),t("td",[t(w.Z,{attrs:{solo:"",dense:"",flat:"",readonly:""},model:{value:n.name,callback:function(t){e.$set(n,"name",t)},expression:"item.name"}})],1),t("td",[t(w.Z,{attrs:{solo:"",dense:"",flat:"",readonly:""},model:{value:n.cpf,callback:function(t){e.$set(n,"cpf",t)},expression:"item.cpf"}})],1),t("td",[t(w.Z,{attrs:{solo:"",dense:"",flat:"",readonly:""},model:{value:n.email,callback:function(t){e.$set(n,"email",t)},expression:"item.email"}})],1),t("td",[t(E.Z,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:n}){return[t(c.Z,e._g({attrs:{icon:""}},n),[t(v.Z,[e._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t(Z.Z,[t(x.Z,{on:{click:function(t){return e.selectEditStudent(n)}}},[t(b.Z,[t(v.Z,[e._v("mdi-pencil")])],1),t(A.V9,[e._v("Editar")])],1),t(x.Z,{on:{click:function(t){return e.deleteStudent(n.AR)}}},[t(b.Z,[t(v.Z,[e._v("mdi-delete")])],1),t(A.V9,[e._v("Excluir")])],1)],1)],1)],1)])]}}],null,!1,4018707400)}):t(d.Z,{attrs:{value:!0,color:"warning",icon:"mdi-alert-circle-outline"}},[e._v(" Nenhum resultado encontrado. ")]),t(S.Z,{attrs:{"max-width":"500px"},model:{value:e.addStudentDialog,callback:function(t){e.addStudentDialog=t},expression:"addStudentDialog"}},[t(h.Z,[t(f.EB,[e._v(" Adicionar Aluno ")]),t(f.ZB,[t(g.Z,{ref:"form"},[t(w.Z,{attrs:{label:"RA * ",outlined:"",rules:[e.requiredRule],required:""},model:{value:e.AR,callback:function(t){e.AR=t},expression:"AR"}}),t(w.Z,{attrs:{label:"Nome * ",outlined:"",rules:[e.requiredRule],required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t(w.Z,{attrs:{label:"CPF * ",outlined:"",rules:[e.requiredRule],required:""},model:{value:e.cpf,callback:function(t){e.cpf=t},expression:"cpf"}}),t(w.Z,{attrs:{label:"Email * ",outlined:"",rules:[e.requiredRule,e.emailRule],required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),t(f.h7,[t(c.Z,{attrs:{color:"primary",disabled:!e.formIsValid},on:{click:e.addStudent}},[e._v("Salvar")]),t(c.Z,{on:{click:e.cancelAddStudent}},[e._v("Cancelar")])],1)],1)],1),t(S.Z,{attrs:{"max-width":"600px"},model:{value:e.editStudentDialog,callback:function(t){e.editStudentDialog=t},expression:"editStudentDialog"}},[t(h.Z,[t(f.EB,[e._v(" Editar Aluno ")]),t(f.ZB,[t(g.Z,{ref:"editStudentForm"},[t(w.Z,{attrs:{rules:[e.requiredRule],label:"Nome",outlined:""},model:{value:e.selectedStudent.name,callback:function(t){e.$set(e.selectedStudent,"name",t)},expression:"selectedStudent.name"}}),t(w.Z,{attrs:{rules:[e.requiredRule,e.emailRule],label:"E-mail",outlined:""},model:{value:e.selectedStudent.email,callback:function(t){e.$set(e.selectedStudent,"email",t)},expression:"selectedStudent.email"}}),t(w.Z,{attrs:{readonly:"",label:"RA",outlined:""},model:{value:e.selectedStudent.AR,callback:function(t){e.$set(e.selectedStudent,"AR",t)},expression:"selectedStudent.AR"}}),t(w.Z,{attrs:{readonly:"",label:"CPF",outlined:""},model:{value:e.selectedStudent.cpf,callback:function(t){e.$set(e.selectedStudent,"cpf",t)},expression:"selectedStudent.cpf"}})],1)],1),t(f.h7,[t(c.Z,{attrs:{color:"primary",disabled:!e.formEditIsValid},on:{click:e.saveStudentEdit}},[e._v("Salvar")]),t(c.Z,{on:{click:e.cancelStudentEdit}},[e._v("Cancelar")])],1)],1)],1)],1):e._e()],1)],1)],1)},P=[],O={name:"App",data(){return{drawer:!0,selectedPage:"Students",searchText:"",Students:[],headers:[{text:"Registro Academico",value:"AR"},{text:"name",value:"name"},{text:"CPF",value:"cpf"},{text:"EMAIL",value:"email"}],AR:"",name:"",cpf:"",email:"",addStudentDialog:!1,editStudentDialog:!1,selectedStudent:{},studentEditing:{},student:{},showAlert:!1,alertMessage:"",requiredRule:e=>!!e||"Campo obrigatório.",emailRule:e=>{const t=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;return t.test(e)||"E-mail inválido."}}},computed:{formIsValid(){return!!this.AR&&!!this.name&&!!this.cpf&&!!this.email&&!0===this.emailRule(this.email)},formEditIsValid(){return!!this.selectedStudent.name&&!!this.selectedStudent.email&&!0===this.emailRule(this.selectedStudent.email)}},created(){this.selectedPage="Students",this.getStudents()},methods:{getStudents(){a().get("http://localhost:8000/api/students").then((e=>{this.Students=e.data})).catch((e=>{console.log(e)}))},show(){let e={};this.searchText?(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(this.searchText)?e.cpf=this.searchText:/^\d{11}$/.test(this.searchText)?e.cpf=this.searchText.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/,"$1.$2.$3-$4"):/^\d{3,4}$/.test(this.searchText)?e.AR=this.searchText:e.name=this.searchText,a().get("http://localhost:8000/api/students/show",{params:e}).then((e=>{this.Students=e.data.data})).catch((e=>{console.log(e)}))):this.getStudents()},addStudent(){const e={AR:this.AR,name:this.name,cpf:this.cpf,email:this.email};a().post("http://localhost:8000/api/students/store",e).then((e=>{console.log(e.data),this.addStudentDialog=!1,this.$refs.form.reset(),this.$emit("added-student",e.data.data),this.getStudents(),alert("Aluno adicionado com sucesso!")})).catch((e=>{console.error(e),422===e.response.status?alert("O aluno já existe."):alert("Ocorreu um erro ao criar aluno.")}))},AddStudentDialog(){this.addStudentDialog=!0},cancelAddStudent(){this.AR="",this.name="",this.cpf="",this.email="",this.showAlert=!1,this.alertMessage="",this.addStudentDialog=!1},selectEditStudent(e){this.studentBeforeEdit={AR:e.AR,name:e.name,cpf:e.cpf,email:e.email},this.selectedStudent=e,this.editStudentDialog=!0},saveStudentEdit(){const e=new FormData,t={...this.selectedStudent},n={},i={};this.studentEditing={...this.selectedStudent};for(const a in this.studentEditing)this.studentEditing[a]!==this.studentBeforeEdit[a]&&(e.append(a,this.studentEditing[a]),n[a]=this.studentEditing[a],i[a]=`${a}: ${this.studentEditing[a]}`);const s=Object.keys(n).length>0;s?a().put(`http://localhost:8000/api/students/${t.AR}`,n).then((e=>{console.log(e.data),console.log(`Before Edit: ${JSON.stringify(t)}`),console.log(`After Edit: ${JSON.stringify(this.studentEditing)}`),console.log(`Changes: ${JSON.stringify(i)}`),this.editStudentDialog=!1})).catch((e=>{console.error(e)})):(console.log("No changes made."),this.editStudentDialog=!1)},cancelStudentEdit(){this.selectedStudent&&(this.selectedStudent.AR=this.studentBeforeEdit.AR,this.selectedStudent.name=this.studentBeforeEdit.name,this.selectedStudent.cpf=this.studentBeforeEdit.cpf,this.selectedStudent.email=this.studentBeforeEdit.email),this.editStudentDialog=!1,this.studentEditing=null,this.studentBeforeEdit=null},deleteStudent(e){const t=confirm(`Tem certeza que deseja excluir o aluno de AR ${e}?`);t&&a()["delete"](`http://localhost:8000/api/students/${e}`).then((t=>{console.log(t.data);const n=this.Students.findIndex((t=>t.AR===e));-1!==n&&this.Students.splice(n,1)})).catch((t=>{console.error(t),404===t.response.status?alert(`O aluno de AR ${e} não foi encontrado na base de dados.`):alert(`Ocorreu um erro ao excluir o aluno de AR ${e}.`)}))},clearedSearchInput(){""===this.searchText&&this.getStudents()}}},T=O,D=n(1001),q=(0,D.Z)(T,_,P,!1,null,null,null),j=q.exports,B=n(1705);i.ZP.use(B.Z);var C=new B.Z({});i.ZP.config.productionTip=!1,new i.ZP({vuetify:C,render:e=>e(j)}).$mount("#app")}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,s,a){if(!i){var l=1/0;for(u=0;u<e.length;u++){i=e[u][0],s=e[u][1],a=e[u][2];for(var o=!0,d=0;d<i.length;d++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[d])}))?i.splice(d--,1):(o=!1,a<l&&(l=a));if(o){e.splice(u--,1);var r=s();void 0!==r&&(t=r)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,s,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,a,l=i[0],o=i[1],d=i[2],r=0;if(l.some((function(t){return 0!==e[t]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(d)var u=d(n)}for(t&&t(i);r<l.length;r++)a=l[r],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},i=self["webpackChunkfe_student"]=self["webpackChunkfe_student"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(9198)}));i=n.O(i)})();
//# sourceMappingURL=app.b830c9ec.js.map