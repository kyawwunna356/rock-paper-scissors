import React from 'react'
import './modal.css'
import cross from '../../images/icon-close.svg'
import rules from '../../images/image-rules.svg'
import {motion, AnimatePresence} from 'framer-motion'


const bgVariant = {
    hidden : {
         opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    exit: {
        opacity: 0
    }
}

const modalVariant = {
    hidden : {
         y: '-100vh'
    },
    visible: {
        y: 4
    },
    exit: {
        y: '-100vh'
    }
}

function Modal({showModal,setShowModal}) {
    function handleClick(e){
        e.stopPropagation();
        setShowModal(prevState => !prevState)
    }
  return (
   <AnimatePresence>
        {showModal && (
            <motion.div className='modal' variants={bgVariant} initial="hidden" animate="visible" exit="exit" onClick={handleClick}>
                <motion.div className="modal-container" variants={modalVariant} >
                    <div className="modal-header">
                        <h1>RULES</h1>
                        <img src={cross} alt="" onClick={handleClick} />
                    </div>
                    <img src={rules} alt="" className='rule-img'/>
                </motion.div>
            </motion.div>
        )}
   </AnimatePresence>
  )
}

export default Modal