//Search in a MongoDb Database
db.inventry.find({ item: 'wire' })

//Limit the number of rows in output
db.inventry.find().limit(2)

//Count the number of rows in the output
db.inventry.find().count()

//Skip the first row in output 
db.inventry.find().skip(1)

//we us skip() and limit() in pagunation
//Achieving pagination using MongoDB find and limit (e.g show 8 results par page)
let pageNo = 1;
let no = 8; // Number of results per page
db.blogs.find().skip((pageNo - 1) * no).limit(no)
pageNo = 1  db.blogs.find().skip(0).limit(8)
pageNo = 2  db.blogs.find().skip(8).limit(8)