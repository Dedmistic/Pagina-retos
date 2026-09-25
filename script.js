const challenges = {
    minecraft: {
        regalado: [
            "Corta 10 árboles de roble.",
            "Haz una mesa de crafteo.",
            "Cocina 5 filetes de res.",
            "Cultiva 10 trigos.",
            "Haz una cama.",
            "Encuentra 5 ovejas y esquílalas.",
            "Haz una antorcha.",
            "Cava un hoyo de 10x10.",
            "Domestica un lobo.",
            "Haz un cofre doble."
        ],
        facil: [
            "Mata un Enderman con una espada de hierro.",
            "Haz un pico de diamante.",
            "Encuentra una aldea y tradea con un aldeano.",
            "Haz una granja de cultivos automática.",
            "Mata 5 zombies en una noche.",
            "Haz una armadura completa de hierro.",
            "Encuentra un templo del desierto.",
            "Haz un portal al Nether sin morir.",
            "Domestica un gato.",
            "Encuentra 10 perlas de Ender."
        ],
        moderado: [
            "Mata un Ghast con su propia bola de fuego.",
            "Haz una granja de experiencia.",
            "Encuentra una fortaleza del Nether.",
            "Haz un beacon.",
            "Mata un Wither.",
            "Haz una granja de hierro.",
            "Encuentra una ciudad del End.",
            "Haz una casa con 5 habitaciones decoradas.",
            "Consigue 10 bloques de obsidiana sin picareta de diamante.",
            "Haz un mapa gigante de tu mundo (5x5)."
        ],
        medio: [
            "Mata al Dragón del End sin armadura.",
            "Haz una granja de Wither Skeletons.",
            "Consigue un Elytra.",
            "Haz una granja de Guardianes.",
            "Mata un Wither solo con arco y flechas.",
            "Haz una granja de aldeanos automática.",
            "Encuentra una mansión del bosque y límpiala.",
            "Haz un camino de 1000 bloques de obsidiana.",
            "Consigue un caballo con velocidad máxima.",
            "Haz una granja de creepers automática."
        ],
        dificil: [
            "Mata al Dragón del End solo con puños (sin objetos).",
            "Haz una granja de Wither que funcione en Bedrock.",
            "Consigue un beacon con pirámide completa de netherite.",
            "Haz una granja de Guardianes en el océano abierto.",
            "Sobrevive 100 días en Hardcore sin morir.",
            "Haz una granja de Enderman en el End.",
            "Consigue todos los logros del juego.",
            "Haz una granja de hierro que produzca 1000/h.",
            "Mata un Wither en menos de 30 segundos.",
            "Haz una granja de raid automática.",
            "Ganarle a un ravaller solo con un palito "
        ],
        imposible: [
            "Mata al Dragón del End en Hardcore solo con puños, sin comer, sin bloques y sin armadura.",
            "Consigue una armadura completa de netherite con encantamientos máximos en menos de 1 hora de mundo.",
            "Haz una granja de Wither que mate 50 Withers por hora.",
            "Sobrevive 1000 días en Hardcore sin usar armadura.",
            "Mata al Warden solo con un pico de madera.",
            "Haz una granja de Ender Dragon.",
            "Consigue 1000 niveles de experiencia sin morir.",
            "Haz un camino de 10000 bloques de obsidiana a mano.",
            "Mata un Wither, un Ender Dragon y un Warden en la misma partida sin morir.",
            "Haz una granja de raid que produzca 10 emeralds/segundo."
        ]
    },
    fortnite: {
        regalado: [
            "Abre 5 cofres.",
            "Recoge 100 madera.",
            "Haz 50 de daño a un enemigo.",
            "Usa un vehículo.",
            "Recoge 3 armas diferentes.",
            "Haz un baile en una ubicación nombrada.",
            "Recoge 50 piedra.",
            "Usa un consumible de escudo.",
            "Haz 1 eliminación.",
            "Sobrevive hasta el top 50."
        ],
        facil: [
            "Haz 3 eliminaciones en una partida.",
            "Gana una partida en Dúos.",
            "Haz 500 de daño en una partida.",
            "Abre 10 cofres en una partida.",
            "Usa un cañón de lanzamiento.",
            "Haz una eliminación con una pistola.",
            "Construye una estructura de 50 piezas.",
            "Recoge 500 de cada material.",
            "Haz una eliminación a más de 50 metros.",
            "Sobrevive hasta el top 10."
        ],
        moderado: [
            "Haz 5 eliminaciones en una partida.",
            "Gana una partida en Escuadrones.",
            "Haz 1000 de daño en una partida.",
            "Haz una eliminación con un francotirador.",
            "Construye una estructura de 100 piezas.",
            "Haz una eliminación con una granada.",
            "Sobrevive hasta el top 3.",
            "Haz 3 eliminaciones consecutivas sin curarte.",
            "Usa un jetpack para eliminar a alguien.",
            "Haz una eliminación con un arma de melee."
        ],
        medio: [
            "Haz 10 eliminaciones en una partida.",
            "Gana una partida en Solitario sin construir.",
            "Haz 2000 de daño en una partida.",
            "Haz una eliminación con un francotirador a más de 200 metros.",
            "Construye una estructura de 200 piezas en 30 segundos.",
            "Haz 5 eliminaciones consecutivas sin morir.",
            "Gana una partida con solo armas verdes.",
            "Haz una eliminación con un vehículo.",
            "Sobrevive hasta el top 1 con menos de 50 de vida.",
            "Haz una eliminación con una trampa."
        ],
        dificil: [
            "Haz 15 eliminaciones en una partida.",
            "Gana una partida en Solitario sin usar escudos.",
            "Haz 3000 de daño en una partida.",
            "Haz una eliminación con un francotirador a más de 300 metros.",
            "Gana una partida sin usar armas (solo construcciones y trampas).",
            "Haz 10 eliminaciones consecutivas sin morir.",
            "Gana una partida con solo armas grises.",
            "Haz una eliminación con un cañón de lanzamiento.",
            "Sobrevive hasta el top 1 sin curarte en toda la partida.",
            "Haz una eliminación con un pico de pickaxe."
        ],
        imposible: [
            "Haz 20 eliminaciones en una partida y gana.",
            "Gana una partida en Solitario sin usar armas, escudos, curación en cero construccion.",
            "Haz 5000 de daño en una partida.",
            "Haz una eliminación con un francotirador a más de 500 metros.",
            "Gana 10 partidas consecutivas en Solitario.",
            "Haz 15 eliminaciones consecutivas sin morir en una partida.",
            "Gana una partida con solo usar el pico.",
            "Haz una eliminación con un pez o arma de pesca.",
            "Sobrevive hasta el top 1 con 1 de vida durante toda la partida.",
            "Haz una eliminación con un objeto de curación.",
            "Sobrevive 2 círculos de tormenta pero dentro de la tormenta.",
            "Ganar una partida de ranked con tu espíritu más valioso sin posibilidad de extraerlo"
        ]
    },
    brawlstars: {
        regalado: [
            "Gana una partida en Atraco.",
            "Haz 1000 de daño en una partida.",
            "Usa tu súper 3 veces en una partida.",
            "Recoge 5 power cubes en Supervivencia.",
            "Gana una partida en Balón Brawl.",
            "Haz una eliminación con tu súper.",
            "Usa tu gadget una vez.",
            "Gana una partida en Caza Estelar.",
            "Haz 500 de daño con tu súper.",
            "Sobrevive 30 segundos en Supervivencia."
        ],
        facil: [
            "Gana 3 partidas consecutivas.",
            "Haz 3000 de daño en una partida.",
            "Haz 3 eliminaciones en una partida.",
            "Recoge 10 power cubes en Supervivencia.",
            "Gana una partida sin morir.",
            "Haz una eliminación con cada ataque básico y súper.",
            "Usa tu gadget 3 veces en una partida.",
            "Gana una partida en Asedio.",
            "Haz 1500 de daño con tu súper.",
            "Sobrevive hasta el top 5 en Supervivencia."
        ],
        moderado: [
            "Gana 5 partidas consecutivas.",
            "Haz 5000 de daño en una partida.",
            "Haz 5 eliminaciones en una partida.",
            "Recoge 15 power cubes en Supervivencia.",
            "Gana una partida en Supervivencia en Dúos sin que tu compañero muera.",
            "Haz una triple eliminación.",
            "Usa tu gadget 5 veces en una partida.",
            "Gana una partida en Zona Restringida.",
            "Haz 3000 de daño con tu súper.",
            "Sobrevive hasta el top 3 en Supervivencia."
        ],
        medio: [
            "Gana 10 partidas consecutivas.",
            "Haz 8000 de daño en una partida.",
            "Haz 8 eliminaciones en una partida.",
            "Recoge 20 power cubes en Supervivencia.",
            "Gana una partida en Supervivencia en Solitario sin usar tu súper.",
            "Haz una cuádruple eliminación.",
            "Usa tu gadget 8 veces en una partida.",
            "Gana una partida en Atraco en menos de 30 segundos.",
            "Haz 5000 de daño con tu súper.",
            "Sobrevive hasta el top 1 en Supervivencia con 5 power cubes o menos."
        ],
        dificil: [
            "Gana 15 partidas consecutivas.",
            "Haz 12000 de daño en una partida.",
            "Haz 12 eliminaciones en una partida.",
            "Recoge 25 power cubes en Supervivencia.",
            "Gana una partida en Supervivencia en Solitario sin usar tu súper ni tu gadget.",
            "Haz una eliminación con cada brawler en tu equipo en una sola partida.",
            "Usa tu gadget 10 veces en una partida.",
            "Gana una partida en Balón Brawl sin que el enemigo toque el balón.",
            "Haz 8000 de daño con tu súper.",
            "Sobrevive hasta el top 1 en Supervivencia sin recoger power cubes."
        ],
        imposible: [
            "Gana 20 partidas consecutivas.",
            "Haz 20000 de daño en una partida.",
            "Haz 15 eliminaciones en una partida.",
            "Recoge 30 power cubes en Supervivencia.",
            "Gana una partida en Supervivencia en Solitario sin usar ataques básicos, súper ni gadget.",
            "Haz una eliminación con cada brawler en el juego en una sola sesión.",
            "Usa tu gadget 15 veces en una partida.",
            "Gana una partida en Atraco en menos de 10 segundos.",
            "Haz 12000 de daño con tu súper.",
            "Sobrevive hasta el top 1 en Supervivencia con 1 de vida durante los últimos 2 minutos."
        ]
    },
    fnf: {
        regalado: [
            "Completa una canción en Easy.",
            "Haz 50 notas perfectas en una canción.",
            "Completa una canción sin fallar más de 20 veces.",
            "Juega una canción en Freeplay.",
            "Haz 10 notas perfectas consecutivas.",
            "Completa una canción en Story Mode.",
            "Haz 100 notas en total en una canción.",
            "Completa una canción con más del 70% de precisión.",
            "Juega una canción en Hard.",
            "Haz 5 notas perfectas consecutivas en Hard."
        ],
        facil: [
            "Completa una canción en Normal sin fallar más de 10 veces.",
            "Haz 100 notas perfectas en una canción.",
            "Completa una canción en Hard.",
            "Haz 20 notas perfectas consecutivas.",
            "Completa una canción con más del 80% de precisión.",
            "Haz 200 notas en total en una canción.",
            "Completa una canción en Hard sin fallar más de 20 veces.",
            "Haz 50 notas perfectas consecutivas.",
            "Completa una canción en Freeplay en Hard.",
            "Haz 150 notas perfectas en una canción."
        ],
        moderado: [
            "Completa una canción en Hard sin fallar más de 5 veces.",
            "Haz 200 notas perfectas en una canción.",
            "Completa una canción con más del 90% de precisión.",
            "Haz 50 notas perfectas consecutivas en Hard.",
            "Completa una canción en Erect.",
            "Haz 300 notas en total en una canción.",
            "Completa una canción en Erect sin fallar más de 10 veces.",
            "Haz 100 notas perfectas consecutivas.",
            "Completa una canción en Hard con más del 95% de precisión.",
            "Haz 250 notas perfectas en una canción."
        ],
        medio: [
            "Completa una canción en Erect sin fallar más de 5 veces.",
            "Haz 300 notas perfectas en una canción.",
            "Completa una canción con más del 95% de precisión.",
            "Haz 100 notas perfectas consecutivas en Erect.",
            "Completa una canción en Nightmare.",
            "Haz 400 notas en total en una canción.",
            "Completa una canción en Nightmare sin fallar más de 10 veces.",
            "Haz 150 notas perfectas consecutivas.",
            "Completa una canción en Erect con 100% de precisión.",
            "Haz 350 notas perfectas en una canción."
        ],
        dificil: [
            "Completa una canción en Nightmare sin fallar más de 5 veces.",
            "Haz 400 notas perfectas en una canción.",
            "Completa una canción en Nightmare con más del 95% de precisión.",
            "Haz 200 notas perfectas consecutivas en Nightmare.",
            "Completa una canción en Nightmare con 100% de precisión.",
            "Haz 500 notas en total en una canción.",
            "Completa una canción en Nightmare sin fallar ni una vez.",
            "Haz 250 notas perfectas consecutivas.",
            "Completa una canción de más de 5 minutos en Nightmare sin fallar.",
            "Haz 450 notas perfectas en una canción."
        ],
        imposible: [
            "Completa una canción en Nightmare con 100% de precisión y sin fallar ni una vez.",
            "Haz 500 notas perfectas en una canción.",
            "Completa una canción de más de 7 minutos sin fallar.",
            "Haz 300 notas perfectas consecutivas en Nightmare.",
            "Completa la cancion Spookeez en Perfect Gold.",
            "Completa una canción en Nightmare con 100% de precisión usando solo una mano.",
            "Haz 600 notas en total en una canción.",
            "Completa una canción en Nightmare con los ojos cerrados (sin ver la pantalla).",
            "Haz 350 notas perfectas consecutivas.",
            "Completa una canción de más de 10 minutos fallar.",
            "Haz 500 notas perfectas en una canción en Nightmare."
        ]
    },
    overwatch: {
        regalado: [
            "Haz 1000 de daño en una partida.",
            "Usa tu habilidad definitiva 1 vez.",
            "Haz 1 eliminación.",
            "Cura 500 de salud en una partida.",
            "Captura un punto de control.",
            "Empuja la carga 10 metros.",
            "Usa tu habilidad secundaria 5 veces.",
            "Haz 500 de daño con tu habilidad definitiva.",
            "Sobrevive 1 minuto sin morir.",
            "Usa tu habilidad de movimiento 3 veces."
        ],
        facil: [
            "Haz 3000 de daño en una partida.",
            "Usa tu habilidad definitiva 3 veces.",
            "Haz 5 eliminaciones.",
            "Cura 2000 de salud en una partida.",
            "Captura 2 puntos de control.",
            "Empuja la carga 50 metros.",
            "Haz una doble eliminación.",
            "Haz 1500 de daño con tu habilidad definitiva.",
            "Sobrevive 3 minutos sin morir.",
            "Usa tu habilidad de movimiento 10 veces."
        ],
        moderado: [
            "Haz 5000 de daño en una partida.",
            "Usa tu habilidad definitiva 5 veces.",
            "Haz 10 eliminaciones.",
            "Cura 5000 de salud en una partida.",
            "Captura 3 puntos de control sin morir.",
            "Empuja la carga 100 metros.",
            "Haz una triple eliminación.",
            "Haz 3000 de daño con tu habilidad definitiva.",
            "Sobrevive 5 minutos sin morir.",
            "Haz 15 eliminaciones consecutivas sin morir."
        ],
        medio: [
            "Haz 8000 de daño en una partida.",
            "Usa tu habilidad definitiva 8 veces.",
            "Haz 15 eliminaciones.",
            "Cura 10000 de salud en una partida.",
            "Captura todos los puntos de control sin morir.",
            "Empuja la carga hasta el final sin morir.",
            "Haz una cuádruple eliminación.",
            "Haz 5000 de daño con tu habilidad definitiva.",
            "Sobrevive 8 minutos sin morir.",
            "Haz 20 eliminaciones consecutivas sin morir."
        ],
        dificil: [
            "Haz 12000 de daño en una partida.",
            "Usa tu habilidad definitiva 10 veces.",
            "Haz 20 eliminaciones.",
            "Cura 15000 de salud en una partida.",
            "Captura todos los puntos de control sin morir y sin usar tu habilidad definitiva.",
            "Empuja la carga hasta el final sin morir y sin usar curación.",
            "Haz una quintuple eliminación.",
            "Haz 8000 de daño con tu habilidad definitiva.",
            "Sobrevive 10 minutos sin morir.",
            "Haz 25 eliminaciones consecutivas sin morir."
        ],
        imposible: [
            "Haz 20000 de daño en una partida.",
            "Usa tu habilidad definitiva 15 veces.",
            "Haz 30 eliminaciones.",
            "Cura 25000 de salud en una partida.",
            "Gana una partida sin morir ni una vez.",
            "Haz una sextuple eliminación (team wipe).",
            "Haz 12000 de daño con tu habilidad definitiva.",
            "Sobrevive toda la partida sin morir (15+ minutos).",
            "Haz 35 eliminaciones consecutivas sin morir.",
            "Gana una partida sin usar tu habilidad definitiva ni curación.",
            "Usar bien a merci XD"
        ]
    },
    clashroyale: {
        regalado: [
            "Gana una partida en Arena 1.",
            "Destruye una torre en una partida.",
            "Usa 3 cartas diferentes en una partida.",
            "Haz 100 de daño a la torre del rey.",
            "Gana una partida en el modo 2v2.",
            "Usa una carta de hechizo.",
            "Haz una eliminación con una carta de tropa.",
            "Gana una partida en menos de 2 minutos.",
            "Usa tu habilidad de campeón una vez.",
            "Destruye 2 torres en una partida."
        ],
        facil: [
            "Gana 3 partidas consecutivas.",
            "Destruye la torre del rey en una partida.",
            "Usa 5 cartas diferentes en una partida.",
            "Haz 500 de daño a la torre del rey.",
            "Gana una partida en el modo Desafío.",
            "Usa 3 cartas de hechizo en una partida.",
            "Haz 3 eliminaciones con una carta de tropa.",
            "Gana una partida en menos de 1 minuto y 30 segundos.",
            "Usa tu habilidad de campeón 3 veces.",
            "Destruye 3 torres en una partida."
        ],
        moderado: [
            "Gana 5 partidas consecutivas.",
            "Destruye la torre del rey en menos de 1 minuto.",
            "Usa 8 cartas diferentes en una partida.",
            "Haz 1000 de daño a la torre del rey.",
            "Gana una partida en el modo Torneo.",
            "Usa 5 cartas de hechizo en una partida.",
            "Haz 5 eliminaciones con una carta de tropa.",
            "Gana una partida en menos de 1 minuto.",
            "Usa tu habilidad de campeón 5 veces.",
            "Destruye todas las torres en una partida."
        ],
        medio: [
            "Gana 10 partidas consecutivas.",
            "Destruye la torre del rey en menos de 30 segundos.",
            "Usa todas las cartas de tu mazo en una partida.",
            "Haz 2000 de daño a la torre del rey.",
            "Gana una partida en el modo Desafío Especial.",
            "Usa 8 cartas de hechizo en una partida.",
            "Haz 8 eliminaciones con una carta de tropa.",
            "Gana una partida sin perder ninguna torre.",
            "Usa tu habilidad de campeón 8 veces.",
            "Destruye todas las torres en menos de 1 minuto."
        ],
        dificil: [
            "Gana 15 partidas consecutivas.",
            "Destruye la torre del rey en menos de 15 segundos.",
            "Usa todas las cartas de tu mazo 2 veces en una partida.",
            "Haz 3000 de daño a la torre del rey.",
            "Gana una partida en el modo Torneo sin perder torres.",
            "Usa 10 cartas de hechizo en una partida.",
            "Haz 12 eliminaciones con una carta de tropa.",
            "Gana una partida sin usar cartas de tropa (solo hechizos y estructuras).",
            "Usa tu habilidad de campeón 10 veces.",
            "Destruye todas las torres en menos de 30 segundos."
        ],
        imposible: [
            "Gana 20 partidas consecutivas.",
            "Destruye la torre del rey en menos de 5 segundos.",
            "Usa todas las cartas de tu mazo 3 veces en una partida.",
            "Haz 5000 de daño a la torre del rey.",
            "Gana una partida en el modo Torneo sin usar cartas de tropa ni hechizos.",
            "Usa 15 cartas de hechizo en una partida.",
            "Haz 20 eliminaciones con una carta de tropa.",
            "Gana una partida sin usar ninguna carta (solo habilidades de campeón).",
            "Usa tu habilidad de campeón 15 veces.",
            "Destruye todas las torres en menos de 10 segundos."
        ]
    },
    rocketleague: {
        regalado: [
            "Haz 1 gol en una partida.",
            "Haz 1 asistencia en una partida.",
            "Haz 1 parada en una partida.",
            "Usa el boost 10 veces.",
            "Haz un centro al área.",
            "Toca el balón 20 veces.",
            "Haz un salto con el coche.",
            "Usa el turbo boost 5 veces.",
            "Haz un pase a un compañero.",
            "Sobrevive 1 minuto sin ser golpeado."
        ],
        facil: [
            "Haz 3 goles en una partida.",
            "Haz 2 asistencias en una partida.",
            "Haz 3 paradas en una partida.",
            "Usa el boost 30 veces.",
            "Haz 2 centros al área.",
            "Toca el balón 50 veces.",
            "Haz un gol aéreo.",
            "Usa el turbo boost 15 veces.",
            "Haz 3 pases a compañeros.",
            "Sobrevive 2 minutos sin ser golpeado."
        ],
        moderado: [
            "Haz 5 goles en una partida.",
            "Haz 3 asistencias en una partida.",
            "Haz 5 paradas en una partida.",
            "Usa el boost 50 veces.",
            "Haz 3 centros al área.",
            "Toca el balón 100 veces.",
            "Haz 2 goles aéreos.",
            "Usa el turbo boost 25 veces.",
            "Haz 5 pases a compañeros.",
            "Sobrevive 3 minutos sin ser golpeado."
        ],
        medio: [
            "Haz 8 goles en una partida.",
            "Haz 5 asistencias en una partida.",
            "Haz 8 paradas en una partida.",
            "Usa el boost 80 veces.",
            "Haz 5 centros al área.",
            "Toca el balón 150 veces.",
            "Haz 3 goles aéreos.",
            "Usa el turbo boost 40 veces.",
            "Haz 8 pases a compañeros.",
            "Sobrevive 4 minutos sin ser golpeado."
        ],
        dificil: [
            "Haz 10 goles en una partida.",
            "Haz 8 asistencias en una partida.",
            "Haz 10 paradas en una partida.",
            "Usa el boost 120 veces.",
            "Haz 8 centros al área.",
            "Toca el balón 200 veces.",
            "Haz 5 goles aéreos.",
            "Usa el turbo boost 60 veces.",
            "Haz 10 pases a compañeros.",
            "Sobrevive 5 minutos sin ser golpeado."
        ],
        imposible: [
            "Haz 15 goles en una partida.",
            "Haz 10 asistencias en una partida.",
            "Haz 15 paradas en una partida.",
            "Usa el boost 200 veces.",
            "Haz 10 centros al área.",
            "Toca el balón 300 veces.",
            "Haz 8 goles aéreos.",
            "Usa el turbo boost 100 veces.",
            "Haz 15 pases a compañeros.",
            "Sobrevive toda la partida sin ser golpeado ni una vez."
        ]
    },
    cyberpunk: {
        regalado: [
            "Completa 1 misión secundaria.",
            "Visita 3 ubicaciones diferentes en Night City.",
            "Habla con 5 NPCs.",
            "Compra 1 arma en una tienda.",
            "Conduce un vehículo por 5 minutos.",
            "Haz una foto con el modo foto.",
            "Recoge 10 objetos del suelo.",
            "Usa tu habilidad de escaneo 3 veces.",
            "Cambia tu apariencia en un espejo.",
            "Escucha una canción completa en el radio del coche."
        ],
        facil: [
            "Completa 3 misiones secundarias.",
            "Consigue 1 implante cibernético.",
            "Haz 10 eliminaciones con un arma de fuego.",
            "Hackea 5 terminales.",
            "Conduce 5 vehículos diferentes.",
            "Completa una misión sigilosa sin ser detectado.",
            "Recoge 50 objetos del suelo.",
            "Usa tu habilidad de escaneo 10 veces.",
            "Gana una pelea de puños.",
            "Compra 3 armas diferentes."
        ],
        moderado: [
            "Completa 5 misiones secundarias.",
            "Consigue 3 implantes cibernéticos.",
            "Haz 25 eliminaciones con un arma de fuego.",
            "Hackea 10 terminales.",
            "Conduce 10 vehículos diferentes.",
            "Completa 2 misiones sigilosas sin ser detectado.",
            "Recoge 100 objetos del suelo.",
            "Usa tu habilidad de escaneo 20 veces.",
            "Gana 3 peleas de puños.",
            "Completa una misión en dificultad Difícil."
        ],
        medio: [
            "Completa 10 misiones secundarias.",
            "Consigue 5 implantes cibernéticos.",
            "Haz 50 eliminaciones con un arma de fuego.",
            "Hackea 20 terminales.",
            "Conduce 20 vehículos diferentes.",
            "Completa 5 misiones sigilosas sin ser detectado.",
            "Recoge 200 objetos del suelo.",
            "Usa tu habilidad de escaneo 50 veces.",
            "Gana 5 peleas de puños.",
            "Completa 3 misiones en dificultad Muy Difícil."
        ],
        dificil: [
            "Completa 15 misiones secundarias.",
            "Consigue 8 implantes cibernéticos.",
            "Haz 100 eliminaciones con un arma de fuego.",
            "Hackea 50 terminales.",
            "Conduce todos los vehículos del juego.",
            "Completa 10 misiones sigilosas sin ser detectado.",
            "Recoge 500 objetos del suelo.",
            "Usa tu habilidad de escaneo 100 veces.",
            "Gana 10 peleas de puños.",
            "Completa la historia principal sin morir."
        ],
        imposible: [
            "Completa todas las misiones secundarias del juego.",
            "Consigue todos los implantes cibernéticos del juego.",
            "Haz 500 eliminaciones con solo puños.",
            "Hackea 100 terminales sin ser detectado.",
            "Conduce todos los vehículos del juego en 1 hora.",
            "Completa todo el juego sigiloso sin ser detectado ni una vez.",
            "Recoge 1000 objetos del suelo.",
            "Usa tu habilidad de escaneo 500 veces.",
            "Gana 50 peleas de puños seguidas.",
            "Completa la historia principal en dificultad máxima sin morir ni usar armas."
        ]
    },
    roblox: {
        regalado: [
            "Juega 3 juegos diferentes.",
            "Consigue 1 badge en cualquier juego.",
            "Haz 1 amigo.",
            "Personaliza tu avatar con 1 accesorio.",
            "Juega 10 minutos en un juego de simulación.",
            "Usa el chat 5 veces.",
            "Visita 3 mundos diferentes.",
            "Haz 1 tradeo.",
            "Completa 1 minijuego.",
            "Usa 1 emote."
        ],
        facil: [
            "Juega 5 juegos diferentes.",
            "Consigue 3 badges en cualquier juego.",
            "Haz 3 amigos.",
            "Personaliza tu avatar con 5 accesorios.",
            "Juega 30 minutos en un juego de simulación.",
            "Usa el chat 20 veces.",
            "Visita 10 mundos diferentes.",
            "Haz 3 tradeos.",
            "Completa 3 minijuegos.",
            "Usa 5 emotes diferentes."
        ],
        moderado: [
            "Juega 10 juegos diferentes.",
            "Consigue 5 badges en cualquier juego.",
            "Haz 5 amigos.",
            "Personaliza tu avatar con 10 accesorios.",
            "Juega 1 hora en un juego de simulación.",
            "Usa el chat 50 veces.",
            "Visita 20 mundos diferentes.",
            "Haz 5 tradeos.",
            "Completa 5 minijuegos.",
            "Usa 10 emotes diferentes."
        ],
        medio: [
            "Juega 20 juegos diferentes.",
            "Consigue 10 badges en cualquier juego.",
            "Haz 10 amigos.",
            "Personaliza tu avatar con 20 accesorios.",
            "Juega 2 horas en un juego de simulación.",
            "Usa el chat 100 veces.",
            "Visita 50 mundos diferentes.",
            "Haz 10 tradeos.",
            "Completa 10 minijuegos.",
            "Usa 20 emotes diferentes."
        ],
        dificil: [
            "Juega 50 juegos diferentes.",
            "Consigue 20 badges en cualquier juego.",
            "Haz 20 amigos.",
            "Personaliza tu avatar con 50 accesorios.",
            "Juega 5 horas en un juego de simulación.",
            "Usa el chat 200 veces.",
            "Visita 100 mundos diferentes.",
            "Haz 20 tradeos.",
            "Completa 20 minijuegos.",
            "Usa 50 emotes diferentes."
        ],
        imposible: [
            "Juega 100 juegos diferentes.",
            "Consigue 50 badges en cualquier juego.",
            "Haz 50 amigos.",
            "Personaliza tu avatar con todos los accesorios disponibles.",
            "Juega 10 horas seguidas en un juego de simulación.",
            "Usa el chat 500 veces.",
            "Visita 200 mundos diferentes.",
            "Haz 50 tradeos.",
            "Completa 50 minijuegos.",
            "Usa todos los emotes del juego."
        ]
    },
    amongus: {
        regalado: [
            "Completa 1 tarea como tripulante.",
            "Sobrevive 1 ronda como tripulante.",
            "Vota correctamente 1 vez.",
            "Usa el chat de emergencia 1 vez.",
            "Revisa 3 cámaras de seguridad.",
            "Haz 1 kill como impostor.",
            "Sabotea 1 sistema.",
            "Ventea 1 vez.",
            "Completa 1 ronda sin morir.",
            "Haz 1 reporte de cuerpo."
        ],
        facil: [
            "Completa 5 tareas como tripulante.",
            "Sobrevive 3 rondas como tripulante.",
            "Vota correctamente 3 veces.",
            "Usa el chat de emergencia 3 veces.",
            "Revisa 10 cámaras de seguridad.",
            "Haz 3 kills como impostor.",
            "Sabotea 3 sistemas.",
            "Ventea 3 veces.",
            "Completa 3 rondas sin morir.",
            "Haz 3 reportes de cuerpo."
        ],
        moderado: [
            "Completa 10 tareas como tripulante.",
            "Sobrevive 5 rondas como tripulante.",
            "Vota correctamente 5 veces.",
            "Usa el chat de emergencia 5 veces.",
            "Revisa 20 cámaras de seguridad.",
            "Haz 5 kills como impostor.",
            "Sabotea 5 sistemas.",
            "Ventea 5 veces.",
            "Completa 5 rondas sin morir.",
            "Haz 5 reportes de cuerpo."
        ],
        medio: [
            "Completa 20 tareas como tripulante.",
            "Sobrevive 10 rondas como tripulante.",
            "Vota correctamente 10 veces.",
            "Usa el chat de emergencia 10 veces.",
            "Revisa 50 cámaras de seguridad.",
            "Haz 8 kills como impostor.",
            "Sabotea 10 sistemas.",
            "Ventea 10 veces.",
            "Completa 10 rondas sin morir.",
            "Haz 10 reportes de cuerpo."
        ],
        dificil: [
            "Completa 30 tareas como tripulante.",
            "Sobrevive 15 rondas como tripulante.",
            "Vota correctamente 15 veces.",
            "Usa el chat de emergencia 15 veces.",
            "Revisa 100 cámaras de seguridad.",
            "Haz 12 kills como impostor.",
            "Sabotea 20 sistemas.",
            "Ventea 20 veces.",
            "Completa 15 rondas sin morir.",
            "Haz 15 reportes de cuerpo."
        ],
        imposible: [
            "Completa 50 tareas como tripulante en una sola partida.",
            "Sobrevive 20 rondas como tripulante sin ser sospechado.",
            "Vota correctamente todas las rondas de una partida.",
            "Usa el chat de emergencia 20 veces en una partida.",
            "Revisa todas las cámaras de seguridad sin parar.",
            "Haz 15 kills como impostor sin ser votado.",
            "Sabotea 30 sistemas en una partida.",
            "Ventea 30 veces en una partida.",
            "Completa 20 rondas sin morir ni una vez.",
            "Haz 20 reportes de cuerpo en una partida."
        ]
    },
    musedash: {
        regalado: [
            "Completa una canción en dificultad Fácil.",
            "Haz 50 notas perfectas en una canción.",
            "Juega 3 canciones diferentes.",
            "Usa 1 personaje diferente.",
            "Haz 10 notas perfectas consecutivas.",
            "Completa una canción con más del 70% de precisión.",
            "Juega una canción en modo Normal.",
            "Haz 100 notas en total en una canción.",
            "Usa 1 habilidad de personaje.",
            "Completa una canción sin fallar más de 20 veces."
        ],
        facil: [
            "Completa una canción en dificultad Normal.",
            "Haz 100 notas perfectas en una canción.",
            "Juega 5 canciones diferentes.",
            "Usa 3 personajes diferentes.",
            "Haz 20 notas perfectas consecutivas.",
            "Completa una canción con más del 80% de precisión.",
            "Juega una canción en modo Difícil.",
            "Haz 200 notas en total en una canción.",
            "Usa 3 habilidades de personaje.",
            "Completa una canción sin fallar más de 10 veces."
        ],
        moderado: [
            "Completa una canción en dificultad Difícil.",
            "Haz 200 notas perfectas en una canción.",
            "Juega 10 canciones diferentes.",
            "Usa 5 personajes diferentes.",
            "Haz 50 notas perfectas consecutivas.",
            "Completa una canción con más del 90% de precisión.",
            "Juega una canción en modo Maestro.",
            "Haz 300 notas en total en una canción.",
            "Usa 5 habilidades de personaje.",
            "Completa una canción sin fallar más de 5 veces."
        ],
        medio: [
            "Completa una canción en dificultad Maestro.",
            "Haz 300 notas perfectas en una canción.",
            "Juega 20 canciones diferentes.",
            "Usa 8 personajes diferentes.",
            "Haz 100 notas perfectas consecutivas.",
            "Completa una canción con más del 95% de precisión.",
            "Juega una canción en modo Escondido.",
            "Haz 400 notas en total en una canción.",
            "Usa 8 habilidades de personaje.",
            "Completa una canción sin fallar más de 3 veces."
        ],
        dificil: [
            "Completa una canción en dificultad Escondido.",
            "Haz 400 notas perfectas en una canción.",
            "Juega 30 canciones diferentes.",
            "Usa todos los personajes del juego.",
            "Haz 200 notas perfectas consecutivas.",
            "Completa una canción con 100% de precisión.",
            "Juega una canción de más de 5 minutos en Maestro.",
            "Haz 500 notas en total en una canción.",
            "Usa todas las habilidades de personaje.",
            "Completa una canción sin fallar ni una vez."
        ],
        imposible: [
            "Completa una canción en dificultad Escondido con 100% de precisión.",
            "Haz 500 notas perfectas en una canción.",
            "Juega todas las canciones del juego.",
            "Usa todos los personajes en una sola sesión.",
            "Haz 300 notas perfectas consecutivas.",
            "Completa una canción de más de 7 minutos con 100% de precisión.",
            "Juega una canción en modo Escondido con los ojos cerrados.",
            "Haz 600 notas en total en una canción.",
            "Completa 10 canciones seguidas con 100% de precisión.",
            "Completa una canción de más de 10 minutos sin fallar ni una vez."
        ]
    },
    geometrydash: {
        regalado: [
            "Completa 1 nivel en modo Normal.",
            "Haz 10 saltos en un nivel.",
            "Muere 5 veces en un nivel.",
            "Juega 3 niveles diferentes.",
            "Consigue 1 moneda secreta.",
            "Usa 1 ícono diferente.",
            "Completa un nivel con menos de 10 intentos.",
            "Haz 50 saltos en total.",
            "Juega 5 minutos seguidos.",
            "Completa 1 nivel en modo Práctica."
        ],
        facil: [
            "Completa 3 niveles en modo Normal.",
            "Haz 50 saltos en un nivel.",
            "Muere 20 veces en un nivel.",
            "Juega 5 niveles diferentes.",
            "Consigue 3 monedas secretas.",
            "Usa 3 íconos diferentes.",
            "Completa un nivel con menos de 20 intentos.",
            "Haz 100 saltos en total.",
            "Juega 15 minutos seguidos.",
            "Completa 3 niveles en modo Práctica."
        ],
        moderado: [
            "Completa 5 niveles en modo Normal.",
            "Haz 100 saltos en un nivel.",
            "Muere 50 veces en un nivel.",
            "Juega 10 niveles diferentes.",
            "Consigue 5 monedas secretas.",
            "Usa 5 íconos diferentes.",
            "Completa un nivel con menos de 50 intentos.",
            "Haz 200 saltos en total.",
            "Juega 30 minutos seguidos.",
            "Completa 5 niveles en modo Práctica."
        ],
        medio: [
            "Completa 10 niveles en modo Normal.",
            "Haz 200 saltos en un nivel.",
            "Muere 100 veces en un nivel.",
            "Juega 20 niveles diferentes.",
            "Consigue 10 monedas secretas.",
            "Usa 10 íconos diferentes.",
            "Completa un nivel con menos de 100 intentos.",
            "Haz 500 saltos en total.",
            "Juega 1 hora seguida.",
            "Completa 10 niveles en modo Práctica."
        ],
        dificil: [
            "Completa 20 niveles en modo Normal.",
            "Haz 500 saltos en un nivel.",
            "Muere 200 veces en un nivel.",
            "Juega 30 niveles diferentes.",
            "Consigue 20 monedas secretas.",
            "Usa 20 íconos diferentes.",
            "Completa un nivel con menos de 200 intentos.",
            "Haz 1000 saltos en total.",
            "Juega 2 horas seguidas.",
            "Completa 20 niveles en modo Práctica."
        ],
        imposible: [
            "Completa 50 niveles en modo Normal.",
            "Haz 1000 saltos en un nivel.",
            "Muere 500 veces en un nivel.",
            "Juega todos los niveles del juego.",
            "Consigue todas las monedas secretas del juego.",
            "Usa todos los íconos del juego.",
            "Completa un nivel Demon con menos de 100 intentos.",
            "Haz 2000 saltos en total.",
            "Juega 5 horas seguidas sin parar.",
            "Completa un nivel Demon en tu primer intento."
        ]
    },
    castlecrashers: {
        regalado: [
            "Completa 1 nivel.",
            "Mata 10 enemigos.",
            "Recoge 5 monedas.",
            "Usa 1 habilidad especial.",
            "Juega 5 minutos.",
            "Haz 1 combo de 3 golpes.",
            "Recoge 1 arma.",
            "Sube 1 nivel de personaje.",
            "Haz 1 parry.",
            "Rescata 1 princesa."
        ],
        facil: [
            "Completa 3 niveles.",
            "Mata 50 enemigos.",
            "Recoge 20 monedas.",
            "Usa 3 habilidades especiales.",
            "Juega 15 minutos.",
            "Haz 1 combo de 5 golpes.",
            "Recoge 3 armas.",
            "Sube 3 niveles de personaje.",
            "Haz 3 parrys.",
            "Rescata 3 princesas."
        ],
        moderado: [
            "Completa 5 niveles.",
            "Mata 100 enemigos.",
            "Recoge 50 monedas.",
            "Usa 5 habilidades especiales.",
            "Juega 30 minutos.",
            "Haz 1 combo de 8 golpes.",
            "Recoge 5 armas.",
            "Sube 5 niveles de personaje.",
            "Haz 5 parrys.",
            "Rescata 5 princesas."
        ],
        medio: [
            "Completa 10 niveles.",
            "Mata 200 enemigos.",
            "Recoge 100 monedas.",
            "Usa 10 habilidades especiales.",
            "Juega 1 hora.",
            "Haz 1 combo de 10 golpes.",
            "Recoge 10 armas.",
            "Sube 10 niveles de personaje.",
            "Haz 10 parrys.",
            "Rescata todas las princesas."
        ],
        dificil: [
            "Completa 20 niveles.",
            "Mata 500 enemigos.",
            "Recoge 200 monedas.",
            "Usa 20 habilidades especiales.",
            "Juega 2 horas.",
            "Haz 1 combo de 15 golpes.",
            "Recoge 20 armas.",
            "Sube 20 niveles de personaje.",
            "Haz 20 parrys.",
            "Completa el juego en modo Insano."
        ],
        imposible: [
            "Completa todos los niveles del juego.",
            "Mata 1000 enemigos.",
            "Recoge 500 monedas.",
            "Usa todas las habilidades especiales del juego.",
            "Juega 5 horas seguidas.",
            "Haz 1 combo de 20 golpes.",
            "Recoge todas las armas del juego.",
            "Sube todos los niveles de personaje al máximo.",
            "Haz 50 parrys seguidos.",
            "Completa el juego en modo Insano sin morir ni una vez."
        ]
    },
    gtav: {
        regalado: [
            "Conduce 5 minutos sin chocar.",
            "Completa 1 misión de historia.",
            "Haz 1 atraco a una tienda.",
            "Consigue 1 estrella de búsqueda.",
            "Usa 1 truco.",
            "Juega 10 minutos en modo libre.",
            "Haz 1 stunt con un vehículo.",
            "Compra 1 propiedad.",
            "Haz 1 misión secundaria.",
            "Personaliza 1 vehículo."
        ],
        facil: [
            "Conduce 15 minutos sin chocar.",
            "Completa 3 misiones de historia.",
            "Haz 3 atracos a tiendas.",
            "Consigue 3 estrellas de búsqueda.",
            "Usa 3 trucos.",
            "Juega 30 minutos en modo libre.",
            "Haz 3 stunts con vehículos.",
            "Compra 3 propiedades.",
            "Haz 3 misiones secundarias.",
            "Personaliza 3 vehículos."
        ],
        moderado: [
            "Conduce 30 minutos sin chocar.",
            "Completa 5 misiones de historia.",
            "Haz 5 atracos a tiendas.",
            "Consigue 5 estrellas de búsqueda.",
            "Usa 5 trucos.",
            "Juega 1 hora en modo libre.",
            "Haz 5 stunts con vehículos.",
            "Compra 5 propiedades.",
            "Haz 5 misiones secundarias.",
            "Personaliza 5 vehículos."
        ],
        medio: [
            "Conduce 1 hora sin chocar.",
            "Completa 10 misiones de historia.",
            "Haz 10 atracos a tiendas.",
            "Consigue 5 estrellas de búsqueda y escapa.",
            "Usa 10 trucos.",
            "Juega 2 horas en modo libre.",
            "Haz 10 stunts con vehículos.",
            "Compra 10 propiedades.",
            "Haz 10 misiones secundarias.",
            "Personaliza 10 vehículos."
        ],
        dificil: [
            "Conduce 2 horas sin chocar.",
            "Completa 20 misiones de historia.",
            "Haz 20 atracos a tiendas.",
            "Consigue 5 estrellas de búsqueda y escapa sin morir.",
            "Usa 20 trucos.",
            "Juega 5 horas en modo libre.",
            "Haz 20 stunts con vehículos.",
            "Compra 20 propiedades.",
            "Haz 20 misiones secundarias.",
            "Personaliza 20 vehículos."
        ],
        imposible: [
            "Conduce 5 horas sin chocar ni una vez.",
            "Completa toda la historia principal sin morir.",
            "Haz 50 atracos a tiendas sin ser atrapado.",
            "Consigue 5 estrellas de búsqueda y escapa sin usar vehículos.",
            "Usa todos los trucos del juego en 10 minutos.",
            "Juega 10 horas seguidas en modo libre.",
            "Haz 50 stunts con vehículos sin fallar.",
            "Compra todas las propiedades del juego.",
            "Haz todas las misiones secundarias del juego.",
            "Completa el juego al 100% en menos de 24 horas."
        ]
    },
    hollowknight: {
        regalado: [
            "Mata 5 enemigos comunes.",
            "Recoge 50 geo.",
            "Descansa en 1 banco.",
            "Usa tu aguijón 20 veces.",
            "Explora 1 área nueva.",
            "Haz 1 cura con el Focus.",
            "Recoge 1 amuleto.",
            "Mata 1 enemigo con el Hechizo Vengeful Spirit.",
            "Sobrevive 1 minuto en una zona peligrosa.",
            "Haz 1 salto con el Mantis Claw."
        ],
        facil: [
            "Mata 20 enemigos comunes.",
            "Recoge 200 geo.",
            "Descansa en 3 bancos.",
            "Usa tu aguijón 100 veces.",
            "Explora 3 áreas nuevas.",
            "Haz 10 curas con el Focus.",
            "Recoge 3 amuletos.",
            "Mata 5 enemigos con el Hechizo Vengeful Spirit.",
            "Sobrevive 3 minutos en una zona peligrosa.",
            "Haz 10 saltos con el Mantis Claw."
        ],
        moderado: [
            "Mata 50 enemigos comunes.",
            "Recoge 500 geo.",
            "Descansa en 5 bancos.",
            "Usa tu aguijón 200 veces.",
            "Explora 5 áreas nuevas.",
            "Haz 20 curas con el Focus.",
            "Recoge 5 amuletos.",
            "Mata 10 enemigos con el Hechizo Vengeful Spirit.",
            "Sobrevive 5 minutos en una zona peligrosa.",
            "Haz 20 saltos con el Mantis Claw."
        ],
        medio: [
            "Mata 100 enemigos comunes.",
            "Recoge 1000 geo.",
            "Descansa en 10 bancos.",
            "Usa tu aguijón 500 veces.",
            "Explora 10 áreas nuevas.",
            "Haz 50 curas con el Focus.",
            "Recoge 10 amuletos.",
            "Mata 20 enemigos con el Hechizo Vengeful Spirit.",
            "Sobrevive 10 minutos en una zona peligrosa.",
            "Haz 50 saltos con el Mantis Claw."
        ],
        dificil: [
            "Mata 200 enemigos comunes.",
            "Recoge 2000 geo.",
            "Descansa en 20 bancos.",
            "Usa tu aguijón 1000 veces.",
            "Explora 20 áreas nuevas.",
            "Haz 100 curas con el Focus.",
            "Recoge 20 amuletos.",
            "Mata 50 enemigos con el Hechizo Vengeful Spirit.",
            "Sobrevive 15 minutos en una zona peligrosa.",
            "Haz 100 saltos con el Mantis Claw."
        ],
        imposible: [
            "Mata 500 enemigos comunes.",
            "Recoge 5000 geo.",
            "Descansa en todos los bancos del juego.",
            "Usa tu aguijón 5000 veces.",
            "Explora todas las áreas del juego.",
            "Haz 200 curas con el Focus.",
            "Recoge todos los amuletos del juego.",
            "Mata 100 enemigos con el Hechizo Vengeful Spirit.",
            "Sobrevive 30 minutos en una zona peligrosa sin morir.",
            "Completa el juego al 112% en menos de 20 horas."
        ]
    },
    silksong: {
        regalado: [
            "Mata 5 enemigos con tu aguja.",
            "Recoge 50 rosas.",
            "Descansa en 1 banco de seda.",
            "Usa tu habilidad de seda 10 veces.",
            "Explora 1 área nueva.",
            "Haz 1 cura con el tejido de seda.",
            "Recoge 1 herramienta de seda.",
            "Mata 1 enemigo con una habilidad de seda.",
            "Sobrevive 1 minuto en una zona peligrosa.",
            "Haz 1 salto con el gancho de seda."
        ],
        facil: [
            "Mata 20 enemigos con tu aguja.",
            "Recoge 200 rosas.",
            "Descansa en 3 bancos de seda.",
            "Usa tu habilidad de seda 50 veces.",
            "Explora 3 áreas nuevas.",
            "Haz 10 curas con el tejido de seda.",
            "Recoge 3 herramientas de seda.",
            "Mata 5 enemigos con una habilidad de seda.",
            "Sobrevive 3 minutos en una zona peligrosa.",
            "Haz 10 saltos con el gancho de seda."
        ],
        moderado: [
            "Mata 50 enemigos con tu aguja.",
            "Recoge 500 rosas.",
            "Descansa en 5 bancos de seda.",
            "Usa tu habilidad de seda 100 veces.",
            "Explora 5 áreas nuevas.",
            "Haz 20 curas con el tejido de seda.",
            "Recoge 5 herramientas de seda.",
            "Mata 10 enemigos con una habilidad de seda.",
            "Sobrevive 5 minutos en una zona peligrosa.",
            "Haz 20 saltos con el gancho de seda."
        ],
        medio: [
            "Mata 100 enemigos con tu aguja.",
            "Recoge 1000 rosas.",
            "Descansa en 10 bancos de seda.",
            "Usa tu habilidad de seda 200 veces.",
            "Explora 10 áreas nuevas.",
            "Haz 50 curas con el tejido de seda.",
            "Recoge 10 herramientas de seda.",
            "Mata 20 enemigos con una habilidad de seda.",
            "Sobrevive 10 minutos en una zona peligrosa.",
            "Haz 50 saltos con el gancho de seda."
        ],
        dificil: [
            "Mata 200 enemigos con tu aguja.",
            "Recoge 2000 rosas.",
            "Descansa en 20 bancos de seda.",
            "Usa tu habilidad de seda 500 veces.",
            "Explora 20 áreas nuevas.",
            "Haz 100 curas con el tejido de seda.",
            "Recoge 20 herramientas de seda.",
            "Mata 50 enemigos con una habilidad de seda.",
            "Sobrevive 15 minutos en una zona peligrosa.",
            "Haz 100 saltos con el gancho de seda."
        ],
        imposible: [
            "Mata 500 enemigos con tu aguja.",
            "Recoge 5000 rosas.",
            "Descansa en todos los bancos de seda del juego.",
            "Usa tu habilidad de seda 1000 veces.",
            "Explora todas las áreas del juego.",
            "Haz 200 curas con el tejido de seda.",
            "Recoge todas las herramientas de seda del juego.",
            "Mata 100 enemigos con una habilidad de seda.",
            "Sobrevive 30 minutos en una zona peligrosa sin morir.",
            "Completa el juego al 100% en menos de 15 horas."
        ]
    },
    cuphead: {
        regalado: [
            "Equipa un arma nueva.",
            "Mata 5 enemigos comunes.",
            "Recoge 3 monedas.",
            "Usa tu parry 5 veces.",
            "Haz 1 super art.",
            "Completa 1 jefe en Simple.",
            "Sobrevive 30 segundos en un nivel.",
            "Recoge 1 corazón extra.",
            "Haz 1 dash sin ser golpeado."
        ],
        facil: [
            "Completa 1 nivel de plataformas.",
            "Mata 20 enemigos comunes.",
            "Recoge 10 monedas.",
            "Usa tu parry 20 veces.",
            "Haz 3 super arts.",
            "Completa 3 jefes en Simple.",
            "Sobrevive 1 minuto en un nivel.",
            "Recoge 3 corazones extra.",
            "Usa 3 armas diferentes.",
            "Haz 10 dashs sin ser golpeado."
        ],
        moderado: [
            "Completa 5 niveles de plataformas.",
            "Mata 50 enemigos comunes.",
            "Recoge 20 monedas.",
            "Usa tu parry 50 veces.",
            "Haz 5 super arts.",
            "Completa 5 jefes en Regular.",
            "Sobrevive 2 minutos en un nivel.",
            "Recoge 5 corazones extra.",
            "Usa 5 armas diferentes.",
            "Haz 20 dashs sin ser golpeado."
        ],
        medio: [
            "Completa 10 niveles de plataformas.",
            "Mata 100 enemigos comunes.",
            "Recoge 50 monedas.",
            "Usa tu parry 100 veces.",
            "Haz 10 super arts.",
            "Completa 10 jefes en Regular.",
            "Sobrevive 3 minutos en un nivel.",
            "Recoge 10 corazones extra.",
            "Usa 8 armas diferentes.",
            "Haz 50 dashs sin ser golpeado."
        ],
        dificil: [
            "Completa 15 niveles de plataformas.",
            "Mata 200 enemigos comunes.",
            "Recoge 100 monedas.",
            "Usa tu parry 200 veces.",
            "Haz 20 super arts.",
            "Completa 15 jefes en Erect.",
            "Sobrevive 5 minutos en un nivel.",
            "Recoge 15 corazones extra.",
            "Usa todas las armas del juego.",
            "Haz 100 dashs sin ser golpeado."
        ],
        imposible: [
            "Completa todos los niveles de plataformas sin morir.",
            "Mata 500 enemigos comunes sin ser golpeado.",
            "Recoge todas las monedas del juego.",
            "Usa tu parry 500 veces.",
            "Haz 50 super arts en una sola partida.",
            "Completa todos los jefes en Erect sin recibir daño.",
            "Sobrevive 10 minutos en un nivel sin morir.",
            "Recoge todos los corazones extra del juego.",
            "Usa todas las armas en una sola partida.",
            "Completa todo el juego en Erect sin morir ni una vez."
        ]
    },
    notmyneighbor: {
        regalado: [
            "Revisa 3 identificaciones.",
            "Deja pasar 1 vecino correcto.",
            "Rechaza 1 impostor.",
            "Usa el teléfono 1 vez.",
            "Revisa 1 lista de residentes.",
            "Haz 1 llamada de emergencia.",
            "Revisa 1 paquete.",
            "Usa 1 herramienta de revisión.",
            "Completa 1 día de trabajo.",
            "Haz 1 anotación en el cuaderno."
        ],
        facil: [
            "Revisa 10 identificaciones.",
            "Deja pasar 5 vecinos correctos.",
            "Rechaza 3 impostores.",
            "Usa el teléfono 5 veces.",
            "Revisa 5 listas de residentes.",
            "Haz 3 llamadas de emergencia.",
            "Revisa 5 paquetes.",
            "Usa 3 herramientas de revisión.",
            "Completa 3 días de trabajo.",
            "Haz 5 anotaciones en el cuaderno."
        ],
        moderado: [
            "Revisa 20 identificaciones.",
            "Deja pasar 10 vecinos correctos.",
            "Rechaza 5 impostores.",
            "Usa el teléfono 10 veces.",
            "Revisa 10 listas de residentes.",
            "Haz 5 llamadas de emergencia.",
            "Revisa 10 paquetes.",
            "Usa 5 herramientas de revisión.",
            "Completa 5 días de trabajo.",
            "Haz 10 anotaciones en el cuaderno."
        ],
        medio: [
            "Revisa 50 identificaciones.",
            "Deja pasar 20 vecinos correctos.",
            "Rechaza 10 impostores.",
            "Usa el teléfono 20 veces.",
            "Revisa 20 listas de residentes.",
            "Haz 10 llamadas de emergencia.",
            "Revisa 20 paquetes.",
            "Usa 8 herramientas de revisión.",
            "Completa 10 días de trabajo.",
            "Haz 20 anotaciones en el cuaderno."
        ],
        dificil: [
            "Revisa 100 identificaciones.",
            "Deja pasar 50 vecinos correctos.",
            "Rechaza 20 impostores.",
            "Usa el teléfono 50 veces.",
            "Revisa 50 listas de residentes.",
            "Haz 20 llamadas de emergencia.",
            "Revisa 50 paquetes.",
            "Usa todas las herramientas de revisión.",
            "Completa 20 días de trabajo.",
            "Haz 50 anotaciones en el cuaderno."
        ],
        imposible: [
            "Revisa 200 identificaciones sin equivocarte.",
            "Deja pasar 100 vecinos correctos sin rechazar ninguno.",
            "Rechaza 50 impostores sin dejar pasar ninguno.",
            "Usa el teléfono 100 veces.",
            "Revisa 100 listas de residentes sin errores.",
            "Haz 50 llamadas de emergencia.",
            "Revisa 100 paquetes sin equivocarte.",
            "Usa todas las herramientas de revisión en 1 minuto.",
            "Completa 30 días de trabajo sin equivocarte ni una vez.",
            "Haz 100 anotaciones en el cuaderno sin errores."
        ]
    }
};

