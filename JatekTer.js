
import Info from "./Info.js";
import Lampa from "./Lampa.js";

export default class Jatekter {
    #lista = ["green", "orange", "green", "orange", "green", "orange", "green", "orange", "green"];
    #lampaszamlalo = 0;

    constructor(szuloELem) {
        this.szuloElem = szuloELem;
   
        
        this.infoPanel=document.querySelector(".info")
        this.btn=document.querySelector(".gomb")
        this.info = new Info(this.infoPanel)
        
        
        
        this.#megjelenit();
        this.#esemenykezelo();
    }




        #esemenykezelo() {
            window.addEventListener("kivalaszt",(event) =>{
                console.log(event.detail);
                if (this.#lampaszamlalo % 2 === 0) {
                    this.#lista[event.detail]="orange";
                    this.info.megjelenit("green")
                } else {
                    this.#lista[event.detail]="green";
                    this.info.megjelenit("orange")
                }
                this.#lampaszamlalo++;
                this.szuloElem.innerHTML="green";
                this.szuloElem.innerHTML="orange";
                this.#megjelenit()
            });
        }



    

    #megjelenit(){
        for (let index = 0; index < this.#lista.length; index++) {
            new Lampa(this.szuloElem,this.#lista[index], index)

        }
    }
}
