const contatos = require("../models/contatos.json");

const getAll = (req, res) => {
    res.status(200).send(contatos)    
}

const getById = (req, res) => {
    const filteredId = req.params.id
    const requestedId = contatos.find(contato => contato.id == filteredId)

    res.status(200).send(requestedId)
}


const getByName = (req, res) => {
    const filteredName = req.query.nome.toLowerCase()
    const requestedName = contatos.find(contato => contato.nome.toLowerCase().includes(filteredName))

    res.status(200).send(requestedName)
}

const createContact = (req, res) => {
    const requestedId = req.body.id;
    const requestedName = req.body.nome;
    const requestedCell = req.body.celular;
    const requestedSocialMedias = req.body.redesSociais;

    const newContact = {
        id: requestedId,
        nome: requestedName,
        celular: requestedCell,
        redesSociais: requestedSocialMedias,
    }

    contatos.push(newContact)

    res.status(200).send(newContact)
}

const dellContact = (req, res) => {
    const idRequerido = req.params.id;
    const requestedName = contatos.find(contato => contato.id == idRequerido);

    const indice = contatos.indexOf(requestedName);

    contatos.splice(indice, 1);

    res.status(200).send(
        [
            {
                "message" : "Contato excluído"
            },
            contatos
        ]

    )

}

module.exports = {
    getAll,
    getById,
    getByName,
    createContact,
    dellContact
}