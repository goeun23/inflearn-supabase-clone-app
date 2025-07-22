"use client"

import { useMutation } from "@tanstack/react-query"
import { getMovie } from "actions/movieActions"

export default function UI({
  image_url,
  title,
  popularity,
  release_date,
  vote_average,
  overview,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <img src={image_url} className="w-1/3" />
      <div className="md:w-2/3 w-full items-center md:items-start flex flex-col p-6 gap-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg font-medium">{overview}</p>
        <div className="font-bold text-lg">
          <i className="fas fa-star mr-1" />
          Vote Average : {vote_average}
        </div>
        <div className="font-bold text-lg">Popularity: {popularity}</div>
        <div className="font-bold text-lg">Release Date: {release_date}</div>
      </div>
    </div>
  )
}
