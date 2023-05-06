// Crea la clase Jugador
class Jugador {
    constructor(nombre) {
      this.nombre = nombre;
      this.tableroPropio = [];
      this.tableroAdversario = [];
    }
  
    // Inicializa los tableros
    inicializarTableros() {
      for (let i = 0; i < 10; i++) {
        this.tableroPropio[i] = [];
        this.tableroAdversario[i] = [];
        for (let j = 0; j < 10; j++) {
          this.tableroPropio[i][j] = "";
          this.tableroAdversario[i][j] = "";
        }
      }
    }
    
    // Imprime los tableros de un jugador
    imprimirTableros() {
      console.log(`Tablero propio de ${this.nombre}:`);
      console.table(this.tableroPropio);
      console.log(`Tablero adversario de ${this.nombre}:`);
      console.table(this.tableroAdversario);
    }
  }
  
  // Crea dos jugadores
  const jugador1 = new Jugador("Jugador 1");
  const jugador2 = new Jugador("Jugador 2");
  
  // Inicializa los tableros de los jugadores
  jugador1.inicializarTableros();
  jugador2.inicializarTableros();
  
  // Imprime los tableros de los jugadores
  jugador1.imprimirTableros();
  jugador2.imprimirTableros();
  
  class Jugador {

  
    // Método para colocar todos los barcos en el tablero propio
    colocarBarcos() {
      this.colocarBarco(5, 1); // Portaaviones
      this.colocarBarco(4, 1); // Buque
      this.colocarBarco(3, 2); // Submarinos
      this.colocarBarco(2, 3); // Cruceros
      this.colocarBarco(1, 3); // Lanchas
    }
  
    // Método para colocar un barco en el tablero propio
    colocarBarco(tamanoBarco, numeroBarcos) {
      // Repite este proceso para cada barco
      for (let i = 0; i < numeroBarcos; i++) {
        let colocado = false;
        // Repite este proceso hasta que el barco sea colocado con éxito
        while (!colocado) {
          // Genera una orientación aleatoria (0 para horizontal, 1 para vertical)
          let orientacion = Math.floor(Math.random() * 2);
          // Genera una fila o columna aleatoria para comenzar
          let filaInicio = Math.floor(Math.random() * 10);
          let columnaInicio = Math.floor(Math.random() * 10);
  
          // Comprueba si el barco cabe en el tablero
          if (orientacion === 0) { // Horizontal
            if (columnaInicio + tamanoBarco <= 10) {
              // Verifica que no haya otros barcos en esa posición
              let posLibre = true;
              for (let j = 0; j < tamanoBarco; j++) {
                if (this.tableroPropio[filaInicio][columnaInicio + j] !== "") {
                  posLibre = false;
                  break;
                }
              }
  
              // Si la posición está libre, coloca el barco
              if (posLibre) {
                for (let j = 0; j < tamanoBarco; j++) {
                  this.tableroPropio[filaInicio][columnaInicio + j] = "B";
                }
                colocado = true;
              }
            }
          } else { // Vertical
            if (filaInicio + tamanoBarco <= 10) {
              // Verifica que no haya otros barcos en esa posición
              let posLibre = true;
              for (let j = 0; j < tamanoBarco; j++) {
                if (this.tableroPropio[filaInicio + j][columnaInicio] !== "") {
                  posLibre = false;
                  break;
                }
              }
              posLibre = false;
              break;
            }
          }
          
          // Si la posición está libre, coloca el barco
          if (posLibre) {
            for (let j = 0; j < tamanoBarco; j++) {
              this.tableroPropio[filaInicio + j][columnaInicio] = "B";
            }
            colocado = true;
          }
        }
      }
    }
  }

jugador1.colocarBarcos();
jugador2.colocarBarcos();

console.table(jugador1.tableroPropio);
console.table(jugador2.tableroPropio);
