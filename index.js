let playerOneTable = [
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
];
let playerOneEnemyTable = [
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
];
let playerTwoTable = [
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
];
let playerTwoEnemyTable = [
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
    ['', '','','','','','','','',''],
];
var statusShoot;
class Player{
    constructor(name,life,playerTable,maxShoot){
        this.name=name;
    this.life=life;
    this.playerTable=playerTable;
    }


}
let player1 = new Player("Jugador 1",18,playerOneTable);
let player2 = new Player("Jugador 2",18,playerTwoTable);

//FUNCION VER SI ESTÁ LA POSICION ALEATORIA VACIA (SI ESTÁ VACIA HACER LA FUNCION DE METER BARQUITO)
function isEmptyOneBox(a,b,table){
    for (let x = 0; x < table.length; x++) {
        for(let y = 0; y < 9; y++){
           if(table[a][b]==''){
            return true;
           }else{
            return false;
           }
        }
    }
}
function isEmptyTwoBox(a,b,table){
    for (let x = 0; x < table.length; x++) {
        for(let y = 0; y < 9; y++){
           if(table[a][b]=='' && table[a][b+1]==''){
            return true;
           }else{
            return false;
           }
        }
    }
}
function isEmptyThreeBox(a,b,table){
    for (let x = 0; x < table.length; x++) {
        for(let y = 0; y < 9; y++){
           if(table[a][b]=='' && table[a][b+1]=='' && table[a][b+2]==''){
            return true;
           }else{
            return false;
           }
        }
    }
}
function isEmptyFourBox(a,b,table){
    for (let x = 0; x < table.length; x++) {
        for(let y = 0; y < 9; y++){
           if(table[a][b]=='' && table[a][b+1]=='' && table[a][b+2]=='' && table[a][b+3]==''){
            return true;
           }else{
            return false;
           }
        }
    }
}
function isEmptyFiveBox(a,b,table){
    for (let x = 0; x < table.length; x++) {
        for(let y = 0; y < 9; y++){
           if(table[a][b]=='' && table[a][b+1]=='' && table[a][b+2]=='' && table[a][b+3]=='' && table[a][b+4]==''){
            return true;
           }else{
            return false;
           }
        }
    }
}


//FUNCION METER BARQUITO DE UNO
function insertShipOneBox(table){
    var a;
    var b;

   do{
    //COGER DOS NUMEROS ALEATORIOS QUE SERÁN LAS POSICIONES X e Y
    a =Math.floor(Math.random()*10);
    b=Math.floor(Math.random()*10);

    }while(!isEmptyOneBox(a,b,table))    

   for (let x = 0; x < table.length; x++) {
        for(let y = 0; y < 9; y++){
            
                //INTRODUCIR BARQUITO 
            table[a][b]="🚤";
            
        }
    }
}
//FIN FUNCION METER BARQUITO

//FUNCION METER BARQUITO DE DOS
function insertShipTwoBox(table){
    var a;
    var b;

   do{
    //COGER DOS NUMEROS ALEATORIOS QUE SERÁN LAS POSICIONES X e Y
    a =Math.floor(Math.random()*10);
    b=Math.floor(Math.random()*10);

    }while(!isEmptyTwoBox(a,b,table))    

   for (let x = 0; x < table.length; x++) {
        for(let y = 0; y < 9; y++){
                //INTRODUCIR BARQUITO 
                table[a][b]="⛵";
                table[a][b+1]="⛵";
    }
}
}
//FIN FUNCION METER BARQUITO

//FUNCION METER BARQUITO DE TRES
function insertShipThreeBox(table){
    var a;
    var b;

   do{
    //COGER DOS NUMEROS ALEATORIOS QUE SERÁN LAS POSICIONES X e Y
    a =Math.floor(Math.random()*10);
    b=Math.floor(Math.random()*10);

    }while(!isEmptyThreeBox(a,b,table))    

   for (let x = 0; x < table.length; x++) {
        for(let y = 0; y < 9; y++){
                //INTRODUCIR BARQUITO 
                table[a][b]="🚃";
                table[a][b+1]="🚃";  
                table[a][b+2]="🚃";  
    }
}
}
//FIN FUNCION METER BARQUITO

//FUNCION METER BARQUITO DE CUATRO
function insertShipFourBox(table){
    var a;
    var b;

   do{
    //COGER DOS NUMEROS ALEATORIOS QUE SERÁN LAS POSICIONES X e Y
    a =Math.floor(Math.random()*10);
    b=Math.floor(Math.random()*10);

    }while(!isEmptyFourBox(a,b,table))    

   for (let x = 0; x < table.length; x++) {
        for(let y = 0; y < 9; y++){
                //INTRODUCIR BARQUITO 
                table[a][b]="🚋";
                table[a][b+1]="🚋";
                table[a][b+2]="🚋";
                table[a][b+3]="🚋";  
    }
}
}
//FIN FUNCION METER BARQUITO
//FUNCION METER BARQUITO DE CINCO
function insertShipFiveBox(table){
    var a;
    var b;

   do{
    //COGER DOS NUMEROS ALEATORIOS QUE SERÁN LAS POSICIONES X e Y
    a =Math.floor(Math.random()*10);
    b=Math.floor(Math.random()*10);

    }while(!isEmptyFiveBox(a,b,table))    

   for (let x = 0; x < table.length; x++) {
        for(let y = 0; y < 9; y++){
                //INTRODUCIR BARQUITO 
                table[a][b]="🚢";
                table[a][b+1]="🚢";
                table[a][b+2]="🚢";
                table[a][b+3]="🚢";  
                table[a][b+4]="🚢";  
    }
}
}
//FIN FUNCION METER BARQUITO

