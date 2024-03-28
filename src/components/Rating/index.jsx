import EmptyStar from '../../assets/empty-star.svg'
import FullStar from '../../assets/full-star.svg'
import './style.scss'

function Rating ({rate}) {
    const totalStar = 5
    const fullStarNumber = Number(rate)
    const emptyStarNumber = totalStar - fullStarNumber

    return (
        <div className='rating'>
            {[...Array(fullStarNumber)].map((_, i) => (
                <img key={'full-star-' + i} src={FullStar} alt='Full Star' className='full-star'/>
            ))}
            {[...Array(emptyStarNumber)].map((_, i) => (
                <img key={'empty-star-' + i} src={EmptyStar} alt='Empty Star' className='empty-star'/>
            ))}
        </div>
    );
}

export default Rating