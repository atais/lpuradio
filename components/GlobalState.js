import React, {createContext, useContext, useReducer} from 'react';
import {updateTrackPlayer} from "./GlobalPlayer";

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);


export const initialState = {
  theme: {primary: 'green'},
  rds: {
    title: '',
    artist: '',
    // artwork: cover
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: action.newTheme
      };
    case 'updateRds':
      updateTrackPlayer(action.updated);
      return {
        ...state,
        rds: action.updated
      }

    default:
      return state;
  }
};
