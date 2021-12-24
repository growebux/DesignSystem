import React from 'react'
import ReactDOM from 'react-dom'
import PrimaryDarkPurple, {
  SecondaryLightPurple,
  TertiaryPurple,
} from './components/Buttons'

const App = () => (
  <div className='box'>
    <PrimaryDarkPurple>Primary</PrimaryDarkPurple>
    <SecondaryLightPurple>Secondary</SecondaryLightPurple>
    <TertiaryPurple>Tertiary</TertiaryPurple>
  </div>
)

ReactDOM.render(<App />, document.querySelector('#root'))
