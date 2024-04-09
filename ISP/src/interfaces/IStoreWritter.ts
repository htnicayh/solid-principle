export default interface IStoreWritter {
    write(id: number, message: string): void;
}