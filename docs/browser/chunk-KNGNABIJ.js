import{a as N,b as T,c as B,d as D,e as V,f as k}from"./chunk-YZUDBYYC.js";import{a as W}from"./chunk-WB4D36DP.js";import{b as L,c as O,d as E,l as F}from"./chunk-T2BMTMJV.js";import{$a as d,Ka as u,Na as c,Pa as o,Qa as r,Ra as y,Sa as C,Wa as g,Z as x,_a as a,ab as w,bb as S,cb as M,eb as I,ga as h,gb as b,ha as _,hb as m,ib as p,va as v,ya as n,za as P}from"./chunk-Q37KPZHE.js";var A=e=>["/productdetails",e];function z(e,i){if(e&1&&(o(0,"div",7)(1,"div",8)(2,"header",9),y(3,"img",10),o(4,"div",11)(5,"h3",12),a(6),r(),o(7,"h2",13),a(8),m(9,"cuttext"),r(),o(10,"div",14)(11,"span"),a(12),m(13,"currency"),r()()()()()()),e&2){let t=i.$implicit;n(2),c("routerLink",b(13,A,t.id)),n(),c("src",t.image,v)("title",t.title)("alt",t.title),n(3),d(t.category),n(2),d(p(9,7,t.title,3)),n(4),d(p(13,10,t.price,"EGP "))}}function G(e,i){if(e&1){let t=C();o(0,"section",2)(1,"h2",3),a(2,"All Products"),r(),o(3,"input",4),M("ngModelChange",function(s){h(t);let f=g();return S(f.term,s)||(f.term=s),_(s)}),r(),o(4,"div",5),u(5,z,14,15,"div",6),m(6,"search"),r()()}if(e&2){let t=g();n(3),w("ngModel",t.term),n(2),c("ngForOf",p(6,2,t.products,t.term))}}function R(e,i){e&1&&(o(0,"div",15)(1,"p"),a(2,"Loading..."),r()())}var j=class e{constructor(i){this.productService=i}products=[];isLoading=!0;term="";ngOnInit(){this.productService.getProducts().subscribe(i=>{this.products=i,this.isLoading=!1},i=>{console.error("Error fetching product data",i),this.isLoading=!1})}static \u0275fac=function(t){return new(t||e)(P(W))};static \u0275cmp=x({type:e,selectors:[["app-product"]],standalone:!0,features:[I],decls:2,vars:2,consts:[["class","container my-4",4,"ngIf"],["class","text-center my-5",4,"ngIf"],[1,"container","my-4"],[1,"text-center","mb-4"],["type","text","placeholder","Search...",1,"form-control","w-75","mx-auto","form-control-sm","my-3",3,"ngModelChange","ngModel"],[1,"row","g-3"],["class","col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch",4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","d-flex","align-items-stretch"],[1,"card","img-tables","text-center","w-100"],[3,"routerLink"],[1,"card-img-top","mt-3","img-fluid","h-50","w-50",3,"src","title","alt"],[1,"card-body"],[1,"h6","pt-2","fs-5","fw-bold","mb-1"],[1,"h6","fs-6","text-muted","mb-2"],[1,"card-text","d-flex","align-items-center","justify-content-center","text-center","small"],[1,"text-center","my-5"]],template:function(t,l){t&1&&u(0,G,7,5,"section",0)(1,R,3,0,"div",1),t&2&&(c("ngIf",!l.isLoading),n(),c("ngIf",l.isLoading))},dependencies:[N,T,F,O,L,E,k,B,D,V],styles:[".row-edit[_ngcontent-%COMP%]{margin:0 60px}.img-tables[_ngcontent-%COMP%]{width:350px;height:350px;cursor:pointer}@media (max-width: 576px){.card-img-top[_ngcontent-%COMP%]{width:100%;height:auto}.form-control[_ngcontent-%COMP%]{width:100%}}@media (max-width: 768px){.form-control[_ngcontent-%COMP%]{width:90%}}"]})};export{j as ProductComponent};