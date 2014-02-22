# postCodeAjax

> Plugin desenvolvido para auxiliar o cadastro de endereço, fazendo com que ao
> digitar o CEP <code>(09351-020 ou 09351020)</code> o sistema retorne e preencha
> o endereço completo, fazendo foco no campo número.

<b>Demostração:</b> <a href="http://lab.mariosmello.com/postCodeAjax/" target="_blank">http://lab.mariosmello.com/postCodeAjax/</a>

## Uso

Forma de uso simplificada:

```js
$('#form1').postcode();
```
Ou com muliplos formulários

```js
$('#form2,#form3').postcode();
```

Exemplo com configurações padrão

```js
$('#form1').postcode({
  btn: ".postcode_btn", //botão de busca
  postcode: ".postcode_ajax", //campo de cep
  street: ".street_ajax", //campo rua
  area: ".area_ajax", //campo bairro
  city: ".city_ajax", //campo cidade
  state: ".state_ajax", //campo estado (uf)
  number: ".number_ajax", //campo número. No retorno do ajax este campo ficará com foco
  loading: ".postcode_loading", //classe de loading, será exibida durante consulta
  hideSubmit: false, //caso esteja ativo esconde o botão de busca durante a consulta
  error: 'alert', //exibe o erro caso ocorra em um alert, possíbilidade de alterar para 'form', fazendo com que o erro seja exibido no container definido na propriedade errorForm
  errorMessage: 'Erro ao realizar a consulta, por favor tente novamente.', //mensagem de erro (caso ocorra)
  errorForm: '.postcode_error' //container do erro do tipo form
});
```

Exemplo com configurações personalizadas

```js
$('#form4').postcode({
  btn: ".postcode_btn_custom",
  postcode: ".postcode_ajax_custom",
  street: ".street_ajax_custom",
  area: ".area_ajax_custom",
  city: ".city_ajax_custom",
  state: ".state_ajax_custom",
  number: ".number_ajax_custom",
  loading:'.postcode_loading_custom'
  hideSubmit: true,
  error: 'form',
  errorMessage: 'Problema com consulta :(',
  errorForm: '.postcode_error_custom'
});
```

<iframe width="100%" height="300" src="http://jsfiddle.net/DwJcS/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>