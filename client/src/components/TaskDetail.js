import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card, Row, Text } from '@nextui-org/react'
import axios from 'axios'

const TaskDetail = () => {

  const params = useParams()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    axios.post('/api/v1/gettask', { _id: params._id })
      .then((res) => {
        console.log(res.data[0])

        const datatask = res.data[0]
        setTitle(datatask.title)
        setDescription(datatask.description)
      })
  }, [])


  return (
    <>
      <Container sm>
        <Card css={{ $$cardColor: '$colors$error', marginTop: '$10' }}>
          <Card.Header>
            <Text>{title}</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Row justify="center" align="center">
              <Text color="black" size="1rem" css={{ m: 0 }}>
                {description}
              </Text>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default TaskDetail