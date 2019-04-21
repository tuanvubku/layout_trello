import CONSTANT from '../action'

const initialState = [
  {
    id: 0,
    title: "Software engineering",
    cards: [
      {
        id: 0,
        content: "Nodejs this a moemtn the word of canrwk adioa"
      },
      {
        id: 1,
        content: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica"
      }
    ]
   },
   {
    id: 1,
    title: "Software engineering",
    cards: [
      {
        id: 0,
        content: "Nodejs"
      },
      {
        id: 1,
        content: "ReactJS"
      },
      {
        id: 2,
        content: "ReactJS"
      },
      {
        id: 3,
        content: "ReactJS"
      }
    ]
   }
];

let idList = 2;
let idCard = 5;
const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANT.ADD_LIST:
      console.log("dasdadasdasvvvv")
      const newList = {
        title: action.payload,
        cards: [],
        id: idList
      }
      idList++;
      return [...state, newList]
      
    case CONSTANT.ADD_CARD:
      const newCard = {
        content: action.payload.content,
        id: idCard
      }
      idCard++;
      const newState= state.map(list => {
        console.log(action.payload.listID)
        if(list.id === action.payload.listID){
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else{
          return list;
        }
      })
      return newState;
    default:
      return state;
  }
};

export default firstReducer;
