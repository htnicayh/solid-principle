export default interface IStore {
    write(id: number, message: string): void
    read(id: number): string
    getFileDirectory(id: number): string
}