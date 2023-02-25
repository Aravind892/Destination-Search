// Write your code here
import './index.css'

const DestinationItem = props => {
  const {itemDetails} = props
  const {name, imageUrl} = itemDetails

  return (
    <li className="list">
      <img src={imageUrl} className="image" alt={name} />
      <h1 className="heading">{name}</h1>
    </li>
  )
}
export default DestinationItem
