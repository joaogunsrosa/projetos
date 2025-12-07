function listaDados{
    //o que e api
    //como fetch e usado na api
    //oque: get , put , delete , post
    //quero uma aplicação web com esses conceios inseridos
    //aplicação simples com 3 funções:
    //obter_dados = get, salvar = post , atulizar=put,
    //deletar = delete
    //montar uma apresentação : api, get , put , delete , post
    //e fetch
    //para que serve? onde e usado e o site.
 fetch("http://192.168.31.156:4000/products")
    .then(res => res.json())
    .then(data =>{
        data. forEach(produto =>{
            item = document.createElement("li");
            h2 = document.createElement("h2");
            p = document.createElement("p");
            imagem = document.createElement("img");
            
            h2.textContent = produto.name;
            p.textContent = produto.price;
            imagem.src = produto.images;

            item.appendChild(h2);
            item.appendChild(p);
            item.appendChild(imagem);

             lista.appendChild(item);
            
    })

 });
}