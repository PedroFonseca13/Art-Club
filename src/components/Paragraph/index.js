import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { Paragraph } from './style'

const RevelMe = () => {
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus cumque incidunt saepe, sed minima magni quasi pariatur. Obcaecati cupiditate quod odit laboriosam nesciunt porro magni quos delectus excepturi enim. Aspernatur!
      </Paragraph>
    </motion.div>
  )
}

export default RevelMe
