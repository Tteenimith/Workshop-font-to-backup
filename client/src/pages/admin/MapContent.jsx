import React, { useEffect, useState } from "react";
import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup,
    useMapEvent,
    LayersControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { removeMap } from "../../api/member";




const MapContent = () => {
    const [position,setPosition] = useState(null)
    const [getmap,setGetMap] = useState([])

    const [form,setForm] = useState({
        title:"",
        lat:"",
        lng:"",
    })

    useEffect(()=>{
        getDataLandmark()
    },[])

    const getDataLandmark = async()=>{
        try {
            const landmark = await axios.get("http://localhost:5000/api/landmark")
            setGetMap(landmark.data);
            
        } catch (err) {
            console.log(err);
            
        }
    }


    const hdlChange = (e)=>{
        setForm({...form,
            [e.target.name] : e.target.value
        })
    }

  const LocationMarker = () => {
    const map = useMapEvent({
      click: (e) => {
        setPosition(e.latlng);
        map.flyTo(e.latlng);
        setForm({...form,
            lat:e.latlng.lat,
            lng:e.latlng.lng
        })
      },
    });
    return position === null 
    ? null 
    : <Marker position={position}></Marker>
  };
    const hdlSubmit = async(e)=>{
        e.preventDefault()
        console.log(form);
        try {
            const reps = await axios.post('http://localhost:5000/api/landmark',form)
            console.log("submit",reps);
            getDataLandmark()
            
        } catch (err) {
            console.error(err);
            
        }
        
    }

    const hdlRemove = async(id) =>{
        try {
            const resp = await removeMap(id)
            console.log(resp);
            
            // toast.error("Delete Complete")
            getDataLandmark()
        } catch (err) {
            console.log(err);
            
        }
    }
    
  return (
    <div className="flex flex-col gap-4 bg-white rounded-sm border border-gray-200 p-4 shadow-md">
        <form onSubmit={hdlSubmit}>

        <div>
            <p>Title:<input onChange={hdlChange} type="title" className="border" name="title"/></p>
            <p>Latitude:{position?.lat.toFixed(2)}</p>
            <p>Longitude:{position?.lng.toFixed(2)}</p>
            <button  type="submit" 
  className="bg-blue-500 hover:bg-green-600 text-white font-bold  px-2 rounded focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75">Submit</button>
        </div>
        </form>
      <MapContainer
        style={{ height: "100vh" }}
        center={[13.72917, 100.52389]}
        zoom={6}
        >
        <LayersControl>
            <LayersControl.BaseLayer name="Map1" checked>

        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Map2" >

        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
        />
            </LayersControl.BaseLayer>
        </LayersControl>

        <LocationMarker />

        {getmap.map((item,idx)=>(

        
             <Marker key={idx} position={[item.lat,item.lng]}>
            <Popup >
            {item.title }
            <button onClick={()=>hdlRemove(item.id)} className="bg-red-500 hover:bg-red-600 text-white flex flex-col text-xs   px-2 rounded focus:outline-none">del</button>
            </Popup>
            </Marker>

))}
        </MapContainer>
        
        
        {/* <Marker position={[13.72917, 100.52389]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer> */}
        ;
    </div>
  );
};

export default MapContent;
