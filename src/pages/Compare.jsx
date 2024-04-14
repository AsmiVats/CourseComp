import React from 'react';

function Compare() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#676B75] text-white font-bold w-1/2 ">
      <div className="text-center mb-6">
        <h1 className="text-4xl text-white font-bold m-2">Course<span className="text-gray-900">Compare</span></h1>
        <p className="text-white font-semibold m-2">I am a chatbot designed to recommend courses that can boost your productivity by 100%. Let me suggest the best course for you based on your needs.</p>
        <p className="text-sm text-white m-2">ek aacha sa caption</p>
      </div>
      <div className="flex mb-4">
        <h4 className="mr-4">Select Course</h4>
        <div className="shadow-md bg-[#858993] p-2 rounded-md mr-4 text-black">--Select Anyone--</div>
        <div className="shadow-md bg-[#858993] p-2 rounded-md mr-4 text-black">--Select Anyone--</div>
      </div>
      <div className="flex mb-4">
        <h4 className="mr-4">Select Image</h4>
        <div className="mr-4">
          <img src="" alt="Image 1" className=" w-24 h-24 object-cover rounded-md" />
        </div>
        <div>
          <img src="" alt="Image 2" className=" w-24 h-24 object-cover rounded-md" />
        </div>
      </div>
      <div className="mb-4 w-full flex justify-center items-center">
  <table className="table-auto w-3/4 border-collapse border-y-2">
    <tbody>
      <tr>
        <td className="border-y-2 border-[#2C2E2E] p-4">Course Price</td>
        <td className="border-y-2 border-[#2C2E2E] p-4">N/A</td>
        <td className="border-y-2 border-[#2C2E2E] p-4">N/A</td>
      </tr>
      <tr>
        <td className="border-y-2 border-[#2C2E2E] p-4">Course Star</td>
        <td className="border-y-2 border-[#2C2E2E] p-4">N/A</td>
        <td className="border-y-2 border-[#2C2E2E] p-4">N/A</td>
      </tr>
      <tr>
        <td className="border-y-2 border-[#2C2E2E] p-4">Course Duration</td>
        <td className="border-y-2 border-[#2C2E2E] p-4">N/A</td>
        <td className="border-y-2 border-[#2C2E2E] p-4">N/A</td>
      </tr>
      <tr>
        <td className="border-y-2 border-[#2C2E2E] p-4">Course Faculty</td>
        <td className="borde-y-2 border-[#2C2E2E] p-4">N/A</td>
        <td className="border-y-2 border-[#2C2E2E] p-4">N/A</td>
      </tr>
      <tr>
        <td className="border-y-2 border-[#2C2E2E] p-4">Course Platform</td>
        <td className="border-y-2 border-[#2C2E2E] p-4">N/A</td>
        <td className="border-y-2 border-[#2C2E2E] p-4">N/A</td>
      </tr>
    </tbody>
  </table>
</div>

      <div>
        <p className="text-gray-300 m-1">@codecatalyst</p>
      </div>
    </div>
  );
}

export default Compare;
