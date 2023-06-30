
function capturar(){
    function Persona(nombre,edad,sexo,candidato){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
        this.candidato=candidato;
    }
    var nombreCapturar = document.getElementById('nombre').value;

    var edadCapturar = document.getElementById('edad').value;

    var sexoCapturar = document.getElementById('sexo').value;

    var candidatoCapturar = document.getElementById('candidato').value;

    nuevoSujeto = new Persona(nombreCapturar,edadCapturar,sexoCapturar,candidatoCapturar);
    console.log(nuevoSujeto)
    agregar()
    }

    var baseDatos= [];
    function agregar(){
        baseDatos.push(nuevoSujeto);
        console.log(baseDatos)
        document.getElementById('tabla').innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.edad+'</td><td>'+nuevoSujeto.sexo+'</td><td>'+nuevoSujeto.candidato+'</td></tbody>'
    };


