import { v4 as uuidv4 } from "uuid";

export const activeIssues = [
  {
    id: uuidv4(),
    title: "CLA-123",
    order: 0,
    summary: "This is the issue about making the header blue",
    groups: [
      {
        title: "Do Next",
        icon: "🔴",
        items: [
          { id: "abc", title: "get an answer about analytics event" },
          { id: "def", title: "which PR do we release first" }
        ]
      },
      {
        title: "ToDo",
        icon: "🔴",
        items: [
          { id: "abc", title: "get an answer about analytics event" },
          { id: "def", title: "which PR do we release first" }
        ]
      },
      {
        title: "Clean up",
        icon: "⚠️",
        items: [
          { id: "abc", title: "get an answer about analytics event" },
          { id: "def", title: "which PR do we release first" }
        ]
      },
      {
        title: "Design Review Items",
        icon: "⚠️",
        items: [
          { id: "abc", title: "get an answer about analytics event" },
          { id: "def", title: "which PR do we release first" }
        ]
      },
      {
        title: "Done",
        icon: "✅",
        items: [
          { id: "abc", title: "get an answer about analytics event" },
          { id: "def", title: "which PR do we release first" }
        ]
      },
      {
        title: "TO PUT on the Pull Request",
        icon: "🔴",
        items: [
          { id: "abc", title: "get an answer about analytics event" },
          { id: "def", title: "which PR do we release first" }
        ]
      },
      {
        title: "Have PUT on the Pull Request",
        icon: "✅",
        items: [
          { id: "abc", title: "get an answer about analytics event" },
          { id: "def", title: "which PR do we release first" }
        ]
      },
      {
        title: "Future ideas (within the domain of this issue)",
        icon: "💡",
        items: [
          { id: "abc", title: "get an answer about analytics event" },
          { id: "def", title: "which PR do we release first" }
        ]
      },
      {
        title: "Related Notes",
        icon: "💡",
        items: [
          { id: "abc", title: "get an answer about analytics event" },
          { id: "def", title: "which PR do we release first" }
        ]
      },
      {
        title: "Unrelated Notes",
        icon: "💡",
        items: [
          { id: "abc", title: "get an answer about analytics event" },
          { id: "def", title: "which PR do we release first" }
        ]
      }
    ]
  },
  {
    id: uuidv4(),
    title: "CLA-456",
    order: 1,
    summary: "This is the issue about making the header red again.",
    groups: []
  }
];
