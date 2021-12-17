import React from 'react'
import Typography from '@mui/material/Typography';
import { TextLoop } from "react-text-loop-next";
function AnimatingText(props) {
  const techStack = ['React', 'Frontend', 'Backend', 'Nodejs', 'MERN Stack']
  return (
    <div style={{ width: 390, fontSize: 17 }}>
      <h1>
        Hi, I am Sameer
      </h1>
      <h1>
        <TextLoop>
          {techStack.map((item, i) => (
            <span key={i} style={{ color: '#FF6600' }}>{item} </span>
          ))}
        </TextLoop>{" "}
        developer
      </h1>
      <h1>
        based in India.
      </h1>
    </div>
  )
}

AnimatingText.propTypes = {

}

export default AnimatingText

