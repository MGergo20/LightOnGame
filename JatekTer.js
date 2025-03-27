import Elem from "./Elem.js";
import Info from "./Info.js";

export default class Jatekter{
    #lista = [" "," "," "," "," "," "," "," "," "];
    #lampaszamlalo=0;
    szuloElem;
    constructor(szuloELem,jatekterelem){
    this.szuloElem = szuloElem;
    this.jatekterelem = jatekterelem;
    this.megjelenit();
    this.esemenykezelo();
    }
}


#esemenykezelo(){
    window.addEventListener("kivalaszt", (event) => {
        const lampaElem = event.target.closest('.lampa');
       if (lampaElem) {
        
       }
        this.szuloElem.innerHTML = "";
        this.#megjelenit();
        this.#lampaszamlalo++;
    
});

}
#megjelenit(){
    for (let index = 0; index < lista.length; index++) {
        new Elem(this.#lista[index], index, this.szuloElem);
    
    }       
}



