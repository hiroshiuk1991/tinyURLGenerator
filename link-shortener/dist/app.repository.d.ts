import { Observable } from 'rxjs';
export interface AppRepository {
    put(hash: string, url: string): Observable<string>;
    get(hash: string): Observable<string>;
}
export declare const AppRepositoryTag = "AppRepository";
