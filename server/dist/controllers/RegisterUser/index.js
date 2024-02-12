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
exports.RegisterUser = void 0;
const prisma_1 = require("../../Services/prisma");
const bcryptjs_1 = require("bcryptjs");
const RegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            error: true,
            message: "Porfavor, preecha todos os campos!",
        });
    }
    const alreadyExists = yield prisma_1.prisma.user.findUnique({ where: { email } });
    if (alreadyExists) {
        return res.status(400).json({
            error: true,
            message: "Email já cadastrado",
        });
    }
    const passHash = yield (0, bcryptjs_1.hash)(password, 8);
    const user = yield prisma_1.prisma.user.create({
        data: {
            name,
            email,
            password: passHash,
        },
        select: {
            id: true,
            name: true,
            email: true,
        },
    });
    return res.status(200).json({
        error: false,
        message: "Usuario criado com sucesso",
        user,
    });
});
exports.RegisterUser = RegisterUser;
