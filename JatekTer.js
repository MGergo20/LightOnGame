
import Info from "./Info.js";
import Lampa from "./Lampa.js";

export default class Jatekter {
    #lista = ["green", "orange", "green", "orange", "green", "orange", "green", "orange", "green"];
    #lampaszamlalo = 0;

    constructor(szuloELem) {
        this.szuloElem = szuloELem;
   
        this.#megjelenit();
        this.#esemenykezelo();
    }



    #esemenykezelo() {
        this.szuloElem.addEventListener("kivalaszt", (event) => {
            const lampaElem = event.target.closest('.lampa');
            if (!lampaElem) return;


            this.szuloElem.innerHTML = "";
            this.#megjelenit();


        });
    }

    #megjelenit() {
      

        for (let index = 0; index < this.#lista.length; index++) {
            new Lampa(this.szuloElem,this.#lista[index], index,document.getElementById("jatekter"));

        }
    }
}