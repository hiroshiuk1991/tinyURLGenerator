"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const rxjs_1 = require("rxjs");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getWelcome() {
        return this.appService.getWelcome();
    }
    shorten(url) {
        if (!url) {
            return (0, rxjs_1.of)({
                error: `No url provided. Please provide in the body. E.g. {'url':'https://google.com'}`,
                code: 400,
            });
        }
        return this.appService.shorten(url).pipe((0, rxjs_1.map)((hash) => ({ hash })));
    }
    retrieveAndRedirect(hash) {
        return this.appService.retrieve(hash).pipe((0, rxjs_1.map)((url) => ({ url })));
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getWelcome", null);
__decorate([
    (0, common_1.Post)('shorten'),
    __param(0, (0, common_1.Body)('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "shorten", null);
__decorate([
    (0, common_1.Get)(':hash'),
    (0, common_1.Redirect)(),
    __param(0, (0, common_1.Param)('hash')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "retrieveAndRedirect", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map