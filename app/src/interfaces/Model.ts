import { Comparavel } from "./Comparavel.js";
import { Imprimivel } from "./Imprimivel.js";

export interface Model<T> extends Imprimivel, Comparavel<T> {

}