var trabajos = [{
    figure: "media/trabajo-01-desfile.jpg",
    alt: "Hola que pasa",
    title: "Nerdia",
    about: "Dispositivo de enriquecimiento ambiental para suricatas"
}, {
    figure: "media/trabajo-02-app.jpg",
    alt: "Descripción de la imagen",
    title: "Cleanflip",
    about: "Filtro para desagüe de la tina"
}, {
    figure: "media/trabajo-03-homy.jpg",
    alt: "Descripción de la imagen",
    title: "OSLO",
    about: "Mesa extendible"
}, {
    figure: "media/trabajo-04-editorial.jpg",
    alt: "Descripción de la imagen",
    title: "Rebrote",
    about: "Sistema simplifacado de cultivos hidropónicos"
}, {
    figure: "media/trabajo-05-artesania.jpg",
    alt: "Descripción de la imagen",
    title: "STRECH",
    about: "Indumentaria deportiva de voleibol para personas con parálisis cerebral"
}, {
    figure: "media/trabajo-06-textil.jpg",
    alt: "Descripción de la imagen",
    title: "KOR",
    about: "Protector de muñón"
}, {
    figure: "media/trabajo-07-materiales.jpg",
    alt: "Descripción de la imagen",
    title: "NO FEAR",
    about: "Línea de indumentaria deportiva para MO Sport"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
