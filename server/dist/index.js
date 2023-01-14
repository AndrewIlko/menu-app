"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoDB = __importStar(require("mongodb"));
const url = `mongodb+srv://admin:admin@cluster0.x9dzgnt.mongodb.net/cafe-menu?retryWrites=true&w=majority`;
const data = { db: null };
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/menu", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const info = yield ((_a = data.db) === null || _a === void 0 ? void 0 : _a.collection("menu").find({}).toArray());
    const menuData = [];
    if (info) {
        for (let menu of info) {
            const options = [];
            for (let option of menu.categories) {
                const description = yield ((_b = data.db) === null || _b === void 0 ? void 0 : _b.collection("categories").findOne({ _id: new mongoDB.ObjectId(`${option}`) }));
                if (description) {
                    options.push(description.name);
                }
            }
            menuData.push({ name: menu.name, options });
        }
    }
    if (menuData.length == 0)
        return res.json(null);
    res.json(menuData);
}));
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    const user = new mongoDB.MongoClient(url);
    yield user.connect();
    data.db = user.db();
    console.log(`Server is running on port ${port}.`);
}));
// {
//   name: "";
//   option: [];
// }
