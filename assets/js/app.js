const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //se agraga el identificador de ID 
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');



async function displayUser(username) {  //se agrega async para declarar funcion de promesa
  try{
    $n.textContent = `cargando...`;

  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();

  console.log(data);

  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`; // se cambian las comillas simples por backtips

  } catch(err){
    handleError
  } // se agrega try-catch para manejar errores al traer informacion de la API

}


function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);