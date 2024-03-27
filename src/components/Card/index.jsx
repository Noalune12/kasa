function Card({cover, title}) {
    return (
        <div className="home-card">
            <img src={cover} alt="" className="card-img"/>
            <h2 className="card-title">{title}</h2>
        </div>
    );
}

export default Card