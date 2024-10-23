export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div id="contact" className="contact">
          <h4>Contact Me</h4>
        </div>
        <ul className="list-inline my-3 d-flex justify-content-center gap-3">
          <li className="list-inline-item">
            <a href="mailto:mjstanford615@gmail.com">Email</a>
          </li>
          <li className="list-inline-item">
            <a href="http://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://github.com/Stamich47"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        <p className="text-muted">
          &copy; {new Date().getFullYear()} Michael Stanford
        </p>
      </div>
    </footer>
  );
}
