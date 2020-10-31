function sumar(){
    var valor1,valor2;  
    
    valor1=document.getElementById("valor1").value;
    valor2=document.getElementById("valor2").value;
    resultado=parseInt(valor1)+parseInt(valor2);
    
    
    console.log(`la suma de ${valor1} y el valor ${valor2} es ${resultado}`);
    
};