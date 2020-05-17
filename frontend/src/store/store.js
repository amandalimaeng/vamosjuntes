import React, { createContext, useContext, useReducer } from 'react';
import { messageReducer, messageInitialState } from './message';
import { authReducer, authInitialState } from './auth';


const StoreContext = createContext();


const store = {
  message: messageInitialState,
  auth: authInitialState,
};


const reducers = (store, action) => ({
  message: messageReducer(store.message, action),
  auth: authReducer(store.auth, action),
});


export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={useReducer(reducers, store)}>
    {children}
  </StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);
