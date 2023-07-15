# Practica-Intro-JS

# Hundir la Flota

¡Bienvenido a Hundir la Flota! Este es un juego de batalla naval simple implementado en JavaScript. El juego se juega en la consola y enfrenta a dos jugadores en una batalla para hundir los barcos del oponente.

## Cómo jugar

1. Clona este repositorio en tu máquina local.

```bash
git clone https://github.com/antoniyo95/Practica-Intro-JS-Bootcamp-KeepCoding.git
```

2. Ejecuta el juego

```
node juego.js
```

3. Sigue las instrucciones en la consola para colocar tus barcos y realizar disparos.

## Reglas del juego

- Cada jugador tiene un tablero propio y un tablero enemigo.
- Los barcos se colocan automáticamente en posiciones aleatorias en los tableros de cada jugador.
- Los jugadores se turnan para realizar disparos en los tableros enemigos.
- Los disparos pueden ser "Tocado" (💥) o "Agua" (💧).
- El objetivo es hundir todos los barcos del oponente.
- El juego termina cuando uno de los jugadores hunde todos los barcos del oponente o cuando ambos jugadores han agotado sus disparos.

## Personalización del juego

Puedes personalizar el juego ajustando los siguientes parámetros:

- Número de disparos totales por jugador: puedes cambiar la cantidad de disparos totales modificando la propiedad ```disparosTotales``` en los objetos de los jugadores en el archivo **juego.js**.

- Barcos: puedes ajustar los barcos disponibles modificando el array de los barcos en el archivo **barcos.js**.

### Espero que disfrutes jugando a Hundir la Flota. ¡Diviértete!