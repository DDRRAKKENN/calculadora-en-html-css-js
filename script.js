const sumar =()=> {
    valor1=document.getElementById('valor1').value;
    valor2=document.getElementById('valor2').value;
    res=parseInt(valor1)+parseInt(valor2);
    document.getElementById('resultado').innerHTML=(`${res}`);
}
const restar =()=> {
    valor1=document.getElementById('valor1').value;
    valor2=document.getElementById('valor2').value;
    res=parseInt(valor1)-parseInt(valor2);
    document.getElementById('resultado').innerHTML=(`${res}`);
}
const multiplicar =()=> {
    valor1=document.getElementById('valor1').value;
    valor2=document.getElementById('valor2').value;
    res=parseInt(valor1)*parseInt(valor2);
    document.getElementById('resultado').innerHTML=(`${res}`);
}
const dividir =()=> {
    valor1=document.getElementById('valor1').value;
    valor2=document.getElementById('valor2').value;
    res=parseInt(valor1)/parseInt(valor2);
    document.getElementById('resultado').innerHTML=(`${res}`);
}