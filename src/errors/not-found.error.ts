import { HttpError } from "./http.error";

export class NotFoundError extends HttpError {
    constructor(message: string = "Data tidak ditemukan") {
        super(message, 404);
        this.name = "NotFoundError";
    }
}
