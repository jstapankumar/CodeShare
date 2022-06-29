import React from "react";
import styled from "styled-components";
import { MdDescription, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaFreeCodeCamp } from "react-icons/fa";
import {BsFillPeopleFill} from 'react-icons/bs'
import {AiOutlineCloudUpload} from 'react-icons/ai'

const StyledDiv = styled.div`
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  padding: 20px;
  form {
    width: 100%;
    .label {
      display: flex;
      align-items: center;
      padding: 10px 0;
      font-size: 24px;
      label {
        margin-left: 10px;
      }
    }
    input{
      min-width:300px;
    }
    input,
    textarea {
      margin-bottom:20px;
      transition: 0.1s ease all;
      font-size: 18px;
      border: none;
      outline: none;
      box-shadow: 0 3px 5px rgb(0, 0, 0, 0.15);
      padding: 10px 20px;
      border-radius: 20px;
      overflow: hidden;
      &:focus {
        box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);
      }
    }
    textarea {
      width: 100%;
      resize: vertical;
      min-height: 560px;
      padding: 20px;
      overflow-y: auto;
     -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
    }
    #code {
      font-family: "Fira Code", monospace !important;
    }
    .post{
      display: flex;
      justify-content: center;
      align-items: center;
      background:white;
      gap:10px;
      width:150px;
      padding:10px;
      font-size:36px;
      box-shadow: 0 3px 5px rgb(0, 0, 0, 0.15);
      border-radius: 30px;;
      margin:0 auto;
      button{
        border: none;
        outline:none;
        background:white;
        font-size:24px;
      }
    }
  }
`;
function New() {
  return (
    <StyledDiv>
      <form>
        <div className="title label">
          <MdOutlineDriveFileRenameOutline />
          <label htmlFor="title">Title of the post</label>
        </div>
        <input
          type="text"
          placeholder="Provide a title here...."
          name="title"
        />
        <div className="description label">
          <MdDescription />
          <label htmlFor="description">Describe the post</label>
        </div>
        <textarea name="description" />
        <div className="code label">
          <FaFreeCodeCamp />
          <label htmlFor="code">Write the code here.</label>
        </div>
        <textarea name="code" id="code" />
        <div className="author label">
          <BsFillPeopleFill />
          <label htmlFor="title">Author </label>
        </div>
        <input
          type="text"
          placeholder="Provide author name here...."
          name="title"
        />
        <div className="post">
        <AiOutlineCloudUpload/>
        <button>Post</button>
        </div>
      </form>
    </StyledDiv>
  );
}

export default New;
