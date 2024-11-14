


document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.getElementById("feedback");
    const confirmacao = document.getElementById("confirmacao");

    form.addEventListener('submit', function(event) {

        event.preventDefault();
       
        const email = document.getElementById("email").value;
        const nome = document.getElementById("nome").value;
        const message = document.getElementById("message").value;


        let isvalide = true;
        let errorMessage=""

        if(!nome){
            isvalide = false;
            errorMessage+="Nome é obrigatório. \n";
            
        }

        if(!email){
            isvalide = false;
            errorMessage += "Email é obrigatório. \n";
            
        }
        if(!message){
            isvalide = false;
            errorMessage += "Mensagem é obrigatório. \n";
            
        }

        if(!isvalide) {
            alert(errorMessage);
            return;
        }else{
            confirmacao.classList.remove('hidden');
        
             form.submit();
           
            
        }

        setTimeout(function(){
            confirmacao.classList.add('hidden');
        },9000)
             form.reset();
        
    }) 


})