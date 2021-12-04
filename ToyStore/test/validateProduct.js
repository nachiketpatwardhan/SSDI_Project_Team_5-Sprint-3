function validateProduct(name,image,brand,category,description,price,countInStock,rating,numReviews) {
	
	if (name==null) {	
      	return false;
    }
    if(image==null){
        return false;
    }
    if (brand==null) {	
        return false;
    }
    if(category==null){
        return false;
    }
    if (description==null) {         
        return false;
    }
    if(price==null || price<0){
    return false;
    }
    if(countInStock==null || countInStock<0){
        return false;
    }
    if(rating==null || rating<0){
        return false;
    }
    if(numReviews==null || numReviews<0){
        return false;
        }

    return (true);

}

module.exports = validateProduct