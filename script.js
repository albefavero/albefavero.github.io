const sentences = [
  "Io ho un nome brutto: Girolama - Girolama Gambino",
  "Insulto all'inter: interfeci - Michela",
  "La paura di the roberto - Michela",
  "Adesso come ci gestiamo? - Alberto F.",
  "Mattia moro - Gambino",
  "Da piccola facevo nascere le lucertole - Irene",
  "Cos'è l'utopia? una carta di yu-gi-ho - Palme",
  "Chi più spende meno spende - Pitaccolo",
  "Io sono un ninja - Catto",
  "Voglio raggiungere l'enciantix - Irene",
  "Il boy della fauna è il fauno - Michela",
  "Sono uscito con un giubbotto a puà - Alberto F.",
  "Che bella giornata andiamo in puglia - Alberto F.",
  "La prof ha il pollice verde - Alberto F.",
  "Il prof è un licantropo - Io (Riferito A Milidone)",
  "Pacifico questo - Rocco Milidone",
  "Questa prof non è terrona ... strano - Io",
  "L'odovico - Mario",
  "Deossiribosio - Gianni",
  "Con voto? no con simboli atzechi - Gambino",
  "Quod verum dixisti non punieris.... questa è giusta per tommaso - Paludetto",
  "Giacché cravatta - Nicolò",
  "Sono un gallinottero - Palme",
  "Gli inglesi sono bastardi - Terry",
  "Carraro.... manchi - Alberto F.",
  "Ti piacciono i kitammuort? - Alberto F.",
  "Che bella giornata.. andiamo in africa in bici - Catto",
  "Lo scheletro carbonilico - Gianni",
  "Siamo finanziati dall'isis - Palme",
  "Mi urta l'anima - Alberto F.",
  "Chi è al secondo esercizio.. è un pirla - Terry",
  "Ho male al ginocchio, me ne farò una ragione - Albertp F.",
  "Le rosse con lo sguardo magnetico, le more con lo sguardo deciso, le bionde un po' - Gambino",
  "Giovanni, ti lascio il mio vecchio soprannome: labbra di fuoco - Cesetti",
  "Sei figlio di un dio minore - Cesetti",
  "Palu: state giocando a briscola? palme: un pochino",
  "Mamma mia, che cesso! - Terry",
  "Gli americani sono bovari - Terry",
  "Gli australiani sono ex - Galeotti E Prostitute - Terry",
  "L'ombellico - Pitaccolo",
  "Regalare soldi... un simple present - Nicolò",
  "Alberto manca - Catto",
  "7 politico? - Carraro",
  "Participio passato di esigo? egitto? - Zago",
  "Neanche io non pronuncio correttameeeente - Palu",
  "Il punteggio grezzo - Prof Di Fisica Dell Inizio Della Terza Non So Il Nome",
  "La monica di monza - Alberto F.",
  "Io vivo! io valgo! - Gianni",
  "Il 600 è un monello per manzoni - Peru",
  "A.c. d.c.: avanti catto e dopo catto - Peru",
  "Date una circonferenza a quell'uomo - Alberto F.",
  "Mary è un uomo - Peru (Pensava Che Fosse Un Nome Da Uomo)",
  "Date un compasso a quell'uomo - Alberto F.",
  "Come ti chiami? michela. ah, micheli - Gambino",
  "Che degrado - Gambino",
  "Catto: la tina cipollari della 2^ d - Michela",
  "Sabrina ferulli - Simone",
  "Datti una regolata - Alberto F.",
  "Vi state perdendo gli errori di simone di cui possiamo ridere insieme - Terry",
  "Com'è bello questo crasso! - Gambino",
  "Il prof è un unicorno - Alberto F.",
  "Stay accorto - Rocco Milidone",
  "Non c'hanno sale in zucca - Gambino",
  "Mia nonna ha fatto la casalinga - Alberto F",
  "Stival: sapete che sono un po sordo; peru: ah ecco perchè urla",
  "È l'ipsia tedesco - Palu",
  "L'altra sembra un tappeto - Alberto F",
  "Ti odio! - Terrida",
  "No arrogo - Alberto F",
  "Potrei dirvelo, ma oggi sono nella fase dei dispetto - Gambino",
  "La preposizione fa da segnaposto - Carraro",
  "Non farti trascinare da uno spazio vuoto - Terry",
  "Se dici 'that' sei uno zotico - Terry",
  "Quello uomo - Terry",
  "Così ti tormenti l'anima - Terry",
  "Che mal di cuore - Terry",
  "Ti do una lellera - Milidone",
  "Ognuno fa i suoi porci comodi - Milidone",
  "Le dichiarative sono l'ultima spiaggia? - Carraro",
  "Il vandalismo va al di fuori dell'umana comprensione - Palu",
  "E che? i filosofi erano calzolai? - Gambino",
  "Sui libri di grammatica lo trovi a manate - Terry",
  "La dirimpettaia di mia nonna - Carlotta",
  "Non era di mia competenza - Alberto F",
  "In america ci sono tantissime pizzerie gestite da italiani... e da napoletani - Gambino",
  "Palme è un vaso di pottery - Peru",
  "Hanno cambiato la tenda? ah no c'è ancora quella schifa - Terry",
  "Io vi insulto mentalmente - Terry",
  "Mi scrivono di quelle fregnacce - Terry",
  "Ma no ma dai.. totano - Terry",
  "Mi suicido?? mi devo suicidare?? - Terry",
  "Perché mi fai difetto, idiota? - Terry",
  "Ho scritto malissimo: gallinaceo - Terry",
  "Sta ancora interrogando quella baldracca? - Alberto F",
  "Io non l'ho ancora audito, devo audirlo - Terry",
  "Ho fatto un esempio infame - Terry",
  "Ipsolon è diventato una mina vagante - Milidone",
  "Sciocca macchina! - Terry",
  "La famosa mano lampeggiante o mano con l'alzheimer - Gambino",
  "Ti immagini se i pulcini invece di diventare polli diventassero pulcioni? - Peru",
  "Quando correggo i compiti mi faccio di quelle sbaccanate - Terry",
  "Prof, io sono un caso speciale - Palme",
  "Magna charta: eat paper - Zago",
  "La frase come l'ha fatta lei è un po bislacca - Terry",
  "Should greta cum - Terry",
  "Voi italiani - Terry",
  "Common: raffreddore - Alberto F",
  "Tu non parlare sennò ti grattugio - Milidone A Palmegiano",
  "E che è la fanciulla del west?- gambino",
  "Ma i pesci hanno i polmoni? - Zago",
  "Mi inizio a far coinvoggi è il 27? - Terry",
  "Peru: 'chiamatemi francesca da trapani', simone: 'sei sicula?'",
  "Cosa avrebbe pensato? madre, libero di nuovo - Terry",
  "Impatto metereologico, quindi di meteoriti - Greta",
  "Minatlo, che mal scritto - Terry",
  "Cos'è questo shrek? - Stival",
  "Vai a vivere a zungri - Milidone",
  "Milidone: 'qualcuno dice anche forma canonica', carraro; 'sì, i frati'",
  "Ho un'assioma sulla spalla - Zago",
  "Ho una spuria sulla gamba - Alberto F",
  "Non ho paura di te, mario - Terrida",
  "Alessandra amorosio - Simone",
  "Peru: 'quando passano le pecore?' michela: 'exeunte vere'",
  "Loads of: cariolate - Terry",
  "Fai la gambino che è più pinia - Zago",
  "Stival: 'ti metto la i'; zago: 'di impreparato?' stival: 'di interrogazione'",
  "Non posso quella crrragna lì - Terry",
  "Mi fa veramente senso - Terry",
  "Date un soggetto a quella frase! - Simone",
  "A parigi c'è il lourdes - Simone",
  "Lava cane, pettina cane, sempre di cane puzza - Anonimo",
  "Quella a è uno sbaffo di penna - Terry",
  "Panigutto: 'si sa che in primavera i gatti...' zago: 'migrano'",
  "Si rivolgono con atteggiamento amicale - Panigutto",
  "L'inferno gretesco - Anonimo",
  "A manate, a borse, a scatoloni - Terry",
  "Allora io mi vesto da suora e vado in giro - Terry",
  "E chi siete voi? mr. muscolo e miss minigonna? - Gambino",
  "Panigutto: 'palmegiano dai scriviamo vangelo o vangeli?', palme: 'vangelo', peru: 'secondo giovanni...'",
  "Terry: 'è andata un po come il tuo nome...', zago: 'cioè?', terry: 'a zigo zago'",
  "Con voi tutto diventa ostico e disgraziato - Terry",
  "Pitaccolo: 'cosa porti?', palme: 'pittura su tavola', pitaccolo: 'ma non l abbiamo ancora fatta'",
  "Pitaccolo: 'quante volte ha fallito edison?', alberto f: '7'",
  "Ma tu ti guardi allo specchio? - Terry A Palme",
  "C'è un limite all'obrobrio - Terry A Palme (Sui Risvoltini)",
  "La gazzetta fatta per voi mentecatti - Terry",
  "Terrida: 'sei orrendo' Peru: 'Chiaretta fashion blogger'",
  "Siete esilaranti - Terry",
  "Il mio pesce si è suicidato - Irene",
  "Il mio criceto è morto di solitudine - Irene",
  "It is not concess to you - Chiara Valente",
  "Mattia dolens - Palu In Gita A Trento",
  "Mi chiamano franco, frankie, frank, francuz, franca - Palu",
  "Cos'avete lunedì? postumi da sbronza? - Gianni",
  "Gianni: 'c'è un corso per genitori', mario: '16 anni incinta?'",
  "I = 6 - Gianni",
  "È un organismo diploide come te - Gianni",
  "Ti metto un -2 in valore assoluto - Milidone",
  "Sta raffreddando la sostanza gialla - Terry",
  "Gambino: 'allah ha 99 nomi', carraro: 'allah faccia'",
  "Fino a mezz'ora fa non sapevo del pacco - Milidone",
  "Ho 14 gatti (prima ne avevo 21) - Gianni",
  "Quello è il capobranco - Gianni",
  "Sono impegnativi, infatti non vedo l'ora che diminuiscano (riferito ai 14 gatti, in precedenza 21) - Gianni",
  "Waterista - Anna",
  "La paludetto chiama la girolama mimma - Milidone",
  "Non siamo alla tv - Venturin",
  "Mi perdoni? - Palu",
  "La palla deve entrare (tutti: clap clap clap)",
  "Prof.. va bene AFFRANCARE? - Carraro Alla Paludetto",
  "Marco è giotto - Milidone",
  "E che amministravano? la minestra? - Gambino",
  "Non puoi stare paludato - Terry",
  "Ho avuto il cane ammazzato - Terry",
  "Preferisco l'orale - Pitaccolo",
  "Zago: 'non si fa gabry il primo giugno', marso: 'ponte'",
  "Tua mamma è come pingu.. nut nut - Filippo",
  "Cruciani: 'poi voglio iniziare a spiegare goniometria', palme: 'serve il goniometro?'",
  "Le chiese gotiche erano instabili e fiammeggianti - Emma",
  "Come si chiama l'insegnante di arte? pirandelli? - Vincentini",
  "Marco borriello? quello di squadra anti mafia - Giovanna",
  "Perché portogruaro non è provincia di venezia, è città-stato - Anna",
  "Senza una staccaletta? - Tecla",
  "Piove...non è giusto sono indispettita - Tecla",
  "Io come funzioni oserei mettere… - Carlotta",
  "Le cartelline sono grandi come la casa di un pappone - Carraro",
  "Peru: 'facciamo una petizione per insegnare alla ghiraldelli..', simone: 'a vivere'",
  "Domani andiamo in laboratorio per fare la mole - Peressini",
  "Terry: 'la tirone mi è epidermicamente...', pietro: 'sublime'",
  "Brutto, brutto.. tante lidl - Terry",
  "La rizzi ha i capelli da troy bolton - Anna",
  "Altrimenti facciamo le cose alla cavolo via - Peressini",
  "Le leggevano con più filologia - Greta",
  "Vivit. VIVIT? anadiplosi. - Vincentini",
  "Def: 'potrebbero scalare di posto ogni giorno..', tecla: 'nomadi?'",
  "Uffa - Ghiraldelli",
  "Io shekero le cimici - Tirone",
  "Ci sono rimasta stronza - Anna",
  "Sono un centauro anche io? - Tecla",
  "Ma che è? un messaggino vocalico? - Tecla",
  "Avete mai visto qualcuno che gioca con un'anguilla - Tecla",
  "Emma butta giù il pelo - Tecla",
  "Romeo è caduto in amore - Greta",
  "Hai l'infezione da articoli - Terry",
  "I protagonisti come si chiamano? tony, meni, bepi? - Terry",
  "Sciogliamo le castagne - Terru",
  "Sono un fenomeno a sbavarmi - Palme Alla Tecla",
  "Terne pitagoriche, no magia - Cruciani",
  "Pietro legati e procrea con filippo - Profeta",
  "Le relazioni oggi sono fast food - Profeta",
  "Siete sciroccati - Terrida",
  "Io questo errore lo valuto il 100% dello 0 -Terry",
  "Regola dell'ottetto che viene rispe...cchiata - Peressini",
  "Morivano a sbrego - Terry",
  "Le configurazioni di levis - Peressini",
  "Raffaella clerici - Anna",
  "I musulmani in paradiso trovano le ballerine svolazzanti - Terrida",
  "Tu ti svegli e poi ti colpevolizzi? - Terry",
  "Voglio comprare un'automobile color grigio-pietra lavica di napoli - Tirone",
  "Letto, approvato, aggiudicato - Tecla",
  "Volete vivere in mezzo all immondizia? andate a Napoli - Cruciani",
  "Concordia, essendo stata sede papale... - Emma",
  "Direi che no! - Cruciani",
  "Nuo! - Cruciani",
  "E che? ci facciamo le lampade per essere come i neri? - Tecla",
  "I due personaggi sono platone e aristotele, platone indica le cose del cielo che sono meglio di quelle della terra - Ghiraldelli",
  "Rizzi: 'ti è venuto l'esercizio?', zago: 'eh scusi a casa non mi è venuto' (era un esercizio nuovo appena fatto a scuola)",
  "E uno e due e tre e quattro e cinque e sei - Cruciani",
  "Chi sa rispondere può far baldoria, chi invece risponde correttamente non può - Peressini",
  "C'è zago che confubola - Anna",
  "Machiavelli era uno stoicista - Greta",
  "Guardo musica, gioco al kickbox - Terrida",
  "Sennò rimanete rape - Cruciani",
  "Come si fa a essere così crudi - Peressini",
  "I capelli che si mettono per isolare i tubi - Carlotta",
  "Platone indica il mondo degli dei - Ghiraldelli",
  "Dammi tempo amore - Peressini A Carraro",
  "Questa è falsamente.. una cosa falsa - Terry",
  "Io non è che sbavo - Peressini",
  "Complemento di maniera - Terry",
  "Anche io sono una persona che mi devo mettere il giubbotto - Anna",
  "Vi espullo - Anna",
  "Voi guardate il culo dei cani? io si - Anna",
  "Siete veramente interattivi - Anna",
  "Tasso utilizza un ariosto - Filippo",
  "Il numero A, il numero B, il numero C - Ghiraldelli",
  "Inevitabilmente io so tutta la letteratura quindi faccio collegamenti - Terry",
  "L'alba boreale - Terry",
  "6 e 4 12, no 6 e 4 14 - Terry",
  "È duncan che è falso prché è morto - Terry",
  "Non sopporto più le lezioni frontali, per questo sono soggetta a bronchiti - Tirone",
  "Stiamo qui a cincischiare - Tecla",
  "Prendiamo uno a caso.. pietro zago - Peressini",
  "Ma pietro, zago esiste, ed è anche un mio amico - Peressini",
  "È tutto un anastrofe per te - Tecla A Greta",
  "L'università di atene - Pietro",
  "Le matricole erano tormentate con scherzi, razzi, ecc - Tecla",
  "Stoccata - Terry",
  "Ghiraldelli: 'quelli di asa.. gli dai un'unghia e si prendono…', peru: '50 euro'",
  "Carta penna e calamaro - Anna",
  "Chi non sa fare l'esercizio diventa solfato di alluminio - Peressini",
  "Mi sono svegliata addormentata dallìidea dei compiti - Terry",
  "Ma secondo me anche la pietra ha una forma di memoria - Tirone",
  "Io farei un film su come un pappagallo vede il mondo - Tirone",
  "50 sfumature di incontinenza urinaria - Tirone E Simone",
  "Michelangelo è stato mandato abbalia - Ghiraldelli",
  "Ho fatto qualche imprecisazione - Greta",
  "Ma che cavolo va dicendo? tirone",
  "Carlotta: 'scusi', tecla: 'prego'",
  "Dai amore... - Peressini A Carraro",
  "L'orrido è un buco,uno strapiombo, un cuneo dove se cadi per tirarti su ti servono gli speleologi - Terrida",
  "Nessun apporto state apportando - Tecla",
  "Sarà che la nebbia mi ha shekerata - Tirone",
  "Oggi non è qui! ahh ma c'è la nebbia (terrida sulla tirone)",
  "Non finisco mai di stupirmi di come uno come fedez possa avere successo, è orrido - Terrida",
  "Cosa siete? autistici? - Cruciani",
  "Io a questo punto faccio il tifo per i terroristi - Tirone",
  "Cruciani: 'Chi ce lo assicura?', Pietro: 'Il teorema di Richelieu'",
  "Hai delle fasi in cui la metti accaciara - Tirone A Greta",
  "Pietro tu sei un segugio - Peressini",
  "Accosta la finestra - Ghirardelli",
  "Emma sei come un puledro selvaggio - Tirone",
  "Coito ergo sum - Filippo Durante Interrogazione Tirone",
  "Herman metal - Greta",
  "Tirone: 'perché mi cadete sulle bucce di banana che stanno a 3000 km?' anna: 'l'ha buttata la ghiraldelli' (probabilmente perchè mangiava sempre banane)",
  "Ci sono le fuck news - Tirone",
  "Le pistolettate, ah, pensavo fossero tipo le stoccate - Carraro",
  "Jonny travolta - Tecla",
  "Tramontana.. il gelato - Greta",
  "Nessuno è mai arrivato al centro della terra.. se non con la fantasia - Peressini",
  "La lunghezza la rimango - Ghiraldelli",
  "Son quelle che usano moodle.. tajarghe le mani è sempre troppo tardi - Terry",
  "C'è la rizzi, una chiara e un'altra imbecille - Terry",
  "'Sai chi è Yotobi?' giovanna: 'non è quello di star wars?'",
  "San tommaso non è quello che mette le dita nei buchi di gesù? - Carraro",
  "Giovanna, camilla e carlotta sono tutti nomi a me familiari, una è mia mamma, una mia nipote e l'altra è un nome che avrei voluto utilizzare in altro modo - Tirone",
  "I contadini avevano geneticamnete le caviglie più tozze, lo diceva già darwin - Tecla",
  "Pietro sei un dilettante - Tirone",
  "Lei non sa resistere ai suoi istinti famelici primordiali - Terrida Su Emma",
  "Tu pensi di poter camminare in piedi, ma rimani seduto - Terrida A Pietro",
  "Che cosa mi stai dicendo… (IDIOTA - Labiale) - Terrida A Marco",
  "Qua l'unica persona che fa casino è lei - Marco A Ghiraldelli",
  "Iugual = Equal - Greta",
  "Convertisce - Emma",
  "Catalogalizzate - Carlotta",
  "Canti Pisano-Recanatensi - Giovanna",
  "Giulia, ho scoperto che vai al Serd - Giovanna",
  "Ministro degli Esterni - Giovanna",
  "Kuski = Kautski - Giovanna",
  "Sains = Since - Marco",
  "Spiega l'importanza e l'utilità dell'uscita didatta alla Biennale di Venezia - Domanda Di Una Verifica Della Ghirardelli",
  "Coadiuvare = Unire - Giovanna",
  "Tesor = Treasure - Cristian",
  "Angel / Engels - Marco",
  "Le 35 euro non sono molte - Peritore",
  "Pelux = Pelloux - Greta",
  "Macabo...Marcabo...Macrabo = Macabro - Greta",
  "Cristian: 'Le superfici equipotenziali sono circolari', Cruciani: 'un po' di più', Cristian: 'Ellittiche'",
  "Il potenziale aumenta perché mi sposto lontano dalla carica, quindi diminuisce - Cristian",
  "1 Columb = 1 Coulomb - Greta",
  "Gast = Gusto - Giovanna",
  "Strass = Strauss - Greta",
  "Separamento = Separazione - Alberto D",
  "Baldings = Buildings - Giovanna",
  "Basi = Busy - Giovanna",
  "Personificated = Personified - Giovanna",
  "Obligated = Obliged - Giovanna",
  "L'associamento - Alberto F",
  "Aràno (voce del verbo Arare) - Emma",
  "Legge di Faraday-Newmann - Greta",
  "The Final = The end - Anna",
  "Niu Dial - Greta",
  "'Quale parte dell'estate?', 'La sera' - Giovanna",
  "Il Deo = Il Dio - Carlotta",
  "Famus = Famous - Greta",
  "Vittorianesimo = Età Vittoriana - Greta",
  "Alienamento = Alienazione",
  "'Un litro equivale ad un metro cubo?', 'Sì' - Greta",
  "Descripted = Described - Simone",
  "Wednesdei = Wdsnesday - Alberto D",
  "Gli argomenti vengono descritti con un sistema annuale - Tommaso",
  "Brez-Livotz = Brest-Litovsk - Nicolò",
  "La tuta di forza - Giovanna",
  "Ciaracter - Giovanna",
  "Simone ma ti fa male il dito, posso farti leggere? - Tirone",
  "Pirl Arbur - Giovanna",
  "Temò - Passador",
  "'Che tipo di corrente?', 'Elettrica' - Giovanna",
  "Oerstred - Giovanna",
  "'Se la velocità fosse stata zero, la terra sarebbe dovuta essere…?', 'Piatta' - Nicolò",
  "Brevster = Brewster - Giovanna",
  "Ovulare = Ovale - Ghirardelli",
  "Wrailess - Cruciani",
  "Ma non se li mangiano (i cinesi) - Giovanna",
  "Viòla (voce del verbo violare) - Giovanna & Greta",
  "Togliatti esponente del comunismo (consigliata dalla peru) - Greta",
  "Il 25 aprile è la liberazione di San Marco - Greta",
  "Il professor Bernardersen - Giovanna",
  "Si dilaniò un incendio - Giovanna",
  "Accadette - Cristian",
  "Il fusto della spira - Tommaso",
  "Newslettere - Ghirardelli",
  "'Di che tipo di corrente abbiamo parlato fin'ora?', 'Di corrente… elettrica' - Anna",
  "Akopoloniktosis = Apokolokynthosis - Giovanna",
  "Il bossolo della pistola di Claudio - Giovanna",
  "Seneca parla ai suoi coetanei - Greta",
  "Polìptoto - Greta",
  ];
  

const randomSentenceButton = document.getElementById('randomSentenceButton');
const randomSentenceDisplay = document.getElementById('randomSentence');

randomSentenceButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  const randomSentence = sentences[randomIndex];
  randomSentenceDisplay.innerText = randomSentence;
});
