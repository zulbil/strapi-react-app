import Avatar from '../Avatar'
import PropTypes from 'prop-types'
import './style.scss'

const JournalistItem = ({ item }) => {
    return (
        <div className="col mt-4">
            <div className="card shadow-sm journalist-card">
                <div className="card-head">
                    <Avatar path={item.avatar.length > 0 ? item.avatar[0].url: ''} firstname={item.firstname }/>
                    <div className="journalist-identity">
                        <h5>{(item.firstname && item.lastname) && item.firstname+ ' ' + item.lastname}</h5>
                        {item.roles && <span><i className="bi bi-check-circle-fill"></i> {item.roles} </span>}
                    </div>
                </div>
                <div className="card-body">
                    {item.description && <p className="journalist-bio">{item.description}</p>}
                    <div className="journalist-topics">
                        {item.firstname && <h6 className="journalist-agency">{item.firstname+ "'s beats and topics"}</h6>}
                        {
                            item.topics.length > 0 &&
                            <div className="topic-tags-list">
                                {item.topics.map((el,index) => {
                                    return <span className="topic-tag" key={index}> <i className="bi bi-tags-fill"></i> {el.name}</span>
                                })}
                            </div>
                        }
                    </div>
                </div>
                <div className="footer-journalist-card">
                    <div className="container-btn-actions">
                        <div className="btns-action-right">
                            <button type="button" className="btn btn-outline-dark btn-contact">
                                <i className="bi bi-person-lines-fill me-2"></i> 
                                Contact 
                                <i className="bi bi-chevron-down ms-2"></i> 
                            </button>
                        </div>
                        <div className="btns-action-left">
                            <button type="button" className="btn btn-outline-dark btn-twitter">
                                <i className="bi bi-twitter me-2"></i> 
                                Tweet 
                                <i className="bi bi-lock-fill ms-2"></i>
                            </button>
                            <button type="button" className="btn btn-warning ms-3"> 
                                <i className="bi bi-plus-circle-fill me-2"></i> 
                                Save 
                                <i className="bi bi-lock-fill ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

JournalistItem.propTypes = {
    item: PropTypes.object
}

export default JournalistItem
