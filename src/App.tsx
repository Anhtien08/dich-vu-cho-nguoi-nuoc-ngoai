/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CoreServicesSection } from './components/CoreServicesSection';
import { FastTrackDetailSection } from './components/FastTrackDetailSection';
import { ProcessTimelineSection } from './components/ProcessTimelineSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TargetClientsSection } from './components/TargetClientsSection';
import { FaqSection } from './components/FaqSection';
import { ConsultationFormSection } from './components/ConsultationFormSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { EditAddressModal } from './components/EditAddressModal';
import { FooterSection } from './components/FooterSection';
import { BottomNav } from './components/BottomNav';
import { ServiceType, OfficeLocation } from './types';
import { DEFAULT_OFFICES } from './data/visaData';

const STORAGE_KEY = 'visa5s_offices_v4';

export default function App() {
  const [activeModalService, setActiveModalService] = useState<string | null>(null);
  const [selectedFormService, setSelectedFormService] = useState<ServiceType>('fast-track-arrival');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isEditAddressOpen, setIsEditAddressOpen] = useState(false);

  // Office locations state with localStorage persistence
  const [offices, setOffices] = useState<OfficeLocation[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return DEFAULT_OFFICES;
  });

  const handleSaveOffices = (newOffices: OfficeLocation[]) => {
    setOffices(newOffices);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newOffices));
    } catch {
      // Handle storage error if full/disabled
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formEl = document.getElementById('consultation-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceAndForm = (service: ServiceType) => {
    setSelectedFormService(service);
    scrollToForm();
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] flex flex-col font-body selection:bg-[#ceddff] selection:text-[#0048af]">
      {/* 1. Header */}
      <Header
        offices={offices}
        onOpenConsultation={scrollToForm}
        onOpenEditAddress={() => setIsEditAddressOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1 w-full pt-16 pb-12">
        {/* 2. Hero Section */}
        <HeroSection onScrollToForm={scrollToForm} />

        {/* 3. Core Services Cards (Fast Track, TRC, Work Permit) */}
        <CoreServicesSection
          onOpenServiceModal={(service) => setActiveModalService(service)}
          onSelectServiceAndForm={handleSelectServiceAndForm}
        />

        {/* 4. Detailed Fast Track Section */}
        <FastTrackDetailSection />

        {/* 5. 5-Step Process Timeline */}
        <ProcessTimelineSection />

        {/* 6. Why Choose Visa5S (4 Value Pillars) */}
        <WhyChooseUsSection />

        {/* 7. Target Clients (4 Segments) */}
        <TargetClientsSection />

        {/* 8. FAQ Accordion */}
        <FaqSection />

        {/* 9. Consultation Form */}
        <ConsultationFormSection preselectedService={selectedFormService} />
      </main>

      {/* 10. Footer Section */}
      <FooterSection
        offices={offices}
        onScrollToForm={scrollToForm}
        onOpenServiceModal={(service) => setActiveModalService(service)}
        onOpenEditAddress={() => setIsEditAddressOpen(true)}
      />

      {/* 11. Sticky Bottom Navigation Bar */}
      <BottomNav onScrollToForm={scrollToForm} />

      {/* 12. Service Detail Modal */}
      <ServiceDetailModal
        serviceId={activeModalService}
        onClose={() => setActiveModalService(null)}
        onSelectServiceAndForm={handleSelectServiceAndForm}
      />

      {/* 13. Edit Address Modal */}
      <EditAddressModal
        isOpen={isEditAddressOpen}
        onClose={() => setIsEditAddressOpen(false)}
        offices={offices}
        onSaveOffices={handleSaveOffices}
      />

      {/* 14. Back to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Lên đầu trang"
          className="fixed bottom-24 right-4 z-40 w-11 h-11 bg-white hover:bg-[#ceddff] text-[#0048af] border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all active:scale-95 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">arrow_upward</span>
        </button>
      )}
    </div>
  );
}
