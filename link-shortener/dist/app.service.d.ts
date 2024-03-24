import { Observable } from 'rxjs';
import { AppRepository } from './app.repository';
export declare class AppService {
    private readonly appRepository;
    constructor(appRepository: AppRepository);
    getWelcome(): string;
    shorten(url: string): Observable<string>;
    retrieve(hash: string): Observable<string>;
}
