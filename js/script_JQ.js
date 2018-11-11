$("#button_submit").removeClass("element_hidden");
$("#button_cancel").removeClass("element_hidden");
//let $inicio =$("#Inicio_section");
//$inicio.removeClass("element_hidden")

let $formu = $("#form1");
let $come = $("#come")
$formu.removeClass("element_hidden");





$('#menu > li').on('click', function(event){
  $("#res").addClass("element_hidden");
  // primero le quitamos el estilo a la lista seleccionada
  $('.selected_nav_element').removeClass('selected_nav_element');

  // agarramos el elemento que clickeamos
  let $current_element = $(this);
  let section_name = $current_element.attr('id');

  // actualizar los estilos del elemento al que se le hizo click
  $current_element.addClass('selected_nav_element');

  // ocultamos la seccion previa y las demas
  $('section').addClass("element_hidden");
  if(section_name=="Menu"){
    $formu.removeClass("element_hidden");
  }
  // mostrar la seccion actual
  $('#' + section_name + '_section').removeClass("element_hidden");
  // $(`#${section_name}_section`)
});


function valida_email(email){
  var regex_email = /\S+@\S+\.\S+/;
  return regex_email.test(email);
};

$("#button_cancel").on('click', function(event){

  $formu.trigger("reset");
  $tortilla_err.addClass("element_hidden");
  $carne_err.addClass("element_hidden");
  $nachos_err.addClass("element_hidden");
  numero_err.addClass("element_hidden");
  });

//definiciones 
let $email = $("#email");
  let $email_vacio = $("#email_vacio");
  let $email_invalido = $("#email_invalido");


$("#button_cancel_come").on('click', function(event){

  $come.trigger("reset");
  $email_vacio.addClass("element_hidden");
  $email_invalido.addClass("element_hidden");
  });

$("#button_submit_come").on('click', function(event){
   // valida email
   var validado2=true;
  let $email = $("#email");
  let $email_vacio = $("#email_vacio");
  let $email_invalido = $("#email_invalido");

  if($email.val() == "") {
    $email_vacio.removeClass("element_hidden");
      validado2=false;
  } else {
    $email_vacio.addClass("element_hidden");
    $email_invalido.addClass("element_hidden");
    if ( !valida_email( $email.val() )) {
      $email_invalido.removeClass("element_hidden");
            validado2=false;
    }
  }
  //mostrar comentario
let $usuario = $("#usuario");
let $usu = $("#usu");
let $h7_us = $("#h7_us");
let $h7_em = $("#h7_em");
let $com = $("#com");
let $ema = $("#ema");
  let $coment = $("#coment");
  let $coment_err = $("#coment_incorrecto");

  if($coment.val() == "") {
    $coment_err.removeClass("element_hidden");
        validado2=false;

  } else {
    $coment_err.addClass("element_hidden");
  }
  if(validado2==true){
  $usu.text($usuario.val());
  $usu.removeClass("element_hidden");
 $h7_us.removeClass("element_hidden");
  $h7_em.removeClass("element_hidden");
  $com.text($coment.val());
  $com.removeClass("element_hidden");
  $ema.text($email.val());
  $ema.removeClass("element_hidden");
  $coment.text("");
  $email.text("");
  $usuario.text("");
  }
 


  });


function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}