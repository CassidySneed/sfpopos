import React, { useState } from 'react'
import POPOSSpace from './POPOSSpace';
import './POPOSList.css'
import data from './sfpopos-data'

function POPOSList() {
  const [query, setQuery] = useState('')
  const spaces = data.filter((obj) => {
    // obj.title.includes(query) || obj.address.includes(query)
    const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
    // true if query is in address
    const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
    // return true if either is true
    return inTitle || inAddress
  }).map(({ id, title, address, images, hours }, i) => {
    console.log(id)
    return (
      <POPOSSpace
        id={id}
        key={`${title}-${id}`}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  }
  )

  return (
    <div className="POPOSList">
      <form>
        <input
          value={query}
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {spaces}
    </div>
  )
}

export default POPOSList;