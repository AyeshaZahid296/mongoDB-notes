//Less than
db.comments.find({ member_since: { $lt: 90 } })

//Greater than
db.comments.find({ member_since: { $lte: 90 } })

// Less than or Eq
db.comments.find({ member_since: { $gt: 90 } })

//Greater than or Eq
db.comments.find({ member_since: { $gte: 90 } })