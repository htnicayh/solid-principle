import fs from 'fs';
import path from 'path';
import IStore from './interfaces/IStore';
import IStoreLogger from './interfaces/IStoreLogger';
import IFileLocator from './interfaces/IFileLocator';

export default class FileStore implements IStore, IFileLocator {
    directory: string;
    logger: IStoreLogger;

    constructor(_directory: string, _logger: IStoreLogger) {
        this.directory = _directory;
        this.logger = _logger;
    }

    public write(id: number, message: string): void {
        this.logger.saving(id);

        const fileFullName = this.getFileDirectory(id);

        try {
            fs.writeFileSync(fileFullName, message);
        } catch (err) {
            this.logger.errorSaving(id);
        }

        this.logger.saved(id, message);
    }

    public read(id: number): string {
        this.logger.readingFileStore(id);

        const fileFullName = this.getFileDirectory(id);
        const exists = fs.existsSync(fileFullName);

        if (!exists) {
            this.logger.didNotFound(id);
            return '';
        }
        return fs.readFileSync(fileFullName, { encoding: 'utf-8' });
    }

    public getFileDirectory(id: number) {
        return path.join(__dirname, this.directory, `${id}.txt`);
    }
}
