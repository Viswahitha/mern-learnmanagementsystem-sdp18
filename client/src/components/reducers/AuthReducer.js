export default function AuthReducer(state=[null,0],action){
    switch(action.type){
        case "login":
            return [action.data.name, action.data.role]
        case "Logout":
            return [null,0]
        default:
            return [null,0]
    }

}