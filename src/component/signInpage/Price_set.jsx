import React, { useState } from "react";
import { Check } from "lucide-react";

const Price_set = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingPlan = [
    {
      name: "Free",
      monthlyPrice: "$0",
      annualPrice: "$0",
      description: "Perfect for individuals starting their journey",
      features: [
        "Real-time code suggestions",
        "Basic integration logos",
        "Single MCP server connection",
        "Up to 2 AI coding agents",
        "Vercel deployments with pointer",
      ],
      buttonText: "Get Started",
      buttonClass:
        "bg-zinc-300 shadow hover:bg-zinc-400 transition text-gray-800 ",
    },
    {
      name: "Pro",
      monthlyPrice: "$20",
      annualPrice: "$16",
      description: "Ideal for professionals",
      features: [
        "Enhanced real-time previews",
        "Unlimited integrations with custom logos",
        "Multiple MCP server connections",
        "Up to 10 concurrent AI coding agents",
        "Collaborative coding with team chat",
        "Advanced version control integrations",
        "Priority email and chat support",
      ],
      buttonText: "Join Now",
      buttonClass:
        "bg-black text-teal-200 shadow hover:bg-white-foreground/90 transition",
      popular: true,
    },
    {
      name: "Ultra",
      monthlyPrice: "$200",
      annualPrice: "$160",
      description: "Tailored solutions for teams",
      features: [
        "Dedicated account support",
        "Unlimited MCP server clusters",
        "Unlimited AI coding agents",
        "Enterprise-grade security and compliance",
        "Priority deployments and SLA guarantees",
      ],
      buttonText: "Talk to Sales",
      buttonClass:
        "bg-zinc-300 shadow hover:bg-zinc-400 transition text-gray-800",
    },
  ];

  return (
    <section className="w-full px-5 flex flex-col justify-start items-center py-8 md:py-14">
      {/* Header */}
      <div className="text-center max-w-2xl">
        <h2 className="text-foreground text-3xl md:text-3xl font-semibold leading-tight">
          Pricing built for every developer
        </h2>
        <p className="mt-3 text-muted-foreground text-sm md:text-base font-medium leading-tight">
          Choose a plan that fits your coding workflow, from individuals
          starting out to growing professionals and large organizations.
        </p>
      </div>

      {/* Toggle */}
      <div className="pt-6">
        <div className="p-0.5 bg-muted rounded-lg outline outline-1 outline-[#0307120a] flex gap-1">
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-3 py-1 rounded-md transition ${
              isAnnual ? "bg-green-500 text-red-500" : "text-blue-400"
            }`}
          >
            Annually
          </button>
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-3 py-1 rounded-md transition ${
              !isAnnual ? "bg-green-500 text-red-500" : "text-blue-400"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-3 w-full px-10 ">
        {pricingPlan.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col p-10 rounded-xl transition hover:shadow-lg ${
              plan.popular
                ? "bg-teal-200 text-primary-foreground shadow-lg "
                : "bg-black text-white border border-gray-400 "
            }`}
          >
            {/* Title */}
            <div className="flex items-center gap-2 ">
              <h3
                className={`text-lg font-semibold ${
                  plan.popular ? "  text-primary-foreground" : "text-white-900"
                }`}
              >
                {plan.name} 
              </h3>
              {plan.popular && (
                <span className=" px-2 py-0.5 text-xs rounded-full bg-white text-primary font-medium">
                  Popular
                </span>
              )}
            </div>

            {/* Price */}
            <div className="mt-4 flex items-end gap-2">
              <span className="text-3xl font-bold">
                {isAnnual ? plan.annualPrice : plan.monthlyPrice}
              </span>
              <span className="text-sm opacity-70">/month</span>
            </div>

            {/* Description */}
            <p className="mt-2 text-sm opacity-80">{plan.description}</p>

            {/* Button */}
            <button
              className={`mt-6 w-full py-2  rounded-full text-center ${plan.buttonClass}`}
            >
              {plan.buttonText}
            </button>

            {/* Features */}
            <ul className="mt-6 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check
                    className={`w-4 h-4 ${
                      plan.popular ? "text-primary-foreground" : "text-gray-500"
                    }`}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Price_set;
