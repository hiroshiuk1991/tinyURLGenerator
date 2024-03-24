import { AppRepository } from './app.repository';
import { Observable } from 'rxjs';
export declare class AppRepositoryRedis implements AppRepository {
    private readonly redisClient;
    constructor();
    get(hash: string): Observable<string>;
    put(hash: string, url: string): Observable<string>;
}
