"use client"
import React from "react";
import { FaDownload } from "react-icons/fa";

const DownloadBrochure: React.FC = () => {
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>): void => {
    // This approach uses the Fetch API to download the file as a blob
    // and then creates a download link programmatically
    e.preventDefault();
    
    fetch("http://dev.smartceo.co.in/File.pdf")
      .then((response: Response) => response.blob())
      .then((blob: Blob) => {
        // Create a blob URL
        const blobUrl: string = URL.createObjectURL(blob);
        
        // Create a temporary link element
        const downloadLink: HTMLAnchorElement = document.createElement('a');
        downloadLink.href = blobUrl;
        
        // Set the download attribute with filename
        downloadLink.download = "SMART-CEO-Brochure.pdf"; 
        
        // Append to the document, click it, and remove it
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        // Clean up the blob URL
        URL.revokeObjectURL(blobUrl);
      })
      .catch((error: Error) => {
        console.error("Error downloading the file:", error);
        // Fall back to opening in a new tab if there's an error
        window.open("http://dev.smartceo.co.in/File.pdf", "_blank");
      });
  };

  return (
    <section className="py-8 px-6 lg:px-24 flex justify-center">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg p-8 text-center w-full max-w-3xl">
        <h3 className="text-2xl font-bold text-white mb-4">
          Want to Learn More About Our Services?
        </h3>
        <p className="text-white/80 mb-6">
          Download our comprehensive brochure to explore all the ways SMART CEO can help your business grow.
        </p>
        <button 
          onClick={handleDownload}
          className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-full hover:bg-indigo-50 transition-colors shadow-md"
        >
          <FaDownload className="mr-2" />
          Download Brochure
        </button>
      </div>
    </section>
  );
};

export default DownloadBrochure;