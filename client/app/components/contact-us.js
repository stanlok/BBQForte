import React from 'react';


export default class ContactUs extends React.Component {
  render() {
    return (
      <div className="col-md-12 ">
        <div className="row">
          <div className="col-md-12 about">
            <h1>Contact Us</h1>
            <div className="row">
              <div className = "col-md-10 col-md-offset-1">
                <img src="img/forte.png" alt="BBQ Forte Logo" />
              </div>
            </div>
            <div className="row">
              <div className = "col-md-offset-2 col-md-8">
                <h4>BBQ Forte is collaboratively created by 6 UMass Amherst Undergraduate Students</h4>
                <div className="table-responsive ">
                  <table className="table ">
                    <thead>
                      <tr>
                        <th>Students</th>
                        <th>Email Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Brendan Kelly</td>
                        <td>bpkelly@umass.edu</td>
                      </tr>
                      <tr>
                        <td>Jess Hendricks</td>
                        <td>jahendricks@umass.edu</td>
                      </tr>
                      <tr>
                        <td>Ka Wo Fong</td>
                        <td>kwfong@umass.edu</td>
                      </tr>
                      <tr>
                        <td>Logan Rennick</td>
                        <td>lrennick@umass.edu</td>
                      </tr>
                      <tr>
                        <td>Matthew Zenzie</td>
                        <td>mzenzie@umass.edu</td>
                      </tr>
                      <tr>
                        <td>Stanley Lok</td>
                        <td>slok@umass.edu</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>

    )
  }
}
