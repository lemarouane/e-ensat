(self.webpackChunk=self.webpackChunk||[]).push([[4532],{82380:(e,t,n)=>{var a=n(19755);function r(){a.ajax({type:"POST",dataType:"json",url:a("#path-to-counter-scolarite").data("href"),success:function(e){a(".counter_3").remove(),null!=e.attestation&&0!=e.attestation&&a("#sco_attestation").append(' <span style="animation: glow 0.8s infinite alternate;margin-left:5px;" class="badge bg-danger rounded-pill counter_3 counter_i">'+e.attestation+"</span>"),null!=e.releve&&0!=e.releve&&a("#sco_releve").append('  <span style="animation: glow 0.8s infinite alternate;margin-left:5px;" class="badge bg-danger rounded-pill counter_3 counter_i">'+e.releve+"</span>"),null!=e.carte&&0!=e.carte&&a("#sco_carte").append('  <span style="animation: glow 0.8s infinite alternate;margin-left:5px;" class="badge bg-danger rounded-pill counter_3 counter_i">'+e.carte+"</span>"),null!=e.reinscription&&0!=e.reinscription&&a("#sco_reinscription").append('  <span style="animation: glow 0.8s infinite alternate;margin-left:5px;" class="badge bg-danger rounded-pill counter_3 counter_i">'+e.reinscription+"</span>"),null!=e.totale&&0!=e.totale&&a("#sco_totale").append('  <span style="animation: glow 0.8s infinite alternate;margin-left:5px;" class="badge bg-danger rounded-pill counter_3">'+e.totale+"</span>")},error:function(){}})}n(32564),r(),setInterval((function(){r()}),3e5)},50206:(e,t,n)=>{var a=n(1702);e.exports=a([].slice)},22104:(e,t,n)=>{var a=n(34374),r=Function.prototype,o=r.apply,i=r.call;e.exports="object"==typeof Reflect&&Reflect.apply||(a?i.bind(o):function(){return i.apply(o,arguments)})},17152:(e,t,n)=>{var a=n(17854),r=n(22104),o=n(60614),i=n(88113),l=n(50206),s=n(48053),p=/MSIE .\./.test(i),c=a.Function,u=function(e){return p?function(t,n){var a=s(arguments.length,1)>2,i=o(t)?t:c(t),p=a?l(arguments,2):void 0;return e(a?function(){r(i,this,p)}:i,n)}:e};e.exports={setTimeout:u(a.setTimeout),setInterval:u(a.setInterval)}},48053:e=>{var t=TypeError;e.exports=function(e,n){if(e<n)throw t("Not enough arguments");return e}},96815:(e,t,n)=>{var a=n(82109),r=n(17854),o=n(17152).setInterval;a({global:!0,bind:!0,forced:r.setInterval!==o},{setInterval:o})},88417:(e,t,n)=>{var a=n(82109),r=n(17854),o=n(17152).setTimeout;a({global:!0,bind:!0,forced:r.setTimeout!==o},{setTimeout:o})},32564:(e,t,n)=>{n(96815),n(88417)}},e=>{e.O(0,[9755,2109],(()=>{return t=82380,e(e.s=t);var t}));e.O()}]);