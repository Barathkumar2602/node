const {readFile}=require('fs');
const { reject, result } = require('lodash');


const getText=(path) =>{
    return new Promise((resolve, reject) =>{
        readFile(path,'utf-8', (err, Data) =>
        {
            if(err){
                reject(err)
            }
            else{
                resolve(Data);
            }
        })
    })
}

getText('./content/first.txt').then(result =>console.log(result))