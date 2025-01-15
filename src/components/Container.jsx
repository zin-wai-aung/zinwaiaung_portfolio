import React from 'react'

const Container = ({children,...props}) => {
  return <main className={`mx-auto w-screen px-20 md:px-40`} {...props} >{children}</main>;
}

export default Container