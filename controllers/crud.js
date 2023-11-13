const conexion = require('../database/db');

exports.save = (req, res)=>{
    const contact = req.body.contact;
    const number = req.body.number;
    conexion.query('INSERT INTO contactos SET ?',{nombre:contact, numero:number}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}

exports.update = (req,res)=>{
    const id = req.body.id;
    const contact = req.body.contact;
    const number = req.body.number;
    conexion.query('UPDATE contactos SET ? WHERE id = ?', [{nombre:contact, numero:number}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}