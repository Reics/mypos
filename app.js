(function(){
	// body...

var app = angular.module('store',[]);

app.controller('StoreController', function(){
	this.products = gems;
});

var gems = [
{
	name: "El código Da Vinci",
	image: "http://www.fantasymundo.com/galeria/imagenes/Literatura01/16016.jpg",
	autor: "Dan Brown",
	description: "Robert Langdon, experto en simbología, recibe una llamada en mitad de la noche: el conservador del museo del Louvre ha sido asesinado en extrañas circunstancias, y junto a su cadáver ha aparecido un desconcertante mensaje cifrado. Al profundizar en la investigación, Langdom descubre que las pistas conducen a las obras de Leonardo Da Vinci… y que están a la vista de todos, ocultas por el ingenio del pintor. Langdon une esfuerzos con la criptóloga francesa Sophie Neveu y descubre que el conservador del museo pertenecía al Priorato de Sión, una sociedad que a lo largo de los siglos ha contado con miembros tan destacados como Sir Isaac Newton, Botticelli, Victor Hugo o el propio Da Vinci, y que ha velado por mantener en secreto una sorprendente verdad histórica. Una mezcla trepidante de aventuras, intrigas vaticanas, simbología y enigmas cifrados que provocó una extraordinaria polémica al poner en duda algunos de los dogmas sobre los que se asienta la iglesia católica",
	read: true
},
{
	name: "Angeles y Demonios",
	image: "http://www.elresumen.com/libros/angeles_y_demonios.jpg",
	autor: "Dan Brown",
	description: "El profesor de simbología Robert Langdon, recibe una misteriosa llamada a las tantas de la madrugada y se ve envuelto en una persecución en la que tratará de evitar la destrucción de la Ciudad del Vaticano. Acompañado de la científica Vittoria Vetra, ambos deberán encontrar la guarida de los Illuminati para detener a un hombre cuyo propósito es hacer explotar la antimateria y destruir el altar principal de la Iglesia junto a todas las personas que estén a su alrededor.",
	read: true
}
];

})();