const express = require('express');
const router = express.Router();
const conexion = require('./database/db')

router.get('/', (req,res)=>{
     conexion.query('SELECT * from contactos',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index',{results:results});
        }
    }) 
});

//Crear de Registros
router.get('/create',(req,res)=>{
    res.render('create');
});

//Editar Registros
router.get('/edit/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM contactos WHERE id=?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit',{contact:results[0]});
        }
    })
});

//Eliminar registro
router.get('/delete/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM contactos WHERE id = ?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    })
});

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);


module.exports = router;