import "./Card.css"

const Card = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.src} className="card-img" alt="Cardimg" />
                <div className="body">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="description">{props.description}</p>
                </div>
            </div>
        </>
    )
};

export default Card;