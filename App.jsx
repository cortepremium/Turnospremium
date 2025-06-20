import React, { useState } from "react";

export default function App() {
  const [adminMode, setAdminMode] = useState(false);
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [siteName, setSiteName] = useState("Corte Premium 💈");
  const [mainColor, setMainColor] = useState("#16a34a");
  const [services, setServices] = useState([
    "Corte de pelo",
    "Perfilado de cejas",
    "Afeitado de barba",
    "Membresía Básica",
    "Membresía Premium"
  ]);

  const handleSubmit = () => {
    const msg = `👋 Hola, soy ${name}.\nQuisiera reservar un turno en *${siteName}*.\n✂️ Servicio: ${service}\n📞 Tel: ${phone}\n📧 Email: ${email}\n📅 Fecha: ${date}`;
    const url = `https://wa.me/549${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: 20 }}>
      <h1 style={{ color: mainColor }}>{siteName}</h1>
      <button onClick={() => setAdminMode(!adminMode)}>
        {adminMode ? "Volver a público" : "🔒 Panel Admin"}
      </button>

      {!adminMode ? (
        <>
          {step === 1 && (
            <div>
              <p>¡Reservá tu turno online en segundos!</p>
              <button style={{ background: mainColor, color: "#fff" }} onClick={() => setStep(2)}>Reservar ahora</button>
            </div>
          )}
          {step === 2 && (
            <div>
              <label>Selecciona tu servicio:</label>
              <select onChange={e => setService(e.target.value)}>
                <option value="">-- Elegir --</option>
                {services.map(s => <option key={s}>{s}</option>)}
              </select>
              <button style={{ background: mainColor, color: "#fff" }} onClick={() => setStep(3)}>Siguiente</button>
            </div>
          )}
          {step === 3 && (
            <div>
              <input placeholder="Tu nombre" value={name} onChange={e => setName(e.target.value)} /><br />
              <input placeholder="Teléfono" value={phone} onChange={e => setPhone(e.target.value)} /><br />
              <input placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} /><br />
              <input placeholder="Fecha del turno" value={date} onChange={e => setDate(e.target.value)} /><br />
              <button style={{ background: mainColor, color: "#fff" }} onClick={handleSubmit}>Confirmar por WhatsApp</button>
            </div>
          )}
        </>
      ) : (
        <div>
          <h2>Panel interno Corte Premium 🛠️</h2>
          <label>Nombre del sitio:</label><br />
          <input value={siteName} onChange={e => setSiteName(e.target.value)} /><br />
          <label>Color principal:</label><br />
          <input type="color" value={mainColor} onChange={e => setMainColor(e.target.value)} /><br />
          <label>Servicios (separados por coma):</label><br />
          <textarea value={services.join(",")} onChange={e => setServices(e.target.value.split(","))} />
        </div>
      )}
    </div>
  );
}