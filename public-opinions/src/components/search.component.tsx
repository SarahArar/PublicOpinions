import React, { ChangeEvent, useState } from "react";

interface Props {
  onSearch: (value: string) => void;
}

const SearchComponent: React.FC<Props> = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    props.onSearch(value); // ✅ correctly using props.onSearch
  };

  return (
    <div className="d-flex justify-content-center py-4">
      <input
        type="text"
        placeholder="ابحث عن الموضوع (مثلاً: رياضة)"
        value={inputValue}
        onChange={handleChange}
        style={{ padding: "8px", marginBottom: "16px", width: "300px" }}
      />
    </div>
  );
};

export default SearchComponent;
