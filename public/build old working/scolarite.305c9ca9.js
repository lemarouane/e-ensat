(self.webpackChunk=self.webpackChunk||[]).push([[5531],{47625:(e,t,r)=>{var n=r(19755);r(69600),r(74916),r(15306),r(32564),function(e){langue=e("#langue").val(),"ar-AR"==langue&&(langue="ar"),langue_file="https://cdn.datatables.net/plug-ins/1.13.1/i18n/"+langue+".json";var t=e("#exe1").DataTable({language:{url:langue_file},paging:!0,lengthChange:!0,searching:!0,ordering:!0,info:!0,autoWidth:!1});t=e("#exemple6").DataTable({language:{url:langue_file},bDestroy:!0,columnDefs:[{targets:0,checkboxes:{selectRow:!0}}],select:{style:"multi"},order:[[1,"asc"]]});e("#ajouter").on("click",(function(){var r=t.column(0,{page:"current"}).checkboxes.selected();e.ajax({url:e("#path-to-controller").data("href"),type:"GET",dataType:"JSON",data:{liste:r.join(",")},success:function(e){location.reload()},error:function(){alert("An error ocurred while loading data ...")}})})),e("#motifText").hide(),e("#ordre").on("change",(function(){1==e("#ordre").val()?e("#motifText").hide():e("#motifText").show()})),e("#ordre_form").on("submit",(function(t){t.preventDefault();var r=e("#path-to-validation").data("href");r=r.replace("1111",e("#iddocument").val()),jsFormUrl=r,form=e("#ordre_form"),e.ajax({type:"POST",data:form.serialize(),url:jsFormUrl,success:function(t){e("#dataModalOrdre").modal("hide"),setTimeout((function(){location.reload()}),100)},error:function(){alert("service denied")}})})),e("a.icons").on("click",(function(t){var r=e(this);document.getElementById("iddocument").value=r.data("user")}))}(n)},9341:(e,t,r)=>{"use strict";var n=r(47293);e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){return 1},1)}))}},50206:(e,t,r)=>{var n=r(1702);e.exports=n([].slice)},17152:(e,t,r)=>{var n=r(17854),a=r(22104),o=r(60614),i=r(88113),l=r(50206),u=r(48053),c=/MSIE .\./.test(i),s=n.Function,d=function(e){return c?function(t,r){var n=u(arguments.length,1)>2,i=o(t)?t:s(t),c=n?l(arguments,2):void 0;return e(n?function(){a(i,this,c)}:i,r)}:e};e.exports={setTimeout:d(n.setTimeout),setInterval:d(n.setInterval)}},48053:e=>{var t=TypeError;e.exports=function(e,r){if(e<r)throw t("Not enough arguments");return e}},69600:(e,t,r)=>{"use strict";var n=r(82109),a=r(1702),o=r(68361),i=r(45656),l=r(9341),u=a([].join),c=o!=Object,s=l("join",",");n({target:"Array",proto:!0,forced:c||!s},{join:function(e){return u(i(this),void 0===e?",":e)}})},96815:(e,t,r)=>{var n=r(82109),a=r(17854),o=r(17152).setInterval;n({global:!0,bind:!0,forced:a.setInterval!==o},{setInterval:o})},88417:(e,t,r)=>{var n=r(82109),a=r(17854),o=r(17152).setTimeout;n({global:!0,bind:!0,forced:a.setTimeout!==o},{setTimeout:o})},32564:(e,t,r)=>{r(96815),r(88417)}},e=>{e.O(0,[9755,2109,5306],(()=>{return t=47625,e(e.s=t);var t}));e.O()}]);