'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SuccessModal({
  id,
  show = false,
  onClose,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id={id}
          tabIndex={-1}
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm" />
          
          {/* Modal container */}
          <motion.div
            className="relative w-full max-w-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Modal content */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
              {/* Header */}
              <div className="p-6 text-center">
                {/* Success icon */}
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-500/20 mb-4">
                  <svg
                    className="h-10 w-10 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Received!
                </h3>
                <p className="text-gray-300">
                  We've got your message and will respond to your email soon.
                </p>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6 pt-4 bg-gray-800/50 text-center">
                <motion.button
                  onClick={onClose}
                  type="button"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-all duration-200 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg hover:from-emerald-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg hover:shadow-emerald-500/30"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Got it!
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}