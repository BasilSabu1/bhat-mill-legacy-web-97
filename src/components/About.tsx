
import { Award, Users, Clock, Shield } from 'lucide-react';

export const About = () => {
  const timelineEvents = [
    { year: '1946', event: 'Founded by Late Shri Krishna Bhat in Kochi' },
    { year: '1965', event: 'Expanded to become Kerala\'s leading fastener supplier' },
    { year: '1985', event: 'Introduced automated inventory management' },
    { year: '2000', event: 'Expanded product range to include valves and tools' },
    { year: '2015', event: 'Launched online catalog and digital ordering' },
    { year: '2024', event: 'Celebrating 78 years of industrial excellence' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every product meets stringent quality standards with certified suppliers.'
    },
    {
      icon: Users,
      title: 'Expert Service',
      description: 'Three generations of expertise in industrial supply solutions.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Reliable delivery schedules to keep your operations running.'
    },
    {
      icon: Shield,
      title: 'Trusted Partner',
      description: '78 years of building lasting relationships with industries.'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-4">
            Our Heritage & Values
          </h2>
          <p className="font-open-sans text-lg text-industrial max-w-2xl mx-auto">
            From a small shop in 1946 to Kerala's most trusted industrial supplier, 
            our journey is built on quality, reliability, and relationships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Heritage Story */}
          <div>
            <h3 className="font-montserrat font-semibold text-2xl text-navy mb-6">
              Three Generations of Excellence
            </h3>
            <div className="space-y-4 font-open-sans text-industrial leading-relaxed">
              <p>
                Krishna Bhat Mill Stores began as a vision of Late Shri Krishna Bhat in 1946, 
                starting with a modest collection of fasteners and hardware supplies in the 
                heart of Kochi's commercial district.
              </p>
              <p>
                Today, under the third generation of family leadership, we've grown to become 
                Kerala's most comprehensive industrial supply house, serving industries from 
                marine and construction to manufacturing and infrastructure.
              </p>
              <p>
                Our commitment remains unchanged: providing quality products, expert guidance, 
                and reliable service that keeps Kerala's industries moving forward.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="font-montserrat font-semibold text-xl text-navy mb-6">Heritage Timeline</h4>
            <div className="space-y-4">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-yellow text-navy font-montserrat font-bold text-sm px-3 py-1 rounded-full flex-shrink-0">
                    {event.year}
                  </div>
                  <p className="font-open-sans text-industrial text-sm leading-relaxed pt-1">
                    {event.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-navy text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow group-hover:text-navy transition-colors duration-300">
                <value.icon className="h-8 w-8" />
              </div>
              <h4 className="font-montserrat font-semibold text-lg text-navy mb-2">
                {value.title}
              </h4>
              <p className="font-open-sans text-industrial text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
