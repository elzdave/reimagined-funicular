import React from "react";
import Button from "@material-tailwind/react/Button";
import Authenticated from "../Layouts/Authenticated";

const Project = (props) => {
  return (
    <Authenticated {...props}>
      {/* All of the main content of the dashboard, must be put within this <Authenticated></Authenticated> component */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Project Index
          </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Replace with your content */}
          <div className="py-4">
            <div className="border-4 border-dashed border-gray-200 bg-white rounded-lg h-96">
              <div className="text-blue-gray-200">
                ini hasil rendering halaman index projects
                <Button
                  color="lightBlue"
                  buttonType="filled"
                  size="regular"
                  rounded={false}
                  block={false}
                  iconOnly={false}
                  ripple="light"
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
          {/* End replace */}
        </div>
      </div>
    </Authenticated>
  );
};

export default Project;
