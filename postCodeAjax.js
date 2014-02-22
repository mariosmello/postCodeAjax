(function($) {

  $.fn.postcode = function(options) {

    var settings = $.extend({
      btn: ".postcode_btn",
      postcode: ".postcode_ajax",
      street: ".street_ajax",
      area: ".area_ajax",
      city: ".city_ajax",
      state: ".state_ajax",
      number: ".number_ajax",
      loading: ".postcode_loading",
      hideSubmit: false
    }, options);

    this.each(function(index, form) {

      $(form).find(settings.loadingClass).hide();

      $(form).find(settings.btn).bind('click', function() {
        ajaxPostCode($(form));
      });

      $(form).find(settings.postcode).keydown(function(e) {
        if (e.keyCode == 13) {
          ajaxPostCode($(form));
          e.preventDefault();
        }
      });

    });

    function ajaxPostCode(form) {

      $.ajax({
        url: 'http://api.din.la/cep/',
        type: 'get',
        dataType: 'json',
        data: {
          cep: form.find(settings['postcode']).val()
        },
        beforeSend: function() {
          form.find(settings['loading']).show();
          if (settings['hideSubmit'] === true) {
            form.find(settings['btn']).hide();
          }
        },
        success: function(data) {
          form.find(settings['street']).val(data.logradouro);
          form.find(settings['area']).val(data.bairro);
          form.find(settings['city']).val(data.cidade);
          form.find(settings['state']).val(data.uf);
          form.find(settings['number']).focus();
        },
        complete: function() {
          form.find(settings['loading']).hide();
          form.find(settings['btn']).show();
        }
      });
    }

  };

}(jQuery));