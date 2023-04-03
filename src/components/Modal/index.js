import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Card } from './style'

const ModalComponent = ({ description, img, title }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Card onClick={ handleShow } img={ img }>
        <h1>{ title }</h1>
      </Card>

      <Modal show={ show } onHide={ handleClose }>
        <Modal.Header closeButton>
          <Modal.Title>{ title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ description }</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={ handleClose }>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalComponent

ModalComponent.propTypes = {
  description: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string
}
