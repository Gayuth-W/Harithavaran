export const stages = [
  // -------- Stage 1 --------
  {
    id: 1,
    intro: [
      "🌍🌊 ECO QUEST – DAY 1 AT THE VILLAGE 🌊🌍\n\n",
      "You arrive at the coastal village where the beach is buried under plastic waste 🧴🛍️.\n",
      "Fishermen complain that fish numbers have dropped drastically 🎣📉.\n",
      "The air smells of burning trash 🔥🗑️.\n\n",
      "Your pollution meter reads at: ${score}%🔥.\n\n",
      "The villagers look at you with hope… 👀✨\n",
      "What will you do?\n"
    ],
    outcomes: [
      { keywords: ["talk", "ask", "listen"], score: -4, text: ["🗣️ You talk to the villagers, learning about the sources of waste 🧃.\n💡 Awareness increases.\n"] },
      { keywords: ["clean", "help", "collect"], score: -8, text: ["🧹 You start cleaning the beach. Others join you! 🌟 Community morale rises.\n"] },
      { keywords: ["ignore", "leave"], score: 0, text: ["🚶 You leave the beach as it is. The problem persists ⚠️.\n"] }
    ],
    fallback: { score: 2, text: ["🤔 You hesitate, unsure of what to do. Nothing changes yet.\n"] }
  },

  // -------- Stage 2 --------
  {
    id: 2,
    intro: [
      "🌍🌊 ECO QUEST – DAY 2 AT THE VILLAGE 🌊🌍\n\n",
      "You return to the beach. Some villagers have started collecting trash, but the problem is still huge 🧴🛍️.\n",
      "The smell of burning waste is worse than yesterday 🔥🗑️.\n\n",
      "Your pollution meter reads at: ${score}%🔥.\n\n",
      "Villagers are looking at you for guidance again 👀✨\n",
      "What action will you take now?\n"
    ],
    outcomes: [
      { keywords: ["organize", "event", "clean"], score: -6, text: ["🤝 You organize a beach clean-up drive. More people join and progress is visible 🌟.\n"] },
      { keywords: ["educate", "teach"], score: -5, text: ["📢 You educate villagers on recycling. Awareness slowly spreads 💡.\n"] },
      { keywords: ["ignore", "leave"], score: -0, text: ["🚶 You ignore it. Pollution increases slightly ⚠️.\n"] }
    ],
    fallback: { score: 2, text: ["🤔 You hesitate again. No new action is taken.\n"] }
  },

  // -------- Stage 3 --------
  {
    id: 3,
    intro: [
      "🌍🌊 ECO QUEST – DAY 3 AT THE VILLAGE 🌊🌍\n\n",
      "The beach looks slightly cleaner, but plastic is still everywhere 🧴🛍️.\n",
      "Villagers have started caring, but you notice some new waste has arrived 🔥🗑️.\n\n",
      "Your pollution meter reads at: ${score}%🔥.\n\n",
      "What is your next step?\n"
    ],
    outcomes: [
      { keywords: ["fundraise", "donate"], score: -7, text: ["💰 You raise funds and provide bins and tools. Villagers can now clean more efficiently 🌟.\n"] },
      { keywords: ["teach", "workshop"], score: -6, text: ["📚 You run workshops on reducing waste. Practices start changing 💡.\n"] },
      { keywords: ["ignore", "leave"], score: -0, text: ["🚶 You do nothing. Waste piles up again ⚠️.\n"] }
    ],
    fallback: { score: 2, text: ["🤔 You hesitate again. Progress stalls.\n"] }
  },

  // -------- Stage 4 --------
  {
    id: 4,
    intro: [
      "🌍🌊 ECO QUEST – DAY 4 AT THE VILLAGE 🌊🌍\n\n",
      "The beach is now showing real improvement! Villagers are actively collecting waste 🧹.\n",
      "Some plastic remains, but the community spirit is high 🌟.\n\n",
      "Your pollution meter reads at: ${score}%🔥.\n\n",
      "Final push! What will you do?\n"
    ],
    outcomes: [
      { keywords: ["celebrate", "event"], score: -8, text: ["🎉 You organize a community celebration to reward efforts. Morale skyrockets 🌟.\n"] },
      { keywords: ["teach", "campaign"], score: -7, text: ["📢 You launch a final awareness campaign. Villagers commit to keeping the beach clean 💡.\n"] },
      { keywords: ["ignore", "leave"], score: -0, text: ["🚶 You do nothing. Some trash remains, but villagers try their best ⚠️.\n"] }
    ],
    fallback: { score: 2, text: ["🤔 You hesitate. The beach improves slightly, but more effort is needed.\n"] }
  }
];
