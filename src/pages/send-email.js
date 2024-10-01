import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, cognome, email, telefono, oggetto, messaggio } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Puoi usare il servizio email che preferisci
      auth: {
        user: process.env.EMAIL_USER, // Email del mittente
        pass: process.env.EMAIL_PASS, // Password o App-specific password
      },
    });

    const mailOptions = {
      from: email, // Email dell'utente che ha compilato il form
      to: process.env.EMAIL_USER, // La tua email dove riceverai il messaggio
      subject: oggetto,
      text: `Nome: ${nome}\nCognome: ${cognome}\nTelefono: ${telefono}\nEmail: ${email}\n\nMessaggio:\n${messaggio}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email inviata con successo' });
    } catch (error) {
      console.error('Errore nell\'invio dell\'email:', error);
      res.status(500).json({ error: 'Errore nell\'invio dell\'email' });
    }
  } else {
    res.status(405).json({ error: 'Metodo non consentito' });
  }
}
