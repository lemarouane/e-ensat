$("#avancement_corps").change((function(){var e=$(this);$.ajax({url:"corps_grades",type:"GET",dataType:"JSON",data:{corpsid:e.val()},success:function(e){var n=$("#avancement_grade");n.html(""),n.append("<option value>------Selectionner un Grade------</option>"),$.each(e,(function(e,a){n.append('<option value="'+a.id+'">'+a.designationFr+"</option>")}))},error:function(e){alert("An error ocurred while loading data ...")}})})),$("#avancement_grade").change((function(){var e=$(this);$.ajax({url:"grades_echelon",type:"GET",dataType:"JSON",data:{gradeid:e.val()},success:function(e){var n=$("#avancement_echelon");n.html(""),n.append("<option value>------Selectionner Indice-Echelon------</option>"),$.each(e,(function(e,a){n.append('<option value="'+a.id+'">'+a.designation+"</option>")}))},error:function(e){alert("An error ocurred while loading data ...")}})})),$("#personnel_corpsId").change((function(){var e=$(this);$.ajax({url:"corps_grades",type:"GET",dataType:"JSON",data:{corpsid:e.val()},success:function(e){var n=$("#personnel_gradeId");n.html(""),n.append("<option value>------Selectionner un Grade------</option>"),$.each(e,(function(e,a){n.append('<option value="'+a.id+'">'+a.designationFr+"</option>")}))},error:function(e){alert("An error ocurred while loading data ...")}})})),$("#personnel_gradeId").change((function(){var e=$(this);$.ajax({url:"grades_echelon",type:"GET",dataType:"JSON",data:{gradeid:e.val()},success:function(e){var n=$("#personnel_echelonId");n.html(""),n.append("<option value>------Selectionner Indice-Echelon------</option>"),$.each(e,(function(e,a){n.append('<option value="'+a.id+'">'+a.designation+"</option>")}))},error:function(e){alert("An error ocurred while loading data ...")}})}));