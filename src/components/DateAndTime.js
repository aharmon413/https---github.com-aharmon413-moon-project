import { useState, useEffect } from 'react';

const DateAndTime = () => {
    let [currentTime, setCurrentTime] = useState(new Date());

    function getFormattedDate(now) {
        const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${Months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    };

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