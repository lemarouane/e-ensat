var $collectionHolder,$addNewItem=$('<a href="#" class="btn btn-primary bi bi-plus-circle shadow-none" style="width:42px;height:35px;padding-top:7px; margin-left:0%"></a>');function addNewForm(){var e=$collectionHolder.data("prototype"),t=$collectionHolder.data("index"),a=e,r=t;a=a.replace(/__name__/g,t),$collectionHolder.data("index",t++);var i=$('<div class="panel form-group "></div>'),o=$('<div class="row panalEngagement"></div>').append(a);i.append(o),addRemoveButton(i),$addNewItem.before(i),$("#ordre_mission_engagements_"+r).addClass("row g-3")}function addRemoveButton(e){var t=$('<a href="#" class="btn btn-danger bi bi-dash-circle shadow-none" style="width:42px;height:35px; padding-top:7px; float:right"></a>'),a=$('<div style="width:100%; height:30px ; margin-top :10px;"></div>').append(t);t.click((function(e){e.preventDefault(),$(e.target).parents(".panel").slideUp(1e3,(function(){$(this).remove()}))})),e.append(a)}$(document).ready((function(){($collectionHolder=$("#engagement_list")).append($addNewItem),$collectionHolder.find(".panel").each((function(e){addRemoveButton($(this))})),$addNewItem.click((function(e){e.preventDefault(),$collectionHolder.data("index",$collectionHolder.find(".panel").length),addNewForm(),$(".js-eng-datepicker").datepicker.dates["fr-FR"]={days:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],daysShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],daysMin:["Di","Lu","Ma","Me","Je","Ve","Sa"],months:["Janvier","Fevrier","Mars","Avril","Mai","Juin","juillet","Aout","Septembre","Octobre","Novembre","Decembre"],monthsShort:["Jan","Fev","Mar","Avr","Mai","Jun","Jul","Aou","Sep","Oct","Nov","Dec"],today:"Aujourd'hui",clear:"Effacer",format:"yyyy-mm-dd",titleFormat:"yyyy MM",weekStart:1},$(".js-eng-datepicker").datepicker({autoclose:!0,language:"fr-FR",todayHighlight:!0,orientation:"right bottom",startDate:new Date}),$(".js-eng-datepicker").attr("autocomplete","off"),$(".js-eng-datepicker").keypress((function(e){return!1}))}))})),$(".jsom-datepicker").datepicker.dates["fr-FR"]={days:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],daysShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],daysMin:["Di","Lu","Ma","Me","Je","Ve","Sa"],months:["Janvier","Fevrier","Mars","Avril","Mai","Juin","juillet","Aout","Septembre","Octobre","Novembre","Decembre"],monthsShort:["Jan","Fev","Mar","Avr","Mai","Jun","Jul","Aou","Sep","Oct","Nov","Dec"],today:"Aujourd'hui",clear:"Effacer",format:"yyyy-mm-dd",titleFormat:"yyyy MM",weekStart:1},$(".jsom-datepicker").datepicker({autoclose:!0,language:"fr-FR",todayHighlight:!0,orientation:"right bottom"}),$(".jsom-datepicker").attr("autocomplete","off"),$(".jsom-datepicker").attr("autocomplete","off");