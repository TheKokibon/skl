import React from 'react';

const AchievementTable = ({ children }) => {
  return (
    <div className=" p-2 flex justify-center">
      <table className="w-1/2  border-gray-200 ">
       
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default AchievementTable;
