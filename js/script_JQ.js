$("#button_submit").removeClass("element_hidden");
$("#button_cancel").removeClass("element_hidden");
//let $inicio =$("#Inicio_section");
//$inicio.removeClass("element_hidden")

let $formu = $("#form1");
let $come = $("#come")
$formu.removeClass("element_hidden");


$("#button_submit").on('click', function(event){
  var validado=true;
  //validar tortilla
  let $tortilla_err = $('#tortilla_incorrecto');
  let $tortilla_ele = $('#tortilla_elegida');
  if ($('input[name=tortilla]').is(':checked')){
    $tortilla_err.addClass("element_hidden");
    if($("#tortilla_harina").is(':checked')){
      $tortilla_ele.text("Tortilla Harina");
    }else if($('input[id=tortilla_integral]').is(':checked')){
       $tortilla_ele.text("Tortilla_integral");
    } else if($('input[id=Bowl]').is(':checked')){
       $tortilla_ele.text("Bowl");
    } 

  }
  else{
    $tortilla_err.removeClass("element_hidden");
    validado=false;
  }


  //validar carne
  let $carne_ele = $('#carne_elegida');
  let $carne = $("#carne")[0].selectedIndex;
  let $carne_err = $("#carne_incorrecto");

  if($carne == 0) {
   
    $carne_err.removeClass("element_hidden");
    validado=false;
  } else {
    $carne_err.addClass("element_hidden");
    if($carne==1){
      $carne_ele.text("Carne asada");
    }else if($carne==2){
       $carne_ele.text("Trompo");
    }else if($carne==3){
       $carne_ele.text("Pollo");
    }else if($carne==4){
       $carne_ele.text("Nopalitos(veggie)");
    }
  }


  //validar secundarios
  var secundarios = '';
  let $secundarios_ele = $('#secundarios_elegida');
if ($('#arroz_blanco').is(':checked') ) {
secundarios+= 'Arroz blanco  ';

}
if ($('#queso').is(':checked') ) {
secundarios+= 'Queso ';
}

if ($('#frijolitos').is(':checked') ) {
secundarios+= 'Frijolitos ';
}

if ($('#crema').is(':checked') ) {
secundarios+= ' Crema ';
}
if ($('#lechuga').is(':checked') ) {
secundarios+= 'Lechuga ';
console.log(secundarios);
}

if ($('#pico_de_gallo').is(':checked') ) {
secundarios+= 'Pico de Gallo ';
}

if ($('#guacamole').is(':checked') ) {
secundarios+= 'Guacamole ';
}

if ($('#jalapeños').is(':checked') ) {
secundarios+= 'Jalapeños ';
}
if(secundarios==''){
  secundarios+='No elegiste ningún ingrediente secundario ';
}
console.log(secundarios);
$secundarios_ele.text(secundarios);
//validar salsa
let $salsa_err = $('#salsa_incorrecto');
let $salsa_ele = $('#salsa_elegida');
  if ($('input[name=salsa]').is(':checked')){
    $salsa_err.addClass("element_hidden");
     if($('input[id=verde]').is(':checked')){
      $salsa_ele.text("Verde");
    }else if($('input[id=roja]').is(':checked')){
       $salsa_ele.text("Roja");
    } else if($('input[id=de_la_casa]').is(':checked')){
       $salsa_ele.text("De la casa");
    } else if($('input[id=habanera]').is(':checked')){
       $salsa_ele.text("Habanera");
    } 

  }
  else{
    $salsa_err.removeClass("element_hidden");
    validado=false;
  }

//validar nachos
let $nachos_err = $('#nachos_incorrecto');
let $nachos_ele = $('#nachos_elegida');
  if ($('input[name=nachos]').is(':checked')){
    $nachos_err.addClass("element_hidden");
   if($('input[id=si]').is(':checked')){
      $nachos_ele.text("Sí");
    }else{
      $nachos_ele.text("No");
    }

  }
  else{
    $nachos_err.removeClass("element_hidden");
    validado=false;
  }



//validar número
var numero_elegido = '';
 let $numero = $("#numero");
  let $numero_err = $("#numero_incorrecto");
numero_elegido = '';
if($numero.val() == "") {
    $numero_err.removeClass("element_hidden");
    validado=false;
  } else {
    if(!valida_numero($numero.val() )){
      $numero_err.removeClass("element_hidden");
    }else{
      $numero_err.addClass("element_hidden");
      numero_elegido+=$numero.val();
        numero_elegido+= ' burritos';
        $("#numero_elegida").text(numero_elegido);
    }
    
  }


function valida_numero(numero){

      var regex_numero = /\d+/;
      return regex_numero.test(numero);
    }




let jsonToSend = {
                "tortilla"  : $tortilla_ele,
                "ingrediente"   : $carne_ele,
                "opcionales"  : $secundarios_ele,
                "salsa" : $salsa_ele,
                "nachos" : $nachos_ele,
                "cantidad" : $numero.val(),
                "usuario" : 'Dani',
      };

      $.ajax({
        url     : "controller/pedidos.php",
        type    : "POST",
        data    : jsonToSend,
        ContentType : "application/json",
        dataType  : "json",
        success   : function(data){
                    console.log("hola");

        },
        error   : function(error){
          alert('No se pudo hacer el pedido.');
          console.log(error);
        } 
      });
      
    if (validado==true){
      $formu.addClass("element_hidden");
      $("#button_submit").addClass("element_hidden");
     $("#button_cancel").addClass("element_hidden");
     $("#res").removeClass("element_hidden");


    }



 




});



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