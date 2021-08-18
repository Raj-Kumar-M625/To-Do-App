import React from 'react'

export const About = () => {
    let styles = {
        minHeight:"70vh",
        margin:"40px auto"
    }
    return (
        <div style={styles}>
           This is an About MyComponents
           <p> Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
 
               </p> 
        </div>
    )
}
