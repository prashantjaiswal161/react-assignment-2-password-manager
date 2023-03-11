const PasswordList = props => {
  const {passwordDetails, showPasswordChecked, deletePassword} = props
  const {website, username, password, id} = passwordDetails

  const onDelete = () => {
    deletePassword(id)
  }

  return (
    <li>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        {showPasswordChecked ? (
          <p>{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button type="button" data-testid="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordList
