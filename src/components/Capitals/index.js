import './index.css'
import {Component} from 'react'
import CaptalCard from '../countryItem'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  handleChange = event => {
    const id = event.target.value
    const newCountry = countryAndCapitalsList.filter(each => each.id === id)
    console.log(newCountry[0].country)
    this.setState({country: newCountry[0].country})
  }

  render() {
    const {country} = this.state
    return (
      <div className="CaptalsContainer">
        <h1 className="countryheading">Countries And Capitals</h1>
        <div className="select" onChange={this.handleChange}>
          <select id="status" className="form-control">
            {countryAndCapitalsList.map(each => (
              <CaptalCard item={each} key={each.id} />
            ))}
          </select>
          <p className="contry">is capital of which country</p>
        </div>
        <h1>{country}</h1>
      </div>
    )
  }
}

export default Capitals
