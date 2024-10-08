const UserModel = require("../modells/userModel")


class UserController {
    async insertUser(req, res) {
        const { user, company, phone, ceo, email, skill, passWord, } = req.body;
        const userAlreadExists = await UserModel.findOne({ email });
        if (userAlreadExists) {
            return res.status(404).json({ message: "Email já cadastrado." });
        }
        const createUser = await UserModel.create(req.body);
        return res.status(200).json(createUser);
    };
    async getUser(req, res) {
        const users = await UserModel.find();
        return res.status(200).json(users);
    };
    async editUser(req, res) {
        try {
            const { id } = req.params;

            // Para encontrar o pc ele use o id e para atualizar ele usa o req.body:
            await UserModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Usuário atualizado com sucesso" });

        } catch (error) {
            return res.status(404).json({ message: "Id não encontrato." })
        }
    };
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            // Para encontrar o pc ele use o id e para atualizar ele usa o req.body:

            const userDelete = await UserModel.findByIdAndDelete(id, req.body);

            if (!userDelete) {
                return res.status(404).json({ message: "Usuário não encontrado!" });
            }

            // Se encontrar ele retorna o pc cadastrado:

            return res.status(200).json({ message: "Usuário excluído com sucesso" });

        } catch (error) {
            return res.status(404).json({ message: "Id não encontrato." })
        }
     };
}
module.exports = new UserController();