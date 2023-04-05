import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { Paragraph } from './style'

const RevelMe = ({ text }) => {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const animation = useAnimation()

  useEffect(() => {
    console.log('inView = ', inView)
    if (inView) {
      animation.start('visible')
    }
    if (!inView) {
      animation.start('hidden')
    }
  }, [inView, animation])

  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.8 } }
  }

  return (
    <motion.div ref={ ref } initial='hidden' animate={ animation } variants={ variants }>
      <Paragraph>
          {text}
      </Paragraph>
    </motion.div>
  )
}

export default RevelMe

RevelMe.propTypes = {
  text: PropTypes.string
}
