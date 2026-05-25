import './home.css';

export default function Home() {
  return (
    <div>
      <div id="hero">
        <div id="hero-text">
          <h1>Welcome to SARC Events</h1>

          <p>
            The Student Alumni Relations Cell (SARC), IIT Bombay, is dedicated
            to strengthening the bond between students and the alumni community
            through meaningful engagement, mentorship, and collaborative
            initiatives.
          </p>

          <p>
            Explore alumni interactions, networking opportunities, mentorship
            programs, and flagship events that foster lifelong connections and
            contribute to the Institute’s continued journey of excellence.
          </p>

        </div>

        <div id="hero-image">
          <img src='https://acr.iitbombay.org/wp-content/uploads/2025/09/1600x640_TeamPhoto.jpg' alt="IIT Bombay Campus" />
        </div>
      </div>

      <div id="categories-section">
        <h2>Our Key Initiatives</h2>

        <div id="categories">
          <div className="category">🎓 Student Alumni Meet (SAM)</div>
          <div className="category">🤝 Alumni Student Mentorship Program (ASMP)</div>
          <div className="category">📞 Phonathons</div>
          <div className="category">🏭 Industrial Learning Programme (ILP)</div>
        </div>
      </div>
    </div>
  );
}