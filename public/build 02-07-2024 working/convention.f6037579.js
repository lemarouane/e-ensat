(self.webpackChunk=self.webpackChunk||[]).push([[4676],{40977:(e,t,n)=>{var a=n(19755);n(74916),n(15306),n(32564),function(e){langue=e("#langue").val(),"ar-AR"==langue&&(langue="ar"),langue_file="https://cdn.datatables.net/plug-ins/1.13.1/i18n/"+langue+".json";e("#exe1").DataTable({language:{url:langue_file},paging:!0,lengthChange:!0,searching:!0,ordering:!0,info:!0,autoWidth:!1});e("#motifText").hide(),e("#ordre").on("change",(function(){1==e("#ordre").val()?e("#motifText").hide():e("#motifText").show()})),e("#ordre_form").on("submit",(function(t){t.preventDefault();var n=e("#path-to-convention").data("href");n=n.replace("1111",e("#iddocument").val()),jsFormUrl=n,form=e("#ordre_form"),e.ajax({type:"POST",data:form.serialize(),url:jsFormUrl,success:function(t){e("#dataModalOrdre").modal("hide"),setTimeout((function(){location.reload()}),100)},error:function(){alert("service denied")}})})),e("a.icons").on("click",(function(t){var n=e(this);document.getElementById("iddocument").value=n.data("user")})),e("a.icons1").on("click",(function(t){var n=e(this),a=new XMLHttpRequest,o=e("#path-to-nbconvention").data("href");a.open("POST",o,!0),a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.onreadystatechange=function(){4==a.readyState&&200==a.status&&(document.getElementById("conventionList").innerHTML=a.responseText)},a.send("codeApogee="+n.data("user"))})),e("#attest_validation_from").on("submit",(function(t){t.preventDefault();var n="stageencad_XXXX".replace("XXXX",e("#n_attest").val());form=e("#attest_validation_from"),e.ajax({type:"POST",data:form.serialize(),url:n,success:function(t){e("#validation_modal").modal("hide"),setTimeout((function(){location.reload()}),100)},error:function(){alert("service denied")}})}))}(a)},50206:(e,t,n)=>{var a=n(1702);e.exports=a([].slice)},17152:(e,t,n)=>{var a=n(17854),o=n(22104),r=n(60614),i=n(88113),u=n(50206),s=n(48053),l=/MSIE .\./.test(i),c=a.Function,d=function(e){return l?function(t,n){var a=s(arguments.length,1)>2,i=r(t)?t:c(t),l=a?u(arguments,2):void 0;return e(a?function(){o(i,this,l)}:i,n)}:e};e.exports={setTimeout:d(a.setTimeout),setInterval:d(a.setInterval)}},48053:e=>{var t=TypeError;e.exports=function(e,n){if(e<n)throw t("Not enough arguments");return e}},96815:(e,t,n)=>{var a=n(82109),o=n(17854),r=n(17152).setInterval;a({global:!0,bind:!0,forced:o.setInterval!==r},{setInterval:r})},88417:(e,t,n)=>{var a=n(82109),o=n(17854),r=n(17152).setTimeout;a({global:!0,bind:!0,forced:o.setTimeout!==r},{setTimeout:r})},32564:(e,t,n)=>{n(96815),n(88417)}},e=>{e.O(0,[9755,2109,5306],(()=>{return t=40977,e(e.s=t);var t}));e.O()}]);