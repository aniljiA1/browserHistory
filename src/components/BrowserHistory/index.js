import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: '', historyList: 'initialHistoryList'}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )

    this.setState({
      historyList: updatedHistoryList,
    })
  }

  render() {
    const {searchInput, historyList} = this.state

    const searchResults = historyList.filter(eachInput =>
      eachInput.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-img"
            alt="app logo"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-logo"
              alt="search"
            />
            <input
              type="search"
              placeholder="Search-history"
              className="search-history"
              value={searchInput}
            />
          </div>
          <ul>
            {searchResults.map(eachUser => (
              <HistoryItem
                key={eachUser.id}
                historyDetails={eachUser}
                deleteHistory={this.deleteHistory}
                onChange={this.onChangeSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default BrowserHistory
