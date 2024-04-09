import IStoreCache from './interfaces/IStoreCache';
import IStoreLogger from './interfaces/IStoreLogger';

export default class StoreCache implements IStoreCache {
    cache: any;
    logger: IStoreLogger;

    constructor(_logger: IStoreLogger) {
        this.cache = {};
        this.logger = _logger;
    }

    public addOrUpdate(id: number, message: string): void {
        this.cache[id] = message;
    }

    public getOrAdd(id: number, fnStoreRead: any): string {
        this.logger.readingCache(id);

        if (!this.exists(id)) {
            this.logger.missingFromCache(id);
            const message = fnStoreRead()
            this.addOrUpdate(id, message);
        }

        return this.cache[id];
    }

    public exists?(id: number): boolean {
        return this.cache.hasOwnProperty(id);
    }
}
