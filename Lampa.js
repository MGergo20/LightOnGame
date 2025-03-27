export default class Lampa{
    #index=0;
    #adat=" ";
    #szuloElem;
    #szin;
    constructor(szuloElem,adat,index,szin){
        this.#szin=szin;
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
        const elem = document.createElement('div');
        elem.className = 'lampa';
        elem.style.backgroundColor = this.#szin;
        elem.dataset.index = this.#index;
        elem.addEventListener('click', () => {
            const esemeny = new CustomEvent("kivalaszt", {detail: this.#index});
            window.dispatchEvent(esemeny);
        });
        this.#szuloElem.appendChild(elem);
    }
        //let html = `<div class= "elem" style="background-color:${this.#adat }">
              
                   // </div>`
    //this.#szuloElem.insertAdjacentHTML("beforeend",html);
}

    
