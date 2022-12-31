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

const btnImportar = document.querySelector('[data-btn-importar]');

if(btnImportar) {
    btnImportar.addEventListener('click', () => {
        controller.importarDados();
    })
} else {
    throw Error('Botão importar não foi encontrado')
}





