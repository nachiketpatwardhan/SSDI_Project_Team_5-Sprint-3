function validateName(name) {
	
	if (name==null) {
    	
      	return false;
    }
    let hasNumber = /[0-9]/g.test(name);

    if(hasNumber){
        return false;
    }
   
    return (true);
}
module.exports = validateName