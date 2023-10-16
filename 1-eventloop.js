const { error } = require('console');
const {readFile}=require('fs')
console.log('first task');

readFile('./content/first.txt', 'utf-8' ,(err, result) =>
{
    if(err)
    {
        console.log(err);
        return
    }
    console.log(result)
    console.log('commpleted the first task');

})
console.log('starting the next task');