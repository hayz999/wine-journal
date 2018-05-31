import React from 'react';

const PairingForm = () => {
  return (
    <div>
      <div id="form-container" >
        <div className="form-style-6">
          <h1>New Pairing</h1>
          <form>
            <section className="form" >
              <section >
                <input name="recipeName"
                  type="text"
                  placeholder="Recipe Name"/>
              </section>
              <section >
                <input name="link"
                  type="text"
                  placeholder="Link" />
              </section>
              <section >
                <input name="description"
                  type="text"
                  placeholder="Description of pairing" />
              </section>
              </section>
            <button onClick={this.handleSubmit}
              type="submit" > Submit </button> 
            </form>
          </div>
        </div>
    </div>
  );
};

export default PairingForm;