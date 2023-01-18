type ThemeProps = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
};

function Header({ theme, toggleTheme }: ThemeProps) {
  const ThemeText = () => {
    return theme === 'dark' ? (
      <div>
        <i className="fa-regular fa-moon"></i>
        Dark Mode
      </div>
    ) : (
      <div>
        <i className="fa-regular fa-sun"></i>
        Light Mode
      </div>
    );
  };

  return (
    <header>
      <div>
        <h1>WORLD FLAGS</h1>

        <button className="btn-theme" onClick={toggleTheme}>
          {ThemeText()}
        </button>
      </div>
    </header>
  );
}

export default Header;