const gameNames = {
    minecraft: "Minecraft",
    fortnite: "Fortnite",
    brawlstars: "Brawl Stars",
    fnf: "Friday Night Funkin'",
    overwatch: "Overwatch",
    clashroyale: "Clash Royale",
    rocketleague: "Rocket League",
    cyberpunk: "Cyberpunk 2077",
    roblox: "Roblox",
    amongus: "Among Us",
    musedash: "Muse Dash",
    geometrydash: "Geometry Dash",
    castlecrashers: "Castle Crashers",
    gtav: "GTA V",
    hollowknight: "Hollow Knight",
    silksong: "Hollow Knight Silksong",
    cuphead: "Cuphead",
    notmyneighbor: "That's Not My Neighbor"
};

let selectedGames = [];
let selectedDiffs = [];
let players = [];
let assignMode = 'random'; // 'random' | 'all'
let history = [];
let isGenerating = false;

const diffLabels = {
    regalado: 'Regalado',
    facil: 'Fácil',
    moderado: 'Moderado',
    medio: 'Medio',
    dificil: 'Difícil',
    imposible: 'Imposible'
};

const modeDescriptions = {
    random: 'El reto se asignará a un jugador elegido al azar.',
    all: 'El mismo reto será para todos los jugadores registrados.'
};

