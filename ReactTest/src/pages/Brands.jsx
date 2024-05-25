import { useEffect, useState } from 'react'
import axios from 'axios'

function Brands () {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    async function name () {
      const { data } = await axios.get('https://localhost:7158/api/Brands')
      setBrands(data)
    }
    name()
  }, [])

  return (
    <>
      <div>Brands</div>
      <div>
        <ul>
          {brands.map(brand => {
            return (
              <li key={brand.brandId}>
                {brand.brandId} {brand.brandName}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Brands
