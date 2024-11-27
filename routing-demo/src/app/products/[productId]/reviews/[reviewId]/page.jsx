import React from 'react'

export default function ReviewDetail({params}) {
    const{productId, reviewId} = params
  return (
    <div>
        <h1>Review {reviewId} for product {productId} </h1>
    </div>
  )
}
