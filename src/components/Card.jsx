import { useState, useEffect } from "react";
import CardContext from "./CardContext";

export default function Card({ project }) {
  return (
    <div className="card bg-zinc-600 rounded-xl border-1">
      <h1>{project.name}</h1>
      <img src={project.thumbnail} alt="" />
    </div>
  );
}
