import React from 'react'

const Container = ({children,...props}) => {
  return <main className={`mx-auto w-screen px-12 md:px-40`} {...props} >{children}</main>;
}

export default Container