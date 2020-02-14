import { Connection } from './dbconnection';

export const all =  async () => {
    return new Promise((resolve, reject) =>{
        Connection.query("SELECT * from timeentry", (err, result) =>{
            if(err){
                 return reject(err);
            }
                resolve(results);
        }); 
    });
}


export default {
    all 
}