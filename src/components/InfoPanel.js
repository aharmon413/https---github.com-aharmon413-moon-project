import Button from "./Button";

const InfoPanel = ({ sectionHeader, cssClass }) => {
    let button;
    {if (sectionHeader === 'Current Phase') {
            button = <Button btnText={'Share on Twitter'}/>
        } else if (sectionHeader === 'During This Phase') {
            button = <Button btnText={'Learn More'}/>
        }
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