// ===================== JUGADORES =====================
function renderPlayers() {
    const list = document.getElementById('players-list');
    list.innerHTML = '';
    players.forEach((name, i) => {
        const chip = document.createElement('div');
        chip.className = 'player-chip';
        chip.innerHTML = `<span>${escapeHtml(name)}</span><button class="remove-player" data-index="${i}">&times;</button>`;
        list.appendChild(chip);
    });
    document.querySelectorAll('.remove-player').forEach(btn => {
        btn.addEventListener('click', () => {
            players.splice(parseInt(btn.dataset.index), 1);
            renderPlayers();
        });
    });
}

function addPlayer() {
    const input = document.getElementById('player-input');
    const name = input.value.trim();
    if (!name) return;
    if (players.includes(name)) {
        input.value = '';
        return;
    }
    if (players.length >= 20) {
        alert('Máximo 20 jugadores');
        return;
    }
    players.push(name);
    input.value = '';
    renderPlayers();
}

document.getElementById('add-player-btn').addEventListener('click', addPlayer);
document.getElementById('player-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') addPlayer();
});

// ===================== MODO DE ASIGNACIÓN =====================
document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        assignMode = btn.dataset.mode;
        document.getElementById('mode-desc').textContent = modeDescriptions[assignMode];
    });
});

