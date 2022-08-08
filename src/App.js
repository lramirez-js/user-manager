import useForm from './hooks/useForm';
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'

function App() {
  const [ form, handleChange] = useForm({ name: '', lastname: '' })
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
              onChange={handleChange} />
            <Input 
              name="lastname" 
              label="Lastame"
              value={form.lastname} 
              onChange={handleChange} />
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default App