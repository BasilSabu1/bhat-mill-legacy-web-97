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
        'Cloth Bazar Rd ',
        'Kochi, Kerala 682031',
      ],
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'S.Suresh Bhat: +91 98471 80012',
        'S.Sanjeev Bhat: +91 98472 75588',
        'Office: +91 99612 20146, 0484 2368338, 0484 2380276',
      ],
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['krishnabhattools@yahoo.in', 'tcekm@yahoo.in'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Saturday: 9:00 AM - 6:00 PM, Lunch Break: 1:30 PM - 2:30 PM',
        'Sunday: Holiday',
      ],
    },
  ];

  return (
    <section id="contact" className="py-8 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl text-navy mb-4">
            Contact Us
          </h2>
          <p className="font-open-sans text-base md:text-lg text-industrial max-w-2xl mx-auto">
            Get in touch with our team for product inquiries, technical support,
            or emergency supply requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-montserrat font-semibold text-xl md:text-2xl text-navy mb-6 md:mb-8">
              Get in Touch
            </h3>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="border-0 shadow-lg w-full">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="bg-navy text-white p-2 md:p-3 rounded-full flex-shrink-0">
                        <IconComponent className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-semibold text-base md:text-lg text-navy mb-2">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              className="font-open-sans text-industrial text-xs md:text-sm"
                            >
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
            <div className="bg-gray-50 rounded-lg p-4 md:p-6">
              <h4 className="font-montserrat font-semibold text-base md:text-lg text-navy mb-4">
                Quick Actions
              </h4>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-green-600 hover:bg-green-700 text-white text-sm md:text-base">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp: +91 99612 20146
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-navy text-navy hover:bg-navy hover:text-white text-sm md:text-base"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: +91 99612 20146
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg w-full">
              <CardContent className="p-6 md:p-8">
                <h3 className="font-montserrat font-semibold text-xl md:text-2xl text-navy mb-4 md:mb-6">
                  Send us a Message
                </h3>

                <form className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-open-sans text-xs md:text-sm font-medium text-industrial block mb-2">
                        Full Name *
                      </label>
                      <Input
                        placeholder="Enter your full name"
                        className="border-gray-300 focus:border-navy"
                      />
                    </div>
                    <div>
                      <label className="font-open-sans text-xs md:text-sm font-medium text-industrial block mb-2">
                        Company Name
                      </label>
                      <Input
                        placeholder="Enter company name"
                        className="border-gray-300 focus:border-navy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-open-sans text-xs md:text-sm font-medium text-industrial block mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="border-gray-300 focus:border-navy"
                      />
                    </div>
                    <div>
                      <label className="font-open-sans text-xs md:text-sm font-medium text-industrial block mb-2">
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
                    <label className="font-open-sans text-xs md:text-sm font-medium text-industrial block mb-2">
                      Subject *
                    </label>
                    <Input
                      placeholder="What can we help you with?"
                      className="border-gray-300 focus:border-navy"
                    />
                  </div>

                  <div>
                    <label className="font-open-sans text-xs md:text-sm font-medium text-industrial block mb-2">
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
                    className="w-full bg-yellow hover:bg-yellow/90 text-navy font-montserrat font-semibold text-base md:text-lg py-3 h-auto"
                  >
                    Send Message
                  </Button>
                </form>

                <p className="font-open-sans text-xs text-industrial text-center mt-4">
                  * Required fields. We'll respond within 24 hours during
                  business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 md:mt-12 lg:mt-16">
          <h3 className="font-montserrat font-semibold text-xl md:text-2xl text-navy mb-6 text-center">
            Find Us on Map
          </h3>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.453908885453!2d76.27519597479329!3d9.979312890125051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d005a3f3941%3A0xc96650c9bfc5878a!2sKrishna%20Bhat%20Mill%20Stores!5e0!3m2!1sen!2sin!4v1753439367219!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Krishna Bhat Mill Stores Location"
              className="rounded-lg sm:h-[450px]"
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/place/Krishna+Bhat+Mill+Stores/@9.9793129,76.2751960,17z/data=!3m1!4b1!4m6!3m5!1s0x3b080d005a3f3941:0xc96650c9bfc5878a!8m2!3d9.9793129!4d76.2777709!16s%2Fg%2F11dy8bs7ql?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white text-sm md:text-base"
              >
                Open in Google Maps
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
