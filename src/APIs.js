//Aqui estaran las apis del proyecto

//Usaremos fetch para hacer las peticiones a la api
//fetch es una funcion que recibe como parametro la url de la api
//y devuelve una promesa con la respuesta de la api

//Para hacer las peticiones a la api usaremos async await
//async await es una forma de trabajar con promesas
//que nos permite trabajar con ellas de forma sincrona
//y no tener que encadenar los then

var api = "https://localhost:7075/api/";

export const getRecetas = async () => {
  const response = await fetch(api + "Receta");
  const data = await response.json();
  return data;
};
