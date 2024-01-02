import Docs from '@/components/Docs'
import React, { Suspense } from 'react'
import Loading from "@/pages/docs/loading"

const index = () => {
  return (
    <Suspense fallback={<Loading />}>
    <Docs />
  </Suspense>
  )
}

export default index