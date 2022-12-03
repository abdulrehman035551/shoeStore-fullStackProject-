import { ConstructionOutlined } from "@mui/icons-material"
import { createSlice } from "@reduxjs/toolkit"

const initialState = []


const addtoCard = createSlice({
    initialState,
    name: "add",
    reducers: {
        add(state, action) {
    
            let item =state.find((item)=>
            {
                return item._id == action.payload._id;
            })
            if(item)
            {
          
                item.count++;
           
            }
            else{
                state.push(action.payload)
            
            }

            

        },
        
        remove(state, action) 
        
        
        {
    //         let { value } = action.payload;
    // state.splice(value, 1);
           state.splice(state.findIndex((arrow) => arrow.id == action.payload), 1);
            // return state.filter((items) => {
            //     if (items.id !== action.payload) {
            //         return true
            //     }
            // })
        }
    }


})




export const { add, remove } = addtoCard.actions;
export default addtoCard.reducer;
