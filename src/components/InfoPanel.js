import LinkButton from "./LinkButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const InfoPanel = ({ sectionHeader, sectionContent }) => {
    let button;
    if (!sectionHeader.includes('Phase')) button = <LinkButton btnText={<><FontAwesomeIcon icon={faTwitter} className="twitter-icon" /> Share on Twitter </>}/>

    return ( 
        <section className={'info-panel'}>
            <h2>{sectionHeader}</h2>
            <p className="content">{sectionContent}</p>
            {button}
        </section>
     );
}
 
export default InfoPanel;