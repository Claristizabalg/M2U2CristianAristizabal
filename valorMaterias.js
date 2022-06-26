function PrecioFinal(){
    const name = document.getElementById ("nombre").value;
    const cantidadM= document.getElementById ("cantidadMaterias").value;
    const precio= document.getElementById ("valorMaterias").value;
    const costosfijos =28000;
    

    const Descuento=(cantidadM * precio)*0.20;
    const PrecioFinal1= (cantidadM * precio)-Descuento;
    const precioFinal= PrecioFinal1 + costosfijos;
    const ResulP=document.getElementById("PrecioF")
    ResulP.innerText = name + " El precio final de su matrícula es: $" + precioFinal
}