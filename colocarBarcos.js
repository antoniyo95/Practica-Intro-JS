const colocarBarcos = (tablero, barcos) => {
  for (const barco of barcos) {
    let posicionValida = false;
    while (!posicionValida) {
      const fila = Math.floor(Math.random() * 10);
      const columna = Math.floor(Math.random() * 10);
      let direccion = Math.floor(Math.random() * 2);

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
    }
  }
};

module.exports = { colocarBarcos };