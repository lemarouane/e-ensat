function app_counter(){$.ajax({type:"POST",dataType:"json",url:$("#path-to-counter-cooperation").data("href"),success:function(n){$(".counter_4").remove(),null!=n.diplome&&0!=n.diplome&&$("#coop_diplome").append(' <span style="animation: glow 0.8s infinite alternate;margin-left:5px;" class="badge bg-danger rounded-pill counter_4 counter_i">'+n.diplome+"</span>"),null!=n.convention&&0!=n.convention&&($("#coop_convention").append(' <span style="animation: glow 0.8s infinite alternate;margin-left:5px;" class="badge bg-danger rounded-pill counter_4 counter_i">'+n.convention+"</span>"),$("#coop_convention_fil").append(' <span style="animation: glow 0.8s infinite alternate;margin-left:5px;" class="badge bg-danger rounded-pill counter_4 counter_i">'+n.convention+"</span>")),null!=n.non_inscrit&&0!=n.non_inscrit&&($("#coop_non_ins").append('  <span style="animation: glow 0.8s infinite alternate;margin-left:5px;" class="badge bg-danger rounded-pill counter_4 counter_i">'+n.non_inscrit+"</span>"),$("#conv_totale").append('  <span style="animation: glow 0.8s infinite alternate;margin-left:5px;" class="badge bg-danger rounded-pill counter_4">'+n.non_inscrit+"</span>")),null!=n.totale&&0!=n.totale&&$("#coop_totale").append('  <span style="animation: glow 0.8s infinite alternate;margin-left:5px;" class="badge bg-danger rounded-pill counter_4">'+n.totale+"</span>")},error:function(){}})}app_counter(),setInterval((function(){app_counter()}),3e5);