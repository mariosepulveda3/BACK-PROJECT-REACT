const mongoose = require("mongoose");
const Movie = require("../../api/movies/movies.model");
const DB_URL =
  "mongodb+srv://finalproject:finalproject@cluster0.msxli66.mongodb.net/finalproject?retryWrites=true&w=majority";

const movies = [
  {
    title: "Schindler's List",
    img: "https://pics.filmaffinity.com/schindler_s_list-473662617-large.jpg",
    description:
      "Oskar Schindler is a German businessman in Poland who sees an opportunity to make money from the Nazis' rise to power. He starts a company to make cookware and utensils, using flattery and bribes to win military contracts, and brings in accountant and financier Itzhak Stern (Ben Kingsley) to help run the factory. By staffing his plant with Jews who've been herded into Krakow's ghetto by Nazi troops, Schindler has a dependable unpaid labor force. For Stern, a job in a war-related plant could mean survival for himself and the other Jews working for Schindler. However, in 1942, all of Krakow's Jews are assigned to the Plaszow Forced Labor Camp, overseen by Commandant Amon Goeth (Ralph Fiennes), an embittered alcoholic who occasionally shoots prisoners from his balcony. ",
    year: 1993,
    director: "Steven Spielberg",
  },
  {
    title: "The Shawshank Redemption",
    img: "https://pics.filmaffinity.com/the_shawshank_redemption-576140557-large.jpg",
    description: "Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover in the late 1940s. However, only Andy knows that he didn’t commit the crimes. Sent to Shawshank Prison to do hard time, Andy—a taciturn banker in the outside world, has to learn to get by in the brutal, cutthroat confines of prison life. His quiet strength slowly earns the respect of his fellow inmates -most notably, Red (Morgan Freeman)- and even much of the prison staff. But Andy’s seemingly stoic acceptance of his unjust imprisonment hides a fierce determination for freedom.",
    year: 1994,
    director: "Frank Darabont",
  },
  {
    title: "Pulp Fiction",
    img: "https://pics.filmaffinity.com/pulp_fiction-210382116-large.jpg",
    description: "The film interweaves three tales: the first story focuses on Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson), two hit men on duty for 'the big boss,'' Marsellus Wallace (Ving Rhames), whose gorgeous wife, Mia (Uma Thurman), takes a liking to Vincent. In the second, a down-and-out pugilist (Bruce Willis), who is ordered to take a fall, decides that there’s more money in doing the opposite. The final chapter follows a pair of lovers (Amanda Plummer and Tim Roth) as they prepare to hold up a diner.",
    year: 1994,
    director: "Quentin Tarantino",
  },
  {
    title: "American History X",
    img: "https://pics.filmaffinity.com/american_history_x-201185607-large.jpg",
    description: "Derek Vinyard (Edward Norton) is a Southern Californian skinhead who must do time after committing a hateful murder. Once in jail, his mind opens and he sees the error of his ways. Upon reentering the real world, he must now turn his attentions to his younger brother Danny (Edward Furlong), who is swiftly heading down the same path as his brother.",
    year: 1998,
    director: "Tony Kaye",
  },
  {
    title: "Seven",
    img: "https://pics.filmaffinity.com/seven_se7en-734875211-large.jpg",
    description: "Set in a perpetually gloomy unnamed city, the film follows Somerset (Morgan Freeman), a retiring police detective, as he experiences his final week on the job, reluctantly working with assertive newcomer Mills (Brad Pitt). When an obese man is found brutally murdered in his home, the seasoned Somerset realizes this is no ordinary killing--someone tortured him because of his appetite. Slayings that reflect the sins of greed and sloth soon follow, leading Somerset and Mills on a desperate search to find the mysterious John Doe, who is responsible for these methodical murders. As the case builds to a startling conclusion, both Somerset and Mills become more involved than they ever could have imagined.",
    year: 1995,
    director: "David Fincher",
  },
  {
    title: "The Pianist",
    img: "https://pics.filmaffinity.com/the_pianist_le_pianiste-978132965-large.jpg",
    description: "The film is adapted from the autobiography of Wladyslaw Szpilman, a Polish Jew who detailed his survival during World War II. A composer and a pianist, he played the last live music heard over Polish radio airwaves before Nazi artillery hit. During the brutal occupation, he eluded deportation and remained in the devastated Warsaw ghetto. There, he struggled to stay alive even when cast away from those he loved. He would eventually reclaim his artistic gifts and confront his fears, with aid from the unlikeliest of sources.",
    year: 2002,
    director: "Roman Polanski",
  },
  {
    title: "The Silence of the Lambs",
    img: "https://pics.filmaffinity.com/the_silence_of_the_lambs-767447992-large.jpg",
    description: "Clarice Starling (Jodie Foster), a young and ambitious FBI agent, enlists the aid of criminally insane ex-psychiatrist Dr. Hannibal Lecter (Anthony Hopkins) to help track down a vicious serial killer named 'Buffalo Bill' who skins his victims and who has kidnapped a girl, the only daughter of a republican senator.",
    year: 1991,
    director: "Jonathan Demme",
  },
  {
    title: "Forrest Gump",
    img: "https://pics.filmaffinity.com/forrest_gump-212765827-large.jpg",
    description: "Despite Forrest's (Tom Hanks) low IQ, he is not your average guy. Learning early on from his mother (Sally Field) that 'life is like a box of chocolates, you never know what you're gonna get', Gump, without trying, stumbles upon some exciting events. Meanwhile, as the remarkable parade of his life goes by, Forrest never forgets Jenny (Robin Wright), the girl he loved as a boy, who makes her own journey through the turbulence of the 1960s and 1970s that is far more troubled than the path Forrest happens upon.",
    year: 1994,
    director: "Robert Zemeckis",
  },
  {
    title: "The Shining",
    img: "https://pics.filmaffinity.com/the_shining-453129380-large.jpg",
    description: "Writer Jack Torrance takes a job as a winter caretaker of the Overlook Hotel in the remote Colorado mountains. He moves in, along with his wife Wendy and son Danny, in the hope that the isolation will cure his writer’s block. But as the weather isolates them, Jack descends into madness. And then apparitions from the hotel’s past appear, imploring Jack to kill his family.",
    year: 1980,
    director: "Stanley Kubrick",
  },
  {
    title: "Gran Torino",
    img: "https://pics.filmaffinity.com/gran_torino-278262332-large.jpg",
    description: "Recently widowed, retired auto worker Walt Kowalski fills his days with home repair, beer and monthly trips to the barber. The people he once called his neighbors have all moved or passed away, replaced by Hmong immigrants, from Southeast Asia, he despises. Resentful of virtually everything he sees--Walt is just waiting out the rest of his life. Until the night someone tries to steal his `72 Gran Torino. The Gran Torino brings his shy teenaged neighbor Thao into his life when Hmong gangbangers pressure the boy into trying to steal it. But Walt stands in the way of both the heist and the gang, making him the reluctant hero of the neighborhood--especially to Thao's mother and older sister, Sue, who insist that Thao work for Walt as a way to make amends. Though he initially wants nothing to do with these people, Walt eventually gives in and puts the boy to work fixing up the neighborhood, setting into motion an unlikely friendship that will change both their lives.",
    year: 2008,
    director: "Clint Eastwood",
  },
  {
    title: "Life Is Beautiful",
    img: "https://pics.filmaffinity.com/la_vita_e_bella-646167341-large.jpg",
    description: "Guido - a charming but bumbling waiter who's gifted with a colourful imagination and an irresistible sense of humour - has won the heart of the woman he loves and has created a beautiful life for his young family. But then, that life is threatened by World War II and Guido must rely on those very same strengths to save his beloved wife and son from an unthinkable fate.",
    year: 1997,
    director: "Roberto Benigni",
  },
  {
    title: "Million Dollar Baby",
    img: "https://pics.filmaffinity.com/million_dollar_baby-342154413-large.jpg",
    description: "Frankie Dunn (Clint Eastwood) has trained and managed some incredible fighters during a lifetime spent in the ring. The most important lesson he teaches his boxers is the one that rules his life: above all, always protect yourself. In the wake of a painful estrangement from his daughter, Frankie has been unwilling to let himself get close to anyone for a very long time. His only friend is Scrap (Morgan Freeman), an ex-boxer who looks after Frankie's gym and knows that beneath his gruff exterior is a man who has attended Mass almost every day for the past 23 years, seeking the forgiveness that somehow continues to elude him. Then, one day, a girl named Maggie Fitzgerald (Hilary Swank) approaches Frankie Dunn and asks him to train her.",
    year: 2004,
    director: "Clint Eastwood",
  },
  {
    title: "Braveheart",
    img: "https://pics.filmaffinity.com/braveheart-898928745-large.jpg",
    description: "Based on the life of legendary 13th century Scottish hero William Wallace. Returning to his homeland following the death of an heirless king, Wallace (Mel Gibson) finds the political landscape precarious. Edward the Longshanks, King of England (Patrick McGoohan), has captured Scotland's throne and threatens the freedom of all Scottish people, as tyrannical policies instituted by the English plague the Scots. Initially, Wallace is content to stand by the wayside, yearning for the simple life of building a home and raising a family. However, when the woman he loves (Sophie Marceau) suffers a cruel fate at the hands of English soldiers, Wallace takes a stand against the new rule. With his fierce patriotism and determination, he gathers an amateur but passionately rebellious army. Although this makeshift force may be outnumbered by the English troops, their desperation and love for their land surpass any military maneuvers.",
    year: 1995,
    director: "Mel Gibson",
  },
  // {
  //     title: "The Conjuring (The Warren Files)",
  //     img: "https://pics.filmaffinity.com/the_conjuring_the_warren_files-153245956-large.jpg",
  //     description: "Basada en una historia real documentada por los reputados demonólogos Ed y Lorraine Warren. Narra los encuentros sobrenaturales que vivió la familia Perron en su casa de Rhode Island a principios de los 70. El matrimonio Warren, investigadores de renombre en el mundo de los fenómenos paranormales, acudieron a la llamada de esta familia aterrorizada por la presencia en su granja de un ser maligno.",
  //     year: "2013",
  //     director: "James Wan",
  // },
  // {
  //     title: "Annabelle",
  //     img: "https://pics.filmaffinity.com/annabelle-671994408-large.jpg",
  //     description: "John Form encuentra el regalo perfecto para su mujer embarazada, Mia: una preciosa e inusual muñeca vintage que lleva un vestido de novia blanco inmaculado. Sin embargo, la alegría de Mia al recibir a Annabelle no dura mucho. Durante una espantosa noche la pareja ve como miembros de una secta satánica invaden su hogar y los atacan brutalmente. No sólo dejan sangre derramada y terror tras su visita…los miembros de la secta conjuran a un ente de tal maldad que nada de lo que han hecho se compara al siniestro camino a la maldición que ahora es… Annabelle.",
  //     year: "2014",
  //     director: "John R. Leonetti",
  // },
  // {
  //     title: "The Conjuring 2: The Enfield Poltergeist",
  //     img: "https://pics.filmaffinity.com/the_conjuring_2_the_enfield_poltergeist-489921396-large.jpg",
  //     description: "Secuela de la exitosa Expediente Warren (2013) que presenta un caso real de los renombrados demonólogos Ed y Lorraine Warren. Para resolverlo viajan al norte de Londres para ayudar a una madre soltera que vive con sus cuatro hijos en una casa plagada de espíritus malignos.",
  //     year: "2016",
  //     director: "James Wan",
  // },
  // {
  //     title: "Annabelle: Creation",
  //     img: "https://pics.filmaffinity.com/annabelle_creation-692576203-large.jpg",
  //     description: "Varios años después del trágico fallecimiento de su hija, un juguetero que crea muñecas y su mujer, acogen en su casa a una monja enfermera y a un grupo de niñas, tratando de convertir su casa en un acogedor orfanato. Sin embargo, las nuevos inquilinos se convertirán en el objetivo de Annabelle, una muñeca poseída por un ser demoníaco. Secuela de Annabelle (2014).",
  //     year: "2017",
  //     director: "David F. Sandberg",
  // },
  // {
  //     title: "The Nurse",
  //     img: "https://pics.filmaffinity.com/the_nurse-930362477-large.jpg",
  //     description: "Una niña se inquieta tras escuchar sonidos desde su habitación en una clínica. Corto ganador del concurso My Annabelle Creation Contest.",
  //     year: "2017",
  //     director: "Julian Terry",
  // },
  // {
  //     title: "The Nun",
  //     img: "https://pics.filmaffinity.com/the_nun-167259563-large.jpg",
  //     description: "Cuando una joven monja se suicida en una abadía de clausura en Rumanía, un sacerdote experto en posesiones demoniacas y una novicia a punto de tomar sus votos, son enviados por el Vaticano para investigar. Juntos descubren el profano secreto de la orden. Arriesgando no solo sus propias vidas sino su fe y hasta sus almas, se enfrentan a una fuerza maléfica en forma de monja demoníaca, en una abadía que se convierte en un campo de batalla de horror entre los vivos y los condenados.... Spin-off de la película de terror de 2016 'The Conjuring 2'. Producida por Atomic Monster, productora del director especializado en el género de terror, James Wan.",
  //     year: "2018",
  //     director: "Corin Hardy",
  // },
  // {
  //     title: "The Curse of La Llorona",
  //     img: "https://pics.filmaffinity.com/the_curse_of_la_llorona-530749792-large.jpg",
  //     description: "La Llorona es una aparición tenebrosa, atrapada entre el cielo y el infierno, con un destino terrible sellado por su propia mano. La mera mención de esta terrorífica leyenda mexicana ha causado terror durante generaciones. En vida, ahogó a sus hijos llena de rabia, por celos, arrojándose en el río tras ver lo que había hecho. Ahora sus lágrimas son eternas y letales, y aquellos que escuchan su llamada de muerte en la noche están condenados. Se arrastra en las sombras y ataca a los niños, desesperada por reemplazar a los suyos. A medida que los siglos han pasado, su deseo se ha vuelto más voraz y sus métodos más terroríficos.",
  //     year: "2019",
  //     director: "Michael Chaves",
  // },
  // {
  //     title: "Annabelle: Comes Home",
  //     img: "https://pics.filmaffinity.com/annabelle_comes_home-105571611-large.jpg",
  //     description: "Los demonólogos Ed y Lorraine Warren están decididos a evitar que Annabelle cause más estragos, así que llevan a la muñeca poseída a la sala de objetos bajo llave que tienen en su casa. La colocan a salvo en una vitrina sagrada bendecida por un sacerdote. Pero una terrorífica noche nada santa, Annabelle despierta a los espíritus malignos de la habitación, que se fijan en nuevos objetivos: la hija de diez años de los Warren, Judy, su niñera y una amiga de esta.",
  //     year: "2019",
  //     director: "Gary Dauberman",
  // },
  // {
  //     title: "The Conjuring: The Devil Made Me Do It",
  //     img: "https://pics.filmaffinity.com/the_conjuring_the_devil_made_me_do_it-118623652-large.jpg",
  //     description: "Ambientada en los años 80. Ed y Lorraine Warren deberán afrontar un nuevo caso que se presenta con un hombre, Arne Cheyne Johnson, que es acusado de asesinato tras haber sido poseído por un demonio.",
  //     year: "2021",
  //     director: "Michael Chaves",
  // },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allMovies = await Movie.find().lean();

    if (!allMovies.length) {
      console.log("[seed]: No movies found");
    } else {
      console.log(`[seed]: Found ${allMovies.length} movies`);
      await Movie.collection.drop();
      console.log("[seed]: Movie deleted correctly");
    }
  })
  .catch((error) =>
    console.log("[seed]: Error finding movie: ", error)
  )
  .then(async () => {
    await Movie.insertMany(movies);
    console.log("[seed]: New movies added");
  })
  .catch((error) => console.log("[seed]: Error adding movie", error))
  .finally(() => mongoose.disconnect());
