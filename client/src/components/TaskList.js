import React, { useState, useEffect } from 'react'
import { Container, Grid } from '@nextui-org/react'
import TaskItem from './TaskItem'
import axios from 'axios'

const TaskList = () => {

  const [dataTask, setDataTask] = useState([])

  useEffect(() => {
    axios.get('/api/v1/tasks')
      .then((res) => {
        setDataTask(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const tasks = dataTask.map((task) => {
    return (
      <TaskItem task={task} />
    )
  })

  return (
    <div>
      <Container>
        <h3>Task List</h3>
        <Grid.Container gap={2}>
          {tasks}
        </Grid.Container>
      </Container>
    </div>
  )
}

export default TaskList