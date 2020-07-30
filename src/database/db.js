// importar a dependência do sqlite3
const sqlite3 = require('sqlite3').verbose()

// criar o objeto que irá fazer operações no banco de dados.
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db
    // utilizar o objeto de banco de dados, para nossas operações
    // db.serialize(() => {
    //     // com comandos SQL eu vou:

//     // Criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS PLACES (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     // Consultar dados na tabela
//     // db.run(`
//     //     INSERT INTO places (
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?,?,?,?,?,?,?);
//     // `)

//     // Inserir dados na tabela
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         'a',
//         'Colectoria',
//         'Guilherme Gemballa, Jardim América',
//         'Número 260',
//         'Santa Catarina',
//         'Rio do Sul',
//         'Resíduos Eletrõnicos, Lâmpadas'
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log('Cadastrado com sucesso')
//         console.log(this)
//     }

//     // db.run(query, values, afterInsertData)

//     // Deletar um dado da tabela
// db.run(`DELETE FROM PLACES WHERE id = ?`, [3], function(err) {
//     if (err) {
//         return console.log(err)
//     }
//     console.log('Registro deletado com sucesso!')
// })

//     // 3 Consultar os dados da tabela
//     db.all(`SELECT * FROM places`, function(err, rows) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log('Aqui estão seus registros: ')
//         console.log(rows)
//     })

// })