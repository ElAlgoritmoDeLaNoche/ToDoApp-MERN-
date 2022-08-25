import React from 'react'
import { Card, Grid, Text, Button, Row } from '@nextui-org/react'
import { Link, useNavigate } from 'react-router-dom'

const TaskItem = ({ task }) => {

  const navigate = useNavigate()

  return (
    <>
      <Grid
        sm={6} md={4}
        key={task._id}
      >
        <Card
          css={{
            '&:hover': {
              transform: 'translateY(5px)'
            },
          }}
        >
          <Card.Header>
            <Text b>{task.title}</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text css={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}>
              {task.description}
            </Text>
          </Card.Body>
          <Card.Footer>
            <Row justify='flex-end'>
              <Grid>
                <Link to={`/taskdetail/${task._id}`}>
                  <Button size="sm" shadow color="primary" auto>View</Button>
                </Link>
              </Grid>
              <Grid>
                <Link to={`/taskedit/${task._id}`}>
                  <Button size="sm" shadow color="warning" auto>Edit</Button>
                </Link>
              </Grid>
              <Grid>
                <Button size="sm" shadow color="error" auto>Delete</Button>
              </Grid>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </>
  )
}

export default TaskItem