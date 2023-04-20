import React, { useEffect } from "react";

function CloudinaryUploadWidget({ value, setUrl, url }) {
  useEffect(() => {
    const cloudName = "dkwzswln4"; // replace with your own cloud name
    const uploadPreset = "l4njvysj"; // replace with your own upload
    // Remove the comments from the code below to add
    // additional functionality.
    // Note that these are only a few examples, to see
    // the full list of possible parameters that you
    // can add see:
    // https://cloudinary.com/documentation/upload_widget_reference

    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,

        preprocess: true,
        startOpen: false,
        // cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        multiple: false, //restrict upload to a single file
        folder: "pdf", //upload files to the specified folder
        tags: ["pdf", "books"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        clientAllowedFormats: ["raw"], //restrict uploading to image files only
        maxImageFileSize: 9000000, //restrict file size to less than 2MB
        resource_type: "raw",
        singleUploadAutoClose: false,
        showCompletedButton: true,
        autoUpload: false,

        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        theme: "green", //change to a purple theme
      },

      (error, result) => {
        if (!error && result && result.event === "success") {
          const urlRes = result.info.url;
          if (value === 1) {
            console.log(urlRes);
            setUrl(urlRes);
          } else {
            console.log(urlRes);
            setUrl(urlRes);
          }
          console.log("Done! Here is the image info: ", result.info);
          //   document
          //     .getElementById("uploadedimage")
          //     .setAttribute("src", result.info.secure_url);
        } else {
          // console.log("hello");
        }
      }
    );

    document.getElementById(value).addEventListener("click", function () {
      myWidget.open();
    });
  });
  return (
    <button id={value} className="cloudinary-button bg-red-400 h-fit">
      Upload
    </button>
  );
}
export default CloudinaryUploadWidget;
