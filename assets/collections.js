/*
    assets/collections.js
    Lógica para el manejo de formularios de filtros y ordenamiento.
*/

document.addEventListener('DOMContentLoaded', () => {
    const filterForm = document.querySelector('.filters-form');
    const sortBySelect = document.getElementById('SortBy');

    if (filterForm) {
        // En móviles, el formulario tiene un botón de envío explícito.
        // En desktop, se puede hacer que el cambio de checkbox envíe el formulario.
        const isDesktop = window.matchMedia("(min-width: 750px)").matches;

        if (isDesktop) {
            // En desktop, aplicamos el filtro al cambiar cualquier checkbox.
            const checkboxes = filterForm.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', () => {
                    filterForm.submit();
                });
            });
        }
    }

    // El manejo del "Sort By" ya está en el snippet 'collection-sort-by.liquid'
    // para asegurar que funciona incluso sin un archivo JS dedicado.
});