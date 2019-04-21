import CONSTANT from '../action'

const addCard = (content,listID) => {
    return {
        type: CONSTANT.ADD_CARD,
        payload: {content, listID}
    }
}

export default addCard;