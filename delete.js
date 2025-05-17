//Delete Row
db.employee.remove({ name: 'Ayesha' })

// Delete All rows
db.employee.deleteMany({})

// Delete by specific status
db.employee.deleteMany({ stauts: "A" })

// Delete specific one
db.employee.deleteOne({ stauts: "D" })