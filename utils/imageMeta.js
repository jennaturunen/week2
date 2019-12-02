'use strict';
const ExifImage = require('exif').ExifImage;

const getCoordinates = (imgFile) => { // imgFile = full path to uploaded image
  return new Promise((resolve, reject) => {
    try {
      // TODO: Use node-exif to get longitude and latitude from imgFile
      // coordinates below should be an array [longitude, latitude]
      new ExifImage({ image : imgFile }, (error, exifData) => {
        if (error) {
          console.log('Error: ' + error.message);
        }
        else {
          console.log('GPS', exifData.gps);
          const coordinates = [];
          if (Object.keys(exifData.gps).length > 0) {
            coordinates[0] = gpsToDecimal(exifData.gps.GPSLongitude, exifData.gps.GPSLongitudeRef); //Longitude
            coordinates[1] = gpsToDecimal(exifData.gps.GPSLatitude, exifData.gps.GPSLatitudeRef); //Latitude
          }
          else {
           coordinates[0] = 0;
           coordinates[1] = 0;
          }
          resolve(coordinates);
          // console.log(exifData); // Do something with your data!
        }
      });
    }
    catch (error) {
      reject(error);
    }
  });
};

// convert GPS coordinates to decimal format
// for longitude, send exifData.gps.GPSLongitude, exifData.gps.GPSLongitudeRef
// for latitude, send exifData.gps.GPSLatitude, exifData.gps.GPSLatitudeRef
const gpsToDecimal = (gpsData, hem) => {
  let d = parseFloat(gpsData[0]) + parseFloat(gpsData[1] / 60) +
      parseFloat(gpsData[2] / 3600);
  return (hem === 'S' || hem === 'W') ? d *= -1 : d;
};

module.exports = {
  getCoordinates,
};