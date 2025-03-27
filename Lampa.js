export default class Lampa{
    #szuloELem;
    #adat;
    #index;

    constructor(szuloElem,adat,index){
        this.#szuloELem=szuloElem;
        this.#adat=adat;
        this.#index=index;
        this.megjelenit();
        this.lampa = document.querySelector(".lampa:last-child");
        this.lampa.addEventListener("click", ()=> {

            const esemeny = new CustomEvent("kivalaszt",{detail:this.#index});
            window.dispatchEvent(esemeny);
        });
    }

    
    
   


megjelenit() {
    let html=`<div class= "lampa" style="background-color:${this.#adat===1? "green" : "orange" }">
                    </div>`;
    this.#szuloELem.insertAdjacentHTML("beforeend",html);

    }
}