import {MotionProps} from "framer-motion"

export const viewPortFadeIn = (delay = 0) => ({
    initial: "hidden", whileInView: "visible", viewport: {once: true},
    variants: {hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0, transition: {duration: 0.6, delay}}}
  } as MotionProps)
