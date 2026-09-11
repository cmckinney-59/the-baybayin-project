import { DESERET_DATA } from "../../../data/DeseretData/DESERET_DATA";

export default function DeseretTable() {
  return (
    <>
      <h3>Deseret Alphabet Letters</h3>
      <p>
        Deseret is phonetic, meaning each letter has a unique sound and words
        are written as they sound.
      </p>
      <p>
        For a deeper dive, read{" "}
        <a
          href="https://www.chem.ucla.edu/~jericks/Historical%20or%20Technical/Linguistics/Deseret_Guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          A Complete Guide to Reading and Writing in the Deseret Alphabet
        </a>{" "}
        by Neil Alexander Walker.
      </p>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Letter</th>
            <th>Sound</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {DESERET_DATA.map((letter) => (
            <tr key={letter.letter}>
              <td className="deseret-letter">{letter.letter}</td>
              <td>{letter.sound}</td>
              <td>{letter.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
