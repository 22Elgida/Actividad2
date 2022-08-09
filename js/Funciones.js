$(document).on('ready', Iniciar);

function Iniciar(){
    alert("Gabriela");
    console.log('Desarrollo Web')
    $varBoton=$('#btnagregar');
    $varBoton.on('click', Presionar);
    
}

function Presionar(){
    alert("Presionaste el boton");
    $varTabla=$('#tabla');
    $varTabla.hide();
}

