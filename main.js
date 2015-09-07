
// phone number validation: xxx-xxx-xxxx format
// var phoneNumber = prompt('Enter your phone number with dashes', 'xxx-xxx-xxxx')
// if (phoneNumber[3] === '-' && phoneNumber[7] === '-') {
// 	alert('your phone number is valid')
// }
// else {
// 	alert('your phone number isn\'t valid')
// }

// birth date validation: xx/xx/xx
// var birthDate = prompt('Enter your date of birth', 'mm/dd/yy')
// if (birthDate[2] === '/' && birthDate[5] === '/') {
// 	alert('you entered your date of birth correctly')
// } else {
// 	alert('you entered your date of birth incorrectly')
// }

// postal code validator: xxxxx or xxxxx-xxxx
// var postalCode = prompt('enter your postal code', 'xxxxx or xxxxx-xxxx')
// if (postalCode.length === 5 || (postalCode.length === 10 && postalCode[5] === '-')) {
// 	alert('you entered your postal code correctly')
// } 
// else {
// 	alert('you entered your postal code incorrectly')
// }


// state abbreviation: two characters and all caps
// var stateAbbreviation = prompt('Enter a state abbreviation', 'CO')
// if (stateAbbreviation === stateAbbreviation.toUpperCase() && stateAbbreviation.length === 2) {
// 	alert('Sweet')
// }
// else {
// 	alert('trouble following simple instructions...')
// }

// martial status: must be yes of no | YES, Yes, yes
var martialStatus = prompt('are you married', 'YES or NO')
if (martialStatus.toLowerCase() === 'yes' || martialStatus.toLowerCase() === 'no') {
	alert('thanks for your response')
} 
else {
	alert('what then?')
}