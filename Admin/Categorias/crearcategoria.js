document.addEventListener('DOMContentLoaded', () => {
    const createCategoryForm = document.getElementById('createCategoryForm');

    createCategoryForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;
        const token = localStorage.getItem('authToken');

        const newCategory = {
            nombre: nombre,
            descripcion: descripcion
        };

        try {
            const response = await fetch('http://localhost:50498/api/Categoria', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newCategory)
            });

            if (response.ok) {
                alert('Categoría creada exitosamente.');
                window.location.href = './index.html'; // Redirigir a la lista de categorías
            } else {
                const errorDetails = await response.json();
                alert(`Error al crear la categoría: ${response.status} - ${JSON.stringify(errorDetails)}`);
                console.error('Error al crear la categoría:', errorDetails);
            }

        } catch (error) {
            alert('Ocurrió un error al comunicarse con el servidor.');
            console.error('Error al enviar la solicitud:', error);
        }
    });
});