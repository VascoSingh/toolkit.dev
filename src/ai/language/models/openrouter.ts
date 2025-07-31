import {
  LanguageModelCapability,
  type LanguageModel,
} from "@/ai/language/types";

const openRouterModelData: Omit<LanguageModel, "provider">[] = [
  {
    name: "Auto (Best Model)",
    modelId: "auto",
    description:
      "Automatically selects the best model for your task using NotDiamond, with access to all model capabilities",
    capabilities: [
      LanguageModelCapability.Vision,
      LanguageModelCapability.WebSearch,
      LanguageModelCapability.Reasoning,
      LanguageModelCapability.Pdf,
      LanguageModelCapability.ToolCalling,
    ],
    bestFor: [
      "Automatic model selection",
      "Optimal performance",
      "Dynamic routing",
      "Multi-capability tasks",
    ],
    contextLength: 200000, // Using a high value since it can route to models with large context
    isNew: true,
  },
];

export const openRouterModels: LanguageModel[] = openRouterModelData.map(
  (model) => ({
    ...model,
    provider: "openrouter", // This matches the icon filename in public/icons/openrouter.png
  }),
);
