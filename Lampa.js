export default class Lampa{
    #index=0;
    #adat=" ";
    #szuloElem;
    constructor(szuloElem,adat,index){
        this.#szuloElem=szuloElem;
        this.#adat=adat;
        this.#index=index;
        this.megjelenit();
        this.elem = document.querySelector(".elem:last-child");
        this.elem.addEventListener("click", ()=> {
            if (this.#adat === " "){
            const esemeny = new CustomEvent("kivalaszt",{detail:this.#index});
            window.dispatchEvent(esemeny);
    }
});
    }
    megjelenit(){
        let html = `<div class= "elem" style="background-color:${this.#adat }">
              
                    </div>`
    this.#szuloElem.insertAdjacentHTML("beforeend",html);
}

    }
