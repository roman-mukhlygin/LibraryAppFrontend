import IAuthor from "../interfaces/IAuthor";

class AuthorService {
    backendUrl: string = "https://localhost:7163/api/author";

    async getAuthors(): Promise<Array<IAuthor>> {
        let response = await fetch(this.backendUrl + "/list");
        let authors: Promise<Array<IAuthor>> = await response.json() as Promise<Array<IAuthor>>;
        return authors;
    }
}

export default AuthorService;