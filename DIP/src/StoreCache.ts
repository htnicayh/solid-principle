import IStoreReader from './interfaces/IStoreReader';
import IStoreWritter from './interfaces/IStoreWritter';

export default class StoreCache implements IStoreWritter, IStoreReader {
    cache: { [key: number]: string };
    writer: IStoreWritter;
    reader: IStoreReader;

    constructor(_writter: IStoreWritter, _reader: IStoreReader) {
        this.cache = {};
        this.writer = _writter;
        this.reader = _reader;
    }

    public write(id: number, message: string): void {
        this.writer.write(id, message);
        this.addOrUpdateCache(id, message);
    }

    public read(id: number): string {
        if (this.exists(id)) {
            return this.cache[id]
        }

        const readValue = this.reader.read(id)
        if (readValue !== '') {
            this.addOrUpdateCache(id, readValue)
        }

        return readValue
    }

    public addOrUpdateCache(id: number, message: string): void {
        this.cache[id] = message;
    }

    public exists?(id: number): boolean {
        return this.cache.hasOwnProperty(id);
    }

    public checkCache(): object {
        return this.cache;
    }
}
