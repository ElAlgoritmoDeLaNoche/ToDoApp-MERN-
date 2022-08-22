import React, { useState } from 'react'
import { Container, Card, Row, Text, Input, Textarea, Button, Grid } from '@nextui-org/react'
import axios from 'axios'

const TaskAdd = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addTask = () => {
    var task = {
      title: title,
      description: description
    }
    axios.post('/api/v1/taskadd', task)
      .then((res) => {
        alert(res.data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <Container xl>
      <Card css={{ background: 'transparent', marginTop: '$10' }}>
        <Card.Body>
          <Text css={{ textGradient: "45deg, $green600 -20%, $cyan700 100%", }} weight="bold" h2>
            Create Task</Text>
          <Row justify='center' align='center'>
            <div className="formulario">
              <Grid.Container gap={2} justify='center'>
                <Grid xs={12}>
                  <Input
                    css={{
                      marginTop: '$20',
                      marginLeft: '$12',
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
              <Grid.Container gap={2} justify='center'>
                <Grid xs={12}>
                  <Input
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
              <Grid.Container gap={2} justify='center'>
                <Grid xs={4}></Grid>
                <Grid xs={4}>
                  <Button
                    css={{ marginBottom: '30px' }}
                    onClick={addTask}
                    width='90%'
                    size='lg'
                    shadow color='gradient'
                  >
                    Add Task
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

export default TaskAdd