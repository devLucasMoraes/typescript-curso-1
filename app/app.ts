import { NegociacaoController } from "./controllers/NegociacaoController.js";


const controller = new NegociacaoController();

const form = document.querySelector('[data-form]');
if (form) {
    form.addEventListener('submit', evento => {
        evento.preventDefault();
        controller.adiciona();
    })
} else {
    throw Error("Verifique se form existe");
    
}





