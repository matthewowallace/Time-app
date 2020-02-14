import React from 'react';
import { ModalProvider } from "react-modal-hook";
import ReactDOM from 'react-dom';

const ToggleContent = ({ toggle, content }) => {
    const [isShown, setIsShown] = React.useState(false);
    const hide = () => setIsShown(false);
    const show = () => setIsShown(true);
    
  
    return (
      <React.Fragment>
        {toggle(show)}
        {isShown && content(hide)}
      </React.Fragment>
    );
  }

const Modal = ({ children }) => (
    ReactDOM.render(
     <ModalProvider>
      <div className="modal">
        {children}
      </div>,
      </ModalProvider>,
      document.getElementById('root')
    )
  );

  export default ToggleContent;