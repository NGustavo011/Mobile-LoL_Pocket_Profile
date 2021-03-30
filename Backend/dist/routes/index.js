"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var profile_1 = __importDefault(require("./profile"));
var mastery_1 = __importDefault(require("./mastery"));
require("dotenv/config");
var routes = express_1.Router();
routes.use('/profile', profile_1.default);
routes.use('/mastery', mastery_1.default);
exports.default = routes;
