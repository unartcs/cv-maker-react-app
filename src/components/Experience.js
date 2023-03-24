import React, { Component } from 'react'

export default class Experience extends Component {
    constructor() {
        super()
        this.state = {
            add: false,
            experienceList: [{
                years: '',
                company: '',
                title: '',
                summary: '',
            }],
        }
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
            // experienceList: [{
            //     ...this.experienceList,
            //         years: e.target[0].value,
            //         company: e.target[1].value,
            //         title: e.target[2].value,
            //         summary: e.target[3].value
            // }]
            experienceList:
                this.state.experienceList.concat({
                    years: e.target[0].value,
                    company: e.target[1].value,
                    title: e.target[2].value,
                    summary: e.target[3].value
                })
        })
    }
    toggleAdd = (e) => {
        e.preventDefault()
        this.setState(previousState => ({
            add: !previousState.add
        }))
    }
    render() {
        const {
            experienceList,
            add,
            toggleAdd,
            submitHandler,
        } = this.state;
        return (
            <div className='experience-wrapper'>
                {!add ?
                    <div>
                        {experienceList.map((item => {
                            return (
                                <div>
                                    <p>{item.years}</p>
                                    <p>{item.company}</p>
                                    <p>{item.title}</p>
                                    <p>{item.summary}</p>
                                </div>
                            )
                        }))}
                        <button onClick={this.toggleAdd}>Add</button>
                    </div>
                    :
                    <div>
                        <form onSubmit={this.submitHandler}>
                            <label htmlFor='years'>Years: </label>
                            <input name='years'></input>
                            <label htmlFor='company'>Company: </label>
                            <input name='company'></input>
                            <label htmlFor='title'>Title: </label>
                            <input name='title'></input>
                            <label htmlFor='summary'>Summary: </label>
                            <input name='summary'></input>
                            <button type='submit'>Confirm</button>
                        </form>
                    </div>
                }
            </div>
        )
    }
}
