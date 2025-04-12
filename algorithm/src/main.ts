import { binarySearch } from "./binary-search";
import { linearSearch } from "./linear-search";
import { euclidean } from "./euclidean";

const data = [-1, 0, 2, 5, 6, 8, 9, 10];

console.log(binarySearch(10, data));
console.log(linearSearch(10, data));

console.log(`euclidean ${euclidean(8177, 3315)}`);
