import IStoreReader from './interfaces/IStoreReader';
import IStoreWritter from './interfaces/IStoreWritter';

export default class MessageStore implements IStoreWritter, IStoreReader {
    writter: IStoreWritter;
    reader: IStoreReader;

    constructor(_writter: IStoreWritter, _reader: IStoreReader) {
        if (!_writter) {
            throw new Error('Writter argument required.')
        }

        if (!_reader) {
            throw new Error('Reader argument required.')
        }

        this.writter = _writter;
        this.reader = _reader;
    }

    public write(id: number, message: string): void {
        this.writter.write(id, message);
    }

    public read(id: number): string {
       return this.reader.read(id); 
    }
}