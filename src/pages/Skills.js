import React from 'react'
//Import Bootstrap Navbar
import { ProgressBar } from "react-bootstrap";

const Skills = () => {
  return (
    <>
      <h1 className="pg-title">SKILLS</h1>
      <h3>Web Development</h3><br />
      <h5>HTML / CSS</h5>
      <ProgressBar variant="info" now={90} label={'90%'} /><br />
      <h5>JavaScript / Ajax / JQuery</h5>
      <ProgressBar variant="info" now={35} label={'35%'} /><br />
      <h5>React</h5>
      <ProgressBar variant="info" now={25} label={'25%'} /><br />
      <h5>PHP</h5>
      <ProgressBar variant="info" now={35} label={'35%'} /><br />
      <h5>Wordpress</h5>
      <ProgressBar variant="info" now={70} label={'70%'} /><br />
      <h5>Photoshop</h5>
      <ProgressBar variant="info" now={50} label={'50%'} /><br /><br />

      <hr />

      <h3>3D Modelling / Texturing / Sculpting/ Game Development</h3><br />
      <h5>Maya</h5>
      <ProgressBar variant="info" now={65} label={'65%'} /><br />
      <h5>Zbrush</h5>
      <ProgressBar variant="info" now={65} label={'65%'} /><br />
      <h5>Blender</h5>
      <ProgressBar variant="info" now={40} label={'40%'} /><br />
      <h5>Substance Painter</h5>
      <ProgressBar variant="info" now={35} label={'35%'} /><br />
      <h5>Unity</h5>
      <ProgressBar variant="info" now={25} label={'25%'} /><br />
    </>
  )
}

export default Skills