var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
//contenido
typewriter.typeString('Desarrolladora Frontend Jr')
    .pauseFor(520)
    .deleteAll()
    .typeString('Lo imaginas...')
    .pauseFor(500)
    //Num de caracteres que se borrarán
    .deleteChars(11)
    .typeString('<strong>Creamos!</strong>')
    .pauseFor(2500)
    .start();