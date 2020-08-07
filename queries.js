const  Pool  = require('pg');

const pool = require('pg').pool;

const pool = new Pool({
    user : 'aimeirak',
    host : 'localhost',
    database:'api_test',
    password:5432
})

const getUsers =(req,res)=>{
    pool.query('SELECT * FROM users ORDER BY ID ASC',(err,results)=>{
         if(err){
             throw err;
         }
         else{
             res.status(200).json(results.rows);
         }
    })
}

const getUserById = (req,res)=>{
    pool.query('SELECT * FROM users ORDER BY ID=$1',[ID],(err,results)=>{

        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
    })
}
const createUser  = (req,res)=>{
    pool.query('INSERT INTO users (name,email,password) values($1,$2,$3)',[name,email,password],(err,results)=>{
        if(err){
            throw err;
        }
        res.status(201).send(`User Added successfully with ID:${results.insertId}`)
    })
}
const updateUser = (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query('update users set name=$1,email=$2,password=$3 where ID=$4'),[name,email,password,id],(err,results)=>{
        if(err){
            throw err;
        }
        res.status(200).send(`User updated successfully with this ID ${ID}`);
    }
}

const deleteUser = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM users where ID=$1',[id],(err,results)=>{
        if(error){
            throw err;
        }
        response.status(200).send(`User deleted with ID: ${id}`);
    })
}
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }