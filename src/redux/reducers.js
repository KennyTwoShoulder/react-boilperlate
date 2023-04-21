import { combineReducers } from "redux";
import { ADD_NFT } from "./actionTypes";

// define an initial state
const initialState = {
  nfts: []
};

const updateState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NFT: {
      const { id, nftString } = action.data;
      const mynft = {};
      mynft[id] = nftString;
      return {
        nfts: [...state.nfts, mynft]
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({ nfts: updateState });

export default rootReducer;