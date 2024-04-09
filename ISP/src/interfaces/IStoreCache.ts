export default interface IStoreCache {
    addOrUpdate(id: number, message: string): void;
    getOrAdd(id: number, fnStoreRead: Function): string;
}