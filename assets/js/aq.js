(function($) {
    var input = $('#location_input')[0];
    var options = {
      types: ['(cities)'],
      componentRestrictions: {country: 'br'}
    };
    autocomplete = new google.maps.places.Autocomplete(input, options);
})(jQuery);
