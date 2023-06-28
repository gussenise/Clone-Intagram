import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Sugestões para você</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username__info">
              <span className="username">adamsandler</span>
              <span className="relation">Novo no Instagram</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>C</Avatar>
            </span>
            <div className="username__info">
              <span className="username">casimiro</span>
              <span className="relation">Novo no Instagram</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>D</Avatar>
            </span>
            <div className="username__info">
              <span className="username">diogodefante</span>
              <span className="relation">Novo no Instagram</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>C</Avatar>
            </span>
            <div className="username__info">
              <span className="username">cocielo</span>
              <span className="relation">Novo no Instagram</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
