FOR JEREMIAH:

Could you just check the logic in the Transliterator2 component for me?
I am having issues with the dialog staying open and progressing thru the words that need to be reviewed.
It should behave as follows:

- User enters words into the textarea
  - Insert this: "Dan chaz can jeremiah question"
  - This should ask a question about the capital letter, ch, c, j and qu in the modal
- After every word is reviewed it is then output to the transliteration-output

Technical notes:

- When the user click's transliterate it generates a dictionary to store each unique word.
- It then loops thru each word checking to see if it has a capital letter, ch, c, j or qu.
  - If the word does then it asks the user thru the dialog what the correct phonetic spelling is (it should loop thru the word until it finds and replaces all of those conditions)
    - A good word to test for this is 'chocolate' because it has 'ch' and 'c' so it should loop thru the word twice to resolve both issues
  - If the word doesn't have one of those conditions OR the user has resolved all of those conditions then the word is sent thru the processBaybayinText() method
  - The product is the stored as the value to the previously set key (the key is the original word, the value is the processed word)
- The words are then put back together in the proper order and output to the transliteration-output

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
