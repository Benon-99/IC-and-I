import { Server, Network, Shield, Code, Users, UserPlus, ClipboardList } from 'lucide-react';

export default function ServicesPage() {
  const services = {
    ict: {
      title: "ICT Solutions",
      description: "Our ICT solutions focus on optimizing business operations and driving process efficiency.",
      items: [
        {
          icon: Server,
          title: "Data Center Infrastructure",
          description: "End-to-end data center infrastructure solutions for your growing technology needs."
        },
        {
          icon: Network,
          title: "Solutions Integration",
          description: "Technology solutions designed to optimize operations and fuel growth."
        },
        {
          icon: Shield,
          title: "Information Security",
          description: "Comprehensive security solutions to protect sensitive information."
        },
        {
          icon: Code,
          title: "Software Development",
          description: "Custom web and mobile applications for digital transformation."
        }
      ]
    },
    business: {
      title: "Business Outsourcing",
      description: "Comprehensive HR and recruitment solutions to streamline your operations.",
      items: [
        {
          icon: UserPlus,
          title: "Jobs.ici – Recruiting",
          description: "Connect with top talents across various industries."
        },
        {
          icon: Users,
          title: "HR & Recruitment",
          description: "End-to-end HR and recruitment solutions."
        },
        {
          icon: ClipboardList,
          title: "HR Payroll & Performance",
          description: "Streamlined payroll and performance management."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary to-secondary text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Comprehensive solutions tailored to drive your business forward
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {Object.entries(services).map(([key, section]) => (
          <div key={key} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
              <p className="text-xl text-gray-600">{section.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.items.map((item) => (
                <div 
                  key={item.title}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                    transition-all duration-300 hover:-translate-y-2"
                >
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}