// ===================== JUEGOS & DIFICULTAD =====================
document.querySelectorAll('.game-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const game = btn.dataset.game;
        if (selectedGames.includes(game)) {
            selectedGames = selectedGames.filter(g => g !== game);
            btn.classList.remove('active');
        } else {
            selectedGames.push(game);
            btn.classList.add('active');
        }
        updateBadge();
    });
});

document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const diff = btn.dataset.diff;
        if (selectedDiffs.includes(diff)) {
            selectedDiffs = selectedDiffs.filter(d => d !== diff);
            btn.classList.remove('active');
        } else {
            selectedDiffs.push(diff);
            btn.classList.add('active');
        }
        updateBadge();
    });
});

function updateBadge() {
    const badge = document.getElementById('count-badge');
    if (selectedGames.length === 0 && selectedDiffs.length === 0) {
        badge.textContent = 'Selecciona al menos un juego y una dificultad';
        badge.classList.remove('ready');
    } else if (selectedGames.length === 0) {
        badge.textContent = 'Selecciona al menos un juego';
        badge.classList.remove('ready');
    } else if (selectedDiffs.length === 0) {
        badge.textContent = 'Selecciona al menos una dificultad';
        badge.classList.remove('ready');
    } else {
        const total = selectedGames.reduce((sum, g) => sum + selectedDiffs.reduce((s, d) => s + (challenges[g]?.[d]?.length || 0), 0), 0);
        badge.textContent = `${selectedGames.length} juego(s) · ${selectedDiffs.length} dificultad(es) · ${total} retos disponibles`;
        badge.classList.add('ready');
    }
}

