import React from 'react'

interface Props {
    issueType: string
}

const Type = ({issueType}: Props) => {
  return (
    <p>
        {issueType}
    </p>
  )
}

export default Type
