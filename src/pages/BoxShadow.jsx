import React from 'react'
import '../css/BoxShadow.css'
import image1 from '../img/download.jpeg'

function BoxShadow() {
  return (
    <div
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'white',
        width: '360px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
        fontFamily: 'sans-serif'
      }}
    >
      {/* Top Image */}
      <img
        src={image1}
        alt="Order Banner"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover'
        }}
      />

      {/* Content Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '18px',
          padding: '20px'
        }}
      >
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>Order Summary</h2>
        <p style={{ fontSize: '14px', color: '#666', textAlign: 'center', lineHeight: '1.5' }}>
          India's history is a rich tapestry woven from ancient civilizations,
          diverse empires, and a long struggle for independence.
        </p>

        {/* Plan Box */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#E9F5FF',
            borderRadius: '10px',
            padding: '12px 16px',
            width: '100%'
          }}
        >
          <div>
            <p style={{ fontWeight: 'bold', margin: 0 }}>Annual Plan</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>$99.9/year</p>
          </div>
          <button
            style={{
              background: 'transparent',
              border: 'none',
              color: '#0066cc',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Change
          </button>
        </div>

        {/* Primary Button */}
        <button
          style={{
            width: '100%',
            background: '#003366',
            color: 'white',
            border: 'none',
            padding: '12px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            transition: '0.3s'
          }}
          onMouseOver={(e) => e.target.style.background = '#004080'}
          onMouseOut={(e) => e.target.style.background = '#003366'}
        >
          Proceed to Payment
        </button>

        {/* Cancel Link */}
        <button
          style={{
            background: 'transparent',
            border: 'none',
            color: '#999',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '8px'
          }}
        >
          Cancel Order
        </button>
      </div>
    </div>
  )
}

export default BoxShadow;
