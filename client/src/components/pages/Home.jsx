import React from "react";

function Home(props) {
  const {isAuthenticated} = props.auth;
  return (
    <React.Fragment>
      <div className="sidenav-spacing">
        <h1>Home Page</h1>
        {
          !isAuthenticated() && (
            <h2>
              Ayyyyy, you aren't logged in
            </h2>
          )
        }
        {
          isAuthenticated() && (
            <h2>
              Yay!!!!! you are logged in
            </h2>
          )
        }
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
          varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
          Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
          imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
          ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
          elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
          consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
      </p>
      </div>
      </React.Fragment>
  );
}

export default Home;