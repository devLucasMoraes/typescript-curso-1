import { NegociacaoController } from "./controllers/NegociacaoController.js";
const controller = new NegociacaoController();
const form = document.querySelector('[data-form]');
form.addEventListener('submit', evento => {
    evento.preventDefault();
    controller.adiciona();
});
