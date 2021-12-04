// validateEmail("icecream123@yahoo.com"); // Must be a string

function validateEmail(email) {
	var emailformat =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (email.match(emailformat)) {
    	
      	return true;
    }
   
    return (false);
}
module.exports = validateEmail



