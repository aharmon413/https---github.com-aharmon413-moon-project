import crescent from '../assets/crescent.svg';
import quarter from '../assets/quarter.svg';
import gibbous from '../assets/gibbous.svg';

const Moon = ({ phaseName }) => {

    function getCurrentPhaseSVG(phase) {
        if (phaseName.includes('Crescent')) {
            return crescent;
        } else if (phaseName.includes('Quarter')) {
            return quarter;
        } else if (phaseName.includes('Gibbous')) {
            return gibbous;
        }
    };

    let currentPhaseSVG = getCurrentPhaseSVG(phaseName);

    return ( 
        <div className="moon">
            <div className="moon-base">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin">
                    <circle id="base" cx="50" cy="50" r="50" fill={phaseName.includes('Full') ? '#e6dea9' : '#001833'}/>
                </svg>
            </div>
            { currentPhaseSVG && <div className="moon-phase">
                                    <img className={phaseName.includes('Waxing') || phaseName.includes('First') ? 'flipped' : null} alt="" src={currentPhaseSVG}/>
                                </div> }
            
        </div>
     );
}
 
export default Moon;