import fs, { promises as fsp } from 'fs';
import path from 'path';
import StoreLogger from './StoreLogger';

export default class FileStore {
    directory: string;
    logger: StoreLogger;

    constructor(_directory: string, _logger: StoreLogger) {
        this.directory = _directory;
        this.logger = _logger;
    }

    public async write(id: number, message: string): Promise<any> {
        this.logger.saving(id);

        const fileFullName = this.getFileDirectory(id);

        await fsp
            .writeFile(fileFullName, message)
            .then(() => this.logger.saved(id))
            .catch(() => this.logger.errorSaving(id));
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
