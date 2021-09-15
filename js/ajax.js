$.get('https://apipetshop.herokuapp.com/api/articulos' , function (respuesta, estado) {
    console.log(estado);
    console.log(respuesta);
     if(estado === "success"){
        let misDatos = respuesta;
        for (const dato of misDatos) {
            $("main").append(`
                        <div class="card">
                            <h5 class="card-header">ID: ${dato.id}</h5>
                            <div class="card-body">
                                <h5 class="card-title">${dato.title}</h5>
                                <p class="card-text">${dato.body}</p>
                            </div>
                        </div>`);
        }  
    } 
})