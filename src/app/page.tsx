"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TextAbout from '@/components/sections/about/TextAbout';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Bed, Calendar, MessageCircle, Sparkles, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" }
          ]}
          brandName="Luxe Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Exceptional Hospitality Awaits"
          description="Experience luxury accommodations with world-class service and amenities in the heart of the city"
          tag="5-Star Luxury"
          tagIcon={Star}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "View Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxurious hotel lobby with modern design"
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="Premium Amenities"
          description="Indulge in our carefully curated selection of luxury amenities designed for your comfort and relaxation"
          tag="Facilities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Executive Suites",
              description: "Spacious suites with panoramic city views, premium furnishings, and dedicated concierge service",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel suite with city view"
            },
            {
              title: "Infinity Pool & Spa",
              description: "Rooftop infinity pool with stunning views and full-service spa for ultimate relaxation",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel infinity pool and spa area"
            },
            {
              title: "Fine Dining Restaurant",
              description: "Award-winning restaurant featuring international cuisine crafted by renowned chefs",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant hotel restaurant interior"
            },
            {
              title: "Wellness Center",
              description: "State-of-the-art fitness center and wellness facilities available 24/7 for guests",
              imageSrc: "https://images.pexels.com/photos/3757640/pexels-photo-3757640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern hotel wellness center"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our selection of elegantly appointed rooms and suites, each designed for comfort and sophistication"
          tag="Room Selection"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              brand: "Luxe Hotel",
              name: "Deluxe King Room",
              price: "$289/night",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe king room with modern amenities"
            },
            {
              id: "presidential",
              brand: "Luxe Hotel",
              name: "Presidential Suite",
              price: "$899/night",
              rating: 5,
              reviewCount: "847",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential suite with luxury furnishings"
            },
            {
              id: "standard",
              brand: "Luxe Hotel",
              name: "Standard Queen Room",
              price: "$189/night",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Comfortable standard queen room"
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Discover why travelers from around the world choose our hotel for their luxury accommodations"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Executive",
              company: "Fortune 500 Company",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Blogger",
              company: "Luxury Travel Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Event Planner",
              company: "Elite Events Co",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8425032/pexels-photo-8425032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Corporate Director",
              company: "Tech Innovations Ltd",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            },
            {
              id: "5",
              name: "Jessica Taylor",
              role: "Luxury Consultant",
              company: "Premium Services Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Jessica Taylor"
            }
          ]}
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofOne
          title="Trusted Partners"
          description="Proud member of prestigious hotel networks and booking platforms worldwide"
          tag="Partnerships"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1656225/pexels-photo-1656225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6466488/pexels-photo-6466488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We create extraordinary hospitality experiences that exceed expectations, combining timeless elegance with modern luxury to ensure every guest feels truly special"
          buttons={[
            { text: "Our Story", href: "#story" },
            { text: "Contact Us", href: "contact" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Book Your Perfect Stay"
          description="Ready to experience luxury hospitality? Contact us to make your reservation or inquire about our exclusive packages and amenities"
          tagIcon={Calendar}
          inputPlaceholder="Enter your email"
          buttonText="Reserve Now"
          termsText="By submitting, you agree to receive booking confirmations and special offers from Luxe Hotel."
          imageSrc="https://images.pexels.com/photos/7821340/pexels-photo-7821340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel reception desk"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Luxe Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "#dining" },
                { label: "Events", href: "#events" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "#careers" },
                { label: "Press", href: "#press" }
              ]
            },
            {
              items: [
                { label: "Guest Reviews", href: "reviews" },
                { label: "Special Offers", href: "#offers" },
                { label: "Loyalty Program", href: "#loyalty" },
                { label: "Gift Cards", href: "#gifts" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}