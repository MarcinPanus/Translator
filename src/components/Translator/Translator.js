import React from "react";

function Translator() {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div className="my-2">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected disabled>
                  Translate from:{" "}
                </option>
                <option value="pl">Polish</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
              </select>
            </div>
            <textarea className="form-control" rows="8"></textarea>
          </div>
          <div class="col-lg-6">
            <div className="my-2">
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected disabled>
                  Translate to:
                </option>
                <option value="pl">Polish</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
              </select>
            </div>
            <textarea className="form-control" rows="8"></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default Translator;
