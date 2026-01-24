import React, { Suspense } from 'react'
import ShopPage from './shop/page'

const page = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <ShopPage/>
      </Suspense>
    </div>
  )
}

export default page