
const btn= document.getElementById("btn")
const resultadosTable= document.getElementById("resultadosTable").getElementsByTagName("tbody")[0];
const limpar= document.getElementById("cleanBtn")

btn.addEventListener('click',()=>{
    const valores= parseFloat(document.getElementById("valores").value)
    
    if(isNaN(valores) ){
        alert("insira um número válido")
    }else if(valores==0){
        alert("insira u numero diferente de zero(0)")
    }else{
        let result= (valores*15)/100;
        let resul1=(valores*8)/100;
        let cp= (valores*62)/100;
/*
        aqui.innerHTML= "Enoc & Gomes " +result +" kz";
        fani.innerHTML= "Fani " +resul1 +" kz";
        company.innerHTML= "Company " + cp +" kz";  // empresa

*/
//create all the t
            const novaLinha= resultadosTable.insertRow();


            const primeiro= novaLinha.insertCell(0);

            const segundo= novaLinha.insertCell(1);

            const terceiro= novaLinha.insertCell(2);

            primeiro.innerHTML= `${result.toFixed(2)} kz`;

            segundo.innerHTML= `${resul1.toFixed(2)} kz`;

            terceiro.innerHTML= `${cp.toFixed(2)} kz`;

    }

    // Resetar o input
    document.getElementById("valores").value=""
     document.getElementById("valores").focus();
    

})


//limpar a tabela
limpar.addEventListener("click", ()=>{
    resultadosTable.innerHTML=""
})