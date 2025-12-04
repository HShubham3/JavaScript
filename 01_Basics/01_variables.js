const accountId = 6759340
let userName = "Shubham"
var email = "shubham@google.com"
accountStatus = "Active"

// accountId = "67890" Once const varible value assigned we can't reassign diffrent value

userName = "Shubham H"
email = "shubham.h@google.com"
accountStatus = "InActive"

/*
Prefer not to use var becuase of issue in block scope and functional scope
*/

console.log("Account Details: ")
console.table([accountId, userName, email, accountStatus])