$((function(){"use strict";var e=$("#anneeSelect").find(":selected").val();function t(e){var t=$("#path-to-statStage").data("href");t=t.replace("1111",e),$.ajax({type:"GET",dataType:"json",url:t,success:function(e){$("#promotion_fille").html(e.nbFilles),$("#promotion_garçon").html(e["nbGarçons"]),$("#promotion_totale").html(e.totales),$("#convention_retire").html(e.convention),$("#diplome_retire").html(e.diplome)},error:function(){}})}function o(e){var t=["#00c6fb","#ff6a00","#98ec2d","#C7B446","#CD5C5C"],o=[],r=[],n=$("#path-to-nbAsDiplome").data("href");n=n.replace("1111",e),$.ajax({type:"GET",dataType:"json",url:n,success:function(e){$.each(e,(function(e,t){r.push(parseInt(t.NOMBRE)),o.push(t.COD_DIP)}));var n={series:r,chart:{height:250,type:"donut",foreColor:"#373d3f"},plotOptions:{pie:{startAngle:-90,endAngle:270}},dataLabels:{enabled:!0,formatter:function(e){return e.toFixed(2)+"%"},dropShadow:{}},tooltip:{theme:"dark"},colors:t,labels:o,fill:{type:"gradient"},legend:{formatter:function(e,t){return e+" : "+t.w.globals.series[t.seriesIndex]},fontSize:"10px",foreColor:"#373d3f"},title:{text:""},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]};window.chart4&&window.chart4.destroy(),window.chart4=new ApexCharts(document.querySelector("#chart5"),n),window.chart4.render()},error:function(){}})}function r(e){var t=["#00c6fb","#ff6a00","#98ec2d","#C7B446","#CD5C5C","#008080","#FF6347","#FFFF00","#00FF7F","#FF0000","#4169E1","#FF00FF","#20B2AA","#9400D3","#2F4F4F","#A52A2A"],o=[],r=[],n=$("#path-to-type_stage").data("href");n=n.replace("1111",e),$.ajax({type:"GET",dataType:"json",url:n,success:function(e){$.each(e,(function(e,t){r.push(parseInt(t.y)),o.push(t.NOMBRE)}));var n={series:r,chart:{height:250,type:"pie",foreColor:"#373d3f",offsetX:-40},plotOptions:{pie:{startAngle:-90,endAngle:270}},dataLabels:{enabled:!0,formatter:function(e){return e.toFixed(2)+"%"},dropShadow:{}},tooltip:{theme:"dark"},colors:t,labels:o,fill:{type:"gradient"},legend:{formatter:function(e,t){return e+" : "+t.w.globals.series[t.seriesIndex]+"%"},fontSize:"9px",width:200},title:{text:""},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]};window.chart3&&window.chart3.destroy(),window.chart3=new ApexCharts(document.querySelector("#chart7"),n),window.chart3.render()},error:function(){}})}function n(e){var t=[],o=[],r=$("#path-to-evolutifEffect").data("href");r=r.replace("1111",e),$.ajax({type:"GET",dataType:"json",url:r,success:function(e){$.each(e,(function(e,r){t.push(r.NOMBRE),o.push(r.COD_ANU)}));var r={series:[{name:"affectif",data:t}],chart:{foreColor:"#9ba7b2",height:360,type:"area",zoom:{enabled:!1},toolbar:{show:!0}},colors:["#3461ff","#0c971a"],title:{text:"Effectifs ENSAT",align:"left",style:{fontSize:"16px",color:"#666"}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:o},tooltip:{x:{format:"yyyy"}}};window.chart2&&window.chart2.destroy(),window.chart2=new ApexCharts(document.querySelector("#chart1"),r),window.chart2.render()},error:function(){}})}function a(e){var t=["#00c6fb","#ff6a00","#98ec2d","#C7B446","#CD5C5C","#008080","#FF6347","#FFFF00","#00FF7F","#FF0000","#4169E1","#FF00FF","#20B2AA","#9400D3","#2F4F4F","#A52A2A"],o=[],r=[],n=$("#path-to-entrepriseConvention").data("href");n=n.replace("1111",e),$.ajax({type:"GET",dataType:"json",url:n,success:function(e){$.each(e,(function(e,t){r.push(parseInt(t.NOMBRE)),o.push(t.filiere)}));var n={series:r,chart:{height:250,type:"pie",foreColor:"#373d3f",offsetX:-40},plotOptions:{pie:{startAngle:-90,endAngle:270}},dataLabels:{enabled:!0,formatter:function(e){return e.toFixed(2)+"%"},dropShadow:{}},tooltip:{theme:"dark"},colors:t,labels:o,fill:{type:"gradient"},legend:{formatter:function(e,t){return e+" : "+t.w.globals.series[t.seriesIndex]},fontSize:"9px",width:120},title:{text:""},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]};$("div#chart6").remove(),$("div.chartJs").append('<div id="chart6"></div>'),window.chart1=new ApexCharts(document.querySelector("#chart6"),n),window.chart1.render()},error:function(){}})}a(e),o(e),r(e),n(e),t(e),$("#anneeSelect").on("change",(function(){var e=$(this).val();o(e),r(e),n(e),t(e),a(e)}))}));