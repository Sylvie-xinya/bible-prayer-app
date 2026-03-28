"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import Link from "next/link";
import { Check, X } from "lucide-react";

export default function PricingPage() {
  const { language, t } = useLanguage();

  const plans = [
    {
      name: language === "zh" ? "免费版" : "Free",
      price: "$0",
      period: t("pricing.perMonth"),
      features: [
        { text: t("pricing.features.dailyPrayer"), included: true },
        { text: t("pricing.features.dailyBible"), included: true },
        { text: t("pricing.features.savePrayers"), included: true },
        { text: t("pricing.features.unlimitedPrayers"), included: false },
        { text: t("pricing.features.noAds"), included: false },
        { text: t("pricing.features.advancedBible"), included: false },
      ],
      cta: "current",
      popular: false,
    },
    {
      name: language === "zh" ? "专业版" : "Pro",
      price: "$4.99",
      period: t("pricing.perMonth"),
      features: [
        { text: t("pricing.features.dailyPrayer"), included: true },
        { text: t("pricing.features.dailyBible"), included: true },
        { text: t("pricing.features.savePrayers"), included: true },
        { text: t("pricing.features.unlimitedPrayers"), included: true },
        { text: t("pricing.features.noAds"), included: true },
        { text: t("pricing.features.advancedBible"), included: false },
      ],
      cta: "upgrade",
      popular: true,
    },
    {
      name: language === "zh" ? "高级版" : "Pro+",
      price: "$9.99",
      period: t("pricing.perMonth"),
      features: [
        { text: t("pricing.features.dailyPrayer"), included: true },
        { text: t("pricing.features.dailyBible"), included: true },
        { text: t("pricing.features.savePrayers"), included: true },
        { text: t("pricing.features.unlimitedPrayers"), included: true },
        { text: t("pricing.features.noAds"), included: true },
        { text: t("pricing.features.advancedBible"), included: true },
      ],
      cta: "upgrade",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen px-6 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 标题 */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-amber-800">{t("pricing.title")}</h1>
          <p className="text-stone-500">{t("pricing.subtitle")}</p>
        </div>

        {/* 价格卡片 */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${
                plan.popular ? "border-amber-500 relative" : "border-amber-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {t("pricing.mostPopular")}
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-stone-800">{plan.name}</h3>
                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-amber-700">{plan.price}</span>
                  <span className="text-stone-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check size={18} className="text-green-500" />
                    ) : (
                      <X size={18} className="text-stone-300" />
                    )}
                    <span className={feature.included ? "text-stone-700" : "text-stone-400 text-sm"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-medium transition-all ${
                  plan.cta === "current"
                    ? "bg-stone-100 text-stone-500 cursor-default"
                    : "bg-amber-500 text-white hover:bg-amber-600"
                }`}
                disabled={plan.cta === "current"}
              >
                {plan.cta === "current" ? t("pricing.currentPlan") : t("pricing.upgrade")}
              </button>
            </div>
          ))}
        </div>

        {/* 返回按钮 */}
        <div className="text-center">
          <Link href="/" className="text-amber-600 hover:underline">
            ← {t("history.back")}
          </Link>
        </div>
      </div>
    </div>
  );
}