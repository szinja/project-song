**Project Song**

**Getting Started**
1. Clone the Repository
[GitHub Project Song](https://github.com/szinja/project-song)
2. Install dependencies
`npm install`
3. Build project 
`npm run build`
4. View on localhost provided by BUILD such as `http://localhost:5173/`, 
Alternatively view static website hosted on AWS S3
[Project Song Page](http://projectsong.s3-website.us-east-2.amazonaws.com)

**Technologies Used**
 - The front-end of this project is implemented as a single-page application (SPA) using React.
 - The layout is designed to be responsive, on mobile the page displays a side menu for a dropdown of the navigation items and allows users to exit when complete.
 - The images for the case studies are responsive and are served directly from an asset folder. 
 - Brand data is retrieved via an API provided by the backend portion of this project. The brand images are saved in Cloudinary allowing a public image link to store in a MongoDB database.
 The images are saved as an image name and public link tuple.
 - Cloudinary provides a reliable, scalable, and feature-rich solution for managing image storage and delivery infrastructure.
 - The API is through AWS, we are able to use PostMan to filter information about the brands.
 To sort the brands in alphabetical order `https://jw3x21gv9l.execute-api.us-east-2.amazonaws.com/v1/brands?`
 And to search for a specific brand like Distell `https://jw3x21gv9l.execute-api.us-east-2.amazonaws.com/v1/brands?sortDirection=asc&filterContaining=distell`
 - Added a simple responsive React form as an additional component.

 - Front-end: React, React Router, Axios, CSS/SASS
 - Back-end: Node.js, Express.js, MongoDB, Cloudinary

 Contact me with changes.

 Thanks.





