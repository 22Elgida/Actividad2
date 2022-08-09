$(document).on('ready', Iniciar);

function Iniciar(){
    alert("Gabriela");
    console.log("Desarrollo Web");
    $varBoton=$('#btnagregar');
    $varBoton.on('click', Presionar);
    $varBotonL=$('#btnlistar');
    $varBotonL.on('click', Listar);
    $varBotonG=$('#btnguardar');
   $varBotonG.on('click', Guardar);
   $varBotonG.hide();
    
}

function Presionar(){
    alert("Presionaste el boton Agregar");
    $varTabla=$('#tabla');
    $varTabla.hide();
    $varBotonL.hide();
    $varBotonG.show();
    $varFormulario=$('#Formulario');
    $varFormulario.append('<input type="text" name="D" placeholder="NOMBRE">')
    $varFormulario.append('<input type="text" name="D" placeholder="APELLIDO">')
    $varFormulario.append('<input type="text" name="D" placeholder="CARNET">')
    $varFormulario.append('<input type="text" name="D" placeholder="CURSOS">')
    console.log("Formulario");
    $varFormulario=$('#Formulario'); 
}

function Listar(){
    alert("Presionaste el boton Listar");
    $varListar=$('#Listar');
}

function Guardar(){
    alert("Presionaste el boton Guardar");
    $varBotonG=$('#Guardar');
    $varFormulario.hide();
    $varTabla.show();
}