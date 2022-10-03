/** @format */

import { useState } from "react";
import DownloadLinks from "./utils/DownloadLinks";

const Download = () => {
  const [showDownload, setShowDownload] = useState(false);
  return (
    <div className='mx-4 md:mx-8 my-8'>
      <h2
        onClick={() => setShowDownload(true)}
        className='lead my-6 bg-red-700 text-white w-1/2 mx-auto py-6   hover:cursor-pointer hover:scale-110 duration-500 ease-in-out'>
        download now
      </h2>
      {showDownload && <DownloadLinks setShowDownload={setShowDownload} />}
    </div>
  );
};

export default Download;
