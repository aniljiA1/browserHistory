import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <div className="container">
        <div className="row">
          <p>{timeAccessed}</p>
          <div className="row">
            <img src={logoUrl} className="logoUrl" alt="domain logo" />
            <p className="title">{title}</p>
            <p className="title">{domainUrl}</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="button"
            onClick={onDeleteHistory}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="delete-logo"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default HistoryItem