// ===================== UTILIDADES =====================
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function getPool() {
    const pool = [];
    selectedGames.forEach(game => {
        selectedDiffs.forEach(diff => {
            const list = challenges[game]?.[diff] || [];
            list.forEach(text => {
                pool.push({ game, diff, text });
            });
        });
    });
    return pool;
}

function addToHistory(entry) {
    history.unshift(entry);
    if (history.length > 20) history.pop();
    renderHistory();
}

function renderHistory() {
    const section = document.getElementById('history-section');
    const list = document.getElementById('history-list');
    if (history.length === 0) {
        section.style.display = 'none';
        return;
    }
    section.style.display = 'block';
    list.innerHTML = '';
    history.forEach((h, i) => {
        const item = document.createElement('div');
        item.className = 'history-item';
        const time = new Date(h.timestamp).toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' });
        item.innerHTML = `
            <div class="h-text"><strong>${escapeHtml(h.game)}</strong> · ${escapeHtml(h.diff)}<br>${escapeHtml(h.text)}</div>
            <div class="h-meta">${time}</div>
        `;
        list.appendChild(item);
    });
}

document.getElementById('clear-history-btn').addEventListener('click', () => {
    history = [];
    renderHistory();
});

function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        btn.textContent = '✅ Copiado';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = '📋 Copiar';
            btn.classList.remove('copied');
        }, 1500);
    }).catch(() => {
        btn.textContent = '❌ Error';
        setTimeout(() => {
            btn.textContent = '📋 Copiar';
            btn.classList.remove('copied');
        }, 1500);
    });
}

