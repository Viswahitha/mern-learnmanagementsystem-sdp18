const initState="Login"
export default function NavReducer(state=initState ,action){
    switch(action.type){
        case "Login":
            return "Login";
        case "Signup":
            return "Signup";
        case "Profile":
            return "Profile";
        default:
            return "Login";
    }

}