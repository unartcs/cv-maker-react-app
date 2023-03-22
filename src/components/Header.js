import React, { Component } from 'react'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            title: '',
            summary: '',
            edit: false
        }
    }
    editToggle = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }
    nameHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    titleHandler = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    summaryHandler = (e) => {
        this.setState({
            summary: e.target.value
        })
    }
    render() {
        const {
            name,
            title,
            summary,
            edit,
            nameHandler,
            titleHandler,
            summaryHandler,
            editToggle
        } = this.state;
        return (
            <div className='header-wrapper'>
                {!edit ?
                    <div>
                        <h1 className='header-name'>{name ? name : 'John Doe'}</h1>
                        <h2 className='header-title'>{title ? title : 'IT Consultant'}</h2>
                        <h3 className='header-summary'>{summary ? summary : 'Worked in the industry for 3 years bla bla bla'}</h3>
                    </div>
                    :
                    <div>
                        <h1>Name: <input className='header-name-input' value={name} onChange={this.nameHandler}></input></h1>
                        <h2>Job Title: <input className='header-title-input' value={title} onChange={this.titleHandler}></input></h2>
                        <h3><label htmlFor='header-summary-input'>Summary: </label><textarea rows={5} cols={80} name='header-summary-input' className='header-summary-input' value={summary} onChange={this.summaryHandler}></textarea></h3>
                        {/* <h3>Summary: <input className='header-summary-input' value={summary} onChange={this.summaryHandler}></input></h3> */}
                    </div>
                }
                <button className='edit-button' onClick={this.editToggle}>Edit</button>
            </div>


        )
    }
}
