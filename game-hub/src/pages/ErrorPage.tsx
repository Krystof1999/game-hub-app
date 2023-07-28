import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <div className="p-5 text-white">
        <NavBar />
        <h1 className="font-bold text-4xl">Oops...</h1>
        <p>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "Unexpected error"}
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
