const {Router} = require ('express');
const router = Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

router.post('/get', (req,res) => {
    /*const {id} = req.body;*/
    var get = db.get('figura')/*.find({ id: parseInt(id) })*/.value()
    res.send(get);
});

router.post('/delete', (req,res) => {
    const {id} = req.body;
    db.get('figura').remove({ id: parseInt(id) }).write()
    res.send("deleted successfully");
});

router.post('/post', (req,res) => {

   var count=  db.get('figura').size().value();
   const {titulo,descripcion,tipo,metros,coordenadas } = req.body; 
   if (titulo && descripcion && tipo && metros && coordenadas){
       db.defaults({figura: []})
       .write() 
    // Add a post
    db.get('figura')
    .push({id:count,titulo:titulo,descripcion:descripcion,tipo:tipo,metros:metros,coordenadas:coordenadas})
    .write();

       res.send('saved successfully');
   } else{
       res.send ('wrong formatting');
   }
});



module.exports = router;