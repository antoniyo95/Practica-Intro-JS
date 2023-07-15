const { crearTablero } = require('./tableros.js');
const { crearBarcos } = require('./barcos.js');
const { colocarBarcos } = require('./colocarBarcos.js');
const { realizarDisparo } = require('./disparo.js');

const todosLosBarcosHundidos = (jugador) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (jugador.tableroJugador[i][j] !== "" && jugador.tableroJugador[i][j] !== "💥") {
        return false;
      }
    }
  }
  return true;
};

const jugarHundirFlota = () => {
  const tableroJugador1 = crearTablero();
  const tableroEnemigoJugador1 = crearTablero();
  const tableroJugador2 = crearTablero();
  const tableroEnemigoJugador2 = crearTablero();

  const jugador1 = {
    nombre: "Jugador 1",
    tableroJugador: tableroJugador1,
    tableroEnemigo: tableroEnemigoJugador1,
    disparosTotales: 100,
  };

  const jugador2 = {
    nombre: "Jugador 2",
    tableroJugador: tableroJugador2,
    tableroEnemigo: tableroEnemigoJugador2,
    disparosTotales: 100,
  };

  const barcos = crearBarcos();

  colocarBarcos(jugador1.tableroJugador, barcos);
  colocarBarcos(jugador2.tableroJugador, barcos);

  console.log("#####################################################");
  console.log("¡SE PRESENTAN LOS TABLEROS DE LOS JUGADORES!");
  console.log("#####################################################");

  console.log("Tablero Jugador 1:");
  console.table(jugador1.tableroJugador);

  console.log("Tablero Jugador 2:");
  console.table(jugador2.tableroJugador);

  console.log("#####################################################");
  console.log("¡COMIENZA LA FASE DE DISPAROS!");
  console.log("#####################################################");

  let round = 1;
  let jugadorActual = jugador1;

  while (
    jugador1.disparosTotales > 0 &&
    jugador2.disparosTotales > 0 &&
    jugadorActual.disparosTotales > 0
  ) {
    let oponente;
    if (jugadorActual === jugador1) {
      oponente = jugador2;
    } else {
      oponente = jugador1;
    }

    realizarDisparo(jugadorActual, oponente, round);

    if (todosLosBarcosHundidos(oponente)) {
      break;
    }

    round++;
    if (jugadorActual === jugador1) {
      jugadorActual = jugador2;
    } else {
      jugadorActual = jugador1;
    }
  }

  if (todosLosBarcosHundidos(jugador1)) {
    console.log("#####################################################");
    console.log("¡El jugador 2 ha hundido todos los barcos y ha ganado!");
    console.log("#####################################################");
    console.log("ESTADO FINAL DE LOS TABLEROS DE LOS JUGADORES");
    console.log("---------------------------------------------");
    console.log("Tablero Jugador 1:");
    console.table(jugador1.tableroJugador);
    console.log("Tablero Jugador 2:");
    console.table(jugador2.tableroJugador);
  } else if (todosLosBarcosHundidos(jugador2)) {
    console.log("#####################################################");
    console.log("¡El jugador 1 ha hundido todos los barcos y ha ganado!");
    console.log("#####################################################");
    console.log("ESTADO FINAL DE LOS TABLEROS DE LOS JUGADORES");
    console.log("---------------------------------------------");
    console.log("Tablero Jugador 1:");
    console.table(jugador1.tableroJugador);
    console.log("Tablero Jugador 2:");
    console.table(jugador2.tableroJugador);
  } else {
    console.log("#####################################################");
    console.log("Ambos jugadores han agotado sus disparos. ¡Es un empate!");
    console.log("#####################################################");
    console.log("ESTADO FINAL DE LOS TABLEROS DE LOS JUGADORES");
    console.log("---------------------------------------------");
    console.log("Tablero Jugador 1:");
    console.table(jugador1.tableroJugador);
    console.log("Tablero Jugador 2:");
    console.table(jugador2.tableroJugador);
  }
};

jugarHundirFlota();
