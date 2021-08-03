import Data from './data';

const INITIAL_STATE = {
    items: Data.products
};

const rootReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'NANI':
            return {...state}
        default:
            return state;
    }
}

export default rootReducer;