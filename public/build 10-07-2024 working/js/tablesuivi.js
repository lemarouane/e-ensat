$((function(){langue=$("#langue").val(),"ar-AR"==langue&&(langue="ar"),langue_file="https://cdn.datatables.net/plug-ins/1.13.1/i18n/"+langue+".json",$("#example3").DataTable({language:{url:langue_file},paging:!0,lengthChange:!0,searching:!0,ordering:!0,info:!0,autoWidth:!1}),$("#example4").DataTable({language:{url:langue_file},paging:!0,lengthChange:!0,searching:!0,ordering:!0,info:!0,autoWidth:!1})}));