"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ isShowing, children, hide }) {
  // const [domLoaded, setDomLoaded] = useState(false);
  const router = useRouter();
  const goBack = () => router.back;

  useEffect(() => {
    // setDomLoaded(true);
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShowing]);

  return (
    <>
      {isShowing &&
        createPortal(
          <AnimatePresence mode="wait">
            {isShowing && (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.1 }}
                className="fixed inset-0 bg-[#000000B2] overflow-y-scroll remove-scrollbar h-screen flex items-center justify-center w-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.1 }}
                  className="transition-all ease-linear rounded-[24px] bg-white p-4 lg:p-10 w-max"
                >
                  <div>
                    <button
                      onClick={hide || goBack}
                      className="w-max float-right"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="none"
                      >
                        <path
                          d="M7.46575 15.5L11 11.9658L14.5343 15.5L16 14.0343L12.4658 10.5L16 6.96575L14.5343 5.5L11 9.03425L7.46575 5.5L6 6.96575L9.53425 10.5L6 14.0343L7.46575 15.5ZM11 20.7033C9.58484 20.7033 8.257 20.4356 7.0165 19.9003C5.77584 19.3649 4.69667 18.6385 3.779 17.721C2.8615 16.8033 2.13509 15.7242 1.59975 14.4835C1.06442 13.243 0.796753 11.9152 0.796753 10.5C0.796753 9.08484 1.06442 7.757 1.59975 6.5165C2.13509 5.27584 2.8615 4.19667 3.779 3.279C4.69667 2.3615 5.77584 1.63509 7.0165 1.09975C8.257 0.56442 9.58484 0.296753 11 0.296753C12.4152 0.296753 13.743 0.56442 14.9835 1.09975C16.2242 1.63509 17.3033 2.3615 18.221 3.279C19.1385 4.19667 19.8649 5.27584 20.4003 6.5165C20.9356 7.757 21.2033 9.08484 21.2033 10.5C21.2033 11.9152 20.9356 13.243 20.4003 14.4835C19.8649 15.7242 19.1385 16.8033 18.221 17.721C17.3033 18.6385 16.2242 19.3649 14.9835 19.9003C13.743 20.4356 12.4152 20.7033 11 20.7033ZM11 18.4283C13.2173 18.4283 15.0931 17.6613 16.6273 16.1273C18.1613 14.5931 18.9283 12.7173 18.9283 10.5C18.9283 8.28267 18.1613 6.40692 16.6273 4.87275C15.0931 3.33875 13.2173 2.57175 11 2.57175C8.78267 2.57175 6.90692 3.33875 5.37275 4.87275C3.83875 6.40692 3.07175 8.28267 3.07175 10.5C3.07175 12.7173 3.83875 14.5931 5.37275 16.1273C6.90692 17.6613 8.78267 18.4283 11 18.4283Z"
                          fill="#1C1B1F"
                        />
                      </svg>
                    </button>
                  </div>
                  {children}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
