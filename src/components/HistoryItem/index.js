import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <p className="history-text">{timeAccessed}</p>
      <img src={logoUrl} className="logoUrl" alt="logoUrl" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button type="button" onClick={onDeleteHistory}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-logo"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
