'use client'
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Fale Conosco</h1>
            <p>Razão Social: Wilson Roberto Pereira 10100263801</p>
            <p>CNPJ: 20.377.924/0001-19</p>
            <p>Telefone: (11) 4116-5854</p>
            <p>Whatsapp: (11) 97688-2939</p>
            <p>Skype: wwilson.roberto</p>
            <p>Endereço: Rua Aurora, 264 - BOX 10, Santa Ifigênia, São Paulo, SP - 01209-001</p>
            <p>Email: wilson@nobreak.co</p>
            <iframe
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0276252316013!2d-46.64113108458105!3d-23.54340168468003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58632d56d0c9%3A0x9a496c164d36acac!2sRua%20Aurora%2C%20264%20-%20Santa%20Ifig%C3%AAnia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001209-001%2C%20Brazil!5e0!3m2!1sen!2sus!4v1642978119927!5m2!1sen!2sus"
            ></iframe>
        </div>
    );
};

export default ContactPage;
