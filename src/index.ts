import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";

const numbersCollection = new NumberCollection([0, -1, 5, 10]);

const sorter = new Sorter(numbersCollection);

sorter.sort();

console.log(numbersCollection.data);
