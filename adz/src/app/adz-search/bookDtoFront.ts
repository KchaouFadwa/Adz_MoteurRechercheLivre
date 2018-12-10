export class GoogleResult {
    items: Item[];
}
export class Item {
    volumeInfo: BookDtoFront;
}
export class BookDtoFront {
    authors: string[];
    categories: string[];
    contentVersion: string;
    description: string;
    imageLinks: ImageLinks;
    language: string;
    pageCount: number;
    publishedDate: Date;
    publisher: string;
    title: string;
}
class ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}