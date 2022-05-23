import React, {useState, useEffect} from "react";
import axios from "axios";

function Translator() {
  const [state, setState] = useState({
    translateFrom: "",
    text: "",
    translateTo: "",
    translatedText: "",
  });

  const options = {
    method: "GET",
    url: "https://nlp-translation.p.rapidapi.com/v1/translate",
    params: {
      text: state.text,
      to: state.translateTo,
      from: state.translateFrom,
    },
    headers: {
      "X-RapidAPI-Host": "nlp-translation.p.rapidapi.com",
      "X-RapidAPI-Key": "334994993fmshe11a824f75823dfp1a658ajsna734ebc1349c",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setState({
          ...state,
          translatedText: Object.values(response.data.translated_text)[0],
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [state.translateTo]);

/*
useEffect should run when the "state.text" element is changed so that the app 
translates more smoothly. Here I decided to make this choice ("state.translateTo") 
because the external api I use has a requests limit and I wanted to avoid additional charges 
*/

  return (
    <>
      <div className="container-fluid" style={{marginBottom: "100px"}}>
        <div className="row">
          <div className="col-lg-6">
            <div className="my-2">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={e =>
                  setState({...state, translateFrom: e.target.value})
                }
              >
                <option selected disabled>
                  Translate from:
                </option>
                <option value="pl">Polish</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="it">Italian</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="ru">Russian</option>
              </select>
            </div>
            <textarea
              className="form-control"
              rows="8"
              onChange={e => setState({...state, text: e.target.value})}
              value={state.text}
            ></textarea>
          </div>
          <div className="col-lg-6">
            <div className="my-2">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={e =>
                  setState({...state, translateTo: e.target.value})
                }
              >
                <option selected disabled>
                  Translate to:
                </option>
                <option value="pl">Polish</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="it">Italian</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="ru">Russian</option>
              </select>
            </div>
            <textarea
              className="form-control"
              rows="8"
              value={state.translatedText}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default Translator;
