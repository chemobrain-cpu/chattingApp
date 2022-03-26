import { TOKEN,ACTIVE_USER,USERS,ACTIVE_ROOM,MESSAGES,INJECT_MESSAGE,ROOM_MESSAGES,CLEAR_CHAT,CLEAR_MESSAGES,SEND_MESSAGE,SIGNOUT} from "../action/auth";

const initialState={
    token:"",
    userData:{},
    users:[],
    messages:[],
    activeRoom:'',
    activeRoomMessages:[]
    

    //the active rooms are 
}

export const authReducer = (state= initialState,action)=>{
    switch (action.type) {
    
        case TOKEN:
            
                return {
                    ...state,
                    token:action.payload,
                    
                }

            
            break;

        case ACTIVE_USER:
                return {
                    ...state,
                    userData:action.payload
                }
            
           
            break;
        case USERS:
           
                return {
                    ...state,
                    users:action.payload
                

            }
            break;
        case ACTIVE_ROOM:
           
                return {
                    ...state,
                    activeRoom:action.payload
                }
            

            break;
        case MESSAGES:
            let newArr = [...state.messages,...action.payload]

        let getUniqueMessages=(arr,key)=>{
            return [...new Map(arr.map(item=>[item[key],item])).values()]

        }
        let uniqueData = getUniqueMessages(newArr,'_id')

            return {
                ...state,
                messages:newArr
            }
            
            break;
        case INJECT_MESSAGE:
            let message = action.payload
            let messagesInStore = state.messages
            
            let exist = messagesInStore.filter(data=>data._id == message._id)
            if(exist.length == 0){
                return {
                    ...state,
                    messages:[...state.messages,action.payload],
                    activeRoomMessages:[...state.activeRoomMessages,action.payload]
                }

            }
            return {
                ...state,
               
            }

        case ROOM_MESSAGES:
            return {
                ...state,
                activeRoomMessages:action.payload
                
            }


            break
        case CLEAR_CHAT:
            return {
                ...state,
                activeRoomMessages:[]
            }

         break

        case CLEAR_MESSAGES:
            return {
                ...state,
                messages:[]
            }

        case SEND_MESSAGE:
            return {
                ...state,
                messages:[...state.messages,action.payload],
                activeRoomMessages:[...state.activeRoomMessages,action.payload]
            }
        case SIGNOUT:
            return {
                token:"",
                userData:{},
                users:[],
                messages:[],
                activeRoom:'',
                activeRoomMessages:[]
               
            }


        default:
            break;

    }
    return state
}

