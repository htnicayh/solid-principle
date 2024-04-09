import MessageStore from './MessageStore';
import fs from 'fs';
import path from 'path'

const dirtest = "./testfiles";
const dirpath = path.join(__dirname,  dirtest)

if(!fs.existsSync(dirpath)){
  fs.mkdirSync(dirpath)
}

console.log("** Test the CustomMessageStore class **")
console.log()

const messagestore = new MessageStore(dirtest);

messagestore.save(99, 'Message 99 saved via MessageStore class')
const fileMessage99 = messagestore.read(99)
console.log(fileMessage99)
const fileMessage33 = messagestore.read(33)
console.log(fileMessage33)
messagestore.save(33, 'Message 33 saved via MessageStore class')
console.log()