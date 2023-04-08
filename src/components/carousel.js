import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
        <img
          className="d-block w-100"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/114e0ccb-c7d7-4f53-976a-822fc9dff35e/ID-en-20230306-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="First slide"
        />          
    </Carousel>
  );
}

export default UncontrolledExample;