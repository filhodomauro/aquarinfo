const MAPS_API = 'https://maps.googleapis.com/maps/api/place/textsearch/json?type=cities&key=AIzaSyBNMq75Gp3PZMrntv-Mk30E9Z8Aq4X-DNI';
var app = {
  init : function() {
    $('#location_input').on('keypress', app._findCities);
  },
  _findCities: function(e) {
      var query = e.target.value;
      if (query.length > 2) {
          $.ajax( {
              url: MAPS_API + '&query=' + e.target.value + '+in+brasil',
              beforeSend: function(xhr) {
                  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
              },
              crossDomain: true
          })
          .done(function(data) {
              $('#cities').empty();
              for (var i in data.results) {
                  $('#cities').append('<option value="'+data.results[i].formatted_address+'">');
              }
          })
          .fail(function(e) {
            throw e;
          });
      }
  }
};
