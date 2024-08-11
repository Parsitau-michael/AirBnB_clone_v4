$( document ).ready(() => {
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    method: 'GET',
    success: (response) => {
      if (response.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  }

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
