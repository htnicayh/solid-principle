import IStore from './interfaces/IStore';

export default class DatabaseStore implements IStore {
    write(id: number, message: string): void {
        
    }

    read(id: number): string {
        return ''
    }
}