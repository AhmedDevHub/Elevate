import{a as B,b as T,c as D,d as V,e as k,f as W}from"./chunk-YZUDBYYC.js";import{a as j}from"./chunk-WB4D36DP.js";import{b as E,c as O,d as F,e as H,l as N}from"./chunk-T2BMTMJV.js";import{$a as p,Ka as g,Na as c,Pa as o,Qa as r,Ra as C,Sa as S,Wa as u,Z as x,_a as m,ab as P,bb as w,cb as M,eb as b,ga as h,gb as I,ha as v,hb as a,ib as l,jb as L,va as _,ya as n,za as y}from"./chunk-Q37KPZHE.js";var A=t=>["/productdetails",t];function G(t,i){if(t&1&&(o(0,"div",7)(1,"div",8)(2,"header",9),C(3,"img",10),o(4,"div",11)(5,"h3",12),m(6),r(),o(7,"h2",13),m(8),a(9,"cuttext"),r(),o(10,"div",14)(11,"span",15),m(12),a(13,"currency"),r()()()()()()),t&2){let e=i.$implicit;n(2),c("routerLink",I(13,A,e.id)),n(),c("src",e.image,_)("title",e.title)("alt",e.title),n(3),p(e.category),n(2),p(l(9,7,e.title,3)),n(4),p(l(13,10,e.price,"EGP "))}}function R(t,i){if(t&1){let e=S();o(0,"section",2)(1,"h2",3),m(2,"Shop Popular Products"),r(),o(3,"input",4),M("ngModelChange",function(s){h(e);let f=u();return w(f.term,s)||(f.term=s),v(s)}),r(),o(4,"div",5),g(5,G,14,15,"div",6),a(6,"search"),a(7,"slice"),r()()}if(t&2){let e=u();n(3),P("ngModel",e.term),n(2),c("ngForOf",L(7,5,l(6,2,e.products,e.term),6,14))}}function U(t,i){t&1&&(o(0,"div",16)(1,"p"),m(2,"Loading..."),r()())}var z=class t{constructor(i){this.productService=i}products=[];isLoading=!0;term="";ngOnInit(){this.productService.getProducts().subscribe(i=>{this.products=i,this.isLoading=!1},i=>{console.error("Error fetching product data",i),this.isLoading=!1})}static \u0275fac=function(e){return new(e||t)(y(j))};static \u0275cmp=x({type:t,selectors:[["app-home"]],standalone:!0,features:[b],decls:2,vars:2,consts:[["class","container my-4",4,"ngIf"],["class","text-center my-5",4,"ngIf"],[1,"container","my-4"],[1,"text-center","mb-4"],["type","text","placeholder","Search...",1,"form-control","w-75","mx-auto","form-control-sm","my-3",3,"ngModelChange","ngModel"],[1,"row","g-4"],["class","col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch",4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","d-flex","align-items-stretch"],[1,"card","img-tables","text-center","w-100"],[3,"routerLink"],[1,"card-img-top","mt-3","img-fluid","w-50","h-50",3,"src","title","alt"],[1,"card-body"],[1,"h6","pt-2","fs-5","fw-bold","mb-1"],[1,"h6","fs-6","text-muted","mb-2"],[1,"card-text","d-flex","align-items-center","justify-content-center","text-center","small"],[1,"fs-5","fw-bold"],[1,"text-center","my-5"]],template:function(e,d){e&1&&g(0,R,8,9,"section",0)(1,U,3,0,"div",1),e&2&&(c("ngIf",!d.isLoading),n(),c("ngIf",d.isLoading))},dependencies:[B,T,N,O,E,F,H,W,D,V,k],styles:[".row-edit[_ngcontent-%COMP%]{margin:0 60px}.img-tables[_ngcontent-%COMP%]{width:350px;height:350px;cursor:pointer}@media (max-width: 576px){.card-img-top[_ngcontent-%COMP%]{width:100%;height:auto}.form-control[_ngcontent-%COMP%]{width:100%}}"]})};export{z as HomeComponent};
