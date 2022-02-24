function areaCuadrado(){
    const listaTriangulo=document.getElementById("triangulo");
    listaTriangulo.classList.remove("seleccionado");
    listaTriangulo.childNodes[0].classList.remove("seleccionado");

    const listaCirculo=document.getElementById("circulo");
    listaCirculo.classList.remove("seleccionado");
    listaCirculo.childNodes[0].classList.remove("seleccionado");

    const listaCuadrado=document.getElementById("cuadrado");
    listaCuadrado.classList.add("seleccionado");
    listaCuadrado.childNodes[0].classList.add("seleccionado");

    const contenedorCuadrado=document.getElementById("operaciones-cuadrado");
    contenedorCuadrado.classList.remove("ocultar");
    contenedorCuadrado.classList.add("mostrar");

    const contenedorTriangulo=document.getElementById("operaciones-triangulo");
    contenedorTriangulo.classList.remove("mostrar");
    contenedorTriangulo.classList.add("ocultar");

    const contenedorCirculo=document.getElementById("operaciones-circulo");
    contenedorCirculo.classList.remove("mostrar");
    contenedorCirculo.classList.add("ocultar");
}

function areaTriangulo(){
    const listaCuadrado=document.getElementById("cuadrado");
    listaCuadrado.classList.remove("seleccionado");
    listaCuadrado.childNodes[0].classList.remove("seleccionado");

    const listaCirculo=document.getElementById("circulo");
    listaCirculo.classList.remove("seleccionado");
    listaCirculo.childNodes[0].classList.remove("seleccionado");

    const listaTriangulo=document.getElementById("triangulo");
    listaTriangulo.classList.add("seleccionado");
    listaTriangulo.childNodes[0].classList.add("seleccionado");

    const contenedorCuadrado=document.getElementById("operaciones-cuadrado");
    contenedorCuadrado.classList.remove("mostrar");
    contenedorCuadrado.classList.add("ocultar");

    const contenedorCirculo=document.getElementById("operaciones-circulo");
    contenedorCirculo.classList.remove("mostrar");
    contenedorCirculo.classList.add("ocultar");

    const contenedorTriangulo=document.getElementById("operaciones-triangulo");
    contenedorTriangulo.classList.remove("ocultar");
    contenedorTriangulo.classList.add("mostrar");

}

function areaCirculo(){
    const listaTriangulo=document.getElementById("triangulo");
    listaTriangulo.classList.remove("seleccionado");
    listaTriangulo.childNodes[0].classList.remove("seleccionado");

    const listaCuadrado=document.getElementById("cuadrado");
    listaCuadrado.classList.remove("seleccionado");
    listaCuadrado.childNodes[0].classList.remove("seleccionado");

    const listaCirculo=document.getElementById("circulo");
    listaCirculo.classList.add("seleccionado");
    listaCirculo.childNodes[0].classList.add("seleccionado");


    const contenedorCirculo=document.getElementById("operaciones-circulo");
    contenedorCirculo.classList.remove("ocultar");
    contenedorCirculo.classList.add("mostrar");

    const contenedorCuadrado=document.getElementById("operaciones-cuadrado");
    contenedorCuadrado.classList.remove("mostrar");
    contenedorCuadrado.classList.add("ocultar");

    const contenedorTriangulo=document.getElementById("operaciones-triangulo");
    contenedorTriangulo.classList.remove("mostrar");
    contenedorTriangulo.classList.add("ocultar");
}




function calcularPerimetroCuadrado(){
    const input=document.getElementById("ladoCuadrado");
    const value=input.value*4;
    const resultado=document.getElementById("resultadoPerimetroCuadrado");
    resultado.textContent=`${value} u.`;
}

function calcularAreaCuadrado(){
    const input=document.getElementById("ladoCuadrado");
    const value=Math.pow(input.value,2);
    const resultado=document.getElementById("resultadoAreaCuadrado");
    resultado.textContent=`${value} u^2`;
}

function calcularPerimetroTriangulo(){
    const input1=Number(document.getElementById("lado1").value);
    const input2=Number(document.getElementById("lado2").value);
    const input3=Number(document.getElementById("lado3").value);
    const resultado=document.getElementById("resultadoPerimetroTriangulo");
    if (input1==0 || input2==0 || input3==0 ) {
        resultado.textContent=""; 
        alert("INTRODUZCA TODOS LOS CAMPOS");
    }else{
        resultado.textContent=`${input1+input2+input3} u.`; 
    }
}

function calcularAreaTriangulo(){
    const input1=Number(document.getElementById("lado1").value);
    const input2=Number(document.getElementById("lado2").value);
    const input3=Number(document.getElementById("lado3").value);
    const resultado=document.getElementById("resultadoAreaTriangulo");
    if (input1==0 || input2==0 || input3==0 ) {
        resultado.textContent=""; 
        alert("INTRODUZCA TODOS LOS CAMPOS");
    }else{
        const s=(input1+input2+input3)/2;
        const area=Math.sqrt(s*(s-input1)*(s-input2)*(s-input3));
        resultado.textContent=`${area.toFixed(3)} u.^2`; 
    }
}

function calcularPerimetroCirculo(){
    const input1=Number(document.getElementById("radio").value);
    const resultado=document.getElementById("resultadoPerimetroCirculo");
    if (input1==0) {
        resultado.textContent=""; 
        alert("INTRODUZCA TODOS LOS CAMPOS");
    }else{
        resultado.textContent=`${(2*Math.PI*input1).toFixed(2)} u.`; 
    }
}

function calcularAreaCirculo(){
    const input1=Number(document.getElementById("radio").value);
    const resultado=document.getElementById("resultadoAreaCirculo");
    if (input1==0) {
        resultado.textContent=""; 
        alert("INTRODUZCA TODOS LOS CAMPOS");
    }else{
        const area=Math.PI*Math.pow(input1,2);
        resultado.textContent=`${area.toFixed(3)} u.^2`; 
    }
}

