import { Banknote, DollarSign, Lock, PlayCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does investing in dollars work?",
    answer: "When you invest in dollars, you're converting your local currency into USD and investing in dollar-denominated assets. This helps protect your wealth from local currency fluctuations and provides access to international markets.",
    icon: DollarSign,
  },
  {
    question: "What is the minimum amount required to invest?",
    answer: "We've designed our platform to be accessible to a wide range of investors. The minimum investment amount varies depending on the specific investment product you choose. Contact our team for detailed information.",
    icon: Banknote,
  },
  {
    question: "Is my money safe?",
    answer: "Yes, we prioritize the security of your investments. We work with regulated financial institutions and implement strict security measures to protect your assets. All transactions are monitored and protected.",
    icon: Lock,
  },
  {
    question: "How do I get started?",
    answer: "Getting started is simple. Fill out our initial form, schedule a consultation with our experts, and we'll guide you through the process of setting up your investment account and making your first investment.",
    icon: PlayCircle,
  },
]

export default function FAQSection() {
  return (
    <section className="w-full py-24 bg-background flex items-center justify-center rounded-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="title-font font-bold tracking-tighter">
            Frequently Asked Questions About Our Services
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Find answers to common questions about investing with us
          </p>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => {
              const Icon = faq.icon
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="flex gap-4 text-left">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full p-2 bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-16">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

