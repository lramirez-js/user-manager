import useForm from './hooks/useForm';

function App() {
  
  const [ form, handleChange ] = useForm({ name: 'lramirez' })
  console.log(form)

  return (
    <div>
      <input type="text" 
        name="name"
        value={form.name} 
        onChange={handleChange}
      />
    </div>
  );
}

export default App