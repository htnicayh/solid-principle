import StoreCache from './StoreCache';
import StoreLogger from './StoreLogger';
import FileStore from './FileStore';
import MessageStore from './MessageStore';
import fs from 'fs';
import path from 'path';

const dirtest = './testfiles';
const dirpath = path.join(__dirname, dirtest);

if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath);
}

/** StoreLogger */
console.log('** Test the StoreLogger class **');
console.log();
const logger = new StoreLogger();
logger.saving(1);
logger.saved(1);
logger.readingFileStore(1);
logger.didNotFound(1);
logger.readingCache(1);
console.log();

/** StoreCache */
console.log('** Test the StoreCache class **');
console.log();
const cache = new StoreCache(logger);
cache.addOrUpdate(1, 'Message 1');
console.log(cache.checkCache());
const message1 = cache.getOrAdd(1);
console.log(message1);
const exists2 = cache.exists(2);
console.log('Message 2 Exists?', exists2);
const message2 = cache.getOrAdd(2, 'Message 2');
console.log();

(async () => {
    /** FileStore */
    console.log('** Test the FileStore class **');
    console.log();
    const filestore = new FileStore(dirtest, logger);
    const fileInfo = filestore.getFileDirectory(1);
    console.log(fileInfo);
    await filestore.write(1, 'Message File 1');
    const fileMessage1 = filestore.read(1);
    console.log(fileMessage1);
    const fileMessage2 = filestore.read(2);
    console.log(fileMessage2);
    await filestore.write(2, 'Message File 2');
    const fileMessage2After = filestore.read(2);
    console.log(fileMessage2After);
    console.log();

    /** MessageStore */
    console.log('** Test the MessageStore class **');
    console.log();
    const messagestore = new MessageStore(dirtest);
    await messagestore.save(99, 'Message 99 saved via MessageStore class');
    const fileMessage99 = messagestore.read(99);
    console.log(fileMessage99);
    console.log();
})();
