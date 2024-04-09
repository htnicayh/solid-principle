import FileStore from './FileStore';
import StoreCache from './StoreCache';
import StoreLogger from './StoreLogger';

export default class MessageStore {
    filestore: FileStore;
    cache: StoreCache;
    logger: StoreLogger;

    constructor(_directory: string) {
        this.logger = new StoreLogger();
        this.filestore = new FileStore(_directory, this.logger);
        this.cache = new StoreCache(this.logger);
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
    public async save(id: number, message: string) {
        await this.filestore.write(id, message);

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
        if (!this.cache.exists(id)) {
            const message = this.filestore.read(id);

            this.cache.getOrAdd(id, message);
        }

        return this.cache.getOrAdd(id);
    }
}
