import StoreLogger from './StoreLogger';

export default class StoreCache {
    cache: any;
    logger: StoreLogger;

    constructor(_logger: StoreLogger) {
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

    public checkCache(): object {
        return this.cache;
    }
}
