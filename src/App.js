import useForm from './hooks/useForm';
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

function App() {
  const [ form, handleChange] = useForm({ 
    name: '', 
    lastname: '',
    email: ''
  })
  console.log(form)

  return (
    <Container>
      <Card>
        <div style={{ padding: '20px' }}>
          <form>
            <Input 
              name="name" 
              label="Name"
              value={form.name} 
              onChange={handleChange} 
            />
            <Input 
              name="lastname" 
              label="Lastame"
              value={form.lastname} 
              onChange={handleChange}
            />
            <Input 
              name="email" 
              label="Email"
              value={form.email} 
              onChange={handleChange} 
            />
            <Button>
              Send
            </Button>
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default App