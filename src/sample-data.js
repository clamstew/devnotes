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
        description: "## Editable markdow \n**Yay!**"
      },
      {
        title: "ToDo",
        icon: "🔴"
      },
      {
        title: "Clean up",
        icon: "⚠️"
      },
      {
        title: "Design Review Items",
        icon: "⚠️"
      },
      {
        title: "Done",
        icon: "✅"
      },
      {
        title: "TO PUT on the Pull Request",
        icon: "🔴"
      },
      {
        title: "Have PUT on the Pull Request",
        icon: "✅"
      },
      {
        title: "Future ideas (within the domain of this issue)",
        icon: "💡"
      },
      {
        title: "Related Notes",
        icon: "💡"
      },
      {
        title: "Unrelated Notes",
        icon: "💡"
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