// ===================== GENERAR RETO =====================
document.getElementById('generate-btn').addEventListener('click', () => {
    if (isGenerating) return;
    if (selectedGames.length === 0 || selectedDiffs.length === 0) {
        alert('Selecciona al menos un juego y una dificultad');
        return;
    }

    const pool = getPool();
    if (pool.length === 0) {
        alert('No hay retos disponibles para esa combinación');
        return;
    }

    isGenerating = true;
    const btn = document.getElementById('generate-btn');
    btn.disabled = true;
    btn.textContent = '⚡ Sorteando...';

    const container = document.getElementById('challenges-container');
    container.innerHTML = '';

    // Animación de shuffle
    const shuffleCard = document.createElement('div');
    shuffleCard.className = 'challenge-card shuffling';
    shuffleCard.innerHTML = `
        <div class="challenge-header">
            <span class="challenge-game">???</span>
            <span class="challenge-diff" style="background:rgba(124,58,237,0.15);color:#c4b5fd;">???</span>
        </div>
        <div class="challenge-text" style="text-align:center;font-style:italic;color:var(--text-secondary);">Sorteando reto...</div>
    `;
    container.appendChild(shuffleCard);

    let shuffleCount = 0;
    const maxShuffles = 12;
    const interval = setInterval(() => {
        const randomC = pool[Math.floor(Math.random() * pool.length)];
        shuffleCard.querySelector('.challenge-game').textContent = gameNames[randomC.game];
        shuffleCard.querySelector('.challenge-diff').textContent = diffLabels[randomC.diff];
        shuffleCard.querySelector('.challenge-text').textContent = randomC.text;
        shuffleCount++;
        if (shuffleCount >= maxShuffles) {
            clearInterval(interval);
            showFinalResult(pool, container, btn);
        }
    }, 80);
});

