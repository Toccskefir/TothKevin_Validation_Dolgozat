import { Artwork } from './artwork';

export class Statue implements Artwork {
    title: string;
    year: number;
    price: number;
    height: number;

    private regexTitle = /^[a-z ,]+$/i;
    private currentYear = new Date().getFullYear();

    constructor(title: string, year: number, price: number, height: number) {
        if (!this.regexTitle.test(title)) {
            throw Error("Hibás szobor cím!");
        } else if (year > this.currentYear || isNaN(year)) {
            throw Error("Készítésének éve érvénytelen!");
        } else if (price < 1 || isNaN(price)) {
            throw Error("A szobor ára minimum 1Ft kell legyen!");
        } else if (height < 10 || isNaN(height)) {
            throw Error("A szobor magassága minimum 10cm kell legyen!");
        } else {
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
        }
    }
}