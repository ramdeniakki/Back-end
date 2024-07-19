const fs = require('fs')




/*    WritingFile:
Structure:
fs.writeFile(file,data,function(){
    if(err) console.log(err)
    else console.log("File is Created!")
})
*/
/*


Code:
fs.writeFile("Abc.txt","Hello aap kaiso!",function(err){
    if(err) console.log(err)
    else console.log("File is Created Buddy!")
})

we can create muliple files.
Code: 
fs.writeFile("File2.text","hai toh dursa file hai bhai",function(err){
    if(err) console.log(err)
    else console.log("Dursa file created")
}
)
*/

/* Reading the File
Structure: 
fs.readFile(File,function(err,data){
    if(err) console.log(err)
    else console.log(data)
})

Code:
fs.readFile('./Abc.txt',function(err,data){
    if(err) console.log(err)
    else console.log(data)
})
Output: <Buffer 48 65 6c 6c 6f 20 61 61 70 20 6b 61 69 73 6f 21>

// This gives the HexaDecimal code to conver the This buffer code use utf-8 it will convert to English.
Code: 
fs.readFile('Abc.txt','utf-8',function(err,data){
    if(err) console.log(err)
    else console.log(data)
})

To Encounter the error Just rename the filename or filepath.
Code:
fs.readFile('Abc.file','utf-8',function(err,data){
    if(err) console.log(err)
    else console.log(data)
})

*/
/*Append -> Adding into the File.
 Structure:fs.appendFile(filepath,data,function(err){})
Code:
fs.appendFile("Abc.txt","Appended Data",function(err){
    if(err) console.log(err.message)
    else console.log("Appended Data!")
})


*/


/* Rename The File
Structure:fs.rename(oldpath,newpath,function(err))
Code:
fs.rename("Abc.txt","Hello.txt",function(err){
    if(err) console.log(err)
    else console.log("Renamed the File!")
})
*/


/*   Deleting the File
instead of delete we use unlink
Structure:fs.unlink(path,function(err))
code:
fs.unlink("Hello.txt",function(err){
    if(err) console.log(err.message)
    else console.log("Deleted the File!")
})

*/

/* creating the Folder: mkdir
Structure: fs.mkdir(path,callbacks)
Code:
fs.mkdir("FsMod",function(err){
    if(err) console.log(err)
    else console.log("Created the Folder")
})

*/