import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl relative h-[600px] flex flex-col items-center justify-center">

        <div className="text-center mb-7">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>
        </div>


        <div className="space-y-8 text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Contact Information
          </h3>

          <div className="space-y-6">
            
            <div className="flex justify-center items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:hello@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  chamothlakshitha471@gmail.com
                </a>
              </div>
            </div>


            <div className="flex justify-center items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+94769750229"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +94 76 975 0229
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <span className="text-muted-foreground hover:text-primary transition-colors">
                  Galle, Sri Lanka
                </span>
              </div>
            </div>
          </div>
        </div>


        <div className="absolute bottom-1 right-1 text-right">
          <div className="flex space-x-4 justify-end">
            <a
              href="https://github.com/Doublezero-00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/chamoth-lakshitha-16526a218/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <Linkedin />
            </a>
            <a
              href="https://x.com/chamothlak78221?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
