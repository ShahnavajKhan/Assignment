import React from 'react';
import './ListView.css'; // Import the CSS file

function ListView() {
  return (
    <div className="container mt-3">
      <h2 className="title">The "React Way" to Render a List</h2>
      <ul className="list-group">
        <li className="list-item">
          <img src="https://static.vecteezy.com/system/resources/previews/017/177/791/original/round-check-mark-symbol-with-transparent-background-free-png.png" alt="Check mark" className="check-icon" />
          Use Array.map
        </li>
        <li className="list-item">
          <img src="https://static.vecteezy.com/system/resources/previews/017/177/791/original/round-check-mark-symbol-with-transparent-background-free-png.png" alt="Check mark" className="check-icon" />
          Not a for loop
        </li>
        <li className="list-item">
          <img src="https://static.vecteezy.com/system/resources/previews/017/177/791/original/round-check-mark-symbol-with-transparent-background-free-png.png" alt="Check mark" className="check-icon" />
          Give each item a unique key
        </li>
        <li className="list-item">
          <img src="https://static.vecteezy.com/system/resources/previews/017/177/791/original/round-check-mark-symbol-with-transparent-background-free-png.png" alt="Check mark" className="check-icon" />
          Avoid using array index as the key
        </li>
      </ul>
    </div>
  );
}

export default ListView;
