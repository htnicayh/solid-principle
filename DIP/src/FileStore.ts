import fs from 'fs';
import path from 'path';
import IFileLocator from './interfaces/IFileLocator';
import IStoreReader from './interfaces/IStoreReader';
import IStoreWritter from './interfaces/IStoreWritter';

export default class FileStore implements IStoreWritter, IStoreReader, IFileLocator {
    directory: string;

    constructor(_directory: string) {
        this.directory = _directory;
    }

    public write(id: number, message: string): void {
        const fileFullName = this.getFileDirectory(id);
        fs.writeFileSync(fileFullName, message);
    }

    public read(id: number): string {
        const fileFullName = this.getFileDirectory(id);
        const exists = fs.existsSync(fileFullName);

        if (!exists) {
            return '';
        }
        return fs.readFileSync(fileFullName, { encoding: 'utf-8' });
    }

    public getFileDirectory(id: number) {
        return path.join(__dirname, this.directory, `${id}.txt`);
    }
}
