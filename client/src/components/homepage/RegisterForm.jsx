import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth'

class RegisterForm extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    password: '',
    passwordMatch: '',
    email: '',
  }

  handleChange = ( event ) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleRegisterUser = () => {
    let regFormData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      email: this.state.email,
    }
    this.props.registerUser( regFormData )
  }

  render(){
    return(
      <div>
        <button onClick={ this.handleRegisterUser }></button>
      </div>
    )
  }
}

const mapStateToProps = ({ register }) => ({
  register
});

const mapDispatchToProps = ( dispatch ) => {
  return {
    registerUser: ( regFormData ) => {
      dispatch(registerUser( regFormData ))
    }
  }
}

export default connect( mapStateToProps , mapDispatchToProps )( RegisterForm )
