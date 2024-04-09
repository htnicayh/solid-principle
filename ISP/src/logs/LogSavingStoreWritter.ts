import IStoreWritter from '../interfaces/IStoreWritter';

export default class LogSavingStoreWritter implements IStoreWritter {
    public write(id: number): void {
        console.info(`Saving message ${id}.`)
    }
}