import { Artwork } from './artwork';
import { Statue } from './statue';

export const list: Artwork[] = [];

document.addEventListener("DOMContentLoaded", () => {
  const formStatue = document.getElementById("formStatue") as HTMLFormElement;
  const errorMessage = document.getElementById("errorMessage");
  let sumArtwork: number = 0;
  let sumPrice: number = 0;

  formStatue!.addEventListener("submit", (e) => {
    e.preventDefault();

    const title: string = (document.getElementById("inputTitle") as HTMLInputElement).value;
    const year: number = parseInt((document.getElementById("inputYear") as HTMLInputElement).value);
    const price: number = parseInt((document.getElementById("inputPrice") as HTMLInputElement).value);
    const height: number = parseInt((document.getElementById("inputHeight") as HTMLInputElement).value);

    try {

      const newStatue: Statue = new Statue(title, year, price, height);
      list.push(newStatue);

      formStatue.reset();
      errorMessage!.innerHTML = "";

      sumArtwork++;
      sumPrice += price;
      document.getElementById("amountOfArtwork")!.textContent = "Művek darabszáma: " + sumArtwork;
      document.getElementById("priceOfArtwork")!.textContent = `Művek összesített ára: ${sumPrice}Ft`;

    } catch(e) {
      if (e instanceof Error) {
        errorMessage!.textContent = e.message;
      }
    }
  });
});