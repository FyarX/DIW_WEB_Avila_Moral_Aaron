function actualizarBusqueda() {
    // Obtiene el elemento de la barra de búsqueda
    const barraBusqueda = document.getElementById('search_bar');

    // Si la ventana es menor o igual a 420px, cambia el placeholder
    if (window.innerWidth <= 420) {
      
      // Cambia el placeholder
      barraBusqueda.setAttribute('placeholder', 'Buscar...');

    } else {
      // Si la ventana es mayor a 420px, vuelve al placeholder mas largo
      barraBusqueda.placeholder = 'Buscar libros, autores, ISBN...';
    }
  }

  // Llama a la función cuando la página se carga
  window.onload = actualizarBusqueda();

  // Llama a la función cuando la ventana cambia de tamaño
  window.addEventListener("resize", actualizarBusqueda);



  // Cambiar el color del botón clicado
  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.categorias_btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover la clase 'active' de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));
            // Agregar la clase 'active' al botón clicado
            this.classList.add('active');
        });
    });


    const markers = document.querySelectorAll('.ebook_marker');

    markers.forEach(marker => {
        marker.addEventListener('click', function() {
            // Quitar la clase 'active' de todos los botones
            markers.forEach(mrk => mrk.classList.remove('active'));
            // Agregar la clase 'active' al botón clicado
            this.classList.add('active');
        });
    });
});