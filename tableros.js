const crearTablero = () => {
  const tablero = [];
  for (let i = 0; i < 10; i++) {
    tablero[i] = [];
    for (let j = 0; j < 10; j++) {
      tablero[i][j] = "";
    }
  }
  return tablero;
};

module.exports = { crearTablero };