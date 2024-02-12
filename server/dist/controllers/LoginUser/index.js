"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = void 0;
const prisma_1 = require("../../Services/prisma");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const LoginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield prisma_1.prisma.user.findUnique({ where: { email } });
    if (!email || !password) {
        return res.status(400).json({
            error: true,
            message: "Preencha todos os campos corretamente!",
        });
    }
    if (!user) {
        return res.status(400).json({
            error: true,
            message: "Email/senha incorretos",
        });
    }
    const passMatch = yield (0, bcryptjs_1.compare)(password, user === null || user === void 0 ? void 0 : user.password);
    if (!passMatch) {
        return res.status(400).json({
            error: true,
            message: "Email/senha incorretos",
        });
    }
    const token = (0, jsonwebtoken_1.sign)({
        name: user.name,
        email: user.email,
    }, process.env.JWT_SECRET, { subject: user.id, expiresIn: "30d" });
    return res.status(200).json({
        error: false,
        message: "Usuario logado com sucesso!",
        data: {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token,
        },
    });
});
exports.LoginUser = LoginUser;
