"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import {
  Settings,
  Recycle,
  Leaf,
  Zap,
  Shield,
  Factory,
  CheckCircle,
  ArrowRight,
  Cpu,
  Beaker,
} from "lucide-react";

const technologies = [
  {
    icon: Factory,
    title: "Advanced Extrusion Technology",
    description:
      "State-of-the-art blown film extrusion lines with precise temperature control and thickness uniformity.",
    features: [
      "Multi-layer co-extrusion capability",
      "Automated thickness control",
      "Real-time quality monitoring",
      "Energy-efficient heating systems",
    ],
    image: "/cover-film.jpg",
  },
  {
    icon: Cpu,
    title: "Digital Quality Control",
    description:
      "AI-powered inspection systems ensuring consistent quality and defect detection in real-time.",
    features: [
      "Computer vision inspection",
      "Automated defect detection",
      "Statistical process control",
      "Traceability systems",
    ],
    image: "/chemical-clean.jpg",
  },
  {
    icon: Beaker,
    title: "Material Innovation Lab",
    description:
      "In-house R&D laboratory developing next-generation sustainable plastic formulations.",
    features: [
      "Biodegradable additives research",
      "Barrier property optimization",
      "Recyclability testing",
      "Custom formulation development",
    ],
    image: "/water-bottle.jpg",
  },
];

const sustainability = [
  {
    icon: Recycle,
    title: "Circular Economy",
    description:
      "Implementing closed-loop recycling systems and designing for recyclability.",
    percentage: 95,
    metrics: [
      { label: "Recyclable Materials", value: "95%" },
      { label: "Waste Reduction", value: "80%" },
      { label: "Energy Recovery", value: "90%" },
    ],
  },
  {
    icon: Leaf,
    title: "Bio-based Materials",
    description:
      "Developing and incorporating renewable bio-based polymers in our products.",
    percentage: 75,
    metrics: [
      { label: "Bio Content", value: "30%" },
      { label: "Carbon Reduction", value: "45%" },
      { label: "Renewable Sources", value: "60%" },
    ],
  },
  {
    icon: Zap,
    title: "Clean Energy",
    description:
      "Transitioning to renewable energy sources for sustainable manufacturing.",
    percentage: 85,
    metrics: [
      { label: "Solar Power", value: "70%" },
      { label: "Energy Efficiency", value: "40%" },
      { label: "Carbon Neutral Goal", value: "2030" },
    ],
  },
];

const certifications = [
  { name: "ISO 9001:2015", category: "Quality Management" },
  { name: "ISO 14001:2015", category: "Environmental Management" },
  { name: "HACCP", category: "Food Safety" },
  { name: "FDA Approved", category: "Food Contact" },
  { name: "EU Regulation", category: "Food Contact Materials" },
  { name: "BRC Packaging", category: "Global Standard" },
];

const innovations = [
  {
    title: "Smart Packaging Solutions",
    description:
      "Developing intelligent packaging with embedded sensors for freshness monitoring.",
    status: "In Development",
    timeline: "2025-2026",
  },
  {
    title: "Nano-barrier Technology",
    description:
      "Ultra-thin barrier coatings providing superior protection with minimal material use.",
    status: "Pilot Testing",
    timeline: "2025",
  },
  {
    title: "Compostable Films",
    description:
      "Fully compostable packaging films for organic waste applications.",
    status: "Commercial Ready",
    timeline: "2025",
  },
  {
    title: "Carbon-negative Materials",
    description:
      "Materials that actively remove CO2 from the atmosphere during production.",
    status: "Research Phase",
    timeline: "2026-2027",
  },
];

export default function Technology() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });
  const [techRef, techInView] = useInView({ threshold: 0.1 });
  const [sustainabilityRef, sustainabilityInView] = useInView({
    threshold: 0.2,
  });
  const [innovationsRef, innovationsInView] = useInView({ threshold: 0.2 });

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section
        ref={headerRef}
        className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-2">
              <Settings className="w-4 h-4 mr-2" />
              Advanced Manufacturing
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Technology & Innovation
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Cutting-edge technology meets sustainable innovation. Discover how
              we're revolutionizing plastic packaging through advanced
              manufacturing processes and environmental stewardship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ... deine anderen Sections bleiben unverändert ... */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Partner with Innovation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the future of sustainable packaging. Let our technology
              and expertise help you achieve your sustainability and quality
              goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
              >
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
