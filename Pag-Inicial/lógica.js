    
    function horaexata() {

        let extrairdata = new Date();
        let diadomes = extrairdata.getDate();
        let mes = extrairdata.getMonth();
        let copiames = mes
        let ano = extrairdata.getFullYear();
        let hora = extrairdata.getHours();
        let minutos = extrairdata.getMinutes();
        let seg = extrairdata.getSeconds();
        
        if (hora < 10) {
            hora = '0' + hora
        }
        if (minutos < 10) {
            minutos = '0' + minutos
        }
        if (seg < 10) {
            seg = '0' + seg
        }
        if (mes == copiames) {
            mes = copiames + 1
        }
        if (mes >= 0) {
            mes = '0' + mes
        } 

        let diadasemana = document.querySelector('div.data');
        let horas = document.querySelector('div.horas');
        
        diadasemana.innerText = (`${diadomes}/${mes}/${ano}`);
        horas.innerText = (`${hora}:${minutos}:${seg}`);
    
    }

    setInterval(horaexata, 1000);

    horaexata();


    function registrar() {
        const btn = document.querySelector('button#registrar-btn');
        btn.classList.add('animate');     // Adiciona a classe 'animate' ao botão

        setTimeout(() => {
            btn.classList.remove('animate');    // remove a classe 'animate' após 500 mlls
        }, 500);    //Duração da animação em millisegundos
    }