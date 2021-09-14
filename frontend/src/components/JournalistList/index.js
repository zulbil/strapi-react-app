import PropTypes from 'prop-types'
import JournalistItem from '../JournalistItem'
import './style.scss'

const JournalistList = ({ list }) => {
    return (
        <>
            <div className="alert alert-info-search" role="alert">
                {list.length > 0 && <p className="m-0">{list.length+' éléments trouvés'}</p>}
                {list.length <= 0 && <p className="m-0">Aucun élément trouvé pour cette recherche...</p>}
            </div>
            <div className="list-content">
                {list.map(( item, index) => {
                    return <JournalistItem key={index} item={item} />
                })} 
            </div>
        </>
    )
}

JournalistList.propTypes = {
    list : PropTypes.array
}

export default JournalistList