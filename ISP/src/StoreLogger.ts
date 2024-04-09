import IStoreLogger from './interfaces/IStoreLogger'

export default class StoreLogger implements IStoreLogger {
    public saving(id: number): void {
        console.log(`Saving message ${id}.`)
    }

    public saved(id: number): void {
        console.info(`Saved message ${id}.`)
    }

    public readingFileStore(id: number): void {
        console.debug(`Reading message ${id} from FileStore.`)
    }

    public readingCache(id: number): void {
        console.debug(`Reading message ${id} from StoreCache.`)
    }

    public didNotFound(id: number): void {
        console.debug(`No message ${id} found.`)
    }

    public missingFromCache(id: number): void {
        console.debug(`Message ${id} missing from cache.`)
    }

    public returning(id: number): void {
        console.debug(`Returning message ${id}.`)
    }

    public errorSaving(id: number): void {
        console.debug(`Error saving message ${id}.`)
    }
}