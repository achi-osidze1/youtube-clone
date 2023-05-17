import React from 'react'
import ReactPlayer from 'react-player'

const Video = () => {
  return (
    <ReactPlayer width={"100%"} height={530} controls url='https://www.youtube.com/watch?v=v65dkn8_zR8'/>
  )
}

export default Video