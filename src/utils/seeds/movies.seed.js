const mongoose = require('mongoose');
const Movie = require('../../api/movies/movies.model');
const DB_URL = 'mongodb+srv://finalproject:finalproject@cluster0.msxli66.mongodb.net/finalproject?retryWrites=true&w=majority';

const movies = [
    {
        title: "The Conjuring (The Warren Files)",
        img: "https://pics.filmaffinity.com/the_conjuring_the_warren_files-153245956-large.jpg",
        description: "Basada en una historia real documentada por los reputados demonólogos Ed y Lorraine Warren. Narra los encuentros sobrenaturales que vivió la familia Perron en su casa de Rhode Island a principios de los 70. El matrimonio Warren, investigadores de renombre en el mundo de los fenómenos paranormales, acudieron a la llamada de esta familia aterrorizada por la presencia en su granja de un ser maligno.",
        year: "2013",
        director: "James Wan",
    },
    {
        title: "Annabelle",
        img: "https://pics.filmaffinity.com/annabelle-671994408-large.jpg",
        description: "John Form encuentra el regalo perfecto para su mujer embarazada, Mia: una preciosa e inusual muñeca vintage que lleva un vestido de novia blanco inmaculado. Sin embargo, la alegría de Mia al recibir a Annabelle no dura mucho. Durante una espantosa noche la pareja ve como miembros de una secta satánica invaden su hogar y los atacan brutalmente. No sólo dejan sangre derramada y terror tras su visita…los miembros de la secta conjuran a un ente de tal maldad que nada de lo que han hecho se compara al siniestro camino a la maldición que ahora es… Annabelle.",
        year: "2014",
        director: "John R. Leonetti",
    },
    {
        title: "The Conjuring 2: The Enfield Poltergeist",
        img: "https://pics.filmaffinity.com/the_conjuring_2_the_enfield_poltergeist-489921396-large.jpg",
        description: "Secuela de la exitosa Expediente Warren (2013) que presenta un caso real de los renombrados demonólogos Ed y Lorraine Warren. Para resolverlo viajan al norte de Londres para ayudar a una madre soltera que vive con sus cuatro hijos en una casa plagada de espíritus malignos.",
        year: "2016",
        director: "James Wan",
    },
    {
        title: "Annabelle: Creation",
        img: "https://pics.filmaffinity.com/annabelle_creation-692576203-large.jpg",
        description: "Varios años después del trágico fallecimiento de su hija, un juguetero que crea muñecas y su mujer, acogen en su casa a una monja enfermera y a un grupo de niñas, tratando de convertir su casa en un acogedor orfanato. Sin embargo, las nuevos inquilinos se convertirán en el objetivo de Annabelle, una muñeca poseída por un ser demoníaco. Secuela de Annabelle (2014).",
        year: "2017",
        director: "David F. Sandberg",
    },
    {
        title: "The Nurse",
        img: "https://pics.filmaffinity.com/the_nurse-930362477-large.jpg",
        description: "Una niña se inquieta tras escuchar sonidos desde su habitación en una clínica. Corto ganador del concurso My Annabelle Creation Contest.",
        year: "2017",
        director: "Julian Terry",
    },
    {
        title: "The Nun",
        img: "https://pics.filmaffinity.com/the_nun-167259563-large.jpg",
        description: "Cuando una joven monja se suicida en una abadía de clausura en Rumanía, un sacerdote experto en posesiones demoniacas y una novicia a punto de tomar sus votos, son enviados por el Vaticano para investigar. Juntos descubren el profano secreto de la orden. Arriesgando no solo sus propias vidas sino su fe y hasta sus almas, se enfrentan a una fuerza maléfica en forma de monja demoníaca, en una abadía que se convierte en un campo de batalla de horror entre los vivos y los condenados.... Spin-off de la película de terror de 2016 'The Conjuring 2'. Producida por Atomic Monster, productora del director especializado en el género de terror, James Wan.",
        year: "2018",
        director: "Corin Hardy",
    },
    {
        title: "The Curse of La Llorona",
        img: "https://pics.filmaffinity.com/the_curse_of_la_llorona-530749792-large.jpg",
        description: "La Llorona es una aparición tenebrosa, atrapada entre el cielo y el infierno, con un destino terrible sellado por su propia mano. La mera mención de esta terrorífica leyenda mexicana ha causado terror durante generaciones. En vida, ahogó a sus hijos llena de rabia, por celos, arrojándose en el río tras ver lo que había hecho. Ahora sus lágrimas son eternas y letales, y aquellos que escuchan su llamada de muerte en la noche están condenados. Se arrastra en las sombras y ataca a los niños, desesperada por reemplazar a los suyos. A medida que los siglos han pasado, su deseo se ha vuelto más voraz y sus métodos más terroríficos.",
        year: "2019",
        director: "Michael Chaves",
    },
    {
        title: "Annabelle: Comes Home",
        img: "https://pics.filmaffinity.com/annabelle_comes_home-105571611-large.jpg",
        description: "Los demonólogos Ed y Lorraine Warren están decididos a evitar que Annabelle cause más estragos, así que llevan a la muñeca poseída a la sala de objetos bajo llave que tienen en su casa. La colocan a salvo en una vitrina sagrada bendecida por un sacerdote. Pero una terrorífica noche nada santa, Annabelle despierta a los espíritus malignos de la habitación, que se fijan en nuevos objetivos: la hija de diez años de los Warren, Judy, su niñera y una amiga de esta.",
        year: "2019",
        director: "Gary Dauberman",
    },
    {
        title: "The Conjuring: The Devil Made Me Do It",
        img: "https://pics.filmaffinity.com/the_conjuring_the_devil_made_me_do_it-118623652-large.jpg",
        description: "Ambientada en los años 80. Ed y Lorraine Warren deberán afrontar un nuevo caso que se presenta con un hombre, Arne Cheyne Johnson, que es acusado de asesinato tras haber sido poseído por un demonio.",
        year: "2021",
        director: "Michael Chaves",
    },
];

mongoose.connect(DB_URL)
.then(async () => {
    const allMovies = await Movie.find().lean();

    if(!allMovies.length) {
        console.log('[seed]: No se encuentran películas');
    }   else {
        console.log((`[seed]: encontradas ${allMovies.length} películas`));
        await Movie.collection.drop();
        console.log('[seed]: Película eliminada correctamente');
    }
})
.catch((error) => console.log('[seed]: Error eliminando la película: ', error))
.then(async() => {
    await Movie.insertMany(movies);
    console.log('[seed]: Nuevas películas añadidas con exito');
})
.catch((error) => console.log('[seed]: Error añadiendo películas', error))
.finally(() => mongoose.disconnect());