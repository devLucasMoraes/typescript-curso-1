import { Imprimivel } from "./Imprimivel.js";

export function imprimir(...objs: Array<Imprimivel>) {
    for (let obj of objs) {
        console.log(obj.toString())
    }
}