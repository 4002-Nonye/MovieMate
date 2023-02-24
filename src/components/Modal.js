import React from 'react'

const Modal = ({closeModal}) => {
  return (<>
    <div className='modal '><p className='text-black'>MODALLLLLLLLLLL</p><p className='text-xl' onClick={closeModal}>x</p></div>
    <div className='overlay' onClick={closeModal}></div>
    </>
  )
}

export default Modal