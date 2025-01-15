export default function Footer({ isDarkMode }) {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div id="contact" className="contact">
          <h4>Contact Me</h4>
        </div>
        {isDarkMode ? (
          <ul className="list-inline my-3 d-flex justify-content-center gap-3">
            <li className="list-inline-item">
              <a href="mailto:mjstanford615@gmail.com" className="text-light">
                Email
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://github.com/Stamich47"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                GitHub
              </a>
            </li>
          </ul>
        ) : (
          <ul className="list-inline my-3 d-flex justify-content-center gap-3">
            <li className="list-inline-item">
              <a className="text-dark" href="mailto:mjstanford615@gmail.com">
                Email
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://github.com/Stamich47"
                target="_blank"
                rel="noreferrer"
                className="text-dark"
              >
                GitHub
              </a>
            </li>
          </ul>
        )}

        <p className="text-muted">
          &copy; {new Date().getFullYear()} Michael Stanford
        </p>
      </div>
    </footer>
  );
}
