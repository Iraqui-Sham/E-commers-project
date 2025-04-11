export default function Reducer(state, action) {
    switch (action.type) {
        case "INC_COUNT_1":
            return { ...state, count1: state.count1 + 1 }
        case "DEC_COUNT_1":
            return state.count1 > 1 ? { ...state, count1: state.count1 - 1 } : state
        case "INC_COUNT_2":
            return { ...state, count2: state.count2 + 1 }
        case "DEC_COUNT_2":
            return state.count2 > 1 ? { ...state, count2: state.count2 - 1 } : state
        case "INC_COUNT_3":
            return { ...state, count3: state.count3 + 1 }
        case "DEC_COUNT_3":
            return state.count3 > 1 ? { ...state, count3: state.count3 - 1 } : state
        default:
            return state
    }
}