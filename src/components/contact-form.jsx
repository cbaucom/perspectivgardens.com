import React from "react"
import { navigate } from "gatsby"
import Button from "./button"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      phone: "",
      recipient: "1",
      service: "Mowing and Edging",
      message: "",
      error: "",
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()

    if (!this.state.name || !this.state.email || !this.state.phone) {
      this.setState(() => ({
        error: "Please provide your name, email, and phone number",
      }))
    } else {
      // Clear the error
      this.setState(() => ({ error: "" }))

      const form = e.target
      const name = this.state.name

      fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": form.getAttribute("name"), ...this.state }),
      })
        .then(() =>
          navigate(form.getAttribute("action"), {
            state: { name },
          })
        )
        .catch(error => alert(error))
    }
  }

  render() {
    return (
      <form
        name="contact"
        method="post"
        action="/thank-you"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {this.state.error && <p className="form-error">{this.state.error}</p>}
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </div>
        <p>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Phone:{" "}
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </label>
        </p>
        <p>
          <label className="same-line">
            Recipient:{" "}
            <select
              name="recipient"
              value={this.state.recipient}
              onChange={this.handleChange}
              required
            >
              <option value="New Service Request">New Service Request</option>
              <option value="Information">Information</option>
              <option value="Marketing">Marketing</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            What type of service are you interested in?{" "}
            <select
              name="service"
              value={this.state.service}
              onChange={this.handleChange}
              required
            >
              <option value="Mowing and Edging">Mowing and Edging</option>
              <option value="Landscaping">Landscaping</option>
              <option value="Flagstone">Flagstone</option>
              <option value="Bed Maintenance">Bed Maintenance</option>
              <option value="Shrub and Tree Trimming">
                Shrub and Tree Trimming
              </option>
              <option value="Rake and Bag Leaves">Rake and Bag Leaves</option>
              <option value="Fertilization">Fertilization</option>
              <option value="Weed and Insect Control">
                Weed and Insect Control
              </option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <Button type="submit">Send</Button>
      </form>
    )
  }
}
export default ContactForm
