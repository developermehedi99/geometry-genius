function triangleAria(){
    const baseInput = document.getElementById('bInput');
    baseText = baseInput.value;
    b = parseFloat(baseText);

    const heghtInput = document.getElementById('hInput');
    heightText = heghtInput.value;
    h = parseFloat(heightText);

    const area = 0.5 * b *h;
    console.log(area)

    const areaMot = document.getElementById('areaTotal');
    areaMot.innerText=area;
}