function isShooted(a,b,playerTable){
    for (let x = 0; x < playerTable.length; x++) {
        for(let y = 0; y < playerTable.length; y++){
           if(playerTable[a][b]=='💥' || playerTable[a][b]=='💧'){
            return true;
           
           }else{
            return false;
           }
         
        }
    }
}

//Función Disparo
function shoot(player,playerTable,playerTableEnemy){
    var a;
    var b;
    do{
        //COGER DOS NUMEROS ALEATORIOS QUE SERÁN LAS POSICIONES X e Y
        a=Math.floor(Math.random()*10);
        b=Math.floor(Math.random()*10);
    }while(isShooted(a,b,playerTable));

   for (let x = 0; x < playerTable.length; x++) {
        for(let y = 0; y <playerTable.length; y++){
                if(playerTable[a][b]==''){
                    playerTable[a][b]='💧';
                    playerTableEnemy[a][b]='💧';
                    statusShoot='Agua';
                    
                }if(playerTable[a][b]!='' && playerTable[a][b]!='💧' ){

                    playerTable[a][b]='💥';
                    playerTableEnemy[a][b]='💥';
                    statusShoot='Tocado';
                }
        }
    }
    console.log(player.name+" dispara en posicion: "+a+","+b)
}

//CREAR TABLEROS
//Jugador 1
for (let i=0;i<=2;i++){
    insertShipOneBox(playerOneTable);  
}
for (let i=0;i<=2;i++){
    insertShipTwoBox(playerOneTable);  
}
for (let i=0;i<=1;i++){
    insertShipThreeBox(playerOneTable);  
}
insertShipFourBox(playerOneTable);  
insertShipFiveBox(playerOneTable);

//Jugador 2
for (let i=0;i<=2;i++){
    insertShipOneBox(playerTwoTable);  
}
for (let i=0;i<=2;i++){
    insertShipTwoBox(playerTwoTable);  
}
for (let i=0;i<=1;i++){
    insertShipThreeBox(playerTwoTable);  
}
insertShipFourBox(playerTwoTable);  
insertShipFiveBox(playerTwoTable);

console.log("¡COMIENZA EL JUEGO BATTLESHIP!")

//Mostrar tableros de jugadores
console.log("Tableros de jugadores:")
console.log("Tablero Jugador1")
console.table(playerOneTable);

console.log("Tablero Jugador2")
console.table(playerTwoTable);

//Desarrollo del juego
console.log("COMIENZAN LOS DISPAROS")

do{
    shoot(player1,playerTwoTable,playerOneEnemyTable)
    while(statusShoot=='Tocado'){
        player2.life--;
        console.log("Ha disparado barco")
        console.log("J1:"+player1.life+" | J2: "+player2.life)
        console.table(playerOneEnemyTable)
        if (player2.life==0){
            console.log("El jugador 2 no tiene vidas, fin del juego")
            console.log("Tablero final del jugador 1")
            console.table(playerOneTable)
            console.log("Tablero final del jugador 2")
            console.table(playerTwoTable)
        break;}
        else{
            shoot(player1,playerTwoTable,playerOneEnemyTable)
        }
        break;
        }
        if(statusShoot=='Agua'){
            console.log("Ha disparado agua")
            console.log("J1:"+player1.life+" | J2: "+player2.life)
            console.table(playerOneEnemyTable)
        }

    shoot(player2,playerOneTable,playerTwoEnemyTable)
    while(statusShoot=='Tocado'){
        player1.life--;
        console.log("Ha disparado barco")
        console.log("J1:"+player1.life+" | J2: "+player2.life)
        console.table(playerTwoEnemyTable)
        if (player1.life==0){
            console.log("El jugador 1 no tiene vidas, fin del juego")
            console.log("Tablero final del jugador 1")
            console.table(playerOneTable)
            console.log("Tablero final del jugador 2")
            console.table(playerTwoTable)
        break;}
        else{
            shoot(player2,playerOneTable,playerTwoEnemyTable)
        }
        
break;
    }
    if(statusShoot=='Agua'){
        console.log("Ha disparado agua")
        console.log("J1:"+player1.life+" | J2: "+player2.life)
        console.table(playerTwoEnemyTable)
    }
    
}while(player1.life!==0 && player2.life!==0)