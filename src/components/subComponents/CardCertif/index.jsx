import './styles.scss'

export const CardCertif = props => {
  const { id, image } = props.data

  return (
    <div className="BoxCard" key={id}>
      <img className="ImageCard" src={image}></img>
    </div>
  )
}
