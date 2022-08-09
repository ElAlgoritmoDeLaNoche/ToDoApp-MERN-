import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Text } from "@nextui-org/react";

const Navbar = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <Button size='sm' shadow color="error" auto>Inicio</Button>
      </Link>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
        ToDoApp MERN
      </Text>
      <nav>
        <div className="nav__links">
          <Link to='/taskadd'>
            <Button size='sm' shadow color="secondary" auto>Task Add</Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar