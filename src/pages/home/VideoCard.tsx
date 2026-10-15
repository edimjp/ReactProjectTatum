import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface VideoCardProps {
  previewSrc: string;
  videoSrc: string;
  duration: string;
  title: string;
}

const VideoCard = ({
  previewSrc,
  videoSrc,
  duration,
  title,
}: VideoCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    if (isClosing) return;

    setIsClosing(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 1000);
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.1 },
        }}
        whileHover="hover"
        initial="initial"
        className="group absolute -bottom-1/4 right-0 aspect-square size-30 shrink-0 overflow-hidden rounded-full p-0 text-left"
        aria-label={`Play ${title}, duration ${duration}`}
      >
        <video
          src={previewSrc}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="aspect-video size-full object-cover rounded-full"
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/30 transition-colors duration-300 rounded-full" />

        {/* Play button */}
        <motion.div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-1 text-(--color-text) uppercase font-bold text-[10px] ">
            {/* Play icon */}
            <svg
              viewBox="0 0 24 24"
              fill="#f65600"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>

            {/* Reveal duration on hover */}
            <div className="relative overflow-hidden grid">
              {/* Play text */}
              <motion.span
                variants={{
                  initial: {
                    y: 0,
                    opacity: 1,
                  },
                  hover: {
                    y: -20,
                    opacity: 0,
                  },
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.06, 0, 0, 1],
                }}
                className="col-start-1 row-start-1 whitespace-nowrap tracking-[.15]"
              >
                Play
              </motion.span>

              {/* Duration text */}
              <motion.span
                variants={{
                  initial: {
                    y: 20,
                    opacity: 0,
                  },
                  hover: {
                    y: 0,
                    opacity: 1,
                  },
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.06, 0, 0, 1],
                }}
                className="col-start-1 row-start-1 whitespace-nowrap"
              >
                {duration}
              </motion.span>
            </div>
          </div>
        </motion.div>
      </motion.button>

      {/* Video modal */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.06, 0, 0, 1] }}
            onClick={handleClose}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            {/* Modal content */}
            <motion.div
              initial={{ scale: 0, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 12 }}
              transition={{ duration: 2, ease: [0.06, 0, 0, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-7/10 max-w-5xl"
            >
              {/* Close button */}
              <motion.button
                type="button"
                onClick={handleClose}
                aria-label="Close video"
                initial="initial"
                animate={isClosing ? "initial" : undefined}
                whileHover={isClosing ? undefined : "hover"}
                className="absolute -top-12 right-0 grid size-10 place-items-center rounded-full text-white"
              >
                <span className="relative size-6">
                  <motion.span
                    variants={{
                      initial: { rotate: 45 },
                      hover: { rotate: 0 },
                    }}
                    transition={{ duration: 1, ease: [0.06, 0, 0, 1] }}
                    className="absolute inset-0 m-auto h-px w-full rounded-full bg-current"
                  />

                  <motion.span
                    variants={{
                      initial: { rotate: -45 },
                      hover: { rotate: 0 },
                    }}
                    transition={{ duration: 1, ease: [0.06, 0, 0, 1] }}
                    className="absolute inset-0 m-auto h-px w-full rounded-full bg-current"
                  />
                </span>
              </motion.button>

              <video
                key={videoSrc}
                src={videoSrc}
                controls
                autoPlay
                playsInline
                className="aspect-video w-full rounded-xl bg-black"
              >
                Your browser does not support video playback.
              </video>

              <p className="mt-3 text-sm text-white/80">{title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoCard;
