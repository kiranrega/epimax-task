export const COLUMN_OPTIONS = [
  { value: "", label: "Select Status", isDisabled: true },
  { value: "pending", label: "Pending" },
  { value: "todo", label: "TODO" },
  { value: "doing", label: "In Progress" },
  { value: "done", label: "Complete" },
];

export const ASSIGNEE_OPTIONS = [
  { value: "", label: "Select an assignee", isDisabled: true },
  { value: "john", label: "John Doe" },
  { value: "jane", label: "Jane Smith" },
  { value: "jane-team", label: "Jane Team" },
];

export const DEFAULT_CARDS = [
  // BACKLOG
  {
    title: "Look into render bug in dashboard",
    id: "1",
    column: "pending",
    assignee: "john",
    description: "Investigate and fix the rendering issue in the dashboard UI.",
  },
  {
    title: "SOX compliance checklist",
    id: "2",
    column: "pending",
    assignee: "jane",
    description:
      "Create a checklist to ensure compliance with SOX regulations.",
  },
  {
    title: "[SPIKE] Migrate to Azure",
    id: "3",
    column: "pending",
    assignee: "john-team",
    description:
      "Conduct a spike to evaluate the feasibility and process of migrating to Azure cloud platform.",
  },
  {
    title: "Document Notifications service",
    id: "4",
    column: "pending",
    assignee: "john",
    description:
      "Create comprehensive documentation for the Notifications service.",
  },

  // TODO
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "todo",
    assignee: "john",
    description:
      "Explore different database options suitable for the development of a new microservice.",
  },
  {
    title: "Postmortem for outage",
    id: "6",
    column: "todo",
    assignee: "jane",
    description:
      "Conduct a postmortem analysis to understand the causes of the recent outage and propose preventive measures.",
  },
  {
    title: "Sync with product on Q3 roadmap",
    id: "7",
    column: "todo",
    assignee: "jane",
    description:
      "Coordinate with the product team to align on the roadmap for the upcoming quarter.",
  },

  // DOING
  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
    assignee: "john",
    description:
      "Restructure context providers in the codebase to utilize Zustand library for state management.",
  },
  {
    title: "Add logging to daily CRON",
    id: "9",
    column: "doing",
    assignee: "john",
    description:
      "Implement logging functionality to track the execution of daily CRON jobs.",
  },

  // DONE
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "done",
    assignee: "John",
    description:
      "Configure Datadog dashboards to monitor the performance and metrics of Lambda event listeners.",
  },
];
