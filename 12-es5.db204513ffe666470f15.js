function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{deex:function(n,e,t){"use strict";t.r(e);var c=t("ofXK"),o=t("3Pt+"),s=t("tyNb"),i=t("MCLT"),r=t("fXoL"),a=t("lGQG"),l=t("xhJc"),d=t("i+yN");function g(n,e){if(1&n){var t=r.Qb();r.Pb(0,"div",16),r.Pb(1,"div",17),r.Xb("click",(function(){return r.jc(t),r.ic(6).click()})),r.Pb(2,"div",18),r.Pb(3,"div",19),r.Pb(4,"label",20),r.Pb(5,"input",21,22),r.Xb("ngModelChange",(function(n){r.jc(t);var c=e.index;return r.Zb().selectStudent[c]=n})),r.Ob(),r.Nb(7,"span",23),r.Ob(),r.Ob(),r.pc(8),r.Ob(),r.Pb(9,"div",24),r.pc(10),r.Ob(),r.Nb(11,"div",25),r.Ob(),r.Ob()}if(2&n){var c=e.$implicit,o=e.index,s=r.Zb();r.Bb(5),r.cc("ngModel",s.selectStudent[o]),r.Bb(3),r.rc(" ",c.name+" "+c.surname," "),r.Bb(2),r.qc(c.email)}}var u,b,f=function(){return["/classes/single/add"]},O=function(n){return{class:n}},P=function(){return{"delete-students":!0,"delete-students-inactive":!1}},C=function(n,e){return{"d-none":n,"d-flex":e}},_=[{path:"",pathMatch:"prefix",component:(u=function(){function n(e,t,c,o){var s=this;switch(_classCallCheck(this,n),this.auth=e,this.classService=t,this.route=c,this.router=o,this.hide_delete=!0,this.delete_this=null,this.route.queryParams.subscribe((function(n){s.id=n.class})),this.selectStudent=new Array,this.auth.user.role){case"admin":case"teacher":this.classService.getAllClassStudents(this.id);break;default:this.router.navigate(["/"])}}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.deleteStudentsSubscription=this.classService.removeStudentsSubject.subscribe({next:function(e){Object(i.isNullOrUndefined)(e.error)?n.classService.getAllClassStudents(n.id):console.log(e)}}),this.getAllStudentsSubscription=this.classService.getAllClassStudentsSubject.subscribe({next:function(e){Object(i.isNullOrUndefined)(e.error)?(n.selectStudent=new Array,console.log(e),n.students=e,e.forEach((function(e){return n.selectStudent.push(!1)}))):console.log(e)}})}},{key:"ngOnDestroy",value:function(){this.deleteStudentsSubscription&&this.deleteStudentsSubscription.unsubscribe(),this.getAllStudentsSubscription&&this.getAllStudentsSubscription.unsubscribe()}},{key:"deleteStudents",value:function(){this.delete_this=new Array;for(var n=0;n<this.students.length;n++)this.selectStudent[n]&&this.delete_this.push(this.students[n].id);this.hide_delete=!1,console.log("delete",this.delete_this)}},{key:"responseDialog",value:function(n){if(this.hide_delete=n.close,console.log(n),"true"==n.output){var e=new Array;n.index.forEach((function(n){return e.push(n)})),this.classService.removeStudents(this.id,e)}this.hide_delete=n.close,this.delete_this=null}},{key:"outsideDialog",value:function(n){"must-close"==n.target.id&&(this.hide_delete=!0)}}]),n}(),u.\u0275fac=function(n){return new(n||u)(r.Mb(a.a),r.Mb(l.a),r.Mb(s.a),r.Mb(s.b))},u.\u0275cmp=r.Gb({type:u,selectors:[["app-students"]],decls:17,vars:13,consts:[[1,"row",2,"padding","2.5rem 1rem"],[1,"col-7"],[2,"font-weight","700"],[1,"col-5","d-flex","justify-content-end","align-items-center"],[1,"fas","fa-search","input-icon"],["type","text","placeholder","Search"],[1,"row"],[1,"col-12","add-class","d-flex","justify-content-center","align-items-center"],[1,"add-class-encasing",3,"routerLink","queryParams"],[1,"fas","fa-plus"],[1,"col-12","d-flex","justify-content-center","align-items-center"],[2,"padding",".45rem 0.35rem","width","90%"],[1,"fas","fa-trash",3,"ngClass","click"],["class","col-12 class-card d-flex justify-content-center align-items-center",4,"ngFor","ngForOf"],["id","must-close",1,"custom-dialog",3,"ngClass","click"],[3,"i","onHide"],[1,"col-12","class-card","d-flex","justify-content-center","align-items-center"],[1,"class-encasing",3,"click"],[1,"title"],[1,"d-flex","align-items-center"],[1,"container"],["type","checkbox",3,"ngModel","ngModelChange"],["check",""],[1,"checkmark"],[1,"description"],[1,"footer"]],template:function(n,e){1&n&&(r.Pb(0,"div",0),r.Pb(1,"div",1),r.Pb(2,"h2",2),r.pc(3,"Class name"),r.Ob(),r.Ob(),r.Pb(4,"div",3),r.Nb(5,"i",4),r.Nb(6,"input",5),r.Ob(),r.Ob(),r.Pb(7,"div",6),r.Pb(8,"div",7),r.Pb(9,"div",8),r.Nb(10,"i",9),r.Ob(),r.Ob(),r.Pb(11,"div",10),r.Pb(12,"div",11),r.Pb(13,"i",12),r.Xb("click",(function(){return e.deleteStudents()})),r.Ob(),r.Ob(),r.Ob(),r.oc(14,g,12,3,"div",13),r.Ob(),r.Pb(15,"div",14),r.Xb("click",(function(n){return e.outsideDialog(n)})),r.Pb(16,"app-remove-dialog",15),r.Xb("onHide",(function(n){return e.responseDialog(n)})),r.Ob(),r.Ob()),2&n&&(r.Bb(9),r.cc("routerLink",r.ec(6,f))("queryParams",r.fc(7,O,e.id)),r.Bb(4),r.cc("ngClass",r.ec(9,P)),r.Bb(1),r.cc("ngForOf",e.students),r.Bb(1),r.cc("ngClass",r.gc(10,C,e.hide_delete,!e.hide_delete)),r.Bb(1),r.cc("i",e.delete_this))},directives:[s.c,c.h,c.i,d.a,o.a,o.d,o.e],styles:['*[_ngcontent-%COMP%]{color:#2e2e2e}input[_ngcontent-%COMP%]{border:2px solid #4b515d;background-color:#fafffd;border-radius:4px;height:2rem;width:80%;max-width:24rem;font-weight:600;color:#121420;padding:.25rem .5rem .25rem 1.5rem}input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#4b515d}input[_ngcontent-%COMP%]::-moz-placeholder{color:#4b515d}input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#4b515d}input[_ngcontent-%COMP%]::placeholder{color:#4b515d}input[_ngcontent-%COMP%]:hover{border:2px solid #2e2e2e}input[_ngcontent-%COMP%]:focus{border:2px solid #201e50}.input-icon[_ngcontent-%COMP%]{position:relative;margin-right:-1.45rem}.delete-students[_ngcontent-%COMP%]{padding:.35rem .4rem;font-size:1.5rem;color:#eff1f3;background-color:#0a1128;border:2px solid #0a1128;border-radius:4px;cursor:pointer}.delete-students[_ngcontent-%COMP%]:hover{color:#201e50;background-color:#eff1f3;border:2px solid #201e50}.delete-students[_ngcontent-%COMP%]:active{color:#121420;background-color:#eff1f3;border:2px solid #121420}.delete-students-inactive[_ngcontent-%COMP%]{padding:.35rem .4rem;font-size:1.5rem;color:#fff;background-color:rgba(10,17,40,.5);border:2px solid rgba(10,17,40,.2);border-radius:4px}.class-card[_ngcontent-%COMP%]{padding:.45rem 1.25rem}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]{width:90%;border:2px solid #0a1128;background:linear-gradient(45deg,#586f7c 45%,#201e50 90%);border-radius:2px;padding:.45rem .65rem;cursor:pointer;display:-webkit-box;display:flex}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;font-size:1.25rem}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:40%;color:#eff1f3}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-weight:600;font-size:.95rem}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end;width:20%}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%]{color:#eff1f3}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%]:hover{color:#121420!important}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%]:active{color:#121420}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .fa-trash[_ngcontent-%COMP%], .class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .fa-trash[_ngcontent-%COMP%]:hover{color:red}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .fa-trash[_ngcontent-%COMP%]:active{color:#121420!important}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-weight:600;font-size:1.2rem;padding:0 .75rem}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]:hover{border:2px solid #201e50;background:linear-gradient(45deg,#eff1f3 75%,#201e50)}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]:hover   .description[_ngcontent-%COMP%], .class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%]{color:#121420}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]:hover   .footer[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%]{color:#eff1f3}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]:hover   .footer[_ngcontent-%COMP%]   .fa-trash[_ngcontent-%COMP%]{color:red}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]:active{border:2px solid #201e50;background:#eff1f3}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]:active   .description[_ngcontent-%COMP%], .class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]:active   .footer[_ngcontent-%COMP%], .class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]:active   .footer[_ngcontent-%COMP%]   .fa-edit[_ngcontent-%COMP%], .class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]:active   .title[_ngcontent-%COMP%]{color:#121420}.class-card[_ngcontent-%COMP%]   .class-encasing[_ngcontent-%COMP%]:active   .footer[_ngcontent-%COMP%]   .fa-trash[_ngcontent-%COMP%]{color:red}.add-class[_ngcontent-%COMP%]{padding:.45rem 1.25rem}.add-class[_ngcontent-%COMP%]   .add-class-encasing[_ngcontent-%COMP%]{width:90%;border:2px solid #0a1128;background:#fff;border-radius:2px;padding:.45rem .65rem;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.add-class[_ngcontent-%COMP%]   .add-class-encasing[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.8rem;color:#4b515d}.add-class[_ngcontent-%COMP%]   .add-class-encasing[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#121420}.add-class[_ngcontent-%COMP%]   .add-class-encasing[_ngcontent-%COMP%]:active   i[_ngcontent-%COMP%]{color:#201e50}.container[_ngcontent-%COMP%]{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;font-size:22px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:1.1rem;width:1.1rem;background-color:#eee;border:1px solid #0a1128;border-radius:2px;margin-bottom:.5rem}.container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]{background-color:#ccc}.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]{background-color:#201e50}.checkmark[_ngcontent-%COMP%]:after{content:"";position:absolute;display:none}.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after{display:block}.container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after{left:.28rem;top:.15rem;width:.35rem;height:.5rem;border:solid #eff1f3;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}']}),u)}],h=((b=function n(){_classCallCheck(this,n)}).\u0275mod=r.Kb({type:b}),b.\u0275inj=r.Jb({factory:function(n){return new(n||b)},imports:[[s.d.forChild(_)],s.d]}),b),p=t("/Ngi");t.d(e,"StudentsModule",(function(){return m}));var M,m=((M=function n(){_classCallCheck(this,n)}).\u0275mod=r.Kb({type:M}),M.\u0275inj=r.Jb({factory:function(n){return new(n||M)},imports:[[c.b,o.c,h,p.a]]}),M)}}]);