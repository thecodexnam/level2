import React from 'react'

const page = async ({ params }) => {
  const { username } = await params
  console.log('Received username:', username)

  return (
    <div>
      <h1>Dynamic Profile Page</h1>
    </div>
  )
}

export default page
