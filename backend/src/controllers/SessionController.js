const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { id } = request.body

        console.log(id)

        const ong = await connection('ongs')
            .where('id', id)
            .select('*')
            .first()
        
        if(!ong) return response.status(400).json({ error: 'Nenhuma ONG encontrada com este ID' })
        
        return response.json(ong)
    }
}