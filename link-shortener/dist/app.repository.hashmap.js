"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRepositoryHashmap = void 0;
const rxjs_1 = require("rxjs");
class AppRepositoryHashmap {
    constructor() {
        this.hashMap = new Map();
    }
    get(hash) {
        return (0, rxjs_1.of)(this.hashMap.get(hash));
    }
    put(hash, url) {
        return (0, rxjs_1.of)(this.hashMap.set(hash, url).get(hash));
    }
}
exports.AppRepositoryHashmap = AppRepositoryHashmap;
//# sourceMappingURL=app.repository.hashmap.js.map