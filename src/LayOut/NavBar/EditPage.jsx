import { Marker } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet";

const EditPage = () => {
   return (
      <div className=" mx-auto h-screen">
         <Helmet>
            <title>Valley of Serenity Map</title>
         </Helmet>
         <MapContainer className="h-screen " center={[23.720881, 90.483269]} zoom={11} scrollWheelZoom={false}>
            <TileLayer style={{ height: "440px" }} attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[23.720881, 90.483269]}></Marker>
         </MapContainer>
      </div>
   );
};

export default EditPage;
