import IGenre from "../interfaces/IGenre";

class GenreService {
    backendUrl: string = "https://localhost:7163/api/genre";

    async getGenres(): Promise<Array<IGenre>> {
        let response = await fetch(this.backendUrl + "/list");
        let genres: Promise<Array<IGenre>> = await response.json() as Promise<Array<IGenre>>;
        return genres;
    }
}

export default GenreService;