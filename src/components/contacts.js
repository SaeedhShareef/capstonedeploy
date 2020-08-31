import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"
import Button from 'react-bootstrap/button'

export default class contacts extends Component {
  constructor(props) {
    super(props)
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
      this.onChangeDate = this.onChangeDate.bind(this);
      this.state = {
        name: "",
        email: "",
        phoneNumber: "",
        date: new Date()
       }
      }
      onChangeName(e){
        this.setState({
          username: e.target.value
        })
      }
      onChangeEmail(e){
        this.setState({
          username: e.target.value
        })
      }
      onChangePhoneNumber(e){
        this.setState({
          username: e.target.value
        })
      }
      onChangeDate(date){
        this.setState(
          {date: date}
        )
      } onSubmit(e){
        e.preventDefault();
        const contactInfo ={
          name: this.state.name  ,
          email: this.state.email,
          phoneNumber: this.state.phoneNumber ,
          date: this.state.date
        }
    
        console.log(contactInfo);
    
        axios.post('http://localhost:5000/contacts/add', contactInfo)
        .then((res) => {console.log(res.data)})
        window.location = '/'
      }
    render() {
        
        return (
                   
           
          
            <div className="pageContain">
                <div id="bannerWrapper">
            <img src={require('../assets/skyline.jpg')} alt="banner"/>
                 </div>
                 <div className="container ">
                     <h1 className="underline"> Please fill out this brief form, if you'd like to learn more about the Queen City! </h1>
                     <form onSubmit={this.onSubmit}>
                <div className="form-group">
              <label> Name</label>
             <input 
             type="text"
             required
             className='form-control'
             value={this.state.name}
             onChange={this.onChangeName}
            />
  </div>
  <div className="form-group">
      <label>Email</label>
        <input 
          type="text"
          required
          className='form-control'
          value={this.state.email}
          onChange={this.onChangeEmail}
        />
  </div>
  <div className="form-group">
      <label> PhoneNumber </label>
        <input
        type="text"
        required
        className="form-control"
            value={this.state.phoneNumber}
            onChange={this.onChangephoneNumber}
            />
  </div>
             <div className="form-group">
            <label>Date:</label>
              <div>
                <DatePicker 
                selected = {this.state.date}
                onChange={this.onChangeDate}
                />
              </div>
          </div>
  
          <Button variant="danger" size="lg" block type="submit">Submit!</Button>
          </form>
          </div>
          
            </div>
           
        )
    }

          }   
