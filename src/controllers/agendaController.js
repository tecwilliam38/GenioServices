// const pcModel = require('../modells/pcModel');
const agendaModel = require('../modells/agendaModel');

class AgendaController{
    async insertAgenda(req, res){
        const { servico, msg, barber, client, status} = req.body;
        const agendaAlreadExists = await agendaModelModel.findOne({servico});

        if(agendaAlreadExists){
            return res.status(404).json({ message: "Esteserviço não está disponível" });
        }
        const createAgenda = await agendaModel.create(req.body);
        return res.status(200).json(createAgenda);
    };
    async getAllAgenda(req, res){
        const agendas = await agendaModel.find();
        return res.status(200).json(agendas);
    };
    async getAgenda(req, res){
        try {
            const { id } = req.params;
            const agendaFindId = await agendaModel.findById(id);

            // Se não encontrar o pc pelo id:

            if (!agendaFindId) {
                return res.status(404).json({ message: "Serviço não encontrado!" });
            }

            // Se encontrar ele retorna o pc cadastrado:

            return res.status(200).json(agendaFindId);

        } catch (error) {
            return res.status(404).json({ message: "Id não encontrato." })
        }
    }
    async findAgenda(req, res){
        const { servico } = req.body;
        const agendaAlreadExists = await agendaModel.findOne({servico});
        return res.status(200).json(agendaAlreadExists);
    };
    async searchAgenda(req, res){
        const {q} = req.query
        const agendas =  await agendaModel.find({servico: new RegExp(q, "i")})

        return res.status(200).json(agendas);
    }
    async updateAgenda(req, res){
        try {
            const { id } = req.params;

            await agendaModel.findByIdAndUpdate(id, req.body);
            
            return res.status(200).json({ message: "Agenda atualizada com sucesso" });

        } catch (error) {
            return res.status(404).json({ message: "Serviço não encontrato." })
        }
    };
    async deleteAgenda(req, res){
        try {
            const { id } = req.params;
            // Para encontrar o pc ele use o id e para atualizar ele usa o req.body:

            const agendaDelete = await agendaModel.findByIdAndDelete(id, req.body);

            if (!agendaDelete) {
                return res.status(404).json({ message: "Agenda não encontrada!" });
            }

            // Se encontrar ele retorna o a agenda cadastrada:

            return res.status(200).json({ message: "Agenda excluída com sucesso" });

        } catch (error) {
            return res.status(404).json({ message: "Id não encontrato." })
        }
    };
}


module.exports = new AgendaController();