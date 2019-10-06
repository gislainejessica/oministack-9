const ReservaModelo = require('../models/Reserva')

module.exports = {
    async store(req, res){
        const { usuario_id } = req.headers
        const { spot_id } = req.params
        const { data } = req.body

        const reserva = await ReservaModelo.create({
            usuario: usuario_id,
            spot: spot_id,
            data
        })

        await reserva.populate('usuario').populate('spot').execPopulate()
        return res.json(reserva)
    }
}
