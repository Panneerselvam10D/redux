const LoggedInReducer = (state=false, action) =>{
        

    switch(action.type){
        case 'IsLoggedIn' : {
            
        return !state;
        
        
        }
        default: {
        return state;
        }
    }
}
export default LoggedInReducer