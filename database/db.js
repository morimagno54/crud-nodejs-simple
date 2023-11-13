const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'crud_nodejs_db',
    port: '3306'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexión es: '+error);
        return
    }
    console.log('!Conectado a la BD MySQl');
})


module.exports = conexion;