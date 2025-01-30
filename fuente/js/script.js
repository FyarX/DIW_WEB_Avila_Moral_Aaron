function actualizarBusqueda() {
    const barraBusqueda = document.getElementById('search_bar');
    if (window.innerWidth <= 420) {
      barraBusqueda.placeholder = 'Buscar...';
    } else {
      barraBusqueda.placeholder = 'Buscar libros, autores, ISBN...';
    }
  }

  // Llama a la función cuando la página se carga
  window.onload = actualizarBusqueda();

  // Llama a la función cuando la ventana cambia de tamaño
  window.onresize = actualizarBusqueda();