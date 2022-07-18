import { useState, useEffect } from 'react';

//---------------------------------------------------------------------------//

function getFormattedDate(now) {
    const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${Months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
};

//---------------------------------------------------------------------------//

const DateAndTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => setInterval(
        () => setCurrentTime(new Date()),
        1000), []);

    return ( 
        <div className="date-and-time">
            <p className="date">{getFormattedDate(currentTime)}</p>
            <p className="time">{currentTime.toLocaleTimeString()}</p>
        </div>
     );
}
 
export default DateAndTime;