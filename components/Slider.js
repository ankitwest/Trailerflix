import React from 'react';
import SliderItem from './SliderItem';

function Slider({ results, title }) {
  return (
    <div className=" mt-10 z-50">
      <h2 className="text-2xl pl-10 z-50">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-3 py-3">
        {results.map((result) => (
          <SliderItem result={result} key={result.key} />
        ))}
      </div>
    </div>
  );
}
export default Slider;
