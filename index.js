// Tableros
const tableroJugador1 = [];
const tableroEnemigoJugador1 = [];
const tableroJugador2 = [];
const tableroEnemigoJugador2 = [];

// Creación del tablero propio para jugador 1
for (let i = 0; i < 10; i++) {
  tableroJugador1[i] = [];
  for (let j = 0; j < 10; j++) {
    tableroJugador1[i][j] = "";
  }
}

// Creación del tablero enemigo para jugador 1
for (let i = 0; i < 10; i++) {
  tableroEnemigoJugador1[i] = [];
  for (let j = 0; j < 10; j++) {
    tableroEnemigoJugador1[i][j] = "";
  }
}

// Creación del tablero propio para jugador 2
for (let i = 0; i < 10; i++) {
  tableroJugador2[i] = [];
  for (let j = 0; j < 10; j++) {
    tableroJugador2[i][j] = "";
  }
}

// Creación del tablero enemigo para jugador 2
for (let i = 0; i < 10; i++) {
  tableroEnemigoJugador2[i] = [];
  for (let j = 0; j < 10; j++) {
    tableroEnemigoJugador2[i][j] = "";
  }
}

// Creación de los jugadores
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

// Función para colocar barcos aleatoriamente en el tablero
const colocarBarcos = (tablero, barcos) => {
  for (const barco of barcos) {
    let posicionValida = false;
    while (!posicionValida) {
      const fila = Math.floor(Math.random() * 10);
      const columna = Math.floor(Math.random() * 10);
      let direccion = Math.floor(Math.random() * 2);

      // Comprueba si la dirección es posible
      if (direccion === 0) {
        if (columna + barco.longitud <= 10) {
          posicionValida = true;
          for (let i = 0; i < barco.longitud; i++) {
            if (tablero[fila][columna + i] !== "") {
              posicionValida = false;
              break;
            }
          }
          if (posicionValida) {
            for (let i = 0; i < barco.longitud; i++) {
              tablero[fila][columna + i] = barco.nombre;
            }
          }
        }
      } else {
        if (fila + barco.longitud <= 10) {
          posicionValida = true;
          for (let i = 0; i < barco.longitud; i++) {
            if (tablero[fila + i][columna] !== "") {
              posicionValida = false;
              break;
            }
          }
          if (posicionValida) {
            for (let i = 0; i < barco.longitud; i++) {
              tablero[fila + i][columna] = barco.nombre;
            }
          }
        }
      }
      if (!posicionValida) {
        posicionValida = false;
      }
    }
  }
};

// Función de disparo restando disparosTotales por cada disparo y recompensando al jugador que podrá volver a disparar si es "Tocado"
const disparo = (jugadorAtacante, jugadorDefensor) => {
  let disparoValido = false;
  let fila, columna;

  while (!disparoValido) {
    fila = Math.floor(Math.random() * 10);
    columna = Math.floor(Math.random() * 10);

    // Comprueba si la posición ya ha sido disparada
    if (
      jugadorDefensor.tableroEnemigo[fila][columna] !== "💥" &&
      jugadorDefensor.tableroEnemigo[fila][columna] !== "💧"
    ) {
      disparoValido = true;

      // Comprueba si hay un barco en el lugar
      if (jugadorDefensor.tableroJugador[fila][columna] !== "") {
        jugadorDefensor.tableroJugador[fila][columna] = "💥";
        jugadorDefensor.tableroEnemigo[fila][columna] = "💥";
        jugadorAtacante.disparosTotales--;
        console.log("#####################################################");
        console.log(`Ronda ${round}: ${jugadorAtacante.nombre} disparó en la posición (${fila}, ${columna})`);
        console.log(`Disparos restantes de ${jugadorAtacante.nombre}: ${jugadorAtacante.disparosTotales}`);
        console.log("---------------------------------------------");
        console.log(`Tablero del Jugador: ${jugadorAtacante.nombre}`);
        console.table(jugadorAtacante.tableroJugador);
        console.log(`Tablero del Enemigo: ${jugadorDefensor.nombre}`);
        console.table(jugadorDefensor.tableroEnemigo);
        console.log("---------------------------------------------");
        console.log("El resultado es: ¡Tocado!");
        console.log("---------------------------------------------");
      } else {
        jugadorDefensor.tableroEnemigo[fila][columna] = "💧";
        jugadorAtacante.disparosTotales--;
        console.log("#####################################################");
        console.log(`Ronda ${round}: ${jugadorAtacante.nombre} disparó en la posición (${fila}, ${columna})`);
        console.log(`Disparos restantes de ${jugadorAtacante.nombre}: ${jugadorAtacante.disparosTotales}`);
        console.log("---------------------------------------------");
        console.log(`Tablero del Jugador: ${jugadorAtacante.nombre}`);
        console.table(jugadorAtacante.tableroJugador);
        console.log(`Tablero del Enemigo: ${jugadorDefensor.nombre}`);
        console.table(jugadorDefensor.tableroEnemigo);
        console.log("---------------------------------------------");
        console.log("El resultado es: ¡Agua!");
        console.log("---------------------------------------------");
      }
    }
  }
};

// Función para verificar si todos los barcos han sido hundidos
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

// Creación de los Barcos
const barcos = [
  { nombre: "🚢", longitud: 5, vida: 5 },
  { nombre: "🚋", longitud: 4, vida: 4 },
  { nombre: "🚃", longitud: 3, vida: 3 },
  { nombre: "🚃", longitud: 3, vida: 3 },
  { nombre: "⛵", longitud: 2, vida: 2 },
  { nombre: "⛵", longitud: 2, vida: 2 },
  { nombre: "⛵", longitud: 2, vida: 2 },
  { nombre: "🚤", longitud: 1, vida: 1 },
  { nombre: "🚤", longitud: 1, vida: 1 },
  { nombre: "🚤", longitud: 1, vida: 1 },
];

// Colocar barcos en los tableros de los jugadores
colocarBarcos(jugador1.tableroJugador, barcos);
colocarBarcos(jugador2.tableroJugador, barcos);

// Se imprimen los tableros de ambos jugadores
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

// Fase de disparos de ambos jugadores
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

  disparo(jugadorActual, oponente);

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
  console.log("ESTADO FINAL DE LOS TABLEROS DE LOS JUGADORES")
  console.log("---------------------------------------------");
  console.log("Tablero Jugador 1:");
  console.table(jugador1.tableroJugador);
  console.log("Tablero Jugador 2:");
  console.table(jugador2.tableroJugador);
} else if (todosLosBarcosHundidos(jugador2)) {
  console.log("#####################################################");
  console.log("¡El jugador 1 ha hundido todos los barcos y ha ganado!");
  console.log("#####################################################");
  console.log("ESTADO FINAL DE LOS TABLEROS DE LOS JUGADORES")
  console.log("---------------------------------------------");
  console.log("Tablero Jugador 1:");
  console.table(jugador1.tableroJugador);
  console.log("Tablero Jugador 2:");
  console.table(jugador2.tableroJugador);
} else {
  console.log("#####################################################");
  console.log("Ambos jugadores han agotado sus disparos. ¡Es un empate!");
  console.log("#####################################################");
  console.log("ESTADO FINAL DE LOS TABLEROS DE LOS JUGADORES")
  console.log("---------------------------------------------");
  console.log("Tablero Jugador 1:");
  console.table(jugador1.tableroJugador);
  console.log("Tablero Jugador 2:");
  console.table(jugador2.tableroJugador);
}
