import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="ml-3">
        <h2 className="font-serif text-2xl">
          <span className="text-white">C</span>ontact Information
          <br />
        </h2>
        <br />
        <table>
          <tbody>
            <tr>
              <td>
                <input type="text" name="txtName" placeholder="Enter your name" required />
              </td>
            </tr><br/>
            <tr>
              <td>
                <input type="email" name="email" placeholder="Enter your email" required />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <label htmlFor="message">Enter your message:</label>
          <br />
          <textarea id="message" name="message" rows="4" cols="50" required></textarea>
          <br />
          <a href="Send.html">
            <button
              className="bta"
              style={{
                width: '80px',
                height: '30px',
                backgroundColor: 'rgb(11, 140, 190)',
                border: 'none',
                fontSize: '15px'
              }}
            >
              Submit
            </button>
          </a>
        </div>
        <br />
      </div>
    </>
  );
};

export default Contact;
