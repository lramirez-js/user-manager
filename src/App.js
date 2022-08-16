import { useState } from 'react'
import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

function App() {
  const [users, setUsers] = useState([])
  const [ form, handleChange, reset] = useForm({ 
    name: '', 
    lastname: '',
    email: ''
  })
  
  const submit = e => {
    e.preventDefault()
    setUsers([
      ...users,
      form
    ])
    reset()
  }

  console.log(form, users)

  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: '20px' }}>
            <form onSubmit={submit}>
              <Input 
                name="name" 
                label="Name"
                placeholder="Name"
                value={form.name} 
                onChange={handleChange} 
              />
              <Input 
                name="lastname" 
                label="Lastame"
                placeholder="Lastame"
                value={form.lastname} 
                onChange={handleChange}
              />
              <Input 
                name="email" 
                label="Email"
                placeholder="Email"
                value={form.email} 
                onChange={handleChange} 
              />
              <Button>
                Send
              </Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul>
            { users.map(x => 
              <li key={x.email} >{ `${x.name} ${x.lastname}: ${x.email}` }</li>)
            }
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App