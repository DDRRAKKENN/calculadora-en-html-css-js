

function sumar(){
    var valor1,valor2;  
    
    valor1=document.getElementById("valor1").value;
    valor2=document.getElementById("valor2").value;
    res=parseInt(valor1)+parseInt(valor2);
    
    document.getElementById("resultado").innerHTML=(`Resultado: ${res}`);
};

function restar(){
    var valor1,valor2;  
    
    valor1=document.getElementById("valor1").value;
    valor2=document.getElementById("valor2").value;
    res=parseInt(valor1)-parseInt(valor2);
    
    document.getElementById("resultado").innerHTML=(`Resultado: ${res}`);
};

function multiplicar(){
    var valor1,valor2;  
    
    valor1=document.getElementById("valor1").value;
    valor2=document.getElementById("valor2").value;
    res=parseInt(valor1)*parseInt(valor2);
    
    document.getElementById("resultado").innerHTML=(`Resultado: ${res}`);
};

function dividir(){
    var valor1,valor2;  
    
    valor1=document.getElementById("valor1").value;
    valor2=document.getElementById("valor2").value;
    res=parseInt(valor1)/parseInt(valor2);
    
    document.getElementById("resultado").innerHTML=(`Resultado: ${res}`);
};