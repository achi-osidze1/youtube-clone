import React from 'react'
import styled from 'styled-components';
import { HandThumbsUp } from 'react-bootstrap-icons';
import { HandThumbsDown } from 'react-bootstrap-icons';
import { Send } from 'react-bootstrap-icons';
import { ThreeDots } from 'react-bootstrap-icons';
import { ArrowDown } from 'react-bootstrap-icons';
import { Bell } from 'react-bootstrap-icons';
import { PatchCheckFill } from 'react-bootstrap-icons';

const Content = () => {
  const P = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  margin-top: 5px;
  color: white;
  `
  const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    overflow-x: scroll;
  }
  @media screen and (min-width: 481px) and (max-width: 767px){
    overflow-x: scroll;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    overflow-x: scroll;
  }
  `
  const Upload = styled.div`
  display: flex;
  justify-content: flex-start;
  `
  const Img = styled.img`
  height: 40px;
  border-radius:100%;
  `
  const UploaderInfo = styled.div`
  `
  const Uploader = styled.h6`
  margin-left: 10px;
  color: white;
  `
  const Subscribers = styled.h6`
  margin-left: 10px;
  color: gray;
  font-size: small;
  position: relative;
  bottom: 5px;
  `
  const SubscribeButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 30px;
  width: 100px;
  border: none;
  height: 40px;
  margin-left: 45px;
  background-color: #313131;
  &:hover{
    background-color: #4f4f4f;
    transition: 0.3s;
  }
  `
  const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  
  `
  const LikeButton = styled.button`
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border: none;
  margin-left: 50px;
  width: 70px;
  height: 40px;
  background-color: #313131;
  color: white;
  &:hover{
    background-color: #4f4f4f;
    transition: 0.3s;
  }
  `
  const DislikeButton = styled.button`
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border: none;
  height: 40px;
  width: 50px;
  margin-left:1px;
  background-color: #313131;
  color: white;
  &:hover{
    background-color: #4f4f4f;
    transition: 0.3s;
  }
  `
  const ShareButton = styled.button`
  border-radius: 30px;
  border: none;
  margin-left: 10px;
  width: 100px;
  height: 40px;
  background-color: #313131;
  color: white;
  &:hover{
    background-color: #4f4f4f;
    transition: 0.3s;
  }
  `
  const DownloadButton = styled.button`
  border-radius: 30px;
  border: none;
  margin-left: 10px;
  width: 110px;
  height: 40px;
  background-color: #313131;
  color: white;
  &:hover{
    background-color: #4f4f4f;
    transition: 0.3s;
  }
  `
  const MoreActionsButton = styled.button`
  border-radius: 100%;
  border: none;
  margin-left: 15px;
  width: 40px;
  height: 40px;
  background-color: #313131;
  color: white;
  &:hover{
    background-color: #4f4f4f;
    transition: 0.3s;
  }
  `
  const Comments = styled.div`
  background-color: #313131;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  margin-top: 5px;
  cursor: pointer;
  &:hover{
    background-color: #4f4f4f;
    transition: 0.3s;
  }
  @media screen and (max-width: 480px) {
    height:100%;
  }
  @media screen and (min-width: 481px) and (max-width: 767px){
    height:100%;
  }
  `
  const Views = styled.div`
  display: flex;
  color: white;
  `
  const Span = styled.span`
  margin: 5px;
  `
  const CommentsP = styled.p`
  margin: 5px;
  color: #b8b8b8;
  `

  return (
    <>
    <P>How Diablo IV Is Bringing Its Power Fantasy Combat to Life</P>
    <Div>
        <Upload>
            <Img src='https://yt3.ggpht.com/H_---ano_f27DOCejDhUdBMtBcxcv32MoXmFKQc_mBcxYSH4HPZTGuBUdm7UgI5VlutMOVX2=s88-c-k-c0x00ffffff-no-rj' alt='' />
            <UploaderInfo>
                <Uploader>IGN <PatchCheckFill className='mb-1' /></Uploader>
                <Subscribers>17.4M subscribers</Subscribers>
            </UploaderInfo>
            <SubscribeButton>Subscribed</SubscribeButton>
            <Bell className="mt-2 m-1" color='white' size={20} />
        </Upload>
        <Actions>
            <LikeButton><HandThumbsUp /> 590</LikeButton>
            <DislikeButton><HandThumbsDown /></DislikeButton>
            <ShareButton><Send /> Share</ShareButton>
            <DownloadButton><ArrowDown /> Download</DownloadButton>
            <MoreActionsButton><ThreeDots /></MoreActionsButton>
        </Actions>
    </Div>
    <Comments>
        <Views>
            <Span>20K Views</Span>
            <Span>1 Hour Ago</Span>
        </Views>
        <CommentsP>Diablo IV's Game Director Joe Shely and Diablo General Manager Rod Fergusson tell us about finding the right feel and pacing for Diablo IV's weighty combat. <span style={{ "color": "white" }}>Show More</span></CommentsP>
    </Comments></>
  )
}

export default Content