import React, { Component } from 'react'
import uniqid from 'uniqid';
export class Skills extends Component {
    constructor() {
        super()
        this.state = {
            toggleButton: false,
            skill: '',
            skills: [
                {
                    skill: 'asdasd',
                    id: uniqid()
                },
                {
                    skill: '21321',
                    id: uniqid()
                }
            ],
            languages: ['']
        }
    }
    skillChangeHandler = (e) => {
        this.setState({
            skill: e.target.value
        })

    }
    addSkillHandler = (e) => {
        e.preventDefault()
        this.setState({
            skills: this.state.skills.concat({
                id: uniqid(),
                skill: this.state.skill
            }),
            skill: ''
        })
    }
    removeSkillHandler = (key) => {
        console.log(key)
        this.setState(({
            skills: this.state.skills.filter(item => item.id !== key)
        }))
    }
    toggleButtonHandler = (e) => {
        this.setState(prevState => ({
            toggleButton: !prevState.toggleButton
        }))
    }
    render() {
        const {
            toggleButtonHandler,
            toggleButton,
            skills,
            languages,
            addSkillHandler,
            removeSkillHandler,
            skill,
            skillChangeHandler,
        } = this.state
        return (
            <div className='skills-lang-container'>
                <div className='skills-wrapper'>
                    <h1 className='skills-title'>Skills</h1>
                    {(skills.every(item => item === '')) ?
                        <ul className='skills-list'>
                            <li>
                                Add Skills!
                            </li>
                        </ul>
                        :
                        <ul className='skills-list'>
                            {/* {skills.map((item) => {
                                return (
                                    <li>{item.skill}</li>
                                )
                            })} */}
                            {skills.map((item => {
                                return (
                                    <li onClick={() => this.removeSkillHandler(item.id)} key={item.id}>{item.skill}</li>
                                )
                                // return (
                                //     <li key={item.id}>{item.skill} <button className='remove-button' onClick={this.removeSkillHandler} key={item.id}>X</button></li>
                                // )
                            }))}
                        </ul>
                    }
                    {!toggleButton ?
                        <button className='add-button' onClick={this.toggleButtonHandler}>Add</button>
                        :
                        <form onSubmit={this.addSkillHandler}>
                            <label htmlFor='skill-input'>Add Skill: </label>
                            <input required onChange={this.skillChangeHandler} value={skill}></input>
                            <button type='submit'>Add</button>
                        </form>
                    }
                </div>
                <div className='lang-wrapper'>

                </div>
            </div>
        )
    }
}

export default Skills