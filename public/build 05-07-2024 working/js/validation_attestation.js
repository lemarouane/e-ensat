!function(t){t("#attest_validation_from").on("submit",(function(a){a.preventDefault();var e="attestationVAL_XXXX".replace("XXXX",t("#n_attest").val());form=t("#attest_validation_from"),t.ajax({type:"POST",data:form.serialize(),url:e,success:function(a){t("#validation_modal").modal("hide"),setTimeout((function(){location.reload()}),100)},error:function(){alert("service denied")}})}))}(jQuery);