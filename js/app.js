//creación del objeto calculadora que contiene todas las variables y métodos
var calculadora = new Object();
//variables en uso
calculadora.resultado = 0;
calculadora.operando = "";
calculadora.operacion = "";
calculadora.punto = 0;
calculadora.numero = "";
//calculadora.patronOperacion=new RegExp("^\\d+([\\+\\-\\*\\/]\\d+)*$");
calculadora.pantalla=document.getElementById('display');
//animación de pulsar
calculadora.pulsar = function(e) {
  evento=e.target;
  if(evento.tagName=="IMG"){
    with (document.getElementById(evento.id).style) {
     border = "3px solid #A1A1A1";
    }
  //función que valida la longitud
  calculadora.longitud(evento);
  }
};
//animación soltar
 calculadora.soltar=function(e) {
  evento=e.target;
  if(evento.tagName=="IMG"){
    with (document.getElementById(evento.id).style) {
     border = "none";
    }
  }
};
//funcionalidad del botón
calculadora.display=function(evento){
  switch(evento.id){
    case "1":case "2":case "3":case "4":case "5":case "6":case "7":case "8":case "9":case "0":
        if(calculadora.pantalla.innerHTML=="0"){
          calculadora.pantalla.innerHTML=""
          this.operacion+=evento.id;
          this.numero=evento.id;
          calculadora.pantalla.innerHTML+=evento.id;
          console.log(this.operacion)
        }else{
          this.operacion+=evento.id;
          calculadora.pantalla.innerHTML+=evento.id;
          console.log(this.operacion)
          this.numero=evento.id;
        }
    break;
    case "on":
      calculadora.pantalla.innerHTML="0";
      this.resultado=0;
      this.operacion="";
      this.operando="+";
      this.numero="";
      this.punto=0;
      console.log(this.operacion);
      this.igual=0;
    break;
    case "mas":
      this.operando="+";
      this.operaciones();
    break;
    case "menos":
      this.operando="-";
      this.operaciones();
    break;
    case "por":
      this.operando="*";
      this.operaciones();
    break;
    case "dividido":
      this.operando="/";
      this.operaciones();
    break;
    case "igual":
      //if(this.patronOperacion.test(this.operacion)){
      if(this.igual==1){
        this.operacion+=(this.operando+this.numero);
        this.operacion=eval(this.operacion)
        console.log(this.operacion)
        if(String(this.operacion).length>9){
          calculadora.pantalla.innerHTML=this.operacion.toPrecision(7)
        }else{
          calculadora.pantalla.innerHTML=this.operacion
        }
      }else{
        this.operacion=eval(this.operacion)
        console.log(this.operacion)
        if(String(this.operacion).length>9){
          calculadora.pantalla.innerHTML=this.operacion.toPrecision(7)
        }else{
          calculadora.pantalla.innerHTML=this.operacion
        }
      }
      this.igual=1;
    //}else{alert("la operacion escrita no es válida")}
    break;
    case "sign":
      this.operacion=eval(this.operacion*(-1))
      if(String(this.operacion).length<8){
        calculadora.pantalla.innerHTML=this.operacion
      } else {
        calculadora.pantalla.innerHTML=this.operacion.toPrecision(6)
      }
    break;
    case "punto":
    for (i=0;i<calculadora.pantalla.innerHTML.length;i++) {
      ch=calculadora.pantalla.innerHTML.charAt(i);
      if(ch=="."){this.punto+=1}
    }
    if(this.punto<1){
      this.operacion+=".";
      calculadora.pantalla.innerHTML+=".";
      console.log(this.operacion)
    }
    break;
  }
};
//función para validar la longitud
calculadora.longitud=function(evento){
  if(this.pantalla.innerHTML.length<8){
    this.display(evento);
  }else{
    if(evento.id=="on"){
      this.pantalla.innerHTML="0";
      this.resultado=0;
      this.operacion="";
      this.operando="+";
      this.numero="";
      console.log(this.operacion);
      this.igual=0;
    }
  }
};
//concatenación con el operando
calculadora.operaciones=function(){
  this.operacion+=this.operando;
  console.log(this.operacion)
  this.pantalla.innerHTML="";
  this.punto=0;
  this.igual=0;
}
//eventos ejecutando las dos funciones
document.onmousedown=calculadora.pulsar;
document.onmouseup=calculadora.soltar;
