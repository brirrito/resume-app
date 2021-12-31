import React, { Component } from 'react';

class Info extends Component {
  constructor() {
    super();

    this.state= {
      photo: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
      address1: '',
      address2: '',
      phone: '',
      email: '',
      website: '',
      linkedin: '',
      edit: false,
      editPhoto: false
    }
  }

  handlePhotoChange = e => {
    this.setState({
      photo: e.target.value
    })
  }
  handleAddress1Change = e => {
    this.setState({
      address1: e.target.value
    })
  }
  handleAddress2Change = e => {
    this.setState({
      address2: e.target.value
    })
  }
  handlePhoneChange = e => {
    this.setState({
      phone: e.target.value
    })
  }
  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    })
  }
  handleWebsiteChange = e => {
    this.setState({
      website: e.target.value
    })
  }
  handleLinkedinChange = e => {
    this.setState({
      linkedin: e.target.value
    })
  }

  toggleEdit = () => {
    this.setState(prevState => ({
      edit: !prevState.edit
    }))
  }

  toggleEditPhoto = () => {
    this.setState(prevState => ({
      editPhoto: !prevState.editPhoto
    }))
  }

  render() {
    const {
      photo,
      address1,
      address2,
      phone,
      email,
      website,
      linkedin,
      edit,
      editPhoto
    } = this.state;

    let profilePhoto = {
      backgroundImage: 'url(' + photo +')'

    }

    return (
      <div id ='Info'>
        <div className='header'>Resume</div>
        <div
          id='profile-photo'
          style={profilePhoto}
          onClick={this.toggleEditPhoto}
          />
          <div className='address'>
            <h2>Address</h2>
            <p>{address1 ? address1 : '55 Kitty Kat Plaza'}</p>
            <p>{address2 ? address2 : 'City, St 12345'}</p>
          </div>
          <div className='phone'>
            <h2>Phone</h2>
            <p>{phone ? phone : '123-456-7890'}</p>
          </div>
          <div className='email'>
            <h2>Email</h2>
            <p>{email ? email : 'cat@website.com'}</p>
          </div>
          <div className='online'>
            <h2>Online</h2>
            <p>{website ? website : 'website.com'}</p>
            <p>linkedin.com/in/{linkedin ? linkedin : 'user-name'}</p>
          </div>
          <button
            className='edit-toggle'
            type='button'
            onClick={this.toggleEdit}
            >
              Edit
            </button>

            {edit &&
            <form id='intro-edit' className='edit-form'>
              <label htmlFor='address1'>Address</label>
              <input
                id='address1'
                type='text'
                placeholder='55 Kitty Kat Plaza'
                onChange={this.handleAddress1Change}
                />
              <label htmlFor='address2'>City, State, and Zip Code</label>
              <input 
                id='address2'
                type='text'
                placeholder='City, ST 12345'
                onChange={this.handleAddress2Change}
               />
              <label htmlFor='phone'>Phone</label>                 <input 
                id='phone'
                type='text'
                onChange={this.handlePhoneChange}
                />
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='text'
                onChange={this.handleEmailChange}
                />
              <label htmlFor='website'>Webiste</label>
              <input
                id='website'
                type='text'
                onChange={this.handleWebsiteChange}
                />
              <label htmlFor='linkedin'>LinkedIn Username</label>
              <input
                id='linkedin'
                type='text'
                onChange={this.handleLinkedinChange}
                />
              <button
                type='button'
                onClick={this.toggleEdit}
                >
                  Close Edit
                </button>
        
              </form>
           }

        {editPhoto &&
        <form id='photo-edit' className='edit-form'>
          <label htmlFor='photo'>Photo URL</label>
          <input
            id='photo'
            type='text'
            onChange={this.handlePhoneChange}
            />
          <button
            type='button'
            onClick={this.toggleEditPhoto}
            >
              Close Edit
              </button>
          </form>
          }
      </div>
    )
  }
}

export default Info;