import ZodiacBadge from './ZodiacBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const InfoPanel = ({ sectionHeader, sectionContent, zodiac }) => {
    let button, zodiacBadge;
    if (!sectionHeader.includes('Phase')) {
        let tweetMessage = sectionContent.slice(0, sectionContent.indexOf('.') + 1); // first sentence of the moon phase description
        let tweetURL = `https://twitter.com/intent/tweet?text=${tweetMessage} Learn more at moons.amberharmon.com 🌙`;
        button = (<a href={tweetURL} target="_blank" className="button"><FontAwesomeIcon icon={faTwitter} className="twitter-icon" /> Share on Twitter</a>);
    };
    if (sectionHeader.includes('Major')) zodiacBadge = (<ZodiacBadge symbol={zodiac.symbol} name={zodiac.name}/>);

    return ( 
        <section className={'info-panel'} data-testid={button ? 'Current Phase' : sectionHeader}>
            <h2>{sectionHeader}</h2>
            {Array.isArray(sectionContent) ? // create a ul element instead of p for 'During This Phase' list
                <ul className="content">{sectionContent}</ul>
                : <p className="content">{sectionContent}</p>}
            {button}
            {zodiacBadge}
            {zodiac && <p className="zodiac-message">{zodiac.message}</p>}
        </section>
     );
}

export default InfoPanel;