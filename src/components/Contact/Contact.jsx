import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "770236aa-68de-4850-8b2c-3181e2a54669");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sended Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact' id='contact'>
      
    <div className='contact-col'>
      <div className="right">
    <h3>Send us a message <img src={msg_icon} alt="" /></h3>
    <p>N'hésitez pas à nous contacter via le formulaire de 
    contact ou à consulter nos coordonnées ci-dessous. Vos 
    commentaires, questions etsuggestions sont importants 
    pour nous, car nous nous efforçons de fournir un service 
    exceptionnel à notre communauté universitaire.</p>
    <ul>
    <li><img src={mail_icon} alt="" /> insfp.of@gmail.com</li>    
    <li><img src={phone_icon} alt="" /> 023296132</li>    
    <li><img src={location_icon} alt="" /> PXJ2+CWG</li>    

    </ul>
    </div>
    </div>
    <div className="contact-col">
  
    <form onSubmit={onSubmit}>
        <label>Ton Nom</label>
        <input type='text' name='name' placeholder='Entrer Ton Nom' required/>
        <label>Numero De Telephone</label>
        <input type='tel' name='phone' placeholder='Entrer Ton Numero' required/>
        <label>Entrer Ton Message Ici</label>
        <textarea name='message' rows="6" placeholder='Entrer Ton Message'
         required/> 
         <button type='submit' className='btn dark-btn'>{result ? result : "Send"}<img src={white_arrow}
          alt="" /></button>
    </form>
    
    
    </div>
    </div>
  )
}

export default Contact