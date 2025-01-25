import React from 'react'

const Header = ({category, title}) => {
  return (
<div className="mb-8">
  <p className="text-gray-400">
    {category}
  </p>
  <p className="text-3xl font-extralight tracking-tight text-slate-900 capitalize">
    {title}
  </p>
</div>
  )
}

export default Header