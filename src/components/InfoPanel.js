import LinkButton from "./LinkButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const InfoPanel = ({ sectionHeader, cssClass }) => {
    let button;
    if (sectionHeader === 'Current Phase') {
            button = <LinkButton btnText={<><FontAwesomeIcon icon={faTwitter} className="twitter-icon" /> Share on Twitter </>}/>
        } else if (sectionHeader === 'During This Phase') {
            button = <LinkButton btnText={'Learn More'}/>
        }

    return ( 
        <section className={`info-panel ${cssClass}`}>
            <h2>{sectionHeader}</h2>
            <p className="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ab nemo expedita dolores? Qui numquam, saepe tempore vero, aspernatur soluta quia nostrum, doloribus voluptate ducimus omnis quaerat ratione quisquam incidunt?</p>
            {button}
        </section>
     );
}
 
export default InfoPanel;