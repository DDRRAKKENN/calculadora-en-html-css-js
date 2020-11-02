function sumar(){
    var valor1,valor2;  
    
    valor1=document.getElementById("valor1").value;
    valor2=document.getElementById("valor2").value;
    res=parseInt(valor1)+parseInt(valor2);
    
    document.getElementById("resultado").innerHTML=(`El resultado de la suma de ${valor1} y el valor ${valor2} es ${res}`);
};
function restar(){
    var valor1,valor2;  
    
    valor1=document.getElementById("valor1").value;
    valor2=document.getElementById("valor2").value;
    res=parseInt(valor1)-parseInt(valor2);
    
    document.getElementById("resultado").innerHTML=(`El resultado de la resta de ${valor1} y el valor ${valor2} es ${res}`);
};
function multiplicar(){
    var valor1,valor2;  
    
    valor1=document.getElementById("valor1").value;
    valor2=document.getElementById("valor2").value;
    res=parseInt(valor1)*parseInt(valor2);
    
    document.getElementById("resultado").innerHTML=(`El resultado de la multiplicacion de ${valor1} y el valor ${valor2} es ${res}`);
};
function dividir(){
    var valor1,valor2;  
    
    valor1=document.getElementById("valor1").value;
    valor2=document.getElementById("valor2").value;
    res=parseInt(valor1)/parseInt(valor2);
    
    document.getElementById("resultado").innerHTML=(`El resultado de dividir  ${valor1} y el valor ${valor2} es ${res}`);
};