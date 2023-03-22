import React, { Component } from "react";
import defaultPfp from '../imgs/defaultpfp.png'

class ProfilePic extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            address: '',
            phone: '',
            github: '',
            linkedin: '',
            profilePicture: defaultPfp,
            edit: false,
            editPfp: false,
        }
    }
    pfpHandler = (e) => {
        this.setState({
            profilePicture: e.target.value
        })
    }
    editToggle = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }
    editPhotoToggle = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
            editPfp: !prevState.editPfp
        }))
    }
    phoneHandler = (e) => {
        this.setState({
            phone: e.target.value
        })
    }
    emailHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    addressHandler = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    linkedinHandler = (e) => {
        this.setState({
            linkedin: e.target.value
        })
    }
    githubHandler = (e) => {
        this.setState({
            github: e.target.value
        })
    }
    render() {
        const {
            profilePicture,
            pfpHandler,
            editToggle,
            edit,
            editPhotoToggle,
            editPfp,
            email,
            address,
            phone,
            github,
            linkedin,
            phoneHandler,
            emailHandler,
            addressHandler,
            githubHandler,
            linkedinHandler
        } = this.state
        return (
            <div className="personal-info-wrapper">
                <div className="pfp-wrapper">
                    <img src={profilePicture} width='150px' alt='Profile'></img>
                    <button className='edit-button' onClick={this.editPhotoToggle}>Edit</button>
                    {editPfp &&
                        <form className="profile-pic-form">
                            <label htmlFor='pfp-input'>URL: </label>
                            <input className="pfp-input" name='pfp-input' onChange={this.pfpHandler}></input>
                            <button className="confirm-edit-btn" onClick={this.editPhotoToggle}>Confirm Edit</button>
                        </form>
                    }
                </div>
                <div className="contact-wrapper">
                    <h1>Contact</h1>
                    {!edit ?
                        <div>
                            <h2>Phone: </h2><span>{phone ? email : '000-123-456'}</span>
                            <h2>Email: </h2><span>{email ? email : 'email@gmail.com'}</span>
                            <h2>Address: </h2><span>{address ? address : 'Somestreet, NY'}</span>
                            <h2>Linkedin: </h2><span>{linkedin ? linkedin : 'https://linkedin.com/someprofileIguess'}</span>
                            <h2>Github: </h2><span>{github ? github : 'github.com/githubuser'}</span>
                        </div>
                        :
                        <div>
                            <h2>Phone: </h2><input value={phone} onChange={this.phoneHandler}></input>
                            <h2>Email: </h2><input value={email} onChange={this.emailHandler}></input>
                            <h2>Address: </h2><input value={address} onChange={this.addressHandler}></input>
                            <h2>Linkedin: </h2><input value={linkedin} onChange={this.linkedinHandler}></input>
                            <h2>Github: </h2><input value={github} onChange={this.githubHandler}></input>
                        </div>
                    }
                    <button className='edit-button' onClick={this.editToggle}>Edit</button>
                </div>
            </div>
        )
    }
}

export default ProfilePic