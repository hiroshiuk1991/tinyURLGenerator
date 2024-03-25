import { AppRepository } from './app.repository';
import { Observable } from 'rxjs';
export declare class AppRepositoryHashmap implements AppRepository {
    private readonly hashMap;
    constructor();
    get(hash: string): Observable<string>;
    put(hash: string, url: string): Observable<string>;
}
