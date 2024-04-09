import fs from 'fs';
import path from 'path';
import CustomMessageStore from './CustomMessageStore';

const dirtest = './testfiles';
const dirpath = path.join(__dirname, dirtest);

if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath);
}

(async () => {
    console.log('** Test the CustomMessageStore class **');
    console.log();

    const messagestore = new CustomMessageStore(dirtest);
    await messagestore.save(99, 'Message 99 saved via MessageStore class');
    const fileMessage99 = messagestore.read(99);
    console.log(fileMessage99);
    console.log();
})();
