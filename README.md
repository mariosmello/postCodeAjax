postCodeAjax
============

Plugin desenvolvido para auxiliar o cadastro de endereço,
fazendo com que ao digitar o CEP <code>(09351-020 ou 09351020)</code> o
sistema retorne e preencha o endereço completo, fazendo foco
no campo de número.

Formas de Uso:
$('#form1').postcode();
$('#form2,#form3').postcode();
$('#form4').postcode({
  btn: ".postcode_btn_custom",
  postcode: ".postcode_ajax_custom",
  street: ".street_ajax_custom",
  area: ".area_ajax_custom",
  city: ".city_ajax_custom",
  state: ".state_ajax_custom",
  number: ".number_ajax_custom"
});

Demostração: http://lab.mariosmello.com/postCodeAjax/