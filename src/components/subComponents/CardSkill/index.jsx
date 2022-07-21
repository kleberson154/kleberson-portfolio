import './styles.css'

export const CardSkill = props => {
  const { id, image, name } = props.data

  return (
    <div className="Box" key={id}>
      <img className="Image" src={image}></img>
      <div className="Name">{name}</div>
    </div>
  )
}
