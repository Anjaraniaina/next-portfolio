import Link from "next/link";

export default function Project() {
    return (
      <div id="project">
        
        <div  id="project_one" className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="/foodgen.png" alt="Logo of foodgen app"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className="pr-10">
      <h1 className="text-5xl font-bold">Meal Generator</h1>
      <h2 className="py-6 text-3xl font-bold">Tired of thinking what to eat today ? Just generate it.</h2>
      <p className="py-6 text-lg font-medium">
        Made in cooperation with the foodgen team.
        An Angular frontend with a Springboot Rest API following best practice from documenting the api,
        choosing architecture, implementing features with MVC Pattern, implementing tests to a
        CI/CD pipeline with Github Actions, Docker and Render.
        You sign up then play with our generator.
        The backend repository is <a href="https://github.com/foodgen/foodgen-api">here</a>.
        The running backend is <a href="https://github.com/foodgen/foodgen-api/ping">here</a>.
        You get a pong response after about 1.5 min  coldstart. Play with the API if the frontend is down.
        You can see the documentation <a href="https://petstore.swagger.io/?url=https://raw.githubusercontent.com/foodgen/foodgen-api/preprod/doc/api.yaml">here</a>.
        If your're feeling that it's slow ? Blame it on Render free tier and its terrible cold start.
      </p>
      <button className="btn btn-primary"><a href="https://foodgen-ui.netlify.app/">Check out</a></button>
    </div>
  </div>
</div>
<div id="project_two" className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="/noran_manager.png" alt="Logo of Noran Manager app"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className="pl-10">
      <h1 className="text-5xl font-bold">Noran Manager</h1>
      <h2 className="py-6 text-3xl font-bold">Make managing human resources look easy !</h2>
      <p className="py-6 text-lg font-medium">
        A spring MVC fullstack app made as an application of: double database connection in spring,
        MVC architecture and Façade Design Pattern, using Thymeleaf views, deploying to GCP Cloud Run.
        Buggy ? it's intended.
      </p>
      <button className="btn btn-primary"><a href="https://noran-manager-ulwds2uxiq-od.a.run.app/login">Check out</a></button>
      <p className="text-lg font-medium py-2">Log in as username: John, password: Doe</p>
    </div>
  </div>
</div>
<div  id="project_trois" className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="/house_guess.jpg" alt="Logo of house and question mark"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className="pr-10">
      <h1 className="text-5xl font-bold">House Price Prediction</h1>
      <h2 className="py-6 text-3xl font-bold">Know the price before someone tell you.</h2>
      <p className="py-6 text-lg font-medium">
        Made with and hosted by Streamlit.
        My intro to ETL and building ML model.
      </p>
      <button className="btn btn-primary"><a href="https://blank-app-7aw5zswzvb.streamlit.app">Check out</a></button>
    </div>
  </div>
</div>
      </div>
    );
  }
  