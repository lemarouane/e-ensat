var $collectionHolder,$addNewItem=$('<a href="#" class="btn btn-primary bi bi-plus-circle shadow-none" style="width:42px;height:35px;padding-top:7px; margin-left:90%"></a>');function addNewForm(){var e=$collectionHolder.data("prototype"),n=$collectionHolder.data("index"),t=e,d=n;t=t.replace(/__name__/g,n),$collectionHolder.data("index",n++);var a=$('<div class="panel form-group "></div>'),o=$('<div class="row panalEngagement"></div>').append(t);a.append(o),addRemoveButton(a),$addNewItem.before(a),$("#reception_receptionlignes_"+d).addClass("row g-3")}function addRemoveButton(e){var n=$('<a href="#" class="btn btn-danger bi bi-dash-circle shadow-none" style="width:42px;height:35px; padding-top:7px;"></a>'),t=$('<div style="width:100%; height:30px ; margin-top :10px;"></div>').append(n);n.click((function(e){e.preventDefault(),$(e.target).parents(".panel").slideUp(1e3,(function(){$(this).remove()}))})),e.append(t)}$(document).ready((function(){($collectionHolder=$("#lignereception_list")).append($addNewItem),$collectionHolder.find(".panel").each((function(e){addRemoveButton($(this))})),$addNewItem.click((function(e){e.preventDefault(),$collectionHolder.data("index",$collectionHolder.find(".panel").length),addNewForm()}))}));