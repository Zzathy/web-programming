// import Home from "../Pages/Home";

const Hero = (props) => {
  return (
    <div class={props.page}>
      <div class="row">
        <div class="col-md-7 d-flex justify-content-center">
          <div class="text-white">
            <h1>{props.title}</h1>
            <h4>{props.description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
