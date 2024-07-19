    
    function horaexata() {

        let extrairdata = new Date();
        let diadomes = extrairdata.getDate();
        let mes = extrairdata.getMonth();
        let copiames = mes;
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

    cont = 0;

        let rp1 = document.querySelector('div.registrodospontos1');
        let rp2 = document.querySelector('div.registrodospontos2');
        let rp3 = document.querySelector('div.registrodospontos3');
        let rp4 = document.querySelector('div.registrodospontos4');

        rp1.innerText = ('Entrada')
        rp2.innerText = ('Saída')
        rp3.innerText = ('Entrada')
        rp4.innerText = ('Saída')

    function registrar() {
        
        const btn = document.querySelector('button#registrar-btn');
        btn.classList.add('animate');     // Adiciona a classe 'animate' ao botão

        setTimeout(() => {
            btn.classList.remove('animate');    // remove a classe 'animate' após 500 mlls
        }, 500);    //Duração da animação em millisegundos

        let extrairdata = new Date();
        let diadomes = extrairdata.getDate();
        let mes = extrairdata.getMonth();
        let copiames = mes;
        let ano = extrairdata.getFullYear();
        let hora = extrairdata.getHours();
        let minutos = extrairdata.getMinutes();
        let seg = extrairdata.getSeconds();

        let rp1 = document.querySelector('div.registrodospontos1');
        let rp2 = document.querySelector('div.registrodospontos2');
        let rp3 = document.querySelector('div.registrodospontos3');
        let rp4 = document.querySelector('div.registrodospontos4');
        
        if (hora < 10) {
            hora = '0' + hora
        }
        if (minutos < 10) {
            minutos = '0' + minutos
        }
        if (seg < 10) {
            seg = '0' + seg
        }


        cont += 1;

        switch (cont) {
            
        case 1 :
            rp1.innerText += (`\n${hora}:${minutos}`);
            break;
        case 2 : 
            rp2.innerText += (`\n${hora}:${minutos}`);
            break;
        case 3 :
            rp3.innerText += (`\n${hora}:${minutos}`);
            break;
        case 4 :
            rp4.innerText += (`\n${hora}:${minutos}`);
            cont = 0;
            break;
        }
    
    }