function showFinalResult(pool, container, btn) {
    const final = pool[Math.floor(Math.random() * pool.length)];

    container.innerHTML = '';

    if (assignMode === 'all' && players.length > 0) {
        // Un reto para todos
        const card = createChallengeCard(final, null, true);
        container.appendChild(card);
        addToHistory({ ...final, timestamp: Date.now() });
    } else if (assignMode === 'random' && players.length > 0) {
        // Un reto para un jugador al azar
        const player = players[Math.floor(Math.random() * players.length)];
        const card = createChallengeCard(final, player, false);
        container.appendChild(card);
        addToHistory({ ...final, timestamp: Date.now(), assignee: player });
    } else {
        // Sin jugadores: solo el reto
        const card = createChallengeCard(final, null, false);
        container.appendChild(card);
        addToHistory({ ...final, timestamp: Date.now() });
    }

    // Botón limpiar
    const clearBtn = document.createElement('button');
    clearBtn.className = 'clear-btn';
    clearBtn.textContent = '🗑️ Limpiar resultado';
    clearBtn.onclick = () => {
        container.innerHTML = '<div class="empty-state">Tus retos aparecerán aquí</div>';
    };
    container.appendChild(clearBtn);

    btn.disabled = false;
    btn.textContent = '⚡ Generar Retos';
    isGenerating = false;
}

