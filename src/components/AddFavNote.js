import React, { Component } from 'react';
import MainContext from '../MainContext';
import '../App.css'
import './FavForm.css'



class AddFavNote extends Component {
  static contextType = MainContext;

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errorMsg: "",
    };
  }

  static defaultProps = {
    history: {
      push: () => { },
    },
  };

  updateUsername(username) {
    this.setState({
      username: username,
      errorMsg: "",
    });
  }

  updatePassword(password) {
    this.setState({
      password: password,
      errorMsg: "",
    })
  }

  handleCancel = () => {
    this.props.history.push('/')
  };

  handleSubmit = (e) => {
    const { users } = this.context;
    const { username, password } = this.state;


    e.preventDefault();

    if (username === "")
    {
      this.setState({
        errorMsg: 'Username is Required',
      })
      return;
    }

    if (password === "")
    {
      this.setState({
        errorMsg: 'Password is Required',
      })
      return;
    }

    let passwordMatch = 0;
    for (let idx = 0; idx < users.length; idx++)
    {
      if (users[idx].username === username)
      {
        if (users[idx].password === password)
        {
          passwordMatch = 1;
          break;
        }
      }
    }
    if (passwordMatch)
    {
      this.context.LoginCB(username, password);
      this.props.history.push("/");
    } else
    {
      this.setState({
        errorMsg: 'Invalid Password, Please Try Again',
      })
      return;
    }
  }

  render() {

    // const { errorMsg } = this.state;

    return (
      <>
        <main>
          <div className="FavPark-form-container">
            <form className="FavPark-form">

              <h2>
                Add Note For<br />
                  Park C
               </h2>
              <hr />

              <label htmlFor="NoteName">Stop Number</label>

              <div className="FavPark-form-buttons-wrapper">
                <button type="button">Insert Before</button>
              </div>

              <select required="" id="AddNote-folder" name="AddNote-folder">
                <option value="">Choose a Park</option>
                <option value="1">1 - Park A</option>
                <option value="2">2 - Park B</option>
              </select>

              <div className="FavPark-form-buttons-wrapper">
                <button type="button">Insert After</button>
              </div>

              <div className="FavPark-form-buttons-wrapper">
                <button type="button">FIrst</button>
                <button type="button">Last</button>
              </div>

              <p>Stop Nubmer Selected is : 3</p>

              <hr />
              <label htmlFor="content">Rating</label>


              <div style={{
                textAlign: "center"
              }}>

                {/* <div style="text-align:center"> */}
                <select required="" id="FavForm-Rating" name="FavForm-Rating">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <hr />
                <label htmlFor="content">Note</label>
                <textarea id="content" name="content" rows="4" cols="50" spellcheck="false"></textarea>

                <div className="FavPark-form-buttons-wrapper">
                  <button type="submit">Submit</button>
                  <a href="wf-main.html">
                    <button type="button">Cancel</button>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </main>
      </>
    );
  }
}

export default AddFavNote;
