import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-13);
linkedList.add(-3);
linkedList.add(10);

const numbersCollection = new NumberCollection([0, -1, 5, 10]);

const charactersCollection = new CharactersCollection("ASDvzxhDFhe");

const sorter = new Sorter(numbersCollection);
const sorter2 = new Sorter(charactersCollection);
const sorter3 = new Sorter(linkedList);

sorter.sort();
sorter2.sort();
sorter3.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
