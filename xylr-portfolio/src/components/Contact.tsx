const Contact = () => {
  return (
    <section className="contact" id="contact">
      <br />
      <br />
      <h2 className="section-title">Get In Touch</h2>
      <br />
      <div className="contact-grid">
        <form className="contact_form" id="contactForm" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="18b30564-8475-4d84-aea8-4beba8411a7c" />
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows={5} placeholder="Project Details" required></textarea>
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          <button type="submit" className="cta-button">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Let's Build Something Amazing</h3>
          <p><i className="fas fa-map-marker-alt"></i> Johannesburg, GP</p>
          <p><i className="fas fa-phone"></i> (+27) 744 610 850</p>
          <p><i className="fas fa-envelope"></i> amoswetu22@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;