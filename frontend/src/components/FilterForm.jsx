// import React, { useState } from "react";

// const FilterForm = ({ onFilterChange }) => {
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onFilterChange({ name });
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit} className="filter-form">
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <button type="submit">Filter</button>
//       </form>
//     </>
//   );
// };

// export default FilterForm;
