export default class Info {
  #szamlalo;
  #szuloElem;

  constructor(szamlalo, szuloElem) {
    this.#szuloElem = szuloElem;
    this.#szamlalo = szamlalo;
    this.megjelenit();
  }
  megjelenit() {
    this.#szuloElem.innerHTML += `<p>Ennyi a zöld kör: \n ${this.#szamlalo}</p>`;
  }
}
