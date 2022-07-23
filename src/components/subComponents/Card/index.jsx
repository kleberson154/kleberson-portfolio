import React from 'react'
import { BsGithub } from 'react-icons/bs'
import './styles.scss'

export const Card = props => {
  const { id, name, image, description, tags, demo, github } = props.data

  return (
    <div className="Card" key={id}>
      <h2 className="Title">{name}</h2>
      <img className="Image" src={image}></img>
      <p className="Description">{description}</p>
      <p className="Tags">
        {tags.map((t, id) => {
          return (
            <p className="Tag" key={id}>
              #{t}
            </p>
          )
        })}
      </p>
      <footer className="CardFooter">
        <a href={`${demo}`} passHref={true} target="_blank">
          <button className="Demo">visit</button>
        </a>
        <a href={`${github}`} passHref={true} target="_blank">
          <button className="Github">
            <BsGithub width={30} height={30} />
          </button>
        </a>
      </footer>
    </div>
  )
}
