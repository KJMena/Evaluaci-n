function showInputsAndImage() {
    const figure = document.getElementById('figureSelect').value;
    const inputContainer = document.getElementById('inputContainer');
    const figureImage = document.getElementById('figureImage');
    inputContainer.innerHTML = ''; // Limpiar los inputs antes de mostrar los nuevos

    // Mostrar la imagen correspondiente
    if (figure === 'circulo') {
        figureImage.src = 'images/decarga1.jpeg';
        inputContainer.innerHTML = `
            <label for="radius">Radio</label>
            <input type="number" id="radius" placeholder="Marcador de Posición">
        `;
    } else if (figure === 'cuadrado') {
        figureImage.src = 'images/descarga(44).jpeg';
        inputContainer.innerHTML = `
            <label for="side">Lado</label>
            <input type="number" id="side" placeholder="Marcador de Posición">
        `;
    } else if (figure === 'triangulo') {
        figureImage.src = 'images/dercarga2.jpeg';
        inputContainer.innerHTML = `
            <label for="base">Base</label>
            <input type="number" id="base" placeholder="Marcador de Posición">
            <label for="height">Altura</label>
            <input type="number" id="height" placeholder="Marcador de Posición">
        `;
    } else {
        figureImage.src = ''; // Limpiar la imagen si no hay figura seleccionada
    }
}

function calculateArea() {
    const figure = document.getElementById('figureSelect').value;
    let area = 0;

    if (figure === 'circulo') {
        const radius = document.getElementById('radius').value;
        area = Math.PI * Math.pow(radius, 2);
    } else if (figure === 'cuadrado') {
        const side = document.getElementById('side').value;
        area = Math.pow(side, 2);
    } else if (figure === 'triangulo') {
        const base = document.getElementById('base').value;
        const height = document.getElementById('height').value;
        area = (base * height) / 2;
    }

    document.getElementById('resultText').innerText = `El área es: ${area.toFixed(2)}`;
}