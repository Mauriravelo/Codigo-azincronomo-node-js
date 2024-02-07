    // CODIGO ASINCRONO
    const fs = require('fs')

    fs.writeFile('./texto.txt', 'linea uno', function (err) {
        if(err) {
            console.log(err)
        }else {
            console.log('Archivo creado')
        }
    })
    
    console.log('ultima linea de codigo')