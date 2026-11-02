import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumberCollection([0, -1, 5, 10]);
const charactersCollection = new CharactersCollection("ASDvzxhDFhe");
const sorter = new Sorter(numbersCollection);
const sorter2 = new Sorter(charactersCollection);

sorter.sort();
sorter2.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
