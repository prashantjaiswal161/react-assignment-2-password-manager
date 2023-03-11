import AddNewPassword from './components/AddPassword'

import './App.css'

const App = () => (
  <div className="bg-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
      alt="app logo"
      className="logo"
    />
    <div>
      <AddNewPassword />
    </div>
  </div>
)

export default App
