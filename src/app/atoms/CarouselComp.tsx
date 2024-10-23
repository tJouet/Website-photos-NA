"use client"
import React from "react"
import "../components/styles.css"
import Image from "next/image"


const images = [
  "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
]
//Creer un fake date avec un [{src:"src"(trouver comment faire une preview de toutes les photos), description:{description}, albumTitle:'title'}]  remplacer les image simples dans le map ci dessous par des "albums" à ouvrir au clic
const CarouselComp = () => {

  return (
    <div className=" snap-mandatory snap-x flex flex-row w-full overflow-x-auto pb-14  ">
   
      {images.map((image, index) => (
        <img src={image} key={index} className="snap-center shrink-0 first:pl-4 px-4 last:pr-4  " alt={`carousel-img-${index}`} />
      ))}
   
    </div>
  )
}


export default CarouselComp

