import Sequelize from 'sequelize'

var conn;
(async function(){
    if(!conn){
        try{
            conn = new Sequelize("dbName",null,null,{
                dialect: "sqlite",
                storage: "database/db.sqlite"
            });
            console.log("connected!");
            try{
                await conn.sync({force: true});
                console.log("Success");
            }
            catch(error){
                console.log('error');
            }
            }catch(error){
                console.log('error');
            }
        }
})();

export const Books = conn.define("Books",{
    Id: {type:Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    Name: Sequelize.STRING,
})