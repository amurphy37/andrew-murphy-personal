import sgMail from '@sendgrid/mail';
let api_key = process.env.SENDGRID_KEY


export const sendEmail = async (body) => {
  console.log(api_key)
  sgMail.setApiKey(api_key);

  console.log(body)

  const msg = {
    to: "amurphy37@gmail.com",
    from: 'murphyba@uci.edu',
    subject: `New message from ${body.name} at ${company}`,
    message: `Phone: ${body.phone}, Email: ${body.email}:
              Message: ${body.message}`,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error);
  }
};