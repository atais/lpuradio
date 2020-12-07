import React, {createContext, useContext, useReducer} from 'react';
import {updateTrackPlayer} from "./GlobalPlayer";

export const emptyRds = {
  title: '',
  artist: '',
  // artwork: cover
}

export const initialState = {
  theme: {primary: 'green'},
  rds: emptyRds,
  tabIdx: 0,
};

export const StateContext = createContext([initialState, function(){}]);
export const useStateValue = () => useContext(StateContext);

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setIndex':
      return {
        ...state,
        tabIdx: action.idx,
      };
    case 'changeTheme':
      return {
        ...state,
        theme: action.newTheme,
      };
    case 'updateRds':
      updateTrackPlayer(action.updated)
      return {
        ...state,
        rds: action.updated
      };

    default:
      return state;
  }
};

export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
