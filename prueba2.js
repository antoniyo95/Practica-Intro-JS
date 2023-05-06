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
    tableroJugador: tableroJugador1,
    tableroEnemigo: tableroEnemigoJugador1,
    disparosTotales: 100
};

const jugador2 = {
    tableroJugador: tableroJugador2,
    tableroEnemigo: tableroEnemigoJugador2,
    disparosTotales: 100
};

// Función para colocar barcos aleatoriamente en el tablero
const colocarBarcos = (tablero, barcos) => {
    for (const barco of barcos) {
      let posicionValida = false;
      while (!posicionValida) {
        const fila = Math.floor(Math.random() * 10);
        const columna = Math.floor(Math.random() * 10);
        let direccion = Math.floor(Math.random() * 2);
    
        // Comprueba si la dirección es posiblee
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
    const fila = Math.floor(Math.random() * 10);
    const columna = Math.floor(Math.random() * 10);

    // Comprueba si hay un barco en el lugar
    if (jugadorDefensor.tableroJugador[fila][columna] !== "") {
        jugadorDefensor.tableroJugador[fila][columna] = "💥";
        jugadorAtacante.disparosTotales--;
        console.log("¡Tocado!");
      } else  {
        jugadorDefensor.tableroJugador[fila][columna] == ""
        jugadorDefensor.tableroJugador[fila][columna] = "💧";
        jugadorAtacante.disparosTotales--;
        console.log("¡Agua!");
    }
};

  // Creación de los Barcos
const barcos = [
    { nombre: "🚢", longitud: 5, vida: 5 },
    { nombre: "🚋", longitud: 4, vida: 4},
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
console.log("Tablero Jugador 1:");
console.table(jugador1.tableroJugador);
  
console.log("Tablero Jugador 2:");
console.table(jugador2.tableroJugador);

// Fase de disparos de ambos jugadores
let round = 1;
let jugadorActual = jugador1;

while (jugador1.disparosTotales > 0 && jugador2.disparosTotales > 0) {
const resultadoDisparo = disparo(jugadorActual, jugadorActual === jugador1 ? jugador2 : jugador1);
console.log(`Ronda ${round}: Jugador ${jugadorActual.nombre} disparó en la posición (${resultadoDisparo.fila}, ${resultadoDisparo.columna}) y ${resultadoDisparo.resultado}`);
  
round++;
jugadorActual = jugadorActual === jugador1 ? jugador2 : jugador1;
  }
  
if (jugador1.disparosTotales === 0) {
console.log("El jugador 2 ha ganado");
} else if (jugador2.disparosTotales === 0) {
console.log("El jugador 1 ha ganado");
}