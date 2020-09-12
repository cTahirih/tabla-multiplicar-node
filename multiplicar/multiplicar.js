// required
const fs = require('fs');
const colors = require('colors');
const colr = require('colors/safe');

let listarTabla = (base, limite = 10) => {
  console.log('****************************************'.rainbow);
  console.log(`*********** T a b l a   del ${ base } **********`.green);
  console.log('****************************************'.rainbow);
  for (let i = 1; i <= limite; i++) {
    console.log(`${ base } * ${ i } = ${ base * i }\n`);
  }
};

let crearArchivo = (base, limite = 10) => {
  console.log(base, limite);
  return new Promise((resolve, reject) => {

    if ( !Number(base)) {
      reject(`el valor introducido ${ base } no es un número`);
      return;
    }

    let data = '';
    for (let i = 1; i <= limite; i++) {
      data += `${ base } * ${ i } = ${ base * i }\n`
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (onerror) => {
      if (onerror)
        reject(onerror);
      else
        resolve(`tabla-${ base }.txt`)
    });
  })
};

module.exports = {
  crearArchivo,
  listarTabla
};
