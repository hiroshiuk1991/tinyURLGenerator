import { AppService } from './app.service';
import { Observable } from 'rxjs';
interface ShortenResponse {
    hash: string;
}
interface ErrorResponse {
    error: string;
    code: number;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getWelcome(): string;
    shorten(url: string): Observable<ShortenResponse | ErrorResponse>;
    retrieveAndRedirect(hash: any): Observable<{
        url: string;
    }>;
}
export {};
