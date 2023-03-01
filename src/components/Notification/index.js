// Write your code here
import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notifications = props => {
  const {children} = props
  return (
    <div className="container">
      <div>{children}</div>
      <GrFormClose />
    </div>
  )
}

export default Notifications
