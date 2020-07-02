import React, { useReducer, useContext } from "react";

export const initialState = {
  showRemoveDataModal: false
};

export function reducer(state, action) {
  switch (action.type) {
    case "SHOW_REMOVE_DATA_MODAL":
      console.log("SHOW_REMOVE_DATA_MODAL", state, action);
      return { ...state, showRemoveDataModal: true };

    default:
      throw new Error(
        "No actions hit in modal reducer. Something is not hooked up right."
      );
  }
}

export const ModalContext = React.createContext(initialState);

export const ModalProvider = props => {
  const contextValue = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={contextValue}>
      {props.children}
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  const [modals, dispatch] = useContext(ModalContext);
  return [modals, dispatch];
};
