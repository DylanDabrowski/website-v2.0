import React from "react";
import "./CommentBox.css";
import { FaArrowRight } from "react-icons/fa";

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert("Message submitted, Thank you!");
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.message);
    event.preventDefault();
  }

  render() {
    return (
      <div className="combox">
        <form className="combox__form" onSubmit={this.handleSubmit}>
          <div className="combox__info-container">
            <h1 className="combox__info-tag">NAME</h1>
            <input
              className="combox__info"
              type="text"
              placeholder="Name..."
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
            />
            <h1 className="combox__info-tag">EMAIL</h1>
            <input
              className="combox__info"
              type="text"
              placeholder="Email..."
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="combox__textarea-container">
            <textarea
              className="combox__textarea"
              type="text"
              value={this.state.message}
              name="message"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="combox__btns-container">
            <button
              className="combox__submit"
              type="submit"
              onSubmit={this.handleSubmit}
            >
              <FaArrowRight className="combox__submit-icon"></FaArrowRight>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentBox;
