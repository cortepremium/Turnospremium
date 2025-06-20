
import React, { useState } from "react";
import logo from "./logo-corte-premium.png";
import portada from "./portada-barberia.jpg";
export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [paso, setPaso] = useState(1);
  const [servicio, setServicio] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [colorBoton, setColorBoton] = useState("#16a34a");
  const [nombreSitio, setNombreSitio] = useState("Corte Premium 💈");
  const [servicios, setServicios] = useState([
    "Corte de pelo",
    "Perfilado de cejas",
    "Afeitado de barba",
    "Membresía Básica",
    "Membresía Premium"
  ]);

  const handleSubmit = () => {
    const msg = `👋 Hola, soy ${nombre}.\nSolicito un turno en *${nombreSitio}* para el ${fecha}.\n📍 Servicio: ${servicio}\n📞 Tel: ${telefono}\n📧 Email: ${email}`;
    const url = `https://wa.me/549${telefono.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return <div>Tu interfaz Fresha personalizada acá</div>;
}
