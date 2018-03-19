const randomUser = (name) => (dispatch) => fetch('https://randomuser.me/api')
  .then((response) => response.json())
  .then((user) => dispatch({ type: "SET_USER", user: {
    name: user.results[0].name.first,
    email: user.results[0].email,
    image: user.results[0].picture.large,
  }}))

const INITIAL_USER = {
  name: 'bastien',
  email: 'bastien.riviere@example.com',
  image: 'https://randomuser.me/api/portraits/men/57.jpg',
}

const userReducer = (state = INITIAL_USER, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user
  
    default:
      return state
  }
}

export {
  randomUser,
  userReducer,
}
