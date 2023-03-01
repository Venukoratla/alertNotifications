// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="whole-container">
    <div>
      <h1>Alert Notifications</h1>
      <Notification className="text-container">
        <AiFillCheckCircle className="success" />
        <div>
          <h1 className="success">Success</h1>
          <p className="para">You can access all the files in the folder</p>
        </div>
      </Notification>
      <Notification>
        <RiErrorWarningFill className="error" />
        <div className="container-1">
          <h1 className="error">Error</h1>
          <p className="para">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </Notification>
      <Notification>
        <MdWarning className="warning" />
        <div>
          <h1 className="warning">Warning</h1>
          <p className="para">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </Notification>
      <Notification>
        <MdInfo className="info" />
        <div>
          <h1 className="info">Info</h1>
          <p className="para">Anyone on the internet can view these files</p>
        </div>
      </Notification>
    </div>
  </div>
)

export default AlertNotifications
