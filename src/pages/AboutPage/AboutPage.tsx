import familyImage2 from "../../assets/images/family2.jpg";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <article className="about-page">
      <header className="about-header">
        <h1 className="about-title">About</h1>
      </header>

      <section className="about-intro">
        <div className="about-intro-content">
          <p className="about-intro-text">
            Hi, my name is Chaz. I am a husband, a father and a software
            engineer. I am also the founder of The Baybayin Project. I was born
            and raised in Utah. I currently live in Alberta, Canada with my wife
            and three children.
          </p>
          <img
            src={familyImage2}
            alt="Chaz with family"
            className="about-intro-image"
          />
        </div>
      </section>

      <section className="about-story">
        <h2 className="about-section-title">How it began</h2>

        <div className="about-block">
          <h3 className="about-subtitle">Mission Call</h3>
          <p>
            I served a two year mission for the Church of Jesus Christ of
            Latter-day Saints in the Philippines from 2013 to 2015. Over the
            course of my mission I learned to speak Tagalog fluently. At one
            point I stumbled upon the Baybayin script in a Tagalog dictionary
            and began to learn it. A group of friends and I often sent notes
            back and forth in Baybayin.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-subtitle">After Returning Home</h3>
          <p>
            Soon after returning home, I started working for The Church in a
            call center for The Philippines. This position allowed me to
            maintain my language skills while working with amazing Filipino
            colleagues.
          </p>
          <p>
            In 2018 I enrolled at BYU-Hawaii. This was not only a great
            opportunity for me to continue my education, but it also allowed me
            to continue speaking Tagalog due to all of the Filipinos that
            attended school there. During my last semester I took a class where
            we used Excel to deconstruct and analyze a chapter of a book. The
            principles that I learned in this class would build the
            foundational skills required to begin my first project,
            transcribing "Ang Aklat Ni Mormon" (The Book of Mormon).
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-subtitle">Beginning of the Project</h3>
          <p>
            After finishing at BYUH I returned home to Utah. Soon after the
            thought occurred to me that I could transcribe "Ang Aklat Ni
            Mormon" into Baybayin. I soon had a proof of concept for the first
            chapter of ANM. Over the course of the following months, I was able
            to transcribe, review, edit and format most of the "Ang Aklat ni
            Mormon" using the skills that I learned at BYUH.
          </p>
          <p>
            Over the next couple of years I had many big life changes that
            affected my ability to work on the project. I moved to a new
            country, married the love of my life, took on two wonderful
            stepdaughters, welcomed a pregnancy and took on more responsibility
            at work. But, "sa awa ng Diyos" (through the grace of God) I was
            able to finish editing the first draft by April 2023.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-subtitle">Future</h3>
          <p>
            We currently have several projects in the works. For a full list of
            projects, please visit the{" "}
            <a className="link" href="#/projects">
              Projects
            </a>{" "}
            page.
          </p>
          <p>
            Overall, working on these projects has been a great joy. The people
            and culture of the Philippines has had a profound positive impact
            on my life.
          </p>
        </div>
      </section>

      <footer className="about-sign-off">
        <p className="about-sign-off-text">
          Maraming salamat sa inyong lahat! — Chaz
        </p>
        <p className="about-sign-off-baybayin baybayin-font">
          MrmiN+ slmt+ s In+yoN+ lht+!
        </p>
      </footer>
    </article>
  );
}
