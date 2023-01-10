type searchProps = {
  value: string;
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchBar({ value, searchHandler }: searchProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={searchHandler}
        placeholder="Search Country"
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default SearchBar;
