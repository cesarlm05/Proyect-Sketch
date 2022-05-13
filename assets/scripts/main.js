$(document).ready(function(){
    console.log('Document ready!');
    // Carga solo en Index
    if (window.location.href.indexOf('index') > -1) {
        //Slider
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 900,
            responsive: true,
            pager: true
        });

        //Posts
        var posts = [
            {
                title: 'Mi pasion es el MTB',
                date: 'Publicado ' + moment().format('MMMM Do YYYY'),
                content: '¿Nuestra pasión o nuestra obsesión?<br>  Disfrutar del Mountain Bike es una pasión sana sin ningún tipo de contraindicaciones, salvo cuando esta pasión se convierte en una obsesión de difícil curación. Saber diferenciar nuestra pasión de una obsesión compulsiva es muy difícil, pero afortunadamente existen varios síntomas que nos indican que nuestro deporte preferido está comenzando a obsesionarnos de manera significativa:*Mentir acerca de lo que gastamos en bicicletas, componentes y equipamiento. Nuestro sentimiento de culpabilidad nos delata, y necesitamos mentir para sentirnos menos culpables. Aunque está claro que todo es mas costoso al paso del tiempo.*Tener una habitación dedicada únicamente a nuestra bicicleta. Hay quien tiene una sala equipada con todo lo necesario para disfrutar de una buena película en alta definición. Hay quien tiene una colección increíble de música y un equipo de alta fidelidad en una sala insonorizada para disfrutar de la música a todo volumen. ¿Qué hay de malo en tener una habitación dedicada exclusivamente a nuestra bicicleta, componentes y equipamiento de Mountain Bike? Nada, ¿verdad?*Tener más de 100 páginas web relacionadas con el MTB en los favoritos de nuestro navegador. Una investigación policial sobre nuestro disco duro delataría sin duda una obsesión psicótico-compulsiva acerca de todo lo relacionado con el mundo del Mountain Bike. Pero como no se trata de ningún delito, podríamos decir que simplemente nos gusta mantenernos informados sobre el mundillo… ¿o no? *Planear las vacaciones, festivos y fines de semana para nuestra bicicleta de montaña. No hay nada malo en planear todos nuestros días libres para hacer uso de nuestra bicicleta de montaña. No importa si nuestra familia, amigos o pareja no tienen tanto interés en pedalear como nosotros. Al fin y al cabo, se trata de hacer sentir bien a nuestra inseparable bicicleta de montaña. ¿A qué si?*Tener una bicicleta de montaña más cara que nuestro coche. Si nuestra flamante nueva bicicleta de montaña de más de 6000 euros, con el último sistema de suspensión inteligente, los componentes más altos de gama y el diseño más vanguardista es más cara que nuestro pobre automóvil de más de 15 años, no es culpa nuestra. La culpa es del mercado económico actual, que valora muy por debajo de su precio real los coches con cierta edad. ¿Estamos de acuerdo?*Tener 8 bicicletas de montaña o más. Si tenemos 8 o más bicicletas de montaña, claramente tenemos un problema psicológico y deberíamos pedir ayuda. Por suerte, yo sólo tengo 7 bicicletas. ¿Y? *Pasar más tiempo en la tienda de bicis que con los amigos o familia. A lo mejor es simple vocación, y pasamos las horas imaginando que la tienda es nuestro propio negocio y disfrutamos vendiendo y asesorando a los clientes acerca de las mejores bicicletas y componentes del mercado. A lo mejor preferimos pasar las horas mirando las curvas de los cuadros más bonitos de las bicicletas más recientes, en lugar de aburrirnos viendo la televisión. Aunque a lo mejor, ¿pasas demasiado tiempo en la tienda?*Visualizar continuamente caminos y rutas posibles para la bicicleta de montaña. Mientras conduces el coche, observas las montañas de alrededor estudiando posibles caminos y rutas a realizar. Mientras paseas, piensas en aquel sendero que no seguiste, imaginando hacia dónde llevará. Mientras trabajas, imaginas la siguiente ruta que probablemente realizarás con tu bicicleta en la siguiente salida. No es obsesión, sino anticipación… ¿o no?*    Tras una caída aparatosa, tu única preocupación es tu bicicleta. Si tras una caída importante, lo primero que preguntas cuándo alguien se acerca a socorrerte es acerca del estado de tu bicicleta, no hay ningún problema. Aquí demuestras que realmente valoras tu equipo y sabes cuidarlo al máximo, aprovechando hasta el último céntimo que te gastas en él. Por cierto, ¿qué es ese hueso que asoma por tu pierna? A pesar del tono irónico del artículo, no está de más decir que las obsesiones siempre son malas. Hay que mantener siempre un equilibrio entre pasión y obsesión, no dejando que la última gane la batalla. Está muy bien pensar en nuestra bicicleta y nuestras rutas, pero siempre sin dejar de lado otras cosas como nuestra familia, amigos o pareja. ¿Pasión? Sí, pero con cabeza.'
            }
        ];
            
        posts.forEach((intem, index) =>{
            var post = `<article class="post">
            <h3>${intem.title}</h3>
            <span class="date">${intem.date}</span>
            <p>
                ${intem.content}
            </p>
            <a href="#" class="btn-more">Leer mas</a>
        </article>
            `;
            $('#posts').append(post);
        });
    }

    // Selector de Temas

    var tema = $("#theme");
    $("#to-red").click(function(){
        tema.attr('href','assets/css/red.css');
    });
    $("#to-yellow").click(function(){
        tema.attr('href','assets/css/yellow.css');
    });
    $("#to-blue").click(function(){
        tema.attr('href','assets/css/blue.css');
    });

    // Scroll subir

    $(".subir").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : 0
        },750);
        return false;
    });

    // Login fake

    $('#login form').submit(function(){
        var formName = $('#form-name').val();
        localStorage.setItem('form-name', formName);
    });
    var form_name = localStorage.getItem('form-name');
    if (form_name != null && form_name != 'undefined') {
        var bienvenido= $('#bienvenido');
        bienvenido.html('<strong>Bienvenido '+form_name+'</strong><br>');
        bienvenido.append('<a href="index.html" id="loguot" class="subir">Cerrar sesion</a>');

        $('#login').hide();
        $('#loguot').click(function(){
            localStorage.clear();
            location.reload();
        });
    };

    // About

    if (window.location.href.indexOf('about') > -1) {
        var acordeon = $('#acordeon');
        acordeon.accordion();
    }

    // Reloj

    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function(){
            var reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);
        },1000);
    }

    // Validaciones

    if (window.location.href.indexOf('contact') > -1) {
        $.validate({
            lang: 'es'
        });
    };
});