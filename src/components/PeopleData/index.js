import {Component} from 'react'

import Data from './data.json'

import './index.css'

const l = Data.length

class PeopleData extends Component {
  state = {
    sequence: 1,
  }

  // eslint-disable-next-line arrow-body-style
  restList = () => {
    const {sequence} = this.state
    console.log(sequence)
    // eslint-disable-next-line arrow-body-style
    return Data.slice(1, sequence).map(data => {
      return (
        <div className="list">
          <div className="number">
            <p>{data.key}</p>
          </div>
          <div className="text">
            <p className="name">Name : {data.name}</p>
            <p className="location">Location : {data.location}</p>
          </div>
        </div>
      )
    })
  }

  remainingList = () => {
    const {sequence} = this.state
    this.setState(prevState => ({sequence: prevState.sequence + 1}))
  }

  alt = () => {
    alert('No More People!')
  }

  render() {
    const {sequence} = this.state

    return (
      <div className="bg-container">
        <div className="head-container">
          <h1 className="heading">PEOPLE DATA</h1>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.remainingList}
            >
              NEXT PERSON
            </button>
          </div>
        </div>
        <div className="list">
          <div className="number">
            <p>1</p>
          </div>
          <div className="text">
            <p className="name">Name : {Data[0].name}</p>
            <p className="location">Location : {Data[0].location}</p>
          </div>
        </div>
        {sequence === l ? this.alt() : this.restList()}
      </div>
    )
  }
}

export default PeopleData
