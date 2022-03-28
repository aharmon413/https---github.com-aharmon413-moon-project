const ZodiacBadge = ({ symbol, name }) => {
    return (<div className="zodiac-badge"><span className="zodiac-symbol">{symbol}</span> {name}</div>);
};

export default ZodiacBadge;