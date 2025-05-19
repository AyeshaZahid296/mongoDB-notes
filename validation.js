// Create a new collection named "students" with schema validation
db.createCollection("students", {
    validator: {
        $jsonSchema: {
            // Required fields in each document
            required: ["name", "age", "gender"],

            // Optional title for the schema (good for documentation)
            title: "Student Validation",

            // Define types and constraints for fields
            properties: {
                name: {
                    bsonType: "string", // Expect 'name' to be a string
                    minLength: 3,       // Minimum characters allowed (optional)
                    maxLength: 50,      // Maximum characters allowed (optional)
                    description: "Name must be a string and is required"
                },
                age: {
                    bsonType: "int",    // Expect 'age' to be an integer
                    minimum: 5,         // Minimum value for age
                    maximum: 20,        // Maximum value for age
                    description: "Age must be an integer between 5 and 20 and is required"
                },
                gender: {
                    bsonType: "string",          // Expect 'gender' to be a string
                    enum: ["Male", "Female", "Other"], // Only these values allowed
                    description: "Gender must be one of: Male, Female, or Other and is required"
                }
            }
        }
    }
});

//new collection is not made just old one is modified
db.runCommand({
    collMod: "students", // callMode means existing collection name ("students") 
    validator: {
        $jsonSchema: {
            // Required fields in each document
            required: ["name", "age", "gender"],

            // Optional title for the schema
            title: "Student Validation",

            // Define field types and constraints
            properties: {
                name: {
                    bsonType: "string",
                    minLength: 3,
                    maxLength: 50,
                    description: "Name must be a string and is required"
                },
                age: {
                    bsonType: "int",
                    minimum: 5,
                    maximum: 20,
                    description: "Age must be an integer between 5 and 20 and is required"
                },
                gender: {
                    bsonType: "string",
                    enum: ["Male", "Female", "Other"],
                    description: "Gender must be one of: Male, Female, or Other and is required"
                }
            }
        }
    },
    validationLevel: "strict",     // Ensures all new documents must follow the rules
    validationAction: "error"      // Reject invalid inserts/updates
});

