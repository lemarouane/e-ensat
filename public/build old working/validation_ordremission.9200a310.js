(self.webpackChunk=self.webpackChunk||[]).push([[549],{59182:(t,e,r)=>{var o,a=r(19755);r(74916),r(15306),r(32564),(o=a)(document).on("click","#odo",(function(){var t=o(this);$vartest=t.data("user");var e=o("#path-to-ordre_m").data("href");e=e.replace("1111",$vartest),o.ajax({url:e,type:"GET",dataType:"JSON",success:function(t){setTimeout((function(){location.reload()}),100)},error:function(){}})})),o("#attest_validation_from").on("submit",(function(t){t.preventDefault();var e="ordre_missionVAL_XXXX".replace("XXXX",o("#n_attest").val());form=o("#attest_validation_from"),o.ajax({type:"POST",data:form.serialize(),url:e,success:function(t){o("#validation_modal").modal("hide"),setTimeout((function(){location.reload()}),100)},error:function(){alert("service denied")}})}))},50206:(t,e,r)=>{var o=r(1702);t.exports=o([].slice)},17152:(t,e,r)=>{var o=r(17854),a=r(22104),n=r(60614),i=r(88113),s=r(50206),u=r(48053),l=/MSIE .\./.test(i),c=o.Function,v=function(t){return l?function(e,r){var o=u(arguments.length,1)>2,i=n(e)?e:c(e),l=o?s(arguments,2):void 0;return t(o?function(){a(i,this,l)}:i,r)}:t};t.exports={setTimeout:v(o.setTimeout),setInterval:v(o.setInterval)}},48053:t=>{var e=TypeError;t.exports=function(t,r){if(t<r)throw e("Not enough arguments");return t}},96815:(t,e,r)=>{var o=r(82109),a=r(17854),n=r(17152).setInterval;o({global:!0,bind:!0,forced:a.setInterval!==n},{setInterval:n})},88417:(t,e,r)=>{var o=r(82109),a=r(17854),n=r(17152).setTimeout;o({global:!0,bind:!0,forced:a.setTimeout!==n},{setTimeout:n})},32564:(t,e,r)=>{r(96815),r(88417)}},t=>{t.O(0,[755,109,306],(()=>{return e=59182,t(t.s=e);var e}));t.O()}]);