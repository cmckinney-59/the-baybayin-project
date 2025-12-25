import BaybayinTableBorrowed from "../BaybayinTable/BaybayinTableBorrowed";
import BaybayinBorrowedWordsExamples from "./BaybayinBorrowedWordsExamples";

export default function BorrowedWordsContainer() {
  return (
    <>
      <p>
        There are many words in Tagalog that have been borrowed from other
        languages. Most notably from Spanish and English. This is why, when
        transliterating modern Tagalog into Baybayin, many symbols represent two
        or more letters from the Latin alphabet OR are a combination of symbols
        to produce a similar sound. Many words when expressed in Baybayin will
        first be "Tagalized" or in other words, they are written phonetically
        using the Roman alphabet. (more on these later) Here is a table of the
        most notable borrowed sounds and how they are expressed in Baybayin:
      </p>
      <BaybayinTableBorrowed />
      <BaybayinBorrowedWordsExamples />
    </>
  );
}