function createChallengeCard(c, assignee, isAll) {
    const card = document.createElement('div');
    card.className = 'challenge-card';
    card.style.animation = 'fadeIn 0.5s ease';

    let assigneeHtml = '';
    if (isAll && players.length > 0) {
        const names = players.map(p => escapeHtml(p)).join(', ');
        assigneeHtml = `<div class="challenge-assignee all-players">👥 Todos deben hacerlo: ${names}</div>`;
    } else if (assignee) {
        assigneeHtml = `<div class="challenge-assignee">🎯 Reto para: <strong>${escapeHtml(assignee)}</strong></div>`;
    }

    card.innerHTML = `
        <div class="challenge-header">
            <span class="challenge-game">${gameNames[c.game]}</span>
            <span class="challenge-diff ${c.diff}">${diffLabels[c.diff]}</span>
        </div>
        <div class="challenge-text">${escapeHtml(c.text)}</div>
        ${assigneeHtml}
        <div class="challenge-actions">
            <button class="action-btn copy-btn">📋 Copiar</button>
        </div>
    `;

    const copyBtn = card.querySelector('.copy-btn');
    const copyText = assignee 
        ? `Reto para ${assignee} en ${gameNames[c.game]} [${diffLabels[c.diff]}]: ${c.text}`
        : `Reto en ${gameNames[c.game]} [${diffLabels[c.diff]}]: ${c.text}`;
    copyBtn.addEventListener('click', () => copyToClipboard(copyText, copyBtn));

    return card;
}

// Inicializar
updateBadge();

// ===================== CRONÓMETRO =====================
let timerInterval = null;
let timerMode = 'stopwatch'; // 'stopwatch' | 'countdown'
let timerState = 'stopped'; // 'stopped' | 'running' | 'paused'
let timerElapsedMs = 0;
let timerTotalMs = 0;
let timerStartTime = 0;
let timerPausedMs = 0;

const timerDisplay = document.getElementById('timer-display');
const timerStartBtn = document.getElementById('timer-start');
const timerPauseBtn = document.getElementById('timer-pause');
const timerResetBtn = document.getElementById('timer-reset');
const timerPresets = document.getElementById('timer-presets');
const timerCustom = document.getElementById('timer-custom-input');

function formatTimeMs(totalMs) {
    const totalSeconds = Math.floor(totalMs / 1000);
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    const ms = totalMs % 1000;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(ms).padStart(3, '0')}`;
}

function updateTimerDisplay() {
    if (timerMode === 'countdown') {
        const remaining = Math.max(0, timerTotalMs - timerElapsedMs);
        timerDisplay.textContent = formatTimeMs(remaining);
        timerDisplay.classList.remove('warning', 'danger', 'finished');
        if (remaining === 0 && timerState !== 'stopped') {
            timerDisplay.classList.add('finished');
        } else if (remaining <= 10000 && remaining > 0) {
            timerDisplay.classList.add('danger');
        } else if (remaining <= 60000 && remaining > 10000) {
            timerDisplay.classList.add('warning');
        }
    } else {
        timerDisplay.textContent = formatTimeMs(timerElapsedMs);
        timerDisplay.classList.remove('warning', 'danger', 'finished');
    }
}

function tick() {
    if (timerState !== 'running') return;
    timerElapsedMs = Date.now() - timerStartTime;

    if (timerMode === 'countdown') {
        if (timerElapsedMs >= timerTotalMs) {
            timerElapsedMs = timerTotalMs;
            updateTimerDisplay();
            stopTimer();
            timerDisplay.classList.add('finished');
            return;
        }
    }
    updateTimerDisplay();
}

function startTimer() {
    if (timerState === 'running') return;

    if (timerMode === 'countdown' && timerTotalMs === 0) {
        alert('Selecciona un tiempo para la cuenta regresiva');
        return;
    }

    if (timerState === 'paused') {
        timerStartTime = Date.now() - timerElapsedMs;
    } else {
        timerStartTime = Date.now();
        timerElapsedMs = 0;
    }

    timerState = 'running';
    timerInterval = setInterval(tick, 50);

    timerStartBtn.disabled = true;
    timerPauseBtn.disabled = false;
    timerResetBtn.disabled = false;
}

function pauseTimer() {
    if (timerState !== 'running') return;
    timerState = 'paused';
    clearInterval(timerInterval);
    timerStartBtn.disabled = false;
    timerPauseBtn.disabled = true;
}

function resetTimer() {
    timerState = 'stopped';
    clearInterval(timerInterval);
    timerElapsedMs = 0;
    timerStartTime = 0;
    timerPausedMs = 0;

    if (timerMode === 'countdown') {
        timerDisplay.textContent = formatTimeMs(timerTotalMs);
    } else {
        timerDisplay.textContent = '00:00.000';
    }

    timerDisplay.classList.remove('warning', 'danger', 'finished');
    timerStartBtn.disabled = false;
    timerPauseBtn.disabled = true;
    timerResetBtn.disabled = false;
}

function stopTimer() {
    timerState = 'stopped';
    clearInterval(timerInterval);
    timerStartBtn.disabled = false;
    timerPauseBtn.disabled = true;
}

// Eventos de botones del cronómetro
timerStartBtn.addEventListener('click', startTimer);
timerPauseBtn.addEventListener('click', pauseTimer);
timerResetBtn.addEventListener('click', resetTimer);

// Cambio de modo
document.querySelectorAll('.timer-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.timer-mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        timerMode = btn.dataset.timerMode;
        resetTimer();

        if (timerMode === 'countdown') {
            timerPresets.style.display = 'flex';
            timerCustom.style.display = 'flex';
        } else {
            timerPresets.style.display = 'none';
            timerCustom.style.display = 'none';
        }
    });
});

// Presets
document.querySelectorAll('.preset-btn[data-seconds]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.preset-btn[data-seconds]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        timerTotalMs = parseInt(btn.dataset.seconds) * 1000;
        resetTimer();
        timerDisplay.textContent = formatTimeMs(timerTotalMs);
    });
});

// Custom time
document.getElementById('custom-set').addEventListener('click', () => {
    const min = parseInt(document.getElementById('custom-min').value) || 0;
    const sec = parseInt(document.getElementById('custom-sec').value) || 0;
    timerTotalMs = (min * 60 + sec) * 1000;
    if (timerTotalMs > 0) {
        document.querySelectorAll('.preset-btn[data-seconds]').forEach(b => b.classList.remove('active'));
        resetTimer();
        timerDisplay.textContent = formatTimeMs(timerTotalMs);
    }
});

// Inicializar display
timerDisplay.textContent = '00:00.000';
