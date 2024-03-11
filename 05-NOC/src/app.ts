import { Server } from "./presentation/server";

// funcion anonima
 (async() => {
   main();
 })
 (); // se autoinvoca

 function main() {
   Server.start();
 }