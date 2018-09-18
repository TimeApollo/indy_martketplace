import React from 'react';
import { connect } from 'react-redux';
// import { loginUser } from '../../actions/auth'
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

class LoginForm extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleLoginUser = () => {
    let loginData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser( loginData )
  }

  render(){
    return (
      <div>
        <h1
          style={{
            marginLeft: "2em",
            marginBottom: "0px",
            fontFamily: "sans-serif"
          }}
        >
          LOGIN
        </h1>
        <div
          style={{
            margin: "3em",
            marginTop: "0",
            border: "4px solid black",
            width: "30em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormControl
          style={{margin: "1em"}}
          >
            <InputLabel>Email</InputLabel>
            <Input/>
          </FormControl>

          <FormControl
          style={{margin: "1em"}}
          >
            <InputLabel>Password</InputLabel>
            <Input/>
          </FormControl>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  login: auth.login
});

const mapDispatchToProps = ( dispatch ) => {
  return {
    loginUser: ( loginFormData ) => {
      dispatch(loginUser( loginFormData ))
    }
  }
}

export default connect( mapStateToProps , mapDispatchToProps )( LoginForm )
