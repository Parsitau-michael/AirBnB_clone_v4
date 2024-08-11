$( document ).ready(() => {
  let checkedAmenities = [];

  function updateAmenitiesList() {
    let checkedNames = checkedAmenities.map((id) => {
      return $(`input[data-id="${id}"]`).data('name');
    });
   
    $('.Amenities h4').text(checkedNames.join(', '));
  }

  $('input[type="checkbox"]').on('change', function() {
    let id = $(this).data('id');

    if ($(this).is(':checked')) {
      if (!checkedAmenities.includes(id)) {
        checkedAmenities.push(id);
      }
    } else {
      checkedAmenities = checkedAmenities.filter((item) => item !== id);
    }
    
    updateAmenitiesList();
  });
  
  updateAmenitiesList();
});
