$(".flag").on("click",(function(){var a=$(this).attr("value");$.ajax({type:"POST",url:$("#path-to-langue").data("href"),data:{langue:a},success:function(a){location.reload()}})}));