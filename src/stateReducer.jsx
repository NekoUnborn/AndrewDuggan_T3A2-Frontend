
import { createContext } from "react";

export default function stateReducer(currentState, action) {
  switch (action.type) {
    case "addChecklistEntry": {
      return {
        ...currentState,
        checkListEntries: [action.data, ...currentState.checkListEntries],
      };
    }

    case "setChildren": {
      return {
        ...currentState,
        children: action.data,
      };
    }

    case "setChecklistEntries": {
      return {
        ...currentState,
        checkListEntries: action.data,
      };
    }
    case 'updateCheckListEntries' :{
      return {
        ...currentState, checkListEntries: [...currentState.checkListEntries, action.data]
      };
    }
    case 'updateChildren' : {
      return {
        ...currentState, children: [...currentState.children, action.data]
      }
    }
    case "setToken": {
      localStorage.setItem("token", action.data.token);
      return {
        ...currentState,
        token: action.data.token,
      };
    }
    case 'setMedicineList' : {
      return {
          ...currentState, medicine: action.data  
      }
  }
  case 'removeChild' : {
    const newList = currentState.children.filter((child) => {
      return child.id !== action.data.id
    })
    return {
      ...currentState, children: newList
    }
  }
  case 'filterMedicineList' : {
    let newFilter = []
    for(let item of currentState.medicine){
      if(item[0].includes(action.filterValue)){
        newFilter.push({name: item[0], description: item[1]})
      }
    }
    return {
      ...currentState, filteredMedicine: newFilter
    }
  }
    case 'addMedicine' :{   
      return {
          ...currentState, medicine: [...currentState.medicine, action.data]
      }
  }
  case 'setMessage' : {
    return {
      ...currentState, message: action.data
    }
  }
    default:
      return currentState;
  }
}

export const stateContext = createContext();
