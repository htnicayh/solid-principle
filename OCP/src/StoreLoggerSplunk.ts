import StoreLogger from './StoreLogger';

export default class StoreLoggerSplunk extends StoreLogger {
    public saving(id: number): void {
        this.SplunkLogger(`Saving message ${id}.`);
    }

    public saved(id: number): void {
        this.SplunkLogger(`Saved message ${id}.`);
    }

    public readingFileStore(id: number): void {
        this.SplunkLogger(`Reading message ${id} from FileStore.`);
    }

    public readingCache(id: number): void {
        this.SplunkLogger(`Reading message ${id} from StoreCache.`);
    }

    public didNotFound(id: number): void {
        this.SplunkLogger(`No message ${id} found.`);
    }

    public missingFromCache(id: number): void {
        this.SplunkLogger(`Message ${id} missing from cache.`);
    }

    public returning(id: number): void {
        this.SplunkLogger(`Returning message ${id}.`);
    }

    public errorSaving(id: number): void {
        this.SplunkLogger(`Error saving message ${id}.`);
    }

    private SplunkLogger(log: string) {
        console.log('Logged to Splunk: ', log);
    }
}
