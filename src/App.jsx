import './App.css'
import Aside from './components/Aside/Aside'
import AuthContainer from './components/AuthContainer/AuthContainer'
import PrimaryButton from './components/PrimaryButton/PrimaryButton'

function App() {

  return (
    <>
      <PrimaryButton text='Log in' />
      <PrimaryButton text='Sign up' />
      <Aside />
      <AuthContainer />
    </>
  )
}

export default App
