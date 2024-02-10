import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login({ onSubmitId }) {

  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    onSubmitId(idRef.current.value)
  }

  function createNewId() {
    onSubmitId(uuidV4())
  }

  return (
    <Container className='align-items-center d-flex' style={{ height: '100vh' }}>
      <Form className='w-100' onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type='text' ref={idRef} required />
        </Form.Group>
        <Button type='submit' className='me-2'>Login</Button>
        <Button onClick={createNewId} variant='secondary'>Create A New Id</Button>
      </Form>
    </Container>
  )
}
