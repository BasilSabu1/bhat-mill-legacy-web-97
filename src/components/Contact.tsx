
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: [
        'Krishna Bhat Mill Stores',
        'M.G. Road, Fort Kochi',
        'Kochi - 682001, Kerala, India'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main: +91 484 2345678',
        'Sales: +91 484 2345679', 
        'Emergency: +91 9876543210'
      ]
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [
        'info@krishnabhatmillstores.com',
        'sales@krishnabhatmillstores.com',
        'support@krishnabhatmillstores.com'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Saturday: 8:00 AM - 8:00 PM',
        'Sunday: 10:00 AM - 6:00 PM',
        'Emergency Service: 24/7'
      ]
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-4">
            Contact Us
          </h2>
          <p className="font-open-sans text-lg text-industrial max-w-2xl mx-auto">
            Get in touch with our team for product inquiries, technical support, 
            or emergency supply requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-montserrat font-semibold text-2xl text-navy mb-8">
              Get in Touch
            </h3>
            
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-navy text-white p-3 rounded-full flex-shrink-0">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-semibold text-lg text-navy mb-2">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="font-open-sans text-industrial text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Actions */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-montserrat font-semibold text-lg text-navy mb-4">
                Quick Actions
              </h4>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp: +91 9876543210
                </Button>
                <Button variant="outline" className="w-full justify-start border-navy text-navy hover:bg-navy hover:text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: +91 484 2345678
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-semibold text-2xl text-navy mb-6">
                  Send us a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-open-sans text-sm font-medium text-industrial block mb-2">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="Enter your full name"
                        className="border-gray-300 focus:border-navy"
                      />
                    </div>
                    <div>
                      <label className="font-open-sans text-sm font-medium text-industrial block mb-2">
                        Company Name
                      </label>
                      <Input 
                        placeholder="Enter company name"
                        className="border-gray-300 focus:border-navy"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-open-sans text-sm font-medium text-industrial block mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email"
                        placeholder="Enter your email"
                        className="border-gray-300 focus:border-navy"
                      />
                    </div>
                    <div>
                      <label className="font-open-sans text-sm font-medium text-industrial block mb-2">
                        Phone Number *
                      </label>
                      <Input 
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-gray-300 focus:border-navy"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-open-sans text-sm font-medium text-industrial block mb-2">
                      Subject *
                    </label>
                    <Input 
                      placeholder="What can we help you with?"
                      className="border-gray-300 focus:border-navy"
                    />
                  </div>

                  <div>
                    <label className="font-open-sans text-sm font-medium text-industrial block mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Please describe your requirements in detail..."
                      rows={6}
                      className="border-gray-300 focus:border-navy resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-yellow hover:bg-yellow/90 text-navy font-montserrat font-semibold text-lg py-3 h-auto"
                  >
                    Send Message
                  </Button>
                </form>

                <p className="font-open-sans text-xs text-industrial text-center mt-4">
                  * Required fields. We'll respond within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="font-montserrat font-semibold text-2xl text-navy mb-6 text-center">
            Find Us on Map
          </h3>
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-navy mx-auto mb-4" />
              <h4 className="font-montserrat font-semibold text-navy text-lg mb-2">
                Krishna Bhat Mill Stores
              </h4>
              <p className="font-open-sans text-industrial">
                M.G. Road, Fort Kochi, Kerala 682001
              </p>
              <Button variant="outline" className="mt-4 border-navy text-navy hover:bg-navy hover:text-white">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
