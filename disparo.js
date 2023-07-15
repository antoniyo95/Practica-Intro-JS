const realizarDisparo = (jugadorAtacante, jugadorDefensor, round) => {
  let disparoValido = false;
  let fila, columna;

  while (!disparoValido) {
    fila = Math.floor(Math.random() * 10);
    columna = Math.floor(Math.random() * 10);

    if (
      jugadorDefensor.tableroEnemigo[fila][columna] !== "💥" &&
      jugadorDefensor.tableroEnemigo[fila][columna] !== "💧"
    ) {
      disparoValido = true;

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

module.exports = { realizarDisparo };