import IStoreWritter from './IStoreWritter'

export default interface IStore extends IStoreWritter {
    read(id: number): string
}