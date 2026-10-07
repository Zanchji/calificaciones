document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const formulario = document.getElementById('formulario');
    const inputMateria = document.getElementById('materia');
    const inputCal1 = document.getElementById('calificacion1');
    const inputCal2 = document.getElementById('calificacion2');
    const inputCal3 = document.getElementById('calificacion3');
    const widgetMensaje = document.getElementById('widgetMensaje');

    // Escuchar el evento de envío del formulario
    formulario.addEventListener('submit', (event) => {
        // Prevenir la recarga de la página
        event.preventDefault();

        // Obtener los valores de los inputs
        const materia = inputMateria.value.trim();
        const cal1 = parseFloat(inputCal1.value);
        const cal2 = parseFloat(inputCal2.value);
        const cal3 = parseFloat(inputCal3.value);

        // Validar entradas numéricas
        if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
            widgetMensaje.innerHTML = `<p style="color: red;">Por favor, ingresa calificaciones válidas.</p>`;
            return;
        }

        // Calcular el promedio
        const promedio = (cal1 + cal2 + cal3) / 3;
        const promedioFormateado = promedio.toFixed(2);

        // Determinar el estatus y color según la escala solicitada
        let estatus = '';
        let colorEstatus = '';

        if (promedio <= 60) {
            estatus = 'Insuficiente';
            colorEstatus = '#ef4444'; // Rojo
        } else if (promedio > 60 && promedio < 70) {
            estatus = 'Regular';
            colorEstatus = '#f97316'; // Naranja
        } else if (promedio >= 70 && promedio <= 80) {
            estatus = 'Suficiente';
            colorEstatus = '#eab308'; // Amarillo
        } else if (promedio > 80 && promedio < 90) {
            estatus = 'Bueno';
            colorEstatus = '#3b82f6'; // Azul
        } else if (promedio >= 90 && promedio <= 100) {
            estatus = 'Excelente';
            colorEstatus = '#22c55e'; // Verde
        } else {
            estatus = 'Fuera de rango';
            colorEstatus = '#6b7280'; // Gris
        }

        // Mostrar el resultado en el contenedor de la página
        widgetMensaje.innerHTML = `
            <h2>Resultado</h2>
            <p><strong>Materia:</strong> ${materia}</p>
            <p><strong>Promedio:</strong> ${promedioFormateado}</p>
            <p><strong>Estatus:</strong> <span style="color: ${colorEstatus}; font-weight: bold;">${estatus}</span></p>
        `;
    });
});