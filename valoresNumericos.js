function ValoresNumericos() {
    const A = document.getElementById("valorA").value;
    const B = document.getElementById("valorB").value;
    const C = document.getElementById("valorC").value;
    const D = document.getElementById("valorD").value;
    const Mensaje = document.getElementById("Error");

    if (A===B || A===C || A===D || B===C || B===D || C===D) {
        Mensaje.innerText = "Los numeros no pueden ser repetidos.";
    }
    else{
        var max= Math.max(A, B, C, D);
        var min= Math.min(A, B, C, D);
        NumeroMax.innerText = "El numero mayor es: " + max;
        NumeroMin.innerText = "El numero menor es: " + min;
    }
    
}