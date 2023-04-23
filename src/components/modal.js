import React, { useState } from 'react';

function MyComponent(props) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>

      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '5px',
              padding: '20px',
              width: '400px',
              height: '200px',
            }}
          >
            <h2>{props.admin}</h2>
            <p>Modal Body</p>
            <button onClick={closeModal}>Close</button>
            <button onClick={() => console.log('Save changes')}>Save changes</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
