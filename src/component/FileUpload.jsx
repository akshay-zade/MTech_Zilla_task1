import React, { useEffect, useState } from "react";

function FileUpload() {
    
    const [file,setFile]=useState()


  return (
    <div>
     
       <div class="pb-2">
       <input class="form-control" type="file" id="formFile" name="file"/>

       </div>
      
    </div>
  );
}

export default FileUpload;
