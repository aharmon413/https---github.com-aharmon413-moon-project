import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import ZodiacBadge from './ZodiacBadge';

const InfoPanel = ({ sectionHeader, sectionContent, zodiacSign, zodiacMessage }) => {
    let button;
    let zodiacBadge;
    if (!sectionHeader.includes('Phase')) button = (<a href="/" className="button"><FontAwesomeIcon icon={faTwitter} className="twitter-icon" /> Share on Twitter</a>);
    if (sectionHeader.includes('Major')) zodiacBadge = (<ZodiacBadge sign={zodiacSign} />);

    return ( 
        <section className={'info-panel'}>
            <h2>{sectionHeader}</h2>
            {Array.isArray(sectionContent) ?
                <ul className="content">{sectionContent}</ul>
                : <p className="content">{sectionContent}</p>}
            {button}
            {zodiacBadge}
            {zodiacMessage && <p className="zodiac-message">{zodiacMessage}</p>}
        </section>
     );
}

export default InfoPanel;