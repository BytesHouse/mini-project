import './App.css'
import Aside from './components/Aside/Aside'
import PrimaryButton from './components/PrimaryButton/PrimaryButton'

function App() {

  return (
    <>
      <PrimaryButton text='Log in' />
      <PrimaryButton text='Sign up' />
      <Aside />
    </>
  )
}

export default App
