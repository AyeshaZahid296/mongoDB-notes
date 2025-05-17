C - create
R - read
U - update
D - delete

    //Show all Rows in a Collection
    db.inventary.find()

//Show all Rows in a Collection (Prettified)
db.inventary.find().pretty()

//Find the first row matching the object
db.inventary.findOne({ item: 'wire' })

//Insert One Row
db.inventary.insert({
    'item': 'wire',
    'size': { h: 23, w: 2.1 },
    'qty': 6
})

//Insert many Rows
db.inventary.insertMany([{
    'item': 'wire',
    'size': { h: 23, w: 2.1 },
    'qty': 6
},
{
    'item': 'cups',
    'size': { h: 6, d: 6 },
    'qty': 12
},
{
    'item': 'plates',
    'size': { h: 1.1, d: 8 },
    'qty': 30
}])

