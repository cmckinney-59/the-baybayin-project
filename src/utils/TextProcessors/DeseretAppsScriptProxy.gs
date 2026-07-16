/**
 * Production proxy for 2deseret.com (needed because their API has no CORS headers).
 *
 * Setup:
 * 1. Create a new Apps Script project (or reuse one)
 * 2. Paste this file
 * 3. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Put the /exec URL in .env.local:
 *    VITE_DESERET_TRANSLATION_URL=https://script.google.com/macros/s/.../exec
 *
 * Local development can instead use the Vite proxy (no env var needed).
 */

var TWO_DESERET_URL = "https://2deseret.com/json/translation";

function json(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function translateEnglish(english) {
  var response = UrlFetchApp.fetch(TWO_DESERET_URL, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({ english: english }),
    muteHttpExceptions: true,
  });

  if (response.getResponseCode() >= 400) {
    return {
      error:
        "2deseret.com request failed (" + response.getResponseCode() + ").",
    };
  }

  return JSON.parse(response.getContentText());
}

// Prefer GET for browser calls (avoids CORS preflight issues).
function doGet(e) {
  try {
    var english = (e && e.parameter && e.parameter.english) || "";
    if (!String(english).trim()) {
      return json({ deseret: "" });
    }
    return json(translateEnglish(english));
  } catch (error) {
    return json({
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

function doPost(e) {
  try {
    var body = {};
    if (e && e.postData && e.postData.contents) {
      body = JSON.parse(e.postData.contents);
    }
    var english = body.english || (e && e.parameter && e.parameter.english) || "";
    if (!String(english).trim()) {
      return json({ deseret: "" });
    }
    return json(translateEnglish(english));
  } catch (error) {
    return json({
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
