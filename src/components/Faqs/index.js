// Write your code here.

import {Component} from 'react'
import FaqsItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <di className="app-card-container">
          <h1 className="app-heading">FAQs</h1>
          <ul className="list-items-container">
            {faqsList.map(eachItem => (
              <FaqsItem key={eachItem.id} faqsDetails={eachItem} />
            ))}
          </ul>
        </di>
      </div>
    )
  }
}

export default Faqs
