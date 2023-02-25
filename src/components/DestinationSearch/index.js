// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationList} = this.props
    const searchResults = destinationList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-bar-bg">
            <input
              type="search"
              placeholder="Search"
              onChange={this.onSearchInput}
              className="search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search Icon"
              className="logo"
            />
          </div>
          <div className="countriesList">
            <ul className="itemListContainer">
              {searchResults.map(eachItem => (
                <DestinationItem key={eachItem.id} itemDetails={eachItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
