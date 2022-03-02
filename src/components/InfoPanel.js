import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const InfoPanel = ({ sectionHeader, sectionContent }) => {
    let button;
    if (!sectionHeader.includes('Phase')) button = (<a href="/" className="button"><FontAwesomeIcon icon={faTwitter} className="twitter-icon" /> Share on Twitter</a>);

    return ( 
        <section className={'info-panel'}>
            <h2>{sectionHeader}</h2>
            {Array.isArray(sectionContent) ?
                <ul className="content">{sectionContent}</ul>
                : <p className="content">{sectionContent}</p>}
            {button}
        </section>
     );
}

export default InfoPanel;