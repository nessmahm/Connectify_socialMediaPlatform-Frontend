import React from 'react';
import { ClipLoader } from 'react-spinners';
export const LoadingSpinner = () =>  {
  return (
    <div className="spinner-container">
      <ClipLoader
        color={"#000000"}
        loading={true}

      />
    </div>
  )
}