postCodeAjax
============

Plugin desenvolvido para auxiliar o cadastro de endereço,<br>
fazendo com que ao digitar o CEP <code>(09351-020 ou 09351020)</code><br>
o sistema retorne e preencha o endereço completo, fazendo foco<br>
no campo de número.

<b>Formas de Uso:</b><br>
$('#form1').postcode();<br><br>
$('#form2,#form3').postcode();<br><br>
$('#form4').postcode({<br>
btn: ".postcode_btn_custom",<br>
postcode: ".postcode_ajax_custom",<br>
street: ".street_ajax_custom",<br>
area: ".area_ajax_custom",<br>
city: ".city_ajax_custom",<br>
state: ".state_ajax_custom",<br>
 number: ".number_ajax_custom"<br>
});
<br>
<br>
<b>Demostração:</b> <a href="http://lab.mariosmello.com/postCodeAjax/">http://lab.mariosmello.com/postCodeAjax/</a>