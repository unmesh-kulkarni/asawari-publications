"use client";
import { Button } from "@/components/ui";
import InfoCard from "@/components/ui/InfoCard";
// import Button from "@/components/ui/button";

export default function ContactUs() {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center text-gray-600 mb-10">
        We would love to hear from you! Reach out to us using any of the methods
        below.
      </p>

      {/* Reusable Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <InfoCard icon="📍" title="Visit Us">
          Stadium complex, opp Dindayal Bank
          <br />
          Beed
          <br />
          Maharashtra
          <br />
        </InfoCard>

        <InfoCard icon="📞" title="Call Us">
          +91 9422633300
          <div className="mt-3">
            <a
              href="https://wa.me/919422633300?text=Hello,%20I%20would%20like%20to%20request%20a%20book.%20Can%20you%20help%20me?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>WhatsApp Us</Button>
            </a>
          </div>
        </InfoCard>

        <InfoCard icon="✉️" title="Email Us">
          atulniy.kulkarni@gmail.com
          <div className="mt-3">
            <a href="mailto:atulniy.kulkarni@gmail.com?subject=Book Request&body=Hello,%0A%0AI would like to request the following book:%0A- Book Title:%0A- Author:%0A%0AThank you!">
              <Button>Send Email</Button>
            </a>
          </div>
        </InfoCard>
      </div>

      {/* Google Maps Embed */}
      <div className="mb-16 relative w-full h-96 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d649.7870289268764!2d75.75680631472063!3d18.996597101179344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc52bf131266631%3A0xaa1f31eba33fb398!2sAsawari%20Publication!5e0!3m2!1sen!2sin!4v1754338233313!5m2!1sen!2sin"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
