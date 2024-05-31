$(document).ready(function() {
    // Click en el botón "Ocultar Imagen"
    $('#ocultar-btn').click(function() {
        // Ocultar la imagen
        $('#imagen').hide();
        // Actualizar el título de la página
        $('h1').text('¡No tenemos ninguna imagen!');
    });

    // Click en el botón "Mostrar Imagen"
    $('#mostrar-btn').click(function() {
        // Mostrar la imagen
        $('#imagen').show();
        // Actualizar el título de la página
        $('h1').text('¡Mirá la siguiente imagen!');
    });
});
