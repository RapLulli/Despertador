export default function DespertadorReducer( state = [], action ){
    switch(action.type){
        case "NOVO_ALARME": 
        return [...state, action.payload]
        default: 
        return state;
    }
}