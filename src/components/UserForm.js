import Input from './Input'
import Button from './Button'
import useForm from '../hooks/useForm'

const UserForm = ({ submit }) => {

  const [ form, handleChange, reset] = useForm({ 
    name: '', 
    lastname: '',
    email: ''
  })
  
  const handleSubmit = e => {
    e.preventDefault()
    submit(form)
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
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
  )
}

export default UserForm