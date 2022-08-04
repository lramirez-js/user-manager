import useForm from './hooks/useForm';
import Input from './components/Input'

function App() {
  const [ form, handleChange] = useForm({ name: '', lastname: '' })
  console.log(form)

  return (
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
  );
}

export default App