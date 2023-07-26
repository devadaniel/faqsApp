// Write your code here.
import {Component} from 'react'
import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
const plusAltText = 'plus'
const minusAltText = 'minus'

class FaqsItem extends Component {
  state = {isActive: false}

  onClickPlusMinusBtn = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const plusMinusImage = isActive ? minusImage : plusImage
    const plusMinusAltText = isActive ? minusAltText : plusAltText
    const {faqsDetails} = this.props
    const {questionText, answerText} = faqsDetails
    return (
      <li className="list-times-container">
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          <button
            className="minus-plus-button"
            type="button"
            onClick={this.onClickPlusMinusBtn}
          >
            <img
              src={plusMinusImage}
              alt={plusMinusAltText}
              className="plus-minus-image"
            />
          </button>
        </div>
        {isActive && (
          <div>
            <hr className="separator" />
            <p className="answer-text">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqsItem
