"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRepositoryRedis = void 0;
const rxjs_1 = require("rxjs");
const redis_1 = require("redis");
class AppRepositoryRedis {
    constructor() {
        const host = process.env.REDIS_HOST || 'redis';
        const port = +process.env.REDIS_PORT || 6379;
        this.redisClient = (0, redis_1.createClient)({
            url: `redis://${host}:${port}`,
        });
        (0, rxjs_1.from)(this.redisClient.connect()).subscribe({ error: console.error });
        this.redisClient.on('connect', () => console.log('Redis connected'));
        this.redisClient.on('error', console.error);
    }
    get(hash) {
        return (0, rxjs_1.from)(this.redisClient.get(hash));
    }
    put(hash, url) {
        return (0, rxjs_1.from)(this.redisClient.set(hash, url)).pipe((0, rxjs_1.mergeMap)(() => (0, rxjs_1.from)(this.redisClient.get(hash))));
    }
}
exports.AppRepositoryRedis = AppRepositoryRedis;
//# sourceMappingURL=app.repository.redis.js.map