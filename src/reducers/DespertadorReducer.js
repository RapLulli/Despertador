export default function DespertadorReducer(state = [], action) {
    switch (action.type) {
        case "NOVO_ALARME":
            return [...state, action.payload]

        case "DELETAR_ALARME":
            return state.filter(i => i.id !== action.id)

        default:
            return state;
    }
}