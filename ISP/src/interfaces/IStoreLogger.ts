export default interface IStoreLogger {
    saving(id: number): void;
    saved(id: number, message: string): void;
    readingFileStore(id: number): void;
    readingCache(id: number): void;
    didNotFound(id: number): void;
    missingFromCache(id: number): void;
    returning(id: number): void;
    errorSaving(id: number): void;
}
