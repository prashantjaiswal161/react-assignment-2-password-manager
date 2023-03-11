import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import PasswordList from '../AllPassword'

import './index.css'

const inititalPasswordList = []

class AddNewPassword extends Component {
  state = {
    searchInput: '',
    passwordList: inititalPasswordList,
    website: '',
    username: '',
    password: '',
    showPasswordChecked: false,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deletePassword = id => {
    const {passwordList} = this.state
    const filteredPassword = passwordList.filter(each => each.id !== id)
    this.setState({
      passwordList: filteredPassword,
    })
  }

  renderNoPasswordScreen = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
      />
      <p>No Passwords</p>
    </div>
  )

  onClickAddButton = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({
      showPasswordChecked: !prevState.showPasswordChecked,
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {
      searchInput,
      passwordList,
      showPasswordChecked,
      website,
      username,
      password,
    } = this.state

    const searchResults = passwordList.filter(eachPassword =>
      eachPassword.website.includes(searchInput),
    )

    return (
      <div>
        <div className="password-manager-container">
          <form className="form-container">
            <h1>Add New Password</h1>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button type="submit" onClick={this.onClickAddButton}>
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="no-password">
          <div>
            <div>
              <h1>Your Passwords</h1>
              <p>{searchResults.length}</p>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                type="search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
          </div>
          <hr />
          <div>
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map(eachPassword => (
                  <PasswordList
                    key={eachPassword.id}
                    passwordDetails={eachPassword}
                    showPasswordChecked={showPasswordChecked}
                    deletePassword={this.deletePassword}
                  />
                ))}
              </ul>
            ) : (
              this.renderNoPasswordScreen()
            )}
            <div>
              <input
                type="checkbox"
                id="showPassword"
                onClick={this.onClickShowPassword}
              />
              <label htmlFor="showPassword">Show Passwords</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddNewPassword
