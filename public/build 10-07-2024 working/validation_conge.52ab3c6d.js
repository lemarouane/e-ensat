(self.webpackChunk=self.webpackChunk||[]).push([[2434],{24604:(e,t,r)=>{var n,o=r(19755);r(74916),r(15306),r(32564),(n=o)("#attest_validation_from").on("submit",(function(e){e.preventDefault();var t="congeVAL_XXXX".replace("XXXX",n("#n_conge").val());form=n("#attest_validation_from"),n.ajax({type:"POST",data:form.serialize(),url:t,success:function(e){n("#validation_modal").modal("hide"),setTimeout((function(){location.reload()}),100)},error:function(){alert("service denied")}})}))},50206:(e,t,r)=>{var n=r(1702);e.exports=n([].slice)},17152:(e,t,r)=>{var n=r(17854),o=r(22104),a=r(60614),i=r(88113),s=r(50206),u=r(48053),l=/MSIE .\./.test(i),c=n.Function,v=function(e){return l?function(t,r){var n=u(arguments.length,1)>2,i=a(t)?t:c(t),l=n?s(arguments,2):void 0;return e(n?function(){o(i,this,l)}:i,r)}:e};e.exports={setTimeout:v(n.setTimeout),setInterval:v(n.setInterval)}},48053:e=>{var t=TypeError;e.exports=function(e,r){if(e<r)throw t("Not enough arguments");return e}},96815:(e,t,r)=>{var n=r(82109),o=r(17854),a=r(17152).setInterval;n({global:!0,bind:!0,forced:o.setInterval!==a},{setInterval:a})},88417:(e,t,r)=>{var n=r(82109),o=r(17854),a=r(17152).setTimeout;n({global:!0,bind:!0,forced:o.setTimeout!==a},{setTimeout:a})},32564:(e,t,r)=>{r(96815),r(88417)}},e=>{e.O(0,[9755,2109,5306],(()=>{return t=24604,e(e.s=t);var t}));e.O()}]);