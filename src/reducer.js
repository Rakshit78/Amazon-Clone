export const initialState = {
    basket:[],
    user:null,
    
};
// selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item)=> item.price + amount, 0);
//ends use to total amount
const reducer = (state, action)=>{
    console.log(action);
    switch (action.type) {
        case 'Add_TO_BASKET':
          return {
              ...state,
              basket: [...state.basket, action.item]
          }  ;
          case "REMOVE_FROM_BASKET":
            
             const index = state.basket.findIndex(
                 (basketItem) => basketItem.id=== action.id
             );
             let newbasket =[...state.basket];
             if(index>= 0){
             newbasket.splice(index,1);
             }else{
                 console.warn(
                     `cant remove id: ${action.id}`
                 )
             }
             return{
                 ...state,
                 basket:newbasket,
             }
             case 'SETUSER':
             return {
                 ...state,
                 user:action.user
    }

            
          default:
              return state;
         
    }
};
export default reducer;