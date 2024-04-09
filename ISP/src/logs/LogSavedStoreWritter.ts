import IStoreWritter from '../interfaces/IStoreWritter';

export default class LogSavedStoreWritter implements IStoreWritter {
    public write(id: number): void {
        console.info(`Saved message ${id}.`)
    }
}