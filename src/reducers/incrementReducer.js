let initialState = {
	count:0
}

 function increaseReducer(state = initialState, action) {
	
	if(action.type == "INCREMENT") {
		return {count:state.count+1}
	}
	

	else {
		return state;
	}

}

export default increaseReducer;
