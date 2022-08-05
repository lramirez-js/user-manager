import useForm from './hooks/useForm';
import Input from './components/Input'
import Card from './components/Card'

function App() {
  const [ form, handleChange] = useForm({ name: '', lastname: '' })
  console.log(form)

  return (
    <Card>
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
    </Card>
  );
}

export default App