import React from 'react'

const PageTitle = ({smallTitle,mainTitle}) => {
  return (
      <div>
          <h3 className=" text-xl text-primary tracking-wide"> {smallTitle} _ </h3>
          <h1 className=" font-grotesk dark:text-Darksecondary font-bold text-2xl md:text-3xl"> {mainTitle} </h1>
    </div>
  )
}

export default PageTitle