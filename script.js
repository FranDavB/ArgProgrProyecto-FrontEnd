
// Formulario editar-experiencia

    const ulMadre = document.querySelector('#experiencia-madre-lista');
    const formExperiencia = document.querySelector('#editar-experiencia');
    const buttonExperiencia = document.querySelector('button-experiencia-submit');
    const expLogo = document.querySelector('#exp-logo');
    const expEmpresa = document.querySelector('#exp-empresa');
    const expCiudad = document.querySelector('#exp-ciudad')
    const expFecha = document.querySelector('#exp-fecha');
    
    // Crear el elemento ul

    function nuevoElementoExperiencia() {

        const ulExperiencia = document.createElement('ul');
        ulExperiencia.setAttribute('class', 'unidadlista');

        const liLogo = document.createElement('li');
        const logo = document.createElement('img');
        logo.setAttribute('src', expLogo.value);
        logo.setAttribute('class', 'logoimagen');
        const liEmpresa = document.createElement('li');
        liEmpresa.textContent = expEmpresa.value;
        liEmpresa.setAttribute('class', 'empresa');
        const liCiudad = document.createElement('li');
        liCiudad.textContent = expCiudad.value;
        const liFecha = document.createElement('li');
        liFecha.textContent = expFecha.value;
        const editarBtn = document.createElement('button');
        editarBtn.textContent = 'Editar';
        editarBtn.setAttribute('class' , 'btn');
        editarBtn.setAttribute('class' , 'btn-dark');
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.setAttribute('class','btn');
        eliminarBtn.setAttribute('class','btn-dark');
        const liBotones = document.createElement('li');
        

        // Agregar los DOM al elemento ul

        ulExperiencia.appendChild(liLogo);
        ulExperiencia.appendChild(liEmpresa);
        ulExperiencia.appendChild(liCiudad);
        ulExperiencia.appendChild(liFecha);
        ulExperiencia.appendChild(liBotones);
        liLogo.appendChild(logo);
        liBotones.appendChild(editarBtn);
        liBotones.appendChild(eliminarBtn);

        
        return ulExperiencia;
    }

    function nuevalistaElementoExperiencia(){
        
        const ul = nuevoElementoExperiencia();
        const liMadre = document.createElement('li')
        liMadre.appendChild(ul);

        return liMadre;

    }

    formExperiencia.addEventListener('submit', (event) => {
        
        event.preventDefault();
        const liMadre = nuevalistaElementoExperiencia();
        ulMadre.appendChild(liMadre);


    });

    ulMadre.addEventListener('click', (event) => {
        if(event.target.tagName === 'BUTTON'){
            const button = event.target;
            const liunidadlista = button.parentNode;
            const ulUnidadLista= liunidadlista.parentNode;
            const liMadreLista = ulUnidadLista.parentNode;
            const ulMadreLista = liMadreLista.parentNode;

            if(button.textContent === 'Eliminar'){
                ulMadreLista.removeChild(liMadreLista);
            } else if (button.textContent === 'Editar'){
                const urlspan= ulUnidadLista.children[0];
                const empresaspan = ulUnidadLista.children[1];
                const ciudadspan = ulUnidadLista.children[2];
                const fechaspan = ulUnidadLista.children[3];

                const nuevaurl = document.createElement ('input');
                nuevaurl.type = 'text';
                nuevaurl.value = urlspan.children[0].src;
                ulUnidadLista.insertBefore(nuevaurl, urlspan);
                ulUnidadLista.removeChild(urlspan);

                const nuevaempresa = document.createElement ('input');
                nuevaempresa.type = 'text';
                nuevaempresa.value = empresaspan.textContent;
                ulUnidadLista.insertBefore(nuevaempresa, empresaspan);
                ulUnidadLista.removeChild(empresaspan);


                const nuevaciudad = document.createElement('input');
                nuevaciudad.type = 'text';
                nuevaciudad.value = ciudadspan.textContent;
                ulUnidadLista.insertBefore(nuevaciudad, ciudadspan);
                ulUnidadLista.removeChild(ciudadspan);

                const nuevafecha = document.createElement('input');
                nuevafecha.type = 'text';
                nuevafecha.value = fechaspan.textContent;
                ulUnidadLista.insertBefore(nuevafecha, fechaspan);
                ulUnidadLista.removeChild(fechaspan);

                button.textContent = 'Aplicar';
            } else if (button.textContent === 'Aplicar') {

                const nuevaurl = ulUnidadLista.children[0];
                const nuevaurlspan = document.createElement('li');
                const nuevaurlimage = document.createElement('img');
                nuevaurlspan.appendChild(nuevaurlimage);
                nuevaurlimage.setAttribute('class' , 'logoimagen');
                nuevaurlimage.setAttribute('src' , nuevaurl.value )
                ulUnidadLista.insertBefore(nuevaurlspan, nuevaurl);
                ulUnidadLista.removeChild(nuevaurl);
                
                const nuevaempresa = ulUnidadLista.children[1];
                const empresaspannueva = document.createElement('li');
                empresaspannueva.textContent = nuevaempresa.value;
                ulUnidadLista.insertBefore(empresaspannueva, nuevaempresa);
                ulUnidadLista.removeChild(nuevaempresa);

                const nuevaciudad = ulUnidadLista.children[2];
                const nuevaciudadspan = document.createElement('li');
                nuevaciudadspan.textContent = nuevaciudad.value;
                ulUnidadLista.insertBefore(nuevaciudadspan, nuevaciudad);
                ulUnidadLista.removeChild(nuevaciudad);

                const nuevafecha = ulUnidadLista.children[3];
                const nuevafechaspan = document.createElement('li');
                nuevafechaspan.textContent = nuevafecha.value;
                ulUnidadLista.insertBefore(nuevafechaspan, nuevafecha);
                ulUnidadLista.removeChild(nuevafecha);

                button.textContent='Editar';
            }
        }
    })

// Formulario login

const buttonLogin = document.querySelector('#button-loguear');
const loginForm = document.querySelector('#login');
const emailLogin = document.querySelector('#user-email');
const passwordLogin = document.querySelector('#user-password');

    login.addEventListener('submit', (event) => {

        event.preventDefault();

        const userEmail = emailLogin.value;
        const userPassword = passwordLogin.value;

        console.log('Hasta aca todo bien fiera');

        const datosLogin = {
            User_email : userEmail, 
            User_password : userPassword}

        console.log(JSON.stringify(datosLogin));
        loginForm.reset();

        // Guardar la info (solo registro)
        const fs = require('fs');
        fs.writeFile('login.js', datosLogin, (err) => {
                if (err){
                throw err;
            } 
            console.log("JSON data is saved.");
        })
        
        login.json.setItem('LoginData', JSON.stringify(datosLogin));
        
    })




