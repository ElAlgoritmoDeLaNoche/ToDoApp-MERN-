import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card, Row, Text, Input, Textarea, Button, Grid } from "@nextui-org/react"
import axios from 'axios'

const TaskEdit = () => {

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

  const editTask = () => {
    const task = {
      _id: params._id,
      title: title,
      description: description
    }

    axios.put('/api/v1/taskedit', task)
      .then((res) => {
        alert(res.data)
      })
      .catch((err) => console.log(err))

  }

  return (
    <Container xl>
      <Card css={{ background: 'transparent', marginTop: '$10' }}>
        <Card.Body>
          <Text
            css={{
              textGradient: "45deg, $green600 -20%, $cyan700 100%",
            }}
            weight="bold"
            h2
          >Edit task</Text>

          <Row justify="center" align="center">
            <div className="formulario">
              <Grid.Container gap={2} justify="center">
                <Grid xs={12}>
                  <Input css={{
                    marginTop: '$20',
                    marginLeft: '$12'
                  }}
                    color="secondary"
                    width='90%'
                    bordered
                    size="lg"
                    labelPlaceholder="Title task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Grid>
              </Grid.Container>

              <Grid.Container gap={2} justify="center">
                <Grid xs={12}>
                  <Textarea
                    css={{
                      marginLeft: '$12',
                    }}
                    labelPlaceholder="Description"
                    status="error"
                    size="lg"
                    width='90%'
                    minRows={20}
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                  />
                </Grid>
              </Grid.Container>

              <Grid.Container gap={2} justify="center">
                <Grid xs={4}></Grid>
                <Grid xs={4}>
                  <Button
                    css={{
                      marginBottom: '30px'
                    }}
                    onPress={editTask}
                    width='90%'
                    size="lg"
                    shadow color="gradient">
                    Edit task
                  </Button>
                </Grid>
                <Grid xs={4}></Grid>
              </Grid.Container>
            </div>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default TaskEdit