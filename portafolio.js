var trabajos = [{
    figure: "media/Nerdia.jpg",
    alt: "Dos suricatas comiendo alrededor de un dispositivo que imita un tocón y está cubierto con corteza de árbol",
    title: "NERDIA",
    about: "Dispositivo de enriquecimiento ambiental para suricatas",
    url: "https://www.instagram.com/p/B1mk_NInu1L/"
}, {
    figure: "media/plisa.jpg",
    alt: "Superficie de planchado colgada detrás de la puerta del baño con una mujer planchando una camisa",
    title: "PLISA",
    about: "Superficie de planchado rápido que facilita nuevas formas de planchar",
    url:"https://www.instagram.com/p/B1mnccRnAjW/"

}, {
    figure: "media/KOR.jpg",
    alt: "Persona amputada de antebrazo colocándose el protector",
    title: "KOR",
    about: "Protector de muñón deportivo, para personas amputadas de tren superior",
    url:"https://www.instagram.com/p/B1mmWaDnD_4/"
}, {
    figure: "media/Cáñamo.jpg",
    alt: "Luminaria con forma cilíndrica encendida y colgada del cielo en fondo oscuro",
    title: "CÁÑAMO",
    about: "Luminaria de cáñamo afieltrado",
    url:"https://www.instagram.com/p/B1mn3jPnsGp/"
}, {
    figure: "media/rebroteliviano.jpg",
    alt: "Macetero desplegable en forma hexagonal abierto en sus tres etapas de uso",
    title: "REBROTE",
    about: "Sistema simplificado de cultivos hidropónicos para la emergencia",
    url:"https://www.instagram.com/p/B1mlbiynm7b/"
},{
    figure: "media/strech.jpg",
    alt: "Hombre en cancha con el dispositivo estirado entre sus brazos para recibir la pelota",
    title: "STRECH",
    about: "Indumentaria deportiva de voleibol para personas con parálisis cerebral",
    url:"https://www.instagram.com/p/B1mlz7hHsCF/"
} , {
    figure: "media/NoFear.jpg",
    alt: "Hombre sentado en el borde de la cancha, con polera deportiva y su mochila al lado",
    title: "NO FEAR",
    about: "Línea de indumentaria deportiva para la empresa MO Sport",
    url:"https://www.instagram.com/p/B1moTK9nSMM/"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = "<p><a href=" + trabajos[i].url + " >Ver más</a><p>";
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')

});
