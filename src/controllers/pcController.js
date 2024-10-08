const pcModel = require('../modells/pcModel');

class PcController{
    async insertPc(req, res){
        const { asset, disp, msg, serviceTag, user, status} = req.body;
        const pcAlreadExists = await pcModel.findOne({asset});

        if(pcAlreadExists){
            return res.status(404).json({ message: "Este Asset já existe no banco" });
        }
        const createPc = await pcModel.create(req.body);
        return res.status(200).json(createPc);
    };
    async getAllPc(req, res){
        const pcs = await pcModel.find();
        return res.status(200).json(pcs);
    };
    async getPc(req, res){
        try {
            const { id } = req.params;
            const pcFindId = await pcModel.findById(id);

            // Se não encontrar o pc pelo id:

            if (!pcFindId) {
                return res.status(404).json({ message: "Computador não encontrado!" });
            }

            // Se encontrar ele retorna o pc cadastrado:

            return res.status(200).json(pcFindId);

        } catch (error) {
            return res.status(404).json({ message: "Id não encontrato." })
        }
    }
    async findPc(req, res){
        const { asset } = req.body;
        const pcAlreadExists = await pcModel.findOne({asset});
        return res.status(200).json(pcAlreadExists);
    };
    async searchPc(req, res){
        const {q} = req.query
        const pcs =  await pcModel.find({asset: new RegExp(q, "i")})

        return res.status(200).json(pcs);
    }
    async updatePc(req, res){
        try {
            const { id } = req.params;

            await pcModel.findByIdAndUpdate(id, req.body);
            
            return res.status(200).json({ message: "Computador atualizado com sucesso" });

        } catch (error) {
            return res.status(404).json({ message: "Id não encontrato." })
        }
    };
    async deletePc(req, res){
        try {
            const { id } = req.params;
            // Para encontrar o pc ele use o id e para atualizar ele usa o req.body:

            const pcDelete = await pcModel.findByIdAndDelete(id, req.body);

            if (!pcDelete) {
                return res.status(404).json({ message: "Computador não encontrado!" });
            }

            // Se encontrar ele retorna o pc cadastrado:

            return res.status(200).json({ message: "Computador excluído com sucesso" });

        } catch (error) {
            return res.status(404).json({ message: "Id não encontrato." })
        }
    };
}


module.exports = new PcController();