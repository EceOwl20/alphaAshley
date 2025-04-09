import React from 'react'

const Location = () => {
  return (
    <div>
      <iframe
      src='https://www.google.com/maps.googleapis.com/maps/api/js?v=3.59&client=google-maps-pro&language=tr&region=TR&libraries=places,visualization,geometry,search'
       width="100%"
       height="500px"
       style={{ border: 0 }}
       allowFullScreen
       loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"
       >
        
      </iframe>
    </div>
  )
}

export default Location
