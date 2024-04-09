import IStoreReader from './interfaces/IStoreReader';
import IStoreWritter from './interfaces/IStoreWritter';

export default class StoreLogger implements IStoreWritter, IStoreReader {
    writter: IStoreWritter;
    reader: IStoreReader;

    constructor(_writter: IStoreWritter, _reader: IStoreReader) {
        this.writter = _writter;
        this.reader = _reader;
    }

    public write(id: number, message: string): void {
        this.saving(id);
        try {
            this.writter.write(id, message);
        } catch (error) {
            this.errorSaving(id);
        }

        this.saved(id);
    }

    public read(id: number): string {
        this.reading(id);
        const readValue = this.reader.read(id);

        if (readValue) {
            this.returning(id);
        } else {
            this.didNotFound(id);
        }

        return readValue;
    }

    public saving(id: number): void {
        console.log(`Saving message ${id}.`);
    }

    public saved(id: number): void {
        console.info(`Saved message ${id}.`);
    }

    public reading(id: number): void {
        console.info(`Reading message ${id}.`);
    }

    public didNotFound(id: number): void {
        console.debug(`No message ${id} found.`);
    }

    public missingFromCache(id: number): void {
        console.debug(`Message ${id} missing from cache.`);
    }

    public returning(id: number): void {
        console.debug(`Returning message ${id}.`);
    }

    public errorSaving(id: number): void {
        console.debug(`Error saving message ${id}.`);
    }
}
