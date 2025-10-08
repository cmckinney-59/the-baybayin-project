import familyImage from "../../assets/images/family.jpg";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div className="about-intro-container">
        <p className="about-intro-text">
          Hi, my name is Chaz. I am a husband, a father and a software engineer.
          I am also the founder of The Baybayin Project. I was born and raised
          in Utah. I currently live in Alberta, Canada with my wife and three
          children.
        </p>
        <img src={familyImage} alt="Family" className="family-image" />
      </div>
      <h2>How it began</h2>
      <h3>Mission Call</h3>
      <p>
        I served a two year mission for the Church of Jesus Christ of Latter-day
        Saints in the Philippines from 2013 to 2015. Over the course of my
        mission I learned to speak Tagalog fluently. At one point I stumbled
        upon the Baybayin script in a Tagalog dictionary and began to learn it.
        A group of friends and I often sent notes back and forth in Baybayin.
      </p>
      <h3>After Returning Home</h3>
      <p>
        Soon after returning home, I started working for The Church in a call
        center for The Philippines. This position allowed me to maintain my
        language skills while working with amazing Filipino colleagues.
      </p>
      <p>
        In 2018 I enrolled at BYU-Hawaii. This was not only a great opportunity
        for me to continue my education, but it also allowed me to continue
        speaking Tagalog due to all of the Filipinos that attended school there.
        During my last semester I took a class where we used Excel to
        deconstruct and analyze a chapter of a book. The principles that I
        learned in this class would build the foundational skills required to
        begin my first project, transcribing "Ang Aklat Ni Mormon" (The Book of
        Mormon).
      </p>
      <h3>Beginning of the Project</h3>
      <p>
        After finishing at BYUH I returned home to Utah. Soon after the thought
        occurred to me that I could transcribe “Ang Aklat Ni Mormon” into
        Baybayin. I soon had a proof of concept for the first chapter of ANM.
        Over the course of the following months, I was able to transcribe,
        review, edit and format most of the “Ang Aklat ni Mormon” using the
        skills that I learned at BYUH.
      </p>
      <p>
        Over the next couple of years I had many big life changes that affected
        my ability to work on the project. I moved to a new country, married the
        love of my life, took on two wonderful stepdaughters, welcomed a
        pregnancy and took on more responsibility at work. But, “sa awa ng
        Diyos” (through the grace of God) I was able to finish editing the first
        draft by April 2023.
      </p>
      <h3>Future</h3>
      <p>
        We currently have several projects in the works. For a full list of
        projects, please visit the{" "}
        <a className="link" href="#/projects">
          Projects
        </a>{" "}
        page.
      </p>
      <p>
        Overall, working on these projects has been a great joy. The people and
        culture of the Philippines has had a profound positive impact on my
        life.
      </p>
      <p>Maraming salamat sa inyong lahat! - Chaz</p>
      <p className="baybayin-font">MrmiN+ slmt+ s In+yoN+ lht+!</p>
    </>
  );
}
