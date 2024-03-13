function logar(){

    id = parseInt(document.getElementById('ID').value )
    

    if(id == ''){
        alert('SEM ID SEM ACESSO')
    }else if(id == '1235378'){
        document.getElementById('acesso').innerHTML = "Acesso concebido"
    }else if(document.getElementById('acesso').innerHTML = "Acesso concebido"){
        window.location="7ano.html";
    }else if(id < '1235378') {
        document.getElementById('acesso').innerHTML = "Acesso Negado"
    }else if(id > '1235378') {
        document.getElementById('acesso').innerHTML = "Acesso Negado"
    }
    
    if(document.getElementById('acesso').innerHTML = "Acesso concebido"){
        window.location="7ano.html";
    }
}