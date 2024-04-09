import FileStore from './FileStore';
import IStore from './IStore';
import StoreCache from './StoreCache';
import StoreLogger from './StoreLogger';

export default class MessageStore {
    store: IStore;
    cache: StoreCache;
    logger: StoreLogger;

    constructor(_directory: string) {
        this.logger = new StoreLogger();
        this.store = new FileStore(_directory, this.Logger);
        this.cache = new StoreCache(this.Logger);
    }

    /**
     * A getter that returns an instance of logger
     * Purpose of this is to be able to extend this class
     * and use a different type of logger (that inherits from StoreLogger)
     */
    get Logger() {
        return this.logger;
    }

    /**
     * A getter that returns an instance of store
     * Purpose of this is to be able to use a different type of store
     * that would implement the IStore interface
     */
    get Store() {
        return this.store;
    }

    /**
     *
     * @param id
     * @param message
     *
     * Function writes the file to disk using the id as part
     * of the filename. The id is a number and the file name is
     * formed as a .txt file using the pattern id.txt. Its saved
     * in the relative directory as set in the constructor.
     */
    public save(id: number, message: string) {
        this.Store.write(id, message);

        this.cache.addOrUpdate(id, message);
    }

    /**
     *
     * @param id the id of the file to read
     *
     * Function checks if the file exists and
     * if not returns an empty string.
     * If the file does exist then the function
     * checks if the file id is in the cache and
     * if not will read the contents of the file
     * from disk and add to the cache.
     *
     * @returns message string
     */
    public read(id: number): string {
        const message = this.cache.getOrAdd(
            id, () => this.Store.read(id)
        )

        return message
    }
}
