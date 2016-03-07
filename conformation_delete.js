$(document).ready(function() {
  $('.btn-danger').click( function(e) {
    var form = $(this).parents('form:first');
    e.preventDefault();
    swal(
    {
      title: "Do you want to delete this element?",
      text: "You can't recover this item if deleted",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, Delete it!",
      cancelButtonText: "Cancel",
      closeOnConfirm: false
    }, function()
    {
      swal({
          title: "Deleted!",
          text: "Your item has been removed",
          type: "success"
        }, function(isConfirm){
          form.submit();
        });

    });
  });
});
