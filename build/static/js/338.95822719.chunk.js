"use strict";(self.webpackChunkfront_digitalmente=self.webpackChunkfront_digitalmente||[]).push([[338],{49651:function(e,t,a){a(72791);t.Z=a.p+"static/media/LogoAlargado.d0902aba22b8e8971681057286c66f43.svg"},2390:function(e,t,a){var n=a(15671),i=a(43144),s=function(){function e(t,a,i){var s=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"navBar";(0,n.Z)(this,e),this.navbarId=o,this.primeraSeccionId=a,this.navBar=document.getElementById(o),this.primeraSeccion=document.getElementById(a),this.seccionesJson=t,this.seccionesArray=this.getSeccionesArray(),this.offset=0,this.PreviousSection={},this.ActualSection={},this.classActiveArray=i,this.isListenerCreated=!1,window.addEventListener("scroll",(function(){s.eventScroll()}))}return(0,i.Z)(e,[{key:"eventScroll",value:function(){this.navBar||(this.navBar=document.getElementById(this.navbarId)),this.primeraSeccion||(this.primeraSeccion=document.getElementById(this.primeraSeccionId)),this.setOffset(window.pageYOffset),this.colorNavBar(),this.isHover()}},{key:"setOffset",value:function(e){this.offset=e}},{key:"getSeccionesArray",value:function(){var e=this;return Object.keys(this.seccionesJson).map((function(t){return e.seccionesJson[t]}))}},{key:"updateSeccionesArray",value:function(){var e=this,t=Object.keys(this.seccionesJson).map((function(t){return e.seccionesJson[t]}));this.seccionesArray=t}},{key:"removeClassNameArray",value:function(e){this.classActiveArray.forEach((function(t){e.classList.remove(t)}))}},{key:"removeClassNameArrayExcept",value:function(e){var t=this;this.seccionesArray.forEach((function(a){var n=a.id,i=document.getElementById("Nav-".concat(n));i!==e&&t.classActiveArray.forEach((function(e){i.classList.remove(e)}))}))}},{key:"addClassNameArray",value:function(e){this.classActiveArray.forEach((function(t){e.classList.add(t)}))}},{key:"isHover",value:function(){var e=this;this.seccionesArray.forEach((function(t){var a=t.id,n=document.getElementById(a),i=document.getElementById("Nav-".concat(a));if(n&&i&&e.navBar){var s=n.offsetTop-e.navBar.offsetHeight,o=n.offsetHeight;e.offset>=s&&e.offset<=s+o&&(e.ActualSection.section=i,e.addClassNameArray(i))}})),this.removeClassNameArrayExcept(this.ActualSection.section)}},{key:"colorNavBar",value:function(){if(this.primeraSeccion&&this.navBar){var e=this.primeraSeccion.offsetHeight-this.navBar.offsetHeight-20,t=window.innerWidth;this.offset>e||t<=1400?(this.navBar.classList.remove("bg-transparent"),this.navBar.classList.add("bg-white")):(this.navBar.classList.remove("bg-white"),this.navBar.classList.add("bg-transparent"))}}},{key:"scroll",value:function(e){var t=document.getElementById(e);t&&this.navBar?window.scrollTo(0,t.offsetTop-this.navBar.offsetHeight+5):t&&window.scrollTo(0,t.offsetTop)}}],[{key:"scroll",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"navBar",n=document.getElementById(e);if(t){var i=document.getElementById(a);n&&i?window.scrollTo(0,n.offsetTop-i.offsetHeight+5):n&&window.scrollTo(0,n.offsetTop)}else n&&this.navBar?window.scrollTo(0,n.offsetTop-this.navBar.offsetHeight+5):n&&window.scrollTo(0,n.offsetTop)}}]),e}();t.Z=s},11303:function(e,t,a){a.d(t,{R:function(){return y}});var n=a(69624),i=a.p+"static/media/ganso_ejercicio.c32bb423f6739252c6b2.png",s=a(36845),o=a.p+"static/media/ganso_elegante.6028f89c4a63086ef04a.png",c=a.p+"static/media/ganso_leyendo.5875102a3f66fac79148.png",r=a.p+"static/media/ganso_explicando.672add9556b42a380f2a.png",d=a(78551),f=a.p+"static/media/ganso_sorprendido.5145b0c549cefc17bf03.png",l=a.p+"static/media/ganso_meditando.7aebfe32b2eb07415e5e.png",p=a.p+"static/media/presentacion_personaje.8219e781d95178c4b7c5.png",u=a.p+"static/media/ganso_durmiendo.474a1093e7c0d38f2a21.png",h=a.p+"static/media/ganso_stop.0ca1553fe7852ad2b0b2.png",g=a.p+"static/media/ganso_escribiendo.0806ce31869b7a05475e.png",v=a.p+"static/media/ganso_alegria.e04d28b6a61de712bd68.png",m=a.p+"static/media/ganso_tristeza.b1137787dbaf679982cb.png",y={lupa_celular:n,pensando:s,elegante:o,leyendo:c,explicando:r,celular:d,meditando:l,sorprendido:f,durmiendo:u,presentacion_personaje:p,elegante_250x200:a.p+"static/media/ganso_elegante.ea00b755a35ff0d2c69f.png",stop_250x200:h,escribiendo_250x200:g,feliz_250x200:v,triste_250x200:m,ganso_ejercicio:i}},17387:function(){},78551:function(e,t,a){e.exports=a.p+"static/media/ganso_celular.10ae0a285727129e24b7.png"},69624:function(e,t,a){e.exports=a.p+"static/media/ganso_lupa_celular.f03da37cc16babeff504.png"},36845:function(e,t,a){e.exports=a.p+"static/media/ganso_pensando.5d06f45cc378032b7229.png"}}]);
//# sourceMappingURL=338.95822719.chunk.js.map