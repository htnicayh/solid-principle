import IStore from './IStore';

export default class DatabaseStore implements IStore {
    write(id: number, message: string): void {
        // Database code
    }

    read(id: number): string {
        // Database code
        return ''
    }

    /**
     * Note that we need to throw 'Method not implemented' here
     * because in the context of the SqlStore the 'getFileInfo'
     * method is not required.
     *
     * Note: THIS BREAKS LSP!! We will discuss a solution to this later.
     */
    getFileDirectory(id: number): string {
        throw new Error('Method not implemented.')
    }
}