import MessageStore from './MessageStore';
import fs from 'fs';
import path from 'path'
import FileStore from './FileStore';
import StoreCache from './StoreCache';
import StoreLogger from './StoreLogger';

const dirtest = "./testfiles";
const dirpath = path.join(__dirname,  dirtest)

if(!fs.existsSync(dirpath)){
  fs.mkdirSync(dirpath)
}

const fileStore = new FileStore(dirtest);
const cache = new StoreCache(fileStore, fileStore);
const logger = new StoreLogger(cache, cache);
const messageStore = new MessageStore(logger, logger);

console.log("** Test the CustomMessageStore class **")
console.log()

messageStore.write(99, 'Message 99 saved via messageStore class')
var fileMessage99 = messageStore.read(99)
console.log(fileMessage99)
var fileMessage33 = messageStore.read(33)
console.log(fileMessage33)
messageStore.write(33, 'Message 33 saved via messageStore class')
console.log()