import CONSTANT from '../action'

const addList = (title) => {
    return {
        type: CONSTANT.ADD_LIST,
        payload: title
    }
}

export default addList;