import React from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import './Modal.css'

const Modal = ({ showModal, closeModal, children }) => {
  
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { y: "-50vh", opacity: 0 },
    visible: { y: "100px", opacity: 1, transition: { delay: 0.2 } },
  };

  return (
          <AnimatePresence>
            {showModal && (
              <>
                <motion.div
                  className="backdrop"
                  variants={backdrop}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onClick={closeModal}
                />
                <motion.div
                  className="modal"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                 {children}
                </motion.div>
              </>
            )}
          </AnimatePresence>

  );
};

export default Modal;
