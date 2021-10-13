const formulario = document.querySelector( "form" );

const getRandomNumber = () => {
    return Math.floor( Math.random() * 1000 );
};

export const addNewCard = ( event ) => {
    event.preventDefault();
    const articuloTarjeta = document.createElement( "article" );
    articuloTarjeta.classList.add( "card" );

    const envaseTarjeta = document.createElement( "section" );
    envaseTarjeta.classList.add( "contenedor-tarjeta" );

    const imagenTarjeta = document.createElement( "img" );
    imagenTarjeta.src = `https://source.unsplash.com/random/${ getRandomNumber() }`;
    
    const tituloTarjeta = document.createElement( "h3" );

    const parrafoTarjeta = document.createElement( "p" );

    const titulo = document.createTextNode( "NA...." );

    const lorem = document.createTextNode( "Sólo hay 10 tipos de personas en este bendito mundo, las que entienden binario y las que no." );

    const seleccionImagenTarjeta = document.createElement( "section" );
    seleccionImagenTarjeta.classList.add( "contenedor-imagen" );
    
    
    envaseTarjeta.appendChild( tituloTarjeta );
    seleccionImagenTarjeta.appendChild( imagenTarjeta );
    tituloTarjeta.appendChild( titulo );
    parrafoTarjeta.appendChild( lorem );

    

    
    envaseTarjeta.appendChild( parrafoTarjeta );

    articuloTarjeta.appendChild( seleccionImagenTarjeta );
    articuloTarjeta.appendChild( envaseTarjeta );

    document.querySelector( "main" ).appendChild( articuloTarjeta );
};


formulario.addEventListener( "submit", addNewCard, false );