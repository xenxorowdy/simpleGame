import React, { useState } from 'react';

function EditRow({ rowData, onSave, onCancel }) {
  const [editedData, setEditedData] = useState({ ...rowData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = () => {
    onSave(editedData);
  };

  return (
    <div>
      <h2>Edit Row</h2>
      <form>
        <input
        disabled="true"
          type="text"
          name="Name"
          value={editedData.Name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="Url"
          value={editedData.Url}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="Author"
          value={editedData.Author}
          onChange={handleInputChange}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default EditRow;
