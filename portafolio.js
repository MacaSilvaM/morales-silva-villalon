var trabajos = [{
    figure: "media/trabajo-01-desfile.jpg",
    alt: "Dos suricatas comiendo alrededor de un dispositivo que imita un tocón y está cubierto con corteza de árbol",
    title: "NERDIA",
    about: "Dispositivo de enriquecimiento ambiental para suricatas"
}, {
    figure: "media/trabajo-02-app.jpg",
    alt: "Superficie de planchado colgada detrás de la puerta del baño con una mujer planchando una camisa",
    title: "PLISA",
    about: "Superficie de planchado rápido"
}, {
    figure: "media/trabajo-03-homy.jpg",
    alt: "Persona amputada de antebrazo colocándose el protector",
    title: "KOR",
    about: "Protector de muñón para deporte"
}, {
    figure: "media/trabajo-04-editorial.jpg",
    alt: "Macetero desplegable en forma hexagonal abierto en sus tres etapas de uso",
    title: "REBROTE",
    about: "Sistema simplifacado de cultivos hidropónicos"
}, {
    figure: "media/trabajo-05-artesania.jpg",
    alt: "Hombre en cancha con el dispositivo estirado entre sus brazos para recibir la pelota",
    title: "STRECH",
    about: "Indumentaria deportiva de voleibol para personas con parálisis cerebral"
}, {
    figure: "media/trabajo-06-textil.jpg",
    alt: "Luminaria con forma cilíndrica encendida y colgada del cielo en fondo oscuro",
    title: "CÁÑAMO",
    about: "Luminaria de cáñamo afieltrado"
}, {
    figure: "media/trabajo-07-materiales.jpg",
    alt: "Hombre sentado en el borde de la cancha, con polera deportiva y su mochila al lado",
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
