import './index.css'
import {Component} from 'react'

class CaptalCard extends Component {
  render() {
    const {item} = this.props
    const {capitalDisplayText, id} = item
    return <option value={id}>{capitalDisplayText}</option>
  }
}

export default CaptalCard
