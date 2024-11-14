document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("feedback");
    const confirmacao = document.getElementById("confirmacao");

    form.addEventListener('submit', function(event) {
        
        event.preventDefault();  // Impede o envio padrão do formulário

        const email = document.getElementById("email").value;
        const nome = document.getElementById("nome").value;
        const message = document.getElementById("message").value;

        let isvalide = true;
        let errorMessage = "";

        // Validação dos campos
        if (!nome) {
            isvalide = false;
            errorMessage += "Nome é obrigatório. \n";
        }

        if (!email) {
            isvalide = false;
            errorMessage += "Email é obrigatório. \n";
        }

        if (!message) {
            isvalide = false;
            errorMessage += "Mensagem é obrigatória. \n";
        }

        // Se a validação falhar, exibe a mensagem de erro
        if (!isvalide) {
            alert(errorMessage);
            return;  // Não envia o formulário
        } else {
            confirmacao.classList.remove('hidden');  // Exibe a confirmação
        }

        // Aqui é onde você vai fazer a requisição AJAX para o FormSubmit
        const formData = new FormData(form);

        // Envia os dados via Fetch sem redirecionar a página
        fetch(form.action, {
            method: form.method,
            body: formData
        })
        .then(response => response.text())  // Retorna a resposta como texto
        .then(data => {
            // Lógica após o envio bem-sucedido
            // Aqui você pode realizar ações após o envio, como mostrar a confirmação
            console.log('Sucesso:', data);

            // Esconde a confirmação após algum tempo
            setTimeout(function(){
                confirmacao.classList.add('hidden');
            }, 6000);

            // Limpa o formulário
            form.reset();
        })
        .catch(error => {
            // Lógica para erros no envio
            console.error('Erro:', error);

            // Mostrar mensagem de erro ao usuário
            alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
        });
    });

});
