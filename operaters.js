update operators:
$unset:
$rename
$inc
$mul
$currentDate

$push: Add elements in the last of array
db.student.updateOne(
    { name: "Ayesha" },
    { $push: { skills: "Bootstrap5" } }
)

$pop: Removes the first or last element from an array
remove the last element
db.student.updateOne(
    { name: "Ayesha" },
    { $pop: { skills: 1 } }
)
remove the first element
db.student.updateOne(
    { name: "Ayesha" },
    { $pop: { skills: -1 } }
)


$pull: Remove all arrays from array which matches the query
db.student.updateOne(
    { name: "Ayesha" },
    { $pull: { skills: "Bootstrap5" } }
)

$addToSet: Adds distinct elements to an array
db.student.updateOne(
    { name: "Ayesha" },
    { $addToSet: { skills: "Bootstrap5" } }
)


//Less than
db.comments.find({ member_since: { $lt: 90 } })

//Greater than
db.comments.find({ member_since: { $lte: 90 } })

// Less than or Eq
db.comments.find({ member_since: { $gt: 90 } })

//Greater than or Eq
db.comments.find({ member_since: { $gte: 90 } })