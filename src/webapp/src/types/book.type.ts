export default interface IBookData {
    id?: string | null;
    title: string,
    author: string,
    isbnNumber: string,
    coverPhotoURL: string,
    price: string,
    language: string,
    actions?: string | null
}