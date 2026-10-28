import './Card.css'

const Card = (props) => {
  return (
    <figure>
        <img src={props.image} alt={props.text} />
        <figcaption>I love {props.text}</figcaption>
    </figure>
  )
}

export default Card