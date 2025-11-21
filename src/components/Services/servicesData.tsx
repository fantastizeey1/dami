import { Mail, Magnet, LineChart } from "lucide-react";
import { Service } from "./ServiceCards";

export const servicesData: Service[] = [
  {
    title: "Email Copywriting",
    description:
      "We use words to power your business through email copy. With this service, you can rest easy knowing that your copywriting is covered, ready to generate more income.",
    Icon: Mail,
    image:
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Lead Magnet Creation",
    description:
      "To attract subscribers, we will create the right kind of lead magnet for your small business. We ensure that your lead magnet is irresistible to your audience.",
    Icon: Magnet,
    image: "/meeting2.jpg", // Assuming this is in the public folder
  },
  {
    title: "Email Marketing & Execution",
    description:
      "We create a strategy based on your needs including email templates, copywriting, delivery and tracking.",
    Icon: LineChart,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
  },
];
