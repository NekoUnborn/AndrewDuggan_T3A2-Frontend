export default function medicineReducer(state, action) {
    switch(action.type){
        case 'updateMedicineList' : {
            return {
                ...state, medicine: action.data  
            }
        }
        default : return state
        case 'addMedicine' :{   
            return {
                ...state, medicine: [...state.medicine, action.data]
            }
        }

    }
}

