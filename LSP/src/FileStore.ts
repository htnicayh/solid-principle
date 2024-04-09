import fs, { promises as fsp } from 'fs';
import path from 'path';
import StoreLogger from './StoreLogger';
import IStore from './IStore';

export default class FileStore implements IStore {
    directory: string;
    logger: StoreLogger;

    constructor(_directory: string, _logger: StoreLogger) {
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

        this.logger.saved(id);
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
