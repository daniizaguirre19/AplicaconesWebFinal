$('#submenu > li').on('click', function(event){
  $("#h7_us").addClass("element_hidden");
   $("#h7_em").addClass("element_hidden");
    $("#coment_ejemplo").addClass("element_hidden");
     $("#com").addClass("element_hidden");
  // primero le quitamos el estilo a la lista seleccionada
  $('.selected_nav_element').removeClass('selected_nav_element');

  // agarramos el elemento que clickeamos
  let $current_element = $(this);
  let name = $current_element.attr('id');

  // actualizar los estilos del elemento al que se le hizo click
  $current_element.addClass('selected_nav_element');

  // ocultamos la seccion previa y las demas
  $('span[name="comment"]').addClass("element_hidden");
   // $("#name").removeClass("element_hidden");
  // mostrar la seccion actual
  $('#' + name + '_comment').removeClass("element_hidden");
 
});
