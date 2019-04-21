import React from "react";

const ArtCard = props => {
  <React.Fragment>
    {props.articles && (
      <div className="col s12 m7">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Recent D&D articles</span>
            <table>
              <thead>
                <tr>
                  <th>Headline</th>
                  <th>Summary</th>
                  <th>Save</th>
                </tr>
              </thead>
              <tbody>
                {props.articles.map(element => (
                  <tr>
                    <td>
                      <a href={element.link} target="_blank">
                        {element.headline}
                      </a>
                    </td>
                    <td>{element.summary}</td>
                    <td>
                      <button>Save</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )}
  </React.Fragment>;
};

export default ArtCard;
