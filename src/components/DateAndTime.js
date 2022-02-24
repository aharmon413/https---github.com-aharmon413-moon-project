import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const DateAndTime = () => {
    return ( 
        <div className="date-and-time">
            <p className="date">February 23rd, 2022</p>
            <p className="time">5:49pm EST</p>
            <button type="button" className="settings"><FontAwesomeIcon icon={faGear} className='icon settings-icon' /></button>
        </div>
     );
}
 
export default DateAndTime;