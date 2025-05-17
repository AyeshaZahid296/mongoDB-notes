//Update a row
db.employee.updateOne({ name: 'Ayesha' },
    {
        $set: {
            'name': 'Abbas',
            'lang': 'JavaScript',
            'member_since': 51
        }
    }, { upsert: true })

//Mongodb Increment Operator
db.employee.update({ name: 'Ali' },
    {
        $inc: {
            member_since: 2
        }
    })

//Mongodb Rename Operator
db.employee.update({ name: 'Rafia' },
    {
        $rename: {
            member_since: 'member'
        }
    })