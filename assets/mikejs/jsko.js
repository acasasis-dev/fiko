 // sidebar menu slide
 $(document).ready(function () {
    $('.sidebar-menu').tree();
  });

//----------------------------------------------------Data table----------------------------------------------------
   $(function () {
    $('#myTable').DataTable({
      'paging'      : true,
      'lengthChange': true,
      'searching'   : true,
      'ordering'    : false,
      'info'        : true,
      'autoWidth'   : true
    });
  });

//---------------------------------------------------- End Data table----------------------------------------------------
