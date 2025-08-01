import React, { useState } from 'react';
import StarRating from '../components/StarRating';

function UseStarRating() {
  const [maxStarsInput, setMaxStarsInput] = useState("5");
  const [filledStarsInput, setFilledStarsInput] = useState("3");

  // Convert to number safely (fallback to 0 if invalid)
  const maxStars = Number(maxStarsInput) || 0;
  const filledStars = Math.min(Number(filledStarsInput) || 0, maxStars);

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    // Allow only digits or empty
    if (/^\d*$/.test(value)) {
      setter(value);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="space-x-4">
        <label>
          Max Stars:
          <input
            type="text"
            value={maxStarsInput}
            onChange={handleInputChange(setMaxStarsInput)}
            className="border ml-2 px-2 py-1 rounded"
            placeholder="Enter max stars"
          />
        </label>

        <label>
          Filled Stars:
          <input
            type="text"
            value={filledStarsInput}
            onChange={handleInputChange(setFilledStarsInput)}
            className="border ml-2 px-2 py-1 rounded"
            placeholder="Enter filled stars"
          />
        </label>
      </div>

      <StarRating maxxstar={maxStars} filledStars={filledStars} />
    </div>
  );
}

export default UseStarRating;
